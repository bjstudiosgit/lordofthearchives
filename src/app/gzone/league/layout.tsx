import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gzone League Table | Lord of the Archives",
  description: "Gzone Season 1 league standings, battle records, rankings and points.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/gzone/league",
  },
};

export default function GzoneLeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
