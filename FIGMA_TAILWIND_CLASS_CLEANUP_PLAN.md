# Figma Tailwind Class Cleanup Plan

## Goal

Replace noisy Figma-generated Tailwind classes with the project's existing semantic Tailwind theme and a small set of shared UI primitives, without changing the visual design more than necessary.

Example:

```tsx
font-['Fraunces',serif]
```

should become:

```tsx
font-serif
```

and:

```tsx
font-['Rubik',sans-serif]
```

should become:

```tsx
font-sans
```

The project already defines these in `src/styles/tailwind.css`:

- `font-sans`: Rubik
- `font-serif`: Fraunces

## Scope

Clean maintained application code first:

```text
src/react/figma/pages
src/react/figma/components
src/react/figma/components/layout
src/pages
src/layouts
src/components
```

Treat raw Figma import snapshots as reference/generated code:

```text
src/react/figma/imports
```

Do not spend time polishing raw import snapshots unless a maintained page still imports them directly for live UI.

For the first cleanup pass, do not update risky visual-review replacements. This means no broad changes to layout coordinates, exact decorative artwork dimensions, masks, rotations, aspect ratios, or content positioning that could shift the page visually. Those stay as-is until a separate visual QA pass.

## Current Audit

Maintained React Figma pages/components still contain:

| Pattern | Count |
| --- | ---: |
| `font-['Rubik',sans-serif]` | 174 |
| `font-['Fraunces',serif]` | 74 |
| `font-['Roboto:Regular',sans-serif]` | 2 |
| `font-['Roboto:Medium',sans-serif]` | 2 |
| `content-stretch` | 271 |
| `leading-[1.68]` | 131 |
| `tracking-[0.48px]` | 91 |
| `tracking-[0.6px]` | 22 |
| `tracking-[1.68px]` | 5 |
| `text-[#...]` | 200 |
| `bg-[#...]` | 86 |
| `rounded-[40px]` | 32 |
| `w-[min-content]` | 9 |
| `whitespace-nowrap` | 68 |

By folder:

| Folder | Arbitrary font classes | Arbitrary classes | `absolute` usages |
| --- | ---: | ---: | ---: |
| `src/react/figma/pages` | 217 | 3305 | 410 |
| `src/react/figma/components` | 32 | 705 | 51 |
| `src/react/figma/components/layout` | 3 | 14 | 0 |
| `src/react/figma/imports` | 798 | 9331 | 2239 |

## Cleanup Principles

1. Prefer theme utilities over Figma-specific arbitrary classes.
2. Keep arbitrary values only when they preserve a precise illustration, mask, crop, or section-specific alignment.
3. Clean shared components before pages, so every later page gets simpler automatically.
4. Avoid changing raw import snapshots unless they are actively rendered.
5. Run the build after each cleanup phase.
6. Visually review desktop, tablet, and mobile after risky layout changes.
7. For this pass, skip risky layout changes entirely.

## Replacement Rules

### Fonts

| Current | Replace With | Notes |
| --- | --- | --- |
| `font-['Fraunces',serif]` | `font-serif` | Safe because `--font-serif` is Fraunces |
| `font-['Rubik',sans-serif]` | `font-sans` | Usually optional because body already uses Rubik, but explicit is fine |
| `font-['Roboto:Regular',sans-serif]` | case-by-case | Appears in map mock controls; either replace with `font-sans` or keep if intentionally mimicking Google Maps |
| `font-['Roboto:Medium',sans-serif]` | case-by-case | Same as above |

### Leading

| Current | Preferred |
| --- | --- |
| `leading-[normal]` | `leading-normal` |
| `leading-[24px]` on `text-[16px]` | `leading-6` |
| `leading-[28px]` on `text-[18px]` | `leading-7` |
| `leading-[32px]` on `text-[24px]` | `leading-8` |
| `leading-[1.68]` | create a shared prose/body text class or replace with a nearby standard utility where visual parity allows |

### Tracking

| Current | Preferred |
| --- | --- |
| `tracking-[0.48px]` | `tracking-wide` only where close enough |
| `tracking-[0.6px]` | `tracking-wide` only where close enough |
| `tracking-[1.2px]`, `tracking-[1.44px]`, `tracking-[1.68px]` | keep temporarily for hero/large display text, then standardize after visual review |

