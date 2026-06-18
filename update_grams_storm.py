import sys

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  {
    "id": "pg-s3.5-2023-12-25-grams-vs-storm",
    "slug": "grams-vs-storm",
    "mc1": "grams",
    "mc2": "storm",
    "title": "GRAMS vs STORM",
    "date": "2023-12-25",
    "videoUrl": "https://www.youtube.com/watch?v=yg8_6ezAX0s",
    "theme": "pengame",
    "season": 3.5,
    "views": "78k",
    "customEp": "X.03",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Grams vs Storm was one of the hotter Christmas Special battles. There was no formal judge decision in the transcript, but Grams appears to have controlled much of the room through performance, crowd reaction, and repeated personal angles. Storm brought darker street and death imagery, but Grams had the bigger and more memorable moments.",
    "performanceAnalysis": [
      {
        "performer": "Grams",
        "overview": "Grams came in like he planned a whole scene, not just three rounds. He used a funeral frame, direct identity attacks, and a third-round beat switch to keep the room reacting. His style was more theatrical and more controlled, which made his attacks feel bigger in the room.",
        "lyricalThemes": "Funeral framing, identity attacks, crowd control, beat switching, and theatrical disrespect.",
        "keyTechnicalHighlights": [
          {
            "title": "Performance Control",
            "description": "Grams stayed in command of the room and used reaction points well."
          },
          {
            "title": "Name Flips",
            "description": "He repeatedly downgraded Storm's name by treating him like a weak weather system instead of a real threat."
          },
          {
            "title": "Third-Round Switch",
            "description": "His garage/house-style beat switch was one of the biggest performance moments."
          }
        ]
      },
      {
        "performer": "Storm",
        "overview": "Storm leaned into violence, horror imagery, and darker street references. He had intensity, but some of the writing was crowded and less clean than Grams' more controlled performance. He still had moments, especially when he simplified the idea and kept the attacks direct.",
        "lyricalThemes": "Death imagery, horror references, street threats, and aggressive counter-writing.",
        "keyTechnicalHighlights": [
          {
            "title": "Dark Tone",
            "description": "Storm leaned hard into a threatening, horror-film style of writing."
          },
          {
            "title": "Street References",
            "description": "He used crime-drama and street imagery to make the battle feel dangerous."
          },
          {
            "title": "Main Weakness",
            "description": "Some of the material was dense without enough clean punchline structure."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Grams",
        "theme": "Name Flip",
        "bar": "This ain't no storm.",
        "explanation": "Grams strips Storm's name of power by saying he is not a real storm."
      },
      {
        "performer": "Grams",
        "theme": "Numbers Attack",
        "bar": "400 views and 13 likes.",
        "explanation": "A direct music-career attack that turns numbers into a credibility joke."
      },
      {
        "performer": "Grams",
        "theme": "Speed / Escape",
        "bar": "Take off faster than sports cars.",
        "explanation": "Grams is saying Storm will have to run once the pressure comes on. The sports car image makes the escape sound fast, flashy, and embarrassing rather than heroic."
      },
      {
        "performer": "Grams",
        "theme": "Scene Shift",
        "bar": "Fuck rap, this is more your vibe.",
        "explanation": "This is a performance-angle punch. Grams changes the energy and says Storm belongs more in the kind of vibe or scene being used in the beat switch than in serious rap."
      },
      {
        "performer": "Grams",
        "theme": "Pub Culture",
        "bar": "Go have a pint.",
        "explanation": "A pint points to pub culture, so Grams is basically saying Storm looks more like a pub regular than a battle rapper. It makes him seem ordinary and out of place."
      },
      {
        "performer": "Storm",
        "theme": "Death Imagery",
        "bar": "Head first in a hearse.",
        "explanation": "Storm uses burial imagery to frame Grams as already finished."
      },
      {
        "performer": "Storm",
        "theme": "Off the Map",
        "bar": "Off the map.",
        "explanation": "A concise disappearance punch that fits his darker style."
      },
      {
        "performer": "Storm",
        "theme": "Smoking Angle",
        "bar": "Roll you up.",
        "explanation": "Storm flips Grams into spliff language. To 'roll someone up' is to smoke them out or consume them, so he is using smoking imagery as a threat."
      },
      {
        "performer": "Storm",
        "theme": "Street Imagery",
        "bar": "Top Boy like Kamali.",
        "explanation": "This references the UK crime drama Top Boy to make the bar feel more street-authentic and dangerous. It is a culture reference used to sell the threat image."
      },
      {
        "performer": "Storm",
        "theme": "Identity Insult",
        "bar": "Hairline's offside.",
        "explanation": "A football term becomes a visual insult. Storm is saying the hairline is pushed too far back, as if it has gone out of position like an offside player."
      },
      {
        "performer": "Storm",
        "theme": "Checkmate Finish",
        "bar": "Checkmate, no chess.",
        "explanation": "Storm borrows chess language to sound decisive, then immediately says it is not even a game anymore. The line is about ending the opponent outright rather than playing it out strategically."
      }
    ],
    "oddMoments": [
      "Grams opens the battle like a funeral.",
      "The battle gets very personal very quickly.",
      "Storm returns with darker street and death imagery.",
      "Grams' third-round beat switch is one of the biggest performance moments.",
      "There is no official winner declared in the transcript."
    ],
    "postBattleContext": "This battle should be treated as a Christmas Special performance clash rather than a scored contest. Grams likely had the stronger room control, but the transcript does not give a formal verdict."
  }"""

replacement = """  {
    "id": "pg-s3.5-2023-12-25-grams-vs-storm",
    "slug": "grams-vs-storm",
    "mc1": "grams",
    "mc2": "storm",
    "title": "GRAMS vs STORM",
    "date": "2023-12-25",
    "videoUrl": "https://www.youtube.com/watch?v=yg8_6ezAX0s",
    "theme": "pengame",
    "season": 3.5,
    "views": "78k",
    "customEp": "X.03",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "grams",
    "clashSummary": "GRAMS vs STORM took place at the **PenGame Christmas Special 2023**, hosted by **Lippy Lickshot** and sponsored by **Rude Boy** and **Clued Up**. The battle uses the Christmas cracker system instead of a coin toss, and GRAMS starts first.\\n\\nGRAMS opens with theatre. Before rapping, he frames the battle as a funeral for STORM, then brings out a prop and makes the room wait while building tension. Once the beat starts, he attacks STORM’s name, height, views, music career, COVID-related content, lack of substance, family history and deceased nan. The round is harsh, personal and clearly designed to shake STORM early. GRAMS’s disrespect toward STORM’s nan becomes one of the central battle angles.\\n\\nSTORM’s first round is aggressive. He attacks GRAMS through drug imagery, family insults, threats, fake street credibility, women, food, demons, Bilbo Baggins, black magic and grave-digging. He has energy and some dark lines, but the round is less controlled than GRAMS’s opener. GRAMS has the cleaner structure and bigger angle.\\n\\nGRAMS’s second round switches into a racial and credibility angle. He calls STORM a white boy in rap, questions what he was doing in the trap, says his bars come from a rural lifestyle and attacks his credibility. He then moves into George Floyd, Tommy Robinson, African spellwork, daughter/future lines, offset/amigos wordplay, storm-water imagery and child-protection checks. It is a dangerous and uncomfortable round, but it is direct and opponent-specific.\\n\\nSTORM’s second round has aggression but is messier. He attacks GRAMS as short, fake, weak, and not really about the life he claims. He brings hearse, funeral, Madeleine McCann, chess, “virgin” and body-under-the-sea imagery. The energy is there, but it does not land with the same clarity as GRAMS’s second.\\n\\nGRAMS’s third round is the performance round of the battle. He changes the rhythm into more of a garage/house vibe and mocks STORM by saying this is more his type of music. The repeated “Storm, you are not the guy” hook gets the room moving and turns the battle into a moment. He then adds short-man jokes, girl/dog-in-bed material, dad, mum, grandma and family-stress angles. It is the most memorable round of the battle.\\n\\nSTORM closes with a stronger third than his second, attacking GRAMS’s realness, numbers, flats, boy-not-getting-backed, ex, street image, DMs, virginity and chess. It is a decent closer, but GRAMS’s beat switch and room control make the final round clear.\\n\\nThere is no official judging section. The host closes by telling viewers to comment who won.\\n\\nBased on the battle, GRAMS wins by Archive Judgement.",
    "performanceAnalysis": [
      {
        "performer": "GRAMS",
        "overview": "GRAMS wins because he controls the battle from the opening stunt to the final beat switch. He is more prepared, more direct and more memorable.\\n\\nHis first round sets the tone. The funeral framing gives the battle an event feel before he even starts rapping. His attacks on STORM’s name, height, music numbers, content and nan are harsh but effective as battle material. The round is nasty and focused.\\n\\nHis second round is the most controversial. He goes into race, rural background, trap credibility and Tommy Robinson imagery. It is uncomfortable, but it is clearly built around making STORM look like a white outsider pretending to have street experience. The angle is coherent, even when the content is extreme.\\n\\nHis third round wins the room. The garage-style beat switch and repeated hook make STORM look like he has been dragged onto GRAMS’s stage. It is simple but effective because the performance becomes bigger than the writing.\\n\\nGRAMS’s biggest strength is control. He knows how to create a moment.",
        "lyricalThemes": "Funeral staging, Storm name flips, short-man jokes, views/likes, COVID content, deceased nan angle, white-boy-in-rap angle, rural/trap credibility, George Floyd, Tommy Robinson, African spellwork, daughter/future insults, storm-water wordplay, garage beat switch, “not the guy” hook, family stress.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round three."
          },
          {
            "title": "Strongest trait",
            "description": "Performance control."
          },
          {
            "title": "Best angle",
            "description": "STORM is not the guy and does not belong in rap."
          },
          {
            "title": "Best technical section",
            "description": "Garage beat switch / repeated “not the guy” hook."
          },
          {
            "title": "Battle-winning factor",
            "description": "Stronger moments, better structure and bigger crowd control."
          }
        ]
      },
      {
        "performer": "STORM",
        "overview": "STORM does not perform badly. He brings aggression and has moments in every round, but his writing is less controlled and he does not create a round as memorable as GRAMS’s third.\\n\\nHis first round is his most aggressive. He attacks GRAMS through drug, family, violence and black-magic imagery. It sounds dangerous, but it is not as targeted as GRAMS’s opening funeral angle.\\n\\nHis second round has punches but becomes scattered. The hearse, Madeleine McCann, chess and “fiddler” bars are dark, but the round does not build a clean case against GRAMS.\\n\\nHis third round is his best structured response. He talks about GRAMS’s numbers, capped-out claims, flats, not getting his boy back, ex, DMs and chess. It is a decent closer, but by that point GRAMS has already taken the battle’s biggest moments.\\n\\nSTORM’s biggest strength is aggression. His weakness is structure.",
        "lyricalThemes": "Bliff/weed, family insults, violence, fake street credibility, women, food, black magic, grave-digging, hearse, Madeleine McCann, chess, DMs, ex, flats, numbers, virginity, deep-sea/body imagery.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round three."
          },
          {
            "title": "Strongest trait",
            "description": "Aggression."
          },
          {
            "title": "Best angle",
            "description": "GRAMS is fake and not really backing his claims."
          },
          {
            "title": "Best technical section",
            "description": "Flats / numbers / DMs / chess section."
          },
          {
            "title": "Battle-losing factor",
            "description": "Less memorable and less controlled than GRAMS."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "GRAMS",
        "theme": "Theatre",
        "bar": "Before I even go into this, it’s been a sad day… because someone’s dying.",
        "explanation": "GRAMS opens with funeral theatre, setting STORM up as the body."
      },
      {
        "performer": "GRAMS",
        "theme": "Name Flip",
        "bar": "This ain’t no storm, it’s a gust of wind.",
        "explanation": "A clean name flip. STORM is reduced from something powerful to something minor."
      },
      {
        "performer": "GRAMS",
        "theme": "Name Flip",
        "bar": "I’ll quiet this storm.",
        "explanation": "Another name flip. GRAMS says he can silence the storm."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "The real X-Men Storm is a bitch — but she bad. This imposter here just a bitch.",
        "explanation": "An X-Men / Storm reference, turning STORM’s name into an insult."
      },
      {
        "performer": "GRAMS",
        "theme": "Appearance",
        "bar": "He mad short, so he’s going home sad.",
        "explanation": "A height punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Career",
        "bar": "You get 400 views and 13 likes on the track.",
        "explanation": "A music-career numbers attack."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "Stop wasting your time with these raps.",
        "explanation": "A career critique."
      },
      {
        "performer": "GRAMS",
        "theme": "Content",
        "bar": "His whole content is COVID related.",
        "explanation": "A content/platform attack."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "I’ll leave him dead like a COVID patient.",
        "explanation": "A COVID/death punch. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "He ain’t got substance.",
        "explanation": "A direct writing/personality critique."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "When your nan went up to the heavens, you almost gave in.",
        "explanation": "A deceased-family angle. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "She soon see her grandson again.",
        "explanation": "A death/nan insult. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Imagery",
        "bar": "Your coffin just came in.",
        "explanation": "Continues the funeral setup."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "Just like nanny, I’ll leave you ancient.",
        "explanation": "A harsh deceased-family punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Disrespect",
        "bar": "Please don’t let me find out your last name, I might go cemetery and piss on remains.",
        "explanation": "A grave-disrespect line. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Identity",
        "bar": "I saw disrespect and I do that blatant.",
        "explanation": "GRAMS makes the disrespect part of his identity."
      },
      {
        "performer": "GRAMS",
        "theme": "Critique",
        "bar": "Storm ain’t got no substance.",
        "explanation": "He repeats the central writing critique."
      },
      {
        "performer": "GRAMS",
        "theme": "Race/Identity",
        "bar": "What is this white boy doing in rap?",
        "explanation": "A race/genre-position attack."
      },
      {
        "performer": "GRAMS",
        "theme": "Credibility",
        "bar": "Your bars come from a rural lifestyle.",
        "explanation": "A rural-versus-street credibility punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Credibility",
        "bar": "Tell us all what you were doing in the trap.",
        "explanation": "GRAMS questions STORM’s street claims."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "You need weight in the bits before you can weigh up a pack.",
        "explanation": "A drug/weight wordplay."
      },
      {
        "performer": "GRAMS",
        "theme": "Confidence",
        "bar": "You defeating me is a myth.",
        "explanation": "A simple dominance line."
      },
      {
        "performer": "GRAMS",
        "theme": "Violence",
        "bar": "I’ll stomp on your head till you’re having a fit.",
        "explanation": "A violent image. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Hostile Content",
        "bar": "Do that for George Floyd.",
        "explanation": "A racialised violence reference. It is hostile battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Reference",
        "bar": "I gotta put little Tommy Robinson through a slaughter.",
        "explanation": "A Tommy Robinson reference used to frame STORM as a white outsider target."
      },
      {
        "performer": "GRAMS",
        "theme": "Spiritual",
        "bar": "I’ll get a spell from my African friend.",
        "explanation": "A spiritual/curse line."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "It would’ve been better if you started PenGame to be a reporter.",
        "explanation": "A role/status insult. STORM belongs reporting, not battling."
      },
      {
        "performer": "GRAMS",
        "theme": "Consequence",
        "bar": "I just killed your career.",
        "explanation": "A direct battle-consequence line."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "If my amigos with me, offset.",
        "explanation": "An Amigos / Offset wordplay."
      },
      {
        "performer": "GRAMS",
        "theme": "Wordplay",
        "bar": "Storm a water talker.",
        "explanation": "A Storm/water name flip."
      },
      {
        "performer": "GRAMS",
        "theme": "Insult",
        "bar": "DBS.",
        "explanation": "A child-safety check reference, used as an insult. It is battle material."
      },
      {
        "performer": "GRAMS",
        "theme": "Performance",
        "bar": "Fuck rap, this is more your vibe.",
        "explanation": "GRAMS opens the third by switching the style and mocking STORM’s musical lane."
      },
      {
        "performer": "GRAMS",
        "theme": "Confidence",
        "bar": "Put any beat on, you’re gonna get fried.",
        "explanation": "A confidence line. The beat does not matter; STORM loses regardless."
      },
      {
        "performer": "GRAMS",
        "theme": "Hook",
        "bar": "Trust me, Storm, you are not the guy.",
        "explanation": "The central hook of the third round. Simple but effective."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "Put the mic down and go have a pint.",
        "explanation": "A pub/lad-culture insult."
      },
      {
        "performer": "GRAMS",
        "theme": "Insult",
        "bar": "You let a dog in your bed and that’s why you ain’t getting no pussy at night.",
        "explanation": "A relationship/sex insult."
      },
      {
        "performer": "GRAMS",
        "theme": "Appearance",
        "bar": "You’re short, that’s a fact, so most girls say you ain’t their type.",
        "explanation": "A height/attraction punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "I know at some point your dad is lying.",
        "explanation": "A family/fatherhood attack."
      },
      {
        "performer": "GRAMS",
        "theme": "Insult",
        "bar": "Your life’s been a mess.",
        "explanation": "A broad personal attack."
      },
      {
        "performer": "GRAMS",
        "theme": "Status",
        "bar": "PenGame child, you ain’t passing the test.",
        "explanation": "A PenGame/status punch."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "Now grandma’s gone, there’s only one gen left.",
        "explanation": "A family-lineage/deceased-nan punch. It is battle material."
      },
      {
        "performer": "STORM",
        "theme": "Wordplay",
        "bar": "Fuck all the chat, put GRAMS in a riz.",
        "explanation": "A weed/rolling punch. GRAMS becomes something to smoke."
      },
      {
        "performer": "STORM",
        "theme": "Wordplay",
        "bar": "Roll you up, now I’m lighting this spliff.",
        "explanation": "Continues the weed/name flip."
      },
      {
        "performer": "STORM",
        "theme": "Confidence",
        "bar": "I spent time on this bitch.",
        "explanation": "STORM claims he prepared for GRAMS."
      },
      {
        "performer": "STORM",
        "theme": "Violence",
        "bar": "I fly-kick your mum.",
        "explanation": "A mother/violence insult. It is battle material."
      },
      {
        "performer": "STORM",
        "theme": "Threat",
        "bar": "I told you I fold you in half.",
        "explanation": "A physical-threat line."
      },
      {
        "performer": "STORM",
        "theme": "Critique",
        "bar": "You lie how you live.",
        "explanation": "A fake-life accusation."
      },
      {
        "performer": "STORM",
        "theme": "Credibility",
        "bar": "You don’t supply on the strips.",
        "explanation": "A street-credibility attack."
      },
      {
        "performer": "STORM",
        "theme": "Hostile Content",
        "bar": "Your whole life’s gone shit, take that knife to your wrist.",
        "explanation": "A self-harm-style insult. It is hostile battle material."
      },
      {
        "performer": "STORM",
        "theme": "Challenge",
        "bar": "We can fight after this.",
        "explanation": "A direct physical challenge."
      },
      {
        "performer": "STORM",
        "theme": "Threat",
        "bar": "Black magic, one wrong move and I back it.",
        "explanation": "A dark/spiritual threat."
      },
      {
        "performer": "STORM",
        "theme": "Imagery",
        "bar": "I’m killing you, digging your grave.",
        "explanation": "A death/grave image."
      },
      {
        "performer": "STORM",
        "theme": "Family",
        "bar": "Mention my kids…",
        "explanation": "A family-protection angle."
      },
      {
        "performer": "STORM",
        "theme": "Imagery",
        "bar": "Chef Ramsay your plate.",
        "explanation": "A cooking/knife reference."
      },
      {
        "performer": "STORM",
        "theme": "Imagery",
        "bar": "Now legs first must have been different, now he’s going head first in a hearse.",
        "explanation": "A hearse/death punch."
      },
      {
        "performer": "STORM",
        "theme": "Insult",
        "bar": "GRAMS, you’re shit.",
        "explanation": "Blunt but direct."
      },
      {
        "performer": "STORM",
        "theme": "Pressure",
        "bar": "You’re fucking with us, stop fucking him up.",
        "explanation": "A crew/pressure line."
      },
      {
        "performer": "STORM",
        "theme": "Hostility",
        "bar": "I’m sick of this prick.",
        "explanation": "Direct hostility."
      },
      {
        "performer": "STORM",
        "theme": "Status",
        "bar": "Not one of my women would you ever pull.",
        "explanation": "A dating/status insult."
      },
      {
        "performer": "STORM",
        "theme": "Violence",
        "bar": "I’ll poke him.",
        "explanation": "Weapon/violence line. It is battle material."
      },
      {
        "performer": "STORM",
        "theme": "Rebuttal",
        "bar": "Didn’t bring Nan to your funeral, embarrassing.",
        "explanation": "A rebuttal to GRAMS’s nan angle."
      },
      {
        "performer": "STORM",
        "theme": "Reference",
        "bar": "Take him off the map like the gov did to Madeleine.",
        "explanation": "A Madeleine McCann reference. It is dark battle material."
      },
      {
        "performer": "STORM",
        "theme": "Wordplay",
        "bar": "Bar to bar, you couldn’t find no Villa.",
        "explanation": "A bar/Villa wordplay. The transcript is rough, but it functions as a writing/status punch."
      },
      {
        "performer": "STORM",
        "theme": "Location",
        "bar": "Pull up outside to the flats.",
        "explanation": "STORM starts his third with street-location imagery."
      },
      {
        "performer": "STORM",
        "theme": "Numbers",
        "bar": "Your capped-out numbers, so you got wrapped.",
        "explanation": "A fake-numbers / wrapped-up line."
      },
      {
        "performer": "STORM",
        "theme": "Loyalty",
        "bar": "Didn’t get your boy back, so you called Dad.",
        "explanation": "A loyalty/family insult."
      },
      {
        "performer": "STORM",
        "theme": "Framing",
        "bar": "Let’s stick to the facts.",
        "explanation": "STORM tries to reframe the battle as truth-based."
      },
      {
        "performer": "STORM",
        "theme": "Violence",
        "bar": "Nothing like a movie when a face gets stabbed.",
        "explanation": "A violence/reality line. It is battle material."
      },
      {
        "performer": "STORM",
        "theme": "Wordplay",
        "bar": "Skinnyville, but I drop GRAMS like a bag.",
        "explanation": "A body/grams/bag wordplay."
      },
      {
        "performer": "STORM",
        "theme": "Relationship",
        "bar": "Like his ex, all rhymes belong to the streets.",
        "explanation": "A relationship/street punch."
      },
      {
        "performer": "STORM",
        "theme": "Imagery",
        "bar": "Take a detour to the deep core.",
        "explanation": "A burial/deep-water image."
      },
      {
        "performer": "STORM",
        "theme": "Exposure",
        "bar": "I will go live, show my Insta.",
        "explanation": "A social-media exposure angle."
      },
      {
        "performer": "STORM",
        "theme": "Challenge",
        "bar": "Swear on your life that I’ve got you.",
        "explanation": "A challenge to tell the truth."
      },
      {
        "performer": "STORM",
        "theme": "Exposure",
        "bar": "When you’re lying again like I did in DMs.",
        "explanation": "A DM/exposure line."
      },
      {
        "performer": "STORM",
        "theme": "Wordplay",
        "bar": "Checkmate, no chess.",
        "explanation": "A chess/endgame punch."
      }
    ],
    "judgementSummary": {
      "verdict": "grams",
      "summary": "Official visible result: N/A (Host told viewers to comment). Suggested archive score: GRAMS 3-0 STORM. Suggested round split: Round 1: GRAMS, Round 2: GRAMS, Round 3: GRAMS. Reason: GRAMS has the more memorable angles, better performance control and the biggest room moment. STORM fights back, but he never takes over the battle. Performance Grades - GRAMS: A-, STORM: B-. Final Note: STORM came with aggression, but GRAMS came with theatre. The funeral intro and garage-style third round make this a clear GRAMS archive win."
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
