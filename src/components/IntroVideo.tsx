import Link from "next/link";
import { ArrowUpRight, Trophy, MapPin, Compass, Flame } from "lucide-react";
import { pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { prizefighterBattles } from "../data/prizefighter";
import { talkIsCheapSeries } from "../data/talkIsCheap";
import { clashMoneyBattles } from "../data/clashMoney";
import { kingOfTheRonaldsBattles } from "../data/kingOfTheRonalds";

interface RoadStop {
  step: string;
  mile: string;
  era: string;
  name: string;
  tagline: string;
  location: string;
  story: string;
  landmarkBattles: string;
  count: number;
  href: string;
  leagueHref: string | null;
  status: string;
}

const roadStops: RoadStop[] = [
  {
    step: "01",
    mile: "MILE 01",
    era: "2004–15",
    name: "Lord of the Mics",
    tagline: "Jammer's Basement & The Camcorder DVD Era",
    location: "Leytonstone, East London (E17)",
    story:
      "Where it all began. In 2004, Boy Better Know producer Jammer crammed East London's deadliest pirate radio MCs into his parents' basement with a single camcorder. Pressed onto physical bootleg DVDs and traded through barbershops and car boots, LOTM birthed modern UK clash culture.",
    landmarkBattles: "Wiley vs Kano • Skepta vs Devilman • Ghetts vs Napper",
    count: lordOfTheMicsBattles.length,
    href: "/lord-of-the-mics",
    leagueHref: null,
    status: "The Genesis",
  },
  {
    step: "02",
    mile: "MILE 02",
    era: "2011–24",
    name: "Prizefighter",
    tagline: "140 BPM Tournament Knockouts & Belts",
    location: "London Boxing Rings & Live Venues",
    story:
      "Bridging raw grime energy with sudden-death tournament boxing. MCs entered 8-man knockout brackets, clashing at 140 BPM for cash purses, title belts, and verified divisional points tables across multiple tournament generations.",
    landmarkBattles: "Knockout Series 1 & 2 • Grime Bracket Title Deciders",
    count: prizefighterBattles.length,
    href: "/prizefighter",
    leagueHref: "/prizefighter/league",
    status: "Knockout Circuit",
  },
  {
    step: "03",
    mile: "MILE 03",
    era: "2014–20",
    name: "King of the Ronalds",
    tagline: "Rowdy Pub Basements & Dark British Comedy",
    location: "The Old Red Lion Pub, Islington, London",
    story:
      "Uncensored, beer-soaked, and strictly for the underground. Bowski and Micky Worthless crammed hundreds of rowdy spectators into London pub basements. KOTR became a cult British institution defined by brutal personal disrespect, pitch-black humour, and iconic characters.",
    landmarkBattles: "Bowski vs Micky Worthless • Hulk vs Pedro • Tony D vs Oshea",
    count: kingOfTheRonaldsBattles.length,
    href: "/king-of-the-ronalds",
    leagueHref: null,
    status: "Cult Underground",
  },
  {
    step: "04",
    mile: "MILE 04",
    era: "2015–16",
    name: "Clash Money",
    tagline: "The M1 Corridor, 2v2 Bouts & The Trials",
    location: "Leeds, Nottingham & Manchester (M1 North)",
    story:
      "Breaking the London monopoly. Clash Money took battle rap up the M1 motorway, staging historic 2v2 wars and 'The Trials' development proving grounds that launched northern heavyweights like Blizzard, Dialect, and Bru-C onto the national stage.",
    landmarkBattles: "Blizzard vs Dialect • Dialect & Kaotik 2v2 • The Trials Invitational",
    count: clashMoneyBattles.length,
    href: "/clash-money",
    leagueHref: null,
    status: "North vs UK",
  },
  {
    step: "05",
    mile: "MILE 05",
    era: "2020–26",
    name: "PenGame",
    tagline: "Judged Divisions, Title Matches & Modern Benchmark",
    location: "Headline Stages & Central Studios, UK",
    story:
      "The definitive modern powerhouse of UK battle rap. Over 450 battles cataloged with multi-tier divisional tables, championship title fights, and a respected judging desk featuring Lippy Lickshot, Joe Black, and LV General.",
    landmarkBattles: "Premier Division Title Clashes • 450+ Judged Matches",
    count: pengameBattles.length,
    href: "/pengame",
    leagueHref: "/league",
    status: "The Modern Flagship",
  },
  {
    step: "06",
    mile: "MILE 06",
    era: "Season 1",
    name: "Gzone",
    tagline: "Heavyweight 140 BPM Grime Reload Aggression",
    location: "Underground Grime Circuit, UK",
    story:
      "A ferocious return to pure grime energy. Heavyweight contenders clashing head-to-head at 140 BPM over classic instrumental reload dubs, backed by official season fixtures and league standings.",
    landmarkBattles: "Deeno, Tapped24, Roman, Marni Gramz & Ryno Season Fixtures",
    count: gzoneBattles.length,
    href: "/gzone",
    leagueHref: "/gzone/league",
    status: "140 BPM Grime Reload",
  },
  {
    step: "07",
    mile: "MILE 07",
    era: "2024–26",
    name: "Talk Is Cheap",
    tagline: "Rapid Releases & The Next Generation Wave",
    location: "New Wave Proving Grounds, UK",
    story:
      "The newest chapter in UK clash history. High-velocity releases, emerging underground spitters, raw freestyle punchlines, and the new generation carrying British battle culture into the next decade.",
    landmarkBattles: "Series 1 to 5 Next-Generation Head-to-Heads",
    count: talkIsCheapSeries.reduce((total, series) => total + series.battles.length, 0),
    href: "/talk-is-cheap",
    leagueHref: null,
    status: "The Next Era",
  },
];

export default function IntroVideo() {
  const archivedBattleCount = roadStops.reduce((total, era) => total + era.count, 0);

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

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-24 pt-36 sm:px-6 sm:pt-44 lg:px-8 lg:pt-48">
        {/* Hero Main Content (Clean Editorial Typography, No Bubbles) */}
        <div className="max-w-4xl">
          <h1 id="hero-heading" className="font-display text-[clamp(2.5rem,6vw,5.75rem)] italic uppercase leading-[0.95] tracking-tight text-white sm:whitespace-nowrap">
            Lord of the <span className="text-brand">Archives</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            Two decades of UK clash culture cataloged in one definitive vault. Watch legendary battles, track <span className="text-white font-semibold">540+ MC records</span>, and explore verified league standings across <span className="text-brand font-semibold">7 historic archives</span>.
          </p>

          {/* Clean Architectural Stats (No Bubbles) */}
          <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-white/10 pt-6">
            <div>
              <span className="font-display text-2xl sm:text-3xl italic text-brand leading-none">
                {archivedBattleCount.toLocaleString("en-GB")}
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                Battles Archived
              </span>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="font-display text-2xl sm:text-3xl italic text-white leading-none">
                7
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                Historic Eras
              </span>
            </div>
            <div className="h-8 w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="font-display text-2xl sm:text-3xl italic text-white leading-none">
                540+
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">
                Cataloged Artists
              </span>
            </div>
          </div>
        </div>

        {/* The UK Clash Road Map: "How It All Started" */}
        <div id="hero-archives" className="mt-20 scroll-mt-28 border-t border-white/10 pt-14 sm:mt-24 sm:pt-16">
          {/* Section Header */}
          <div className="mb-10 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand">
                The Chronological Journey • 2004–2026
              </span>
            </div>
            <h2 className="font-display text-3xl uppercase italic text-white sm:text-5xl lg:text-6xl mt-2 tracking-tight">
              The Road Map: How It All Started
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Trace the 20-year route of UK battle rap from Jammer’s Leytonstone basement in 2004 to today’s judged title leagues. Follow the highway below through each milestone era.
            </p>
          </div>

          {/* Highway Quick-Jump Route Bar (Zero Scrollbars) */}
          <div className="mb-14 overflow-x-auto pb-1 scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex items-center gap-2 min-w-max border-y border-white/10 bg-zinc-950/80 py-3 px-4 rounded-xl">
              <div className="flex items-center gap-1.5 pr-2 font-mono text-[10px] font-black uppercase tracking-wider text-zinc-400">
                <Compass size={13} className="text-brand" /> Route:
              </div>
              {roadStops.map((stop, index) => (
                <div key={stop.name} className="flex items-center gap-2">
                  <a
                    href={`#stop-${stop.step}`}
                    className="group flex items-center gap-2 rounded-lg border border-white/5 bg-zinc-900/80 px-2.5 py-1 transition hover:border-brand/40 hover:bg-zinc-800"
                  >
                    <span className="font-mono text-[10px] font-bold text-brand">
                      {stop.step}
                    </span>
                    <span className="font-display text-xs uppercase italic text-zinc-200 group-hover:text-white">
                      {stop.name}
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500">
                      ({stop.era})
                    </span>
                  </a>
                  {index < roadStops.length - 1 && (
                    <span className="text-[11px] text-zinc-700">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* THE VISUAL ROAD HIGHWAY */}
          <div className="relative">
            {/* The Central Asphalt Highway Track (Mobile: Left-aligned; Desktop: Centered) */}
            <div className="absolute left-5 sm:left-6 lg:left-1/2 top-4 bottom-4 -translate-x-1/2 w-8 sm:w-10 lg:w-12 flex flex-col items-center pointer-events-none z-10">
              {/* Asphalt Road Bed */}
              <div className="relative w-full h-full bg-zinc-950/95 border-x border-white/10 shadow-[inset_0_0_15px_rgba(0,0,0,0.9)] flex items-center justify-center">
                {/* Glowing Golden Dashed Center Line */}
                <div className="absolute inset-y-0 w-0.5 border-r-2 border-dashed border-brand/40 shadow-[0_0_8px_rgba(255,215,0,0.3)]" />
              </div>
            </div>

            {/* Starting Line Flag / Origin Marker */}
            <div className="relative z-20 mb-12 pl-14 sm:pl-16 lg:pl-0 lg:flex lg:justify-center">
              <div className="inline-flex items-center gap-3 rounded-xl border border-brand/40 bg-zinc-950 px-4 py-2 shadow-[0_0_25px_rgba(255,215,0,0.15)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="font-mono text-[11px] font-black uppercase tracking-widest text-brand">
                  ORIGIN • 2004 • JAMMER'S BASEMENT, E17
                </span>
              </div>
            </div>

            {/* The 7 Road Stops (Alternating on Desktop) */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-24">
              {roadStops.map((stop, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={stop.name}
                    id={`stop-${stop.step}`}
                    className="relative scroll-mt-36"
                  >
                    {/* Waypoint Milestone Node on the Highway Track */}
                    <div className="absolute left-5 sm:left-6 lg:left-1/2 top-8 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
                      <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-brand bg-zinc-950 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                        <span className="font-display text-sm font-bold italic text-brand">
                          {stop.step}
                        </span>
                        <div className="absolute -inset-1 rounded-full border border-brand/30 animate-ping pointer-events-none opacity-30" />
                      </div>
                    </div>

                    {/* Road Stop Milestone Card */}
                    <div
                      className={`relative pl-14 sm:pl-16 lg:pl-0 lg:w-1/2 ${
                        isEven
                          ? "lg:ml-auto lg:pl-14"
                          : "lg:mr-auto lg:pr-14"
                      }`}
                    >
                      <div className="group relative rounded-2xl border border-white/10 bg-zinc-950/90 p-6 sm:p-7 transition-all duration-300 hover:border-brand/40 hover:bg-zinc-900/80 hover:shadow-[0_12px_40px_rgba(255,215,0,0.08)] overflow-hidden">
                        {/* Background Step Watermark */}
                        <div className="absolute right-4 top-2 font-display text-7xl sm:text-8xl italic text-white/[0.03] select-none pointer-events-none group-hover:text-brand/[0.07] transition-colors">
                          {stop.step}
                        </div>

                        {/* Highway Milestone Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-brand/10 border border-brand/30 px-2 py-0.5 font-mono text-[10px] font-black text-brand tracking-wider">
                              {stop.mile}
                            </span>
                            <span className="font-mono text-xs font-semibold text-zinc-400">
                              {stop.era}
                            </span>
                          </div>
                          <span className="font-mono text-xs text-zinc-400">
                            <strong className="text-white font-bold">{stop.count.toLocaleString("en-GB")}</strong> battles
                          </span>
                        </div>

                        {/* Location Tag */}
                        <div className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400">
                          <MapPin size={13} className="text-brand shrink-0" />
                          <span className="font-mono text-[11px] text-zinc-300 truncate">
                            {stop.location}
                          </span>
                        </div>

                        {/* Era Title */}
                        <h3 className="mt-2 font-display text-2xl sm:text-3xl uppercase italic text-white transition-colors group-hover:text-brand">
                          {stop.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand">
                          {stop.tagline}
                        </p>

                        {/* Narrative: How It Started & Cultural Impact */}
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
                          {stop.story}
                        </p>

                        {/* Landmark Historic Battles */}
                        <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3">
                          <div className="flex items-center gap-1.5 font-mono text-[10px] font-black uppercase tracking-wider text-brand">
                            <Flame size={12} className="text-brand shrink-0" /> Classic Clashes:
                          </div>
                          <p className="mt-1 font-mono text-[11px] text-zinc-300 leading-normal">
                            {stop.landmarkBattles}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
                          <Link
                            href={stop.href}
                            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black font-display italic transition hover:bg-white hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                          >
                            Explore {stop.name} <ArrowUpRight size={14} />
                          </Link>
                          {stop.leagueHref && (
                            <Link
                              href={stop.leagueHref}
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-200 transition hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
                              title="League Table Standings"
                            >
                              <Trophy size={13} className="text-brand" /> Table
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Destination Road Marker */}
            <div className="relative z-20 mt-16 pl-14 sm:pl-16 lg:pl-0 lg:flex lg:justify-center">
              <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-950 px-4 py-2.5 shadow-[0_0_25px_rgba(0,0,0,0.8)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand animate-ping" />
                <span className="font-mono text-[11px] font-black uppercase tracking-widest text-zinc-300">
                  DESTINATION • 2026 & BEYOND • THE NEW WAVE CONTINUES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent z-40" />
    </section>
  );
}
