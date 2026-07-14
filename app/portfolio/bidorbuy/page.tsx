import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/portfolio/Nav";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { Footer } from "@/components/portfolio/Footer";
import { bidorbuy } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: bidorbuy.title,
  description: bidorbuy.metaDescription,
};

export default function BidorbuyPage() {
  return (
    <ThemeProvider brand="portfolio" storageKey="kr-theme" defaultTheme="light">
      <BgStripe />
      <div className="relative z-[1]">
        <Nav backLink={{ label: "← Back to work", href: "/portfolio#work" }} />
        <CaseStudy data={bidorbuy} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
