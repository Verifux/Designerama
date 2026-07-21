# Project status

_Last updated: 2026-07-20 (DStv TV Guide media rebuild)_

## What this is

A Next.js 14 / TypeScript / Tailwind / Framer Motion rebuild of Kishan Rama's
site, covering two brand contexts in one codebase:

- **Designerama** (`/`) — the AI design consultancy home, dark theme.
- **Portfolio** (`/portfolio`) — Kishan's personal case-study portfolio, light theme.

## Where things stand right now

- **Kishan confirmed the site ready to ship as of 2026-07-17.** Latest
  `designerama-static.zip` at the repo root is a fresh root build (no
  `/new` prefix) with everything through the mobile nav, Speaking section,
  Verifux Spotlight link, and footer logo resize — verified locally before
  packaging. Ready for upload to `www.designerama.co.za` root.
- Local dev server: `npm run dev` → http://localhost:3000. Confirmed working.
- Deploy target: **www.designerama.co.za root** (no `/new` prefix). The
  `/new` test-path phase is over — `designerama-static.zip` is now built
  with no `NEXT_PUBLIC_BASE_PATH` and verified locally (served from `out/`
  via a plain static server) before every upload. See DEPLOYMENT.md,
  including the "do you have to re-upload the whole thing every time"
  answer (short version: yes, for any code/content change, because Next's
  static export hashes chunk filenames on every build).
- Production build (`npm run build`) and static export (`npm run export`)
  both pass clean with no TypeScript errors.
- Both Designerama and Portfolio navs now have a working mobile hamburger
  menu — this was a real gap before 2026-07-17 (nav links and CTA were
  simply hidden below the `md` breakpoint with nothing to replace them).
- A visual design system reference exists at
  [`designerama-design-system.html`](../designerama-design-system.html) —
  self-hosted, no build step, open directly in a browser. Documents both
  brand contexts against real source values (colour, type, spacing, motion,
  components, the MX/BX/AIX/DX framework, voice/copy rules).
- The site has real fundamentals now: `public/robots.txt` (crawlable),
  `app/sitemap.ts` (auto-generated), `app/icon.png` (favicon), and live GA4
  analytics. See the Known-correct facts section below and DEPLOYMENT.md.

## The live-site migration plan (important — read before deploying)

This is the target state, confirmed with Kishan 2026-07-15, and now in
progress as of 2026-07-16:

1. **This codebase becomes the live root of `designerama.co.za`.** As of
   2026-07-16, Kishan is uploading root builds directly (no `/new` prefix)
   for testing at the live domain.
2. **The current live site** (the 2010-era brand/portfolio site, source preserved
   in [`website_old/`](../website_old)) **moves to `designerama.co.za/visual`**.
   It is not being discarded — `website_old/` is the literal source for that
   future `/visual` deployment. Do not delete it. This move is a separate,
   manual step on the hosting side and is not automated by this repo's build.

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
- **DStv Now case study is gone entirely**, not just unfeatured — the
  `WorkItem` object and its `/portfolio/dstv` route were both removed
  2026-07-16. Don't re-add it without being asked.
- **Designerama home accordion defaults**: Diagnose (01), How It Works
  (02), **and Why Diagnosis Matters** all default **closed**; Selected
  Work (03) stays open. Why Diagnosis Matters flipped open→closed
  2026-07-17 (same request that added the ambient motion behind it) —
  see DECISIONS.md if it needs to change again.
- **Portfolio's old Stats block (26+/26-30M/40%/CUA) is gone**, removed
  2026-07-17 along with the now-unused `Stats.tsx` component and `stats`
  content export. Don't re-add it without being asked.
- **Portfolio's Verifux Spotlight card is a real link** to
  `https://www.designerama.co.za/verifux`, added 2026-07-17. It wasn't
  clickable before.
