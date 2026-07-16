export type CaseStudyData = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  meta: { label: string; value: string }[];
  situation: { heading: string; body: string[] };
  situationFrameCaption: string;
  situationImages?: { src: string; alt: string }[];
  approach: { heading: string; body: string[] };
  approachFrameCaption: string;
  approachImages?: { src: string; alt: string }[];
  outcome: { heading: string; body: string[] };
  proof: { num: string; label: string }[];
};

export type WorkItem = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  featured: boolean;
  href?: string;
  previewImage?: string;
  caseStudy?: CaseStudyData;
};

export const workSection = {
  eyebrow: "Selected work",
  heading: "A career's worth of shipped design, at every scale.",
};

export const workItems: WorkItem[] = [
  {
    slug: "supersport",
    title: "SuperSport",
    tag: "Product · UX · 2018 to 2025",
    summary: "UX strategy and product design across web, mobile and connected TV, reaching 26-30 million monthly users.",
    featured: true,
    caseStudy: {
      title: "SuperSport, Case Study, Kishan Rama",
      metaDescription:
        "UX strategy and product design for SuperSport, reaching 26-30 million monthly users across web, mobile and connected TV.",
      eyebrow: "Product · UX · Dec 2018 to Sep 2025",
      headline: "Redesigning discovery and revenue across SuperSport's digital ecosystem.",
      intro:
        "As Principal Product Designer and UX Manager, I directed UX strategy and product design for SuperSport's web, mobile and connected TV platforms across 50+ African markets.",
      meta: [
        { label: "Client", value: "SuperSport, MultiChoice Group" },
        { label: "Role", value: "Principal Product Designer & UX Manager" },
        { label: "Duration", value: "6 years 10 months" },
        { label: "Reach", value: "26-30M monthly users" },
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
          "The video play page changes drove an average of 26-30 million views and impressions per month across web and mobile. The article page changes lifted ad revenue by close to 40%, alongside increased article reads and engagement time.",
        ],
      },
      proof: [
        { num: "26-30M", label: "Monthly views & impressions" },
        { num: "40%", label: "Increase in ad revenue" },
        { num: "50+", label: "African markets served" },
      ],
    },
  },
  {
    slug: "gotv",
    title: "GOtv",
    tag: "Product · UX · MultiChoice Group",
    summary: "Self-service redesign across GOtv's prepaid TV app and web, covering dashboard, discovery, sign-in, payments and packages.",
    featured: true,
    previewImage: "/images/work/gotv/dashboard.png",
    caseStudy: {
      title: "GOtv, Case Study, Kishan Rama",
      metaDescription:
        "A full self-service redesign for GOtv, MultiChoice's prepaid satellite and streaming TV brand across Africa. Dashboard, discovery, sign-in, payments and package management.",
      eyebrow: "Product · UX · MultiChoice Group",
      headline: "Redesigning self-service across GOtv's prepaid TV app and web experience.",
      intro:
        "A prepaid subscription customer who can't self-serve calls a support line instead. That's the failure mode GOtv's self-service experience needed fixed, across account management, content discovery, sign-in, payments and package selection.",
      meta: [
        { label: "Client", value: "GOtv, MultiChoice Group" },
        { label: "Platforms", value: "Mobile app & desktop web" },
        { label: "Scope", value: "9 core self-service flows" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "Self-service is where a prepaid subscription product either earns its keep or pushes customers to a call centre. GOtv's self-service experience needed a redesign spanning account management, content discovery, sign-in, payments and package selection, across both the mobile app and desktop web, for customers across dozens of African markets.",
        ],
      },
      situationFrameCaption: "GOtv self-service, mobile app",
      situationImages: [
        { src: "/images/work/gotv/dashboard.png", alt: "GOtv mobile app account dashboard with package and billing status" },
        { src: "/images/work/gotv/discovery.png", alt: "GOtv mobile app content discovery feed" },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I designed the core self-service flows end to end: an account dashboard surfacing package status and billing at a glance, a discovery feed for content, and a country-aware sign-in flow supporting sign-in via surname, phone number and smartcard, or a MultiChoice ID, across dozens of African markets.",
          "The payments flow was designed provider-first: selecting a local payment provider, confirming details, and a clear success state, since payment methods vary significantly market to market. Package selection and subscription management were designed as their own dedicated flows, each themed to GOtv's tier colours (Lite, Value, Plus, Supa, Supa+, Max).",
          "Every flow was designed twice: once for the GOtv mobile app, once for desktop web, sharing one consistent design system (GOtv's brand yellow, red and green) rather than two divergent products.",
        ],
      },
      approachFrameCaption: "GOtv sign-in and payments flow, mobile app",
      approachImages: [
        { src: "/images/work/gotv/signin.png", alt: "GOtv mobile app country-aware sign-in flow" },
        { src: "/images/work/gotv/payments.png", alt: "GOtv mobile app payment provider selection" },
        { src: "/images/work/gotv/homepage.png", alt: "GOtv desktop web homepage" },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "A complete, production-ready design system and flow set for GOtv's self-service experience: dashboard, discovery, sign-in, payments and package management, designed consistently across mobile and web.",
        ],
      },
      proof: [
        { num: "9", label: "Core self-service flows redesigned" },
        { num: "2", label: "Platforms (mobile app & desktop web)" },
        { num: "Africa-wide", label: "Country-aware sign-in flow" },
      ],
    },
  },
  {
    slug: "bidorbuy",
    title: "bidorbuy (Bobshop)",
    tag: "Product · UX · 2010 to 2013",
    summary: "Full UX and UI redesign that nearly doubled revenue and lifted traffic in the first month post-launch.",
    featured: true,
    caseStudy: {
      title: "bidorbuy (Bobshop), Case Study, Kishan Rama",
      metaDescription:
        "Full UX and UI redesign of bidorbuy (Bobshop.co.za) that nearly doubled revenue in the first month post-launch.",
      eyebrow: "Product · UX · Sep 2010 to Jun 2013",
      headline: "A full redesign that nearly doubled revenue in its first month.",
      intro:
        "Feature accumulation without a coherent usability strategy was costing the platform on discoverability and conversion. As Lead Product & UX Designer, I led the full UX and UI redesign across web, mobile site and apps.",
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
    },
  },
  {
    slug: "fnb",
    title: "FNB Digital Banking",
    tag: "UX · 2013 to 2016",
    summary:
      "Usability-led redesign of FNB's digital banking site, rolled out across Africa and the Channel Islands in three months against an eight-month scope. Won the FNB Innovation Award.",
    featured: true,
    caseStudy: {
      title: "FNB Digital Banking, Case Study, Kishan Rama",
      metaDescription:
        "Usability-led redesign of FNB's digital banking site, rolled out across Africa and the Channel Islands in three months against an eight-month scope.",
      eyebrow: "UX · 2013 to 2016",
      headline: "A usability-led banking redesign, rolled out in three months against an eight-month scope.",
      intro:
        "FNB's digital banking site needed a usability-led rebuild, and call centre teams were still working from paper documentation. As Senior Usability Analyst, I led the redesign across FNB's operations in Africa and the Channel Islands.",
      meta: [
        { label: "Client", value: "FNB (First National Bank)" },
        { label: "Role", value: "Senior Usability Analyst" },
        { label: "Duration", value: "2013 to 2016" },
        { label: "Markets", value: "Africa & Channel Islands" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "FNB's digital banking site needed a usability-led redesign, with a rollout spanning FNB's operations across Africa and the Channel Islands, originally scoped as an eight-month program. Separately, FNB's call centre teams were still running on paper-based documentation, slowing down customer resolution time.",
        ],
      },
      situationFrameCaption: "FNB digital banking, pre-redesign",
      approach: {
        heading: "The approach",
        body: [
          "I led the usability work behind the redesign, working across markets to compress the original eight-month scope into a three-month rollout without cutting the usability work that mattered, conducting usability analysis across website, mobi site, mobile and watch apps, and USSD, and identifying critical friction points along the way.",
          "Separately, I conceived and built an internal Digital Wiki, moving call centre agents and teams from paper-based documentation to instant digital access.",
        ],
      },
      approachFrameCaption: "FNB digital banking, redesigned",
      outcome: {
        heading: "The outcome",
        body: [
          "The rollout shipped across every market in scope on the compressed three-month timeline. The Digital Wiki dramatically reduced customer resolution time and enabled faster, more accurate service, recognised with the FNB Innovation Award in 2015.",
        ],
      },
      proof: [
        { num: "3 mo", label: "Compressed from an 8-month scope" },
        { num: "5", label: "Channels analyzed (web, mobi, mobile, watch, USSD)" },
        { num: "1", label: "FNB Innovation Award, 2015 (Digital Wiki)" },
      ],
    },
  },
  {
    slug: "dstv-tv-guide",
    title: "DStv TV Guide",
    tag: "UX · 2017 to 2018",
    summary: "Lean-back UX and content navigation design for connected TV environments, across DStv's TV Guide, Live TV and reminders flows.",
    featured: true,
    previewImage: "/images/work/tv-guide/overview.png",
    caseStudy: {
      title: "DStv TV Guide, Case Study, Kishan Rama",
      metaDescription:
        "Lean-back UX and content navigation design for DStv's TV Guide. Channel schedules, Live TV browsing, reminders and voice search, across connected TV and mobile.",
      eyebrow: "UX · 2017 to 2018",
      headline: "Designing how you find what to watch, lean-back and lean-forward.",
      intro:
        "Drop-off in critical navigation flows and unclear onboarding were costing one of the platform's largest properties real engagement. As Senior User Experience Analyst on DStv Now, I designed the fix: TV Guide, Live TV, reminders and voice search, across lean-back and lean-forward environments.",
      meta: [
        { label: "Client", value: "DStv, MultiChoice Group" },
        { label: "Role", value: "Senior User Experience Analyst" },
        { label: "Duration", value: "2017 to 2018" },
        { label: "Scope", value: "TV Guide, connected TV & mobile" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "Content navigation across DStv's lean-back (connected TV) and lean-forward (mobile/web) environments needed evaluation and improvement. One of Africa's largest digital media properties, with drop-off in critical navigation flows and unclear onboarding.",
        ],
      },
      situationFrameCaption: "DStv TV Guide, Discover, TV Guide and Live TV",
      situationImages: [
        { src: "/images/work/tv-guide/overview.png", alt: "DStv TV Guide Discover, TV Guide, Live TV, schedule and voice search screens" },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I designed the core content-navigation flows: a Discover feed, a TV Guide with channel schedules browsable by genre and sport, a Live TV view, per-programme reminders (Set Reminder), and voice-assisted search (\"What live sport is on tonight?\"), applying behavioural analysis and usability research across both lean-back and lean-forward contexts.",
        ],
      },
      approachFrameCaption: "DStv TV Guide, schedule, reminders and voice search",
      approachImages: [
        { src: "/images/work/tv-guide/overview.png", alt: "DStv TV Guide full screen set including schedule, reminders and voice search" },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "Design recommendations that reduced drop-off in critical navigation flows, improved onboarding clarity, and elevated perceived platform quality. Informing product decisions across web, mobile and connected TV at scale.",
        ],
      },
      proof: [
        { num: "5", label: "Core navigation flows designed" },
        { num: "2", label: "Environments (lean-back & lean-forward)" },
        { num: "2017 to 18", label: "MultiChoice Group, DStv" },
      ],
    },
  },
  {
    slug: "dstv-rewards",
    title: "DStv Rewards",
    tag: "UX · MultiChoice Group",
    summary: "A loyalty rewards experience designed across the DStv app and web, covering discovery, redemption and account history.",
    featured: true,
    previewImage: "/images/work/dstv-rewards/overview.png",
    caseStudy: {
      title: "DStv Rewards, Case Study, Kishan Rama",
      metaDescription:
        "A loyalty rewards experience for DStv subscribers, designed across app and web. Reward discovery, redemption and account history.",
      eyebrow: "UX · MultiChoice Group",
      headline: "A rewards experience designed once, consistently, across app and web.",
      intro:
        "DStv Rewards gives subscribers a way to earn and redeem loyalty rewards for staying engaged with the platform. This project covered the rewards experience across both the DStv app and web, as part of the same MultiChoice Group engagement as DStv Now and DStv TV Guide.",
      meta: [
        { label: "Client", value: "DStv, MultiChoice Group" },
        { label: "Platforms", value: "App & web" },
        { label: "Scope", value: "Reward discovery, redemption & account history" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "A loyalty rewards program needed a real interface, not just a backend concept, across two platforms that don't share a codebase: the DStv app and the DStv web experience.",
        ],
      },
      situationFrameCaption: "DStv Rewards, app and web flows",
      situationImages: [
        { src: "/images/work/dstv-rewards/overview.png", alt: "DStv Rewards app and web design flows, reward discovery and redemption screens" },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I designed the rewards experience end to end: reward discovery, redemption, and an account/rewards-history view. Once, then adapted consistently across the DStv app and DStv web, so the reward a subscriber sees and redeems reads the same regardless of which platform they're on.",
        ],
      },
      approachFrameCaption: "DStv Rewards, redemption and account history",
      approachImages: [
        { src: "/images/work/dstv-rewards/overview.png", alt: "DStv Rewards full app and web working canvas, redemption and account history flows" },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "A complete rewards flow and visual system, designed consistently across app and web and ready for engineering handoff.",
        ],
      },
      proof: [
        { num: "2", label: "Platforms (app & web)" },
        { num: "1", label: "Consistent design system across both" },
        { num: "3", label: "Core flows (discovery, redemption, history)" },
      ],
    },
  },
];

