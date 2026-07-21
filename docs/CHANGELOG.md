# Changelog

Dated log of substantive changes. For the *why* behind non-obvious calls, see
[DECISIONS.md](./DECISIONS.md). For current state, see
[PROJECT-STATUS.md](./PROJECT-STATUS.md).

## 2026-07-21 (remove drag-to-scroll on cards, draggable scrub bar, fix page-scroll trap)

- **Removed the custom pointer drag-to-scroll on carousel cards entirely.**
  Despite the earlier fixes today, Kishan reported it still felt broken.
  Rather than continue chasing edge cases in a hand-rolled drag
  implementation that competed with each card's own vertical scroll and
  with the page's scroll for the same pointer, removed it outright. The
  carousel now scrolls via native `overflow-x` (trackpad swipe,
  shift+wheel) plus the accent bar below it, deliberately simpler.
- **Made the red accent progress bar itself draggable**, the new primary
  way to scroll a carousel with a mouse. Click-drag anywhere on the bar
  (a taller invisible hit area around the thin visible line, for a
  comfortable grab target) jumps and then tracks the carousel's
  `scrollLeft` proportionally to the drag position.
- **Fixed the real bug behind "can't scroll the page over images."** Each
  carousel card (and vertical `PrototypeViewer` frames) has its own
  internal vertical scroll, to see the rest of a tall image. Since that
  scroll shares the page's own vertical axis, a mouse-wheel scroll
  starting over a card would scroll the card first and only chain to the
  page once the card's own scroll was exhausted, exactly what Kishan
  described: "you have to move your mouse to the side where there's no
  images to continue scrolling the page." Fixed by intercepting wheel
  events on each card/frame and always forwarding them to the page
  instead (`window.scrollBy`), so hovering a card never traps page
  scroll; the card's own vertical scroll is now reachable only via the
  up/down glass arrow buttons or the lightbox.
- **Found and fixed why the wheel-forwarding fix didn't work on the first
  attempt**: React's `onWheel` prop is registered as a passive listener
  internally, so calling `e.preventDefault()` inside it silently does
  nothing. Switched to a real native `addEventListener("wheel", ...,
  { passive: false })` via `useEffect`, the only way to actually intercept
  and redirect a wheel event in React. See `docs/DECISIONS.md`.
- Also hit the identical smooth-scroll-fights-direct-writes bug from
  earlier today, this time on the wheel-forwarding call itself (rapid
  wheel ticks each queuing a smooth-scroll target before the last one
  finished). Fixed by passing `behavior: "instant"` explicitly on the
  forwarded `scrollBy` call.

## 2026-07-21 (DStv Rewards rebuild, real drag-scroll bug fix, copy correction)

- Rebuilt DStv Rewards, the sixth and final case study in this rebuild pass.
  Situation: 5-image carousel (`rewards1` to `rewards5`, the Rewards
  dashboard, challenge cards before/after accepting, rewards history, and
  the Upgrade & Earn Challenge detail view) plus a secondary
  `PrototypeViewer` (horizontal) showing `rewards-app1`, a wide montage of
  the DStv app's Reconnect Challenge flow. Approach: 5-image carousel
  (`rewards6` to `rewards10`, the same dashboard/history views from the
  Reconnect and Showmax challenge angle). All 11 source images
  (2732-6376px originals) resized to 1920px wide via ffmpeg, cutting page
  weight substantially, directly addressing Kishan's report that images
  were slow to load on localhost.
- **Corrected a real scope overclaim in the copy.** The previous version
  said "I designed the rewards experience end to end: reward discovery,
  redemption, and an account/rewards-history view," implying ownership of
  the whole DStv Rewards program. Kishan corrected this: DStv Rewards
  already existed: he designed two specific gamified challenge campaigns
  on top of it (Upgrade & Earn, Reconnect), used to promote package
  upgrades and service reconnections. Rewrote headline, intro, situation,
  approach and outcome copy to reflect this narrower, accurate scope.
