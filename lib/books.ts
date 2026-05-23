export type BookSeed = {
  slug: string;
  title: string;
  author: string;
};

export const requiredBooks: BookSeed[] = [
  { slug: "romeo-a-julie", title: "Romeo a Julie", author: "William Shakespeare" },
  { slug: "kral-duchu", title: "Král duchů", author: "Johann Wolfgang Goethe" },
  { slug: "utrpeni-mladeho-werthera", title: "Utrpení mladého Werthera", author: "Johann Wolfgang Goethe" },
  { slug: "lakomec", title: "Lakomec", author: "Molière" },
  { slug: "havran", title: "Havran", author: "Edgar Allan Poe" },
  { slug: "revizor", title: "Revizor", author: "Nikolaj Vasiljevič Gogol" },
  { slug: "tyrolske-elegie", title: "Tyrolské elegie", author: "Karel Havlíček Borovský" },
  { slug: "petr-a-lucie", title: "Petr a Lucie", author: "Romain Rolland" },
  { slug: "maly-princ", title: "Malý princ", author: "Antoine de Saint-Exupéry" },
  { slug: "velky-gatsby", title: "Velký Gatsby", author: "Francis Scott Fitzgerald" },
  { slug: "pes-baskervillsky", title: "Pes baskervillský", author: "Arthur Conan Doyle" },
  { slug: "denik-anny-frankove", title: "Deník Anny Frankové", author: "Anne Frank" },
  { slug: "harry-potter-a-kamen-mudrcu", title: "Harry Potter a Kámen mudrců", author: "J. K. Rowling" },
  { slug: "o-mysich-a-lidech", title: "O myších a lidech", author: "John Steinbeck" },
  { slug: "fimfarum", title: "Fimfárum", author: "Jan Werich" },
  { slug: "krysar", title: "Krysař", author: "Viktor Dyk" },
  { slug: "rur", title: "R.U.R.", author: "Karel Čapek" },
  { slug: "smrt-krasnych-srncu", title: "Smrt krásných srnců", author: "Ota Pavel" },
  { slug: "valka-s-mloky", title: "Válka s mloky", author: "Karel Čapek" },
  { slug: "ostre-sledovane-vlaky", title: "Ostře sledované vlaky", author: "Bohumil Hrabal" }
];

const pending =
  "Tento bod je připraven ve správné maturitní struktuře, ale konkrétní obsah zatím není v projektu odborně ověřen. Pro přesnost je nutné doplnění pedagogem.";

export const analysisTemplate = {
  officialStructure: {
    A: {
      title: "CHARAKTERISTIKA UMĚLECKÉHO TEXTU",
      I: {
        zasazeniVynatkuDoKontextuDila: pending,
        temaVynatkuACelehoDila: pending,
        stezejniMotivy: pending,
        casAProstor: pending,
        kompozicniVystavba: pending,
        literarniDruh: pending,
        literarniZanrADefinice: pending
      },
      II: {
        vypravecNeboLyrickySubjekt: pending,
        hlavniAVedlejsiPostavy: pending,
        charakteristikaPostav: pending,
        promenaPostavBehemDeje: pending,
        vypraveciZpusoby: pending,
        typyPromluv: pending,
        versovaVystavba: pending,
        rymoveSchema: pending
      },
      III: {
        jazykoveProstredkyAFunkce: pending,
        tropyAFiguryAFunkce: {
          metafora: pending,
          metonymie: pending,
          personifikace: pending,
          oxymoron: pending,
          hyperbola: pending,
          anafora: pending,
          epizeuxis: pending,
          prirovnani: pending,
          recnickaOtazka: pending,
          dalsi: pending
        }
      }
    },
    B: {
      title: "LITERÁRNĚHISTORICKÝ KONTEXT",
      kontextAutorovyTvorby: pending,
      prvkyAutorovaZivota: pending,
      literarniSmer: pending,
      znakyLiterarnihoObdobi: pending,
      dalsiVyznacniAutoriStejnehoObdobi: pending,
      podobnaDila: pending
    }
  },
  additionalContent: {
    strucnyObsah: pending,
    detailniDej: pending,
    hlavniMyslenky: pending,
    temataAMotivy: pending,
    duleziteCitace: [
      "Citace budou doplněny až po ověření proti důvěryhodným literárním zdrojům."
    ],
    symbolika: pending,
    vztahyMeziPostavami: pending,
    casovaOsaDeje: pending,
    zajimavosti: pending,
    nejcastejsiMaturitniOtazky: [pending],
    typickeChybyStudentu: [pending],
    coRictUMaturity: pending,
    rychle5MinutoveOpakovani: pending,
    flashcards: [
      { front: "Jaké je hlavní téma díla?", back: pending }
    ],
    testoveOtazky: [
      {
        question: "Který literární směr je pro dílo klíčový?",
        options: ["Možnost A", "Možnost B", "Možnost C", "Možnost D"],
        note: "Správnou odpověď doplní editor po ověření."
      }
    ],
    aiGenerovaneProcvicovani: pending
  },
  verificationNote:
    "Obsah je záměrně konzervativní: bez neověřených faktů. Systém je připraven na ruční odbornou revizi učitelem."
};
