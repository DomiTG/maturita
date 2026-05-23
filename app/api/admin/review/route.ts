import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    message:
      "Návrh revize byl přijat. V této verzi je workflow připraveno pro následné napojení na databázi a schvalování.",
    received: payload
  });
}
