import Link from "next/link";
import { Scissors } from "lucide-react";
import { propertyItems } from "../../data/property";

const sortedProps = [...propertyItems].sort((a, b) => b.dateSort.localeCompare(a.dateSort));
const categories = new Set(propertyItems.map((prop) => prop.category));
const battles = new Set(propertyItems.map((prop) => prop.battle));

export const metadata = {
  title: "Prop'erty Lord of the Archives",
  description: "A Lord of the Archives catalogue of props used in battles.",
};

export default function PropertyPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Lord of the Archives Stats</p>
            <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
              Prop<span className="text-brand">'</span>erty
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-lg">
              Every prop, document, photo, and object brought into the battles and logged in the archive.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 text-center">
            <StatBlock label="Items" value={propertyItems.length} />
            <StatBlock label="Categories" value={categories.size} />
            <StatBlock label="Battles" value={battles.size} />
          </div>
        </div>

        <section className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70">
          <div className="grid grid-cols-[64px_1fr] border-b border-white/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 md:grid-cols-[72px_1.2fr_1fr_110px] md:px-6">
            <span>Type</span>
            <span>Item</span>
            <span className="hidden md:block">Battle</span>
            <span className="hidden text-right md:block">Date</span>
          </div>

          <div className="divide-y divide-white/10">
            {sortedProps.map((prop) => (
              <article
                key={`${prop.name}-${prop.usedBy}-${prop.battle}`}
                className="grid grid-cols-[64px_1fr] gap-4 px-4 py-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[72px_1.2fr_1fr_110px] md:px-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-800 text-brand">
                  <Scissors size={26} strokeWidth={1.8} />
                </div>
                <div className="min-w-0">
                  <p className="mb-2 font-mono text-xs text-zinc-500">{prop.episode}</p>
                  <h2 className="text-xl font-black leading-snug text-white">{prop.name}</h2>
                  <p className="mt-1 text-sm leading-snug text-zinc-300">
                    Used by{" "}
                    <Link href={prop.usedByHref} className="font-bold text-white transition-colors hover:text-brand hover:underline">
                      {prop.usedBy}
                    </Link>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{prop.note}</p>
                </div>

                <div className="col-start-2 min-w-0 md:col-start-auto">
                  <Link href={prop.battleHref} className="font-bold text-zinc-100 transition-colors hover:text-brand hover:underline">
                    {prop.battle}
                  </Link>
                  <p className="mt-1 text-xs text-zinc-500 md:hidden">{prop.date}</p>
                </div>

                <div className="hidden text-right text-sm text-zinc-500 md:block">{prop.date}</div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function StatBlock({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-24 border-r border-white/10 px-4 py-4 last:border-r-0">
      <div className="font-display text-2xl italic text-white">{value}</div>
      <div className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">{label}</div>
    </div>
  );
}