- **Conference speaking is now on the site**, sourced from Kishan's actual
  CV (`Kishan_Rama_CV_2026.pdf`), added 2026-07-17: a dedicated "Speaking"
  section on Portfolio (UX Africa Summit 2025, UPTechX Conference 2025),
  plus a credential line in Designerama's About section. The CV's venue
  details ("Sandton Hotel, Johannesburg") were deliberately dropped per the
  no-JHB/SA rule below; institution names (AMC International, University
  of Pretoria) were kept as factual attribution, same as real client names
  elsewhere on the site. The CV's "8-pillar, 48-checkpoint" Verifux
  description was NOT used — it's outdated; the site keeps the
  verified-correct 54-checkpoint/9-pillar MX/BX/AIX+DX figure already
  confirmed against `heuristics.js`.
- **The proof/stats row is gone from every case study**, removed
  2026-07-20 along with the `proof` field from `CaseStudyData` in
  `work.ts`. Don't re-add it to `CaseStudy.tsx` without being asked.
- **DStv TV Guide is the first case study rebuilt with real media**:
  a horizontal drag-scroll carousel (`ImageCarousel.tsx`) through 9 real
  presentation slides, and a scrollable, click-to-zoom prototype viewer
  (`PrototypeViewer.tsx` + `Lightbox.tsx`). This is the reference pattern
  for upgrading the remaining case studies (SuperSport, GOtv, bidorbuy,
  FNB, DStv Rewards) one at a time, per Kishan's stated intent to work
  through selected work "one at a time until its perfect and beautiful."
  See DECISIONS.md for the full build history. Headline and intro were
  aligned 2026-07-20 to the mobile-feed framing (dropped "lean-back and
  lean-forward"). **Dates corrected to 2025** (tag, eyebrow, meta
  Duration) 2026-07-20, per Kishan's explicit instruction, resolving the
  discrepancy between the slide deck's own 2025 date and the case
  study's original 2017-2018 meta. Role/client fields left untouched.
- **FNB Digital Banking is the second case study rebuilt**, using the
  same `ImageCarousel.tsx` in both media slots (not the prototype
  viewer): top slot is FNB 1-4 (Private Clients, Savings Pocket,
  Channel Islands, Call Deposit), bottom slot is FNB 5-8 (Save + Invest,
  Call Deposit Account, Home Loans, Premier Banking). The carousel
  component was generalized to take real per-image width/height instead
  of DStv's hardcoded aspect ratio, since FNB's screenshots are a
  different ratio (~1.85:1 vs ~1.55:1). **Digital Wiki copy corrected**
  2026-07-20: "I conceived and built" to "I helped build," per Kishan.
- **bidorbuy is the third case study rebuilt**, top slot is the original
  pre-redesign bidorbuy.co.za (6 images), bottom slot is the current
  live Bob Shop rebrand (4 images). Added a `cropRatio` prop to
  `ImageCarousel.tsx` (top 4:3, bottom 16:9) since bidorbuy's source
  images span very inconsistent ratios (0.96:1 to 1.82:1), unlike
  FNB's consistent set, plus click-to-zoom (reused `Lightbox.tsx`) so
  cropped content is still viewable full-size. One bottom-slot image
  (`bob2.jpg`) is a screenshot of Kishan's own logged-in account page;
  four lines of personal info (name, location, email, User ID) are
  blurred via `ffmpeg`, at his explicit request.
- **SuperSport is the fourth case study rebuilt**, the first with a
  four-slot layout: situation and approach each get a primary carousel
  plus a secondary horizontal-scroll-with-zoom block directly below it
  (new `situationSecondary` / `approachSecondary` fields on
  `CaseStudyData`). Situation: 6-image carousel (`ss-web0` to `ss-web5`,
  SuperSport.com web) + `ss-mobile1` (a wide mobile-screens montage).
  Approach: 6-image carousel (`ss01` to `ss06`, homepage and Match
  Center) + `ss07` (a 20116px-wide strategy-deck panorama that turned
  out to be real evidence for the case study's existing "nudge theory" /
  "OneBox" / "behavioural economics" copy, not just decoration).
  `PrototypeViewer.tsx` gained an `orientation` prop for the new
  horizontal mode, `Lightbox.tsx` a matching `wide` prop. Fixed a real
  bug along the way: `PrototypeViewer` never set `loading="eager"` on
  its image (unlike `ImageCarousel`, which got that fix in the very
  first DStv pass), so both new horizontal blocks silently failed to
  load until scrolled into view. Remaining case studies to rebuild one
  at a time: GOtv, DStv Rewards.
