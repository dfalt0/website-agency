# 18 — Overlay

**Archetype:** One continuous fixed scene + question-led glass overlays that reveal on scroll.

## Layout architecture
- `.scene` is `position: fixed` behind everything: an SVG night landscape (far ridge, mid ridge with power towers and data hall, near terrain with contour ellipses, flowing pipeline, survey crosses) plus a faded survey grid. JS maps scroll progress `p` to camera zoom, per-layer parallax, a night veil, and HUD readouts (coordinates, altitude).
- Content sections are tall (120–130vh) empty "air" with a single `.ov` overlay panel anchored in a different place each time (bottom-left, bottom-right, mid-left, bottom-right). Each overlay opens with a question as its headline and fades in via IntersectionObserver.
- Final section is a **dual fork**: two full-width halves (Path A: need a site built / Path B: have a site that needs a keeper). Picking one unlocks a form drawer whose heading and URL requirement change.
- No nav bar: only a HUD and a "skip to fork" link.

## Visual system
Night teal and slate, one survey-yellow accent used for markers and labels. Glassmorphism only on overlays. Mono for readouts. 0.5px lines.

## YC cue
Geospatial intelligence density: coordinates, altitude, survey marks, layered data over terrain, applied to the layers of a web presence.
