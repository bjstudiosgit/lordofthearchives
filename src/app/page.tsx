import type { Metadata } from "next";
import IntroVideo from "../components/IntroVideo";
import LotaLeagueSpotlight from "../components/LotaLeagueSpotlight";
import PeopleChampionSpotlight from "../components/PeopleChampionSpotlight";

export const metadata: Metadata = {
  title: "UK Rap Battle Archive | Lord of the Archives",
  description:
    "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap, Prizefighter and Clash Money, with clash analysis, MC profiles and league rankings.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/",
  },
  openGraph: {
    title: "UK Rap Battle Archive | Lord of the Archives",
    description:
      "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap, Prizefighter and Clash Money, with clash analysis, MC profiles and league rankings.",
    url: "https://www.lordofthearchives.co.uk/",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Lord of the Archives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Rap Battle Archive | Lord of the Archives",
    description:
      "Explore UK rap battle history across PenGame, Gzone, Lord of the Mics, Talk Is Cheap, Prizefighter and Clash Money, with clash analysis, MC profiles and league rankings.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

export default function HomePage() {
  return (
    <main>
      <IntroVideo />
      <PeopleChampionSpotlight />
      <LotaLeagueSpotlight />
    </main>
  );
}
