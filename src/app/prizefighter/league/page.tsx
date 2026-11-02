import Link from "next/link";
import { getLotaLeagueStandings } from "../../../data/leaderboards";

export const metadata = {
  title: "Prizefighter League Table | Tournament Standings & Belts",
  description: "Official Prizefighter tournament points table and bracket records. Track Birmingham and Midlands 8-man knockout champions, fight points, and cash purses.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/prizefighter/league" },
};

export default function PrizefighterLeaguePage() {
  const standings = getLotaLeagueStandings("prizefighter")
    .sort((a, b) => b.points - a.points || b.battles - a.battles || a.name.localeCompare(b.name));
  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/prizefighter" className="text-sm text-zinc-400 hover:text-brand">← Back to Prizefighter</Link>
        <h1 className="mt-8 font-display text-4xl uppercase italic md:text-6xl">Prizefighter <span className="text-brand">League</span></h1>
        <p className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-300 font-sans">Official Prizefighter tournament standings tracking fighter performances across the Classic (2011–2015) and Ozone eras. In this sudden-death knockout format, MCs earn 3 points for each verified match win, with appearances logged across 8-man brackets and multi-MC radio rumbles. Consult the full table below or return to the <Link href="/prizefighter" className="text-white font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-brand hover:text-brand transition-colors">Prizefighter Battle Archive</Link> to inspect tournament bracket results.</p>
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
