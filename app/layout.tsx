import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Maturita z češtiny | Rozbory knih",
    template: "%s | Maturita z češtiny"
  },
  description:
    "Moderní web pro přípravu na maturitu z českého jazyka a literatury.",
  openGraph: {
    title: "Maturita z češtiny",
    description:
      "Rozbory, procvičování, AI ústní zkoušení a administrace obsahu s důrazem na ověřitelnost.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
