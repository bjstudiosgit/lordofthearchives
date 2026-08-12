import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  findBattleByRouteSlug,
  getBattleHref,
  getBattlePageStem,
  getRepeatClashNumber,
  pengameBattles,
} from "../../../data/pengameBattles";
import { gzoneBattles } from "../../../data/gzone";
import { lordOfTheMicsBattles } from "../../../data/lordOfTheMics";
import { allMcs } from "../../../data/mcs";
import { hasCompletedBattleAnalysis } from "../../../data/battleTypes";
import { getBattleMetaDescription } from "../../../data/battleDescriptions";
import videoMetadataJson from "../../../data/videoMetadata.json";
import BattleDetailClient from "./BattleDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

type StoredVideoMetadata = {
  uploadDate: string;
  duration: string;
  videoId?: string;
};

const SITE_URL = "https://www.lordofthearchives.co.uk";
const videoMetadata = videoMetadataJson as Record<string, StoredVideoMetadata>;

const getYouTubeId = (url: string | null | undefined) => {
  if (!url) return "";
  const embedMatch = url.match(/embed\/([^?]+)/);
  if (embedMatch) return embedMatch[1];
  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  return shortMatch ? shortMatch[1] : "";
};

const hasTimezone = (dateTime: string) =>
  !Number.isNaN(Date.parse(dateTime)) && /(?:Z|[+-]\d{2}:\d{2})$/.test(dateTime);

const isIsoDuration = (duration: string) =>
  /^PT(?=\d)(?:\d+H)?(?:\d+M)?(?:\d+S)?$/.test(duration);

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const dynamicParams = false;

export async function generateStaticParams() {
  const routeSlugs = new Set<string>();

  [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles].forEach((battle) => {
    if (hasCompletedBattleAnalysis(battle)) {
      routeSlugs.add(getBattlePageStem(battle));
    }
  });

  return [...routeSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const battle = findBattleByRouteSlug(resolvedParams.slug, [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]);
  
  if (!battle || !hasCompletedBattleAnalysis(battle)) {
    return { title: 'Battle Not Found' };
  }
  
  const mc1 = allMcs.find(m => m.id === battle.mc1);
  const mc2 = allMcs.find(m => m.id === battle.mc2);
  const mc3 = battle.mc3 ? allMcs.find(m => m.id === battle.mc3) : undefined;
  const mc4 = battle.mc4 ? allMcs.find(m => m.id === battle.mc4) : undefined;
  
  const sourceVideoId = getYouTubeId(battle.videoUrl);
  const videoId = videoMetadata[sourceVideoId]?.videoId ?? sourceVideoId;
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` 
    : `https://picsum.photos/seed/${battle.id}/1280/720`;
  
  const team1Name = [mc1?.name ?? battle.mc1, mc3?.name].filter(Boolean).join(" & ");
  const team2Name = [mc2?.name ?? battle.mc2, mc4?.name].filter(Boolean).join(" & ");
  const leagueName = battle.theme === "gzone" ? "Gzone" : battle.theme === "lotm" ? "Lord of the Mics" : "PenGame";
  const repeatClashNumber = getRepeatClashNumber(battle);
  const repeatLabel = repeatClashNumber ? ` #${repeatClashNumber}` : "";
  const title = `${team1Name} vs ${team2Name}${repeatLabel} | ${leagueName} Battle`;
  const description = getBattleMetaDescription({ battle, repeatClashNumber, team1Name, team2Name });
  const battleUrl = `${SITE_URL}${getBattleHref(battle)}`;

  return {
    title,
    description,
    alternates: {
      canonical: battleUrl,
    },
    openGraph: {
      title,
      description,
      url: battleUrl,
      type: 'video.other',
      images: [
        {
          url: thumbnailUrl,
          width: 1280,
          height: 720,
          alt: `${title} Thumbnail`,
        },
      ],
    },
  };
}

export default async function BattlePage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const battle = findBattleByRouteSlug(resolvedParams.slug, [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]);
  
  if (!battle || !hasCompletedBattleAnalysis(battle)) {
    notFound();
  }

  const mc1 = allMcs.find(m => m.id === battle.mc1);
  const mc2 = allMcs.find(m => m.id === battle.mc2);
  const mc3 = battle.mc3 ? allMcs.find(m => m.id === battle.mc3) : undefined;
  const mc4 = battle.mc4 ? allMcs.find(m => m.id === battle.mc4) : undefined;
  const team1Name = [mc1?.name ?? battle.mc1, mc3?.name].filter(Boolean).join(" & ");
  const team2Name = [mc2?.name ?? battle.mc2, mc4?.name].filter(Boolean).join(" & ");
  const repeatClashNumber = getRepeatClashNumber(battle);
  const repeatLabel = repeatClashNumber ? ` #${repeatClashNumber}` : "";
  const battleName = `${team1Name} vs ${team2Name}${repeatLabel}`;
  const battleUrl = `${SITE_URL}${getBattleHref(battle)}`;
  const archiveName = battle.theme === "gzone"
    ? "Gzone Battles"
    : battle.theme === "lotm"
      ? "Lord of the Mics"
      : "PenGame Battles";
  const archiveHref = battle.theme === "gzone"
    ? "/gzone"
    : battle.theme === "lotm"
      ? "/lord-of-the-mics"
      : "/pengame";

  const sourceVideoId = getYouTubeId(battle.videoUrl);
  const storedVideoMetadata = sourceVideoId ? videoMetadata[sourceVideoId] : undefined;
  const videoId = storedVideoMetadata?.videoId ?? sourceVideoId;
  const uploadDate = storedVideoMetadata && hasTimezone(storedVideoMetadata.uploadDate)
    ? storedVideoMetadata.uploadDate
    : undefined;
  const videoStructuredData = videoId && uploadDate
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: `${battleName} Rap Battle`,
        description: getBattleMetaDescription({
          battle,
          repeatClashNumber,
          team1Name,
          team2Name,
        }),
        thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        uploadDate,
        ...(storedVideoMetadata && isIsoDuration(storedVideoMetadata.duration)
          ? { duration: storedVideoMetadata.duration }
          : {}),
        contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
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
        name: archiveName,
        item: `${SITE_URL}${archiveHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: battleName,
        item: battleUrl,
      },
    ],
  };

  return (
    <>
      {videoStructuredData && (
        <script
          id="video-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeStructuredData(videoStructuredData),
          }}
        />
      )}
      <script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(breadcrumbStructuredData),
        }}
      />
      <BattleDetailClient
        slug={battle.slug}
        videoIdOverride={videoId !== sourceVideoId ? videoId : undefined}
      />
    </>
  );
}
