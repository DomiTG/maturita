import { unstable_cache } from "next/cache";
import { analysisTemplate, requiredBooks } from "@/lib/books";

export type CatalogBook = {
  id: string;
  slug: string;
  title: string;
  author: string;
  verificationNote: string;
};

export const getBooks = unstable_cache(
  async (): Promise<CatalogBook[]> => {
    return requiredBooks.map((book) => ({
      id: book.slug,
      slug: book.slug,
      title: book.title,
      author: book.author,
      verificationNote: analysisTemplate.verificationNote
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
      analysis: analysisTemplate
    };
  },
  ["book-by-slug"],
  { revalidate: 3600 }
);
