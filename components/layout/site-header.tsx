import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">
          Maturita z češtiny
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/knihy">Knihy</Link>
          <Link href="/zkouseni">AI ústní zkoušení</Link>
          <Link href="/admin">Admin</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
