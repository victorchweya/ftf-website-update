# Figma Typography Harmonization Plan

## Goal

Create a consistent, shared typography system across all maintained Figma React pages while preserving the Farm to Feed brand feel:

- Fraunces for headings and display moments.
- Rubik for navigation, body copy, captions, labels, buttons, and functional UI.
- A small reusable set of type styles instead of per-section Figma-exported font sizes, weights, line heights, and letter spacing.

This is a typography refactor, not a redesign. The goal is consistency, readability, and maintainability.

## Scope

Primary scope:

```text
src/react/figma/pages
src/react/figma/components
src/react/figma/components/layout
src/styles/tailwind.css
```

Lower priority:

```text
src/pages
src/layouts
src/components
```

Out of scope for the first implementation pass:

```text
src/react/figma/imports
src/react/figma/components/ui
```

The `imports` folder is generated/reference code. The `components/ui` folder looks like shadcn-style primitives and should keep its own utility-component conventions unless a real rendered page uses it directly in a typography-heavy way.

## Current Audit Summary

The pages already use shared font families, but type scale and weights are inconsistent.

Common patterns found:

- Display/hero headings:
  - `text-4xl md:text-5xl lg:text-6xl`
  - `text-5xl md:text-6xl lg:text-7xl`
  - `text-[36px] md:text-[48px] lg:text-[56px]`
  - `text-[40px] md:text-[56px]`
  - `text-[32px] md:text-[40px] lg:text-[48px]`

- Body/introduction copy:
  - `text-base`
  - `text-lg`
  - `text-xl`
  - `leading-copy`
  - many page-local tracking values such as `tracking-[0.48px]`, `tracking-[0.6px]`, and `tracking-[0.54px]`

- Section/card headings:
  - `text-2xl`
  - `text-[22px]`
  - `text-[24px]`
  - `text-[32px]`
  - `text-[40px]`
  - `text-[48px]`

- Weights:
  - Fraunces headings are mostly `font-normal`, sometimes `font-medium`.
  - Rubik body copy is mostly `font-normal`.
  - Eyebrows, labels, and contact items use `font-medium`.
  - Footer uses `font-light` for supporting text.

- Shared typography helpers exist but are incomplete:
  - `SectionHeader.tsx`
  - line-height tokens in `tailwind.css`: `leading-copy`, `leading-zero`, `leading-display`, `leading-heading`, `leading-callout`, `leading-contact`

## Typography Decision

Use Tailwind theme tokens for reusable type scale, line height, and tracking, then expose them through small semantic class constants/components.

Do not create a giant generic typography component that hides layout. Prefer:

1. Theme tokens in `tailwind.css`.
2. Small class constants in a shared `typography.ts`.
3. `SectionHeader` for recurring section title blocks.
4. Page-local class constants only where a page has unusual display treatment.

## Proposed Type Scale

Add named text tokens in `src/styles/tailwind.css`.

| Token | Size | Use |
| --- | ---: | --- |
| `text-ui-xs` | `12px` | tiny controls, map labels only if needed |
| `text-caption` | `14px` | dates, metadata, small labels |
| `text-body` | `16px` | default paragraph, nav, buttons |
| `text-body-lg` | `18px` | intro copy and larger paragraph copy |
| `text-body-xl` | `20px` | hero supporting text, large CTAs |
| `text-card-title` | `22px` | compact card titles where `24px` is too large |
| `text-subtitle` | `24px` | card headings, feature headings |
| `text-section-sm` | `32px` | smaller section titles |
| `text-section` | `40px` | default section titles |
| `text-section-lg` | `48px` | high-emphasis section titles |
| `text-display` | `56px` | desktop page hero title |
| `text-display-lg` | `64px` | high-impact hero/stat title |
| `text-display-xl` | `72px` | home-only or campaign hero title |

Responsive usage should be standardized through class constants rather than hand-authored everywhere.

## Proposed Tracking Tokens

The pages currently use many Figma-exported letter-spacing values. Convert them into named tokens before replacing usages.

| Token | Value | Use |
| --- | ---: | --- |
| `tracking-body` | `0.48px` | body copy and buttons currently exported from Figma |
| `tracking-body-lg` | `0.6px` | large body / intro copy |
| `tracking-caption` | `0.42px` | captions and small labels |
| `tracking-card` | `0.72px` | card titles |
| `tracking-section` | `1.2px` | 40px section headings |
| `tracking-section-lg` | `1.44px` | 48px section headings |
| `tracking-display` | `1.68px` | 56px display headings |
| `tracking-display-lg` | `1.92px` | 64px stats or hero headings |

After these tokens exist, no maintained page should use `tracking-[...]`.

## Semantic Typography Classes

Create:

```text
src/react/figma/components/layout/typography.ts
```

Suggested exports:

