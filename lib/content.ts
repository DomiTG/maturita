import { unstable_cache } from "next/cache";
import { createBookAnalysis, getBookEnrichment, requiredBooks } from "@/lib/books";

export type CatalogBook = {
  id: string;
  slug: string;
  title: string;
  author: string;
  year: string;
  genre: string;
  literaryPeriod: string;
  summary: string;
  source: string;
  verificationNote: string;
};

export const getBooks = unstable_cache(
  async (): Promise<CatalogBook[]> => {
    return requiredBooks.map((book) => ({
      ...book,
      id: book.slug,
      ...getBookEnrichment(book.slug),
      verificationNote: createBookAnalysis(getBookEnrichment(book.slug)).verificationNote
    }));
  },
  ["books-catalog"],
  { revalidate: 3600 }
);

export const getBookBySlug = unstable_cache(
  async (slug: string) => {
    const book = requiredBooks.find((item) => item.slug === slug);

    if (!book) {
      return null;
    }

    return {
      ...book,
      enrichment: getBookEnrichment(book.slug),
      analysis: createBookAnalysis(getBookEnrichment(book.slug))
    };
  },
  ["book-by-slug"],
  { revalidate: 3600 }
);
