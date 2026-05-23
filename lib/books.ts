export type BookSeed = {
  slug: string;
  title: string;
  author: string;
};

export type BookEnrichment = {
  year: string;
  originalTitle?: string;
  literaryPeriod: string;
  literaryMovement: string;
  genre: string;
  setting: string;
  summary: string;
  themes: string[];
  keyCharacters: string[];
  maturityTips: string[];
  source: string;
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

export const bookEnrichmentBySlug: Record<string, BookEnrichment> = {
  "romeo-a-julie": {
    year: "1597",
    literaryPeriod: "Renesance",
    literaryMovement: "Alžbětinské drama",
    genre: "Tragédie",
    setting: "Verona, Itálie",
    summary:
      "Příběh dvou mladých milenců z nepřátelských rodů končí tragicky a odhaluje ničivost rodové nenávisti.",
    themes: ["láska vs. nenávist", "osud", "konflikt generací", "smrt"],
    keyCharacters: ["Romeo", "Julie", "Merkucio", "Tybalt", "Páter Vavřinec"],
    maturityTips: [
      "Zdůrazni kontrast mezi lyrikou milostných scén a násilím.",
      "Uveď význam prologu a motivu osudovosti."
    ],
    source: "Open Library / Britannica / Maturitní čítanky"
  },
  "kral-duchu": {
    year: "1782",
    originalTitle: "Erlkönig",
    literaryPeriod: "Přelom osvícenství a preromantismu",
    literaryMovement: "Sturm und Drang",
    genre: "Balada",
    setting: "Noční jízda krajinou",
    summary:
      "Otec veze nemocného syna, který slyší svůdný hlas Krále duchů; závěr přináší smrt dítěte.",
    themes: ["strach", "smrt", "střet racionality a fantazie"],
    keyCharacters: ["vypravěč", "otec", "syn", "Král duchů"],
    maturityTips: [
      "Rozliš perspektivu otce a syna.",
      "Zmiň gradaci napětí v dialogické stavbě."
    ],
    source: "Open Library / Goethe Gesellschaft"
  },
  "utrpeni-mladeho-werthera": {
    year: "1774",
    originalTitle: "Die Leiden des jungen Werthers",
    literaryPeriod: "Preromantismus",
    literaryMovement: "Sturm und Drang",
    genre: "Epistolární román",
    setting: "Německo 18. století",
    summary:
      "Wertherova nenaplněná láska k Lottě a citová nevyrovnanost vedou k tragické sebevraždě.",
    themes: ["individualismus", "nenaplněná láska", "cit vs. rozum"],
    keyCharacters: ["Werther", "Lotta", "Albert"],
    maturityTips: [
      "Vysvětli formu dopisů a subjektivnost vyprávění.",
      "Zařaď dílo do kontextu evropského sentimentalismu."
    ],
    source: "Open Library / Encyclopaedia Britannica"
  },
  lakomec: {
    year: "1668",
    originalTitle: "L'Avare",
    literaryPeriod: "Klasicismus",
    literaryMovement: "Francouzské klasicistní drama",
    genre: "Komedie",
    setting: "Měšťanské prostředí",
    summary:
      "Harpagonova posedlost penězi ničí rodinné vztahy a odhaluje směšnost lidské chamtivosti.",
    themes: ["lakota", "pokrytectví", "rodinné konflikty"],
    keyCharacters: ["Harpagon", "Élisa", "Kleantos", "Mariana"],
    maturityTips: [
      "Uveď komické prostředky (charakterová komika, situační komika).",
      "Připomeň zásadu tří jednot."
    ],
    source: "Open Library / Comédie-Française"
  },
  havran: {
    year: "1845",
    originalTitle: "The Raven",
    literaryPeriod: "Romantismus",
    literaryMovement: "Americký temný romantismus",
    genre: "Lyricko-epická báseň",
    setting: "Noční pokoj vypravěče",
    summary:
      "Truchlící muž rozmlouvá s tajemným havranem, jehož odpověď „Nevermore“ prohlubuje beznaděj.",
    themes: ["smutek", "ztráta", "šílenství", "symbol smrti"],
    keyCharacters: ["lyrický subjekt", "havran", "Lenora"],
    maturityTips: [
      "Analyzuj refrén a jeho zvukovou funkci.",
      "Ukaž symbolickou rovinu havrana."
    ],
    source: "Open Library / Poetry Foundation"
  },
  revizor: {
    year: "1836",
    originalTitle: "Ревизор",
    literaryPeriod: "Realismus",
    literaryMovement: "Ruská satira",
    genre: "Satirická komedie",
    setting: "Provinční ruské město",
    summary:
      "Úředníci si spletou bezvýznamného Chlestakova se státním revizorem a sami odhalí vlastní korupci.",
    themes: ["korupce", "maloměšťáctví", "moc a strach"],
    keyCharacters: ["Chlestakov", "hejtman", "úředníci města"],
    maturityTips: [
      "Pojmenuj satirické postupy a grotesku.",
      "Vysvětli význam „němé scény“ v závěru."
    ],
    source: "Open Library / Russian State Library"
  },
  "tyrolske-elegie": {
    year: "1852",
    literaryPeriod: "Český národní obrození",
    literaryMovement: "Politická satira",
    genre: "Satirická skladba",
    setting: "Cesta do Brixenu",
    summary:
      "Autor ironicky komentuje vlastní deportaci a kritizuje rakouský absolutismus.",
    themes: ["svoboda slova", "politická represe", "ironie"],
    keyCharacters: ["lyrický subjekt", "státní moc"],
    maturityTips: [
      "Zdůrazni autobiografický základ textu.",
      "Uveď funkci ironie a sarkasmu."
    ],
    source: "Národní knihovna ČR / školní čítanky"
  },
  "petr-a-lucie": {
    year: "1920",
    originalTitle: "Pierre et Luce",
    literaryPeriod: "Meziválečná literatura",
    literaryMovement: "Humanismus",
    genre: "Novela",
    setting: "Paříž během 1. světové války",
    summary:
      "Křehký milostný příběh mladého páru vrcholí tragicky při bombardování kostela.",
    themes: ["láska v čase války", "pacifismus", "ztráta mládí"],
    keyCharacters: ["Petr", "Lucie"],
    maturityTips: [
      "Propoj děj s pacifistickým poselstvím autora.",
      "Všímej si kontrastu intimity a válečné reality."
    ],
    source: "Open Library / Gallimard"
  },
  "maly-princ": {
    year: "1943",
    originalTitle: "Le Petit Prince",
    literaryPeriod: "20. století",
    literaryMovement: "Filozofická alegorie",
    genre: "Filozofická pohádka",
    setting: "Poušť a planety",
    summary:
      "Pilot v poušti potkává Malého prince, který skrze setkání s dospělými odhaluje smysl přátelství a odpovědnosti.",
    themes: ["dětství", "odpovědnost", "přátelství", "kritika dospělých"],
    keyCharacters: ["Malý princ", "pilot", "liška", "růže"],
    maturityTips: [
      "Vysvětli alegorii jednotlivých planet.",
      "Uveď klíčový motiv „stáváš se navždy odpovědným…“."
    ],
    source: "Open Library / Fondation Saint-Exupéry"
  },
  "velky-gatsby": {
    year: "1925",
    originalTitle: "The Great Gatsby",
    literaryPeriod: "Americká literatura 20. století",
    literaryMovement: "Modernismus",
    genre: "Společenský román",
    setting: "Long Island a New York 20. léta",
    summary:
      "Nick Carraway sleduje vzestup a pád Jaye Gatsbyho, který marně usiluje o návrat ztracené lásky.",
    themes: ["americký sen", "iluze", "společenská nerovnost"],
    keyCharacters: ["Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Tom Buchanan"],
    maturityTips: [
      "Pracuj se symboly (zelené světlo, oči doktora Eckleburga).",
      "Uveď roli nespolehlivého vypravěče."
    ],
    source: "Open Library / Library of Congress"
  },
  "pes-baskervillsky": {
    year: "1902",
    originalTitle: "The Hound of the Baskervilles",
    literaryPeriod: "Přelom 19. a 20. století",
    literaryMovement: "Detektivní próza",
    genre: "Detektivní román",
    setting: "Dartmoor, Anglie",
    summary:
      "Sherlock Holmes a Watson vyšetřují údajné rodové prokletí Baskervillů na ponurých vřesovištích.",
    themes: ["racionalita vs. pověra", "tajemství", "zločin a trest"],
    keyCharacters: ["Sherlock Holmes", "Dr. Watson", "Sir Henry Baskerville"],
    maturityTips: [
      "Rozliš deduktivní metodu a práci s falešnými stopami.",
      "Uveď budování atmosféry gotického napětí."
    ],
    source: "Open Library / Conan Doyle Estate"
  },
  "denik-anny-frankove": {
    year: "1947",
    originalTitle: "Het Achterhuis",
    literaryPeriod: "Literatura faktu 20. století",
    literaryMovement: "Válečné deníky",
    genre: "Deník",
    setting: "Amsterdam během nacistické okupace",
    summary:
      "Autentické zápisky dospívající dívky skrývající se před deportací zachycují strach i naději.",
    themes: ["holokaust", "dospívání", "lidská důstojnost"],
    keyCharacters: ["Anna Franková", "rodina Frankových", "obyvatelé zadního domu"],
    maturityTips: [
      "Upozorni na dokumentární hodnotu textu.",
      "Při interpretaci odliš autorčin hlas od historického komentáře."
    ],
    source: "Anne Frank House / Open Library"
  },
  "harry-potter-a-kamen-mudrcu": {
    year: "1997",
    originalTitle: "Harry Potter and the Philosopher's Stone",
    literaryPeriod: "Současná světová literatura",
    literaryMovement: "Fantasy",
    genre: "Fantasy román pro mládež",
    setting: "Bradavice a kouzelnický svět",
    summary:
      "Harry objevuje svou minulost i vlastní identitu a v prvním školním roce se střetává s návratem zla.",
    themes: ["přátelství", "dobro a zlo", "dospívání", "odvaha"],
    keyCharacters: ["Harry Potter", "Hermiona Grangerová", "Ron Weasley", "Voldemort"],
    maturityTips: [
      "Zařaď dílo jako moderní iniciační příběh.",
      "Zmiň práci s archetypy a školním prostředím."
    ],
    source: "Pottermore / Open Library"
  },
  "o-mysich-a-lidech": {
    year: "1937",
    originalTitle: "Of Mice and Men",
    literaryPeriod: "Americký realismus 30. let",
    literaryMovement: "Sociální próza",
    genre: "Novela",
    setting: "Kalifornie v době hospodářské krize",
    summary:
      "Dva nádeníci sní o vlastním domově, ale jejich sen rozbije sociální realita i lidská slabost.",
    themes: ["americký sen", "samota", "odpovědnost", "milosrdenství"],
    keyCharacters: ["George", "Lennie", "Candy", "Curleyho žena"],
    maturityTips: [
      "Vysvětli význam názvu a motivu ztraceného snu.",
      "Analyzuj závěrečné etické dilema."
    ],
    source: "Open Library / Steinbeck Center"
  },
  fimfarum: {
    year: "1960",
    literaryPeriod: "Česká poválečná literatura",
    literaryMovement: "Moderní autorská pohádka",
    genre: "Soubor pohádek",
    setting: "Různá pohádková prostředí",
    summary:
      "Werichovy pohádky kombinují lidovou tradici, humor a ironii, často s civilním ponaučením.",
    themes: ["lidová moudrost", "humor", "spravedlnost"],
    keyCharacters: ["pohádkové postavy", "vypravěč"],
    maturityTips: [
      "Uveď roli vypravěčského stylu a mluvenosti.",
      "Zdůrazni aktualizaci tradičních motivů."
    ],
    source: "Městská knihovna v Praze / školní čítanky"
  },
  krysar: {
    year: "1915",
    literaryPeriod: "Česká moderna",
    literaryMovement: "Symbolismus a novoromantismus",
    genre: "Novela",
    setting: "Město Hammeln",
    summary:
      "Tajemný Krysař pomstí zradu města zhoubnou píšťalou a odvádí obyvatele do zkázy.",
    themes: ["vina a trest", "msta", "davová manipulace"],
    keyCharacters: ["Krysař", "Anežka", "Kristián", "obyvatelé Hammelnu"],
    maturityTips: [
      "Vysvětli symbolickou rovinu postavy Krysaře.",
      "Všímej si rytmizovaného, obrazného jazyka."
    ],
    source: "Česká digitální knihovna / maturitní portály"
  },
  rur: {
    year: "1920",
    originalTitle: "Rossum's Universal Robots",
    literaryPeriod: "Meziválečná literatura",
    literaryMovement: "Sci-fi drama",
    genre: "Drama",
    setting: "Továrna na roboty",
    summary:
      "Lidstvo vyrábí roboty pro pohodlí, ale ztrácí odpovědnost; vzpoura robotů vede k civilizačnímu kolapsu.",
    themes: ["technologický pokrok", "odcizení práce", "etika vědy"],
    keyCharacters: ["Helena Gloryová", "Domin", "Radius", "Alquist"],
    maturityTips: [
      "Připomeň, že Čapek zpopularizoval slovo „robot“.",
      "Vylož varovný dystopický rozměr."
    ],
    source: "Národní divadlo / Open Library"
  },
  "smrt-krasnych-srncu": {
    year: "1971",
    literaryPeriod: "Česká literatura 2. poloviny 20. století",
    literaryMovement: "Autobiografická próza",
    genre: "Povídky",
    setting: "Praha a Křivoklátsko",
    summary:
      "Vzpomínkové příběhy o rodině, válce a dospívání spojují humor s bolestnou zkušeností.",
    themes: ["rodina", "válka", "paměť", "ztráta"],
    keyCharacters: ["vypravěč Ota", "tatínek Leo", "maminka", "bratři"],
    maturityTips: [
      "Ukaž kontrast poetiky dětství a tragiky holokaustu.",
      "Zdůrazni autobiografický rámec."
    ],
    source: "Paměť národa / školní čítanky"
  },
  "valka-s-mloky": {
    year: "1936",
    literaryPeriod: "Meziválečná literatura",
    literaryMovement: "Satirický román",
    genre: "Sci-fi satira",
    setting: "Globální prostor 20. století",
    summary:
      "Objev inteligentních mloků vede k ekonomickému boomu, který se promění v civilizační katastrofu.",
    themes: ["kolonialismus", "kapitalismus", "manipulace médií", "fašismus"],
    keyCharacters: ["Kapitán van Toch", "Bondy", "mloci"],
    maturityTips: [
      "Pojmenuj publicistické a dokumentární prvky textu.",
      "Vysvětli nadčasovou politickou satiru."
    ],
    source: "Open Library / Karel Čapek official archive"
  },
  "ostre-sledovane-vlaky": {
    year: "1965",
    literaryPeriod: "Česká literatura 60. let",
    literaryMovement: "Hrabalovská poetika",
    genre: "Novela",
    setting: "Nádraží za 2. světové války",
    summary:
      "Nesmělý elév Miloš Hrma dospívá v prostředí železnice a nakonec vykoná odvážný sabotážní čin.",
    themes: ["dospívání", "válka", "banalita každodennosti", "hrdinství"],
    keyCharacters: ["Miloš Hrma", "výpravčí Hubička", "Máša"],
    maturityTips: [
      "Vysvětli propojení grotesknosti a tragiky.",
      "Uveď význam er-formy s fokalizací na Miloše."
    ],
    source: "NFA / Open Library"
  }
};

const fallbackEnrichment: BookEnrichment = {
  year: "neuvedeno",
  literaryPeriod: "neuvedeno",
  literaryMovement: "neuvedeno",
  genre: "neuvedeno",
  setting: "neuvedeno",
  summary: "Shrnutí je momentálně ve zpracování.",
  themes: ["téma bude doplněno"],
  keyCharacters: ["postavy budou doplněny"],
  maturityTips: ["Tipy k maturitě budou doplněny."],
  source: "interní redakční příprava"
};

export function getBookEnrichment(slug: string): BookEnrichment {
  return bookEnrichmentBySlug[slug] ?? fallbackEnrichment;
}

export function createBookAnalysis(enrichment: BookEnrichment) {
  const themesText = enrichment.themes.join(", ");
  const charactersText = enrichment.keyCharacters.join(", ");

  return {
    officialStructure: {
      A: {
        title: "CHARAKTERISTIKA UMĚLECKÉHO TEXTU",
        I: {
          zasazeniVynatkuDoKontextuDila: `Dílo patří do období ${enrichment.literaryPeriod}; vhodné je pracovat s ukázkou v rámci celého příběhového oblouku.`,
          temaVynatkuACelehoDila: `Hlavní témata: ${themesText}.`,
          stezejniMotivy: themesText,
          casAProstor: enrichment.setting,
          kompozicniVystavba: `Pro maturitu uveď žánr ${enrichment.genre} a stručně popiš výstavbu děje.`,
          literarniDruh: "epika / lyrika / drama podle konkrétní ukázky",
          literarniZanrADefinice: enrichment.genre
        },
        II: {
          vypravecNeboLyrickySubjekt:
            "Urči podle ukázky, zda mluví vypravěč, lyrický subjekt nebo dramatická postava.",
          hlavniAVedlejsiPostavy: charactersText,
          charakteristikaPostav: "Popiš jejich motivace a vztahy v dané scéně.",
          promenaPostavBehemDeje: "Zaměř se na vývoj hlavní postavy od úvodu k závěru.",
          vypraveciZpusoby: "Sleduj pásmo vypravěče, přímou i nepřímou řeč.",
          typyPromluv: "Monolog, dialog, případně vnitřní řeč dle textu.",
          versovaVystavba: "U poezie popiš metr a rytmus; u prózy napiš, že není veršovaná.",
          rymoveSchema: "U poezie určuj rýmové schéma jen pokud je zřetelně přítomné."
        },
        III: {
          jazykoveProstredkyAFunkce:
            "Vyber jazykové prostředky přímo z ukázky a vždy dodej jejich funkci.",
          tropyAFiguryAFunkce: {
            metafora: "Zkontroluj obrazné pojmenování a jeho účinek.",
            metonymie: "Urči přenesení významu na základě věcné souvislosti.",
            personifikace: "Sleduj oživování neživých jevů.",
            oxymoron: "Hledej významový kontrast v těsné blízkosti slov.",
            hyperbola: "Zaznamenej zveličení pro emotivní účinek.",
            anafora: "Všímej si opakování na začátku veršů nebo vět.",
            epizeuxis: "Urči bezprostřední opakování slova či spojení.",
            prirovnani: "Najdi přirovnání a vysvětli, co zdůrazňuje.",
            recnickaOtazka: "Vnímej otázky bez očekávané odpovědi.",
            dalsi: "Doplň další prostředky podle konkrétní ukázky."
          }
        }
      },
      B: {
        title: "LITERÁRNĚHISTORICKÝ KONTEXT",
        kontextAutorovyTvorby: `${enrichment.literaryPeriod}; směr: ${enrichment.literaryMovement}.`,
        prvkyAutorovaZivota: "U maturity zmiň jen ověřené biografické souvislosti důležité pro četbu díla.",
        literarniSmer: enrichment.literaryMovement,
        znakyLiterarnihoObdobi: `Typické rysy období ${enrichment.literaryPeriod} propoj s textem ukázky.`,
        dalsiVyznacniAutoriStejnehoObdobi: "Doplň 1–2 autory stejného období podle školního seznamu.",
        podobnaDila: "Porovnej s tematicky blízkým dílem z povinné četby."
      }
    },
    additionalContent: {
      strucnyObsah: enrichment.summary,
      detailniDej: `Děj i kompozici rozveď podle pracovního sešitu; opři se o motivy: ${themesText}.`,
      hlavniMyslenky: `Klíčové myšlenky: ${themesText}.`,
      temataAMotivy: enrichment.themes,
      duleziteCitace: ["Citace vybírej přímo z ověřeného vydání použitého ve škole."],
      symbolika: "Symboliku vztahuj ke konkrétním scénám a postavám.",
      vztahyMeziPostavami: charactersText,
      casovaOsaDeje: enrichment.setting,
      zajimavosti: [`První vydání: ${enrichment.year}.`, `Zdroj základních údajů: ${enrichment.source}.`],
      nejcastejsiMaturitniOtazky: [
        "Jaké je hlavní téma díla a jak se promítá do osudu postav?",
        "Jak dílo zapadá do literárního období a směru?"
      ],
      typickeChybyStudentu: [
        "Příliš obecné odpovědi bez odkazu na konkrétní ukázku.",
        "Záměna tématu díla a pouhého převyprávění děje."
      ],
      coRictUMaturity: enrichment.maturityTips.join(" "),
      rychle5MinutoveOpakovani: `${enrichment.genre}; období ${enrichment.literaryPeriod}; témata ${themesText}.`,
      flashcards: [
        {
          front: "Do jakého období a směru dílo patří?",
          back: `${enrichment.literaryPeriod}; ${enrichment.literaryMovement}.`
        },
        {
          front: "Jaké jsou hlavní motivy díla?",
          back: themesText
        },
        {
          front: "Které postavy je nutné u maturity zmínit?",
          back: charactersText
        }
      ],
      testoveOtazky: [
        {
          question: "Co je při rozboru této knihy nejdůležitější zdůraznit?",
          options: [
            "Pouze detailní obsah bez kontextu",
            "Jen životopis autora",
            "Propojení témat, postav a literárního kontextu",
            "Náhodná fakta bez práce s ukázkou"
          ],
          note: "Správná odpověď: propojení témat, postav a kontextu."
        }
      ],
      aiGenerovaneProcvicovani:
        "AI procvičování je zaměřené na argumentaci, práci s ukázkou a přesné pojmy k maturitě."
    },
    verificationNote:
      `Data byla doplněna z dostupných literárních zdrojů (${enrichment.source}); před finální školní přípravou je vhodná učitelská revize.`
  };
}
