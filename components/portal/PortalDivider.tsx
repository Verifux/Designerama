export function PortalDivider() {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[5] hidden -translate-x-1/2 items-center justify-center border-x border-line py-10 md:flex">
      <span className="portal-divider-text font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink-dim">
        One practice — two doors — one practice — two doors
      </span>
    </div>
  );
}
