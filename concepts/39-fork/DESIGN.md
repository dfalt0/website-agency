# 39 · Fork — Dual-audience toggle

**Cue:** two buyers, two vocabularies. A shop that runs lunch service and a seed-stage startup do not need the same sentences.
**Metaphor:** a railroad switch. One site, two tracks — flip it and everything re-lays.

## Layout fingerprint
- A **full-width sticky toggle bar** ("I am…" + a big two-position switch with a sliding thumb) is the dominant control on the page, always visible.
- The toggle changes the ENTIRE page: headline, lede, facts, service rows, process, pricing, CTA — and the palette, typefaces, corner radius and weight.
  - **Operators:** warm cream, forest green, amber; Young Serif + Public Sans; square corners.
  - **Founders:** near-black, ultramarine, acid lime; Bricolage Grotesque + DM Mono; pill corners.
- Page body is a **left-aligned split hero** (headline left, mono spec sheet right), then a **ledger table** (Build / Host / Care rows), a two-column **numbered process**, and a **price ledger**. No centred hero, no card trio.
- State persists via `localStorage` and `?for=founders`. Keyboard: ← / → on the switch.

## Motion
Uses the View Transitions API (when available) to wipe the new theme outward from the toggle thumb with a circular `clip-path`; falls back to a quick cross-fade. Thumb slides 280 ms on `--ease`.

## Type / colour
See tokens.css: all colours and fonts are theme variables so both worlds share one stylesheet.

## Uniqueness check
Only concept where the primary interaction rewrites copy + visual identity wholesale; the two states are intentionally unrecognisable as the same palette.