- **Carousel images always fill the full frame width now**, fixed
  2026-07-21. Every card's image was previously sized from its own
  intrinsic aspect ratio (`w-auto`), which left a blank gap next to
  narrow-rendered images whenever `cropRatio` forced a frame shape very
  different from the real image (bidorbuy, SuperSport). Redesigned:
  image always renders `w-full h-auto` (full width, edge to edge), and
  each card wraps it in its own `overflow-y-auto` so any excess height
  scrolls vertically inside that card, matching how `PrototypeViewer`
  already handled a single tall image. `cropRatio` still exists (same
  name, unchanged prop signature) but now means "the visible window
  before scroll," not "crop to this ratio." Applies to every case study
  using `ImageCarousel`, not just the two that use `cropRatio`.
- **Zoom trigger is a magnify-icon button, bottom-right, not whole-card
  click**, changed 2026-07-21. Text hint ("Click to view full size")
  replaced with a small always-visible icon on every `ImageCarousel`
  card and both `PrototypeViewer` orientations. `PrototypeViewer` kept
  its whole-frame click-to-zoom (only the icon changed there);
  `ImageCarousel` moved to icon-only since whole-card click became
  ambiguous once each card scrolls vertically on its own.
- **Portfolio mobile nav always shows "← Back to work"** on case study
  pages now, fixed 2026-07-21. Was `hidden sm:inline`, reachable only
  via the hamburger's secondary links on mobile. Don't re-hide it below
  `sm` without being asked.
- **GOtv is the fifth case study rebuilt**, 2026-07-21. Situation:
  5-image carousel (`gotv1` to `gotv5`, Get GOtv marketing/package/
  discovery pages) + a secondary `PrototypeViewer` (vertical) showing
  `gotv-guide1`, the TV Guide schedule grid. Approach: 6-image carousel
  (`gotv-ss1` to `gotv-ss6`, MyGOtv dashboard, subscriptions, billing).
  `ImageCarousel` gained a `min-w-[200px] sm:min-w-[260px]
  lg:min-w-[300px]` floor on card width, since GOtv's images are ~0.24:1
  (more extreme than SuperSport's 0.27:1), which without a floor would
  compute unusably narrow (~55-105px) cards even though the full-width/
  scroll behaviour itself was correct. Doesn't affect any other case
  study's card widths. **Open question for Kishan**: `gotv-guide1`
  shows a real TV Guide feature not mentioned anywhere in the existing
  situation/approach/outcome copy (which only covers dashboard,
  discovery, sign-in, payments, package selection) — flagged, not
  applied. Remaining case study to rebuild: DStv Rewards.
- **GOtv TV Guide copy gap resolved**: Kishan confirmed the line should
  be added; approach copy now mentions "a TV Guide with a full channel
  schedule and live-events filter" alongside the other self-service
  flows.
- **Horizontal drag-to-scroll no longer gets hijacked by image drag**,
  fixed 2026-07-21. Starting a drag on top of a card's `<img>` (as
  opposed to the gap between cards) used to trigger the browser's
  native image-drag-ghost behaviour instead of the carousel's own
  drag-to-scroll, making only the narrow gaps reliably draggable. Fixed
  with `e.preventDefault()` in the track's `onPointerDown` for mouse
  pointers. Applies everywhere `ImageCarousel` is used.
