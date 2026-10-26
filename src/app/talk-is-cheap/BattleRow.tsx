"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function BattleRow({ href, children, animatedIndex }: { href?: string; children: ReactNode; animatedIndex?: number }) {
  const router = useRouter();

  return (
    <motion.tr
      initial={animatedIndex === undefined ? false : { opacity: 0, y: 10 }}
      whileInView={animatedIndex === undefined ? undefined : { opacity: 1, y: 0 }}
      transition={animatedIndex === undefined ? undefined : { delay: animatedIndex * 0.05 }}
      viewport={{ once: true }}
      className={`group transition-all duration-300 hover:bg-white/5${href ? " cursor-pointer" : ""}`}
      onClick={(event) => {
        if (!href) return;
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
    </motion.tr>
  );
}
