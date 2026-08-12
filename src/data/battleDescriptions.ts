import type { Battle } from "./battleTypes";

const NON_RESULTS = new Set(["", "unknown", "tbd", "cancelled"]);

const formatList = (items: string[]): string => {
  if (items.length <= 1) return items[0] ?? "the complete battle record";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items.at(-1)}`;
};

export const getBattleSeriesLabel = (battle: Battle): string => {
  const leagueName = battle.theme === "gzone"
    ? "Gzone"
    : battle.theme === "lotm"
      ? "Lord of the Mics"
      : "PenGame";
  const season = String(battle.season).trim();

  if (!season) return leagueName;
  if (battle.theme === "lotm") return `${leagueName} ${season}`;
  if (/^\d{4}$/.test(season)) return `${leagueName} ${season}`;
  if (/^season\s+/i.test(season)) return `${leagueName} ${season}`;
  if (/^\d+$/.test(season)) return `${leagueName} Season ${season}`;
  return `${leagueName} ${season}`;
};

interface BattleDescriptionOptions {
  battle: Battle;
  repeatClashNumber?: number;
  team1Name: string;
  team2Name: string;
}

export const getBattleMetaDescription = ({
  battle,
  repeatClashNumber,
  team1Name,
  team2Name,
}: BattleDescriptionOptions): string => {
  const matchup = `${team1Name} vs ${team2Name}${repeatClashNumber ? ` #${repeatClashNumber}` : ""}`;
  const lead = battle.videoUrl ? "Watch" : "Explore";
  const winner = battle.winner?.trim().toLowerCase() ?? "";
  const hasRecordedResult = Boolean(winner) && !NON_RESULTS.has(winner);
  const hasNoOfficialDecision = battle.statusNote?.toLowerCase().includes("no official decision") ?? false;
  const details: string[] = [];

  if (battle.resultSource === "lota") details.push("the LOTA archive judgement");
  else if (hasRecordedResult && !hasNoOfficialDecision) details.push("the official result");

  if (battle.notableBars?.length) details.push("notable bars");
  if (battle.clashSummary || battle.performanceAnalysis?.length) details.push("battle analysis");
  if (battle.judges?.length) details.push("judges");
  if (battle.host || battle.judges?.length) details.push("archive credits");

  return `${lead} ${matchup} from ${getBattleSeriesLabel(battle)}. See ${formatList(details)}.`;
};
