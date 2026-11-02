import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "Gzone League Table | Grime Reload Standings & Points",
  description:
    "Official Gzone Season 1 grime battle league table. Track 140 BPM reload points, fight records, win streaks, and live standings from Peacock Gym Canning Town.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/gzone/league",
  },
  openGraph: {
    title: "Gzone League Table | Grime Reload Standings & Points",
    description:
      "Official Gzone Season 1 grime battle league table. Track 140 BPM reload points, fight records, win streaks, and live standings from Peacock Gym Canning Town.",
    url: "https://www.lordofthearchives.co.uk/gzone/league",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Gzone League Table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gzone League Table | Grime Reload Standings & Points",
    description:
      "Official Gzone Season 1 grime battle league table. Track 140 BPM reload points, fight records, win streaks, and live standings from Peacock Gym Canning Town.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gzone League Table & Grime Standings",
  description:
    "Official Gzone battle league table tracking 140 BPM grime reload points, fighter records and live standings.",
  url: "https://www.lordofthearchives.co.uk/gzone/league",
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
      name: "Gzone League",
      item: "https://www.lordofthearchives.co.uk/gzone/league",
    },
  ],
};

export default function GzoneLeagueLayout({ children }: { children: ReactNode }) {
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
