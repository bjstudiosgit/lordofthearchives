import { motion } from "motion/react";
import LeagueTable from "../components/LeagueTable";
import { mcs } from "../data/mcs";
import { battles } from "../data/battles";
import { Link } from "react-router-dom";
import { Trophy, Medal } from "lucide-react";

export default function League() {
  const calculatedRankings = mcs
    .filter(mc => mc.id !== 'ldn-mikez')
    .map(mc => {
      const mcBattles = battles.filter(b => 
        b.mc1 === mc.id || b.mc2 === mc.id || b.mc3 === mc.id || b.mc4 === mc.id
      );
      const releasedBattles = mcBattles.filter(b => !b.isUnreleased);
      const wins = releasedBattles.filter(b => b.winner === mc.id || b.winner2 === mc.id).length;
      const draws = releasedBattles.filter(b => !b.winner && !b.winner2).length;
      const points = (wins * 4) + draws;

      return {
        ...mc,
        wins,
        battles: releasedBattles.length,
        points
      };
    })
    .sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.wins !== a.wins) return b.wins - a.wins;
      return b.battles - a.battles;
    });

  const rankings = calculatedRankings
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
            <h1 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">Official Rankings</h1>
            <h2 className="text-4xl md:text-6xl font-display italic uppercase leading-tight">LOTA Battle <br /><span className="text-brand">League</span></h2>
            <p className="text-zinc-400 mt-4 md:mt-6 max-w-xl text-sm md:text-lg leading-relaxed">
              The definitive leaderboard for the Lord of the Archives. Points: 4 for a win, 1 for a draw/appearance, and 0 for a loss.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Trophy size={14} className="text-brand" /> Current Top 3
            </h3>
            <div className="grid gap-4">
              {rankings.map((mc, index) => (
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
                      <div className={`w-12 h-12 rounded-xl bg-zinc-800 border ${index === 0 ? 'border-brand shadow-[0_0_15px_rgba(242,125,38,0.2)]' : 'border-white/10'} flex items-center justify-center font-bold text-brand text-xl italic`}>
                        {mc.name[0]}
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
        
        <LeagueTable showTitle={false} />
      </div>
    </motion.div>
  );
}
