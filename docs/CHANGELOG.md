# Changelog

Dated log of substantive changes. For the *why* behind non-obvious calls, see
[DECISIONS.md](./DECISIONS.md). For current state, see
[PROJECT-STATUS.md](./PROJECT-STATUS.md).

## 2026-07-15 (latest session)

- Added `designerama-design-system.html` — a self-hosted, framework-free
  living style guide covering both brand contexts (Designerama dark,
  Portfolio light), mirroring the structure of Verifux's own design system
  file. Every value documented is pulled from the real source
  (`app/globals.css`, `tailwind.config.ts`, `RevealOnScroll.tsx`,
  `useMagnetic.ts`, `usePointerGlow.ts`) rather than approximated. Covers
  brand/logo, colour, typography, spacing, radius, motion, buttons, cards
  and hover glow, the accordion pattern, navigation, index rows, ambient
  background effects, the MX/BX/AIX/DX framework, voice and copy rules, and
  responsive behaviour. Verified interactive (accordion toggle, swatch
  copy-to-clipboard, active-nav-on-scroll) in the browser with zero console
  errors.
- Activated GA4 analytics with Kishan's real Measurement ID (`G-3C5292GLX7`),
  baked in as the default in `components/shared/GoogleAnalytics.tsx` rather
  than requiring an env var — confirmed firing correctly in the browser
  (gtag `config` call and `gtm.load` event both verified).
- Restored the Verifux Spotlight section on Portfolio (with its cursor-glow
  hover treatment) after an earlier commit removed it — removed the
  now-redundant Verifux tile from Selected Work instead, per instruction to
  keep the dedicated section.
- Reverted "26 to 30 million" back to the compact "26-30M" notation across
  SuperSport's reach figures, per explicit preference for the hyphenated
  range form.
- Replaced the legacy work images (JoziBond, GEDA, Coca-Cola) with the real
  source scans from `website_old/Projects_Images/` (`11_2.jpg`, `5_4.jpg`,
  `9_2.jpg`), replacing earlier placeholder crops.
- Audited `website_old/` for anything worth carrying into the new site.
  Nothing needed copying as-is: `robots.txt` there was blocking all search
  engines (`Disallow: /`, contradicting its own page-level `index, follow`
  meta tag), `license.txt`/`readme.html` are stock WordPress boilerplate,
  and a `3sPMN7Xp7jVwL5e62LRmJDYIe1Y.txt` file was a Google-verification-
  looking name that turned out to be a defunct Alexa site-verification tag
  (Alexa shut down in 2022). The site's Google Analytics snippet
  (`UA-18944179-2`, using the old `ga.js` loader) is also dead — Universal
  Analytics stopped collecting data entirely on 2023-07-01.
