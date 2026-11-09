import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Calendar, Play, Trophy, ExternalLink, ShieldCheck } from "lucide-react";
import BattleRow from "../talk-is-cheap/BattleRow";
import { formatBattleDate } from "../../data/battleDates";
import { getArchiveMcName } from "../../data/archiveMcProfiles";
import { clashMoneyBattles, getClashMoneyMcHref, type ClashMoneyBattle } from "../../data/clashMoney";

const SITE_URL = "https://www.lordofthearchives.co.uk";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata = {
  title: "Clash Money Rap Battle Archive | M1 Motorway Wars & 2v2s",
  description:
    "Explore 110 Clash Money battles from the 2015–2016 M1 corridor era. Watch iconic 2v2 wars, The Trials proving ground clashes, and northern lyricist showcases.",
  alternates: { canonical: `${SITE_URL}/clash-money` },
  openGraph: {
    title: "Clash Money Rap Battle Archive | Lord of the Archives",
    description:
      "Explore 110 Clash Money battles (67 Main, 43 Trials) from 2015–2016, with clash recordings, MC profiles and verified event dates.",
    url: `${SITE_URL}/clash-money`,
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/hero-archives-emblem.png`,
        width: 1200,
        height: 630,
        alt: "Clash Money Rap Battle Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clash Money Rap Battle Archive | Lord of the Archives",
    description:
      "Explore 110 Clash Money battles (67 Main, 43 Trials) from 2015–2016, with clash recordings, MC profiles and verified event dates.",
    images: [`${SITE_URL}/hero-archives-emblem.png`],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Clash Money Rap Battle Archive",
  description:
    "Explore 110 Clash Money battles (67 Main, 43 Trials) from 2015–2016, with clash recordings, MC profiles and verified event dates.",
  url: `${SITE_URL}/clash-money`,
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
      name: "Clash Money",
      item: `${SITE_URL}/clash-money`,
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
            href={getClashMoneyMcHref(part)}
            className="hover:text-brand hover:underline underline-offset-4 transition-colors font-semibold"
          >
            {getArchiveMcName(part)}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}
export default function ClashMoneyPage() {
  const mainBattles = clashMoneyBattles.filter((b) => b.series === "Main");
  const trialsBattles = clashMoneyBattles.filter((b) => b.series === "Trials");

  const sections = [
    {
      id: "main",
      title: "Main Stage Battles",
      badge: "Main",
      battles: mainBattles,
      description: "Headline 1v1 and 2v2 clashes featuring Blizzard, Dialect, Bru-C, Unanymous, Oshea, P-Solja, Ty Healy and more.",
    },
    {
      id: "trials",
      title: "Clash Money Trials",
      badge: "Trials",
      battles: trialsBattles,
      description: "Development division showcasing emerging clash MCs and trial tier matchups from 2015 to 2016.",
    },
  ];

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
          <Image src="/assets/leagues/clash-money-logo.png" alt="" width={240} height={240} priority aria-hidden="true" className="h-40 w-40 shrink-0 object-contain md:h-48 md:w-48" />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-4xl uppercase italic leading-none text-white md:text-6xl">
              Clash <span className="text-brand">Money</span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-lg">
              Explore the recovered catalog of 110 Clash Money battles across the Main stage and Trials series (2015–2016),
              featuring original YouTube recordings, linked MC profiles and verified event dates.
            </p>
          </div>
        </div>

        {/* Sections for Main and Trials */}
        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="font-display text-2xl uppercase italic text-white md:text-3xl">
                    {section.title} <span className="text-brand">({section.battles.length})</span>
                  </h2>
                  <p className="mt-1 text-xs text-zinc-400 md:text-sm">{section.description}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs md:text-sm">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-900/40 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-zinc-400">
                        <th className="px-3 py-4 md:px-6">#</th>
                        <th className="px-3 py-4 md:px-6">Matchup</th>
                        <th className="hidden px-3 py-4 md:table-cell md:px-6">Date</th>
                        <th className="px-3 py-4 text-right md:px-6 md:text-left">Status</th>
                        <th className="px-3 py-4 text-right md:px-6">Video</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {section.battles.map((battle, index) => (
                        <BattleRow key={battle.id} href={`/clash-money/${battle.slug}`}>
                          <td className="px-3 py-4 font-mono text-[10px] text-zinc-500 md:px-6 md:text-xs">
                            {index + 1}
                          </td>
                          <td className="px-3 py-4 md:px-6">
                            <div className="flex flex-wrap items-center gap-1.5 md:gap-2.5 text-zinc-100">
                              <McTeamLink name={battle.mc1} />
                              <Link
                                href={`/clash-money/${battle.slug}`}
                                className="font-display italic text-zinc-400 hover:text-brand transition-colors text-xs md:text-sm font-bold"
                              >
                                VS
                              </Link>
                              <McTeamLink name={battle.mc2} />
                            </div>
                          </td>
                          <td className="hidden px-3 py-4 text-xs text-zinc-400 md:table-cell md:px-6">
                            <span className="inline-flex items-center gap-2">
                              <Calendar size={13} className="text-zinc-600" />
                              {formatBattleDate(battle.releaseDate)}
                            </span>
                          </td>
                          <td className="px-3 py-4 text-right md:px-6 md:text-left">
                            <span className="text-xs md:text-sm font-semibold tracking-wide text-brand">
                              Catalogued
                            </span>
                          </td>
                          <td className="px-3 py-4 text-right md:px-6">
                            <Link
                              href={`/clash-money/${battle.slug}`}
                              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand hover:underline"
                            >
                              <Play size={12} /> Watch
                            </Link>
                          </td>
                        </BattleRow>
                      ))}
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
