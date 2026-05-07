# Figma Export Page Refactor Plan

## Goal

Turn raw Figma-generated React pages into readable, maintainable frontend code while preserving the current design as closely as possible.

This plan should be applied first to:

```text
src/react/figma/imports/Home/Home.tsx
```

After the Home page cleanup pattern is proven, reuse the same approach for the remaining Figma-exported pages.

## Current Problem

Figma exports React code that is technically valid, but difficult to maintain.

Common issues:

- Too many tiny generated functions such as `Frame18`, `Group22`, `Content7`, and `Order5`.
- Component names describe Figma layers instead of website meaning.
- Repeated cards, buttons, and nav items are copied as separate JSX blocks.
- Layout relies heavily on fixed widths, heights, absolute positioning, and exported coordinates.
- SVGs are embedded inline in large page files.
- Decorative assets are mixed with real content.
- Content is hard to edit because text is scattered across many generated functions.

The goal is not to redesign the site. The goal is to keep the design but make the code feel like normal frontend code.

## Guiding Principle

Refactor one section at a time.

Do not rewrite the full page in one pass unless the page is very small. Keep each change visually reviewable and buildable.

Preferred workflow:

1. Pick one page section.
2. Rename it semantically.
3. Collapse unnecessary generated wrapper functions.
4. Extract repeated content into data arrays.
5. Move reusable SVGs/assets into separate files.
6. Run the build.
7. Visually compare before moving to the next section.

## Target Page Shape

A cleaned page should read like a website page, not like a Figma layer tree.

Recommended shape:

```tsx
export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <StorySection />
      <SupplyChainSection />
      <ImpactSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
```

Meaningful components:

```tsx
function HeroSection() {}
function StorySection() {}
function SupplyChainSection() {}
function ImpactSection() {}
function NewsSection() {}
```

Reusable components only where useful:

```tsx
function PrimaryButton() {}
function SectionHeading() {}
function ImpactCard() {}
function NewsCard() {}
```

Reusable decorative components:

```tsx
BackgroundBottomSvg
DecorativeDivider
FarmIllustration
```

## Naming Rules

Replace generated names with semantic names.

Examples:

| Figma Export Name | Better Name |
| --- | --- |
| `Wireframe` | `SupplyChainSection` or another content-based name |
| `Frame18` | `ImpactSection` |
| `Frame33` | `SupplyChainCta` |
| `Card`, `Card1`, `Card2` | `NewsCard` |
| `Order5`, `Order6` | `PrimaryButton` |
| `Group36`, `Group37` | `SectionWave` or `DecorativeDivider` |
| `Content4` | inline JSX or `SectionHeading` |

Keep generated names only temporarily while actively refactoring.

Acceptance criteria:

- Major sections are named by purpose.
- Reusable components are named by behavior or content type.
- No new component should be named `Frame`, `Group`, `Layer`, or `Content` unless it is still raw export code waiting for cleanup.

## Component Extraction Rules

Use a component when:

- The UI block is reused.
- The block is large enough that a name makes the parent easier to read.
- The block accepts useful props such as `title`, `body`, `href`, `image`, or `fill`.
- The block is a standalone asset or illustration.

Do not create a component for every small wrapper.

Avoid this:

```tsx
function Content7() {
  return <p>Some text</p>;
}
```

Prefer this:

```tsx
function ImpactSection() {
  return (
    <section>
      <p>Some text</p>
    </section>
  );
}
```

Acceptance criteria:

- Parent sections are easy to scan.
- One-off wrappers are usually inline.
- Repeated UI has a reusable component.

## Data Extraction Rules

Repeated content should usually become arrays.

Instead of:

```tsx
<Card />
<Card1 />
<Card2 />
```

Prefer:

```tsx
const newsItems = [
  {
    title: "Article title",
    excerpt: "Short summary",
    image: imgPlaceholderImage,
    href: "/news-events",
  },
];

function NewsSection() {
  return (
    <section>
      {newsItems.map((item) => (
        <NewsCard key={item.title} {...item} />
      ))}
    </section>
  );
}
```

Good candidates for data arrays:

- Navigation links
- Footer links
- Impact cards
- News cards
- CTA lists
- Stats
- Team member cards
- FAQ items

Acceptance criteria:

- Repeated cards/buttons are not manually duplicated.
- Text is easier to find and edit.
- Data is close to the section that uses it unless shared across pages.

## SVG And Asset Rules

Move reusable SVGs out of page files.

Recommended folder:

```text
src/react/figma/imports/<PageName>/
```

Example:

```text
src/react/figma/imports/Home/background-bottom.tsx
```

Preferred SVG component pattern:

```tsx
import type { SVGProps } from "react";

type BackgroundBottomSvgProps = Omit<SVGProps<SVGSVGElement>, "fill"> & {
  fill?: string;
};

export function BackgroundBottomSvg({
  fill = "#DAE2B6",
  ...props
}: BackgroundBottomSvgProps) {
  return (
    <svg viewBox="0 0 1440 103" fill="none" aria-hidden="true" {...props}>
      <path d="..." fill={fill} />
    </svg>
  );
}
```

Usage:

```tsx
<BackgroundBottomSvg
  className="absolute inset-x-0 top-0 w-full pointer-events-none select-none"
  fill="#DAE2B6"
/>
```

Use SVG components when:

- The color needs to change per section.
- The SVG is reused.
- The SVG is decorative and should be easy to position.

Use image imports when:

- The asset is a photo or raster image.
- The SVG does not need dynamic colors.
- The asset is large and not worth inlining.

Acceptance criteria:

- Reusable SVGs are not buried inside large page files.
- Decorative SVGs use `aria-hidden="true"` when they do not communicate content.
- Colors can be changed through props when useful.

