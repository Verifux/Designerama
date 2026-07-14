import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        "ink-dim": "var(--ink-dim)",
        line: "var(--line)",
        accent: "var(--accent)",
        "accent-deep": "var(--accent-deep)",
        "accent-light": "var(--accent-light)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        lg2: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },
      maxWidth: {
        container: "1180px",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(.16,.84,.24,1)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        ticker: "marquee 48s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
