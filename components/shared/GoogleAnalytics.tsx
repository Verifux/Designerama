import Script from "next/script";

// Reads NEXT_PUBLIC_GA_MEASUREMENT_ID at build time. Renders nothing until a
// real GA4 property ID (format: G-XXXXXXXXXX) is supplied — the site's old
// Universal Analytics ID (UA-18944179-2) is dead: UA stopped collecting data
// on 2023-07-01, and its ga.js loader was retired years before that.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
