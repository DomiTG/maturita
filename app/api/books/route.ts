import { NextResponse } from "next/server";
import { getBooks } from "@/lib/content";

export async function GET() {
  const books = await getBooks();
  return NextResponse.json({ books });
}
