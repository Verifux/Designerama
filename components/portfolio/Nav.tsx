"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { nav } from "@/lib/content/portfolio";

export function Nav({ backLink }: { backLink?: { label: string; href: string } }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-bg/80 px-6 py-4 backdrop-blur-md sm:px-10">
      <div className="flex items-center gap-6">
        <Link href="/" aria-label="Designerama home" className="flex items-center">
          <Logo height={34} priority />
        </Link>
        {backLink && (
          <Link href={backLink.href} className="hidden font-mono text-[0.78rem] text-ink-dim transition-colors hover:text-accent sm:inline">
            {backLink.label}
          </Link>
        )}
      </div>

      <div className="hidden items-center gap-9 text-[0.88rem] text-ink-muted md:flex">
        {nav.links.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <Link
          href={nav.designeramaLink.href}
          className="hidden font-mono text-[0.78rem] text-ink-dim transition-colors hover:text-accent md:inline"
        >
          {nav.designeramaLink.label}
        </Link>
        <a href={nav.cta.href} className="btn--ghost hidden text-[0.82rem] sm:inline-flex">
          {nav.cta.label}
        </a>
      </div>
    </nav>
  );
}
