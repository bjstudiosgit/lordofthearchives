import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Trophy } from "lucide-react";
import YouTubeFacade from "../../../components/YouTubeFacade";
import {
  getTalkIsCheapBattleSlug,
  talkIsCheapSeries,
  getTalkIsCheapClashData,
} from "../../../data/talkIsCheap";
import { formatBattleDate } from "../../../data/battleDates";
import { getArchiveMcHref } from "../../../data/archiveMcProfiles";

const battles = talkIsCheapSeries.flatMap((event) =>
  event.battles
    .filter(([, , videoId]) => Boolean(videoId))
    .map(([mc1, mc2, videoId]) => ({
      event,
      mc1,
      mc2,
      videoId,
      slug: getTalkIsCheapBattleSlug(mc1, mc2),
    })),
);

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return battles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const battle = battles.find((b) => b.slug === slug);
  if (!battle) return { title: "Battle Not Found" };
  const { mc1, mc2, event } = battle;
  const clashData = getTalkIsCheapClashData(slug);
  const description = clashData
    ? `Clash summary, performance analysis, technical highlights and indexed bars for ${mc1} vs ${mc2} at Talk Is Cheap: ${event.name} (${formatBattleDate(event.date)}).`
    : `Watch ${mc1} vs ${mc2} at Talk Is Cheap: ${event.name}, held on ${formatBattleDate(event.date)} at ${event.venue}.`;

  return {
    title: `${mc1} vs ${mc2} | Talk Is Cheap Battle`,
    description,
    alternates: { canonical: `https://www.lordofthearchives.co.uk/talk-is-cheap/${slug}` },
  };
}

