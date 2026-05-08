import type { APIRoute } from "astro";

const SITE_URL = "https://www.lamatera.app";
const currentDate = new Date().toISOString().split("T")[0];

const pages = [
  { loc: "/", priority: "1.0", changefreq: "daily", lang: "es" },
  { loc: "/en/", priority: "0.9", changefreq: "daily", lang: "en" },
  { loc: "/ko/", priority: "0.9", changefreq: "daily", lang: "ko" },
  { loc: "/zh/", priority: "0.9", changefreq: "daily", lang: "zh" },
  { loc: "/ja/", priority: "0.9", changefreq: "daily", lang: "ja" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en/" />
    <xhtml:link rel="alternate" hreflang="ko" href="${SITE_URL}/ko/" />
    <xhtml:link rel="alternate" hreflang="zh" href="${SITE_URL}/zh/" />
    <xhtml:link rel="alternate" hreflang="ja" href="${SITE_URL}/ja/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>`
  )
  .join("\n")}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};