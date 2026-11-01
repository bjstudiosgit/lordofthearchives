import kotrJson from "./kotrData.json";

export interface KingOfTheRonaldsBattle {
  id: string;
  slug: string;
  releaseDate: string;
  mc1: string;
  mc2: string;
  event?: string;
  videoUrl?: string;
  videoId?: string;
  sourceEvidence?: string;
  verification?: string;
  notes?: string;
}

export const kingOfTheRonaldsBattles: KingOfTheRonaldsBattle[] = kotrJson as KingOfTheRonaldsBattle[];

export const getKotrBattleBySlug = (slug: string): KingOfTheRonaldsBattle | undefined => {
  return kingOfTheRonaldsBattles.find((b) => b.slug === slug);
};

export const getKotrBattleSlug = (mc1: string, mc2: string): string => {
  return `${mc1}-vs-${mc2}`
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['’.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};
