// Canonical source for Verifux's real framework facts: MX / BX / AIX, 54
// checkpoints, 9 pillars, DX separate and optional. If these numbers ever
// change, re-verify against /Users/kishanrama/Documents/Verifux/heuristics.js
// directly, never guess. lib/content/designerama.ts imports `pillars` from
// here rather than duplicating it, so the facts are defined once.
export const pillars = [
  {
    num: "01",
    title: "MX, human experience",
    tag: "Can people use it? · 7 pillars",
    body: "The usability layer. Visibility and feedback, control and freedom, consistency and standards, error prevention, cognitive load, accessibility and conversion. Grounded in Nielsen's heuristics and WCAG.",
  },
  {
    num: "02",
    title: "BX, behavioural experience",
    tag: "Will people act? · 1 pillar",
    body: "Persuasion, not manipulation. Nudge architecture, anchoring, social proof, loss aversion, dark-pattern detection. The behavioural science that decides whether an interface converts ethically or predatorily.",
  },
  {
    num: "03",
    title: "AIX, AI experience",
    tag: "Can AI use it? · 1 pillar",
    body: "How the site reads to AI agents, LLM crawlers and answer engines. Structured data, semantic HTML, llms.txt, agent-actionable interfaces. The layer that decides whether AI surfaces recommend you or skip you.",
  },
  {
    num: "04",
    title: "DX, design excellence",
    tag: "Optional craft score · 0 to 100",
    body: "A separate, holistic first-impression score benchmarked against design-award criteria. Hierarchy, typography, colour, whitespace, originality and content voice. Never affects the 54-checkpoint score.",
  },
];

export const meta = {
  title: "Verifux, the audit engine behind Designerama's diagnosis. ",
  description:
    "Verifux runs a 54-checkpoint audit across 9 pillars, the MX, BX and AIX triad, plus an optional DX craft score, so a product decision starts with evidence instead of opinion.",
};

export const hero = {
  eyebrow: "Verifux",
  headline: "The instrument behind every diagnosis.",
  lede: "Verifux is the audit engine Designerama runs before recommending anything. Not a methodology in the deck sense, a real, engineered instrument that produces a repeatable score instead of one person's opinion.",
};

export const sections = [
  {
    id: "problem",
    eyebrow: "01 / The problem",
    heading: "Most redesigns start with an opinion.",
    body: "Someone senior thinks the checkout flow looks dated, or a competitor shipped something shinier, and a rebuild gets greenlit before anyone measures what's actually costing revenue. That's an expensive way to be wrong, and an easy one, because taste isn't evidence.",
    defaultOpen: true,
  },
  {
    id: "diagnosis",
    eyebrow: "02 / The diagnosis",
    heading: "So the product gets audited before it gets touched.",
    body: "Verifux runs your product through a structured audit before any design or engineering work starts. Instead of one person's read on the interface, every product gets the same 54 checks, applied the same way, producing a repeatable score rather than a subjective impression.",
    defaultOpen: false,
  },
  {
    id: "framework",
    eyebrow: "03 / The framework",
    heading: "Three questions, nine pillars, 54 checkpoints.",
    body: "The audit is organised around three questions: can people use it, will people act, can AI use it. Each maps to a layer, MX, BX, AIX, together covering 9 pillars and 54 checkpoints. A separate, optional DX score benchmarks visual craft against design-award criteria, without ever affecting the 54-checkpoint result.",
    showPillars: true,
    defaultOpen: false,
  },
  {
    id: "method",
    eyebrow: "04 / The method",
    heading: "Graded against evidence, not a guess.",
    body: "Every checkpoint is scored against something checkable: rendered pages, real accessibility trees, structured data, usage patterns where available, not a screenshot someone eyeballed. AI-assisted evaluation is what makes a full pass take minutes instead of the week a manual heuristics review would need. The audit is thorough because it's fast, not despite it. Part of the engine ships as open tooling too: a free MCP server listed on the official MCP registry, and a CI gate that fails a build the moment an AI agent can no longer finish checkout. The code is there to read, not just the score to trust.",
    defaultOpen: false,
  },
  {
    id: "evidence",
    eyebrow: "05 / The evidence",
    heading: "A structured report, not a slide deck.",
    body: "The output ranks what's broken by cost, with the checkpoint and evidence behind every finding. Nothing in it is an opinion you have to take on faith, every line traces back to something checkable on the live product.",
    defaultOpen: false,
  },
  {
    id: "solution",
    eyebrow: "06 / The solution",
    heading: "What happens next depends on what the audit finds.",
    body: "Sometimes it's a small fix. Sometimes it's a redesign. Sometimes the honest answer is that the product doesn't need to change and the real problem is somewhere else entirely. Diagnosis comes first specifically so the answer isn't decided in advance.",
    defaultOpen: false,
  },
];

export const cta = {
  eyebrow: "See it on a real product",
  heading: "Try Verifux.",
  action: { label: "Try Verifux →", href: "https://verifux.app" },
};

// Two stills from the real framework explainer, shown here as process, not
// promotion. The DX pillar this page describes (hierarchy, type, colour,
// originality) is self-applied to the audit's own output, so the evidence
// for it can sit on the same page as the claim.
export const craftStrip = {
  eyebrow: "The DX layer, applied to itself",
  heading: "The audit has its own design system.",
  body: "Verifux's reports and explainers run through the same DX discipline the audit checks for in a product: a measured palette, one consistent display type at scale, and a single owned structural device instead of a generic template. Two pages from the actual framework explainer, unchanged.",
  images: [
    {
      src: "/images/work/verifux/framework-intro.png",
      alt: "A Verifux framework panel on a dark ground, reading '9 things get checked. 54 ways,' with a nine-segment progress gauge across the top.",
      note: "Framework intro",
    },
    {
      src: "/images/work/verifux/pillar-breakdown.png",
      alt: "A Verifux framework panel on a light ground, breaking the nine pillars into seven human-experience checks, one behavioural check and one AI-readiness check.",
      note: "Pillar breakdown",
    },
  ],
};
