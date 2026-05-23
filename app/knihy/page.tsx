import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getBooks } from "@/lib/content";

export const revalidate = 3600;

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Seznam povinně připravených knih</h1>
      <p className="text-muted-foreground">
        Všechny položky obsahují kompletní maturitní strukturu. Konkrétní fakta
        se doplňují pouze po ověření důvěryhodnými zdroji.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {books.map((book) => (
          <Link href={`/knihy/${book.slug}`} key={book.slug}>
            <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-xl">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <p className="mt-3 text-xs text-muted-foreground">{book.verificationNote}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
