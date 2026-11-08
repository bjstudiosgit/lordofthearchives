import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { hasIndexableMcProfile } from "../../../data/mcs";
import { allProfileMcs as allMcs } from "../../../data/archiveMcProfiles";
import McDetailClient from "./McDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

const SITE_URL = "https://www.lordofthearchives.co.uk";
const mergedProfileSlugs: Record<string, string> = { tricky: "trickyy", tricksta: "trickyy", swiftzz: "swiftz", flawzz: "flawz", therealrp: "rp", korrupt: "korrupt-citizen", "marni-gramz": "grams" };

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export async function generateStaticParams() {
  return [...allMcs.map((mc) => ({ slug: mc.slug })), ...Object.keys(mergedProfileSlugs).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const mc = allMcs.find((candidate) => candidate.slug === resolvedParams.slug);

  if (!mc) {
    return { title: "MC Not Found" };
  }

  const url = `${SITE_URL}/mc/${mc.slug}`;
  const title = `${mc.name} MC Profile, Battle Record & Results`;
  const hasProfileImage = existsSync(join(process.cwd(), "public", mc.image.replace(/^\//, "")));
  const imageUrl = hasProfileImage ? `${SITE_URL}${mc.image}` : `${SITE_URL}/hero-archives-emblem.png`;

  return {
    title,
    description: `Explore ${mc.name}’s battle record, results and appearances across the Lord of the Archives.`,
    alternates: {
      canonical: url,
    },
    robots: hasIndexableMcProfile(mc)
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title,
      description: `Explore ${mc.name}’s battle record, results and appearances across the Lord of the Archives.`,
      url,
      images: [
        {
          url: imageUrl,
          width: hasProfileImage ? 800 : 1200,
          height: hasProfileImage ? 800 : 630,
          alt: `${mc.name} profile image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: `Explore ${mc.name}’s battle record, results and appearances across the Lord of the Archives.`,
      images: [imageUrl],
    },
  };
}

export default async function McPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  if (mergedProfileSlugs[resolvedParams.slug]) permanentRedirect(`/mc/${mergedProfileSlugs[resolvedParams.slug]}`);
  const mc = allMcs.find((candidate) => candidate.slug === resolvedParams.slug);

  if (!mc) {
    notFound();
  }

  const hasProfileImage = existsSync(join(process.cwd(), "public", mc.image.replace(/^\//, "")));
  const profileImageUrl = hasProfileImage ? `${SITE_URL}${mc.image}` : `${SITE_URL}/hero-archives-emblem.png`;

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01T00:00:00Z",
    mainEntity: {
      "@type": "Person",
      name: mc.name,
      ...(mc.nickname ? { alternateName: mc.nickname } : {}),
      description: `Explore ${mc.name}’s battle record, results and appearances across the Lord of the Archives.`,
      image: profileImageUrl,
      url: `${SITE_URL}/mc/${mc.slug}`,
      knowsAbout: ["Grime", "Battle Rap", "UK Rap"],
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
        name: "MC Directory",
        item: `${SITE_URL}/mcs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: mc.name,
        item: `${SITE_URL}/mc/${mc.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(personStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(breadcrumbStructuredData),
        }}
      />
      <McDetailClient slug={resolvedParams.slug} />
    </>
  );
}

