import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { Nav } from "@/components/portfolio/Nav";
import { CaseStudy } from "@/components/portfolio/CaseStudy";
import { Footer } from "@/components/portfolio/Footer";
import { workItems, getWorkItem, getNextCaseStudy } from "@/lib/content/work";

export function generateStaticParams() {
  return workItems.filter((w) => w.caseStudy).map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getWorkItem(params.slug);
  if (!item?.caseStudy) return {};
  return {
    title: item.caseStudy.title,
    description: item.caseStudy.metaDescription,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const item = getWorkItem(params.slug);
  if (!item?.caseStudy) notFound();

  const next = getNextCaseStudy(params.slug);

  return (
    <ThemeProvider brand="portfolio">
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav backLink={{ label: "← Back to work", href: "/portfolio#work" }} />
        <CaseStudy data={item.caseStudy} next={next} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
