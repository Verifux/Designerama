"use client";

import { useEffect, useState } from "react";

function formatTime() {
  const now = new Date().toLocaleTimeString("en-ZA", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `Johannesburg, ZA · ${now}`;
}

export function JoburgClock() {
  const [label, setLabel] = useState("Johannesburg, ZA");

  useEffect(() => {
    setLabel(formatTime());
    const id = setInterval(() => setLabel(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-[0.8rem] tracking-[0.05em] text-ink-dim">{label}</span>;
}
