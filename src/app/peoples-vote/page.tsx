import Link from "next/link";
import { Eye, Trophy } from "lucide-react";
import { gzoneBattles } from "../../data/gzone";
import { allMcs } from "../../data/mcs";
import { getBattleRouteHref, pengameBattles } from "../../data/pengameBattles";
import type { Battle } from "../../data/battleTypes";

export const metadata = {
  title: "LOTA People's Champion Lord of the Archives",
  description:
    "A solo battle views leaderboard ranking MCs by cumulative YouTube views across Lord of the Archives, PenGame, and Gzone battle history.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/peoples-vote",
  },
  openGraph: {
    title: "LOTA People's Champion Lord of the Archives",
    description:
      "See which MCs the public watched most, ranked by cumulative YouTube views from solo rap battles.",
    url: "https://www.lordofthearchives.co.uk/peoples-vote",
    siteName: "Lord of the Archives",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "LOTA People's Champion Lord of the Archives",
    description:
      "The people's champion leaderboard, ranked by solo battle YouTube views.",
  },
};

const parseViews = (views: Battle["views"]): number => {
  if (!views) return 0;
  const clean = String(views).replace(/,/g, "").trim().toUpperCase();
  if (clean.endsWith("K")) return Math.floor(Number(clean.replace("K", "")) * 1000);
  if (clean.endsWith("M")) return Math.floor(Number(clean.replace("M", "")) * 1000000);
  return Number(clean) || 0;
};

