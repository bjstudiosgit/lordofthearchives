import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PenGame Rap Battle Archive | Lord of the Archives",
  description: "Browse PenGame rap battles by season, with clash analysis, results, dates and recorded YouTube views.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/pengame",
  },
};

export default function PengameLayout({ children }: { children: ReactNode }) {
  return children;
}
