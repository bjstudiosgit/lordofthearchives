import React from "react";
import { battles } from "../data/battles";
import { mcs } from "../data/mcs";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Play, Eye, Calendar, Trophy } from "lucide-react";

export default function DungeonBattles() {
  const dungeonBattles = battles.filter(b => b.theme === 'dungeon');
  
  const groups = dungeonBattles.reduce((acc, battle) => {
    const group = battle.subGroup || "General";
    if (!acc[group]) acc[group] = [];
    acc[group].push(battle);
    return acc;
  }, {} as Record<string, typeof battles>);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950 text-white selection:bg-red-500 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold text-red-500 uppercase tracking-[0.4em] mb-4">Underground</h1>
          <h2 className="text-4xl md:text-6xl font-display italic uppercase leading-none">
            Dungeon <span className="text-red-600">Battles</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-red-600 mx-auto rounded-full" />
        </div>

        {Object.entries(groups).map(([groupName, groupBattles]) => (
          <div key={groupName} className="mb-16 max-w-4xl mx-auto">
            {/* Main Header - Matches screenshot */}
            <div className="bg-[#800000] border border-white/10 p-4 text-center">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white">
                Dungeon Battles
              </h3>
            </div>
            
            {/* Sub Header - Matches screenshot */}
            <div className="bg-[#600000] border-x border-b border-white/10 p-4">
              <h4 className="text-lg font-bold text-white">
                {groupName}
              </h4>
            </div>
            
            {/* Battles Table */}
            <div className="bg-[#400000]/40 border-x border-b border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-white/5">
                    {groupBattles.map((battle, index) => {
                      const mc1 = mcs.find(m => m.id === battle.mc1);
                      const mc2 = mcs.find(m => m.id === battle.mc2);
                      
                      return (
                        <motion.tr 
                          key={battle.id}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          viewport={{ once: true }}
                          className="group hover:bg-red-900/30 transition-all duration-300"
                        >
                          <td className="px-6 py-6 border-r border-white/10 w-1/6">
                             <Link to={`/battle/${battle.slug}`} className="font-mono text-zinc-400 text-[10px] hover:text-white">
                               {battle.id}
                             </Link>
                          </td>
                          <td className="px-6 py-6 border-r border-white/10">
                            <div className="flex items-center gap-4">
                              <Link to={`/mc/${mc1?.slug}`} className="font-bold uppercase text-sm md:text-lg hover:text-red-400 transition-colors">
                                {mc1?.name || battle.mc1}
                              </Link>
                              <span className="text-zinc-500 text-xs">vs</span>
                              <Link to={`/mc/${mc2?.slug}`} className="font-bold uppercase text-sm md:text-lg hover:text-red-400 transition-colors">
                                {mc2?.name || battle.mc2}
                              </Link>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                             {/* Empty as per screenshot */}
                          </td>
                        </motion.tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        {/* Footer Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-dashed border-red-900/30 rounded-3xl bg-red-950/5">
          <p className="text-zinc-400 text-xs uppercase tracking-widest max-w-md text-center sm:text-left">
            The Dungeon is where the rawest talent is forged. No rules, just bars.
          </p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Live Underground</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
