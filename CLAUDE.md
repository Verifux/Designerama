# Designerama — Design Intelligence System

## The 5-stage chain

For every design, redesign, copy, or UI task, run through this chain before writing code. Do not skip stages because the task feels small.

1. **STRATEGY** — Load `taste-arbitrage`. Run the weak-vs-strong copy test before any copy is written. The thesis: judgment is the scarce skill now, not execution speed.
2. **REFERENCE** — Load `ui-ux-pro-max` for palette/type/pattern lookup (run `--design-system` for a full brief). Load `design-reference-library` for the full reference set: check the 4 primary discovery sources first (dribbble.com, awwwards.com, cssdesignawards.com, 21st.dev/community/templates) then the 4 standing studio references (benjamincreative.me, pzstudio.design, monks.com, redcollar.co — none use Inter, all run 100px+ display type). See library.json for structure.
3. **METHOD** — Load `design-remix` together with `design-reference-library`. They are a pair — neither works alone. Extract the visual system from references, reapply to real content. Never scrape or republish source markup.
4. **GENERATE** — Use `design-taste-frontend` for landing pages and portfolios only. Use `21st-ui-explore` when directions are undecided, `21st-ui-build` for implementation, `ui-styling` and `design-system` for component-level work.
5. **AUDIT and VERIFY** — For existing builds: `redesign-existing-projects` first, then `21st-ui-review`. Post-build: `impeccable` (`npm run design:check`, exit 2 = fix before shipping).

## Standing constraints — never override these

- No em dashes or en dashes anywhere in copy. Use commas, periods, mid-dots, or the word "to" instead. Numeric ranges like 26-30M keep a plain hyphen.
- No Johannesburg, JHB, or South Africa references. The site is location-agnostic.
- Never conflate "AI makes UI cheap" (the taste-arbitrage thesis) with Verifux's AIX pillar meaning (a product is legible to AI agents). These are different concepts. Conflating them breaks both arguments.
- Verifux framework facts are immutable: MX/BX/AIX, 54 checkpoints, 9 pillars, DX is separate and optional. Never alter or re-guess these to fit a narrative.
- Designerama is dark-only. Portfolio is light-only. No theme toggle. No changes to that system.
- `design-taste-frontend` scope: landing pages, portfolios, redesigns only. Never verifux-app.html or dashboard pages.
- Gradient text at `components/portfolio/Hero.tsx:72` — Kishan has already chosen to keep it. Do not re-litigate.

## Memory routing

| Purpose | Location |
|---|---|
| Authoritative skill routing | `memory/design-tool-routing.md` |
| Content and code rules | `memory/designerama-content-rules.md` |
| Taste-arbitrage strategic lens | `~/.claude/skills/taste-arbitrage/SKILL.md` |
| Standing design references | `~/.claude/skills/design-reference-library/references/library.json` |
| Verifux brand red contrast fix | `memory/verifux-brand-red-contrast.md` |

## Known false positives — do not act on these

- Impeccable `broken-image` at `components/shared/ImageCarousel.tsx:81` — that line is inside a code comment, not a real `<img>` tag. The actual element is on line 109 and is correct.
- `design-taste-frontend` DESIGN_VARIANCE defaults to 8 (assertive). Where it conflicts with a settled Designerama decision, report the conflict and keep the settled decision.

## End-of-session requirement

After any design session, run the `design-reference-library` retrospective loop. Append findings to `~/.claude/skills/design-reference-library/references/retrospective-log.md`. The library improves each session or it resets. There is no middle state.
