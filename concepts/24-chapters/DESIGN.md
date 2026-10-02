# 24 — Chapters

**Archetype:** Snap full-viewport. Five vertical `scroll-snap` sections, each a different composition.

## Layout architecture
`html { scroll-snap-type: y mandatory }`, every `.ch` is `min-height: 100svh`. A right-edge dot nav (with hover labels) and a difference-blended logo are the only persistent chrome. Elements inside each chapter use `.rv` staggered reveals triggered when the chapter becomes `.act`.

1. **Open (black):** three giant lowercase words (solid / outline / green) stepped diagonally at bottom-left; a cropped flat green disc top-right carrying the intro copy.
2. **Build (white + green wedge):** clip-path diagonal green field; headline "By hand." bottom-left; three offset wireframe windows on the right that separate on enter.
3. **Host (slate):** an enormous outlined "99.9%" fills the screen as a background; headline top-left; three facts staggered along a baseline with stepped vertical offsets.
4. **Care (green):** 5fr/7fr split — text bottom-left, 12-bar chart growing from the baseline with one outlined "hit" bar.
5. **Talk (black/white split):** top half is a giant "Talk." on white; bottom half is a single-row horizontal form.

No repeated card grid, no bottom CTA band (the form chapter IS the end).

## Visual system
Black, off-white, one flat green and a steel slate for the host chapter. Heavy grotesque, tight tracking (-0.05em), mono for chapter labels. Square, flat, 1–2px lines. No gradients, no blur.

## YC cue
Robotics/simulation-style "scenes": each chapter is a staged test environment with its own geometry.
