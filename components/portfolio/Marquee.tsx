import { marqueeItems } from "@/lib/content/portfolio";

function Track() {
  return (
    <span className="flex shrink-0 items-center gap-10 pr-10">
      {marqueeItems.map((item, i) => (
        <span key={i} className="flex items-center gap-10 text-[1.4rem] font-bold uppercase text-ink">
          {item}
          <em className="not-italic text-accent">—</em>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="group overflow-hidden border-b border-line bg-paper py-6">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <Track />
        <Track />
      </div>
    </div>
  );
}
