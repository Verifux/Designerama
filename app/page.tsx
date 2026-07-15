import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/designerama/Nav";
import { Hero } from "@/components/designerama/Hero";
import { Ticker } from "@/components/designerama/Ticker";
import { CheckpointStrip } from "@/components/designerama/CheckpointStrip";
import { Process } from "@/components/designerama/Process";
import { WhyItMatters } from "@/components/designerama/WhyItMatters";
import { WorkList } from "@/components/designerama/WorkList";
import { About } from "@/components/designerama/About";
import { Cta } from "@/components/designerama/Cta";
import { Footer } from "@/components/designerama/Footer";
import { meta } from "@/lib/content/designerama";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function HomePage() {
  return (
    <ThemeProvider brand="designerama">
      <BgStripe />
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <Hero />
        <Ticker />
        <CheckpointStrip />
        <Process />
        <WhyItMatters />
        <WorkList />
        <About />
        <Cta />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