### Colors

Use theme colors from `src/styles/tailwind.css` where exact matches already exist.

| Current | Replace With |
| --- | --- |
| `text-[#1e4a35]` / `bg-[#1e4a35]` / `border-[#1e4a35]` | `text-green-500` / `bg-green-500` / `border-green-500` |
| `text-[#0f251b]` | likely `text-green-900` or keep if the exact darker brand tone matters |
| `text-[#d78228]` / `bg-[#d78228]` | `text-orange-500` / `bg-orange-500` |
| `text-[#f9ecbd]` / `bg-[#f9ecbd]` | `text-yellow-200` / `bg-yellow-200` |
| `bg-[#dae2b6]` | `bg-olive-200` |
| `text-[#747c50]` | `text-olive-500` |
| `bg-[#fbf3e9]` | keep or add a named theme token if used often |

### Spacing, Sizing, And Positioning

Safe mechanical replacements:

| Current | Preferred |
| --- | --- |
| `px-[16px]` | `px-4` |
| `py-[8px]` | `py-2` |
| `px-[24px]` | `px-6` |
| `py-[12px]` | `py-3` |
| `gap-[16px]` | `gap-4` |
| `gap-[24px]` | `gap-6` |
| `gap-[32px]` | `gap-8` |
| `gap-[40px]` | `gap-10` |
| `gap-[64px]` | `gap-16` |
| `size-[24px]` | `size-6` |
| `text-[16px]` | `text-base` |
| `text-[20px]` | `text-xl` |
| `text-[24px]` | `text-2xl` |
| `rounded-[40px]` | use shared button/pill component, or `rounded-full` |

Risky replacements that need visual review:

- `left-[...]`, `top-[...]`, `inset-[...]`
- `h-[...]` and `w-[...]` on decorative artwork
- exact SVG wrapper sizes such as `w-[191.825px]`
- `rotate-[...]`, `scale-[...]`, `mask-position-[...]`, `mask-size-[...]`
- `aspect-[...]` values used for images

Do not update these in the initial cleanup pass.

## Shared Components To Clean First

1. `src/react/figma/components/layout/SectionHeader.tsx`
   - Replace `font-['Rubik',sans-serif]` with `font-sans`.
   - Replace `font-['Fraunces',serif]` with `font-serif`.
   - Replace color hex classes with theme colors where exact.
   - Decide whether `leading-[1.68]` becomes a shared body utility.

2. `src/react/figma/components/Header.tsx`
   - Replace Rubik font arbitrary classes.
   - Convert repeated nav item text styles into a small constant or helper class.
   - Convert repeated dropdown item styles into a helper class.
   - Keep logo SVG dimensions until visual review.

3. `src/react/figma/components/Footer.tsx`
   - Replace Rubik/Fraunces arbitrary classes.
   - Convert repeated footer link, action button, and body text class strings into helper constants.
   - Keep logo internals and social icon absolute positioning.

4. `src/react/figma/components/Button.astro` or `src/components/Button.astro` if used
   - Confirm whether there is already a button primitive worth reusing from Astro pages.
   - If not, add a React `PrimaryButton` only after Header/Footer show the repeated CTA pattern clearly.

## Phase Plan

### Phase 1: Safe Mechanical Cleanup

Target:

- `src/react/figma/components/layout`
- `src/react/figma/components/Header.tsx`
- `src/react/figma/components/Footer.tsx`

Actions:

1. Replace Fraunces/Rubik arbitrary font classes with `font-serif` and `font-sans`.
2. Replace obvious spacing and text-size values with standard Tailwind utilities.
3. Replace exact theme color matches.
4. Leave decorative SVG dimensions and absolute positioning untouched.
5. Run `npm run build`.

Acceptance criteria:

- Build passes.
- No rendered shared header/footer visual regression.
- Shared layout components no longer introduce arbitrary font classes.

### Phase 2: Page-Level Typography And Color Cleanup

Target:

- `src/react/figma/pages/*.tsx`

