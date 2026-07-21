export type MediaMode = "gallery" | "carousel" | "prototype";

export type MediaImage = { src: string; alt: string; note?: string; width?: number; height?: number };

export type SecondaryMedia = {
  images: MediaImage[];
  mediaMode: MediaMode;
  cropRatio?: [number, number];
  orientation?: "vertical" | "horizontal";
};

export type CaseStudyData = {
  title: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  intro: string;
  meta: { label: string; value: string }[];
  situation: { heading: string; body: string[] };
  situationFrameCaption: string;
  situationImages?: MediaImage[];
  situationMediaMode?: MediaMode;
  situationCropRatio?: [number, number];
  situationSecondary?: SecondaryMedia;
  approach: { heading: string; body: string[] };
  approachFrameCaption: string;
  approachImages?: MediaImage[];
  approachMediaMode?: MediaMode;
  approachCropRatio?: [number, number];
  approachSecondary?: SecondaryMedia;
  outcome: { heading: string; body: string[] };
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
      situationFrameCaption: "SuperSport.com, web homepage and article pages",
      situationMediaMode: "carousel",
      situationCropRatio: [16, 9],
      situationImages: [
        { src: "/images/work/supersport/ss-web0.jpg", alt: "SuperSport.com homepage, full page", width: 1920, height: 7223 },
        { src: "/images/work/supersport/ss-web1.jpg", alt: "SuperSport.com football hub hero, live and upcoming matches", width: 1920, height: 1608 },
        { src: "/images/work/supersport/ss-web2.jpg", alt: "SuperSport.com homepage hero with tournament shortcuts", width: 1920, height: 1400 },
        { src: "/images/work/supersport/ss-web3.jpg", alt: "SuperSport.com homepage, full page", width: 1920, height: 5218 },
        { src: "/images/work/supersport/ss-web4.jpg", alt: "SuperSport.com video article page with related content sidebar", width: 1920, height: 2332 },
        { src: "/images/work/supersport/ss-web5.jpg", alt: "SuperSport.com homepage, full page", width: 1920, height: 3572 },
      ],
      situationSecondary: {
        mediaMode: "prototype",
        orientation: "horizontal",
        images: [
          { src: "/images/work/supersport/ss-mobile1.jpg", alt: "SuperSport mobile app screens across rugby, live scores and news", width: 2600, height: 778 },
        ],
      },
      approach: {
        heading: "The approach",
        body: [
          "I applied nudge theory and behavioural design to the video play page, introducing tactical UX nudges alongside a Google OneBox integration for match highlights, so discovery didn't depend on a person already knowing what to search for.",
          "On the news article page, I introduced endless scroll combined with strategically placed ad units between articles, extending session length without breaking reading flow.",
          "Throughout, I led product discovery in cross-functional squads with product managers, engineers and editorial, and introduced AI-augmented design workflows, prompt-assisted prototyping and automated evaluation to cut design cycle time across parallel work streams.",
        ],
      },
      approachFrameCaption: "SuperSport.com, homepage and Match Center, redesigned states",
      approachMediaMode: "carousel",
      approachCropRatio: [16, 9],
      approachImages: [
        { src: "/images/work/supersport/ss01.jpg", alt: "SuperSport.com homepage, Live Now and Editor's Picks", width: 2160, height: 1283 },
        { src: "/images/work/supersport/ss02.jpg", alt: "SuperSport.com homepage, Live Now and Editor's Picks, F1 feature", width: 2160, height: 1283 },
        { src: "/images/work/supersport/ss03.jpg", alt: "SuperSport.com Match Center, upcoming fixtures", width: 2160, height: 1283 },
        { src: "/images/work/supersport/ss04.jpg", alt: "SuperSport.com Match Center, live match score", width: 2880, height: 1810 },
        { src: "/images/work/supersport/ss05.jpg", alt: "SuperSport.com Match Center, results and related video", width: 2880, height: 1812 },
        { src: "/images/work/supersport/ss06.jpg", alt: "SuperSport.com Match Center, live poll question", width: 2880, height: 1810 },
      ],
      approachSecondary: {
        mediaMode: "prototype",
        orientation: "horizontal",
        images: [
          { src: "/images/work/supersport/ss07.jpg", alt: "Video Experience rework, behavioural economics approach and Live Streaming redesign", width: 3840, height: 1396 },
        ],
      },
      outcome: {
        heading: "The outcome",
        body: [
          "The video play page changes drove an average of 26-30 million views and impressions per month across web and mobile. The article page changes lifted ad revenue by close to 40%, alongside increased article reads and engagement time.",
        ],
      },
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
      situationFrameCaption: "GOtv desktop web, discovery and package selection",
      situationMediaMode: "carousel",
      situationImages: [
        { src: "/images/work/gotv/gotv1.jpg", alt: "GOtv Get GOtv landing page, decoder and streaming options", width: 1920, height: 8692 },
        { src: "/images/work/gotv/gotv2.jpg", alt: "GOtv Supa+ package page, channel lineup and bundle add-ons", width: 1920, height: 8003 },
        { src: "/images/work/gotv/gotv3.jpg", alt: "GOtv package comparison, decoder and streaming pricing", width: 1920, height: 8003 },
        { src: "/images/work/gotv/gotv4.jpg", alt: "GOtv Value package page, feature highlights and content grid", width: 1920, height: 8003 },
        { src: "/images/work/gotv/gotv5.jpg", alt: "GOtv package page, pricing and FAQ", width: 1920, height: 8003 },
      ],
      situationSecondary: {
        mediaMode: "prototype",
        images: [
          { src: "/images/work/gotv/gotv-guide1.jpg", alt: "GOtv TV Guide, channel schedule grid with date and live events filters", width: 1920, height: 3015 },
        ],
      },
      approach: {
        heading: "The approach",
        body: [
          "I designed the core self-service flows end to end: an account dashboard surfacing package status and billing at a glance, a discovery feed for content, a TV Guide with a full channel schedule and live-events filter, and a country-aware sign-in flow supporting sign-in via surname, phone number and smartcard, or a MultiChoice ID, across dozens of African markets.",
          "The payments flow was designed provider-first: selecting a local payment provider, confirming details, and a clear success state, since payment methods vary significantly market to market. Package selection and subscription management were designed as their own dedicated flows, each themed to GOtv's tier colours (Lite, Value, Plus, Supa, Supa+, Max).",
          "Every flow was designed twice: once for the GOtv mobile app, once for desktop web, sharing one consistent design system (GOtv's brand yellow, red and green) rather than two divergent products.",
        ],
      },
      approachFrameCaption: "MyGOtv, account dashboard and billing",
      approachMediaMode: "carousel",
      approachImages: [
        { src: "/images/work/gotv/gotv-ss1.jpg", alt: "MyGOtv dashboard, subscription status and quick actions", width: 1920, height: 3063 },
        { src: "/images/work/gotv/gotv-ss2.jpg", alt: "MyGOtv My Products, subscription and add-on management", width: 1920, height: 1982 },
        { src: "/images/work/gotv/gotv-ss3.jpg", alt: "MyGOtv subscription management, linked hardware", width: 1920, height: 1982 },
        { src: "/images/work/gotv/gotv-ss4.jpg", alt: "MyGOtv My Account, balance and payment options", width: 1920, height: 1982 },
        { src: "/images/work/gotv/gotv-ss5.jpg", alt: "MyGOtv account details, other account options", width: 1920, height: 2011 },
        { src: "/images/work/gotv/gotv-ss6.jpg", alt: "MyGOtv My Bill Explained, itemised billing breakdown", width: 1920, height: 2011 },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "A complete, production-ready design system and flow set for GOtv's self-service experience: dashboard, discovery, sign-in, payments and package management, designed consistently across mobile and web.",
        ],
      },
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
      situationMediaMode: "carousel",
      situationCropRatio: [4, 3],
      situationImages: [
        { src: "/images/work/bidorbuy/bob5.jpg", alt: "Original bidorbuy.co.za homepage, fashion and category promotions" },
        { src: "/images/work/bidorbuy/bob6.jpg", alt: "Original bidorbuy.co.za registration form" },
        { src: "/images/work/bidorbuy/bob7.jpg", alt: "Original bidorbuy.co.za sign in page" },
        { src: "/images/work/bidorbuy/bob8.jpg", alt: "Original bidorbuy.co.za account payment form" },
        { src: "/images/work/bidorbuy/bob9.jpg", alt: "Original bidorbuy.co.za community and social links page" },
        { src: "/images/work/bidorbuy/bob10.jpg", alt: "Original bidorbuy.co.za fashion campaign banner" },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I led a complete UX and UI redesign across web, mobile site and apps, and introduced a user-centred design methodology to the wider team, shifting the product culture from feature-led to experience-led development. That methodology shift outlasted the redesign itself.",
        ],
      },
      approachFrameCaption: "The redesigned bidorbuy interface, key flows",
      approachMediaMode: "carousel",
      approachCropRatio: [16, 9],
      approachImages: [
        { src: "/images/work/bidorbuy/bob1.jpg", alt: "Bob Shop homepage, current rebrand of bidorbuy, live today" },
        { src: "/images/work/bidorbuy/bob2.jpg", alt: "Bob Shop My Account dashboard, live today" },
        { src: "/images/work/bidorbuy/bob3.jpg", alt: "Bob Shop seller acquisition landing page, live today" },
        { src: "/images/work/bidorbuy/bob4.jpg", alt: "Bob Shop Snap Friday category listings, live today" },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "Revenue nearly doubled and traffic increased in the first month following launch, directly attributable to improved usability, discoverability and conversion across the redesigned experience.",
        ],
      },
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
      situationFrameCaption: "FNB digital banking, live across markets",
      situationMediaMode: "carousel",
      situationImages: [
        { src: "/images/work/fnb/fnb1.jpg", alt: "FNB Private Clients landing page, Namibia", width: 1920, height: 1037 },
        { src: "/images/work/fnb/fnb2.jpg", alt: "FNB Savings Pocket product page", width: 1920, height: 1037 },
        { src: "/images/work/fnb/fnb3.jpg", alt: "FNB Channel Islands offshore banking page", width: 1920, height: 1037 },
        { src: "/images/work/fnb/fnb4.jpg", alt: "FNB Call Deposit product page", width: 1920, height: 1036 },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I led the usability work behind the redesign, working across markets to compress the original eight-month scope into a three-month rollout without cutting the usability work that mattered, conducting usability analysis across website, mobi site, mobile and watch apps, and USSD, and identifying critical friction points along the way.",
          "Separately, I helped build an internal Digital Wiki, moving call centre agents and teams from paper-based documentation to instant digital access.",
        ],
      },
      approachFrameCaption: "FNB digital banking, live across markets",
      approachMediaMode: "carousel",
      approachImages: [
        { src: "/images/work/fnb/fnb5.jpg", alt: "FNB Save and Invest hub page, Ghana", width: 1920, height: 1036 },
        { src: "/images/work/fnb/fnb6.jpg", alt: "FNB Call Deposit Account page, Ghana", width: 1920, height: 1036 },
        { src: "/images/work/fnb/fnb7.jpg", alt: "FNB Home Loans hub page", width: 1920, height: 1036 },
        { src: "/images/work/fnb/fnb8.jpg", alt: "FNB Premier Banking page, Botswana", width: 1920, height: 1036 },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "The rollout shipped across every market in scope on the compressed three-month timeline. The Digital Wiki dramatically reduced customer resolution time and enabled faster, more accurate service, recognised with the FNB Innovation Award in 2015.",
        ],
      },
    },
  },
  {
    slug: "dstv-tv-guide",
    title: "DStv TV Guide",
    tag: "UX · 2025",
    summary: "Lean-back UX and content navigation design for connected TV environments, across DStv's TV Guide, Live TV and reminders flows.",
    featured: true,
    previewImage: "/images/work/tv-guide/overview.png",
    caseStudy: {
      title: "DStv TV Guide, Case Study, Kishan Rama",
      metaDescription:
        "Lean-back UX and content navigation design for DStv's TV Guide. Channel schedules, Live TV browsing, reminders and voice search, across connected TV and mobile.",
      eyebrow: "UX · 2025",
      headline: "Turning a static schedule grid into a personalised discovery feed.",
      intro:
        "DStv's TV Guide was a static, time-based EPG grid that created high friction discovery on mobile. As Senior User Experience Analyst on DStv Now, I designed the fix: a personalised, feed-based TV Guide with proactive planning, voice search and a revamped linear view for viewers who preferred it.",
      meta: [
        { label: "Client", value: "DStv, MultiChoice Group" },
        { label: "Role", value: "Senior User Experience Analyst" },
        { label: "Duration", value: "2025" },
        { label: "Scope", value: "TV Guide, connected TV & mobile" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "DStv's TV Guide was a static, time-based EPG grid, a horizontal-scrolling schedule that created high friction discovery on mobile, buried premium content behind small text, and underperformed relative to the size of DStv's content library. Viewers who preferred the traditional channel list still needed a fast, familiar way to find something to watch.",
        ],
      },
      situationFrameCaption: "DStv TV Guide, Discover, TV Guide and Live TV",
      situationMediaMode: "carousel",
      situationImages: [
        { src: "/images/work/tv-guide/tvg1.jpg", alt: "TV Guide Reimagined, cover slide" },
        { src: "/images/work/tv-guide/tvg2.jpg", alt: "DStv Discover, personalised viewing assistant" },
        { src: "/images/work/tv-guide/tvg3.jpg", alt: "My Feed home screen with personalised stacks and carousels" },
        { src: "/images/work/tv-guide/tvg4.jpg", alt: "Revamped linear view with vertical channel list" },
        { src: "/images/work/tv-guide/tvg5.jpg", alt: "Intelligent search and voice navigation" },
        { src: "/images/work/tv-guide/tvg6.jpg", alt: "Proactive planner with reminders and conflict detection" },
        { src: "/images/work/tv-guide/tvg7.jpg", alt: "Strategic spotlight card for advertising and promotion" },
        { src: "/images/work/tv-guide/tvg8.jpg", alt: "Contextual discovery in the Sport Hub" },
        { src: "/images/work/tv-guide/tvg9.jpg", alt: "Conclusion and takeaway" },
      ],
      approach: {
        heading: "The approach",
        body: [
          "I reimagined the TV Guide around a personalised, feed-based discovery experience rather than a fixed schedule. A Discover feed replaced horizontal EPG scrolling with a vertical, dynamically segmented feed (New Series and Movies, Live, Recently Watched, Popular, My Channels, My Sport), fronted by a prominent, actionable hero card. I kept a revamped linear view alongside it for viewers who preferred the traditional channel list, with an easier channel selector and instant visual previews on tap.",
          "I also designed a proactive planner (bottom-sheet reminders with automatic conflict detection and record-the-season prompts), intelligent voice and natural-language search (\"What live sport is on tonight?\"), a Sport Hub that shifted discovery from channels to events for contextual sponsorship, and a spotlight card pattern for advertising and promotion designed to read as premium content rather than an intrusive ad.",
        ],
      },
      approachFrameCaption: "DStv TV Guide, schedule, reminders and voice search",
      approachMediaMode: "prototype",
      approachImages: [
        { src: "/images/work/tv-guide/tvgPrototype.jpg", alt: "DStv TV Guide full interactive prototype overview" },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "A feed-based TV Guide that traded a static schedule grid for personalised discovery, designed to lift session duration, reminder set rate, and ad and promotion engagement, while keeping a familiar linear view available for viewers who wanted it. The two views work side by side rather than one replacing the other, since not every subscriber wants a feed-first model.",
        ],
      },
    },
  },
  {
    slug: "dstv-rewards",
    title: "DStv Rewards",
    tag: "UX · MultiChoice Group",
    summary: "Two gamified rewards challenges, Upgrade & Earn and Reconnect, designed across the DStv app and web to promote package upgrades and service reconnections.",
    featured: true,
    previewImage: "/images/work/dstv-rewards/overview.png",
    caseStudy: {
      title: "DStv Rewards, Case Study, Kishan Rama",
      metaDescription:
        "Two gamified rewards challenge campaigns for DStv Rewards, Upgrade & Earn and Reconnect, designed across app and web to drive package upgrades and reconnections.",
      eyebrow: "UX · MultiChoice Group",
      headline: "Two rewards challenges designed to nudge subscribers toward upgrading or reconnecting.",
      intro:
        "DStv Rewards already existed as MultiChoice's loyalty program, coins, tiers and partner rewards. This project added two specific gamified challenge campaigns on top of it, Upgrade & Earn and Reconnect, designed across the DStv app and web as a concrete, coin-earning incentive for subscribers to upgrade their package or reconnect a lapsed service.",
      meta: [
        { label: "Client", value: "DStv, MultiChoice Group" },
        { label: "Platforms", value: "App & web" },
        { label: "Scope", value: "Upgrade & Earn and Reconnect challenge campaigns" },
      ],
      situation: {
        heading: "The situation",
        body: [
          "DStv Rewards, the existing coins-and-tiers loyalty program, was built to reward ongoing engagement, but it had no dedicated mechanic for two specific behaviours MultiChoice wanted to encourage: subscribers upgrading their package, and subscribers reconnecting a lapsed service. A general rewards program doesn't drive a specific action on its own.",
        ],
      },
      situationFrameCaption: "DStv Rewards dashboard, challenge cards and rewards history",
      situationMediaMode: "carousel",
      situationImages: [
        { src: "/images/work/dstv-rewards/rewards1.jpg", alt: "DStv Rewards landing page, hero and DStv Coins, Guaranteed Rewards and Challenges categories", width: 1920, height: 3282 },
        { src: "/images/work/dstv-rewards/rewards2.jpg", alt: "DStv Rewards dashboard, Upgrade & Earn and Reconnect challenge cards before accepting", width: 1920, height: 2027 },
        { src: "/images/work/dstv-rewards/rewards3.jpg", alt: "DStv Rewards dashboard, Upgrade & Earn and Reconnect challenges shown as claimed", width: 1920, height: 2027 },
        { src: "/images/work/dstv-rewards/rewards4.jpg", alt: "DStv Rewards history, claimed, active and expired challenge cards", width: 1920, height: 1997 },
        { src: "/images/work/dstv-rewards/rewards5.jpg", alt: "DStv Rewards Upgrade & Earn Challenge detail, coin breakdown and locked Legend-tier rewards", width: 1920, height: 1875 },
      ],
      situationSecondary: {
        mediaMode: "prototype",
        orientation: "horizontal",
        images: [
          { src: "/images/work/dstv-rewards/rewards-app1.jpg", alt: "DStv Rewards app, My Challenges tabs, Reconnect Challenge flow and package selection screen", width: 1920, height: 537 },
        ],
      },
      approach: {
        heading: "The approach",
        body: [
          "I designed two challenge campaigns inside the existing DStv Rewards experience: an Upgrade & Earn Challenge, rewarding subscribers with bonus coins for upgrading their package and staying upgraded, and a Reconnect Challenge, rewarding subscribers with up to 2 500 coins for reconnecting a lapsed service within 30 days.",
          "Both challenges were designed as bannered cards on the Rewards dashboard, with a full accept, in-progress and completed flow, and a record in Rewards history once claimed, consistently across the DStv app and DStv web.",
        ],
      },
      approachFrameCaption: "DStv Rewards, Reconnect and Showmax challenge cards",
      approachMediaMode: "carousel",
      approachImages: [
        { src: "/images/work/dstv-rewards/rewards6.jpg", alt: "DStv Rewards landing page, hero and reward categories", width: 1920, height: 3282 },
        { src: "/images/work/dstv-rewards/rewards7.jpg", alt: "DStv Rewards dashboard, Reconnect and Showmax challenge cards before accepting", width: 1920, height: 2027 },
        { src: "/images/work/dstv-rewards/rewards8.jpg", alt: "DStv Rewards dashboard, Reconnect Challenge shown as active", width: 1920, height: 2027 },
        { src: "/images/work/dstv-rewards/rewards9.jpg", alt: "DStv Rewards history, claimed, active and expired challenge cards", width: 1920, height: 1997 },
        { src: "/images/work/dstv-rewards/rewards10.jpg", alt: "DStv Rewards history, Challenges tab, Upgrade & Earn and Reconnect challenges claimed", width: 1920, height: 1997 },
      ],
      outcome: {
        heading: "The outcome",
        body: [
          "Two challenge campaigns, live inside the existing DStv Rewards program in app and web, giving subscribers a concrete, gamified reason to reconnect a lapsed service or upgrade their package rather than lapse further or stay on a lower tier.",
        ],
      },
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
