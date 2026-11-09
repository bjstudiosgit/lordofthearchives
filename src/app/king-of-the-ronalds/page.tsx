import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Calendar, Play, Trophy, ExternalLink, ShieldCheck, Info } from "lucide-react";
import BattleRow from "../talk-is-cheap/BattleRow";
import { formatBattleDate } from "../../data/battleDates";
import { getArchiveMcHref, getArchiveMcName } from "../../data/archiveMcProfiles";
import { kingOfTheRonaldsBattles, type KingOfTheRonaldsBattle } from "../../data/kingOfTheRonalds";

const SITE_URL = "https://www.lordofthearchives.co.uk";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "King of the Ronalds Battle Archive | KOTR Clashes & Videos",
  description:
    "Explore 271 unfiltered King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D and the KOTR roster.",
  alternates: { canonical: `${SITE_URL}/king-of-the-ronalds` },
  openGraph: {
    title: "King of the Ronalds Battle Archive | KOTR Clashes & Videos",
    description:
      "Explore 271 unfiltered King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D and the KOTR roster.",
    url: `${SITE_URL}/king-of-the-ronalds`,
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/hero-archives-emblem.png`,
        width: 1200,
        height: 630,
        alt: "King of the Ronalds Rap Battle Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "King of the Ronalds Battle Archive | KOTR Clashes & Videos",
    description:
      "Explore 271 unfiltered King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D and the KOTR roster.",
    images: [`${SITE_URL}/hero-archives-emblem.png`],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "King of the Ronalds Rap Battle Archive",
  description:
    "Explore 271 King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D, Kinell and Mac Sherry.",
  url: `${SITE_URL}/king-of-the-ronalds`,
  isPartOf: {
    "@type": "WebSite",
    name: "Lord of the Archives",
    url: SITE_URL,
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
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "King of the Ronalds",
      item: `${SITE_URL}/king-of-the-ronalds`,
    },
  ],
};

function McTeamLink({ name }: { name: string }) {
  const parts = name.split(" & ");
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      {parts.map((part, i) => (
        <React.Fragment key={part}>
          {i > 0 && <span className="text-zinc-500 font-normal">&</span>}
          <Link
            href={getArchiveMcHref(part)}
            className="hover:text-brand hover:underline underline-offset-4 transition-colors font-semibold"
          >
            {getArchiveMcName(part)}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}

export default function KingOfTheRonaldsPage() {
  const battles = kingOfTheRonaldsBattles;

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white selection:bg-brand selection:text-black">
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
        {/* League Hero Header */}
        <div className="mb-16 flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-12">
          <Image src="/assets/leagues/king-of-the-ronalds-logo.png" alt="" width={240} height={240} priority aria-hidden="true" className="h-40 w-40 shrink-0 object-contain md:h-48 md:w-48" />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl uppercase italic leading-none text-white md:text-6xl">
              King of the <span className="text-brand">Ronalds</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-lg">
              King of the Ronalds (KOTR) remains one of the most culturally iconic and uncompromising underground institutions in British battle rap history. Founded in 2014 by Bowski and Micky Worthless in the cramped, beer-soaked cellar of The Old Red Lion Pub in Islington, North London, KOTR offered a radical, satirical counter-balance to mainstream battle leagues. Operating without censorship or commercial restrictions, the platform became legendary for pitch-black British comedy, explosive personal grudge matches, and unforgettable character performances from cult icons including Hulk, Pedro, Oshea, Tony D, Kinell, Bard, and Mac Sherry. Across 271 cataloged clashes spanning 2014 through 2020, this definitive archive indexes verified matchup outcomes, historical event dates, and surviving video clashes.
            </p>
          </div>
        </div>

        {/* Informational Callout */}
        <div className="mb-10 rounded-2xl border border-white/10 bg-zinc-900/30 p-5 text-xs text-zinc-400">
          <div className="flex items-start gap-3">
            <Info size={16} className="shrink-0 text-brand mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-zinc-200">Historical Index:</strong> Matchup records and release dates are sourced from verified Rap Verdict and VerseTracker battle registers. YouTube video IDs are linked where recovered, with further video links added as full channel exports complete.
            </p>
          </div>
        </div>

        {/* Battles Table */}
        <div id="clashes" className="space-y-6 scroll-mt-32">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="font-display text-2xl uppercase italic text-white md:text-3xl">
              All Clashes <span className="text-brand">({battles.length})</span>
            </h2>
            <p className="text-xs text-zinc-400">Chronological archive from 2014 to 2020</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-white/5 bg-zinc-900/40 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    <th className="px-3 py-4 md:px-6">#</th>
                    <th className="px-3 py-4 md:px-6">Matchup</th>
                    <th className="hidden px-3 py-4 lg:table-cell lg:px-6">Event / Series</th>
                    <th className="hidden px-3 py-4 md:table-cell md:px-6">Date</th>
                    <th className="px-3 py-4 text-right md:px-6 md:text-left">Status</th>
                    <th className="px-3 py-4 text-right md:px-6">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {battles.map((battle, index) => {
                    const hasVideo = Boolean(battle.videoId);
                    return (
                      <BattleRow key={battle.id} href={`/king-of-the-ronalds/${battle.slug}`}>
                        <td className="px-3 py-4 font-mono text-[10px] text-zinc-500 md:px-6 md:text-xs">
                          {index + 1}
                        </td>
                        <td className="px-3 py-4 md:px-6">
                          <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5 text-zinc-100">
                            <McTeamLink name={battle.mc1} />
                            <Link
                              href={`/king-of-the-ronalds/${battle.slug}`}
                              className="font-display italic text-zinc-400 hover:text-brand transition-colors text-xs md:text-sm font-bold"
                            >
                              VS
                            </Link>
                            <McTeamLink name={battle.mc2} />
                          </div>
                        </td>
                        <td className="hidden px-3 py-4 text-xs text-zinc-400 lg:table-cell lg:px-6">
                          {battle.event ? (
                            <span className="text-zinc-300 font-medium">{battle.event}</span>
                          ) : (
                            <span className="text-zinc-600">—</span>
                          )}
                        </td>
                        <td className="hidden px-3 py-4 text-xs text-zinc-400 md:table-cell md:px-6">
                          <span className="inline-flex items-center gap-2">
                            <Calendar size={13} className="text-zinc-600" />
                            {formatBattleDate(battle.releaseDate)}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-right md:px-6 md:text-left">
                          <span className={`text-xs md:text-sm font-semibold tracking-wide ${hasVideo ? "text-emerald-400" : "text-brand"}`}>
                            {hasVideo ? "Archived" : "Catalogued"}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-right md:px-6">
                          <Link
                            href={`/king-of-the-ronalds/${battle.slug}`}
                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand hover:underline"
                          >
                            {hasVideo ? <><Play size={12} /> Watch</> : <>Report</>}
                          </Link>
                        </td>
                      </BattleRow>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
