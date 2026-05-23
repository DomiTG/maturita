import type { MetadataRoute } from "next";
import { requiredBooks } from "@/lib/books";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://example.com";

  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/knihy`, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/zkouseni`, changeFrequency: "weekly", priority: 0.8 },
    ...requiredBooks.map((book) => ({
      url: `${baseUrl}/knihy/${book.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
