import type { MetadataRoute } from "next";
import { workItems } from "@/lib/content/work";

const BASE_URL = "https://designerama.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyRoutes = workItems
    .filter((item) => item.caseStudy)
    .map((item) => ({
      url: `${BASE_URL}/portfolio/${item.slug}`,
      lastModified: new Date(),
    }));

  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), priority: 0.9 },
    ...caseStudyRoutes,
  ];
}
