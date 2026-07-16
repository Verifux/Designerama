# Decisions log

Chronological, most recent first. Each entry explains *why*, not just *what*
— the code diff shows what changed; this shows the reasoning so a future
session doesn't re-litigate settled calls.

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
