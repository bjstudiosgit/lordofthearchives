import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Beer, Skull, Mic2, ShieldAlert, Sparkles } from "lucide-react";

const articleTitle = "The Complete History of King of the Ronalds (KOTR): UK Battle Rap's Rawest Movement";

export const metadata: Metadata = {
  title: articleTitle,
  description:
    "An in-depth retrospective on King of the Ronalds (KOTR), the legendary underground UK battle league founded by Pedro and Micky Worthless that championed unfiltered comedy, pub basements, and raw disrespect.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/news/history-of-king-of-the-ronalds",
  },
  openGraph: {
    title: articleTitle,
    description:
      "From sweaty pub basements in Islington to cult internet status: how KOTR redefined UK battle rap through pure underground authenticity and zero censorship.",
    type: "article",
    publishedTime: "2026-11-01T00:00:00.000Z",
  },
};

const keyEras = [
  {
    title: "1. The Birth of the Ronalds (2013–2014)",
    subtitle: "A Rebellion Against Commercial Politeness",
    content:
      "In the early 2010s, as major UK battle platforms chased sponsor deals, corporate partnerships, and polished theater stages, a counter-cultural rebellion erupted in London. Spearheaded by Pedro and Micky Worthless, King of the Ronalds (KOTR) was created as a direct reaction: an uncompromising, foul-mouthed playground where nothing was sacred and corporate decorum was kicked out the door.",
  },
  {
    title: "2. The Old Red Lion Era (2014–2016)",
    subtitle: "Sweaty Basements, Spilled Pints & Legendary Disrespect",
    content:
      "The soul of KOTR was forged in packed pub basements—most famously The Old Red Lion in Islington. With no stage barrier, low ceilings, and pints flying, MCs stood inches from their opponents' faces. Heavyweights like Hulk, Big J, Bowski, Big Sarters, CallumBOOM, and Two-Can established a distinct KOTR aesthetic: razor-sharp comedic timing, self-deprecating humor, and jaw-dropping crowd roasts.",
  },
  {
    title: "3. Invasion of the Elite Veterans (2016–2018)",
    subtitle: "When the Mainstage Legends Wanted Real Smoke",
    content:
      "As KOTR's cult status exploded on YouTube, top-tier lyrical MCs from across the UK scene began flocking to the platform. Icons like Oshea, Dialect, Soul, Tony D, Bamalam, and Raptor entered the Ronalds pit specifically for the freedom to rap without fear of demonetization or algorithmic policing. The resulting clashes produced some of the purest freestyle rebuttal moments in UK hip-hop history.",
  },
  {
    title: "4. Lasting Cultural Legacy & Archive Recovery",
    subtitle: "Preserving 271 Battles on Lord of the Archives",
    content:
      "While many older videos suffered from broken URLs and deleted channels over the years, the Lord of the Archives historical recovery project has cataloged over 271 verified KOTR clash records. KOTR proved that raw charisma, comedic bravery, and an electric live room will always outshine million-pound production values.",
  },
];

