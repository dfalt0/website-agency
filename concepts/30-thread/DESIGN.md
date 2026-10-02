# Concept 30 — Thread (Chat-Thread Narrative)

## Architecture
The whole pitch is **one conversation** between a client (Dana, a physio clinic owner) and the studio (Mara). App-shell layout: 300px navy sidebar (project card, progress steps, pinned files, who's online) + a full-height thread column + docked composer. Each pitch element is a message or an attachment *inside* a message:

- Intake questions → numbered studio message
- Pricing → **quote attachment** (Build / Host / Care rows + amber "Year one" total)
- Hosting proof → inline uptime strip
- Timeline → 5-cell attachment
- CTA → quick-reply chips above the composer (clicking appends a client reply and a studio confirmation)

Messages stagger in with CSS animation delays; thread auto-follows, stops following when the user scrolls. A typing indicator ends the sequence.

## Positioning
Custom websites + hosting + care sold as *you will be talked to like a person, before and after launch*. Cue: conversational agents and intake flows.

## Voice
Spoken, short sentences, answers the next obvious question. Studio replies never exceed three sentences without an attachment.

## Visual system
| Token | Value |
|---|---|
| Ice | `#E3ECEF` thread ground |
| Navy | `#14213D` sidebar + studio bubbles |
| White | client bubbles, attachment cards |
| Amber | `#F5A524` total, primary chip, studio avatar |
| Status green | `#1F9D6B` done steps, uptime |

**Type:** Figtree (UI + bubbles) + Fragment Mono (timestamps, kicker labels). The only rounded-bubble geometry in the batch — corners 20px with a 6px "tail" corner.

## Light JS
Auto-scroll follow; quick-reply chips append messages.

## Do not
Use a hero, section headings, or any content outside the thread/sidebar.
