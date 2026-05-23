import { PrismaClient } from "@prisma/client";
import { analysisTemplate, requiredBooks } from "../lib/books";

const prisma = new PrismaClient();

async function main() {
  const period = await prisma.literaryPeriod.upsert({
    where: { name: "Připraveno k odborné revizi" },
    update: {},
    create: {
      name: "Připraveno k odborné revizi",
      description:
        "Technický import. Přesné literárněhistorické zařazení je nutné doplnit po ověření zdrojů."
    }
  });

  for (const book of requiredBooks) {
    const author = await prisma.author.upsert({
      where: { name: book.author },
      update: {},
      create: { name: book.author }
    });

    const createdBook = await prisma.book.upsert({
      where: { slug: book.slug },
      update: {
        title: book.title,
        verificationNote: analysisTemplate.verificationNote
      },
      create: {
        slug: book.slug,
        title: book.title,
        authorId: author.id,
        literaryPeriodId: period.id,
        summary:
          "Stručný obsah bude doplněn po ověření z důvěryhodných literárních zdrojů.",
        verificationNote: analysisTemplate.verificationNote
      }
    });

    await prisma.analysis.upsert({
      where: {
        id: `${createdBook.id}-analysis`
      },
      update: {
        officialStructure: analysisTemplate.officialStructure,
        additionalContent: analysisTemplate.additionalContent,
        verificationNote: analysisTemplate.verificationNote,
        sourceLinks: []
      },
      create: {
        id: `${createdBook.id}-analysis`,
        bookId: createdBook.id,
        officialStructure: analysisTemplate.officialStructure,
        additionalContent: analysisTemplate.additionalContent,
        sourceLinks: [],
        verificationNote: analysisTemplate.verificationNote
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
