# Deployment

This project supports two output modes from the same codebase, switched via
an env flag in `next.config.mjs`.

## 1. Regular Next.js build (server-capable host — Vercel, Node, etc.)

```bash
npm run build
npm run start
```

Includes the `/designerama` → `/` redirect and Next's built-in image
optimizer. Use this mode if the eventual host supports running a Node
server (not needed for Xeenlo/static hosting — see below).

## 2. Static export (Xeenlo, or any plain file host)

```bash
npm run export
```

This runs `STATIC_EXPORT=true next build`, which switches `next.config.mjs`
into `output: "export"` mode: pure HTML/CSS/JS in `out/`, no server required.

Trade-offs versus the regular build:
- The `/designerama` → `/` redirect does **not** work (static hosts can't run
  server-side redirects). If that path still gets traffic, either add a
  static meta-refresh page or set up a redirect in Xeenlo's own panel.
- Images ship at source resolution — Next's image optimizer is disabled
  (`images.unoptimized: true`), since static export can't run it on-demand.

### Subpath deploys (e.g. testing at `/new`)

If the export is being uploaded to a subdirectory rather than a domain root,
set `NEXT_PUBLIC_BASE_PATH` at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/new STATIC_EXPORT=true npm run export
```

**This is not optional and not just a config toggle** — the prefix gets baked
into every asset URL (`/new/_next/...`, `/new/images/...`) at build time. If
you upload an export built for `/new` to a different path (or the root), every
image, stylesheet, and script will 404, because Next's static image handling
doesn't auto-prefix `basePath` reliably (a real gap in Next 14.2.18 — see
`lib/basePath.ts` for the workaround wired into every hardcoded image `src`).

**When you're ready to go live at `designerama.co.za` root**, rebuild with no
`BASE_PATH` at all:

```bash
STATIC_EXPORT=true npm run export
```

Do not reuse a `/new`-prefixed build at the root — it will look broken
(unstyled, no images) exactly the way the first `/new` upload attempt did
before `lib/basePath.ts` existed.

### Packaging for upload

```bash
cd out && zip -qr ../designerama-static.zip . && cd ..
```

Upload the *contents* of the zip (not the zip itself, not a wrapping folder)
to the host's web root or target subdirectory. The zip is gitignored —
regenerate it fresh any time from the steps above, don't rely on an old copy.

### Verifying an export before upload

```bash
# from the repo root, after building `out/`
grep -o 'src="/images[^"]*"' out/index.html out/portfolio/index.html
# should return nothing — every image src should carry the basePath prefix
```

If that grep returns matches, an image `src` somewhere is hardcoded without
going through `withBasePath()` (see `lib/basePath.ts`) — find it and fix it
before uploading, or the deploy will render unstyled/broken like the first
`/new` attempt did.

## Analytics (GA4)

`components/shared/GoogleAnalytics.tsx` reads `NEXT_PUBLIC_GA_MEASUREMENT_ID`
at build time and renders nothing if it's unset — safe to build/deploy
without it. The site's old Universal Analytics ID (`UA-18944179-2`, found in
`website_old/index.html`) is permanently dead: UA stopped collecting data on
2023-07-01, and its `ga.js` loader was retired years before that. Don't
reuse it.

To enable analytics: create a GA4 property in the Google Analytics admin
panel (this requires Kishan's own Google account access — not something
that can be done from this codebase), then set the Measurement ID
(format `G-XXXXXXXXXX`) as `NEXT_PUBLIC_GA_MEASUREMENT_ID` before building —
either in a `.env.local` file for local builds, or as an environment
variable in whatever CI/host runs the production build.

## robots.txt, sitemap, favicon

- `public/robots.txt` allows crawling and points to `/sitemap.xml`. The old
  site's `robots.txt` (`website_old/robots.txt`) has `Disallow: /` — it was
  blocking every search engine from indexing the live site, contradicting
  its own page-level `index, follow` meta tag. Do not carry that file over.
- `app/sitemap.ts` generates `/sitemap.xml` dynamically from
  `lib/content/work.ts`'s `workItems` — new case studies are picked up
  automatically, no manual sitemap maintenance needed. Hardcodes
  `https://designerama.co.za` as the base URL (the eventual production
  domain per the migration plan in PROJECT-STATUS.md), not the `/new` test
  path — update that constant if the domain ever changes.
- `app/icon.png` is the existing square red logo-mark badge (source:
  `website_old/designerama logo/Designerama_02.png`), picked up
  automatically by Next's `app/icon.png` convention — no extra `<link>`
  tags or config needed.

## Local development

```bash
npm run dev
```

http://localhost:3000. If this ever seems unreachable, check for a stale
process squatting the port from earlier static-export testing
(`lsof -nP -iTCP:3000 -sTCP:LISTEN`) — kill it and restart rather than
assuming the app itself is broken.
