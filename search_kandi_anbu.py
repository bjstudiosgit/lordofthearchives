import json

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = re.finditer(r'\{[^{}]*\}', text)
for m in matches:
    block = m.group(0)
    if 'KANDI' in block.upper() and 'ANBU' in block.upper():
        print(block)
