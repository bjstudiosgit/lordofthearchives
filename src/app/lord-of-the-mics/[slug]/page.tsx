import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Film } from "lucide-react";
import YouTubeFacade from "../../../components/YouTubeFacade";
import { lordOfTheMicsBattles } from "../../../data/lordOfTheMics";
import { getArchiveMcHref } from "../../../data/archiveMcProfiles";
import { formatBattleDate } from "../../../data/battleDates";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return lordOfTheMicsBattles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const battle = lordOfTheMicsBattles.find((item) => item.slug === slug);
  if (!battle) return { title: "Battle not found" };
  return {
    title: `${battle.title} | ${battle.customEp} | Lord of the Mics`,
    description: `${battle.title} from ${battle.customEp}. Battle recording, MC profiles and archive details.`,
    alternates: { canonical: `https://www.lordofthearchives.co.uk/lord-of-the-mics/${slug}` },
  };
}

export default async function LordOfTheMicsBattlePage({ params }: Props) {
  const { slug } = await params;
  const battle = lordOfTheMicsBattles.find((item) => item.slug === slug);
  if (!battle) notFound();
  const videoId = battle.videoUrl ? new URL(battle.videoUrl).searchParams.get("v") : null;
  const date = battle.date?.endsWith("-01-01") ? battle.date.slice(0, 4) : battle.date ? formatBattleDate(battle.date) : "Not recorded";
  const seriesBattles = lordOfTheMicsBattles.filter((item) => item.season === battle.season);
  const index = seriesBattles.findIndex((item) => item.slug === slug);
  const previous = seriesBattles[index - 1];
  const next = seriesBattles[index + 1];

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/lord-of-the-mics" className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-brand">
          <ArrowLeft size={16} /> Back to Lord of the Mics
        </Link>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand">Lord of the Mics · {battle.customEp}</p>
              <h1 className="text-center font-display text-5xl italic uppercase leading-tight md:text-7xl">
                {battle.mc1} <span className="text-brand">vs</span> {battle.mc2}
              </h1>
              <p className="mt-5 text-center text-sm text-zinc-400 md:text-base">{battle.customEp} · {date}</p>
              <section aria-label="Battle recording" className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                {videoId ? <YouTubeFacade videoId={videoId} title={`${battle.title} — ${battle.customEp}`} /> : (
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <Film size={36} className="mb-5 text-brand" />
                    <h2 className="font-display text-2xl uppercase italic">Recording not available</h2>
                    <p className="mt-3 text-sm text-zinc-400">{battle.statusNote}</p>
                  </div>
                )}
              </section>
              {battle.statusNote === "Full DVD upload" && <p className="mt-3 text-sm text-zinc-400">This recording contains the full DVD, including this clash.</p>}
            </div>
            <section className="rounded-3xl border border-white/5 bg-zinc-900/50 p-6 md:p-8">
              <div className="mb-8 text-center">
                <h2 className="font-display text-2xl uppercase italic">Battle Result</h2>
                <p className="mt-2 text-sm uppercase tracking-widest text-brand">
                  {battle.judgementSummary?.verdict ?? (battle.winner && battle.winner !== "unknown" ? `${battle.winner.toUpperCase()} wins` : "Result not yet recorded")}
                </p>
                {battle.judgementSummary?.summary && (
                  <p className="mx-auto mt-3 max-w-xl text-sm font-light text-zinc-300">
                    {battle.judgementSummary.summary}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {[battle.mc1, battle.mc2].map((name) => (
                  <Link key={name} href={getArchiveMcHref(name)} className="min-w-0 rounded-2xl border border-white/5 bg-zinc-900/30 p-5 text-center font-display text-2xl uppercase italic hover:text-brand md:p-8 md:text-3xl">
                    {name}
                  </Link>
                ))}
              </div>
              <div className="mt-10 border-t border-white/10 pt-8">
                <h3 className="mb-4 font-display text-xl uppercase italic text-brand">Clash Summary</h3>
                {battle.clashSummary ? (
                  <div className="space-y-4 font-light leading-relaxed text-zinc-300">
                    {battle.clashSummary.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                ) : (
                  <p className="font-light leading-relaxed text-zinc-300">{battle.title} features in {battle.customEp} of Lord of the Mics. Detailed clash analysis has not yet been added.</p>
                )}
              </div>

              {battle.performanceAnalysis && battle.performanceAnalysis.length > 0 && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="mb-6 font-display text-xl uppercase italic text-brand">Performance Analysis</h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    {battle.performanceAnalysis.map((perf) => (
                      <div key={perf.performer} className="rounded-2xl border border-white/5 bg-zinc-900/30 p-6">
                        <h4 className="font-display text-xl uppercase italic text-zinc-100">{perf.performer}</h4>
                        <p className="mt-3 text-sm font-light leading-relaxed text-zinc-300">{perf.overview}</p>
                        {perf.keyTechnicalHighlights && perf.keyTechnicalHighlights.length > 0 && (
                          <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-brand">Key Technical Highlights</h5>
                            {perf.keyTechnicalHighlights.map((tech) => (
                              <div key={tech.title} className="text-sm">
                                <span className="font-medium text-zinc-200">{tech.title}: </span>
                                <span className="font-light text-zinc-400">{tech.description}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {battle.notableBars && battle.notableBars.length > 0 && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <h3 className="mb-6 font-display text-xl uppercase italic text-brand">Notable Bars</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {battle.notableBars.map((bar, i) => (
                      <div key={i} className="rounded-2xl border border-white/5 bg-zinc-900/30 p-5">
                        <div className="flex items-center justify-between text-xs font-medium text-brand">
                          <span>{bar.performer}</span>
                          <span>{bar.theme}</span>
                        </div>
                        <blockquote className="mt-3 font-serif text-base italic text-zinc-100">
                          &ldquo;{bar.bar}&rdquo;
                        </blockquote>
                        {bar.explanation && (
                          <p className="mt-2 text-xs font-light text-zinc-400">{bar.explanation}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {((battle.coolMoments && battle.coolMoments.length > 0) || (battle.oddMoments && battle.oddMoments.length > 0)) && (
                <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
                  {battle.coolMoments && battle.coolMoments.length > 0 && (
                    <div>
                      <h4 className="mb-4 font-display text-lg uppercase italic text-brand">Key Moments</h4>
                      <ul className="list-inside list-disc space-y-2 text-sm font-light text-zinc-300">
                        {battle.coolMoments.map((moment, i) => (
                          <li key={i}>{moment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {battle.oddMoments && battle.oddMoments.length > 0 && (
                    <div>
                      <h4 className="mb-4 font-display text-lg uppercase italic text-brand">Notable Incidents</h4>
                      <ul className="list-inside list-disc space-y-2 text-sm font-light text-zinc-300">
                        {battle.oddMoments.map((moment, i) => (
                          <li key={i}>{moment}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {battle.postBattleContext && (
                <div className="mt-10 border-t border-white/10 pt-8">
                  <h4 className="mb-3 font-display text-lg uppercase italic text-brand">Post-Battle Legacy & Impact</h4>
                  <p className="text-sm font-light leading-relaxed text-zinc-300">{battle.postBattleContext}</p>
                </div>
              )}
            </section>
          </div>
          <aside className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-zinc-900/30 p-6 md:p-8">
              <h2 className="mb-5 font-display text-2xl uppercase italic">Battle details</h2>
              <dl className="space-y-4 text-sm">
                {[
                  ["League", "Lord of the Mics"],
                  ["Series", battle.customEp],
                  ["Archive date", date],
                  ...(battle.host ? [["Host", battle.host]] : []),
                  ...(battle.views ? [["Views", String(battle.views)]] : []),
                  ["Recording", battle.statusNote],
                  ["Result", battle.judgementSummary?.verdict ?? (battle.winner && battle.winner !== "unknown" ? `${battle.winner.toUpperCase()} wins` : "Not recorded")],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between gap-6 border-b border-white/5 pb-3 last:border-0">
                    <dt className="text-zinc-500">{label}</dt><dd className="text-right text-zinc-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </aside>
        </div>
        <nav aria-label="Other battles in this series" className="mt-10 grid gap-4 sm:grid-cols-2">
          {previous ? <Link href={`/lord-of-the-mics/${previous.slug}`} className="rounded-2xl border border-white/10 p-5 hover:border-brand/40">
            <span className="mb-2 flex items-center gap-2 text-xs text-zinc-500"><ArrowLeft size={14} /> Previous battle</span>
            <span className="text-sm text-zinc-200">{previous.title}</span>
          </Link> : <div />}
          {next && <Link href={`/lord-of-the-mics/${next.slug}`} className="rounded-2xl border border-white/10 p-5 hover:border-brand/40">
            <span className="mb-2 flex items-center gap-2 text-xs text-zinc-500">Next battle <ArrowRight size={14} /></span>
            <span className="text-sm text-zinc-200">{next.title}</span>
          </Link>}
        </nav>
      </div>
    </main>
  );
}
