"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type Brand = "portfolio" | "designerama" | "portal";

type ThemeContextValue = {
  theme: Theme;
  brand: Brand;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  brand,
  storageKey,
  defaultTheme,
}: {
  children: React.ReactNode;
  brand: Brand;
  storageKey: string;
  defaultTheme: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(storageKey);
    } catch {
      // ignore
    }
    const initial: Theme = stored === "light" || stored === "dark" ? stored : defaultTheme;
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    document.documentElement.dataset.brand = brand;
  }, [brand, storageKey, defaultTheme]);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // ignore
    }
  };

  const initScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
    storageKey
  )});if(t!=='light'&&t!=='dark'){t=${JSON.stringify(defaultTheme)};}document.documentElement.dataset.theme=t;document.documentElement.dataset.brand=${JSON.stringify(
    brand
  )};}catch(e){document.documentElement.dataset.theme=${JSON.stringify(
    defaultTheme
  )};document.documentElement.dataset.brand=${JSON.stringify(brand)};}})();`;

  return (
    <ThemeContext.Provider value={{ theme, brand, toggle }}>
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
