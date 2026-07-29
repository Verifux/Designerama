"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export function Accordion({
  defaultOpen = true,
  header,
  children,
  label = "Toggle section",
}: {
  defaultOpen?: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
  label?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const contentId = useId();

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={contentId}
        aria-label={label}
        className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent sm:h-14 sm:w-14"
      >
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          width="22"
          height="22"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      {header}

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={contentId}
            role="region"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
