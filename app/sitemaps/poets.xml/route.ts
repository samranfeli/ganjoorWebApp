import { getPoetsSitemap } from "@/lib/sitemap";
import { createSitemap } from "@/lib/sitemap/create-sitemap";

export async function GET() {
  const items = await getPoetsSitemap();

  return createSitemap(items);
}