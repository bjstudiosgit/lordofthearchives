import { ChevronRight, Eye, Trophy } from "lucide-react";
import Link from "next/link";

interface PeopleChampionLeader {
  id: string;
  slug: string;
  name: string;
  battleCount: number;
  totalViews: number;
  averageViews: number;
  rank: number;
}

export default function PeopleChampionCarousel({ leaders }: { leaders: PeopleChampionLeader[] }) {
  return (
    <section className="relative overflow-hidden border-b border-brand/20 bg-zinc-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.13),transparent_38%)]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-brand/10" />
      <div className="absolute -right-10 top-24 h-44 w-44 rounded-full border border-brand/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div>
            <h2 className="font-display text-4xl italic uppercase leading-none text-white sm:text-5xl lg:whitespace-nowrap lg:text-[3.25rem] xl:text-6xl">
              Lord of the Archives <span className="text-brand">People&apos;s Champion</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              The People&apos;s Champion is the MC whose solo battles have been watched the most. We add up the recorded
              YouTube views from each MC&apos;s one-on-one PenGame and Gzone battles; team clashes don&apos;t count. Both MCs
              receive the full views for each battle. The top four are shown here, with the full ranking in the People&apos;s League.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {leaders.map((mc) => (
            <Link
              key={mc.id}
              href={`/mc/${mc.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-6 flex flex-col justify-between border-b border-white/5">
                {/* Background Watermark Initial */}
                <div className="absolute -right-2 -bottom-6 select-none pointer-events-none font-display text-9xl italic text-white/[0.04] transition-transform duration-500 group-hover:scale-110 group-hover:text-brand/[0.07]">
                  {mc.name[0]}
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/40 bg-brand/10 font-display text-2xl italic text-brand backdrop-blur shadow-[0_0_15px_rgba(242,125,38,0.2)]">
                    #{mc.rank}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                    {mc.rank === 1 ? "People's Champion" : `Rank #${mc.rank}`}
                  </span>
                </div>

                <div className="relative z-10">
                  <p className="mb-1 text-[10px] font-black uppercase tracking-[0.24em] text-zinc-500">
                    Leaderboard
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl italic uppercase leading-none text-white group-hover:text-brand transition-colors">
                    {mc.name}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 bg-zinc-950/60">
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <Eye size={13} className="text-brand" /> Solo views
                  </div>
                  <p className="font-display text-2xl italic text-white">{formatViews(mc.totalViews)}</p>
                </div>
                <div className="p-5">
                  <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">Solo battles</div>
                  <p className="font-display text-2xl italic text-white">{mc.battleCount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end border-t border-white/10 pt-6">
          <Link
            href="/peoples-vote"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-brand transition hover:text-white"
          >
            View the full People&apos;s League <ChevronRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatViews(views: number): string {
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${Math.floor(views / 1000)}K`;
  return views.toLocaleString("en-GB");
}