export type LegacyWorkItem = {
  title: string;
  client: string;
  tag: string;
  summary: string;
  image: string;
};

export const legacySection = {
  eyebrow: "Before product · broadcast & brand · 1999 to 2010",
  heading: "Earlier work, from the broadcast and brand years.",
  body: "Before product and UX, the work was broadcast, motion and brand, the years described in full in the arc above. A few surviving pieces from that era, shown as record, not as case studies.",
};

export const legacyWork: LegacyWorkItem[] = [
  {
    title: "Coca-Cola",
    client: "Coca-Cola",
    tag: "Sales toolkit · Design & Flash animation",
    summary: "A multimedia sales toolkit, designed, developed and animated for Coca-Cola's field sales team.",
    image: "/images/work/legacy/coca-cola.jpg",
  },
  {
    title: "GEDA",
    client: "Gauteng Economic Development Agency",
    tag: "Brand development · Art direction & design",
    summary: "Full brand development for GEDA. Logo, corporate identity, advertising, print collateral and online/interactive work.",
    image: "/images/work/legacy/geda.jpg",
  },
  {
    title: "JoziBond",
    client: "City of Johannesburg",
    tag: "Product launch · Design & direction",
    summary: "Creative campaign launching JoziBond, a retail municipal bond. Billboard and advertising campaigns plus the product's own identity design.",
    image: "/images/work/legacy/jozibond.jpg",
  },
];

export function getWorkItem(slug: string) {
  return workItems.find((w) => w.slug === slug);
}

export function getNextCaseStudy(slug: string) {
  const withCaseStudy = workItems.filter((w) => w.caseStudy);
  const i = withCaseStudy.findIndex((w) => w.slug === slug);
  if (i === -1) return undefined;
  const next = withCaseStudy[(i + 1) % withCaseStudy.length];
  return { label: "Next case study", title: `${next.title} →`, href: `/portfolio/${next.slug}` };
}
