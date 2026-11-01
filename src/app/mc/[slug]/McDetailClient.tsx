"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allProfileMcs as allMcs, archiveMcBattles, getArchiveMcId, isCatalogueOnlyMc } from "../../../data/archiveMcProfiles";
import { formatBattleDate, parseBattleDate } from "../../../data/battleDates";
import { gzoneBattles } from "../../../data/gzone";
import {
  getBattleRouteHref,
  pengameBattles,
} from "../../../data/pengameBattles";
import { propertyItems } from "../../../data/property";
import { formatViewCount } from "../../../data/viewCounts";
import { hasBattlePage as hasAvailableBattlePage, type Battle } from "../../../data/battleTypes";
import {
  getBattleParticipants,
  getBattleWinners,
  hasOfficialBattleResult,
  isDrawBattle,
  isLeagueEligibleBattle,
  isUnknownResultBattle,
  isUnresolvedBattle,
} from "../../../data/leagueStandings";
import { motion } from "motion/react";
import {
  Instagram,
  Twitter,
  Youtube,
  Play,
  ChevronLeft,
  Trophy,
  Scale,
  Ruler,
  MapPin,
  Zap,
  Star,
  Clock,
  Eye,
  Scissors,
  Swords,
} from "lucide-react";

const parseViews = (views: Battle["views"]): number => {
  if (!views) return 0;
  const clean = String(views).replace(/,/g, "").trim().toUpperCase();
  if (clean.endsWith("M")) return Math.floor(parseFloat(clean) * 1000000);
  if (clean.endsWith("K")) return Math.floor(parseFloat(clean) * 1000);
  return Number.parseInt(clean, 10) || 0;
};

