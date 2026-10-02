# 28 · Spine — Vertical marker timeline

**Cue:** the long view. Most agencies sell a launch; Spine sells the whole length of a site's life (day 0 → year 3).
**Metaphor:** a ruler/spine running down the page; every event hangs off it.

## Layout fingerprint
- One **long vertical spine** (2px line, ruler ticks every 24px) on the page's centre axis. It fills vermilion as you scroll (scroll-linked, JS).
- ~10 **nodes** alternate left/right. A node is NOT a card: no box, no border — just a big mono timestamp on one side of the spine and an editorial paragraph on the other, joined to the spine by a short horizontal tick and a dot.
- Left-aligned asymmetric opener (huge serif sentence + a "you are here" marker), not a centred hero.
- Phase dividers are oversized outline words ("BUILD", "HOST", "CARE") sitting ON the spine, rotated 90°.
- Mobile: spine moves to the left edge, all nodes read downward on one side.

## Type
Fraunces (optical-size display, soft italics) for headlines and node titles. Inter Tight for text. JetBrains Mono for timestamps (`DAY 03`, `WK 07`, `MO 06`, `YR 03`).

## Colour
Paper `#F3EFE6`, ink `#141414`, vermilion `#E8452C` (only for progress, dots, one key figure per node). Hairlines `#C9C2B0`.

## Motion
Scroll progress fills the spine. A node's dot goes from hollow to filled when reached; its text slides 16px toward the spine and fades in (IntersectionObserver). Reduced-motion: no slides.

## Uniqueness check
Only concept where the narrative axis is vertical, central, and alternating, with zero card containers.
