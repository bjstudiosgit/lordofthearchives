import re
import json
from datetime import datetime

with open('src/data/battles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Since we want to parse it properly, let's use a robust approach
# The items in battles.ts are dictionaries in a list. We can extract them using regex.
objects = re.findall(r'(\{[^{}]+\})', text)

# Let's parse them into python dicts
def parse_obj(obj_str):
    obj = {}
    lines = obj_str.strip('{}').split(',')
    for line in lines:
        line = line.strip()
        if not line: continue
        if ':' not in line: continue
        parts = line.split(':', 1)
        key = parts[0].strip().strip('\'"')
        val = parts[1].strip()
        if val.startswith('"') or val.startswith('\''):
            val = val.strip('\'"')
        elif val in ('true', 'false'):
            val = val == 'true'
        else:
            try: val = int(val)
            except: 
                try: val = float(val)
                except: pass
        obj[key] = val
    return obj

battles = [parse_obj(o) for o in objects]

s5 = [b for b in battles if str(b.get('season')).startswith('5') or str(b.get('season')) == '2025' or b.get('slug', '').find('-s5') != -1]

with open('s5_dump.json', 'w', encoding='utf-8') as f:
    json.dump(s5, f, indent=2)
