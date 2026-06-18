import sys

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  {
    "id": "pg-s3.5-2023-12-24-drizzgb-vs-kandi",
    "slug": "drizzgb-vs-kandi",
    "mc1": "drizzgb",
    "mc2": "kandi",
    "title": "DRIZZGB Vs KANDI",
    "theme": "pengame",
    "season": 3.5,
    "views": "92k",
    "date": "2023-12-24",
    "videoUrl": "https://www.youtube.com/watch?v=cuSl7-qEfj0",
    "customEp": "X.01",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "DrizzGB and Kandi opened the Pen Game 2023 Christmas Special with a chaotic, aggressive clash built around personal insults, crowd reaction, voice attacks, appearance jokes, and a running angle around Kandi's girlfriend Tasha. There was no formal judge decision, so this should be treated as an exhibition-style battle rather than a scored tournament clash. Drizz had the clearer structure and more easily readable material, while Kandi brought raw shock-value aggression and unpredictability.",
    "performanceAnalysis": [
      {
        "performer": "DrizzGB",
        "overview": "DrizzGB was the more organised battler. His rounds were clearer, more opponent-specific, and easier for the room to react to. He built repeated angles around Kandi's voice, image, finances, girlfriend, and general credibility, and he got the room reacting through jokes rather than just noise.",
        "lyricalThemes": "Voice attacks, identity and credibility pressure, relationship angles, and crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Clearer Structure",
            "description": "Drizz's setups and payoffs were easier to follow than Kandi's more chaotic writing."
          },
          {
            "title": "Running Personal Angle",
            "description": "He kept returning to the Tasha storyline and turned it into a full battle narrative."
          },
          {
            "title": "Crowd Control",
            "description": "Several moments forced reactions and wheel-ups from the room."
          }
        ]
      },
      {
        "performer": "Kandi",
        "overview": "Kandi brought shock-value aggression and a darker, more chaotic tone. He attacked appearance, family, and credibility, but his delivery and wording were often messy, so the impact was stronger than the structure. His style felt dangerous and unfiltered, but not as clean as Drizz's.",
        "lyricalThemes": "Shock-value disrespect, appearance attacks, raw aggression, and unfiltered performance energy.",
        "keyTechnicalHighlights": [
          {
            "title": "Unfiltered Energy",
            "description": "Kandi sounded hostile and unpredictable, which gave his rounds an edge."
          },
          {
            "title": "Immediate Disrespect",
            "description": "He opened with direct attacks and tried to unsettle Drizz early."
          },
          {
            "title": "Main Weakness",
            "description": "Some bars felt like fragments rather than fully formed punchlines."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DrizzGB",
        "theme": "Voice Angle",
        "bar": "Your voice sounds forced.",
        "explanation": "Drizz keeps attacking Kandi's vocal tone and makes the whole persona look fake."
      },
      {
        "performer": "DrizzGB",
        "theme": "Tasha Angle",
        "bar": "He can't afford a phone.",
        "explanation": "Drizz turns a small chat detail into a money and independence attack."
      },
      {
        "performer": "Kandi",
        "theme": "Appearance",
        "bar": "Big Shaq.",
        "explanation": "Kandi uses the comedy-rap reference as a quick visual mockery angle."
      },
      {
        "performer": "Kandi",
        "theme": "Credibility",
        "bar": "Rat is a snitch.",
        "explanation": "A simple credibility attack aimed at making Drizz look untrustworthy."
      }
    ],
    "oddMoments": [
      "The battle starts with a Christmas cracker instead of a coin toss.",
      "Kandi's round endings are messy in the transcript.",
      "Drizz gets several wheel-ups, showing his material was landing in the room.",
      "The Tasha angle becomes the central storyline of the battle.",
      "There is no formal judge decision in the transcript."
    ],
    "postBattleContext": "This battle should be framed as a Christmas exhibition rather than a scored contest. DrizzGB's cleaner writing and room control make him the performance winner in most reads, but the transcript itself does not provide an official verdict."
  }"""

replacement = """  {
    "id": "pg-s3.5-2023-12-24-drizzgb-vs-kandi",
    "slug": "drizzgb-vs-kandi",
    "mc1": "drizzgb",
    "mc2": "kandi",
    "title": "DRIZZGB Vs KANDI",
    "theme": "pengame",
    "season": 3.5,
    "views": "92k",
    "date": "2023-12-24",
    "videoUrl": "https://www.youtube.com/watch?v=cuSl7-qEfj0",
    "customEp": "X.01",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "drizzgb",
    "clashSummary": "DRIZZGB vs KANDI took place at the **PenGame Christmas Special 2023**, hosted by **Lippy Lickshot** and sponsored by **Rude Boy** and **Concealed**. In the Christmas spirit, instead of a coin toss, the host uses a Christmas cracker to decide who goes first.\\n\\nThe battle is loose, chaotic and full of crowd interruptions, but the result is clear. DRIZZGB has the stronger structure, clearer angles and the better overall battle performance. KANDI has moments, but he does not keep control long enough and appears to have no real third round.\\n\\nKANDI’s early material is aggressive and crude. He attacks DRIZZGB through girlfriend material, appearance, sexual allegation-style insults, voice, family and fake street talk. His delivery has energy, but the round is short and scattered. The host even says it is “not enough,” which sets the tone for the battle.\\n\\nDRIZZGB responds with a much cleaner first round. He attacks KANDI’s hygiene, appearance, voice, identity claims, ethnicity claims, fake accent, class positioning and lack of authenticity. The strongest angle is that KANDI is forcing his voice and trying to sound like someone else. DRIZZGB also flips KANDI’s name into “Candy Crush,” and the room reacts hard enough for a reload.\\n\\nKANDI’s second round has some good moments. He attacks DRIZZGB’s speech, class image, background, mother, car status, Pakistani/Jamaican identity, money and alleged snitching. The issue is that the round is shorter and less damaging than DRIZZGB’s response.\\n\\nDRIZZGB’s second round is the round that takes the battle away. He builds a whole story around KANDI using his girlfriend Tasha’s phone for the PenGame group chat because he allegedly cannot afford his own. He attacks KANDI’s relationship, money, benefits, rent, voice, fake Abra Kadabra style, mental state, lockdown image and girlfriend situation. The Tasha angle becomes the main story of the battle and gives DRIZZGB a clear opponent-specific attack.\\n\\nWhen it reaches round three, KANDI does not deliver a proper third. He says he did not realise it was done, that it kept going, and that he was finished from a while ago. This effectively hands the battle to DRIZZGB.\\n\\nDRIZZGB then delivers a third round and keeps attacking KANDI’s poverty, girlfriend, identity claims, melanin claims, relevance, followers, shows, girls and breathing/stress image. He also works the Tasha angle again, leading to crowd reactions and a “VAR” style check when people discuss whether Tasha is real. DRIZZGB ends by saying “3-0” and that he still smoked KANDI despite not being on form.\\n\\nThere is no official judging section, but the archive result is obvious.",
    "performanceAnalysis": [
      {
        "performer": "DRIZZGB",
        "overview": "DRIZZGB wins because he has the clearest angles and the most complete performance. He does not need the most complex writing; he wins through direct, opponent-specific attacks and better control.\\n\\nHis first round works because it breaks KANDI down as a person. The hygiene, fake voice, fake accent and fake identity angles are all clear. He says KANDI is trying to sound like Dutch / Abra Kadabra and calls out his claimed Irish, Pakistani and Jamaican links. That gives DRIZZGB a strong identity-based angle.\\n\\nHis second round is the best round of the battle. The Tasha phone/group-chat angle gives the clash a storyline. It makes KANDI look broke, dependent on his girlfriend and embarrassed in the PenGame chat. DRIZZGB keeps building on that angle with relationship, rent, benefits, voice and lockdown material.\\n\\nHis third round is enough to close. KANDI does not properly rap a third, while DRIZZGB keeps going. He returns to the Tasha angle, attacks KANDI’s claims, relevance and followers, and ends with enough confidence to call it 3-0.\\n\\nDRIZZGB’s biggest strength is angle selection. He finds one thing that can embarrass KANDI and keeps pressing it.",
        "lyricalThemes": "Hygiene, fake voice, fake accent, Dutch / Abra Kadabra comparison, ethnicity claims, Candy Crush, girlfriend/Tasha phone, group chat, benefits, rent, relationship embarrassment, lockdown, mental asylum, medication, size 15 shoes, followers, relevance, girls, stress breathing.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Opponent-specific angle writing."
          },
          {
            "title": "Best angle",
            "description": "KANDI using Tasha’s phone / girlfriend group-chat situation."
          },
          {
            "title": "Best technical section",
            "description": "Tasha / phone / benefits / fake voice run."
          },
          {
            "title": "Battle-winning factor",
            "description": "Better angles, cleaner control and a completed third round."
          }
        ]
      },
      {
        "performer": "KANDI",
        "overview": "KANDI has energy, but he loses because his rounds are shorter, less controlled and he does not complete the battle properly.\\n\\nHis first round has aggression but not enough structure. He goes after DRIZZGB’s girlfriend, family, looks, voice and sexual reputation, but it feels more like scattered shock material than a complete round.\\n\\nHis second round is better. He has a few sharper ideas about DRIZZGB’s identity, car status, mother, Pakistani/Jamaican claims and money. However, the round does not land as strongly as DRIZZGB’s Tasha angle.\\n\\nHis third is the decisive problem. KANDI does not deliver a proper third round. In a three-round battle, that makes the result very hard to debate.\\n\\nKANDI’s biggest strength is raw energy. His weakness is preparation and round control.",
        "lyricalThemes": "Girlfriend material, sexual accusation-style bars, Big Shaq, Kit Kat, fake raps, Starbucks/flat white, Jenner, Gucci, mother angle, Pakistani/Jamaican identity, money/rupees, snitching, short second round, no clear third.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Aggressive delivery."
          },
          {
            "title": "Best angle",
            "description": "DRIZZGB’s identity and money claims."
          },
          {
            "title": "Best technical section",
            "description": "Starbucks / flat white / Jenner / rupees run."
          },
          {
            "title": "Battle-losing factor",
            "description": "No proper third round and weaker structure."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DRIZZGB",
        "theme": "Hygiene",
        "bar": "This brother here is greasy as fuck.",
        "explanation": "DRIZZGB opens with a hygiene attack, immediately making KANDI look dirty and unpolished."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Hygiene",
        "bar": "Blood, you need to wash up.",
        "explanation": "Continues the hygiene angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Appearance",
        "bar": "You look like you just woke up, you’re a scruff.",
        "explanation": "A direct appearance punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Status",
        "bar": "Get a job, go sell that stuff.",
        "explanation": "A work/money/status insult."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Voice",
        "bar": "Why is your voice like that? You’re doing too much.",
        "explanation": "The start of DRIZZGB’s main first-round angle: KANDI’s voice is forced."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Comparison",
        "bar": "Stepping in this clash trying to sound like Dutch.",
        "explanation": "A Dutch comparison. DRIZZGB says KANDI is imitating a style that is not his."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Voice",
        "bar": "This brother needs Lemsip or a thousand cough sweets.",
        "explanation": "A voice/throat punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Voice",
        "bar": "Drink herbal tea, cause your voice sounds fucked.",
        "explanation": "Continues the voice angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Authenticity",
        "bar": "Why you straining your voice like that? That’s not you, my G.",
        "explanation": "A direct authenticity attack."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "Man’s name is KANDI, he’s slipping on cane and rocks.",
        "explanation": "A KANDI/candy/cane/rocks wordplay."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Identity",
        "bar": "Man said he’s Irish, Pakistani and Jamaican.",
        "explanation": "DRIZZGB attacks KANDI’s identity claims."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Comparison",
        "bar": "Moving like Drake, you’re a combination.",
        "explanation": "A Drake/mixed-identity comparison."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "I can get KANDI crushed.",
        "explanation": "A Candy Crush name flip. One of the clearest bars of the battle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "Fuck your punchlines when I land these hooks.",
        "explanation": "A boxing/writing punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Critique",
        "bar": "Just cause you shout and rap with your eyes closed, that don’t make you a psycho.",
        "explanation": "A strong delivery critique. KANDI’s intensity is framed as performative."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Imagery",
        "bar": "Man gets pulled like vinyl.",
        "explanation": "A reload / vinyl pull-up image."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Setup",
        "bar": "In the next round, I’m gonna tell you all he used his girlfriend’s iPhone.",
        "explanation": "A setup line for round two, making the crowd anticipate the personal angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Storytelling",
        "bar": "Let me tell you a little story about KANDI’s broken dad.",
        "explanation": "DRIZZGB opens round two with storytelling."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Poverty",
        "bar": "He can’t afford a phone so he uses his girl’s in the PenGame chat.",
        "explanation": "The main angle of the battle. KANDI is framed as broke and dependent on his girlfriend."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Embarrassment",
        "bar": "Why would you use her number, you stupid fucking twat?",
        "explanation": "A direct embarrassment punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Prediction",
        "bar": "When you break up, I know the mandem will be hollering that.",
        "explanation": "DRIZZGB says the situation will become a running joke."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Relationship",
        "bar": "I feel sorry for Tasha.",
        "explanation": "A girlfriend/relationship angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Insult",
        "bar": "Nobody wanna mash her, she gotta settle with you.",
        "explanation": "A relationship insult aimed at both KANDI and Tasha."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Poverty",
        "bar": "You can’t afford no credit or data.",
        "explanation": "A poverty/phone-data punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Money",
        "bar": "You and your girl both sponge off benefits.",
        "explanation": "A benefits/money attack."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Allegation",
        "bar": "When you went pen, she was taking in hella digs.",
        "explanation": "A prison/relationship allegation-style bar. It is battle material."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Comparison",
        "bar": "A man really tried to sound like Abra Kadabra.",
        "explanation": "A major style comparison. DRIZZGB says KANDI is forcing an Abra-style voice."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Critique",
        "bar": "Your voice is as fake as a bitch.",
        "explanation": "A direct delivery critique."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "I got the magic, alakazam.",
        "explanation": "A magic wordplay."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Insult",
        "bar": "You look like you broke out a mental asylum.",
        "explanation": "A harsh appearance/mental-state insult."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Money",
        "bar": "I know Tasha pays for the rent and you’re on the couch.",
        "explanation": "A domestic/financial attack."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Lifestyle",
        "bar": "You probably still think that we’re in lockdown.",
        "explanation": "A lifestyle/stagnation punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Status",
        "bar": "You’re like 35 and you’re washed out.",
        "explanation": "An age/status insult."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Confidence",
        "bar": "When I’m 35, I’ll be a boss now.",
        "explanation": "DRIZZGB compares his future trajectory to KANDI’s current status."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "Microsoft Windows, what is that? Can’t shut down.",
        "explanation": "A Windows/shutdown wordplay."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "Broke and you will get broke.",
        "explanation": "A money/violence double meaning."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Name Flip",
        "bar": "Now he’s KANDI man.",
        "explanation": "A KANDI / Candyman name flip."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "KANDI ain’t got sweets for a gun.",
        "explanation": "A candy/gun contrast."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Insult",
        "bar": "By the sounds of it, you really need God.",
        "explanation": "A spiritual/concern punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Mental Health",
        "bar": "Someone ain’t been taking their medicine.",
        "explanation": "A mental-health/medication insult. It is battle material."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Mental Health",
        "bar": "Calm down, let me give him a sedative.",
        "explanation": "Continues the medication/sedation angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Storytelling",
        "bar": "I got Tasha’s number now.",
        "explanation": "Returns to the main girlfriend angle."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Threat",
        "bar": "Bring your crew, I’ll take out ten of them.",
        "explanation": "A threat line."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Identity",
        "bar": "You’re irrelevant claiming you got melanin.",
        "explanation": "An identity/relevance punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "I flow like Evian.",
        "explanation": "A water/smoothness punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Critique",
        "bar": "You talk about stuff you ain’t ever did.",
        "explanation": "A fake-bars accusation."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Status",
        "bar": "Get back on your bike, start pedalling.",
        "explanation": "A status/money/work insult."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Social Media",
        "bar": "This guy’s a beg, cause you follow more than your followers.",
        "explanation": "A social-media status punch."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Wordplay",
        "bar": "He’ll never get a show or gigs like holidays.",
        "explanation": "A show/gig/holiday wordplay."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Confidence",
        "bar": "PenGame, just give me the next thing.",
        "explanation": "A confident closer. DRIZZGB asks for the next opponent."
      },
      {
        "performer": "KANDI",
        "theme": "Allegation",
        "bar": "Now why does this guy look like he’s been nicked for sex crimes?",
        "explanation": "A severe allegation-style insult. It is battle material, not a factual claim."
      },
      {
        "performer": "KANDI",
        "theme": "Performance",
        "bar": "My lips bring the hits back.",
        "explanation": "A performance/music line."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "You bring a girl to the clash, I’m thinking how did he lips that?",
        "explanation": "A girlfriend/attraction insult."
      },
      {
        "performer": "KANDI",
        "theme": "Threat",
        "bar": "Back my shank and then twist that.",
        "explanation": "A weapon/threat line. It is battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "You’ve never been hot like Big Shaq.",
        "explanation": "A Big Shaq / “Man’s Not Hot” reference."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "You always break there like a Kit Kat.",
        "explanation": "A Kit Kat/breaking punch."
      },
      {
        "performer": "KANDI",
        "theme": "Critique",
        "bar": "Stop with the shit raps.",
        "explanation": "A blunt writing critique."
      },
      {
        "performer": "KANDI",
        "theme": "Street",
        "bar": "I used to serve my food with a portion of fries.",
        "explanation": "A street/food image."
      },
      {
        "performer": "KANDI",
        "theme": "Insult",
        "bar": "You got knocked out, must be liking the floor.",
        "explanation": "A fight/knockout insult."
      },
      {
        "performer": "KANDI",
        "theme": "Class",
        "bar": "When you go to Starbucks with a flat white…",
        "explanation": "KANDI opens round two with a coffee/class angle."
      },
      {
        "performer": "KANDI",
        "theme": "Status",
        "bar": "You don’t drive with shit like Ding Eds.",
        "explanation": "A car/status insult. The transcript is rough."
      },
      {
        "performer": "KANDI",
        "theme": "Status",
        "bar": "Never touch foot in a German car.",
        "explanation": "A car/money/status punch."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "Only time you touch Jenner.",
        "explanation": "A Jenner/Kardashian-style reference. The transcript is rough but functions as a celebrity/sex insult."
      },
      {
        "performer": "KANDI",
        "theme": "Violence",
        "bar": "Take out your eyes, ears…",
        "explanation": "A senses/body attack."
      },
      {
        "performer": "KANDI",
        "theme": "Reference",
        "bar": "His mum like Brucie’s Jenner.",
        "explanation": "A Caitlyn Jenner-style reference. It is battle material."
      },
      {
        "performer": "KANDI",
        "theme": "Allegation",
        "bar": "He got nicked up twice for grabbing up Gucci.",
        "explanation": "A theft/Gucci allegation-style insult. Battle material only."
      },
      {
        "performer": "KANDI",
        "theme": "Family",
        "bar": "Your mum is my groupie.",
        "explanation": "A mother/sexual insult."
      },
      {
        "performer": "KANDI",
        "theme": "Wordplay",
        "bar": "Only got raps when he’s talking rupees.",
        "explanation": "A money/ethnicity punch."
      },
      {
        "performer": "KANDI",
        "theme": "Accusation",
        "bar": "Rat is a snitch.",
        "explanation": "A snitching accusation."
      },
      {
        "performer": "KANDI",
        "theme": "Admission",
        "bar": "I didn’t realise it was done.",
        "explanation": "KANDI’s third-round problem. He appears not to have a proper third ready."
      },
      {
        "performer": "KANDI",
        "theme": "Admission",
        "bar": "I was done from a while.",
        "explanation": "This effectively confirms his material had ended before a third-round performance."
      }
    ],
    "judgementSummary": {
      "verdict": "drizzgb",
      "summary": "Official visible result: N/A (Host wrapped the battle, DRIZZGB claimed 3-0). Suggested archive score: DRIZZGB 3-0 KANDI. Suggested round split: Round 1: DRIZZGB, Round 2: DRIZZGB, Round 3: DRIZZGB. Reason: DRIZZGB controlled the battle with the Tasha/group-chat angle and stronger delivery. KANDI had some aggressive material, but the lack of a proper third round makes this a clear DRIZZGB win. Performance Grades - DRIZZGB: B+, KANDI: C. Final Note: DRIZZGB did not need to be perfect here. He had the clearer angle, the funnier personal material and a complete third. KANDI had flashes, but DRIZZGB took the battle comfortably."
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
