import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/designerama/Nav";
import { Hero } from "@/components/designerama/Hero";
import { Ticker } from "@/components/designerama/Ticker";
import { CheckpointStrip } from "@/components/designerama/CheckpointStrip";
import { Process } from "@/components/designerama/Process";
import { WorkList } from "@/components/designerama/WorkList";
import { About } from "@/components/designerama/About";
import { Cta } from "@/components/designerama/Cta";
import { Footer } from "@/components/designerama/Footer";
import { meta } from "@/lib/content/designerama";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function DesigneramaPage() {
  return (
    <ThemeProvider brand="designerama" storageKey="designerama-theme" defaultTheme="dark">
      <BgStripe />
      <div className="relative z-[1]">
        <Nav />
        <Hero />
        <Ticker />
        <CheckpointStrip />
        <Process />
        <WorkList />
        <About />
        <Cta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
