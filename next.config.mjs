/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "true";
// NEXT_PUBLIC_ prefix required so lib/basePath.ts can read this value in
// client bundles too (see that file for why it's needed at all).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  ...(isStaticExport
    ? {
        output: "export",
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
        ...(basePath && { basePath, assetPrefix: basePath }),
      }
    : {
        images: {
          formats: ["image/avif", "image/webp"],
        },
        async redirects() {
          return [
            {
              source: "/designerama",
              destination: "/",
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
