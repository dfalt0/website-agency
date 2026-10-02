# 34 · Bench — Workbench of tools

**Cue:** CNC / hardware shop — tolerances, spec plates, tools you can pick up.
**Metaphor:** a pegboard shadow-board above a beech workbench. Every service is a tool; taking one down puts it on the bench with its spec plate.

## Layout fingerprint
- **Top half = pegboard wall** (dot-grid of peg holes). Six tools hang at uneven heights on a 6-column rack, each with a **painted shadow outline** left behind when taken, and a paper tag (`T-02 · BUILD`).
- **Bottom half = workbench**: beech wood-grain top with a **ruler** running along the front edge. The selected tool lies on the bench left; a riveted **spec plate** (engraved-metal label) sits right with Function, Spec rows, Tolerance and Price.
- Interaction = "take a tool down" (click/Enter). Prior tool is hung back. Default: Router (Build).
- Below the bench: a hazard-striped **order strip** (CTA), and a small "shop hours / how it ships" line.
- Tool ↔ service map: Calipers = Scope · Router = Build · Vise = Host · Multimeter = Monitor · Wrench = Edits · Oil can = Care.

## Type
Saira Condensed (headings, tags), Saira Semi Condensed (body), Overpass Mono (spec rows, numbers).

## Colour
Pegboard `#38423D`, steel `#CFD6D2`, beech `#B98B5A`, hi-vis `#FF5A1F`, hazard `#FFCF1F`, plate `#D8DCD7`. Flat fills only; physical shadows via CSS filter.

## Motion
Tool lifts + rotates -3° as it leaves the board; slides to the bench with a 450 ms ease; plate rows type in sequentially. Hover on a tool: 4px swing.

## Uniqueness check
Only concept using a physical two-surface metaphor (wall + bench) where position communicates state (hung vs on bench).
