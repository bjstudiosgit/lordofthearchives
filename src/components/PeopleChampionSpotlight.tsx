import { getPeopleChampionStandings } from "../data/leaderboards";
import PeopleChampionCarousel from "./PeopleChampionCarousel";

export default function PeopleChampionSpotlight() {
  return <PeopleChampionCarousel leaders={getPeopleChampionStandings().slice(0, 4)} />;
}
