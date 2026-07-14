import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TrustStrip } from "@/components/portfolio/TrustStrip";
import { Marquee } from "@/components/portfolio/Marquee";
import { Arc } from "@/components/portfolio/Arc";
import { Method } from "@/components/portfolio/Method";
import { Stats } from "@/components/portfolio/Stats";
import { VerifuxSpotlight } from "@/components/portfolio/VerifuxSpotlight";
import { WorkGrid } from "@/components/portfolio/WorkGrid";
import { Philosophy } from "@/components/portfolio/Philosophy";
import { Cta } from "@/components/portfolio/Cta";
import { Footer } from "@/components/portfolio/Footer";

export const metadata: Metadata = {
  title: "Kishan Rama — Principal Product Designer & UX Strategist",
  description:
    "Principal Product Designer and UX Strategist based in Johannesburg. 26 years, 26 to 30 million monthly users reached. Open to senior roles, contract work and consulting.",
};

export default function PortfolioPage() {
  return (
    <ThemeProvider brand="portfolio" storageKey="kr-theme" defaultTheme="light">
      <BgStripe />
      <div className="relative z-[1]">
        <Nav />
        <Hero />
        <TrustStrip />
        <Marquee />
        <Arc />
        <Method />
        <Stats />
        <VerifuxSpotlight />
        <WorkGrid />
        <Philosophy />
        <Cta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
