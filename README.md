# Maturita z češtiny (Next.js 14)

Webová aplikace pro přípravu k maturitě z českého jazyka a literatury.

## Stack

- Next.js 14 (App Router) + TypeScript
- TailwindCSS
- Prisma ORM + PostgreSQL
- NextAuth/Auth.js
- OpenAI API
- Zod
- TanStack Query
- Framer Motion

## Funkce

- Seznam všech požadovaných knih
- Oficiální maturitní struktura rozborů (A/B) + doplňkový obsah pro každou knihu
- Konzervativní přístup k faktům: bez neověřených tvrzení, připraveno na ruční revizi
- AI ústní zkoušení (česky): náhodná kniha, otázky, doplňující otázky, bodování, feedback, adaptace obtížnosti, timer, stress mode, retry, historie pokusů
- Admin CMS kostra (přihlášení + moderace obsahu)
- SEO základy (metadata, OpenGraph, sitemap)

## Rychlý start

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Databáze

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

## Build a lint

```bash
npm run lint
npm run build
```

## Poznámka k přesnosti literárních dat

Aplikace záměrně nepřidává neověřená literární fakta. Pole rozborů jsou kompletně připravená podle oficiální české maturitní struktury, ale konkrétní údaje musí být doplněny/ověřeny učitelem nebo editorem z důvěryhodných zdrojů.

## Deployment

- Doporučeno: Vercel + spravovaná PostgreSQL
- Nastavit proměnné z `.env.example`
- Spustit Prisma migrate + seed během release fáze
