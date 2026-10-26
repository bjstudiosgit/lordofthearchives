import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { prizefighterBattles } from "../data/prizefighter";
import { talkIsCheapSeries } from "../data/talkIsCheap";

const archives = [
  { name: "PenGame", href: "/pengame", count: pengameBattles.length },
  { name: "Gzone", href: "/gzone", count: gzoneBattles.length },
  { name: "Lord of the Mics", href: "/lord-of-the-mics", count: lordOfTheMicsBattles.length },
  { name: "Talk Is Cheap", href: "/talk-is-cheap", count: talkIsCheapSeries.reduce((total, series) => total + series.battles.length, 0) },
  { name: "Prizefighter", href: "/prizefighter", count: prizefighterBattles.length },
];

export default function IntroVideo() {
  const indexedBattleCount = archives.reduce((total, archive) => total + archive.count, 0);
  return (
    <section aria-labelledby="hero-heading" className="relative isolate w-full overflow-hidden border-b border-brand/20 bg-black">
      {/* Cinematic Overlays */}
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
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-50 contrast-110 sm:object-center sm:opacity-80"
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

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-8 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pt-48">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-brand sm:text-xs">
            <span aria-hidden="true" className="h-px w-10 bg-brand" /> The UK rap battle archive
          </p>
          <h1 id="hero-heading" className="font-display text-[clamp(3.5rem,6.5vw,6.5rem)] italic uppercase leading-[0.98] tracking-tight text-white">
            <span className="block">The battles.</span>
            <span className="block">The bars.</span>
            <span className="block text-brand">The history.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Watch the clashes. Follow the MCs. Explore the results, rivalries and bars that make UK battle rap worth remembering.
          </p>
          <p className="mt-5 text-sm text-zinc-400">
            <span className="font-medium tabular-nums">{indexedBattleCount.toLocaleString("en-GB")}</span>{" "}battles indexed
          </p>
        </div>

        <nav id="hero-archives" aria-label="Choose a battle archive" className="mt-14 grid scroll-mt-28 grid-cols-2 border-t border-white/15 sm:mt-16 sm:grid-cols-3 lg:mt-20 lg:grid-cols-5">
          {archives.map((archive) => (
            <Link key={archive.href} href={archive.href} className="group min-w-0 border-b border-white/10 py-5 pr-4 transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-brand lg:border-b-0 lg:py-6">
              <span className="mb-3 block font-mono text-xs text-brand">{archive.count.toLocaleString("en-GB")} battles</span>
              <span className="flex items-center gap-2 font-display text-lg uppercase italic text-white transition-colors group-hover:text-brand sm:text-xl">
                {archive.name} <ArrowUpRight size={16} aria-hidden="true" className="shrink-0 text-zinc-500 transition-colors group-hover:text-brand" />
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent z-40" />
    </section>
  );
}
