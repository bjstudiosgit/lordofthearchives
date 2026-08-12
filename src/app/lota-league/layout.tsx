import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Combined UK Battle Rap Rankings | Lord of the Archives",
  description: "Combined PenGame and Gzone MC rankings, records and league points in the Lord of the Archives table.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/lota-league",
  },
};

export default function LotaLeagueLayout({ children }: { children: ReactNode }) {
  return children;
}
