"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type MenuLink = { label: string; href: string; external?: boolean };

type Props = {
  open: boolean;
  onClose: () => void;
  links: MenuLink[];
  secondaryLinks?: MenuLink[];
  cta: { label: string; href: string };
  ghost?: string;
};

/**
 * Full-screen mobile menu takeover. The trigger button lives in the Nav bar
 * (z-50) and stays visible above this overlay (z-40), morphing into a close
 * icon — mirroring the reference pattern of logo + Close staying in place
 * while the menu owns the whole viewport.
 */
export function MobileMenu({ open, onClose, links, secondaryLinks = [], cta, ghost }: Props) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Release the scroll lock synchronously, before the browser processes the
  // link's default hash navigation — otherwise the jump to #section is
  // silently swallowed while body overflow is still "hidden".
  const handleNavigate = () => {
    document.body.style.overflow = "";
    onClose();
  };

  const listVariants = {
    open: { transition: { staggerChildren: reduce ? 0 : 0.06, delayChildren: reduce ? 0 : 0.12 } },
    closed: {},
  };
  const itemVariants = {
    open: { y: 0, opacity: 1, transition: reduce ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
    closed: { y: 28, opacity: 0, transition: { duration: 0 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-bg md:hidden"
        >
          <motion.nav
            variants={listVariants}
            initial="closed"
            animate="open"
            className="flex flex-1 flex-col items-center justify-center gap-1 px-6"
          >
            {links.map((l) => (
              <motion.div key={l.href} variants={itemVariants}>
                <a
                  href={l.href}
                  onClick={handleNavigate}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="block py-2 text-center font-display text-[clamp(2rem,9vw,2.7rem)] font-bold tracking-[-0.02em] text-ink transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href={cta.href}
                onClick={handleNavigate}
                className="border-b-2 border-ink pb-1 text-[1.3rem] font-semibold tracking-[-0.01em] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {cta.label}
              </a>
            </motion.div>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={reduce ? { duration: 0 } : { delay: 0.3, duration: 0.4 }}
            className="relative px-6 pb-12"
          >
            {secondaryLinks.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3">
                {secondaryLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={handleNavigate}
                    className="inline-flex items-center justify-center rounded-pill border border-[color-mix(in_srgb,var(--ink)_35%,transparent)] px-7 py-3 font-mono text-[0.85rem] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>

          {ghost && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 w-full select-none overflow-hidden"
            >
              <p className="translate-y-[30%] whitespace-nowrap font-display text-[24vw] font-black leading-none tracking-[-0.03em] text-ink opacity-[0.05]">
                {ghost}
              </p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
