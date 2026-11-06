export const availableMcImageSlugs = new Set([
  "1flaymr",
  "220",
  "2mwad",
  "7wxve",
  "ad",
  "afrodon",
  "ajna",
  "anbusensei",
  "apetrelli",
  "cucha",
  "dandannah",
  "drizzgb",
  "fdon",
  "frizzprice",
  "ginga-jay",
  "grams",
  "guni",
  "iiiberealz",
  "kandi",
  "kurly",
  "marni-grams",
  "marni-gramz",
  "passive",
  "pocaa",
  "prynlee",
  "relapse",
  "renaya",
  "rendmc",
  "sevz",
  "skamz",
  "smil3z",
  "trappy",
  "tymeless",
  "whoisorion",
  "zen",
]);

export function hasAvailableMcImage(imagePath?: string): boolean {
  if (!imagePath) return false;
  const slug = imagePath
    .replace(/^\//, "")
    .replace(/-(160|400)\.webp$/i, "")
    .replace(/\.(webp|png|jpg)$/i, "")
    .toLowerCase();
  return availableMcImageSlugs.has(slug);
}
