"use client";

import { usePathname } from "next/navigation";

const NON_MONETIZED_ROUTES = new Set([
  "/about",
  "/contact",
  "/corrections",
  "/methodology",
  "/privacy",
  "/property",
  "/sources",
  "/terms",
]);

export default function AdSenseScript() {
  const pathname = usePathname();

  if (pathname.startsWith("/mc/") || NON_MONETIZED_ROUTES.has(pathname)) {
    return null;
  }

  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2858435877591429"
      crossOrigin="anonymous"
    />
  );
}
