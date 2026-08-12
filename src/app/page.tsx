import type { Metadata } from "next";
import IntroVideo from "../components/IntroVideo";
import LotaLeagueSpotlight from "../components/LotaLeagueSpotlight";
import PeopleChampionSpotlight from "../components/PeopleChampionSpotlight";
import RecentBattles from "../components/RecentBattles";

export const metadata: Metadata = {
  title: "UK Rap Battle Archive | Lord of the Archives",
  description:
    "Explore UK rap battle history across PenGame, Gzone and Lord of the Mics, with clash analysis, MC profiles and league rankings.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/",
  },
};

export default function HomePage() {
  return (
    <main>
      <IntroVideo />
      <PeopleChampionSpotlight />
      <LotaLeagueSpotlight />
      <RecentBattles />
    </main>
  );
}
