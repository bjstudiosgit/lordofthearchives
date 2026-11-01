import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Eye, Flame, Trophy, TrendingUp, Sparkles } from "lucide-react";

const articleTitle = "The Top 10 Most Viewed UK Rap Battles of All Time";

export const metadata: Metadata = {
  title: `${articleTitle} | Lord of the Archives`,
  description:
    "Explore the 10 most viewed UK rap battles in modern archive history, featuring record-breaking clashes from Kandi, Prynlee, Ren DMC, Passive, and Anbu Sensei.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/news/top-10-most-viewed-uk-rap-battles",
  },
  openGraph: {
    title: articleTitle,
    description:
      "A verified data-led countdown of the 10 biggest UK battle rap releases by public YouTube views, analyzing why these clashes broke outside the battle rap subculture.",
    type: "article",
    publishedTime: "2026-11-01T00:00:00.000Z",
  },
};

const topBattles = [
  {
    rank: 1,
    title: "KANDI vs PRYNLEE",
    league: "PenGame",
    season: "Season 4",
    views: "2.06 Million",
    slug: "kandi-vs-prynlee",
    href: "/battle/kandi-vs-prynlee",
    mc1: "Kandi",
    mc2: "Prynlee",
    summary:
      "The undisputed modern standard for viral UK clash culture. A masterclass in performance and stage confrontation, pitting Kandi's infectious cadence and crowd theatrics against Prynlee's relentless flow and razor-sharp personal rebuttals. It became the first modern clash to break through multiple mainstream algorithm waves, pulling millions of viewers who had never previously watched battle rap.",
    standoutFactor: "Explosive comedic timing, undeniable charisma, and cross-platform meme virality.",
  },
  {
    rank: 2,
    title: "REN DMC vs RENAYA",
    league: "PenGame",
    season: "Season 4",
    views: "2.04 Million",
    slug: "ren-dmc-vs-renaya",
    href: "/battle/ren-dmc-vs-renaya",
    mc1: "Ren DMC",
    mc2: "Renaya",
    summary:
      "A ferocious grudge match loaded with electric tension from the pre-battle stare-down to the final buzzer. Ren DMC delivered some of the most quotable bodybag bars in the archive, while Renaya's fearless counters made this one of the most replayed and debated clashes in UK history.",
    standoutFactor: "Authentic bad blood, personal haymakers, and unmatched replay value.",
  },
  {
    rank: 3,
    title: "MISSINK vs CUCHA",
    league: "PenGame",
    season: "Season 4",
    views: "1.20 Million",
    slug: "missink-vs-cucha",
    href: "/battle/missink-vs-cucha",
    mc1: "Missink",
    mc2: "Cucha",
    summary:
      "High tempo, raw hostility, and unfiltered punchlines. Missink's aggressive attack combined with Cucha's witty crowd-pulling style produced an instant classic that demonstrated the unmatched depth of the female clash roster.",
    standoutFactor: "Blistering vocal delivery and relentless back-and-forth momentum.",
  },
  {
    rank: 4,
    title: "KANDI vs ANBU SENSEI",
    league: "PenGame",
    season: "Season 2025",
    views: "1.11 Million",
    slug: "kandi-vs-anbu-sensei",
    href: "/battle/kandi-vs-anbu-sensei",
    mc1: "Kandi",
    mc2: "Anbu Sensei",
    summary:
      "A clash of two entirely distinct artistic identities: Kandi's theatrical, crowd-controlling presence clashing against Anbu Sensei's hyper-lyrical, technical anime-infused pen game. The stylistic contrast created a spectacle that captivated both casual listeners and underground rap purists.",
    standoutFactor: "Stylistic contrast between pure theater and intricate multisyllabic rhyme schemes.",
  },
  {
    rank: 5,
    title: "PASSIVE vs HUNCE",
    league: "PenGame",
    season: "Season 5",
    views: "1.07 Million",
    slug: "passive-vs-hunce",
    href: "/battle/passive-vs-hunce",
    mc1: "Passive",
    mc2: "Hunce",
    summary:
      "An absolute war of attrition. Passive's rapid-fire delivery and animated movements collided with Hunce's heavy-handed bar structure, making this one of the hardest-hitting and most discussed battles of Season 5.",
    standoutFactor: "Ferocious pacing and unrelenting volume of punches per 16 bars.",
  },
  {
    rank: 6,
    title: "REN DMC vs F-DON",
    league: "PenGame",
    season: "Season 2023",
    views: "950,000",
    slug: "ren-dmc-vs-f-don",
    href: "/battle/ren-dmc-vs-f-don",
    mc1: "Ren DMC",
    mc2: "F-Don",
    summary:
      "Two of the league's sharpest lyricists colliding at the absolute peak of their powers. Ren DMC's calculated pen dismantled F-Don's defensive schemes in a clash that cemented both MCs as upper-echelon title contenders.",
    standoutFactor: "Surgical character assassination and high-level technical lyricism.",
  },
  {
    rank: 7,
    title: "DRIZZGB & TRAPPY vs GRAMS & PASSIVE",
    league: "PenGame",
    season: "2v2 Tag Team",
    views: "712,000",
    slug: "drizzgb-trappy-vs-grams-passive",
    href: "/battle/drizzgb-trappy-vs-grams-passive",
    mc1: "DrizzGB & Trappy",
    mc2: "Grams & Passive",
    summary:
      "The undisputed high watermark of UK tag-team clash formats. Four distinct personalities trading four-bar sequences, rehearsed combination schemes, and spontaneous studio pandemonium.",
    standoutFactor: "Seamless tag-team chemistry, double-time switches, and electric room reactions.",
  },
  {
    rank: 8,
    title: "REN DMC vs DRIZZGB #2",
    league: "PenGame",
    season: "Season 2023",
    views: "653,000",
    slug: "ren-dmc-vs-drizzgb-2",
    href: "/battle/ren-dmc-vs-drizzgb-2",
    mc1: "Ren DMC",
    mc2: "DrizzGB",
    summary:
      "A high-stakes rematch that surpassed the original. After their contentious first meeting, both competitors returned with deeply researched personal angles, resulting in one of the most hostile clashes on the platform.",
    standoutFactor: "Grudge rematch intensity and devastating personal exposure schemes.",
  },
  {
    rank: 9,
    title: "FOREVER TAPPED vs PRYNLEE",
    league: "PenGame",
    season: "Season 4",
    views: "649,000",
    slug: "ft-vs-prynlee",
    href: "/battle/ft-vs-prynlee",
    mc1: "Forever Tapped",
    mc2: "Prynlee",
    summary:
      "A pure clash of composure. Forever Tapped brought witty, deadpan dismissals, while Prynlee countered with furious rapid-fire cadence and room-shaking haymakers.",
    standoutFactor: "Unapologetic North vs South clash styles and relentless crowd engagement.",
  },
  {
    rank: 10,
    title: "REN DMC vs SKAMZ #3",
    league: "PenGame",
    season: "Season 2023",
    views: "646,000",
    slug: "ren-dmc-vs-skamz-3",
    href: "/battle/ren-dmc-vs-skamz-3",
    mc1: "Ren DMC",
    mc2: "Skamz",
    summary:
      "The epic conclusion of UK battle rap's defining modern trilogy. With the series split 1-1, both veterans emptied their notebooks in a high-intensity showdown that solidified their legendary status.",
    standoutFactor: "Trilogy climax storytelling, career-defining rivalry, and high emotional stakes.",
  },
];

