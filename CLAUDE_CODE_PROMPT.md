# Build Prompt for Claude Code — Kishan Rama / Designerama Portfolio Site

Paste this whole document into Claude Code as your first message, alongside the
5 HTML files in this folder (`portal.html`, `portfolio.html`, `designerama.html`,
`project-supersport.html`, `project-bidorbuy.html`).

## What these HTML files are

They are **high-fidelity design references**, not production code. They are
plain static HTML/CSS/JS prototypes built to lock down layout, type, color,
spacing, copy, and motion. Your job is to **recreate this design in a real,
maintainable codebase** — not to ship these files as-is. Treat every visual and
interaction detail in them as the spec; treat the actual `<script>` tags,
inline styles, and base64 image blobs as throwaway plumbing.

## Concept — "One practice, two doors"

`portal.html` is the entry point. It splits into two doors:
- **Kishan Rama portfolio** (`portfolio.html`) — recruiter/hiring-team facing.
  Editorial, warm, personal. Light theme by default (dark mode available).
  Career narrative, case studies, credentials.
- **Designerama** (`designerama.html`) — client/consulting-facing brand for
  Kishan's UX consulting practice and Verifux (an AI-powered UX audit product).
  Clinical, systemized, restrained. Dark theme by default (light mode
  available). Index-rule grid, numbered checkpoints, diagnosis-first tone.

The two brands must read as deliberately different registers of the same
underlying design system — same type families and red accent, opposite
temperature and density. Do not let them converge into the same template with
different copy.

## Tech stack

- **Next.js 14+ (App Router), TypeScript, React.**
- **Tailwind CSS** for utility styling — but define the design tokens below as
  Tailwind theme extensions, not ad hoc values.
- **Framer Motion** for all animation/motion: scroll reveals, hero portrait
  parallax, cursor-tracked gradient hovers, theme-transition fades, ticker/marquee.
  Respect `prefers-reduced-motion` everywhere (disable parallax, marquee scroll,
  and reveal transforms; keep opacity fades instant).
- **Node.js** backend needs are minimal — this is a static/marketing site with
  one contact path (`mailto:`) and no forms today. Stub a `/api/contact` route
  (Node runtime) only if the user later asks for a real contact form; don't
  build one preemptively.
- Deploy target: Vercel (default Next.js hosting assumptions are fine).

## File / route directory

```
app/
  layout.tsx                 — root layout, font loading, theme provider
  page.tsx                   — "/" → portal (two-doors splash)
  portfolio/
    page.tsx                 — "/portfolio" → Kishan's recruiter-facing site
    supersport/page.tsx      — "/portfolio/supersport" case study
    bidorbuy/page.tsx        — "/portfolio/bidorbuy" case study
  designerama/
    page.tsx                 — "/designerama" → consulting brand site
components/
  theme/
    ThemeProvider.tsx         — data-theme on <html>, localStorage persistence,
                                system-preference fallback per site (see Theme below)
    ThemeToggle.tsx
  portal/
    PortalDoors.tsx
    PortalDivider.tsx
  portfolio/
    Nav.tsx, Hero.tsx, TrustStrip.tsx, Marquee.tsx, Arc.tsx, Method.tsx,
    Stats.tsx, VerifuxSpotlight.tsx, WorkGrid.tsx, Philosophy.tsx, Cta.tsx, Footer.tsx
  designerama/
    Nav.tsx, Hero.tsx, Ticker.tsx, CheckpointStrip.tsx, Process.tsx,
    WorkList.tsx, About.tsx, Cta.tsx, Footer.tsx
  shared/
    GradientHoverCard.tsx      — wraps cursor-tracked radial-gradient hover
    RevealOnScroll.tsx         — Framer Motion viewport-triggered fade/rise
    BgStripe.tsx                — fixed diagonal-stripe ambient background layer
    Button.tsx
lib/
  content/
    portfolio.ts               — copy + case-study data as typed objects
    designerama.ts              — copy + checkpoint/pillar data as typed objects
public/
  images/
    kishan-portrait.jpg         — replace inline base64 portrait with a real optimized asset
    stripe-bg.png (or .svg)      — replace inline base64 diagonal-stripe background
    logo.svg                     — vector version of the wordmark/logo (currently raster/base64)
    work/                        — real project screenshots (SuperSport, bidorbuy, FNB, DStv) — currently none exist, use placeholders and ask the user for real assets
```

Move every inline base64 image in the HTML references into `public/images/`
as real files (compressed, `next/image`-served) — do not carry base64 strings
into the React codebase.

## Design tokens

