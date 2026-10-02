import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { absoluteUrl, isIndexablePath } from "@/lib/seo";

function toLastmod(date: string) {
  return date.slice(0, 10);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = posts.reduce((latest, post) => {
    return post.date > latest ? post.date : latest;
  }, posts[0]?.date ?? new Date().toISOString().slice(0, 10));

  const pages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: toLastmod(latestPostDate),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: toLastmod(latestPostDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: toLastmod(post.date),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
  ];

  return pages.filter((item) => {
    try {
      const path = new URL(item.url).pathname || "/";
      return isIndexablePath(path);
    } catch {
      return false;
    }
  });
}
