"use client";

import { createContext, useContext, useEffect } from "react";

export type Brand = "portfolio" | "designerama";

const BrandContext = createContext<Brand | null>(null);

export function ThemeProvider({ children, brand }: { children: React.ReactNode; brand: Brand }) {
  useEffect(() => {
    document.documentElement.dataset.brand = brand;
  }, [brand]);

  const initScript = `document.documentElement.dataset.brand=${JSON.stringify(brand)};`;

  return (
    <BrandContext.Provider value={brand}>
      {/* eslint-disable-next-line react/no-danger */}
      <script dangerouslySetInnerHTML={{ __html: initScript }} />
      {children}
    </BrandContext.Provider>
  );
}

export function useTheme() {
  const brand = useContext(BrandContext);
  if (!brand) throw new Error("useTheme must be used within a ThemeProvider");
  return { brand };
}
