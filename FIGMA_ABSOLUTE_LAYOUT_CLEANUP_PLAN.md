# Figma Absolute Layout Cleanup Plan

## Goal

Remove absolute positioning from real page content while preserving absolute positioning for decorative Figma artwork, waves, masks, map controls, SVG compositions, and background illustrations.

This is a layout cleanup, not a redesign. The migrated pages should keep their current visual identity while becoming easier to maintain and more responsive.

## Classification Rules

| Type | Definition | Action |
| --- | --- | --- |
| Content absolute | Readable text, headings, cards, buttons, lists, CTAs, step copy, testimonials, product grids | Convert to normal flow using flex, grid, and shared layout helpers |
| Decorative absolute | Background SVGs, waves, borders, ornamental illustrations, masks, art-only groups | Keep absolute |
| Mixed absolute | A generated group containing both meaningful text and decorative artwork | Split content into flow layout and leave artwork as decorative |
| Map internals | Google map mock controls, pins, overlays, map image positioning | Keep absolute inside the map mockup |

## Shared Layout Helpers

| Helper | Purpose | Status |
| --- | --- | --- |
| `ContentContainer` | Canonical page width and alignment | Existing |
| `SectionShell` | Section wrapper for background, padding, overflow, and decorative layers | Done |
| `SectionHeader` | Shared heading/subheading layout | Done |
| `ResponsiveGrid` | Shared responsive grid for cards and repeated content | Done |

## Page Cleanup Status

| Phase | Page | Target Content | Status |
| --- | --- | --- | --- |
| 1 | FAQs | Heading, filters, FAQ list, CTA | Done |
| 1 | Contact Us | Heading, intro copy, contact details, map/content columns | Done |
| 2 | Our Impact | Hero copy, pillar/report cards, SDG headings/metrics | Done |
| 3 | Our Story | Section headers, platform/timeline content | Done |
| 3 | Our Team | Hero copy, intro, team grid, values, CTA content | Done |
| 4 | Sell With Us | Offerings, process steps, stories, CTA content | Done |
| 4 | Kenyan Buyers | Product sections, contact, process steps, testimonials | Done |
| 4 | Global Buyers | Product/sourcing/quality/impact/CTA sections | Done |
| 5 | Home | Main content sections after patterns stabilize | Done |

## Test Checklist

- Run `npm run build` after each phase.
- Confirm no text/content is positioned with fixed `top`/`left` coordinates in completed pages.
- Confirm decorative artwork still renders behind or around content.
- Check desktop, tablet, and mobile for:
  - no content overlap
  - no horizontal scroll
  - content aligned with the shared container
  - grids and step sections reflow cleanly

## Build Notes

Existing PrimeIcons font-resolution warnings and large chunk warnings are known and out of scope for this cleanup unless new errors are introduced.

Latest verification: `npm run build` passes after all cleanup phases.
