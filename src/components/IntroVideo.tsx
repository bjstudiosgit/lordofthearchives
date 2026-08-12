"use client";
import { motion } from "motion/react";

export default function IntroVideo() {
  return (
    <section className="relative w-full bg-black min-h-[70vh] overflow-hidden flex items-center z-30 border-b border-brand/30">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <picture className="absolute inset-0 block">
          <source
            type="image/webp"
            srcSet="/hero-archives-emblem-768.webp 768w, /hero-archives-emblem-1280.webp 1280w, /hero-archives-emblem.webp 1600w"
            sizes="100vw"
          />
          <img
            src="/hero-archives-emblem.png"
            alt=""
            aria-hidden="true"
            width={1659}
            height={948}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] brightness-125 contrast-110 sm:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent z-30" />

      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative max-w-4xl border-l-4 border-brand py-2 pl-6 sm:pl-10"
        >
          <p className="mb-5 text-[10px] font-black uppercase tracking-[0.34em] text-brand sm:text-xs">
            The independent UK rap battle archive
          </p>
          <h1 className="max-w-4xl font-display text-5xl italic uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            Every battle leaves a record. <span className="text-brand">We keep it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
            Explore connected battle pages, MC records, confirmed results and league standings across PenGame and
            Gzone—built to make the culture easier to find, follow and remember.
          </p>
        </motion.div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] pointer-events-none z-40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent z-40" />
    </section>
  );
}
