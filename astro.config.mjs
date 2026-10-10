import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://toohey.dev',
    integrations: [sitemap()],
    vite: {
        css: {
            preprocessorOptions: {
                // TODO: migrate the SCSS from @import to @use, then remove this.
                scss: { silenceDeprecations: ['import'] }
            }
        }
    }
});
