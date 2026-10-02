# 23 — Rail

**Archetype:** Sticky-rail longform essay.

## Layout architecture
- `body` = 2-column grid: 300px **sticky left rail** + essay column.
- Rail: wordmark, vertical TOC (Build / Host / Care / Contact) with a connecting line and square stations that turn raspberry when active and ink when passed (scrollspy), plus read-progress meter at the bottom. Below 900px the rail becomes a thin top bar.
- Essay: one 700px measure of serif body text. Four parts, each with a mono "Part N" kicker. Sentences carry footnote numerals; notes are collected at the end.
- **Inline figures** break out of the measure to the right (negative right margin) and are all different diagrams:
  - Fig 1: Gantt-style build timeline bars.
  - Fig 2: chevron-linked release path (Commit → Staging → Gate → Origin → Edge → Visitor).
  - Fig 3: 12-cell monthly care calendar with one highlighted pass.
  - Fig 4: the contact form, presented as a figure.
- No cards, no hero image, no CTA band.

## Visual system
Warm-neutral white page, cool gray rail, ink text, one raspberry accent used for state and highlighter marks. Serif body, sans for rail, mono for kickers and figure labels. Flat, hairline rules.

## YC cue
Legal/insurance ops "explainer" tone: precise prose, footnoted claims, process figures.