export default async function TalkIsCheapBattlePage({ params }: Props) {
  const { slug } = await params;
  const battle = battles.find((b) => b.slug === slug);
  if (!battle) notFound();
  const { event, mc1, mc2, videoId } = battle;
  const clashData = getTalkIsCheapClashData(slug);

  const team1Won = clashData?.winner?.toLowerCase() === mc1.toLowerCase();
  const team2Won = clashData?.winner?.toLowerCase() === mc2.toLowerCase();

  const notableBarsByPerformer = clashData?.notableBars?.reduce<
    Record<string, NonNullable<typeof clashData.notableBars>>
  >((groups, item) => {
    const performer = item.performer || "Notable Bars";
    groups[performer] = groups[performer] || [];
    groups[performer].push(item);
    return groups;
  }, {});

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/talk-is-cheap"
          className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} /> Back to Talk Is Cheap
        </Link>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Battle Content */}
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h1 className="text-center font-display text-5xl uppercase italic leading-tight md:text-7xl">
                {mc1} <span className="text-brand">VS</span> {mc2}
              </h1>

              <div className="relative mt-8 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl">
                <YouTubeFacade videoId={videoId} title={`${mc1} vs ${mc2} — Talk Is Cheap`} />
              </div>

            </div>

            {/* Battle Result Card */}
            {clashData && (
              <section className="rounded-3xl border border-white/5 bg-zinc-900/50 p-8">
                <div className="mb-8 text-center">
                  <h2 className="font-display text-2xl uppercase italic text-white">Battle Result</h2>
                  <p className="mt-2 text-sm uppercase tracking-widest text-zinc-400">
                    {clashData.statusNote ?? "Archived Result"}
                  </p>
                </div>

                <div className="relative grid grid-cols-2 gap-4 md:gap-8">
                  <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-950 font-display text-sm italic text-zinc-400 md:h-12 md:w-12">
                    VS
                  </div>

                  {/* MC1 Card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border p-6 text-center md:p-8 ${
                      team1Won
                        ? "border-brand bg-brand/5 ring-2 ring-brand ring-offset-4 ring-offset-zinc-950"
                        : "border-white/5 bg-zinc-900/30"
                    }`}
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
                      {team1Won && <Trophy size={22} className="shrink-0 text-brand" />}
                      <Link
                        href={getArchiveMcHref(mc1)}
                        className="font-display text-2xl uppercase italic text-white transition-colors hover:text-brand md:text-3xl"
                      >
                        {mc1}
                      </Link>
                    </div>
                    {team1Won && (
                      <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-brand">
                        Winner
                      </span>
                    )}
                  </div>

                  {/* MC2 Card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border p-6 text-center md:p-8 ${
                      team2Won
                        ? "border-brand bg-brand/5 ring-2 ring-brand ring-offset-4 ring-offset-zinc-950"
                        : "border-white/5 bg-zinc-900/30"
                    }`}
                  >
                    <div className="relative z-10 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-3">
                      {team2Won && <Trophy size={22} className="shrink-0 text-brand" />}
                      <Link
                        href={getArchiveMcHref(mc2)}
                        className="font-display text-2xl uppercase italic text-white transition-colors hover:text-brand md:text-3xl"
                      >
                        {mc2}
                      </Link>
                    </div>
                    {team2Won && (
                      <span className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-brand">
                        Winner
                      </span>
                    )}
                  </div>
                </div>

                {/* Clash Summary */}
                {clashData.clashSummary && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-4 font-display text-xl uppercase italic text-white">
                      Clash Summary
                    </h3>
                    <div className="space-y-4">
                      {clashData.clashSummary.split(/\n\n+/).map((paragraph, index) => (
                        <p key={index} className="font-light leading-relaxed text-zinc-300">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance Analysis */}
                {clashData.performanceAnalysis && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                      Performance Analysis
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {clashData.performanceAnalysis.map((analysis) => (
                        <article
                          key={analysis.performer}
                          className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6"
                        >
                          <h4 className="mb-4 font-display text-lg uppercase italic text-brand">
                            {analysis.performer}
                          </h4>
                          <p className="mb-4 font-light leading-relaxed text-zinc-300">
                            {analysis.overview}
                          </p>
                          <p className="font-light leading-relaxed text-zinc-300">
                            <span className="font-bold text-white">Lyrical Themes: </span>
                            {analysis.lyricalThemes}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Technical Highlights */}
                {clashData.performanceAnalysis &&
                  clashData.performanceAnalysis.some(
                    (a) => a.keyTechnicalHighlights && a.keyTechnicalHighlights.length > 0,
                  ) && (
                    <div className="mt-10 border-t border-white/10 pt-8 text-left">
                      <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                        Key Technical Highlights
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        {clashData.performanceAnalysis.map((analysis) => (
                          <div
                            key={analysis.performer}
                            className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6"
                          >
                            <h4 className="mb-4 font-display text-lg uppercase italic text-brand">
                              {analysis.performer}
                            </h4>
                            <div className="space-y-4">
                              {analysis.keyTechnicalHighlights.map((highlight) => (
                                <div
                                  key={highlight.title}
                                  className="border-l-2 border-brand/60 pl-4"
                                >
                                  <p className="mb-1 font-bold text-white">{highlight.title}</p>
                                  <p className="font-light leading-relaxed text-zinc-300">
                                    {highlight.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Indexed Bars & Breakdown */}
                {notableBarsByPerformer && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                      Indexed Bars &amp; Breakdown
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {Object.entries(notableBarsByPerformer).map(([performer, bars]) => (
                        <article
                          key={performer}
                          className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6"
                        >
                          <h4 className="mb-5 font-display text-lg uppercase italic text-brand">
                            {performer}
                          </h4>
                          <div className="space-y-5">
                            {bars.map((item, idx) => (
                              <div
                                key={`${performer}-${idx}`}
                                className="border-l-2 border-brand/60 pl-4"
                              >
                                {item.theme && (
                                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand/80">
                                    {item.theme}
                                  </p>
                                )}
                                <p className="leading-relaxed text-white italic">&ldquo;{item.bar}&rdquo;</p>
                                {item.explanation && (
                                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                    {item.explanation}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clash Highlights (Cool Moments & Odd Moments) */}
                {((clashData.coolMoments && clashData.coolMoments.length > 0) ||
                  (clashData.oddMoments && clashData.oddMoments.length > 0)) && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                      Clash Highlights
                    </h3>
                    <div className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6">
                      <ul className="list-inside list-disc space-y-3 font-light leading-relaxed text-zinc-300">
                        {[...(clashData.coolMoments ?? []), ...(clashData.oddMoments ?? [])].map(
                          (moment, idx) => (
                            <li key={idx} className="marker:text-brand pl-2">
                              {moment}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Judgement Summary */}
                {clashData.judgementSummary && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                      Judgement Summary
                    </h3>
                    <div className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6">
                      <p className="mb-3 font-bold text-brand">{clashData.judgementSummary.verdict}</p>
                      <p className="font-light leading-relaxed text-zinc-300">
                        {clashData.judgementSummary.summary}
                      </p>
                    </div>
                  </div>
                )}

                {/* Post-Battle Context */}
                {clashData.postBattleContext && (
                  <div className="mt-10 border-t border-white/10 pt-8 text-left">
                    <h3 className="mb-6 font-display text-xl uppercase italic text-white">
                      Post-Battle Context
                    </h3>
                    <div className="rounded-2xl border border-white/5 bg-zinc-950/50 p-6">
                      <p className="font-light leading-relaxed text-zinc-300">
                        {clashData.postBattleContext}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sidebar / Battle Details */}
          <aside className="h-fit rounded-3xl border border-white/5 bg-zinc-900/50 p-8">
            <h2 className="mb-6 font-display text-2xl uppercase italic">Battle Details</h2>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="mb-1 text-zinc-500">League</dt>
                <dd>Talk Is Cheap</dd>
              </div>
              <div>
                <dt className="mb-1 text-zinc-500">Event</dt>
                <dd>{event.name}</dd>
              </div>
              <div>
                <dt className="mb-1 text-zinc-500">Event date</dt>
                <dd>{formatBattleDate(event.date)}</dd>
              </div>
              <div>
                <dt className="mb-1 text-zinc-500">Venue</dt>
                <dd>{event.venue}</dd>
              </div>
              <div>
                <dt className="mb-2 text-zinc-500">MCs</dt>
                <dd className="flex flex-wrap gap-4">
                  {[mc1, mc2].map((mc) => (
                    <Link
                      key={mc}
                      href={getArchiveMcHref(mc)}
                      className="font-semibold text-brand hover:underline"
                    >
                      {mc}
                    </Link>
                  ))}
                </dd>
              </div>
              {clashData?.winner && (
                <div>
                  <dt className="mb-1 text-zinc-500">Winner</dt>
                  <dd className="flex items-center gap-2 font-bold text-brand">
                    <Trophy size={16} /> {clashData.winner}
                  </dd>
                </div>
              )}
              {clashData?.statusNote && (
                <div>
                  <dt className="mb-1 text-zinc-500">Result Decision</dt>
                  <dd className="font-semibold text-zinc-200">{clashData.statusNote}</dd>
                </div>
              )}
            </dl>

            {!clashData && (
              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="text-sm text-zinc-400">
                  Battle result and detailed analysis await review.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
}
