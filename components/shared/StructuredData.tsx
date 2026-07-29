// Site-wide JSON-LD. Facts grounded in the site's own content files and
// docs/DEPLOYMENT.md (production domain, GA4 property, hello@ email). Nothing
// invented. If any of these facts drift, update here as the canonical source.
const SITE_URL = "https://designerama.co.za";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Designerama",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-mark-dark.png`,
  email: "hello@designerama.co.za",
  founder: {
    "@type": "Person",
    name: "Kishan Rama",
    url: `${SITE_URL}/portfolio`,
    sameAs: ["https://linkedin.com/in/kishanrama"],
  },
  description:
    "AI-native product diagnosis consultancy. Home to Verifux, a 54-checkpoint audit engine covering the MX, BX and AIX triad plus an optional DX craft score.",
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kishan Rama",
  url: `${SITE_URL}/portfolio`,
  email: "kishan@designerama.co.za",
  jobTitle: "Principal Product Designer & UX Strategist",
  sameAs: ["https://linkedin.com/in/kishanrama"],
  worksFor: {
    "@type": "Organization",
    name: "Designerama",
    url: SITE_URL,
  },
  alumniOf: [
    { "@type": "Organization", name: "SuperSport, MultiChoice Group" },
    { "@type": "Organization", name: "DStv, MultiChoice Group" },
    { "@type": "Organization", name: "FNB" },
    { "@type": "Organization", name: "bidorbuy" },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Designerama",
  publisher: { "@type": "Organization", name: "Designerama", url: SITE_URL },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [organization, person, website],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
