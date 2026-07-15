"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  driftSeed: number;
};

function makeParticles(width: number, height: number, count: number): Particle[] {
  // scatter particles into a handful of loose organic clusters rather than
  // a uniform grid, so the field reads as texture, not a pattern
  const clusters = 6;
  const centers = Array.from({ length: clusters }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    spread: 140 + Math.random() * 260,
  }));

  return Array.from({ length: count }, () => {
    const c = centers[Math.floor(Math.random() * centers.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * c.spread * Math.sqrt(Math.random());
    return {
      x: c.x + Math.cos(angle) * dist,
      y: c.y + Math.sin(angle) * dist,
      r: 0.8 + Math.random() * 2.2,
      baseOpacity: 0.2 + Math.random() * 0.5,
      driftSeed: Math.random() * Math.PI * 2,
    };
  });
}

export function AmbientDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = makeParticles(width, height, Math.min(640, Math.floor((width * height) / 2600)));
    let scrollOffset = 0;
    let smoothScrollOffset = 0;
    let zoomTarget = 1;
    let zoom = 1;
    let raf = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = makeParticles(width, height, Math.min(640, Math.floor((width * height) / 2600)));
    };
    resize();

    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue("--accent").trim() || "#cc2a3f";

    const draw = (t: number) => {
      smoothScrollOffset += (scrollOffset - smoothScrollOffset) * 0.06;
      zoom += (zoomTarget - zoom) * 0.04;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      const cx = width / 2;
      const cy = height / 2;
      ctx.translate(cx, cy);
      ctx.scale(zoom, zoom);
      ctx.translate(-cx, -cy);
      ctx.fillStyle = accent;
      for (const p of particles) {
        const drift = reduce ? 0 : Math.sin(t / 3400 + p.driftSeed) * 9;
        const py = p.y + drift + smoothScrollOffset;
        if (py < -20 / zoom || py > (height + 20) / zoom) continue;
        ctx.globalAlpha = p.baseOpacity;
        ctx.beginPath();
        ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const onScroll = () => {
      scrollOffset = window.scrollY * -0.04;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? window.scrollY / docH : 0;
      zoomTarget = 1 + pct * 0.35;
      if (reduce) draw(0);
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: "var(--dots-opacity, 0.5)" }}
    />
  );
}
