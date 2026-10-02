import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { absoluteUrl, isIndexablePath } from "@/lib/seo";

type SitemapEntry = MetadataRoute.Sitemap[number];

function entry(
  path: string,
  options: Pick<SitemapEntry, "changeFrequency" | "priority" | "lastModified">,
): SitemapEntry | null {
  if (!isIndexablePath(path)) return null;

  return {
    url: absoluteUrl(path),
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPostDate = posts.reduce<string | null>((latest, post) => {
    if (!latest || post.date > latest) return post.date;
    return latest;
  }, null);

  const routes = [
    entry("/", {
      changeFrequency: "daily",
      priority: 1,
      lastModified: latestPostDate ? new Date(latestPostDate) : new Date(),
    }),
    entry("/blog", {
      changeFrequency: "weekly",
      priority: 0.8,
      lastModified: latestPostDate ? new Date(latestPostDate) : new Date(),
    }),
    ...posts.map((post) =>
      entry(`/blog/${post.slug}`, {
        changeFrequency: "weekly",
        priority: 0.5,
        lastModified: new Date(post.date),
      }),
    ),
  ];

  return routes.filter((item): item is SitemapEntry => item !== null);
}
