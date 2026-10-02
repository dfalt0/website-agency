# Batch C — concepts 26–35 (v2 rebuild)

Each folder: `preview.html` (self-contained, `@import`s its own `tokens.css`), `DESIGN.md`, `copy.md`, `tokens.css`.
Business in every concept: **custom websites + hosting + care**. Shared facts (so copy is comparable): Build from $6,500 fixed (Fork founders: $4,800 sprint) · Host $79/mo · Care $249/mo incl. hosting + 3 edit hrs · month-to-month · export in 5 business days.

Preview: `npx serve concepts -l 3001` → `http://127.0.0.1:3001/26-docket/preview.html` (or open the file directly).

## Folders

| # | Folder | Codename | Layout | JS |
|---|---|---|---|---|
| 26 | `26-docket` | Docket | Case-file tabs | tabs, stamp, form |
| 27 | `27-parcel` | Parcel | Zoning-map board | SVG plots → deed panel |
| 28 | `28-spine` | Spine | Vertical alternating timeline | scroll progress |
| 29 | `29-fork` | Fork | Dual-audience toggle (whole page) | content+theme swap |
| 30 | `30-monolith` | Monolith | Single-column essay | progress bar only |
| 31 | `31-stage` | Stage | Spotlight theatre | IO cue lights, follow-spot |
| 32 | `32-shell` | Shell | Multiplexed CLI | command interpreter |
| 33 | `33-strip` | Strip | Horizontal filmstrip | snap-scroll, scrubber |
| 34 | `34-bench` | Bench | Pegboard + workbench | take-tool-down |
| 35 | `35-directory` | Directory | A–Z index, inline expand | search/filter/accordion |

## Layout fingerprints (one line each)

- **26 Docket** — Staggered manila folder tabs are the only nav; a lined paper sheet with a left *caption box* and right *numbered legal paragraphs* (1.1, 1.2). Content swaps per tab. Navy/manila/stamp-red; Caslon + Courier + Plex Sans.
- **27 Parcel** — Inline SVG survey map (6 irregular parcels + reserved lot, roads, rail) fills ~65% width; sticky **deed panel** on the right. Click a plot to read its "deed". Zoning colours (amber/rust/teal/green) = phases. Archivo Narrow + Newsreader + Plex Mono on survey paper.
- **28 Spine** — Centre vertical ruler-line with vermilion scroll-fill; 10 nodes alternate L/R as *bare text + giant mono timestamp* (no cards); outlined phase words ("Host", "Care") sit on the spine. Fraunces + Inter Tight + JetBrains Mono, cream paper.
- **29 Fork** — Full-width sticky **two-position switch** (Operators / Founders) rewrites headline, facts, service ledger, process, pricing **and** swaps palette, fonts, radius (cream+green serif ↔ black+ultramarine grotesque/mono) with a circular View-Transition wipe. Left-aligned split hero + definition ledger.
- **30 Monolith** — One 34rem justified serif column offset left; no nav, no sections, no buttons. Roman-numeral small-caps run-in heads, footnotes, 3 sparse figures (cost bar SVG, report block, fee table). CTA is an inline email. Source Serif 4 + one teal accent.
- **31 Stage** — Blackout with fixed velvet side curtains and footlight dots. Pointer-driven follow-spot reveals the "STAGE" prologue; three acts each lit by a CSS cone (clip-path + screen blend) from a lamp fixture, alternating L/R/centre; content dim until cued. Pricing = perforated ticket stubs. Bodoni Moda + Jost + Courier.
- **32 Shell** — Whole page is a terminal window: title bar, left **agents pane** (3 live statuses), main shell with command chips + typed commands (`help services build host care pricing status attach apply`), tmux-style status bar. Offer exists only as command output. Martian Mono, slate-black + coral prompt.
- **33 Strip** — Horizontal-only film strip: dark base, sprocket-hole rows, orange edge-print, 9 storyboard cells (SVG line art + slate + caption) from countdown leader to credits. Wheel→horizontal, drag, ←/→, timecode scrubber. Bebas Neue + Courier Prime + Barlow.
- **34 Bench** — Top: pegboard wall with 6 hung tools (SVG) over painted shadow outlines; click removes tool ("OUT" tag). Bottom: beech bench with ruler edge, tool lying on a taped drawing + riveted **spec plate** (tolerance/price). Hazard-stripe order strip. Saira Condensed + Overpass Mono.
- **35 Directory** — No hero: yellow masthead + giant search + category chips, sticky A–Z rail, numbered entries with dotted leaders and category squares; rows expand inline with *See also* cross-links that jump-and-open. 28 entries, deep-linkable. Libre Franklin 900 + Plex Mono.

## Uniqueness self-check

| Axis | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 |
|---|---|---|---|---|---|---|---|---|---|---|
| Primary nav | folder tabs | map plots | scroll | audience switch | none | scroll cues | commands | horizontal scroll | tools | search + A–Z |
| Reading axis | swap-in-place | spatial | vertical centre | vertical | vertical narrow | vertical scenes | terminal append | **horizontal** | wall→bench | alphabetical list |
| Container for content | paper sheet | deed panel | bare text | ledger rows | prose | lit pool | terminal lines | film cell | spec plate | accordion row |
| Hero? | no | notice box | left headline | split hero | h1 only | giant word | boot output | leader frame | wall headline | none |
| Light/Dark | manila on dark | light | light | **both** | light (auto dark) | black | dark | black | mid-dark wall + wood | light/yellow |
| Hue family | navy/manila/red | amber/rust/teal | vermilion | green↔blue | teal | velvet/brass | coral/slate | film orange | hi-vis orange/beech | yellow |
| Display face | Caslon | Newsreader | Fraunces | Young Serif ↔ Bricolage | Source Serif 4 | Bodoni Moda | Martian Mono | Bebas Neue | Saira Condensed | Libre Franklin 900 |
| Signature interaction | stamp thunk | marching-ants plot | spine fill | circular wipe | none | follow-spot | typed commands | snap + scrub | tool lands on bench | live filter |

Checks run by inspection:
- **Forbidden pattern** (centred hero + 3 cards + CTA): none. Only 31 and 34 show a 3-up of anything (tickets stacked vertically; tool rack is 6 across but is the selector, not marketing cards). No concept uses a centred hero.
- **No two concepts share** nav model, container type *and* palette family; the closest pair is **26 Docket / 30 Monolith** (both paper + serif), separated by tab-folder structure vs. chrome-less prose, and by colour (manila/navy/red vs cold white/teal).
- **Avoided AI-slop tells:** no purple/blue gradient heroes, no glass cards, no icon-in-circle feature grids, no emoji, no "Unlock/Elevate/Supercharge" copy. Gradients appear only as physical light (31), wood/metal (34) or ruler ticks.
- Principles taken from reference sites are structural (density, interaction model), never layout or brand clones.

## Caveats
- Authored without being able to launch a browser or shell in this run (sandbox unavailable), so the previews were reviewed by reading, not visually QA'd. Quick pass recommended: 27 (SVG label overlap), 31 (cone alignment on very wide screens), 34 (tool silhouettes).
- Google Fonts are loaded by `<link>`; offline falls back to system serif/sans/mono and the layouts still hold.
- The workspace still contains the earlier `concepts/06-…35-*` folders (e.g. `26-runtime`, `35-afterburn`) even though the brief says they were deleted. They were **not touched**; new folders have distinct names so nothing collides, but numbers 26–35 are now used twice until the old ones are removed. `concepts/README.md` has not been updated.
