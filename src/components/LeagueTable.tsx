"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { pengameMcs } from "../data/mcs";
import { pengameBattles } from "../data/battles";

interface LeagueTableProps {
  limit?: number;
  showTitle?: boolean;
}

export default function LeagueTable({ limit, showTitle = true }: LeagueTableProps) {
  const getWinRatio = (wins: number, losses: number): string => {
    const judgedBattles = wins + losses;
    if (judgedBattles === 0) return "0.0%";
    return `${((wins / judgedBattles) * 100).toFixed(1)}%`;
  };

  let rankings = [...pengameMcs]
    .sort((a, b) => {
      const aPoints = a.battles + (a.wins * 3);
      const bPoints = b.battles + (b.wins * 3);
      if (bPoints !== aPoints) return bPoints - aPoints;
      
      // Tie-breaker: fewest losses
      if (a.losses !== b.losses) return a.losses - b.losses;
      
      // Tie-breaker: most battles
      return b.battles - a.battles;
    })
    .map((mc, index) => ({
      rank: index + 1,
      id: mc.id,
      slug: mc.slug,
      name: mc.name,
      points: mc.battles + (mc.wins * 3),
      battles: mc.battles,
      wins: mc.wins,
      losses: mc.losses,
      unreleased: pengameBattles.filter(b => b.isUnreleased && (b.mc1 === mc.id || b.mc2 === mc.id)).length,
      change: "none"
    }));

  if (limit) {
    rankings = rankings.slice(0, limit);
  }

  return (
    <section id="league" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">Rankings</h2>
            <h3 className="text-5xl font-display italic uppercase">PenGame <span className="text-brand">Leaderboard</span></h3>
          </div>
        )}

        <div className="bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-zinc-900/80">
                  <th className="hidden md:table-cell px-2 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300">Rank</th>
                  <th className="px-2 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300">MC Name</th>
                  <th className="px-1 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 text-center">
                    <span className="md:hidden">Apps</span>
                    <span className="hidden md:inline">Appearances</span>
                  </th>
                  <th className="px-1 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 text-center">
                    <span className="md:hidden">W</span>
                    <span className="hidden md:inline">Wins</span>
                  </th>
                  <th className="px-1 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 text-center">
                    <span className="md:hidden">WR</span>
                    <span className="hidden md:inline">Win Ratio</span>
                  </th>
                  <th className="px-1 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 text-center">
                    <span className="md:hidden">L</span>
                    <span className="hidden md:inline">Losses</span>
                  </th>
                  <th className="px-2 py-3 md:px-8 md:py-6 text-[9px] md:text-xs font-bold uppercase tracking-widest text-zinc-300 text-center">
                    <span className="md:hidden">Pts</span>
                    <span className="hidden md:inline">Points</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((mc, index) => (
                  <motion.tr
                    key={mc.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <td className="hidden md:table-cell px-2 py-3 md:px-8 md:py-6">
                      <span className={`font-display italic text-lg md:text-2xl ${mc.rank < 4 ? "text-brand" : "text-zinc-300"}`}>
                        {mc.rank < 10 ? `0${mc.rank}` : mc.rank}
                      </span>
                    </td>
                    <td className="px-2 py-3 md:px-8 md:py-6">
                      <Link href={`/mc/${mc.slug}`} className="flex items-center gap-2 md:gap-4 group/name">
                        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-zinc-800 border border-white/10 text-brand group-hover/name:border-brand flex items-center justify-center font-bold transition-colors text-[10px] md:text-base shrink-0">
                          {mc.name[0]}
                        </div>
                        <span className="font-bold text-[11px] md:text-lg uppercase italic transition-colors whitespace-nowrap group-hover/name:text-brand">{mc.name}</span>
                      </Link>
                    </td>
                    <td className="px-1 py-3 md:px-8 md:py-6 font-mono text-[11px] md:text-base text-center text-zinc-300">
                      <div className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2">
                        {mc.battles}
                        {mc.unreleased > 0 && (
                          <span className="hidden md:flex items-center gap-1 px-2 py-0.5 rounded-md bg-brand/10 text-brand text-[10px] font-bold border border-brand/20 whitespace-nowrap">
                            <Clock size={10} />
                            {mc.unreleased} UNRELEASED
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-1 py-3 md:px-8 md:py-6 font-mono text-[11px] md:text-base text-center text-zinc-300">{mc.wins}</td>
                    <td className="px-1 py-3 md:px-8 md:py-6 font-mono text-[11px] md:text-base text-center text-zinc-300">
                      {getWinRatio(mc.wins, mc.losses)}
                    </td>
                    <td className="px-1 py-3 md:px-8 md:py-6 font-mono text-[11px] md:text-base text-center text-zinc-300">{mc.losses}</td>
                    <td className="px-2 py-3 md:px-8 md:py-6 font-bold text-[11px] md:text-base text-center text-zinc-100">{mc.points.toLocaleString()}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {limit && limit < pengameMcs.length && (
            <div className="p-8 bg-zinc-900/30 text-center border-t border-white/5">
              <Link href="/league" className="text-brand font-bold uppercase tracking-widest text-sm hover:underline">
                View Full League Table
              </Link>
            </div>
          )}
          <div className="px-8 py-4 bg-zinc-950/50 border-t border-white/5">
            <p className="text-[10px] text-zinc-300 uppercase tracking-widest font-bold text-center">
              Scoring: 1 Point per Appearance + 3 Bonus Points per Win
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
