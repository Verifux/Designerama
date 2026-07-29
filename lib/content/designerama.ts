export const meta = {
  title: "Designerama, product diagnosis before design. Home to Verifux.",
  description:
    "Designerama is a product diagnosis and design consultancy led by Kishan Rama. Interfaces are cheap to generate now. Knowing what to build, and why, still is not. Home to Verifux, an AI-powered MX, BX and AIX audit engine (54 checkpoints, 9 pillars) with an optional DX craft score.",
};

export const nav = {
  links: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/#about" },
    { label: "Verifux", href: "/why-verifux" },
  ],
  portfolioLink: { label: "Portfolio", href: "/portfolio" },
  cta: { label: "Get in touch", href: "/#cta" },
};

export const hero = {
  eyebrow: "Diagnosis before design · Kishan Rama",
  headline: "Most software isn't",
  headlineLine2: "badly designed.",
  headlineAccent: "It's badly diagnosed.",
  lede: "Product strategy, UX leadership and design consulting. Generating a good looking screen is no longer the hard part. Knowing which problem it should solve still is. Home to Verifux, a proprietary audit engine that finds what's broken in a digital product before it costs you users, revenue or trust.",
  actions: [
    { label: "Book a systems diagnosis", href: "#cta", variant: "solid" as const },
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
  heading: "Three experience layers, 54 checkpoints, one structured audit.",
  body: "Most audits stop at whether a button works. Verifux also catches whether a product persuades instead of manipulating, and whether AI agents can even find it, both routinely missed by a standard heuristics review. It runs a 54-checkpoint audit across 9 pillars, grouped into the MX / BX / AIX triad: can people use it, will people act, can AI use it. A separate DX craft score benchmarks the visual design and content voice against design-award criteria.",
  link: { label: "Read the full framework", href: "/why-verifux" },
};

export const process = {
  eyebrow: "02 / How it works",
  heading: "Design thinking, behavioural science and systems thinking, applied end to end.",
  steps: [
    {
      num: "01",
      title: "Empathise & diagnose",
      body: "Ethnographic research, jobs-to-be-done interviews and a Verifux audit across MX, BX and AIX (plus a DX craft score). We start where users actually struggle, not where the org chart says the problem lives.",
    },
    {
      num: "02",
      title: "Reframe & design",
      body: "Behavioural science and systems thinking reframe the problem, isolating the leverage points that matter. Then we prototype the flow, screen or system that unblocks the user and the business outcome behind it.",
    },
    {
      num: "03",
      title: "Ship & measure",
      body: "The smallest version that proves the fix ships first, instrumented against real usage. Product management discipline turns validated wins into a repeatable operating rhythm.",
    },
  ],
};

export const whyItMatters = {
  eyebrow: "03 / Why diagnosis matters",
  heading: "Interfaces got cheap to generate.",
  headingAccent: "Knowing which one to build didn't.",
  body: "That's the discipline this practice runs on: twenty-six years of product design, UX leadership and behavioural analysis, backed by Verifux's audit engine, pointed at your product before a single screen gets redrawn. The diagnosis comes first. What gets built after it is smaller, faster to ship, and aimed at what's actually broken.",
  cta: { label: "Start with a diagnosis", href: "/#cta" },
};

export const work = {
  eyebrow: "04 / Selected work",
  heading: "Built on a real audit practice, not a slide deck.",
  items: [
    {
      idx: "01",
      tag: "Product / AI SaaS",
      title: "Verifux",
      body: "Finds what's actually broken in a product before it costs you users, revenue or trust, then proves it. Verifux runs a 54-checkpoint audit across 9 pillars (the MX / BX / AIX triad), plus a separate, optional DX craft score, and turns the findings into a structured report in minutes instead of a week of manual review.",
      goto: "Get early access",
      href: "#cta",
    },
    {
      idx: "02",
      tag: "Studio practice",
      title: "Designerama",
      body: "An ongoing design experimentation testbed, not a portfolio of pretty screens. Every version of this site tests a diagnosis and a visual system together before either is offered to a client.",
      goto: "About the practice",
      href: "#about",
    },
    {
      idx: "03",
      tag: "Track record",
      title: "See what's actually shipped",
      body: "SuperSport, GOtv, bidorbuy, FNB. Twenty-six years of shipping the fix that mattered, not just the redesign that looked good in review.",
      goto: "View Kishan's portfolio",
      href: "/portfolio#work",
    },
  ],
};

export const about = {
  eyebrow: "05 / About",
  heading: "26 years, one discipline.",
  credentials: [
    { stat: "26+", label: "Years across broadcast, motion & product" },
    { stat: "CUA", label: "Certified Usability Analyst" },
    { stat: "2", label: "Invited conference talks on behavioural UX, 2025" },
    { stat: "AI", label: "Diagnosis backed by Verifux's audit engine" },
  ],
  copy: [
    "I started in broadcast and motion design, cutting promos and title sequences where every frame had to earn its place in three seconds. That's where I learned pacing, attention, and what makes someone trust what's on screen.",
    "Product design is the same problem, stretched over months instead of seconds. Where does someone's eye go first. What do they trust. What do they quietly abandon. A senior run through product roles, most recently at SuperSport, sharpened that instinct into a discipline grounded in behavioural science, business management and systems thinking.",
    "Designerama is where that instinct now gets pointed at Verifux and select consulting work: the audits and product decisions that decide whether people stay or leave, not just the apps people screenshot for a portfolio.",
  ],
};

export const cta = {
  eyebrow: "06 / Start here",
  heading: "Something in your operation isn't working,",
  headingAccent: "and everyone already knows which one.",
  action: { label: "Book a systems diagnosis", href: "mailto:hello@designerama.co.za" },
};

export const footer = {
  links: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/#about" },
    { label: "Verifux", href: "/why-verifux" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "mailto:hello@designerama.co.za" },
  ],
  copyright: "Designerama. All rights reserved.",
  bottom: ["Design consultancy for UX strategy & Verifux. hello@designerama.co.za"],
};
