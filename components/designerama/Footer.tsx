import Image from "next/image";
import { footer } from "@/lib/content/designerama";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-10 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <Image src="/images/logo-mark.png" alt="Designerama" width={104} height={36} className="h-[18px] w-auto dark:invert" />
          <div className="flex flex-wrap gap-8">
            {footer.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between gap-2 font-mono text-[10.5px] tracking-[0.03em] text-ink-dim">
          {footer.bottom.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
