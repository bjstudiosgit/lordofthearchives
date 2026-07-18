import fs from "fs";
import { pengameBattles } from "./src/data/pengameBattles";
import { gzoneBattles } from "./src/data/gzone";

const pengameBattlesPath = "src/data/pengameBattles.ts";
const gzoneBattlesPath = "src/data/gzone.ts";

function getVideoId(videoUrl?: string | null): string | null {
  if (!videoUrl) return null;

  const url = new URL(videoUrl);
  if (url.hostname.includes("youtu.be")) return url.pathname.slice(1) || null;
  return url.searchParams.get("v");
}

function formatViews(views: number) {
  if (views >= 1000) return `${Math.round(views / 1000)}k`;
  return views.toString();
}

function formatGzoneViews(views: number) {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceBattleViews(source: string, battleId: string, views: string): string {
  const idMatch = source.match(new RegExp(`\\r?\\n\\s*\\{\\r?\\n\\s*"id": "${escapeRegExp(battleId)}"`));
  if (!idMatch?.index) return source;

  const start = idMatch.index;
  const nextBattle = source.slice(start + idMatch[0].length).search(/\r?\n\s*\{\r?\n\s*"id": "/);
  const end = nextBattle === -1 ? source.length : start + idMatch[0].length + nextBattle;
  const original = source.slice(start, end);
  const updated = /"views":/.test(original)
    ? original.replace(/("views":\s*)("[^"]*"|null|\d+)/, `$1"${views}"`)
    : original.replace(/("videoUrl":\s*(?:"[^"]*"|\r?\n\s*"[^"]*"),)(\r?\n)/, `$1$2    "views": "${views}",$2`);

  return source.slice(0, start) + updated + source.slice(end);
}

function replaceGzoneBattleViews(source: string, episode: string, views: string): string {
  return source.replace(
    new RegExp(`(makeBattle\\("${escapeRegExp(episode)}",\\s*"[^"]+",\\s*"[^"]+",\\s*)"[^"]+"`),
    `$1"${views}"`,
  );
}

async function fetchViews() {
  let pengameSource = fs.readFileSync(pengameBattlesPath, "utf8");
  let gzoneSource = fs.readFileSync(gzoneBattlesPath, "utf8");
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const battlesBySeason = new Map<string, Array<(typeof pengameBattles)[number] & { videoId: string }>>();

  for (const battle of pengameBattles) {
    const videoId = getVideoId(battle.videoUrl);
    if (!videoId) continue;

    const season = String(battle.season);
    battlesBySeason.set(season, [...(battlesBySeason.get(season) ?? []), { ...battle, videoId }]);
  }

  for (const [season, battles] of Array.from(battlesBySeason.entries()).sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`\nSeason ${season}`);

    for (const battle of battles) {
      const url = `https://returnyoutubedislikeapi.com/votes?videoId=${battle.videoId}`;

      try {
        const response = await fetch(url);
        const json = await response.json();
        const views = formatViews(Number(json.viewCount));

        pengameSource = replaceBattleViews(pengameSource, battle.id, views);
        console.log(`${battle.customEp ?? battle.id}: ${battle.videoUrl} -> ${views}`);
      } catch {
        console.log(`${battle.customEp ?? battle.id}: ${battle.videoUrl} -> Error`);
      }
    }
  }

  console.log("\nGzone Season 1");

  for (const battle of gzoneBattles) {
    const videoId = getVideoId(battle.videoUrl);
    if (!videoId) continue;

    const url = `https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`;

    try {
      const response = await fetch(url);
      const json = await response.json();
      const views = formatGzoneViews(Number(json.viewCount));

      gzoneSource = replaceGzoneBattleViews(gzoneSource, battle.customEp ?? battle.id, views);
      console.log(`${battle.customEp ?? battle.id}: ${battle.videoUrl} -> ${views}`);
    } catch {
      console.log(`${battle.customEp ?? battle.id}: ${battle.videoUrl} -> Error`);
    }
  }

  pengameSource = pengameSource.replace(
    /export const lastUpdated = "[^"]+";/,
    `export const lastUpdated = "${today}";`,
  );
  fs.writeFileSync(pengameBattlesPath, pengameSource);
  fs.writeFileSync(gzoneBattlesPath, gzoneSource);
}

fetchViews();
