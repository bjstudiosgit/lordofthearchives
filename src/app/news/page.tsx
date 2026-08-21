import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpenCheck, CalendarDays, Radio, Trophy } from "lucide-react";
import type { Battle } from "../../data/battleTypes";
import { hasCompletedBattleAnalysis } from "../../data/battleTypes";
import { formatBattleDate, parseBattleDate } from "../../data/battleDates";
import { gzoneBattles } from "../../data/gzone";
import { lordOfTheMicsBattles } from "../../data/lordOfTheMics";
import { getBattleHref, lastUpdated, pengameBattles } from "../../data/pengameBattles";

export const metadata: Metadata = {
  title: "News | Lord of the Archives",
  description:
    "The latest UK rap battle archive updates, newly completed clash reports and research releases from Lord of the Archives.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/news",
  },
};

const completedBattles = [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]
  .filter(hasCompletedBattleAnalysis)
  .sort((a, b) => (parseBattleDate(b.date) ?? 0) - (parseBattleDate(a.date) ?? 0));

const latestBattles = completedBattles.slice(0, 9);
const leadBattle = latestBattles[0];
const moreBattles = latestBattles.slice(1);

const getPlatform = (battle: Battle) => {
  if (battle.theme === "gzone") return "Gzone";
  if (battle.theme === "lotm") return "Lord of the Mics";
  return "PenGame";
};

const getExcerpt = (battle: Battle, maxLength = 220) => {
  const firstParagraph = battle.clashSummary?.split(/\n\n+/)[0]?.trim() ?? "A newly completed battle archive report.";
  if (firstParagraph.length <= maxLength) return firstParagraph;
  return `${firstParagraph.slice(0, maxLength).trimEnd()}…`;
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#080809] pb-24 pt-28 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.26em] text-brand">
                <Radio size={14} /> Archive desk
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl italic uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
                Lord of the Archives <span className="text-brand">News</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                New battle reports, transcript-led breakdowns and verified archive updates from across the UK rap battle
                scene. Every story links back to the complete record.
              </p>
            </div>

            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
              <div className="p-5">
                <dt className="font-display text-3xl italic text-white">{completedBattles.length}</dt>
                <dd className="mt-1 text-[9px] font-black uppercase tracking-[0.17em] text-zinc-500">Detailed reports</dd>
              </div>
              <div className="border-l border-white/10 p-5">
                <dt className="font-display text-3xl italic text-brand">3</dt>
                <dd className="mt-1 text-[9px] font-black uppercase tracking-[0.17em] text-zinc-500">Archives covered</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <Link
          href="/news/did-pengame-fall-off"
          className="group relative block overflow-hidden rounded-3xl border border-brand/25 bg-zinc-950 p-6 transition hover:border-brand/55 sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-brand">
                <BarChart3 size={14} /> Featured analysis
              </p>
              <h2 className="mt-4 font-display text-4xl italic uppercase leading-none text-white transition group-hover:text-brand sm:text-5xl">
                PenGame heads to Ministry of Sound as 2026 view figures trail its peak
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                PenGame&apos;s Ministry of Sound date is sold out, but the platform&apos;s 2026 YouTube releases remain below
                the lifetime view figures of its biggest seasons. Here is what the public data can—and cannot—show.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-[9px] font-black uppercase tracking-[0.16em] text-zinc-500">
                <span className="rounded-full border border-white/10 px-3 py-1.5">Updated 21 Aug 2026</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">4 min read</span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">News analysis</span>
              </div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition group-hover:bg-yellow-300">
              Read article <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">Latest release</p>
            <h2 className="mt-2 font-display text-3xl italic uppercase text-white sm:text-4xl">New in the archive</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">Archive feed updated {lastUpdated}</p>
        </div>

        {leadBattle && (
          <article className="group relative overflow-hidden rounded-3xl border border-brand/25 bg-zinc-950 p-6 transition hover:border-brand/50 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em]">
                  <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-brand">
                    {getPlatform(leadBattle)}
                  </span>
                  {leadBattle.customEp && <span className="text-zinc-500">{leadBattle.customEp}</span>}
                  <span className="flex items-center gap-1.5 text-zinc-500">
                    <CalendarDays size={13} /> {formatBattleDate(leadBattle.date)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-4xl italic uppercase leading-none text-white transition group-hover:text-brand sm:text-5xl">
                  {leadBattle.title}
                </h3>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400">{getExcerpt(leadBattle, 340)}</p>
              </div>
              <Link
                href={getBattleHref(leadBattle)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-yellow-300"
              >
                Read report <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moreBattles.map((battle) => (
            <article
              key={battle.id}
              className="group flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-950/70 p-6 transition hover:-translate-y-1 hover:border-brand/35"
            >
              <div className="flex items-center justify-between gap-4 text-[9px] font-black uppercase tracking-[0.18em]">
                <span className="text-brand">{getPlatform(battle)}</span>
                <span className="text-zinc-600">{battle.customEp ?? battle.season}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl italic uppercase leading-none text-white transition group-hover:text-brand">
                {battle.title}
              </h3>
              <p className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">
                <CalendarDays size={13} /> {formatBattleDate(battle.date)}
              </p>
              <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">{getExcerpt(battle)}</p>
              <Link
                href={getBattleHref(battle)}
                className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-[10px] font-black uppercase tracking-[0.18em] text-brand"
              >
                Open archive report <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand">
              <BookOpenCheck size={15} /> Follow the records
            </p>
            <h2 className="mt-3 font-display text-3xl italic uppercase text-white">Go deeper than the headlines.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Browse complete battle histories, verified results, MC records and combined league standings.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/mcs" className="rounded-xl border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-brand/40 hover:text-brand">
              Browse MCs
            </Link>
            <Link href="/lota-league" className="inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-black">
              <Trophy size={15} /> League table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
