"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Flashcard = {
  front: string;
  back: string;
};

export function Flashcards({ items }: { items: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);

  const card = items[index];

  return (
    <Card className="space-y-3">
      <h3 className="text-lg font-semibold">Flashcards</h3>
      <p className="text-sm text-muted-foreground">Kartička {index + 1} / {items.length}</p>
      <div className="rounded-md bg-muted p-4">
        <p className="font-medium">{showBack ? card.back : card.front}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => setShowBack((prev) => !prev)}>
          {showBack ? "Zobrazit otázku" : "Zobrazit odpověď"}
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setIndex((prev) => (prev + 1) % items.length);
            setShowBack(false);
          }}
        >
          Další
        </Button>
      </div>
    </Card>
  );
}
