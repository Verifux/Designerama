import Script from "next/script";

// GA4 property Kishan created for this site. Not a secret (Measurement IDs
// are visible in any page's source), so it's a plain default rather than
// requiring an env var to be remembered at every build. Override with
// NEXT_PUBLIC_GA_MEASUREMENT_ID if a different property is ever needed (e.g.
// a staging environment). The site's old Universal Analytics ID
// (UA-18944179-2) is dead: UA stopped collecting data on 2023-07-01, and its
// ga.js loader was retired years before that.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-3C5292GLX7";

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
