import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { allMcs, hasIndexableMcProfile } from "../../../data/mcs";
import McDetailClient from "./McDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

const SITE_URL = "https://www.lordofthearchives.co.uk";

export async function generateStaticParams() {
  return allMcs.map((mc) => ({ slug: mc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const mc = allMcs.find((candidate) => candidate.slug === resolvedParams.slug);

  if (!mc) {
    return { title: "MC Not Found" };
  }

  const url = `${SITE_URL}/mc/${mc.slug}`;
  const title = `${mc.name} Lord of the Archives MC Profile`;
  const hasProfileImage = existsSync(join(process.cwd(), "public", mc.image.replace(/^\//, "")));

  return {
    title,
    description: mc.bio,
    alternates: {
      canonical: url,
    },
    robots: hasIndexableMcProfile(mc)
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title,
      description: mc.bio,
      url,
      ...(hasProfileImage
        ? {
            images: [
              {
                url: `${SITE_URL}${mc.image}`,
                alt: `${mc.name} profile image`,
              },
            ],
          }
        : {}),
    },
  };
}

export default async function McPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const mc = allMcs.find((candidate) => candidate.slug === resolvedParams.slug);

  if (!mc) {
    notFound();
  }

  return <McDetailClient slug={resolvedParams.slug} />;
}

