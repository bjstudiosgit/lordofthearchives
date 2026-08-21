import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

const articleTitle = "PenGame Heads to Ministry of Sound as 2026 View Figures Trail Its Peak";

export const metadata: Metadata = {
  title: `${articleTitle} | Lord of the Archives`,
  description:
    "PenGame's sold-out Ministry of Sound event arrives as its 2026 YouTube releases sit below the view levels of the platform's biggest seasons.",
  alternates: { canonical: "https://www.lordofthearchives.co.uk/news/did-pengame-fall-off" },
  openGraph: {
    title: articleTitle,
    description:
      "PenGame's current release volume remains high, but the archive shows a marked gap between 2026 view figures and its peak-era catalogue.",
    type: "article",
    publishedTime: "2026-08-21T00:00:00.000Z",
  },
};

const sources = [
  { label: "Lord of the Archives PenGame dataset", detail: "YouTube view-count snapshot refreshed 20 August 2026.", href: "/pengame" },
  { label: "PenGame official site", detail: "Current event messaging for the return to Ministry of Sound.", href: "https://www.pengame.co.uk/site" },
  { label: "23 August Eventbrite listing", detail: "Lists the Ministry of Sound event as sold out.", href: "https://www.eventbrite.co.uk/e/pengame-champions-league-23rd-august-2026-tbc-tickets-1982111643282" },
  { label: "The Shade Borough: Ginga Jay removed from PenGame", detail: "April 2022 report on the host's removal following backlash to comments made on BKChat LDN.", href: "https://www.theshadeborough.com/latest/ginga-jay-black-women-pengame" },
];

