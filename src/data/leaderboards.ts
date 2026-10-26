import type { Battle } from "./battleTypes";
import { gzoneBattles } from "./gzone";
import { allMcs, type MC } from "./mcs";
import { pengameBattles } from "./pengameBattles";
import { parseViewCount } from "./viewCounts";
import { allProfileMcs, archiveMcBattles, getArchiveMcId } from "./archiveMcProfiles";

export interface PeopleChampionStanding extends MC {
  battleCount: number;
  battleViews: number[];
  topBattle?: Battle;
  topBattleViews: number;
  totalViews: number;
  averageViews: number;
  medianViews: number;
  rank: number;
}

const getMedian = (values: number[]): number => {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[middle]
    : Math.floor((sorted[middle - 1] + sorted[middle]) / 2);
};

export const getPeopleChampionStandings = (): PeopleChampionStanding[] => {
  const totals = new Map<string, {
    battleCount: number;
    battleViews: number[];
    topBattle?: Battle;
    topBattleViews: number;
    totalViews: number;
  }>();

  for (const battle of [...pengameBattles, ...gzoneBattles].filter((item) => !item.mc3 && !item.mc4)) {
    const views = parseViewCount(battle.views);
    if (views <= 0) continue;

    for (const mcId of [battle.mc1, battle.mc2]) {
      const current = totals.get(mcId) ?? {
        battleCount: 0,
        battleViews: [],
        topBattle: undefined,
        topBattleViews: 0,
        totalViews: 0,
      };

      current.battleCount += 1;
      current.battleViews.push(views);
      current.totalViews += views;
      if (views > current.topBattleViews) {
        current.topBattle = battle;
        current.topBattleViews = views;
      }
      totals.set(mcId, current);
    }
  }

  return allMcs
    .map((mc) => {
      const stats = totals.get(mc.id) ?? {
        battleCount: 0,
        battleViews: [],
        topBattle: undefined,
        topBattleViews: 0,
        totalViews: 0,
      };
      return {
        ...mc,
        ...stats,
        averageViews: stats.battleCount ? Math.floor(stats.totalViews / stats.battleCount) : 0,
        medianViews: getMedian(stats.battleViews),
        rank: 0,
      };
    })
    .filter((mc) => mc.totalViews > 0)
    .sort((a, b) =>
      b.totalViews - a.totalViews ||
      b.averageViews - a.averageViews ||
      b.battleCount - a.battleCount ||
      a.name.localeCompare(b.name),
    )
    .map((mc, index) => ({ ...mc, rank: index + 1 }));
};

export const getLotaLeagueStandings = (league?: "prizefighter") => {
  const standings = new Map((league ? [] : allMcs).map((mc) => [mc.id, { ...mc }]));
  for (const battle of archiveMcBattles.filter((battle) => battle.id.startsWith("pf-") || (!league && battle.id.startsWith("tic-")))) {
    const winner = "winner" in battle && typeof battle.winner === "string"
      ? getArchiveMcId(battle.winner) : undefined;
    for (const id of battle.participants) {
      if (!standings.has(id)) {
        const profile = allProfileMcs.find((mc) => mc.id === id)!;
        standings.set(id, { ...profile, battles: 0, wins: 0, losses: 0, scoredBattles: 0 });
      }
      const mc = standings.get(id)!;
      mc.battles += 1;
      if (winner && battle.participants.includes(winner)) {
        if (id === winner) mc.wins += 1;
        else mc.losses += 1;
        mc.scoredBattles += 1;
      }
    }
  }
  return [...standings.values()]
    .sort((a, b) =>
      b.wins - a.wins ||
      a.losses - b.losses ||
      b.battles - a.battles ||
      a.name.localeCompare(b.name),
    )
    .map((mc, index) => ({ ...mc, points: mc.wins * 3, rank: index + 1 }));
};