- **Found and fixed a real, previously undiagnosed bug behind the "drag
  doesn't work over images" complaint.** The carousel track had
  `scroll-smooth` (`scroll-behavior: smooth`) in its className, the exact
  element `handlePointerMove` writes `el.scrollLeft` to directly on every
  mouse-move during a drag. With that CSS property set, each rapid
  `scrollLeft` write during a real drag gesture triggers the browser's
  smooth-scroll animation instead of an instant jump, so successive
  writes fight the still-running animation from the previous one,
  producing a sluggish, seemingly unresponsive drag. Removed the class;
  the arrow-button scrolls already pass `behavior: "smooth"` explicitly
  per call via `scrollBy()`, so they're unaffected. Verified via direct
  `scrollLeft` measurement across two consecutive real drags on the live
  page: 0 to 124.5px, then 124.5 to 462.5px, tracking the drag distance
  cleanly with no lag or fighting.

## 2026-07-21 (drag-scroll conflict fix, glass scroll arrows, GOtv copy line)

- Fixed the horizontal drag-to-scroll gesture on `ImageCarousel`: the
  browser's native image-drag ghost was hijacking the pointer whenever
  a drag started on top of an `<img>` instead of the gap between cards,
  making it feel like only the narrow gaps were draggable. Added
  `e.preventDefault()` in the track's `onPointerDown` for mouse
  pointers, the standard fix for this interaction, confirmed firing via
  a synthetic pointerdown dispatch during verification.
- Added `scrollbar-hide` to each `ImageCarousel` card's inner vertical
  scroll wrapper (was already on the outer horizontal track, but not
  the per-card vertical one), and replaced the visible native scrollbar
  with small glass-effect up/down arrow buttons matching the existing
  magnify button's style. Same treatment applied to `PrototypeViewer`
  for both vertical and horizontal orientations (up/down or left/right
  depending on scroll axis).
- Root-caused why the new scroll arrows sometimes failed to appear:
  `onLoad` alone misses the layout reflow when an image's placeholder
  aspect ratio (from its declared `width`/`height`) gets replaced by its
  real decoded ratio, especially for cached images where the native
  `load` event can fire before React attaches the handler. Fixed by
  adding a `ResizeObserver` directly on the `<img>` DOM node (via a new
  `imgRef`, confirmed `next/image` forwards refs correctly in this
  Next 14.2.18 version) so the scroll-state check reruns whenever the
  image's actual rendered box changes size, independent of `onLoad`
  timing.
- Fixed a real bug in the same file: cards without an explicit
  per-image `width`/`height` fell back to `cropRatio`'s numbers (e.g.
  `[4,3]`) as literal pixel dimensions, rendering `<img width="4"
  height="3">`. Fallback is now a fixed sensible default (1920x1241),
  decoupled from the box's crop ratio.
- Added the TV Guide line to GOtv's approach copy (flagged as a gap in
  the previous entry below; Kishan confirmed it should be added):
  "...a TV Guide with a full channel schedule and live-events filter,
  and a country-aware sign-in flow..."

## 2026-07-21 (GOtv case study rebuild, carousel min-width)

- Rebuilt GOtv's media sections with the same four-slot pattern as
  SuperSport: situation carousel (`gotv1.jpg` through `gotv5.jpg`, the
  Get GOtv marketing/package/discovery pages) plus a secondary
  `PrototypeViewer` block below it (`gotv-guide1.jpg`, the TV Guide
  schedule grid, vertical orientation since it's a tall image, not
  wide); approach carousel (`gotv-ss1.jpg` through `gotv-ss6.jpg`, the
  MyGOtv account dashboard, subscription management, and billing
  screens). Deleted the four now-orphaned old placeholder images
  (`discovery.png`, `signin.png`, `payments.png`, `homepage.png`);
  kept `dashboard.png` since it's still used as the work-grid preview
  thumbnail, a separate reference from the case-study body.
