import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/designerama/Nav";
import { ServicesHero } from "@/components/designerama/ServicesHero";
import { ServicesList } from "@/components/designerama/ServicesList";
import { ServicesCta } from "@/components/designerama/ServicesCta";
import { Footer } from "@/components/designerama/Footer";
import { meta } from "@/lib/content/services";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/services" },
  openGraph: { ...OG_DEFAULTS, title: meta.title, description: meta.description, url: "/services" },
};

// HowTo schema for rich results. Steps mirror the engagement flow described in
// this page's own content (lib/content/services.ts) — diagnosis first, then a
// scope determined by what the audit finds.
const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a Designerama engagement works",
  description: "Every engagement starts with a diagnosis; what follows is scoped to what the audit finds, not to which service was pitched hardest.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book a systems diagnosis",
      text: "Start with a Verifux audit of your live product: 54 checkpoints across MX, BX and AIX, plus an optional DX craft score.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review the findings",
      text: "A structured report ranks what's actually broken by cost, walked through in a working session so you know what it means for your roadmap.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Scope the fix",
      text: "What follows is scoped to what the audit finds: a redesign, a smaller fix, or ongoing direction, not a service decided in advance.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <ThemeProvider brand="designerama">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <BgStripe />
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <ServicesHero />
        <ServicesList />
        <ServicesCta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