const formatViews = (views: number): string => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${Math.floor(views / 1000)}k`;
  return String(views);
};

const formatFullViews = (views: number): string => views.toLocaleString("en-GB");

const getBattleMcs = (battle: Battle): string[] =>
  [battle.mc1, battle.mc2, battle.mc3, battle.mc4].filter(Boolean) as string[];

const isSoloBattle = (battle: Battle): boolean => !battle.mc3 && !battle.mc4;

export default function PeoplesVotePage() {
  const battles = [...pengameBattles, ...gzoneBattles].filter(isSoloBattle);
  const totals = new Map<string, {
    battleCount: number;
    topBattle?: Battle;
    topBattleViews: number;
    totalViews: number;
  }>();

  for (const battle of battles) {
    const views = parseViews(battle.views);
    if (views <= 0) continue;

    for (const mcId of getBattleMcs(battle)) {
      const current = totals.get(mcId) || {
        battleCount: 0,
        topBattle: undefined,
        topBattleViews: 0,
        totalViews: 0,
      };

      current.battleCount += 1;
      current.totalViews += views;
      if (views > current.topBattleViews) {
        current.topBattle = battle;
        current.topBattleViews = views;
      }
      totals.set(mcId, current);
    }
  }

  const standings = allMcs
    .map((mc) => {
      const stat = totals.get(mc.id) || {
        battleCount: 0,
        topBattle: undefined,
        topBattleViews: 0,
        totalViews: 0,
      };

      return {
        ...mc,
        ...stat,
        averageViews: stat.battleCount ? Math.floor(stat.totalViews / stat.battleCount) : 0,
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

  const topThree = standings.slice(0, 3);

  return (
    <main className="min-h-screen pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-display italic uppercase leading-tight md:text-5xl">
              <span className="text-brand">LOTA</span> <span className="text-white">People's Champion</span>
            </h2>
            <div className="mt-4 max-w-xl space-y-4 text-sm leading-relaxed text-zinc-400 md:mt-6 md:text-lg">
              <p>
                Lord of the Archives People's Champion is decided by one brutal measure: the cumulative YouTube views.
                No panel. No favouritism. No politics. No "I don't want to get cancelled" wokeness, just the public
                count of who people actually watched.
              </p>
              <p>
                For fairness, the leaderboard counts solo battles only. 2v2 and team clashes are excluded because
                shared videos can distort individual MC rankings. A team battle might pull views because of the
                matchup, the names involved, the teams, or one standout performer. Team battles remain archived
                separately as part of the full battle history. We never forget.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400">
              <Trophy size={14} className="text-brand" /> Top by Views
            </h3>
            {topThree.map((mc, index) => (
              <Link
                key={mc.id}
                href={`/mc/${mc.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-zinc-900/40 p-4 transition-all hover:border-brand/30"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-800 text-xl font-bold italic text-brand">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-display text-lg italic uppercase transition-colors group-hover:text-brand">
                      {mc.name}
                    </h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {formatFullViews(mc.totalViews)} views
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl italic text-brand">{formatViews(mc.totalViews)}</div>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Views</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <section className="pb-24">
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/80">
                    <th className="hidden px-2 py-3 text-[9px] font-bold uppercase tracking-widest text-zinc-300 md:table-cell md:px-8 md:py-6 md:text-xs">Rank</th>
                    <th className="px-2 py-3 text-[9px] font-bold uppercase tracking-widest text-zinc-300 md:px-8 md:py-6 md:text-xs">MC Name</th>
                    <th className="px-1 py-3 text-center text-[9px] font-bold uppercase tracking-widest text-zinc-300 md:px-8 md:py-6 md:text-xs">Total Views</th>
                    <th className="px-1 py-3 text-center text-[9px] font-bold uppercase tracking-widest text-zinc-300 md:px-8 md:py-6 md:text-xs">Solo Battles</th>
                    <th className="hidden px-1 py-3 text-center text-[9px] font-bold uppercase tracking-widest text-zinc-300 md:table-cell md:px-8 md:py-6 md:text-xs">Average</th>
                    <th className="hidden px-2 py-3 text-[9px] font-bold uppercase tracking-widest text-zinc-300 lg:table-cell lg:px-8 lg:py-6 lg:text-xs">Top Battle</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((mc) => (
                    <tr key={mc.id} className="border-b border-white/5 transition-colors hover:bg-white/5">
                      <td className="hidden px-2 py-3 md:table-cell md:px-8 md:py-6">
                        <span className={`font-display text-lg italic md:text-2xl ${mc.rank < 4 ? "text-brand" : "text-zinc-300"}`}>
                          {mc.rank < 10 ? `0${mc.rank}` : mc.rank}
                        </span>
                      </td>
                      <td className="px-2 py-3 md:px-8 md:py-6">
                        <Link href={`/mc/${mc.slug}`} className="flex items-center gap-2 md:gap-4 group/name">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-[10px] font-bold text-brand md:h-10 md:w-10 md:text-base">
                            {mc.name[0]}
                          </div>
                          <span className="whitespace-nowrap text-[11px] font-bold uppercase italic transition-colors group-hover/name:text-brand md:text-lg">
                            {mc.name}
                          </span>
                        </Link>
                      </td>
                      <td className="px-1 py-3 text-center font-mono text-[11px] text-zinc-100 md:px-8 md:py-6 md:text-base">{formatViews(mc.totalViews)}</td>
                      <td className="px-1 py-3 text-center font-mono text-[11px] text-zinc-300 md:px-8 md:py-6 md:text-base">{mc.battleCount}</td>
                      <td className="hidden px-1 py-3 text-center font-mono text-[11px] text-zinc-300 md:table-cell md:px-8 md:py-6 md:text-base">{formatViews(mc.averageViews)}</td>
                      <td className="hidden px-2 py-3 lg:table-cell lg:px-8 lg:py-6">
                        {mc.topBattle ? (
                          <Link href={getBattleRouteHref(mc.topBattle)} className="inline-flex items-center gap-2 text-xs font-bold uppercase text-zinc-300 transition-colors hover:text-brand">
                            <Eye size={14} className="text-brand" />
                            {mc.topBattle.title}
                          </Link>
                        ) : (
                          <span className="text-xs text-zinc-500">No viewed battle</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-white/5 bg-zinc-950/50 px-8 py-4">
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                Ranked by total views across solo PenGame and Gzone battles
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
