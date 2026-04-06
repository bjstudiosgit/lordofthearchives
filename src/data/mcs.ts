export interface MC {
  id: string;
  slug: string;
  name: string;
  nickname?: string;
  battles: number;
  wins: number;
  losses: number;
  style: string;
  image: string;
  bio: string;
  isActive?: boolean;
  weightClass?: string;
  height?: string;
  location?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  quote?: string;
  tags?: string[];
}

export const mcs: MC[] = [
  {
    id: "f-don",
    slug: "f-don",
    name: "F-DON",
    battles: 17,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/fdon/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "aymuni",
    slug: "aymuni",
    name: "AYMUNI",
    battles: 4,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/aymuni/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "ashley-tragic",
    slug: "ashley-tragic",
    name: "ASHLEY TRAGIC",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/ashley/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "ft",
    slug: "ft",
    name: "F.T",
    battles: 11,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/ft/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "shorty-woa",
    slug: "shorty-woa",
    name: "SHORTY WOA",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/shorty/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "saidu",
    slug: "saidu",
    name: "SAIDU",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/saidu/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "bigga",
    slug: "bigga",
    name: "BIGGA",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Powerhouse",
    image: "https://picsum.photos/seed/bigga/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "dan-dannah",
    slug: "dan-dannah",
    name: "DAN DANNAH",
    battles: 13,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/dan/400/400",
    bio: "PenGame Season 1 artist."
  },
  {
    id: "kmarh",
    slug: "kmarh",
    name: "KMARH",
    battles: 8,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/kmarh/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "kurly",
    slug: "kurly",
    name: "KURLY",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/kurly/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "frizz-price",
    slug: "frizz-price",
    name: "FRIZZ PRICE",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/frizz/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "ren-dmc",
    slug: "ren-dmc",
    name: "REN DMC",
    battles: 13,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/ren/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "lil-shakz",
    slug: "lil-shakz",
    name: "LIL SHAKZ",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/shakz/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "pocaa",
    slug: "pocaa",
    name: "POCAA",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/pocaa/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "cheezee",
    slug: "cheezee",
    name: "CHEEZEE",
    battles: 10,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/cheezee/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "el-bandzo",
    slug: "el-bandzo",
    name: "EL BANDZO",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Powerhouse",
    image: "https://picsum.photos/seed/bandzo/400/400",
    bio: "PenGame Season 2 artist."
  },
  {
    id: "amity",
    slug: "amity",
    name: "AMITY",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/amity/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "dbc",
    slug: "dbc",
    name: "DBC",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/dbc/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "skamz",
    slug: "skamz",
    name: "SKAMZ",
    battles: 22,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/skamz/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "junie",
    slug: "junie",
    name: "JUNIE",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/junie/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "icuredamsterdam",
    slug: "icuredamsterdam",
    name: "ICUREDAMSTERDAM",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/icure/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "animal",
    slug: "animal",
    name: "ANIMAL",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/animal/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "messie",
    slug: "messie",
    name: "MESSIE",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/messie/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "bmf-alz",
    slug: "bmf-alz",
    name: "BMF ALZ",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Powerhouse",
    image: "https://picsum.photos/seed/bmf/400/400",
    bio: "PenGame Season 3 artist."
  },
  {
    id: "whoisorion",
    slug: "whoisorion",
    name: "WHOISORION",
    battles: 14,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/orion/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "dhani",
    slug: "dhani",
    name: "DHANI",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/dhani/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "sevz",
    slug: "sevz",
    name: "SEVZ",
    battles: 10,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/sevz/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "grams",
    slug: "grams",
    name: "GRAMS",
    battles: 12,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/grams/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "black-t",
    slug: "black-t",
    name: "BLACK T",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/blackt/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "renaya",
    slug: "renaya",
    name: "RENAYA",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/renaya/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "drizzgb",
    slug: "drizzgb",
    name: "DRIZZGB",
    battles: 14,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/drizz/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "a-petrelli",
    slug: "a-petrelli",
    name: "A PETRELLI",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/petrelli/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "smil3z",
    slug: "smil3z",
    name: "SMIL3Z",
    battles: 9,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/smil3z/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "prynlee",
    slug: "prynlee",
    name: "PRYNLEE",
    battles: 5,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/prynlee/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "aliaano",
    slug: "aliaano",
    name: "ALIAANO",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/aliaano/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "jc",
    slug: "jc",
    name: "JC",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/jc/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "kandi",
    slug: "kandi",
    name: "KANDI",
    battles: 15,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/kandi/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "iiiberealz",
    slug: "iiiberealz",
    name: "iiiBEREALZ",
    battles: 8,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/berealz/400/400",
    bio: "PenGame Season 4 artist."
  },
  {
    id: "twenty8",
    slug: "twenty8",
    name: "TWENTY8",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/twenty8/400/400",
    bio: "PenGame Christmas 2023 artist."
  },
  {
    id: "storm",
    slug: "storm",
    name: "STORM",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/storm/400/400",
    bio: "PenGame Christmas 2023 artist."
  },
  {
    id: "blazn",
    slug: "blazn",
    name: "BLAZN",
    battles: 4,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/blazn/400/400",
    bio: "PenGame Christmas 2023 artist."
  },
  {
    id: "deeno",
    slug: "deeno",
    name: "DEENO",
    battles: 8,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/deeno/400/400",
    bio: "PenGame 2023 Tournament artist."
  },
  {
    id: "ess2mad",
    slug: "ess2mad",
    name: "ESS2MAD",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/ess2mad/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "jm",
    slug: "jm",
    name: "JM",
    battles: 4,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/jm/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "fendry",
    slug: "fendry",
    name: "FENDRY",
    battles: 4,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/fendry/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "missink",
    slug: "missink",
    name: "MISSINK",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/missink/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "cucha",
    slug: "cucha",
    name: "CUCHA",
    battles: 4,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/cucha/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "passive",
    slug: "passive",
    name: "PASSIVE",
    battles: 7,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/passive/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "hunce",
    slug: "hunce",
    name: "HUNCE",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/hunce/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "anbu-sensei",
    slug: "anbu-sensei",
    name: "ANBU SENSEI",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/anbu/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "domi-dusk",
    slug: "domi-dusk",
    name: "DOMI DUSK",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/domi/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "jaycee",
    slug: "jaycee",
    name: "JAYCEE",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/jaycee/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "trappy",
    slug: "trappy",
    name: "TRAPPY",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/trappy/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "ad",
    slug: "ad",
    name: "AD",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/ad/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "che3kz",
    slug: "che3kz",
    name: "CHE3KZ",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/che3kz/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "premeboi-j",
    slug: "premeboi-j",
    name: "PREMEBOI J",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/preme/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "zen",
    slug: "zen",
    name: "ZEN",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/zen/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "caveman",
    slug: "caveman",
    name: "CAVEMAN",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/caveman/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "rahika",
    slug: "rahika",
    name: "RAHIKA",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/rahika/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "ricko",
    slug: "ricko",
    name: "RICKO",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/ricko/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "karma10tnf",
    slug: "karma10tnf",
    name: "KARMA10TNF",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/karma/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "mr-benz",
    slug: "mr-benz",
    name: "MR.BENZ",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/mrbenz/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "marcel",
    slug: "marcel",
    name: "MARCEL",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/marcel/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "penno",
    slug: "penno",
    name: "PENNO",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/penno/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "millz",
    slug: "millz",
    name: "MILLZ",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/millz/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "foz",
    slug: "foz",
    name: "FOZ",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: "https://picsum.photos/seed/foz/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "rasiah",
    slug: "rasiah",
    name: "RA'SIAH",
    battles: 6,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/rasiah/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "220",
    slug: "220",
    name: "220",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/220/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "kime",
    slug: "kime",
    name: "K.I.M.E",
    battles: 3,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/kime/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "2mwad",
    slug: "2mwad",
    name: "2MWAD",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/2mwad/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "mello",
    slug: "mello",
    name: "MELLO",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/mello/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "tapped24",
    slug: "tapped24",
    name: "TAPPED24",
    battles: 2,
    wins: 0,
    losses: 0,
    style: "Aggressive",
    image: "https://picsum.photos/seed/tapped24/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "char-b",
    slug: "char-b",
    name: "CHAR.B",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/charb/400/400",
    bio: "PenGame Season 5 artist."
  },
  {
    id: "bonnie-godiva",
    slug: "bonnie-godiva",
    name: "BONNIE GODIVA",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Lyrical",
    image: "https://picsum.photos/seed/bonnie/400/400",
    bio: "PenGame Cold War artist."
  },
  {
    id: "jmuni",
    slug: "jmuni",
    name: "JMUNI",
    battles: 1,
    wins: 0,
    losses: 0,
    style: "Technical",
    image: "https://picsum.photos/seed/jmuni/400/400",
    bio: "PenGame Cold War artist."
  }
];
