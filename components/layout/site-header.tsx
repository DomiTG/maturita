import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-border text-xs">
            M
          </span>
          Maturita z češtiny
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Link href="/knihy" className="rounded-md px-3 py-1.5 hover:bg-muted">
            Knihy
          </Link>
          <Link href="/zkouseni" className="rounded-md px-3 py-1.5 hover:bg-muted">
            AI ústní zkoušení
          </Link>
          <Link href="/admin" className="rounded-md px-3 py-1.5 hover:bg-muted">
            Admin
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
