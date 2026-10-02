# 45 · Directory — Index-first

**Cue:** look it up, don't be sold to. People who know what they need find the entry; people who don't read down the list.
**Metaphor:** a printed trade directory / book index, built as a working UI.

## Layout fingerprint
- **No hero.** The first screen is a yellow masthead, a big **search field**, category filters (All · Build · Host · Care · Terms) and the **A–Z index itself**.
- Sticky **alphabet rail** on the left: letters with entries are solid, empty letters are struck/dim; clicking jumps.
- Main column is grouped by letter: oversized black letter in the left gutter, then **numbered rows**: `D-014  Domains & DNS ........ [H]`. Dotted leaders, category chip as a coloured square letter.
- **Entries expand inline** (accordion, plus/minus glyph): summary, detail, price if any, and "See also →" cross-refs that jump + open the target entry. Deep-linkable (`#backups`).
- A pinned yellow row "★ Start a project" is entry 000 and expands into contact details.
- Live search filters rows and hides empty letters; `/` focuses search; ↑/↓ moves between rows; Enter toggles.

## Type
Libre Franklin 900 for letters/masthead, 500–600 for terms; IBM Plex Mono for entry numbers, categories, prices.

## Colour
Index yellow `#F5D327`, paper `#FBFAF3`, ink `#111`. Category squares: Build black, Host blue `#2D6CDF`, Care green `#1C8A4B`, Terms red `#C23B22`.

## Motion
Row expand = height + content fade (180 ms); yellow highlight sweeps on hover; letter rail active state follows scroll.

## Uniqueness check
Only concept whose entire information architecture is an alphabetical lookup table; the offer is discovered by querying it.
