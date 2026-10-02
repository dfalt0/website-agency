# Concept 34 — Cutaway (Cutaway Diagram)

## Architecture
An engineering **section drawing** is the whole first viewport. Left 57%: the title + a hand-built SVG cross-section of the stack, top to bottom in request order — (1) Visitor → (2) DNS → (3) Edge network → (4) Host → (5) The site → (6) Backups & data — joined by dashed orange flow arrows. Hatched "cut" bars mark each sliced layer. Each layer has an **orange numbered callout** with a leader line. **Care (7)** is drawn as a bracket wrapped around layers 2–6 on the left edge. A title block (drawing no., scale, revision, drawn by) closes the sheet.

Right 43%: a **parts list** numbered 1–7 matching Fig. 1, carrying the prices (Host $49/mo, Site from $4,500, Care $199/mo) and one honest sentence each. Hover/focus on either side highlights the pair. A boxed call to action ("Request a survey") sits at the foot.

## Positioning
Custom websites + hosting + care explained by **showing what's under the floor**. Anyone who has asked "what am I actually paying for?" gets their answer visually. Cue: infrastructure literacy, simulation / physical-systems thinking.

## Voice
Technical-plain. Labels in caps mono; list items in short declaratives. No hype words.

## Visual system
| Token | Value |
|---|---|
| Paper | `#F2F7FA` on a 40px faint grid |
| Linework | `#0B2545` (1.3–1.6px) |
| Hatch | `#8DA9C4` 45° |
| Callout | `#FF5A1F` (callouts, flow arrows, hover, CTA only) |
| Callout tint | `#FFE6DA` |

**Type:** Schibsted Grotesk (headings and list) + Overpass Mono (labels, title block).

## Motion
Linked hover only. No path animation.

## Light JS
Hover pairing between SVG layer and parts list.

## Do not
Use gradients, soft shadows or illustration style. Everything is linework and hatching. Do not centre the headline.
