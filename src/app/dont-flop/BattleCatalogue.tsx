"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import BattleRow from "../talk-is-cheap/BattleRow";
import { formatViewCount } from "../../data/viewCounts";
type Entry = { slug: string; title: string; sides: string[][]; videoId: string; durationMinutes: number; date: string; views?: number };
export default function BattleCatalogue({ battles }: { battles: Entry[] }) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const filtered = useMemo(() => battles.filter(b => b.title.toLowerCase().includes(query.toLowerCase())), [battles, query]);
  const pages = Math.max(1, Math.ceil(filtered.length / 40));
  return <section className="mt-10">
    <label htmlFor="battle-search" className="mb-2 block text-sm text-zinc-300">Find a battle or MC</label>
    <input id="battle-search" value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder="Search Don’t Flop…" className="w-full rounded-xl border border-white/15 bg-zinc-900 p-4 text-white focus:border-brand outline-none" />
    <p className="my-4 text-sm text-zinc-400">{filtered.length.toLocaleString("en-GB")} battles</p>
    <div className="overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/20">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead><tr className="border-b border-white/5 bg-zinc-900/40">
            <th scope="col" className="px-3 py-4 text-xs font-semibold text-zinc-400 md:px-6">Battle</th>
            <th scope="col" className="hidden px-6 py-4 text-xs font-semibold text-zinc-400 md:table-cell">Date</th>
            <th scope="col" className="px-3 py-4 text-xs font-semibold text-zinc-400 md:px-6">Views</th>
            <th scope="col" className="px-3 py-4 text-right text-xs font-semibold text-zinc-400 md:px-6">Status</th>
          </tr></thead>
          <tbody className="divide-y divide-white/5">
            {filtered.slice((page - 1) * 40, page * 40).map(b => <BattleRow key={b.slug} href={`/dont-flop/${b.slug}`}>
              <td className="px-3 py-5 md:px-6 md:py-6"><Link href={`/dont-flop/${b.slug}`} className="text-sm font-semibold uppercase text-zinc-100 transition-colors hover:text-brand md:text-base">{b.title}</Link></td>
              <td className="hidden px-6 py-6 text-xs text-zinc-400 md:table-cell">{b.date || "Not verified"}</td>
              <td className="px-3 py-5 font-mono text-xs text-zinc-100 md:px-6">{formatViewCount(b.views, "?")}</td>
              <td className="px-3 py-5 text-right text-[10px] font-semibold text-brand md:px-6 md:text-xs">Catalogued</td>
            </BattleRow>)}
          </tbody>
        </table>
      </div>
    </div>
    {!filtered.length && <p className="py-12 text-zinc-400">No battles match your search.</p>}
    <div className="mt-6 flex items-center justify-between gap-4">
      <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="rounded-lg border border-white/15 px-4 py-2 disabled:opacity-30">Previous</button>
      <span className="text-sm text-zinc-400" aria-live="polite">Page {page} of {pages}</span>
      <button disabled={page === pages} onClick={() => setPage(p => p + 1)} className="rounded-lg border border-white/15 px-4 py-2 disabled:opacity-30">Next</button>
    </div>
  </section>;
}
