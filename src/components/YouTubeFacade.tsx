"use client";

import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubeFacadeProps {
  title: string;
  videoId: string;
}

export default function YouTubeFacade({ title, videoId }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [useFallbackThumbnail, setUseFallbackThumbnail] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  const thumbnail = useFallbackThumbnail
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play ${title}`}
      className="group relative block h-full w-full overflow-hidden bg-zinc-950 text-left focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand"
    >
      <img
        src={thumbnail}
        alt=""
        aria-hidden="true"
        width={1280}
        height={720}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        onLoad={(event) => {
          if (!useFallbackThumbnail && event.currentTarget.naturalWidth < 480) {
            setUseFallbackThumbnail(true);
          }
        }}
        onError={() => {
          if (!useFallbackThumbnail) setUseFallbackThumbnail(true);
        }}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-brand text-black shadow-2xl transition group-hover:scale-105">
          <Play size={34} className="ml-1 fill-current" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-5 text-center text-[10px] font-black uppercase tracking-[0.24em] text-white">
        Play battle
      </span>
    </button>
  );
}
