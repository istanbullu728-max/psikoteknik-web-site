const SITE_ORIGIN = "https://hataydefnepsikoteknik.com";

const EXCLUDED_PATH_PREFIXES = [
  "/api",
  "/admin",
  "/dashboard",
  "/login",
  "/tesekkur",
  "/tesekkurler",
  "/thank-you",
  "/404",
  "/_next",
] as const;

export const indexFollow = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
} as const;

export function getSiteUrl() {
  return SITE_ORIGIN;
}

export function absoluteUrl(path: string) {
  const origin = getSiteUrl();
  if (!path || path === "/") return origin;

  const normalized = (path.startsWith("/") ? path : `/${path}`).replace(/\/+$/, "");
  return `${origin}${normalized}`;
}

export function isIndexablePath(path: string) {
  const normalized = (path.split("?")[0] ?? "/").split("#")[0] || "/";
  return !EXCLUDED_PATH_PREFIXES.some(
    (prefix) => normalized === prefix || normalized.startsWith(`${prefix}/`),
  );
}
