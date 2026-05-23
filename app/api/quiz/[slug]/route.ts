import { NextResponse } from "next/server";
import { requiredBooks } from "@/lib/books";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const selected = requiredBooks.find((book) => book.slug === params.slug);

  if (!selected) {
    return NextResponse.json({ error: "Kniha nebyla nalezena." }, { status: 404 });
  }

  return NextResponse.json({
    questions: [
      {
        id: `${selected.slug}-q1`,
        question: `Jak bys stručně zařadil/a dílo „${selected.title}“ do maturitní přípravy?`,
        options: [
          "Jako dílo s připravenou strukturou čekající na odborné doplnění.",
          "Jako plně ověřené vydání bez potřeby kontroly.",
          "Jako čistě jazykové cvičení bez literárního kontextu.",
          "Jako nerelevantní text mimo seznam četby."
        ],
        correctIndex: 0,
        explanation:
          "Projekt vědomě nepřidává neověřené literární informace a nechává prostor pro učitelskou revizi."
      }
    ]
  });
}
