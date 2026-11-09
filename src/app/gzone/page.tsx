import Link from "next/link";
import Image from "next/image";
import BattleRow from "../talk-is-cheap/BattleRow";
import { Calendar, CircleDot, Trophy } from "lucide-react";
import { formatBattleDate } from "../../data/battleDates";
import { gzoneBattles } from "../../data/gzone";
import { getMcProfileHref } from "../../data/mcs";
import { getBattleRouteHref } from "../../data/pengameBattles";
import { formatViewCount } from "../../data/viewCounts";
import { hasCompletedBattleAnalysis } from "../../data/battleTypes";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "Gzone Rap Battle Archive | 140 BPM Grime Clashes & Videos",
  description: "Official Gzone battle archive. Watch 140 BPM grime clashes recorded live in the Peacock Gym boxing ring, with referee decisions and fighter statistics.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/gzone",
  },
  openGraph: {
    title: "Gzone Rap Battle Archive | 140 BPM Grime Clashes & Videos",
    description: "Official Gzone battle archive. Watch 140 BPM grime clashes recorded live in the Peacock Gym boxing ring, with referee decisions and fighter statistics.",
    url: "https://www.lordofthearchives.co.uk/gzone",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Gzone Battle Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gzone Rap Battle Archive | 140 BPM Grime Clashes & Videos",
    description: "Official Gzone battle archive. Watch 140 BPM grime clashes recorded live in the Peacock Gym boxing ring, with referee decisions and fighter statistics.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gzone Rap Battle Archive",
  description: "Gzone Season 1 battle archive, clash analysis and league standings.",
  url: "https://www.lordofthearchives.co.uk/gzone",
  isPartOf: {
    "@type": "WebSite",
    name: "Lord of the Archives",
    url: "https://www.lordofthearchives.co.uk",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.lordofthearchives.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gzone",
      item: "https://www.lordofthearchives.co.uk/gzone",
    },
  ],
};

export default function GzonePage() {
  const sortedBattles = [...gzoneBattles].sort((a, b) => (a.seasonOrder || 0) - (b.seasonOrder || 0));

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 text-white selection:bg-gzone selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(collectionStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(breadcrumbStructuredData),
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <Image src="/assets/leagues/gzone-logo.png" alt="" width={240} height={240} priority aria-hidden="true" className="h-40 w-40 shrink-0 object-contain md:h-48 md:w-48" />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl uppercase italic leading-none text-white md:text-6xl">Gzone</h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-lg">
              When Ginga Jay&apos;s PenGame chapter ended, another door opened: Gzone. Jay built a battle league with its own ring, its own rules, and no shortage of noise. At Peacock Gym in Canning Town, MCs trade rapid-fire bars over grime beats while the crowd calls for reloads. Then Darren &ldquo;The Dentist&rdquo; Stewart joined the hosting team, bringing a fighter&apos;s presence to a show that already felt like a title bout. Season 1 throws Deeno, Tapped24, Roman, Marni Gramz, Ryno and more into the mix.
            </p>
          </div>
        </div>

        <div className="mb-12">
        </div>

        <section id="season-1" className="scroll-mt-32">
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <CircleDot className="text-gzone" size={20} />
              <h2 className="text-xl font-semibold text-zinc-200 md:text-2xl">
                Gzone Season 1 Most Wanted
              </h2>
            </div>
            <p className="max-w-4xl text-sm leading-relaxed text-zinc-400">
              Season 1 features DEENO, TAPPED24, PR1NC3, ROMAN, LDN MIKEZ, DELUXX, CJ ZINO, PROTY, RENZO, BTIZZ, RYNO, TYMELESS, AJNA, NATTYEBK, MARNI GRAMZ, 1FLAYMR, BADEE HARZ, Z.K, 7WXVE and K.I.M.E.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/40">
                    <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">Ep</th>
                    <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">Battle</th>
                    <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Date</th>
                    <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Views</th>
                    <th className="px-3 py-4 text-right text-xs font-semibold tracking-wide text-zinc-400 md:px-6 md:text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {sortedBattles.map((battle) => {
                    const analysisComplete = hasCompletedBattleAnalysis(battle);

                    return (
                    <BattleRow key={battle.id} href={analysisComplete ? getBattleRouteHref(battle) : battle.videoUrl ?? undefined}>
                      <td className="px-3 py-4 font-mono text-xs text-gzone md:px-6">
                        {analysisComplete ? (
                          <Link href={getBattleRouteHref(battle)} className="hover:underline">{battle.customEp}</Link>
                        ) : battle.customEp}
                      </td>
                      <td className="px-3 py-4 md:px-6">
                        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase italic text-zinc-100 md:text-lg">
                          {battle.winner === battle.mc1 && <Trophy size={14} className="text-gzone md:h-[18px] md:w-[18px]" />}
                          <Link href={getMcProfileHref(battle.mc1)} className="transition-colors hover:text-gzone hover:underline">
                            {battle.title.split(" vs ")[0]}
                          </Link>
                          {analysisComplete ? (
                            <Link href={getBattleRouteHref(battle)} className="text-xs text-zinc-500 transition-colors hover:text-gzone">VS</Link>
                          ) : (
                            <span className="text-xs text-zinc-600" title="Analysis pending editorial review">VS</span>
                          )}
                          <Link href={getMcProfileHref(battle.mc2)} className="transition-colors hover:text-gzone hover:underline">
                            {battle.title.split(" vs ")[1]}
                          </Link>
                          {battle.winner === battle.mc2 && <Trophy size={14} className="text-gzone md:h-[18px] md:w-[18px]" />}
                        </div>
                      </td>
                      <td className="hidden px-3 py-4 text-xs text-zinc-400 md:table-cell md:px-6">
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={14} className="text-zinc-600" />
                          {formatBattleDate(battle.date)}
                        </span>
                      </td>
                      <td className="hidden px-3 py-4 font-mono text-xs text-zinc-100 md:table-cell md:px-6">
                        {formatViewCount(battle.views)}
                      </td>
                      <td className="px-3 py-4 text-right md:px-6 md:text-left">
                        <span className={`text-xs md:text-sm font-semibold uppercase tracking-wide ${
                          battle.statusNote === "Archived"
                            ? "text-emerald-300"
                            : "text-gzone"
                        }`}>
                          {analysisComplete ? battle.statusNote : "Catalogued"}
                        </span>
                      </td>
                    </BattleRow>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
