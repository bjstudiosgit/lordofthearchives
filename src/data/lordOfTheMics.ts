import type { Battle } from "./battleTypes";

type LordOfTheMicsBattleInput = [
  series: string,
  mc1: string,
  mc2: string,
  date: string,
  publicStatus: "public" | "unavailable" | "missing",
  videoId?: string,
];

const makeBattle = ([series, mc1, mc2, date, publicStatus, videoId]: LordOfTheMicsBattleInput, index: number): Battle => {
  const slug = `${mc1}-vs-${mc2}`
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const season = Number(series.replace(/\D/g, ""));
  const battleDate = /^\d{4}$/.test(date) ? `${date}-01-01` : date;
  const videoUrl = publicStatus === "public" && videoId ? `https://www.youtube.com/watch?v=${videoId}` : null;
  const statusNote =
    publicStatus === "public"
      ? "Video available"
      : publicStatus === "unavailable"
        ? "Upload unavailable"
        : "Full clash missing";

  return {
    id: `lotm-${series.toLowerCase()}-${slug}`,
    slug,
    mc1,
    mc2,
    title: `${mc1} vs ${mc2}`,
    date: battleDate,
    videoUrl,
    views: null,
    winner: "unknown",
    theme: "lotm",
    season,
    competition: "Lord of the Mics",
    subGroup: `Season ${season}`,
    customEp: series,
    seasonOrder: index + 1,
    statusNote,
  };
};

const lordOfTheMicsBattleInputs: LordOfTheMicsBattleInput[] = [
  ["LOTM1", "Bruza", "Crazy Titch", "2004", "public", "FEGclkdHaTY"],
  ["LOTM1", "Domino", "Slix", "2004", "public", "K_0s1CRgQYw"],
  ["LOTM1", "Ghetts", "Napper", "2004", "public", "X8CvAB1nJPM"],
  ["LOTM1", "Kal Serious", "Corey Johnson", "2004", "public", "K_0s1CRgQYw"],
  ["LOTM1", "SLK", "Younger Nasty", "2004", "public", "y6bzN6MDcHQ"],
  ["LOTM1", "Scratchy", "Footsie", "2004", "public", "jHYp8HmpZ-E"],
  ["LOTM1", "Wiley", "Kano", "2004", "public", "nTF_T47CDnI"],
  ["LOTM2", "Bashy", "Demon", "2006", "public", "pS1WvYnspGw"],
  ["LOTM2", "Big Narstie", "Scorcher", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "Craze 24", "Ill Millz", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "Frisco", "Double O", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "Rage", "Fuda Guy", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "Skepta", "Devilman", "2006", "public", "-bHRcjqnkAI"],
  ["LOTM2", "Snakeyman", "Al Blaze", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "South Side Soldiers", "YGC", "2006", "public", "cfgnvIChHbw"],
  ["LOTM2", "Tinchy Stryder", "Earz", "2006", "public", "f5uh1SF26OU"],
  ["LOTM3", "D Power", "Warriko", "2011", "unavailable"],
  ["LOTM3", "J1", "Merky Ace", "2011", "missing"],
  ["LOTM3", "Jammin", "Clipson", "2011", "public", "3HTTAyCLJfc"],
  ["LOTM3", "Marger", "Lay-Z", "2011", "missing"],
  ["LOTM3", "Rival", "Desperado", "2011", "missing"],
  ["LOTM3", "Sox", "Kozzie", "2011", "public", "sf7CO3nAbwQ"],
  ["LOTM3", "Tez Kidd", "Hypes", "2011", "unavailable"],
  ["LOTM3", "Tre Mission", "Jendor", "2011", "missing"],
  ["LOTM4", "Fangol", "Blay", "2012", "missing"],
  ["LOTM4", "Hecki", "Drifter", "2012", "missing"],
  ["LOTM4", "Jaykae", "Discarda", "2012", "missing"],
  ["LOTM4", "K Dot", "Depz", "2012", "missing"],
  ["LOTM4", "Koder", "Gritz", "2012", "missing"],
  ["LOTM4", "LK", "Lady Shocker", "2012", "missing"],
  ["LOTM4", "M.I.K", "Pressure", "2012", "missing"],
  ["LOTM5", "Big Shizz", "Blizzard", "2013", "missing"],
  ["LOTM5", "D2", "Eyez", "2013", "missing"],
  ["LOTM5", "Grimmy", "Grim Sickerz", "2013", "missing"],
  ["LOTM5", "Lil Choppa", "Zeo", "2013", "public", "JAz7aGtiQek"],
  ["LOTM5", "Maxsta", "Lil Nasty", "2013", "public", "YHNZ8lLImDM"],
  ["LOTM5", "Proton", "Realz", "2013", "missing"],
  ["LOTM6", "AK", "Villain", "2014", "public", "u_ScX8DpdFg"],
  ["LOTM6", "Dorris", "Hazman", "2014", "public", "aFUKy2Psprk"],
  ["LOTM6", "Local", "Jay Eyes", "2014", "missing"],
  ["LOTM6", "Opium", "Dialect", "2014", "public", "vOCY74Q9q3I"],
  ["LOTM6", "P Money", "Big H", "2014", "public", "XvFc6K7OqAE"],
  ["LOTM6", "Yannick Bolasie", "Bradley Wright-Phillips", "2014", "public", "A6vuCUCri9o"],
  ["LOTM7", "Aye Nizzy", "Flawz", "2015", "missing"],
  ["LOTM7", "Bigz Man", "Xtra", "2015", "unavailable"],
  ["LOTM7", "Blacks", "Face", "2015", "public", "L3vlbA067vI"],
  ["LOTM7", "Blessed", "Pawz", "2015", "public", "fU7FznpFcS0"],
  ["LOTM7", "Jaykae", "Kozzie", "2015", "public", "iADrb55JdFQ"],
  ["LOTM7", "Lady Lykez", "Sox", "2015", "unavailable"],
  ["LOTM7", "Local", "Dorris", "2015", "public", "vDOPfj6-sz8"],
  ["LOTM7", "Mez", "Trappy", "2015", "public", "537mnegJbIo"],
  ["LOTM7", "RD", "Statz", "2015", "missing"],
  ["LOTM7", "Row D", "XP", "2015", "public", "VRuwCGPJ0Z0"],
  ["LOTM8", "Funky Dee", "Mischief", "2019", "public", "hiSxnxVTLGI"],
  ["LOTM8", "Jafro", "Dialect", "2019", "public", "q0ejFukolQI"],
  ["LOTM8", "Logan", "Armz", "2019", "missing"],
  ["LOTM8", "Rawza", "Gen", "2019", "public", "J-SwZ3Po4UA"],
  ["LOTM8", "Reece West", "F.O.S", "2019", "missing"],
  ["LOTM8", "Ten Dixon", "Tana", "2019", "public", "aZQsbj0kPVk"],
  ["LOTM8", "Tommy B", "JAY0117", "2019", "public", "RhEXJC3Iwmw"],
  ["LOTM8", "T Roadz", "SBK", "2019", "missing"],
  ["LOTM8", "Yizzy", "Micofcourse", "2019", "public", "aZQsbj0kPVk"],
  ["LOTM9", "Skinner", "CY", "2020-10-18", "public", "iMZPzsQlNYo"],
];

export const lordOfTheMicsBattles: Battle[] = lordOfTheMicsBattleInputs.map(makeBattle);
