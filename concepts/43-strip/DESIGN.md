# 43 · Strip — Filmstrip storyboard

**Cue:** story-first. The engagement is a short film with a beginning, a 3 a.m. alert, and a sequel.
**Metaphor:** a strip of 35 mm film with hand-drawn storyboard frames.

## Layout fingerprint
- **Horizontal-only page.** One continuous film strip scrolls sideways (wheel is mapped to horizontal; arrows and ←/→ keys step frame by frame; scroll-snap).
- Strip = dark film base with **sprocket holes** (SVG-tiled rounded rects) running along the top and bottom edges, plus **orange edge-print** text (`STRIP 400 ▸ 12A ▸ 13`) between hole rows and a frame number under each cell.
- **Nine frames**: leader countdown → The Call → The Quote → The Cut → Rehearsal → Launch Night → 03:00 alert → Month Six → Credits (pricing + CTA).
- Each frame = storyboard sketch (inline SVG line art, one orange highlight) over a **slate** (scene / shot / int-ext) and 2–3 lines of narrative.
- Bottom **timecode scrubber** (00:00:00 → engagement length) with tick per frame; clicking a tick seeks. Top-right frame counter `03 / 09`.
- No vertical sections; no hero. The page title is the leader frame.

## Type
Bebas Neue (scene titles), Courier Prime (slates and timecode), Barlow (narrative text).

## Colour
Film base `#1F1812`, page dark `#110D09`, edge-print orange `#F28C28`, cell paper `#E9E0C8`, cell ink `#1C1712`.

## Motion
Active frame lifts 6px and gets full contrast; neighbours dim to 55%. Countdown numeral ticks on first view.

## Uniqueness check
Only concept with a fixed horizontal narrative axis and physical film artefacts (perforations, edge codes).
