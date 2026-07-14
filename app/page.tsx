import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BgStripe } from "@/components/shared/BgStripe";
import { PortalDoors } from "@/components/portal/PortalDoors";
import { JoburgClock } from "@/components/portal/JoburgClock";

export default function PortalPage() {
  return (
    <ThemeProvider brand="portal" storageKey="kr-theme" defaultTheme="dark">
      <BgStripe />
      <div className="relative z-[1] overflow-y-auto md:h-screen md:overflow-hidden">
        <div className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-6 py-5 sm:px-10">
          <span className="font-mono text-[0.78rem] tracking-[0.05em] text-ink">Kishan Rama · Designerama</span>
          <JoburgClock />
          <ThemeToggle className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent" />
        </div>

        <PortalDoors />

        <div className="fixed inset-x-0 bottom-0 z-[60] flex flex-wrap items-center justify-between gap-2 px-6 py-4 mix-blend-difference sm:px-10 md:static md:mix-blend-normal">
          <span className="font-mono text-[0.72rem] text-ink-dim">© Kishan Rama / Designerama, Johannesburg</span>
          <span className="font-mono text-[0.72rem] text-ink-dim">kishan@designerama.co.za</span>
        </div>
      </div>
    </ThemeProvider>
  );
}
