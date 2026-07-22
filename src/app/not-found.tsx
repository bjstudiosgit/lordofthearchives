import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-32 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand">404 · Archive record unavailable</p>
        <h1 className="mt-5 font-display text-5xl italic uppercase md:text-7xl">This page is not published</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-400">
          The address may be incorrect, or the requested battle analysis has not completed editorial and source review.
          Catalog entries remain available from the main archives until their full analysis is ready.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-lg bg-brand px-5 py-3 text-xs font-black uppercase tracking-wide text-black">Home</Link>
          <Link href="/pengame" className="rounded-lg border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-wide text-white">PenGame archive</Link>
          <Link href="/gzone" className="rounded-lg border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-wide text-white">Gzone archive</Link>
        </div>
      </div>
    </main>
  );
}
