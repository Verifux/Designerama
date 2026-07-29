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

export default function ServicesPage() {
  return (
    <ThemeProvider brand="designerama">
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
