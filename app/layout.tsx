import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { CursorProvider } from "@/components/shared/CursorProvider";
import { CustomCursor } from "@/components/shared/CustomCursor";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-display-alt",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kishan Rama & Designerama · Product Design, UX Strategy & Consulting",
  description:
    "Kishan Rama's portfolio for recruiters and hiring teams, and Designerama's UX consulting and Verifux for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <GoogleAnalytics />
        <CursorProvider>
          {children}
          <CustomCursor />
        </CursorProvider>
      </body>
    </html>
  );
}
