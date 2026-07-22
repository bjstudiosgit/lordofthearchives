import Link from "next/link";
import { ArrowUpRight, Scale } from "lucide-react";
import { creditPeople, getCreditPersonByName } from "../../data/credits";
import { gzoneBattles } from "../../data/gzone";
import { lordOfTheMicsBattles } from "../../data/lordOfTheMics";
import { getBattleHref, pengameBattles } from "../../data/pengameBattles";
import { formatBattleDate, parseBattleDate } from "../../data/battleDates";
import { hasCompletedBattleAnalysis, type Battle } from "../../data/battleTypes";

export const metadata = {
  title: "Hosts & Judges | Lord of the Archives",
  description: "Biographies and verified completed-battle credits for hosts and judges documented by Lord of the Archives.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/hosts-judges" },
};

type Appearance = {
  battle: Battle;
  roles: string[];
};

const completedBattles = [...pengameBattles, ...gzoneBattles, ...lordOfTheMicsBattles]
  .filter(hasCompletedBattleAnalysis);

const getAppearances = (personId: string): Appearance[] => completedBattles
  .flatMap((battle) => {
    const roles: string[] = [];

    if (battle.host && getCreditPersonByName(battle.host)?.id === personId) {
      roles.push("Host");
    }

    if (battle.judges?.some((judge) => getCreditPersonByName(judge)?.id === personId)) {
      roles.push("Judge");
    }

    return roles.length ? [{ battle, roles }] : [];
  })
  .sort((a, b) => (parseBattleDate(b.battle.date) ?? 0) - (parseBattleDate(a.battle.date) ?? 0));

export default function HostsJudgesPage() {
  const people = [...creditPeople].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Verified credits</p>
          <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
            Hosts & <span className="text-brand">Judges</span>
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-lg">
            A single reference page for the people credited with introducing, managing and judging archived battles.
            Each appearance below links only to a completed battle analysis and reflects the surviving source record.
          </p>
        </div>

        <section aria-labelledby="credited-people" className="space-y-8">
          <div className="flex items-center gap-3">
            <Scale className="text-brand" size={20} />
            <h2 id="credited-people" className="font-display text-2xl italic uppercase">Credited people</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {people.map((person) => {
              const appearances = getAppearances(person.id);
              const visibleAppearances = appearances.slice(0, 12);

              return (
                <article
                  id={person.slug}
                  key={person.id}
                  className="scroll-mt-28 rounded-2xl border border-white/5 bg-zinc-900/40 p-6 md:p-8"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand">{person.role}</p>
                  <h3 className="mt-3 font-display text-3xl italic uppercase leading-tight">{person.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{person.bio}</p>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">Completed battle credits</h4>
                      <span className="font-mono text-xs text-brand">{appearances.length}</span>
                    </div>

                    {visibleAppearances.length ? (
                      <ul className="mt-4 space-y-2">
                        {visibleAppearances.map(({ battle, roles }) => (
                          <li key={`${person.id}-${battle.id}`}>
                            <Link
                              href={getBattleHref(battle)}
                              className="group flex items-start justify-between gap-4 rounded-lg border border-white/5 bg-black/20 px-3 py-3 transition hover:border-brand/30"
                            >
                              <span>
                                <span className="block text-sm font-semibold uppercase text-zinc-200 group-hover:text-brand">{battle.title}</span>
                                <span className="mt-1 block text-xs text-zinc-500">
                                  {roles.join(" & ")}{battle.date ? ` · ${formatBattleDate(battle.date)}` : ""}
                                </span>
                              </span>
                              <ArrowUpRight className="mt-0.5 shrink-0 text-zinc-600 group-hover:text-brand" size={16} />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-sm text-zinc-500">
                        Listed in the archive credits; a supported completed-battle appearance has not yet been published.
                      </p>
                    )}

                    {appearances.length > visibleAppearances.length && (
                      <p className="mt-4 text-xs text-zinc-500">
                        Showing the 12 most recent of {appearances.length} completed battle credits.
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