```ts
export const typeStyles = {
  eyebrow: "...",
  nav: "...",
  button: "...",
  body: "...",
  bodyLarge: "...",
  bodyLead: "...",
  cardTitle: "...",
  featureTitle: "...",
  sectionTitle: "...",
  sectionTitleLarge: "...",
  heroTitle: "...",
  heroTitleLarge: "...",
  statValue: "...",
  caption: "...",
};
```

Initial class definitions:

| Style | Class direction |
| --- | --- |
| `eyebrow` | `font-sans text-caption font-medium leading-normal tracking-body text-olive-500` |
| `nav` | `font-sans text-body font-normal leading-6` |
| `button` | `font-sans text-body font-normal leading-copy tracking-body` |
| `body` | `font-sans text-body font-normal leading-copy tracking-body` |
| `bodyLarge` | `font-sans text-body-lg font-normal leading-copy tracking-body-lg` |
| `bodyLead` | `font-sans text-body-xl font-normal leading-copy tracking-body-lg` |
| `cardTitle` | `font-serif text-subtitle font-normal leading-normal tracking-card` |
| `featureTitle` | `font-serif text-section-sm font-normal leading-heading tracking-section` |
| `sectionTitle` | `font-serif text-section-sm md:text-section font-normal leading-heading tracking-section` |
| `sectionTitleLarge` | `font-serif text-section md:text-section-lg font-normal leading-heading tracking-section-lg` |
| `heroTitle` | `font-serif text-4xl md:text-5xl lg:text-display font-normal leading-tight tracking-display` |
| `heroTitleLarge` | `font-serif text-5xl md:text-display lg:text-display-lg font-normal leading-tight tracking-display-lg` |
| `statValue` | `font-serif text-5xl md:text-display-lg font-normal leading-normal tracking-display-lg` |
| `caption` | `font-sans text-caption font-medium leading-normal tracking-caption` |

These are starting points. Adjust the exact token names and values during implementation if the codebase reveals better names.

## Component Changes

### 1. Update `SectionHeader`

File:

```text
src/react/figma/components/layout/SectionHeader.tsx
```

Change it to use `typeStyles`:

- Eyebrow: `typeStyles.eyebrow`
- Title: configurable between `sectionTitle`, `sectionTitleLarge`, and `heroTitle`
- Description: `typeStyles.bodyLead` or `typeStyles.bodyLarge`

Add optional props:

```ts
titleSize?: "section" | "large" | "hero";
descriptionSize?: "body" | "large" | "lead";
```

Acceptance criteria:

- Existing call sites keep the current look by default.
- New sections can use the shared hierarchy without rewriting long class strings.

### 2. Update Header Typography

File:

```text
src/react/figma/components/Header.tsx
```

Replace local nav/button type constants with `typeStyles.nav` and `typeStyles.button`.

Acceptance criteria:

- Header nav and dropdown typography use the same shared source.
- CTA button text matches other CTA text.

### 3. Update Footer Typography

File:

```text
src/react/figma/components/Footer.tsx
```

Replace local footer heading/copy/link/action text constants with shared styles:

- Footer group headings: `typeStyles.bodyLead` or dedicated `footerHeading`
- Footer copy/contact: `typeStyles.body`
- Footer links/actions: `typeStyles.button`
- Footer tagline: `typeStyles.sectionTitleLarge` or dedicated `footerTagline`

Acceptance criteria:

- Footer still keeps its color treatment.
- Typography rhythm matches Header and page CTAs.

## Page Implementation Order

Implement page by page, starting with simpler pages and shared patterns.

1. Shared foundation:
   - `tailwind.css`
   - `typography.ts`
   - `SectionHeader.tsx`
   - `Header.tsx`
   - `Footer.tsx`

2. Small pages:
   - `Careers.tsx`
   - `NewsAndEvents.tsx`
   - `FAQs.tsx`
   - `ContactUs.tsx`

3. Medium story/brand pages:
   - `OurTeam.tsx`
   - `OurStory.tsx`
   - `Impact.tsx`

4. Large conversion pages:
   - `SellWithUs.tsx`
   - `KenyanBuyers.tsx`
   - `GlobalBuyers.tsx`

5. Reference/home polish:
   - `Home.tsx`

Home should be last because it has the most distinctive hero/stat typography and should set the final exception rules rather than be flattened too early.

## Replacement Rules

### Hero Headings

Preferred:

```tsx
className={typeStyles.heroTitle}
```

Use `heroTitleLarge` only for home or campaign-scale heroes.

Avoid page-local combinations like:

```tsx
font-serif text-[36px] md:text-[48px] lg:text-[56px] tracking-[1.68px]
```

### Section Titles

Preferred:

```tsx
className={typeStyles.sectionTitle}
```

For darker CTA bands or key conversion sections:

```tsx
className={typeStyles.sectionTitleLarge}
```

### Card Titles

Preferred:

```tsx
className={typeStyles.cardTitle}
```