- Added proper site fundamentals the new build was missing: `public/robots.txt`
  (crawlable, points to the sitemap), `app/sitemap.ts` (auto-generated from
  `lib/content/work.ts`, no manual maintenance), `app/icon.png` (the square
  red logo-mark badge, picked up automatically by Next's icon convention),
  and a `GoogleAnalytics` component scaffolded for GA4 (inactive until a real
  Measurement ID is supplied — see PROJECT-STATUS.md's Open/pending section).
- Fixed a stale dev server (port 3000 was occupied by a leftover process from
  earlier static-export testing on ports 4173/4174). Killed and restarted
  clean.
- Cleaned up the project root: removed `.DS_Store`, a stale unzipped `new/`
  test directory, and a stale duplicate `new.zip` — both superseded by the
  current `out/` export and `designerama-static.zip`. Added `*.zip` and
  `/new/` to `.gitignore` to stop this recurring.
- Added `docs/` (this folder) and a root `README.md` pointer, plus durable
  project memory, per request to keep an ongoing record of project state,
  decisions, and how to pick the work back up.
- Designerama home page: wrapped the Diagnose (01), How It Works (02), and
  Selected Work (03) sections in a collapsible accordion pattern
  (`components/shared/Accordion.tsx`) with a chevron toggle top-right of each
  section, default open. "Why diagnosis matters" got the same treatment but
  defaults **closed**.
- Removed the redundant 26+/54/0 stats row from "Why diagnosis matters"
  (duplicated the About section's own stats).
- MX / BX / AIX / DX checkpoint headings enlarged and given wider letter
  spacing for legibility (was competing too closely in size with body copy).
- Added an "About" eyebrow + heading to the About section (previously had
  neither).
- Footer copyright line updated to "© 2027 Designerama. All rights
  reserved." plus a contact-email line.
- Lightened all dark-mode grey text tokens (`--ink-dim`, `--ink-muted`) and
  the Designerama nav link color — caught and fixed a real bug where
  `text-ink/75`-style Tailwind opacity modifiers were silently no-op-ing on
  this project's custom color tokens (see DECISIONS.md).
- Removed the Verifux Spotlight section entirely from the Portfolio page
  (component deleted, not just unmounted) and repointed the Portfolio work
  grid's Verifux tile to link externally to the live `designerama.co.za/verifux`
  site instead of the now-dead internal anchor.
- Corrected Verifux's framework copy sitewide from a guessed "8 pillars / 48
  checkpoints / UX-DX-MX-AIX" to the verified real framework: **MX / BX /
  AIX triad, 54 checkpoints across 9 pillars**, with **DX** as a separate
  optional craft score. Verified by reading
  `/Users/kishanrama/Documents/Verifux/heuristics.js` directly. Full
  reasoning in DECISIONS.md.
- Built a static-export pipeline (`npm run export`) alongside the existing
  dev/build flow, with `NEXT_PUBLIC_BASE_PATH` support for subpath test
  deploys. Discovered and fixed a Next.js 14.2.18 gap where `next/image`
  doesn't reliably prefix `basePath` onto hardcoded image sources — added
  `lib/basePath.ts` and wired it through every hardcoded image path.
  Delivered as `designerama-static.zip`, tested at `designerama.co.za/new`.

## Earlier session — copy/typography/interaction batch

- Removed all em/en dashes from copy across content files and components.
- Restructured the Designerama nav: dropped the Johannesburg clock and the
  "Diagnose" link, added "Portfolio" + a "Get in touch" CTA button on the
  right, mirroring the Portfolio nav's pattern.
- Removed the radial white-flash gradient from solid buttons — flat accent
  colour throughout, both brands.
- Reworked Designerama's Diagnose/Process/Why-It-Matters copy to foreground
  design thinking, behavioural science, systems thinking, and product
  management language (was leaning too hard on a "slide deck vs. shipped"
  framing).
- Portfolio hero: dropped the "26 years / 26–30M users" figure from the
  eyebrow row, added behavioural science and business management as named
  disciplines in the eyebrow and sub-copy. Tightened the hero portrait crop
  around the hair/face and dropped its opacity.
- Portfolio "How I Work" (Method) section fused with a design-thinking
  vocabulary (empathise, define/reframe, ideate/prototype, test/ship).
- Verifux Spotlight card (before it was removed entirely, see 2026-07-15
  above) got a brand-tinted cursor-tracked hover gradient.
- Removed "DStv Now" from the Portfolio work grid per explicit instruction
  (its case study route still exists but isn't featured/linked from the grid).
- Fixed LegacyWork images showing letterboxed black bars — cropped/scaled to
  fill the frame.
- Increased body-copy font size, leading, and letter-spacing across
  Designerama to match Verifux's more generous typographic scale (the hero
  paragraph was already right; the rest of the page's body copy wasn't).

## Earlier session — Designerama visual identity batch

- Designerama switched from a light theme to a dedicated dark theme
  (`[data-brand="designerama"]` tokens in `app/globals.css`); Portfolio
  stayed light. No theme toggle — see DECISIONS.md.
- Added the diagonal multi-color stripe background with scroll parallax
  (`components/shared/BgStripe.tsx`).
- Logo size increased ~50% (proportionally) across both brand navs.
- Round pill buttons made consistent across Designerama.
- New Big Shoulders Display display font added for Designerama headings only
  (`--font-display-alt`, scoped via CSS variable override), leaving
  Portfolio's Plus Jakarta Sans untouched.
- Sentence-case applied to the Portfolio hero heading (was uppercase).
- Added a zoom effect to the ambient particle-dot background, tied to scroll
  percentage.
- Positioning copy updated to lead with "AI design consultancy."

## Earlier session — redesign: portal demoted, richer motion, real work

- `/` changed from a mandatory "two doors" portal splash to the Designerama
  home page directly; `/portfolio` became the first-class secondary page.
  Full reasoning in DECISIONS.md.
- Added shared motion primitives: `usePointerGlow`, `useMagnetic`,
  `CursorProvider` / `CustomCursor` for a custom cursor (disabled under
  reduced-motion or coarse-pointer devices).
- Restructured work/case-study content into a single registry
  (`lib/content/work.ts`, `WorkItem[]`) powering both the work grid and a
  dynamic `/portfolio/[slug]` case-study route, replacing separate static
  page files per case study.
- Added real case studies: GOtv (sourced from Figma), FNB, DStv TV Guide,
  DStv Rewards — upgraded from one-line cards to full situation/approach/
  outcome narratives.
- Re-exported the Designerama logo from its real high-fidelity 2010-era
  Photoshop source (preserved in `website_old/designerama logo/`), replacing
  a low-fidelity extracted PNG and a CSS `invert()` hack with proper
  light/dark logo assets.
