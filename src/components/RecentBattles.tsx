import { ArrowUpRight, BookOpenCheck, Network, Search, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { Battle } from "../data/battleTypes";
import { gzoneBattles } from "../data/gzone";
import { hasBattleArchiveData, pengameBattles } from "../data/pengameBattles";

const pengameCoverage = getCoverage(pengameBattles);
const gzoneCoverage = getCoverage(gzoneBattles);
const archiveTotal = pengameCoverage.total + gzoneCoverage.total;
const completedTotal = pengameCoverage.complete + gzoneCoverage.complete;

const archives = [
  {
    name: "PenGame",
    href: "/pengame",
    eyebrow: "PenGame Rap Battle Archive",
    description:
      "Browse PenGame seasons, matchups, winners, MC records and detailed battle research from across the platform.",
    coverage: pengameCoverage,
    accent: "text-brand",
    border: "hover:border-brand/40",
    bar: "bg-brand",
    wash: "from-brand/10",
  },
  {
    name: "Gzone",
    href: "/gzone",
    eyebrow: "Gzone Rap Battle Archive",
    description:
      "Explore Gzone battles, participants, results and league standings, with deeper archive notes added as they are verified.",
    coverage: gzoneCoverage,
    accent: "text-gzone",
    border: "hover:border-gzone/40",
    bar: "bg-gzone",
    wash: "from-gzone/10",
  },
];

export default function RecentBattles() {
  return (
    <section id="battles" aria-labelledby="archive-heading" className="relative scroll-mt-24 overflow-hidden bg-black py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full border border-brand/10" />
      <div className="absolute -right-16 top-36 h-64 w-64 rounded-full border border-brand/10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <h2 id="archive-heading" className="max-w-4xl font-display text-4xl italic uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              The UK rap battle archive, <span className="text-brand">mapped and searchable.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Lord of the Archives documents PenGame and Gzone battles in one connected collection. Battle pages link
              matchups, MC profiles, results, standings and detailed archive notes so the history is easier to find,
              follow and preserve.
            </p>
          </div>

          <dl className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
            <OverviewStat value={archiveTotal} label="Battles mapped" />
            <OverviewStat value={completedTotal} label="Detailed entries" bordered />
            <OverviewStat value={archives.length} label="Live archives" bordered />
          </dl>
        </div>

        <div className="grid gap-5 py-10 lg:grid-cols-2">
          {archives.map((archive) => (
            <article
              key={archive.name}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 transition-colors sm:p-8 ${archive.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${archive.wash} via-transparent to-transparent opacity-70`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className={`text-[10px] font-black uppercase tracking-[0.24em] ${archive.accent}`}>{archive.eyebrow}</p>
                    <h3 className="mt-3 font-display text-4xl italic uppercase leading-none text-white sm:text-5xl">
                      {archive.name}
                    </h3>
                  </div>
                  <div className={`font-display text-4xl italic ${archive.accent}`}>{archive.coverage.total}</div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400">{archive.description}</p>

                <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
                  <div className={`h-full ${archive.bar}`} style={{ width: `${Math.max(archive.coverage.percent, 1)}%` }} />
                </div>

                <dl className="mt-5 grid grid-cols-3 gap-3">
                  <PlatformStat value={archive.coverage.total} label="Indexed" />
                  <PlatformStat
                    value={archive.coverage.complete > 0 ? archive.coverage.complete : archive.coverage.inProgress}
                    label={archive.coverage.complete > 0 ? "Detailed" : "In research"}
                  />
                  <PlatformStat
                    value={archive.coverage.complete > 0 ? archive.coverage.inProgress : "Live"}
                    label={archive.coverage.complete > 0 ? "In research" : "Battle index"}
                  />
                </dl>

                <div className="mt-7 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-5 text-zinc-500">
                    {archive.coverage.complete > 0
                      ? `${archive.coverage.percent}% of indexed battles have a completed research entry.`
                      : "The battle index is live; detailed research entries are now being added."}
                  </p>
                  <Link
                    href={archive.href}
                    className={`inline-flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-[0.18em] transition hover:text-white ${archive.accent}`}
                  >
                    Explore {archive.name} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">Built for research</p>
              <h3 className="mt-3 font-display text-3xl italic uppercase leading-none text-white sm:text-4xl">
                More than a list of videos.
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <ArchiveFeature
                icon={Search}
                title="Battle records"
                copy="Matchups, platforms, events and confirmed results in one place."
              />
              <ArchiveFeature
                icon={Network}
                title="MC connections"
                copy="Profiles connect appearances, records and combined league standings."
              />
              <ArchiveFeature
                icon={BookOpenCheck}
                title="Archive depth"
                copy="Transcripts, breakdowns and context are added as each entry is checked."
              />
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-5 text-zinc-500">
          The collection will expand beyond PenGame and Gzone as reliable footage, results and participant records are
          verified. Accuracy comes before volume.
        </p>
      </div>
    </section>
  );
}

function getCoverage(battles: Battle[]) {
  const activeBattles = battles.filter((battle) => battle.statusNote !== "Cancelled" && battle.winner !== "cancelled");
  const complete = activeBattles.filter(hasBattleArchiveData).length;
  const total = activeBattles.length;

  return {
    total,
    complete,
    inProgress: Math.max(total - complete, 0),
    percent: total > 0 ? Math.round((complete / total) * 100) : 0,
  };
}

function OverviewStat({ value, label, bordered = false }: { value: number; label: string; bordered?: boolean }) {
  return (
    <div className={`p-4 text-center sm:p-5 ${bordered ? "border-l border-white/10" : ""}`}>
      <dt className="font-display text-2xl italic text-white sm:text-3xl">{value}</dt>
      <dd className="mt-1 text-[8px] font-black uppercase tracking-[0.16em] text-zinc-500 sm:text-[9px]">{label}</dd>
    </div>
  );
}

function PlatformStat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4">
      <dt className="font-display text-2xl italic text-white">{value}</dt>
      <dd className="mt-1 text-[8px] font-black uppercase tracking-[0.15em] text-zinc-500 sm:text-[9px]">{label}</dd>
    </div>
  );
}

function ArchiveFeature({
  icon: Icon,
  title,
  copy,
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <div className="border-l border-white/10 pl-4">
      <Icon size={18} className="text-brand" />
      <h4 className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-white">{title}</h4>
      <p className="mt-2 text-xs leading-5 text-zinc-500">{copy}</p>
    </div>
  );
}
