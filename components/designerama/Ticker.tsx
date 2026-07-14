import { ticker } from "@/lib/content/designerama";

function Track() {
  return (
    <span className="inline-flex shrink-0 gap-11 pr-11">
      {ticker.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim">
          <span className="h-1 w-1 bg-accent" />
          {item}
        </span>
      ))}
    </span>
  );
}

export function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-line py-3.5">
      <div className="inline-flex w-max animate-ticker motion-reduce:animate-none">
        <Track />
        <Track />
      </div>
    </div>
  );
}