- Added a `min-w-[200px] sm:min-w-[260px] lg:min-w-[300px]` floor to
  `ImageCarousel`'s card sizing. GOtv 1-5 are extremely tall (~0.24:1,
  a 2732x12368 source), which without a width floor would compute a
  card as narrow as ~55px at the fixed card height, an unusably thin
  sliver even though the full-width-plus-scroll fix from earlier today
  was working exactly as designed. The floor doesn't affect any
  existing carousel (DStv, FNB, bidorbuy, SuperSport all already
  produce wider cards than the floor from their own aspect ratios).
- Flagged a copy gap rather than silently rewriting: `gotv-guide1.jpg`
  shows a full TV Guide feature (channel schedule grid, date picker,
  live events filter) that isn't mentioned anywhere in the existing
  situation/approach/outcome copy, which only describes "dashboard,
  discovery, sign-in, payments and package selection." Surfaced to
  Kishan for a decision rather than assumed.

## 2026-07-21 (carousel full-width fix, magnify icon, mobile back link)

- Fixed a real layout bug in `ImageCarousel.tsx` affecting every case
  study using `cropRatio` (bidorbuy, SuperSport) or a per-image forced
  frame: each card's `<Image>` was sized `h-full w-auto object-cover`,
  which computes width from the image's own intrinsic aspect ratio
  (from its `width`/`height` props), not from the card's actual frame
  shape. For extreme mismatches (e.g. a 0.27:1 tall screenshot forced
  into a 16:9 frame) this rendered a narrow strip with a large blank gap
  down one side instead of filling the frame. Redesigned the interaction
  instead of patching the symptom: each card now wraps its image in an
  `overflow-y-auto` region, the image renders at `w-full h-auto` (always
  fills the frame's full width edge to edge), and if the image is taller
  than the frame, the rest is reachable via vertical scroll inside that
  card, with a bottom fade hint. This also unified DStv/FNB (which
  happened to not hit the bug, since their frame ratio always matched
  the image) onto the same interaction model as bidorbuy/SuperSport.
- Replaced the "Click to view full size" hover-text hint with a small
  magnify-icon button, bottom-right, on every carousel card and both
  `PrototypeViewer` orientations. Icon is always visible (not
  hover-only), since hover doesn't exist on touch devices. For
  `ImageCarousel`, zoom is now triggered only by this button (previously
  whole-card click, which was ambiguous against the new per-card
  vertical scroll and the outer horizontal drag). `PrototypeViewer`
  keeps its existing whole-frame click-to-zoom, just with the icon
  swapped in for the text hint.
- Fixed Portfolio's mobile nav: the "← Back to work" link on case study
  pages was `hidden sm:inline`, invisible below the `sm` breakpoint and
  reachable only via the hamburger menu's secondary links, an extra tap
  Kishan didn't want. Now always visible in the persistent top bar.

## 2026-07-20 (SuperSport case study rebuild, four-slot media pattern)

- Rebuilt SuperSport's media sections with a new four-slot pattern, one
  more layer than the previous two-slot case studies. Situation section:
  a 6-image carousel (`ss-web0.jpg` through `ss-web5.jpg`, SuperSport.com
  homepage and article pages) with a second block directly below it, a
  single wide mobile-screens montage (`ss-mobile1.jpg`) in a new
  horizontal-scroll-with-zoom viewer. Approach section: the same
  pattern, a 6-image carousel (`ss01.jpg` through `ss06.jpg`, homepage
  and Match Center states) plus a second block below, a single very wide
  strategy-deck panorama (`ss07.jpg`, 20116px original width) in the
  same horizontal viewer.
- Added `situationSecondary` / `approachSecondary` to `CaseStudyData`
  (a `SecondaryMedia` object: images, media mode, crop ratio,
  orientation) so a case study section can stack two independent media
  blocks instead of one. `CaseStudy.tsx` renders the secondary block
  directly below the primary one, no extra heading or border, just an
  `mt-6` gap, since it's framed as more of the same project rather than
  a new section.
- Generalized `PrototypeViewer.tsx` with an `orientation` prop
  ("vertical", the existing DStv TV Guide prototype behaviour, or
  "horizontal"). Horizontal mode scrolls sideways instead of down, sizes
  the image to the container's full height instead of full width, and
  moves the "more to see" fade gradient to the trailing edge. Generalized
  `Lightbox.tsx` in parallel with a `wide` prop (alongside the existing
  `tall`), letting the zoomed view scroll horizontally at full source
  height for these panoramas instead of being squeezed to fit the
  screen.
- SS07 turned out to be a real strategy-deck slide (Objective, Approach:
  Behavioural Economics, Choice Architecture, EAST Framework, Live
  Streaming mockups), directly evidencing the case study's existing
  "nudge theory," "OneBox," and "choice architecture" copy. Confirmed
  by reading the actual file before writing alt text, same discipline as
  the prior three passes.
- Fixed a real bug found while verifying: `PrototypeViewer`'s `Image`
  didn't set `loading="eager"` (unlike `ImageCarousel`, which already
  had it from the DStv pass), so the two horizontal viewers silently
  never loaded until scrolled into view, and the embedded verification
  browser's programmatic scroll doesn't reliably trigger native lazy
  load. Added `loading="eager"` to match.

