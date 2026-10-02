# Concept 19 — Catalog (Catalog Index)

## Architecture
The homepage is a **parts-catalog inventory**. A dense masthead (edition, one-sentence offer, contact), a tool row (live count, search, section chips), then a two-column layout: sticky section index at left, and the inventory at right. Inventory = lettered sections (A Build, B Host, C Care, D Extras), each a ruled table of **SKU lines**: code · item · spec · lead time · price · expander. Rows are native `<details>` that open to Included / Best for / Notes. Ends with an order form sheet (a "typical order" lines list).

No cards. No hero. The reader browses, filters, opens rows — the structure *is* the pitch (everything we sell is listed and priced).

## Positioning
Custom websites + hosting + care as an honest price list. Cue: practical, procurement-friendly, ops-literate buyers.

## Voice
Spec-sheet. "Lead", "Spec", "Included", "Notes". Prices always visible. No marketing verbs.

## Visual system
| Token | Value | Role |
|---|---|---|
| Paper | `#FFFFFF` | Ground |
| Ink | `#151515` | Text and heavy rules (3px section rules) |
| Catalog blue | `#0A4DA2` | SKU codes |
| Highlighter | `#FFE100` | Row hover/open — the only decoration |
| Grey | `#F2F2F2` | Table header band |

**Type:** Archivo Narrow (names/specs) + Space Mono (codes, prices, lead times). 15px base — it is deliberately dense.

## Motion
No Framer-type flourish: native details expansion; instant filter. Hover = yellow row.

## Light JS
Search + chip filter show/hide rows and update the "items listed" counter.

## Do not
Wrap SKUs in cards, add icons or imagery, or centre text.
