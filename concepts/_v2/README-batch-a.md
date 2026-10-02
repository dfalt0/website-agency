# Batch A — concepts 06–15 (v2)

Rebuild of the deleted 06–35 set. Each folder has its own DOM skeleton, scroll model, and palette. Business is unchanged: custom websites + hosting + ongoing care. YC themes inform voice and metaphor only. 01–05 are untouched.

Preview: `npx serve concepts -l 3001` then `http://127.0.0.1:3001/<folder>/preview`.

| Folder | Codename | Layout archetype |
|--------|----------|------------------|
| `06-specimen` | Specimen | Split macro essay: left chaptered text slab, right sticky 3D CSS specimen that morphs per chapter |
| `07-briefing` | Briefing | Agent briefing document: header strip, numbered procedures, CLI and SLA tables, MUST/NEVER contract bullets, margin notes |
| `08-overlay` | Overlay | One fixed SVG landscape + question-led glass overlays on scroll, ending in a dual-path fork |
| `09-theater` | Theater | Demo theater: light app shell, left program list swaps right mock-product panels, play/pause |
| `10-sponsor` | Sponsor | Capital manifesto: label-column sections (Mission, Vision, criteria matrix, proof strip, team strips, investor form) |
| `11-traverse` | Traverse | Horizontal strip: five 100vh panels of unequal widths, wheel-to-horizontal, route progress bar |
| `12-spread` | Spread | Asymmetric magazine: four 12-col spreads with spine title, image well, pull quote, ruled form |
| `13-rail` | Rail | Sticky-rail essay: left scrollspy TOC, right longform with four different inline figures |
| `14-chapters` | Chapters | Snap full-viewport: five chapters, five different compositions (words, wedge, numeral, chart, split form) |
| `15-schematic` | Schematic | Blueprint drawing set: framed sheets with SVG three-view drawing, dimension lines, BOM and title blocks |

## Shared constraints honored
- No centered hero + eyebrow + 2 CTAs + 3 equal cards + CTA band.
- No purple gradients, cream + terracotta, broadsheet, emoji, glow, or pill clusters.
- Self-contained `preview.html` (inline CSS and JS, system font fallbacks, no network assets).
- All stats, names, and SLA figures are placeholders.
