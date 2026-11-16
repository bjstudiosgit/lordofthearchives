import data from "./dontFlopData.json";
import views from "./archiveVideoViews.json";
export const dontFlopBattles = data.map(battle => ({
  ...battle, views: (views as Record<string, number>)[battle.videoId],
}));
