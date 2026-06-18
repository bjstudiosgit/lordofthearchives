const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'battles.ts');
let fileContent = fs.readFileSync(filePath, 'utf8');

const oldStr = `  {
    "id": "pg-s04-2024-07-14-a-petrelli-vs-smil3z",
    "slug": "a-petrelli-vs-smil3z",
    "mc1": "a-petrelli",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "A PETRELLI vs SMIL3Z",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 9,
    "views": "76k",
    "date": "2023-09-16",
    "videoUrl": "https://www.youtube.com/watch?v=BPdBaYkeZh0",
    "customEp": "4x09",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": []
  },`;

const newStr = `  {
    "id": "pg-s04-2024-07-14-a-petrelli-vs-smil3z",
    "slug": "a-petrelli-vs-smil3z",
    "mc1": "a-petrelli",
    "mc2": "smil3z",
    "title": "A PETRELLI vs SMIL3Z",
    "date": "2023-09-16",
    "theme": "pengame",
    "season": 4,
    "views": "76k",
    "customEp": "4x09",
    "seasonOrder": 9,
    "stage": null,
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=BPdBaYkeZh0",
    "winner": "smil3z",
    "clashSummary": "A. PETRELLI vs SMIL3Z took place during **PenGame Season 4**, with Big Mawz hosting. The event is sponsored by **Rude Boy**, with this battle also sponsored by **Drip Nation**. The host introduces it as a special battle because both battlers are making their PenGame debut.\\n\\nPETRELLI goes first.\\n\\nPETRELLI opens with an aggressive first round aimed at SMIL3Z’s status, family, girlfriend, time served, bars and credibility. He says he can take SMIL3Z out of people’s lives, claims his girl is running PETRELLI’s lines, attacks his spelling, calls him out for allegedly repping prison/time-served material, and says SMIL3Z is not a star. The round has threat and energy, but it is messy in structure and does not fully settle into a clean angle.\\n\\nSMIL3Z responds with a more controlled first. He opens by saying he will send demons to fetch PETRELLI’s soul, then attacks PETRELLI as a rookie while framing himself as the veteran. He uses one-man-army imagery, soul/death threats, alien jokes, clothing and money insults, and says PETRELLI is not really on blasting or badness. It is a stronger and more complete debut round.\\n\\nPETRELLI’s second is his best round. He attacks SMIL3Z’s background, bars, daughter, mother, threat level, drinking, family and street credibility. He uses South London place-name material including Streatham, Peckham, Welling and Palace, then moves into shotgun, Pamela Anderson / Baywatch, Paco Rabanne, Heath Ledger / Joker and chef imagery. He stumbles near the end but still delivers his most interesting material of the battle.\\n\\nSMIL3Z answers with a stronger second. He attacks PETRELLI’s appearance, family, mother, badness, forehead, rap cap, baby mum, punchlines and status. He says PETRELLI looks inbred, homeless, unfed and has a forehead visible from miles away. He also brings baby-mum violation, nettles imagery and claims he is the hardest on PenGame. The round has more complete control and stronger insult density.\\n\\nThe third round decides the battle beyond debate. PETRELLI starts his final round, but after only a few bars he drops the mic. The host stops the round and states clearly that the rule is: if you drop the mic, you are done. PETRELLI does not continue.\\n\\nSMIL3Z then delivers a full third round. He attacks PETRELLI’s mother, family, health, baby mum, forehead, ancestry, face, cancellation, style, weakness and lack of improvement. He ends by saying the PETRELLI pack has turned to “runtz,” turning PETRELLI into something smoked and finished.\\n\\nThere is no official judging section in the transcript. The host closes by saying both men represented on their debut and tells viewers to comment who they think won.\\n\\nBased on the material and PETRELLI’s third-round non-completion, SMIL3Z wins clearly by Archive Judgement.",
    "performanceAnalysis": [
      {
        "performer": "SMIL3Z",
        "overview": "SMIL3Z wins because he delivers three complete rounds and looks more prepared. His debut performance is rough in places, but he shows stronger control, more direct insult writing and better round structure than PETRELLI.\\n\\nHis first round is a good introduction. He immediately separates himself from PETRELLI by saying PETRELLI is a rookie while he is already moving like a veteran. The demon/soul material, one-man-army line and alien/homeless jokes give the round a clear battle identity.\\n\\nHis second round is his strongest. He attacks PETRELLI’s appearance, mother, forehead, family, rap cap and baby mum. It has the highest insult density of the battle and keeps moving without falling apart.\\n\\nHis third round seals the win. PETRELLI drops the mic and cannot complete his final, while SMIL3Z gives a full closer. That alone makes the battle very hard to score against SMIL3Z.\\n\\nSMIL3Z’s biggest strength is completion. He brings three full rounds and does not collapse under debut-stage pressure.",
        "lyricalThemes": "Demons, soul, one-man army, rookie/vet, alien image, homelessness, Yardman John, mother/family attacks, forehead, rap cap, baby mum, nettles, hardest on PenGame, ancestry, cancellation, weakness, PETRELLI pack/runtz.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Completion and direct insult writing."
          },
          {
            "title": "Best angle",
            "description": "PETRELLI as unprepared, rough-looking and not battle-ready."
          },
          {
            "title": "Best technical section",
            "description": "Forehead / homeless / baby-mum / nettles run."
          },
          {
            "title": "Battle-winning factor",
            "description": "Three complete rounds plus PETRELLI’s third-round non-completion."
          }
        ]
      },
      {
        "performer": "A. PETRELLI",
        "overview": "PETRELLI has flashes of personality and some good ideas, especially in round two, but he loses because his rounds are less clean and his third round ends early.\\n\\nHis first round has aggression but lacks polish. He attacks SMIL3Z’s family, girlfriend, spelling and prison/time-served image, but the round does not fully build into one dominant angle.\\n\\nHis second round is easily his best. The South London location run and shotgun/Baywatch/Paco Rabanne/Joker material gives him stronger structure. He starts to show the kind of writing that would later become more effective in future PenGame battles.\\n\\nHis third round damages his whole performance. He begins with “this shit just got real,” but then drops the mic. The host ends the round immediately under PenGame rules. In an archive judgement, that is effectively a lost round.\\n\\nPETRELLI’s biggest strength is potential. His weakness here is execution.",
        "lyricalThemes": "Girl running lines, time served, spelling, demons, violence, South London locations, Streatham, Peckham, Welling, Palace, family attacks, daughter therapy, shotgun, Baywatch, Paco Rabanne, Heath Ledger/Joker, chef imagery, mic drop/non-completion.",
        "keyTechnicalHighlights": [
          {
            "title": "Best round",
            "description": "Round two."
          },
          {
            "title": "Strongest trait",
            "description": "Flashes of creative location-based writing."
          },
          {
            "title": "Best angle",
            "description": "South London place-name scheme."
          },
          {
            "title": "Best technical section",
            "description": "Streatham / Peckham / Welling / Palace run."
          },
          {
            "title": "Battle-losing factor",
            "description": "Dropping the mic in round three."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "I took SMIL3Z right out of their life.",
        "explanation": "PETRELLI opens with a death/removal image, saying he can erase SMIL3Z from the people around him."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Disrespect",
        "bar": "I got your girl running my lines.",
        "explanation": "A girl/music/status insult. PETRELLI says SMIL3Z’s girl is more interested in his material."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Critique",
        "bar": "I heard that you’ve done some time.",
        "explanation": "A prison/time-served angle."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "SMIL3Z ain’t got more than three ounces.",
        "explanation": "A name/number flip. SMIL3Z becomes connected to “three” and weight."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "I see by the way that you’re spelling it.",
        "explanation": "A spelling/name punch."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Insult",
        "bar": "My n****, you’re tweaking.",
        "explanation": "A direct instability insult."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Imagery",
        "bar": "Spinning with demons.",
        "explanation": "A dark/violent image."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Reference",
        "bar": "Big n****s all Hulkish.",
        "explanation": "A Hulk/body/power reference."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Critique",
        "bar": "I heard your bars, G. You are not a star, G.",
        "explanation": "A direct writing and status attack."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Status",
        "bar": "Fuck proving points, fuck battle rap.",
        "explanation": "PETRELLI tries to frame the battle as more than performance."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Status",
        "bar": "I know we spoke online, but in real life…",
        "explanation": "A real-life versus online angle."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "Man’s pain like a heart attack.",
        "explanation": "A pain/heart attack punch."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Confidence",
        "bar": "It’s a wrap as soon as I get penning.",
        "explanation": "A writing confidence line. Once PETRELLI starts writing, the battle is done."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Reference",
        "bar": "Only thing that’s gonna save you is if Scamz wrote your second.",
        "explanation": "A PenGame reference. PETRELLI implies SMIL3Z would need help from SCAMZ to survive."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "You’re going down south when a shell hits a melon.",
        "explanation": "A direction/violence punch. It is battle material."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Reference",
        "bar": "Cars get sitting next to bricks like Streatham.",
        "explanation": "A South London location/reference line."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "I’m trying to put S in one like Peckham.",
        "explanation": "A place-name / letter-wordplay bar."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "I can’t hack the sixteen like Welling.",
        "explanation": "A Welling/location and sixteen-bars reference."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Disrespect",
        "bar": "I’m the type of guy to tell you about your mother.",
        "explanation": "PETRELLI signals he is willing to get disrespectful."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "One shot will make him jump up, it’s adrenaline.",
        "explanation": "A shot/adrenaline punch."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "Small knives get flickies.",
        "explanation": "A weapon line. It is battle material."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "I’ll put SMIL3Z in the back of the van, then I’ll make his Baywatch like Pamela Ann.",
        "explanation": "A Pamela Anderson / Baywatch reference."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "Spray something on the bitch like Paco Rabanne.",
        "explanation": "A fragrance/spray punch."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Wordplay",
        "bar": "Shotgun snap back like the strap on my hat.",
        "explanation": "A shotgun/snapback/strap wordplay."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Reference",
        "bar": "He is not Heath Ledger, he is not a Joker.",
        "explanation": "A Batman/Joker reference. PETRELLI says SMIL3Z is not dangerous or iconic."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Violence",
        "bar": "I got the satam, it’s a real toy.",
        "explanation": "PETRELLI begins his third with weapon imagery, but the round is cut short soon after."
      },
      {
        "performer": "A. PETRELLI",
        "theme": "Status",
        "bar": "This shit just got real, boy.",
        "explanation": "A third-round setup line that never develops because of the mic drop."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Imagery",
        "bar": "I’mma send my demons to fetch your soul.",
        "explanation": "SMIL3Z opens with supernatural/death imagery."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Threat",
        "bar": "If you want war, let’s go.",
        "explanation": "A direct challenge."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Pray to God, then let him know you gone dead up today.",
        "explanation": "A death/prayer line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Call up mumsy, tell her you won’t make it home.",
        "explanation": "A mother/death punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "I don’t steal punchlines, just direct flows.",
        "explanation": "A writing/credibility line. SMIL3Z says his material is direct and original."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "I don’t need to beat around the bush.",
        "explanation": "A directness punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "I’m a one-man army.",
        "explanation": "A self-reliance line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "I’m a vet, you’re a rookie.",
        "explanation": "A clear hierarchy angle, despite both being debuting on this platform."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Disrespect",
        "bar": "Blood, I don’t wanna hear your stuff.",
        "explanation": "A dismissal of PETRELLI’s writing."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Wordplay",
        "bar": "Sixteen bars gone straight to his gut.",
        "explanation": "A bar/violence double meaning."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Threat",
        "bar": "Welcome to my world where you’re not saving.",
        "explanation": "A no-escape line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Imagery",
        "bar": "Everything smoky, trouble inhaling.",
        "explanation": "A smoke/danger image."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Talk about gyal, but he looks like an alien.",
        "explanation": "A girl-talk/appearance punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "Hell of a rap cap, man, I can’t entertain him.",
        "explanation": "A fake-bars accusation."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "New clothes, man, I’m fresh to death. PETRELLI’s rocky, ain’t got no bread.",
        "explanation": "A fashion/money/status attack."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You’re looking homeless and you need to be fed.",
        "explanation": "A harsh appearance/poverty insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Should I pick man up and just throw man?",
        "explanation": "A physical dominance line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Reference",
        "bar": "I was talking to Yardman John.",
        "explanation": "A Yardman-style setup."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "You ain’t on blasting.",
        "explanation": "A fake-gun/fake-badness attack."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You don’t even know where you start.",
        "explanation": "An identity/confusion insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "No more dancing on TikTok for them.",
        "explanation": "A social-media/performance attack."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Look at this fucking inbred.",
        "explanation": "SMIL3Z opens round two with a family/appearance insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Your mum should have swallowed you.",
        "explanation": "A harsh existence insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Your face looks horrible.",
        "explanation": "A direct appearance punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "I’ll run man down like run outs.",
        "explanation": "A chase/violence line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Imagery",
        "bar": "You can get left by the canal.",
        "explanation": "A location/death image."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Reference",
        "bar": "This ain’t no Mortal Kombat, you can’t come back finishing.",
        "explanation": "A Mortal Kombat reference. PETRELLI will not get a comeback or finisher."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Disrespect",
        "bar": "Spitting in his mum’s face, it’s just disrespect that I’m giving him.",
        "explanation": "A mother/disrespect line. It is battle material."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Reference",
        "bar": "Scotch bonnet.",
        "explanation": "A pepper/heat reference."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "I can see it in his eyes, he’s not on it.",
        "explanation": "A body-language credibility attack."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "I ain’t gonna talk that father shit, cause I wouldn’t want to father you.",
        "explanation": "A fatherhood insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Disrespect",
        "bar": "Slap mumsy just for raising you.",
        "explanation": "A mother/raising insult. It is battle material."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Your son’s a prick and he’s moving loose.",
        "explanation": "A direct character attack."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Confidence",
        "bar": "My pen come different.",
        "explanation": "A writing confidence line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "You’re fucking with the wrong n****, a strong hitter.",
        "explanation": "A self-positioning line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You’re out here looking like nobody’s child.",
        "explanation": "A lost/neglected appearance insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You can see his forehead from miles.",
        "explanation": "A forehead/appearance punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "All of that cap in your rap is atrocious.",
        "explanation": "A fake-bars critique."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "You can have a ball like me, just own it.",
        "explanation": "A confidence/status line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Your face already written off.",
        "explanation": "A damaged-face/car write-off style insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "I’ll leave your forehead open, leaking swollen.",
        "explanation": "A forehead/violence punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Imagery",
        "bar": "My lyrics, them send my shot.",
        "explanation": "A pen-as-weapon line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Disrespect",
        "bar": "I’ll get my friends to run train on your baby mum.",
        "explanation": "A crude baby-mum/sexual insult. It is battle material."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Wordplay",
        "bar": "I bet that stung like nettles.",
        "explanation": "A nettle/sting punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Confidence",
        "bar": "I’m the hardest on PenGame.",
        "explanation": "A major status claim."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Self-Awareness",
        "bar": "Third round for fuck’s sake.",
        "explanation": "SMIL3Z starts his final round by recognising the pressure and importance of closing."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Threat",
        "bar": "One way or another, you gonna suffer.",
        "explanation": "A threat line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Mums ain’t gonna find you in the gutter.",
        "explanation": "A death/body-location line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Confidence",
        "bar": "Violations come quick, rapid.",
        "explanation": "A battle-style statement."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "You should’ve stayed up in your yard.",
        "explanation": "A warning that PETRELLI should not have taken the battle."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Imagery",
        "bar": "These events are tragic.",
        "explanation": "A battle-event tragedy line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "On the PenGame ting, I’m the bandit.",
        "explanation": "A self-branding line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Disintegrate your skin like acid.",
        "explanation": "A violent acid image. It is battle material."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Looks like you’re getting braids done too tight, now your forehead’s looking like a flat TV with no channels.",
        "explanation": "One of SMIL3Z’s strongest appearance jokes."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You’re a product of ancestry.",
        "explanation": "A family/genetics insult."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "Your face looks mangled.",
        "explanation": "A direct appearance punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Status",
        "bar": "Today’s the day PETRELLI’s gonna get cancelled.",
        "explanation": "A cancellation/status line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Confidence",
        "bar": "Whether it’s rap or drill, I’m a handful.",
        "explanation": "A versatility claim."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Confidence",
        "bar": "I’m versatile with it.",
        "explanation": "SMIL3Z states his adaptability."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Head to car, family barn, brains leaking.",
        "explanation": "A violent image. It is battle material."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "Ambulance was too late when they seen him.",
        "explanation": "A death/emergency line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Violence",
        "bar": "He was born with smoke in his chest from me.",
        "explanation": "A smoke/damage line."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Wordplay",
        "bar": "He couldn’t handle the smoke that he was receiving.",
        "explanation": "A battle/smoke punch."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Critique",
        "bar": "Your style’s dead, improvements is a must.",
        "explanation": "A direct critique of PETRELLI’s style."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Insult",
        "bar": "You’ll always be weak and frail and rough.",
        "explanation": "A final status dismissal."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Wordplay",
        "bar": "All of a sudden, this PETRELLI pack has turned to runtz.",
        "explanation": "A strong closer. PETRELLI becomes a weed pack that SMIL3Z has smoked down."
      }
    ],
    "judgementSummary": {
      "verdict": "smil3z",
      "summary": "Official visible result: N/A (Host told viewers to comment). Suggested archive score: SMIL3Z 3-0 A. PETRELLI. Suggested round split: Round 1: SMIL3Z, Round 2: SMIL3Z, Round 3: SMIL3Z. Reason: SMIL3Z had the stronger complete performance, better second-round pressure, and a full third round. PETRELLI’s third-round mic drop/non-completion makes the final round decisive. Performance Grades - SMIL3Z: B+, A. PETRELLI: C+. Final Note: PETRELLI showed flashes, especially in round two, but the debut pressure caught him in the third. SMIL3Z stayed composed and took the battle clearly."
    }
  },`;

const osAgnosticOldStrCRLF = oldStr.split('\\n').join('\\r\\n');
const osAgnosticOldStrLF = oldStr;

if (fileContent.includes(osAgnosticOldStrCRLF)) {
    fileContent = fileContent.replace(osAgnosticOldStrCRLF, newStr.split('\\n').join('\\r\\n'));
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log('Replaced successfully (CRLF)');
} else if (fileContent.includes(osAgnosticOldStrLF)) {
    fileContent = fileContent.replace(osAgnosticOldStrLF, newStr);
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log('Replaced successfully (LF)');
} else {
    console.log('Could not find oldStr!');
}
