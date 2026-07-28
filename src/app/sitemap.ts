import type { MetadataRoute } from "next";
import { getBattleHref, pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { allMcs, hasIndexableMcProfile } from "../data/mcs";
import { hasCompletedBattleAnalysis } from "../data/battleTypes";

const SITE_URL = "https://www.lordofthearchives.co.uk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  const getLastModified = (date?: string | null) => {
    if (!date) return currentDate;

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime()) || parsedDate > currentDate) {
      return currentDate;
    }

    return parsedDate;
  };

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/pengame`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/league`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/gzone`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/gzone/league`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/lord-of-the-mics`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/lota-league`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/peoples-vote`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/mcs`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/hosts-judges`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    ...['about', 'methodology', 'sources', 'corrections', 'contact', 'privacy', 'terms'].map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  const battlePages: MetadataRoute.Sitemap = [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]
    .filter(hasCompletedBattleAnalysis)
    .map((battle) => ({
      url: `${SITE_URL}${getBattleHref(battle)}`,
      lastModified: getLastModified(battle.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const mcPages: MetadataRoute.Sitemap = allMcs
    .filter(hasIndexableMcProfile)
    .map((mc) => ({
      url: `${SITE_URL}/mc/${mc.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  return [...new Map(
    [...staticPages, ...battlePages, ...mcPages].map((entry) => [entry.url, entry]),
  ).values()];
}
