import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "PenGame League Table | Division Standings & Points",
  description:
    "Official PenGame battle rap league table. Track points, wins, losses, and real-time division standings for Premier, Championship, and Academy MCs.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/league",
  },
  openGraph: {
    title: "PenGame League Table | Division Standings & Points",
    description:
      "Official PenGame battle rap league table. Track points, wins, losses, and real-time division standings for Premier, Championship, and Academy MCs.",
    url: "https://www.lordofthearchives.co.uk/league",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "PenGame League Table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PenGame League Table | Division Standings & Points",
    description:
      "Official PenGame battle rap league table. Track points, wins, losses, and real-time division standings for Premier, Championship, and Academy MCs.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "PenGame League Table & Divisional Standings",
  description:
    "Official PenGame battle rap league table tracking fighter points, wins, losses and promotion standings across tiers.",
  url: "https://www.lordofthearchives.co.uk/league",
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
      name: "PenGame League Table",
      item: "https://www.lordofthearchives.co.uk/league",
    },
  ],
};

export default function LeagueLayout({ children }: { children: ReactNode }) {
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
