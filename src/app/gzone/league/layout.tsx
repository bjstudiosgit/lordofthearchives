import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gzone League Table | Lord of the Archives",
  description: "Gzone Season 1 league standings, battle records, rankings and points.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/gzone/league",
  },
  openGraph: {
    title: "Gzone League Table | Lord of the Archives",
    description: "Gzone Season 1 league standings, battle records, rankings and points.",
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
    title: "Gzone League Table | Lord of the Archives",
    description: "Gzone Season 1 league standings, battle records, rankings and points.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

export default function GzoneLeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
