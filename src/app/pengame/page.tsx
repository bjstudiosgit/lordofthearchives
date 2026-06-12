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
import { CheckCircle2, Play, Eye, Calendar, Trophy } from "lucide-react";

const seasonDisplayOrder: Record<string, number> = {
  "Champions League": 11,
  Academy: 10,
  "2025": 9,
  "Cold War": 8,
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
  if (season === "5") return "Season 5 (2024 Battles)";
  if (season === "Champions League") return "PenGame Champions League 2026";
  if (season === "2025") return "2025 Battles";
  if (season === "Cold War") return "PenGame Cold War";
  if (season === "Academy") return "PenGame Academy";

  return `Season ${season}`;
};

const archivedBattleSlugs = new Set(["f-don-vs-aymuni", "ashley-tragic-vs-ft", "shorty-woa-vs-saidu", "bigga-vs-dan-dannah", "saidu-vs-aymuni", "bigga-vs-ft", "bigga-vs-aymuni", "kmarh-vs-kurly", "frizz-price-vs-ren-dmc", "lil-shakz-vs-pocaa", "cheezee-vs-el-bandzo", "lil-shakz-vs-ren-dmc", "kmarh-vs-cheezee", "kmarh-vs-lil-shakz", "dan-dannah-vs-amity", "dbc-vs-amity", "dbc-vs-ren-dmc", "skamz-vs-junie", "skamz-vs-icuredamsterdam", "icuredamsterdam-vs-f-don", "junie-vs-f-don", "junie-vs-icuredamsterdam", "messie-vs-bmf-alz", "kmarh-vs-ft", "kmarh-vs-animal", "animal-vs-ft", "dan-dannah-vs-ren-dmc", "dan-dannah-vs-rendmc", "amity-vs-ren-dmc", "dan-dannah-vs-dbc", "skamz-vs-f-don-2", "ren-dmc-vs-skamz", "ft-vs-bmf-alz", "kmarh-vs-messie", "f-don-vs-dan-dannah", "kmarh-vs-f-don", "f-don-vs-skamz", "drizzgb-vs-kandi", "grams-vs-storm", "sevz-vs-twenty8", "ft-vs-blazn", "skamz-vs-dan-dannah", "cheezee-vs-whoisorion", "f-don-vs-aymuni-2", "dhani-vs-skamz", "black-t-vs-renaya", "drizzgb-vs-grams", "sevz-vs-skamz", "a-petrelli-vs-smil3z", "f-don-vs-whoisorion", "ft-vs-prynlee", "drizzgb-vs-aliaano", "dan-dannah-vs-smil3z", "drizzgb-vs-whoisorion", "whoisorion-vs-renaya", "skamz-vs-grams", "sevz-vs-grams", "sevz-vs-grams-2", "f-don-vs-jc", "skamz-vs-whoisorion", "ren-dmc-vs-renaya", "ft-vs-iiiberealz", "cheezee-vs-smil3z", "skamz-vs-kandi", "ren-dmc-vs-blazn", "drizzgb-vs-skamz", "skamz-vs-blazn", "ren-dmc-vs-drizzgb", "drizzgb-vs-blazn", "f-don-vs-iiiberealz", "f-don-vs-deeno", "f-don-vs-smil3z", "smil3z-vs-iiiberealz", "iiiberealz-vs-deeno", "dan-dannah-vs-kandi", "skamz-vs-ren-dmc-2", "smil3z-vs-deeno", "whoisorion-vs-kandi", "whoisorion-vs-kandi-2", "whoisorion-vs-cheezee-2", "cheezee-vs-dan-dannah", "whoisorion-vs-dan-dannah", "sevz-vs-prynlee", "sevz-vs-ft", "grams-vs-prynlee", "grams-vs-ft", "cheezee-vs-kandi", "sevz-vs-cheezee", "whoisorion-vs-drizzgb-2", "smil3z-vs-skamz", "ren-dmc-vs-f-don", "ren-dmc-vs-drizzgb-2", "skamz-vs-sevz-2", "ren-dmc-vs-skamz-3", "whoisorion-iiiberealz-vs-grams-smil3z", "iiiberealz-vs-ess2mad", "jm-vs-fendry", "missink-vs-cucha", "missink-vs-prynlee", "grams-vs-whoisorion", "grams-vs-whoisorion-2", "passive-vs-hunce", "passive-vs-zen", "anbu-sensei-vs-deeno", "hunce-vs-anbu-sensei", "dan-dannah-vs-iiiberealz", "iiiberealz-vs-rasiah", "rasiah-vs-fendry", "drizzgb-vs-jm", "cucha-vs-karma10tnf", "whoisorion-vs-zen", "deeno-vs-kandi", "deeno-vs-jm", "jaycee-vs-kime", "storm-vs-cheezee", "domi-dusk-vs-jaycee", "domi-dusk-vs-fendry", "ess2mad-vs-deeno", "che3kz-vs-premeboi-j", "zen-vs-caveman", "rahika-vs-ricko", "karma10tnf-vs-mr-benz", "marcel-vs-penno", "millz-vs-foz", "rasiah-vs-220", "jm-vs-mr-benz", "millz-vs-karma10tnf", "2mwad-vs-skamz", "anbu-sensei-vs-smil3z", "che3kz-vs-cucha", "marcel-vs-kandi", "kime-vs-caveman", "domi-dusk-vs-hunce", "grams-vs-mr-benz", "fendry-vs-jaycee", "cucha-vs-char-b", "che3kz-vs-marcel", "drizzgb-vs-trappy-vs-grams-vs-passive", "drizzgb-vs-trappy-vs-f-don-vs-dan-dannah", "drizzgb-vs-trappy-vs-grams-vs-passive", "skamz-vs-rasiah", "passive-vs-kandi", "passive-vs-skamz", "passive-vs-rasiah", "passive-vs-rasiah"]);

