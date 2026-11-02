import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "PenGame Rap Battle Archive | Clashes, Results & Videos",
  description:
    "Explore over 450 judged UK rap battles from PenGame. Access official judge decisions, match videos, divisional fixtures, and competitor fight records.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/pengame",
  },
  openGraph: {
    title: "PenGame Rap Battle Archive | Clashes, Results & Videos",
    description:
      "Explore over 450 judged UK rap battles from PenGame. Access official judge decisions, match videos, divisional fixtures, and competitor fight records.",
    url: "https://www.lordofthearchives.co.uk/pengame",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "PenGame Battle Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PenGame Rap Battle Archive | Clashes, Results & Videos",
    description:
      "Explore over 450 judged UK rap battles from PenGame. Access official judge decisions, match videos, divisional fixtures, and competitor fight records.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "PenGame Rap Battle Archive",
  description:
    "Explore over 450 judged UK rap battles from PenGame with official decisions, scorecards and fighter records.",
  url: "https://www.lordofthearchives.co.uk/pengame",
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
      name: "PenGame",
      item: "https://www.lordofthearchives.co.uk/pengame",
    },
  ],
};

export default function PenGameLayout({ children }: { children: ReactNode }) {
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
