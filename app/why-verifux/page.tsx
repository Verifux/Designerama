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

export default function WhyVerifuxPage() {
  return (
    <ThemeProvider brand="designerama">
      <BgStripe />
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <VerifuxHero />
        <VerifuxSections />
        <VerifuxCta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
