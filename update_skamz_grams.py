import sys

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  {
    "id": "pg-s04-2023-09-12-skamz-vs-grams",
    "slug": "skamz-vs-grams",
    "mc1": "skamz",
    "mc2": "grams",
    "title": "SKAMZ vs GRAMS",
    "date": "2023-09-12",
    "videoUrl": "https://www.youtube.com/watch?v=bXY5a7Hjs38",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 16,
    "customEp": "4x16",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "unknown"
  }"""

replacement = """  {
    "id": "pg-s04-2023-09-12-skamz-vs-grams",
    "slug": "skamz-vs-grams",
    "mc1": "skamz",
    "mc2": "grams",
    "title": "SKAMZ vs GRAMS",
    "date": "2023-09-12",
    "theme": "pengame",
    "season": 4,
    "views": null,
    "customEp": "4x16",
    "seasonOrder": 16,
    "stage": null,
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=bXY5a7Hjs38",
    "winner": "grams",
    "clashSummary": "SKAMZ vs GRAMS took place during **PenGame Season 4**, hosted by Big Mawz and sponsored by **Rude Boy**. The host introduces it as the last battle of the night, with both battlers clearly known to the platform.\\n\\nGRAMS chooses to go first.\\n\\nGRAMS opens with a confident first round, immediately framing the clash as “black on black crime” and saying SKAMZ is a mascot who will need reviving. He brings God-mode imagery, lightning, violin, Zoro, diamonds, stars, samosas, chicken frying, pen-game writing, fatherhood, online typing and retirement angles. The round is direct and controlled, with GRAMS attacking SKAMZ’s toughness, status and credibility.\\n\\nSKAMZ answers with some good moments in round one. He flips GRAMS into weight/scales imagery, says Markz put him on the scale and now it is nothing new to weigh up GRAMS. He also brings Amsterdam, samurai, Dora, supply-charge imagery, heist bars and a “verbalist” angle. However, the round ends weakly with repeated “you’re shit” lines, which makes the close feel underwritten compared with GRAMS.\\n\\nGRAMS steps up in round two. He says SKAMZ’s whole verse was jokes and cap, then attacks his street credibility, saying SKAMZ may know about trapping but has not had to go and get a man back. He claims his own name carries real-world meaning, says his weed line has seen more thousands than SKAMZ’s headline status, calls himself Shaolin, threatens to evict SKAMZ and uses daughter/play-house, Lion/Lion King, Goofy and Luffy references. It is the strongest complete round of the battle.\\n\\nSKAMZ’s second round collapses. He tries to begin with a “long live Nanny” angle, repeating the setup several times, but then admits he has flopped and has to freestyle the rest. He does not recover the round. The stumble becomes a major turning point.\\n\\nGRAMS then delivers a third round that seals the battle. He attacks SKAMZ for only getting this far because of references, says SKAMZ has no violence in his sentences, calls him desperate, says he has run into Luffy, and uses Erling Haaland, Goofy, Boosie, Snoop Dogg and Snoopy references. The round is not perfect, but it is complete, and by this point GRAMS is far ahead.\\n\\nSKAMZ’s final round does not happen. He starts with “yo” repeatedly, then tells the host that he does not have a third round and will end it there. GRAMS reacts by saying SKAMZ is making PenGame look bad and that he has taken his position.\\n\\nThere is no official judging section. The host tells viewers to comment who they think won.\\n\\nBased on the available battle, GRAMS wins clearly by Archive Judgement.",
    "performanceAnalysis": [
      {
        "performer": "GRAMS",
        "overview": "GRAMS wins because he completes all three rounds, has stronger structure and keeps attacking SKAMZ from multiple angles. He sounds more prepared, more confident and more locked in.\\n\\nHis first round is a solid opener. He attacks SKAMZ’s status, music image, toughness and fatherhood, while using anime and battle imagery to make the round feel layered. The Zoro / pirate hunter section and lightning/God-mode references give the round identity.\\n\\nHis second round is his best. The central angle is that SKAMZ’s street talk is fake. GRAMS says SKAMZ may know about trapping, but he has not had to move in real-life situations. He also makes the point that his own name, GRAMS, connects to something more believable in the ends. This is the clearest argument of the battle.\\n\\nHis third round is enough to close. It attacks SKAMZ’s lack of violence, desperation and references, while using Luffy, Haaland, Goofy, Boosie, Snoop Dogg and Snoopy material. The most important thing is that GRAMS actually has a third round, while SKAMZ does not.\\n\\nGRAMS’s biggest strength is composure. He stays ready while SKAMZ falls apart.",
        "lyricalThemes": "Black-on-black crime, mascot, God mode, lightning, Zoro, diamonds, stars, samosas/chicken, pen-game writing, fatherhood, online typing, real street credibility, trapping, flats, weed line, Shaolin, daughter/play-house, Lion King, Luffy, Haaland, Goofy, Boosie, Snoop Dogg, Snoopy.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Preparation and composure."
          },
          {
            "title": "Best angle",
            "description": "SKAMZ’s street talk is cap."
          },
          {
            "title": "Best technical section",
            "description": "Trapping / flats / weed line / Shaolin run."
          },
          {
            "title": "Battle-winning factor",
            "description": "Three complete rounds while SKAMZ collapses."
          }
        ]
      },
      {
        "performer": "SKAMZ",
        "overview": "SKAMZ has flashes in round one but loses the battle through lack of preparation. His first round has some decent wordplay, but his second falls apart and his third is completely missing.\\n\\nHis first round is the only round where he has a real case. The scales/weighing up GRAMS line is smart, and the Amsterdam / samurai / intent-to-supply section gives him some structure. However, the ending is weak and repetitive.\\n\\nHis second round is the turning point. The “long live Nanny” angle might have become something, but he repeats the setup too many times and then admits he flopped. Once he says he has to freestyle the rest, the round is effectively lost.\\n\\nHis third round confirms the result. SKAMZ admits he has no third and ends the battle there. That makes it impossible to score the battle in his favour.\\n\\nSKAMZ’s biggest strength is early punch potential. His weakness is preparation and completion.",
        "lyricalThemes": "Weighing up GRAMS, Amsterdam, samurai, Dora, intent to supply, heist imagery, verbalist, one-win angle, Nanny angle, flop admission, no third round.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round one."
          },
          {
            "title": "Strongest trait",
            "description": "Name-flip potential."
          },
          {
            "title": "Best angle",
            "description": "Weighing up GRAMS / scales imagery."
          },
          {
            "title": "Best technical section",
            "description": "Markz put him on the scale / Amsterdam / samurai run."
          },
          {
            "title": "Battle-losing factor",
            "description": "Flopped second round and no third round."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "GRAMS",
        "theme": "Violence",
        "bar": "Right now I’m on black-on-black criming.",
        "explanation": "GRAMS opens with violent battle imagery, setting the clash as damage between two Black battlers."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "SKAMZ is a mascot, they’ll try and revive him.",
        "explanation": "A strong status punch. SKAMZ is reduced from battler to mascot."
      },
      {
        "performer": "GRAMS",
        "theme": "Imagery",
        "bar": "GRAMS in God mode, that’s why I had to pattern the lightning to strike him.",
        "explanation": "A God-mode/lightning image. GRAMS frames himself as above normal level."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "Thinks that he’s Shelley when he jumps on the beat.",
        "explanation": "A music/artist comparison, suggesting SKAMZ thinks he is colder than he is."
      },
      {
        "performer": "GRAMS",
        "theme": "Insult",
        "bar": "This n**** is sweet, go get him a violin.",
        "explanation": "A softness/emotional punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "Every other line, I’m a pirate hunter like Zoro.",
        "explanation": "A One Piece / Zoro reference. Zoro is a swordsman, used here for cutting through opponents."
      },
      {
        "performer": "GRAMS",
        "theme": "Imagery",
        "bar": "I’ll cut through diamonds.",
        "explanation": "A sharpness/hardness punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "You can be a star, I will still shoot you out of alignment.",
        "explanation": "A star/space/status line."
      },
      {
        "performer": "GRAMS",
        "theme": "Food/Cooking",
        "bar": "I finished with the samosas, now it’s your chicken, I’m gonna start frying.",
        "explanation": "A food/cooking punch. GRAMS turns SKAMZ into the next thing getting cooked."
      },
      {
        "performer": "GRAMS",
        "theme": "Threat",
        "bar": "If this was a battle on road, I would just see this man on sight.",
        "explanation": "A real-life threat line. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Confidence",
        "bar": "Now we’re on PenGame, I’m gonna kill him with writing.",
        "explanation": "A clean battle-rap distinction: on stage, the weapon is the pen."
      },
      {
        "performer": "GRAMS",
        "theme": "Imagery",
        "bar": "I’ve been a student dealing with SKAMZ, part of my assignment.",
        "explanation": "A student/assignment line. SKAMZ becomes coursework."
      },
      {
        "performer": "GRAMS",
        "theme": "Fatherhood",
        "bar": "Mind how you talk, now you’re a father.",
        "explanation": "A fatherhood angle. GRAMS says SKAMZ should move more carefully."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "You’re only putting that work on your typing.",
        "explanation": "An online-versus-real-life punch. SKAMZ is active online, not outside."
      },
      {
        "performer": "GRAMS",
        "theme": "Consequence",
        "bar": "I make SKAMZ consider retiring.",
        "explanation": "A direct battle-consequence line."
      },
      {
        "performer": "GRAMS",
        "theme": "Imagery",
        "bar": "He thinks he’s hot till I douse his flame, I’m the fire hydrant.",
        "explanation": "A strong heat/fire-extinguishing punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "SKAMZ whole verse full of jokes and cap.",
        "explanation": "GRAMS opens round two by calling SKAMZ fake."
      },
      {
        "performer": "GRAMS",
        "theme": "Credibility",
        "bar": "He might know about trapping, but have you ever had to go get a man back?",
        "explanation": "A street-credibility challenge. GRAMS says SKAMZ talks the life but has not lived the pressure."
      },
      {
        "performer": "GRAMS",
        "theme": "Environment",
        "bar": "I’m chatting about pulling up into the flats.",
        "explanation": "A real-environment setup."
      },
      {
        "performer": "GRAMS",
        "theme": "Violence",
        "bar": "Where if you’re outnumbered, you could get wrapped.",
        "explanation": "A danger/violence line."
      },
      {
        "performer": "GRAMS",
        "theme": "Violence",
        "bar": "I’ve seen one bang make brothers collapse.",
        "explanation": "A one-punch/real-life violence line."
      },
      {
        "performer": "GRAMS",
        "theme": "Credibility",
        "bar": "SKAMZ isn’t about it.",
        "explanation": "A direct credibility verdict."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "SKAMZ should allow it, that is a stage name.",
        "explanation": "A strong name/status punch. GRAMS says “SKAMZ” is just a performance identity."
      },
      {
        "performer": "GRAMS",
        "theme": "Credibility",
        "bar": "I’ve got GRAMS in my name and in ends I’m really around it.",
        "explanation": "GRAMS flips his own name into street credibility."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "You’re the headliner on this show, but I bet that my weed line seen more thousands.",
        "explanation": "A platform/status punch. SKAMZ may headline, but GRAMS claims more real-world movement."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "You cannot verse me, I am a Shaolin.",
        "explanation": "A martial-arts/discipline reference."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "Started a gram, now I’ve turned to a mountain.",
        "explanation": "A grams-to-mountain scale-up line."
      },
      {
        "performer": "GRAMS",
        "theme": "Removal",
        "bar": "I’ll evict SKAMZ and dash man out.",
        "explanation": "A removal/housing punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "Just link with your daughter so we can play house.",
        "explanation": "A fatherhood/family insult. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "Thought he was a lion, this n**** is lying.",
        "explanation": "A lion/lying wordplay."
      },
      {
        "performer": "GRAMS",
        "theme": "Insult",
        "bar": "His mum should have swallowed.",
        "explanation": "A harsh existence insult."
      },
      {
        "performer": "GRAMS",
        "theme": "Confidence",
        "bar": "I’m moving in plain sight.",
        "explanation": "A confidence line. GRAMS is not hiding."
      },
      {
        "performer": "GRAMS",
        "theme": "Rebuttal",
        "bar": "SKAMZ said he swings like mule… that n****’s a bitch.",
        "explanation": "GRAMS mocks a previous SKAMZ claim."
      },
      {
        "performer": "GRAMS",
        "theme": "Prediction",
        "bar": "Winning this battle’s a myth.",
        "explanation": "A decisive statement that SKAMZ cannot win."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "You only got this far cause of references.",
        "explanation": "A direct critique of SKAMZ’s battle career."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "You ain’t got no violence in your sentences.",
        "explanation": "A strong writing critique. SKAMZ may rap, but the words do not feel dangerous."
      },
      {
        "performer": "GRAMS",
        "theme": "Personality",
        "bar": "You’re some clever kid, now you sound desperate.",
        "explanation": "A personality/status punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Reaction",
        "bar": "Cooked by a crowd, that’s why I’m here peppering.",
        "explanation": "A cooking/pepper/crowd reaction line."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "I’m on attack like Erling Haaland, command of my finishing brilliant.",
        "explanation": "A football reference. Haaland is known for finishing chances."
      },
      {
        "performer": "GRAMS",
        "theme": "Self-Awareness",
        "bar": "This shit rare coming from a newbie.",
        "explanation": "GRAMS highlights that he is new but already performing strongly."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "He just ran into Luffy.",
        "explanation": "A One Piece reference. Luffy is a powerful protagonist, used here as a mismatch image."
      },
      {
        "performer": "GRAMS",
        "theme": "Comparison",
        "bar": "He more like Goofy, I’m more like Boosie.",
        "explanation": "A cartoon/rapper contrast."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "I will smoke this don like Snoop Dogg.",
        "explanation": "A weed/smoke/Snoop Dogg reference."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "He just barked, so he more like Snoopy.",
        "explanation": "A Snoop/Snoopy dog wordplay."
      },
      {
        "performer": "SKAMZ",
        "theme": "Violence",
        "bar": "I’ve been putting guys in packs, this is not new to man.",
        "explanation": "SKAMZ opens by saying he has already packed opponents before."
      },
      {
        "performer": "SKAMZ",
        "theme": "Wordplay",
        "bar": "Since Markz put him on the scale, it’s nothing new to weigh up GRAMS.",
        "explanation": "One of SKAMZ’s best bars. GRAMS is weighed like product, while Markz is tied into the setup."
      },
      {
        "performer": "SKAMZ",
        "theme": "Reference",
        "bar": "Like Amsterdam, I’ll send him high.",
        "explanation": "A weed/Amsterdam punch."
      },
      {
        "performer": "SKAMZ",
        "theme": "Reference",
        "bar": "You need one when you’re wrestling man.",
        "explanation": "A plan/wrestling line."
      },
      {
        "performer": "SKAMZ",
        "theme": "Imagery",
        "bar": "Not like Dora, you get buried in sand by samurai SKAMZ.",
        "explanation": "A Dora/exploration and samurai image. The wording is rough, but it works as a character punch."
      },
      {
        "performer": "SKAMZ",
        "theme": "Imagery",
        "bar": "Longest blade, konnichiwa, then get straight to the cutting.",
        "explanation": "A Japanese/samurai blade reference."
      },
      {
        "performer": "SKAMZ",
        "theme": "Rebuttal",
        "bar": "I hear my man begging for smoke. Don’t beg, it’s disgusting.",
        "explanation": "A smoke/challenge rebuttal."
      },
      {
        "performer": "SKAMZ",
        "theme": "Status",
        "bar": "I only took this battle because of the verbal that this guy kept running.",
        "explanation": "SKAMZ frames the clash as a response to GRAMS talking online."
      },
      {
        "performer": "SKAMZ",
        "theme": "Family",
        "bar": "How can you not see that your mum is a whore?",
        "explanation": "A mother insult. It is battle material."
      },
      {
        "performer": "SKAMZ",
        "theme": "Wordplay",
        "bar": "He said he got his third eye open, now you can’t see no more.",
        "explanation": "A third-eye/vision punch."
      },
      {
        "performer": "SKAMZ",
        "theme": "Wordplay",
        "bar": "I’ll drag GRAMS out of the boot like you’re getting charged for intent to supply.",
        "explanation": "A strong drugs/legal wordplay. GRAMS becomes product in a boot."
      },
      {
        "performer": "SKAMZ",
        "theme": "Imagery",
        "bar": "Or stuff man in a bag like hands up, this is a heist.",
        "explanation": "A robbery/body-bag image."
      },
      {
        "performer": "SKAMZ",
        "theme": "Violence",
        "bar": "I send guys to Jesus Christ.",
        "explanation": "A death/threat line."
      },
      {
        "performer": "SKAMZ",
        "theme": "Record",
        "bar": "You only got one win, stop talking shit.",
        "explanation": "A battle-record attack."
      },
      {
        "performer": "SKAMZ",
        "theme": "Critique",
        "bar": "This guy’s a verbalist.",
        "explanation": "SKAMZ calls GRAMS someone who talks rather than acts."
      },
      {
        "performer": "SKAMZ",
        "theme": "Insult",
        "bar": "Let me tell you some facts, bro, you are really shit.",
        "explanation": "A blunt but weak line that marks the start of his repetitive ending."
      },
      {
        "performer": "SKAMZ",
        "theme": "Record",
        "bar": "You only got one win, so I don’t really wanna hear shit.",
        "explanation": "Another record-based dismissal."
      },
      {
        "performer": "SKAMZ",
        "theme": "Family",
        "bar": "He said his nan was alive, so Markz, long live Nanny.",
        "explanation": "SKAMZ’s second-round setup. The idea could have become a personal angle."
      },
      {
        "performer": "SKAMZ",
        "theme": "Threat",
        "bar": "Say something out of order and it’ll be hashtag long live Nanny.",
        "explanation": "A threat built around GRAMS’s nan. It is battle material."
      },
      {
        "performer": "SKAMZ",
        "theme": "Admission",
        "bar": "I can’t even lie, I flopped.",
        "explanation": "The key moment of the battle. SKAMZ admits the round has collapsed."
      },
      {
        "performer": "SKAMZ",
        "theme": "Admission",
        "bar": "I gotta freestyle the rest.",
        "explanation": "SKAMZ tries to recover, but the damage is already done."
      },
      {
        "performer": "SKAMZ",
        "theme": "Admission",
        "bar": "I don’t care if I flopped it.",
        "explanation": "A failed attempt to brush off the mistake."
      },
      {
        "performer": "SKAMZ",
        "theme": "Admission",
        "bar": "I ain’t got a third round, so I’mma just end it here.",
        "explanation": "The decisive line. SKAMZ forfeits the final round by admitting he has no material."
      }
    ],
    "judgementSummary": {
      "verdict": "grams",
      "summary": "Official visible result: N/A (Host told viewers to comment). Suggested archive score: GRAMS 3-0 SKAMZ. Suggested round split: Round 1: GRAMS, Round 2: GRAMS, Round 3: GRAMS. Reason: GRAMS was more prepared, more direct and completed the battle. SKAMZ had a decent first round, but the second-round flop and missing third make the result decisive. Performance Grades - GRAMS: A-, SKAMZ: D+. Final Note: This is not just a win for GRAMS — it is a collapse from SKAMZ. GRAMS took the opportunity, stayed composed and made the headline name look unprepared."
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