- **Vertical scrollbar hidden on every carousel card, replaced with
  glass-effect up/down arrow buttons**, matching the existing magnify
  button's style. Same treatment (up/down or left/right depending on
  orientation) applied to `PrototypeViewer`.
- **Scroll arrows now reliably appear when a card's image overflows**,
  fixed 2026-07-21. Root cause: `onLoad` alone missed the layout reflow
  from an image's placeholder aspect ratio to its real decoded ratio,
  especially for cached images. Fixed with a `ResizeObserver` on the
  `<img>` DOM node itself (via a new ref forwarded through `next/image`)
  so the overflow check reruns whenever the image's actual box size
  changes. See `docs/DECISIONS.md` for the full lesson if this pattern
  is needed again.
- **Fixed a real bug**: cards without explicit per-image `width`/
  `height` fell back to using `cropRatio`'s numbers (e.g. `[4,3]`) as
  literal pixel dimensions. Now falls back to a fixed 1920x1241 default.
- **DStv Rewards is the sixth and final case study rebuilt**, 2026-07-21,
  completing this rebuild initiative. Situation: 5-image carousel
  (`rewards1` to `rewards5`) + a secondary `PrototypeViewer` (horizontal)
  showing `rewards-app1`, the app's Reconnect Challenge flow. Approach:
  5-image carousel (`rewards6` to `rewards10`). All source images resized
  to 1920px wide, cutting page weight and localhost load time.
- **DStv Rewards copy corrected, a real scope overclaim.** Previous copy
  said the whole rewards program ("discovery, redemption, an
  account/rewards-history view") was designed end to end. Kishan
  corrected this: DStv Rewards already existed; the actual work was two
  specific gamified challenge campaigns added on top of it (Upgrade &
  Earn, Reconnect) to promote package upgrades and service reconnections.
  Headline, intro, situation, approach and outcome all rewritten to this
  narrower, accurate scope. Don't re-broaden this back to "designed the
  rewards experience" without being asked.
- **Superseded: custom drag-to-scroll on carousel cards is now removed
  entirely**, 2026-07-21, later the same day as the `scroll-smooth` fix
  above. That fix was real, but Kishan reported the interaction still
  felt broken. Rather than keep patching a hand-rolled pointer-drag
  system that competed with each card's own vertical scroll and the
  page's scroll for the same pointer, removed it outright. Carousels now
  scroll via native `overflow-x` (trackpad swipe, shift+wheel) plus a
  **newly draggable accent progress bar** below the track, the primary
  mouse-driven way to scroll a carousel now. Don't re-add pointer-drag
  capture directly on the cards without being asked.
- **Superseded within the hour: the wheel-forwarding fix above was
  reverted.** It fixed the page-scroll trap but broke a feature Kishan
  wanted kept — vertical scroll within a card to see the rest of a tall
  image. The actual correct fix needed no JS: `overscroll-contain` on
  the card's scroll wrapper was blocking the browser's own default
  scroll-chaining. Removing it (default `overscroll-behavior: auto`)
  gets both properties for free — card scrolls first, page continues
  once the card's own scroll is exhausted. See `docs/DECISIONS.md`.
- **Added left/right chevron buttons flanking each carousel's draggable
  bar**, matching the accordion's chevron style (bordered circle) rather
  than the glass/blur buttons used elsewhere on cards. Pages the track by
  80% of its visible width per click, smooth scroll, dims/disables at
  either end.
- **Real gotcha hit and documented, even though the fix it belonged to
  was later superseded**: React's `onWheel`/`onTouchMove` props are
  registered passive internally, so `e.preventDefault()` inside them
  silently no-ops; needs a manual `addEventListener(...,
  { passive: false })`. Keep this in mind for any future component that
  genuinely does need to intercept wheel/touch, just don't reach for it
  as the first fix for a scroll-trap complaint — try removing
  `overscroll-contain` first. See `docs/DECISIONS.md` for both this and
  the `scroll-behavior: smooth`-vs-direct-writes lesson.

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