Actions:

1. Replace `font-['Fraunces',serif]` with `font-serif`.
2. Replace `font-['Rubik',sans-serif]` with `font-sans` only when explicit font selection is useful; otherwise remove it and rely on the body font.
3. Replace exact theme color hex utilities.
4. Normalize obvious text sizes and line heights.
5. Keep major layout dimensions unchanged.
6. Run `npm run build`.

Acceptance criteria:

- Maintained pages have no Fraunces/Rubik arbitrary font classes.
- Color replacements use the existing Tailwind theme.
- Pages remain visually close to current output.

### Phase 3: Repeated Class Extraction

Target:

- repeated CTAs
- repeated body copy
- repeated card headings
- repeated section eyebrow/title/description styles

Actions:

1. Create local helper constants when repetition is page-specific.
2. Create shared components only when the pattern repeats across pages.
3. Candidates:
   - `PrimaryButton`
   - `SecondaryButton`
   - `PillLink`
   - `SectionHeader`
   - `CardShell`
4. Avoid over-abstracting one-off Figma sections.
5. Run `npm run build`.

Acceptance criteria:

- Repeated button and link class strings are not copied across many files.
- Page code is easier to scan.
- Shared components do not hide important page-specific layout.

### Phase 4: Layout Residue Cleanup

Target:

- `content-stretch`
- `w-[min-content]`
- unnecessary `whitespace-nowrap`
- unnecessary `relative shrink-0`
- content-level `absolute top/left`

Actions:

1. Remove `content-stretch`; it is not a standard Tailwind utility and should not be needed in flex/grid layouts.
2. Replace `w-[min-content]` with `w-fit`, `w-full`, or no width depending on context.
3. Remove `whitespace-nowrap` from paragraphs unless it is a nav item, pill, or intentionally single-line label.
4. Remove `relative shrink-0` where normal flow works.
5. Convert remaining content-level absolute positioning to flex/grid only after visual comparison.
6. Run `npm run build` and review common viewport widths.

Status for this pass:

- Defer this phase unless the change is obviously non-visual and local.
- Do not touch `left-[...]`, `top-[...]`, `inset-[...]`, exact widths/heights, rotations, masks, or image aspect ratios.

Acceptance criteria:

- No real text content depends on fixed coordinates.
- No accidental horizontal scroll.
- Decorative artwork can still use absolute positioning.

### Phase 5: Raw Import Decision

Target:

- `src/react/figma/imports`

Actions:

1. Identify import files still used by maintained pages.
2. Keep image/SVG asset files that are imported.
3. Leave raw page snapshots alone unless they are rendered.
4. If raw snapshots are no longer needed, decide whether to delete, archive, or keep as reference.

Acceptance criteria:

- The maintained code is clean even if raw Figma snapshots remain noisy.
- Any unused raw snapshot removal is confirmed with `rg` before deleting.

## Suggested Execution Order

1. `SectionHeader.tsx`, `Header.tsx`, `Footer.tsx`
2. Small pages:
   - `NewsAndEvents.tsx`
   - `Careers.tsx`
   - `FAQs.tsx`
   - `ContactUs.tsx`
3. Medium pages:
   - `OurTeam.tsx`
   - `OurStory.tsx`
   - `Impact.tsx`
4. Large buyer/seller pages:
   - `SellWithUs.tsx`
   - `KenyanBuyers.tsx`
   - `GlobalBuyers.tsx`
5. `Home.tsx` final polish, because it is the current reference page and should stay stable.

## Commands For Tracking Progress

```bash
rg -n -F "font-['" src/react/figma/pages src/react/figma/components src/react/figma/components/layout
rg -n -F "content-stretch" src/react/figma/pages src/react/figma/components
rg -n "w-\[min-content\]|whitespace-nowrap|leading-\[1\.68\]|tracking-\[[^\]]+\]" src/react/figma/pages src/react/figma/components
npm run build
```

## Definition Of Done

The cleanup is done when:

- Maintained pages and shared components no longer use `font-['Fraunces',serif]` or `font-['Rubik',sans-serif]`.
- Exact brand colors use theme utilities where available.
- Repeated CTA/card/text styles are factored into small helpers or components.
- Risky visual-review replacements are untouched unless handled in a later QA-backed pass.
- Arbitrary values remain where changing them could affect layout, artwork, masks, or image framing.
- `npm run build` passes.
- Desktop, tablet, and mobile views have no content overlap or unintended horizontal scroll.

## Execution Log

### Safe Pass 1

Status: Done

Completed:

- Replaced maintained-code `font-['Fraunces',serif]` with `font-serif`.
- Replaced maintained-code `font-['Rubik',sans-serif]` with `font-sans`.
- Replaced `leading-[normal]` with `leading-normal`.
- Replaced exact theme color matches for:
  - `#1e4a35` to `green-500`
  - `#d78228` to `orange-500`
  - `#f9ecbd` to `yellow-200`
  - `#dae2b6` to `olive-200`
  - `#747c50` to `olive-500`
- Left Roboto map mockup classes untouched.
- Left risky visual-review replacements untouched.

Verification:

```bash
npm run build
```

Result: passes.

Known remaining cleanup, intentionally deferred:

- `content-stretch`
- `leading-[1.68]`
- exact tracking values
- exact layout coordinates and decorative artwork dimensions
- masks, rotations, image aspect ratios, and map internals

### Safe Pass 2

Status: Done

Completed:

- Removed `content-stretch` from maintained React Figma code.
- Replaced exact spacing utilities that map 1:1 to Tailwind defaults:
  - `px-[16px]` to `px-4`
  - `py-[8px]` to `py-2`
  - `px-[24px]` to `px-6`
  - `py-[12px]` to `py-3`
  - common `gap-[...]`, `p-[...]`, `pt-[...]`, and `py-[...]` equivalents
- Replaced exact text and icon sizing utilities that map 1:1 to Tailwind defaults:
  - `text-[14px]` to `text-sm`
  - `text-[16px]` to `text-base`
  - `text-[18px]` to `text-lg`
  - `text-[20px]` to `text-xl`
  - `text-[24px]` to `text-2xl`
  - `size-[20px]` to `size-5`
  - `size-[24px]` to `size-6`
  - `size-[40px]` to `size-10`
- Replaced exact line-height utilities:
  - `leading-[24px]` to `leading-6`
  - `leading-[28px]` to `leading-7`
  - `leading-[32px]` to `leading-8`
- Extracted repeated Header class strings into named constants.
- Extracted repeated Footer class strings into named constants.

Verification:

```bash
npm run build
```

Result: passes.

Final safe-pass audit:

- No maintained-code `font-['Fraunces',serif]`.
- No maintained-code `font-['Rubik',sans-serif]`.
- No maintained-code `content-stretch`.
- No maintained-code exact brand color classes from the safe replacement list.
- No maintained-code `leading-[normal]`.
- No maintained-code exact utility classes from the Safe Pass 2 tracked list.

Still intentionally left for later visual-review work:

- Roboto map mockup labels in `ContactUs.tsx` and `KenyanBuyers.tsx`.
- exact line-height tokens such as `leading-copy`, `leading-zero`, and `leading-contact`.
- exact tracking values.
- exact non-token colors that were not in the safe replacement list.
- `rounded-[40px]` where the element needs visual judgement.
- coordinates, masks, rotations, exact artwork dimensions, and image aspect ratios.

### Safe Pass 3

Status: Done

Completed:

- Removed remaining arbitrary `leading-[...]` classes from maintained React Figma code.
- Preserved exact Figma line-height values as named Tailwind theme tokens:
  - `leading-zero`: `0`
  - `leading-display`: `1.05`
  - `leading-heading`: `1.2`
  - `leading-callout`: `1.42`
  - `leading-copy`: `1.68`
  - `leading-contact`: `30px`
- Replaced `leading-[1.5]` with Tailwind's built-in `leading-normal`.

Verification:

```bash
rg -n "leading-\[[^\]]+\]" src/react/figma/components src/react/figma/components/layout src/react/figma/pages src/styles/tailwind.css
npm run build
```

Result: no maintained-code arbitrary `leading-[...]` matches; build passes.
