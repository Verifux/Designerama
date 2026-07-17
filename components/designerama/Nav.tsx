"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/Button";
import { nav } from "@/lib/content/designerama";

const navLinkClasses =
  "font-mono text-[11px] uppercase tracking-[0.08em] text-[color-mix(in_srgb,var(--ink)_82%,transparent)] transition-colors hover:text-accent";

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-4" aria-label="Designerama home">
          <Logo height={45} priority />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={navLinkClasses}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
          <Link href={nav.portfolioLink.href} className={navLinkClasses}>
            {nav.portfolioLink.label}
          </Link>
          <Button href={nav.cta.href} variant="solid" className="text-[11px]">
            {nav.cta.label}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 0.2 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5 sm:px-8">
              {nav.links.map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`py-2.5 ${navLinkClasses}`}
                  >
                    {l.label}
                  </a>
                );
              })}
              <Link href={nav.portfolioLink.href} onClick={() => setOpen(false)} className={`py-2.5 ${navLinkClasses}`}>
                {nav.portfolioLink.label}
              </Link>
              <Button href={nav.cta.href} variant="solid" className="mt-2 justify-center text-[11px]" onClick={() => setOpen(false)}>
                {nav.cta.label}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
