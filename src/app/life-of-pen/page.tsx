import type { Metadata } from "next";
import LifeOfPenClient from "./LifeOfPenClient";
import { lifeOfPenSeries } from "../../data/lifeOfPen";

export const metadata: Metadata = {
  title: "Life of Pen | Animated Video Series",
  description:
    "Watch Life of Pen, the original animated video series by Lord of the Archives. Follow the humor, drama, and culture of the UK battle rap scene in animated shorts.",
  alternates: {
    canonical: "https://www.lordofthearchives.co.uk/life-of-pen",
  },
  openGraph: {
    title: "Life of Pen | Animated Series | Lord of the Archives",
    description:
      "Watch Life of Pen, the original animated video series by Lord of the Archives exploring UK rap battle culture.",
    url: "https://www.lordofthearchives.co.uk/life-of-pen",
    siteName: "Lord of the Archives",
    type: "video.other",
    images: [
      {
        url: "https://i.ytimg.com/vi/QxbFMiLNwig/maxresdefault.jpg",
        width: 1280,
        height: 720,
        alt: "Life of Pen Animated Series - Lord of the Archives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life of Pen | Animated Series | Lord of the Archives",
    description:
      "Watch Life of Pen, the original animated video series by Lord of the Archives exploring UK rap battle culture.",
    images: ["https://i.ytimg.com/vi/QxbFMiLNwig/maxresdefault.jpg"],
  },
};

export default function LifeOfPenPage() {
  return <LifeOfPenClient />;
}