## 2026-07-20 (bidorbuy case study rebuild, factual corrections)

- Rebuilt bidorbuy's media sections with the carousel pattern: top slot
  is the original pre-redesign bidorbuy.co.za (6 images, `bob5.jpg`
  through `bob10.jpg`), bottom slot is the current live Bob Shop
  rebrand (4 images, `bob1.jpg` through `bob4.jpg`). Deleted the old
  single-image `bobshop-home-today.jpg` / `bobshop-sell-today.jpg`
  placeholders (unreferenced now).
- Added a `cropRatio` option to `ImageCarousel.tsx`. Bidorbuy's 10
  source images span very inconsistent aspect ratios (0.96:1 portrait
  to 1.82:1 wide), so per-image sizing (the FNB approach) would have
  made cards bounce around in width. `cropRatio` forces every card in
  a carousel to a shared ratio via `object-cover` (top slot 4:3, bottom
  slot 16:9), cropping outliers, paired with a new click-to-zoom
  affordance (reused `Lightbox.tsx`) so the full uncropped image is
  always one click away. Distinguishes a genuine click from the end of
  a drag via pointer-move distance, so dragging the carousel doesn't
  accidentally trigger the zoom.
- Blurred four lines of personal information (name, location, email,
  user ID) in `bob2.jpg`, a screenshot of Kishan's own logged-in Bob
  Shop account page, via an `ffmpeg` crop + `boxblur` + overlay, at his
  explicit request rather than cropping the image out or publishing as-is.
- Corrected FNB's Digital Wiki copy: "I conceived and built" to "I
  helped build," per Kishan's correction that he contributed to it
  rather than originating it.
- Corrected DStv TV Guide's dates from "2017 to 2018" to "2025"
  (tag, eyebrow, and meta Duration), per Kishan's explicit instruction.
  This settles the discrepancy flagged in the previous DStv TV Guide
  pass, where the slide deck's own 2025 date conflicted with the case
  study's original 2017-2018 meta.

## 2026-07-20 (proof row removed, FNB case study rebuild)

- Removed the proof/stats row (the "5 / 2 / 2017 to 18" style numbers
  block) from every case study: the `<RevealGroup>` render block in
  `CaseStudy.tsx`, the `proof` field from `CaseStudyData`, and all 6 case
  studies' data in `work.ts` (supersport, gotv, bidorbuy, fnb,
  dstv-tv-guide, dstv-rewards). Redundant with the numbers already in
  each outcome paragraph.
- Removed the carousel's left/right edge fade gradients (`ImageCarousel.tsx`)
  per explicit dislike of the "white masking," and reduced the
  prototype viewer's bottom fade from 80px full-opacity to 32px at 70%.
