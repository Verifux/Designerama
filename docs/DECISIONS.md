# Decisions log

Chronological, most recent first. Each entry explains *why*, not just *what*
— the code diff shows what changed; this shows the reasoning so a future
session doesn't re-litigate settled calls.

## SuperSport case-study depth content shipped, provisional, keep SS-only per Kishan (2026-07-30)

Walked through the SuperSport case study with Kishan on 2026-07-30 to
fill in the Phase 2 depth schema (`researchMethod`, `lessonsLearned`,
`constraints`, `alternativesConsidered`) with real recollection rather
than fabrication.

**What was written into `lib/content/work.ts`:**

- `researchMethod` (heading + two-paragraph body): the diagnosis surfaced
  from multiple channels at once (fan comments through editorial, on-site
  comments, internal conversations across the product team), reframed
  after an asset check that showed SuperSport owned the broadcast rights
  to the exact match highlights fans were struggling to find. Written in
  "we" throughout, matching Kishan's explicit correction that the OneBox
  decision was a product-team call, not his alone.
- `lessonsLearned` (one-liner): "The strongest finding wasn't a design
  one. It was realising the discovery gap was worst on the content we
  owned exclusively."
- `constraints`: **left null**. Kishan explicitly said "no hard trade-offs"
  and that the OneBox cost decision was a product-management call, not
  his. Fabricating a hero-narrative trade-off would have been the exact
  overclaim the site's discipline rules against (same class as the FNB
  "conceived and built" → "helped build" correction).
- `alternativesConsidered`: **left null**. No specific rejected
  alternative was named. The schema was scaffolded exactly for this;
  optional and additive means renders nothing when unset.

**Kishan reviewed and didn't fully like it.** Direct instruction:
"i dont really like it...tho keep it for SS only now..ill revisit later
on." The reason wasn't specified, so both the copy and the pattern
(accordion collapse, "Process notes" section title, placement,
"asset check that most UX audits wouldn't do" framing) are all in
scope for the revisit. Full note captured in the persistent memory
`~/.claude/projects/-Users-kishanrama-Documents-Designerama/memory/feedback-case-study-depth-approach.md`.

**What this means going forward:**

- SuperSport keeps its `researchMethod` + `lessonsLearned` for now.
  Both fields are provisional until the revisit.
- **Do not add depth fields to any other case study** (GOtv, bidorbuy,
  FNB, DStv TV Guide, DStv Rewards) until the approach is revised.
  Adding more before the pattern is settled would compound the problem
  Kishan flagged, not clarify it.
- The Phase 2 recommendation of extending "1-2 flagship case studies
  first" (SuperSport and DStv TV Guide) is now half-done. DStv TV Guide
  is on hold, not scheduled.

## Phase 4 (Insights) built, then reverted at Kishan's request; content parked for the Verifux website (2026-07-29, same day)

