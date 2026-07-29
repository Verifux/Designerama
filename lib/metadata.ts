// Site-wide OpenGraph defaults, spread into per-page openGraph overrides.
// Next 14's metadata merge replaces `openGraph` wholesale rather than merging
// fields, so pages that provide their own openGraph must spread these to
// preserve site-wide type/siteName/locale.
export const OG_DEFAULTS = {
  type: "website" as const,
  siteName: "Designerama",
  locale: "en_US",
};