const formatViews = (views: number): string => {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${Math.floor(views / 1000)}k`;
  return String(views);
};

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "MC";

export default function McDetailClient({ slug }: { slug: string }) {
  const router = useRouter();

  const mc = allMcs.find((m) => m.slug === slug);

  if (!mc) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-display italic uppercase mb-4">MC Not Found</h1>
          <Link
            href="/mcs"
            className="text-brand hover:underline uppercase tracking-widest text-sm font-bold"
          >
            Back to MCs
          </Link>
        </div>
      </div>
    );
  }

  const mcBattles = [...pengameBattles, ...gzoneBattles]
    .filter(
      (battle) =>
        getBattleParticipants(battle).includes(mc.id) &&
        battle.statusNote !== "Cancelled" &&
        battle.winner !== "cancelled",
    )
    .sort((a, b) => (parseBattleDate(b.date) ?? 0) - (parseBattleDate(a.date) ?? 0));

  const catalogueEntries = archiveMcBattles.filter((battle) => battle.participants.includes(mc.id));
  const catalogueById = new Map(catalogueEntries.map((battle) => [battle.id, battle]));
  const battleHistory: Battle[] = [
    ...mcBattles,
    ...catalogueEntries.map((battle): Battle => ({
      id: battle.id,
      slug: battle.id,
      mc1: battle.participants[0],
      mc2: battle.participants[1],
      title: battle.sides ? battle.sides.map((side) => side.map((id) => allMcs.find((mc) => mc.id === id)?.name || id).join(" / ")).join(" vs ") : battle.names.join(" vs "),
      date: battle.date,
      theme: battle.event,
      season: "Archive",
      videoUrl: battle.videoUrl,
      views: battle.views,
    })),
  ].sort((a, b) => (parseBattleDate(b.date) ?? 0) - (parseBattleDate(a.date) ?? 0));

  const catalogueOnly = isCatalogueOnlyMc(mc.id);
  const wins = mc.wins;
  const losses = mc.losses;
  const draws = mcBattles.filter(
    (battle) => isLeagueEligibleBattle(battle) && isDrawBattle(battle),
  ).length;
  const unknownResults = mcBattles.filter(
    (battle) => isLeagueEligibleBattle(battle) && isUnknownResultBattle(battle),
  ).length;
  const unresolved = mcBattles.filter(
    (battle) => isLeagueEligibleBattle(battle) && isUnresolvedBattle(battle),
  ).length;
  const battleCount = mc.battles;
  const totalPoints = mc.wins * 3;
  const totalBattleViews = battleHistory.reduce((total, battle) => total + parseViews(battle.views), 0);
  const mcPropertyItems = propertyItems
    .filter((item) => item.usedById === mc.id)
    .sort((a, b) => b.dateSort.localeCompare(a.dateSort));

  const getMcName = (mcId: string) => allMcs.find((m) => m.id === mcId)?.name || mcId;

  const getBattleSides = (battle: Battle) => {
    const archiveSides = catalogueById.get(battle.id)?.sides;
    if (archiveSides) {
      const sideIndex = archiveSides.findIndex((side) => side.includes(mc.id));
      return { mcTeam: archiveSides[sideIndex] ?? [], opponentTeam: archiveSides.filter((_, index) => index !== sideIndex).flat() };
    }
    const teamA = [battle.mc1, battle.mc3].filter(Boolean) as string[];
    const teamB = [battle.mc2, battle.mc4].filter(Boolean) as string[];
    return teamA.includes(mc.id)
      ? { mcTeam: teamA, opponentTeam: teamB }
      : { mcTeam: teamB, opponentTeam: teamA };
  };

  const getOutcome = (battle: Battle) => {
    const catalogueEntry = catalogueById.get(battle.id);
    if (catalogueEntry) {
      const winner = "winner" in catalogueEntry ? catalogueEntry.winner : undefined;
      if (typeof winner !== "string" || !winner) return "UNREVIEWED";
      return getArchiveMcId(winner) === mc.id ? "WIN" : "LOSS";
    }
    if (!isLeagueEligibleBattle(battle)) return "UPCOMING";
    if (!hasOfficialBattleResult(battle)) return "NO RESULT";
    return getBattleWinners(battle).includes(mc.id) ? "WIN" : "LOSS";
  };

  const getEventLabel = (battle: Battle) => {
    if (battle.theme === "pengame") return "PenGame";
    if (battle.theme === "gzone") return "Gzone";
    return battle.theme;
  };

  const getThemeTextClass = (battle: Battle) => battle.theme === "gzone" ? "text-gzone" : "text-brand";
  const getThemeHoverClass = (battle: Battle) => battle.theme === "gzone" ? "group-hover:text-gzone" : "group-hover:text-brand";
  const getThemeHoverBgClass = (battle: Battle) => battle.theme === "gzone" ? "group-hover:bg-gzone" : "group-hover:bg-brand";

  const getBattleHref = (battle: Battle) => catalogueById.get(battle.id)?.battleHref ?? getBattleRouteHref(battle);
  const hasBattlePage = (battle: Battle) => Boolean(catalogueById.get(battle.id)?.battleHref) || hasAvailableBattlePage(battle);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white selection:bg-brand selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-zinc-400 hover:text-brand transition-colors uppercase tracking-[0.2em] text-[10px] font-bold mb-8 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to MC Roster
        </button>

        {/* Masterclass MC Dossier Banner (Zero-Photo Modern Header) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/90 via-zinc-900/40 to-black p-6 sm:p-10 overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 font-display text-2xl sm:text-3xl italic text-brand shadow-[0_0_25px_rgba(242,125,38,0.2)] shrink-0">
                  {getInitials(mc.name)}
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-brand">Artist Dossier</span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display italic uppercase leading-none tracking-tight text-white">
                    {mc.name}
                  </h1>
                </div>
              </div>

              {mc.nickname && (
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 pl-1">
                  &ldquo;{mc.nickname}&rdquo;
                </p>
              )}

              {/* Bio if exists */}
              {mc.bio && (
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-xl mb-4 pl-1">
                  {mc.bio}
                </p>
              )}

              {/* Meta pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 pl-1">
                {mc.location && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-[11px] font-semibold text-zinc-300">
                    <MapPin size={12} className="text-brand" /> {mc.location}
                  </span>
                )}
                {mc.style && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-[11px] font-semibold text-zinc-300">
                    <Zap size={12} className="text-brand" /> {mc.style}
                  </span>
                )}
                {mc.weightClass && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-[11px] font-semibold text-zinc-300">
                    <Scale size={12} className="text-brand" /> {mc.weightClass}
                  </span>
                )}
                {mc.height && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-[11px] font-semibold text-zinc-300">
                    <Ruler size={12} className="text-brand" /> {mc.height}
                  </span>
                )}
              </div>
            </div>

            {/* Quick KPI Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 shrink-0">
              <div className="rounded-2xl border border-brand/30 bg-black/60 p-4 min-w-[120px]">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand">Record</p>
                <p className="font-display text-2xl sm:text-3xl italic text-white mt-1">
                  {catalogueOnly ? "Archive" : `${wins}-${losses}${draws > 0 ? `-${draws}` : ""}`}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4 min-w-[120px]">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Total Battles</p>
                <p className="font-display text-2xl sm:text-3xl italic text-white mt-1">
                  {battleCount}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4 min-w-[120px]">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Battle Views</p>
                <p className="font-display text-2xl sm:text-3xl italic text-brand mt-1">
                  {catalogueOnly && !battleHistory.some((battle) => battle.views != null) ? "—" : formatViews(totalBattleViews)}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4 min-w-[120px]">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">Points</p>
                <p className="font-display text-2xl sm:text-3xl italic text-white mt-1">
                  {catalogueOnly ? "—" : totalPoints}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Split: Left (Form & Channels & Props) | Right (Battle Logs) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Form Section */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
                Recent Form
              </h2>
              <div className="flex flex-wrap gap-2">
                {battleHistory.filter((battle) => !catalogueById.has(battle.id) || getOutcome(battle) !== "UNREVIEWED").map((battle) => {
                  const outcome = getOutcome(battle);
                  const battlePageAvailable = hasBattlePage(battle);
                  const formLabel = outcome === "WIN" ? "W" : outcome === "LOSS" ? "L" : "-";
                  const formClass =
                    outcome === "WIN"
                      ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400"
                      : outcome === "LOSS"
                        ? "border-rose-500/40 bg-rose-500/15 text-rose-400"
                        : "border-white/10 bg-zinc-900/60 text-zinc-500";

                  const label = `${battle.displayTitle || battle.title}: ${outcome}`;
                  const className = `w-9 h-9 rounded-lg border flex items-center justify-center text-xs font-black ${formClass}`;

                  return battlePageAvailable ? (
                    <Link
                      key={battle.id}
                      href={getBattleHref(battle)}
                      title={label}
                      aria-label={label}
                      className={`${className} transition-transform hover:-translate-y-0.5`}
                    >
                      {formLabel}
                    </Link>
                  ) : (
                    <span
                      key={battle.id}
                      title={`${label}; editorial analysis pending`}
                      aria-label={`${label}; editorial analysis pending`}
                      className={className}
                    >
                      {formLabel}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            {(mc.instagram || mc.twitter || mc.youtube) && (
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
                  Official Channels
                </h2>
                <div className="flex gap-3">
                  {mc.instagram && (
                    <a
                      href={`https://instagram.com/${mc.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mc.name} on Instagram`}
                      className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black transition-all"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  {mc.twitter && (
                    <a
                      href={`https://twitter.com/${mc.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mc.name} on Twitter`}
                      className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black transition-all"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {mc.youtube && (
                    <a
                      href={`https://youtube.com/${mc.youtube}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${mc.name} on YouTube`}
                      className="w-10 h-10 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-black transition-all"
                    >
                      <Youtube size={18} />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Prop'erty Section */}
            {mcPropertyItems.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-5">
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
                  Prop&apos;erty
                </h2>
                <div className="space-y-3">
                  {mcPropertyItems.map((item) => (
                    <Link
                      key={`${item.name}-${item.battle}`}
                      href={item.battleHref}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-900/60 p-3 transition-colors hover:bg-white/5 group"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-800 text-brand transition-colors group-hover:bg-brand group-hover:text-black">
                        <Scissors size={18} strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0">
                        <div className="mb-0.5 flex flex-wrap items-center gap-1.5">
                          <span className="font-mono text-[9px] text-zinc-500">{item.episode}</span>
                          <span className="text-[9px] text-zinc-600">{item.date}</span>
                        </div>
                        <h3 className="font-display text-base italic uppercase text-white transition-colors group-hover:text-brand">
                          {item.name}
                        </h3>
                        <p className="mt-0.5 text-xs text-zinc-400">{item.note}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Battle History Log */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl sm:text-3xl italic uppercase text-white">
                Battle History <span className="text-brand">({battleHistory.length})</span>
              </h2>
            </div>

            <div className="space-y-3">
              {battleHistory.map((battle) => {
                const { opponentTeam } = getBattleSides(battle);
                const opponentId = opponentTeam[0];
                const opponent = opponentId ? allMcs.find((m) => m.id === opponentId) : null;
                const opponentLabel = opponentTeam.length > 0 ? opponentTeam.map(getMcName).join(" / ") : "Opponent";
                const outcome = getOutcome(battle);
                const catalogueEntry = catalogueById.get(battle.id);
                const recordingUrl = catalogueEntry?.videoUrl ?? battle.videoUrl;
                const battlePageAvailable = hasBattlePage(battle);

                const outcomeClass =
                  outcome === "WIN"
                    ? "bg-emerald-500/20 text-emerald-500"
                    : outcome === "LOSS"
                      ? "bg-rose-500/20 text-rose-500"
                      : "bg-zinc-700/40 text-zinc-400";
                const themeTextClass = getThemeTextClass(battle);
                const themeHoverClass = getThemeHoverClass(battle);
                const themeHoverBgClass = getThemeHoverBgClass(battle);

                const battleCard = (
                  <>
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Opponent Initials Monogram Badge */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-950 font-display text-xs italic text-brand">
                        {getInitials(opponentLabel)}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                            VS {opponentLabel}
                          </span>
                          <span
                            className={`${outcomeClass} text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest`}
                          >
                            {outcome}
                          </span>
                        </div>
                        <h3 className={`font-display italic uppercase text-xl ${themeHoverClass} transition-colors truncate`}>
                          {battle.displayTitle || battle.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                          <span className={`text-[10px] ${themeTextClass} font-black uppercase tracking-widest`}>
                            {getEventLabel(battle)}
                          </span>
                          {battle.views != null && <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                            {formatViewCount(battle.views)} views
                          </span>}
                          <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                            {catalogueEntry?.dateLabel ?? (catalogueEntry?.yearOnly ? battle.date?.slice(0, 4) : formatBattleDate(battle.date))}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center ${themeHoverBgClass} group-hover:text-black transition-all shrink-0`}>
                      {battlePageAvailable || recordingUrl ? <Play size={16} fill="currentColor" /> : <Clock size={16} />}
                    </div>
                  </>
                );

                return battlePageAvailable ? (
                  <Link
                    key={battle.id}
                    href={getBattleHref(battle)}
                    className="flex items-center justify-between gap-3 p-4 bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    {battleCard}
                  </Link>
                ) : recordingUrl ? (
                  <a
                    key={battle.id}
                    href={recordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${battle.title}`}
                    className="flex items-center justify-between gap-3 p-4 bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-white/5 transition-all group"
                  >
                    {battleCard}
                  </a>
                ) : (
                  <div
                    key={battle.id}
                    title="Editorial analysis pending"
                    className="flex items-center justify-between gap-3 p-4 bg-zinc-900/40 border border-white/5 rounded-2xl"
                  >
                    {battleCard}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
