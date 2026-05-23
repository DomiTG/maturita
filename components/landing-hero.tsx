"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LandingHero() {
  return (
    <Card className="glass overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center"
      >
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Maturita z češtiny — moderní studijní platforma
          </h1>
          <p className="text-muted-foreground">
            Všechny rozbory jsou v češtině. Systém je navržen tak, aby nikdy
            nepřidával neověřená literární fakta a umožnil učitelskou revizi.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/knihy">
              <Button>Zobrazit seznam knih</Button>
            </Link>
            <Link href="/zkouseni">
              <Button variant="outline">Spustit AI ústní zkoušení</Button>
            </Link>
          </div>
        </div>
        <Image
          src="/book-stack.svg"
          width={340}
          height={200}
          alt="Ilustrace knih"
          className="h-auto w-full"
          priority
        />
      </motion.div>
    </Card>
  );
}
