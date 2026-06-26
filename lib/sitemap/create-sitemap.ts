import { SitemapItem } from "./types";

export function createSitemap(items: SitemapItem[]) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items
  .map((item) => {
    const lastModified =
      item.lastModified instanceof Date
        ? item.lastModified.toISOString()
        : item.lastModified;
    return `
  <url>
    <loc>${item.url}</loc>
    ${lastModified ? `<lastmod>${lastModified}</lastmod>` : ""}
    ${item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : ""}
    ${item.priority != null ? `<priority>${item.priority}</priority>` : ""}
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}