import { allMcs, getMcProfileHref, getMcProfileSlug, mcs, type MC } from "./mcs";
import { lordOfTheMicsBattles } from "./lordOfTheMics";
import talkIsCheapViews from "./talkIsCheapViews.json";
import { prizefighterBattles } from "./prizefighter";
import { formatBattleDate } from "./battleDates";
import { getTalkIsCheapBattleSlug, getTalkIsCheapClashData, talkIsCheapSeries } from "./talkIsCheap";

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
const aliases: Record<string, string> = {
  "Ghetto (Ghetts)": "Ghetts",
  "Diesel (D Power)": "D Power",
  "Fergz": "ROMAN",
  "Roman (Fergz)": "ROMAN",
  "Swiftzz": "Swiftz",
  "Flawzz": "Flawz",
  "Trickyy": "TRICKY",
  "Z,K": "Z.K",
};
export const getArchiveMcName = (name: string) => {
  const alias = Object.entries(aliases).find(([variant]) => normalize(variant) === normalize(name));
  return alias?.[1] ?? name;
};
const canonicalName = getArchiveMcName;
export const getArchiveMcId = (name: string): string => {
  const key = normalize(canonicalName(name));
  return mcs.find((mc) => [mc.name, mc.id, mc.slug].some((value) => normalize(value) === key))?.id
    ?? canonicalName(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};
export const getArchiveMcHref = (name: string) => getMcProfileHref(getArchiveMcId(name));

interface ArchiveBattle {
  id: string;
  names: string[];
  event: string;
  date: string;
  yearOnly: boolean;
  dateLabel?: string;
  archiveHref: string;
  battleHref?: string;
  sides?: string[][];
  videoUrl?: string | null;
  views?: number;
  note?: string;
  winner?: string;
}

const catalogueBattles: ArchiveBattle[] = [
  ...lordOfTheMicsBattles.map((battle) => ({
    id: battle.id,
    names: [battle.mc1, battle.mc2],
    event: `Lord of the Mics · ${battle.customEp}`,
    date: battle.date ?? "",
    yearOnly: Boolean(battle.date?.endsWith("-01-01")),
    archiveHref: "/lord-of-the-mics",
    battleHref: `/lord-of-the-mics/${battle.slug}`,
    videoUrl: battle.videoUrl,
    views: undefined as number | undefined,
    note: battle.statusNote,
  })),
  ...talkIsCheapSeries.flatMap((series) => series.battles.map(([mc1, mc2, videoId]) => {
    const slug = getTalkIsCheapBattleSlug(mc1, mc2);
    const clashData = getTalkIsCheapClashData(slug);
    return {
      id: `tic-${videoId}`,
      names: [mc1, mc2],
      event: `Talk Is Cheap · ${series.name}`,
      date: series.date,
      yearOnly: false,
      archiveHref: "/talk-is-cheap",
      battleHref: `/talk-is-cheap/${slug}`,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      views: (talkIsCheapViews as Record<string, number>)[videoId],
      note: clashData?.statusNote ?? "Results await review",
      winner: clashData?.winner,
    };
  })),
  ...prizefighterBattles.map((battle): ArchiveBattle => {
    const sides = [battle.side1.split(" / "), battle.side2.split(" / ")];
    return {
      id: `pf-${battle.slug}`,
      names: [...new Set(sides.flat())],
      sides: sides.map((side) => side.map(getArchiveMcId)),
      event: `Prizefighter · ${battle.era} · ${battle.edition}`,
      date: battle.releaseDate ?? (battle.year ? `${battle.year.slice(0, 4)}-01-01` : ""),
      dateLabel: battle.releaseDate ? `${formatBattleDate(battle.releaseDate)} · YouTube release` : battle.year || "Year not recorded",
      yearOnly: !battle.releaseDate,
      archiveHref: "/prizefighter",
      battleHref: `/prizefighter/${battle.slug}`,
      videoUrl: battle.videoId ? `https://www.youtube.com/watch?v=${battle.videoId}` : undefined,
      note: "Result not recorded",
    };
  }),
];
export const archiveMcBattles = catalogueBattles.map((battle) => ({
  ...battle, participants: [...new Set(battle.names.map(getArchiveMcId))],
}));

const profiles = new Map<string, MC>(allMcs.map((mc) => [mc.id, { ...mc }]));
for (const battle of archiveMcBattles) {
  battle.participants.forEach((id) => {
    const name = battle.names.find((name) => getArchiveMcId(name) === id)!;
    if (!profiles.has(id)) {
      const base = mcs.find((mc) => mc.id === id);
      profiles.set(id, {
        ...base,
        id, slug: getMcProfileSlug(id), name: base?.name ?? canonicalName(name),
        battles: 0, wins: 0, losses: 0, scoredBattles: 0,
        style: base?.style ?? "Unknown", image: base?.image ?? `/${id}.webp`,
        bio: `Catalogue profile for ${canonicalName(name)}. The appearances below document the matchups currently held in this archive. Results and biographical details have not yet been reviewed.`,
      });
    }
    profiles.get(id)!.battles += 1;
    if ("winner" in battle && typeof battle.winner === "string" && battle.winner) {
      const winnerId = getArchiveMcId(battle.winner);
      if (id === winnerId) {
        profiles.get(id)!.wins += 1;
        profiles.get(id)!.scoredBattles += 1;
      } else {
        profiles.get(id)!.losses += 1;
        profiles.get(id)!.scoredBattles += 1;
      }
    }
  });
}
export const allProfileMcs = [...profiles.values()].sort((a, b) => a.name.localeCompare(b.name));
export const isCatalogueOnlyMc = (id: string) => !allMcs.some((mc) => mc.id === id);