## Layout Cleanup Rules

Replace Figma coordinate layout with normal responsive layout where practical.

Prefer:

- `section`
- `main`
- `header`
- `footer`
- `nav`
- `article`
- `ul` / `li` for lists
- flex and grid
- shared `ContentContainer`
- responsive spacing classes

Avoid long-term reliance on:

- fixed `left-[...]` and `top-[...]`
- fixed exported section widths like `w-[1500px]`
- many nested `absolute` wrappers
- hard-coded desktop-only heights unless the design truly requires them

Absolute positioning is acceptable for:

- decorative backgrounds
- large illustrations that intentionally overlap
- SVG flourishes
- controlled hero artwork

Acceptance criteria:

- Main content follows normal document flow where possible.
- Decorative elements are clearly separated from content.
- No unintended horizontal scrolling.
- Layout works at desktop, tablet, and mobile widths.

## Tailwind Cleanup Rules

Prefer semantic Tailwind utilities over generated one-off values when the value is not essential.

Examples:

| Generated Class | Prefer |
| --- | --- |
| `w-[1500px]` for full-width art | `w-full`, `w-screen`, or section-relative sizing |
| `left-[-23px]` for background art | `inset-x-0`, `left-1/2 -translate-x-1/2`, or `overflow-hidden` |
| repeated button classes | `PrimaryButton` component |
| repeated card classes | `Card` component |

Keep arbitrary values when:

- They are needed for close visual parity.
- The value comes from a precise illustration or SVG alignment.
- Changing it would noticeably alter the design.

Acceptance criteria:

- Arbitrary values are intentional, not accidental export leftovers.
- Repeated class strings are reduced through components.
- The page remains visually faithful.

## Accessibility Cleanup Rules

As sections are rewritten, improve semantics without changing design.

Checklist:

- Use one page-level `<main>`.
- Use real headings in order where practical.
- Use `<a>` for links, not clickable `<div>`.
- Use `<button>` for actions that do not navigate.
- Add meaningful `alt` text for content images.
- Use `alt=""` or `aria-hidden="true"` for decorative images/SVGs.
- Avoid text clipping and overlapping on common viewports.

Acceptance criteria:

- Navigation and CTAs are keyboard reachable.
- Decorative assets are hidden from assistive technology.
- Section headings are understandable.

## Recommended Home Refactor Order

Use `Home.tsx` as the first example and refactor in this order:

1. Create or reuse shared primitives:
   - `ContentContainer`
   - `PrimaryButton`
   - `SectionHeading`
   - `BackgroundBottomSvg`

2. Refactor `NewsSection`:
   - Convert `Card`, `Card1`, and `Card2` to `newsItems`.
   - Create one `NewsCard` component.
   - Keep image imports intact.

3. Refactor `ImpactSection`:
   - Rename `Frame18`.
   - Convert `Frame19`, `Frame20`, and `Frame21` into `impactItems`.
   - Use one `ImpactCard` component.
   - Keep decorative wave as `BackgroundBottomSvg`.

4. Refactor middle supply-chain section:
   - Rename `Wireframe`.
   - Rename CTA wrapper to a meaningful name.
   - Move large illustration SVGs to separate files only if reused or too noisy.

5. Refactor story/problem section:
   - Rename section and text blocks.
   - Replace tab/card repetition with data if applicable.
   - Reduce absolute positioning where possible.

6. Refactor hero:
   - Keep the visual design stable.
   - Make nav and CTA semantics clear.
   - Extract repeated nav items to data if not already handled by shared header.

7. Remove unused generated code:
   - Delete old `Frame*`, `Group*`, `Content*` functions after their sections are replaced.
   - Delete unused imports and assets only when confirmed unused.

Acceptance criteria:

- The Home page builds after each step.
- Each refactored section has meaningful component names.
- The visual design remains close to the current page.

## Applying This Plan To Other Pages

For each page:

1. Identify top-level sections.
2. Write the desired final component outline.
3. Refactor one section at a time.
4. Extract repeated blocks into data arrays.
5. Move reusable SVGs into the page import folder.
6. Replace generated names with semantic names.
7. Run build.
8. Compare visually.
9. Delete unused generated code.

Suggested page checklist:

```text
Page:

Top-level sections:
- HeroSection
- MainContentSection
- CTASection
- FAQSection
- Footer

Reusable components:
- PrimaryButton
- SectionHeading
- Card

Data arrays:
- navItems
- cards
- faqs

SVG/components to extract:
- DecorativeWave
- PageIllustration

Build status:
- npm run build passes

Visual review:
- Desktop
- Tablet
- Mobile
```

## Build And Review Process

After each meaningful refactor:

```bash
npm run build
```

Review at minimum:

- Desktop around `1440px`
- Tablet around `768px`
- Mobile around `390px`

Check:

- No unintended horizontal scrolling.
- Text does not overlap.
- Images and SVGs load.
- Decorative backgrounds still span correctly.
- Section spacing still matches the design closely.
- Navigation links still work.

## Key Risks

- Over-cleaning too early can break visual parity.
- Removing absolute positioning from illustration-heavy sections can shift artwork.
- Generated SVG code can be noisy and easy to accidentally alter.
- Shared components can become too generic if created before patterns are clear.
- Unused generated functions may still be referenced indirectly.

## Definition Of Done

A page cleanup is done when:

- The page has meaningful section components.
- Repeated content is data-driven.
- Reusable SVGs/assets are separated from the page file.
- Generated layer names are mostly gone from the maintained code.
- The page builds successfully.
- The visual design still matches the current Figma-exported version closely.
- The page is easier for a React beginner to read and edit.
