"use client";

import { useEffect, useRef, useState, type ImgHTMLAttributes, type SyntheticEvent } from "react";

type McImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  alt: string;
};

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "MC";

const getResponsiveSrcSet = (src: ImgHTMLAttributes<HTMLImageElement>["src"]) => {
  if (typeof src !== "string" || !/\.webp$/i.test(src)) return undefined;

  return `${src.replace(/\.webp$/i, "-160.webp")} 160w, ${src.replace(/\.webp$/i, "-400.webp")} 400w, ${src} 800w`;
};

export default function McImage({
  alt,
  decoding,
  loading,
  onError,
  sizes,
  src,
  srcSet,
  ...props
}: McImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  const initials = getInitials(alt);
  const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#18181b"/><circle cx="50" cy="50" r="34" fill="#27272a" stroke="#f5c518" stroke-width="2"/><text x="50" y="58" text-anchor="middle" font-family="Arial, sans-serif" font-size="25" font-weight="700" fill="#f5c518">${initials}</text></svg>`;
  const fallbackSrc = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallback)}`;

  useEffect(() => {
    setFailed(false);
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth === 0) setFailed(true);
  }, [src]);

  const handleError = (event: SyntheticEvent<HTMLImageElement>) => {
    onError?.(event);
    if (!failed) setFailed(true);
  };

  const responsiveSrcSet = failed ? undefined : srcSet ?? getResponsiveSrcSet(src);

  return (
    <img
      {...props}
      ref={imageRef}
      src={failed ? fallbackSrc : src}
      srcSet={responsiveSrcSet}
      sizes={sizes ?? (responsiveSrcSet ? "(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" : undefined)}
      alt={alt}
      loading={loading ?? "lazy"}
      decoding={decoding ?? "async"}
      onError={handleError}
    />
  );
}
