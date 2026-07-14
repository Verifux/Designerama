"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { nav } from "@/lib/content/designerama";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-bg px-6 py-[22px] sm:px-8">
      <a href="#top">
        <Image src="/images/logo-mark.png" alt="Designerama" width={104} height={36} className="h-5 w-auto dark:invert" priority />
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {nav.links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <Link
            href={nav.portfolioLink.href}
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim transition-colors hover:text-accent"
          >
            {nav.portfolioLink.label}
          </Link>
        </li>
        <li>
          <Link
            href={nav.portalLink.href}
            className="font-mono text-[11px] uppercase tracking-[0.08em] text-ink-dim transition-colors hover:text-accent"
          >
            {nav.portalLink.label}
          </Link>
        </li>
      </ul>

      <ThemeToggle className="flex h-[34px] w-[34px] items-center justify-center border border-line text-xs text-ink transition-colors hover:border-accent" />
    </nav>
  );
}
