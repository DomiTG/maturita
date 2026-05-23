"use client";

import { useState, useTransition } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { requiredBooks } from "@/lib/books";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { submitModeration } from "@/app/admin/actions";

export default function AdminPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [slug, setSlug] = useState(requiredBooks[0].slug);
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleModeration = () => {
    startTransition(async () => {
      try {
        const result = await submitModeration({ slug, note });
        setMessage(result.message);
      } catch {
        setMessage("Nepodařilo se uložit návrh.");
      }
    });
  };

  if (!session) {
    return (
      <Card className="max-w-md space-y-3">
        <h1 className="text-xl font-semibold">Admin přihlášení</h1>
        <input
          type="email"
          className="w-full rounded-md border bg-background p-2"
          placeholder="admin@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          className="w-full rounded-md border bg-background p-2"
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          onClick={() => signIn("credentials", { email, password })}
          disabled={pending}
        >
          Přihlásit
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card className="space-y-2">
        <h1 className="text-2xl font-bold">Admin CMS</h1>
        <p className="text-sm text-muted-foreground">
          Úpravy rozborů, správa otázek, moderace AI obsahu a základní správa
          uživatelů.
        </p>
        <Button variant="outline" onClick={() => signOut()}>
          Odhlásit
        </Button>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-lg font-semibold">Moderace AI výstupu</h2>
        <label className="text-sm">Kniha</label>
        <select
          className="rounded-md border bg-background p-2"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
        >
          {requiredBooks.map((book) => (
            <option key={book.slug} value={book.slug}>
              {book.title}
            </option>
          ))}
        </select>

        <label className="text-sm">Poznámka editora</label>
        <textarea
          className="min-h-24 rounded-md border bg-background p-2"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />

        <Button onClick={handleModeration} disabled={pending || note.length < 5}>
          Uložit návrh revize
        </Button>
        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </Card>
    </div>
  );
}
