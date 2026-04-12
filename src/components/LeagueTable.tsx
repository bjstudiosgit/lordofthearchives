import { Link } from "react-router-dom";
import { mcs } from "../data/mcs";
import { battles } from "../data/battles";

interface LeagueTableProps {
  limit?: number;
  showTitle?: boolean;
}

export default function LeagueTable({ limit, showTitle = true }: LeagueTableProps) {
  const calculatedRankings = mcs.map(mc => {
    const mcBattles = battles.filter(b => b.mc1 === mc.id || b.mc2 === mc.id);
    const releasedBattles = mcBattles.filter(b => !b.isUnreleased);
    
    const wins = releasedBattles.filter(b => b.winner === mc.id).length;
    const losses = releasedBattles.filter(b => b.winner && b.winner !== "" && b.winner !== mc.id).length;
    const points = wins * 3;

    return {
      id: mc.id,
      slug: mc.slug,
      name: mc.name,
      battles: releasedBattles.length,
      wins,
      losses,
      points,
      isDsq: !mc.isActive
    };
  });

  let rankings = calculatedRankings
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      if (a.losses !== b.losses) return a.losses - b.losses;
      return b.battles - a.battles;
    })
    .map((item, index) => ({
      ...item,
      rank: index + 1
    }));

  if (limit) {
    rankings = rankings.slice(0, limit);
  }

  return (
    <section id="league" className="py-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="mb-8">
            <h3 className="text-3xl font-display italic uppercase">League <span className="text-brand">Standings</span></h3>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2">Official PenGame Power Rankings</p>
          </div>
        )}

        <div className="bg-zinc-950 border border-white/10 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-zinc-900/50">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 w-16">Pos</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500">MC Name</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">P</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">W</th>
                  <th className="px-4 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">L</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-500 text-center">Pts</th>
                </tr>
              </thead>
              <tbody>
                {rankings.map((mc) => (
                  <tr 
                    key={mc.id}
                    className={`border-b border-white/5 hover:bg-white/5 transition-colors ${mc.isDsq ? 'opacity-40 grayscale' : ''}`}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-mono text-sm font-bold ${mc.rank <= 3 ? 'text-brand' : 'text-zinc-500'}`}>
                        {mc.rank}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/mc/${mc.slug}`} className="font-bold text-sm uppercase tracking-tight hover:text-brand transition-colors">
                        {mc.name}
                        {mc.isDsq && <span className="ml-2 text-[8px] text-zinc-600 border border-zinc-800 px-1 py-0.5 rounded">DSQ</span>}
                      </Link>
                    </td>
                    <td className="px-4 py-4 text-center font-mono text-sm text-zinc-400">{mc.battles}</td>
                    <td className="px-4 py-4 text-center font-mono text-sm text-zinc-400">{mc.wins}</td>
                    <td className="px-4 py-4 text-center font-mono text-sm text-zinc-400">{mc.losses}</td>
                    <td className="px-6 py-4 text-center font-bold text-sm text-zinc-100">{mc.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {limit && limit < calculatedRankings.length && (
            <div className="p-4 bg-zinc-900/20 text-center border-t border-white/5">
              <Link to="/league" className="text-[10px] text-brand font-black uppercase tracking-[0.2em] hover:text-white transition-colors">
                View Full Table
              </Link>
            </div>
          )}
        </div>
        <div className="mt-4 px-2">
          <p className="text-[9px] text-zinc-600 uppercase tracking-widest font-medium italic">
            * Scoring: Win = 3pts | Loss/Draw = 0pts
          </p>
        </div>
      </div>
    </section>
  );
}
