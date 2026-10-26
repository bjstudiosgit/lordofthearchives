import Link from "next/link";
import { getLotaLeagueStandings } from "../../../data/leaderboards";

export const metadata = {
  title: "Prizefighter League | Lord of the Archives",
  description: "Prizefighter MC appearances and recorded results across the Classic and Ozone eras.",
};

export default function PrizefighterLeaguePage() {
  const standings = getLotaLeagueStandings("prizefighter")
    .sort((a, b) => b.points - a.points || b.battles - a.battles || a.name.localeCompare(b.name));
  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/prizefighter" className="text-sm text-zinc-400 hover:text-brand">← Back to Prizefighter</Link>
        <h1 className="mt-8 font-display text-4xl uppercase italic md:text-6xl">Prizefighter <span className="text-brand">League</span></h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400">Classic and Ozone appearances, including multi-MC rumbles. Each MC receives one appearance per battle. Results are awaiting entry; only recorded wins earn points.</p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-white/5 bg-zinc-900/20">
          <table className="w-full text-left">
            <thead><tr className="border-b border-white/10">{["MC", "Appearances", "Wins", "Losses", "Unrecorded", "Points"].map((title) => <th key={title} scope="col" className="px-4 py-5 text-xs text-zinc-400">{title}</th>)}</tr></thead>
            <tbody>{standings.map((mc) => <tr key={mc.id} className="border-b border-white/5 last:border-0">
              <th scope="row" className="px-4 py-5"><Link href={`/mc/${mc.slug}`} className="font-display text-lg uppercase italic hover:text-brand">{mc.name}</Link></th>
              {[mc.battles, mc.wins, mc.losses, mc.battles - mc.scoredBattles, mc.points].map((value, index) => <td key={index} className="px-4 py-5 font-mono text-sm">{value}</td>)}
            </tr>)}</tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
