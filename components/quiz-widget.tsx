"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";

type QuizResponse = {
  questions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
};

export function QuizWidget({ slug }: { slug: string }) {
  const { data, isLoading, error } = useQuery<QuizResponse>({
    queryKey: ["quiz", slug],
    queryFn: async () => {
      const response = await fetch(`/api/quiz/${slug}`);
      if (!response.ok) {
        throw new Error("Kvíz se nepodařilo načíst.");
      }
      return response.json();
    }
  });

  if (isLoading) return <Card>Načítám testové otázky…</Card>;
  if (error || !data) return <Card>Nepodařilo se načíst testové otázky.</Card>;

  const question = data.questions[0];

  return (
    <Card className="space-y-3">
      <h3 className="text-lg font-semibold">Testová otázka</h3>
      <p>{question.question}</p>
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        {question.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground">{question.explanation}</p>
    </Card>
  );
}
