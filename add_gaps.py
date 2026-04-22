import json

file_path = "c:\\Users\\bradl\\Desktop\\lolta\\lord-of-the-archives\\lordofthearchives\\src\\data\\battles.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

new_battles_str = """
  },
  {
    "id": "426",
    "slug": "lc-vs-anbu-senseii-2026x01",
    "mc1": "lc",
    "mc2": "anbu-senseii",
    "title": "LC vs ANBU SENSEII",
    "date": "07 Feb 2026",
    "theme": "pengame",
    "season": 2026,
    "customEp": "2026x01",
    "subGroup": "Academy Graduate Debut",
    "views": "42k"
  },
  {
    "id": "427",
    "slug": "aliaano-vs-star-co-2026x06",
    "mc1": "aliaano",
    "mc2": "star-co",
    "title": "ALIAANO vs STAR CO",
    "date": "11 Feb 2026",
    "theme": "pengame",
    "season": 2026,
    "customEp": "2026x06",
    "subGroup": "Regular Season",
    "views": "35k"
  },
  {
    "id": "428",
    "slug": "relapse-vs-storm-2026x07",
    "mc1": "relapse",
    "mc2": "storm",
    "title": "RELAPSE vs STORM",
    "date": "14 Feb 2026",
    "theme": "pengame",
    "season": 2026,
    "customEp": "2026x07",
    "subGroup": "Main Roster Return",
    "views": "28k"
  },
  {
    "id": "429",
    "slug": "marcel-vs-khaos-2026x08",
    "mc1": "marcel",
    "mc2": "khaos-kayy",
    "title": "MARCEL vs KHAOS",
    "date": "18 Feb 2026",
    "theme": "pengame",
    "season": 2026,
    "customEp": "2026x08",
    "subGroup": "Regular Season",
    "views": "32k"
  },
  {
    "id": "430",
    "slug": "jm-vs-f-don-2026x10",
    "mc1": "jm",
    "mc2": "f-don",
    "title": "JM vs F-DON",
    "date": "28 Feb 2026",
    "theme": "pengame",
    "season": 2026,
    "customEp": "2026x10",
    "subGroup": "David vs Goliath",
    "views": "45k"
  },
  {
    "id": "431",
    "slug": "passive-vs-fendry-6x54",
    "mc1": "passive",
    "mc2": "fendry",
    "title": "PASSIVE vs FENDRY",
    "date": "05 Sep 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "6x54",
    "subGroup": "Cold War Semi-Final",
    "views": "154k"
  },
  {
    "id": "432",
    "slug": "k-marh-vs-aliaano-5x53",
    "mc1": "k-marh",
    "mc2": "aliaano",
    "title": "K.MARH vs ALIAANO",
    "date": "24 Nov 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "5x53",
    "subGroup": "Return Special",
    "views": "56k"
  },
  {
    "id": "433",
    "slug": "trappy-vs-dan-dannah-5x54",
    "mc1": "trappy",
    "mc2": "dan-dannah",
    "title": "TRAPPY vs DAN DANNAH",
    "date": "15 Nov 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "5x54",
    "subGroup": "Dungeon Battles",
    "views": "88k"
  },
  {
    "id": "434",
    "slug": "zen-vs-dan-dannah-5x56",
    "mc1": "zen",
    "mc2": "dan-dannah",
    "title": "ZEN vs DAN DANNAH",
    "date": "27 Oct 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "5x56",
    "subGroup": "Regular Season",
    "views": "42k"
  },
  {
    "id": "435",
    "slug": "rasiah-vs-smil3z-5x58",
    "mc1": "rasiah",
    "mc2": "smil3z",
    "title": "RA'SIAH vs SMIL3Z",
    "date": "02 Jul 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "5x58",
    "subGroup": "Quarter Finals",
    "views": "170k"
  },
  {
    "id": "436",
    "slug": "finals-cypher-trappy-drizzgb-kojey-5x59",
    "mc1": "trappy",
    "mc2": "drizzgb",
    "title": "Finals Cypher (Trappy/DrizzGB/Kojey)",
    "date": "25 Nov 2025",
    "theme": "pengame",
    "season": 2025,
    "customEp": "5x59",
    "subGroup": "Tournament Special",
    "views": "29k"
"""

target = '''} ];'''

if target in content:
    idx = content.rfind(target)
    new_content = content[:idx] + new_battles_str + content[idx:]
    new_content = new_content.replace('lastUpdated = "Apr 13, 2026"', 'lastUpdated = "Apr 14, 2026"')
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Battles successfully added!")
else:
    print("Could not find replacement target.")
