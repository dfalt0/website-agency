# 42 · Shell — Console / CLI runtime

**Cue:** agent-CLI / herdr-style runtime language — multiplexed panes, agents with statuses, commands that do things.
**Metaphor:** the agency is a process you attach to. The offer is what the commands print.

## Layout fingerprint
- The whole page is **one terminal window** sized to the viewport: top tab/title bar, three **panes** (left: agents list, main: shell, bottom: tmux-style status bar).
- **Left pane `agents`**: three live processes — `build-agent`, `host-agent`, `care-agent` — each with a status dot, a one-line telemetry string that ticks, and click-to-attach.
- **Main pane** boots by "running" `cat README`, then waits at a prompt. Visitors type or click **command chips** (`services`, `build`, `host`, `care`, `pricing`, `status`, `apply`, `help`). Output streams line by line.
- Features: command history (↑/↓), tab completion, `clear`, unknown-command hints, an easter egg (`sudo hire us`).
- **Status bar** shows active window `[0:readme 1:build 2:host 3:care]`, host name, uptime counter, and key hints.
- No marketing sections at all; every piece of the offer is reachable only through a command.

## Type / colour
Martian Mono throughout, 13–14px. Slate-black `#0D1012`, panes `#101417`, borders `#2A3137`, prompt coral `#FF6B4A`, ok green `#8FD694`, warn amber `#F2B84B`, info teal `#6FA8B5`.

## Motion
Line-by-line print (12–30 ms/line), blinking block cursor, agent telemetry ticks every 1.4 s. Reduced motion: lines print instantly.

## Uniqueness check
Only concept where content does not exist until requested; layout is terminal panes with a command grammar.
