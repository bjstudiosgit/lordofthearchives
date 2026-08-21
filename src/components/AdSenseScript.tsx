"use client";

import { useEffect } from "react";
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
  const isMonetizedRoute = !pathname.startsWith("/mc/") && !NON_MONETIZED_ROUTES.has(pathname);

  useEffect(() => {
    if (!isMonetizedRoute || document.getElementById("adsense-loader")) return;

    const script = document.createElement("script");
    script.id = "adsense-loader";
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2858435877591429";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, [isMonetizedRoute]);

  return null;
}
