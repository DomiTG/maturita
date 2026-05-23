import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="space-y-3">
      <h1 className="text-2xl font-bold">Stránka nebyla nalezena</h1>
      <p className="text-muted-foreground">Zkontroluj URL nebo se vrať na katalog knih.</p>
      <Link href="/knihy" className="underline">
        Přejít na knihy
      </Link>
    </Card>
  );
}
