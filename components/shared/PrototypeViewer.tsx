"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/shared/Lightbox";
import { withBasePath } from "@/lib/basePath";

type PrototypeViewerProps = {
  image: { src: string; alt: string; note?: string; width?: number; height?: number };
  /** Scroll axis for the oversized image. "vertical" (default) for tall prototypes, "horizontal" for wide panoramas/mobile-screen montages. */
  orientation?: "vertical" | "horizontal";
};

export function PrototypeViewer({ image, orientation = "vertical" }: PrototypeViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const horizontal = orientation === "horizontal";

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      if (horizontal) {
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 20);
      } else {
        setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 20);
      }
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [horizontal]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-card border border-line bg-paper"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to view full size"
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxOpen(true); }}
        >
          <div
            ref={scrollRef}
            className={horizontal ? "h-full w-full overflow-x-auto overscroll-contain" : "h-full overflow-y-auto overscroll-contain"}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
          >
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              width={image.width ?? 2400}
              height={image.height ?? 3240}
              className={horizontal ? "h-full w-auto max-w-none" : "w-full"}
              sizes={horizontal ? undefined : "(max-width: 768px) 100vw, 900px"}
              draggable={false}
              loading="eager"
            />
          </div>

          <div
            aria-hidden="true"
            className={
              horizontal
                ? `pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[var(--paper)]/70 to-transparent transition-opacity duration-300 ${atEnd ? "opacity-0" : "opacity-100"}`
                : `pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--paper)]/70 to-transparent transition-opacity duration-300 ${atEnd ? "opacity-0" : "opacity-100"}`
            }
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
          >
            <span className="rounded-full bg-bg/80 px-4 py-2 font-mono text-[0.78rem] text-ink shadow-md backdrop-blur-sm">
              Click to view full size
            </span>
          </div>
        </div>

        {image.note && (
          <span className="text-center font-mono text-[0.72rem] text-ink-dim">{image.note}</span>
        )}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            src={image.src}
            alt={image.alt}
            tall={!horizontal}
            wide={horizontal}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
