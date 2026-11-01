import clashMoneyJson from "./clashMoneyData.json";
import { getArchiveMcHref, getArchiveMcId, getClashMoneyMcHref, getClashMoneyMcId } from "./archiveMcProfiles";

export interface ClashMoneyBattle {
  id: string;
  slug: string;
  releaseDate: string;
  mc1: string;
  mc2: string;
  series: "Main" | "Trials";
  eventDate?: string | null;
  videoUrl: string;
  videoId: string;
  sourceUrl: string;
  verificationNote: string;
}

export const clashMoneyBattles: ClashMoneyBattle[] = clashMoneyJson as ClashMoneyBattle[];

export const clashMoneyRedirects: Record<string, string> = {
  "deco-vs-tricksta": "deco-vs-trickyy",
  "blunt-ted-vs-tricksta": "blunt-ted-vs-trickyy",
  "brodes-vs-tricksta": "brodes-vs-trickyy",
  "zaim-vs-tricksta": "zaim-vs-trickyy",
  "moses-vs-tricksta": "moses-vs-trickyy",
};

export const getClashMoneyBattleSlug = (mc1: string, mc2: string) =>
  `${mc1}-vs-${mc2}`
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getClashMoneyBattleBySlug = (slug: string) => {
  const resolvedSlug = clashMoneyRedirects[slug] ?? slug;
  return clashMoneyBattles.find((b) => b.slug === resolvedSlug);
};

export { getClashMoneyMcId, getClashMoneyMcHref };
