// Matchups and video IDs checked against the league's own YouTube uploads.
export const talkIsCheapSeries = [
  {
    name: "Proving Grounds Part 2",
    date: "2026-09-12",
    venue: "Made In Brum Studio, Birmingham",
    battles: [
      ["Kaizen", "Rottweiler", "TAP3_T3qLaU"],
      ["Lil K4i", "GVO Mikez", "tihYsR4LO9g"],
      ["YM", "Penno", "vLuS8RrdxiY"],
    ],
  },
  {
    name: "Proving Grounds",
    date: "2026-08-22",
    venue: "ULTRA, Leeds",
    battles: [
      ["7 Wxve", "Akzzey", "T_arXX4oB7s"],
      ["Sam Essay", "Hytz", "SjZeQ_a5c6M"],
      ["Flowen", "TY", "e5fz59kt-4c"],
    ],
  },
  {
    name: "Inception",
    date: "2026-03-28",
    venue: "Savanna Restaurant & Cocktail Bar, Birmingham",
    sourceUrl: "https://www.eventbrite.co.uk/e/talk-is-cheap-inception-tickets-1981859563304",
    battles: [
      ["Tricky", "Ryno", "X2SZLeCobos"],
      ["Afrodon", "Anbu Sensei", "r5zs_J0FTrI"],
      ["Deeno", "Ra'Siah", "V-sASb7hwgE"],
    ],
  },
  {
    name: "Aftermath",
    date: "2025-12-20",
    venue: "Fusion Bar & Cocktail Lounge, Leeds",
    sourceUrl: "https://www.eventbrite.co.uk/e/talk-is-cheap-aftermath-tickets-1975333188742",
    note: "The upload title says 2026; the Aftermath event was dated 20 December 2025.",
    battles: [["Afrodon", "Ricko", "127uCZgUEjM"]],
  },
  {
    name: "Resurgence",
    date: "2024-11-23",
    venue: "Freedom Mills, Leeds",
    sourceUrl: "https://ra.co/events/2039357",
    note: "The event advertised four clashes; three identified uploads are catalogued here.",
    battles: [
      ["TheRealRP", "Gaztime", "nEfenS2ik2w"],
      ["Flowen", "Blxtz", "mHWCLMrw2nE"],
      ["Shelton", "Relapse", "OOZJhf8Pdtk"],
    ],
  },
  {
    name: "Initiation",
    date: "2019-09-14",
    venue: "HiFi Club, Leeds",
    note: "Research identifies this rescheduled date; an earlier listing advertised 22 June at Eiger Studios.",
    battles: [
      ["Callum Marcel", "Rygwan", "bevW-qD3zmw"],
      ["T-Zer", "Hytz", "XJlcXSvUb7s"],
      ["Swiftz", "Blxtz", "4_vJ4PqcqP8"],
      ["Dialect", "Tali", "Xlsmr001_rU"],
      ["JH", "Polar", "pbhbtiP4KVs"],
    ],
  },
  {
    name: "Verbal Warning",
    date: "2019-02-23",
    venue: "Belgrave Music Hall, Leeds",
    sourceUrl: "https://versetracker.com/events/talk-is-cheap-entertainment-verbal-warning",
    battles: [
      ["Icey", "Fergz", "M99-b0VfqSw"],
      ["Lady Shocker", "Badee Harz", "PNNUinZ87RI"],
      ["Zen", "Tantskii", "it5m1bz8jQQ"],
    ],
  },
] satisfies { name: string; date: string; venue: string; sourceUrl?: string; note?: string; battles: [string, string, string][] }[];
