// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ganjoor-pwa.netlify.app",
      lastModified: new Date(),
    },
  ];
}