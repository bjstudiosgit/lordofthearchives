import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "UK Battle Rap MC Profiles | Lord of the Archives",
  description: "Browse MC profiles, battle records, form, statistics and archive history from UK rap battle leagues.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/mcs",
  },
};

export default function McIndexLayout({ children }: { children: ReactNode }) {
  return children;
}
