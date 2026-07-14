export const meta = {
  title: "Designerama — UX Consulting & Verifux",
  description:
    "Designerama is a UX consulting practice led by Kishan Rama, home to Verifux, an AI-powered UX audit engine. We diagnose why digital products lose users, then design the fix.",
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Diagnose", href: "#diagnose" },
    { label: "About", href: "#about" },
  ],
  portfolioLink: { label: "Portfolio", href: "/portfolio" },
  portalLink: { label: "Portal", href: "/" },
};

export const hero = {
  eyebrow: "Design consultancy — Kishan Rama",
  headline: "Most software isn't",
  headlineLine2: "badly designed.",
  headlineAccent: "It's badly diagnosed.",
  lede: "Twenty-six years ago I was cutting broadcast promos. Now I run the UX audits and product design decisions behind Verifux, an AI-powered engine that finds what's broken in a digital product before it costs you users. Designerama is a consulting practice built on that same diagnosis-first discipline.",
  actions: [
    { label: "Book a Systems Diagnosis", href: "#cta", variant: "solid" as const },
    { label: "See the work", href: "#work", variant: "ghost" as const },
  ],
};

export const ticker = [
  "Warehouse pick accuracy",
  "Claims turnaround time",
  "Checkout abandonment",
  "Scheduling conflicts",
  "Shift handover errors",
  "Onboarding drop-off",
  "Inventory visibility",
  "Patient intake time",
];

export const diagnose = {
  eyebrow: "01 / What we diagnose",
  heading: "Three patterns, out of an 8-pillar / 48-checkpoint framework.",
  body: "A diagnosis starts by naming what's actually broken, in plain language, before anyone talks about a rebuild.",
  checkpoints: [
    {
      num: "01",
      title: "The workaround epidemic",
      tag: "Pillar — Workflow fit",
      body: "Staff building spreadsheets and sticky notes around software that doesn't fit how they actually work.",
    },
    {
      num: "02",
      title: "The dashboard nobody opens",
      tag: "Pillar — Decision clarity",
      body: "Plenty of data, but no decision anyone can make from it in under a minute.",
    },
    {
      num: "03",
      title: "The handoff black hole",
      tag: "Pillar — Continuity",
      body: "Information that dies between one team, one shift, or one system and the next.",
    },
  ],
};

export const process = {
  eyebrow: "02 / How it works",
  heading: "A short path from broken to shipped.",
  steps: [
    {
      num: "01",
      title: "Diagnose",
      body: "A structured audit of one workflow. What's actually broken, and why, in language your team already uses.",
    },
    {
      num: "02",
      title: "Design",
      body: "A rebuilt version of that workflow, grounded in how people actually work, not how the org chart says they should.",
    },
    {
      num: "03",
      title: "Ship",
      body: "Shipped in the smallest version that proves the fix, then iterated against real usage, not a guess.",
    },
  ],
};

export const work = {
  eyebrow: "03 / Selected work",
  heading: "Built on a real audit practice, not a slide deck.",
  items: [
    {
      idx: "01",
      tag: "Product / AI SaaS",
      title: "Verifux",
      body: "An AI-powered UX evaluation SaaS, built on a proprietary 8-pillar, 48-checkpoint framework, automating expert-level UX, MX and AIX audits into structured, actionable reports.",
      goto: "Get early access",
      href: "#cta",
    },
    {
      idx: "02",
      tag: "Studio practice",
      title: "Designerama",
      body: "An ongoing design experimentation testbed. Every version of this site is a live test of a new visual system before it's offered to a client.",
      goto: "About the practice",
      href: "#about",
    },
    {
      idx: "03",
      tag: "Track record",
      title: "See what's actually shipped",
      body: "SuperSport, bidorbuy, FNB. The consulting practice behind Verifux is backed by 26 years of product design that reached real users at real scale.",
      goto: "View Kishan's portfolio",
      href: "/portfolio#work",
    },
  ],
};

export const about = {
  credentials: [
    { stat: "26+", label: "Years across broadcast, motion & product" },
    { stat: "CUA", label: "Certified Usability Analyst" },
    { stat: "JHB", label: "Based in Johannesburg, working globally" },
  ],
  copy: [
    "I started in broadcast and motion design, cutting promos and title sequences where every frame had to earn its place in three seconds. That's where I learned pacing, attention, and what makes someone trust what's on screen.",
    "Product design is the same problem, stretched over months instead of seconds. Where does someone's eye go first. What do they trust. What do they quietly abandon. A senior run through product roles, most recently at SuperSport, sharpened that into a discipline.",
    "Designerama is where that instinct now gets pointed at Verifux and select consulting work: the audits and product decisions that decide whether people stay or leave, not just the apps people screenshot for a portfolio.",
  ],
};

export const cta = {
  eyebrow: "04 / Start here",
  heading: "Something in your operation isn't working,",
  headingAccent: "and everyone already knows which one.",
  action: { label: "Book a Systems Diagnosis", href: "mailto:hello@designerama.co.za" },
};

export const footer = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Diagnose", href: "#diagnose" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "mailto:hello@designerama.co.za" },
  ],
  bottom: [
    "© Designerama. Kishan Rama, Johannesburg.",
    "Design consultancy for UX strategy & Verifux.",
  ],
};
