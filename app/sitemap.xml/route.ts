import { siteConfig } from "@/lib/config/site";

export async function GET() {
  const urls = [
    `${siteConfig.url}/sitemaps/static.xml`,
    `${siteConfig.url}/sitemaps/poets.xml`,
    `${siteConfig.url}/sitemaps/poems.xml`,
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <sitemap>
    <loc>${url}</loc>
  </sitemap>`,
  )
  .join("")}
</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
