import { motion } from "motion/react";
import LeagueTable from "../components/LeagueTable";
import { mcs } from "../data/mcs";
import { battles } from "../data/battles";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function PengameLeague() {
  const pengameBattles = battles.filter(b => b.theme?.toLowerCase() === 'pengame');
  const releasedBattles = pengameBattles.filter(b => !b.isUnreleased);

  // Derive MC IDs from the battles to ensure completeness
  const mcIdsInContext = Array.from(new Set(
    releasedBattles.flatMap(b => [b.mc1, b.mc2, b.mc3, b.mc4].filter(id => id))
  ));

  const calculatedRankings = mcIdsInContext.map(mcId => {
    const mcInfo = mcs.find(m => m.id === mcId);
    const mcBattles = releasedBattles.filter(b => 
      b.mc1 === mcId || b.mc2 === mcId || b.mc3 === mcId || b.mc4 === mcId
    );
    
    const wins = mcBattles.filter(b => b.winner === mcId || b.winner2 === mcId).length;
    const draws = mcBattles.filter(b => !b.winner && !b.winner2).length;
    const points = (wins * 4) + draws;

    return {
      id: mcId,
      slug: mcInfo?.slug || mcId,
      name: mcInfo?.name || mcId,
      battles: mcBattles.length,
      wins,
      points,
      image: mcInfo?.image
    };
  })
  .sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.wins !== a.wins) return b.wins - a.wins;
    return b.battles - a.battles;
  });

  const top3 = calculatedRankings
    .slice(0, 3)
    .map((mc, index) => ({
      ...mc,
      rank: index + 1
    }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">PenGame League</h1>
            <h2 className="text-4xl md:text-6xl font-display italic uppercase leading-tight">Official Season <br /><span className="text-brand">Standings</span></h2>
            <p className="text-zinc-400 mt-4 md:mt-6 max-w-xl text-sm md:text-lg leading-relaxed">
              The complete league table for the PenGame era. Covering all battles from Season 1 to current. Points: 4 for a win, 1 for a draw/appearance, and 0 for a loss.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Trophy size={14} className="text-brand" /> Season Top 3
            </h3>
            <div className="grid gap-4">
              {top3.map((mc, index) => (
                <motion.div
                  key={mc.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-4 flex items-center justify-between group hover:border-brand/30 transition-all"
                >
                  <Link 
                    to={`/mc/${mc.slug}`} 
                    aria-label={`View ${mc.name}'s profile`}
                    className="flex items-center gap-4 flex-1"
                  >
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-zinc-800 border ${index === 0 ? 'border-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]' : 'border-white/10'} flex items-center justify-center font-bold text-brand text-xl italic overflow-hidden`}>
                        {mc.image ? (
                          <img src={mc.image} alt={mc.name} className="w-full h-full object-cover" />
                        ) : (
                          mc.name[0]
                        )}
                      </div>
                      <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border ${
                        index === 0 ? 'bg-brand text-black border-brand' : 
                        index === 1 ? 'bg-zinc-400 text-black border-zinc-400' : 
                        'bg-amber-700 text-white border-amber-700'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display italic uppercase text-lg group-hover:text-brand transition-colors">{mc.name}</h4>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                        {mc.wins} Wins • {mc.battles} Battles
                      </p>
                    </div>
                  </Link>
                  <div className="text-right">
                    <div className="text-2xl font-display italic text-brand">{mc.points}</div>
                    <div className="text-[8px] text-zinc-400 uppercase tracking-widest font-bold">Points</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <LeagueTable theme="pengame" showTitle={false} />
      </div>
    </motion.div>
  );
}
