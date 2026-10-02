# Batch B — concepts 16–25

Ten homepages, ten different **page architectures**. Each folder has `preview.html` (self-contained CSS + HTML, optional light JS, Google Fonts with system fallbacks), `DESIGN.md`, `copy.md`, `tokens.css`.

Shared business facts (so concepts compare fairly): Build from $4,500 · Hosting $49/mo · Care $199/mo.

| # | Folder | Codename | Architecture |
|---|---|---|---|
| 16 | `16-wall` | Wall | Ops wall / NOC status board |
| 17 | `17-poster` | Poster | Type poster, three full-viewport sheets |
| 18 | `18-compare` | Compare | Before/after comparator stage |
| 19 | `19-catalog` | Catalog | SKU-line inventory index |
| 20 | `20-thread` | Thread | Chat-thread narrative in an app shell |
| 21 | `21-canvas` | Canvas | Floating artboards on a pannable board |
| 22 | `22-letter` | Letter | Formal letter on stationery + enclosures |
| 23 | `23-notebook` | Notebook | Ruled lab-notebook with margin annotations |
| 24 | `24-cutaway` | Cutaway | SVG cross-section with numbered callouts |
| 25 | `25-scope` | Scope | Calculator hero, offer revealed on demand |

## Layout fingerprints

Each fingerprint = what the first viewport is, the skeleton, how the offer is shown, and the CTA mechanism. No two share more than one of these.

| Codename | First viewport | Skeleton | Offer shown as | CTA is | Interaction |
|---|---|---|---|---|---|
| **Wall** | 5-cell metric ribbon + panel grid; no headline | 12-col grid of 1px-gutter panels, sticky instrument bar | Three "rack units" U1–U3 | Intake panel, "Open ticket →" | Ticking clock, live deploy feed |
| **Poster** | `BUILT. HOSTED. KEPT.` at ~31vw, bleeding off right edge | 3 stacked 100vh sheets, four fixed corner labels, no nav | Three giant numerals in ruled rows | Giant `SAY HI.` link | Hover inversions, scroll-snap |
| **Compare** | Full-width 68vh browser stage, two sites overlaid | Headline → stage → readout strips → offer strip | 4-col strip under the stage | Dark CTA tile "Request a comparison" | Drag/keyboard scrubber + intro sweep |
| **Catalog** | Dense masthead + search/filter row; no hero | Sticky section index (240px) + lettered tables of SKU rows | Prices **are** the rows (code · spec · lead · price) | Order form sheet with typical-order total | Search, chip filter, expanding rows |
| **Thread** | Mid-conversation: client message, studio reply | App shell: nav sidebar + scrolling thread + docked composer | Quote card as a message attachment | Quick-reply chips above composer | Staggered message reveal, auto-follow |
| **Canvas** | Dark dot-grid board with frames at uneven sizes/offsets | App bar + tool rail + 2500×1500 pannable board | Pricing table inside one frame | "Start a project" share button + form frame | Drag-to-pan, minimap, hover handles |
| **Letter** | Letterhead on a white sheet over slate desk | One 800px sheet + 300px sticky enclosure rail | Dot-leader "Schedule of fees" in body | P.S. + tear-off reply card | Checkboxes only |
| **Notebook** | Notebook title + EXP-01 on baseline-ruled page | 32px baseline grid, red margin rule, notes in left margin | "Protocol" box listing fees | `Begin EXP-05 →` + witness signature line | None (static page) |
| **Cutaway** | Headline + SVG section of the stack (1→6, plus 7 care bracket) | 57/43 drawing + parts list, title block | Prices on parts list entries 4, 5, 7 | "Request a survey" box | Linked hover diagram ↔ list |
| **Scope** | Five-question form beside a live dark readout | 7/5 split; sticky readout | Hidden until "Show me the offer" expands it | "Send this shape to the studio" inside revealed offer | Live calculation, expandable offer |

## Uniqueness self-check

**Structure**
- Hero shape: grid-of-panels (Wall) / type-only (Poster) / media stage (Compare) / table (Catalog) / message list (Thread) / 2D board (Canvas) / document (Letter) / ruled page (Notebook) / diagram (Cutaway) / form (Scope). Ten distinct.
- Navigation: instrument bar (Wall) · none, corner labels (Poster) · top bar (Compare) · section index sidebar (Catalog) · app sidebar (Thread) · tool rail (Canvas) · none (Letter, Notebook) · top bar + legend (Cutaway) · minimal bar (Scope).
- Scroll model: no scroll (Wall) · vertical snap (Poster) · vertical (Compare, Catalog, Letter, Notebook, Cutaway, Scope) · inner-scroll chat (Thread) · two-axis pan (Canvas). The vertical group differs by skeleton, not just styling.
- Pricing representation: rack units, giant numerals, strip, SKU rows, chat attachment, frame table, dot-leader schedule, protocol box, parts list, computed estimate. No repeat.
- CTA: ticket, link, tile, order form, chip, share button, P.S./reply card, signature button, boxed link, revealed button. No repeat.

**Visual**
| | Ground | Primary accent | Display font | Corner geometry |
|---|---|---|---|---|
| Wall | near-black blue | amber (+ status green) | Barlow Condensed + Plex Mono | square |
| Poster | hi-vis yellow / black / white | none (ink only) | Anton | square |
| Compare | light grey + navy | lime | Bricolage Grotesque | square |
| Catalog | white | catalog blue + yellow highlighter | Archivo Narrow | square |
| Thread | ice grey-blue | amber | Figtree | **20px bubbles** |
| Canvas | charcoal dot grid | selection blue + yellow/pink frames | Hanken Grotesk | 0–7px |
| Letter | slate desk, white paper | wax red on navy ink | Cormorant / EB Garamond | square |
| Notebook | pale blue ruled paper | pen blue + stamp red + highlighter | Special Elite | square |
| Cutaway | pale blueprint paper | orange callouts | Schibsted Grotesk | square / round callouts |
| Scope | grey-green paper + dark readout | teal | Sora | square |

No two share a ground + accent pair. Dark grounds: Wall, Canvas, (Scope readout). Warm/cream grounds: none.

## Brief compliance
- **Forbidden layout** (centred hero + 3 cards + CTA band): none use it. Closest is Poster's three sheets, but they are left-flush type with no cards or band.
- **Forbidden styling**: no purple, no cream/terracotta, no broadsheet/newspaper, no emoji, no glow effects. (Letter and Notebook use paper metaphors but on white / blue-ruled stock, not cream.)
- **Workspace `.cursorrules`** (Obsidian Forest, emerald, glassmorphism, grain/scanline) was intentionally *not* applied to these concepts; it describes the existing site and would collapse the batch into one look. Concepts 01–05 untouched.
- **Themes, not brands**: cues come from reliability/simulation (Wall, Cutaway), conversational agents (Thread), lab science (Notebook), tools for builders (Canvas, Scope). No company names or marks used.

## Notes / caveats
- Not browser-verified: the terminal sandbox was unavailable in this session, so layouts were checked by reading the code only. Open each `preview.html` and sanity-check at ~1440×900 and ~390 wide.
- Old `06`–`35` folders (e.g. `16-clearing`, `21-dataset`) **still exist on disk** at the time of writing, despite the brief saying they were deleted. New folders have different names so nothing was overwritten; remove the old ones to avoid number collisions in `concepts/README.md`.
- Fonts load from Google Fonts; every stack has a system fallback so previews still render offline.
