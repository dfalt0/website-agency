# 06 — Specimen

**Archetype:** Split macro essay (50/50), chaptered scroll story.

## Layout architecture
- `body` is a 2-column grid. Left `.slab` scrolls; right `.plane` is `position: sticky; height: 100vh`.
- Left: six full-height `.chapter` sections (00 sample, 01 build, 02 revision stack, 03 quarantine, 04 drift, 05 form). Each is a single column of text plus ONE bespoke diagram. No card grid.
- Right: a single CSS-built "specimen" (4 stacked plates with holes, etched layout, orange sample window, measurement film). IntersectionObserver writes `data-ch` on the plane; `@property`-animated `--gap/--rx/--rz/--qx` flatten, explode into an isometric revision stack, slide one layer out for quarantine, and run a scan line for care.
- Form is chapter 05 (last scroll stop), not a CTA band.

## Custom diagrams (CSS only)
- Inspection sheet: ruled table with PASS/HOLD flags.
- Revision stack: indented, offset bars with a dashed spine; live revision in accent.
- Quarantine tray: 4×2 compartment grid, one cell dashed-outlined as HELD.
- Drift table: tolerance bands with a tick marker.

## Visual system
Industrial monochrome (graphite, steel line) with one sharp accent (inspection orange `#ff5a1f`). Mono for IDs and readouts. 0.5px rules, square corners, clipped-corner button. No glow, no gradients beyond metal shading.

## YC cue
Visual inspection / master-reference rigor from manufacturing QA, translated into release gates and drift checks for sites.

## Responsive
Below 860px the plane becomes a 46vh header band; chapters stack.
