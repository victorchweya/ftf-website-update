# Content Container Normalization Plan

## Goal

Create a consistent content container system across the migrated Figma pages while preserving full-bleed backgrounds, decorative shapes, and section color bands.

The core rule:

> Backgrounds go full width. Real content sits inside a shared wrapper.

## Current Issue

The Figma Make export uses many page-specific values such as:

- `left-[80px]`
- `w-[1280px]`
- `left-1/2`
- `left-[calc(...)]`
- fixed section and card widths
- absolutely positioned content blocks

This causes inconsistent alignment between pages and makes responsive behavior fragile.

## Recommended Layout Model

Use a two-layer section structure:

```tsx
<section className="relative overflow-hidden bg-section">
  <DecorativeBackground />

  <ContentContainer>
    <SectionContent />
  </ContentContainer>
</section>
```

The section owns:

- background color
- full-width image or decorative SVGs
- vertical spacing
- overflow behavior
- responsive section height if needed

The container owns:

- horizontal content alignment
- max width
- responsive side padding
- grid/flex structure for real content

## Proposed Container Component

Create a shared React component for migrated pages:

```tsx
type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

export function ContentContainer({
  children,
  className,
  size = "default",
}: ContentContainerProps) {
  const sizes = {
    narrow: "max-w-[960px]",
    default: "max-w-[1184px]",
    wide: "max-w-[1280px]",
  };

  return (
    <div className={`relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-10 ${sizes[size]} ${className ?? ""}`}>
      {children}
    </div>
  );
}
```

Suggested default:

- Mobile padding: `20px`
- Tablet padding: `32px`
- Desktop padding: `40px`
- Default max width: `1184px`
- Wide max width: `1280px`
- Narrow max width: `960px`

Why `1184px` default:

- It gives a strong readable content width.
- It leaves breathing room inside common 1280/1366/1440 viewports.
- It is less cramped than `max-w-5xl` but not as loose as full `1280px` for text-heavy sections.

## Files To Add

```text
src/react/figma/components/layout/ContentContainer.tsx
src/react/figma/components/layout/Section.tsx
```

Optional `Section` helper:

```tsx
type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  containerSize?: "default" | "wide" | "narrow";
  background?: React.ReactNode;
};

export function Section({
  children,
  className,
  containerClassName,
  containerSize,
  background,
}: SectionProps) {
  return (
    <section className={`relative overflow-hidden ${className ?? ""}`}>
      {background}
      <ContentContainer size={containerSize} className={containerClassName}>
        {children}
      </ContentContainer>
    </section>
  );
}
```

## Best Practices To Follow

1. **Keep backgrounds full bleed**

   Background colors, section art, and large decorative SVGs should stay on the `section`, not inside the content wrapper.

2. **Move content out of absolute positioning**

   Text, buttons, cards, forms, and image groups should use grid/flex inside `ContentContainer`.

3. **Use absolute positioning only for decoration**

   Decorative leaves, waves, blobs from Figma, large background illustrations, and texture elements can stay absolute.

4. **Use consistent vertical rhythm**

   Suggested section padding:

   - Compact: `py-16 md:py-20`
   - Standard: `py-20 md:py-28`
   - Hero: `pt-32 pb-24 md:pt-40 md:pb-32`

5. **Use section-specific grids**

   Examples:

   - Hero: `grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)]`
   - Card row: `grid md:grid-cols-2 lg:grid-cols-3`
   - Form section: `grid lg:grid-cols-[minmax(0,1fr)_480px]`
   - Text-only section: `max-w-[760px]`

6. **Avoid nested cards**

   Use cards for repeated content items only. Do not put page sections inside decorative cards.

7. **Use shared tokens**

   Prefer existing theme colors from `src/styles/tailwind.css`:

   - `green-*`
   - `orange-*`
   - `yellow-*`
   - `olive-*`
   - `brown-*`
   - `neutral-*`

8. **Keep text readable**

   Long paragraphs should usually be limited to `max-w-[680px]` or `max-w-[760px]`.

## Implementation Order

### Phase 1: Add Layout Primitives

Add:

- `ContentContainer`
- `Section`
- optional `PageShell` if needed later

Acceptance criteria:

- Components are reusable.
- No page visuals change yet.
- Build passes.

### Phase 2: Normalize Header And Footer Widths

The header already visually wants a centered pill. Wrap its inner content with the same wide width logic.

Footer content should also align to the same container edges as page content.

Acceptance criteria:

- Header logo/nav aligns with page content.
- Footer columns align with page content.
- Background remains full width.

### Phase 3: Refactor Home Page Sections

Start with the home page because it defines the visual language.

Recommended order:

1. Hero content
2. Intro/mission section
3. Audience cards
4. Impact/story sections
5. Footer alignment

Acceptance criteria:

- Home page content lines up consistently.
- Background art still reaches the viewport edges.
- Mobile layout improves without losing the Figma look.

### Phase 4: Refactor Repeated Page Patterns

Create reusable patterns as they appear:

- `PageHero`
- `SectionHeading`
- `FeatureCard`
- `StatCard`
- `ContactFormShell`
- `ImagePanel`
- `CTASection`

Do this only when the same pattern appears on two or more pages.

Acceptance criteria:

- Less duplicated layout code.
- Same visual language across pages.
- No broad design rewrite yet.

### Phase 5: Apply To All Pages

Suggested order:

1. `Home`
2. `OurImpact`
3. `SellWithUs`
4. `KenyanBuyers`
5. `GlobalBuyers`
6. `OurStory`
7. `OurTeam`
8. `ContactUs`
9. `FAQs`
10. `NewsAndEvents`

Acceptance criteria:

- All major content aligns to the shared wrapper.
- Full-bleed backgrounds remain full width.
- Mobile, tablet, and desktop layouts are coherent.

## Visual QA Checklist

For each page, check:

- Content left edge aligns across sections.
- Background color bands span full viewport width.
- Decorative assets are not clipped unless intentionally masked.
- Text does not overlap images or buttons.
- Cards have consistent widths and gaps.
- Forms align to the same content grid.
- Header/footer align with page content.
- No horizontal scroll at `390px`, `768px`, `1024px`, and `1440px`.

## Definition Of Done

This work is done when:

- A shared content wrapper exists.
- Main content on every migrated page uses the wrapper.
- Backgrounds and decorative art remain full bleed.
- The pages retain the Farm to Feed/Figma visual direction.
- The layout is significantly more consistent on desktop and mobile.
- `npm run build` succeeds.