Shared across both brands:
- **Accent red**: `#CC2A3F` (deep variant `#7A1B29` light-mode / `#FF6B7F` dark-mode-on-portfolio; designerama uses flat `#CC2A3F` only, no gradient-shift variant).
- **Type**: `Big Shoulders Display` (700/900 weight) for all display/headline type, uppercase, tight tracking (-0.01 to -0.035em depending on size). Body copy in `IBM Plex Sans`. Mono accents (eyebrows, tags, nav labels, stat captions) in `IBM Plex Mono`.
- **Radius**: portfolio uses soft rounding (pills, 14–20px cards); designerama uses **zero radius** everywhere (hard-edged, ruled grid) — this is a deliberate brand distinction, do not soften designerama's corners.
- **Borders/rules**: designerama's whole layout is built on 1px hairline rules (`--line`) and a left index column per section (`idx-row`: 64px number column + rule + body). Preserve this grid system exactly — it's the core structural device of that brand.

Portfolio (light default):
- `--bg:#FAFAF8 --ink:#111014 --ink-muted:#5B5B63 --line:#EDEAE6`
Dark mode: `--bg:#0A0A0A --ink:#F2F0EC --line:#232323`

Designerama (dark default):
- `--void:#0A0A0A --text-on-dark:#F2F0EC --void-line:#232323 --fog:#8A8886`
Light mode: `--paper:#F6F6F4 --ink:#141414 --paper-line:#DDD9D4`

## Brand tone / copy voice

- **Portfolio**: first person, confident, specific numbers (26 years, 26–30M monthly users, named clients, named awards). Career-arc storytelling. Warm but not casual.
- **Designerama**: second/third person, diagnostic and clinical. Short declarative sentences. Names problems in plain operational language ("the workaround epidemic," "the dashboard nobody opens") before naming solutions. Never soft-sells — reads like an audit finding.
- Keep both voices consulting-grade: no filler adjectives, no invented stats beyond what's in the reference copy.

## Motion spec (Framer Motion)

1. **Scroll reveal**: sections/cards fade in + translateY(16–34px→0) on viewport entry, `threshold ~0.12–0.15`, staggered ~90ms per sibling in grouped lists. One-shot (don't re-trigger on scroll-up).
2. **Cursor-tracked gradient hover**: on primary buttons, work/case-study cards, and checkpoint rows — a radial gradient centered on live pointer position (`--mx`/`--my` CSS vars updated on `pointermove`), fading in on hover, out on leave. Disable on coarse/touch pointers.
3. **Hero portrait parallax**: the desaturated portrait sits as a large, low-opacity background element behind the hero text (not boxed/framed) and translates ~0.08–0.18x scroll speed; portfolio also scales it up to ~1.06x over scroll. Disable under `prefers-reduced-motion`.
4. **Ambient ticker/marquee**: one continuous horizontal scroll of keywords/stats, ~26–48s per loop, pauses on hover (portfolio) — this is the **only** always-running motion element; do not add a second one.
5. **Theme toggle**: cross-fade background/text color over ~0.4–0.6s, not an instant swap.
6. Explicitly **do not build**: a custom cursor, a fake percentage preloader, magnetic-button pull effects, or blurred gradient "blob" backgrounds. These were deliberately cut from the design for being over-produced relative to the brand's restrained positioning — do not reintroduce them.

## Background stripe & portrait treatment

Both brand sites share one ambient device: a diagonal-stripe background image
and a desaturated portrait of Kishan, both used as **low-opacity background
layers behind content**, never as framed/bordered hero images. Designerama
(dark, clinical) runs the stripe at high visibility (~80–90% opacity) as a
strong ambient texture; portfolio (light, editorial) runs it much more subtly
(~5–9% opacity) as a barely-there texture. Portal runs it at a light touch
(~7%) behind both doors. Get the real stripe/portrait assets from the design
files' inline base64 and re-export them as optimized files in `public/images/`.

## Pages to build

1. **Portal** (`/`) — two full-height side-by-side panels (stacked on mobile), one per brand, each linking out; center "pick a door" mark; live Johannesburg clock in the top bar.
2. **Portfolio** (`/portfolio`) — hero, trust-logo strip, marquee, career arc (timeline), 4-step method grid, stats, Verifux spotlight card, work grid (case studies + inline items), philosophy quote, contact CTA, footer.
3. **Designerama** (`/designerama`) — hero with eyebrow/CTA pair, ambient ticker, "what we diagnose" checkpoint strip (numbered, tied to the 8-pillar/48-checkpoint Verifux framework), 3-step process, selected work, about/credentials, contact CTA, footer.
4. **Case studies** (`/portfolio/supersport`, `/portfolio/bidorbuy`) — reuse portfolio's nav/footer shell; content per existing HTML files.

## Cross-linking

Nav on every page always offers a way back to the portal and across to the
sibling brand (portfolio ↔ designerama), per the existing HTML's nav/footer
links — don't strand users inside one door.

## What to ask the user before/while building

- Real photography for the portrait and any work-sample screenshots (currently placeholders/low-res base64).
- Whether a real contact form + email delivery is wanted, or `mailto:` links remain sufficient.
- Whether analytics/SEO metadata beyond the `<title>`/`<meta description>` already in the HTML files is needed.
