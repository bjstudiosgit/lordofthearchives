import { battles, type Battle } from "./battles";
import { mcs } from "./mcs";

const NON_RESULT_WINNERS = new Set(["", "unknown", "tbd", "cancelled"]);

export interface LeagueStanding {
  id: string;
  slug: string;
  name: string;
  image?: string;
  battles: number;
  wins: number;
  losses: number;
  draws: number;
  points: number;
  isDsq: boolean;
  rank: number;
}

export const getBattleParticipants = (battle: Battle): string[] =>
  Array.from(new Set([battle.mc1, battle.mc2, battle.mc3, battle.mc4].filter(Boolean) as string[]));

export const getBattleWinners = (battle: Battle): string[] =>
  [battle.winner, battle.winner2]
    .filter((winner): winner is string => Boolean(winner))
    .filter(winner => !NON_RESULT_WINNERS.has(winner.toLowerCase()));

export const hasOfficialBattleResult = (battle: Battle): boolean => getBattleWinners(battle).length > 0;

export const isLeagueEligibleBattle = (battle: Battle): boolean =>
  !battle.isUnreleased &&
  battle.statusNote !== "Cancelled" &&
  battle.winner !== "cancelled";

export const getLeagueStandings = (theme?: string): LeagueStanding[] => {
  const filteredBattles = battles.filter(battle =>
    (!theme || battle.theme?.toLowerCase() === theme.toLowerCase()) &&
    isLeagueEligibleBattle(battle)
  );

  const mcIdsInContext = Array.from(new Set(filteredBattles.flatMap(getBattleParticipants)));

  return mcIdsInContext
    .map(mcId => {
      const mcInfo = mcs.find(mc => mc.id === mcId);
      const mcBattles = filteredBattles.filter(battle => getBattleParticipants(battle).includes(mcId));

      const wins = mcBattles.filter(battle => getBattleWinners(battle).includes(mcId)).length;
      const losses = mcBattles.filter(battle => {
        if (!hasOfficialBattleResult(battle)) return false;
        return !getBattleWinners(battle).includes(mcId);
      }).length;
      const draws = mcBattles.filter(battle => !hasOfficialBattleResult(battle)).length;
      const points = wins * 3 + draws;

      return {
        id: mcId,
        slug: mcInfo?.slug || mcId,
        name: mcInfo?.name || mcId,
        image: mcInfo?.image,
        battles: mcBattles.length,
        wins,
        losses,
        draws,
        points,
        isDsq: mcInfo?.isActive === false,
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
    .map((standing, index) => ({
      ...standing,
      rank: index + 1,
    }));
};

export const getMcLeagueStanding = (mcId: string, theme?: string): LeagueStanding | undefined =>
  getLeagueStandings(theme).find(standing => standing.id === mcId);
