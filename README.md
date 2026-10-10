# My Website

My personal website, built with [Astro](https://astro.build) as a static site with no client-side framework.

### Local development

| Package | Version |
| ------- | ------- |
| `node`  | 24      |

The Node version is pinned in `.nvmrc`.

| Command           | Does                                  |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server at http://localhost:4321   |
| `npm run build`   | Build the site to `dist/`             |
| `npm run preview` | Serve the built site locally          |
| `npm run check`   | Type-check `.astro` and `.ts` files   |
| `npm run lint`    | ESLint, including accessibility rules |
| `npm run format`  | Format with Prettier                  |

Icons live in `src/assets/icons/` and are combined into `/sprite.svg` at build time; use them with `<Icon name="file-name" />`.

### Publishing

Every push to `main` is built and deployed to GitHub Pages by the [Build and deploy](.github/workflows/deploy.yml) workflow. Pull requests are linted, format-checked, type-checked and built, but not deployed. Dependabot opens grouped weekly update PRs. The custom domain is set in the repo's Pages settings.

### TODO

#### Must:

- [ ] Refresh the site content to match my current skills and experience. Most of it dates from 2020–2022:
    - About: the summary and "Software Passions".
    - Personal Tech Stacks: which technologies are listed and their descriptions (several reference roles and dates that have moved on).
    - Recent Projects: the projects themselves and their write-ups (e.g. Lumos Mobile still says it "will be going into production … in 2022").
- [ ] Delete the `master` branch once Actions deploys have been stable for a few days (it's archived as the `archive/master` tag).

#### Tech debt:

- [ ] Remove `public/sw.js` (the kill switch for the old Gatsby service worker) a few months after the Astro launch.
- [ ] Bump Node to 26 (`.nvmrc` and `engines` in `package.json`) once it becomes LTS in late October 2026. Dependabot doesn't update these.
- [ ] Upgrade to TypeScript 7 once `@astrojs/check` supports it, then remove the `typescript` ignore rule in `.github/dependabot.yml`.

#### Nice to have:

- [ ] Improve logo asset.
