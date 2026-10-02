# Concept 31 — Canvas (Artboard Canvas)

## Architecture
The page is a **design-tool window**: 44px app bar, 52px tool rail, and an infinite-feeling board (2500×1500px, dot grid) inside a scroll container. Content lives in six floating **frames** at irregular positions and sizes — not a grid — joined by dashed connector paths labelled design → ship → keep → decide. Sticky notes and two "multiplayer cursors" (Mara — designing, Kai — deploying) give it life. Panning = native overflow scroll plus drag-to-pan; a bottom-right minimap tracks the viewport; the tool rail jumps to frames.

Frames: 01 Intro · 02 Build (black) · 03 Host (yellow, DNS→Edge→Site chain) · 04 Care (request list) · 05 Pricing (table) · 06 Start (form).

## Positioning
Custom websites + hosting + care, shown as *a studio's live working board* — the buyer sees it laid out before they pay for it. Cue: tools-for-builders, designer/engineer overlap.

## Voice
Annotation-like. Frame titles in monospace ("02 / Build"), notes written in first person by named people.

## Visual system
| Token | Value |
|---|---|
| Board | `#1B1C1E` with `#34363A` dots, 24px |
| Frame fills | white `#FFF` · black `#0D0D0E` · yellow `#FFD60A` · paper `#F1F1F0` |
| Selection | `#0A84FF` (hover outline, handles, dimension chip) |
| Note colors | yellow, pink `#FF9ECB`, white |

**Type:** Hanken Grotesk (800 for frame headlines, -0.04em) + Red Hat Mono (frame labels, tags).

## Motion
Hover on a frame reveals selection handles and a size chip; cursors drift; jump-links smooth-scroll the board. No other animation.

## Light JS
Drag-to-pan, minimap, jump-to-frame.

## Do not
Align frames to a grid or equal sizes. Put any content outside a frame or note.
