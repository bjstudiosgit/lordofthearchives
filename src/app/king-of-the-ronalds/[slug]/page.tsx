import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Play, ShieldCheck, Trophy, Users, VideoOff, Info } from "lucide-react";
import YouTubeFacade from "../../../components/YouTubeFacade";
import { formatBattleDate } from "../../../data/battleDates";
import { getArchiveMcHref, getArchiveMcName } from "../../../data/archiveMcProfiles";
import { kingOfTheRonaldsBattles, getKotrBattleBySlug } from "../../../data/kingOfTheRonalds";

const SITE_URL = "https://www.lordofthearchives.co.uk";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return kingOfTheRonaldsBattles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const battle = getKotrBattleBySlug(slug);
  if (!battle) return { title: "Battle Not Found" };

  const battleUrl = `${SITE_URL}/king-of-the-ronalds/${slug}`;
  const title = `${battle.mc1} vs ${battle.mc2} | King of the Ronalds`;
  const description = `King of the Ronalds clash: ${battle.mc1} vs ${battle.mc2}${battle.event ? ` at ${battle.event}` : ""} (${formatBattleDate(battle.releaseDate)}). Battle record, MC profiles and archive details.`;
  const thumbnailUrl = battle.videoId ? `https://img.youtube.com/vi/${battle.videoId}/maxresdefault.jpg` : `${SITE_URL}/hero-archives-emblem.png`;

  return {
    title,
    description,
    alternates: { canonical: battleUrl },
    openGraph: {
      title,
      description,
      url: battleUrl,
      type: battle.videoId ? "video.other" : "website",
      images: [
        {
          url: thumbnailUrl,
          width: 1280,
          height: 720,
          alt: `${title} Thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [thumbnailUrl],
    },
  };
}

function McLinkGroup({ name }: { name: string }) {
  const parts = name.split(" & ");
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      {parts.map((part, index) => (
        <React.Fragment key={part}>
          {index > 0 && <span className="text-zinc-500">&</span>}
          <Link
            href={getArchiveMcHref(part)}
            className="hover:text-brand hover:underline underline-offset-4 transition-colors font-bold"
          >
            {getArchiveMcName(part)}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}

export default async function KotrBattlePage({ params }: Props) {
  const { slug } = await params;
  const battle = getKotrBattleBySlug(slug);
  if (!battle) notFound();

  const battles = kingOfTheRonaldsBattles;
  const index = battles.findIndex((b) => b.slug === slug);
  const previous = battles[index - 1];
  const next = battles[index + 1];

  const battleUrl = `${SITE_URL}/king-of-the-ronalds/${slug}`;
  const battleTitle = `${battle.mc1} vs ${battle.mc2}`;
  const description = `King of the Ronalds clash: ${battle.mc1} vs ${battle.mc2}${battle.event ? ` at ${battle.event}` : ""} (${formatBattleDate(battle.releaseDate)}). Battle record, MC profiles and archive details.`;

  const videoStructuredData = battle.videoId
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `${battleTitle} Rap Battle`,
        description,
        thumbnailUrl: `https://img.youtube.com/vi/${battle.videoId}/maxresdefault.jpg`,
        uploadDate: `${battle.releaseDate}T12:00:00Z`,
        contentUrl: `https://www.youtube.com/watch?v=${battle.videoId}`,
        embedUrl: `https://www.youtube.com/embed/${battle.videoId}`,
      }
    : null;

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
      {
        "@type": "ListItem",
        position: 3,
        name: battleTitle,
        item: battleUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white selection:bg-brand selection:text-black">
      {videoStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(videoStructuredData),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(breadcrumbStructuredData),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/king-of-the-ronalds"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-brand"
          >
            <ArrowLeft size={14} /> Back to King of the Ronalds Archive
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          {/* Main Column */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold text-brand uppercase tracking-wider">
                  King of the Ronalds
                </span>
                {battle.event && (
                  <span className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300">
                    {battle.event}
                  </span>
                )}
                <span className="text-xs text-zinc-500">
                  {formatBattleDate(battle.releaseDate)}
                </span>
              </div>

              <h1 className="mt-4 font-display text-3xl italic uppercase leading-tight sm:text-5xl">
                <McLinkGroup name={battle.mc1} />
                <span className="text-brand mx-3">VS</span>
                <McLinkGroup name={battle.mc2} />
              </h1>

              {/* Video Embed or Recovery Notice */}
              {battle.videoId ? (
                <section aria-label="Battle recording" className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                  <YouTubeFacade videoId={battle.videoId} title={`${battleTitle} — King of the Ronalds`} />
                </section>
              ) : (
                <section aria-label="Battle status notice" className="mt-8 rounded-3xl border border-white/10 bg-zinc-900/40 p-8 sm:p-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <VideoOff size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase italic text-white">Video Recovery Pending</h3>
                  <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-400 leading-relaxed">
                    This clash is an indexed historical fixture from {formatBattleDate(battle.releaseDate)}. The match entry is documented in the archive; direct YouTube channel URL mapping will attach upon completion of the channel video audit.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-2.5 text-xs text-zinc-300">
                    <Info size={14} className="text-brand" /> Sourced from: {battle.sourceEvidence ?? "Rap Verdict / VerseTracker Records"}
                  </div>
                </section>
              )}
            </div>

            {/* Navigation Between Battles */}
            <nav aria-label="Adjacent battles" className="flex items-center justify-between border-t border-white/10 pt-6">
              {previous ? (
                <Link
                  href={`/king-of-the-ronalds/${previous.slug}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-brand"
                >
                  <ArrowLeft size={14} /> Previous: {previous.mc1} vs {previous.mc2}
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/king-of-the-ronalds/${next.slug}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-brand text-right"
                >
                  Next: {next.mc1} vs {next.mc2} <ArrowRight size={14} />
                </Link>
              ) : <div />}
            </nav>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-6 md:p-8">
              <h2 className="font-display text-xl uppercase italic text-white mb-6">Archive Information</h2>
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">League</dt>
                  <dd className="mt-1 font-semibold text-zinc-100">King of the Ronalds (KOTR)</dd>
                </div>
                {battle.event && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Event / Series</dt>
                    <dd className="mt-1 font-semibold text-brand">{battle.event}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">MC 1</dt>
                  <dd className="mt-1">
                    <McLinkGroup name={battle.mc1} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">MC 2</dt>
                  <dd className="mt-1">
                    <McLinkGroup name={battle.mc2} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Release Date</dt>
                  <dd className="mt-1 font-semibold text-zinc-100">{formatBattleDate(battle.releaseDate)}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Status</dt>
                  <dd className={`mt-1 font-semibold ${battle.videoId ? "text-emerald-400" : "text-brand"}`}>
                    {battle.videoId ? "Archived (Video Linked)" : "Catalogued"}
                  </dd>
                </div>
                {battle.sourceEvidence && (
                  <div className="border-t border-white/5 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Source Evidence</dt>
                    <dd className="mt-1 text-xs text-zinc-300">{battle.sourceEvidence}</dd>
                  </div>
                )}
                {battle.notes && (
                  <div className="border-t border-white/5 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Archive Note</dt>
                    <dd className="mt-1 text-xs text-zinc-400 leading-relaxed">{battle.notes}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