export default function DidPengameFallOffPage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: articleTitle,
    description:
      "PenGame's sold-out Ministry of Sound event arrives as its 2026 YouTube releases sit below the view levels of the platform's biggest seasons.",
    datePublished: "2026-08-21",
    author: { "@type": "Organization", name: "Lord of the Archives" },
    publisher: { "@type": "Organization", name: "Lord of the Archives" },
    mainEntityOfPage: "https://www.lordofthearchives.co.uk/news/did-pengame-fall-off",
  };

  return (
    <main className="min-h-screen bg-[#080809] pb-24 pt-28 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/news" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition hover:text-brand">
          <ArrowLeft size={14} /> News
        </Link>
        <header className="border-b border-white/10 pb-10 pt-10">
          <p className="text-[10px] font-black uppercase tracking-[0.26em] text-brand">News analysis · PenGame</p>
          <h1 className="mt-5 font-display text-5xl italic uppercase leading-[0.9] text-white sm:text-6xl">
            PenGame heads to Ministry of Sound as 2026 view figures trail its peak
          </h1>
          <p className="mt-6 text-xl leading-8 text-zinc-300">
            The Champions League returns to Ministry of Sound this weekend after a heavily discounted ticket offer helped fill the room, while the platform&apos;s latest YouTube releases continue to trail its biggest seasons.
          </p>
          <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">
            <CalendarDays size={14} /> 21 August 2026 · Lord of the Archives
          </div>
        </header>

        <div className="py-10 text-base leading-8 text-zinc-300 sm:text-lg">
          <p>PenGame&apos;s Champions League is set to return to Ministry of Sound on 23 August. The current Eventbrite listing shows the event as sold out, but that headline needs context: the sell-out followed a promotion offering a half-price ticket with a free guest place.</p>
          <p className="mt-6">The move follows a period in which the battle platform has continued to release regularly, but its YouTube catalogue has not matched the lifetime view figures of its peak-era battles. An analysis of the Lord of the Archives PenGame catalogue found a 2026 median of about <strong className="text-white">60,000 views</strong> per released battle, compared with <strong className="text-white">127,500</strong> across Seasons 4 and 5.</p>

          <h2 className="mt-12 font-display text-3xl italic uppercase leading-none text-white sm:text-4xl">The loss of a familiar face</h2>
          <figure className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
            <img
              src="/ginga-jay.png"
              alt="Ginga Jay"
              width={807}
              height={855}
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-xs text-zinc-500">Ginga Jay.</figcaption>
          </figure>
          <p className="mt-6">The current run has also followed a visible change in PenGame&apos;s presenting team. In April 2022, The Shade Borough reported that Ginga Jay had been removed as a PenGame host after backlash to comments he made on BKChat LDN. The report said PenGame creator Margs had announced the decision.</p>
          <p className="mt-6">Ginga Jay had become a recognisable part of the platform&apos;s on-screen identity, so his departure is part of the wider story of how PenGame changed between its earlier peak and the current Champions League era. There is no public evidence that links his removal directly to the later view figures, and it should not be presented as a proven explanation for them.</p>

          <h2 className="mt-12 font-display text-3xl italic uppercase leading-none text-white sm:text-4xl">A different scale of release</h2>
          <p className="mt-6">PenGame&apos;s strongest catalogue contains the kind of individual releases that travelled well beyond its core audience. KANDI vs PRYNLEE has passed two million views, while REN DMC vs RENAYA is close to 1.93 million. Those numbers are not typical of the current run.</p>
          <p className="mt-6">Of the 43 2026 battles included in the archive snapshot, 35 remain below 100,000 views and only one has passed 250,000. The 40 Champions League uploads in the dataset have still generated around 2.94 million views combined, but that attention is spread across far more releases.</p>
          <p className="mt-6">That distinction matters. The figures show that PenGame still has a substantial audience; they do not, on their own, show that the platform has stopped working. They show a catalogue with fewer breakout battles and less concentrated attention than the platform&apos;s biggest seasons.</p>

          <h2 className="mt-12 font-display text-3xl italic uppercase leading-none text-white sm:text-4xl">What the figures cannot prove</h2>
          <p className="mt-6">Lifetime YouTube views are an imperfect comparison. Older battles have had years to circulate, while recent Champions League releases are still finding an audience. Public seven-day or 30-day viewing data would be a fairer measure, but it is not available for the full catalogue.</p>
          <p className="mt-6">The numbers also cannot isolate a single cause. Match-up strength, release timing, thumbnails, short-form promotion and the pace of uploads can all affect how one battle performs. A larger release schedule can also make it harder for any one upload to become a major event.</p>

          <h2 className="mt-12 font-display text-3xl italic uppercase leading-none text-white sm:text-4xl">A full room is not the same as full-price demand</h2>
          <p className="mt-6">The promotion makes the sold-out Ministry date more complicated than a straightforward demand signal. A half-price ticket with a free guest place sharply reduces the average paid entry. It can fill a room, but it does not show that the same room would have sold out at the standard price.</p>
          <p className="mt-6">That does not make the offer pointless. For a filmed battle event, a packed floor has real value: louder reactions, stronger footage, better clips and a more convincing visual product. If that material reaches new viewers or converts guests into returning ticket buyers, a cut-price first visit can work as marketing rather than merely lost revenue.</p>
          <p className="mt-6">The sustainability question comes when that becomes the normal route to capacity. Repeated deep discounts can teach an audience to wait for the next offer, weaken the credibility of the headline ticket price and leave less money to cover artists, production, venue, security and promotion. The room can look healthy while the margin behind it becomes tighter.</p>
          <p className="mt-6">The important test is what happens next: whether a fuller Ministry room produces stronger releases, repeat buyers at a higher price and a bigger audience for individual clashes. Until then, the sell-out is evidence that PenGame can still create an occasion—but not, by itself, evidence that its live model is back at full strength.</p>
        </div>

        <aside className="border-t border-white/10 py-10" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="text-[10px] font-black uppercase tracking-[0.24em] text-brand">Sources and methodology</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-400">The view analysis uses released PenGame records with a YouTube URL, published date on or before 20 August 2026 and a numeric view count. YouTube rounds public view totals, which continue to change. The ticket-offer description is based on a PenGame promotion supplied to Lord of the Archives; the current Eventbrite listing confirms the sold-out status but does not preserve the offer terms.</p>
          <ul className="mt-5 space-y-3">
            {sources.map((source) => (
              <li key={source.label}>
                <a href={source.href} target={source.href.startsWith("http") ? "_blank" : undefined} rel={source.href.startsWith("http") ? "noreferrer" : undefined} className="text-sm font-bold text-white underline decoration-brand/60 underline-offset-4 transition hover:text-brand">{source.label}</a>
                <p className="mt-1 text-sm text-zinc-500">{source.detail}</p>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    </main>
  );
}
