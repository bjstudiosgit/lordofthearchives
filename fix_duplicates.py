import re

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

objects = re.findall(r'\{[^{}]+\}', content, re.DOTALL)

missing_dates = []

for obj in objects:
    theme_m = re.search(r'"theme":\s*"([^"]+)"', obj)
    if not theme_m or theme_m.group(1) != "pengame":
        continue
    
    date_m = re.search(r'"date":\s*"([^"]+)"', obj)
    if not date_m:
        id_m = re.search(r'"id":\s*"([^"]+)"', obj)
        title_m = re.search(r'"title":\s*"([^"]+)"', obj)
        season_m = re.search(r'"season":\s*([\d.]+)', obj)
        ep_m = re.search(r'"customEp":\s*"([^"]+)"', obj)
        
        bid = id_m.group(1) if id_m else "?"
        title = title_m.group(1) if title_m else "?"
        season = float(season_m.group(1)) if season_m else "?"
        ep = ep_m.group(1) if ep_m else ""
        
        missing_dates.append({
            "id": bid,
            "title": title,
            "season": season,
            "ep": ep
        })

print(f"Found {len(missing_dates)} PenGame battles missing dates:\n")

# Sort by season, then ID
missing_dates.sort(key=lambda x: (float(x["season"]) if x["season"] != "?" else 0, x["id"]))

for b in missing_dates:
    ep_str = f" [{b['ep']}] " if b['ep'] else " "
    print(f"Season {b['season']} | ID {b['id'].ljust(3)} {ep_str.ljust(8)} | {b['title']}")
