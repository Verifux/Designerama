import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

export function Logo({ height, priority }: { height: number; priority?: boolean }) {
  const padding = Math.round(height * 0.32);

  return (
    <span className="inline-flex items-center" style={{ backgroundColor: "#cc2a3f", padding: `${padding * 0.6}px ${padding}px` }}>
      <Image
        src={withBasePath("/images/logo-mark-dark.png")}
        alt="Designerama"
        width={104}
        height={36}
        style={{ height, width: "auto" }}
        className="block"
        priority={priority}
      />
    </span>
  );
}
