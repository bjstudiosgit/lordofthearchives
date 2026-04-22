import re
import json
from datetime import datetime

with open('src/data/battles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# We need a highly robust parser for the TS file that retains Don't Flop data too.
# The file has: export const battles: Battle[] = [ { ... }, { ... } ];
start_idx = text.find('[')
end_idx = text.rfind(']') + 1

objects_str = text[start_idx:end_idx]

# We will use ast.literal_eval for safely evaluating JS objects to Python dicts, 
# but JS keys don't always have quotes.
# Actually, the user's data had some unquoted keys or comments.
# Using a regex-based parser to extract and rewrite is safest.
# Let's extract each object string, parse it, modify it, and emit it back to TS format.
# A small custom parser is best.

objects_raw = re.findall(r'(\{(?:[^{}]|(?:\{[^{}]*\}))*?\})', objects_str, re.DOTALL)

def parse_obj(obj_str):
    obj = {}
    # Remove surrounding braces
    inner = obj_str.strip()[1:-1].strip()
    
    # Split by comma but ignore commas inside strings
    # We can use regex to find all key-value pairs
    pairs = re.findall(r'([A-Za-z0-9_]+|"[^"]+")\s*:\s*(true|false|[-+]?[0-9]*\.?[0-9]+|"[^"]*"(?:\s*\+\s*"[^"]*")*|\[.*?\]|\{[^{}]*\})', inner, flags=re.DOTALL)
    
    for key, value in pairs:
        key = key.strip('"\'')
        value = value.strip()
        obj[key] = value
    return obj

battles = []
for o in objects_raw:
    b = parse_obj(o)
    if b:  # keep the raw text too so we can reconstruct
        b['_raw'] = o
        battles.append(b)

# deduplicate PenGame
pengame_battles = []
dontflop_battles = []
other_battles = []

for b in battles:
    theme = b.get('theme', '').strip('"\'')
    if theme == 'pengame':
        pengame_battles.append(b)
    elif theme == 'dontflop':
        dontflop_battles.append(b)
    else:
        other_battles.append(b)

# Fix Dates
for b in pengame_battles:
    slug = b.get('slug', '').strip('"')
    if '2mwad-vs-skamz' in slug:
        b['date'] = '"25 January 2025"'
    elif 'anbu-sensei-vs-smil3z' in slug:
        b['date'] = '"01 February 2025"'
    elif 'passive-vs-zen' in slug:
        b['date'] = '"01 January 2025"'
    elif 'whoisorion-vs-zen' in slug:
        b['date'] = '"12 February 2025"'
    elif 'domi-dusk-vs-hunce' in slug:
        b['date'] = '"08 February 2025"'
    elif 'che3kz-vs-cucha' in slug:
        b['date'] = '"29 January 2025"'

# Merge duplicated season blocks
for b in pengame_battles:
    # Get numeric season if possible
    season_val = b.get('season', '').strip('"\'')
    subGroup = b.get('subGroup', '""').strip('"\'')
    
    # Season logic:
    # if 2025 -> 5
    # if 2026 -> 6
    if season_val == '2025': season_val = '5'
    elif season_val == '2026': season_val = '6'
    
    # 2026 Prelims -> season 6
    if "2026" in subGroup.lower() and season_val != '6':
        season_val = '6'
        
    if "champions league" in subGroup.lower():
        # Keep as its own thing or map to season 6?
        # Usually Champions League happens, let's keep it but standardize season.
        if "2025" in str(b.get('date', '')): season_val = '5'
        if "2026" in str(b.get('date', '')): season_val = '6'

    b['season'] = season_val

# Remove true duplicate battle entries 
# grouping by mc1/mc2 
unique_pengame = {}
for b in pengame_battles:
    mc1 = b.get('mc1', '').strip('"\'')
    mc2 = b.get('mc2', '').strip('"\'')
    season = str(b.get('season', '')).strip('"\'')
    key = tuple(sorted([mc1, mc2])) + (season,)
    
    if key not in unique_pengame:
        unique_pengame[key] = b
    else:
        # Merge logic: if the new one has more fields, prefer it
        existing = unique_pengame[key]
        if 'customEp' in b:
            existing['customEp'] = b['customEp']
        if 'date' in b and 'date' not in existing:
            existing['date'] = b['date']

pengame_battles = list(unique_pengame.values())

# Sort by ISO date
def parse_date(date_str):
    date_str = date_str.strip('"\'- ')
    if not date_str:
        return '9999-99-99'
    try:
        dt = datetime.strptime(date_str, '%d %B %Y')
        return dt.strftime('%Y-%m-%d')
    except:
        pass
    try:
        dt = datetime.strptime(date_str, '%d %b %Y')
        return dt.strftime('%Y-%m-%d')
    except:
        pass
    return '9999-99-99'

# Now we need to group by Season, sort by Date, then assign internal_id and customEp
# customEp = {Season}x{Index:02d}

pengame_by_season = {}
for b in pengame_battles:
    s = str(b.get('season', '0')).strip('"')
    if s not in pengame_by_season:
        pengame_by_season[s] = []
    pengame_by_season[s].append(b)

new_pengame_list = []

for s in sorted(pengame_by_season.keys(), key=lambda x: float(x) if x.replace('.','',1).isdigit() else 0):
    battles_in_s = pengame_by_season[s]
    battles_in_s.sort(key=lambda x: parse_date(x.get('date', '')))
    
    # We must ensure Champions League or special subGroups don't completely hijack standard episodes.
    # But user said: "Resort each section by ISO date, only then regenerate display IDs.
    
    i = 1
    for b in battles_in_s:
        mc1 = b.get('mc1', 'mc1').strip('"')
        mc2 = b.get('mc2', 'mc2').strip('"')
        # internal_id = never changes
        # example: pg-s05-2025-02-19-grams-vs-mrbenz
        d = parse_date(b.get('date', ''))
        internal_id = f"pg-s0{s}-{d}-{mc1}-vs-{mc2}" if len(str(s)) == 1 else f"pg-s{s}-{d}-{mc1}-vs-{mc2}"
        
        b['id'] = f'"{internal_id}"'
        s_base = str(s).replace('.0', '')
        b['customEp'] = f'"{s_base}x{i:02d}"'
        
        new_pengame_list.append(b)
        i += 1

# Re-emit TS file
def dict_to_ts(b_dict):
    lines = ["  {"]
    for k, v in b_dict.items():
        if k == '_raw': continue
        lines.append(f'    "{k}": {v},')
    last = lines[-1]
    lines[-1] = last[:-1] # strip last comma
    lines.append("  }")
    return "\n".join(lines)

all_battles = new_pengame_list + dontflop_battles + other_battles

out_str = "export const battles: Battle[] = [\n"
out_str += ",\n".join([dict_to_ts(b) for b in all_battles])
out_str += "\n];\n"

ts_final = text[:start_idx] + out_str

with open('src/data/battles.ts', 'w', encoding='utf-8') as f:
    f.write(ts_final)

print("Done overwriting battles.ts")
