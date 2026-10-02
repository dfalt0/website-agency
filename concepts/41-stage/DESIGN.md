# 41 · Stage — Spotlight theatre

**Cue:** performance, presence, "we show up on opening night and every night after".
**Metaphor:** a darkened proscenium. Only what is lit exists; each service is a scene under its own light.

## Layout fingerprint
- **Blackout canvas** with fixed velvet curtains framing both edges (CSS gradient folds) and a **footlight strip** (row of glowing dots) pinned to the bottom.
- **Prologue:** huge Bodoni "STAGE" left-aligned in the dark; a **follow-spot** (radial mask) tracks the pointer to reveal the headline and sub copy. Touch devices get an auto-sweeping spot.
- **Three acts** (Build, Host, Care). Each is a full-height scene with a **CSS spotlight cone** (`clip-path` trapezoid + gradient + `mix-blend-mode: screen`) falling from a small lamp fixture at the top. Cone origin alternates (left / right / centre). Scene content sits inside the pool of light and is dim (opacity .18) until the cone "cues on" via IntersectionObserver.
- **Playbill lists:** features are cast-list rows with dotted leaders ("Design ........ Director"), stage directions in Courier italic: `[Enter, stage left.]`.
- **Tickets:** pricing as three horizontal perforated stubs stacked vertically, not a card row.
- **Curtain call:** as the final scene enters, the side curtains slide inward to frame the CTA.

## Type
Bodoni Moda (high-contrast display), Jost (body), Courier Prime (stage directions, tickets).

## Colour
Blackout `#070608`, velvet `#5A0F1E`, brass `#D9A441`, spotlight `#FFE8B8`, playbill cream `#F3E9D2`. No gradients except light itself.

## Uniqueness check
Only concept where visibility is controlled by simulated light: content literally is not readable until lit.
