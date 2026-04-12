import React from "react";
import { battles, lastUpdated } from "../data/battles";
import { mcs } from "../data/mcs";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function PengamePage() {
  const parseViews = (viewStr: string | undefined): number => {
    if (!viewStr) return 0;
    const clean = viewStr.replace(/,/g, "").toUpperCase();
    if (clean.endsWith("K")) {
      return parseFloat(clean.replace("K", "")) * 1000;
    }
    if (clean.endsWith("M")) {
      return parseFloat(clean.replace("M", "")) * 1000000;
    }
    return parseInt(clean) || 0;
  };

  const pengameBattles = battles.filter(b => b.theme === 'pengame');
  const seasons = pengameBattles.reduce((acc, battle) => {
    if (!acc[battle.season]) acc[battle.season] = [];
    acc[battle.season].push(battle);
    return acc;
  }, {} as Record<number, typeof battles>);

  const totalViewsNum = battles.reduce((acc, b) => acc + parseViews(b.views), 0);
  const totalViewsStr = totalViewsNum >= 1000000 
    ? (totalViewsNum / 1000000).toFixed(1) + "M"
    : totalViewsNum >= 1000 
      ? (totalViewsNum / 1000).toFixed(1) + "K" 
      : totalViewsNum.toString();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BASIC HEADER */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-6xl font-display italic uppercase leading-none mb-6">
            PenGame <span className="text-brand">Archives</span>
          </h1>
          <div className="flex flex-wrap gap-8 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <div>Total Clashes: <span className="text-white">{battles.length}</span></div>
            <div>Total Views: <span className="text-white">{totalViewsStr}</span></div>
            <div>Last Updated: <span className="text-white">{lastUpdated}</span></div>
          </div>
        </div>

        {/* CLASH TABLES BY SEASON */}
        <div className="space-y-16">
          {Object.entries(seasons).sort((a, b) => {
            const sA = Number(a[0]);
            const sB = Number(b[0]);
            if (sA === 7) return -1;
            if (sB === 7) return 1;
            if (sA === 2026) return -1;
            if (sB === 2026) return 1;
            return sB - sA;
          }).map(([season, seasonBattles]) => (
            <div key={season}>
              <div className="mb-6">
                <h3 className="text-2xl font-display italic uppercase">
                  {season === "7" ? "Champions League" : 
                   season === "2026" ? "2026 Prelims" :
                   season === "6" ? "PenGame Cold War" : 
                   season === "5" ? "Season 5" : 
                   season === "2023" ? "2023 Tournament" :
                   season === "3.5" ? "Xmas Battles" :
                   `Season ${season}`}
                </h3>
              </div>

              <div className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-zinc-900/50">
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 w-16">#</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Matchup</th>
                        <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">Group / Type</th>
                        <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Views</th>
                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-right">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {seasonBattles.map((battle, index) => {
                        const mc1Info = mcs.find(m => m.id === battle.mc1);
                        const mc2Info = mcs.find(m => m.id === battle.mc2);
                        const mc1Name = mc1Info?.name || battle.mc1;
                        const mc2Name = mc2Info?.name || battle.mc2;
                        
                        return (
                          <tr 
                            key={battle.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                          >
                            <td className="px-6 py-4 font-mono text-xs text-zinc-500">
                              {battle.customEp || `${season}x${String(index + 1).padStart(2, '0')}`}
                            </td>
                            <td className="px-6 py-4">
                              <Link to={`/battle/${battle.slug}`} className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                  <span className={`font-bold text-sm uppercase tracking-tight group-hover:text-brand transition-colors flex items-center gap-1.5`}>
                                    {mc1Name} {battle.winner === battle.mc1 && <Trophy size={12} className="text-brand" />}
                                    <span className="text-zinc-600 font-normal">vs</span>
                                    {mc2Name} {battle.winner === battle.mc2 && <Trophy size={12} className="text-brand" />}
                                  </span>
                                </div>
                                {battle.date && <span className="text-[10px] text-zinc-600 uppercase tracking-widest">{battle.date}</span>}
                              </Link>
                            </td>
                            <td className="px-4 py-4 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                              {battle.subGroup || "Regular Season"}
                            </td>
                            <td className="px-4 py-4 text-center font-mono text-xs text-zinc-400">
                              {battle.views || "-"}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <Link to={`/battle/${battle.slug}`} className="text-zinc-600 hover:text-brand transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-widest">View Clash &rarr;</span>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
