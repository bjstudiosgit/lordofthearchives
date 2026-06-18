import sys

with open("src/data/battles.ts", "r", encoding="utf-8") as f:
    content = f.read()

target = """  {
    "id": "pg-s04-2023-09-30-ft-vs-prynlee",
    "slug": "ft-vs-prynlee",
    "mc1": "ft",
    "mc2": "prynlee",
    "winner": "ft",
    "title": "F.T vs PRYNLEE",
    "displayTitle": "F.T vs PRYNLEE",
    "date": "2023-09-30",
    "videoUrl": "https://www.youtube.com/watch?v=VjAlQ8tpHjI",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 11,
    "views": "94k",
    "customEp": "4x11",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": []
  }"""

replacement = """  {
    "id": "pg-s04-2023-09-30-ft-vs-prynlee",
    "slug": "ft-vs-prynlee",
    "mc1": "ft",
    "mc2": "prynlee",
    "title": "F.T vs PRYNLEE",
    "displayTitle": "F.T vs PRYNLEE",
    "date": "2023-09-30",
    "theme": "pengame",
    "season": 4,
    "views": "94k",
    "customEp": "4x11",
    "seasonOrder": 11,
    "stage": null,
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=VjAlQ8tpHjI",
    "winner": "ft",
    "clashSummary": "FOREVER TAPPED vs PRYNLEE DA DIVAA took place during **PenGame Season 4**, with Big Mawz hosting. The host introduces it as one person making their debut and one person making their return. FOREVER TAPPED is also teased for previously running away from SCAMPS, adding pressure to his return.\\n\\nFOREVER TAPPED goes first.\\n\\nFOREVER TAPPED opens with a direct and cruel first round built mostly around PRYNLEE’s body, looks and weight. He calls her fat, dirty, unattractive and compares her to an ape, gorilla and beast. He also flips the Beauty and the Beast idea and uses “stroke of luck” material after the host jokes about her presence. The round is harsh, but it is focused and consistent. TAPPED sets the tone early by making the whole clash a body-image attack.\\n\\nPRYNLEE answers with energy but less structure. She attacks TAPPED’s mother, belly, age, pride, homelessness, badness and lack of progress despite years in the scene. She also says TAPPED is not that guy and looks like a stealer before weight loss. The round has personality and a few decent rebuttal-style hits, but it is shorter and less polished than TAPPED’s opener.\\n\\nFOREVER TAPPED’s second round is his clearest round. He continues the body-image angle but sharpens it with more punchlines: Precious, exercise, lesser fries, Zumba, Pumba, diabetes, chicken and chips, Walkers, breath and pregnancy jokes. It is repetitive in theme, but more battle-ready than his first. He sounds more composed and gets through the round with a clear structure.\\n\\nPRYNLEE’s second is her best round. She brings more direct attack and uses a prop-style moment with underwear/panties, flipping F.T. into a gendered insult and telling him to collect his panties. She also attacks his career, height, status, lips and lack of talent, while saying PenGame called her because there is a shortage of talent. It is her strongest performance moment, but it still does not fully match TAPPED’s cleaner construction.\\n\\nFOREVER TAPPED’s third is the most developed writing in the battle. He moves from basic fat jokes into a more personal angle around mental health, emotional eating, abandonment, father issues and food imagery. He links daddy issues, mixtape jokes, takeout, stakeout, buffet, sauce stains, plates, microwave and cooking imagery. The round is brutal and uncomfortable, but it is also the most complete round of the clash.\\n\\nPRYNLEE’s third has energy but falls apart structurally. She starts with Jordan, frozen ones, Plankton, dancing, Aquafina and Spanish material, but it becomes harder to follow and less targeted. The host asks what she said in Spanish and she explains that she called herself a princess. It has performance personality, but not enough clean battle material to swing the result.\\n\\nThere is no official decision. The host tells viewers to get in the comments and say who won.\\n\\nBased on the battle, FOREVER TAPPED wins by Archive Judgement.",
    "performanceAnalysis": [
      {
        "performer": "FOREVER TAPPED",
        "overview": "FOREVER TAPPED wins because he has the clearer structure, more complete rounds and better punchline density. The content is repetitive and often crude, but as a battle performance it stays on target.\\n\\nHis first round establishes the battle’s central angle: PRYNLEE’s body and appearance. The material is harsh and one-dimensional, but it is direct and consistent. He gives the crowd a clear reason to understand his attack.\\n\\nHis second round is his cleanest. The Precious, Zumba, Pumba, diabetes, chicken and chips, Walkers and pregnancy angles are all variations on the same theme, but he delivers them with confidence. This round gives him control.\\n\\nHis third is his most developed. He moves beyond surface-level weight jokes into emotional eating, abandonment and father issues. It is uncomfortable material, but it is the most complete writing of the battle and makes the result clearer.\\n\\nTAPPED’s biggest strength is focus. His weakness is lack of variety.",
        "lyricalThemes": "Weight, body image, Beauty and the Beast, Precious, exercise, Zumba, Pumba, diabetes, chicken and chips, Walkers, pregnancy, mental health, emotional eating, abandonment, daddy issues, takeout, buffet, stakeout, microwave/cooking imagery.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round three."
          },
          {
            "title": "Strongest trait",
            "description": "Focused insult writing."
          },
          {
            "title": "Best angle",
            "description": "PRYNLEE’s body image and emotional eating."
          },
          {
            "title": "Best technical section",
            "description": "Daddy issues / takeout / stakeout / microwave run."
          },
          {
            "title": "Battle-winning factor",
            "description": "More complete rounds and cleaner attack structure."
          }
        ]
      },
      {
        "performer": "PRYNLEE",
        "overview": "PRYNLEE has energy and character, but the writing is less consistent than TAPPED’s. Her second round is her best because it has the clearest angle and a performance moment.\\n\\nHer first round attacks TAPPED’s age, belly, pride, homelessness, mother and lack of progress. She sounds confident, but the round does not build as cleanly as TAPPED’s opener.\\n\\nHer second round is stronger. The “FT” name flip and panty/prop-style moment give her something memorable. She also attacks his career being frozen, his height, his lips and his lack of status. This is the one round where she has a real case.\\n\\nHer third round loses focus. It has energy, Spanish, dancing, Plankton and Aquafina references, but the material becomes harder to follow and does not land as clean battle writing.\\n\\nPRYNLEE’s biggest strength is personality. Her weakness is structure.",
        "lyricalThemes": "Mother insults, belly/pregnancy jokes, age, homelessness, pride, lack of progress, Barbie Dreamhouse, steakhouse, shortage of talent, Frozen / Let It Go, height, lips, panty prop, Plankton, Aquafina, Spanish/princess moment.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Performance personality."
          },
          {
            "title": "Best angle",
            "description": "F.T. name flip and panty/prop moment."
          },
          {
            "title": "Best technical section",
            "description": "Frozen career / height / panty section."
          },
          {
            "title": "Battle-losing factor",
            "description": "Third round becomes too loose and unfocused."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "FOREVER TAPPED",
        "theme": "Insult",
        "bar": "You got a pack of runs. Are you cracked or dumb?",
        "explanation": "TAPPED opens aggressively, suggesting PRYNLEE is both chaotic and unintelligent."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Appearance",
        "bar": "You’re fat with no bum.",
        "explanation": "A direct body insult and the start of TAPPED’s repeated body-image angle."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Appearance",
        "bar": "Your body a horrid one.",
        "explanation": "Another appearance attack, keeping the opener blunt."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Rejection",
        "bar": "There’s no way I can dig her.",
        "explanation": "A rejection line. TAPPED says he finds PRYNLEE unattractive."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Imagery",
        "bar": "This ape, she is fake, a gorilla.",
        "explanation": "Animal comparison used as an appearance insult. It is hostile battle material."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "If anyone thinks this beast is beauty, I question a man’s vision.",
        "explanation": "A Beauty and the Beast-style flip."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "You’re here with a stroke of luck.",
        "explanation": "A stroke/luck wordplay, tied to the host’s intro."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "I don’t wanna hear anyone big you up, you’re big enough.",
        "explanation": "One of TAPPED’s better first-round weight flips. “Big you up” becomes body size."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Insult",
        "bar": "How can you come here looking so fat and dirty, a pig in mud?",
        "explanation": "A weight/hygiene insult."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Appearance",
        "bar": "You’re not thick, you’re a fatty.",
        "explanation": "TAPPED separates attractive thickness from obesity."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Appearance",
        "bar": "Belly hangover.",
        "explanation": "A body/shape punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Self-Awareness",
        "bar": "I’m known for taking the piss.",
        "explanation": "TAPPED opens round two by admitting his style is mockery."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "When Marz said large up yourself, I don’t think he meant like this.",
        "explanation": "A strong “large up” wordplay. Marz’s phrase becomes a weight joke."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Reference",
        "bar": "You think I’m gonna let Miss rain over me when she look like Precious?",
        "explanation": "A Precious reference used as a body-image attack."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Diet/Health",
        "bar": "How about exercise and doing some lesser fries?",
        "explanation": "A diet/exercise punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Imagery",
        "bar": "You’re so fat to look at you, I gotta stretch my eyes.",
        "explanation": "A visual exaggeration punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Reference",
        "bar": "How about do some Zumba?",
        "explanation": "A fitness reference."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Reference",
        "bar": "You got all this belly, no wonder this one here really look like Pumba.",
        "explanation": "A Lion King / Pumba reference."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Insult",
        "bar": "I don’t know if you’re an obese virgin or a heavy freak.",
        "explanation": "A sex/body insult."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Rejection",
        "bar": "If you offer me demon time, I’ll go and find Jesus Christ.",
        "explanation": "A sexual rejection line. TAPPED says he would choose religion over sex with PRYNLEE."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "You’ll never get a cream pie from me, but I’ll give her a pizza slice.",
        "explanation": "A crude food/sex wordplay. It is battle material."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Imagery",
        "bar": "I know there’s an earthquake any time that you step on road.",
        "explanation": "A weight/impact exaggeration."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Diet/Health",
        "bar": "You’re gonna die from diabetes, too much chicken and chips.",
        "explanation": "A food/health insult."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Diet/Health",
        "bar": "You’re not a sweet one, stop them sweeties and all them crisps.",
        "explanation": "Food/sweets/crisps angle."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Fitness",
        "bar": "So fat when you run your gums, you run out of breath.",
        "explanation": "A talking/fitness punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Mental Health",
        "bar": "No whack, I’mma trigger your mental health.",
        "explanation": "TAPPED opens the third with a darker psychological angle."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Mental Health",
        "bar": "Emotionally eating, she started at seven or twelve.",
        "explanation": "An emotional-eating/backstory insult. It is battle material."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Family",
        "bar": "Her dad abandoned her, his angel been going through hell.",
        "explanation": "A father-abandonment angle. It is battle material."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Self-Awareness",
        "bar": "I’ve been through that as well.",
        "explanation": "A self-aware moment where TAPPED briefly connects his own experience to the angle."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Imagery",
        "bar": "We should make a mixtape, ballys and tissues.",
        "explanation": "A pain/crying/trauma line."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Family",
        "bar": "I can only give you cocky, I can’t help with your daddy issues.",
        "explanation": "A crude sexual/father-issues punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Imagery",
        "bar": "Imagine walking your daughter to school and everyone stands and points.",
        "explanation": "A social-shame/family image."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Family",
        "bar": "The fattest girl in the playground, no wonder he did not stay round.",
        "explanation": "A harsh abandonment/body punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "How many times have you ate out?",
        "explanation": "A food/sex double meaning."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "You turned to a fed when the police said they were doing a stakeout.",
        "explanation": "A steak/stakeout wordplay."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Wordplay",
        "bar": "Belly, you’re the beast when you’re getting that takeout.",
        "explanation": "A Beauty and the Beast / takeout punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Food",
        "bar": "Buffet, that’s a day out.",
        "explanation": "A food/activity insult."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Food/Hygiene",
        "bar": "When you get sauce on your top, do you lick it to get that stain out?",
        "explanation": "A food/hygiene punch."
      },
      {
        "performer": "FOREVER TAPPED",
        "theme": "Closing",
        "bar": "Microwave, you really got cooked.",
        "explanation": "A cooking/battle-death closer."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Disrespect",
        "bar": "F.T., go fuck your mama.",
        "explanation": "PRYNLEE opens with a blunt mother insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Domination",
        "bar": "I’ll chew this n**** up then spit him out.",
        "explanation": "A domination/eating metaphor."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Self-Awareness",
        "bar": "I’ve got no manners.",
        "explanation": "A self-branding line: she is coming disrespectful."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Reference",
        "bar": "Karate Kid, Jackie Chan.",
        "explanation": "A martial-arts/fighting reference."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Critique",
        "bar": "You ain’t about that life.",
        "explanation": "A credibility attack."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Rebuttal",
        "bar": "F.T., why is your belly still here?",
        "explanation": "A rebuttal body joke aimed back at TAPPED."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "You’ve been preggers for three whole years.",
        "explanation": "A pregnancy/weight insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "You ain’t banging no mash, just yamming on bangers and mash.",
        "explanation": "A gun/mash and food/bangers-and-mash wordplay."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Age/Status",
        "bar": "F.T., you’re like 35. Where’s your pride?",
        "explanation": "An age/progress insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Career",
        "bar": "Been doing this shit for years and you ain’t got life.",
        "explanation": "A career-progress attack."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "You look like a stealer before the weight loss.",
        "explanation": "A celebrity/body comparison."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Violence",
        "bar": "My brothers put holes in heads like Donald’s.",
        "explanation": "A violence/reference line. It is battle material."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "You ain’t got no heart, so I’ll pierce and play through it like my name is Cupid.",
        "explanation": "A Cupid/heart punch."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Disrespect",
        "bar": "You’re a bitch, go play with your Barbie Dreamhouse.",
        "explanation": "A femininity/toy insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "If you want beef, let me take you to the steakhouse.",
        "explanation": "A beef/steakhouse wordplay."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Confidence",
        "bar": "This is PRYNLEE’s playground.",
        "explanation": "A confidence/stage-control line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "I’ll have you doing hammies like Greyhound.",
        "explanation": "A running/hamstring/Greyhound punch."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Status",
        "bar": "How you got me here beefing a bitch? I said that I wanted a challenge.",
        "explanation": "PRYNLEE frames TAPPED as below her level."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Critique",
        "bar": "Good thing that PenGame called me, I see that there is a shortage of talent.",
        "explanation": "A platform/roster insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Reference",
        "bar": "Your career is frozen. Let it go.",
        "explanation": "A Frozen / Let It Go reference."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Career/Appearance",
        "bar": "Your career and height is really the same, none of them ever gonna grow.",
        "explanation": "A height/career-progress punch."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Critique",
        "bar": "You talk about putting a man in a split, but you won’t go blow for blow.",
        "explanation": "A fight/credibility line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "Your lips are black, look like a disabled crow.",
        "explanation": "An appearance insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Disrespect",
        "bar": "F.T. stands for female tranny.",
        "explanation": "A transphobic name flip. It is hostile battle material."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Prop",
        "bar": "Come and collect your panty.",
        "explanation": "A prop-style/panty insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Prop",
        "bar": "Why did you get the wrong size?",
        "explanation": "A size/underwear prop joke."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "You know you’re extra, extra, extra large.",
        "explanation": "A size insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Wordplay",
        "bar": "Stomped him out then put him on a shoe — I guess that’s the Jordan one.",
        "explanation": "A Jordan sneaker/stomping punch."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Disrespect",
        "bar": "I don’t fuck with this n****.",
        "explanation": "A direct hostility line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Appearance",
        "bar": "You’re the size of Plankton.",
        "explanation": "A SpongeBob / Plankton height insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Masculinity",
        "bar": "You ain’t got no dick.",
        "explanation": "A masculinity insult."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Confidence",
        "bar": "PRYNLEE DA DIVAA, pussy wet like Aquafina.",
        "explanation": "A name-branding/sexual line."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Performance",
        "bar": "I speak Spanish.",
        "explanation": "A performance moment where PRYNLEE switches language and explains it to the host."
      },
      {
        "performer": "PRYNLEE",
        "theme": "Status",
        "bar": "I’m a princess.",
        "explanation": "Her Spanish section resolves into self-branding: PRYNLEE as princess/diva."
      }
    ],
    "judgementSummary": {
      "verdict": "ft",
      "summary": "Official visible result: N/A (Host told viewers to comment). Suggested archive score: FOREVER TAPPED 3-0 PRYNLEE DA DIVAA. Suggested round split: Round 1: FOREVER TAPPED, Round 2: FOREVER TAPPED / close, Round 3: FOREVER TAPPED. Reason: PRYNLEE’s second round is competitive and has the bigger prop-style moment, but TAPPED is clearer and more consistent across all three. His third round makes the result decisive. Performance Grades - FOREVER TAPPED: B, PRYNLEE DA DIVAA: C+. Final Note: This battle is mostly shock humour and body-image disrespect. TAPPED wins on structure and completion, while PRYNLEE brings personality but not enough clean writing to take rounds."
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
