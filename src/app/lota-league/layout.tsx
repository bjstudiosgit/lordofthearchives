import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "LOTA Unified League Table | All-Time UK Rap Battle Standings",
  description:
    "Unified Lord of the Archives league table combining judged results from PenGame and Gzone. Track all-time UK rap battle rankings, points, and win rates.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/lota-league",
  },
  openGraph: {
    title: "LOTA Unified League Table | All-Time UK Rap Battle Standings",
    description:
      "Unified Lord of the Archives league table combining judged results from PenGame and Gzone. Track all-time UK rap battle rankings, points, and win rates.",
    url: "https://www.lordofthearchives.co.uk/lota-league",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Combined UK Battle Rap Rankings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOTA Unified League Table | All-Time UK Rap Battle Standings",
    description:
      "Unified Lord of the Archives league table combining judged results from PenGame and Gzone. Track all-time UK rap battle rankings, points, and win rates.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "LOTA Unified UK Battle Rap League Table",
  description:
    "Unified performance leaderboard combining results from PenGame, Gzone, Talk Is Cheap, and Prizefighter.",
  url: "https://www.lordofthearchives.co.uk/lota-league",
  isPartOf: {
    "@type": "WebSite",
    name: "Lord of the Archives",
    url: "https://www.lordofthearchives.co.uk",
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
      item: "https://www.lordofthearchives.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "LOTA League",
      item: "https://www.lordofthearchives.co.uk/lota-league",
    },
  ],
};

export default function LotaLeagueLayout({ children }: { children: ReactNode }) {
  return (
    <>
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
      {children}
    </>
  );
}
