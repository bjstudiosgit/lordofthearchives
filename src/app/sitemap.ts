import type { MetadataRoute } from "next";
import { getBattleHref, pengameBattles } from "../data/pengameBattles";
import { gzoneBattles } from "../data/gzone";
import { lordOfTheMicsBattles } from "../data/lordOfTheMics";
import { allMcs } from "../data/mcs";
import { hasBattlePage } from "../data/battleTypes";
import { getTalkIsCheapBattleSlug, talkIsCheapSeries } from "../data/talkIsCheap";
import { prizefighterBattles } from "../data/prizefighter";
import { clashMoneyBattles } from "../data/clashMoney";
import { kingOfTheRonaldsBattles } from "../data/kingOfTheRonalds";
import { allProfileMcs } from "../data/archiveMcProfiles";

const SITE_URL = "https://www.lordofthearchives.co.uk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const getLastModified = (date?: string | null): Date | undefined => {
    if (!date) return undefined;
    const cleanDate = date.endsWith("-01-01") ? `${date.slice(0, 4)}-06-01` : date;
    const parsedDate = new Date(cleanDate);
    if (Number.isNaN(parsedDate.getTime()) || parsedDate > currentDate) {
      return undefined;
    }
    return parsedDate;
  };

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/pengame`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/league`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/gzone`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/gzone/league`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/lord-of-the-mics`, lastModified: new Date("2026-08-01"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/talk-is-cheap`, lastModified: new Date("2026-10-25"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/prizefighter`, lastModified: new Date("2026-10-25"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/prizefighter/league`, lastModified: new Date("2026-10-25"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/clash-money`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/king-of-the-ronalds`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/lota-league`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/peoples-vote`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/mcs`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/hosts-judges`, lastModified: new Date("2026-08-20"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/property`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/life-of-pen`, lastModified: new Date("2026-11-06"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: new Date("2026-11-02"), changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/news/top-10-most-viewed-uk-rap-battles`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/news/history-of-king-of-the-ronalds`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/news/prizefighter-tournament-format-breakdown`, lastModified: new Date("2026-11-02"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/news/did-pengame-fall-off`, lastModified: new Date("2026-08-21"), changeFrequency: "monthly", priority: 0.8 },
    ...["about", "methodology", "sources", "corrections", "contact", "privacy", "terms"].map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date("2026-06-16"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const battlePages: MetadataRoute.Sitemap = [...pengameBattles, ...gzoneBattles]
    .filter(hasBattlePage)
    .map((battle) => ({
      url: `${SITE_URL}${getBattleHref(battle)}`,
      lastModified: getLastModified(battle.date),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const archiveBattlePages: MetadataRoute.Sitemap = [
    ...lordOfTheMicsBattles.map((battle) => ({
      path: `/lord-of-the-mics/${battle.slug}`,
      date: battle.date,
    })),
    ...talkIsCheapSeries.flatMap((series) =>
      series.battles
        .filter(([, , videoId]) => Boolean(videoId))
        .map(([mc1, mc2]) => {
          const slug = getTalkIsCheapBattleSlug(mc1, mc2);
          return { path: `/talk-is-cheap/${slug}`, date: series.date };
        }),
    ),
    ...prizefighterBattles.map((battle) => ({
      path: `/prizefighter/${battle.slug}`,
      date: battle.releaseDate,
    })),
    ...clashMoneyBattles.map((battle) => ({
      path: `/clash-money/${battle.slug}`,
      date: battle.releaseDate,
    })),
    ...kingOfTheRonaldsBattles.map((battle) => ({
      path: `/king-of-the-ronalds/${battle.slug}`,
      date: battle.releaseDate,
    })),
  ].map(({ path, date }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: getLastModified(date),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const mcPages: MetadataRoute.Sitemap = allProfileMcs.map((mc) => {
    const mcBattles = [...pengameBattles, ...gzoneBattles].filter(
      (b) => b.mc1 === mc.id || b.mc2 === mc.id || b.mc3 === mc.id || b.mc4 === mc.id,
    );
    const latestBattle = mcBattles.sort((a, b) => (b.date || "").localeCompare(a.date || ""))[0];

    return {
      url: `${SITE_URL}/mc/${mc.slug}`,
      lastModified: getLastModified(latestBattle?.date) || new Date("2026-11-01"),
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  return [...new Map(
    [...staticPages, ...battlePages, ...archiveBattlePages, ...mcPages].map((entry) => [entry.url, entry]),
  ).values()];
}
