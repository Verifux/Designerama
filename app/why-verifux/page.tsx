import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/designerama/Nav";
import { VerifuxHero } from "@/components/designerama/VerifuxHero";
import { VerifuxSections } from "@/components/designerama/VerifuxSections";
import { VerifuxCta } from "@/components/designerama/VerifuxCta";
import { Footer } from "@/components/designerama/Footer";
import { meta } from "@/lib/content/verifux";
import { OG_DEFAULTS } from "@/lib/metadata";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: "/why-verifux" },
  openGraph: { ...OG_DEFAULTS, title: meta.title, description: meta.description, url: "/why-verifux" },
};

// FAQ schema for rich results. Answers are drawn verbatim in substance from
// this page's own content (lib/content/verifux.ts) — no invented facts.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Verifux audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verifux runs a 54-checkpoint audit across 9 pillars, organised around three questions: can people use it (MX, human experience), will people act (BX, behavioural experience), and can AI use it (AIX, AI experience). A separate, optional DX craft score benchmarks visual design against design-award criteria without ever affecting the 54-checkpoint result.",
      },
    },
    {
      "@type": "Question",
      name: "How is AIX different from standard UX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AIX (AI experience) measures how a product reads to AI agents, LLM crawlers and answer engines: structured data, semantic HTML, llms.txt and agent-actionable interfaces. It is the layer that decides whether AI surfaces recommend you or skip you, distinct from the MX usability layer that is grounded in Nielsen's heuristics and WCAG.",
      },
    },
    {
      "@type": "Question",
      name: "What is the DX craft score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DX (design excellence) is a separate, optional 0 to 100 score benchmarked against design-award criteria: hierarchy, typography, colour, whitespace, originality and content voice. It never affects the 54-checkpoint score.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Verifux audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full pass takes minutes rather than the week a manual heuristics review would need, because the evaluation is AI-assisted. Every checkpoint is still scored against something checkable: rendered pages, real accessibility trees, structured data and usage patterns where available.",
      },
    },
  ],
};

export default function WhyVerifuxPage() {
  return (
    <ThemeProvider brand="designerama">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <BgStripe />
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <main>
        <VerifuxHero />
        <VerifuxSections />
        <VerifuxCta />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
