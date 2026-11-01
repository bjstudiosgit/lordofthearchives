"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Sparkles, Film, Copy, Check } from "lucide-react";

interface RetroGzoneBannerProps {
  className?: string;
  showControls?: boolean;
}

export default function RetroGzoneBanner({
  className = "",
  showControls = true,
}: RetroGzoneBannerProps) {
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const frames = [
    { id: 1, title: "1. Brand & Teaser", desc: "Hazard stripes, Lord of the Archives announcement" },
    { id: 2, title: "2. The Event", desc: "Season 1 live showdown roster announcement" },
    { id: 3, title: "3. Tickets On Sale", desc: "Hero explosive starburst & fiery gradient" },
    { id: 4, title: "4. Click Here CTA", desc: "Classic Windows 95 raised 3D button & pointer" },
    { id: 5, title: "5. Urgency Flash", desc: "Pressed bevel button & rapid flash alert" },
  ];

  const currentSrc =
    selectedFrame === null
      ? "/banners/gzone-retro-banner-2x.gif"
      : `/banners/retro-banner-frame-${selectedFrame}.png`;

  const copyEmbedCode = () => {
    const embed = `<a href="https://www.gzonerapbattle.co.uk" target="_blank" rel="noopener noreferrer" title="Gzone Rap Battle - Tickets On Sale Now">
  <img src="https://www.lordofthearchives.co.uk/banners/gzone-retro-banner-2x.gif" width="468" height="60" alt="Gzone Rap Battle Tickets On Sale Now - Lord of the Archives" style="border: 2px outset #dfdfdf; image-rendering: pixelated;" />
</a>`;
    navigator.clipboard.writeText(embed);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-orange-500/30 bg-zinc-950/80 p-4 shadow-[0_0_30px_rgba(255,122,26,0.15)] backdrop-blur-md ${className}`}
    >
      {/* 90s Web Banner Header Bar */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-wider text-orange-400 uppercase">
            [ VINTAGE 468x60 WEB AD BANNER // CIRCA 1999 ]
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={copyEmbedCode}
            className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-zinc-300 transition-colors hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-400"
            title="Copy HTML embed snippet"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            {copied ? "Copied HTML!" : "Copy Embed"}
          </button>
          <a
            href="https://www.gzonerapbattle.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[10px] text-zinc-400 transition-colors hover:text-orange-400 hover:underline"
          >
            <span>gzonerapbattle.co.uk</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* The Banner Container */}
      <div className="flex flex-col items-center justify-center py-2">
        <a
          href="https://www.gzonerapbattle.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block transition-transform hover:scale-[1.01]"
          title="Click to visit gzonerapbattle.co.uk"
        >
          {/* Subtle 90s CRT Glow on Hover */}
          <div className="absolute -inset-1 rounded bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20 opacity-0 blur transition-opacity group-hover:opacity-100" />

          {/* Actual 468x60 Banner rendered crisp with nearest neighbor */}
          <div className="relative overflow-hidden rounded-[2px] shadow-2xl">
            <img
              src={currentSrc}
              alt="Gzone Rap Battle - Tickets On Sale Now (Lord of the Archives)"
              width={468}
              height={60}
              className="block h-[60px] w-full max-w-[468px] object-contain [image-rendering:pixelated]"
            />
          </div>
        </a>

        <p className="mt-2 text-center font-mono text-[10px] text-zinc-500">
          Standard IAB 468×60 Animated Banner • 5-Frame Narrative Rotation • 90s Dithered Palette
        </p>
      </div>

      {/* Frame Inspector Controls */}
      {showControls && (
        <div className="mt-3 border-t border-white/5 pt-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
              <Film size={12} className="text-orange-400" />
              <span>Inspect Frames:</span>
            </span>
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setSelectedFrame(null)}
                className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${
                  selectedFrame === null
                    ? "bg-orange-500 font-bold text-black"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                ★ Full Animated GIF
              </button>
              {frames.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFrame(f.id)}
                  className={`rounded px-2 py-0.5 font-mono text-[10px] transition-colors ${
                    selectedFrame === f.id
                      ? "bg-orange-500 font-bold text-black"
                      : "border border-white/10 bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                  title={f.desc}
                >
                  Frame {f.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
