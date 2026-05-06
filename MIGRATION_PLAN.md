# Figma Make Vite React To Astro Migration Plan

## Goal

Migrate the Figma Make Vite/React app from `C:\Users\chwei\Documents\GitHub\ftfvitereact` into this Astro project while preserving the current design as closely as possible.

The migration should prioritize visual parity first, then gradually integrate the migrated code with the existing Astro theme and components.

## Current Project Shape

Target project:

- Framework: Astro
- Styling: Tailwind CSS 4 via `@tailwindcss/postcss`
- Existing theme: `src/styles/tailwind.css`
- Existing components/layouts:
  - `src/layouts/Layout.astro`
  - `src/layouts/Header.astro`
  - `src/layouts/Navigation.astro`
  - `src/layouts/Footer.astro`
  - `src/components/Button.astro`

Source project:

- Framework: Vite + React
- Styling: Tailwind CSS 4 and Figma-generated CSS
- Routing: `react-router`
- Pages: `src/app/pages/*.tsx`
- Shared React components: `src/app/components/*`
- Figma imports: `src/imports/*`
- Figma assets: `src/assets/*.png`
- Special imports: `figma:asset/...`

## Guiding Principle

Do not refactor heavily during the first migration pass.

The first pass should copy and mount the Figma Make React pages with minimal visual changes. Cleanup should happen only after each page is rendering and has been compared against the original Vite app.

## Recommended Architecture

Astro should remain the main app framework.

React should be used as an island/content layer for the migrated Figma pages.

Recommended folder structure:

```text
src/
  react/
    figma/
      components/
      imports/
      pages/
  assets/
    figma/
```

This keeps generated Figma Make code separate from hand-authored Astro layouts, components, and theme files.

## Phase 1: Prepare Astro For React

1. Install React support:

   ```bash
   npm install @astrojs/react react react-dom
   ```

2. Update `astro.config.mjs`:

   - Add the React integration.
   - Keep the existing Astro setup intact.

3. Confirm the project still builds:

   ```bash
   npm run build
   ```

Acceptance criteria:

- Astro build succeeds.
- Existing pages still render.
- Existing theme and `Button.astro` are unchanged.

## Phase 2: Copy Figma Make Code Into Isolation

Copy source app files into the Astro project:

```text
C:\Users\chwei\Documents\GitHub\ftfvitereact\src\app\pages
  -> src/react/figma/pages

C:\Users\chwei\Documents\GitHub\ftfvitereact\src\app\components
  -> src/react/figma/components

C:\Users\chwei\Documents\GitHub\ftfvitereact\src\imports
  -> src/react/figma/imports

C:\Users\chwei\Documents\GitHub\ftfvitereact\src\assets
  -> src/assets/figma
```

Do not copy `node_modules`, `dist`, or Vite-only app entry files unless needed for reference.

Acceptance criteria:

- Source files are present in the Astro project.
- Generated code is isolated under `src/react/figma`.
- Static image assets are available under `src/assets/figma`.

## Phase 3: Resolve Asset Imports

The Figma Make app uses imports like:

```ts
import imgVector from "figma:asset/example.png";
```

Astro will not resolve those automatically.

Preferred fix:

```ts
import imgVector from "../../../assets/figma/example.png";
```

Alternative:

- Add a small resolver plugin to `astro.config.mjs` that maps `figma:asset/*` to `src/assets/figma/*`.

Preferred approach is rewriting imports because it removes the Figma-specific build convention from the final app.

Acceptance criteria:

- No unresolved `figma:asset/*` imports remain, or the resolver is explicitly configured.
- Images render in migrated pages.
- `npm run build` does not fail on asset resolution.

## Phase 4: Align Routes

Keep the Astro routes as canonical.

| Existing Astro Route | Figma React Route | Migrated Component |
| --- | --- | --- |
| `/` | `/` | `Home` |
| `/kenyan-buyers` | `/kenyan-buyers` | `KenyanBuyers` |
| `/global-buys` | `/global-buyers` | `GlobalBuyers` |
| `/sell-with-us` | `/sell` | `SellWithUs` |
| `/our-impact` | `/impact` | `Impact` |
| `/our-story` | `/our-story` | `OurStory` |
| `/our-team` | `/our-team` | `OurTeam` |
| `/news-events` | `/news-and-events` | `NewsAndEvents` |
| `/contact-us` | `/contact` | `ContactUs` |
| `/faqs` | `/faqs` | `FAQs` |
| `/careers` | none | Keep Astro placeholder for now |

Update migrated React links to match Astro URLs:

- `/impact` -> `/our-impact`
- `/sell` -> `/sell-with-us`
- `/global-buyers` -> `/global-buys`
- `/news-and-events` -> `/news-events`
- `/contact` -> `/contact-us`

Acceptance criteria:

- Main navigation links go to Astro pages.
- No migrated page depends on `createBrowserRouter`.
- Direct visits to canonical Astro URLs work.

## Phase 5: Mount Migrated Pages In Astro

Replace placeholder Astro page content with React page components.

Example pattern:

```astro
---
import Layout from "../layouts/Layout.astro";
import Home from "../react/figma/pages/Home";
---

<Layout title="Home">
  <Home client:load />
</Layout>
```

Important note:

The generated React pages currently include their own `Header` and `Footer`. During the first pass, keep those intact to preserve the design. Later, decide whether to replace them with the Astro header/footer.

Acceptance criteria:

- Each migrated page renders inside its Astro route.
- Page visual design matches the Vite app before cleanup.
- Header/footer duplication is accepted temporarily for visual parity.

## Phase 6: Theme And Font Parity

The target project already defines Farm to Feed colors and fonts in `src/styles/tailwind.css`.

The Figma app also has:

- `src/styles/index.css`
- `src/styles/theme.css`
- `src/styles/tailwind.css`
- `src/styles/fonts.css`
- Google Font imports

Migration approach:

1. Keep the target project's theme as the long-term source of truth.
2. Copy only the Figma CSS required for generated classes to render correctly.
3. Avoid runtime Google Font imports if local `@fontsource` packages cover the same fonts.
4. Preserve visual parity before removing duplicate theme variables.

Acceptance criteria:

- Fraunces and Rubik render correctly.
- Figma-generated Tailwind classes compile.
- Colors match the original design.
- No global CSS change breaks existing Astro components.

## Phase 7: Dependency Review

The Figma app includes many dependencies, including Radix UI, MUI, Motion, Recharts, React Router, shadcn helpers, and more.

Do not bulk-copy all dependencies blindly.

Process:

1. Try building after copying the migrated code.
2. Add only packages that are actually imported by migrated files.
3. Remove or avoid Vite-only dependencies such as `@vitejs/plugin-react`.
4. Prefer not to keep `react-router` once links are converted to normal anchors.

Likely needed early:

- `react`
- `react-dom`
- possibly `lucide-react`
- possibly Radix packages if copied UI primitives are used
- `clsx`
- `tailwind-merge`
- `class-variance-authority`

Acceptance criteria:

- `package.json` contains only dependencies required by the migrated app.
- `npm run build` succeeds.
- No Vite-only runtime assumptions remain.

## Phase 8: Visual Parity Checks

For each page, compare:

- Original Vite app page
- Migrated Astro page

Check at minimum:

- Desktop width around 1440px
- Tablet width around 768px
- Mobile width around 390px

Review:

- Header position and dropdowns
- Footer layout
- Hero spacing
- Font weights and sizes
- Image cropping
- Section heights
- Button styling
- Horizontal overflow
- Mobile stacking
- Broken or missing images

Acceptance criteria:

- No major visual differences from the Figma Make source.
- No unintended horizontal scrolling.
- Text does not overlap or clip on common viewports.
- Images and SVGs load.

## Phase 9: Cleanup After Parity

Only after the migrated design is stable:

1. Replace generated React header/footer with project-level shared components if they can match the design.
2. Convert repeated CTAs to use `Button.astro` or a matching React button.
3. Extract repeated page sections into reusable components.
4. Convert purely static React sections to Astro components where useful.
5. Remove unused copied UI primitives and unused assets.
6. Normalize route/link constants.
7. Remove `react-router` if no longer needed.

Acceptance criteria:

- The site remains visually equivalent after cleanup.
- Shared components reduce duplication without changing design.
- Generated files become smaller and easier to maintain.

## Suggested Implementation Order

1. Add React integration.
2. Copy assets and generated code.
3. Fix asset imports.
4. Mount the home page.
5. Verify home page visually.
6. Migrate remaining pages in this order:
   - `our-impact`
   - `sell-with-us`
   - `kenyan-buyers`
   - `global-buys`
   - `our-story`
   - `our-team`
   - `contact-us`
   - `faqs`
   - `news-events`
7. Fix route links.
8. Run full build.
9. Perform visual review.
10. Start cleanup/refactor pass.

## Key Risks

- Figma-generated absolute positioning may not be responsive enough on mobile.
- Tailwind source scanning may miss copied TSX files unless configured correctly.
- `figma:asset/*` imports will fail unless rewritten or resolved.
- Fonts may look different if Google Fonts and local fontsource load different weights.
- React Router links may not behave correctly inside Astro unless converted.
- Large generated files may be hard to maintain until refactored.

## Definition Of Done

The migration is complete when:

- All source Figma pages render under canonical Astro routes.
- The migrated pages visually match the Vite app within acceptable tolerance.
- `npm run build` succeeds.
- Navigation works without SPA router assumptions.
- Assets load from the Astro project.
- Existing theme and components remain usable.
- Cleanup has removed unnecessary dependencies, duplicate code, and unused generated files where safe.
