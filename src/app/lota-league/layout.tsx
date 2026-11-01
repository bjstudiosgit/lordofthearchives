import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Combined UK Battle Rap Rankings | Lord of the Archives",
  description: "Combined PenGame and Gzone MC rankings, records and league points in the Lord of the Archives table.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/lota-league",
  },
  openGraph: {
    title: "Combined UK Battle Rap Rankings | Lord of the Archives",
    description: "Combined PenGame and Gzone MC rankings, records and league points in the Lord of the Archives table.",
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
    title: "Combined UK Battle Rap Rankings | Lord of the Archives",
    description: "Combined PenGame and Gzone MC rankings, records and league points in the Lord of the Archives table.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

export default function LotaLeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
