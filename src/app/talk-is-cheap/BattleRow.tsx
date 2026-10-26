"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function BattleRow({ href, children }: { href: string; children: ReactNode }) {
  const router = useRouter();

  return (
    <tr
      className="group cursor-pointer transition-all duration-300 hover:bg-white/5"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a, button")) return;
        if (window.getSelection()?.toString()) return;
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          router.push(href);
        }
      }}
    >
      {children}
    </tr>
  );
}
