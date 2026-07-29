import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { diagnose } from "@/lib/content/designerama";

export function CheckpointStrip() {
  return (
    <section id="diagnose" className="border-t border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6} className="max-w-2xl">
          <p className="eyebrow mb-4">{diagnose.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{diagnose.heading}</h2>
          <p className="mt-4 text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{diagnose.body}</p>
          <Link
            href={diagnose.link.href}
            className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-accent transition-colors hover:opacity-80"
          >
            {diagnose.link.label}
            <span aria-hidden="true">→</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
