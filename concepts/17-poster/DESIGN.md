# Concept 17 — Poster (Type Poster)

## Architecture
Three full-viewport "sheets" like pinned-up posters. First viewport = three words at ~31vw, stacked and staggered, bleeding past the right edge. Almost no chrome: four fixed corner labels (blend-mode difference) replace the nav. Everything explanatory is a **caption** — a small ruled paragraph hung from the type.

1. **Yellow sheet** — BUILT. HOSTED. KEPT. with three captions pinned across the top on a 3-col rhythm.
2. **Black sheet** — Prices as three giant numerals in ruled rows ($4.5K / $49 / $199); caption right-aligned to each row; row inverts on hover.
3. **White sheet** — SAY HI. twice (solid + outlined), both mailto links.

## Positioning
Custom websites + hosting + care, stated as three verbs. Confidence by volume and brevity. Cue: bold, plainspoken founders; one-line product theses.

## Voice
Verb-led, past participles, full stops. Max 20 words per caption. No adjectives that sell.

## Visual system
| Token | Value |
|---|---|
| Hi-vis | `#FFE600` |
| Ink | `#0B0B0B` |
| White | `#FFFFFF` |

**Type:** Anton (display, all caps, line-height .84) + Instrument Sans (captions only, 13–14px). Two sizes of text exist on the page: HUGE and tiny.

## Motion
CSS only: hover swaps (word turns white, price row inverts, outline fills). Proximity scroll-snap between sheets.

## Do not
Add buttons, cards, icons, images, gradients, or a nav bar. The captions *are* the body copy.
