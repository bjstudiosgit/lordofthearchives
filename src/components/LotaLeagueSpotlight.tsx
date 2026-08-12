import { ChevronRight, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { getLotaLeagueStandings } from "../data/leaderboards";

export default function LotaLeagueSpotlight() {
  const leaders = getLotaLeagueStandings()
    .slice(0, 4)
    .map((mc, index) => ({
      ...mc,
      rank: index + 1,
      hasImage: existsSync(join(process.cwd(), "public", mc.image.replace(/^\//, ""))),
    }));

  return (
    <section className="relative overflow-hidden border-b border-brand/20 bg-black py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,215,0,0.12),transparent_40%)]" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full border border-brand/10" />
      <div className="absolute -left-10 top-28 h-44 w-44 rounded-full border border-brand/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-brand">
            <ShieldCheck size={14} /> Official combined standings
          </div>
          <h2 className="font-display text-4xl italic uppercase leading-none text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            Lord of the Archives <span className="text-brand">League Table</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            A combined performance table built from confirmed PenGame and Gzone results. Every win earns three points;
            tied totals are separated by fewer losses, then appearances. These cards preview the current top four.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {leaders.map((mc) => (
            <Link
              key={mc.id}
              href={`/mc/${mc.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-brand/50"
            >
              <div className="relative h-80 overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center font-display text-8xl italic text-brand/20">
                  {mc.name[0]}
                </div>
                {mc.hasImage && (
                  <img
                    src={mc.image}
                    srcSet={`${mc.image.replace(/\.webp$/i, "-160.webp")} 160w, ${mc.image.replace(/\.webp$/i, "-400.webp")} 400w, ${mc.image} 800w`}
                    sizes="(min-width: 1280px) 288px, (min-width: 640px) 50vw, 100vw"
                    alt={mc.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/40 bg-black/80 font-display text-3xl italic text-brand backdrop-blur">
                  {mc.rank}
                </div>
                {mc.rank === 1 && (
                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-brand px-3 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-black">
                    <Trophy size={13} /> League leader
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.24em] text-brand">
                    {mc.rank === 1 ? "Current league leader" : `LOTA League No. ${mc.rank}`}
                  </p>
                  <h3 className="font-display text-4xl italic uppercase leading-none text-white">{mc.name}</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/10">
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <Trophy size={13} className="text-brand" /> Points
                  </div>
                  <p className="font-display text-2xl italic text-white">{mc.points}</p>
                </div>
                <div className="p-5">
                  <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-500">Record</div>
                  <p className="font-display text-2xl italic text-white">
                    {mc.wins}W <span className="text-zinc-600">/</span> {mc.losses}L
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex justify-end border-t border-white/10 pt-6">
          <Link
            href="/lota-league"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-brand transition hover:text-white"
          >
            View the full LOTA League <ChevronRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
