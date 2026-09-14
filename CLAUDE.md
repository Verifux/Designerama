# Designerama: Design Intelligence System

## Stack

Next.js, TypeScript, Tailwind CSS.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server
npm run build        # production build
npm run design:check # impeccable post-flight (exit 2 = fix before shipping)
```

## The 6-stage chain

For every design, redesign, copy, or UI task, run through this chain before writing code. Do not skip stages because the task feels small.

Load `design-intelligence` and it routes all of this for you. The map below is what it routes to, for when you want to reach for a stage directly.

0. **STRATEGY** - Load `taste-arbitrage`. Run the weak-vs-strong copy test before any copy is written. The thesis: judgment is the scarce skill now, not execution speed.
1. **REFERENCE** - Load `design-reference-library` for the standing set (benjamincreative.me, pzstudio.design, monks.com, redcollar.co, none use Inter, all run 100px+ display type; see library.json). `ui-ux-pro-max` for palette/type/pattern lookup. `refero-design` plus the Refero MCP for live search of real shipped product UI. `design-remix` pairs with the library to extract a visual system and reapply it; never scrape or republish source markup. Image-only reference boards: `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`.
2. **GENERATE** - Use `evidence-led-frontend` as the default. It allows only two sources for a decision, a measured reference value or a named checkpoint ID, and emits the decision ledger before the code. `design-taste-frontend` is the taste-skill alternative. Style presets when the direction is already chosen: `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui`. `21st-ui-explore` when directions are undecided, `21st-ui-build` or `21st-ai` for implementation, `ui-styling` and `design-system` for component-level work.
3. **AUDIT** - For existing builds, diagnose before touching anything. `evidence-led-frontend` audit pass tests against checkpoint IDs; `redesign-existing-projects` pattern-matches 60+ known generic patterns; `21st-ui-review` and `impeccable` add independent passes. Where two agree, that is a real finding.
4. **VERIFY** - Post-build: `impeccable` (`npm run design:check`, exit 2 = fix before shipping). `full-output-enforcement` when the model truncates.
5. **DELIVER** - `scroll-world` for cinematic scroll landing pages, `frontend-design-toolkit` for tool selection.

**Anti-skipping rule.** Never invoke stage 2 without 0 and 1. Never call a build done without stage 4. The audit skills diagnose and are not generators; reaching for one in stage 2 is the mistake the rule exists to catch.

The full 37-skill map with copyable triggers lives in the Design Lab (`Designerama/Design-lab`, Stack tab). The shareable version of the stack is [Verifux/Design-Intelligence-Skill](https://github.com/Verifux/Design-Intelligence-Skill).

## Standing constraints: never override these

- No em dashes or en dashes anywhere in copy. Use commas, periods, mid-dots, or the word "to" instead. Numeric ranges like 26-30M keep a plain hyphen.
- No Johannesburg, JHB, or South Africa references. The site is location-agnostic.
- Never conflate "AI makes UI cheap" (the taste-arbitrage thesis) with Verifux's AIX pillar meaning (a product is legible to AI agents). These are different concepts. Conflating them breaks both arguments.
- Verifux framework facts are immutable: MX/BX/AIX, 54 checkpoints, 9 pillars, DX is separate and optional. Never alter or re-guess these to fit a narrative.
- Designerama is dark-only. Portfolio is light-only. No theme toggle. No changes to that system.
- Generation-skill scope (`evidence-led-frontend`, `design-taste-frontend`, and every style preset): landing pages, portfolios, marketing sites, redesigns only. Never verifux-app.html or dashboard pages.
- Gradient text at `components/portfolio/Hero.tsx:72`. Kishan has already chosen to keep it. Do not re-litigate.

## Memory routing

| Purpose | Location |
|---|---|
| Authoritative skill routing | `memory/design-tool-routing.md` |
| Content and code rules | `memory/designerama-content-rules.md` |
| Taste-arbitrage strategic lens | `~/.claude/skills/taste-arbitrage/SKILL.md` |
| Standing design references | `~/.claude/skills/design-reference-library/references/library.json` |
| Verifux brand red contrast fix | `memory/verifux-brand-red-contrast.md` |

## Known false positives: do not act on these

- Impeccable `broken-image` at `components/shared/ImageCarousel.tsx:81`. That line is inside a code comment, not a real `<img>` tag. The actual element is on line 109 and is correct.
- `design-taste-frontend` DESIGN_VARIANCE defaults to 8 (assertive). Where it conflicts with a settled Designerama decision, report the conflict and keep the settled decision.

## End-of-session requirement

After any design session, run the `design-reference-library` retrospective loop. Append findings to `~/.claude/skills/design-reference-library/references/retrospective-log.md`. The library improves each session or it resets. There is no middle state.
