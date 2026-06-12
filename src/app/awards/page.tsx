"use client";

import { motion } from "motion/react";
import { Award, Trophy } from "lucide-react";
import { getLeagueStandings } from "../../data/leagueStandings";

export default function AwardsPage() {
  const standings = getLeagueStandings("pengame");
  const champion = standings.find((standing) => standing.id === "ren-dmc") ?? standings[0];
  const ratio =
    champion && champion.battles > 0
      ? `${((champion.wins / champion.battles) * 100).toFixed(1)}%`
      : "0.0%";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 min-h-screen bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mb-12">
          <h1 className="text-sm font-bold text-brand uppercase tracking-[0.3em] mb-4">Awards</h1>
          <h2 className="text-4xl md:text-6xl font-display italic uppercase leading-tight">
            LOTA <br /><span className="text-brand">Awards</span>
          </h2>
          <p className="text-zinc-400 mt-4 md:mt-6 max-w-2xl text-sm md:text-lg leading-relaxed">
            Champion-form recognition lives here. This card highlights the current battle champion outside the points table.
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="bg-[linear-gradient(180deg,rgba(16,44,77,0.95),rgba(9,24,44,0.98))] border-2 border-cyan-400 rounded-3xl p-6 md:p-8 shadow-[0_0_0_1px_rgba(56,189,248,0.18),0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 text-cyan-300 text-xs font-bold uppercase tracking-[0.3em]">
              <Award size={16} /> LOTA BATTLE CHAMPION
            </div>
            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-zinc-100 font-display italic uppercase text-4xl md:text-5xl leading-none">
                  {champion?.name || "REN DMC"}
                </div>
                <div className="mt-3 text-cyan-300 font-bold uppercase tracking-widest text-base md:text-lg">
                  {ratio} WIN RATIO
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className="text-zinc-200 font-bold uppercase tracking-widest text-sm md:text-base">
                  {champion?.wins ?? 10} WINS • {champion?.battles ?? 13} BATTLES
                </div>
                <div className="mt-2 inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-cyan-200/80">
                  <Trophy size={12} /> Battle champion form
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-zinc-500 uppercase tracking-widest font-bold">
          Awards are separate from league points.
        </div>
      </div>
    </motion.div>
  );
}
