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

  const pengameBattles = battles.filter(b => b.theme?.toLowerCase() === 'pengame');
  
  // OPTION 1: Champions League is a 'Competition' tag, NOT a separate silo
  const championsLeagueBattles = pengameBattles.filter(b => b.competition === 'Champions League');
  
  // seasonalGroups contains EVERYTHING in the season (including CL battles)
  const seasons = pengameBattles.reduce((acc, battle) => {
    const s = battle.season || "Other";
    if (!acc[s]) acc[s] = [];
    acc[s].push(battle);
    return acc;
  }, {} as Record<string | number, typeof battles>);

  const parseDate = (dateStr: string | undefined): number => {
    if (!dateStr) return 0;
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0])).getTime();
    }
    return 0;
  };

  const totalViewsNum = pengameBattles.reduce((acc, b) => acc + parseViews(b.views), 0);
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
            <div>PenGame Clashes: <span className="text-white">{pengameBattles.length}</span></div>
            <div>Total Views: <span className="text-white">{totalViewsStr}</span></div>
            <div>Last Updated: <span className="text-white">{lastUpdated}</span></div>
          </div>
        </div>

        <div className="space-y-24">
          {/* CHAMPIONS LEAGUE HIGHLIGHTS (Filter view) */}
          {championsLeagueBattles.length > 0 && (
            <div id="champions-league">
              <div className="mb-8 flex items-end justify-between border-b border-brand/20 pb-6">
                <div>
                  <div className="text-brand text-[10px] font-black uppercase tracking-[0.4em] mb-2 font-mono">Elite Series</div>
                  <h2 className="text-4xl md:text-5xl font-display italic uppercase">Champions <span className="text-brand">League</span></h2>
                </div>
                <div className="hidden md:block text-zinc-500 text-[10px] font-black uppercase tracking-widest text-right">
                  Featured Highlights<br/>
                  <span className="text-zinc-600">The PenGame flagship competition</span>
                </div>
              </div>
              <BattleTable battles={[...championsLeagueBattles].sort((a, b) => parseDate(b.date) - parseDate(a.date))} parseDate={parseDate} season="CL" />
            </div>
          )}

          {/* SEASONAL ARCHIVE (Full list grouped by season) */}
          <div className="space-y-20">
            {(() => {
              // Fixed canonical season order — newest first
              const SEASON_ORDER: Record<string, number> = {
                "Cold War": 0,
                "Academy":  1,
                "5":        2,
                "2023":     3,
                "4":        4,
                "3.5":      5,
                "3":        6,
                "2":        7,
                "1":        8,
              };
              return Object.entries(seasons)
                .sort((a, b) => {
                  const oA = SEASON_ORDER[String(a[0])] ?? 99;
                  const oB = SEASON_ORDER[String(b[0])] ?? 99;
                  return oA - oB;
                })
            })().map(([season, seasonBattles]) => {
              const sortedBattles = [...seasonBattles].sort((a, b) => {
                const dA = parseDate(a.date);
                const dB = parseDate(b.date);
                return dA - dB; // Oldest first — x01 at top
              });


              return (
                <div key={season}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-display italic uppercase">
                      {season === "Cold War" ? "PenGame Cold War" :
                       season === "Academy" ? "PenGame Academy" :
                       season === "6" ? "PenGame Cold War" :
                       season === "2026" ? "2026 Prelims" :
                       season === "8" ? "Academy" :
                       season === "3.5" ? "Xmas Battles" :
                       season === "2023" ? "2023 Tournament" :
                       typeof season === 'string' ? season : `Season ${season}`}
                    </h3>
                  </div>
                  <BattleTable battles={sortedBattles} parseDate={parseDate} season={String(season)} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface BattleTableProps {
  battles: typeof battles;
  parseDate: (dateStr: string | undefined) => number;
  season: string;
}

function BattleTable({ battles: tableBattles, season }: BattleTableProps) {
  return (
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
            {tableBattles.map((battle, index) => {
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
                    {battle.customEp}
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
  );
}
