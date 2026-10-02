# 25 — Schematic

**Archetype:** Blueprint / engineering drawing set (3 sheets).

## Layout architecture
- Background is a blueprint blue with a two-level CSS grid (20px minor, 100px major).
- Each `.sheet` is a drawing sheet: double-line border frame, zone letters (A–D) down the sides and numbers (1–6) across top and bottom, and a **title block** (title, dwg no., revision, scale, sheet n/3) in the lower-right.
- **Sheet 1 — General assembly:** one inline SVG with three orthographic views arranged left→right:
  - View A: SITE elevation (browser wireframe, with width and LCP dimension lines, section line A–A).
  - Section A–A: HULL (hatched section of a hull cross-section whose ribs are CODE / CONTENT / CONFIG, deck plate on top, "YOUR REPO" dimension).
  - View B: HOST plan (base plate, mounting holes, concentric origin circles, center lines, Ø 3 regions, 99.9% dimension).
  Callout balloons 1/2/3 connect via leader lines; hovering one dims the other parts and highlights it. Strokes draw on load.
- **Sheet 2:** Bill of materials table (linked hover to the drawing), tolerance table, revision history.
- **Sheet 3:** Change-order form laid out as a title-block-style cell grid.
- No hero, no cards, no CTA band.

## Visual system
White lines on blue, thin dimension lines with arrowheads, dash-dot centerlines, hatch for section. Mono only. One cyan highlight for active state. No shadows, no glow.

## YC cue
CNC / hardware fab precision: tolerances, BOM, revisions, change orders.
