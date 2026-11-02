import Link from "next/link";
import { ArrowUpRight, Trophy, MapPin } from "lucide-react";
import { pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { prizefighterBattles } from "../data/prizefighter";
import { talkIsCheapSeries } from "../data/talkIsCheap";
import { clashMoneyBattles } from "../data/clashMoney";
import { kingOfTheRonaldsBattles } from "../data/kingOfTheRonalds";

interface MemoryMilestone {
  year: string;
  season: string;
  battles: string;
  note: string;
}

interface RoadStop {
  step: string;
  year: string;
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
  memoryMilestones: MemoryMilestone[];
}

const roadStops: RoadStop[] = [
  {
    step: "01",
    year: "2004",
    era: "2004–15",
    name: "Lord of the Mics",
    tagline: "Jammer's Basement & The Camcorder DVD Era",
    location: "Leytonstone, East London E17",
    story:
      "Where it all began. In 2004, Boy Better Know producer Jammer crammed East London's deadliest pirate radio MCs into his parents' basement with a single camcorder. Pressed onto physical bootleg DVDs and traded through barbershops and car boots, LOTM birthed modern UK clash culture.",
    landmarkBattles: "Wiley vs Kano • Skepta vs Devilman • Ghetts vs Napper",
    count: lordOfTheMicsBattles.length,
    href: "/lord-of-the-mics",
    leagueHref: null,
    status: "The Genesis",
    memoryMilestones: [
      {
        year: "2004",
        season: "LOTM 1",
        battles: "Wiley vs Kano • Ghetto vs Napper • Bruza vs Crazy Titch",
        note: "Recorded in Jammer's East London basement. Hand-to-hand bootleg DVD release.",
      },
      {
        year: "2006",
        season: "LOTM 2",
        battles: "Skepta vs Devilman • Bashy vs Demon • Big Narstie vs Scorcher",
        note: "The nationwide DVD phenomenon. Skepta vs Devilman becomes an eternal cultural anthem.",
      },
      {
        year: "2011",
        season: "LOTM 3",
        battles: "Kozzie vs Sox • Discarda vs Jaykae • Marger vs LayZ",
        note: "The digital return of LOTM, launching a new generation of 140 BPM clashers.",
      },
      {
        year: "2014",
        season: "LOTM 6",
        battles: "Big H vs P Money • Dialect vs Nat Powers",
        note: "Live headline clash event at Islington Academy with massive crowd energy.",
      },
      {
        year: "2015",
        season: "LOTM 7",
        battles: "Jammer vs Wiley • Lady Lykez vs Sox",
        note: "10-year anniversary clash between founding fathers of the grime scene.",
      },
    ],
  },
  {
    step: "02",
    year: "2011",
    era: "2011–24",
    name: "Prizefighter",
    tagline: "DJ Mikee • 8-Man Tournament Knockouts & Cash Belts",
    location: "Birmingham & The Midlands (Brum)",
    story:
      "Pioneered by Birmingham producer DJ Mikee to bring vital opportunity and a national spotlight to the Brum grime scene. Prizefighter pitted Midlands heavyweights against London invaders in sudden-death 8-man knockout brackets for cash purses and championship belts.",
    landmarkBattles: "Birmingham vs London 8-Man Brackets • Devilman, Sox & Jaykae Showcases",
    count: prizefighterBattles.length,
    href: "/prizefighter",
    leagueHref: "/prizefighter/league",
    status: "Knockout Circuit",
    memoryMilestones: [
      {
        year: "2011",
        season: "Inaugural Cup",
        battles: "8-Man Grime Knockout Bracket",
        note: "DJ Mikee launches the Midlands tournament circuit with cash prize belts.",
      },
      {
        year: "2014",
        season: "Prizefighter 5",
        battles: "F.O.S vs Iamone • Big Hypes vs Nitro Clack",
        note: "Silk City Radio recording featuring high-velocity bracket rounds.",
      },
      {
        year: "2015",
        season: "Prizefighter 8",
        battles: "Firedon vs Jay3 • Psolja vs RdoubleG",
        note: "Radio audio tournament series with verified judging scorecards.",
      },
      {
        year: "2024",
        season: "Ozone Circuit",
        battles: "Modern 140 BPM Tournament Return",
        note: "Revival of the classic prizefighter tournament format with live points table.",
      },
    ],
  },
  {
    step: "03",
    year: "2014",
    era: "2014–20",
    name: "King of the Ronalds",
    tagline: "Rowdy Pub Basements & Dark British Comedy",
    location: "The Old Red Lion Pub, Islington N1",
    story:
      "Uncensored, beer-soaked, and strictly for the underground. Bowski and Micky Worthless crammed hundreds of rowdy spectators into London pub basements. KOTR became a cult British institution defined by brutal personal disrespect, pitch-black humour, and iconic characters.",
    landmarkBattles: "Bowski vs Micky Worthless • Hulk vs Pedro • Tony D vs Oshea",
    count: kingOfTheRonaldsBattles.length,
    href: "/king-of-the-ronalds",
    leagueHref: null,
    status: "Cult Underground",
    memoryMilestones: [
      {
        year: "2014",
        season: "Old Red Lion Inception",
        battles: "Bowski vs Micky Worthless • Pedro vs Bowski",
        note: "The legendary London pub cellar inception. Uncensored disrespect and cult humor.",
      },
      {
        year: "2015",
        season: "Hulkmania & Punk In Drublic",
        battles: "Hulk vs Pedro • Scoop vs Bowski",
        note: "Explosion of the KOTR underground circuit with legendary cult characters.",
      },
      {
        year: "2017",
        season: "Check Point & Title Bouts",
        battles: "Tony D vs Oshea • Big J vs Hulk",
        note: "Don't Flop and national champions stepping into the notorious KOTR pit.",
      },
      {
        year: "2020",
        season: "Specialists in Failure",
        battles: "The Final Chapter Showcase",
        note: "The closing era sealing King of the Ronalds' permanent legacy in battle culture.",
      },
    ],
  },
  {
    step: "04",
    year: "2015",
    era: "2015–16",
    name: "Clash Money",
    tagline: "The M1 Corridor, 2v2 Bouts & The Trials",
    location: "M1 North • Leeds, Nottingham & Manchester",
    story:
      "Breaking the London monopoly. Clash Money took battle rap up the M1 motorway, staging historic 2v2 wars and 'The Trials' development proving grounds that launched northern heavyweights like Blizzard, Dialect, and Bru-C onto the national stage.",
    landmarkBattles: "Blizzard vs Dialect • Dialect & Kaotik 2v2 • The Trials Invitational",
    count: clashMoneyBattles.length,
    href: "/clash-money",
    leagueHref: null,
    status: "North vs UK",
    memoryMilestones: [
      {
        year: "2015",
        season: "The Trials 1 & 2",
        battles: "Blizzard vs Dialect • Dialect vs Raptor",
        note: "Proving ground tournament giving northern lyricists national spotlight.",
      },
      {
        year: "2015",
        season: "North vs South",
        battles: "M1 Motorway Clash Invitational",
        note: "Bridging the regional divide with explosive cross-country rivalries.",
      },
      {
        year: "2016",
        season: "2v2 Tag Teams",
        battles: "Dialect & Kaotik 2v2s • Bru-C Showcases",
        note: "Pioneered fast-paced tag-team grime bouts with rapid fire reloads.",
      },
    ],
  },
  {
    step: "05",
    year: "2019",
    era: "2019–26",
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
    memoryMilestones: [
      {
        year: "2019–21",
        season: "Series 1 & 2",
        battles: "Underground Debut • Early Head-to-Heads",
        note: "Rapid release tempo introducing London's next wave of freestyle talent.",
      },
      {
        year: "2022–24",
        season: "Series 3 & 4",
        battles: "The Underground Proving Ground",
        note: "Viral short-form format clashes keeping raw British battle rap alive.",
      },
      {
        year: "2025–26",
        season: "Series 5",
        battles: "The New Wave Frontier",
        note: "Next generation MCs actively carrying the clash culture forward.",
      },
    ],
  },
  {
    step: "06",
    year: "2020",
    era: "2020–26",
    name: "PenGame",
    tagline: "Judged Divisions, Title Matches & Modern Benchmark",
    location: "Central Studios & Main Stages, UK",
    story:
      "The definitive modern powerhouse of UK battle rap. Over 450 battles cataloged with multi-tier divisional tables, championship title fights, and a respected judging desk featuring Lippy Lickshot, Joe Black, and LV General.",
    landmarkBattles: "Premier Division Title Clashes • 450+ Judged Matches",
    count: pengameBattles.length,
    href: "/pengame",
    leagueHref: "/league",
    status: "The Modern Flagship",
    memoryMilestones: [
      {
        year: "2020–22",
        season: "Seasons 1 & 2",
        battles: "Launch Battles • First Judged Cards",
        note: "Judging panel established with Lippy Lickshot, Joe Black, and LV General.",
      },
      {
        year: "2023",
        season: "Premier Division",
        battles: "30+ Fixtures • Official Title Belts",
        note: "Full league structure with promotion, relegation, and points table.",
      },
      {
        year: "2024–25",
        season: "Mega-Cards",
        battles: "1M+ View Clashes • Boxpark & Central Studios",
        note: "Record-breaking viewership and mainstream cultural penetration.",
      },
      {
        year: "2026",
        season: "Championship Race",
        battles: "Current Title Fights & Live Divisional Standings",
        note: "Live ongoing season tracked in real-time on Lord of the Archives.",
      },
    ],
  },
  {
    step: "07",
    year: "2024",
    era: "Season 1 (2024)",
    name: "Gzone",
    tagline: "The Squared Circle • Pure 140 BPM Reloads",
    location: "Peacock Gym, Canning Town, East London",
    story:
      "Real grime clash culture inside the boxing ring at Peacock Gym, Canning Town. Heavyweights trading vicious 8-bar rounds over classic instrumental reload dubs with live referee scoring and pure East London aggression.",
    landmarkBattles: "Deeno vs Tapped24 • Roman vs Marni Gramz • Ryno vs Deeno",
    count: gzoneBattles.length,
    href: "/gzone",
    leagueHref: "/gzone/league",
    status: "140 BPM Grime Reload",
    memoryMilestones: [
      {
        year: "2024",
        season: "Season 1 Launch",
        battles: "Deeno vs Tapped24 • Roman vs Marni Gramz",
        note: "Pure 140 BPM grime aggression over classic grime instrumental dubs.",
      },
      {
        year: "2024",
        season: "Mid-Season Derbies",
        battles: "Ryno vs Deeno • Tapped24 vs Roman",
        note: "Heavyweight clashes with high-stakes reload judge scoring.",
      },
      {
        year: "2024",
        season: "Final Table",
        battles: "Season 1 Title Race",
        note: "Verified season points determining the inaugural Gzone champion.",
      },
    ],
  },
];


function MilestoneCard({ stop }: { stop: RoadStop }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-zinc-950/90 p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:border-brand/40 hover:bg-zinc-900/80 hover:shadow-[0_15px_50px_rgba(255,215,0,0.08)] overflow-hidden">
      {/* Background Year Watermark */}
      <div className="absolute right-4 top-2 font-display text-7xl sm:text-8xl italic text-white/[0.03] select-none pointer-events-none group-hover:text-brand/[0.06] transition-colors">
        {stop.year}
      </div>

      {/* Milestone Header (Clean Typography, Zero Bubbles) */}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg sm:text-xl font-bold italic tracking-tight text-white">
            {stop.year}
          </span>
          <span className="text-zinc-600 font-mono text-xs">•</span>
          <div className="flex items-center gap-1.5 text-zinc-300 font-mono text-xs sm:text-sm">
            <MapPin size={13} className="text-zinc-400 shrink-0" />
            <span className="font-semibold text-zinc-200">
              {stop.location}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
          <span className="font-semibold text-zinc-300">{stop.era}</span>
          <span className="text-zinc-700">•</span>
          <span>
            <strong className="text-white font-bold">{stop.count.toLocaleString("en-GB")}</strong> battles
          </span>
        </div>
      </div>

      {/* Platform History & Details */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Link href={stop.href} className="group/title inline-flex items-center gap-2">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase italic text-white tracking-tight transition-colors group-hover/title:text-brand">
              {stop.name}
            </h3>
            <ArrowUpRight size={20} className="text-zinc-600 transition-colors group-hover/title:text-brand" />
          </Link>
          {stop.leagueHref && (
            <Link
              href={stop.leagueHref}
              aria-label={`${stop.name} League Table & Standings`}
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-brand hover:underline transition-colors"
            >
              <Trophy size={13} /> {stop.name === "PenGame" ? "PenGame Table" : stop.name === "Gzone" ? "Gzone Table" : "Points Table"} &rarr;
            </Link>
          )}
        </div>
        <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand mt-1">
          {stop.tagline}
        </p>

        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-zinc-300 font-sans">
          {stop.story}
        </p>

        {/* Classic Clashes (Pure Text) */}
        <p className="mt-3.5 text-xs leading-relaxed text-zinc-300 font-sans">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand mr-1.5">
            Classic Clashes:
          </span>
          <span className="text-zinc-200 font-medium">
            {stop.landmarkBattles}
          </span>
        </p>

        {/* Clash Memory Timeline */}
        <div className="mt-5 pt-4 border-t border-white/10 space-y-3">
          {stop.memoryMilestones.map((m) => (
            <div
              key={m.season}
              className="relative pl-5 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-white/10 last:before:hidden group/item"
            >
              <div className="absolute -left-[3px] top-1.5 h-2 w-2 rounded-full border border-brand bg-zinc-950 transition-colors group-hover/item:bg-brand" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-black text-brand">
                  {m.year}
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="font-display text-sm uppercase italic text-white tracking-wide">
                  {m.season}
                </span>
              </div>
              <p className="mt-0.5 font-mono text-xs font-semibold text-zinc-200 leading-snug">
                {m.battles}
              </p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IntroVideo() {
  const archivedBattleCount = roadStops.reduce((total, era) => total + era.count, 0);

  return (
    <>
      {/* 1. STANDALONE HERO SECTION (FULL BREATHING SPACE) */}
      <section
        aria-labelledby="hero-heading"
        className="relative isolate w-full overflow-hidden border-b border-brand/20 bg-black min-h-[85vh] sm:min-h-[90vh] lg:min-h-[940px] flex flex-col justify-center"
      >
        {/* Background Graphic Watermark (Spans Hero Cleanly) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
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
              className="absolute inset-0 h-full w-full object-cover object-[75%_center] opacity-85 contrast-110 sm:object-right sm:opacity-90"
            />
          </picture>
          <div className="absolute inset-0 bg-black/15 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

          {/* Scanline Effect */}
          <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent z-30" />

        {/* Hero Header (Spacious, Left-Aligned, Clear of the Right Emblem) */}
        <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pt-40 pb-44 sm:px-6 sm:pt-48 sm:pb-52 lg:px-8 lg:pt-56 lg:pb-60">
          <div className="max-w-3xl">
            <h1 id="hero-heading" className="font-display text-[clamp(2.75rem,6vw,5.75rem)] italic uppercase leading-[0.92] tracking-tight text-white sm:whitespace-nowrap">
              Lord of the <span className="text-brand">Archives</span>
              <span className="sr-only">: UK Rap Battle Archive &amp; Clash Statistics</span>
            </h1>

            <p className="mt-8 max-w-2xl lg:max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9 font-sans">
              The definitive vault of UK clash culture. From pirate radio basements and physical bootleg DVDs to judged championship rings, trace two decades of British battle rap across <strong className="text-white font-semibold">{archivedBattleCount.toLocaleString("en-GB")} indexed battles</strong>, <Link href="/mcs" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">540+ MC combat dossiers</Link>, and <Link href="/league" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">unified league standings</Link> spanning <a href="#hero-archives" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">7 historic archives</a>.
            </p>
          </div>
        </div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.5)] pointer-events-none z-20" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent z-30" />
      </section>

      {/* 2. DEDICATED SECTION: THE UK BATTLE RAP HIGHWAY (CHRONOLOGICAL ROAD MAP) */}
      <section
        id="hero-archives"
        aria-label="UK Battle Rap Timeline"
        className="relative w-full bg-black py-16 sm:py-24 lg:py-28 border-b border-brand/20 scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* 140 BPM Origin Story Header directly above the Road Map (Spanning Across the Page) */}
          <div className="mb-16 sm:mb-20 lg:mb-28 w-full max-w-5xl lg:max-w-6xl pl-2 sm:pl-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase italic tracking-tight text-white">
              The Seven Battle Archives <span className="text-zinc-400 font-sans text-xl sm:text-2xl font-normal block sm:inline sm:ml-2 tracking-normal">• 140 BPM Genesis to Modern Eras</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300 font-sans">
              When British street music broke away from UK Garage dancefloors in the early 2000s, MCs locked the tempo to an uncompromising <strong className="text-white font-semibold">140 BPM</strong>. In his Leytonstone basement (E17), Jammer captured that ferocious pirate radio energy on a single camcorder for <Link href="/lord-of-the-mics" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">Lord of the Mics</Link> — sparking two decades of clash culture cataloged here across <strong className="text-white font-semibold">{archivedBattleCount.toLocaleString("en-GB")} indexed battles</strong>, <a href="#hero-archives" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">7 historic eras</a>, and <Link href="/mcs" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">540+ artists</Link>.
            </p>
          </div>

          <div className="relative">
            {/* DESKTOP ONLY: Unified Single-Path Serpentine Highway (Zero Seams, Zero Gaps, 100% Continuous) */}
            <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-64 xl:w-72 pointer-events-none z-10">
              <svg className="w-full h-full" viewBox="0 0 200 4200" preserveAspectRatio="none" fill="none">
                {/* 1. Road Outer Kerb Edge Border */}
                <path
                  d="M 100 0 C 40 150, 40 450, 100 600 C 160 750, 160 1050, 100 1200 C 40 1350, 40 1650, 100 1800 C 160 1950, 160 2250, 100 2400 C 40 2550, 40 2850, 100 3000 C 160 3150, 160 3450, 100 3600 C 40 3750, 40 4050, 100 4200"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="44"
                  strokeLinecap="round"
                />
                {/* 2. UK Double Yellow Kerb Base */}
                <path
                  d="M 100 0 C 40 150, 40 450, 100 600 C 160 750, 160 1050, 100 1200 C 40 1350, 40 1650, 100 1800 C 160 1950, 160 2250, 100 2400 C 40 2550, 40 2850, 100 3000 C 160 3150, 160 3450, 100 3600 C 40 3750, 40 4050, 100 4200"
                  stroke="#f59e0b"
                  strokeWidth="40"
                  strokeLinecap="round"
                />
                {/* 3. Dark Asphalt Road Surface */}
                <path
                  d="M 100 0 C 40 150, 40 450, 100 600 C 160 750, 160 1050, 100 1200 C 40 1350, 40 1650, 100 1800 C 160 1950, 160 2250, 100 2400 C 40 2550, 40 2850, 100 3000 C 160 3150, 160 3450, 100 3600 C 40 3750, 40 4050, 100 4200"
                  stroke="#0d0d12"
                  strokeWidth="34"
                  strokeLinecap="round"
                />
                {/* 4. Center Broken Amber Lane Divider */}
                <path
                  d="M 100 0 C 40 150, 40 450, 100 600 C 160 750, 160 1050, 100 1200 C 40 1350, 40 1650, 100 1800 C 160 1950, 160 2250, 100 2400 C 40 2550, 40 2850, 100 3000 C 160 3150, 160 3450, 100 3600 C 40 3750, 40 4050, 100 4200"
                  stroke="#fbbf24"
                  strokeWidth="2.2"
                  strokeDasharray="10 12"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* The 7 Alternating Milestone Stations */}
            <div className="relative z-20">
              {roadStops.map((stop, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={stop.name}
                    id={`stop-${stop.step}`}
                    className="relative py-8 lg:py-16 scroll-mt-36"
                  >
                    {/* TWO-COLUMN ALTERNATING GRID (CARDS ON EACH SIDE OF WAVY ROAD, CLEAN FULL WIDTH ON MOBILE) */}
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 xl:gap-36 items-center">
                      {/* Column 1 (Left Side) */}
                      {isEven ? (
                        <div className="w-full lg:pl-0 lg:pr-6">
                          <MilestoneCard stop={stop} />
                        </div>
                      ) : (
                        <div className="hidden lg:block" aria-hidden="true" />
                      )}

                      {/* Column 2 (Right Side) */}
                      {!isEven ? (
                        <div className="w-full lg:pl-6 lg:pr-0">
                          <MilestoneCard stop={stop} />
                        </div>
                      ) : (
                        <div className="hidden lg:block" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
