export type CaseStudy = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  meta: { label: string; value: string }[];
  situation: { heading: string; body: string[] };
  situationFrameCaption: string;
  approach: { heading: string; body: string[] };
  approachFrameCaption: string;
  outcome: { heading: string; body: string[] };
  proof: { num: string; label: string }[];
  next: { label: string; title: string; href: string };
};

export const supersport: CaseStudy = {
  slug: "supersport",
  title: "SuperSport — Case Study — Kishan Rama",
  metaDescription:
    "UX strategy and product design for SuperSport, reaching 26 to 30 million monthly users across web, mobile and connected TV.",
  eyebrow: "Product · UX · Dec 2018 – Sep 2025",
  headline: "Redesigning discovery and revenue across SuperSport's digital ecosystem.",
  intro:
    "As Principal Product Designer and UX Manager, I directed UX strategy and product design for SuperSport's web, mobile and connected TV platforms across 50+ African markets.",
  meta: [
    { label: "Client", value: "SuperSport, MultiChoice Group" },
    { label: "Role", value: "Principal Product Designer & UX Manager" },
    { label: "Duration", value: "6 years 10 months" },
    { label: "Reach", value: "26–30M monthly users" },
  ],
  situation: {
    heading: "The situation",
    body: [
      "SuperSport's video play page and news article page were underperforming relative to the scale of the audience. Match highlight discovery was weak, and article engagement was capped by a traditional pagination pattern.",
      "The brief wasn't a redesign for its own sake. It had to move two specific numbers: how many people found the highlights they wanted, and how long people stayed engaged with editorial content.",
    ],
  },
  situationFrameCaption: "SuperSport video play page, web and connected TV",
  approach: {
    heading: "The approach",
    body: [
      "I applied nudge theory and behavioural design to the video play page, introducing tactical UX nudges alongside a Google OneBox integration for match highlights, so discovery didn't depend on a person already knowing what to search for.",
      "On the news article page, I introduced endless scroll combined with strategically placed ad units between articles, extending session length without breaking reading flow.",
      "Throughout, I led product discovery in cross-functional squads with product managers, engineers and editorial, and introduced AI-augmented design workflows, prompt-assisted prototyping and automated evaluation to cut design cycle time across parallel work streams.",
    ],
  },
  approachFrameCaption: "Before/after of the news article endless-scroll pattern",
  outcome: {
    heading: "The outcome",
    body: [
      "The video play page changes drove an average of 26 to 30 million views and impressions per month across web and mobile. The article page changes lifted ad revenue by close to 40%, alongside increased article reads and engagement time.",
    ],
  },
  proof: [
    { num: "26–30M", label: "Monthly views & impressions" },
    { num: "40%", label: "Increase in ad revenue" },
    { num: "50+", label: "African markets served" },
  ],
  next: { label: "Next case study", title: "bidorbuy (Bobshop) →", href: "/portfolio/bidorbuy" },
};

export const bidorbuy: CaseStudy = {
  slug: "bidorbuy",
  title: "bidorbuy (Bobshop) — Case Study — Kishan Rama",
  metaDescription:
    "Full UX and UI redesign of bidorbuy (Bobshop.co.za) that nearly doubled revenue in the first month post-launch.",
  eyebrow: "Product · UX · Sep 2010 – Jun 2013",
  headline: "A full redesign that nearly doubled revenue in its first month.",
  intro:
    "As Lead Product & UX Designer, I led visual design, usability and user-centred design for South Africa's leading online auction and shopping marketplace, across web, mobile site and apps.",
  meta: [
    { label: "Client", value: "Bobshop.co.za (bidorbuy)" },
    { label: "Role", value: "Lead Product & UX Designer" },
    { label: "Duration", value: "3 years" },
    { label: "Category", value: "E-commerce & auctions" },
  ],
  situation: {
    heading: "The situation",
    body: [
      "The platform's existing design was feature-led rather than experience-led: functionality had accumulated over years without a coherent usability strategy, and both discoverability and conversion were suffering for it.",
    ],
  },
  situationFrameCaption: "The pre-redesign bidorbuy interface",
  approach: {
    heading: "The approach",
    body: [
      "I led a complete UX and UI redesign across web, mobile site and apps, and introduced a user-centred design methodology to the wider team, shifting the product culture from feature-led to experience-led development. That methodology shift outlasted the redesign itself.",
    ],
  },
  approachFrameCaption: "The redesigned bidorbuy interface, key flows",
  outcome: {
    heading: "The outcome",
    body: [
      "Revenue nearly doubled and traffic increased in the first month following launch, directly attributable to improved usability, discoverability and conversion across the redesigned experience.",
    ],
  },
  proof: [
    { num: "~2x", label: "Revenue in first month post-launch" },
    { num: "3 yrs", label: "Led design across web, mobi & apps" },
    { num: "1", label: "Design culture shift, feature-led to experience-led" },
  ],
  next: { label: "Next case study", title: "SuperSport →", href: "/portfolio/supersport" },
};
