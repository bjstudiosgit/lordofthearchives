export interface Battle {
  id: string;
  slug: string;
  mc1: string;
  mc2: string;
  title: string;
  date?: string;
  videoUrl?: string;
  views?: string;
  winner?: string;
  isUnreleased?: boolean;
  theme: string;
  season: number;
  subGroup?: string;
  customEp?: string;
}

export const battles: Battle[] = [
  {
    "id": "1",
    "slug": "f-don-vs-aymuni",
    "mc1": "f-don",
    "mc2": "aymuni",
    "title": "F-DON vs AYMUNI",
    "date": "26 July 2020",
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "2",
    "slug": "ashley-tragic-vs-ft",
    "mc1": "ashley-tragic",
    "mc2": "ft",
    "title": "ASHLEY TRAGIC vs F.T",
    "date": "30 July 2020",
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "3",
    "slug": "shorty-woa-vs-saidu",
    "mc1": "shorty-woa",
    "mc2": "saidu",
    "title": "SHORTY WOA vs SAIDU",
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "4",
    "slug": "bigga-vs-dan-dannah",
    "mc1": "bigga",
    "mc2": "dan-dannah",
    "title": "BIGGA vs DAN DANNAH",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "5",
    "slug": "bigga-vs-ft",
    "mc1": "bigga",
    "mc2": "ft",
    "title": "BIGGA vs F.T",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "6",
    "slug": "saidu-vs-aymuni",
    "mc1": "saidu",
    "mc2": "aymuni",
    "title": "SAIDU vs AYMUNI",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "7",
    "slug": "bigga-vs-aymuni",
    "mc1": "bigga",
    "mc2": "aymuni",
    "title": "BIGGA vs AYMUNI",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 1
  },
  {
    "id": "9",
    "slug": "kmarh-vs-kurly",
    "mc1": "kmarh",
    "mc2": "kurly",
    "title": "KMARH vs KURLY",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "10",
    "slug": "frizz-price-vs-ren-dmc",
    "mc1": "frizz-price",
    "mc2": "ren-dmc",
    "title": "FRIZZ PRICE vs REN DMC",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "11",
    "slug": "lil-shakz-vs-pocaa",
    "mc1": "lil-shakz",
    "mc2": "pocaa",
    "title": "LIL SHAKZ VS POCAA",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "12",
    "slug": "cheezee-vs-el-bandzo",
    "mc1": "cheezee",
    "mc2": "el-bandzo",
    "title": "CHEEZEE VS EL BANDZO",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "13",
    "slug": "lil-shakz-vs-ren-dmc",
    "mc1": "lil-shakz",
    "mc2": "ren-dmc",
    "title": "LIL SHAKZ VS REN DMC",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "14",
    "slug": "kmarh-vs-cheezee",
    "mc1": "kmarh",
    "mc2": "cheezee",
    "title": "KMARH VS CHEEZEE",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "15",
    "slug": "kmarh-vs-lil-shakz",
    "mc1": "kmarh",
    "mc2": "lil-shakz",
    "title": "KMARH VS LIL SHAKZ",
    "theme": "pengame",
    "season": 2
  },
  {
    "id": "16",
    "slug": "dan-dannah-vs-amity",
    "mc1": "dan-dannah",
    "mc2": "amity",
    "title": "DAN DANNAH vs AMITY",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "17",
    "slug": "dbc-vs-ren-dmc",
    "mc1": "dbc",
    "mc2": "ren-dmc",
    "title": "DBC vs REN DMC",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "18",
    "slug": "skamz-vs-junie",
    "mc1": "skamz",
    "mc2": "junie",
    "title": "SKAMZ vs JUNIE",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "19",
    "slug": "icuredamsterdam-vs-f-don",
    "mc1": "icuredamsterdam",
    "mc2": "f-don",
    "title": "ICUREDAMSTERDAM vs F-DON",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "20",
    "slug": "kmarh-vs-ft-s3",
    "mc1": "kmarh",
    "mc2": "ft",
    "title": "KMARH vs F.T",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "21",
    "slug": "kmarh-vs-ft-2",
    "mc1": "kmarh",
    "mc2": "ft",
    "title": "KMARH vs F.T 2",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "22",
    "slug": "animal-vs-ft",
    "mc1": "animal",
    "mc2": "ft",
    "title": "ANIMAL vs F.T",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "23",
    "slug": "dbc-vs-amity",
    "mc1": "dbc",
    "mc2": "amity",
    "title": "DBC vs AMITY",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "24",
    "slug": "dan-dannah-vs-ren-dmc-s3",
    "mc1": "dan-dannah",
    "mc2": "ren-dmc",
    "title": "DAN DANNAH vs REN DMC",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "25",
    "slug": "skamz-vs-icuredamsterdam",
    "mc1": "skamz",
    "mc2": "icuredamsterdam",
    "title": "SKAMZ vs ICUREDAMSTERDAM",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "26",
    "slug": "junie-vs-f-don",
    "mc1": "junie",
    "mc2": "f-don",
    "title": "JUNIE vs F-DON",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "27",
    "slug": "kmarh-vs-animal",
    "mc1": "kmarh",
    "mc2": "animal",
    "title": "KMARH vs ANIMAL",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "28",
    "slug": "messie-vs-bmf-alz",
    "mc1": "messie",
    "mc2": "bmf-alz",
    "title": "MESSIE vs BMF ALZ",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "29",
    "slug": "amity-vs-ren-dmc",
    "mc1": "amity",
    "mc2": "ren-dmc",
    "title": "AMITY vs REN DMC",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "30",
    "slug": "dan-dannah-vs-dbc",
    "mc1": "dan-dannah",
    "mc2": "dbc",
    "title": "DAN DANNAH vs DBC",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "31",
    "slug": "junie-vs-icuredamsterdam",
    "mc1": "junie",
    "mc2": "icuredamsterdam",
    "title": "JUNIE vs ICUREDAMSTERDAM",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "32",
    "slug": "skamz-vs-f-don",
    "mc1": "skamz",
    "mc2": "f-don",
    "title": "SKAMZ vs F-DON",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "33",
    "slug": "ren-dmc-vs-skamz",
    "mc1": "ren-dmc",
    "mc2": "skamz",
    "title": "REN DMC vs SKAMZ",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "34",
    "slug": "ft-vs-bmf-alz",
    "mc1": "ft",
    "mc2": "bmf-alz",
    "title": "F.T vs BMF ALZ",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "35",
    "slug": "kmarh-vs-messie",
    "mc1": "kmarh",
    "mc2": "messie",
    "title": "KMARH vs MESSIE",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "36",
    "slug": "f-don-vs-dan-dannah",
    "mc1": "f-don",
    "mc2": "dan-dannah",
    "title": "F-DON vs DAN DANNAH",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "37",
    "slug": "kmarh-vs-f-don",
    "mc1": "kmarh",
    "mc2": "f-don",
    "title": "KMARH vs F-DON",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "38",
    "slug": "f-don-vs-skamz",
    "mc1": "f-don",
    "mc2": "skamz",
    "title": "F-DON vs SKAMZ",
    "theme": "pengame",
    "season": 3
  },
  {
    "id": "39",
    "slug": "skamz-vs-dan-dannah-s4",
    "mc1": "skamz",
    "mc2": "dan-dannah",
    "title": "SKAMZ vs DAN DANNAH",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "40",
    "slug": "cheezee-vs-whoisorion",
    "mc1": "cheezee",
    "mc2": "whoisorion",
    "title": "CHEEZEE vs WHOISORION",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "41",
    "slug": "f-don-vs-aymuni-2",
    "mc1": "f-don",
    "mc2": "aymuni",
    "title": "F-DON vs AYMUNI 2",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "42",
    "slug": "dhani-vs-skamz",
    "mc1": "dhani",
    "mc2": "skamz",
    "title": "DHANI vs SKAMZ",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "43",
    "slug": "sevz-vs-grams",
    "mc1": "sevz",
    "mc2": "grams",
    "title": "SEVZ vs GRAMS",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "44",
    "slug": "black-t-vs-renaya",
    "mc1": "black-t",
    "mc2": "renaya",
    "title": "BLACK T vs RENAYA",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "45",
    "slug": "drizzgb-vs-grams",
    "mc1": "drizzgb",
    "mc2": "grams",
    "title": "DRIZZGB vs GRAMS",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "46",
    "slug": "sevz-vs-skamz",
    "mc1": "sevz",
    "mc2": "skamz",
    "title": "SEVZ vs SKAMZ",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "47",
    "slug": "a-petrelli-vs-smil3z",
    "mc1": "a-petrelli",
    "mc2": "smil3z",
    "title": "A PETRELLI vs SMIL3Z",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "48",
    "slug": "f-don-vs-whoisorion",
    "mc1": "f-don",
    "mc2": "whoisorion",
    "title": "F-DON vs WHOISORION",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "49",
    "slug": "ft-vs-prynlee",
    "mc1": "ft",
    "mc2": "prynlee",
    "title": "F.T vs PRYNLEE",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "50",
    "slug": "drizzgb-vs-aliaano",
    "mc1": "drizzgb",
    "mc2": "aliaano",
    "title": "DRIZZGB vs ALIAANO",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "51",
    "slug": "dan-dannah-vs-smil3z",
    "mc1": "dan-dannah",
    "mc2": "smil3z",
    "title": "DAN DANNAH Vs SMIL3Z",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "52",
    "slug": "drizzgb-vs-whoisorion",
    "mc1": "drizzgb",
    "mc2": "whoisorion",
    "title": "DRIZZGB Vs WHOISORION",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "53",
    "slug": "whoisorion-vs-renaya",
    "mc1": "whoisorion",
    "mc2": "renaya",
    "title": "WHOISORION Vs RENAYA",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "54",
    "slug": "skamz-vs-grams-s4",
    "mc1": "skamz",
    "mc2": "grams",
    "title": "SKAMZ Vs GRAMS",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "55",
    "slug": "f-don-vs-jc",
    "mc1": "f-don",
    "mc2": "jc",
    "title": "F-DON Vs JC",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "56",
    "slug": "skamz-vs-whoisorion",
    "mc1": "skamz",
    "mc2": "whoisorion",
    "title": "SKAMZ vs WHOISORION",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "57",
    "slug": "ren-dmc-vs-renaya-s4",
    "mc1": "ren-dmc",
    "mc2": "renaya",
    "title": "REN DMC Vs RENAYA",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "58",
    "slug": "skamz-vs-kandi",
    "mc1": "skamz",
    "mc2": "kandi",
    "title": "SKAMZ Vs KANDI",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "59",
    "slug": "ft-vs-iiiberealz",
    "mc1": "ft",
    "mc2": "iiiberealz",
    "title": "F.T vs iiiBEREALZ",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "60",
    "slug": "cheezee-vs-smil3z",
    "mc1": "cheezee",
    "mc2": "smil3z",
    "title": "CHEEZEE Vs SMIL3Z",
    "theme": "pengame",
    "season": 4
  },
  {
    "id": "61",
    "slug": "drizzgb-vs-kandi-christmas",
    "mc1": "drizzgb",
    "mc2": "kandi",
    "title": "DRIZZGB Vs KANDI",
    "theme": "pengame",
    "season": 3.5
  },
  {
    "id": "62",
    "slug": "sevz-vs-twenty8",
    "mc1": "sevz",
    "mc2": "twenty8",
    "title": "SEVZ Vs TWENTY8",
    "theme": "pengame",
    "season": 3.5
  },
  {
    "id": "63",
    "slug": "grams-vs-storm",
    "mc1": "grams",
    "mc2": "storm",
    "title": "GRAMS vs STORM",
    "date": "25 December 2023",
    "theme": "pengame",
    "season": 3.5
  },
  {
    "id": "64",
    "slug": "ft-vs-blazn",
    "mc1": "ft",
    "mc2": "blazn",
    "title": "F.T vs BLAZN",
    "theme": "pengame",
    "season": 3.5
  },
  {
    "id": "65",
    "slug": "ren-dmc-vs-blazn-tourney",
    "mc1": "ren-dmc",
    "mc2": "blazn",
    "title": "REN DMC vs BLAZN",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "66",
    "slug": "drizzgb-vs-skamz-tourney",
    "mc1": "drizzgb",
    "mc2": "skamz",
    "title": "DRIZZGB vs SKAMZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "67",
    "slug": "skamz-vs-blazn-tourney",
    "mc1": "skamz",
    "mc2": "blazn",
    "title": "SKAMZ VS BLAZN",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "68",
    "slug": "ren-dmc-vs-drizzgb-tourney",
    "mc1": "ren-dmc",
    "mc2": "drizzgb",
    "title": "REN DMC VS DRIZZGB",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "69",
    "slug": "drizzgb-vs-blazn-tourney",
    "mc1": "drizzgb",
    "mc2": "blazn",
    "title": "DRIZZGB vs BLAZN",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "70",
    "slug": "skamz-vs-ren-dmc-tourney",
    "mc1": "skamz",
    "mc2": "ren-dmc",
    "title": "SKAMZ vs REN DMC",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group A"
  },
  {
    "id": "71",
    "slug": "f-don-vs-iiiberealz-tourney",
    "mc1": "f-don",
    "mc2": "iiiberealz",
    "title": "F-DON vs iiiBEREALZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "72",
    "slug": "smil3z-vs-deeno-tourney",
    "mc1": "smil3z",
    "mc2": "deeno",
    "title": "SMIL3Z vs DEENO",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "73",
    "slug": "f-don-vs-deeno-tourney",
    "mc1": "f-don",
    "mc2": "deeno",
    "title": "F-DON vs DEENO",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "74",
    "slug": "smil3z-vs-iiiberealz-tourney",
    "mc1": "smil3z",
    "mc2": "iiiberealz",
    "title": "SMIL3Z vs iiiBEREALZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "75",
    "slug": "iiiberealz-vs-deeno-tourney",
    "mc1": "iiiberealz",
    "mc2": "deeno",
    "title": "iiiBEREALZ vs DEENO",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "76",
    "slug": "f-don-vs-smil3z-tourney",
    "mc1": "f-don",
    "mc2": "smil3z",
    "title": "F-DON vs SMIL3Z",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group B"
  },
  {
    "id": "77",
    "slug": "whoisorion-vs-kandi-tourney",
    "mc1": "whoisorion",
    "mc2": "kandi",
    "title": "WHOISORION vs KANDI",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "78",
    "slug": "cheezee-vs-dan-dannah-tourney",
    "mc1": "cheezee",
    "mc2": "dan-dannah",
    "title": "CHEEZEE vs DAN DANNAH",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "79",
    "slug": "whoisorion-vs-cheezee-tourney",
    "mc1": "whoisorion",
    "mc2": "cheezee",
    "title": "WHOISORION vs CHEEZEE",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "80",
    "slug": "dan-dannah-vs-kandi-tourney",
    "mc1": "dan-dannah",
    "mc2": "kandi",
    "title": "DAN DANNAH vs KANDI",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "81",
    "slug": "cheezee-vs-kandi-tourney",
    "mc1": "cheezee",
    "mc2": "kandi",
    "title": "CHEEZEE vs KANDI",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "82",
    "slug": "whoisorion-vs-dan-dannah-tourney",
    "mc1": "whoisorion",
    "mc2": "dan-dannah",
    "title": "WHOISORION VS DAN DANNAH",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group C"
  },
  {
    "id": "83",
    "slug": "sevz-vs-prynlee-tourney",
    "mc1": "sevz",
    "mc2": "prynlee",
    "title": "SEVZ vs PRYNLEE",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group D"
  },
  {
    "id": "84",
    "slug": "sevz-vs-ft-tourney",
    "mc1": "sevz",
    "mc2": "ft",
    "title": "SEVZ vs F.T",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group D"
  },
  {
    "id": "85",
    "slug": "grams-vs-prynlee-tourney",
    "mc1": "grams",
    "mc2": "prynlee",
    "title": "GRAMS vs PRYNLEE",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group D"
  },
  {
    "id": "86",
    "slug": "sevz-vs-grams-tourney",
    "mc1": "sevz",
    "mc2": "grams",
    "title": "SEVZ vs GRAMS",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group D"
  },
  {
    "id": "87",
    "slug": "grams-vs-ft-tourney",
    "mc1": "grams",
    "mc2": "ft",
    "title": "GRAMS vs F.T",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Group D"
  },
  {
    "id": "88",
    "slug": "sevz-vs-cheezee-tourney",
    "mc1": "sevz",
    "mc2": "cheezee",
    "title": "SEVZ vs CHEEZEE",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Quarter Finals"
  },
  {
    "id": "89",
    "slug": "whoisorion-vs-drizzgb-tourney",
    "mc1": "whoisorion",
    "mc2": "drizzgb",
    "title": "WHOISORION vs DRIZZGB",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Quarter Finals"
  },
  {
    "id": "90",
    "slug": "smil3z-vs-skamz-tourney",
    "mc1": "smil3z",
    "mc2": "skamz",
    "title": "SMIL3Z vs SKAMZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Quarter Finals"
  },
  {
    "id": "91",
    "slug": "ren-dmc-vs-f-don-tourney",
    "mc1": "ren-dmc",
    "mc2": "f-don",
    "title": "REN DMC vs F-DON",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Quarter Finals"
  },
  {
    "id": "92",
    "slug": "2v2-tourney-2023",
    "mc1": "whoisorion",
    "mc2": "grams",
    "title": "WHOISORION & iiiBEREALZ vs GRAMS & SMIL3Z",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "2v2"
  },
  {
    "id": "93",
    "slug": "skamz-vs-sevz-tourney",
    "mc1": "skamz",
    "mc2": "sevz",
    "title": "SKAMZ vs SEVZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Semi Finals"
  },
  {
    "id": "94",
    "slug": "ren-dmc-vs-drizzgb-2-tourney",
    "mc1": "ren-dmc",
    "mc2": "drizzgb",
    "title": "REN DMC vs DRIZZGB 2",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Semi Finals"
  },
  {
    "id": "95",
    "slug": "ren-dmc-vs-skamz-final",
    "mc1": "ren-dmc",
    "mc2": "skamz",
    "title": "REN DMC vs SKAMZ",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Final"
  },
  {
    "id": "96",
    "slug": "kandi-vs-prynlee-s5",
    "mc1": "kandi",
    "mc2": "prynlee",
    "title": "KANDI vs PRYNLEE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "97",
    "slug": "iiiberealz-vs-ess2mad-s5",
    "mc1": "iiiberealz",
    "mc2": "ess2mad",
    "title": "iiiBEREALZ vs ESS2MAD",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "98",
    "slug": "jm-vs-fendry-s5",
    "mc1": "jm",
    "mc2": "fendry",
    "title": "JM vs FENDRY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "99",
    "slug": "missink-vs-cucha-s5",
    "mc1": "missink",
    "mc2": "cucha",
    "title": "MISSINK vs CUCHA",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "100",
    "slug": "grams-vs-whoisorion-s5",
    "mc1": "grams",
    "mc2": "whoisorion",
    "title": "GRAMS vs WHOISORION",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "101",
    "slug": "passive-vs-hunce-s5",
    "mc1": "passive",
    "mc2": "hunce",
    "title": "PASSIVE vs HUNCE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "102",
    "slug": "anbu-sensei-vs-deeno-s5",
    "mc1": "anbu-sensei",
    "mc2": "deeno",
    "title": "ANBU SENSEI vs DEENO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "103",
    "slug": "dan-dannah-vs-iiiberealz-s5",
    "mc1": "dan-dannah",
    "mc2": "iiiberealz",
    "title": "DAN DANNAH vs iiiBEREALZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles"
  },
  {
    "id": "104",
    "slug": "domi-dusk-vs-jaycee-s5",
    "mc1": "domi-dusk",
    "mc2": "jaycee",
    "title": "DOMI DUSK vs JAYCEE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles"
  },
  {
    "id": "105",
    "slug": "ess2mad-vs-deeno-s5",
    "mc1": "ess2mad",
    "mc2": "deeno",
    "title": "ESS2MAD vs DEENO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles"
  },
  {
    "id": "106",
    "slug": "hunce-vs-anbu-sensei-s5",
    "mc1": "hunce",
    "mc2": "anbu-sensei",
    "title": "HUNCE vs ANBU SENSEI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles"
  },
  {
    "id": "107",
    "slug": "whoisorion-vs-kandi-s5",
    "mc1": "whoisorion",
    "mc2": "kandi",
    "title": "WHOISORION vs KANDI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Wrexham Battles*"
  },
  {
    "id": "108",
    "slug": "drizzgb-vs-jm-s5",
    "mc1": "drizzgb",
    "mc2": "jm",
    "title": "DRIZZGB vs JM",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Wrexham Battles*"
  },
  {
    "id": "109",
    "slug": "che3kz-vs-premeboi-j-s5",
    "mc1": "che3kz",
    "mc2": "premeboi-j",
    "title": "CHE3KZ vs PREMEBOI J",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "110",
    "slug": "zen-vs-caveman-s5",
    "mc1": "zen",
    "mc2": "caveman",
    "title": "ZEN vs CAVEMAN",
    "date": "18 September 2024",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "111",
    "slug": "rahika-vs-ricko-s5",
    "mc1": "rahika",
    "mc2": "ricko",
    "title": "RAHIKA vs RICKO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "112",
    "slug": "karma10tnf-vs-mr-benz-s5",
    "mc1": "karma10tnf",
    "mc2": "mr-benz",
    "title": "KARMA10TNF vs MR.BENZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "113",
    "slug": "marcel-vs-penno-s5",
    "mc1": "marcel",
    "mc2": "penno",
    "title": "MARCEL vs PENNO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "114",
    "slug": "millz-vs-foz-s5",
    "mc1": "millz",
    "mc2": "foz",
    "title": "MILLZ vs FOZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "115",
    "slug": "rasiah-vs-220-s5",
    "mc1": "rasiah",
    "mc2": "220",
    "title": "RA'SIAH vs 220",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "116",
    "slug": "kime-vs-caveman-s5",
    "mc1": "kime",
    "mc2": "caveman",
    "title": "K.I.M.E vs CAVEMAN",
    "date": "7 December 2024",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "117",
    "slug": "che3kz-vs-marcel-s5",
    "mc1": "che3kz",
    "mc2": "marcel",
    "title": "CHE3KZ vs MARCEL",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "118",
    "slug": "jm-vs-mr-benz-s5",
    "mc1": "jm",
    "mc2": "mr-benz",
    "title": "JM vs MR.BENZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "119",
    "slug": "millz-vs-karma10tnf-s5",
    "mc1": "millz",
    "mc2": "karma10tnf",
    "title": "MILLZ vs KARMA10TNF",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "120",
    "slug": "rasiah-vs-fendry-s5",
    "mc1": "rasiah",
    "mc2": "fendry",
    "title": "RA'SIAH vs FENDRY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles"
  },
  {
    "id": "121",
    "slug": "whoisorion-cheezee-vs-drizzgb-trappy-s5",
    "mc1": "whoisorion",
    "mc2": "drizzgb",
    "title": "WHOISORION & CHEEZEE vs DRIZZGB & TRAPPY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "122",
    "slug": "grams-passive-vs-storm-ad-s5",
    "mc1": "grams",
    "mc2": "storm",
    "title": "GRAMS & PASSIVE vs STORM & AD",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "123",
    "slug": "smil3z-iiiberealz-vs-f-don-dan-dannah-s5",
    "mc1": "smil3z",
    "mc2": "f-don",
    "title": "SMIL3Z & iiiBEREALZ vs F-DON & DAN DANNAH",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "124",
    "slug": "skamz-sevz-vs-kandi-deeno-s5",
    "mc1": "skamz",
    "mc2": "kandi",
    "title": "SKAMZ & SEVZ vs KANDI & DEENO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "125",
    "slug": "drizzgb-trappy-vs-grams-passive-s5",
    "mc1": "drizzgb",
    "mc2": "grams",
    "title": "DRIZZGB & TRAPPY vs GRAMS & PASSIVE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "126",
    "slug": "drizzgb-trappy-vs-f-don-dan-dannah-s5",
    "mc1": "drizzgb",
    "mc2": "f-don",
    "title": "DRIZZGB & TRAPPY vs F-DON & DAN DANNAH",
    "date": "25 December 2024",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament"
  },
  {
    "id": "127",
    "slug": "deeno-vs-jm-s5",
    "mc1": "deeno",
    "mc2": "jm",
    "title": "DEENO vs JM",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles"
  },
  {
    "id": "128",
    "slug": "passive-vs-zen-s5",
    "mc1": "passive",
    "mc2": "zen",
    "title": "PASSIVE vs ZEN",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles"
  },
  {
    "id": "129",
    "slug": "domi-dusk-vs-fendry-s5",
    "mc1": "domi-dusk",
    "mc2": "fendry",
    "title": "DOMI DUSK vs FENDRY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles"
  },
  {
    "id": "130",
    "slug": "iiiberealz-vs-rasiah-s5",
    "mc1": "iiiberealz",
    "mc2": "rasiah",
    "title": "iiiBEREALZ vs RA'SIAH",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles"
  },
  {
    "id": "131",
    "slug": "jaycee-vs-kime-s5",
    "mc1": "jaycee",
    "mc2": "kime",
    "title": "JAYCEE vs K.I.M.E",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles"
  },
  {
    "id": "132",
    "slug": "cucha-vs-karma10tnf-s5",
    "mc1": "cucha",
    "mc2": "karma10tnf",
    "title": "CUCHA vs KARMA10TNF",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2024 Manchester Battles",
    "customEp": "5xM1"
  },
  {
    "id": "133",
    "slug": "whoisorion-vs-zen-s5",
    "mc1": "whoisorion",
    "mc2": "zen",
    "title": "WHOISORION vs ZEN",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2024 Manchester Battles",
    "customEp": "5xM2"
  },
  {
    "id": "134",
    "slug": "deeno-vs-kandi-s5",
    "mc1": "deeno",
    "mc2": "kandi",
    "title": "DEENO vs KANDI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2024 Manchester Battles",
    "customEp": "5xM3"
  },
  {
    "id": "135",
    "slug": "storm-vs-cheezee-s5",
    "mc1": "storm",
    "mc2": "cheezee",
    "title": "STORM vs CHEEZEE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2024 Manchester Battles",
    "customEp": "5xM4"
  },
  {
    "id": "136",
    "slug": "missink-vs-prynlee-s5",
    "mc1": "missink",
    "mc2": "prynlee",
    "title": "MISSINK vs PRYNLEE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC1"
  },
  {
    "id": "137",
    "slug": "2mwad-vs-skamz-s5",
    "mc1": "2mwad",
    "mc2": "skamz",
    "title": "2MWAD vs SKAMZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC2"
  },
  {
    "id": "138",
    "slug": "che3kz-vs-cucha-s5",
    "mc1": "che3kz",
    "mc2": "cucha",
    "title": "CHE3KZ vs CUCHA",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC3"
  },
  {
    "id": "139",
    "slug": "anbu-sensei-vs-smil3z-s5",
    "mc1": "anbu-sensei",
    "mc2": "smil3z",
    "title": "ANBU SENSEI vs SMIL3Z",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC4"
  },
  {
    "id": "140",
    "slug": "marcel-vs-kandi-s5",
    "mc1": "marcel",
    "mc2": "kandi",
    "title": "MARCEL vs KANDI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC5"
  },
  {
    "id": "141",
    "slug": "domi-dusk-vs-hunce-s5-2025",
    "mc1": "domi-dusk",
    "mc2": "hunce",
    "title": "DOMI DUSK vs HUNCE",
    "date": "8 February 2025",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC6"
  },
  {
    "id": "142",
    "slug": "mello-vs-tapped24-s5",
    "mc1": "mello",
    "mc2": "tapped24",
    "title": "MELLO vs TAPPED24",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5xC7"
  },
  {
    "id": "143",
    "slug": "grams-vs-mr-benz-s5-2025",
    "mc1": "grams",
    "mc2": "mr-benz",
    "title": "GRAMS vs MR.BENZ",
    "date": "19 February 2025",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2"
  },
  {
    "id": "144",
    "slug": "whoisorion-vs-kandi-2-s5",
    "mc1": "whoisorion",
    "mc2": "kandi",
    "title": "WHOISORION vs KANDI 2",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2"
  },
  {
    "id": "145",
    "slug": "fendry-vs-jaycee-s5-2025",
    "mc1": "fendry",
    "mc2": "jaycee",
    "title": "FENDRY vs JAYCEE",
    "date": "26 February 2025",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2"
  },
  {
    "id": "146",
    "slug": "cucha-vs-char-b-s5",
    "mc1": "cucha",
    "mc2": "char-b",
    "title": "CUCHA vs CHAR.B",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2"
  },
  {
    "id": "147",
    "slug": "kandi-vs-rasiah-coldwar",
    "mc1": "kandi",
    "mc2": "rasiah",
    "title": "KANDI vs RA'SIAH",
    "date": "5 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "148",
    "slug": "passive-vs-skamz-coldwar",
    "mc1": "passive",
    "mc2": "skamz",
    "title": "PASSIVE vs SKAMZ",
    "date": "8 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "149",
    "slug": "passive-vs-rasiah-coldwar",
    "mc1": "passive",
    "mc2": "rasiah",
    "title": "PASSIVE vs RA'SIAH",
    "date": "12 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "150",
    "slug": "kandi-vs-skamz-coldwar",
    "mc1": "kandi",
    "mc2": "skamz",
    "title": "KANDI vs SKAMZ",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "151",
    "slug": "skamz-vs-rasiah-coldwar",
    "mc1": "skamz",
    "mc2": "rasiah",
    "title": "SKAMZ vs RA'SIAH",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "152",
    "slug": "passive-vs-kandi-coldwar",
    "mc1": "passive",
    "mc2": "kandi",
    "title": "PASSIVE vs KANDI",
    "date": "22 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "Group A"
  },
  {
    "id": "153",
    "slug": "grams-vs-missink-coldwar",
    "mc1": "grams",
    "mc2": "missink",
    "title": "GRAMS vs MISSINK",
    "date": "24 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "(16th March 2025 battles)"
  },
  {
    "id": "154",
    "slug": "kandi-vs-bonnie-godiva-coldwar",
    "mc1": "kandi",
    "mc2": "bonnie-godiva",
    "title": "KANDI vs BONNIE GODIVA",
    "date": "28 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "(16th March 2025 battles)"
  },
  {
    "id": "155",
    "slug": "tapped24-vs-jmuni-coldwar",
    "mc1": "tapped24",
    "mc2": "jmuni",
    "title": "TAPPED24 vs JMUNI",
    "date": "31 March 2025",
    "theme": "pengame",
    "season": 6,
    "subGroup": "(16th March 2025 battles)"
  },
  {
    "id": "156",
    "slug": "drizzgb-vs-sevz-coldwar",
    "mc1": "drizzgb",
    "mc2": "sevz",
    "title": "DRIZZGB vs SEVZ",
    "theme": "pengame",
    "season": 6,
    "subGroup": "(16th March 2025 battles)"
  },
  {
    "id": "157",
    "slug": "f-don-vs-kime-coldwar",
    "mc1": "f-don",
    "mc2": "kime",
    "title": "F-DON vs K.I.M.E",
    "theme": "pengame",
    "season": 6,
    "subGroup": "(16th March 2025 battles)"
  }
];

export const lastUpdated = "Apr 06, 2026";
