# Designerama & Portfolio site

Next.js 14 / TypeScript / Tailwind / Framer Motion site covering two brand
contexts: **Designerama** (`/`, dark theme, AI design consultancy) and
**Portfolio** (`/portfolio`, light theme, Kishan Rama's case-study portfolio).

## Quick start

```bash
npm install
npm run dev
```

http://localhost:3000

## Documentation

Start here: [`docs/PROJECT-STATUS.md`](./docs/PROJECT-STATUS.md) — current
state, the live-site migration plan, and standing constraints.

- [`docs/PROJECT-STATUS.md`](./docs/PROJECT-STATUS.md) — where things stand right now
- [`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md) — build/export/hosting instructions
- [`docs/DECISIONS.md`](./docs/DECISIONS.md) — why things are the way they are
- [`docs/CHANGELOG.md`](./docs/CHANGELOG.md) — dated history of changes

## Repo layout

```
app/                Next.js App Router pages
components/          designerama/, portfolio/, shared/, theme/
lib/content/         site copy and structured data (one file per section/brand)
lib/basePath.ts      static-export subpath helper — see docs/DEPLOYMENT.md
public/images/       site image assets
website_old/         the CURRENT live 2010-era site — migration source for
                      designerama.co.za/visual, not dead weight, do not delete
```
