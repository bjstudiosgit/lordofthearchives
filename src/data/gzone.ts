import type { Battle } from "./battleTypes";
import { gzoneClashData } from "./gzoneClashData";

export interface GzoneMc {
  id: string;
  slug: string;
  name: string;
}

export interface GzoneStanding extends GzoneMc {
  battles: number;
  wins: number;
  losses: number;
  unknown: number;
  points: number;
  rank: number;
}

const makeId = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const archivedGzoneBattleSlugs = new Set(Object.keys(gzoneClashData));

const makeBattle = (
  episode: string,
  mc1Name: string,
  mc2Name: string,
  views: string,
  date: string,
  winnerName = "unknown",
  videoUrl?: string,
): Battle => {
  const mc1 = makeId(mc1Name);
  const mc2 = makeId(mc2Name);
  const winner = winnerName === "unknown" ? "unknown" : makeId(winnerName);
  const episodeNumber = Number(episode.replace(/^1x0?/i, ""));
  const slug = `${mc1}-vs-${mc2}`;

  return {
    id: `gz-s01-${episode.toLowerCase()}-${mc1}-vs-${mc2}`,
    slug,
    mc1,
    mc2,
    title: `${mc1Name.toUpperCase()} vs ${mc2Name.toUpperCase()}`,
    date,
    videoUrl,
    views,
    winner,
    theme: "gzone",
    season: 1,
    competition: "Gzone League",
    subGroup: "Season 1",
    customEp: episode,
    seasonOrder: episodeNumber,
    statusNote: archivedGzoneBattleSlugs.has(slug) ? "Archived" : "Pending",
    ...gzoneClashData[slug],
  };
};

export const gzoneBattles: Battle[] = [
  makeBattle("1x01", "Deeno", "Tapped24", "53.1K", "2025-12-25", "Deeno", "https://www.youtube.com/watch?v=09ZD_UjdoVw"),
  makeBattle("1x02", "PR1NC3", "Roman", "23.5K", "2026-01-01", "Roman", "https://www.youtube.com/watch?v=QByqdZAF3L0"),
  makeBattle("1x03", "LDN MIKEZ", "Deluxx", "16.0K", "2026-01-08", "LDN MIKEZ", "https://www.youtube.com/watch?v=RhC2D3ftzZo"),
  makeBattle("1x04", "LDN MIKEZ", "2MWAD", "23.6K", "2026-01-15", "LDN MIKEZ", "https://www.youtube.com/watch?v=NEiGspeXLYM"),
  makeBattle("1x05", "CJ Zino", "Proty", "10.9K", "2026-02-15", "Proty", "https://www.youtube.com/watch?v=T0zo6YgfxB4"),
  makeBattle("1x06", "Renzo", "Proty", "10.1K", "2026-02-19", "Renzo", "https://www.youtube.com/watch?v=bZRy8jgPvwk"),
  makeBattle("1x07", "Deluxx", "Btizz", "5.7K", "2026-02-25", "Btizz", "https://www.youtube.com/watch?v=Asvv9rzqXDI"),
  makeBattle("1x08", "2MWAD", "Ryno", "25.9K", "2026-02-19", "2MWAD", "https://www.youtube.com/watch?v=HfO3UR_Zeyk"),
  makeBattle("1x09", "Tapped24", "Roman", "16.8K", "2026-03-04", "Roman", "https://www.youtube.com/watch?v=OGagI2K6StY"),
  makeBattle("1x10", "Tapped24", "AJNA", "13.3K", "2026-03-19", "AJNA", "https://www.youtube.com/watch?v=oUDDrQtoTHM"),
  makeBattle("1x11", "Ryno", "Tymeless", "14.7K", "2026-03-26", "Tymeless", "https://www.youtube.com/watch?v=Omge-TNTrhQ"),
  makeBattle("1x12", "PR1NC3", "NattyEBK", "8.9K", "2026-04-02", "NattyEBK", "https://www.youtube.com/watch?v=Rs3kTPbnUm4"),
  makeBattle("1x13", "Btizz", "CJ Zino", "6.6K", "2026-04-09", "CJ Zino", "https://www.youtube.com/watch?v=-bKXRy3RxoY"),
  makeBattle("1x14", "Deeno", "Grams", "20.4K", "2026-04-26", "Deeno", "https://www.youtube.com/watch?v=OuVeBAU1OQQ"),
  makeBattle("1x15", "Tapped24", "Grams", "12.4K", "2026-04-26", "Tapped24", "https://www.youtube.com/watch?v=9gkXN1ZJeP8"),
  makeBattle("1x16", "Btizz", "1Flaymr", "7.5K", "2026-04-26", "Btizz", "https://www.youtube.com/watch?v=2lFLlylG5NQ"),
  makeBattle("1x17", "Deeno", "Badee Harz", "29.0K", "2026-05-23", "Deeno", "https://www.youtube.com/watch?v=yCkMZvg-cUg"),
  makeBattle("1x18", "Ryno", "Roman", "11.2K", "2026-04-26", "Roman", "https://www.youtube.com/watch?v=eNusiS3fDhw"),
  makeBattle("1x19", "1Flaymr", "CJ Zino", "4.5K", "2026-05-31", "1Flaymr", "https://www.youtube.com/watch?v=BKAVkMglg3Q"),
  makeBattle("1x20", "NattyEBK", "Z.K", "4.5K", "2026-05-31", "NattyEBK", "https://www.youtube.com/watch?v=ayTTSuKB168"),
  makeBattle("1x21", "Deeno", "Tymeless", "15.1K", "2026-05-31", "Tymeless", "https://www.youtube.com/watch?v=JoW3ZGND5YM"),
];

export const gzoneMcs: GzoneMc[] = Array.from(
  new Map(
    gzoneBattles
      .flatMap((battle) => [battle.mc1, battle.mc2])
      .map((id) => {
        const battle = gzoneBattles.find((item) => item.mc1 === id || item.mc2 === id);
        const name = battle?.mc1 === id ? battle.title.split(" vs ")[0] : battle?.title.split(" vs ")[1];
        return [id, { id, slug: id, name: name || id.toUpperCase() }];
      }),
  ).values(),
).sort((a, b) => a.name.localeCompare(b.name));

export const getGzoneStandings = (): GzoneStanding[] =>
  gzoneMcs
    .map((mc) => {
      const battles = gzoneBattles.filter((battle) => battle.mc1 === mc.id || battle.mc2 === mc.id);
      const wins = battles.filter((battle) => battle.winner === mc.id).length;
      const losses = battles.filter(
        (battle) => battle.winner && battle.winner !== "unknown" && battle.winner !== mc.id,
      ).length;
      const unknown = battles.filter((battle) => battle.winner === "unknown").length;
      const points = wins * 3;

      return {
        ...mc,
        battles: battles.length,
        wins,
        losses,
        unknown,
        points,
        rank: 0,
      };
    })
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (a.losses !== b.losses) return a.losses - b.losses;
      if (b.battles !== a.battles) return b.battles - a.battles;
      return a.name.localeCompare(b.name);
    })
    .map((standing, index) => ({ ...standing, rank: index + 1 }));
