"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
    <Card className="glass overflow-hidden border-border/70">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="space-y-6"
      >
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Maturitní příprava
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Připravené rozbory knih, které vypadají jako moderní produkt.
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Knihy mají doplněný kontext, shrnutí, témata i tipy k ústní části.
            Rozhraní je jednoduché, čisté a připravené na rychlou orientaci před zkouškou.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link href="/knihy">
              <Button>Zobrazit knihy</Button>
            </Link>
            <Link href="/zkouseni">
              <Button variant="outline">Spustit AI zkoušení</Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            "20 knih se stručným rozborem",
            "A/B maturitní struktura na jednom místě",
            "AI simulace ústní zkoušky"
          ].map((point) => (
            <div key={point} className="rounded-xl border border-border/80 bg-muted/40 p-4 text-sm">
              {point}
            </div>
          ))}
        </div>
      </motion.div>
    </Card>
  );
}
