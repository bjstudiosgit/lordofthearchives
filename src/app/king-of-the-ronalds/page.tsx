import Link from "next/link";
import React from "react";
import { Calendar, Play, Trophy, Users, ExternalLink, ShieldCheck, Video, Info } from "lucide-react";
import BattleRow from "../talk-is-cheap/BattleRow";
import { formatBattleDate } from "../../data/battleDates";
import { getArchiveMcHref, getArchiveMcName } from "../../data/archiveMcProfiles";
import { kingOfTheRonaldsBattles, type KingOfTheRonaldsBattle } from "../../data/kingOfTheRonalds";

const SITE_URL = "https://www.lordofthearchives.co.uk";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "King of the Ronalds Rap Battle Archive | KOTR",
  description:
    "Explore 271 King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D, Kinell and Mac Sherry.",
  alternates: { canonical: `${SITE_URL}/king-of-the-ronalds` },
  openGraph: {
    title: "King of the Ronalds Rap Battle Archive | Lord of the Archives",
    description:
      "Explore 271 King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D, Kinell and Mac Sherry.",
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
    title: "King of the Ronalds Rap Battle Archive | Lord of the Archives",
    description:
      "Explore 271 King of the Ronalds (KOTR) battles from 2014–2020 featuring Bowski, Micky Worthless, Hulk, Pedro, Oshea, Tony D, Kinell and Mac Sherry.",
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

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-zinc-900/40 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
        {icon}
      </div>
      <div>
        <p className="font-display text-xl uppercase italic text-white leading-none">{value}</p>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">{label}</p>
      </div>
    </div>
  );
}

export default function KingOfTheRonaldsPage() {
  const battles = kingOfTheRonaldsBattles;
  const withVideo = battles.filter((b) => b.videoId);

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
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand">Battle League Archive</p>
            <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
              King of the <span className="text-brand">Ronalds</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              The unfiltered UK battle rap league (KOTR) run from 2014 to 2020. Chronicling legendary clashes,
              humour, grudge matches and iconic performances from Bowski, Micky Worthless, Hulk, Pedro, Oshea,
              Tony D, Kinell, Bard, Mac Sherry and the whole KOTR roster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:w-auto">
            <StatCard icon={<Trophy size={16} />} label="Total Clashes" value={battles.length.toString()} />
            <StatCard icon={<Video size={16} />} label="Videos Live" value={withVideo.length.toString()} />
            <StatCard icon={<Users size={16} />} label="Roster MCs" value="168" />
            <StatCard icon={<Calendar size={16} />} label="Era" value="2014–20" />
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
        <div className="space-y-6">
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
