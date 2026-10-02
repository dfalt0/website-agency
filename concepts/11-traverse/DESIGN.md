# 11 — Traverse

**Archetype:** Horizontal strip. The page never scrolls vertically.

## Layout architecture
- `html, body` are `overflow: hidden`. A single `.track` flex row is the scroller (`overflow-x: auto`, `scroll-snap-type: x proximity`). Mouse wheel is remapped to horizontal motion; arrow keys and route buttons also work.
- Five panels, each 100vh tall, of **different widths** (100vw / 115vw / 170vw / 100vw / 100vw), each with a different composition:
  1. Depart: oversized stacked headline (solid / outlined / yellow) + route-sheet table.
  2. Build (yellow): ghost numeral and a diagonal descending staircase of five steps.
  3. Host (dark, 170vw): one long rail with nodes (Build → Gate → Origin → Edge → Vault → You) and text anchored at points along it.
  4. Care (white): rotating loop diagram plus a ruled list.
  5. Arrive (yellow): giant word + dark form block.
- Fixed chrome: brand, KM counter, and a bottom **route bar** with five stations and a fill that tracks progress. Clicking a station scrolls there.

## Visual system
Black, route yellow, off-white. Heavy grotesque in all caps for display, mono for readouts. Hard edges, 1–2px rules. No gradients or glow.

## YC cue
Logistics/ops "route" thinking (wholesale ops, CNC job traveler): a work order travelling through stations.

## Mobile
Panels keep horizontal travel; 1/4/5 stack their grid inside.
