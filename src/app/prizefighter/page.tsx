import { formatBattleDate } from "../../data/battleDates";
import Link from "next/link";
import BattleRow from "../talk-is-cheap/BattleRow";
import { getArchiveMcHref, getArchiveMcName } from "../../data/archiveMcProfiles";
import { getPrizefighterBattleSlug, prizefighterEditions } from "../../data/prizefighter";

export const metadata = {
  title: "Ozone Prizefighter | Lord of the Archives",
  description: "Explore Classic Prizefighter and Ozone matchups, tournament rounds and recording availability by edition and season.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/prizefighter" },
};

export default function PrizefighterPage() {
  const battleCount = prizefighterEditions.reduce((total, edition) => total + edition.battles.length, 0);
  return (
    <main className="min-h-screen bg-zinc-950 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Archive</p>
        <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
          Ozone <span className="text-brand">Prizefighter</span>
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-lg">
          Classic radio clashes, DVD battles and the Ozone tournament seasons. Explore the matchups, rounds and recording availability below.
          {" "}Dates show YouTube publication dates where available; otherwise the event year is shown.
        </p>
        <p className="mt-6 text-sm font-semibold text-brand">
          {battleCount} battles catalogued
        </p>
        <nav aria-label="Prizefighter eras" className="mt-6 flex flex-wrap gap-3">
          <Link href="/prizefighter/league" className="py-2 text-sm text-brand hover:underline">League table</Link>
          {["Ozone", "Classic"].map((era) => (
            <a key={era} href={`#${era.toLowerCase()}`} className="py-2 text-sm text-zinc-300 transition-colors hover:text-brand hover:underline">{era}</a>
          ))}
        </nav>

        {["Ozone", "Classic"].map((era) => (
          <section key={era} id={era.toLowerCase()} className="mt-14 scroll-mt-32">
            <h2 className="mb-8 font-display text-3xl uppercase italic text-brand">{era} era</h2>
            <div className="space-y-10">
              {prizefighterEditions.filter((edition) => edition.era === era).sort((a, b) =>
                b.year.localeCompare(a.year) || Number(b.edition.match(/\d+/)?.[0] ?? 0) - Number(a.edition.match(/\d+/)?.[0] ?? 0)
              ).map((edition) => (
                <section key={`${edition.edition}-${edition.year}`}>
                  <h3 className="text-xl font-semibold text-zinc-200 md:text-2xl">{edition.edition}</h3>
                  <p className="mb-5 mt-2 text-sm text-zinc-400">{edition.year || "Year not recorded"} · {edition.battles.length} battles</p>
                  <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-left">
                        <caption className="sr-only">{era} {edition.edition} {edition.year} matchups</caption>
                        <thead>
                          <tr className="border-b border-white/5 bg-zinc-900/40">
                            {["Ep", "Battle", "Date", "Views", "Status"].map((heading) => (
                              <th key={heading} scope="col" className="px-4 py-4 text-xs font-semibold text-zinc-400 md:px-6">{heading}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {edition.battles.map((battle, index) => (
                            <BattleRow key={index} href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`}>
                              <td className="px-4 py-5 text-sm text-brand md:px-6">
                                <Link href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`} className="hover:underline">{index + 1}</Link>
                              </td>
                              <td className="min-w-56 px-4 py-5 md:px-6">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-zinc-100 md:text-base">
                                  {[battle.side1, battle.side2].map((side, index) => (
                                    <span key={index} className="contents">
                                      {index > 0 && <Link href={`/prizefighter/${getPrizefighterBattleSlug(edition, battle)}`} className="text-xs font-normal uppercase text-zinc-500 hover:text-brand">vs</Link>}
                                      <span>{side.split(" / ").map((name, nameIndex) => <span key={name}>{nameIndex > 0 && " / "}<Link href={getArchiveMcHref(name)} className="hover:text-brand hover:underline">{getArchiveMcName(name)}</Link></span>)}</span>
                                    </span>
                                  ))}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-4 py-5 text-xs text-zinc-400 md:px-6" title={battle.releaseDate ? "YouTube publication date" : "Event year"}>{battle.releaseDate ? formatBattleDate(battle.releaseDate) : edition.year || "—"}</td>
                              <td className="px-4 py-5 font-mono text-xs text-zinc-400 md:px-6" aria-label="Views unavailable">—</td>
                              <td className="px-4 py-5 md:px-6">
                                <span className="text-xs md:text-sm font-semibold text-brand">{battle.videoId ? "Watch now" : "Catalogued"}</span>
                              </td>
                            </BattleRow>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