const getSeasonEpisodeOrder = (battle: Battle): number | null => {
  if (battle.season === 5) return null;
  if (battle.seasonOrder != null) return battle.seasonOrder;

  if (battle.season === 2023) {
    const match = battle.customEp?.match(/^Tx(\d+)$/i);
    if (match) return Number(match[1]);
  }

  return null;
};

const parseCustomEpisode = (episode?: string): { number: number; prefix: string; raw: string } | null => {
  if (!episode) return null;

  const match = episode.match(/^(.+?)x([A-Za-z]*)(\d+)$/i);
  if (!match) return null;

  const [, , prefix = "", numberPart] = match;
  return {
    number: Number(numberPart),
    prefix: prefix.toLowerCase(),
    raw: episode.toLowerCase(),
  };
};

const compareCustomEpisodes = (left?: string, right?: string): number => {
  const a = parseCustomEpisode(left);
  const b = parseCustomEpisode(right);

  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;
  if (a.number !== b.number) return a.number - b.number;
  if (a.prefix !== b.prefix) return a.prefix.localeCompare(b.prefix);
  return a.raw.localeCompare(b.raw);
};

const sortBattlesById = (a: Battle, b: Battle): number => {
  const seasonOrderA = getSeasonEpisodeOrder(a) ?? Number.MAX_SAFE_INTEGER;
  const seasonOrderB = getSeasonEpisodeOrder(b) ?? Number.MAX_SAFE_INTEGER;

  if (seasonOrderA !== seasonOrderB) return seasonOrderA - seasonOrderB;

  const episodeOrder = compareCustomEpisodes(a.customEp, b.customEp);
  if (episodeOrder !== 0) return episodeOrder;

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

const tournamentSectionOrder = [
  "Group A",
  "Group B",
  "Group C",
  "Group D",
  "Quarter Finals",
  "2v2",
  "2v2 Special",
  "Semi Finals",
  "Final",
] as const;

const getTournamentSectionLabel = (battle: Battle): string => {
  if (battle.group) return `Group ${battle.group}`;
  if (battle.stage === "Quarter Finals") return "Quarter Finals";
  if (battle.stage === "2v2" || battle.subGroup === "2v2") return "2v2";
  if (battle.subGroup === "2v2 Special") return "2v2 Special";
  if (battle.stage === "Semi Finals") return "Semi Finals";
  if (battle.stage === "Final") return "Final";
  return battle.subGroup || battle.stage || "Tournament";
};

const getMcName = (mcId?: string): string => {
  if (!mcId) return "";
  return pengameMcs.find((mc) => mc.id === mcId)?.name || mcId;
};

const getBattleDisplayTitle = (battle: Battle): string => {
  if (battle.displayTitle) return battle.displayTitle;

  const teamA = [battle.mc1, battle.mc3].filter(Boolean).map((mcId) => getMcName(mcId));
  const teamB = [battle.mc2, battle.mc4].filter(Boolean).map((mcId) => getMcName(mcId));

  if (teamA.length && teamB.length) {
    return `${teamA.join(" & ")} vs ${teamB.join(" & ")}`;
  }

  return battle.title;
};

const renderBattleMatchup = (battle: Battle): React.ReactNode => {
  const winners = new Set([battle.winner, battle.winner2].filter(Boolean));
  const renderName = (mcId?: string) => {
    if (!mcId) return null;
    const isWinner = winners.has(mcId);

    return (
      <React.Fragment key={mcId}>
        {isWinner && <Trophy size={14} className="text-brand shrink-0" />}
        <span>{getMcName(mcId)}</span>
      </React.Fragment>
    );
  };

  const renderTeam = (members: Array<string | undefined>) => {
    const filteredMembers = members.filter(Boolean);
    return filteredMembers.map((member, index) => (
      <React.Fragment key={member}>
        {index > 0 && <span className="text-zinc-400">&amp;</span>}
        {renderName(member)}
      </React.Fragment>
    ));
  };

  if (battle.mc3 || battle.mc4) {
    return (
      <>
        {renderTeam([battle.mc1, battle.mc3])}
        <span className="text-zinc-400 px-1">vs</span>
        {renderTeam([battle.mc2, battle.mc4])}
      </>
    );
  }

  return (
    <>
      {renderName(battle.mc1)}
      <span className="text-zinc-400 px-1">vs</span>
      {renderName(battle.mc2)}
    </>
  );
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

  const parseBattleDateValue = (date?: string): number => {
    if (!date) return Number.POSITIVE_INFINITY;
    const [day, month, year] = date.split("-").map(Number);
    if (!day || !month || !year) return Number.POSITIVE_INFINITY;
    return new Date(year, month - 1, day).getTime();
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
                  Season 4 opened with SKAMZ vs DAN DANNAH and featured: WHOISORION, DHANI, SEVZ, GRAMS, BLACK T, RENAYA, DRIZZGB, A PETRELLI, SMIL3Z, PRYNLEE, ALIAANO, JC, KANDI & iiiBEREALZ
                </p>
              )}
              {season === "3.5" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  Special Christmas 2023 battles featuring: DRIZZGB, KANDI, SEVZ, TWENTY8, GRAMS, STORM, F.T & BLAZN
                </p>
              )}
              {season === "2023" && (
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  The 2023 Tournament featuring Groups A-D, Quarter Finals, Semis, the Grand Final and the post-final 2v2 special.
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
            {season === "2023" ? (
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
                      {tournamentSectionOrder.map((sectionLabel) => {
                        const sectionBattles = seasonBattles.filter(
                          (battle) => getTournamentSectionLabel(battle) === sectionLabel,
                        );

                        if (sectionBattles.length === 0) return null;

                        return (
                          <React.Fragment key={sectionLabel}>
                            <tr className="bg-zinc-900/60">
                              <th
                                colSpan={5}
                                className="px-2 py-3 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-brand"
                              >
                                {sectionLabel}
                              </th>
                            </tr>
                            {sectionBattles.map((battle, index) => {
                              const episodeLabel = battle.customEp || getFallbackEpisodeLabel(season, index);

                              return (
                                <motion.tr
                                  key={battle.id}
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
                                        <Link href={getBattleRouteHref(battle)} as={getBattleHref(battle)} className="hover:text-brand hover:underline underline-offset-4 transition-colors" aria-label={`Watch ${getBattleDisplayTitle(battle)}`}>
                                          <span className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
                                            {renderBattleMatchup(battle)}
                                          </span>
                                        </Link>
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
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide ${
                                      archivedBattleSlugs.has(battle.slug)
                                        ? "bg-emerald-400/15 text-emerald-300 border border-emerald-300/40 shadow-[0_0_18px_rgba(52,211,153,0.12)]"
                                        : battle.videoUrl
                                          ? "bg-brand/10 text-brand border border-brand/20"
                                          : "bg-zinc-800 text-zinc-400 border border-white/5"
                                    }`}>
                                      {archivedBattleSlugs.has(battle.slug) && <CheckCircle2 size={12} />}
                                      {archivedBattleSlugs.has(battle.slug) ? "Archived" : battle.videoUrl ? "Archive in progress" : battle.statusNote || "Upcoming"}
                                    </span>
                                  </td>
                                </motion.tr>
                              );
                            })}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : season === "5" || season === "2025" || season === "Cold War" ? (() => {
              const getSeasonBattleSectionLabel = (battle: Battle) => {
                if (season === "Cold War" && battle.subGroup === "Group A") return "PenGame Cold War - Group A";
                if (
                  battle.subGroup === "South vs North 2" ||
                  battle.subGroup === "North Battles" ||
                  battle.subGroup === "Wrexham Battles" ||
                  battle.subGroup === "Manchester Battles"
                ) return "Regional Battles";
                if (battle.subGroup === "2v2 Tournament") return "Box Park 2v2 Tournament";
                return battle.subGroup || battle.stage || (season === "2025" ? "2025 Battles" : "Season 5");
              };

              const groupedSeasonBattles = [...seasonBattles].reduce((acc, battle) => {
                const sectionLabel = getSeasonBattleSectionLabel(battle);
                if (!acc[sectionLabel]) acc[sectionLabel] = [];
                acc[sectionLabel].push(battle);
                return acc;
              }, {} as Record<string, Battle[]>);

              const orderedSectionLabels = Object.entries(groupedSeasonBattles)
                .map(([label, battles]) => ({
                  label,
                  battles,
                  sortKey: Math.min(...battles.map((battle) => parseBattleDateValue(battle.date))),
                }))
                .sort((a, b) => {
                  if (season === "Cold War") {
                    const coldWarSectionOrder = [
                      "PenGame Cold War - Group A",
                      "Group B",
                      "Group C",
                      "Group D",
                      "Quarter Finals",
                      "Side battle",
                      "Semi Finals",
                      "Final",
                    ];
                    const aOrder = coldWarSectionOrder.indexOf(a.label);
                    const bOrder = coldWarSectionOrder.indexOf(b.label);
                    if (aOrder !== bOrder) {
                      return (aOrder === -1 ? coldWarSectionOrder.length : aOrder)
                        - (bOrder === -1 ? coldWarSectionOrder.length : bOrder);
                    }
                  }
                  return a.sortKey - b.sortKey || a.label.localeCompare(b.label);
                });

              const seasonEpisodeLabels = [...seasonBattles]
                .sort((a, b) => parseBattleDateValue(a.date) - parseBattleDateValue(b.date) || compareCustomEpisodes(a.customEp, b.customEp))
                .reduce((acc, battle, index) => {
                  const episodePrefix = season === "2025" ? "25" : season === "Cold War" ? "S6" : "5";
                  acc[battle.id] = `${episodePrefix}x${String(index + 1).padStart(2, "0")}`;
                  return acc;
                }, {} as Record<string, string>);

              const boxPark2v2Order = [
                "whoisorion-cheezee-vs-drizzgb-trappy",
                "grams-passive-vs-storm-ad",
                "smil3z-iiiberealz-vs-f-don-dan-dannah",
                "skamz-sevz-vs-kandi-deeno",
                "drizzgb-trappy-vs-grams-passive",
                "drizzgb-trappy-vs-f-don-dan-dannah",
              ];

              const coldWarGroupAOrder = [
                "kandi-vs-rasiah",
                "passive-vs-skamz",
                "passive-vs-rasiah",
                "kandi-vs-skamz-2",
                "skamz-vs-rasiah",
                "passive-vs-kandi",
                "grams-vs-missink",
                "kandi-vs-bonnie-godiva",
                "tapped24-vs-jmuni",
                "drizzgb-vs-sevz",
                "f-don-vs-kime",
              ];

              return (
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
                        {orderedSectionLabels.map(({ label, battles }) => (
                          <React.Fragment key={label}>
                            <tr className="bg-zinc-900/60">
                              <th
                                colSpan={5}
                                className="px-2 py-3 md:px-6 md:py-4 text-xs md:text-sm font-semibold text-brand"
                              >
                                {label}
                              </th>
                            </tr>
                            {[...battles]
                              .sort((a, b) => {
                                if (label === "Box Park 2v2 Tournament") {
                                  return boxPark2v2Order.indexOf(a.slug) - boxPark2v2Order.indexOf(b.slug);
                                }
                                if (label === "PenGame Cold War - Group A") {
                                  return coldWarGroupAOrder.indexOf(a.slug) - coldWarGroupAOrder.indexOf(b.slug);
                                }
                                return parseBattleDateValue(a.date) - parseBattleDateValue(b.date) || compareCustomEpisodes(a.customEp, b.customEp);
                              })
                              .map((battle, index) => {
                              const coldWarEpisodePrefixes: Record<string, string> = {
                                "PenGame Cold War - Group A": "PWA",
                                "Group B": "PWB",
                                "Group C": "PWC",
                                "Group D": "PWD",
                                "Quarter Finals": "PWQF",
                                "Side battle": "PWSB",
                                "Semi Finals": "PWSF",
                                "Final": "PWF",
                              };
                              const episodeLabel = label === "Box Park 2v2 Tournament"
                                ? `2v2x${index + 1}`
                                : battle.slug === "whoisorion-vs-kandi"
                                  ? "TB01"
                                : label === "Regional Battles"
                                  ? `RBx${String(index + 1).padStart(2, "0")}`
                                : season === "Cold War"
                                  ? `${coldWarEpisodePrefixes[label] || "PW"}x${String(index + 1).padStart(2, "0")}`
                                  : seasonEpisodeLabels[battle.id] || battle.customEp || getFallbackEpisodeLabel(season, index);

                              return (
                                <motion.tr
                                  key={battle.id}
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
                                        <Link href={getBattleRouteHref(battle)} as={getBattleHref(battle)} className="hover:text-brand hover:underline underline-offset-4 transition-colors" aria-label={`Watch ${getBattleDisplayTitle(battle)}`}>
                                          <span className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
                                            {renderBattleMatchup(battle)}
                                          </span>
                                        </Link>
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
                                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide ${
                                      archivedBattleSlugs.has(battle.slug)
                                        ? "bg-emerald-400/15 text-emerald-300 border border-emerald-300/40 shadow-[0_0_18px_rgba(52,211,153,0.12)]"
                                        : battle.videoUrl
                                          ? "bg-brand/10 text-brand border border-brand/20"
                                          : "bg-zinc-800 text-zinc-400 border border-white/5"
                                    }`}>
                                      {archivedBattleSlugs.has(battle.slug) && <CheckCircle2 size={12} />}
                                      {archivedBattleSlugs.has(battle.slug) ? "Archived" : battle.videoUrl ? "Archive in progress" : battle.statusNote || "Upcoming"}
                                    </span>
                                  </td>
                                </motion.tr>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })() : (
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
                      {[...seasonBattles].sort(sortBattlesById).map((battle, index) => {
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
                                    <Link href={getBattleRouteHref(battle)} as={getBattleHref(battle)} className="hover:text-brand hover:underline underline-offset-4 transition-colors" aria-label={`Watch ${getBattleDisplayTitle(battle)}`}>
                                      <span className="flex items-center gap-1.5 md:gap-2.5 flex-wrap">
                                        {renderBattleMatchup(battle)}
                                      </span>
                                    </Link>
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
                                <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide ${
                                  archivedBattleSlugs.has(battle.slug)
                                    ? "bg-emerald-400/15 text-emerald-300 border border-emerald-300/40 shadow-[0_0_18px_rgba(52,211,153,0.12)]"
                                    : battle.videoUrl
                                      ? "bg-brand/10 text-brand border border-brand/20"
                                      : "bg-zinc-800 text-zinc-400 border border-white/5"
                                }`}>
                                  {archivedBattleSlugs.has(battle.slug) && <CheckCircle2 size={12} />}
                                  {archivedBattleSlugs.has(battle.slug) ? "Archived" : battle.videoUrl ? "Archive in progress" : battle.statusNote || "Upcoming"}
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
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
