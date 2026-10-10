import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://toohey.dev',
    integrations: [sitemap()],
    fonts: [
        {
            // Self-hosted from the npm package (pinned in the lockfile). Only the Latin file is used: with the whole
            // package, Astro preloads every subset and derives fallback metrics from the wrong file.
            provider: fontProviders.local(),
            options: {
                variants: [
                    {
                        src: ['@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2'],
                        weight: '300 700',
                        style: 'normal'
                    }
                ]
            },
            name: 'Space Grotesk',
            cssVariable: '--font-display',
            fallbacks: ['sans-serif']
        }
    ]
});
