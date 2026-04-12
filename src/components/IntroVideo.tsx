import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Play, ChevronRight, Share2 } from "lucide-react";
import { mcs } from "../data/mcs";
import { battles } from "../data/battles";

export default function IntroVideo() {
  return (
    <section className="relative w-full bg-black min-h-[60vh] overflow-x-hidden flex items-center z-30">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-30 pt-32 pb-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="mb-10">
              <h1 className="text-3xl md:text-6xl font-display italic leading-[1.1] uppercase mb-4 tracking-tight">
                It's <span className="text-brand">Lord of the Archives</span>. Grime History Encyclopedia.
              </h1>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-12">
              <div className="group">
                <div className="text-4xl font-display italic text-white group-hover:text-brand transition-colors">11.4K</div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Subscribers</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="group">
                <div className="text-4xl font-display italic text-white group-hover:text-brand transition-colors">165K+</div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Total Views</div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="group">
                <div className="text-4xl font-display italic text-white group-hover:text-brand transition-colors">{mcs.length}</div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Pro MCs</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative lg:pl-12"
          >
            <div className="relative group">
              {/* Integrated Badge */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand rounded-full flex items-center justify-center font-display text-xl text-black -rotate-12 z-20 shadow-2xl shadow-brand/40 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                LOTA
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)] pointer-events-none z-40" />
    </section>
  );
}
