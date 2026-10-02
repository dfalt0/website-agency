# Concept 18 — Compare (Before/After Comparator)

## Architecture
The hero is a **single full-width comparator stage** (≈68vh) containing two real mini-sites stacked on one another: A "template site" (shared-host, page builder, popups, cookie bar, lorem ipsum) and B "custom + hosted" (same business, designed and coded). A clip-path scrubber reveals B over A. A transparent `<input type=range>` fills the stage, so mouse, touch and keyboard all work. An intro sweep animates once to show the affordance.

Page order: top bar → short split headline/paragraph → **comparator** → measured readout (two coloured strips, 4 metrics each) → offer strip (Build / Host / Care + dark CTA tile).

## Positioning
Custom websites + hosting + care, argued by demonstration. The pitch is the diff between A and B; copy only labels it.

## Voice
Plain, slightly dry. Metrics over adjectives. The template side is deliberately accurate, not cartoonish: real plugin counts, real cookie banner.

## Visual system
| Token | Value | Role |
|---|---|---|
| Page | `#E8EBEF` | Neutral studio wall |
| Ink | `#0A1830` | Text, borders |
| Navy | `#0A1F44` | Custom-site surface |
| Lime | `#C6F432` | "B" marker, handle, one CTA |
| Template blue | `#2F6FB5` | Only inside layer A |

**Type:** Bricolage Grotesque (display, tight -0.045em) + DM Mono (labels). Layer A uses Arial on purpose.

## Motion
Scrubber + one intro sweep. Nothing else animates. Hard 1px borders, square handle, no shadows.

## Do not
Use a before/after for decoration — both layers must show the same business and same viewport. Do not add a third state.
