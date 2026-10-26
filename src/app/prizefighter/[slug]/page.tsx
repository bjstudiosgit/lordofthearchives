import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Film } from "lucide-react";
import YouTubeFacade from "../../../components/YouTubeFacade";
import { formatBattleDate } from "../../../data/battleDates";
import { prizefighterBattles } from "../../../data/prizefighter";
import { allProfileMcs, getArchiveMcId, getArchiveMcName } from "../../../data/archiveMcProfiles";

const displaySide = (side: string) => side.split(" / ").map(getArchiveMcName).join(" / ");

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return prizefighterBattles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const battle = prizefighterBattles.find((item) => item.slug === slug);
  if (!battle) return { title: "Battle not found" };
  return {
    title: `${displaySide(battle.side1)} vs ${displaySide(battle.side2)} | Ozone Prizefighter`,
    description: `${battle.side1} vs ${battle.side2} — ${battle.era} ${battle.edition}${battle.year ? ` (${battle.year})` : ""}. ${battle.round}, ${battle.format}.`,
    alternates: { canonical: `https://www.lordofthearchives.co.uk/prizefighter/${slug}` },
  };
}

export default async function PrizefighterBattlePage({ params }: Props) {
  const { slug } = await params;
  const battle = prizefighterBattles.find((item) => item.slug === slug);
  if (!battle) notFound();
  const editionBattles = prizefighterBattles.filter((item) =>
    item.era === battle.era && item.edition === battle.edition && item.year === battle.year,
  );
  const index = editionBattles.findIndex((item) => item.slug === slug);
  const previous = editionBattles[index - 1];
  const next = editionBattles[index + 1];

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href={`/prizefighter#${battle.era.toLowerCase()}`} className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-brand">
          <ArrowLeft size={16} /> Back to Prizefighter
        </Link>
        <div className="grid gap-12 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
        <div>
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand">Ozone Prizefighter · {battle.era} era</p>
        <h1 className="text-center font-display text-5xl italic uppercase leading-tight md:text-7xl">
          {displaySide(battle.side1)} <span className="text-brand">vs</span> {displaySide(battle.side2)}
        </h1>
        <p className="mt-5 text-center text-sm text-zinc-400 md:text-base">
          {battle.edition}{battle.year && ` · ${battle.year}`} · {battle.round}
        </p>

          {battle.videoId ? (
            <section aria-label="Battle recording" className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
              <YouTubeFacade videoId={battle.videoId} title={`${displaySide(battle.side1)} vs ${displaySide(battle.side2)} — Prizefighter`} />
            </section>
          ) : <section aria-label="Battle recording" className="relative mt-8 flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 p-6 text-center shadow-2xl">
            <div>
              <Film size={36} className="mx-auto mb-5 text-brand" />
              <h2 className="font-display text-2xl uppercase italic">Recording coming soon</h2>
              <p className="mt-3 text-sm text-zinc-400">{battle.footage}</p>
            </div>
          </section>}
        </div>

          <section className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="font-display text-2xl uppercase italic">Battle Result</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-zinc-400">Result not yet recorded</p>
            </div>
            <div className="relative grid grid-cols-2 gap-4 md:gap-8">
              <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950 font-display text-sm italic text-zinc-400">VS</div>
              {[battle.side1, battle.side2].map((side, sideIndex) => (
                <div key={sideIndex} className="min-w-0 rounded-2xl border border-white/5 bg-zinc-900/30 p-5 text-center md:p-8">
                  <div className="space-y-3">
                    {side.split(" / ").map((name) => {
                      const mc = allProfileMcs.find((item) => item.id === getArchiveMcId(name));
                      return mc ? (
                        <Link key={name} href={`/mc/${mc.slug}`} className="block break-words font-display text-2xl uppercase italic text-white transition-colors hover:text-brand md:text-3xl">{getArchiveMcName(name)}</Link>
                      ) : <p key={name} className="break-words font-display text-2xl uppercase italic text-white md:text-3xl">{name}</p>;
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="mb-4 font-display text-xl uppercase italic">Clash Summary</h3>
              <p className="font-light leading-relaxed text-zinc-300">
                {battle.side1} vs {battle.side2} features in {battle.era === "Ozone" ? "Ozone Prizefighter" : "Classic Prizefighter"}, {battle.edition}{battle.year ? ` (${battle.year})` : ""}.
                {battle.format === "Multi-MC" ? " This is a multi-MC rumble." : ` The matchup is listed as ${battle.round.toLowerCase() === "unspecified" ? "a 1v1 clash" : `a ${battle.round.toLowerCase()} clash`}.`}
              </p>
            </div>
          </section>
        </div>
        <aside className="space-y-6">
          <section className="rounded-3xl border border-white/10 bg-zinc-900/30 p-6 md:p-8">
            <h2 className="mb-5 font-display text-2xl uppercase italic">Battle details</h2>
            <dl className="space-y-4 text-sm">
              {[
                ["Era", battle.era], ["Edition", battle.edition],
                ["Event year", battle.year || "Not recorded"],
                ["YouTube release", battle.releaseDate ? formatBattleDate(battle.releaseDate) : "Not recorded"], ["Round", battle.round],
                ["Format", battle.format], ["Result", "Not recorded"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 border-b border-white/5 pb-3 last:border-0">
                  <dt className="text-zinc-500">{label}</dt><dd className="text-right text-zinc-200">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="rounded-3xl border border-white/10 bg-zinc-900/30 p-6 md:p-8">
            <h2 className="mb-4 font-display text-xl uppercase italic">Footage</h2>
            <p className="text-sm leading-relaxed text-zinc-400">{battle.footage}</p>
          </section>
        </aside>
        </div>

        {editionBattles.length > 1 && (
          <nav aria-label="Other battles in this edition" className="mt-10 grid gap-4 sm:grid-cols-2">
            {previous ? <Link href={`/prizefighter/${previous.slug}`} className="rounded-2xl border border-white/10 p-5 hover:border-brand/40">
              <span className="mb-2 flex items-center gap-2 text-xs text-zinc-500"><ArrowLeft size={14} /> Previous battle</span>
              <span className="text-sm text-zinc-200">{previous.side1} vs {previous.side2}</span>
            </Link> : <div />}
            {next && <Link href={`/prizefighter/${next.slug}`} className="rounded-2xl border border-white/10 p-5 hover:border-brand/40">
              <span className="mb-2 flex items-center gap-2 text-xs text-zinc-500">Next battle <ArrowRight size={14} /></span>
              <span className="text-sm text-zinc-200">{next.side1} vs {next.side2}</span>
            </Link>}
          </nav>
        )}
      </div>
    </main>
  );
}
