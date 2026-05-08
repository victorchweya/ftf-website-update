# Figma Section Spacing Harmonization Plan

## Goal

Make page sections use a consistent vertical rhythm by moving section-level spacing to shared `py-*` classes, while avoiding risky changes to absolute-positioned artwork and generated layout fragments.

This is a spacing refactor, not a redesign. The target is predictable top/bottom padding across pages, fewer one-off `pt-[...]` / `pb-[...]` values, and fewer section wrappers whose height is controlled by fixed or arbitrary `min-h-[...]` values.

## Scope

Primary scope:

```text
src/react/figma/pages
src/react/figma/components/layout/SectionShell.tsx
src/react/figma/components/layout/ContentContainer.tsx
```

Out of scope for the first implementation pass:

```text
src/react/figma/imports
src/react/figma/components/ui
```

Do not normalize inner artwork dimensions such as SVG `h-[...]`, map mockup controls, icon sizes, card media heights, or decorative absolute shapes unless they directly prevent section spacing from working.

## Current Audit Summary

The project already has `SectionShell` and `ContentContainer`, but most page sections still own spacing locally.

Common patterns found:

- Hero sections use large fixed/min heights plus one-off top padding:
  - `min-h-[900px] md:min-h-[1040px] lg:min-h-[1162px]`
  - `min-h-[600px] md:min-h-[800px] lg:min-h-[926px]`
  - `pt-[160px]`, `pt-[180px]`, `pt-[214px]`, `pt-[246px]`, `pt-[282px]`

- Standard content sections use mixed padding:
  - `py-[96px]`
  - `py-[112px]`
  - `py-16 md:py-24 lg:py-28`
  - `pt-[120px] pb-[96px] md:pt-[184px] md:pb-[120px]`
  - `pt-[180px] pb-[120px] md:pt-[220px]`

- CTA/card sections often wrap a fixed-height inner card:
  - outer spacing like `py-[72px] md:pt-[87px] md:pb-[88px]`
  - inner cards like `min-h-[520px]`

- A few sections use fixed/min height as a layout crutch for absolute decorations:
  - Home hero and early home sections.
  - `Impact` large white section with `lg:min-h-[1971px]`.
  - `OurTeam` values/team sections.
  - `KenyanBuyers` and `GlobalBuyers` sections with map/product mockups.

## Spacing System

Add shared section spacing constants instead of spreading raw values across pages.

Recommended file:

```text
src/react/figma/components/layout/spacing.ts
```

Suggested exports:

```ts
export const sectionSpacing = {
  hero: "pt-40 pb-24 md:pt-52 md:pb-32 lg:pt-56 lg:pb-36",
  heroCompact: "pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32",
  default: "py-20 md:py-28 lg:py-32",
  roomy: "py-24 md:py-32 lg:py-36",
  compact: "py-16 md:py-20 lg:py-24",
  cta: "py-18 md:py-24 lg:py-28",
} as const;
```

Tailwind default spacing supports most of these:

- `py-16` = 64px
- `py-20` = 80px
- `py-24` = 96px
- `py-28` = 112px
- `py-32` = 128px
- `py-36` = 144px
- `pt-40` = 160px
- `pt-44` = 176px
- `pt-48` = 192px
- `pt-52` = 208px
- `pt-56` = 224px

Avoid arbitrary section padding like `py-[96px]` when a standard Tailwind spacing class exists.

Note: `py-18` is not a default Tailwind class unless the theme already defines it. Use `py-16 md:py-24 lg:py-28` for CTA if we do not add a custom token.

## Component Plan

### 1. Extend `SectionShell`

Update:

```text
src/react/figma/components/layout/SectionShell.tsx
```

Add optional props:

```ts
spacing?: "none" | "compact" | "default" | "roomy" | "hero" | "heroCompact" | "cta";
containerClassName?: string;
```

Behavior:

- `spacing="default"` should become the normal content section default.
- `spacing="hero"` should be used for page hero sections below the floating header.
- `spacing="none"` should preserve current behavior for unusual sections.
- Keep `className` for background, overflow, rounded corners, and special layout.

