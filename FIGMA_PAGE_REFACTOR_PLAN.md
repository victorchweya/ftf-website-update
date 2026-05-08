# Figma Export Page Refactor Plan

## Goal

Turn raw Figma-generated React pages into readable, maintainable frontend code while preserving the current design as closely as possible.

The Home page has already been refactored enough to act as the reference pattern:

```text
src/react/figma/pages/Home.tsx
```

Use Home as the working example for the remaining Figma-exported pages. The next phase of this plan should focus on all non-home pages, keeping the same visual design while replacing generated Figma layer structure with readable section components, data arrays, shared layout primitives, and extracted decorative assets where useful.

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

## Home Reference Pattern

Home is now the baseline for the rest of the site. Treat these pieces as the reference:

- `ContentContainer` for the page content rail.
- Semantic section names such as `StorySection`, `SupplyChainBenefitsSection`, `ImpactSection`, and `NewsSection`.
- Data-driven repeated content such as news cards and impact stat cards.
- Decorative SVGs/assets separated from content where practical.
- Canonical Tailwind text utilities for hero heading scale, such as `text-4xl md:text-5xl lg:text-6xl`.

Do not restart the refactor from the raw Home import. Use the maintained page component in `src/react/figma/pages/Home.tsx` as the model.

## Completed Home Refactor Notes

The Home cleanup was originally planned in this order:

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

Acceptance criteria for Home:

- The Home page builds after each step.
- Each refactored section has meaningful component names.
- The visual design remains close to the current page.

## Full Site Page Refactor Plan

Track every React Figma page in one backlog, including Home. Each page should be left buildable after every section-level change.

Current React Figma pages in scope:

| Page | File | Route |
| --- | --- | --- |
| Home | `src/react/figma/pages/Home.tsx` | `/` |
| FAQs | `src/react/figma/pages/FAQs.tsx` | `/faqs` |
| Contact Us | `src/react/figma/pages/ContactUs.tsx` | `/contact-us` |
| Careers | `src/react/figma/pages/Careers.tsx` | `/careers` |
| News and Events | `src/react/figma/pages/NewsAndEvents.tsx` | `/news-events` |
| Our Story | `src/react/figma/pages/OurStory.tsx` | `/our-story` |
| Our Team | `src/react/figma/pages/OurTeam.tsx` | `/our-team` |
| Our Impact | `src/react/figma/pages/Impact.tsx` | `/our-impact` |
| Sell With Us | `src/react/figma/pages/SellWithUs.tsx` | `/sell-with-us` |
| Kenyan Buyers | `src/react/figma/pages/KenyanBuyers.tsx` | `/kenyan-buyers` |
| Global Buyers | `src/react/figma/pages/GlobalBuyers.tsx` | `/global-buys` |

Recommended order:

1. Reference page:
   - `Home.tsx`

2. Smaller informational pages:
   - `FAQs.tsx`
   - `ContactUs.tsx`
   - `Careers.tsx`
   - `NewsAndEvents.tsx`

3. Brand/story pages:
   - `OurStory.tsx`
   - `OurTeam.tsx`
   - `Impact.tsx`

4. Buyer/seller product pages:
   - `SellWithUs.tsx`
   - `KenyanBuyers.tsx`
   - `GlobalBuyers.tsx`

This order starts with the completed reference page, then moves from smaller pages to pages with more generated illustrations and complex absolute-positioned content.

## Execution Roadmap

Use this as the working backlog for the next refactor passes. Home is included as Phase 0 because it is the reference implementation for the rest of the site.

