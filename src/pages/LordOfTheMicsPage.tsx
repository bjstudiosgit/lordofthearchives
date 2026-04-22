import React from "react";
import { battles, lastUpdated } from "../data/battles";
import { mcs } from "../data/mcs";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function LordOfTheMicsPage() {
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

  const lormBattles = battles.filter(b => b.theme === 'lord-of-the-mics');
  const editions = lormBattles.reduce((acc, battle) => {
    if (!acc[battle.season]) acc[battle.season] = [];
    acc[battle.season].push(battle);
    return acc;
  }, {} as Record<number, typeof battles>);

  const dfTotalViewsNum = lormBattles.reduce((acc, b) => acc + parseViews(b.views), 0);
  const dfTotalViewsStr = dfTotalViewsNum >= 1000000 
    ? (dfTotalViewsNum / 1000000).toFixed(1) + "M"
    : dfTotalViewsNum >= 1000 
      ? (dfTotalViewsNum / 1000).toFixed(1) + "K" 
      : dfTotalViewsNum.toString();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BASIC HEADER */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <h1 className="text-4xl md:text-6xl font-display italic uppercase leading-none mb-6">
            Lord Of The Mics <span className="text-brand">Archives</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-3xl mb-8 leading-relaxed">
            The Historical Records of Lord of the Mics: The premier foundation of UK Grime clash culture. 
            Documenting the iconic dungeon battles that defined generations of MCs from 2004 onwards.
          </p>
          <div className="flex flex-wrap gap-8 text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <div>Total Clashes: <span className="text-white">{lormBattles.length}</span></div>
            {dfTotalViewsNum > 0 && <div>Total Views: <span className="text-white">{dfTotalViewsStr}</span></div>}
            <div>Last Updated: <span className="text-white">{lastUpdated}</span></div>
          </div>
        </div>

        {/* CLASH TABLES BY EDITION */}
        <div className="space-y-16">
          {Object.entries(editions).sort((a, b) => Number(b[0]) - Number(a[0])).map(([season, eraBattles]) => (
            <div key={season}>
              <div className="mb-6">
                <h3 className="text-2xl font-display italic uppercase">
                  Edition {season}
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
                      {eraBattles.map((battle) => {
                        const mc1Info = mcs.find(m => m.id === battle.mc1);
                        const mc2Info = mcs.find(m => m.id === battle.mc2);
                        const mc1Name = mc1Info?.name || battle.mc1.replace(/-/g, ' ');
                        const mc2Name = mc2Info?.name || battle.mc2.replace(/-/g, ' ');
                        
                        return (
                          <tr 
                            key={battle.id}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors group"
                          >
                            <td className="px-6 py-4 font-mono text-xs text-zinc-500">
                              {battle.id}
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
                              {battle.subGroup || "Regular Clash"}
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
