import re
with open('src/data/battles.ts', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.finditer(r'"id": "([^"]+)",\s*"slug": "([^"]+)",\s*"mc1": "([^"]+)",\s*"mc2": "([^"]+)",\s*"title": "([^"]+)",', text)
for m in matches:
    title = m.group(5)
    if 'KANDI' in title.upper() and 'ANBU' in title.upper():
        print("FOUND TITLE:", title)
        print("ID:", m.group(1))