| Phase | Page | Priority | Current state | Main refactor outcome | Status |
| --- | --- | --- | --- | --- | --- |
| 0 | `Home.tsx` | High | Refactored into the reference page pattern with shared container, semantic sections, and data-driven repeated content | Keep as baseline; only do final polish if later shared patterns require it | Done |
| 1 | `FAQs.tsx` | High | Uses shared header/footer and content container; FAQ rows are now data-driven | Data-driven FAQ list with semantic section names | Done |
| 1 | `ContactUs.tsx` | High | Uses shared content container; contact details are now data-driven while map/decorative layers remain intact | Data-driven contact methods and semantic map/contact sections | Done |
| 1 | `NewsAndEvents.tsx` | Medium | Placeholder page now uses shared `ContentContainer`, semantic sections, and `newsEvents` data | Shared `ContentContainer`, semantic sections, ready data structure | Done |
| 1 | `Careers.tsx` | Low | Uses semantic `<main>`, shared `ContentContainer`, and a future-ready `careerOpenings` data structure | Confirm semantic `<main>` and future-ready openings structure | Done |
| 2 | `OurStory.tsx` | High | Top-level sections, timeline milestones, vision/mission principles, and platform steps are data-driven | Story sections, timeline, and principles converted to semantic/data-driven code | Done |
| 2 | `OurTeam.tsx` | High | Top-level sections, team filters, team member rows, and values cards are data-driven | Data-driven team members, filters, values, and CTA sections | Done |
| 2 | `Impact.tsx` | High | Top-level sections, impact pillar groups, SDG card groups, and indirect SDG icons are data-driven | Data-driven impact pillars, stats, SDG targets, semantic sections | Done |
| 3 | `SellWithUs.tsx` | High | Top-level sections, offering cards, supplier process steps, and supplier story card grouping are data-driven | Data-driven offerings, supplier steps, stories, CTA | Done |
| 3 | `KenyanBuyers.tsx` | High | Top-level sections, partner product category chips, how-it-works step groups, and testimonial controls are data-driven | Semantic local buyer sections and data-driven products/process/testimonials | Done |
| 3 | `GlobalBuyers.tsx` | High | Top-level sections, export product cards, quality cards, and impact principle groups are map-driven | Semantic global buyer sections and data-driven cards/quality/impact content | Done |

### Per-Page Execution Loop

For each page in the roadmap:

1. Snapshot the current route visually before changing the page.
2. Rename the outer page sections first, without changing layout.
3. Extract content data arrays for repeated cards or lists.
4. Replace duplicated generated components with one reusable component.
5. Move decorative SVGs or large reusable art out only after the section is stable.
6. Run `npm run build`.
7. Review desktop, tablet, and mobile.
8. Remove unused generated functions and imports.
9. Mark the page as done in the roadmap table.

### Shared Refactor Tasks

These tasks should happen as patterns repeat across pages:

- Create or standardize `PrimaryButton` if CTAs keep repeating the same class strings.
- Create a shared `FilterChips` component if FAQ/team filters remain across pages.
- Create a shared `SectionHeading` only if it reduces duplication without hiding page-specific typography.
- Keep hero headings on canonical Tailwind classes, currently `text-4xl md:text-5xl lg:text-6xl`.
- Keep page content on `ContentContainer`; avoid `!px-0` unless matching a full-width tool/card is intentional.
- Keep decorative full-bleed art outside `ContentContainer`.
- Keep workflow illustrations inside `ContentContainer` when they explain the section content.

### Phase 0 Deliverables

Phase 0 is complete when:

- `Home.tsx` is the maintained reference page.
- Home uses shared `Header`, `Footer`, and `ContentContainer`.
- Major Home sections have semantic component names.
- Repeated Home content is data-driven where practical.
- Hero heading scale uses canonical Tailwind classes.
- Build passes.

### Phase 1 Deliverables

Phase 1 is complete when:

- `FAQs.tsx` has `faqItems` and one reusable FAQ item component.
- `ContactUs.tsx` has data-driven contact groups and semantic contact/map components.
- `NewsAndEvents.tsx` uses `ContentContainer` and a future-ready `newsEvents` array.
- `Careers.tsx` is confirmed semantic and ready for future openings.
- Build passes after each page.

### Phase 2 Deliverables

Phase 2 is complete when:

- `OurStory.tsx` has semantic story sections and data-driven timeline/principle content.
- `OurTeam.tsx` has data-driven team members and values.
- `Impact.tsx` has data-driven pillars, stats, and SDG targets.
- Visual alignment remains consistent with the footer/content rail.
- Build passes after each page.

### Phase 3 Deliverables

Phase 3 is complete when:

- `SellWithUs.tsx` has data-driven offering cards, process steps, and stories.
- `KenyanBuyers.tsx` has semantic buyer sections and data-driven product/process/testimonial content.
- `GlobalBuyers.tsx` has semantic buyer sections and data-driven sourcing/quality/impact cards.
- Product/process illustrations are classified correctly as content or decoration.
- Build passes after each page.

### Home

File:

```text
src/react/figma/pages/Home.tsx
```

Target outline:

```tsx
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <SupplyChainBenefitsSection />
        <ImpactSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
```

Current state:

