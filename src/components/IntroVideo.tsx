import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import { pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { prizefighterBattles } from "../data/prizefighter";
import { talkIsCheapSeries } from "../data/talkIsCheap";
import { clashMoneyBattles } from "../data/clashMoney";
import { kingOfTheRonaldsBattles } from "../data/kingOfTheRonalds";

const archives = [
  {
    name: "PenGame",
    href: "/pengame",
    leagueHref: "/league",
    count: pengameBattles.length,
    era: "2023–26",
    description: "The UK's flagship clash platform: 450+ battles, judged fixtures and divisional league tables.",
  },
  {
    name: "King of the Ronalds",
    href: "/king-of-the-ronalds",
    count: kingOfTheRonaldsBattles.length,
    era: "2014–20",
    description: "Raw, unfiltered UK battle culture: Bowski, Micky Worthless, Hulk, Pedro, Oshea & Tony D.",
  },
  {
    name: "Prizefighter",
    href: "/prizefighter",
    leagueHref: "/prizefighter/league",
    count: prizefighterBattles.length,
    era: "2011–24",
    description: "Tournament grime clashes across multiple eras with verified results and points tables.",
  },
  {
    name: "Clash Money",
    href: "/clash-money",
    count: clashMoneyBattles.length,
    era: "2015–16",
    description: "Headline 1v1 and 2v2 bouts plus Trials development featuring Blizzard, Dialect & Bru-C.",
  },
  {
    name: "Lord of the Mics",
    href: "/lord-of-the-mics",
    count: lordOfTheMicsBattles.length,
    era: "2004–15",
    description: "The foundation of UK clash history: Jammer's legendary basement DVD tracklists.",
  },
  {
    name: "Gzone",
    href: "/gzone",
    leagueHref: "/gzone/league",
    count: gzoneBattles.length,
    era: "Season 1",
    description: "Heavyweight grime clashes featuring Deeno, Tapped24, Roman, Marni Gramz and Ryno.",
  },
  {
    name: "Talk Is Cheap",
    href: "/talk-is-cheap",
    count: talkIsCheapSeries.reduce((total, series) => total + series.battles.length, 0),
    era: "2024–26",
    description: "Next-generation underground rap clashes, rapid releases and emerging scene talent.",
  },
];

export default function IntroVideo() {
  const archivedBattleCount = archives.reduce((total, archive) => total + archive.count, 0);

  return (
    <section aria-labelledby="hero-heading" className="relative isolate w-full overflow-hidden border-b border-brand/20 bg-black">
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 block">
          <source
            type="image/webp"
            srcSet="/hero-archives-emblem-768.webp 768w, /hero-archives-emblem-1280.webp 1280w, /hero-archives-emblem.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/hero-archives-emblem.png"
            alt=""
            aria-hidden="true"
            width={1659}
            height={948}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-60 contrast-110 sm:object-center sm:opacity-85"
          />
        </picture>
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent z-30" />

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pt-48">
        {/* Hero Main Content */}
        <div className="max-w-4xl">
          <h1 id="hero-heading" className="font-display text-[clamp(2.4rem,5.5vw,5.5rem)] italic uppercase leading-none tracking-tight text-white sm:whitespace-nowrap">
            Lord of the <span className="text-brand">Archives.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Explore UK rap battle history in one place. Watch clashes, discover MCs, explore our own league tables and dive into the results, rivalries and bars behind the battles.
          </p>

          {/* Hero Quick Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#hero-archives"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black transition hover:bg-yellow-300 shadow-[0_0_25px_rgba(242,125,38,0.3)]"
            >
              Browse The Leagues <ArrowUpRight size={15} />
            </a>
            <Link
              href="/lota-league"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-brand/40 hover:bg-white/10"
            >
              LOTA League Table
            </Link>
            <Link
              href="/mcs"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs font-black uppercase tracking-wider text-white transition hover:border-brand/40 hover:bg-white/10"
            >
              MC Profiles
            </Link>
          </div>

          {/* Quick Stats Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-md">
              <span className="font-display text-lg italic text-brand">{archivedBattleCount.toLocaleString("en-GB")}</span>
              <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Battles Archived</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-md">
              <span className="font-display text-lg italic text-white">7</span>
              <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Battle Leagues</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur-md">
              <span className="font-display text-lg italic text-white">540+</span>
              <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">Cataloged MCs</span>
            </div>
          </div>
        </div>

        {/* League Archive Panels */}
        <div id="hero-archives" className="mt-20 scroll-mt-28 border-t border-white/10 pt-14 sm:mt-24 sm:pt-16">
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand">Browse The Leagues</p>
            <h2 className="font-display text-3xl uppercase italic text-white sm:text-5xl mt-1">
              The Seven Battle Archives
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-xl">
              <span className="text-brand font-semibold tabular-nums">{archivedBattleCount.toLocaleString("en-GB")}</span> authenticated matches cataloged across UK battle rap and grime history.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {archives.map((archive) => (
              <div
                key={archive.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/80 p-5 transition-all duration-300 hover:border-brand/40 hover:bg-zinc-900/60 hover:shadow-[0_8px_30px_rgba(242,125,38,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                      {archive.era}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      <strong className="text-white font-bold">{archive.count.toLocaleString("en-GB")}</strong> battles
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl uppercase italic text-white transition-colors group-hover:text-brand">
                    {archive.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400 line-clamp-2">
                    {archive.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-white/5 pt-4">
                  <Link
                    href={archive.href}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand/10 border border-brand/30 px-3 py-2 text-[11px] font-black uppercase tracking-wider text-brand transition hover:bg-brand hover:text-black"
                  >
                    Archive <ArrowUpRight size={13} />
                  </Link>
                  {archive.leagueHref && (
                    <Link
                      href={archive.leagueHref}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-black uppercase tracking-wider text-zinc-300 transition hover:border-brand/30 hover:bg-brand/10 hover:text-brand"
                      title="League Table"
                    >
                      <Trophy size={12} className="text-brand" /> Table
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent z-40" />
    </section>
  );
}