**Built:** a full nine-teardown Insights section at `/insights` and
`/insights/[slug]`, using the same static-content pattern the six case
studies use (`lib/content/insights.ts` + `components/designerama/Teardown.tsx`
+ `components/designerama/Insights{Hero,List,Cta}.tsx`). Nine real
Verifux audits of real, named products: Stripe (73), Mozilla (68),
Premier League (63), Weshoptech (59), Property24 (59), iStore (58),
Woolworths (58), Airbnb (56), Hollywoodbets (17). Every finding, score,
count, and quote traced back to a real Verifux audit PDF at
`/Users/kishanrama/Documents/Verifux/PDFs/`; nothing invented. Extracted
via a throwaway `pypdf` venv at `/tmp/pdfenv/` (the environment doesn't
have poppler for the Read tool's PDF handling). Wired Insights into
`nav.links`, `footer.links`, `app/sitemap.ts`, and `public/llms.txt`.
Verified clean with `tsc --noEmit`, a full static export (25 routes),
and a browser walk of the listing and one detail page.

**Reverted the same day.** Kishan reviewed and decided public Verifux
teardowns belong on the Verifux marketing site rather than on the
Designerama consultancy site. The instinct is right: Designerama sells
consulting engagements, and teardowns are Verifux product marketing
(demonstrating what the audit engine finds). Publishing them on
Designerama would have blurred the boundary between the consultancy and
the SaaS product, which is exactly the kind of positioning drift the
plan's Section 3 (Brand Positioning) argues against.

**Content preserved.** The full `insights.ts` data file (all nine
teardowns, verbatim), the `Teardown.tsx` template, the `InsightsList.tsx`
listing template, and a handoff README are saved at
`~/.claude/projects/-Users-kishanrama-Documents-Designerama/parked-work/insights-for-verifux-website/`.
Outside both the Designerama and Verifux repos, per the standing rule
never to write into the Verifux codebase. When the Verifux marketing
site is ready to receive them, the content is portable, only the render
layer needs re-templating (Verifux's site is `verifux-landing.html`
static HTML per its own repo, not Next.js).

**What was reverted in the Designerama repo**: all seven files created
(the two route files and five components) deleted; the `Insights` entry
removed from `nav.links` and `footer.links`; the `/insights` sitemap
entry and teardown routes removed from `app/sitemap.ts`; the "Insights"
core-page entry and "Insights teardowns" section removed from
`public/llms.txt`. All other Phase 3 and earlier work is unchanged.

**Preserved in memory**: `~/.claude/projects/-Users-kishanrama-Documents-Designerama/memory/designerama-repositioning.md`
updated to reflect the revert plus the parked-content location, so
future sessions understand why `/insights` isn't in the tree.

Verified after revert with `tsc --noEmit` (clean) and a full static
export build back to 15 routes (down from 25).

## Phase 3 of the strategic repositioning: applying Verifux's AIX discipline to our own site (2026-07-29, later still)

Continues the roadmap in
`~/.claude/plans/https-github-com-verifux-designerama-git-snazzy-origami.md`.
Phase 3 in the plan was described as "motion, design system, performance,
SEO, accessibility polish" but that framing was too broad; the on-brand
version of it is much narrower and specifically ownable: **apply Verifux's
own AIX pillar to Designerama's own site**. If our product audits whether
other people's sites are legible to AI agents and answer engines, ours had
better be exemplary on that axis. General motion/design-system polish was
deliberately skipped, nothing was observed as broken, and open-ended
"polish" is the phase where scope creep lives.

Also chose to skip pre-existing routes for the Accordion label rework, and
skip designing an OG image asset from scratch. Both would have been
scope-creep dressed as thoroughness. The OG image in particular, inventing
a designed card just to look complete would have been the exact "make it
pretty without evidence" pattern the taste-arbitrage discipline explicitly
warns against; fallbacks to the favicon are acceptable until a real,
designed card exists.

**Added `public/llms.txt`.** This is a real, emerging standard for guiding
LLM crawlers and AI answer engines; Verifux's own AIX pillar explicitly
checks for it. Its absence would have been embarrassing for a business
whose whole pitch is "we audit for exactly this." Contains a plain-English
summary of what Designerama sells, canonical Verifux framework facts
(MX/BX/AIX/DX, 54 checkpoints, 9 pillars), the practitioner's background,
and direct links to the core pages and contact info.

**Added JSON-LD structured data** (`components/shared/StructuredData.tsx`,
rendered once site-wide via `app/layout.tsx`). One `@graph` with three
entities: Organization (Designerama), Person (Kishan Rama), WebSite. Every
fact grounded in the site's own content files, no invention. Verifux
itself is deliberately not included as a separate Product/SoftwareApplication
entity, that page belongs on Verifux's own domain, not here.

**Set metadataBase and site-wide OpenGraph/Twitter defaults in
`app/layout.tsx`**, added `alternates.canonical` and `openGraph` overrides
to every main route (`/`, `/services`, `/why-verifux`, `/portfolio`,
`/portfolio/[slug]`). Case-study routes get `og:type: "article"`, others
inherit `"website"`. `lib/metadata.ts` exports an `OG_DEFAULTS` constant
that each page spreads into its own openGraph object; Next 14's metadata
merging replaces `openGraph` wholesale rather than merging fields, so
without spreading defaults, per-page overrides would silently drop
site-wide `type`/`siteName`/`locale`. Verified by grepping the emitted HTML
for all six expected `og:*` tags.

**Improved `Accordion` accessibility with `aria-controls`.** The toggle
button already had `aria-expanded`, but no `aria-controls`, so screen
reader users could tell a button toggled *something* but not what. Added
`aria-controls` linking button to content, using React's `useId()` for
stable unique ids, `role="region"` on the collapsible content, and a
configurable `label` prop (default "Toggle section"). Only the two new
Phase 2 Accordion callers, `VerifuxSections.tsx` and `CaseStudy.tsx`'s
Process notes, were updated to pass meaningful labels; existing pre-Phase-2
callers keep the default, changing those is Phase-3-adjacent polish, not a
fix, and pushing into unrelated existing code is scope creep. The
decorative chevron SVG got `aria-hidden="true"` while I was in there.

**Hit and worked around Next.js layout export restriction.** First draft
exported `OG_DEFAULTS` directly from `app/layout.tsx`, but Next 14's type
system rejects arbitrary named exports from layout files
(`OmitWithTag<..., "metadata" | ...>` types the layout as only allowing a
specific set of named exports). Moved `OG_DEFAULTS` to `lib/metadata.ts`,
which is a plain module and can be imported freely. Worth remembering:
never add named exports beyond the Next.js allowlist to any `page.tsx`,
`layout.tsx`, or other App Router special file.

Verified with `npx tsc --noEmit` (clean after moving the constant), a full
`STATIC_EXPORT=true npm run build` (all 15 routes, clean), a Node-based
JSON.parse check of the JSON-LD graph, direct grep-checks that all six
expected `og:*` tags render on `/services`, that the case-study route
carries `og:type=article`, that `aria-controls` is emitted on Accordion
buttons, and that `llms.txt` is copied to `out/`.

## Phase 2 of the strategic repositioning: /services, an internal Verifux explainer, case-study depth schema, trust-strip fix (2026-07-29, later)

Continues the roadmap in
`~/.claude/plans/https-github-com-verifux-designerama-git-snazzy-origami.md`.
Two items in this phase needed Kishan's real judgment rather than invented
content, and were resolved via direct questions before building: the
trust-strip fix (remove Standard Bank and Telkom rather than fabricate
credential detail for either) and the case-study depth fields (ship the
schema now, fill real content per study later, rather than invent trade-offs
that were never confirmed).

**The `/verifux` path was rejected for the internal explainer after reading
`docs/DEPLOYMENT.md`, not guessed around.** The plan flagged a real risk:
this repo's deploy process is "overwrite the entire live root with the new
`out/` contents every time" (see DEPLOYMENT.md), and `https://www.designerama.co.za/verifux`
is a path on that same root, not a subdomain, currently served by a
separately deployed artifact (`verifux-app.html` per Verifux's own
engineering log). Adding `app/verifux/page.tsx` here would risk the next
deploy silently overwriting the live product's own page at that path. Used
`/why-verifux` instead, a distinct path, zero collision risk, and arguably a
better nav label anyway ("Verifux" the nav link now points to the *story*,
the external product stays reachable via that page's own closing CTA).

**Verifux's framework facts (MX/BX/AIX, 54 checkpoints, 9 pillars, DX
separate/optional) are now single-sourced in `lib/content/verifux.ts`'s
`pillars` export, not duplicated.** Before this change they were typed out
in full at least seven separate times across the homepage and portfolio
(Risk 5 in the plan document). The homepage's Diagnose section
(`lib/content/designerama.ts`) no longer carries its own copy of the four
checkpoint cards at all — it dropped from an accordion with four cards down
to a plain teaser (eyebrow, heading, one paragraph, a "Read the full
framework" link to `/why-verifux`). `components/designerama/CheckpointStrip.tsx`
was simplified accordingly, it no longer needs `Accordion`, `GradientHoverCard`,
or `RevealGroup`/`RevealItem`, since there's nothing left to expand in place.
The full four-card breakdown now lives in exactly one place, the Framework
section of `/why-verifux`, which imports `pillars` from `verifux.ts` directly
rather than redefining them.

**The internal Verifux explainer uses the Accordion pattern only where
there's real content to hide.** An earlier draft wrapped every section
(Problem, Diagnosis, Framework, Method, Evidence, Solution) in an
`Accordion`, matching the homepage's established pattern. On review this was
wrong for five of the six: their body copy already lives in full in the
`header` prop (always visible), so the accordion's collapsible `children`
would have been empty, a chevron that toggles nothing. Only "The framework"
(section 03) has real expandable content, the four pillar cards, so only
that section uses `Accordion`; the other five render as plain static
sections. `components/designerama/VerifuxSections.tsx` branches on a
`showPillars` flag per section rather than accordion-wrapping everything
uniformly.

**A second, separate dead-link bug was found and fixed while touching
`Nav.tsx` for the Verifux link change.** The Designerama logo's "home" link
was a hardcoded `<a href="#top">`, not sourced from content and not using
`next/link`, same class of bug as the Phase 1 nav-href fix, just missed
because it wasn't in `lib/content/designerama.ts` to grep for. On any page
other than `/`, this would silently fail to navigate anywhere (`#top`
doesn't exist on `/services` or `/why-verifux`, and there's no path prefix
to fall back to `/`). Fixed to `<Link href="/">`, works correctly from every
route now.

**"Blog" was dropped from the primary nav, not just relabelled.** Per the
plan's Information Architecture section (Risk in Section 4): the nav
shouldn't carry prime real estate for a destination whose content quality
and diagnosis-relevance haven't been confirmed. It's not removed from the
site, just no longer in `nav.links`/`footer.links` for Designerama. Revisit
if/when the blog's content is confirmed to serve the diagnosis-first
narrative.

**`CaseStudyData`'s new depth fields (`constraints`, `alternativesConsidered`,
`researchMethod`, `lessonsLearned`) are fully optional and render nothing on
any of the six existing case studies.** This was a hard constraint, not a
preference: the project's standing rule against fabricating case-study facts
means these fields can only ever be filled from Kishan's real recollection,
never inferred or invented to make the schema look used. `CaseStudy.tsx`
guards the entire render block on whether any of the four fields are
present, so shipping the schema ahead of the content is genuinely
zero-risk, nothing changes for the reader of an existing case study until a
field is actually set.

**Standard Bank and Telkom removed from the portfolio trust strip, not
given placeholder credential cards.** Kishan's explicit call, asked directly
rather than guessed, given the standing rule against fabricating facts and
the plan's own Risk 7 (an unbacked logo is a credibility liability for a
business whose whole pitch is evidence over assertion, not a neutral
placeholder).

**`designerama-design-system.html` updated to match**, its accordion
section had gone stale even before this session (it still said "Why
diagnosis matters: Open" when that was flipped closed back on 2026-07-17,
see the entry below), and was now further out of date from the Diagnose
teaser change and the new `/why-verifux` sections. Corrected the accordion
wrapping description, the default-open-state table (now covers both the
homepage and `/why-verifux`), and the framework-facts explainer paragraph.

Verified with `npx tsc --noEmit` (clean), a full `STATIC_EXPORT=true npm run
build` (all 15 routes, including the two new ones), and direct checks of
the rendered `/`, `/services`, `/why-verifux`, and `/portfolio` pages.

## Phase 1 of the strategic repositioning: diagnosis-first sequencing applied to the site's own copy (2026-07-29)

