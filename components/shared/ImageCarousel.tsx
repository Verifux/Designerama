"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { Lightbox } from "@/components/shared/Lightbox";
import { withBasePath } from "@/lib/basePath";

type CarouselImage = { src: string; alt: string; note?: string; width?: number; height?: number };

type ImageCarouselProps = {
  images: CarouselImage[];
  /** Force every card to a shared crop ratio (width, height) instead of each image's own ratio. Use when the source set has inconsistent proportions. */
  cropRatio?: [number, number];
};

export function ImageCarousel({ images, cropRatio }: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });
  const [hasInteracted, setHasInteracted] = useState(false);
  const [zoomImage, setZoomImage] = useState<CarouselImage | null>(null);
  const dragState = useRef<{ startX: number; scrollLeft: number; dragging: boolean; distance: number } | null>(null);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = el.clientWidth / el.scrollWidth;
    const progress = max > 0 ? el.scrollLeft / max : 0;
    setThumb({ left: progress * (1 - ratio) * 100, width: ratio * 100 });
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

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    dragState.current = { startX: e.clientX, scrollLeft: el.scrollLeft, dragging: true, distance: 0 };
    el.setPointerCapture(e.pointerId);
    setHasInteracted(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const state = dragState.current;
    const el = trackRef.current;
    if (!state?.dragging || !el) return;
    const delta = e.clientX - state.startX;
    state.distance = Math.max(state.distance, Math.abs(delta));
    el.scrollLeft = state.scrollLeft - delta;
  };

  const endDrag = () => {
    if (dragState.current) dragState.current.dragging = false;
  };

  const handleCardClick = (img: CarouselImage) => {
    if ((dragState.current?.distance ?? 0) > 6) return;
    setZoomImage(img);
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <div
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onScroll={() => setHasInteracted(true)}
          className="scrollbar-hide flex select-none gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-card [-webkit-overflow-scrolling:touch] cursor-grab active:cursor-grabbing"
        >
          {images.map((img) => {
            const [rw, rh] = cropRatio ?? [img.width ?? 1920, img.height ?? 1241];
            return (
              <div
                key={img.src}
                className="group relative h-[240px] shrink-0 snap-center overflow-hidden rounded-card border border-line bg-paper sm:h-[340px] lg:h-[440px]"
                style={{ aspectRatio: `${rw} / ${rh}` }}
                onClick={() => handleCardClick(img)}
                role="button"
                tabIndex={0}
                aria-label={`View full size, ${img.alt}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setZoomImage(img);
                }}
              >
                <Image
                  src={withBasePath(img.src)}
                  alt={img.alt}
                  width={img.width ?? rw}
                  height={img.height ?? rh}
                  className="h-full w-auto object-cover"
                  sizes="(max-width: 640px) 370px, (max-width: 1024px) 520px, 680px"
                  draggable={false}
                  loading="eager"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all group-hover:bg-ink/10 group-hover:opacity-100"
                >
                  <span className="rounded-full bg-bg/85 px-3 py-1.5 font-mono text-[0.7rem] text-ink shadow-md backdrop-blur-sm">
                    Click to view full size
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-line">
            <div
              className="absolute inset-y-0 rounded-full bg-accent transition-[left] duration-150"
              style={{ left: `${thumb.left}%`, width: `${thumb.width}%` }}
            />
          </div>
          <span
            className={`whitespace-nowrap font-mono text-[0.72rem] text-ink-dim transition-opacity duration-500 ${
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
