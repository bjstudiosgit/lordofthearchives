// Matchups and video IDs checked against the league's own YouTube uploads.
export * from "./talkIsCheapClashData";

export const getTalkIsCheapBattleSlug = (mc1: string, mc2: string) =>
  `${mc1}-vs-${mc2}`.replace(/Roman \(Fergz\)/g, "Fergz").toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

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
      ["Marcel", "Rygwan", "bevW-qD3zmw"],
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
    showResearchSource: false,
    battles: [
      ["Zen", "Tantskii", "it5m1bz8jQQ"],
      ["Lady Shocker", "Badee Harz", "PNNUinZ87RI"],
      ["Icey", "Roman (Fergz)", "M99-b0VfqSw"],
    ],
  },
] satisfies { name: string; date: string; venue: string; sourceUrl?: string; showResearchSource?: boolean; note?: string; battles: [string, string, string][] }[];
