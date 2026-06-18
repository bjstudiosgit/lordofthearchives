import sys

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  {
    "id": "pg-s05-2024-09-21-kandi-vs-prynlee",
    "slug": "kandi-vs-prynlee",
    "mc1": "kandi",
    "mc2": "prynlee",
    "title": "KANDI vs PRYNLEE",
    "date": "2024-09-21",
    "videoUrl": "https://www.youtube.com/watch?v=Z_SvZqwoiMY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x01",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "kandi"
  }"""

replacement = """  {
    "id": "pg-s05-2024-09-21-kandi-vs-prynlee",
    "slug": "kandi-vs-prynlee",
    "mc1": "kandi",
    "mc2": "prynlee",
    "title": "KANDI vs PRYNLEE",
    "date": "2024-09-21",
    "videoUrl": "https://www.youtube.com/watch?v=Z_SvZqwoiMY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x01",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "kandi",
    "clashSummary": "KANDI vs PRYNLEE took place at the start of **PenGame Season 5**, with the host announcing PenGame’s return and shouting out the sponsors including **Platinum Education Services**, **Lounges TV** and **Rude Boy Drinks**. Ambush is also introduced as part of the PenGame setup before the battle starts.\\n\\nPRYNLEE goes first.\\n\\nPRYNLEE opens by addressing her previous battle with FOREVER TAPPED, saying it was a fluke and that she is still a big dog. She talks about wanting a rematch with a less biased crowd and attacks KANDI through his appearance, relationship links, Deeno angle, room-cleaning, drinking, ex-girl references and “barber” material. The round has energy, but it is disrupted by DJ issues and does not fully settle into a clean attack pattern.\\n\\nKANDI’s first round immediately takes control. He attacks PRYNLEE’s looks, body, wig, makeup, hygiene, confidence and sex appeal. He gets multiple reloads and the room reacts heavily. The “fat girl who raps, that is your gimmick” section becomes the central argument of the round. He also brings Nella Rose, Lizzo, mouthwash/cat-piss imagery, wig patches and mattress jokes. It is crude, but it is the clearest and most dominant round of the battle.\\n\\nPRYNLEE’s second round attempts to switch the battle into politics and platform accusations. She says KANDI called PenGame “slimy” and tries to make him explain it. The section gets interrupted because the room cannot properly hear or follow the point. The argument has potential, but it does not land cleanly as a battle round.\\n\\nKANDI’s second round is the best round of the clash. He starts with a Thanos snap bar, saying PRYNLEE is so fat Thanos would need to snap twice to get rid of her. He then attacks her appearance, body, name Phoebe, Greggs, Miss Piggy, Kermit, rib cage, twerking, hotel-burning, gym, nan, cake, BBW, IB Reels and the crowd’s lack of attraction to her. The room reaction is huge, and the host calls it a fire second round.\\n\\nPRYNLEE’s third round is her best moment. She brings an OnlyFans / foot-fetish prop angle against KANDI, claiming he sells foot pictures. The room reacts to the prop and the host acknowledges it as good props. She uses Candy/sweets, Halloween, Frankenstein, freak, OnlyFans, feet, Candy Shop and “life ain’t sweet” material. This is her strongest strategic attempt, because it uses a prop and a focused angle.\\n\\nKANDI’s third round still wins. He answers by returning to the body-image angle but expands it into a performance section. He uses Precious, obesity, breath, peppermint, MC Hammer / “can’t touch this,” “That’s Not Me,” dirty hobbit, wig/makeup, NASCAR, Madagascar, Michael Jackson, and a repeated physical “do one of these” section that makes the room react. He closes by calling everything about PRYNLEE dead and asking how he is meant to kill someone already dead.\\n\\nThere is no official judging section. The host tells viewers to get in the comments and say who they think won.\\n\\nBased on the battle, KANDI wins clearly by Archive Judgement.",
    "performanceAnalysis": [
      {
        "performer": "KANDI",
        "overview": "KANDI wins because he controls the room, gets the bigger reactions and has the most damaging rounds. His content is extremely crude and heavily body-focused, but the performance impact is undeniable.\\n\\nHis first round immediately shifts the battle in his favour. PRYNLEE’s opener has energy, but KANDI’s first gets reloads and makes the room respond. He is sharper, louder and more confident.\\n\\nHis second round is the clear round of the battle. The Thanos snap line, Miss Piggy/Kermit section, Greggs line, BBW flip and IB Reels punch give him a full damaging run. It is not subtle, but it lands.\\n\\nHis third round keeps the same attack going while adding more performance. The “That’s Not Me” style repetition and physical movement section gives the round room-control value. Even after PRYNLEE’s prop angle, KANDI does enough to close strongly.\\n\\nKANDI’s biggest strength is impact. His weakness is variety, because most of the battle is body and appearance attacks.",
        "lyricalThemes": "Body image, wig, makeup, hygiene, Nella Rose, Lizzo, Thanos, Phoebe, Greggs, Miss Piggy, Kermit, BBW, IB Reels, crowd participation, Precious, MC Hammer, That’s Not Me, NASCAR, Madagascar, Michael Jackson, dead/body closer.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Room control."
          },
          {
            "title": "Best angle",
            "description": "PRYNLEE’s body/image as a gimmick."
          },
          {
            "title": "Best technical section",
            "description": "Thanos / Phoebe / Greggs / Miss Piggy / BBW run."
          },
          {
            "title": "Battle-winning factor",
            "description": "Bigger reactions and much stronger second round."
          }
        ]
      },
      {
        "performer": "PRYNLEE",
        "overview": "PRYNLEE has energy and one good strategic moment with the OnlyFans / feet prop, but she loses because her material is less controlled and her rounds do not land as heavily.\\n\\nHer first round is disrupted by the DJ issue and takes too long to find shape. She tries to frame her last battle as a fluke and says she wants a rematch, but the attack on KANDI is not as direct as it needs to be.\\n\\nHer second round is the weakest. The PenGame “slimy” angle could have been interesting, but it becomes a confusing discussion rather than a clean round. In battle rap terms, she loses momentum badly here.\\n\\nHer third is her best round. The foot-fetish / OnlyFans prop gets a genuine reaction and gives her something different from the standard insults. The Candy Shop / life ain’t sweet flip is also one of her better name-based ideas. However, the round does not do enough to undo KANDI’s first two rounds.\\n\\nPRYNLEE’s biggest strength is personality. Her weakness is structure.",
        "lyricalThemes": "Previous FT battle, rematch, Deeno angle, KANDI’s room, Beckham, barber, PenGame slimy accusation, Princess Phoebe, OnlyFans, foot fetish, Halloween, Frankenstein, Candy Shop, life ain’t sweet.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round three."
          },
          {
            "title": "Strongest trait",
            "description": "Prop angle and personality."
          },
          {
            "title": "Best angle",
            "description": "OnlyFans / foot-fetish exposure."
          },
          {
            "title": "Best technical section",
            "description": "Candy Shop / life ain’t sweet flip."
          },
          {
            "title": "Battle-losing factor",
            "description": "Weak second round and lower punch density."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "She ain’t got a back, she a fatter.",
        "explanation": "KANDI opens with a body-image punch, setting the main direction of his first round."
      },
      {
        "performer": "KANDI",
        "theme": "Rejection",
        "bar": "Nobody want that cat.",
        "explanation": "A crude sex/attraction insult aimed at PRYNLEE."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Nobody want to give you kids like MJ.",
        "explanation": "A Michael Jackson-style reference used as an insult."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "You don’t need a bra, you need a chest plate.",
        "explanation": "A body/armour punch. KANDI says her body needs protection more than clothing."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "No type of concealer can fix this.",
        "explanation": "A makeup/appearance insult."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "What did you use for your wig glue? Pritt Stick.",
        "explanation": "A wig/glue punch. This gets an easy visual reaction."
      },
      {
        "performer": "KANDI",
        "theme": "Critique",
        "bar": "You’re a fat girl who raps, that is your gimmick.",
        "explanation": "The main thesis of KANDI’s first round. He reduces PRYNLEE’s whole persona to body-image branding."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Nice to see Nella Rose is out of the jungle.",
        "explanation": "A celebrity comparison punch."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Lizzo’s ready to rumble.",
        "explanation": "Another celebrity/body comparison."
      },
      {
        "performer": "KANDI",
        "theme": "Confidence",
        "bar": "I brought the energy and you never matched it.",
        "explanation": "KANDI claims he has taken control of the battle already."
      },
      {
        "performer": "KANDI",
        "theme": "Hygiene",
        "bar": "You mix a mouthwash with cat piss.",
        "explanation": "A hygiene/breath insult."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "You wear a wig, you’re balding in patches.",
        "explanation": "A hair/wig attack."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "You’re so fat Thanos would have to snap twice to get rid of you.",
        "explanation": "One of KANDI’s best lines. Thanos’ snap wipes out half the universe, but KANDI says PRYNLEE would need two snaps."
      },
      {
        "performer": "KANDI",
        "theme": "Rejection",
        "bar": "If I slap you here in the face right now, it’s the only time you’ll have a man hitting you.",
        "explanation": "A crude relationship/attraction insult."
      },
      {
        "performer": "KANDI",
        "theme": "Disrespect",
        "bar": "If you were on fire I wouldn’t spit on you.",
        "explanation": "A refusal-to-help line, showing contempt."
      },
      {
        "performer": "KANDI",
        "theme": "Status",
        "bar": "How does it feel to be a pick-me when nobody’s picking you?",
        "explanation": "A strong social/status punch."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "Your name Phoebe, that’s a pig’s name.",
        "explanation": "A name/animal insult."
      },
      {
        "performer": "KANDI",
        "theme": "Diet/Health",
        "bar": "You go Greggs on your ones and call it a quick day.",
        "explanation": "Food/weight imagery."
      },
      {
        "performer": "KANDI",
        "theme": "Appearance",
        "bar": "Spoke to your doctors, they said they’re looking to find your rib cage.",
        "explanation": "A body/medical insult."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "So Miss Piggy, where’s Kermit?",
        "explanation": "A Muppets reference. PRYNLEE becomes Miss Piggy."
      },
      {
        "performer": "KANDI",
        "theme": "Performance",
        "bar": "I’ll kill myself on stage right now if you start twerking.",
        "explanation": "A shock-value body/performance insult."
      },
      {
        "performer": "KANDI",
        "theme": "Rejection",
        "bar": "If I had a hotel and you stayed, I would burn it.",
        "explanation": "A nasty rejection line."
      },
      {
        "performer": "KANDI",
        "theme": "Family",
        "bar": "Your nan’s the only skinny one in your family.",
        "explanation": "A dead-family/body insult. It is battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Food",
        "bar": "If you want Phoebe to focus, tell that bitch you’re making a cake.",
        "explanation": "Food/focus punch."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "What does BBW stand for? Big Body Walrus.",
        "explanation": "A BBW acronym flip."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "You sat on I.B. Reels’ face, that’s why he stutters.",
        "explanation": "A crude scene-specific sex/physical insult."
      },
      {
        "performer": "KANDI",
        "theme": "Interaction",
        "bar": "Show of hands in the crowd right now, who would fuck this tragedy?",
        "explanation": "A crowd-participation humiliation angle."
      },
      {
        "performer": "KANDI",
        "theme": "Reaction",
        "bar": "See how nobody’s hand got raised.",
        "explanation": "KANDI uses the room itself as a punchline."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "You’re like Precious. You’re not precious.",
        "explanation": "A Precious film/reference punch."
      },
      {
        "performer": "KANDI",
        "theme": "Hygiene",
        "bar": "Your breath kicks. Time for a peppermint.",
        "explanation": "A breath/hygiene punch."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "You can’t touch this flow.",
        "explanation": "A MC Hammer-style reference."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "That’s not me.",
        "explanation": "KANDI uses a repeated grime-style refrain to separate himself from PRYNLEE’s image."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Dirty hobbit.",
        "explanation": "A Lord of the Rings / appearance insult."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "Your bars go round and round like you’re doing up NASCAR.",
        "explanation": "A NASCAR/circular-writing punch."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "This is Gloria, Madagascar.",
        "explanation": "A Madagascar / Gloria reference, again aimed at PRYNLEE’s body."
      },
      {
        "performer": "KANDI",
        "theme": "Critique",
        "bar": "Bars like that go over your head.",
        "explanation": "A height/intelligence/punchline line."
      },
      {
        "performer": "KANDI",
        "theme": "Closing",
        "bar": "Look at your face — dead. Look at your clothes — dead. Look at your makeup — dead. Look at your body — dead.",
        "explanation": "A repetitive closer that turns every part of PRYNLEE’s image into a loss."
      },
      {
        "performer": "KANDI",
        "theme": "Closing",
        "bar": "How am I meant to kill someone who’s already dead?",
        "explanation": "A strong final image. KANDI says PRYNLEE was finished before he started."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Record",
        "bar": "Last battle was a fluke.",
        "explanation": "PRYNLEE starts by addressing her previous loss and trying to reset the narrative."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Confidence",
        "bar": "I’m still a big dog.",
        "explanation": "A self-confidence line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Confidence",
        "bar": "I let you walk with a W, but today I live with a crown.",
        "explanation": "PRYNLEE claims her previous result was not a true reflection and says she is here to win."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Critique",
        "bar": "I want a rematch with a less biased crowd.",
        "explanation": "A direct complaint about her last battle and crowd reaction."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Disrespect",
        "bar": "I feel disrespected.",
        "explanation": "She frames the matchup as an insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Reference",
        "bar": "You gave me a wigga who likes to bend it like Beckham.",
        "explanation": "A Beckham/reference line aimed at KANDI’s image."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Rebuttal",
        "bar": "Every bar he spits from to you, that shit’s just been projected.",
        "explanation": "A projection/rebuttal-style line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Scene",
        "bar": "How you let Deeno sleep in your yard?",
        "explanation": "A scene-specific angle involving Deeno."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Lifestyle",
        "bar": "Start by cleaning your room.",
        "explanation": "A hygiene/lifestyle attack."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "This guy is shameless, just like a drunken barber.",
        "explanation": "A barber/drunk-image punch."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Reference",
        "bar": "Van Gallagher stressed, I mentioned his ex.",
        "explanation": "A music/relationship reference. The wording is rough but aimed at his ex situation."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Rebuttal",
        "bar": "You said you’re a monster like Loch Ness, but I’m a god, not a goddess.",
        "explanation": "A monster/god rebuttal."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Self-Awareness",
        "bar": "I’m royalty, the name’s Princess Phoebe.",
        "explanation": "A self-branding line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Critique",
        "bar": "Explain what you meant when you said PenGame can get hella slimy.",
        "explanation": "PRYNLEE tries to turn KANDI’s words against him, though the section becomes messy."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "If that’s KANDI then I’m put off sweets.",
        "explanation": "A clean name flip. KANDI should be sweet, but PRYNLEE says he ruins sweets."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "Halloween, he’s a trick not a treat.",
        "explanation": "A Halloween/candy wordplay."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "He looks like Frankenstein.",
        "explanation": "A monster/appearance insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Prop",
        "bar": "When was he gonna tell Lhasa about your OnlyFans?",
        "explanation": "The start of her prop/exposure angle."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Exposure",
        "bar": "Who knew about your fetish with feet?",
        "explanation": "A foot-fetish allegation-style attack. Battle material only."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Self-Awareness",
        "bar": "Anyone can bring props.",
        "explanation": "PRYNLEE explicitly uses a prop-based angle."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Exposure",
        "bar": "He’s selling pics of his feet.",
        "explanation": "The core claim of her third-round exposure angle. Treat as battle material."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "I had to take the boy to the Candy Shop just to show him that life ain’t sweet.",
        "explanation": "Her best name flip. Candy Shop / KANDI / life ain’t sweet all connect."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Status",
        "bar": "Prince from birth, now I’m standing here being a queen.",
        "explanation": "Royalty/self-status line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Exposure",
        "bar": "You lied on me, so I told your truth.",
        "explanation": "A battle-exposure line."
      }
    ],
    "judgementSummary": {
      "verdict": "kandi",
      "summary": "Official visible result: N/A (Host told viewers to comment). Suggested archive score: KANDI 3-0 PRYNLEE. Suggested round split: Round 1: KANDI, Round 2: KANDI, Round 3: KANDI / close. Reason: PRYNLEE’s third-round prop angle is her best moment, but KANDI controls the room from round one. His second round is the clearest round of the battle and his third shuts the door. Performance Grades - KANDI: A-, PRYNLEE: C+. Final Note: This is a KANDI body. PRYNLEE had personality and one strong prop angle, but KANDI’s energy, reloads and punch density made the result obvious."
    }
  }"""

target_crlf = target.replace('\\n', '\\r\\n')
target_lf = target

if target_crlf in content:
    content = content.replace(target_crlf, replacement.replace('\\n', '\\r\\n'))
    with open("src/data/battles.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully (CRLF) using python exact match")
elif target_lf in content:
    content = content.replace(target_lf, replacement)
    with open("src/data/battles.ts", "w", encoding="utf-8") as f:
        f.write(content)
    print("Replaced successfully (LF) using python exact match")
else:
    print("Target string not found!")
