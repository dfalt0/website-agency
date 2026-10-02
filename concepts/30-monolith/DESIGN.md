# 30 · Monolith — Dense monolith essay

**Cue:** anti-marketing density. The offer is argued, not advertised. (Borrowed principle only: a page that trusts the reader to read. No maritime vocabulary, imagery or layout.)
**Metaphor:** a single slab of text — a long letter from the people who'd build your site.

## Layout fingerprint
- **One column, 34rem wide, left-biased on large screens** (not centred; sits at ~22% from the left, leaving the right as blank margin).
- **No nav, no sections, no cards, no buttons.** Header = a single mono line. The "CTA" is an email address inside a sentence.
- Structure carried only by **run-in small-caps heads** inside paragraphs (`I.`, `II.` …) and **footnote superscripts** to endnotes.
- **Three figures only**, set inline at column width with captions: Fig. 1 lifetime-cost bar (inline SVG), Fig. 2 monthly-report sample (mono block), Fig. 3 fee table (3 rows).
- A 2px reading-progress hairline is the only UI.

## Type
Source Serif 4 at 18px / 1.52 for everything. IBM Plex Sans Condensed small caps for run-in heads and captions. IBM Plex Mono for figures. Justified + hyphenated text with `text-wrap: pretty`.

## Colour
Cold paper `#F7F8F5`, ink `#16181A`, one accent `#0F5C4D` (links, figure strokes). Automatic dark variant.

## Motion
None except the progress hairline and link underline offset on hover.

## Uniqueness check
The only concept with literally no section chrome; the page is a document, not a layout.
