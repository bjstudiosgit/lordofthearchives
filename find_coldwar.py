import json

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    text = f.read()

import re

# We can roughly extract all slugs that have Cold War
matches = re.finditer(r'"id": "([^"]+)",\s*"slug": "([^"]+)",\s*"mc1": "([^"]+)",\s*"mc2": "([^"]+)",\s*"title": "([^"]+)",\s*"date": "([^"]+)",\s*"videoUrl": "[^"]*",\s*"theme": "[^"]*",\s*"season": "Cold War"', text)
for m in matches:
    print(m.group(5))
