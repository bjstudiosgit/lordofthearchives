import { dontFlopBattles } from "../../data/dontFlop";
import BattleCatalogue from "./BattleCatalogue";
export const metadata = {
  title: "Don't Flop Rap Battles | Lord of the Archives",
  description: "Browse Don't Flop rap battles, watch the recordings and explore MC battle histories.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/dont-flop" },
};
export default function DontFlopPage() {
  return <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand">The eighth league</p>
      <h1 className="font-display text-5xl uppercase italic md:text-7xl">Don’t Flop <span className="text-brand">Rap Battles</span></h1>
      <p className="mt-5 max-w-3xl leading-relaxed text-zinc-300">Explore {dontFlopBattles.length.toLocaleString("en-GB")} catalogued battles from Don’t Flop, with individual video pages and linked MC histories. Search for a matchup, revisit a favourite or discover an unfamiliar name.</p>
      <p className="mt-3 max-w-3xl text-sm text-zinc-500">Dates, events and results are shown only where recorded. Unverified results do not count as wins or losses.</p>
      <BattleCatalogue battles={dontFlopBattles} />
    </div>
  </main>;
}
