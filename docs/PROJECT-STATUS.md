# Project status

_Last updated: 2026-07-16_

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
- A visual design system reference exists at
  [`designerama-design-system.html`](../designerama-design-system.html) —
  self-hosted, no build step, open directly in a browser. Documents both
  brand contexts against real source values (colour, type, spacing, motion,
  components, the MX/BX/AIX/DX framework, voice/copy rules).
- The site has real fundamentals now: `public/robots.txt` (crawlable),
  `app/sitemap.ts` (auto-generated), `app/icon.png` (favicon), and live GA4
  analytics. See the Known-correct facts section below and DEPLOYMENT.md.

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
- **GA4 analytics is live**, Measurement ID `G-3C5292GLX7`, baked directly
  into `components/shared/GoogleAnalytics.tsx` as the default (not a secret,
  so no env var required to activate it). See DEPLOYMENT.md.
- **Verifux Spotlight is a dedicated Portfolio section, settled.** It was
  briefly removed in favour of a work-grid tile, then explicitly reverted —
  keep the dedicated section with its hover-gradient treatment. Selected
  Work's grid simply has no Verifux tile; don't re-add one without asking.
- **`website_old/` was audited for reuse and nothing needed copying as-is**
  — its `robots.txt` blocks all crawlers, its licence/readme are WordPress
  boilerplate, and its Google Analytics ID (`UA-18944179-2`) is permanently
  dead (Universal Analytics sunset 2023-07-01). Don't resurrect any of these
  three specifically. See DECISIONS.md for the full breakdown.

## Standing constraints (do not re-litigate without being asked)

- No em dashes or en dashes anywhere in copy. Use commas, periods, mid-dots
  (`·`), or "to" for date ranges instead (e.g. "2017 to 2018"). Exception:
  compact numeric reach/range figures like "26-30M" keep a plain hyphen —
  that's a range notation, not sentence-level dash punctuation, and Kishan
  has explicitly asked for the hyphenated form there over "26 to 30 million".
- No Johannesburg / JHB / South Africa location references in copy anywhere
  on the site (explicitly removed once already — don't reintroduce it).
- `/Users/kishanrama/Documents/Verifux` is a separate, live production
  codebase. Read from it for ground-truth facts if needed, but never edit or
  delete anything in it.
- Never fabricate case-study facts, dates, or outcomes not evidenced by a
  real source.
- Buttons are flat accent colour, no gradient fill.

## Open / pending

- SuperSport case study still lacks real Figma-sourced images (blocked on
  Figma quota as of last check).
- GOtv Presentation slides — no additional usable Figma node-IDs found beyond
  what's already integrated.
- DStv Rewards project dates are approximate, not fully confirmed.
