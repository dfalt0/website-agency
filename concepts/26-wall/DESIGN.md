# Concept 26 — Wall (Ops Wall)

## Architecture
The homepage **is** a NOC status board. No hero, no scroll narrative. A sticky instrument bar, a five-cell metric ribbon, then a 12-column panel grid separated by 1px gutters. Every pitch point is a panel: uptime (proof of hosting), deploy feed (proof of shipping), care queue (proof of care), SSL (proof of boring-but-vital), latency, service rack (pricing), intake (CTA).

## Positioning
Custom websites + hosting + care, sold as *operations you can watch*. Cue: reliability / simulation-environment energy (everything is instrumented, nothing is hand-waved).

## Voice
Terse, instrument-panel. Nouns over adjectives. Units everywhere (ms, min, %, d). Never "seamless", "robust", "world-class".
Preferred: *nominal, queue, deploy, shipped, in build, SLA, mounted, ticket.*

## Visual system
| Token | Value | Role |
|---|---|---|
| Bg | `#0A0E13` | Board |
| Panel | `#10161D` | Cells |
| Line | `#233040` | 1px gutters (the grid *is* the border) |
| OK | `#3FCF8E` | Status only (one filled hero cell) |
| Warn / amber | `#FFB020` | Prices, primary action |
| Info | `#5AA9FF` | IDs, latency line |

**Type:** Barlow Condensed (big numerics, plan names) + IBM Plex Mono (everything else). Zero rounded corners. Zero shadows, zero glows.

## Motion
Only data motion: ticking UTC clock, deploy feed appends a row every ~4s with a 1.6s flash, one LED blinks. No hover transitions beyond panel background step.

## Signature moves
- 90-cell uptime strips per site (generated in JS; shows two incidents honestly).
- Pricing presented as **rack units** U1/U2/U3.
- Intake form styled as a ticket, CTA "Open ticket →".

## Do not
Centre anything. Add illustration. Add a hero headline — the headline is the green STATUS: NOMINAL cell.
