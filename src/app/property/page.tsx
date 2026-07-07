import { Package } from "lucide-react";

const props = [
  {
    name: "Example prop",
    usedBy: "MC name",
    battle: "Battle name",
    date: "Date TBC",
    icon: Package,
  },
];

export const metadata = {
  title: "Prop'erty Lord of the Archives",
  description: "A Lord of the Archives catalogue of props used in battles.",
};

export default function PropertyPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">Lord of the Archives Stats</p>
          <h1 className="font-display text-4xl italic uppercase leading-tight md:text-6xl">
            Prop<span className="text-brand">'</span>erty
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-lg">
            Every prop, document, photo, and object brought into the battles and logged in the archive.
          </p>
        </div>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {props.map((prop) => (
            <article
              key={`${prop.name}-${prop.usedBy}-${prop.battle}`}
              className="flex min-h-36 gap-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-7 shadow-[0_0_40px_rgba(242,125,38,0.03)] transition-colors hover:border-brand/35"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-zinc-800 text-brand">
                <prop.icon size={26} strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-black leading-snug text-white">{prop.name}</h2>
                <p className="mt-1 text-base leading-snug text-zinc-300">
                  Used by {prop.usedBy} in {prop.battle}
                </p>
                <p className="mt-2 text-sm text-zinc-500">Date: {prop.date}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