- Aligned DStv TV Guide's headline and intro with the new mobile-feed
  framing (`"Turning a static schedule grid into a personalised
  discovery feed"`), dropping the old "lean-back and lean-forward"
  connected-TV language that no longer matched the situation/approach
  copy from the previous pass.
- Generalized `ImageCarousel.tsx` to take real per-image `width`/`height`
  instead of a hardcoded 1920x1241 (DStv screenshot) aspect ratio, so it
  can be reused for case studies with differently-proportioned source
  images without distortion or unwanted cropping.
- Rebuilt FNB Digital Banking's media sections with the same carousel
  pattern as DStv TV Guide: top slot is a 4-image carousel (FNB Private
  Clients, Savings Pocket, Channel Islands, Call Deposit, showing the
  redesigned pattern live in Namibia), bottom slot is a second 4-image
  carousel (Save + Invest, Call Deposit Account, Home Loans, Premier
  Banking, showing the pattern live in Ghana and Botswana). Replaced the
  old single-image `savings-pocket-today.jpg` / `channel-islands-today.jpg`
  placeholders (deleted, now unreferenced) with 8 real screenshots
  (`fnb1.jpg` through `fnb8.jpg`), resized to 1920px wide and recompressed
  via `ffmpeg` (sips's JPEG quality flag proved ineffective, files stayed
  1.6 to 2.6MB; ffmpeg got them to 90 to 260KB each at equivalent quality).

## 2026-07-20 (DStv TV Guide case study rebuild)

- Built the first "selected work" media upgrade: DStv TV Guide's top media
  slot is now a horizontal drag/swipe carousel (`ImageCarousel.tsx`,
  `components/shared/`) through 9 real presentation slides (tvg1 through
  tvg9), replacing the old single static overview image. Pattern is a
  native `overflow-x` scroll-snap track with peeking cards, no arrow
  buttons, a thumb-style scrub bar, and a fading "Drag to explore" hint,
  modelled on vucko.co/projects and TFTL's case-study galleries per the
  design-remix skill.
- Bottom media slot is a scrollable, click-to-zoom prototype viewer
  (`PrototypeViewer.tsx` + `Lightbox.tsx`) for the full tvgPrototype
  image, vertical scroll inside the frame, click for a fullscreen
  lightbox with its own vertical scroll.
- Fixed a real image-order bug: slides were reversed and mislabeled
  because captions were guessed from pasted screenshots rather than the
  actual tvg1 through tvg9 files. Read each file directly, confirmed the
  real narrative order (cover, DStv Discover, My Feed, Linear View,
  Search & Voice, Proactive Planner, Spotlight Card, Sport Hub,
  Conclusion), and rewrote alt text and the situation/approach/outcome
  case-study copy to match what the slides actually show, avoiding the
  original copy's overclaimed shipped-outcome language since the deck
  itself frames results as projected/intended, not measured.
- Removed the underlying cause of "images not displaying": the first
  carousel attempt used Next Image's `fill` prop inside a Framer Motion
  percentage-width track, which raced with layout measurement on mount.
  Rebuilt with fixed intrinsic image dimensions and native scroll instead.
- Removed the proof/stats row (the "5 / 2 / 2017 to 18" style numbers
  block) from the shared `CaseStudy.tsx` template entirely, including the
  `proof` field from `CaseStudyData` and all 6 case studies' data in
  `work.ts`. Was redundant with the numbers already in the outcome copy.
