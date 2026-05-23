"use client";

import { useEffect, useRef, useState } from "react";
import { requiredBooks } from "@/lib/books";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ExamTurn = {
  question: string;
  answer?: string;
};

type ExamApiResult = {
  question: string;
  followUp: string;
  score: number;
  maxScore: number;
  feedback: string;
  difficulty: "lehka" | "stredni" | "tezka";
};

type Stats = {
  count: number;
  average: string;
};

type SpeechRecognitionAlternative = { transcript: string };
type SpeechRecognitionResult = { 0: SpeechRecognitionAlternative };
type SpeechRecognitionEvent = { results: { 0: SpeechRecognitionResult } };
type BrowserSpeechRecognition = {
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  start: () => void;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
  }
}

const RANDOM_BOOK = () => requiredBooks[Math.floor(Math.random() * requiredBooks.length)];

export function ExamClient() {
  const [selectedBook, setSelectedBook] = useState(RANDOM_BOOK());
  const [stressMode, setStressMode] = useState(false);
  const [history, setHistory] = useState<ExamTurn[]>([]);
  const [question, setQuestion] = useState("");
  const [followUp, setFollowUp] = useState("");
  const [answer, setAnswer] = useState("");
  const [lastScore, setLastScore] = useState<number | null>(null);
  const [maxScore, setMaxScore] = useState(10);
  const [feedback, setFeedback] = useState("");
  const [difficulty, setDifficulty] = useState("lehka");
  const [timeLeft, setTimeLeft] = useState(120);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState<Stats>({ count: 0, average: "0.0" });
  const answerRef = useRef<HTMLTextAreaElement>(null);

  const recalculateStats = () => {
    const attempts = JSON.parse(localStorage.getItem("examAttempts") || "[]") as number[];
    const average = attempts.length
      ? (attempts.reduce((sum, value) => sum + value, 0) / attempts.length).toFixed(1)
      : "0.0";
    setStats({ count: attempts.length, average });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    recalculateStats();
  }, []);

  useEffect(() => {
    if (!question) return;

    setTimeLeft(stressMode ? 30 : 120);
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [question, stressMode]);

  const ask = async (currentAnswer?: string) => {
    setLoading(true);
    const response = await fetch("/api/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookSlug: selectedBook.slug,
        answer: currentAnswer,
        stressMode,
        history
      })
    });

    const data = (await response.json()) as ExamApiResult;
    setQuestion(data.question);
    setFollowUp(data.followUp);
    setLastScore(data.score);
    setMaxScore(data.maxScore);
    setFeedback(data.feedback);
    setDifficulty(data.difficulty);
    setLoading(false);

    if (typeof data.score === "number") {
      const attempts = JSON.parse(localStorage.getItem("examAttempts") || "[]") as number[];
      attempts.push(data.score);
      localStorage.setItem("examAttempts", JSON.stringify(attempts));
      recalculateStats();
    }
  };

  const submit = async () => {
    const turn: ExamTurn = { question, answer };
    setHistory((prev) => [...prev, turn]);
    await ask(answer);
    setAnswer("");
    answerRef.current?.focus();
  };

  const retry = () => {
    setSelectedBook(RANDOM_BOOK());
    setHistory([]);
    setQuestion("");
    setFollowUp("");
    setAnswer("");
    setLastScore(null);
    setFeedback("");
    setDifficulty("lehka");
  };

  const speakQuestion = () => {
    if (typeof window === "undefined" || !question) return;
    const speech = new SpeechSynthesisUtterance(question);
    speech.lang = "cs-CZ";
    window.speechSynthesis.speak(speech);
  };

  const speechToText = () => {
    if (typeof window === "undefined") return;
    const SpeechRecognition = window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "cs-CZ";
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setAnswer((prev) => `${prev} ${transcript}`.trim());
    };
    recognition.start();
  };

  return (
    <div className="space-y-4">
      <Card className="space-y-3">
        <h1 className="text-2xl font-bold">AI ústní zkoušení</h1>
        <p className="text-sm text-muted-foreground">
          Náhodná kniha: <strong>{selectedBook.title}</strong> ({selectedBook.author})
        </p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={() => ask()} disabled={loading}>
            {loading ? "Načítám…" : "Začít zkoušení"}
          </Button>
          <Button variant="outline" onClick={retry}>
            Retry mode
          </Button>
          <Button variant="outline" onClick={() => setStressMode((prev) => !prev)}>
            Stress simulation: {stressMode ? "Zapnuto" : "Vypnuto"}
          </Button>
        </div>
      </Card>

      {question && (
        <Card className="space-y-3">
          <p className="font-medium">Otázka: {question}</p>
          <p className="text-sm text-muted-foreground">Doplňující otázka: {followUp}</p>
          <p className="text-sm">Časovač: {timeLeft}s • Obtížnost: {difficulty}</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={speakQuestion}>
              Přečíst otázku (TTS)
            </Button>
            <Button variant="outline" onClick={speechToText}>
              Nadiktovat odpověď (STT)
            </Button>
          </div>
          <textarea
            ref={answerRef}
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="min-h-28 w-full rounded-md border bg-background p-3"
            placeholder="Napiš nebo nadiktuj odpověď v češtině..."
          />
          <Button onClick={submit} disabled={loading || !answer.trim()}>
            Odeslat odpověď
          </Button>
        </Card>
      )}

      <Card className="space-y-2">
        <h2 className="text-lg font-semibold">Bodování a zpětná vazba</h2>
        <p>
          Aktuální skóre: {lastScore ?? "-"}/{maxScore}
        </p>
        <p className="text-sm text-muted-foreground">{feedback || "Zatím bez hodnocení."}</p>
      </Card>

      <Card className="space-y-2">
        <h2 className="text-lg font-semibold">Historie pokusů a statistiky</h2>
        <p>Počet pokusů: {stats.count}</p>
        <p>Průměrné skóre: {stats.average}</p>
        <p className="text-xs text-muted-foreground">
          Historie se ukládá lokálně v prohlížeči.
        </p>
      </Card>
    </div>
  );
}
