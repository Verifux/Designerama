export const meta = {
  title: "Kishan Rama, Principal Product Designer & UX Strategist",
};

export const hero = {
  metaRow: [
    "Principal Product Designer & UX Strategist",
    "Behavioural science · Business management",
  ],
  headline: "Twenty-six years shaping products",
  headlineAccent: "millions actually use.",
  sub: "Principal Product Designer and UX Strategist. I've led UX and product design for platforms at SuperSport, DStv and FNB, blending behavioural science, business management and systems thinking into the work. CUA-certified usability analyst, also designing and building front-end interfaces hands-on, this site included. Now building Verifux, an AI-powered MX, BX and AIX audit engine with an optional DX craft score. Open to senior in-house roles, contract work, and select consulting.",
  actions: [
    { label: "See the work →", href: "#work", variant: "solid" as const },
    { label: "Work with me", href: "#contact", variant: "ghost" as const },
  ],
};

export const trust = {
  label: "Design work trusted by",
  logos: ["SuperSport", "DStv / MultiChoice", "FNB", "bidorbuy", "Hollard", "Coca-Cola", "Standard Bank", "Telkom"],
};

export const marqueeItems = ["UX Strategy", "Product Design", "Verifux", "26 Years", "26-30M Users", "Broadcast to Product"];

export const arc = {
  eyebrow: "The arc",
  heading: "Broadcast to product, one discipline at a time.",
  items: [
    {
      era: "1999 to 2010",
      title: "Broadcast, motion & interactive design",
      body: "New Media Designer at Icandi Interactive, Interaction Designer at 8 Seconds Interactive, then Lead Interaction Designer at Kemistry Creative. Senior freelance design across various agencies, then Senior Brand Designer at Hollard Insurance. Motion graphics, brand and interaction design across TV, early web and agency campaigns.",
    },
    {
      era: "2010 to 2018",
      title: "Usability & UX leadership at scale",
      body: "Lead Product & UX Designer at Bobshop / bidorbuy, then Senior Usability Analyst at FNB Digital Banking, then Senior UX Analyst at DStv Now. The bidorbuy redesign nearly doubled revenue in its first month. The FNB rollout shipped across Africa and the Channel Islands in three months against an eight-month scope. At FNB, I also conceived and built an internal Digital Wiki that moved call centre teams from paper-based documentation to instant digital access, recognised with the FNB Innovation Award (2015).",
    },
    {
      era: "2018 to 2025",
      title: "Principal Product Designer & UX Manager, SuperSport",
      body: "Directed UX strategy and product design across SuperSport's web, mobile and connected TV ecosystem in 50+ African markets, reaching 26-30 million monthly impressions and driving a 40% increase in ad revenue.",
    },
    {
      era: "Now",
      title: "Founder, Verifux & Designerama",
      body: "Two and a half decades of pattern-recognition, now built into Verifux, an AI-powered MX, BX and AIX audit engine (with an optional DX craft score), alongside select consulting through Designerama. Open to senior in-house roles and contract engagements too.",
    },
  ],
};

export const method = {
  eyebrow: "How I work",
  heading: "Design thinking, behavioural science and systems thinking, applied to real product work.",
  steps: [
    {
      num: "01",
      title: "Empathise",
      body: "Ethnographic research, jobs-to-be-done interviews and usability observation reveal what people actually do, not what the org chart says.",
    },
    {
      num: "02",
      title: "Define & reframe",
      body: "Behavioural science and systems thinking reframe the problem, isolating the leverage points that will actually move the outcome.",
    },
    {
      num: "03",
      title: "Ideate & prototype",
      body: "Rapid concepts, prototypes and cross-functional discovery, validated against real users, not opinion or hierarchy.",
    },
    {
      num: "04",
      title: "Test & ship",
      body: "Ship the smallest version that proves the fix, instrument against real usage, iterate from evidence. Nothing stays on a slide.",
    },
  ],
};

export const stats = [
  { num: "26+", label: "Years in design" },
  { num: "26-30M", label: "Monthly users reached, SuperSport" },
  { num: "40%", label: "Ad revenue lift from UX redesign" },
  { num: "CUA", label: "Certified usability analyst" },
];

export const spotlight = {
  eyebrow: "Currently building",
  heading: "Verifux",
  body: "The same diagnosis I'd otherwise run by hand, encoded once and run in minutes instead of days. Verifux audits a product across the MX / BX / AIX triad, 54 checkpoints spanning 9 pillars, plus a separate, optional DX craft score, catching what Nielsen's heuristics alone miss: dark patterns, and whether the product is even legible to AI agents.",
  tags: ["AI-powered", "MX · BX · AIX · DX", "Early stage"],
  panel: [
    { label: "Status", value: "In active build" },
    { label: "Framework", value: "MX · BX · AIX + DX" },
    { label: "Scope", value: "54 checkpoints · 9 pillars" },
    { label: "Talk to me →", value: "Available" },
  ],
};

// Work items now live in lib/content/work.ts (a shared registry powering
// both the work grid and the dynamic /portfolio/[slug] case-study route).

export const philosophy = {
  quote: "Design that only lives on a slide never really happened.",
  cite: "on shipping over presenting",
};

export const cta = {
  eyebrow: "Get in touch",
  heading: "Open to senior roles, contract work, and select consulting, plus conversations about Verifux.",
  body: "Available immediately, working with teams anywhere.",
  actions: [
    { label: "Email me →", href: "mailto:kishan@designerama.co.za", variant: "solid" as const },
    { label: "Connect on LinkedIn", href: "https://linkedin.com/in/kishanrama", variant: "ghost" as const },
  ],
};

export const footer = {
  copyright: "© Designerama. Kishan Rama.",
  links: [
    { label: "Designerama", href: "/" },
    { label: "Blog", href: "https://www.designerama.co.za/blog" },
    { label: "LinkedIn", href: "https://linkedin.com/in/kishanrama" },
    { label: "Email", href: "mailto:kishan@designerama.co.za" },
  ],
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "Verifux", href: "#verifux" },
  ],
  designeramaLink: { label: "Designerama →", href: "/" },
  cta: { label: "Get in touch", href: "#contact" },
};
