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

## Local development

```bash
npm run dev
```

http://localhost:3000. If this ever seems unreachable, check for a stale
process squatting the port from earlier static-export testing
(`lsof -nP -iTCP:3000 -sTCP:LISTEN`) — kill it and restart rather than
assuming the app itself is broken.
