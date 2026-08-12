import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PenGame League Table | Lord of the Archives",
  description: "PenGame battle league standings, rankings, records and points across the archive.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/league",
  },
};

export default function LeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
