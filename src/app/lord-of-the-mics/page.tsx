import Link from "next/link";
import { Play, Search } from "lucide-react";
import { lordOfTheMicsBattles } from "../../data/lordOfTheMics";
import { formatBattleDate } from "../../data/battleDates";
import { getBattleRouteHref } from "../../data/pengameBattles";

export const metadata = {
  title: "Lord of the Mics Archive Lord of the Archives",
  description: "Lord of the Mics battle archive on Lord of the Archives.",
};

export default function LordOfTheMicsPage() {
  const sortedBattles = [...lordOfTheMicsBattles].sort(
    (a, b) => Number(a.season) - Number(b.season) || (a.seasonOrder ?? 0) - (b.seasonOrder ?? 0),
  );
  const groupedBattles = sortedBattles.reduce<Record<string, typeof sortedBattles>>((groups, battle) => {
    const series = String(battle.customEp ?? battle.subGroup ?? "Archive");
    groups[series] = groups[series] || [];
    groups[series].push(battle);
    return groups;
  }, {});
  const seasons = new Set(lordOfTheMicsBattles.map((battle) => battle.season));
  const formatLotmDate = (date: string | undefined) => {
    if (!date) return "TBD";
    return date.endsWith("-01-01") ? date.slice(0, 4) : formatBattleDate(date);
  };
  const formatLotmViews = (views: string | number | null | undefined) => views ?? "TBC";

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 text-white selection:bg-brand selection:text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Archive</p>
            <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
              Lord of the <span className="text-brand">Mics</span>
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-lg">
              Archive index for Lord of the Mics clashes. Each entry opens a battle page inside Lord of the Archives.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <StatCard icon={<Play size={14} />} label="Battles" value={String(lordOfTheMicsBattles.length)} />
            <StatCard icon={<Search size={14} />} label="Seasons" value={String(seasons.size)} />
          </div>
        </div>

        <section className="space-y-10">
          {Object.entries(groupedBattles).map(([series, battles]) => (
            <div key={series}>
              <div className="mb-5">
                <h2 className="text-xl font-semibold text-zinc-200 md:text-2xl">{series}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  {battles[0]?.date?.slice(0, 4)} Lord of the Mics clashes.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-900/40">
                        <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">Series</th>
                        <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">Battle</th>
                        <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Date</th>
                        <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Views</th>
                        <th className="px-3 py-4 text-right text-xs font-semibold tracking-wide text-zinc-400 md:px-6 md:text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {battles.map((battle) => (
                        <tr key={battle.id} className="transition-colors hover:bg-white/5">
                          <td className="px-3 py-4 font-mono text-xs text-brand md:px-6">{battle.customEp}</td>
                          <td className="px-3 py-4 md:px-6">
                            <Link
                              href={getBattleRouteHref(battle)}
                              className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase italic text-zinc-100 transition-colors hover:text-brand md:text-lg"
                            >
                              <span>{battle.mc1}</span>
                              <span className="text-xs text-zinc-500">VS</span>
                              <span>{battle.mc2}</span>
                            </Link>
                          </td>
                          <td className="hidden px-3 py-4 text-xs text-zinc-400 md:table-cell md:px-6">
                            {formatLotmDate(battle.date)}
                          </td>
                          <td className="hidden px-3 py-4 font-mono text-xs text-zinc-100 md:table-cell md:px-6">
                            <span className="text-brand">•</span> {formatLotmViews(battle.views)}
                          </td>
                          <td className="px-3 py-4 text-right md:px-6 md:text-left">
                            <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[10px] font-bold text-brand">
                              {battle.statusNote || "Archive in progress"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-[140px] rounded-3xl border border-white/5 bg-zinc-900/30 p-6">
      <div className="mb-2 flex items-center gap-2 text-zinc-400">
        <span className="text-brand">{icon}</span>
        <span className="text-[11px] font-semibold tracking-wide">{label}</span>
      </div>
      <div className="text-3xl font-semibold text-white">{value}</div>
    </div>
  );
}
