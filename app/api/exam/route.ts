import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { requiredBooks } from "@/lib/books";

const requestSchema = z.object({
  bookSlug: z.string(),
  answer: z.string().optional(),
  history: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string().optional(),
        score: z.number().optional()
      })
    )
    .default([]),
  stressMode: z.boolean().default(false)
});

export async function POST(request: Request) {
  const body = requestSchema.parse(await request.json());
  const book = requiredBooks.find((item) => item.slug === body.bookSlug);

  if (!book) {
    return NextResponse.json({ error: "Neznámá kniha." }, { status: 404 });
  }

  const basePrompt = `Jsi maturitní komisař a mluvíš pouze česky. Zkoušíš z knihy ${book.title} (${book.author}).
Nikdy nevymýšlej neověřená literární fakta. Když není jistota, explicitně to řekni.
Vrať JSON se strukturou: {"question":"...","followUp":"...","score":0-10,"maxScore":10,"feedback":"...","difficulty":"lehka|stredni|tezka"}.`;

  if (!process.env.OPENAI_API_KEY) {
    const fallbackQuestion =
      body.history.length === 0
        ? `Začni stručným kontextem díla „${book.title}“ a uveď, které části rozboru si musíš před maturitou ověřit ve zdrojích.`
        : `Doplň, jak bys u této knihy postupoval/a při části A/III (jazykové prostředky) bez neověřených tvrzení.`;

    return NextResponse.json({
      question: fallbackQuestion,
      followUp: body.stressMode
        ? "Máš 30 sekund. Odpověz věcně a strukturovaně."
        : "Můžeš odpovídat v bodech.",
      score: Math.max(0, 6 - Math.max(0, 2 - body.history.length)),
      maxScore: 10,
      feedback:
        "Zpětná vazba je orientační. Pro finální hodnocení je nutná učitelská kontrola.",
      difficulty: body.stressMode ? "stredni" : "lehka"
    });
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const userMessage = body.answer
    ? `Moje odpověď: ${body.answer}\nPředchozí průběh: ${JSON.stringify(body.history)}`
    : "Polož první otázku.";

  const completion = await client.responses.create({
    model: "gpt-4.1-mini",
    temperature: body.stressMode ? 0.4 : 0.2,
    input: [
      { role: "system", content: basePrompt },
      { role: "user", content: userMessage }
    ]
  });

  const text = completion.output_text || "";

  try {
    const parsed = JSON.parse(text);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({
      question: "Zopakuj svou odpověď stručně v bodech.",
      followUp: "Zaměř se na téma, postavy a kompozici.",
      score: 5,
      maxScore: 10,
      feedback:
        "Model nevrátil validní JSON, proto je použit bezpečný fallback bez neověřených faktů.",
      difficulty: "stredni"
    });
  }
}
