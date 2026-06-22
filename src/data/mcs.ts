import type { Battle } from "./battleTypes";
import { pengameBattles } from "./pengameBattles";

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
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  quote?: string;
  tags?: string[];
  badges?: string[];
}

export const mcs: MC[] = [
  {
    "id": "f-don",
    "slug": "f-don",
    "name": "F-DON",
    "nickname": "The Lyrical Don",
    "battles": 20,
    "wins": 13,
    "losses": 4,
    "style": "Lyrical",
    "image": "/mc-Fdon.png",
    "bio": "PenGame Season 3 Champion. Known for his intricate wordplay and deep metaphors, F-DON is a veteran of the scene who consistently pushes the boundaries of lyricism.",
    "weightClass": "Lightweight",
    "height": "5'9\"",
    "location": "London",
    "instagram": "effdon",
    "quote": "The pen is mightier than the sword, but my bars are sharper than both.",
    "badges": [
      "VETERAN",
      "LYRICIST"
    ]
  },
  {
    "id": "aymuni",
    "slug": "aymuni",
    "name": "AYMUNI",
    "nickname": "The Technician",
    "battles": 4,
    "wins": 3,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/aymuni/400/400",
    "bio": "PenGame Season 1 artist. A master of flow and technical precision.",
    "weightClass": "Welterweight",
    "height": "5'11\"",
    "location": "Birmingham",
    "instagram": "aymuni_bars",
    "quote": "Precision over power, every single time.",
    "badges": [
      "DEBUT WINNER",
      "TECHNICAL GENIUS"
    ]
  },
  {
    "id": "ashley-tragic",
    "slug": "ashley-tragic",
    "name": "ASHLEY TRAGIC",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/ashley/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "ft",
    "slug": "ft",
    "name": "Forever Tapped",
    "battles": 10,
    "wins": 5,
    "losses": 4,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/ft/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "shorty-woa",
    "slug": "shorty-woa",
    "name": "SHORTY WOA",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/shorty/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "saidu",
    "slug": "saidu",
    "name": "SAIDU",
    "battles": 2,
    "wins": 1,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/saidu/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "bigga",
    "slug": "bigga",
    "name": "BIGGA",
    "battles": 3,
    "wins": 2,
    "losses": 1,
    "style": "Powerhouse",
    "image": "https://picsum.photos/seed/bigga/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "dan-dannah",
    "slug": "dan-dannah",
    "name": "DAN DANNAH",
    "battles": 18,
    "wins": 2,
    "losses": 10,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/dan/400/400",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "kmarh",
    "slug": "kmarh",
    "name": "KMARH",
    "battles": 8,
    "wins": 6,
    "losses": 2,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/kmarh/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "kurly",
    "slug": "kurly",
    "name": "KURLY",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/kurly/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "frizz-price",
    "slug": "frizz-price",
    "name": "FRIZZ PRICE",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/frizz/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "ren-dmc",
    "slug": "ren-dmc",
    "name": "REN DMC",
    "nickname": "The Legend",
    "battles": 14,
    "wins": 8,
    "losses": 2,
    "style": "Versatile",
    "image": "/rendmc_profile_1776002244532.png",
    "bio": "PenGame Season 4 and 2023 Tournament Champion. Ren DMC is widely regarded as one of the most technically skilled and versatile MCs in the league, with a high win rate to prove it."
  },
  {
    "id": "lil-shakz",
    "slug": "lil-shakz",
    "name": "LIL SHAKZ",
    "battles": 3,
    "wins": 3,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/shakz/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "pocaa",
    "slug": "pocaa",
    "name": "POCAA",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/pocaa/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "cheezee",
    "slug": "cheezee",
    "name": "CHEEZEE",
    "battles": 10,
    "wins": 4,
    "losses": 5,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/cheezee/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "el-bandzo",
    "slug": "el-bandzo",
    "name": "EL BANDZO",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Powerhouse",
    "image": "https://picsum.photos/seed/bandzo/400/400",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "amity",
    "slug": "amity",
    "name": "AMITY",
    "battles": 3,
    "wins": 0,
    "losses": 3,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/amity/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "dbc",
    "slug": "dbc",
    "name": "DBC",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/dbc/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "skamz",
    "slug": "skamz",
    "name": "SKAMZ",
    "nickname": "The Energizer",
    "battles": 21,
    "wins": 12,
    "losses": 7,
    "style": "Aggressive",
    "image": "/skamz_profile_1776002260450.png",
    "bio": "The most active battler in the league. Skamz brings unparalleled energy and aggression to every clash. A finalist in multiple seasons and a core pillar of the PenGame community."
  },
  {
    "id": "junie",
    "slug": "junie",
    "name": "JUNIE",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/junie/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "icuredamsterdam",
    "slug": "icuredamsterdam",
    "name": "ICUREDAMSTERDAM",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/icure/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "animal",
    "slug": "animal",
    "name": "ANIMAL",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/animal/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "messie",
    "slug": "messie",
    "name": "MESSIE 13",
    "battles": 1,
    "wins": 1,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/messie/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "bmf-alz",
    "slug": "bmf-alz",
    "name": "BMF ALZ",
    "battles": 3,
    "wins": 0,
    "losses": 2,
    "style": "Powerhouse",
    "image": "https://picsum.photos/seed/bmf/400/400",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "whoisorion",
    "slug": "whoisorion",
    "name": "WHOISORION",
    "battles": 19,
    "wins": 6,
    "losses": 5,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/orion/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "dhani",
    "slug": "dhani",
    "name": "DHANI",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/dhani/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "sevz",
    "slug": "sevz",
    "name": "SEVZ",
    "battles": 17,
    "wins": 7,
    "losses": 3,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/sevz/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "grams",
    "slug": "grams",
    "name": "GRAMS",
    "battles": 14,
    "wins": 1,
    "losses": 5,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/grams/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "renaya",
    "slug": "renaya",
    "name": "RENAYA",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/renaya/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "drizzgb",
    "slug": "drizzgb",
    "name": "DRIZZGB",
    "battles": 18,
    "wins": 6,
    "losses": 2,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/drizz/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "a-petrelli",
    "slug": "a-petrelli",
    "name": "A PETRELLI",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/petrelli/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "smil3z",
    "slug": "smil3z",
    "name": "SMIL3Z",
    "battles": 19,
    "wins": 12,
    "losses": 3,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/smil3z/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "prynlee",
    "slug": "prynlee",
    "name": "PRYNLEE",
    "battles": 5,
    "wins": 0,
    "losses": 3,
    "style": "Technical",
    "image": "https://picsum.photos/seed/prynlee/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "aliaano",
    "slug": "aliaano",
    "name": "ALIAANO",
    "battles": 3,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/aliaano/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "jc",
    "slug": "jc",
    "name": "JC",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/jc/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "kandi",
    "slug": "kandi",
    "name": "KANDI",
    "battles": 18,
    "wins": 3,
    "losses": 10,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/kandi/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "iiiberealz",
    "slug": "iiiberealz",
    "name": "iiiBEREALZ",
    "battles": 18,
    "wins": 6,
    "losses": 5,
    "style": "Technical",
    "image": "https://picsum.photos/seed/berealz/400/400",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "twenty8",
    "slug": "twenty8",
    "name": "TWENTY8",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/twenty8/400/400",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "storm",
    "slug": "storm",
    "name": "STORM",
    "battles": 5,
    "wins": 1,
    "losses": 1,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/storm/400/400",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "blazn",
    "slug": "blazn",
    "name": "BLAZN",
    "battles": 4,
    "wins": 0,
    "losses": 4,
    "style": "Technical",
    "image": "https://picsum.photos/seed/blazn/400/400",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "deeno",
    "slug": "deeno",
    "name": "DEENO",
    "nickname": "The Viking",
    "battles": 17,
    "wins": 7,
    "losses": 6,
    "style": "Lyrical",
    "image": "/deeno_profile_1776002276273.png",
    "bio": "The Viking of the Gzone. Deeno brings raw power and commanding presence to every clash. Known for heavy disrespect, layered multi-syllabic writing and smooth flow switches, he combines versatility with aggression. Crowned with the unmistakable ginger beard, he steps into battles like a raider ready for war.",
    "weightClass": "Light Heavyweight",
    "height": "5'11\" (And a smidge)",
    "location": "Reading",
    "instagram": "deeno_viking",
    "tiktok": "deeno_viking",
    "quote": "I don't just battle, I conquer.",
    "badges": [
      "DEBUT WINNER",
      "GOLD STAR"
    ]
  },
  {
    "id": "ess2mad",
    "slug": "ess2mad",
    "name": "ESS2MAD",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/ess2mad/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "jm",
    "slug": "jm",
    "name": "JM",
    "battles": 9,
    "wins": 3,
    "losses": 5,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/jm/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "fendry",
    "slug": "fendry",
    "name": "FENDRY",
    "battles": 10,
    "wins": 6,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/fendry/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "missink",
    "slug": "missink",
    "name": "MISSINK",
    "battles": 3,
    "wins": 2,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/missink/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "cucha",
    "slug": "cucha",
    "name": "CUCHA",
    "battles": 7,
    "wins": 1,
    "losses": 5,
    "style": "Technical",
    "image": "https://picsum.photos/seed/cucha/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "passive",
    "slug": "passive",
    "name": "PASSIVE",
    "battles": 12,
    "wins": 5,
    "losses": 3,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/passive/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "hunce",
    "slug": "hunce",
    "name": "HUNCE",
    "battles": 3,
    "wins": 0,
    "losses": 3,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/hunce/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "anbu-sensei",
    "slug": "anbu-sensei",
    "name": "ANBU SENSEI",
    "battles": 10,
    "wins": 4,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/anbu/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "domi-dusk",
    "slug": "domi-dusk",
    "name": "DOMI DUSK",
    "battles": 5,
    "wins": 1,
    "losses": 2,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/domi/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "jaycee",
    "slug": "jaycee",
    "name": "JAYCEE",
    "battles": 9,
    "wins": 4,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/jaycee/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "trappy",
    "slug": "trappy",
    "name": "TRAPPY",
    "battles": 9,
    "wins": 1,
    "losses": 1,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/trappy/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "ad",
    "slug": "ad",
    "name": "AD",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/ad/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "che3kz",
    "slug": "che3kz",
    "name": "CHE3KZ",
    "battles": 6,
    "wins": 2,
    "losses": 3,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/che3kz/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "premeboi-j",
    "slug": "premeboi-j",
    "name": "PREMEBOI J",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/preme/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "zen",
    "slug": "zen",
    "name": "ZEN",
    "battles": 8,
    "wins": 5,
    "losses": 2,
    "style": "Technical",
    "image": "https://picsum.photos/seed/zen/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "caveman",
    "slug": "caveman",
    "name": "CAVEMAN",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/caveman/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "rahika",
    "slug": "rahika",
    "name": "RAHIKA",
    "battles": 1,
    "wins": 1,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/rahika/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "ricko",
    "slug": "ricko",
    "name": "RICKO",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/ricko/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "karma10tnf",
    "slug": "karma10tnf",
    "name": "KARMA10TNF",
    "battles": 6,
    "wins": 1,
    "losses": 3,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/karma/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "mr-benz",
    "slug": "mr-benz",
    "name": "MR.BENZ",
    "battles": 3,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/mrbenz/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "marcel",
    "slug": "marcel",
    "name": "MARCEL",
    "battles": 7,
    "wins": 1,
    "losses": 3,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/marcel/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "penno",
    "slug": "penno",
    "name": "PENNO",
    "battles": 3,
    "wins": 1,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/penno/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "millz",
    "slug": "millz",
    "name": "MILLZ",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/millz/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "foz",
    "slug": "foz",
    "name": "FOZ",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/foz/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "rasiah",
    "slug": "rasiah",
    "name": "RA'SIAH",
    "battles": 9,
    "wins": 4,
    "losses": 2,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/rasiah/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "220",
    "slug": "220",
    "name": "220",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/220/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "kime",
    "slug": "kime",
    "name": "K.I.M.E",
    "battles": 4,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/kime/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "2mwad",
    "slug": "2mwad",
    "name": "2MWAD",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/2mwad/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "mello",
    "slug": "mello",
    "name": "MELLO",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/mello/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "tapped24",
    "slug": "tapped24",
    "name": "TAPPED24",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/tapped24/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "char-b",
    "slug": "char-b",
    "name": "CHAR.B",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/charb/400/400",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "bonnie-godiva",
    "slug": "bonnie-godiva",
    "name": "BONNIE GODIVA",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/bonnie/400/400",
    "bio": "PenGame Cold War artist."
  },
  {
    "id": "jmuni",
    "slug": "jmuni",
    "name": "JMUNI",
    "battles": 4,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/jmuni/400/400",
    "bio": "PenGame Cold War artist."
  },
  {
    "id": "lc",
    "slug": "lc",
    "name": "LC",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/lc/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "iffy",
    "slug": "iffy",
    "name": "IFFY",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/iffy/400/400",
    "bio": "PenGame Academy 2026 artist."
  },
  {
    "id": "star-co",
    "slug": "star-co",
    "name": "STAR CO",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "https://picsum.photos/seed/starco/400/400",
    "bio": "PenGame Academy 2026 artist."
  },
  {
    "id": "rp",
    "slug": "rp",
    "name": "RP",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/rp/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "monroe",
    "slug": "monroe",
    "name": "MONROE",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "https://picsum.photos/seed/monroe/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "varntae",
    "slug": "varntae",
    "name": "VARNTAE",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/varntae/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "eddfirst",
    "slug": "eddfirst",
    "name": "EDDFIRST",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/eddfirst/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "zion",
    "slug": "zion",
    "name": "ZION",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/zion/400/400",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "rackz",
    "slug": "rackz",
    "name": "RACKZ",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/rackz/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "mz",
    "slug": "mz",
    "name": "MZ",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/mz/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "relapse",
    "slug": "relapse",
    "name": "RELAPSE",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/relapse/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "guni",
    "slug": "guni",
    "name": "GUNI",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/guni/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "scotty",
    "slug": "scotty",
    "name": "SCOTTY",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "https://picsum.photos/seed/scotty/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "7wxve",
    "slug": "7wxve",
    "name": "7WXVE",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/7wxve/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "s-kidz",
    "slug": "s-kidz",
    "name": "S'KIDZ",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/skidz/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "dyzz",
    "slug": "dyzz",
    "name": "DYZZ",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/dyzz/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "jynx",
    "slug": "jynx",
    "name": "JYNX",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "https://picsum.photos/seed/jynx/400/400",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "black-t",
    "slug": "black-t",
    "name": "BLACK T",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "https://picsum.photos/seed/black-t/400/400",
    "bio": "PenGame Season 4 artist who debuted against RENAYA. Known for aggressive delivery, wordplay and performance-focused writing."
  }
];

