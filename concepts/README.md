# Design concepts

Alternate brand + website directions for a company that builds custom websites and hosts them.

- **01–05** — original studio metaphors (Harbor → Ledger).
- **06–15** — **traditional brochure sites**. Familiar nav → hero → services → process → pricing → CTA. Calmer, simpler, for people who don’t want bold experimental design.
- **16–45** — experimental layout architectures (former 06–35). Thematic cues from YC Fall 2026 / Winter 2027 / Summer 2027 only. Structural lessons studied from reference sites — **not** copied.

| Folder | Codename | Layout architecture |
|--------|----------|---------------------|
| `01-harbor` | Harbor | Classic studio |
| `02-typefoundry` | Typefoundry | Classic studio |
| `03-signal` | Signal | Classic studio |
| `04-kiln` | Kiln | Classic studio |
| `05-ledger` | Ledger | Classic studio |
| `06-atelier` | Atelier | Traditional brochure |
| `07-practice` | Practice | Traditional brochure |
| `08-storefront` | Storefront | Traditional brochure |
| `09-bureau` | Bureau | Traditional brochure |
| `10-partner` | Partner | Traditional brochure |
| `11-commons` | Commons | Traditional brochure |
| `12-workshop` | Workshop | Traditional brochure |
| `13-clinic` | Clinic | Traditional brochure |
| `14-firm` | Firm | Traditional brochure |
| `15-cornerstone` | Cornerstone | Traditional brochure |
| `16-specimen` | Specimen | Split macro essay + morphing CSS specimen |
| `17-briefing` | Briefing | Operator briefing doc |
| `18-overlay` | Overlay | Fixed scene + scroll overlays |
| `19-theater` | Theater | Demo theater |
| `20-sponsor` | Sponsor | Capital manifesto |
| `21-traverse` | Traverse | Horizontal full-viewport strip |
| `22-spread` | Spread | Asymmetric magazine spreads |
| `23-rail` | Rail | Sticky TOC rail + longform |
| `24-chapters` | Chapters | Snap full-viewport chapters |
| `25-schematic` | Schematic | Blueprint sheets + BOM |
| `26-wall` | Wall | NOC / ops status wall |
| `27-poster` | Poster | Giant type poster sheets |
| `28-compare` | Compare | Before/after scrubber |
| `29-catalog` | Catalog | Parts-catalog SKU index |
| `30-thread` | Thread | Chat-thread narrative |
| `31-canvas` | Canvas | Artboard / floating frames |
| `32-letter` | Letter | Letterhead correspondence |
| `33-notebook` | Notebook | Lab notebook experiments |
| `34-cutaway` | Cutaway | Stack cross-section |
| `35-scope` | Scope | Interactive scope calculator |
| `36-docket` | Docket | Case-file tab dossier |
| `37-parcel` | Parcel | Zoning map / parcel board |
| `38-spine` | Spine | Vertical marker timeline |
| `39-fork` | Fork | Dual-audience toggle |
| `40-monolith` | Monolith | Dense single-column essay |
| `41-stage` | Stage | Theatrical spotlight stage |
| `42-shell` | Shell | Terminal / CLI shell |
| `43-strip` | Strip | Filmstrip storyboard |
| `44-bench` | Bench | Pegboard workbench |
| `45-directory` | Directory | A–Z index-first directory |

## Preview

```bash
npx serve concepts -l 3001
```

Then open the index at `http://127.0.0.1:3001/` or e.g. `http://127.0.0.1:3001/06-atelier/preview`.

Each folder: `preview.html`, `DESIGN.md`, `copy.md`, `tokens.css`.

Batch fingerprints (experimental set): `concepts/_v2/README-batch-{a,b,c}.md`
