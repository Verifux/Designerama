import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { spotlight } from "@/lib/content/portfolio";

export function VerifuxSpotlight() {
  return (
    <section id="verifux" className="border-b border-line py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll y={20}>
          <GradientHoverCard
            href="https://www.designerama.co.za/verifux"
            ariaLabel="Visit Verifux"
            radius={520}
            className="verifux-card grid grid-cols-1 gap-10 rounded-lg2 border border-line p-7 sm:p-14 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="eyebrow mb-4">{spotlight.eyebrow}</p>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{spotlight.heading}</h2>
              <p className="mt-5 max-w-lg text-ink-muted">{spotlight.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {spotlight.tags.map((t) => (
                  <span key={t} className="rounded-pill border border-line px-4 py-1.5 font-mono text-[0.72rem]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[14px] border border-line bg-bg p-6 font-mono text-[0.86rem]">
              {spotlight.panel.map((row) => (
                <div key={row.label} className="flex items-center justify-between border-b border-line py-3 last:border-b-0">
                  <span className="text-ink-dim">{row.label}</span>
                  <span className="text-ink">{row.value}</span>
                </div>
              ))}
            </div>
          </GradientHoverCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