Example:

```tsx
<SectionShell
  spacing="hero"
  className="bg-[#fefcf5] rounded-b-[40px]"
  containerClassName="grid gap-12 lg:grid-cols-2"
>
```

### 2. Keep `ContentContainer` Spacing-Neutral

`ContentContainer` should continue to own horizontal constraints and horizontal padding only.

Do not put default `py-*` into `ContentContainer`; otherwise every nested use would inherit unwanted vertical padding.

### 3. Use Section Wrappers For Section Spacing

Move section-level `py-*`, `pt-*`, and `pb-*` from `ContentContainer` into `SectionShell` or the outer `<section>` where possible.

Preferred:

```tsx
<SectionShell spacing="default" className="bg-white">
  ...
</SectionShell>
```

Avoid:

```tsx
<ContentContainer className="py-[96px]">
```

unless the wrapper is not a true page section.

## Implementation Buckets

### Bucket A: Safe Normalization

These sections are mostly content-led. They can move to shared `SectionShell` spacing first.

- `Careers.tsx`
  - Hero: `min-h-[640px]` with `pt-[184px] pb-24`
  - Jobs/content: `py-20`
  - Plan: use `spacing="heroCompact"` for hero and `spacing="default"` for content. Remove hero `min-h` if content plus padding gives enough height.

- `NewsAndEvents.tsx`
  - Single page section: `min-h-screen pt-32 pb-24`
  - Plan: use `spacing="heroCompact"` or `spacing="default"` depending on header clearance. Replace `min-h-screen` unless it is intentionally filling empty states.

- `FAQs.tsx`
  - Already uses `SectionShell`.
  - Current: `pt-[180px] pb-[120px] md:pt-[216px] md:pb-[180px] lg:pb-[220px]`
  - Plan: change to `spacing="hero"` and keep grid container classes.

- `ContactUs.tsx`
  - Already uses `SectionShell`, but outer wrapper also has `min-h-[800px]`.
  - Current: `pt-[180px] pb-[160px] md:pt-[220px] md:pb-[220px] lg:pt-[246px] lg:pb-[260px]`
  - Plan: change to `spacing="hero"` or `spacing="roomy"`; remove outer `min-h-[800px]` only after checking map/decorative placement.

- Footer
  - Current: `py-12 md:py-16`
  - Plan: leave footer on a footer-specific rhythm. It should not match content sections exactly.

### Bucket B: Medium-Risk Content Sections

These can use shared spacing, but should be changed in groups and checked visually because they include absolute decorations or dense card grids.

- `Impact.tsx`
  - Hero: `pt-[246px] pb-[128px]`, section `min-h-[986px]`.
  - Story/process: `pt-[180px] pb-[120px] md:pt-[220px] lg:pt-[277px]`, wrapper `lg:min-h-[1971px]`.
  - CTA: `py-[112px]`.
  - Final section: `pt-[80px] pb-[120px] md:pt-[96px] md:pb-[140px]`.
  - Plan: normalize CTA/final sections first. Treat the large white process section as risky until absolute decoration positions are reviewed.

- `OurStory.tsx`
  - Early sections use `h-full`, inner `min-h-[540px]`, and `py-[50px]`.
  - Story slider uses `py-[96px]` and `min-h-[600px] md:min-h-[750px]`.
  - Plan: normalize `py-[50px]` to `spacing="compact"` and slider to `spacing="default"`. Leave inner timeline/artwork heights.

- `OurTeam.tsx`
  - Hero: `pt-[180px] pb-[96px] md:pt-[240px] md:pb-[120px] lg:pt-[282px] lg:pb-[140px]`.
  - Intro card band: `py-[96px] md:py-[142px] lg:pt-[132px] lg:pb-[160px]`.
  - Team grid: `py-[66px]`.
  - Values: `py-[96px] md:py-[119px]`.
  - CTA: `py-[72px] md:pt-[56px] md:pb-[96px]`.
  - Plan: normalize team grid, values, and CTA first. Hero and intro band can follow after checking decorative overlap.

