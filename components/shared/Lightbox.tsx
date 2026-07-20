"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

type LightboxProps = {
  src: string;
  alt: string;
  tall?: boolean;
  wide?: boolean;
  onClose: () => void;
};

export function Lightbox({ src, alt, tall, wide, onClose }: LightboxProps) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="5" y1="5" x2="15" y2="15" />
          <line x1="15" y1="5" x2="5" y2="15" />
        </svg>
      </button>

      <div
        className={
          tall
            ? "max-h-[95vh] max-w-[95vw] overflow-y-auto overscroll-contain rounded-lg"
            : wide
              ? "max-h-[95vh] max-w-[95vw] overflow-x-auto overscroll-contain rounded-lg"
              : "flex items-center justify-center"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath(src)}
          alt={alt}
          className={
            tall
              ? "w-full max-w-[1200px]"
              : wide
                ? "h-[85vh] w-auto max-w-none"
                : "max-h-[95vh] max-w-[95vw] rounded-lg object-contain"
          }
        />
      </div>
    </motion.div>
  );
}
