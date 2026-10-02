import { NextResponse } from "next/server";
import { posts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function lastmod(date: string) {
  return date.slice(0, 10);
}

function xmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const latestPostDate = posts.reduce((latest, post) => {
    return post.date > latest ? post.date : latest;
  }, posts[0]?.date ?? new Date().toISOString().slice(0, 10));

  const urls = [
    {
      loc: `${absoluteUrl("/")}/`,
      lastmod: lastmod(latestPostDate),
      changefreq: "daily",
      priority: "1.0",
    },
    {
      loc: absoluteUrl("/blog"),
      lastmod: lastmod(latestPostDate),
      changefreq: "weekly",
      priority: "0.8",
    },
    ...posts.map((post) => ({
      loc: absoluteUrl(`/blog/${post.slug}`),
      lastmod: lastmod(post.date),
      changefreq: "weekly",
      priority: "0.5",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${xmlEscape(item.loc)}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
