import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "UK Battle Rap MC Directory | Fighter Dossiers & Stats",
  description:
    "Complete fighter directory for UK rap battle MCs. Explore career combat records, win percentages, head-to-head clash histories, and league rankings.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/mcs",
  },
  openGraph: {
    title: "UK Battle Rap MC Directory | Fighter Dossiers & Stats",
    description:
      "Complete fighter directory for UK rap battle MCs. Explore career combat records, win percentages, head-to-head clash histories, and league rankings.",
    url: "https://www.lordofthearchives.co.uk/mcs",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "UK Battle Rap MC Profiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Battle Rap MC Directory | Fighter Dossiers & Stats",
    description:
      "Complete fighter directory for UK rap battle MCs. Explore career combat records, win percentages, head-to-head clash histories, and league rankings.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "UK Battle Rap MC Directory",
  description:
    "Complete directory of 540+ UK battle rap MCs with verified records, statistics and match history.",
  url: "https://www.lordofthearchives.co.uk/mcs",
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
      name: "Artists",
      item: "https://www.lordofthearchives.co.uk/mcs",
    },
  ],
};

export default function McsLayout({ children }: { children: ReactNode }) {
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
