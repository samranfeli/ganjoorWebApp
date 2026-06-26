import { createSitemap } from "@/lib/sitemap/create-sitemap";
import { getStaticSitemap } from "@/lib/sitemap/static";

export async function GET() {
  return createSitemap(getStaticSitemap());
}