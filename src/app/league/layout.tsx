import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PenGame League Table | Lord of the Archives",
  description: "PenGame battle league standings, rankings, records and points across the archive.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/league",
  },
  openGraph: {
    title: "PenGame League Table | Lord of the Archives",
    description: "PenGame battle league standings, rankings, records and points across the archive.",
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
    title: "PenGame League Table | Lord of the Archives",
    description: "PenGame battle league standings, rankings, records and points across the archive.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

export default function LeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
