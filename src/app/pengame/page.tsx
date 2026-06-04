"use client";
import React from "react";
import {
  getBattleHref,
  getBattleRouteHref,
  pengameBattles,
  lastUpdated,
  type Battle,
} from "../../data/battles";
import { pengameMcs } from "../../data/mcs";
import Link from "next/link";
import { motion } from "motion/react";
import { Play, Eye, Calendar, Trophy } from "lucide-react";

const seasonDisplayOrder: Record<string, number> = {
  "Champions League": 11,
  Academy: 10,
  "Cold War": 9,
  "2025": 8,
  "5": 7,
  "2023": 6,
  "4": 5,
  "3.5": 4,
  "3": 3,
  "2": 2,
  "1": 1,
};

const getSeasonRank = (season: string): number => {
  if (season in seasonDisplayOrder) return seasonDisplayOrder[season];

  const numericSeason = Number(season);
  return Number.isFinite(numericSeason) ? numericSeason : -1;
};

const getSeasonTitle = (season: string): string => {
  if (season === "3.5") return "2023 Christmas Battles";
  if (season === "2023") return "2023 Tournament";
  if (season === "5") return "Season 5 (2024-2025 Battles)";
  if (season === "Champions League") return "PenGame Champions League 2026";
  if (season === "2025") return "2025 Battles";
  if (season === "Cold War") return "PenGame Cold War";
  if (season === "Academy") return "PenGame Academy";

  return `Season ${season}`;
};

const sortBattlesById = (a: Battle, b: Battle): number => {
  const seasonOrderA = a.seasonOrder ?? Number.MAX_SAFE_INTEGER;
  const seasonOrderB = b.seasonOrder ?? Number.MAX_SAFE_INTEGER;

  if (seasonOrderA !== seasonOrderB) return seasonOrderA - seasonOrderB;

  return a.id.localeCompare(b.id, undefined, { numeric: true, sensitivity: "base" });
};

const getFallbackEpisodeLabel = (season: string, index: number): string => {
  if (season === "3.5") return `XMASx${String(index + 1).padStart(2, "0")}`;
  if (season === "2023") return `T23x${String(index + 1).padStart(2, "0")}`;
  if (season === "5") return `S5x${String(index + 1).padStart(2, "0")}`;
  if (season === "Cold War") return `S6x${String(index + 1).padStart(2, "0")}`;
  if (season === "Academy") return `ACADx${String(index + 1).padStart(2, "0")}`;

  return `${season}x${String(index + 1).padStart(2, "0")}`;
};

