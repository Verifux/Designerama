"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={className}
    >
      {theme === "dark" ? "◐" : "◑"}
    </button>
  );
}
