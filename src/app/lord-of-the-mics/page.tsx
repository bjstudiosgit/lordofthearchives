import Link from "next/link";
import Image from "next/image";
import BattleRow from "../talk-is-cheap/BattleRow";
import { getArchiveMcHref } from "../../data/archiveMcProfiles";
import { Calendar, ExternalLink } from "lucide-react";
import { lordOfTheMicsBattles } from "../../data/lordOfTheMics";
import { formatBattleDate } from "../../data/battleDates";
import { formatViewCount } from "../../data/viewCounts";

const dvdSources: Record<string, string> = {
  LOTM1: "https://www.musicglue.com/lordofthemics/products/lotm-1-and-2-double-dvd",
  LOTM2: "https://www.musicglue.com/lordofthemics/products/lotm-1-and-2-double-dvd",
  LOTM3: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-3-cd-slash-dvd-2",
  LOTM4: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-4-cd-slash-dvd",
  LOTM5: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-5-cd-slash-dvd",
  LOTM6: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-6-cd-slash-dvd",
  LOTM7: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-7-cd-slash-dvd",
  LOTM8: "https://www.musicglue.com/lordofthemics/products/lord-of-the-mics-8-cd-slash-dvd",
};

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "Lord of the Mics Battle Catalog | LOTM 1 to 8 Clash History",
  description: "The complete Lord of the Mics (LOTM 1–8) clash catalog. Explore legendary grime battles including Wiley vs Kano, Skepta vs Devilman, Big H vs P Money and more.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/lord-of-the-mics",
  },
  openGraph: {
    title: "Lord of the Mics Battle Catalog | Lord of the Archives",
    description: "A season-by-season catalog of Lord of the Mics clashes, matchups, dates, series and surviving view-count records.",
    url: "https://www.lordofthearchives.co.uk/lord-of-the-mics",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Lord of the Mics Battle Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lord of the Mics Battle Catalog | Lord of the Archives",
    description: "A season-by-season catalog of Lord of the Mics clashes, matchups, dates, series and surviving view-count records.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Lord of the Mics Battle Catalog",
  description: "A season-by-season catalog of Lord of the Mics clashes, matchups, dates, series and surviving view-count records.",
  url: "https://www.lordofthearchives.co.uk/lord-of-the-mics",
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
      name: "Lord of the Mics",
      item: "https://www.lordofthearchives.co.uk/lord-of-the-mics",
    },
  ],
};

export default function LordOfTheMicsPage() {
  const sortedBattles = [...lordOfTheMicsBattles].sort(
    (a, b) => Number(b.season) - Number(a.season) || (a.seasonOrder ?? 0) - (b.seasonOrder ?? 0),
  );
  const groupedBattles = sortedBattles.reduce<Record<string, typeof sortedBattles>>((groups, battle) => {
    const series = String(battle.customEp ?? battle.subGroup ?? "Archive");
    groups[series] = groups[series] || [];
    groups[series].push(battle);
    return groups;
  }, {});
  const formatLotmDate = (date: string | undefined) => {
    if (!date) return "TBD";
    return date.endsWith("-01-01") ? date.slice(0, 4) : formatBattleDate(date);
  };

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 text-white selection:bg-brand selection:text-black">
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
          <Image src="/assets/leagues/lord-of-the-mics-logo.png" alt="" width={240} height={240} priority aria-hidden="true" className="h-40 w-40 shrink-0 object-contain md:h-48 md:w-48" />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl uppercase italic leading-none text-white md:text-6xl">
              Lord of the <span className="text-brand">Mics</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-lg">
              Lord of the Mics (LOTM) is the foundational genesis of modern British clash culture. In 2004, Boy Better Know producer Jammer crammed East London&apos;s deadliest pirate radio MCs into his parents&apos; Leytonstone basement (E17), filming legendary clashes with a single handheld camcorder. Pressed onto physical bootleg DVDs and traded through barbershops and car boots, LOTM established iconic rivalries that defined grime music history. Explore the complete season tracklists from LOTM 1 through LOTM 8, view landmark bouts including Wiley vs Kano, Skepta vs Devilman, and Big H vs P Money, and access fighter dossiers across <Link href="/mcs" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">the MC directory</Link>.
            </p>
          </div>
        </div>

        <section className="space-y-10">
          {Object.entries(groupedBattles).map(([series, battles]) => {
            const num = series.replace(/\D/g, "");
            const sectionId = num ? `lotm-${num}` : series.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <div key={series} id={sectionId} className="scroll-mt-32">
              <div className="mb-5">
                <h2 className="text-xl font-semibold text-zinc-200 md:text-2xl">{series}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  {series === "LOTM9" ? "Released footage from an unreleased edition." : `Catalogued ${battles[0]?.date?.slice(0, 4)} clashes from the official DVD tracklist.`}{" "}
                  {dvdSources[series] && (
                    <a href={dvdSources[series]} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                      Check tracklist <ExternalLink size={13} className="inline" />
                    </a>
                  )}
                  {series === "LOTM9" && (
                    <a href="https://grmdaily.com/lord-of-the-mics-9-exclusive-footage/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                      Release context <ExternalLink size={13} className="inline" />
                    </a>
                  )}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-900/40">
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Ep</th>
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Battle</th>
                        <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Date</th>
                        <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Views</th>
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400 text-right md:text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {battles.map((battle, index) => (
                        <BattleRow key={battle.id} href={`/lord-of-the-mics/${battle.slug}`}>
                          <td className="px-2 py-3 md:px-6 md:py-6">
                            <Link href={`/lord-of-the-mics/${battle.slug}`} className="whitespace-nowrap font-mono text-brand text-[10px] md:text-sm hover:underline" aria-label={`View ${series} EP ${index + 1}: ${battle.title}`}>{series} EP {index + 1}</Link>
                          </td>
                          <td className="px-2 py-3 md:px-6 md:py-6">
                            <div className="flex flex-wrap items-center gap-1.5 md:gap-3 text-sm font-semibold text-zinc-100 md:text-lg group-hover:text-brand transition-colors">
                              <Link href={getArchiveMcHref(battle.mc1)} className="hover:text-brand hover:underline">{battle.mc1}</Link>
                              <Link href={`/lord-of-the-mics/${battle.slug}`} aria-label={`View ${battle.title}`} className="text-[10px] md:text-sm text-zinc-400 hover:text-brand">VS</Link>
                              <Link href={getArchiveMcHref(battle.mc2)} className="hover:text-brand hover:underline">{battle.mc2}</Link>
                            </div>
                          </td>
                          <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                            <div className="flex items-center gap-2 text-zinc-400 text-xs"><Calendar size={14} className="opacity-50" />{formatLotmDate(battle.date)}</div>
                          </td>
                          <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                            <div className="flex items-center gap-2 text-zinc-100 font-mono text-xs"><span className="w-1 h-1 rounded-full bg-brand/50" />{formatViewCount(battle.views, "—")}</div>
                          </td>
                          <td className="px-2 py-3 md:px-6 md:py-6 text-right md:text-left">
                            <span className={`text-xs md:text-sm font-semibold tracking-wide ${battle.clashSummary?.trim() ? "text-emerald-300" : "text-brand"}`}>
                              {battle.clashSummary?.trim() ? "Archived" : "Catalogued"}
                            </span>
                          </td>
                        </BattleRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
        </section>
      </div>
    </main>
  );
}
