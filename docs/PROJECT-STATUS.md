# Project status

_Last updated: 2026-07-15_

## What this is

A Next.js 14 / TypeScript / Tailwind / Framer Motion rebuild of Kishan Rama's
site, covering two brand contexts in one codebase:

- **Designerama** (`/`) — the AI design consultancy home, dark theme.
- **Portfolio** (`/portfolio`) — Kishan's personal case-study portfolio, light theme.

## Where things stand right now

- Local dev server: `npm run dev` → http://localhost:3000. Confirmed working.
- Test deploy: a static export is being trialed at **designerama.co.za/new**
  (uploaded manually via zip to Xeenlo, not yet the live root).
- Production build (`npm run build`) and static export (`npm run export`)
  both pass clean with no TypeScript errors.

## The live-site migration plan (important — read before deploying)

This is the eventual target state, confirmed with Kishan 2026-07-15:

1. **This codebase becomes the live root of `designerama.co.za`** once approved.
2. **The current live site** (the 2010-era brand/portfolio site, source preserved
   in [`website_old/`](../website_old)) **moves to `designerama.co.za/visual`**.
   It is not being discarded — `website_old/` is the literal source for that
   future `/visual` deployment. Do not delete it.
3. Until the swap happens, this build is only reachable at the `/new` test path.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the exact rebuild steps required when
moving from the `/new` test path to the live root (the static export bakes in
a path prefix at build time, so this is not just a copy-paste).

## Known-correct facts (verified against source, not guessed)

- **Verifux's real framework** is the MX / BX / AIX triad — 54 checkpoints
  across 9 pillars — plus a separate, optional DX (design excellence) craft
  score that does *not* factor into the 54-checkpoint score. This was
  confirmed by reading `/Users/kishanrama/Documents/Verifux/heuristics.js`
  directly and cross-checking the live `designerama.co.za/verifux` page.
  An earlier draft of this site's copy guessed "8 pillars / 48 checkpoints /
  UX-DX-MX-AIX" — that was wrong and has been corrected everywhere. See
  [DECISIONS.md](./DECISIONS.md) for the full note.
- **Designerama is dark-only, Portfolio is light-only.** There is no theme
  toggle. Don't add one without being asked.

## Standing constraints (do not re-litigate without being asked)

- No em dashes or en dashes anywhere in copy. Use commas, periods, mid-dots
  (`·`), or "to" for date ranges instead.
- No Johannesburg / JHB / South Africa location references in copy anywhere
  on the site (explicitly removed once already — don't reintroduce it).
- `/Users/kishanrama/Documents/Verifux` is a separate, live production
  codebase. Read from it for ground-truth facts if needed, but never edit or
  delete anything in it.
- Never fabricate case-study facts, dates, or outcomes not evidenced by a
  real source.
- Buttons are flat accent colour, no gradient fill.

## Open / pending

- A large batch of file changes from earlier redesign work is still
  **uncommitted** in git (see `git status`). Nothing has been committed
  automatically per standing instructions — only commit when explicitly asked.
- SuperSport case study still lacks real Figma-sourced images (blocked on
  Figma quota as of last check).
- GOtv Presentation slides — no additional usable Figma node-IDs found beyond
  what's already integrated.
- DStv Rewards project dates are approximate, not fully confirmed.
