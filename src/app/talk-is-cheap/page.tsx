import { ExternalLink, Play } from "lucide-react";
import { talkIsCheapSeries } from "../../data/talkIsCheap";
import { formatBattleDate } from "../../data/battleDates";

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
                ) : <span className="text-zinc-500">Date from supplied research</span>}
                {"note" in series && series.note && <span className="mt-1 block text-zinc-500">{series.note}</span>}
              </p>
              <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b border-white/5 bg-zinc-900/40">
                        <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">No.</th>
                        <th className="px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:px-6">Battle</th>
                        <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Event date</th>
                        <th className="hidden px-3 py-4 text-xs font-semibold tracking-wide text-zinc-400 md:table-cell md:px-6">Status</th>
                        <th className="px-3 py-4 text-right text-xs font-semibold tracking-wide text-zinc-400 md:px-6 md:text-left">Video</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {series.battles.map(([mc1, mc2, videoId], index) => (
                        <tr key={videoId} className="transition-colors hover:bg-white/5">
                          <td className="px-3 py-4 font-mono text-xs text-brand md:px-6">{index + 1}</td>
                          <td className="px-3 py-4 md:px-6">
                            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold uppercase italic text-zinc-300 md:text-lg">
                              <span>{mc1}</span>
                              <span className="text-xs text-zinc-500">VS</span>
                              <span>{mc2}</span>
                            </div>
                          </td>
                          <td className="hidden px-3 py-4 text-xs text-zinc-400 md:table-cell md:px-6">{formatBattleDate(series.date)}</td>
                          <td className="hidden px-3 py-4 md:table-cell md:px-6">
                            <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-[10px] font-bold text-brand">
                              Catalogued
                            </span>
                          </td>
                          <td className="px-3 py-4 text-right md:px-6 md:text-left">
                            <a
                              href={`https://www.youtube.com/watch?v=${videoId}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-white"
                              aria-label={`Watch ${mc1} vs ${mc2} on YouTube`}
                            >
                              Watch <ExternalLink size={14} />
                            </a>
                          </td>
                        </tr>
                      ))}
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
