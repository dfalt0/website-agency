# Design concepts (v2)

**35** alternate brand + website directions for a company that builds custom websites and hosts them.

- **01–05** — original studio metaphors (Harbor → Ledger). Kept as-is.
- **06–35** — **full rebuild**. Each uses a different layout architecture (DOM, scroll model, information design). Thematic cues from YC **Fall 2026 / Winter 2027 / Summer 2027** only. Structural lessons studied from reference sites (product photography essays, densedevtool pages, institutional capital narratives, scene+overlay intelligence, demo theaters) — **not** copied.

| Folder | Codename | Layout architecture |
|--------|----------|---------------------|
| `01-harbor` | Harbor | Classic studio (kept) |
| `02-typefoundry` | Typefoundry | Classic studio (kept) |
| `03-signal` | Signal | Classic studio (kept) |
| `04-kiln` | Kiln | Classic studio (kept) |
| `05-ledger` | Ledger | Classic studio (kept) |
| `06-specimen` | Specimen | Split macro essay + morphing CSS specimen |
| `07-briefing` | Briefing | Operator briefing doc (procedures, CLI, tables) |
| `08-overlay` | Overlay | Fixed scene + question-led scroll overlays |
| `09-theater` | Theater | Demo theater: program list ↔ live UI panels |
| `10-sponsor` | Sponsor | Capital manifesto / criteria matrix / investor form |
| `11-traverse` | Traverse | Horizontal full-viewport strip |
| `12-spread` | Spread | Asymmetric magazine spreads |
| `13-rail` | Rail | Sticky TOC rail + longform essay |
| `14-chapters` | Chapters | Snap full-viewport chapters (each unique) |
| `15-schematic` | Schematic | Blueprint drawing sheets + BOM |
| `16-wall` | Wall | NOC / ops status wall |
| `17-poster` | Poster | Giant type poster sheets |
| `18-compare` | Compare | Before/after scrubber stage |
| `19-catalog` | Catalog | Parts-catalog SKU index |
| `20-thread` | Thread | Chat-thread narrative |
| `21-canvas` | Canvas | Artboard / floating frames |
| `22-letter` | Letter | Letterhead correspondence |
| `23-notebook` | Notebook | Lab notebook experiments |
| `24-cutaway` | Cutaway | Stack cross-section diagram |
| `25-scope` | Scope | Interactive scope calculator hero |
| `26-docket` | Docket | Case-file tab dossier |
| `27-parcel` | Parcel | Zoning map / parcel board |
| `28-spine` | Spine | Vertical marker timeline |
| `29-fork` | Fork | Dual-audience full-page toggle |
| `30-monolith` | Monolith | Dense single-column essay |
| `31-stage` | Stage | Theatrical spotlight stage |
| `32-shell` | Shell | Terminal / CLI shell |
| `33-strip` | Strip | Filmstrip storyboard |
| `34-bench` | Bench | Pegboard workbench |
| `35-directory` | Directory | A–Z index-first directory |

## Preview

```bash
npx serve concepts -l 3001
```

Then open e.g. `http://127.0.0.1:3001/06-specimen/preview`

Each folder: `preview.html`, `DESIGN.md`, `copy.md`, `tokens.css`.

Batch fingerprints: `concepts/_v2/README-batch-{a,b,c}.md`
