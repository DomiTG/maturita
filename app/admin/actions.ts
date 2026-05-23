"use server";

import { z } from "zod";

const moderationSchema = z.object({
  slug: z.string().min(1),
  note: z.string().min(5)
});

export async function submitModeration(input: { slug: string; note: string }) {
  const parsed = moderationSchema.parse(input);

  return {
    ok: true,
    message: "Návrh byl zaznamenán pro následnou odbornou revizi.",
    payload: parsed
  };
}
