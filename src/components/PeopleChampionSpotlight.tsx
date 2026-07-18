import { gzoneBattles } from "../data/gzone";
import { allMcs } from "../data/mcs";
import { pengameBattles } from "../data/pengameBattles";
import type { Battle } from "../data/battleTypes";
import PeopleChampionCarousel from "./PeopleChampionCarousel";

const parseViews = (views: Battle["views"]): number => {
  if (!views) return 0;
  const clean = String(views).replace(/,/g, "").trim().toUpperCase();
  if (clean.endsWith("K")) return Math.floor(Number(clean.slice(0, -1)) * 1000);
  if (clean.endsWith("M")) return Math.floor(Number(clean.slice(0, -1)) * 1000000);
  return Number(clean) || 0;
};

export default function PeopleChampionSpotlight() {
  const totals = new Map<string, { battleCount: number; totalViews: number }>();
  const soloBattles = [...pengameBattles, ...gzoneBattles].filter((battle) => !battle.mc3 && !battle.mc4);

  for (const battle of soloBattles) {
    const views = parseViews(battle.views);
    if (views <= 0) continue;

    for (const mcId of [battle.mc1, battle.mc2].filter(Boolean) as string[]) {
      const current = totals.get(mcId) || { battleCount: 0, totalViews: 0 };
      current.battleCount += 1;
      current.totalViews += views;
      totals.set(mcId, current);
    }
  }

  const leaders = allMcs
    .map((mc) => {
      const stats = totals.get(mc.id) || { battleCount: 0, totalViews: 0 };
      return {
        id: mc.id,
        slug: mc.slug,
        name: mc.name,
        image: mc.image,
        ...stats,
        averageViews: stats.battleCount ? Math.floor(stats.totalViews / stats.battleCount) : 0,
      };
    })
    .filter((mc) => mc.totalViews > 0)
    .sort((a, b) =>
      b.totalViews - a.totalViews ||
      b.averageViews - a.averageViews ||
      b.battleCount - a.battleCount ||
      a.name.localeCompare(b.name),
    )
    .slice(0, 4)
    .map((mc, index) => ({ ...mc, rank: index + 1 }));

  return <PeopleChampionCarousel leaders={leaders} />;
}