const academyMcProfiles = [
  ["wizdom", "WIZDOM"],
  ["jayceii", "JAYCEII"],
  ["elz", "ELZ"],
  ["trickyy", "TRICKYY"],
  ["ritchie-rich", "RITCHIE RICH"],
  ["jase", "JASE"],
  ["shelton", "SHELTON"],
  ["essmack", "ESSMACK"],
  ["grhymz", "GRHYMZ"],
  ["afrodon", "AFRODON"],
  ["h-star", "H STAR"],
  ["khaos-kayy", "KHAOS KAYY"],
  ["leo-mg", "LEO MG"],
  ["kie5", "KIE5"],
  ["zanotti", "ZANOTTI"],
  ["zkay", "ZKAY"],
  ["selly-the-rapper", "SELLY THE RAPPER"],
  ["cv", "CV"],
  ["jsmih", "JSMIH"],
] as const;

mcs.push(
  ...academyMcProfiles.map(([id, name]) => ({
    id,
    slug: id,
    name,
    battles: 0,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: `https://picsum.photos/seed/${id}/400/400`,
    bio: "PenGame Academy artist.",
  })),
);

const season2025McProfiles = [
  ["rizzy-raps", "RIZZY RAPS"],
  ["zoellz", "ZOELLZ"],
  ["crai-g", "CRAI-G"],
  ["cojay", "COJAY"],
  ["tek", "TEK"],
] as const;

