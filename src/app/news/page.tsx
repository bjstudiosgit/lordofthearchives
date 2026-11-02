import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BarChart3, BookOpenCheck, CalendarDays, Radio, Trophy, TrendingUp, Beer, Swords, Sparkles } from "lucide-react";
import type { Battle } from "../../data/battleTypes";
import { hasCompletedBattleAnalysis } from "../../data/battleTypes";
import { formatBattleDate, parseBattleDate } from "../../data/battleDates";
import { gzoneBattles } from "../../data/gzone";
import { lordOfTheMicsBattles } from "../../data/lordOfTheMics";
import { getBattleHref, lastUpdated, pengameBattles } from "../../data/pengameBattles";
import { prizefighterClashData } from "../../data/prizefighterClashData";
import { talkIsCheapClashData } from "../../data/talkIsCheap";
import { clashMoneyBattles } from "../../data/clashMoney";
import { kingOfTheRonaldsBattles } from "../../data/kingOfTheRonalds";

export const metadata: Metadata = {
  title: "UK Battle Rap News & Editorials",
  description:
    "The latest UK rap battle archive updates, investigative editorials, historical deep-dives, and verified clash reports across all 7 UK battle leagues.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/news",
  },
};

const completedBattles = [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]
  .filter(hasCompletedBattleAnalysis)
  .sort((a, b) => (parseBattleDate(b.date) ?? 0) - (parseBattleDate(a.date) ?? 0));

const totalDetailedReports =
  completedBattles.length +
  Object.keys(prizefighterClashData).length +
  Object.keys(talkIsCheapClashData).length +
  clashMoneyBattles.length +
  kingOfTheRonaldsBattles.length;

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

const editorialArticles = [
  {
    slug: "top-10-most-viewed-uk-rap-battles",
    href: "/news/top-10-most-viewed-uk-rap-battles",
    title: "The Top 10 Most Viewed UK Rap Battles of All Time",
    category: "Data Analysis · All Leagues",
    icon: TrendingUp,
    badgeColor: "text-brand bg-brand/10 border-brand/20",
    readTime: "6 min read",
    date: "1 Nov 2026",
    summary:
      "A verified countdown of the biggest UK rap battles by public YouTube views, revealing how female MCs and theatrical viral clashes captured millions of casual viewers beyond the subculture.",
    highlight: "Kandi vs Prynlee (2.06M) & Ren DMC vs Renaya (2.04M)",
  },
  {
    slug: "history-of-king-of-the-ronalds",
    href: "/news/history-of-king-of-the-ronalds",
    title: "The Complete History of King of the Ronalds (KOTR)",
    category: "Historical Retrospective · KOTR",
    icon: Beer,
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    readTime: "5 min read",
    date: "1 Nov 2026",
    summary:
      "From sweaty pub basements in Islington to international cult status: how Pedro and Micky Worthless built the UK's rawest, funniest, and most unapologetic underground battle movement.",
    highlight: "268+ KOTR Battles Cataloged",
  },
  {
    slug: "prizefighter-tournament-format-breakdown",
    href: "/news/prizefighter-tournament-format-breakdown",
    title: "Prizefighter: How the Knockout Tournament Changed UK Clashing",
    category: "Format Deep Dive · Prizefighter",
    icon: Swords,
    badgeColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    readTime: "5 min read",
    date: "1 Nov 2026",
    summary:
      "Why Ozone Prizefighter's sudden-death 140 BPM elimination bracket and strict 8-bar rounds eliminated filler, tested true stamina, and incubated the next generation of clash stars.",
    highlight: "Sudden Death & 140 BPM Speed",
  },
  {
    slug: "did-pengame-fall-off",
    href: "/news/did-pengame-fall-off",
    title: "PenGame heads to Ministry of Sound as 2026 view figures trail its peak",
    category: "News Analysis · PenGame",
    icon: BarChart3,
    badgeColor: "text-zinc-300 bg-zinc-800 border-zinc-700",
    readTime: "4 min read",
    date: "21 Aug 2026",
    summary:
      "PenGame's Ministry of Sound event sold out after a discounted ticket offer, while 2026 YouTube uploads sit below the numbers of its biggest seasons. What the public data shows.",
    highlight: "View Count Snapshot & Analysis",
  },
];