- Acts as the reference page for the rest of the migration.
- Uses the shared `Header`, `Footer`, and `ContentContainer`.
- Has semantic sections and data-driven repeated content for the completed pass.
- Uses canonical hero heading classes.

Remaining polish only if needed:

1. Revisit Home after Phases 2 and 3 reveal shared patterns worth extracting.
2. Extract any repeated CTA/button pattern into a shared component only when it is used across multiple pages.
3. Keep Home visually stable as the baseline for comparing the rest of the site.

Acceptance criteria:

- Home remains the visual and structural reference.
- No later shared cleanup regresses Home alignment, heading scale, or image behavior.

### FAQs

File:

```text
src/react/figma/pages/FAQs.tsx
```

Target outline:

```tsx
export default function FAQs() {
  return (
    <main className="bg-white">
      <FaqHeroSection />
      <FaqListSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename `Wireframe` to `FaqPage`.
2. Extract the title, filter bar, FAQ list, and contact CTA into semantic components.
3. Convert `FaqCard`, `FaqCard1`, etc. into a `faqItems` array and one `FaqItem` component.
4. Convert filter chips into a `faqFilters` array if they remain visible.
5. Keep the left illustration and bottom divider as decorative components.

Acceptance criteria:

- FAQ questions are easy to edit in one data array.
- The filter bar and FAQ list align to the shared `ContentContainer`.
- Decorative assets remain full-bleed and `aria-hidden`.

### Contact Us

File:

```text
src/react/figma/pages/ContactUs.tsx
```

Target outline:

```tsx
export default function ContactUs() {
  return (
    <main className="bg-white">
      <ContactSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename `Contact` to `ContactSection`.
2. Extract contact methods into a `contactGroups` or `contactItems` array.
3. Replace generated names such as `Content`, `Content5`, `Tab`, and `FeatureText` with semantic names.
4. Keep `GoogleMapsMockup` as a named component, but move map controls into smaller components only if that improves readability.
5. Separate decorative wave and illustration from real contact content.

Acceptance criteria:

- Phone, email, and channel text can be edited from one data structure.
- Map content remains aligned with the contact details.
- Decorative shapes do not affect the content container alignment.

### Careers

File:

```text
src/react/figma/pages/Careers.tsx
```

Current state:

- Already relatively clean compared with raw Figma exports.
- Uses shared `ContentContainer`.

Refactor steps:

1. Ensure the top-level wrapper is a semantic `<main>`.
2. Keep `HeroSection` or introduce it if the page grows.
3. Reuse shared button/link primitives when openings or job cards are added.
4. If job listings are introduced, use a `careerOpenings` array and `CareerOpeningCard`.

Acceptance criteria:

- Page remains simple and readable.
- Hero typography matches the canonical hero scale.

### News And Events

File:

```text
src/react/figma/pages/NewsAndEvents.tsx
```

Current state:

- Already simple, but it should use the shared content/container conventions.

Target outline:

```tsx
export default function NewsAndEvents() {
  return (
    <main className="bg-white">
      <NewsEventsHeroSection />
      <NewsEventsListSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Replace ad hoc `max-w-[1280px] mx-auto` with `ContentContainer`.
2. Extract the placeholder area into `NewsEventsListSection`.
3. When real content exists, use a `newsEvents` array and a reusable card.

Acceptance criteria:

- Page follows the same layout primitives as the rest of the React Figma pages.
- Hero typography uses canonical Tailwind classes.

### Our Story

File:

```text
src/react/figma/pages/OurStory.tsx
```

Target outline:

```tsx
export default function OurStory() {
  return (
    <main className="bg-white">
      <StoryHeroSection />
      <OriginSection />
      <PlatformSection />
      <TimelineSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename `Wireframe1`, `Wireframe`, `Wireframe2`, and `Story` to content-based section names.
2. Extract vision and mission cards into a `storyPrinciples` array.
3. Extract platform steps into a `platformSteps` array.
4. Turn timeline milestones into `timelineItems`.
5. Keep carrot/produce/timeline illustrations as clearly named decorative or content components depending on use.

Acceptance criteria:

- Timeline content is data-driven.
- Vision/mission content is editable without hunting through `Frame*` functions.
- Decorative side produce remains outside the content flow.

### Our Team

File:

```text
src/react/figma/pages/OurTeam.tsx
```

Target outline:

```tsx
export default function OurTeam() {
  return (
    <main className="bg-white">
      <TeamHeroSection />
      <TeamPhotoSection />
      <TeamMembersSection />
      <ValuesSection />
      <CareersCtaSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename generated sections to semantic section names.
2. Convert team member cards into a `teamMembers` array and one `TeamMemberCard`.
3. Convert filter chips into a `teamFilters` array if they remain interactive or visible.
4. Convert values cards into a `values` array and one `ValueCard`.
5. Move repeated photo-mask SVG logic into reusable components only if it reduces complexity.

Acceptance criteria:

- Team member information is data-driven.
- Value cards are data-driven.
- The CTA and team photo section remain visually aligned to the shared content container.

### Our Impact

File:

```text
src/react/figma/pages/Impact.tsx
```

Target outline:

```tsx
export default function Impact() {
  return (
    <main className="bg-white">
      <ImpactHeroSection />
      <ImpactPillarsSection />
      <ImpactReportCtaSection />
      <SdgMetricsSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename raw sections such as `Wireframe2`, `Wireframe1`, `Wireframe`, and `Wireframe3`.
2. Extract impact pillar cards into an `impactPillars` array.
3. Extract stats into arrays per pillar where useful.
4. Extract SDG cards into an `sdgTargets` array and indirect SDG icons into `indirectSdgTargets`.
5. Keep the full-bleed yellow/green section backgrounds and decorative crops outside the content container.
6. Ensure content and footer both use the same `ContentContainer` padding; do not override it with `!px-0` unless there is a deliberate visual reason.

Acceptance criteria:

- SDG content aligns with the footer rail.
- Pillar cards and SDG cards are data-driven.
- Decorative shapes remain separate from content.

### Sell With Us

File:

```text
src/react/figma/pages/SellWithUs.tsx
```

Target outline:

```tsx
export default function SellWithUs() {
  return (
    <main className="bg-white">
      <SupplierHeroSection />
      <OfferingSection />
      <SupplierHowItWorksSection />
      <SupplierStoriesSection />
      <SupplierCtaSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename generated page sections to semantic section names.
2. Convert offering cards into `offeringItems`.
3. Treat the How It Works illustrations as real content, not decorative background.
4. Convert How It Works steps into `supplierSteps`, keeping the visual diagram intact.
5. Extract testimonial cards into `supplierStories` if they are repeated.

Acceptance criteria:

- How It Works content, labels, and illustrations live inside the content container.
- Offering cards are data-driven.
- Generated names are mostly removed from maintained code.

### Kenyan Buyers

File:

```text
src/react/figma/pages/KenyanBuyers.tsx
```

Target outline:

```tsx
export default function KenyanBuyers() {
  return (
    <main className="bg-white">
      <LocalBuyerHeroSection />
      <MarketAccessSection />
      <ProductGradesSection />
      <LocalBuyerHowItWorksSection />
      <TestimonialsSection />
      <BuyerCtaSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename major `Wireframe*` sections by purpose.
2. Extract product/grade cards into arrays.
3. Extract How It Works steps into data while preserving the content illustration.
4. Treat map, produce, and process artwork as content when it explains the workflow.
5. Convert testimonials into data-driven cards.

Acceptance criteria:

- Product grades and process steps are easy to edit.
- Meaningful process illustrations remain contained with their labels.
- Large decorative backgrounds remain full-bleed.

### Global Buyers

File:

```text
src/react/figma/pages/GlobalBuyers.tsx
```

Target outline:

```tsx
export default function GlobalBuyers() {
  return (
    <main className="bg-white">
      <GlobalBuyerHeroSection />
      <IngredientsOriginSection />
      <PartnerInFlavourSection />
      <SourcingProcessSection />
      <QualitySection />
      <ImpactPrinciplesSection />
      <GlobalBuyerCtaSection />
      <Footer />
    </main>
  );
}
```

Refactor steps:

1. Rename generated sections to buyer-focused semantic names.
2. Convert cards for quality, sourcing, and impact principles into arrays.
3. Extract repeated buttons and CTAs into shared primitives if the class strings repeat across pages.
4. Move reusable decorative waves/crop illustrations out of the page file when they are too noisy.
5. Keep product and ingredient visuals in the content container when they explain the section.

Acceptance criteria:

- Buyer value propositions and cards are data-driven.
- Hero/form content aligns with shared container conventions.
- Decorative backgrounds do not drive page layout.

## Applying This Plan To Any Remaining Page

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
