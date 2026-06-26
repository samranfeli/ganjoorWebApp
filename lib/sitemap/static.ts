import { siteConfig } from "@/lib/config/site";
import { SitemapItem } from "./types";

export function getStaticSitemap(): SitemapItem[] {
  const lastModified = new Date();

  const staticPages = [
    {
      path: "",
      changeFrequency: "daily",
      priority: 1,
    },

    {
      path: "/random",
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      path: "/faq",
      changeFrequency: "monthly",
      priority: 0.5,
    },

    {
      path: "/privacy",
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      path: "/contact",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ] as const;

  return staticPages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified,
    priority: page.priority,
    changeFrequency: page.changeFrequency,
  }));
}