export default function HistoryOfKotrPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description:
      "A complete historical deep-dive into King of the Ronalds (KOTR), exploring its origins, pub-basement atmosphere, legendary MC roster, and preservation in the Lord of the Archives database.",
    datePublished: "2026-11-01",
    author: { "@type": "Organization", name: "Lord of the Archives" },
    publisher: { "@type": "Organization", name: "Lord of the Archives" },
    mainEntityOfPage: "https://www.lordofthearchives.co.uk/news/history-of-king-of-the-ronalds",
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
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.26em] text-[#d97706]">
            <Beer size={14} /> League Retrospective · 268+ Clash Records
          </p>
          <h1 className="mt-5 font-display text-5xl italic uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            The Complete History of <span className="text-[#f59e0b]">King of the Ronalds</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">
            Before battle rap became sterile, algorithm-chasing, and brand-friendly, King of the Ronalds (KOTR)
            built a riotous underground empire in London pub basements. Here is the full story of the UK&apos;s rawest,
            funniest, and most unapologetic battle platform.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <CalendarDays size={14} /> 1 November 2026
            </span>
            <span>·</span>
            <span className="text-[#f59e0b]">Historical Retrospective</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </header>

        {/* Feature Callout */}
        <div className="my-10 rounded-3xl border border-[#d97706]/30 bg-zinc-950 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#f59e0b]">
            <Skull size={16} /> The KOTR Ethos
          </div>
          <blockquote className="mt-4 border-l-2 border-[#f59e0b] pl-4 font-display text-2xl italic uppercase text-white sm:text-3xl">
            &ldquo;No sponsors. No clean versions. If you get offended, you bought the wrong ticket.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm leading-6 text-zinc-400">
            While contemporary battle leagues instituted strict codes of conduct to attract mainstream advertisers,
            KOTR leaned entirely into chaos. Founders Pedro and Micky Worthless created a space where MCs were encouraged
            to cross lines, test radical comedy, and embrace total artistic anarchy.
          </p>
        </div>

        {/* Timeline Breakdown */}
        <div className="space-y-12 py-8">
          {keyEras.map((era, index) => (
            <section
              key={index}
              className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 transition hover:border-[#f59e0b]/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#d97706]/20 font-mono text-xs font-bold text-[#f59e0b]">
                  0{index + 1}
                </span>
                <h2 className="font-display text-2xl italic uppercase text-white sm:text-3xl">
                  {era.title}
                </h2>
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                {era.subtitle}
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                {era.content}
              </p>
            </section>
          ))}
        </div>

        {/* The Defining Hallmarks */}
        <div className="border-t border-white/10 py-12 text-base leading-8 text-zinc-300 sm:text-lg">
          <h2 className="font-display text-3xl italic uppercase text-white sm:text-4xl">
            What Made KOTR So Dangerous and Irreplaceable?
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
              <h3 className="flex items-center gap-2 font-display text-xl uppercase italic text-[#f59e0b]">
                <Mic2 size={18} /> The Pedro Freestyle Factor
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Co-founder Pedro became an international meme and cult legend for his completely off-the-cuff,
                rhyme-anything freestyle rounds. Armed with a pint and boundless confidence, his rounds were chaotic
                theatre where literal nonsense could ignite a 100-person roar.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6">
              <h3 className="flex items-center gap-2 font-display text-xl uppercase italic text-[#f59e0b]">
                <ShieldAlert size={18} /> The Hostile Intimacy
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                With zero stage separation, MCs had to survive standing mere inches from a rowdy, beer-drinking crowd
                that would ruthlessly heckle a stumble or immediately reload a devastating multi-syllabic punchline.
              </p>
            </div>
          </div>

          <h2 className="mt-12 font-display text-3xl italic uppercase text-white sm:text-4xl">
            Now Preserved in Full on Lord of the Archives
          </h2>
          <p className="mt-6">
            With the addition of King of the Ronalds to the Lord of the Archives unified directory, fans and historians
            can now cross-reference KOTR battle cards, match outcomes, release dates, and MC crossover histories against
            PenGame, Gzone, Talk Is Cheap, and Lord of the Mics.
          </p>
          <p className="mt-6">
            Whether revisiting Hulk vs Big J, the Bowski &amp; Big Sarters tag-team classics, or seeing grime legends test
            their mettle in pub basements, KOTR represents an indispensable chapter in British counter-culture.
          </p>
        </div>

        {/* Direct Link Banner */}
        <div className="mt-10 rounded-3xl border border-[#d97706]/30 bg-gradient-to-r from-zinc-950 via-[#d97706]/10 to-zinc-950 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f59e0b]">
                Explore The Complete KOTR Archive
              </p>
              <h3 className="mt-1 font-display text-2xl italic uppercase text-white">
                271 King of the Ronalds Battles Now Live
              </h3>
            </div>
            <Link
              href="/king-of-the-ronalds"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-yellow-400"
            >
              Open KOTR Archive <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
