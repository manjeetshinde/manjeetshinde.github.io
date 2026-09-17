import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

// Required for output: "export" metadata routes.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/work/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
