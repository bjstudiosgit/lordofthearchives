import { ChevronRight, Crown, Eye, Trophy } from "lucide-react";
import Link from "next/link";

interface PeopleChampionLeader {
  id: string;
  slug: string;
  name: string;
  image: string;
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-brand">
              <Crown size={14} /> The public decides
            </div>
            <h2 className="font-display text-4xl italic uppercase leading-none text-white sm:text-5xl lg:whitespace-nowrap lg:text-[3.25rem] xl:text-6xl">
              Lord of the Archives <span className="text-brand">People&apos;s Champion</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Every eligible MC is ranked by the cumulative YouTube views earned across their solo PenGame and Gzone
              battles. These cards show the current four leaders; the full People&apos;s League ranks the entire field.
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
              <div className="relative h-80 overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center font-display text-8xl italic text-brand/20">
                  {mc.name[0]}
                </div>
                <img
                  src={mc.image}
                  alt={mc.name}
                  className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/40 bg-black/80 font-display text-3xl italic text-brand backdrop-blur">
                  {mc.rank}
                </div>
                {mc.rank === 1 && (
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-brand px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-black">
                    <Trophy size={13} /> Champion
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-brand">
                    {mc.rank === 1 ? "Current People's Champion" : `People's League No. ${mc.rank}`}
                  </p>
                  <h3 className="font-display text-4xl italic uppercase leading-none text-white">{mc.name}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <Eye size={13} className="text-brand" /> Total views
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
