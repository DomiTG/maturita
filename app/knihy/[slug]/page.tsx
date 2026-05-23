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
    description: `Maturitní příprava pro dílo ${book.title} včetně shrnutí, témat a literárního kontextu.`
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
      <Card className="space-y-4">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Detail knihy</p>
        <h1 className="text-3xl font-semibold tracking-tight">{book.title}</h1>
        <p className="text-muted-foreground">{book.author}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-border px-2 py-1">{book.enrichment.genre}</span>
          <span className="rounded-full border border-border px-2 py-1">
            {book.enrichment.literaryPeriod}
          </span>
          <span className="rounded-full border border-border px-2 py-1">
            {book.enrichment.literaryMovement}
          </span>
          <span className="rounded-full border border-border px-2 py-1">{book.enrichment.year}</span>
        </div>
        <p className="text-sm text-muted-foreground">{book.analysis.verificationNote}</p>
        <Link
          href="/zkouseni"
          className="inline-flex w-fit rounded-md border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          Spustit AI ústní zkoušení
        </Link>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">Stručný obsah</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {book.analysis.additionalContent.strucnyObsah}
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border/80 p-4">
            <h3 className="text-sm font-semibold">Prostředí</h3>
            <p className="mt-1 text-sm text-muted-foreground">{book.enrichment.setting}</p>
          </div>
          <div className="rounded-lg border border-border/80 p-4">
            <h3 className="text-sm font-semibold">Klíčové postavy</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {book.enrichment.keyCharacters.join(", ")}
            </p>
          </div>
        </div>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-xl font-semibold">A/B struktura k maturitě</h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-border/80 p-4">
            <p className="text-sm font-semibold">A) Charakteristika uměleckého textu</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>{book.analysis.officialStructure.A.I.temaVynatkuACelehoDila}</li>
              <li>{book.analysis.officialStructure.A.I.casAProstor}</li>
              <li>{book.analysis.officialStructure.A.II.hlavniAVedlejsiPostavy}</li>
              <li>{book.analysis.officialStructure.A.III.jazykoveProstredkyAFunkce}</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/80 p-4">
            <p className="text-sm font-semibold">B) Literárněhistorický kontext</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>{book.analysis.officialStructure.B.literarniSmer}</li>
              <li>{book.analysis.officialStructure.B.znakyLiterarnihoObdobi}</li>
              <li>{book.analysis.officialStructure.B.dalsiVyznacniAutoriStejnehoObdobi}</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Maturitní tipy</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {book.enrichment.maturityTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Flashcards items={book.analysis.additionalContent.flashcards} />
      <QuizWidget slug={book.slug} />
    </section>
  );
}
