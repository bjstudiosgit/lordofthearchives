import { allMcs, getMcProfileHref, getMcProfileSlug, mcs, type MC } from "./mcs";
import { lordOfTheMicsBattles } from "./lordOfTheMics";
import { getTalkIsCheapBattleSlug, getTalkIsCheapClashData, talkIsCheapSeries } from "./talkIsCheap";

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
const aliases: Record<string, string> = {
  "Ghetto (Ghetts)": "Ghetts",
  "Diesel (D Power)": "D Power",
  "Fergz": "ROMAN",
  "Roman (Fergz)": "ROMAN",
};
const canonicalName = (name: string) => aliases[name] ?? name;
export const getArchiveMcId = (name: string): string => {
  const key = normalize(canonicalName(name));
  return mcs.find((mc) => [mc.name, mc.id, mc.slug].some((value) => normalize(value) === key))?.id
    ?? canonicalName(name).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
};
export const getArchiveMcHref = (name: string) => getMcProfileHref(getArchiveMcId(name));

export const archiveMcBattles = [
  ...lordOfTheMicsBattles.map((battle) => ({
    id: battle.id,
    names: [battle.mc1, battle.mc2],
    event: `Lord of the Mics · ${battle.customEp}`,
    date: battle.date ?? "",
    yearOnly: Boolean(battle.date?.endsWith("-01-01")),
    archiveHref: "/lord-of-the-mics",
    videoUrl: battle.videoUrl,
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
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      note: clashData?.statusNote ?? "Results await review",
      winner: clashData?.winner,
    };
  })),
].map((battle) => ({ ...battle, participants: battle.names.map(getArchiveMcId) }));

const profiles = new Map<string, MC>(allMcs.map((mc) => [mc.id, { ...mc }]));
for (const battle of archiveMcBattles) {
  battle.names.forEach((name, index) => {
    const id = battle.participants[index];
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
