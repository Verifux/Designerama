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

### Root deploy (current target: `www.designerama.co.za`)

Build with no `NEXT_PUBLIC_BASE_PATH` at all:

```bash
STATIC_EXPORT=true npm run export
```

Every asset `src` ships unprefixed (`/_next/...`, `/images/...`), correct for
upload straight to the domain root.

### Verifying a root export locally before upload

Don't just eyeball `out/` — serve it from a plain static server rooted at
that directory so it behaves exactly like the live root will, then check it
in a browser:

```bash
cd out && python3 -m http.server 5050
# then browse http://localhost:5050/
```

`npm run dev` is not a substitute for this step — dev mode runs Next's own
server and doesn't exercise the static-export output at all.

### Subpath deploys (e.g. testing at `/new`) — not the current target

If a subpath test build is ever needed again, set `NEXT_PUBLIC_BASE_PATH` at
build time:

```bash
NEXT_PUBLIC_BASE_PATH=/new STATIC_EXPORT=true npm run export
```

**This is not optional and not just a config toggle** — the prefix gets baked
into every asset URL (`/new/_next/...`, `/new/images/...`) at build time. If
you upload an export built for `/new` to a different path (or the root), every
image, stylesheet, and script will 404, because Next's static image handling
doesn't auto-prefix `basePath` reliably (a real gap in Next 14.2.18 — see
`lib/basePath.ts` for the workaround wired into every hardcoded image `src`).

A `/new`-prefixed build must never be uploaded to the root — it will look
broken (unstyled, no images) exactly the way the first `/new` upload attempt
did before `lib/basePath.ts` existed. Always rebuild with no `BASE_PATH` for
a root deploy; don't reuse an old `/new` build.

### Packaging for upload

```bash
cd out && zip -qr ../designerama-static.zip . && cd ..
```

Upload the *contents* of the zip (not the zip itself, not a wrapping folder)
to the host's web root or target subdirectory. The zip is gitignored —
regenerate it fresh any time from the steps above, don't rely on an old copy.

### Do you have to re-upload the whole thing every time?

Short answer: **yes, for any code or content change** — which is almost
every change made in this repo. Next's static export gives every JS/CSS
chunk a content hash (`117-4cc341509b5a20cb.js`, etc.), and that hash
changes on nearly any edit, even a one-line copy tweak, because it shifts
the compiled bundle. The old chunk filenames referenced by a stale
`index.html` won't exist anymore once you've edited anything, so a partial
upload risks a broken page (HTML asking for a chunk that was never
uploaded). There's no reliable way to know in advance which specific files
changed without diffing the whole `out/` folder — so the safe, boring
answer is: rebuild, then overwrite the entire live root with the new
`out/` contents every time.

**The one real exception:** swapping a single image file where the
filename and path stay exactly the same (e.g. re-exporting
`/images/work/fnb/savings-pocket-today.jpg` with new content but the same
name). Static assets under `public/` are copied through as-is, unhashed —
so in that specific case, uploading just that one file to overwrite it on
the host is genuinely enough. Anything that touches code, copy, or adds/
renames a file needs the full folder.

**If this gets tedious:** if Xeenlo offers FTP/SFTP access (not just a
web-based zip upload), a sync tool (`rsync`, `lftp mirror`, Cyberduck,
Transmit) can diff `out/` against the live root and transfer only what
actually changed, automatically — solving the "which file" question for
real instead of guessing. Worth asking Xeenlo support whether FTP/SFTP is
available on the plan if this manual zip-and-replace workflow becomes a
drag.

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

## Analytics (GA4) — live

`components/shared/GoogleAnalytics.tsx` ships GA4 property `G-3C5292GLX7`
(Kishan's own property) as the built-in default — no env var needed, since a
Measurement ID isn't a secret (it's visible in any page's source). It fires
on every build and every route automatically.

To point at a *different* property (e.g. a staging environment that
shouldn't pollute production analytics), set `NEXT_PUBLIC_GA_MEASUREMENT_ID`
before building — it overrides the default. Leave it unset for normal
builds.

The site's old Universal Analytics ID (`UA-18944179-2`, found in
`website_old/index.html`) is permanently dead: UA stopped collecting data on
2023-07-01, and its `ga.js` loader was retired years before that. It was
never reused.

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
