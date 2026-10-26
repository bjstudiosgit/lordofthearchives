import { prizefighterVideos } from "./prizefighterVideos";
import releaseDates from "./prizefighterReleaseDates.json";
import { prizefighterClashData, type PrizefighterClashRecord } from "./prizefighterClashData";

export * from "./prizefighterClashData";

const videoReleaseDates: Record<string, { releaseDate: string }> = releaseDates;

export interface PrizefighterEdition {
  era: "Classic" | "Ozone";
  edition: string;
  year: string;
  battles: {
    side1: string;
    side2: string;
    round: string;
    format: "1v1" | "Multi-MC";
    footage: string;
    videoId?: string;
    releaseDate?: string;
  }[];
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const getPrizefighterBattleSlug = (
  edition: PrizefighterEdition, battle: PrizefighterEdition["battles"][number],
) => slugify(`${edition.era}-${edition.edition}-${edition.year}-${battle.side1}-vs-${battle.side2}-${battle.round}`);

type Matchup = [string, string, string, ("1v1" | "Multi-MC")?, string?];
const edition = (
  era: PrizefighterEdition["era"], name: string, year: string,
  footage: string, matchups: Matchup[],
): PrizefighterEdition => ({
  era, edition: name, year,
  battles: matchups.map(([side1, side2, round, format = "1v1", status]) => ({
    side1, side2, round, format, footage: status ?? footage,
    videoId: prizefighterVideos[`${era}|${name}|${side1}|${side2}`],
    releaseDate: videoReleaseDates[prizefighterVideos[`${era}|${name}|${side1}|${side2}`]]?.releaseDate,
  })),
});

// Matchups and availability supplied for the archive. No results or recording URLs supplied.
export const prizefighterEditions: PrizefighterEdition[] = [
  edition("Classic", "Prizefighter 5", "2014", "Silk City Radio recording", [
    ["Big Hypes", "Nitro Clack", "Clash 1"],
    ["Iamone", "Statick", "Clash 2"],
    ["F.O.S", "Jakus", "Clash 3"],
    ["Suspect", "Tragicz", "Clash 4"],
    ["Nitro Clack", "Iamone", "Clash 5"],
    ["F.O.S", "Iamone", "Final"],
    ["Iamone / F.O.S / Nitro Clack", "Big Hypes / Jakus", "Royal Rumble", "Multi-MC"],
  ]),
  edition("Classic", "Prizefighter 8", "2015", "Radio audio", [
    ["Firedon", "Jay3", "Semi-final"],
    ["Psolja", "RdoubleG", "Semi-final"],
    ["Firedon", "Psolja", "Final", "1v1", "Radio audio / DVD"],
  ]),
  edition("Classic", "Elite", "2015", "Radio audio", [
    ["Chucky", "Syco", "Unspecified"],
  ]),
  edition("Classic", "Prizefighter 1 Season 2", "2015", "Radio audio", [
    ["Origin", "Haughton", "Opening round"],
  ]),
  edition("Classic", "Prizefighter 2", "2016", "Radio audio", [
    ["YB", "ZK", "Group 1"],
    ["Tragicz", "CDot", "Group 1"],
    ["Rhema", "PappaT", "Semi-final"],
    ["Rhema", "YB", "Final"],
  ]),
  edition("Classic", "Elite", "2016", "Radio audio", [
    ["Syco", "Militant", "Unspecified"],
  ]),
  edition("Classic", "DVD collection", "", "DVD / some YouTube", [
    ["Kannan", "Izzie Gibbz", "DVD clash"],
    ["Chucky", "Flawzz", "DVD clash", "1v1", "YouTube video / DVD"],
    ["Grimsta", "Brownz", "DVD clash"],
    ["Iamone", "Trapz", "DVD clash"],
    ["Jay3", "Hoopa", "DVD clash"],
    ["Ace / Dre / Swifty / BDot U", "LZ / GDot / Nitro Clack / TDott", "Rumble", "Multi-MC", "DVD"],
  ]),
  edition("Ozone", "Season 1", "2024", "Original video or playlist", [
    ["Cash", "FlowzZ", "Opening round"],
    ["Deanoh", "Ricko", "Opening round"],
    ["RGG Tech", "Trickyy", "Opening round"],
    ["Swiftzz", "Big Smokez", "Opening round"],
    ["Cash", "Trickyy", "Semi-final"],
    ["Deanoh", "Swiftzz", "Semi-final"],
    ["Deanoh", "Trickyy", "Final"],
    ["Deanoh / Trickyy", "Big Smokez / RGG Tech", "Rumble", "Multi-MC"],
  ]),
  edition("Ozone", "Season 2", "2024", "Original video or playlist", [
    ["Blxtz", "7wxve", "Opening round"],
    ["Grhymz", "Shelton", "Opening round"],
    ["ZK", "Big Smokez", "Opening round"],
    ["Stretch DCM", "Pipez", "Opening round"],
    ["Stretch DCM", "ZK", "Semi-final"],
    ["Shelton", "7wxve", "Semi-final"],
    ["Stretch DCM", "7wxve", "Final"],
    ["ZK / 7wxve / Big Smokez", "Stretch DCM / Grhymz", "Rumble", "Multi-MC"],
  ]),
  edition("Ozone", "Season 3", "2024", "YouTube video", [
    ["Rygwan", "Afrodon", "Opening round"],
    ["Relapse", "Jdot", "Opening round"],
    ["Jlmz", "Rygwan", "Semi-final"],
    ["Relapse", "Trickyy", "Semi-final"],
    ["Trickyy", "Jlmz", "Final", "1v1", "Broadcast announced; standalone video unverified"],
    ["Relapse / Afrodon", "Trickyy / Jlmz", "Rumble", "Multi-MC"],
  ]),
  edition("Ozone", "Season 4", "2025", "Original video or playlist", [
    ["Korrupt Citizen", "7wxve", "Opening round"],
    ["Jynx", "Ricko", "Opening round"],
    ["TheRealRP", "Ritchie Rich", "Opening round"],
    ["Arkay", "7wxve", "Semi-final"],
    ["TheRealRP", "Arkay", "Final"],
    ["Arkay / TheRealRP / 7wxve", "Jynx / Korrupt", "Rumble", "Multi-MC"],
  ]),
  edition("Ozone", "Season 6", "2025–26", "Official playlist", [
    ["AJ.L", "Myrikal", "Opening round"],
    ["Flowen", "Kaizen", "Opening round"],
    ["7wxve", "JMC", "Opening round"],
    ["Akzzey", "LC", "Opening round"],
    ["Flowen", "Akzzey", "Semi-final"],
    ["7wxve", "AJ.L", "Semi-final"],
    ["7wxve", "Flowen", "Final"],
    ["Kaizen / Akzzey", "7wxve / Flowen", "Rumble", "Multi-MC"],
  ]),
];

export const prizefighterBattleRedirects: Record<string, string> = {
  "ozone-season-2-2024-origin-vs-haughton-opening-round": "classic-prizefighter-1-season-2-2015-origin-vs-haughton-opening-round",
  "ozone-season-4-2025-arkay-vs-7wxve-round-unverified": "ozone-season-4-2025-arkay-vs-7wxve-semi-final",
  "ozone-season-4-2025-therealrp-vs-ritchie-rich-round-unverified": "ozone-season-4-2025-therealrp-vs-ritchie-rich-opening-round",
};

export const prizefighterBattles = prizefighterEditions.flatMap((edition) =>
  edition.battles.map((battle) => {
    const slug = getPrizefighterBattleSlug(edition, battle);
    const clashRecord = prizefighterClashData[slug] ?? {};
    return {
      ...battle,
      era: edition.era,
      edition: edition.edition,
      year: edition.year,
      slug,
      ...clashRecord,
    };
  }),
);