export default function TopViewedBattlesPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description:
      "The official countdown of the top 10 most viewed UK rap battles in the modern archive, backed by verified YouTube figures and in-depth clash analyses.",
    datePublished: "2026-11-01",
    author: { "@type": "Organization", name: "Lord of the Archives" },
    publisher: { "@type": "Organization", name: "Lord of the Archives" },
    mainEntityOfPage: "https://www.lordofthearchives.co.uk/news/top-10-most-viewed-uk-rap-battles",
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
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.26em] text-brand">
            <Trophy size={14} /> Historical Data · Archive Records
          </p>
          <h1 className="mt-5 font-display text-5xl italic uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            The Top 10 Most Viewed <span className="text-brand">UK Rap Battles</span> of All Time
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Backed by public view snapshots from across the Lord of the Archives database, here is the definitive
            countdown of the clashes that crossed over into cultural phenomena, generating millions of views and
            redefining UK battle rap history.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CalendarDays size={14} /> 1 November 2026
            </span>
            <span>·</span>
            <span className="text-brand">Verified Archive Data</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </header>

        {/* Overview Callout */}
        <div className="my-10 rounded-3xl border border-brand/25 bg-zinc-950 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-brand">
            <TrendingUp size={16} /> Key Takeaway
          </div>
          <p className="mt-3 text-base leading-7 text-zinc-300">
            A striking trend in modern UK clash history is the absolute dominance of female MCs at the top of the view
            leaderboards. While traditional battle leagues historically had predominantly male rosters, the peak era of
            PenGame proved that high-stakes, theatrical clashes starring MCs like <strong>Kandi, Prynlee, Renaya, and Missink</strong> reached
            massive mainstream audiences that dwarfed typical underground rap metrics.
          </p>
        </div>

        {/* Countdown List */}
        <div className="space-y-10 py-6">
          {topBattles.map((battle) => (
            <section
              key={battle.rank}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6 transition hover:border-brand/40 sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand font-display text-xl italic text-black">
                    #{battle.rank}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                      {battle.league} · {battle.season}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-1.5 font-mono text-xs font-bold text-white">
                  <Eye size={14} className="text-brand" /> {battle.views} views
                </div>
              </div>

              <div className="mt-6">
                <h2 className="font-display text-3xl italic uppercase tracking-tight text-white transition group-hover:text-brand sm:text-4xl">
                  {battle.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-zinc-300">{battle.summary}</p>

                <div className="mt-5 rounded-2xl border border-white/5 bg-zinc-900/50 p-4">
                  <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-brand">
                    <Sparkles size={13} /> Standout Factor
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{battle.standoutFactor}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
                  <div className="flex gap-2">
                    <Link
                      href={`/mc/${battle.mc1.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="rounded-lg border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition hover:border-brand/40 hover:text-white"
                    >
                      {battle.mc1} Profile
                    </Link>
                    <Link
                      href={`/mc/${battle.mc2.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="rounded-lg border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 transition hover:border-brand/40 hover:text-white"
                    >
                      {battle.mc2} Profile
                    </Link>
                  </div>
                  <Link
                    href={battle.href}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand/10 border border-brand/30 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-brand transition hover:bg-brand hover:text-black"
                  >
                    View Archive Breakdown <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Editorial Section */}
        <div className="border-t border-white/10 py-12 text-base leading-8 text-zinc-300 sm:text-lg">
          <h2 className="font-display text-3xl italic uppercase text-white sm:text-4xl">
            From Basement DVDs to Multi-Million Streaming Eras
          </h2>
          <p className="mt-6">
            In the early 2000s, UK battle culture was defined by physical media. The legendary clashes on <em>Lord of the Mics (LOTM)</em>—such as
            Skepta vs Devilman, Wiley vs Kano, and Bruza vs Crazy Titch—circulated on hand-to-hand DVDs across London, school playgrounds, and pirate radio stations.
            While their exact historic viewing figures can never be captured on a single YouTube counter, they laid the stylistic foundation for everything that followed.
          </p>
          <p className="mt-6">
            When platforms like Don't Flop and King of the Ronalds (KOTR) brought UK battle rap to YouTube, they proved that a dedicated subculture could generate hundreds of thousands of views per event. But the explosion of PenGame and modern 140 BPM episodic releases represented a tectonic shift: packaging clashes into crisp, theatrical, highly memeable digital moments tailored for the modern smartphone audience.
          </p>
          <p className="mt-6">
            As the archive continues to grow across all seven leagues, these ten battles remain the benchmark of what is possible when UK rap clashing transcends its underground core to capture the national imagination.
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Next Article</p>
              <h3 className="mt-1 font-display text-2xl italic uppercase text-white">
                The Complete History of King of the Ronalds (KOTR)
              </h3>
            </div>
            <Link
              href="/news/history-of-king-of-the-ronalds"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-yellow-300"
            >
              Read Next <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
