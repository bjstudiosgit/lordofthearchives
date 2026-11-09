import Link from "next/link";
import Image from "next/image";
import { getArchiveMcHref } from "../../data/archiveMcProfiles";
import { Calendar, ExternalLink } from "lucide-react";
import { getTalkIsCheapBattleSlug, getTalkIsCheapClashData, talkIsCheapSeries } from "../../data/talkIsCheap";
import { formatBattleDate } from "../../data/battleDates";
import BattleRow from "./BattleRow";
import talkIsCheapViews from "../../data/talkIsCheapViews.json";
import { formatViewCount } from "../../data/viewCounts";

const videoViews: Record<string, number> = talkIsCheapViews;
const archiveSections = [...new Set(talkIsCheapSeries.map((series) => series.name))].map((name) => {
  const events = talkIsCheapSeries.filter((series) => series.name === name);
  return {
    ...events[0],
    eventDetails: events.map((event) => `${formatBattleDate(event.date)} · ${event.venue}`).join(" / "),
    battles: events.flatMap((event) => event.battles.map(([mc1, mc2, videoId]) => [mc1, mc2, videoId, event.date])),
  };
});

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "Talk Is Cheap Battle Catalog | New Wave UK Grime Clashes",
  description: "Explore Talk Is Cheap (TIC) UK battle rap archives. Watch rapid-fire grime clashes, emerging new-generation spitters, and official YouTube match releases.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/talk-is-cheap" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Talk Is Cheap Battle Catalog | Lord of the Archives",
    description: "A first catalog of Talk Is Cheap grime clashes with links to the league's original video uploads.",
    url: "https://www.lordofthearchives.co.uk/talk-is-cheap",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Talk Is Cheap Battle Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talk Is Cheap Battle Catalog | Lord of the Archives",
    description: "A first catalog of Talk Is Cheap grime clashes with links to the league's original video uploads.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Talk Is Cheap Battle Catalog",
  description: "A first catalog of Talk Is Cheap grime clashes with links to the league's original video uploads.",
  url: "https://www.lordofthearchives.co.uk/talk-is-cheap",
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
      name: "Talk Is Cheap",
      item: "https://www.lordofthearchives.co.uk/talk-is-cheap",
    },
  ],
};

export default function TalkIsCheapPage() {

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
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <Image
            src="/assets/leagues/talk-is-cheap-logo.png"
            alt=""
            width={480}
            height={300}
            priority
            aria-hidden="true"
            className="h-40 w-40 shrink-0 object-contain md:h-48 md:w-48"
          />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl uppercase italic leading-none text-white md:text-6xl">Talk Is Cheap</h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-lg">
              Talk Is Cheap began in Leeds in 2019, bringing established names and hungry newcomers into the same room. Its early Initiation card at Eiger Music Studios included Dialect vs Tali alongside a full slate of emerging battlers. Dialect and Strika helped give those first events their voice, while artists such as Zen became part of the league&apos;s early story. After a hiatus, Talk Is Cheap returned to Leeds in 2024 with Dialect hosting at Freedom Mills: four grime clashes, cameras catching the crowd, and an open mic for anyone ready to step up. The newer live-event era has continued to make space for fresh faces, with Fangol and Hunter among those involved.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-10">
          {archiveSections.map((series) => (
            <section key={series.name} id={series.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-32">
              <h2 className="text-xl font-semibold text-zinc-200 md:text-2xl">{series.name}</h2>
              <p className="mb-5 mt-2 text-sm text-zinc-400">
                {series.eventDetails}{" "}
                {"sourceUrl" in series && series.sourceUrl ? (
                  <a href={series.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Event source <ExternalLink size={13} className="inline" />
                  </a>
                ) : null}
                {"note" in series && series.note && !series.note.startsWith("Research identifies") && <span className="mt-1 block text-zinc-500">{series.note}</span>}
              </p>
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
                      {series.battles.map(([mc1, mc2, videoId, date], index) => {
                        const slug = getTalkIsCheapBattleSlug(mc1, mc2);
                        const clashData = getTalkIsCheapClashData(slug);
                        const isArchived = Boolean(clashData?.clashSummary?.trim());

                        return (
                          <BattleRow key={videoId} href={`/talk-is-cheap/${slug}`}>
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <Link href={`/talk-is-cheap/${slug}`} className="font-mono text-brand text-[10px] md:text-sm hover:underline" aria-label={`Watch ${mc1} vs ${mc2}`}>
                                {index + 1}
                              </Link>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <div className="flex flex-wrap items-center gap-1.5 md:gap-3 text-sm font-semibold text-zinc-100 md:text-lg group-hover:text-brand transition-colors">
                                <Link href={getArchiveMcHref(mc1)} className="hover:text-brand hover:underline">{mc1}</Link>
                                <Link href={`/talk-is-cheap/${slug}`} className="text-[10px] md:text-sm text-zinc-400 hover:text-brand" aria-label={`Watch ${mc1} vs ${mc2}`}>VS</Link>
                                <Link href={getArchiveMcHref(mc2)} className="hover:text-brand hover:underline">{mc2}</Link>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-400 text-xs"><Calendar size={14} className="opacity-50" />{formatBattleDate(date)}</div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-100 font-mono text-xs" aria-label={videoViews[videoId] === undefined ? "Views unavailable" : `${videoViews[videoId].toLocaleString("en-GB")} views`}><span className="w-1 h-1 rounded-full bg-brand/50" />{formatViewCount(videoViews[videoId], "—")}</div>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6 text-right md:text-left">
                              {isArchived ? (
                                <span className="text-xs md:text-sm font-semibold tracking-wide text-emerald-300">
                                  Archived
                                </span>
                              ) : (
                                <span className="text-xs md:text-sm font-semibold tracking-wide text-brand">
                                  Catalogued
                                </span>
                              )}
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
      </div>
    </main>
  );
}