- `Home.tsx`
  - Home has the most varied spacing and section composition.
  - Some sections are already close to the proposed system: `py-16 md:py-24 lg:py-28`, `py-16 md:py-24 lg:py-[112px]`.
  - Risky sections: hero `min-h-[900px]...`, section with `pt-[615px]`, stats with `lg:pt-[325px]`.
  - Plan: normalize already-fluid sections first; leave hero, raised artwork, and stats offset sections for a visual review pass.

### Bucket C: High-Risk Artwork/Generated Sections

These should not be converted mechanically. The `min-h` values and offset padding are likely holding absolute art, map mockups, or generated decorative paths in place.

- `KenyanBuyers.tsx`
  - Hero: `min-h-[600px] md:min-h-[800px] lg:min-h-[926px]`, `pt-[160px] pb-[96px] md:pt-[211px] md:pb-[120px]`.
  - Feature section: `min-h-[600px] md:min-h-[900px]`, `pt-[120px] pb-[96px] md:pt-[164px] md:pb-[120px]`.
  - Dark delivery/map section: `min-h-[600px] md:min-h-[900px] lg:min-h-[1085px]`, `pt-[140px] pb-[96px] md:pt-[200px] lg:pt-[241px]`.
  - Process section: `py-[96px] md:py-[120px]`.
  - Final CTA: `pt-[120px] pb-[96px] md:pt-[184px] md:pb-[120px]`.
  - Plan: normalize process and final CTA first. Leave hero, feature, and dark map section until visual review.

- `GlobalBuyers.tsx`
  - Hero and dark product sections have `min-h` plus absolute decorative elements.
  - Content sections vary between `py-[80px]`, `py-[96px]`, `md:py-[140px]`, `lg:pt-[50px]`, `md:pt-[178px]`.
  - CTA/card wrapper uses `py-[80px] lg:pt-2 lg:pb-[80px]` with inner `min-h-[520px]`.
  - Plan: normalize regular white/olive content sections first. Leave dark hero/product sections and CTA card wrapper for visual review.

- `SellWithUs.tsx`
  - Hero: `min-h-[600px] md:min-h-[1034px]`, `pt-[170px] pb-[120px] md:pt-[260px]`.
  - Offering: `pt-[120px] pb-[96px] md:pt-[180px] lg:pt-[234px]`.
  - Process: `py-[96px]` plus inner `lg:min-h-[585px]`.
  - Bottom app/CTA: `pt-[120px] pb-[96px] md:pt-[184px] md:pb-[120px]`.
  - CTA wrapper: `py-[72px] md:pt-[87px] md:pb-[88px]`.
  - Plan: normalize process and bottom CTA first. Leave hero and offering art-heavy sections for visual review.

## Replacement Rules

### Section Padding

Preferred:

```tsx
<SectionShell spacing="default" className="bg-white">
```

or:

```tsx
<section className={`${sectionSpacing.default} bg-white overflow-clip relative w-full`}>
```

Do not leave arbitrary padding when a named spacing style exists:

```tsx
py-[96px] -> py-24
py-[112px] -> py-28
pt-[120px] pb-[96px] -> pt-30 pb-24
```

However, avoid non-default Tailwind utilities such as `pt-30` unless Tailwind supports them in this project. Prefer the nearest standard values:

```tsx
pt-[120px] pb-[96px] -> pt-28 pb-24 or py-24 md:py-28
```

### Hero Header Clearance

Hero sections need extra top padding because the header is absolutely positioned near the top.

Preferred hero rhythm:

```tsx
pt-40 pb-24 md:pt-52 md:pb-32 lg:pt-56 lg:pb-36
```

Compact hero rhythm:

```tsx
pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32
```

### Min Height

Use content plus padding as the default section height.

Remove section-level `min-h-[...]` only when:

- the section has no absolute-positioned art depending on that height,
- responsive content still has enough breathing room,
- and the section does not need to fill a viewport-like composition.

Keep or convert `min-h` intentionally when it protects composition:

```tsx
min-h-[520px] -> min-h-[32.5rem] only if worth standardizing
```

