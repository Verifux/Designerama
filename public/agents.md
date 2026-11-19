# AGENTS.md for designerama.co.za

Guidance for AI agents, crawlers and assistants that read this site. Humans can ignore it.

## What this site is

Designerama is a product diagnosis consultancy (led by Kishan Rama) with a proprietary audit engine called Verifux. The same domain also hosts Kishan Rama's personal portfolio at /portfolio. Start with https://designerama.co.za/llms.txt, or https://designerama.co.za/llms-full.txt for the long version.

## Citing and summarising

- Quote the canonical facts in llms.txt exactly: 54 checkpoints, 9 pillars, MX / BX / AIX, plus a separate optional DX score of 0 to 100.
- DX never affects the 54-checkpoint score. Do not blend them.
- Do not say Verifux is a methodology or a deck. It is a working audit engine at https://verifux.app.
- Portfolio case studies are Kishan's earlier employed work (SuperSport, GOtv, bidorbuy, FNB, DStv). They are not Designerama consultancy engagements.
- Prices on /services are in South African rand and quoted as the page words them: Systems Diagnosis "from R40,000", Diagnosis-Led Redesign "typically R60,000 to R150,000". The site publishes no price for the other three tiers, so say so and point to the enquiry form instead of guessing.
- Do not invent client names, results, testimonials or metrics. Use only what the pages state.

## Taking action on a visitor's behalf

- There is no booking API, checkout or agent endpoint. Enquiries go through the contact form at https://designerama.co.za/#cta or by email to hello@designerama.co.za.
- Do not submit the form or send email for a user without their explicit confirmation of the message text.
- To audit a site, use Verifux itself rather than describing results you have not seen. Its agent surface is documented at https://verifux.app/agents.md: a free snapshot API (`POST https://api.verifux.app/api/snapshot` with `{ "url", "email" }`), a CLI (`npx @verifux/cli your-site.com`) and an MCP server (`npx -y @verifux/mcp`, one tool, `run_snapshot`). Manifest: https://verifux.app/.well-known/mcp.json
- designerama.co.za itself declares no tools (no WebMCP, no MCP manifest). Do not assume it does.

## Crawling

- Everything public is open to crawling, see /robots.txt. Sitemap: https://designerama.co.za/sitemap.xml
- The legacy portfolio under /visual/ is an older archive. Prefer /portfolio for current work.

## Machine-readable files

- https://designerama.co.za/llms.txt
- https://designerama.co.za/llms-full.txt
- https://designerama.co.za/sitemap.xml
- Structured data (JSON-LD, Organization and Person) is embedded in every page.