export default function PengamePage() {
  // Helper to parse view strings like "46.3K" or "4,569" into numbers
  const parseViews = (viewStr: string | number | undefined): number => {
    if (!viewStr) return 0;
    const clean = String(viewStr).replace(/,/g, "").toUpperCase();
    if (clean.endsWith("K")) {
      return parseFloat(clean.replace("K", "")) * 1000;
    }
    if (clean.endsWith("M")) {
      return parseFloat(clean.replace("M", "")) * 1000000;
    }
    return parseInt(clean) || 0;
  };

  const seasons = pengameBattles.reduce((acc, battle) => {
    const seasonKey = String(battle.season);
    if (!acc[seasonKey]) acc[seasonKey] = [];
    acc[seasonKey].push(battle);
    return acc;
  }, {} as Record<string, Battle[]>);
  const orderedSeasons = Object.entries(seasons)
    .map(([season, seasonBattles]) => [
      season,
      [...seasonBattles].sort(sortBattlesById),
    ] as const)
    .sort(([seasonA], [seasonB]) => getSeasonRank(seasonB) - getSeasonRank(seasonA));

  const totalViewsNum = pengameBattles.reduce((acc, b) => acc + parseViews(b.views), 0);
  const totalViewsStr = totalViewsNum >= 1000 
    ? (totalViewsNum / 1000).toFixed(1) + "K" 
    : totalViewsNum.toString();

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white selection:bg-brand selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-sm font-semibold text-zinc-400 tracking-wide mb-4">PenGame</h1>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              PenGame <span className="text-brand">Archives</span>
            </h2>
          </div>
          
          {/* Summary Stats */}
          <div className="flex gap-4 md:gap-8">
            <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl min-w-[180px]">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Eye size={14} className="text-brand" />
                <span className="text-[11px] tracking-wide font-semibold">Total Views</span>
              </div>
              <div className="text-3xl font-semibold text-white mb-1">{totalViewsStr}</div>
              <div className="flex items-center justify-between mt-1">
                <div className="text-[11px] text-zinc-500 tracking-wide">Last updated: {lastUpdated}</div>
              </div>
            </div>
            <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl min-w-[180px]">
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <Play size={14} className="text-brand" />
                <span className="text-[11px] tracking-wide font-semibold">Total Battles</span>
              </div>
              <div className="text-3xl font-semibold text-white">{pengameBattles.length}</div>
            </div>
          </div>
        </div>

        {orderedSeasons.map(([season, seasonBattles]) => (
          <div key={season} className="mb-16">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-zinc-200">
                {getSeasonTitle(season)}
              </h3>
              {season === "1" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  The debut season featuring: F-DON, AYMUNI, ASHLEY TRAGIC, F.T, SHORTY WOA, SAIDU, BIGGA & DAN DANNAH
                </p>
              )}
              {season === "Cold War" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  PenGame Cold War featured the return of KANDI, RA'SIAH, PASSIVE, SKAMZ, GRAMS, MISSINK, TAPPED24, DRIZZGB, SEVZ, F-DON & K.I.M.E and introduced BONNIE GODIVA & JMUNI
                </p>
              )}
              {season === "Champions League" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  The 2026 Champions League run includes Boxpark fixtures, official audio releases, and newly listed battles awaiting full video uploads.
                </p>
              )}
              {season === "2" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Season 2 featured all new artists: KMARH, KURLY, FRIZZ PRICE, REN DMC, LIL SHAKZ, POCAA, CHEEZEE & EL BANDZO
                </p>
              )}
              {season === "3" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Season 3 featured: AMITY, DBC, SKAMZ, JUNIE, ICUREDAMSTERDAM, ANIMAL, MESSIE, BMF ALZ & returning legends
                </p>
              )}
              {season === "4" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Season 4 featured: WHOISORION, DHANI, SEVZ, GRAMS, BLACK T, RENAYA, DRIZZGB, A PETRELLI, SMIL3Z, PRYNLEE, ALIAANO, JC, KANDI & iiiBEREALZ
                </p>
              )}
              {season === "3.5" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Special Christmas 2023 battles featuring: DRIZZGB, KANDI, SEVZ, TWENTY8, GRAMS, STORM, F.T & BLAZN
                </p>
              )}
              {season === "2023" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  The 2023 Tournament featuring Groups A-D, Quarter Finals, Semis and the Grand Final.
                </p>
              )}
              {season === "5" && (
                <div className="space-y-4 mt-2">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Season 5 had the return of KANDI, PRYNLEE, iiiBEREALZ, GRAMS, WHOISORION, DEENO, DAN DANNAH, DRIZZGB, STORM, SMIL3Z, SEVZ & SKAMZ
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    and the introduction of: ESS2MAD, JM, FENDRY, MISSINK, CUCHA, PASSIVE, HUNCE, ANBU SENSEI, DOMI DUSK, JAYCEE, TRAPPY, AD, CHE3KZ, PREMEBOI J, ZEN, CAVEMAN, RAHIKA, RICKO, KARMA10TNF, MR.BENZ, MARCEL, PENNO, MILLZ, FOZ, RA'SIAH, 220, K.I.M.E, 2MWAD, MELLO, TAPPED24 & CHAR.B
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    also introduced was PENGAME NORTH which brought in many artists from the North of England.
                  </p>
                </div>
              )}
            </div>
            {/* Battles Table */}
            <div className="bg-zinc-900/20 rounded-3xl border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-zinc-900/40">
                      <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Ep</th>
                      <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Battle</th>
                      <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Date</th>
                      <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Views</th>
                      <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400 text-right md:text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {seasonBattles.map((battle, index) => {
                      const mc1 = pengameMcs.find(m => m.id === battle.mc1);
                      const mc2 = pengameMcs.find(m => m.id === battle.mc2);
                      const episodeLabel = battle.customEp || getFallbackEpisodeLabel(season, index);

                      return (
                        <React.Fragment key={battle.id}>
                          <motion.tr 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group hover:bg-white/5 transition-all duration-300"
                          >
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <Link href={getBattleRouteHref(battle)} as={getBattleHref(battle)} className="font-mono text-brand text-[10px] md:text-sm hover:underline" aria-label={`Episode ${episodeLabel} details`}>
                                {episodeLabel}
                              </Link>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <div className="block group-hover:translate-x-1 transition-transform">
                                <span className="text-sm md:text-lg font-semibold text-zinc-100 group-hover:text-brand transition-colors flex items-center gap-1.5 md:gap-3">
                                  <span className="flex items-center gap-1 md:gap-2">
                                    {battle.winner === battle.mc1 && <Trophy size={14} className="text-brand md:w-[18px] md:h-[18px]" />}
                                    <Link href={`/mc/${mc1?.slug}`} className="hover:text-brand hover:underline underline-offset-4 transition-colors">
                                      {mc1?.name || battle.mc1}
                                    </Link>
                                  </span>
                                  <Link href={getBattleRouteHref(battle)} as={getBattleHref(battle)} className="text-zinc-400 text-[10px] md:text-sm hover:text-brand transition-colors" aria-label={`Watch ${mc1?.name || battle.mc1} vs ${mc2?.name || battle.mc2}`}>VS</Link>
                                  <span className="flex items-center gap-1 md:gap-2">
                                    <Link href={`/mc/${mc2?.slug}`} className="hover:text-brand hover:underline underline-offset-4 transition-colors">
                                      {mc2?.name || battle.mc2}
                                    </Link>
                                    {battle.winner === battle.mc2 && <Trophy size={14} className="text-brand md:w-[18px] md:h-[18px]" />}
                                  </span>
                                </span>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-400 text-xs">
                                <Calendar size={14} className="opacity-50" />
                                {battle.isUnreleased ? "In production" : (battle.date || "TBD")}
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-100 font-mono text-xs">
                                <span className="w-1 h-1 rounded-full bg-brand/50" />
                                {battle.views || "0"}
                              </div>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6 text-right md:text-left">
                              <span className={`inline-flex items-center px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide ${
                                battle.videoUrl 
                                  ? "bg-brand/10 text-brand border border-brand/20" 
                                  : "bg-zinc-800 text-zinc-400 border border-white/5"
                              }`}>
                                {battle.videoUrl ? "Archive in progress" : battle.statusNote || "Upcoming"}
                              </span>
                            </td>
                          </motion.tr>
                        </React.Fragment>
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
  );
}
