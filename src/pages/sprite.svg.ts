import type { APIRoute } from 'astro';
import { optimize } from 'svgo';

// Every icon under src/assets/icons becomes a <symbol> in /sprite.svg, referenced by its file name.
const icons = import.meta.glob<string>('../assets/icons/**/*.svg', { query: '?raw', import: 'default', eager: true });

const toSymbol = (path: string, source: string) => {
    const name = path
        .split('/')
        .pop()!
        .replace(/\.svg$/, '');
    const { data } = optimize(source, {
        multipass: true,
        // Several icons are traced bitmaps with very long paths; one decimal place is plenty at icon sizes.
        floatPrecision: 1,
        // Prefix ids so gradients and clip paths can't collide between symbols.
        plugins: ['preset-default', 'removeDimensions', { name: 'prefixIds', params: { prefix: name } }]
    });

    const [, attributes, body] = data.match(/^<svg([^>]*)>([\s\S]*)<\/svg>$/) ?? [];
    const viewBox = attributes?.match(/viewBox="([^"]+)"/)?.[1];
    if (!viewBox) throw new Error(`Icon ${path} has no viewBox`);

    return `<symbol id="${name}" viewBox="${viewBox}">${body}</symbol>`;
};

export const GET: APIRoute = () => {
    const symbols = Object.entries(icons).map(([path, source]) => toSymbol(path, source));
    return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>`, {
        headers: { 'Content-Type': 'image/svg+xml' }
    });
};