mcs.push(
  ...season2025McProfiles.map(([id, name]) => ({
    id,
    slug: id,
    name,
    battles: 0,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: `https://picsum.photos/seed/${id}/400/400`,
    bio: "PenGame 2025 artist.",
  })),
);

type McRecord = {
  battles: number;
  wins: number;
  losses: number;
};

const computeMcRecords = (battles: Battle[]): Map<string, McRecord> => {
  const records = new Map<string, McRecord>();

  for (const battle of battles) {
    const participants = Array.from(
      new Set([battle.mc1, battle.mc2, battle.mc3, battle.mc4].filter(Boolean) as string[]),
    );

    if (participants.length === 0) continue;

    const winners = Array.from(
      new Set(
        [battle.winner, battle.winner2].filter(
          (winner): winner is string => typeof winner === "string" && participants.includes(winner),
        ),
      ),
    );

    for (const mcId of participants) {
      const current = records.get(mcId) ?? { battles: 0, wins: 0, losses: 0 };

      current.battles += 1;
      if (winners.length > 0) {
        if (winners.includes(mcId)) current.wins += 1;
        else current.losses += 1;
      }

      records.set(mcId, current);
    }
  }

  return records;
};

const pengameRecordsById = computeMcRecords(pengameBattles);

export const pengameMcs: MC[] = Array.from(pengameRecordsById.entries())
  .map(([mcId, record]) => {
    const base = mcs.find((mc) => mc.id === mcId);

    if (!base) {
      return {
        id: mcId,
        slug: mcId,
        name: mcId,
        battles: record.battles,
        wins: record.wins,
        losses: record.losses,
        style: "Unknown",
        image: `https://picsum.photos/seed/${encodeURIComponent(mcId)}/400/400`,
        bio: "PenGame artist.",
      };
    }

    return {
      ...base,
      battles: record.battles,
      wins: record.wins,
      losses: record.losses,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
