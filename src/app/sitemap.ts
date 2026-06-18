import type { MetadataRoute } from "next";
import { getBattleHref, pengameBattles } from "../data/battles";
import { creditPeople } from "../data/credits";
import { pengameMcs } from "../data/mcs";

const SITE_URL = "https://www.lordofthearchives.co.uk";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/` },
    { url: `${SITE_URL}/pengame` },
    { url: `${SITE_URL}/league` },
    { url: `${SITE_URL}/mcs` },
    { url: `${SITE_URL}/hosts-judges` },
  ];

  const battlePages: MetadataRoute.Sitemap = pengameBattles.map((battle) => ({
    url: `${SITE_URL}${getBattleHref(battle)}`,
  }));

  const mcPages: MetadataRoute.Sitemap = pengameMcs.map((mc) => ({
    url: `${SITE_URL}/mc/${mc.slug}`,
  }));

  const creditPages: MetadataRoute.Sitemap = creditPeople.map((person) => ({
    url: `${SITE_URL}/hosts-judges/${person.slug}`,
  }));

  return [...new Map(
    [...staticPages, ...battlePages, ...mcPages, ...creditPages].map((entry) => [entry.url, entry]),
  ).values()];
}