Kishan asked for a strategic planning exercise on evolving Designerama from a
portfolio into a product diagnosis consultancy, worked through as a full
audit (three parallel research passes over the homepage, the Verifux-related
copy, and the six case studies, plus direct reads of `CLAUDE.md`, this file,
`PROJECT-STATUS.md`, and the design system reference). The resulting
strategy document lives at
`~/.claude/plans/https-github-com-verifux-designerama-git-snazzy-origami.md`
and lays out a four-phase roadmap. This entry covers **Phase 1**: messaging,
navigation, and homepage fixes. Phases 2 through 4 (a services page, an
internal Verifux explainer, case-study schema depth, trust-strip fixes, and
a deliberately scoped-down "ecosystem" phase) are not yet started.

**The homepage's "What we diagnose" section was the one part of the site
that had never been run through the taste-arbitrage lens.** The 2026-07-16
taste-arbitrage audit pass (see "Taste-arbitrage copy audit, pass two"
below) explicitly exempted this section, reasoning it was
"structural/factual with no aesthetic claims" rather than persuasive copy.
On review, that distinction is exactly the trap a diagnosis-first business
should avoid: the section opened with "Verifux runs a 54-checkpoint audit
across 9 pillars..." — taxonomy before consequence — while every other
section on the site had already been rewritten to lead with stakes. Rewrote
the body to state what a typical audit misses first, then the same
MX/BX/AIX/54/9 facts, unchanged.

**"Why diagnosis matters" was a near-verbatim third telling of the same
thesis already stated in the hero.** Across the homepage, the "interfaces
are cheap now, diagnosis isn't" idea appeared in the hero eyebrow, hero
lede, meta description, and this section's own heading and body — four full
statements before a first-time visitor reaches anything else. Rather than
cut the section (its heading is a nice rhetorical echo of the hero, not a
real problem on its own), repurposed the body to stop re-arguing the point
and instead point forward: what happens next if you buy the argument. Added
a real link ("Start with a diagnosis" → `/#cta`) where none existed before.

**The 01 through 06 numbering gap was worth fixing outright, not leaving as
"deliberate."** Two sections ("Why diagnosis matters" and "About") had never
carried a number while the other four did. There's no strategic reason for
the asymmetry, and a business whose whole pitch is structured rigor
undercuts itself with inconsistent internal numbering. Renumbered all six
sections sequentially (01 Diagnose, 02 How it works, 03 Why diagnosis
matters, 04 Selected work, 05 About, 06 Start here); no component change
required since the number is part of each section's `eyebrow` string, not a
separate prop.

**Nav and footer `#hash` links are now absolute (`/#work`, not `#work`) and
render via `next/link`.** Zero visible effect today, since Designerama is
still a single route and every hash target lives on the same page. It's
prep, not a fix: Phase 2 adds a `/services` route (and likely an internal
`/verifux` explainer) that reuses the same shared `Nav`/`Footer`, and a bare
`#work` href from a different route silently fails (tries to scroll to an
element that isn't on that page). Landing this now, while it's a zero-risk
change, avoids a real bug the moment the second route ships.

**Footer copyright year was hardcoded to "© 2027," a stale/wrong future
year.** Rather than just correct the digit (which reintroduces the same bug
next calendar year), both `Footer.tsx` components now compute
`new Date().getFullYear()` at build/render time; the content files hold only
the trailing "Designerama. All rights reserved." text. These are plain
server components with no client-side re-render, so this bakes in the
build's year at static-export time the same way everything else on this
statically exported site is baked in — no hydration-mismatch risk.

**Fixed a real, separately-discovered dead anchor while in the area.**
Portfolio's nav has a working link labelled "Approach" pointing at
`#approach`, but `components/portfolio/Method.tsx` (the section it's meant
to scroll to) never had a matching `id`. Added `id="approach"` to that
section. Unrelated to the messaging work above, caught during the same
research pass, cheap enough to fix immediately rather than file separately.

Verified with `npx tsc --noEmit` (clean), a full `STATIC_EXPORT=true npm run
build` (all 13 routes, clean), and a direct browser check of the rendered
homepage and portfolio pages.

## GOtv rebuild surfaces a new carousel edge case: min-width floor (2026-07-21, later)

**GOtv's images are the most extreme aspect ratio the carousel has seen
yet.** `gotv1.jpg` through `gotv5.jpg` are full-page desktop scroll
captures at roughly 0.24:1 (source 2732x12368) — even more extreme than
SuperSport's `ss-web0.jpg` (0.27:1) which prompted the full-width/scroll
redesign earlier today. At the carousel's fixed card heights (240 to
440px depending on breakpoint), an aspect-ratio-driven width with no
floor would compute a card as narrow as ~55-105px, technically correct
per the full-width-plus-scroll design but unusable as a preview: not
enough surface to register as "a screenshot," just a sliver. Added a
`min-w-[200px] sm:min-w-[260px] lg:min-w-[300px]` floor to the card,
letting `min-width` override the aspect-ratio-computed width only when
that computed width would fall below it. This is additive and doesn't
touch any existing carousel's behaviour: DStv (~1.55:1), FNB (~1.85:1),
bidorbuy (forced 4:3/16:9), and SuperSport's own carousels (forced
16:9) all already compute card widths comfortably above the floor, so
nothing shifts for them. GOtv 1-5 now render as ~260-300px cards
(clamped by the floor) with the image filling that width edge to edge
and scrolling vertically to reveal the rest, exactly the intended
interaction, just at a usable card size.

**Copy suggestion surfaced, not applied.** Kishan asked to "suggest
copy updates once reading thru, if any" rather than rewrite unprompted.
`gotv-guide1.jpg` (used for the new secondary slot below the situation
carousel) turned out to be a genuine TV Guide feature: a channel
schedule grid with date tabs and a live-events filter. None of the
existing situation/approach/outcome copy mentions a TV Guide at all —
it's scoped to "dashboard, discovery, sign-in, payments and package
selection." Rather than fold this into the copy myself (which would
mean guessing at how prominent a role TV Guide actually played in the
real engagement), flagged it as an open question for Kishan to decide,
consistent with the standing rule against fabricating case-study
claims not evidenced by what he's actually confirmed.

## Carousel full-width bug fixed by redesigning the interaction, not patching it (2026-07-21)

**Root cause: `w-auto` computed width from the wrong aspect ratio.**
Kishan sent screenshots showing SuperSport and bidorbuy carousel cards
with a narrow image and a large blank gap. The card's outer `<div>` was
correctly sized to the forced `cropRatio` via CSS `aspect-ratio`, but
the inner `<Image>` had `className="h-full w-auto object-cover"` with
`width`/`height` props set to the image's *real* dimensions. Browsers
compute `w-auto` against an element's own intrinsic ratio (from its
`width`/`height` attributes), not its parent's CSS `aspect-ratio` — so
for an image whose real ratio was very different from the forced
`cropRatio` (SuperSport's `ss-web0.jpg` at 0.27:1 forced into 16:9), the
image rendered far narrower than the card, leaving the rest of the box
blank. `object-cover` never got a chance to crop-to-fill, because the
image's own box was already the wrong size before `object-fit` applied.

**Fixed by changing the interaction, not just the CSS.** Kishan's
request wasn't "make the crop math correct" — it was "images need to
occupy the full width of the placeholder, edge to edge, and then be
vertically scrollable within that placeholder to see the rest of the
image." That's a different design entirely: instead of cropping content
away via `object-cover`, each card now wraps its image in its own
`overflow-y-auto` region, the image renders at `w-full h-auto` (always
exactly fills the frame width), and any excess height becomes
vertically scrollable inside that card — the same interaction
`PrototypeViewer` already used for a single tall image, just applied
per-card inside the horizontal carousel now. This is a nicer outcome
than a pure bug fix would have been: no case study loses image content
to cropping anymore, whether or not `cropRatio` is set.

**Consequence: `cropRatio` no longer means "crop."** It still exists and
still forces a shared frame shape across a carousel's cards (unchanged
prop name and signature, to avoid unnecessary churn across
`ImageCarousel.tsx`, `CaseStudy.tsx`, `work.ts`'s `CaseStudyData`, and
the 2 case studies using it), but its job changed from "the ratio to
crop everything to" to "the ratio of the visible window before vertical
scroll kicks in." DStv and FNB never used `cropRatio` (their per-image
frame always matched the image's real ratio, so they never hit the
blank-gap bug), and now sit on the exact same interaction model as
bidorbuy/SuperSport rather than a different one that happened to look
fine by coincidence.

