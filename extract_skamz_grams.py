import json
import re

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

match = re.search(r'  \{\s*"id": "pg-s04-2023-09-12-skamz-vs-grams".*?judges": \[\]\n  \}', content, re.DOTALL)
if match:
    print(match.group(0))
else:
    print("Not found")
