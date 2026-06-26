import { getPoets } from "@/lib/api/poets";
import { SitemapItem } from "@/lib/sitemap/types";
import { siteConfig } from "../config/site";

export async function getPoetsSitemap(): Promise<SitemapItem[]> {
  const poets = await getPoets();

  return poets.map((poet) => ({
    url: siteConfig.url+poet.fullUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
}