Do not change inner media/map/card heights in this pass.

### Rounded Section Boundaries

Preserve rounded transitions:

- `rounded-bl-[40px] rounded-br-[40px]`
- `rounded-tl-[40px] rounded-tr-[40px]`
- large CTA cards with `rounded-[40px]`

Spacing can move, but these boundaries should stay on the same visual wrapper.

## Proposed Implementation Order

1. Add `spacing.ts` with `sectionSpacing`.
2. Extend `SectionShell` with a `spacing` prop.
3. Convert Bucket A pages:
   - `Careers.tsx`
   - `NewsAndEvents.tsx`
   - `FAQs.tsx`
   - safe parts of `ContactUs.tsx`
4. Build.
5. Convert Bucket B content-led sections:
   - safe sections in `Impact.tsx`
   - safe sections in `OurStory.tsx`
   - safe sections in `OurTeam.tsx`
   - already-fluid sections in `Home.tsx`
6. Build and visually smoke-check main routes.
7. Convert safe CTA/process sections from Bucket C:
   - `KenyanBuyers.tsx` process/final CTA
   - `GlobalBuyers.tsx` regular content bands
   - `SellWithUs.tsx` process/bottom CTA
8. Leave high-risk hero/artwork/map sections documented until visual review.

## Acceptance Criteria

Foundation is done when:

- `sectionSpacing` exists and is used by `SectionShell`.
- `SectionShell` supports named spacing variants.
- `ContentContainer` remains spacing-neutral.

Page cleanup is done when:

- Normal content sections use `spacing="default"`, `spacing="roomy"`, or `spacing="compact"`.
- Hero sections use `spacing="hero"` or `spacing="heroCompact"`.
- Most page-level `py-[...]`, `pt-[...]`, and `pb-[...]` values are gone from section wrappers.
- Fixed/min heights remain only for documented composition reasons.
- Build passes after each bucket.

Final audit:

```bash
rg -n "min-h-\[[^\]]+\]|className=.*(pt-\[|pb-\[|py-\[)" src/react/figma/pages src/react/figma/components/layout
npm run build
```

The audit does not need to be zero. Remaining matches should be one of:

- artwork dimensions,
- map/mockup dimensions,
- inner card/media dimensions,
- documented hero/artwork sections pending visual review.

## Risks

- Removing `min-h` from generated sections can collapse absolute-positioned artwork.
- Normalizing hero top padding too aggressively can make the floating header overlap content.
- Some large sections use whitespace as part of the composition, not merely spacing.
- Home, buyer, and seller pages need visual review after any broad section-height changes.

## Execution Log

Implemented:

- Added `src/react/figma/components/layout/spacing.ts` with shared `sectionSpacing` variants.
- Extended `SectionShell` with a `spacing` prop while keeping `ContentContainer` spacing-neutral.
- Migrated safe Bucket A sections:
  - `Careers.tsx`
  - `NewsAndEvents.tsx`
  - `FAQs.tsx`
  - safe `ContactUs.tsx` section shell spacing
- Migrated low-risk content-led sections:
  - `Impact.tsx` report CTA and SDG metrics section
  - `OurStory.tsx` platform and story slider sections
  - `OurTeam.tsx` team grid, values, and careers CTA sections
  - already-fluid `Home.tsx` content/news bands
  - regular content bands in `GlobalBuyers.tsx`
  - process/bottom CTA sections in `KenyanBuyers.tsx`
  - process/bottom CTA sections in `SellWithUs.tsx`

Intentionally left for visual review:

- Hero sections with absolute decorative artwork and fixed/min-height compositions.
- Map/product mockup sections in `ContactUs.tsx`, `KenyanBuyers.tsx`, and `GlobalBuyers.tsx`.
- Home sections with large art offsets such as `pt-[615px]` and `lg:pt-[325px]`.
- Inner card, control, map, icon, and media padding/height values.

Verification:

- `npm run build` passes.
- Remaining arbitrary spacing/min-height matches are expected exceptions from the visual-review list above.
