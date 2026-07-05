import { SITE_URL } from "@/lib/constants";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`,        lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${SITE_URL}/terms`,   lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