**Zoom trigger moved from whole-card click to a dedicated button.**
Once each card is independently vertically scrollable, "click anywhere
on the card to zoom" becomes ambiguous against "drag to scroll this
card vertically" and "drag to scroll the whole carousel horizontally."
Kishan's separate ask ("replace 'click to view' with a magnify icon
only, bottom right") solved both problems at once: a small, always-
visible (not hover-only, since touch has no hover) icon button in the
corner is the only zoom trigger now, with `stopPropagation` on both its
`pointerdown` and `click` so it doesn't get swallowed by the outer
drag-to-scroll handler. `PrototypeViewer`'s single-image viewers (1b/2b)
were explicitly called out as "great" as-is, so only their visual hint
changed (text pill to matching icon) — the whole-frame click-to-zoom
behaviour there was left untouched, since it wasn't broken and 1b/2b
don't have the per-card ambiguity problem the carousel does (there's
only one image, no horizontal drag to disambiguate against).

**Mobile back-link fix was a one-line CSS change, not a redesign.**
`components/portfolio/Nav.tsx`'s `backLink` had `hidden sm:inline`,
so on mobile the only way to it was the hamburger's secondary links,
an extra tap. Kishan wanted it to "stay in the nav bar," i.e. always
visible in the persistent top bar regardless of viewport. Removed
`hidden sm:inline`, left it in the `MobileMenu`'s secondary links too
(not asked to remove the duplicate, and having it in both places isn't
harmful).

## SuperSport four-slot layout, horizontal scroll viewer, PrototypeViewer eager-load fix (2026-07-20, fourth pass)

**Two media blocks per section instead of one.** Kishan's brief named
four slots: "Slot 1a" and "Slot 1b" (the second "just below, same
project") under situation, "Slot 2a" and "Slot 2b" under approach. The
existing `CaseStudyData` shape only had one image set per section. Added
`situationSecondary` / `approachSecondary`, each an optional
`SecondaryMedia` object (images, media mode, crop ratio, orientation),
rather than a flat array of unlimited blocks, since the brief was
specifically "one primary, one secondary directly below," not an
open-ended list. `CaseStudy.tsx` renders the secondary block with a
plain `mt-6` gap under the primary, no heading or border of its own, so
it reads as continuation of the same evidence rather than a fourth
section.

**New horizontal-scroll-with-zoom pattern, built by generalizing
`PrototypeViewer`, not writing a new component.** Two of the four
SuperSport images are extreme aspect ratios meant to be viewed at full
height and scrolled sideways: `ss-mobile1.jpg` (6323px source, a row of
mobile screens) and `ss07.jpg` (20116px source, a full strategy-deck
panorama). `PrototypeViewer` already did the vertical version of this
exact interaction for DStv TV Guide's prototype image, so added an
`orientation: "vertical" | "horizontal"` prop rather than duplicating
the component. Horizontal mode: `overflow-x-auto` instead of `-y`,
image sized to full container height instead of full width, "more to
scroll" fade gradient on the trailing edge instead of the bottom.
`Lightbox` got a parallel `wide` prop (alongside the existing `tall`)
so the zoomed view also scrolls horizontally at full source height.

**SS07 is real evidence, not decoration.** Read the file directly (same
discipline as the DStv/FNB/bidorbuy passes) rather than assuming it was
another montage like `ss-mobile1`. It's an actual strategy-deck slide:
Objective (Video Play Page, Match Video improvement goals), Approach
(Behavioural Economics: Choice Architecture, Choice Overload, the EAST
Framework), and Live Streaming redesign mockups. This directly
corroborates the case study's existing approach copy ("nudge theory,"
"OneBox," etc.), which was written before this image existed on the
page. Left that copy as-is since it already holds up against the new
evidence; only the frame captions changed, to describe what the two
carousels actually show rather than the more specific "video play page"
/ "news article page" framing that predates having page-type-general
screenshots.

**Real bug: `PrototypeViewer` was missing `loading="eager"`.** Both
horizontal blocks initially failed to load in the verification browser,
even after `scrollIntoView` and long waits, while the carousels above
them loaded fine. Tracing it down: `ImageCarousel` already sets
`loading="eager"` on every card (a fix from the very first DStv pass,
for a different bug), but `PrototypeViewer`'s `Image` never got that
treatment since its original single use case (DStv's tall prototype) is
positioned near the top of a short page and loads fast enough by
accident. Confirmed via direct `curl` against the dev server's image
optimizer (both URLs resolved in ~1.5s once requested) that this was a
client-side lazy-load timing issue, not a slow or broken server
response, then fixed by adding `loading="eager"` to match
`ImageCarousel`'s established pattern.

## bidorbuy carousel with forced crop ratio, personal data blurred, two factual corrections (2026-07-20, third pass)

**cropRatio added instead of relying on per-image sizing.** The FNB pass
generalized `ImageCarousel` to size each card from its own real
width/height, which worked because FNB's 8 screenshots were all a
consistent ~1.85:1. Bidorbuy's 10 images range from 0.96:1 (a tall
portrait payment form) to 1.82:1 (wide homepage screenshots), so
per-image sizing would have made the horizontal scroll track visually
chaotic, cards jumping in width as you drag past each one. Kishan asked
explicitly to "fix images ratio, size and crop at bottom if needed," so
added an optional `cropRatio: [number, number]` prop that forces every
card in that carousel instance to one shared ratio via `object-cover`,
cropping whatever doesn't fit. Top slot (old bidorbuy.co.za, 6 images)
uses 4:3, matching the majority of that set. Bottom slot (current Bob
Shop, 4 images) uses 16:9, matching 3 of its 4 images.

**Click-to-zoom added since cropping now hides content.** Kishan's
follow-on instruction: "add click to zoom for full image if you going to
crop for the carousel." Reused the existing `Lightbox.tsx` component
(already built for `PrototypeViewer`) rather than writing a new one.
The tricky part was distinguishing a genuine click from the tail end of
a desktop drag-to-scroll gesture, since both fire through the same
pointer events on the card. Solved by tracking the maximum horizontal
distance moved during an active pointer-drag; a click handler only opens
the lightbox if that distance stayed under 6px, otherwise the click is
treated as the end of a drag and ignored. Touch swiping doesn't have
this problem since native scroll doesn't fire synthetic click events
after a real swipe.

**BOB 2 blurred, not cropped or skipped, per direct question to Kishan.**
While reading the actual bidorbuy source images (same discipline as the
DStv and FNB passes: read files directly rather than guess from pasted
screenshots), found that `bob2.jpg`, one of the four "currently live"
images Kishan specified for the bottom slot, is a screenshot of his own
logged-in Bob Shop account page showing his real name, Johannesburg
location, `kishan@designerama.co.za` email, and a numeric User ID. This
wasn't something to silently publish or silently swap out. Asked via
AskUserQuestion whether to crop the personal panel out, publish as-is, or
substitute a different image. Kishan chose a fourth option not in the
original three: blur just those details. Located the exact pixel region
(four lines: name, location, email, User ID, excluding the "Skish 82"
username badge and the "Become a verified user" links below, both fine
to leave visible) via iterative `ffmpeg -vf crop` test renders, then
applied a `crop` + `boxblur=25:15` + `overlay` filter chain to blur just
that region in place, leaving the rest of the screenshot untouched.