export default function NewsPage() {
  const leadArticle = editorialArticles[0];
  const otherArticles = editorialArticles.slice(1);

  return (
    <main className="min-h-screen bg-[#080809] pb-24 pt-28 text-white">
      {/* Header & Stats Banner */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.26em] text-brand">
                <Radio size={14} /> Archive desk
              </p>
              <h1 className="mt-5 max-w-4xl font-display text-5xl italic uppercase leading-[0.9] sm:text-6xl lg:text-7xl">
                Lord of the Archives <span className="text-brand">News &amp; Editorials</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                Investigative deep dives, historical retrospectives, view-count rankings, and newly verified battle reports
                spanning the full breadth of UK clash history across all seven platforms.
              </p>
            </div>

            <dl className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
              <div className="p-5">
                <dt className="font-display text-3xl italic text-white">{totalDetailedReports}</dt>
                <dd className="mt-1 text-[9px] font-black uppercase tracking-[0.17em] text-zinc-500">Detailed reports</dd>
              </div>
              <div className="border-l border-white/10 p-5">
                <dt className="font-display text-3xl italic text-brand">7</dt>
                <dd className="mt-1 text-[9px] font-black uppercase tracking-[0.17em] text-zinc-500">Archives covered</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Featured Editorial Articles Section */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">Long-form journalism</p>
            <h2 className="mt-2 font-display text-3xl italic uppercase text-white sm:text-4xl">Featured Editorials</h2>
          </div>
          <span className="text-xs uppercase tracking-wider text-zinc-500">4 In-Depth Guides</span>
        </div>

        {/* Lead Hero Article */}
        <Link
          href={leadArticle.href}
          className="group relative block overflow-hidden rounded-3xl border border-brand/25 bg-zinc-950 p-6 transition hover:border-brand/60 sm:p-8 lg:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]">
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 ${leadArticle.badgeColor}`}>
                  <leadArticle.icon size={13} /> {leadArticle.category}
                </span>
                <span className="text-zinc-500">New Release</span>
                <span className="text-zinc-500">{leadArticle.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-4xl italic uppercase leading-none text-white transition group-hover:text-brand sm:text-5xl lg:text-6xl">
                {leadArticle.title}
              </h3>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                {leadArticle.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
                <span className="text-zinc-400">{leadArticle.date}</span>
                <span>·</span>
                <span className="text-brand font-black">{leadArticle.highlight}</span>
              </div>
            </div>
            <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-black transition group-hover:bg-yellow-300">
              Read Guide <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>

        {/* Supporting Editorial Articles Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherArticles.map((article) => {
            const Icon = article.icon;
            return (
              <Link
                key={article.slug}
                href={article.href}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950/70 p-6 transition hover:-translate-y-1 hover:border-brand/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-[9px] font-black uppercase tracking-[0.18em]">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 ${article.badgeColor}`}>
                      <Icon size={12} /> {article.category}
                    </span>
                    <span className="text-zinc-600">{article.readTime}</span>
                  </div>
                  <h4 className="mt-5 font-display text-2xl italic uppercase leading-tight text-white transition group-hover:text-brand">
                    {article.title}
                  </h4>
                  <p className="mt-3 text-xs leading-6 text-zinc-400">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-brand transition group-hover:translate-x-1">
                    Read <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest Completed Battle Reports Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">Latest in the database</p>
            <h2 className="mt-2 font-display text-3xl italic uppercase text-white sm:text-4xl">Verified Clash Reports</h2>
          </div>
          <p className="text-xs uppercase tracking-[0.14em] text-zinc-600">Feed refreshed {lastUpdated}</p>
        </div>

        {leadBattle && (
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-brand/50 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-transparent" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.18em]">
                  <span className="text-brand">{getPlatform(leadBattle)}</span>
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

      {/* Cross-League Call to Action */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand">
              <BookOpenCheck size={15} /> Follow the records
            </p>
            <h2 className="mt-3 font-display text-3xl italic uppercase text-white">Go deeper than the headlines.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Browse complete battle histories, verified results, MC records and combined cross-league standings across all 7 archives.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/mcs"
              className="rounded-xl border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:border-brand/40 hover:text-brand"
            >
              Browse 540+ MCs
            </Link>
            <Link
              href="/lota-league"
              className="inline-flex items-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-brand transition hover:bg-brand hover:text-black"
            >
              <Trophy size={15} /> LOTA League Table
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
