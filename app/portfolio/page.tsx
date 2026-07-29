import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TrustStrip } from "@/components/portfolio/TrustStrip";
import { Marquee } from "@/components/portfolio/Marquee";
import { Arc } from "@/components/portfolio/Arc";
import { Speaking } from "@/components/portfolio/Speaking";
import { Method } from "@/components/portfolio/Method";
import { VerifuxSpotlight } from "@/components/portfolio/VerifuxSpotlight";
import { WorkGrid } from "@/components/portfolio/WorkGrid";
import { LegacyWork } from "@/components/portfolio/LegacyWork";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Cta } from "@/components/portfolio/Cta";
import { Footer } from "@/components/portfolio/Footer";
import { OG_DEFAULTS } from "@/lib/metadata";

const PORTFOLIO_TITLE = "Kishan Rama · Principal Product Designer & UX Strategist";
const PORTFOLIO_DESCRIPTION =
  "Principal Product Designer and UX Strategist. 26 years, 26-30 million monthly users reached. Open to senior roles, contract work and consulting.";

export const metadata: Metadata = {
  title: PORTFOLIO_TITLE,
  description: PORTFOLIO_DESCRIPTION,
  alternates: { canonical: "/portfolio" },
  openGraph: { ...OG_DEFAULTS, title: PORTFOLIO_TITLE, description: PORTFOLIO_DESCRIPTION, url: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <ThemeProvider brand="portfolio">
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <Hero />
        <TrustStrip />
        <Marquee />
        <Arc />
        <Speaking />
        <Method />
        <VerifuxSpotlight />
        <WorkGrid />
        <LegacyWork />
        <Philosophy />
        <Cta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
