import type { Metadata } from "next";
import IntroVideo from "../components/IntroVideo";
import LotaLeagueSpotlight from "../components/LotaLeagueSpotlight";
import PeopleChampionSpotlight from "../components/PeopleChampionSpotlight";

export const metadata: Metadata = {
  title: {
    absolute: "UK Rap Battle Archive | Results, History & Stats | LOTA",
  },
  description:
    "Explore the definitive UK rap battle archive. Search 873 indexed clashes, 540+ MC combat records, verified league tables, and video archives across 7 eras.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/",
  },
  openGraph: {
    title: "UK Rap Battle Archive | Results, History & Stats | Lord of the Archives",
    description:
      "Explore the definitive UK rap battle archive. Search 873 indexed clashes, 540+ MC combat records, verified league tables, and video archives across 7 eras.",
    url: "https://www.lordofthearchives.co.uk/",
    siteName: "Lord of the Archives",
    type: "website",
    images: [
      {
        url: "https://www.lordofthearchives.co.uk/hero-archives-emblem.png",
        width: 1200,
        height: 630,
        alt: "Lord of the Archives - UK Rap Battle Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Rap Battle Archive | Results, History & Stats | Lord of the Archives",
    description:
      "Explore the definitive UK rap battle archive. Search 873 indexed clashes, 540+ MC combat records, verified league tables, and video archives across 7 eras.",
    images: ["https://www.lordofthearchives.co.uk/hero-archives-emblem.png"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.lordofthearchives.co.uk/#collection",
      "url": "https://www.lordofthearchives.co.uk/",
      "name": "UK Rap Battle Archive & Statistics",
      "description":
        "The definitive historical record of UK rap battle culture spanning 873 indexed battles, 540+ MC profiles, and official league tables.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.lordofthearchives.co.uk/#website",
      },
      "about": [
        { "@type": "Thing", "name": "UK Battle Rap" },
        { "@type": "Thing", "name": "Grime Clashes" },
        { "@type": "Thing", "name": "PenGame" },
        { "@type": "Thing", "name": "Lord of the Mics" },
        { "@type": "Thing", "name": "Gzone" },
        { "@type": "Thing", "name": "King of the Ronalds" },
        { "@type": "Thing", "name": "Prizefighter" },
        { "@type": "Thing", "name": "Talk Is Cheap" },
        { "@type": "Thing", "name": "Clash Money" },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <IntroVideo />
      <PeopleChampionSpotlight />
      <LotaLeagueSpotlight />
    </main>
  );
}