- Removed the left/right edge fade gradients from the carousel (user
  didn't like the white masking) and drastically reduced the bottom fade
  on the prototype viewer (80px full-opacity to 32px at 70%).

## 2026-07-20 (menu cleanup)

- Removed label chips/tags from both mobile menus (were
  "Diagnosis before design" etc.).
- Removed ghost wordmarks from both menus ("DESIGNERAMA" and
  "KISHAN RAMA").
- Converted secondary links (Portfolio/Designerama cross-links) to
  centered pill buttons with `rounded-pill border` for clearer affordance.
- Cleaned up the `ghost` prop usage in MobileMenu (still accepted but
  no longer passed by either Nav).

## 2026-07-17 (later, design-remix pass)

- Upgraded the mobile menu from a slide-down dropdown to a TFTL-inspired
  (thefirstthelast.agency) full-screen takeover: shared
  `components/shared/MobileMenu.tsx` used by both Navs — centered
  display-type links with stagger reveal, underlined CTA, label chips,
  secondary links, ghost wordmark, body scroll lock. Fixed a real bug
  where tapping a #section link left the page unscrolled because the
  scroll lock was still on during hash navigation.
- Added slow ambient drift (two accent blobs, 26s/32s loops) behind the
  Why Diagnosis Matters block, and flipped that accordion closed by
  default (reverses the 2026-07-16 default; explicit request).
- Added a 9s idle breathing float to the portfolio hero portrait,
  composed with its existing scroll parallax. Reduced motion respected
  across all of the above.

## 2026-07-17

- Added a working mobile hamburger menu to both `Nav.tsx` components
  (Designerama and Portfolio) — previously nav links/CTA just vanished
  below `md` with no replacement. Added `onClick` support to
  `components/shared/Button.tsx` to support this.
- Moved the FNB/bidorbuy "platform today" screenshots from a standalone
  section into the existing situation/approach placeholder slots, each
  with a small caption. Diagnosed (and ruled out) a suspected image-load
  bug — it was `loading="lazy"` plus an out-of-viewport JS check, not a
  real defect.
- Deploy target switched from `designerama.co.za/new` to the live root
  (`www.designerama.co.za`) — no code changes needed, just building
  without `NEXT_PUBLIC_BASE_PATH`.
- Removed Portfolio's Stats section (26+/26-30M/40%/CUA), deleted
  `Stats.tsx` and the `stats` content export.
- Made the Portfolio Verifux Spotlight card a real link to
  `https://www.designerama.co.za/verifux`.
- Reduced the Designerama footer logo ~60% (36px → 14px height).
- Added conference speaking content sourced from the real CV: a new
  Portfolio "Speaking" section (`components/portfolio/Speaking.tsx`), a
  nav link, a hero sub-copy mention, and a Designerama About credential.
- Cleaned up repo root: removed stale `designerama-static/` extracted
  folder, `.DS_Store`, `tsconfig.tsbuildinfo` (none git-tracked).
  Rebuilt and repackaged `designerama-static.zip` fresh for shipping.

## 2026-07-16

- Removed the DStv Now case study (`slug: "dstv"`) entirely from
  `lib/content/work.ts` — was already unfeatured, now the whole entry
  (and its `/portfolio/dstv` route) is gone. Confirmed via a clean build
  (13 routes, was 14) and a 404 on the old route. Career-history mentions
  of "DStv Now" as an employer/role elsewhere in `arc`/case-study prose
  were left alone, only the dedicated case-study card and route were removed.
- Flipped the Designerama home accordion defaults: Diagnose (01) and How
  It Works (02) now default **closed**; Why Diagnosis Matters now defaults
  **open**. Selected Work (03) stays open, unchanged. Updated the "Default
  open state per section" table in `designerama-design-system.html` to match.
- Ran a full taste-arbitrage copy audit (see `taste-arbitrage-pivot` memory
  and the "Taste-arbitrage copy audit, pass two" entry in DECISIONS.md) —
  rewrote four sections that led with spec/feature lists instead of the
  diagnosis, across `designerama.ts`, `portfolio.ts`, and five case-study
  intros in `work.ts`. Also fixed a real location-rule violation in
  bidorbuy's old intro. SuperSport and DStv Rewards case studies were left
  untouched, both still asset-blocked.
- Both passes verified with a clean `npm run build` and a static export
  rebuild for the `/new` test path, re-zipped for upload.

## 2026-07-15

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
