import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { QuizWidget } from "@/components/quiz-widget";
import { Flashcards } from "@/components/flashcards";
import { getBookBySlug, getBooks } from "@/lib/content";

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return { title: "Kniha nenalezena" };
  }

  return {
    title: `${book.title} — maturitní rozbor`,
    description: `Maturitní příprava pro dílo ${book.title}.`
  };
}

export default async function BookDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <Card className="space-y-2">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-muted-foreground">{book.author}</p>
        <p className="text-sm text-muted-foreground">{book.analysis.verificationNote}</p>
        <Link href="/zkouseni" className="text-sm underline">
          Spustit AI ústní zkoušení pro náhodně vybranou knihu
        </Link>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">A) Charakteristika uměleckého textu</h2>
        <p className="text-sm text-muted-foreground">
          I. část, II. část i III. část jsou připravené dle oficiální struktury.
        </p>
        <pre className="overflow-x-auto whitespace-pre-wrap rounded-md bg-muted p-3 text-xs">
          {JSON.stringify(book.analysis.officialStructure, null, 2)}
        </pre>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">B) Literárněhistorický kontext + doplňkový obsah</h2>
        <pre className="overflow-x-auto whitespace-pre-wrap rounded-md bg-muted p-3 text-xs">
          {JSON.stringify(book.analysis.additionalContent, null, 2)}
        </pre>
      </Card>

      <Flashcards items={book.analysis.additionalContent.flashcards} />
      <QuizWidget slug={book.slug} />
    </section>
  );
}
