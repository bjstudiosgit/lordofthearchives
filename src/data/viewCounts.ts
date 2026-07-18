export const parseViewCount = (value: string | number | null | undefined): number => {
  if (!value) return 0;
  const clean = String(value).replace(/,/g, "").trim().toUpperCase();
  if (clean.endsWith("K")) return Number(clean.slice(0, -1)) * 1000;
  if (clean.endsWith("M")) return Number(clean.slice(0, -1)) * 1000000;
  return Number(clean) || 0;
};

export const formatViewCount = (
  value: string | number | null | undefined,
  fallback = "0",
): string => {
  if (value === null || value === undefined || value === "") return fallback;
  const views = parseViewCount(value);

  if (views >= 1000000) {
    const millions = views / 1000000;
    return `${millions.toFixed(millions < 10 ? 2 : 1).replace(/\.?0+$/, "")}M`;
  }

  if (views >= 1000) {
    const thousands = views / 1000;
    return `${thousands.toFixed(thousands < 100 ? 1 : 0).replace(/\.0$/, "")}K`;
  }

  return views.toLocaleString("en-GB");
};
