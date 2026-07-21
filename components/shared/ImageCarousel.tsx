"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/shared/Lightbox";
import { withBasePath } from "@/lib/basePath";

type CarouselImage = { src: string; alt: string; note?: string; width?: number; height?: number };

type ImageCarouselProps = {
  images: CarouselImage[];
  /** Fixed frame ratio (width, height) shared by every card, the visible window before vertical scroll kicks in. Defaults to each image's own ratio. */
  cropRatio?: [number, number];
};

function MagnifyButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label="View full size"
      className="absolute bottom-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bg/85 text-ink shadow-md backdrop-blur-sm transition-colors hover:bg-bg hover:text-accent"
    >
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="8.5" cy="8.5" r="5.5" />
        <line x1="16" y1="16" x2="12.6" y2="12.6" />
      </svg>
    </button>
  );
}

function ChevronButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30 sm:h-10 sm:w-10"
    >
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path
          d={direction === "left" ? "M12 4l-6 6 6 6" : "M8 4l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function ScrollArrowButton({
  direction,
  onClick,
  className,
}: {
  direction: "up" | "down";
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      onPointerDown={(e) => e.stopPropagation()}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      aria-label={direction === "up" ? "Scroll up" : "Scroll down"}
      className={`absolute z-10 flex h-7 w-7 items-center justify-center rounded-full bg-bg/85 text-ink shadow-md backdrop-blur-sm transition-colors hover:bg-bg hover:text-accent ${className}`}
    >
      <svg width="13" height="13" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === "up" ? <polyline points="4,12 10,6 16,12" /> : <polyline points="4,8 10,14 16,8" />}
      </svg>
    </button>
  );
}

function CarouselCard({ img, rw, rh, onZoom }: { img: CarouselImage; rw: number; rh: number; onZoom: () => void }) {
  const [atBottom, setAtBottom] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [scrollable, setScrollable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 4);
    setAtTop(el.scrollTop <= 4);
    setScrollable(el.scrollHeight > el.clientHeight + 4);
  };

  useEffect(() => {
    updateScrollState();
    // A ResizeObserver on the <img> itself, not just window resize: the
    // wrapper's own box never changes size (fixed height), but the image's
    // box reflows once its real aspect ratio replaces the placeholder ratio
    // on load. `onLoad` alone misses this for images served from cache,
    // where the native load event can fire before React attaches the
    // handler, so scrollHeight would otherwise stay stuck at its pre-load
    // (wrong-ratio) value and the scroll arrows would never appear.
    const ro = new ResizeObserver(() => updateScrollState());
    if (imgRef.current) ro.observe(imgRef.current);
    window.addEventListener("resize", updateScrollState);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScrollState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ top: dir * (scrollRef.current.clientHeight * 0.8), behavior: "smooth" });
  };

  return (
    <div
      className="relative h-[240px] w-auto min-w-[200px] shrink-0 snap-center overflow-hidden rounded-card border border-line bg-paper sm:h-[340px] sm:min-w-[260px] lg:h-[440px] lg:min-w-[300px]"
      style={{ aspectRatio: `${rw} / ${rh}` }}
    >
      <div ref={scrollRef} onScroll={updateScrollState} className="scrollbar-hide h-full w-full overflow-y-auto">
        <Image
          ref={imgRef}
          src={withBasePath(img.src)}
          alt={img.alt}
          width={img.width ?? 1920}
          height={img.height ?? 1241}
          onLoad={updateScrollState}
          className="w-full h-auto"
          sizes="(max-width: 640px) 370px, (max-width: 1024px) 520px, 680px"
          draggable={false}
          loading="eager"
        />
      </div>

      {scrollable && !atTop && (
        <ScrollArrowButton direction="up" onClick={() => scrollByCard(-1)} className="top-2 left-1/2 -translate-x-1/2" />
      )}
      {scrollable && !atBottom && (
        <ScrollArrowButton direction="down" onClick={() => scrollByCard(1)} className="bottom-2 left-1/2 -translate-x-1/2" />
      )}

      <MagnifyButton onClick={onZoom} />
    </div>
  );
}

export function ImageCarousel({ images, cropRatio }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [zoomImage, setZoomImage] = useState<CarouselImage | null>(null);
  const barDragging = useRef(false);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = el.clientWidth / el.scrollWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setThumb({ left: progress * (1 - ratio) * 100, width: ratio * 100 });
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  // Scrolling the carousel is native overflow-x (trackpad swipe, shift+wheel)
  // plus this draggable accent bar, deliberately not a custom drag-to-scroll
  // on the cards themselves, since that competed with the page's own scroll
  // and with each card's internal vertical scroll for the same pointer.
  const scrollToBarPosition = (clientX: number) => {
    const bar = barRef.current;
    const el = trackRef.current;
    if (!bar || !el) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    el.scrollLeft = ratio * (el.scrollWidth - el.clientWidth);
  };

  const handleBarPointerDown = (e: React.PointerEvent) => {
    barDragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    scrollToBarPosition(e.clientX);
    setHasInteracted(true);
  };

  const handleBarPointerMove = (e: React.PointerEvent) => {
    if (!barDragging.current) return;
    scrollToBarPosition(e.clientX);
  };

  const endBarDrag = () => {
    barDragging.current = false;
  };

  const scrollByTrack = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
    setHasInteracted(true);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          ref={trackRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto snap-x snap-mandatory rounded-card [-webkit-overflow-scrolling:touch]"
        >
          {images.map((img) => {
            const [rw, rh] = cropRatio ?? [img.width ?? 1920, img.height ?? 1241];
            return <CarouselCard key={img.src} img={img} rw={rw} rh={rh} onZoom={() => setZoomImage(img)} />;
          })}
        </div>

        <div className="flex items-center gap-3">
          <ChevronButton direction="left" onClick={() => scrollByTrack(-1)} disabled={atStart} />

          <div
            ref={barRef}
            onPointerDown={handleBarPointerDown}
            onPointerMove={handleBarPointerMove}
            onPointerUp={endBarDrag}
            onPointerLeave={endBarDrag}
            className="group relative h-4 flex-1 cursor-pointer touch-none"
          >
            <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-line" />
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent transition-[left,width] duration-150 group-hover:h-2"
              style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
            />
          </div>

          <ChevronButton direction="right" onClick={() => scrollByTrack(1)} disabled={atEnd} />

          <span
            className={`hidden whitespace-nowrap font-mono text-[0.72rem] text-ink-dim transition-opacity duration-500 sm:inline ${
              hasInteracted ? "opacity-0" : "opacity-100"
            }`}
          >
            Drag to explore
          </span>
        </div>
      </div>

      <AnimatePresence>
        {zoomImage && (
          <Lightbox src={zoomImage.src} alt={zoomImage.alt} onClose={() => setZoomImage(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
