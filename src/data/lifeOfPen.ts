export interface LifeOfPenEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  subtitle: string;
  videoId: string;
  youtubeUrl: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
  duration?: string;
  releaseDate?: string;
  tags: string[];
}

export const lifeOfPenSeries = {
  title: "Life of Pen",
  creator: "Lord of the Archives",
  genre: "Animated Comedy & UK Battle Rap Satire",
  format: "Animated Shorts",
  youtubeChannelUrl: "https://www.youtube.com/@LordoftheArchives",
  description:
    "Life of Pen is an original animated video series by Lord of the Archives. Diving deep into the culture, backstage comedy, and competitive spirit of the UK rap battle scene, each episode brings the iconic personalities and absurd moments of battle rap to life in full animation.",
  episodes: [
    {
      id: "ep1",
      episodeNumber: 1,
      title: "Life of Pen EP1 - New Beginnings",
      subtitle: "New Beginnings",
      videoId: "QxbFMiLNwig",
      youtubeUrl: "https://www.youtube.com/shorts/QxbFMiLNwig",
      embedUrl: "https://www.youtube-nocookie.com/embed/QxbFMiLNwig",
      thumbnail: "https://i.ytimg.com/vi/QxbFMiLNwig/maxresdefault.jpg",
      description:
        "The debut episode of Life of Pen. Step into the animated universe of UK battle rap as new rivalries ignite and the journey begins.",
      duration: "Short",
      tags: ["Animation", "Comedy", "UK Rap", "PenGame"],
    },
    {
      id: "ep2",
      episodeNumber: 2,
      title: "Life of Pen EP2 - Open Wide",
      subtitle: "Open Wide",
      videoId: "vfOkLg2j4AQ",
      youtubeUrl: "https://www.youtube.com/shorts/vfOkLg2j4AQ",
      embedUrl: "https://www.youtube-nocookie.com/embed/vfOkLg2j4AQ",
      thumbnail: "https://i.ytimg.com/vi/vfOkLg2j4AQ/maxresdefault.jpg",
      description:
        "Episode 2 of Life of Pen. Tension builds in the animated clash circuit as the battlers face the heat under the lights.",
      duration: "Short",
      tags: ["Animation", "Comedy", "UK Rap", "Battle Rap"],
    },
  ] as LifeOfPenEpisode[],
};
