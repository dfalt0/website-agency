# 37 · Parcel — Zoning-map board

**Cue:** real estate / infrastructure demand — land gets developed in order; a site does too.
**Metaphor:** a county zoning & parcel sheet. Each engagement stage is a plot of land you can click.

## Layout fingerprint
- The **map is the page**. Left ~65%: an inline SVG board with six irregular parcels, roads, a rail line, a vacant reserved lot. Right ~35%: a sticky **deed panel** (parcel number, zone, area, use, easements, assessed value).
- Navigation = clicking plots (or ←/→ / Tab + Enter). No section scroll for the core story.
- Below the board: legend (zone colours), a drawing **title block** (sheet no., scale, north arrow) and a notice-of-hearing paragraph with the CTA.
- Asymmetric: no centred hero; the "headline" is a small notice stamped on the sheet's header band.

## Zones → stages
| Parcel | Stage | Zone |
|---|---|---|
| 01 | Survey (discovery) | R · Planning (amber) |
| 02 | Grade (design) | R · Planning (amber) |
| 03 | Foundation (build) | C · Construction (rust) |
| 04 | Frame (content & QA) | C · Construction (rust) |
| 05 | Utilities (hosting) | I · Infrastructure (teal) |
| 06 | Occupancy (care) | S · Service (green) |
| 07 | Reserved lot | Expansion (grey, dashed) |

## Type / colour
Archivo Narrow caps for map labels, IBM Plex Mono for lot numbers & figures, Newsreader for deed prose. Survey paper `#EFEBDD`, ink `#22303A`, zone fills as above at ~85% with hatch on selection.

## Motion
Hover thickens outline and lifts fill; selection draws hatch + animated dashed boundary ("marching ants"); deed panel cross-fades.

## Uniqueness check
Only concept whose primary interface is a spatial, clickable SVG map; zoning colour semantics carry the narrative.