If a card title must be smaller, add a separate `cardTitleSmall` rather than ad hoc `text-[22px]`.

### Body Copy

Preferred:

```tsx
className={typeStyles.body}
className={typeStyles.bodyLarge}
className={typeStyles.bodyLead}
```

Use `bodyLead` for hero descriptions and CTA copy, not normal cards.

### Eyebrows And Labels

Preferred:

```tsx
className={typeStyles.eyebrow}
className={typeStyles.caption}
```

Avoid raw `text-base tracking-[0.48px]` for labels unless it is truly body copy.

### Buttons And Pills

Preferred:

```tsx
className={typeStyles.button}
```

Button color, spacing, border radius, and layout should remain in button/link components or local wrapper classes.

## Handling Exceptions

Some typography should remain intentionally special:

- Home hero headline can use `heroTitleLarge`.
- Stat values can use `statValue`.
- Map mockup labels can keep Roboto and tiny absolute-positioned text until a map-specific cleanup pass.
- Decorative SVG text, if any, should not be pulled into the typography system.
- `text-[0px]` wrappers with child spans are Figma artifacts; convert only when the underlying span layout is understood.

Every exception should be either:

1. Converted to a named token/style, or
2. Left with a short comment if it is too risky to touch in the current pass.

## Acceptance Criteria

Foundation is done when:

- `tailwind.css` has named text and tracking tokens.
- `typography.ts` exists and exports shared semantic type styles.
- `SectionHeader`, `Header`, and `Footer` use shared type styles.
- Build passes.

Page cleanup is done when:

- Maintained page files mostly use `typeStyles` or `SectionHeader` for recurring text styles.
- No maintained page uses `tracking-[...]` for normal text.
- Repeated page-local heading/body/button class strings are gone.
- Hero, section, card, body, caption, and button styles are predictable across pages.
- Exceptions are documented.
- Build passes after each page group.

Final audit should target:

```bash
rg -n "tracking-\[[^\]]+\]|text-\[[^\]]+\]|font-serif .*text-|font-sans .*text-" src/react/figma/pages src/react/figma/components src/react/figma/components/layout
npm run build
```

The audit does not need to be zero because some exact display sizes or map labels may remain, but each remaining match should be intentional.

## Risks

- Over-flattening typography can weaken the designed hierarchy.
- Replacing section headings globally without checking context can make CTA bands, cards, and hero sections feel too similar.
- `text-[0px]` wrappers and span-based text blocks may depend on generated layout structure.
- Some page sections use large typography as part of the composition, not just text styling.

## Recommended First Implementation Slice

1. Add theme text and tracking tokens.
2. Add `typography.ts`.
3. Update `SectionHeader`, `Header`, and `Footer`.
4. Update `Careers.tsx` and `NewsAndEvents.tsx` as pilot pages.
5. Build.
6. Review the pilot pages before migrating the larger pages.

This creates a working pattern without immediately touching the highest-risk, illustration-heavy pages.

## Execution Log

Implemented:

- Added named text-scale tokens and tracking tokens in `src/styles/tailwind.css`.
- Added shared semantic type classes in `src/react/figma/components/layout/typography.ts`.
- Updated `SectionHeader`, `Header`, and `Footer` to use shared type styles.
- Updated `Careers.tsx` and `NewsAndEvents.tsx` as direct pilot pages for the shared typography helpers.
- Normalized maintained Figma page/component typography to named `text-*` and `tracking-*` tokens where the replacement was mechanical and low-risk.
- Removed all normal-text `tracking-[...]` usage from the maintained Figma page/component scope.
- Expanded the shared typography migration across `FAQs.tsx`, `ContactUs.tsx`, `OurTeam.tsx`, `OurStory.tsx`, `Impact.tsx`, `SellWithUs.tsx`, `KenyanBuyers.tsx`, `GlobalBuyers.tsx`, and `Home.tsx`.
- Added `typeStyles.serifLead` for intentional small Fraunces lead/subhead moments.
- Replaced recurring page-local hero, section, card, body, caption, button, and number-badge class strings with shared `typeStyles` references.

Intentional exceptions:

- Tiny Roboto map labels in `ContactUs.tsx` and `KenyanBuyers.tsx` still use `text-[11px]` because they are absolute-positioned mockup labels.
- Generated span-wrapper blocks in `OurTeam.tsx` and `KenyanBuyers.tsx` still use `text-[0px]`; these should only be changed during a visual review pass.
- `src/react/figma/components/ui/calendar.tsx` still has `text-[0.8rem]`; that file is a UI primitive outside the maintained Figma page cleanup scope.

Final audit commands:

```bash
rg "tracking-\[[^\]]+\]" src/react/figma/pages src/react/figma/components src/react/figma/components/layout
rg "text-\[(?:[0-9]|0\.)[^\]]+\]" src/react/figma/pages src/react/figma/components src/react/figma/components/layout
npm run build
```
