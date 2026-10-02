# 17 — Briefing

**Archetype:** Agent/operator briefing document.

## Layout architecture
- No nav bar, no hero. A document header strip (DOC id, rev, class, issuer) opens the page like a controlled doc.
- One 70ch main column of numbered sections (01–07) with a marginalia column on the right (`.marg` notes, absolutely placed beside each section on wide screens, inline on narrow).
- Content types rotate by section: prose, numbered procedure list, CLI block, cadence table, SLA table, MUST/MAY/NEVER contract bullets, key-value intake form.
- TOC is a plain inline link row. Closing is "end of brief" footer; no CTA band.

## Visual system
Near-black warm paper, bone text, single amber highlight. Mono only. 0.5px rules, square corners, no shadows, no images. Only motion: a blinking terminal caret in the footer and hover on rows.

## YC cue
Persistent agents / VM ops language (status, deploy gates, rollback, on-call) applied to site hosting. The site as a long-running process with an operator.

## Differentiator
Reads as a document you would file, not a page you would scan. Nothing is centered.
