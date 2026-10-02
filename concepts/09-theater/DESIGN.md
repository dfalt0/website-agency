# 09 — Theater

**Archetype:** Demo theater — page is a fake product console.

## Layout architecture
- Whole page is an app shell: top app bar (logo, breadcrumb, live indicator, Play/Pause), left program list (320px), right stage, bottom status bar. Viewport-filling; content swaps instead of scrolling a long page.
- Left list: Build / Host / Care as "programs" with status, icon tile, mini progress bar, plus a "Start a run" entry that opens the contact form as a panel.
- Right stage: four `.panel`s toggled by hover (preview) or click (pin). Each panel has a different UI composition:
  - Build: pipeline table + CSS browser mock + live activity log.
  - Host: KPI strip + animated sparkline bars + deployments table + health table.
  - Care: request queue table + monthly pass checklist.
  - Start a run: the form.
- Play/pause: a 900ms ticker streams log lines, advances progress bars, jiggles sparkline bars and auto-rotates programs every ~11s. Click pins a program; Play resumes rotation.

## Visual system
Light app chrome: cool gray canvas, white panels, 1px lines, 8px radius, cobalt accent, green/amber status. Mono for IDs and logs; dark log pane for contrast.

## YC cue
Wholesale ops / agent demos: operational dashboards where the product is shown working.

## Note
Exception to the 0.5px/rounded rules in `.cursorrules` is intentional for the "real app" feel. Fonts are system fallbacks (no network).
