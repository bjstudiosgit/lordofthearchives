"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Youtube, Film, Clapperboard, ChevronRight } from "lucide-react";
import { lifeOfPenSeries, type LifeOfPenEpisode } from "../../data/lifeOfPen";

function EpisodePlayer({ episode }: { episode: LifeOfPenEpisode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-zinc-950/80 p-4 sm:p-6 shadow-2xl backdrop-blur-sm transition-all hover:border-brand/30">
      {/* Episode Header */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-brand">
          <Film size={12} />
          Episode {episode.episodeNumber}
        </span>
      </div>

      {/* Video Container (9:16 Vertical Aspect Ratio for YouTube Shorts) */}
      <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-xl border border-white/10 bg-black shadow-inner">
        {isPlaying ? (
          <iframe
            src={`${episode.embedUrl}?autoplay=1&rel=0`}
            title={episode.title}
            className="h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
        <button type="button" onClick={() => setIsPlaying(true)} aria-label={`Play ${episode.title}`} className="group relative h-full w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-black transition-transform group-hover:scale-110">
              <Play size={28} className="translate-x-0.5 fill-black" />
            </span>
          </span>
          <div className="absolute bottom-3 left-3 right-3">
            <p className="font-display text-lg uppercase italic leading-tight text-white drop-shadow-md">
              {episode.subtitle}
            </p>
          </div>
        </button>
        )}
      </div>

      {/* Episode Details */}
      <div className="mt-5 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="font-display text-xl uppercase italic tracking-tight text-white">
            {episode.subtitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
            {episode.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LifeOfPenClient() {
  const { description, episodes, youtubeChannelUrl } = lifeOfPenSeries;

  return (
    <div className="min-h-screen bg-black pt-32 pb-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Top Bar */}
        <div className="mb-6 flex items-center gap-2 text-xs font-medium text-zinc-400">
          <Link href="/" className="hover:text-brand transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-zinc-500">Extra</span>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-white font-semibold">Life of Pen</span>
        </div>

        {/* Hero Section */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 via-zinc-950 to-black p-6 sm:p-10 lg:p-12 shadow-2xl">
          {/* Subtle gold ambient glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/10 blur-[100px]"
          />

          <div className="relative z-10 max-w-3xl">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase italic leading-none tracking-tight text-white">
              Life of <span className="text-brand">Pen</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-300">
              {description}
            </p>

            {/* Meta Tags / Attributes */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-1.5 font-bold uppercase tracking-wider text-zinc-300">
                <Clapperboard size={13} className="text-brand" />
                {episodes.length} Episodes
              </span>
            </div>

            {/* YouTube Channel CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(242,125,38,0.3)] transition-all hover:bg-brand/90 hover:scale-[1.02]"
              >
                <Youtube size={16} />
                <span>Subscribe on YouTube</span>
              </a>
              <Link
                href="/peoples-vote"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-zinc-900/80 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
              >
                <span>View People&apos;s League</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="mb-14">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-brand">Season 1</p>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl uppercase italic tracking-tight text-white">
                All Episodes
              </h2>
            </div>
            <span className="font-mono text-xs text-zinc-400">
              {episodes.length} Released
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {episodes.map((episode) => (
              <EpisodePlayer key={episode.id} episode={episode} />
            ))}
          </div>
        </div>

        {/* Series Info / Lore Footer Card */}
        <section className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
          <div className="max-w-3xl">
            <h3 className="font-display text-xl sm:text-2xl uppercase italic tracking-tight text-white">
              About <span className="text-brand">Life of Pen</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Created and produced by Lord of the Archives, <strong>Life of Pen</strong> translates the energy,
              humor, and infamous backstage banter of UK rap battle culture into serialized animated shorts.
              From underground basement roots to modern tournament showdowns, the series offers a comedic, stylized
              look behind the mics.
            </p>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-zinc-500">
              New episodes drop regularly on the official Lord of the Archives YouTube channel. Make sure to subscribe
              and hit the bell icon to never miss an episode.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs">
              <Link href="/pengame" className="text-brand hover:underline font-bold uppercase tracking-wider">
                Explore PenGame League &rarr;
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/mcs" className="text-zinc-400 hover:text-white transition-colors">
                Browse MC Profiles
              </Link>
              <span className="text-zinc-600">•</span>
              <Link href="/hosts-judges" className="text-zinc-400 hover:text-white transition-colors">
                Hosts &amp; Judges Archive
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
