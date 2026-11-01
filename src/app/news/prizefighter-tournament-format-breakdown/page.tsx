import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Swords, Zap, Timer, Trophy, ShieldCheck } from "lucide-react";

const articleTitle = "Prizefighter Breakdown: How Tournament Brackets & 140 BPM Sudden Death Changed UK Clashing";

export const metadata: Metadata = {
  title: `${articleTitle} | Lord of the Archives`,
  description:
    "An analytical breakdown of Ozone Prizefighter's high-stakes knockout tournament model, examining how 8-bar rounds, sudden-death brackets, and 140 BPM grime tempos revolutionized UK battle rap.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/news/prizefighter-tournament-format-breakdown",
  },
  openGraph: {
    title: articleTitle,
    description:
      "Why the Prizefighter tournament bracket eliminated filler bars, accelerated breakout careers, and became the most intense pressure cooker in modern grime clashing.",
    type: "article",
    publishedTime: "2026-11-01T00:00:00.000Z",
  },
};

const formatPillars = [
  {
    title: "1. The Single-Elimination Knockout Bracket",
    icon: Swords,
    summary:
      "Unlike conventional battle leagues where MCs prepare for weeks for a single isolated opponent, Prizefighter demands endurance. Eight MCs enter the studio; only one leaves champion. Competitors must defeat three separate opponents in a single session—forcing them to manage notebook material, energy reserves, and psychological focus across Opening Rounds, Semi-Finals, and the Grand Final.",
  },
  {
    title: "2. The 140 BPM Grime Gauntlet",
    icon: Zap,
    summary:
      "While a capella or slow hip-hop battle rap allows pauses for breath and dramatic pauses, Prizefighter is locked into ferocious 140 BPM UK grime instrumentals. An MC cannot hide behind theatrical silence; if you miss the beat drop, stumble your cadence, or lose the instrumental pocket, the judges and room instantly penalize you.",
  },
  {
    title: "3. Compressed Bar Restraints: The Death of Filler",
    icon: Timer,
    summary:
      "Prizefighter rounds typically restrict MCs to strict 8-bar or 16-bar bursts. This tight ceiling completely eliminates long, meandering set-ups. Every couplet must land as a direct, high-impact punchline. The result is rapid-fire haymakers per minute that translate seamlessly into viral social clips.",
  },
  {
    title: "4. The Royal Rumble Wildcard",
    icon: Trophy,
    summary:
      "At the conclusion of tournament events, eliminated competitors and finalists re-enter the studio for the signature 'Rumble'. Multiple MCs pass the mic in rapid rotation over shifting grime beats, testing pure freestyle wit, crowd control, and stamina in an electric free-for-all.",
  },
];

export default function PrizefighterFormatBreakdownPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description:
      "An analytical deep-dive into the mechanics of Ozone Prizefighter's tournament system, exploring its 140 BPM speed, bar constraints, bracket mechanics, and impact on modern UK MC culture.",
    datePublished: "2026-11-01",
    author: { "@type": "Organization", name: "Lord of the Archives" },
    publisher: { "@type": "Organization", name: "Lord of the Archives" },
    mainEntityOfPage: "https://www.lordofthearchives.co.uk/news/prizefighter-tournament-format-breakdown",
  };

  return (
    <main className="min-h-screen bg-[#080809] pb-24 pt-28 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition hover:text-brand"
        >
          <ArrowLeft size={14} /> News &amp; Editorials
        </Link>

        <header className="border-b border-white/10 pb-10 pt-10">
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.26em] text-cyan-400">
            <Swords size={14} /> Format Analysis · Grime Battle Rap
          </p>
          <h1 className="mt-5 font-display text-5xl italic uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            Prizefighter: How the <span className="text-cyan-400">Knockout Tournament</span> Changed UK Clashing
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">
            In an era where traditional battle rap often ballooned into 45-minute spoken-word marathons, Ozone Prizefighter
            stripped the artform down to its rawest essentials: ruthless 140 BPM speed, 8-bar haymakers, and sudden-death elimination.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CalendarDays size={14} /> 1 November 2026
            </span>
            <span>·</span>
            <span className="text-cyan-400">Format Deep Dive</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Highlight Banner */}
        <div className="my-10 rounded-3xl border border-cyan-500/25 bg-zinc-950 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
            <Zap size={16} /> The Tournament Equation
          </div>
          <p className="mt-3 text-base leading-7 text-zinc-300">
            Standard battle leagues measure preparation over months; Prizefighter measures immediate adaptability in minutes.
            An MC might prepare three immaculate rounds for their opening opponent, but winning means immediately facing a semifinalist
            they haven't studied, requiring deep freestyle reserves, instant musical intuition, and acute crowd awareness.
          </p>
        </div>

        {/* The 4 Core Format Pillars */}
        <div className="grid gap-8 py-8 md:grid-cols-2">
          {formatPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 transition hover:border-cyan-500/40"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Icon size={22} />
                  </div>
                  <h2 className="mt-6 font-display text-2xl italic uppercase text-white transition group-hover:text-cyan-400">
                    {pillar.title}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-zinc-400">
                    {pillar.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative / Breakdown */}
        <div className="border-t border-white/10 py-12 text-base leading-8 text-zinc-300 sm:text-lg">
          <h2 className="font-display text-3xl italic uppercase text-white sm:text-4xl">
            Forging the Next Generation of Battle Rap Stars
          </h2>
          <p className="mt-6">
            The crucible of the Prizefighter tournament format has served as an unmatched talent incubator. Standout MCs such as
            <strong> Relapse, 7wxve, Stretch DCM, Trickyy, Flowen, and Firedon</strong> used tournament runs to demonstrate their
            versatility across diverse matchups.
          </p>
          <p className="mt-6">
            Because MCs cannot rely on elaborate multi-minute prop schemes or extended pauses, the format rewards pure grime MCing:
            breath control, sharp punchline timing, and the ability to ride dynamic instrumental drops provided by top grime producers.
          </p>
          <p className="mt-6">
            With full historical coverage from Classic radio tapes through modern Ozone seasons now accessible on Lord of the Archives,
            fans can track every bracket outcome, tournament crown, and judged decision that shaped the format.
          </p>
        </div>

        {/* Link Out Banner */}
        <div className="mt-10 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-zinc-950 via-cyan-950/20 to-zinc-950 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                Explore The Complete Prizefighter Archive
              </p>
              <h3 className="mt-1 font-display text-2xl italic uppercase text-white">
                Tournament Brackets, Results &amp; Seasons
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/prizefighter"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-cyan-300"
              >
                Browse Brackets <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/prizefighter/league"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                League Standings <Trophy size={15} />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