**Two factual corrections, applied literally, not expanded in scope.**
Kishan corrected FNB's Digital Wiki line ("I conceived and built" to "I
helped build") and confirmed DStv TV Guide's dates should read 2025, not
2017 to 2018 (settling the discrepancy flagged in the previous DStv TV
Guide pass, where the slide deck's own 2025 date conflicted with the
case study's original meta). Both changes were applied narrowly: only
the specific field/phrase named, not a broader rewrite of surrounding
copy, role, or client fields that weren't mentioned. If Kishan wants
those reconciled further (e.g. whether "Senior User Experience Analyst"
/ "DStv, MultiChoice Group" still make sense as a 2025 date), that's a
separate ask, not assumed from this instruction.

## ImageCarousel generalized for FNB, dev server .next corruption (2026-07-20, later)

**Generalized ImageCarousel instead of building a second component.**
FNB's real screenshots are full desktop webpage captures at roughly 1.85:1
(1920x1037), quite different from DStv TV Guide's app-screenshot slides at
1.547:1 (1920x1241). The carousel had those DStv dimensions hardcoded as
both the CSS `aspect-ratio` and the Next Image `width`/`height` props.
Forcing FNB's images through that box would have used `object-cover` to
crop roughly a quarter of each screenshot's width to force-fit the wrong
ratio. Generalized by adding optional `width`/`height` to the image data
type (defaulting to the original 1920x1241 for backward compatibility with
existing DStv entries) and deriving both the box's `aspect-ratio` and the
`Image` props from the real per-image dimensions, so `object-cover`
becomes a no-op safeguard rather than an active crop. This means it's a
true shared component now, not a DStv-specific one wearing a generic name.

**FNB's carousel images are both slots, not carousel-plus-prototype.**
Kishan explicitly asked for the same carousel pattern in both slots (not
the scroll-and-zoom `PrototypeViewer` used for DStv's bottom slot), since
FNB's assets are 8 discrete webpage screenshots rather than one tall
prototype image. Top slot: images 1 to 4 (FNB 1.png through FNB 4.png,
supplied pre-numbered in `/Users/kishanrama/Documents/Designerama/Portfolio/`).
Bottom slot: images 5 to 8. Read all 8 directly rather than guessing from
the pasted screenshots, since the DStv pass already proved that guessing
from pasted images produces wrong ordering. The 8 screenshots turn out to
be live FNB pages across four different markets (Namibia N$, Ghana GHS,
Botswana registration number visible on Premier Banking, and the Channel
Islands page), which fits the case study's real claim of a rollout across
"FNB's operations in Africa and the Channel Islands" — used as the new
frame captions ("FNB digital banking, live across markets") instead of
the old "pre-redesign" / "redesigned" before/after framing, since these
are current live pages demonstrating the pattern, not a before/after pair.

**sips JPEG quality flag doesn't work reliably on this macOS install.**
`sips -s formatOptions <N>` on already-resized JPEGs left files at
1.6 to 2.6MB, barely smaller than the untouched resample. Recompressing
from the original PNGs with `ffmpeg -q:v 5` got equivalent visual quality
at 90 to 260KB. Worth remembering for any future image optimization pass
in this repo rather than re-discovering the sips limitation.

**Dev server `.next` corruption recurred, same root cause as before.**
Ran `STATIC_EXPORT=true npm run build` (production build) in the
background while the `npm run dev` preview server was still running to
verify FNB. This is the same documented failure mode from earlier in the
project (see PROJECT-STATUS.md): a production build while dev is running
wipes shared `.next` state, and the dev server then 500s with
`Cannot find module './vendor-chunks/framer-motion.js'`. Fixed by
stopping the preview server, `rm -rf .next`, and restarting clean. Given
this has now happened twice, the standing rule is: never run
`npm run build` in the background while a `preview_start` dev server is
active for the same project; stop the preview first, or use a second
worktree/copy if both are genuinely needed at once.

## DStv TV Guide case study: real media, proof row removed sitewide (2026-07-20)

**Carousel rebuilt from arrow-paged to native horizontal drag scroll.**
First attempt used a Framer Motion drag track with prev/next arrow
buttons, one full slide visible at a time. Kishan didn't like the arrow
pattern and wanted horizontal scroll/swipe like thefirstthelast.agency's
work pages and vucko.co/projects. Opened both references (vucko.co
rendered cleanly: peeking cards, no arrows, a thin scrub bar, a
"(Scroll)" hint; TFTL's case-study overlay uses a similar drag gallery
but the embedded verification browser couldn't render its GSAP-driven
scroll). Rebuilt as a native `overflow-x` scroll-snap track: peeking
cards at both edges, click-drag for desktop mouse (native scroll already
covers touch/trackpad), a thumb-style progress bar, and a fading "Drag
to explore" hint, no arrow buttons.

**Fixed the real "images not displaying" and "wrong order" bugs.**
The order bug was mine: I captioned situationImages by guessing which
pasted screenshot matched which tvg file, and got it backwards (tvg9
first). Fixed by reading each tvg1 through tvg9 file directly with the
Read tool and confirming the actual narrative: TV Guide Reimagined
(cover) → DStv Discover (problem/solution) → My Feed → Revamped Linear
View → Intelligent Search & Voice → Proactive Planner → Strategic
Spotlight Card → Sport Hub → Conclusion & Takeaway. The display bug
traced to Next Image's `fill` prop inside a percentage-width Framer
Motion track racing with layout measurement on mount; fixed by using
fixed intrinsic image dimensions instead, which also happened to be a
cleaner fit for the native-scroll rebuild.

**Case study copy rewritten from the real deck, not overclaimed.**
The tvg slides are themselves a personal proof-of-concept exploration
dated 2025 ("Kishan Rama, 2025" on the title slide), distinct from the
existing case study's professional meta (2017-2018, Senior UX Analyst,
DStv MultiChoice Group). Left meta/eyebrow/dates alone since the
situation/approach/outcome rewrite was explicitly scoped to the tvg
content only, not a broader reconciliation of the two, but flagged this
to Kishan as a follow-up if he wants the intro/eyebrow aligned to the
mobile-only, feed-based framing the new copy uses (current headline
still says "lean-back and lean-forward" which reads connected-TV, not
mobile). The deck's own "Success Metrics & Impact" section is phrased as
projected/intended impact ("session durations increases due to...", not
a measured result), so the new outcome copy mirrors that hedge
("designed to lift...") rather than repeating the old copy's stronger
shipped-outcome claims, per the standing rule against fabricating
case-study outcomes.

**Proof/stats row removed from every case study, not just this one.**
Kishan said "remove this section, see image from all work sections"
about the 5 / 2 / 2017-to-18 style numbers row. Removed the whole
render block from the shared `CaseStudy.tsx` template plus the `proof`
field from `CaseStudyData` and all 6 case studies' data in `work.ts`
(supersport, gotv, bidorbuy, fnb, dstv-tv-guide, dstv-rewards), since it
was redundant with the numbers already stated in each outcome paragraph.

## Mobile menu cleanup: chips, ghost, pill buttons (2026-07-20)

**Removed label chips and ghost wordmarks from both mobile menus.**
After seeing the initial TFTL-inspired implementation, Kishan asked to
strip the tags/chips at the bottom, remove the ghost wordmark text
(both "DESIGNERAMA" and "KISHAN RAMA"), and give the secondary
cross-links (Portfolio ↔ Designerama) more affordance by rendering
them as centered pill buttons with a visible border. The result is a
cleaner, more minimal takeover that keeps the stagger-reveal links and
underlined CTA but drops the decorative elements.

## TFTL-style full-screen mobile menu, ambient motion, portrait float (2026-07-17, later same day)

**Mobile menu upgraded from dropdown to full-screen takeover.** Kishan
asked (via the design-remix skill) for the mobile menu open state to
mirror the TFTL site — that's **The First The Last**
(thefirstthelast.agency), the Awwwards-winning agency, confirmed by
opening their live site at mobile width and capturing the actual open
state. Their pattern: full-screen brand-background takeover, logo stays
top-left and the trigger becomes a Close/✕ top-right, large display-type
links stacked and centered, a big underlined text CTA below them, then a
bottom zone with small colored label chips, secondary/social links, and
a giant ghost wordmark bleeding off the bottom edge. Implemented as a
shared `components/shared/MobileMenu.tsx` used by both Navs (brand
theming comes free via the CSS-variable tokens): Designerama gets chips
"Diagnosis before design"/"Home to Verifux" and ghost "DESIGNERAMA";
Portfolio gets "Principal Product Designer"/"Behavioural science" and
ghost "KISHAN RAMA". Links stagger-reveal; body scroll locks while open;
reduced motion collapses all of it to instant.

**Real bug found while verifying:** tapping a `#section` link closed the
menu but never scrolled, because the body scroll-lock was still applied
when the browser processed the hash navigation. Fixed by releasing the
lock synchronously in the link click handler, before the default action
runs. Separately, the embedded verification browser turned out to
suppress ALL smooth scrolling (even plain
`scrollTo({behavior:'smooth'})` never moves) — hash-jump completion
therefore can't be observed in that environment and needs a real
browser; don't mistake that environment quirk for a site bug again.

**Ambient motion behind Why Diagnosis Matters + flipped closed.** Two
accent-tinted blurred blobs (`.why-ambient-a/b` in globals.css) drift on
slow offset loops (26s/32s) behind the section content; the global
prefers-reduced-motion kill-switch already freezes them. Same request
flipped the accordion **closed by default**, reversing the 2026-07-16
"Why Diagnosis Matters defaults open" decision — Kishan asked
explicitly, so the settled state is now: 01, 02, and Why Diagnosis
Matters all closed; Selected Work open.

**Portrait idle float.** The portfolio hero portrait already had scroll
parallax (y/scale via useScroll); added a slow 9s breathing loop (y 0→-9
→0, scale 1→1.012→1) on a nested motion.div so the two compose instead
of fighting over one transform. Disabled under reduced motion.

## Mobile nav, Speaking section, Stats removal, Verifux link, footer logo, ship-ready (2026-07-17)

**Mobile nav was a real gap, not a style choice.** Both `Nav.tsx` components
(Designerama and Portfolio) hid their links/CTA entirely below the `md`
breakpoint with nothing to replace them — mobile visitors had zero way to
navigate. Fixed with a proper animated hamburger (three bars morphing to
an X) and a slide-down panel in both, reusing the same pattern. This
required adding an `onClick` prop to `components/shared/Button.tsx` (it
only accepted `href` before) so the Designerama mobile panel's CTA can
close the panel on tap. Verified at 375px (mobile, panel opens/closes,
all links reachable) and 768px (`md`, reverts cleanly to the full desktop
nav) on both `/`, `/portfolio`, and a case-study page (which adds a
`backLink` prop).

**Portfolio Stats block removed.** The "26+ / 26-30M / 40% / CUA" row
(`Stats.tsx`, rendered between Method and VerifuxSpotlight) was flagged
via a screenshot as something to cut. Removed the component, its usage in
`app/portfolio/page.tsx`, and the now-dead `stats` export from
`portfolio.ts`.

**Verifux Spotlight card now links out.** It was a static card with no
click target. `GradientHoverCard` already supported an `href` prop
(renders as `<a target="_blank">` for external URLs) — wired it to
`https://www.designerama.co.za/verifux`, the same URL already used in
Designerama's own nav, rather than guessing a new one.

**Designerama footer logo reduced ~60%** (36px → 14px height) per direct
request.

**Conference speaking added, sourced from the real CV.** Kishan asked why
speaking experience wasn't on the site — it wasn't an omission, there was
simply no source for it anywhere in the repo's content files. He pointed
at `Kishan_Rama_CV_2026.pdf` in Dropbox. No PDF text-extraction tool was
available in the environment (no `pdftotext`, no `pypdf`), so a throwaway
Python venv (`/tmp/pdfenv`) was set up with `pip install pypdf` to extract
the CV's text directly, rather than guess or skip the request. Two real,
dated speaking engagements came out of it: UX Africa Summit 2025 (May,
"The Cultural Compass: Hacking Human Behaviour for UX Magic in Africa")
and UPTechX Conference 2025 (October, "Unlocking Potential: Human-Centred
Design in Higher Education," sharing the programme with Harvard
University Library's Head of UX & Digital Accessibility). Added as a new
`components/portfolio/Speaking.tsx` section (between Arc and Method) plus
a nav link, a one-line mention in Portfolio's hero sub-copy, and a
credential stat in Designerama's About section. Two deliberate edits from
the CV's wording: the venue detail "Sandton Hotel, Johannesburg" was
dropped per the standing no-JHB/SA rule (institution names like AMC
International and University of Pretoria were kept, treated the same as
real client names elsewhere on the site); and the CV's "8-pillar,
48-checkpoint" description of Verifux was ignored entirely, since it
contradicts the verified-correct 54-checkpoint/9-pillar figure already
confirmed against Verifux's actual `heuristics.js` source in an earlier
session, the CV's number is simply out of date.

**Repo root cleaned up.** Deleted a stale extracted `designerama-static/`
folder (a leftover unzipped copy of an earlier build, superseded and not
git-tracked), `.DS_Store`, and `tsconfig.tsbuildinfo` — all pure local
clutter, none tracked by git, all regenerable. Rebuilt a fresh root export
and repackaged `designerama-static.zip` with everything through this
session's changes, verified locally (served via `python3 -m http.server`)
before packaging.

**Kishan confirmed the site ready to ship** ("ready to ship now") and
asked whether the whole zip needs re-uploading on every change. Answer
documented in DEPLOYMENT.md: yes, for any code/content change, because
Next's static export gives JS/CSS chunks a content hash that changes on
nearly any edit — a partial upload risks referencing chunk files that
were never uploaded. The one exception is swapping a same-named image
file in place. Also noted that FTP/SFTP + a sync tool (rsync/lftp mirror)
would solve this properly if Xeenlo supports it, versus manual zip
replacement each time.

## FNB/bidorbuy "platform today" images moved into placeholder slots, deploy target moved to root (2026-07-16)

**"Platform today" images:** four current-day screenshots (FNB Savings
Pocket, FNB Channel Islands, Bob Shop home, Bob Shop seller page) were
initially added as a standalone "The platform today" section with its own
`today` field on `CaseStudyData`. Kishan rejected that approach after
seeing it live ("i dont like this approach") and asked instead for the
images to go directly into the existing situation/approach placeholder
slots, each with a small "platform today" disclaimer underneath. Reworked:
removed the `today` field and section entirely; added an optional `note`
field to the `situationImages`/`approachImages` image type so `ImageGallery`
can render a caption under specific images without affecting the rest.
FNB and bidorbuy's `situationImages`/`approachImages` now carry one "today"
image each (previously empty, falling back to `FramePlaceholder`).

The images briefly looked broken during diagnosis (`naturalWidth: 0` in a
JS check) — this turned out to be a false alarm, not a real bug: the check
ran before the images had scrolled into view, and `next/image` defaults to
`loading="lazy"`. Once actually scrolled into view they loaded correctly.
Worth remembering if this pattern recurs: check `naturalWidth` only after
`scrollIntoView`, not on initial page load.

**Deploy target moved to root:** Kishan is now uploading to
`www.designerama.co.za` root directly, not the `/new` test path. No code
changes were needed — `next.config.mjs` already only applies `basePath`
when `NEXT_PUBLIC_BASE_PATH` is set, so a root build is just
`STATIC_EXPORT=true npm run export` with that variable unset. Verified
locally by serving `out/` with a plain static server (`python3 -m
http.server`) rather than `npm run dev`, since dev mode doesn't exercise
the static-export output. DEPLOYMENT.md and PROJECT-STATUS.md updated to
make root the primary documented path; the `/new` subpath instructions are
kept but demoted, in case a subpath test build is ever needed again.

## DStv Now case study removed entirely, accordion defaults flipped (2026-07-16)

**DStv Now removed:** the `slug: "dstv"` entry in `lib/content/work.ts` was
already unfeatured (dropped from the Selected Work grid in an earlier
pass), but the case study itself and its `/portfolio/dstv` route still
existed for anyone with a direct link. Kishan asked for it gone
completely, not just unfeatured. The whole `WorkItem` object was deleted;
`generateStaticParams()` in `app/portfolio/[slug]/page.tsx` derives its
routes from `workItems.filter(w => w.caseStudy)`, so removing the object
removed the route automatically, no route-file changes needed. Other
prose mentions of "DStv Now" as an employer/role (in `arc` and in the
DStv TV Guide / DStv Rewards case-study intros) are real career history,
not the removed case study, and were left alone.

**Accordion defaults flipped:** Diagnose (01) and How It Works (02) now
default **closed**; Why Diagnosis Matters now defaults **open**. Selected
Work (03) stays open. This reverses the previous defaults (01/02 open,
Why Diagnosis Matters closed) set when the accordion pattern was first
built. If touching `components/designerama/CheckpointStrip.tsx`,
`Process.tsx`, or `WhyItMatters.tsx` again, this is the current settled
state, don't revert to the original defaults without being asked.
`designerama-design-system.html`'s accordion section table was updated to
match.

## Taste-arbitrage copy audit, pass two (2026-07-16)

Ran the remaining body copy in `lib/content/designerama.ts`,
`lib/content/portfolio.ts`, and the case-study intros in
`lib/content/work.ts` through the `taste-arbitrage` skill's weak-versus-
strong test (see [[taste-arbitrage-pivot]] memory for the full thesis).
Most sections already passed: `diagnose` and `process` are structural/
factual with no aesthetic claims, `about`, `arc`, `method`, and
`philosophy` already led with judgment or named consequences rather than
looks. Four sections failed and were rewritten to lead with the diagnosis
or cost before the feature/spec list:

- Designerama's Verifux work tile (idx 01) and "See what's actually
  shipped" tile (idx 03).
- Portfolio's Verifux Spotlight body, which also fixed a real AI-sense
  ambiguity ("AI-agent readiness" was vague; now explicitly "legible to
  AI agents," distinct from the thesis's AI-makes-UI-cheap sense).
- Five case-study intros (GOtv, bidorbuy, FNB, DStv TV Guide, DStv Now)
  were reordered to lead with the diagnosed problem instead of role/
  scope. SuperSport and DStv Rewards were left untouched, both still
  asset-blocked per the Open/pending section below, so no rewrite was
  forced on them.

Same pass also fixed a real location-rule violation found in bidorbuy's
old intro ("South Africa's leading online auction and shopping
marketplace"), unrelated to the taste-arbitrage test but caught while in
that file. **Not fixed, flagged for Kishan's explicit call:**
`legacyWork`'s JoziBond entry still has `client: "City of Johannesburg"`
— that's the real historical client name for a 2010-era legacy campaign,
not marketing copy, so it wasn't changed without confirmation either way.

Verified with a clean `npm run build` (all 14 routes, including all 7
case-study pages) after applying.

## Verifux Spotlight stays a dedicated Portfolio section, not a work-grid tile (2026-07-15)

Briefly removed in favour of a work-grid tile linking out to the live
Verifux site, then explicitly reverted the same session — Kishan wants the
dedicated section (with its cursor-tracked hover gradient, `.verifux-card`
in globals.css) kept on Portfolio. The Selected Work grid instead simply
omits a Verifux tile rather than duplicating it. If touching Portfolio's
work grid or the Verifux Spotlight again, this is the settled state — don't
re-remove the section in favour of a grid tile without being asked again.

## Numeric reach figures use a hyphen, not "to" (2026-07-15)

The general "no em/en dashes" rule (below) initially got over-applied to
compact numeric ranges like SuperSport's reach figure, turning "26-30M"
into "26 to 30 million" everywhere. Kishan asked for the hyphenated form
back explicitly. Refined rule: sentence-level em/en dashes always become
commas, periods, or "to" — but a plain hyphen in a compact numeric range
("26-30M") is range notation, not sentence punctuation, and stays a hyphen.

## GA4 analytics activated, old Universal Analytics retired (2026-07-15)

Audited `website_old/` (the current live 2010-era site, kept as migration
source for `/visual` — see PROJECT-STATUS.md) for anything worth reusing.
Nothing needed copying as-is: its `robots.txt` had `Disallow: /` (blocking
every search engine, contradicting its own `index, follow` meta tag),
`license.txt`/`readme.html` are stock WordPress boilerplate, and its
Google Analytics snippet (`UA-18944179-2`, `ga.js` loader) is permanently
dead — Universal Analytics stopped collecting data on 2023-07-01, and the
`ga.js` loader itself was retired years before that.

Added real fundamentals instead: `public/robots.txt` (crawlable),
`app/sitemap.ts` (auto-generated from the work registry), `app/icon.png`
(the real square logo-mark badge from `website_old`), and
`components/shared/GoogleAnalytics.tsx` with Kishan's real GA4 property
(`G-3C5292GLX7`) baked in as the default — not gated behind an env var,
since a Measurement ID isn't a secret and a forgotten env var would
silently kill analytics on a future build.

## Verifux framework copy corrected to ground truth (2026-07-15)

**What was wrong:** site copy described Verifux's framework as "8 pillars,
48 checkpoints" across "UX, DX, MX, AIX" — a plausible-sounding guess that
was never verified against the actual product.

**What's actually true**, confirmed by reading
`/Users/kishanrama/Documents/Verifux/heuristics.js` directly (the `PILLARS`
and `PILLAR_GROUPS` exports) and cross-checking the live
`designerama.co.za/verifux` page:

- **54 checkpoints across 9 pillars total.**
- Grouped into a triad, not a quartet: **MX** (Human Experience — "can people
  use it?", 7 pillars), **BX** (Behavioural Experience — "will people act?",
  1 pillar), **AIX** (AI Experience — "can AI use it?", 1 pillar).
- **DX** (Design Excellence) is a *separate, optional* 0–100 craft score,
  benchmarked against design-award criteria. It explicitly does **not**
  factor into the 54-checkpoint score — the two are independent numbers.

**Why it matters going forward:** any future copy touching Verifux's
framework must use MX/BX/AIX as the checkpoint triad and treat DX as a
separate, optional add-on — not a fourth equal member of the framework. If
the real product's pillar/checkpoint counts change, re-verify against
`heuristics.js` rather than propagating old copy.

**Process lesson:** this was caught because the user directly asked "why
can't you check the Verifux folder or engine.js or git." The honest answer
was that an earlier session treated "don't modify the Verifux folder" as
"don't touch it at all," when it only ever meant don't *write* to it — reading
it for facts was always fine and should have happened before guessing.

## Portal splash demoted, Designerama became the site root

Earlier in the project, `/` was a "two doors" portal forcing a choice between
Portfolio and Designerama before showing any content. This was replaced:
Designerama is now the home page directly; Portfolio is a first-class page
one click away at `/portfolio`. Reasoning: a mandatory gate before content
costs a click of friction for anyone arriving with specific intent (a shared
link, a search result), and gave 50/50 visual weight to two properties that
aren't equal priority — Designerama/Verifux is the revenue focus, the
portfolio is secondary.

## Designerama is dark-only, Portfolio is light-only — no theme toggle

Each brand carries a fixed theme via `[data-brand]`-scoped CSS custom
properties (`components/theme/ThemeProvider.tsx`, `app/globals.css`). There
is no light/dark toggle and none should be added without being asked — this
was a deliberate simplification after theme toggling was tried and dropped.

## No em/en dashes anywhere in copy

Standing style rule from the user. Replace with commas, periods, mid-dots
(`·`), or "to" for date ranges (e.g. "2017 to 2018", not "2017–2018").
Applies to all content files and any hardcoded copy in components.

## No Johannesburg / JHB / South Africa references in copy

Explicitly removed once already in an earlier session. Caught and reverted a
near-miss reintroduction of this during the 2026-07-15 footer update — worth
flagging clearly here so it doesn't happen again.

## Static export + subpath basePath handling

Next.js 14.2.18's `next/image` does not reliably auto-prefix `basePath` onto
hardcoded local image `src` strings when using `output: "export"` with
`images.unoptimized: true` — confirmed empirically (an export built with
`NEXT_PUBLIC_BASE_PATH=/new` still emitted un-prefixed `/images/...` paths
for every hardcoded image source, even though CSS/JS chunk paths prefixed
correctly). Fixed with a small `lib/basePath.ts` helper (`withBasePath()`)
threaded through every hardcoded image `src` in the codebase, rather than
relying on Next to handle it automatically. See `docs/DEPLOYMENT.md` for the
build commands this affects.

## Superseded: prefer `overscroll-behavior` (CSS) over a wheel-interception JS fix for nested-scroll-traps-the-page

The entry below this one documents intercepting `wheel` events on a
nested scrollable card and manually forwarding them to the page, to stop
that card's own scroll from trapping the page's scroll. That fix worked,
but it was solving the problem with the wrong tool: it also killed the
card's own scrollability entirely (every wheel tick got redirected, none
were left for the card itself), which broke a feature Kishan explicitly
wanted (scrolling within a card to see the rest of a tall image).

The actual, correct fix needs no JS at all: the card's scroll wrapper had
`overscroll-behavior: contain` (Tailwind's `overscroll-contain`), which
per spec blocks scroll chaining to the parent once the element's own
scroll bounds are reached — that's the literal mechanism of the trap.
Removing it (leaving the CSS default, `auto`) restores the browser's
standard nested-scroll behavior for free: a wheel over the card scrolls
the card first, and once the card's own scroll is exhausted, the same
gesture chains naturally to the page.

**Rule of thumb:** before reaching for a JS wheel/touch interception to
fix a "scroll trapped inside a nested element" complaint, check whether
`overscroll-behavior: contain` (or `none`) is set on that element first.
Removing it is very likely the actual fix, and it preserves the nested
element's own scrollability, which a blanket JS redirect does not.

## React's `onWheel` (and `onTouchMove`) props are passive; `e.preventDefault()` inside them silently does nothing

`ImageCarousel` and `PrototypeViewer` need to intercept a wheel event over
a scrollable card/frame and redirect it to the page instead (see the
scroll-trap entry below). The first attempt used React's `onWheel={...}`
prop and called `e.preventDefault()` inside the handler. It looked
correct and the handler's own logic ran, but the page never actually
stopped receiving the "trapped" scroll: `e.preventDefault()` was a no-op.

Root cause: React registers its internal delegated listener for `wheel`
(and `touchstart`/`touchmove`) with `{ passive: true }` by default, a
deliberate choice to avoid Chrome's "non-passive listener" scroll-jank
warning. A passive listener's `preventDefault()` call is silently
ignored by the browser, by design, no error, no warning at the call
site. This is invisible from the component's own code; the only symptom
is that the intended default-prevention doesn't happen.

Fix: attach a real native listener manually, via `useEffect` +
`element.addEventListener("wheel", handler, { passive: false })`, and
clean it up on unmount. This is the only way to get a wheel/touchmove
handler in React where `preventDefault()` actually works.

**Rule of thumb:** if a component needs to call `preventDefault()` inside
a wheel or touchmove handler, don't reach for `onWheel`/`onTouchMove`
props — they can't do it. Use a manual `addEventListener` with
`{ passive: false }` on a ref instead.

## Never combine CSS `scroll-behavior: smooth` with direct `scrollLeft`/`scrollTop` writes on every pointermove

`ImageCarousel`'s drag-to-scroll writes `el.scrollLeft = ...` directly on
every `pointermove` event during a drag, to track the mouse 1:1. The
track's className also had `scroll-smooth` (`scroll-behavior: smooth`) on
it, left over from early scroll-snap styling. Those two don't mix: with
`scroll-behavior: smooth` set, the browser treats a direct `scrollLeft`
assignment as a smooth-scroll request (per the CSSOM View spec, not just
`scrollTo()`/`scrollBy()`), so it animates toward the new value instead of
jumping instantly. During a real drag, dozens of `pointermove` events fire
in quick succession, each setting a new target `scrollLeft` before the
browser's animation from the previous write has finished, so the writes
fight each other. The visible symptom was exactly what Kishan reported:
dragging over a card felt sluggish and unresponsive, like it "wasn't
scrolling," even though the underlying pointer-event logic was correct.

Fix: removed `scroll-smooth` from the track's className. The arrow-button
clicks that DO want an animated scroll already pass `behavior: "smooth"`
explicitly per call via `el.scrollBy({..., behavior: "smooth"})`, so
they're unaffected by removing the CSS class.

**Rule of thumb:** if a component writes to `scrollLeft`/`scrollTop`
directly and repeatedly (drag-to-scroll, a scrub bar, anything driven by
continuous pointer/frame updates), don't also set `scroll-behavior: smooth`
on that same scrollable element. Request smooth behavior per-call via the
`behavior` option on `scrollTo()`/`scrollBy()`/`scrollIntoView()` instead,
never via the CSS property, when the element also receives frequent direct
writes.

## `onLoad` alone misses content-driven layout reflows; use a `ResizeObserver` on the `<img>`

`ImageCarousel` and `PrototypeViewer` show scroll-affordance arrows only when
the image actually overflows its frame, computed from `scrollHeight` vs
`clientHeight`. Watching only `onLoad` plus a `window resize` listener wasn't
enough: an `<img>` is initially laid out at its placeholder aspect ratio
(from the declared `width`/`height` attributes), and only reflows to its real
decoded ratio once the image finishes loading. For cached images the native
`load` event can fire before React attaches the `onLoad` handler, so the
scroll-state check would run once too early (against the placeholder ratio)
and never rerun, leaving the arrows permanently absent even on cards that
genuinely overflow. The wrapper's own box never changes size (it has a fixed
CSS height), so a `resize` listener on `window` doesn't catch this either,
since nothing about the window resized.

Fix: attach a `ResizeObserver` directly to the `<img>` DOM node (needs a ref
threaded onto `next/image`, which does forward refs correctly as of Next
14.2.18) and rerun the scroll-state check on every observed resize. This
robustly catches the placeholder-to-real-ratio reflow regardless of cache or
`onLoad` timing. If a future component needs to measure "does this loaded
image overflow its container," reach for this pattern rather than
`onLoad`/`resize` alone.

## Tailwind color-opacity modifiers don't work on this project's color tokens

`text-ink/75`-style Tailwind opacity modifiers silently do nothing on this
codebase's custom colors (`ink`, `ink-dim`, `accent`, etc. in
`tailwind.config.ts`), because those tokens are defined as plain
`var(--x)` references rather than the RGB-channel-triplet format
(`rgb(var(--x-rgb) / <alpha-value>)`) Tailwind's opacity syntax requires.
Changing the token format would ripple across every color usage sitewide, so
the fix used instead is `text-[color-mix(in_srgb,var(--x)_NN%,transparent)]`
as an arbitrary value wherever a color-with-opacity is needed. Don't reach
for `/NN` opacity modifiers on this project's tokens — they won't error,
they'll just silently apply full opacity, which is a hard bug to spot visually.
