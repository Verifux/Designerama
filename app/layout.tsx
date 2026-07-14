import type { Metadata } from "next";
import { Big_Shoulders_Display, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
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
  title: "Kishan Rama & Designerama — Product Design, UX Strategy & Consulting",
  description:
    "One practice, two doors. Kishan Rama's portfolio for recruiters and hiring teams, and Designerama's UX consulting and Verifux for businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
