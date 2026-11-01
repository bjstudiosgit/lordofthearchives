import type { Metadata } from "next";
import type { ReactNode } from "react";

const serializeStructuredData = (value: object) =>
  JSON.stringify(value).replace(/</g, "\\u003c");

export const metadata: Metadata = {
  title: "UK Battle Rap MC Profiles | Lord of the Archives",
  description: "Browse MC profiles, battle records, form, statistics and archive history from UK rap battle leagues.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/mcs",
  },
  openGraph: {
    title: "UK Battle Rap MC Profiles | Lord of the Archives",
    description: "Browse MC profiles, battle records, form, statistics and archive history from UK rap battle leagues.",
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
    title: "UK Battle Rap MC Profiles | Lord of the Archives",
    description: "Browse MC profiles, battle records, form, statistics and archive history from UK rap battle leagues.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const collectionStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "UK Battle Rap MC Profiles",
  description: "Browse MC profiles, battle records, form, statistics and archive history from UK rap battle leagues.",
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
      name: "MC Directory",
      item: "https://www.lordofthearchives.co.uk/mcs",
    },
  ],
};

export default function McIndexLayout({ children }: { children: ReactNode }) {
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
