# Concept 35 — Scope (Scope Calculator Hero)

## Architecture
The first viewport **is a tool**. 7/5 split: left, a large question headline ("How big is your website?") followed by five numbered questions as ruled rows (segmented control, page-count range slider, multi-select chips, traffic segment, after-launch toggle); right, a dark sticky **readout** that updates on every input — a price range in large mono type, a weeks estimate, a 40-cell "shape" grid (teal = pages, amber = extras), and three stats (pages / extras / host per month). A teal **"Show me the offer"** button expands the offer *inside* the readout: Build range, Host price (scales with traffic), Care price (scales with scope; or off), estimated year-one total, and the CTA "Send this shape to the studio →".

The offer is hidden until asked for — the page earns the sale by giving a number first.

## Pricing logic (light JS, inline)
- Base: brochure $4,500 · service $7,500 · shop $12,500 · app $16,000, plus $250 per page beyond 8
- Extras: booking $1,800 · payments $3,200 (free in shop) · logins $3,500 · blog $900 · two languages $1,500 · content move $600
- Range = computed price → +15%, rounded to $100 (never below the $4,500 "from" price). Weeks = base 3/5/7/10 + pages/8 + 0.6 per extra
- Host $49 / $129 / $299 by traffic; Care $199 (or $549 when pages>20, ≥4 extras or app) or none

## Positioning
Custom websites + hosting + care, with the buyer's first interaction being *telling us what they need*, not reading about us. Cue: scoping and intake tools that turn vague wants into a concrete spec.

## Voice
Plain questions, "you" voice. Answers are things people can say without jargon ("Show who we are", "Take bookings").

## Visual system
| Token | Value |
|---|---|
| Paper | `#F3F5F4` |
| Ink | `#0F1A17` |
| Display | `#0C1412` (readout) |
| Teal | `#00A88F` (selection, pages, CTA) |
| Amber | `#FFC02E` (extras only) |

**Type:** Sora (questions, UI) + Martian Mono (numbers, tags). Square controls, 1.5px ink borders, no radius.

## Motion
Live numeric update; cells recolour; offer panel expands (max-height + fade, .55s).

## Do not
Gate the estimate behind an email. Show the offer before the user asks. Use dropdowns where a segmented control works.
