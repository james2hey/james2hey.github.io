# My Website

My personal website, built with [Astro](https://astro.build) as a static site with no client-side framework.

### Local development

| Package | Version |
| ------- | ------- |
| `node`  | 24      |

The Node version is pinned in `.nvmrc`.

| Command           | Does                                |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Dev server at http://localhost:4321 |
| `npm run build`   | Build the site to `dist/`           |
| `npm run preview` | Serve the built site locally        |
| `npm run check`   | Type-check `.astro` and `.ts` files |
| `npm run format`  | Format with Prettier                |

Icons live in `src/assets/icons/` and are combined into `/sprite.svg` at build time; use them with `<Icon name="file-name" />`.

### Publishing

Every push to `main` is built and deployed to GitHub Pages by the [Build and deploy](.github/workflows/deploy.yml) workflow. Pull requests are type-checked and built but not deployed. The custom domain is set in the repo's Pages settings.

### TODO

#### Must:

- [x] Fix tech stack modal fixed position issue.
- [x] Update projects content.
- [ ] Delete the `master` branch once Actions deploys have been stable for a few days (it's archived as the `archive/master` tag).

#### Tech debt:

- [ ] Remove `public/sw.js` (the kill switch for the old Gatsby service worker) a few months after the Astro launch.
- [ ] Migrate the SCSS from `@import` to `@use`, then drop `silenceDeprecations` in `astro.config.mjs`.
- [ ] Replace the traced React / React Native icons with clean vector logos (they're most of the sprite's size).
- [ ] Set up linting (Biome or ESLint 9) and grouped dependency updates.

#### Nice to have:

- [x] Generate SVG sprites.
- [ ] Animation on landing section.
- [ ] Add "interests" section.
- [x] Modal animation for Personal Tech Stacks.
- [ ] Some cool animation between Personal Tech Stacks and Recent Projects.
- [ ] Improve logo asset.
- [x] Improve markup.
- [ ] Install bem util.
- [ ] Look into dynamic SVG `fill`.
- [ ] Photoshop more images for projects.
- [ ] Theme sprites.
- [ ] Add theme.
