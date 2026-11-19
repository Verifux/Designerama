export const meta = {
  title: "Services, Designerama product diagnosis consultancy.",
  description:
    "Engagement types built around a systems diagnosis first: reduce product risk, fix what the audit finds, and build with confidence instead of opinion.",
};

export const hero = {
  eyebrow: "Services",
  heading: "Diagnosis first. Everything after it is smaller, faster, and aimed at what's actually broken.",
  lede: "Every engagement starts with evidence, not an opinion about your product. What follows depends on what the audit finds, not on which service was pitched hardest.",
};

export const listIntro =
  "Ordered from first diagnosis to ongoing direction. Not sure which fits? Start with a systems diagnosis and we'll scope from there.";

export type ServiceTier = {
  slug: string;
  title: string;
  forWho: string;
  whatYouGet: string[];
  startingPoint: string;
  pricingHint?: string;
  cta: { label: string; href: string };
};

export const tiers: ServiceTier[] = [
  {
    slug: "systems-diagnosis",
    title: "Systems Diagnosis",
    forWho: "Teams facing a high-stakes product decision, a rebuild, or a plateau, who want evidence before committing budget.",
    whatYouGet: [
      "A full Verifux audit across MX, BX and AIX, 54 checkpoints spanning 9 pillars, plus an optional DX craft score",
      "A structured report ranking what's actually broken by cost, not by opinion",
      "A working session to walk through the findings and what they mean for your roadmap",
    ],
    startingPoint: "Starts with a Verifux audit of your live product.",
    pricingHint: "Engagements from R40,000",
    cta: { label: "Book a systems diagnosis", href: "/#cta" },
  },
  {
    slug: "diagnosis-led-redesign",
    title: "Diagnosis-Led Redesign",
    forWho: "Teams who already know what's broken, from a diagnosis with us or elsewhere, and need it fixed.",
    whatYouGet: [
      "Design work scoped to what the audit found, not a wholesale visual refresh",
      "Behavioural science and systems thinking applied to the specific leverage points",
      "A smaller fix shipped and instrumented before a bigger bet gets made",
    ],
    startingPoint: "Starts with your diagnosis findings, ours or an existing audit.",
    pricingHint: "Scoped to the audit findings, typically R60,000 to R150,000",
    cta: { label: "Talk it through", href: "/#cta" },
  },
  {
    slug: "ai-product-strategy",
    title: "AI Product Strategy",
    forWho: "Teams that need their product legible to AI agents and ready for an AI-native market, not marketing that only claims to use AI.",
    whatYouGet: [
      "An AIX-focused audit: structured data, semantic HTML, llms.txt, agent-actionable interfaces",
      "A read on how AI surfaces and answer engines currently treat your product",
      "A prioritised plan for where AI is real leverage in your build process, not just your product's surface",
    ],
    startingPoint: "Starts with an AIX pass of the Verifux audit.",
    cta: { label: "Talk it through", href: "/#cta" },
  },
  {
    slug: "fractional-product-direction",
    title: "Fractional Product Direction",
    forWho: "Teams that need diagnostic judgment applied continuously, not once.",
    whatYouGet: [
      "Embedded product direction from one senior practitioner, not a team of juniors",
      "Ongoing diagnosis as the product and market change, not a single point-in-time report",
      "Direct accountability for outcomes, not a deliverables checklist",
    ],
    startingPoint: "Starts with a scoping conversation on cadence and focus.",
    cta: { label: "Talk it through", href: "/#cta" },
  },
  {
    slug: "mvp-validation",
    title: "MVP Validation",
    forWho: "Funded founders about to build, who want the idea validated against evidence before a line of code gets written.",
    whatYouGet: [
      "A lighter-weight diagnosis scoped to a pre-launch product or prototype",
      "The riskiest assumption identified, and the cheapest way to test it before building",
      "A build-ready brief for engineering",
    ],
    startingPoint: "Starts with a conversation about what's already validated and what isn't.",
    cta: { label: "Talk it through", href: "/#cta" },
  },
];

export const cta = {
  eyebrow: "Not sure which one",
  heading: "Start with a conversation, not a proposal.",
  body: "Tell me what isn't working. I'll tell you honestly whether a diagnosis is the right first step, or whether something else is.",
  action: { label: "Book a systems diagnosis", href: "mailto:hello@designerama.co.za" },
};

export const faq = {
  eyebrow: "Common questions",
  heading: "What buyers usually ask first.",
  items: [
    {
      q: "How much does it cost?",
      a: "A Systems Diagnosis starts from R40,000. A Diagnosis-Led Redesign is scoped to the audit findings and typically runs R60,000 to R150,000. Prices for AI Product Strategy, Fractional Product Direction and MVP Validation are not published on this site. Ask through the enquiry form.",
    },
    {
      q: "What do I get from a diagnosis?",
      a: "A full Verifux audit across MX, BX and AIX (54 checkpoints spanning 9 pillars, plus an optional DX craft score), a structured report ranking what is broken by cost, and a working session to walk through the findings and what they mean for your roadmap.",
    },
    {
      q: "How long does an engagement take?",
      a: "Durations are not published on this site. Ask through the enquiry form.",
    },
    {
      q: "How do I start?",
      a: "Use the enquiry form on this page or email hello@designerama.co.za. Messages are read personally, with a response aimed within 1 to 2 business days.",
    },
    {
      q: "What if I am not sure a diagnosis is right for me?",
      a: "Say what is not working. You will get an honest answer on whether a diagnosis is the right first step, or whether something else is.",
    },
  ],
};
