import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AmbientDots } from "@/components/shared/AmbientDots";
import { BgStripe } from "@/components/shared/BgStripe";
import { Nav } from "@/components/designerama/Nav";
import { Footer } from "@/components/designerama/Footer";
import { OG_DEFAULTS } from "@/lib/metadata";

const title = "Privacy and AI use, Designerama.";
const description =
  "What this site collects, where the enquiry form goes, and how AI systems are invited to read it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { ...OG_DEFAULTS, title, description, url: "/privacy" },
};

const sections = [
  {
    heading: "Visit measurement",
    body: [
      "This site uses Google Analytics 4 to measure visits. It loads on every page. There is no consent banner on the site at present.",
    ],
  },
  {
    heading: "The enquiry form",
    body: [
      "The form asks for your name, your email address, an optional company name and your message. When you send it, those details are posted to FormSubmit (formsubmit.co), which delivers them to hello@designerama.co.za.",
      "You can skip the form and write to hello@designerama.co.za directly.",
    ],
  },
  {
    heading: "How AI systems can use this site",
    body: [
      "The public pages are written to be read and cited by AI systems. Three plain-text files describe the site for them: /llms.txt, /llms-full.txt and /agents.md. The robots.txt file names the AI crawlers it permits.",
      "The site runs no chatbot or agent of its own, and it declares no tools for agents to call. To act on anything, an agent should send the enquiry form or email hello@designerama.co.za, the same as a person.",
    ],
  },
  {
    heading: "Questions",
    body: ["Write to hello@designerama.co.za."],
  },
];

export default function PrivacyPage() {
  return (
    <ThemeProvider brand="designerama">
      <BgStripe />
      <AmbientDots />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <section className="border-b border-line pb-16 pt-[150px] sm:pb-24 sm:pt-[180px]">
            <div className="mx-auto max-w-container px-6 sm:px-8">
              <p className="eyebrow mb-6">Privacy</p>
              <h1 className="max-w-3xl text-[clamp(32px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.01em]">
                Privacy and AI use
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">
                A short, plain account of what this site collects and how AI systems are invited to read it.
              </p>
              <div className="mt-14 max-w-2xl space-y-12">
                {sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-[22px] leading-[1.2]">{s.heading}</h2>
                    {s.body.map((p) => (
                      <p key={p} className="mt-4 text-[16px] leading-[1.8] text-ink-dim">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}
                <p className="font-sans text-[0.8rem] text-ink-dim">Last updated: 2026-11-19</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
