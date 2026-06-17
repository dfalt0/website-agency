# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16 (App Router, Turbopack) + React 19 + Tailwind v4** marketing/lead-gen website (`website-agency`). Package manager is **npm** (`package-lock.json`). There is no database, no separate backend, and no docker-compose — everything runs from the one Next.js process.

### Services
| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Next.js web app | `npm run dev` | 3000 | Serves marketing pages plus `/api/scan` and `/api/transfer-lead`. Standard scripts are in `package.json` (`dev`/`build`/`start`). |

### Run / build / test notes
- **Run:** `npm run dev` then open `http://localhost:3000`. Core feature pages: `/` (marketing), `/scan` (Tech Stack Scanner), `/transfer` (migration lead form).
- **Build:** `npm run build` works.
- **Tests:** No test framework or `test` script is configured.
- **Lint is broken (pre-existing):** `npm run lint` fails because Next.js 16 removed the `next lint` subcommand (it tries to treat `lint` as a directory). Running ESLint directly also fails because the repo still uses a legacy `.eslintrc.json` extending `next/core-web-vitals`, which is incompatible with the installed ESLint 9 flat-config default. This is a code/config issue, not an environment issue; do not treat it as a setup failure.

### Gotchas
- The `/api/scan` endpoint fetches arbitrary **external** URLs server-side to detect a site's tech stack, so testing the scanner end-to-end requires outbound internet access.
- All env vars are optional. `/api/transfer-lead` works without config (returns `{ ok: true }`); set `TRANSFER_LEAD_WEBHOOK_URL` only to forward leads to a CRM/webhook.
- `lib/auth.ts` (`better-auth`) is dormant scaffolding — not wired to any route and not needed to run the app.
- `next.config.ts` pins `turbopack.root` to this folder to avoid Turbopack resolving a parent `package-lock.json`; keep it if a parent lockfile exists.
