import re

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

updates = {
    '"slug": "drizzgb-trappy-vs-grams-passive-2v2"': ('"title": "DRIZZGB vs GRAMS",\n    "theme":', '"date": "02 September 2023",\n    "title": "DRIZZGB vs GRAMS",\n    "theme":'),
    '"slug": "drizzgb-vs-jm-s5"': ('"title": "DRIZZGB vs JM",\n    "theme":', '"date": "03 November 2024",\n    "title": "DRIZZGB vs JM",\n    "theme":'),
    '"slug": "grams-vs-whoisorion-dungeon"': ('"title": "GRAMS vs WHOISORION",\n    "theme":', '"date": "09 October 2024",\n    "title": "GRAMS vs WHOISORION",\n    "theme":'),
    '"slug": "hunce-vs-anbu-sensei-dungeon"': ('"title": "HUNCE vs ANBU SENSEI",\n    "theme":', '"date": "12 February 2025",\n    "title": "HUNCE vs ANBU SENSEI",\n    "statusNote": "Audio release only",\n    "theme":'),
    '"slug": "mello-vs-tapped24-chickenshop"': ('"title": "MELLO vs TAPPED24",\n    "theme":', '"title": "MELLO vs TAPPED24",\n    "isUnreleased": true,\n    "theme":'),
    '"slug": "missink-vs-cucha-dungeon"': ('"title": "MISSINK vs CUCHA",\n    "theme":', '"date": "07 April 2025",\n    "title": "MISSINK vs CUCHA",\n    "theme":'),
    '"slug": "rahika-vs-ricko-north"': ('"title": "RAHIKA vs RICKO",\n    "theme":', '"date": "25 September 2024",\n    "title": "RAHIKA vs RICKO",\n    "theme":'),
    '"slug": "whoisorion-vs-kandi-2-svn2"': ('"title": "WHOISORION vs KANDI 2",\n    "theme":', '"date": "14 November 2024",\n    "title": "WHOISORION vs KANDI 2",\n    "theme":'),
    '"slug": "whoisorion-vs-zen-manchester-2024"': ('"title": "WHOISORION vs ZEN",\n    "theme":', '"date": "12 February 2025",\n    "title": "WHOISORION vs ZEN",\n    "theme":')
}

count = 0
for slug_marker, (old_frag, new_frag) in updates.items():
    if slug_marker in content:
        idx = content.index(slug_marker)
        block_end = content.index("}", idx) + 1
        block = content[idx:block_end]
        if old_frag in block:
            new_block = block.replace(old_frag, new_frag, 1)
            content = content[:idx] + new_block + content[block_end:]
            count += 1
            print("Updated: " + slug_marker)
        else:
            print("Fragment not found: " + slug_marker)
    else:
        print("NOT FOUND: " + slug_marker)

with open("src/data/battles.ts", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Applied {count} updates.")
