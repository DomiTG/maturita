import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getBooks } from "@/lib/content";

export const revalidate = 3600;

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Knihovna</p>
        <h1 className="text-3xl font-semibold tracking-tight">Seznam maturitních knih</h1>
        <p className="max-w-2xl text-muted-foreground">
          U každé knihy je doplněné stručné shrnutí, literární kontext a praktické
          body pro ústní část maturity.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {books.map((book) => (
          <Link href={`/knihy/${book.slug}`} key={book.slug}>
            <Card className="h-full space-y-3 transition hover:-translate-y-0.5">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {book.author} · {book.year}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{book.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-border px-2 py-1">{book.genre}</span>
                <span className="rounded-full border border-border px-2 py-1">
                  {book.literaryPeriod}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Zdroj: {book.source}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
