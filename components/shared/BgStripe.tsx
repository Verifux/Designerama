export function BgStripe() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none bg-cover bg-center transition-opacity duration-500"
      style={{
        backgroundImage: "url(/images/stripe-bg.png)",
        opacity: "var(--stripe-opacity)",
      }}
    />
  );
}
