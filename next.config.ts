import type { NextConfig } from "next";

const xmlHeaders = [
  { key: "Content-Type", value: "text/xml; charset=utf-8" },
  { key: "Content-Disposition", value: "inline" },
  { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600" },
  { key: "X-Content-Type-Options", value: "nosniff" },
];

const nextConfig: NextConfig = {
  trailingSlash: false,
  async headers() {
    return [
      { source: "/sitemap.xml", headers: xmlHeaders },
      { source: "/sitemap-pages.xml", headers: xmlHeaders },
      {
        source: "/sitemap.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },
};

export default nextConfig;
