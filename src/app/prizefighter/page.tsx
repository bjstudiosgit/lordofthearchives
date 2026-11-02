import { formatBattleDate } from "../../data/battleDates";
import Link from "next/link";
import BattleRow from "../talk-is-cheap/BattleRow";
import { getArchiveMcHref, getArchiveMcId, getArchiveMcName } from "../../data/archiveMcProfiles";
import { Trophy } from "lucide-react";
import { getLegacyPrizefighterBattleSlug, getPrizefighterBattleSlug, prizefighterEditions, prizefighterClashData } from "../../data/prizefighter";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "Ozone Prizefighter Battle Archive | 8-Man Grime Knockouts",
  description: "Explore Birmingham and Midlands 8-man grime knockout battles from Prizefighter and Ozone across 2011–2024, featuring Devilman, Sox, Jaykae and F-Don.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/prizefighter" },
  openGraph: {
    title: "Ozone Prizefighter Battle Archive | Lord of the Archives",
    description: "Explore Classic Prizefighter and Ozone matchups, tournament rounds and recording availability by edition and season.",
    url: "https://www.lordofthearchives.co.uk/prizefighter",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Ozone Prizefighter Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ozone Prizefighter Battle Archive | Lord of the Archives",
    description: "Explore Classic Prizefighter and Ozone matchups, tournament rounds and recording availability by edition and season.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Ozone Prizefighter Battle Archive",
  description: "Explore Classic Prizefighter and Ozone matchups, tournament rounds and recording availability by edition and season.",
  url: "https://www.lordofthearchives.co.uk/prizefighter",
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
      name: "Ozone Prizefighter",
      item: "https://www.lordofthearchives.co.uk/prizefighter",
    },
  ],
};

export default function PrizefighterPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
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
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Archive</p>
        <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
          Ozone <span className="text-brand">Prizefighter</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">
          Prizefighter brought an electric tournament dynamic to British clash culture. Conceived in Birmingham by producer DJ Mikee to provide Midlands grime artists with a dedicated national battleground, the platform pitted 8 contenders into sudden-death elimination brackets for cash prizes and championship belts. From legendary early radio wars broadcast on Silk City Radio to modern Ozone revival stages, explore indexed tournament rounds, verify fighter scores, or consult the <Link href="/prizefighter/league" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">official Prizefighter points table</Link>.
        </p>

        {["Ozone", "Classic"].map((era) => (
          <section key={era} id={era.toLowerCase()} className="mt-14 scroll-mt-32">
            <h2 className="mb-8 font-display text-3xl uppercase italic text-brand">{era} era</h2>
            <div className="space-y-10">
              {prizefighterEditions.filter((edition) => edition.era === era).sort((a, b) =>
                b.year.localeCompare(a.year) || Number(b.edition.match(/\d+/)?.[0] ?? 0) - Number(a.edition.match(/\d+/)?.[0] ?? 0)
              ).map((edition) => (
                <section key={`${edition.edition}-${edition.year}`}>
                  <h3 className="text-xl font-semibold text-zinc-200 md:text-2xl">{edition.edition}</h3>
                  <p className="mb-5 mt-2 text-sm text-zinc-400">{edition.year || "Year not recorded"} · {edition.battles.length} battles</p>
                  <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left">
                        <caption className="sr-only">{era} {edition.edition} {edition.year} matchups</caption>
                        <thead>
                          <tr className="border-b border-white/5 bg-zinc-900/40">
                            {["Ep", "Battle", "Date", "Views", "Status"].map((heading) => (
                              <th key={heading} scope="col" className="px-4 py-4 text-xs font-semibold text-zinc-400 md:px-6">{heading}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {edition.battles.map((battle, index) => {
                            const clashData = prizefighterClashData[getLegacyPrizefighterBattleSlug(edition, battle)]
                              ?? prizefighterClashData[getPrizefighterBattleSlug(edition, battle)];
                            const isArchived = Boolean(clashData?.clashSummary?.trim());
                            const winnerId = clashData?.winner ? getArchiveMcId(clashData.winner) : undefined;
                            return (
                            <BattleRow key={index} href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`}>
                              <td className="px-4 py-5 text-sm text-brand md:px-6">
                                <Link href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`} className="hover:underline">{index + 1}</Link>
                              </td>
                              <td className="min-w-56 px-4 py-5 md:px-6">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-zinc-100 md:text-base">
                                  {[battle.side1, battle.side2].map((side, index) => (
                                    <span key={index} className="contents">
                                      {index > 0 && <Link href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`} className="text-xs font-normal uppercase text-zinc-500 hover:text-brand">vs</Link>}
                                      <span>{side.split(" / ").map((name, nameIndex) => <span key={name}>{nameIndex > 0 && " / "}<Link href={getArchiveMcHref(name)} className="hover:text-brand hover:underline">{winnerId === getArchiveMcId(name) && <Trophy size={14} aria-label="Winner" className="mr-1 inline text-brand" />}{getArchiveMcName(name)}</Link></span>)}</span>
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-4 py-5 text-xs text-zinc-400 md:px-6" title={battle.releaseDate ? "YouTube publication date" : "Event year"}>{battle.releaseDate ? formatBattleDate(battle.releaseDate) : edition.year || "—"}</td>
                              <td className="px-4 py-5 font-mono text-xs text-zinc-400 md:px-6" aria-label="Views unavailable">—</td>
                              <td className="px-4 py-5 md:px-6">
                                <span className={`text-xs md:text-sm font-semibold ${isArchived ? "text-emerald-300" : "text-brand"}`}>{isArchived ? "Archived" : "Catalogued"}</span>
                              </td>
                            </BattleRow>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
