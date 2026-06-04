import type { MetadataRoute } from "next";
import { getBattleHref, pengameBattles } from "../data/battles";
import { pengameMcs } from "../data/mcs";

const SITE_URL = "https://www.lordofthearchives.co.uk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now },
    { url: `${SITE_URL}/pengame/`, lastModified: now },
    { url: `${SITE_URL}/league/`, lastModified: now },
    { url: `${SITE_URL}/mcs/`, lastModified: now },
  ];

  const battlePages: MetadataRoute.Sitemap = pengameBattles.map((battle) => ({
    url: `${SITE_URL}${getBattleHref(battle)}`,
    lastModified: now,
  }));

  const mcPages: MetadataRoute.Sitemap = pengameMcs.map((mc) => ({
    url: `${SITE_URL}/mc/${mc.slug}/`,
    lastModified: now,
  }));

  return [...staticPages, ...battlePages, ...mcPages];
}
