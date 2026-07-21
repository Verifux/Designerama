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

function ScrollArrowButton({
  direction,
  onClick,
  className,
}: {
  direction: "up" | "down" | "left" | "right";
  onClick: () => void;
  className: string;
}) {
  const points: Record<typeof direction, string> = {
    up: "4,12 10,6 16,12",
    down: "4,8 10,14 16,8",
    left: "12,4 6,10 12,16",
    right: "8,4 14,10 8,16",
  };
  const label: Record<typeof direction, string> = {
    up: "Scroll up",
    down: "Scroll down",
    left: "Scroll left",
    right: "Scroll right",
  };
  return (
    <button
      type="button"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={label[direction]}
      className={`absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-bg/85 text-ink shadow-md backdrop-blur-sm transition-colors hover:bg-bg hover:text-accent ${className}`}
    >
      <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points={points[direction]} />
      </svg>
    </button>
  );
}

export function PrototypeViewer({ image, orientation = "vertical" }: PrototypeViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);
  const [scrollable, setScrollable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const horizontal = orientation === "horizontal";

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (horizontal) {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
      setScrollable(el.scrollWidth > el.clientWidth + 4);
    } else {
      setAtStart(el.scrollTop <= 4);
      setAtEnd(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
      setScrollable(el.scrollHeight > el.clientHeight + 4);
    }
  };

  useEffect(() => {
    updateScrollState();
    const ro = new ResizeObserver(() => updateScrollState());
    if (imgRef.current) ro.observe(imgRef.current);
    window.addEventListener("resize", updateScrollState);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScrollState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [horizontal]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || horizontal) return;
    // Vertical orientation shares its scroll axis with the page, so a wheel
    // over the frame must always scroll the page, not the frame itself, or
    // hovering a tall image traps page scroll until the frame's own scroll
    // is exhausted. Horizontal orientation doesn't share an axis with the
    // page, so it's left to scroll natively. React's onWheel prop is
    // registered passive (can't call preventDefault), so this needs a real
    // native listener attached with { passive: false }.
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: "instant" as ScrollBehavior });
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [horizontal]);

  const scrollByViewer = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    if (horizontal) {
      el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
    } else {
      el.scrollBy({ top: dir * (el.clientHeight * 0.8), behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          className="relative aspect-video cursor-zoom-in overflow-hidden rounded-card border border-line bg-paper"
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to view full size"
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxOpen(true); }}
        >
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className={
              horizontal
                ? "scrollbar-hide h-full w-full overflow-x-auto overscroll-contain"
                : "scrollbar-hide h-full overflow-y-auto overscroll-contain"
            }
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
          >
            <Image
              ref={imgRef}
              src={withBasePath(image.src)}
              alt={image.alt}
              width={image.width ?? 2400}
              height={image.height ?? 3240}
              className={horizontal ? "h-full w-auto max-w-none" : "w-full"}
              sizes={horizontal ? undefined : "(max-width: 768px) 100vw, 900px"}
              onLoad={updateScrollState}
              draggable={false}
              loading="eager"
            />
          </div>

          {scrollable && !atStart && (
            <ScrollArrowButton
              direction={horizontal ? "left" : "up"}
              onClick={() => scrollByViewer(-1)}
              className={horizontal ? "left-2 top-1/2 -translate-y-1/2" : "top-2 left-1/2 -translate-x-1/2"}
            />
          )}
          {scrollable && !atEnd && (
            <ScrollArrowButton
              direction={horizontal ? "right" : "down"}
              onClick={() => scrollByViewer(1)}
              className={horizontal ? "right-2 top-1/2 -translate-y-1/2" : "bottom-2 left-1/2 -translate-x-1/2"}
            />
          )}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg/85 text-ink shadow-md backdrop-blur-sm"
          >
            <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <line x1="16" y1="16" x2="12.6" y2="12.6" />
            </svg>
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
