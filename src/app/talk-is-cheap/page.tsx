import Link from "next/link";
import { getArchiveMcHref } from "../../data/archiveMcProfiles";
import { Calendar, ExternalLink, Play } from "lucide-react";
import { getTalkIsCheapBattleSlug, getTalkIsCheapClashData, talkIsCheapSeries } from "../../data/talkIsCheap";
import { formatBattleDate } from "../../data/battleDates";
import BattleRow from "./BattleRow";
import talkIsCheapViews from "../../data/talkIsCheapViews.json";
import { formatViewCount } from "../../data/viewCounts";

const videoViews: Record<string, number> = talkIsCheapViews;

export const metadata = {
  title: "Talk Is Cheap Battle Catalog | Lord of the Archives",
  description: "A first catalog of Talk Is Cheap grime clashes with links to the league's original video uploads.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/talk-is-cheap" },
  robots: { index: false, follow: true },
};

export default function TalkIsCheapPage() {
  const battleCount = talkIsCheapSeries.reduce((count, series) => count + series.battles.length, 0);

  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Archive</p>
        <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
          Talk Is <span className="text-brand">Cheap</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-lg">
          Explore Talk Is Cheap grime clashes by event, with matchups and links to the league&apos;s original uploads.
          Dates below refer to the events, not the later video releases. Results and detailed analysis await review.
        </p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
          <Play size={15} /> {battleCount} battles catalogued
        </p>

        <div className="mt-14 space-y-10">
          {talkIsCheapSeries.map((series) => (
            <section key={series.name}>
              <h2 className="text-xl font-semibold text-zinc-200 md:text-2xl">{series.name}</h2>
              <p className="mb-5 mt-2 text-sm text-zinc-400">
                {formatBattleDate(series.date)} · {series.venue}{" "}
                {"sourceUrl" in series && series.sourceUrl ? (
                  <a href={series.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Event source <ExternalLink size={13} className="inline" />
                  </a>
                ) : series.showResearchSource !== false && <span className="text-zinc-500">Date from supplied research</span>}
                {"note" in series && series.note && <span className="mt-1 block text-zinc-500">{series.note}</span>}
              </p>
              <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-900/40">
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Ep</th>
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Battle</th>
                        <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Date</th>
                        <th className="hidden md:table-cell px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400">Views</th>
                        <th className="px-2 py-3 md:px-6 md:py-5 text-[10px] md:text-xs font-semibold tracking-wide text-zinc-400 text-right md:text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {series.battles.map(([mc1, mc2, videoId], index) => {
                        const slug = getTalkIsCheapBattleSlug(mc1, mc2);
                        const clashData = getTalkIsCheapClashData(slug);
                        const isArchived = clashData?.archiveStatus === "complete";

                        return (
                          <BattleRow key={videoId} href={`/talk-is-cheap/${slug}`}>
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <Link href={`/talk-is-cheap/${slug}`} className="font-mono text-brand text-[10px] md:text-sm hover:underline" aria-label={`Watch ${mc1} vs ${mc2}`}>
                                {index + 1}
                              </Link>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6">
                              <div className="flex flex-wrap items-center gap-1.5 md:gap-3 text-sm font-semibold text-zinc-100 md:text-lg group-hover:text-brand transition-colors">
                                <Link href={getArchiveMcHref(mc1)} className="hover:text-brand hover:underline">{mc1}</Link>
                                <Link href={`/talk-is-cheap/${slug}`} className="text-[10px] md:text-sm text-zinc-400 hover:text-brand" aria-label={`Watch ${mc1} vs ${mc2}`}>VS</Link>
                                <Link href={getArchiveMcHref(mc2)} className="hover:text-brand hover:underline">{mc2}</Link>
                              </div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-400 text-xs"><Calendar size={14} className="opacity-50" />{formatBattleDate(series.date)}</div>
                            </td>
                            <td className="hidden md:table-cell px-2 py-3 md:px-6 md:py-6">
                              <div className="flex items-center gap-2 text-zinc-100 font-mono text-xs" aria-label={videoViews[videoId] === undefined ? "Views unavailable" : `${videoViews[videoId].toLocaleString("en-GB")} views`}><span className="w-1 h-1 rounded-full bg-brand/50" />{formatViewCount(videoViews[videoId], "—")}</div>
                            </td>
                            <td className="px-2 py-3 md:px-6 md:py-6 text-right md:text-left">
                              {isArchived ? (
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide bg-brand/20 text-brand border border-brand/40 shadow-[0_0_12px_rgba(255,215,0,0.15)]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                                  Archived
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-semibold tracking-wide bg-brand/10 text-brand border border-brand/20">
                                  Catalogued
                                </span>
                              )}
                            </td>
                          </BattleRow>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
