// next/image does not auto-prepend basePath to local image `src` strings
// when output: "export" + images.unoptimized are set (confirmed empirically
// on Next 14.2.18). Every hardcoded "/images/..." src must be run through
// this helper so subpath deploys (e.g. designerama.co.za/new/) resolve
// assets correctly. NEXT_PUBLIC_ prefix required so the value is inlined
// into both server and client bundles at build time.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`;
}
