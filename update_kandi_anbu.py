import sys

with open("src/data/supplementalBattles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """{
    "id": "pg-s2025-kandi-vs-anbu-sensei",
    "slug": "kandi-vs-anbu-sensei",
    "mc1": "kandi",
    "mc2": "anbu-sensei",
    "title": "KANDI vs ANBU SENSEI",
    "theme": "pengame",
    "season": "2025",
    "competition": "PenGame",
    "customEp": "25x19",
    "seasonOrder": 19,
    "stage": "Regular Season",
    "group": null,
    "tag": null,
    "winner": "unknown"
  }"""

replacement = """{
    "id": "pg-s2025-kandi-vs-anbu-sensei",
    "slug": "kandi-vs-anbu-sensei",
    "mc1": "kandi",
    "mc2": "anbu-sensei",
    "title": "KANDI vs ANBU SENSEI",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "25x19",
    "seasonOrder": 19,
    "stage": "Finals",
    "group": null,
    "tag": null,
    "winner": "kandi",
    "clashSummary": "KANDI vs ANBU SENSEI took place at the **PenGame Cold War Finals** event at **Ministry of Sound**, powered by **SoundOn**. The host introduces a finals judging panel consisting of **Professor Green**, **Harry Pinero** and **Abracadabra**.\\n\\nThis battle had been building through group-chat tension and online arguments. The host says ANBU had been upset on streams and that the clash was supposed to happen earlier but did not. ANBU decides to go first without a coin toss.\\n\\nANBU opens with a dense, aggressive first round. He frames his return as being for the fans and says his plan is to slaughter KANDI. He attacks KANDI’s tournament progress, value to the platform, friend circle, girlfriend/women angles, cigarettes, family members and street image. He uses Joe Budden, Stone Cold Steve Austin, Professor Green, Kobe, Michael Ward, Grenfell, Denzel, Training Day and Ginger Jay references. The round is layered and gets multiple reactions, but it also becomes very dark very quickly.\\n\\nKANDI responds with a brutal disability/family angle. Before starting, he warns that he has “some form of disability,” then attacks ANBU through his mother being in a wheelchair. He uses “wheelchair,” “Meals on Wheels,” “Happy Wheels,” “go-kart,” “hospital,” “Simba,” “colostomy bag” and family-hygiene imagery. It is one of the darkest rounds in recent PenGame material. The room reacts heavily, and the judges/host visibly struggle with how far the material goes.\\n\\nANBU’s next visible round switches into animal imagery, calling KANDI a dog and saying PenGame rescued a pet. He attacks KANDI’s fur/clothing, breath, Evergreen track, I.B. Reels incident, fake gangster image, Resident Evil, Vivian, cocaine/white supremacy imagery, dirty mouth, family tree/incest angles and East Hackney. This is ANBU’s strongest writing section: personal, layered, and very aggressive.\\n\\nKANDI’s final visible round leans back into his violent stage persona and keeps the disability/family angle going. He opens with a jail/free-the-guys style intro, then says he is a violent man in a violent place. He brings a repeated “bad boy / on smoke” section, venom, Cluedo, ANBU name flip, gay accusation angle, wheelchair/ramp lines, skanking, Beast Boy / Titans, skin/teeth imagery and cancer ward references. The round is messy in places, but the performance is forceful and disrespectful enough to sway the judges.\\n\\nAfter the battle, the host admits he does not know what happened and asks the judges to pick a winner.\\n\\nHarry Pinero votes **KANDI**, saying KANDI’s delivery and disrespect stood out. Professor Green also votes **KANDI**, saying both were strong, but the funnier material was what hit most. Abracadabra says he would have gone **ANBU**, because he wanted the darker material and felt ANBU delivered that.\\n\\nOfficial winner: **KANDI**.",
    "performanceAnalysis": [
      {
        "performer": "KANDI",
        "overview": "KANDI wins because the judges value his delivery, disrespect and room impact. His material is extremely dark and often uncomfortable, but it gets reactions and is delivered with conviction.\\n\\nHis strongest section is the wheelchair/mother angle. It is brutal, direct and memorable. It clearly makes the room react, even while the judges and host acknowledge how difficult the material is to judge. KANDI finds one line of attack and keeps escalating it.\\n\\nHis final round is less clean lyrically, but it reinforces his performance style. He leans into violence, shock humour, disability insults, family disrespect and physical imagery. He does not always write with ANBU’s density, but he makes the material land more immediately.\\n\\nKANDI’s biggest strength is impact. He does not need every line to be complex because his delivery sells the disrespect.",
        "lyricalThemes": "Wheelchair mum angle, Meals on Wheels, Happy Wheels, go-kart, disability disrespect, family insults, hospital imagery, colostomy bag, jail/free-the-guys intro, violent man persona, bad-boy challenge, venom, Cluedo, ANBU name flip, ramp/wheelchair lines, Titans, cancer ward imagery.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Wheelchair/mother angle section."
          },
          {
            "title": "Strongest trait",
            "description": "Delivery and disrespect."
          },
          {
            "title": "Best angle",
            "description": "ANBU’s mum/wheelchair disability angle."
          },
          {
            "title": "Best technical section",
            "description": "Meals on Wheels / Happy Wheels / go-kart run."
          },
          {
            "title": "Battle-winning factor",
            "description": "More immediate room impact and harsher punch delivery."
          }
        ]
      },
      {
        "performer": "ANBU SENSEI",
        "overview": "ANBU arguably has the more layered writing, and Abracadabra gives him the dissenting vote. He attacks from multiple angles and brings more reference-heavy material than KANDI.\\n\\nHis opening round is dense and ambitious. He uses battle-history, tournament-stage progress, women, cigarettes, family names and film/music references to build a layered attack. Some sections are very strong, especially the Michael Ward / Top Boy and Grenfell / Ministry of Sound line.\\n\\nHis later round is arguably his best. The dog/rescued-pet angle is strong, and the Evergreen, I.B. Reels, Resident Evil, fake gangster, dirty-mouth and family-tree material gives him a clearer opponent-specific structure.\\n\\nANBU’s issue is that his writing can become too packed. KANDI’s punches are less layered but easier for the room to catch. That difference matters in a judged live battle.\\n\\nANBU’s biggest strength is writing density. His weakness is that KANDI’s delivery lands cleaner in the moment.",
        "lyricalThemes": "Return for the fans, tournament-stage critique, promo/women angle, Joe Budden, Stone Cold, Professor Green, Kobe, Michael Ward, Grenfell, Denzel, family names, dog/pet angle, Evergreen, I.B. Reels, Resident Evil, fake gangster, Vivian, cocaine/white supremacy imagery, family tree/incest angle, East Hackney.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Dog/pet / Evergreen / fake gangster section."
          },
          {
            "title": "Strongest trait",
            "description": "Dense reference-heavy writing."
          },
          {
            "title": "Best angle",
            "description": "KANDI as a fake gangster/pet rescued by PenGame."
          },
          {
            "title": "Best technical section",
            "description": "Michael Ward / Grenfell / Denzel run."
          },
          {
            "title": "Battle-losing factor",
            "description": "Some material is too packed compared with KANDI’s more direct delivery."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "ANBU SENSEI",
        "theme": "Framing",
        "bar": "I left and came back for the fans.",
        "explanation": "ANBU frames his return as demand-driven, not random."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Hostility",
        "bar": "My plan is to slaughter this man with rage.",
        "explanation": "A direct opener showing he is not coming light."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Tournament",
        "bar": "How you claim you’re top ten best and never progressed at a tournament stage?",
        "explanation": "A strong status/tournament attack on KANDI’s PenGame standing."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Status",
        "bar": "You definitely ain’t worth anything they paid.",
        "explanation": "A value/platform insult."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Status",
        "bar": "Gal don’t really like KANDI, he forces them or they only do promo fucking.",
        "explanation": "A women/relationship/status attack. It is battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Wordplay",
        "bar": "Shotgun pump… Joe Budden.",
        "explanation": "A pump/Joe Budden wordplay."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "Shatter KANDI’s jaw, it’ll sound like a wrestling match — Stone Cold’s coming.",
        "explanation": "A Stone Cold Steve Austin reference."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "In the shadow of the sun, like Pro Green.",
        "explanation": "A Professor Green reference tied to the judge being present."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "Shoot like Kobe.",
        "explanation": "A Kobe Bryant reference."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "If KANDI thinks he a Top Boy, he get charged — Michael Ward.",
        "explanation": "A Top Boy / Michael Ward actor reference."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "With the fire I’m spitting inside Ministry of Sound, it’ll be looking like Grenfell.",
        "explanation": "A very dark fire/Grenfell reference. It is hostile battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "I’m Sensei, bitch, you’re a student — Training Day, I’m Denzel.",
        "explanation": "A Denzel Washington / Training Day reference that reinforces ANBU’s Sensei image."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Violence",
        "bar": "Bleed out in a bathroom corner.",
        "explanation": "A violent image. It is battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Family",
        "bar": "Those are your sister’s names, for them I’m insisting pain.",
        "explanation": "A family-name attack. It is battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Rebuttal",
        "bar": "You wanna call me a virgin? Fine, I’ll lose it tonight by dicking your bae.",
        "explanation": "A rebuttal to an expected virgin angle."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Community",
        "bar": "Dear Black women, they can’t let KANDI stay.",
        "explanation": "A community/gender angle."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Imagery",
        "bar": "It’s a dog, it looks like PenGame rescued a pet.",
        "explanation": "A strong later-round opener. KANDI is reduced to an animal."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Imagery",
        "bar": "I don’t agree how they’re treating animals.",
        "explanation": "Continues the dog/pet scheme."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Wordplay",
        "bar": "My last few battles I clashed with vets.",
        "explanation": "A vet/veteran/animal-doctor double meaning."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Appearance",
        "bar": "That dirty fur you’re wearing.",
        "explanation": "An appearance/clothing insult."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Hygiene",
        "bar": "Mouth smelling like dog shit on your breath.",
        "explanation": "A hygiene attack."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Credibility",
        "bar": "I.B. Reels called you a little bitch to your face, you stood there and didn’t spark him.",
        "explanation": "A scene-specific credibility attack."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Wordplay",
        "bar": "You made a song called Evergreen — green he had never seen.",
        "explanation": "A song-title / money/status flip."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "I’ll attack this titan.",
        "explanation": "An Attack on Titan reference."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Status",
        "bar": "You might be my PenGame nemesis.",
        "explanation": "A rivalry/status line."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Reference",
        "bar": "Resident Evil.",
        "explanation": "A gaming reference used to frame himself as villainous or deadly."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Insult",
        "bar": "White supremacist loves cocaine.",
        "explanation": "A hostile race/drug insult. It is battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Wordplay",
        "bar": "KANDI’s never held no iron, he’s either a bitch or anemic.",
        "explanation": "An iron/gun/anemia wordplay."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Hygiene",
        "bar": "You stink, dropped out in your dirty mouth.",
        "explanation": "A hygiene/mouth attack."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Family",
        "bar": "Your dad fucked your mum, your sis fucked your dad…",
        "explanation": "A family-tree/incest angle. It is battle material."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Identity",
        "bar": "You ain’t no king, you’re the Gypsy Princess.",
        "explanation": "A status/identity insult."
      },
      {
        "performer": "ANBU SENSEI",
        "theme": "Background",
        "bar": "I’m a product of Eastern Hackney, you’re a product of incest.",
        "explanation": "A background versus family-tree attack."
      },
      {
        "performer": "KANDI",
        "theme": "Framing",
        "bar": "I do have some form of disability, so this should be okay.",
        "explanation": "KANDI opens by framing his disability angle before attacking ANBU’s family. It sets up the controversy."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "Me and ANBU are not friends. If I wanted a bitch as a friend, I’d go buy a dog.",
        "explanation": "A friend/dog insult."
      },
      {
        "performer": "KANDI",
        "theme": "Disrespect",
        "bar": "Inside your yard, feet on your table, not your dad, but I’m over a lot.",
        "explanation": "A household/family disrespect line. The transcript is rough but functions as home invasion imagery."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "You look like leprosy entered your bloodstream.",
        "explanation": "A disease/appearance insult."
      },
      {
        "performer": "KANDI",
        "theme": "Disability Angle",
        "bar": "This one don’t even feel fair. My mum’s normal, he’s got a crippled bitch in a wheelchair.",
        "explanation": "The central dark angle of KANDI’s round. It is disability-targeted battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "Move like a mum, so I best get a wheel there.",
        "explanation": "A wheelchair/wheel wordplay."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "Chat shit, walk, I’ll go there.",
        "explanation": "A mobility/disability punch."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "Stupid bitch said wheels up in 20, didn’t fly nowhere.",
        "explanation": "A travel/wheelchair flip."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "Your mum’s 82% go-kart.",
        "explanation": "A wheelchair/go-kart insult."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "I was doing deals on deals, she was doing Meals on Wheels.",
        "explanation": "One of KANDI’s biggest room-reaction lines. It flips street dealing into disability/meal-delivery imagery."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "She was doing reels with wheels.",
        "explanation": "A social-media/wheelchair continuation."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "I was playing as your mum on Happy Wheels.",
        "explanation": "A reference to the game Happy Wheels, known for wheelchair/cart chaos."
      },
      {
        "performer": "KANDI",
        "theme": "Imagery",
        "bar": "Skin on the floor like a hockey puck.",
        "explanation": "A violent body image."
      },
      {
        "performer": "KANDI",
        "theme": "Hostile Content",
        "bar": "She wishes it was her ears that were broken.",
        "explanation": "A line saying ANBU’s mum would rather be unable to hear his raps. Hostile battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "She wishes the hospital lost you.",
        "explanation": "A birth/hospital insult."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "That bitch picked you up like Simba, spat on the floor then dropped you.",
        "explanation": "A Lion King / Simba reference used as a family insult."
      },
      {
        "performer": "KANDI",
        "theme": "Family",
        "bar": "Your whole family used the same towel.",
        "explanation": "A hygiene/family insult."
      },
      {
        "performer": "KANDI",
        "theme": "Hostile Content",
        "bar": "Born inside your mother’s colostomy bag.",
        "explanation": "A very graphic family/body insult. It is hostile battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Family",
        "bar": "Your mum’s disappointed; if you hung yourself, she’d just leave you there.",
        "explanation": "A self-harm/family insult. It is battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Comparison",
        "bar": "I’m a pikey, I don’t know how to say this — my house got wheels and your mum’s got wheels, maybe they’re both related.",
        "explanation": "A caravan/wheelchair comparison."
      },
      {
        "performer": "KANDI",
        "theme": "Persona",
        "bar": "I pray to never find this stage. I’m a violent man in a violent place.",
        "explanation": "KANDI opens his final visible round with a violent persona."
      },
      {
        "performer": "KANDI",
        "theme": "Challenge",
        "bar": "Did you think you were a bad boy? Did you think you were on smoke?",
        "explanation": "A direct challenge to ANBU’s toughness."
      },
      {
        "performer": "KANDI",
        "theme": "Hostile Content",
        "bar": "When I said all the spastic kids should die, did you think that you wasn’t involved?",
        "explanation": "A disability-targeted line. It is hostile battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Confidence",
        "bar": "I spit venom.",
        "explanation": "A venom/poison writing claim."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "I did your mum downstairs, bounced her head off the sofa, coming like Cluedo.",
        "explanation": "A crude mother/Cluedo reference. Battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Name Flip",
        "bar": "Do you wanna know why they call man ANBU? Group of girls asked if he was gay, he turned with a wave, you know that I am, boo.",
        "explanation": "An ANBU name flip."
      },
      {
        "performer": "KANDI",
        "theme": "Family",
        "bar": "Your dad’s like your mum’s legs — unemployed, because they both don’t work.",
        "explanation": "A disability/family punch."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "Toss your mama out the chair, have her skanking.",
        "explanation": "A wheelchair/disability insult."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Beast Boy, this ain’t no Titans drilling.",
        "explanation": "A Teen Titans / Beast Boy reference."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "All the burn victims look at you like, rah, that’s sickening.",
        "explanation": "A skin/appearance insult."
      },
      {
        "performer": "KANDI",
        "theme": "Hostile Content",
        "bar": "This one takes knees off; he’s in a cancer ward where patients pray they don’t get what he’s got.",
        "explanation": "A cancer/disease comparison. It is hostile battle material."
      }
    ],
    "judgementSummary": {
      "verdict": "kandi",
      "summary": "Official result: KANDI wins by judges’ decision. Judges’ vote: KANDI 2-1 ANBU SENSEI. Harry Pinero votes KANDI, Professor Green votes KANDI, Abracadabra votes ANBU. Suggested archive score: KANDI 2-1 ANBU SENSEI. Suggested round split: Round 1: KANDI / debatable, Round 2: ANBU SENSEI, Round 3: KANDI / close. Reason: ANBU had denser writing and arguably the cleaner pen, but KANDI had the stronger live impact. The judges rewarded delivery, disrespect and the material that landed hardest in the room. Performance Grades - KANDI: A-, ANBU SENSEI: A-. Final Note: This was not clean, polite or easy to judge. It was dark, personal and uncomfortable, but as a PenGame clash it delivered what the finals panel asked for: clever, petty and brutal material. KANDI edges it officially, but ANBU’s pen made it very close."
    }
  }"""

target_crlf = target.replace('\\n', '\\r\\n')
target_lf = target

if target_crlf in content:
    content = content.replace(target_crlf, replacement.replace('\\n', '\\r\\n'))
    with open("src/data/supplementalBattles.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully (CRLF) using python exact match")
elif target_lf in content:
    content = content.replace(target_lf, replacement)
    with open("src/data/supplementalBattles.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully (LF) using python exact match")
else:
    print("Target string not found in supplementalBattles.ts!")

