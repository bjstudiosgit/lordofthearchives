import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import React from "react";
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Play, ShieldCheck, Trophy, Users } from "lucide-react";
import YouTubeFacade from "../../../components/YouTubeFacade";
import { formatBattleDate } from "../../../data/battleDates";
import { getArchiveMcHref, getArchiveMcName } from "../../../data/archiveMcProfiles";
import { clashMoneyBattles, clashMoneyRedirects, getClashMoneyBattleBySlug, getClashMoneyMcHref } from "../../../data/clashMoney";

const SITE_URL = "https://www.lordofthearchives.co.uk";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...clashMoneyBattles.map(({ slug }) => ({ slug })),
    ...Object.keys(clashMoneyRedirects).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (clashMoneyRedirects[slug]) {
    return { alternates: { canonical: `${SITE_URL}/clash-money/${clashMoneyRedirects[slug]}` } };
  }
  const battle = getClashMoneyBattleBySlug(slug);
  if (!battle) return { title: "Battle Not Found" };

  const battleUrl = `${SITE_URL}/clash-money/${slug}`;
  const title = `${battle.mc1} vs ${battle.mc2} | Clash Money Battle`;
  const description = `Watch ${battle.mc1} vs ${battle.mc2} from Clash Money ${battle.series} (${formatBattleDate(battle.releaseDate)}). Battle recording, MC profiles and archive details.`;
  const thumbnailUrl = `https://img.youtube.com/vi/${battle.videoId}/maxresdefault.jpg`;

  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: battleUrl },
    openGraph: {
      title,
      description,
      url: battleUrl,
      type: "video.other",
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
            href={getClashMoneyMcHref(part)}
            className="hover:text-brand hover:underline underline-offset-4 transition-colors font-bold"
          >
            {getArchiveMcName(part)}
          </Link>
        </React.Fragment>
      ))}
    </span>
  );
}

export default async function ClashMoneyBattlePage({ params }: Props) {
  const { slug } = await params;
  if (clashMoneyRedirects[slug]) {
    permanentRedirect(`/clash-money/${clashMoneyRedirects[slug]}`);
  }
  const battle = getClashMoneyBattleBySlug(slug);
  if (!battle) notFound();

  const seriesBattles = clashMoneyBattles.filter((b) => b.series === battle.series);
  const index = seriesBattles.findIndex((b) => b.slug === slug);
  const previous = seriesBattles[index - 1];
  const next = seriesBattles[index + 1];

  const battleUrl = `${SITE_URL}/clash-money/${slug}`;
  const battleTitle = `${battle.mc1} vs ${battle.mc2}`;
  const description = `Watch ${battle.mc1} vs ${battle.mc2} from Clash Money ${battle.series} (${formatBattleDate(battle.releaseDate)}). Battle recording, MC profiles and archive details.`;

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${battleTitle} Rap Battle`,
    description,
    thumbnailUrl: `https://img.youtube.com/vi/${battle.videoId}/maxresdefault.jpg`,
    uploadDate: `${battle.releaseDate}T12:00:00Z`,
    contentUrl: `https://www.youtube.com/watch?v=${battle.videoId}`,
    embedUrl: `https://www.youtube.com/embed/${battle.videoId}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(videoStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(breadcrumbStructuredData),
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/clash-money#${battle.series.toLowerCase()}`}
          className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} /> Back to Clash Money
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Column */}
          <div className="space-y-12 lg:col-span-2">
            <div>
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Clash Money · {battle.series === "Main" ? "Main Stage" : "Trials"}
              </p>
              <h1 className="text-center font-display text-4xl uppercase italic leading-tight sm:text-5xl md:text-7xl">
                {battle.mc1} <span className="text-brand">VS</span> {battle.mc2}
              </h1>
              <p className="mt-4 text-center text-sm text-zinc-400 md:text-base">
                Uploaded {formatBattleDate(battle.releaseDate)}
                {battle.eventDate && ` · Event held ${formatBattleDate(battle.eventDate)}`}
              </p>

              {/* YouTube Video Embed */}
              <section aria-label="Battle recording" className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                <YouTubeFacade videoId={battle.videoId} title={`${battleTitle} — Clash Money`} />
              </section>
            </div>

            {/* Navigation Between Battles */}
            <nav aria-label="Adjacent battles" className="flex items-center justify-between border-t border-white/10 pt-6">
              {previous ? (
                <Link
                  href={`/clash-money/${previous.slug}`}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-brand"
                >
                  <ArrowLeft size={14} /> Previous: {previous.mc1} vs {previous.mc2}
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/clash-money/${next.slug}`}
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
                  <dd className="mt-1 font-semibold text-zinc-100">Clash Money</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Series Division</dt>
                  <dd className="mt-1 font-semibold text-zinc-100">
                    {battle.series === "Main" ? "Main Stage Battle" : "Clash Money Trials"}
                  </dd>
                </div>
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
                {battle.eventDate && (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Verified Event Date</dt>
                    <dd className="mt-1 font-semibold text-brand flex items-center gap-1.5">
                      <ShieldCheck size={14} /> {formatBattleDate(battle.eventDate)}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">Status</dt>
                  <dd className="mt-1 font-semibold text-brand">Catalogued</dd>
                </div>
                {battle.sourceUrl && (
                  <div className="border-t border-white/5 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Source Record</dt>
                    <dd className="mt-1">
                      <a
                        href={battle.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-brand hover:underline"
                      >
                        Rap Verdict Battle Entry <ExternalLink size={12} />
                      </a>
                    </dd>
                  </div>
                )}
                {battle.verificationNote && (
                  <div className="border-t border-white/5 pt-4">
                    <dt className="text-xs uppercase tracking-wider text-zinc-500">Verification Note</dt>
                    <dd className="mt-1 text-xs text-zinc-400 leading-relaxed">{battle.verificationNote}</dd>
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
