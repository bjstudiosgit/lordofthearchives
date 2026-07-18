import IntroVideo from "../components/IntroVideo";
import LotaLeagueSpotlight from "../components/LotaLeagueSpotlight";
import PeopleChampionSpotlight from "../components/PeopleChampionSpotlight";
import RecentBattles from "../components/RecentBattles";

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
