import type { Battle } from "./battleTypes";

type LordOfTheMicsClashRecord = Partial<Pick<
  Battle,
  | "winner"
  | "resultSource"
  | "battlePageEnabled"
  | "views"
  | "host"
  | "clashSummary"
  | "performanceAnalysis"
  | "notableBars"
  | "coolMoments"
  | "oddMoments"
  | "postBattleContext"
  | "judgementSummary"
>>;

export const lordOfTheMicsClashData: Record<string, LordOfTheMicsClashRecord> = {
  "kano-vs-wiley": {
    winner: "draw",
    resultSource: "lota",
    battlePageEnabled: true,
    views: "2.1M",
    host: "Jammer (Lord of the Mics)",
    clashSummary: "KANO and WILEY faced off in the legendary main event of Lord of the Mics 1 (2004), hosted in Jammer's basement in Leytonstone, East London. Representing the pinnacle of early Grime culture, the clash pitted the genre's founding father and Roll Deep leader Wiley against Nasty Crew's 19-year-old rising prodigy Kano. Spanning five blistering rounds over iconic 140 BPM instrumentals with Jammer steering the camera and hyping the dungeon, the battle became the cultural blueprint for UK grime clashing. Rather than a standard tournament knockout, the encounter functioned as an exhibition of elite lyrical stamina, rapid-fire flows, and historic signature anthems that launched both MCs into national prominence. Without a formal judging panel at the time of release, Lord of the Archives records the clash as an iconic, defining draw.\n\nRound one served as a brief opening salvo, with Wiley stepping up alone to set the futuristic, quantum-leaping standard with his E3 Bow pedigree and 'bunny boy' cadence. Round two saw the clash ignite in earnest: Kano stepped up first over a dark, skippy 8-bar rhythm, unleashing his 'levels' schemes, mocking Escobar, and debuting the immortal call-and-response routine that flipped the entire room: 'Who's bringin' it? Not Kano! Who's runnin' it? Not Kano!' Wiley fired right back with his signature 'Beats without bass' anthem, threatening opponents with four-by-fours, referencing 50 Cent in the club with Hennessy, and running off his spelling of 'K-A-N ain't ready for the flows!'\n\nRound three elevated the technical complexity. Kano asserted his hunger by declaring that while Wiley had been in the game longer, he couldn't hold the mic longer, dropping the timeless food metaphor: 'If the streets eating, grab me a fork!' Wiley answered by directly addressing 'Kane', spinning an aggressive 20-riddim shotgun barrage and claiming ownership of the country's flows. After a rare brief fumble on the cadence, Wiley restarted with pinpoint precision. Kano countered in the second half of the round with his celebrated culinary wordplay: 'We make that beef without a doner in it... when the weapon's in your face, you're on some omelette shit!'\n\nRound four was an endurance test of breath control and momentum. Wiley opened with his Roll Deep anthem, leaning into his veteran work ethic ('It took me years, bud, and I'm still learning') and warning rivals from 'lamppost to lamppost.' Kano countered with supreme swagger, mocking rivals for making weak rhythms and declaring that no lump sum could stop his rise, flexing his rapid commercial ascent line for line. Wiley hit back with an atmospheric road sermon on running the streets from lamppost to lamppost with Tec-9s and Mac-10s, which Kano matched bar-for-bar by dubbing himself the 'B-King' taking the underground overground.\n\nThe final round reached fever pitch as both MCs emptied their lyrical arsenals. Kano unleashed his rapid-fire 'Paper, pussy, brother you heard right' routine, running through LL Cool J, Calpol, and 'What you doing?' crew interrogations, before finishing with his unforgettable 'K.A. slash Kano, where the flow again?' sprint. Wiley closed the historic session with the ultimate Eskimo masterclass: spelling out 'E to the S-K-I-M-O', tracing his roots from Sega Master System to Glocks and tinted glasses, and dropping the 'Big Mac for beef without lettuce and cheese' haymaker, declaring himself the Eskimo boy living in the Streets of Rage.\n\nLOTA scores the clash a historic DRAW. Kano proved he was already an all-time great at 19 years old, matching the pioneer with flawless breath control, unforgettable anthems, and sharp culinary wordplay. Wiley stood his ground with unmatched original flows, peerless cadence invention, and foundational Eskibeat authority. It remains the definitive clash in Grime history.",
    performanceAnalysis: [
      {
        performer: "Kano",
        overview: "Kano delivers a star-making masterclass that cemented him as the premier lyricist of Grime's golden era. At just 19 years old, he matched the genre's creator with astonishing breath control, flawless diction at 140 BPM, and timeless writing. His 'Not Kano!' routine, 'beef without a doner in it / omelette shit' wordplay, and 'What you doing?' flow interrogations remain among the most influential sequences in UK urban music.",
        lyricalThemes: "Levels of MCing; Nasty Crew dominance; 'Not Kano!' call-and-response; plaques and golden paper; Werther's Original; street forks and hunger; beef without doner and omelette weapons; Boxsters and Hummers; William Wallace; taking over the overground; LL Cool J and Calpol; top boys in crews; 'What you doing?' interrogations; 'Where the flow again?' speed sprints.",
        keyTechnicalHighlights: [
          {
            title: "'Not Kano!' Reverse Psychology Anthem",
            description: "Kano flips the venue into shouting his own name by asking who is running and bringing it, creating the most famous crowd chant in LOTM history."
          },
          {
            title: "Omelette & Doner Wordplay",
            description: "He constructs an iconic culinary sequence, contrasting street beef with doner meat before warning that pressure makes rivals crack like eggs under a weapon."
          },
          {
            title: "'What You Doing?' Crew Interrogation",
            description: "A relentless structural barrage challenging anyone claiming to be a top boy in their crew, demanding accountability at rapid cadence."
          }
        ]
      },
      {
        performer: "Wiley",
        overview: "Wiley performs with the god-level aura of Grime's chief architect. Unveiling the foundational cadences that built the genre, the Eskimo boy flowed with hypnotic ease over 8-bar switches. His ability to recover from a minor stumble in round three and instantly accelerate into blistering flows demonstrated his unrivaled freestyle pedigree, while his final Eskimo and Master System verses codified the sonic identity of Bow E3.",
        lyricalThemes: "Futuristic quantum leaping; E3 Bow pedigree; beats without bass; Bangkok to block; 50 Cent and Hennessy; K-A-N spelling dismissals; tape packs and 20 riddims; Roll Deep team; running from lamppost to lamppost; Tec-9s and Mac-10s; E to the S-K-I-M-O; Master System to Glocks; Big Mac without lettuce and cheese; ice age and Streets of Rage; snakes and backup.",
        keyTechnicalHighlights: [
          {
            title: "'Beats Without Bass' Cadence",
            description: "Wiley's foundational hook proving that his rhythmic flow carries musicality even when the low frequencies are stripped from the beat."
          },
          {
            title: "E-S-K-I-M-O Spelling & Heritage",
            description: "He stamps his trademark sonic identity across the basement, spelling out his moniker with flawless syncopation."
          },
          {
            title: "Sega Master System to Streets of Rage Scheme",
            description: "A nostalgic pop-culture timeline charting his longevity from early 90s 8-bit gaming through real-life inner-city survival."
          }
        ]
      }
    ],
    notableBars: [
      {
        performer: "Kano",
        theme: "Round 2 — Not Kano Chant",
        bar: "Who's bringin' it, bringin' it? Not Kano! Who's doin' it, doin' it? Not Kano! Who's runnin' it, runnin' it? Not Kano!",
        explanation: "The legendary reverse-psychology chant that defined early Grime, forcing the listener to acknowledge Kano's dominance through repeated ironic denial."
      },
      {
        performer: "Kano",
        theme: "Round 3 — Fork in the Street",
        bar: "The streets talking, let the streets talk! If the streets eating, grab me a fork!",
        explanation: "Kano translates street reputation into hunger and nourishment, using a sharp kitchen utensil metaphor to demand his share of success."
      },
      {
        performer: "Kano",
        theme: "Round 3 — Beef & Omelette",
        bar: "We make that beef without a doner in it! Under pressure, you're cracked like eggs: so when the weapon's in your face, you're on some omelette shit!",
        explanation: "One of the most celebrated punchlines in UK hip-hop and grime history, linking takeaway fast food, fragile eggs, and firearm confrontations."
      },
      {
        performer: "Kano",
        theme: "Round 5 — What You Doing",
        bar: "Where's the best MCs in your crew? I'm looking for the best MCs in your crew! If you're not the best MC, blud, what you doing?",
        explanation: "Kano's classic interrogation flow setting the standard for crew hierarchy, challenging any rapper who is not the frontline general."
      },
      {
        performer: "Kano",
        theme: "Round 5 — Where the Flow Again",
        bar: "K.A. slash Kano, where the flow again? You can't catch Kano, there I go again! Gash, Kano's got a bash of them!",
        explanation: "Kano's lightning-fast speed sprint, showcasing the dazzling syncopation that set Nasty Crew apart from their peers."
      },
      {
        performer: "Wiley",
        theme: "Round 2 — Beats Without Bass",
        bar: "Yo, I'll be the boy who keeps the beats bangin'! And if it's beats without bass, it's still bangin'! And flows and rhymes are at a high level: sorry, but I can't see you on my level!",
        explanation: "Wiley's immortal signature bar, asserting that his lyrical rhythm is so powerful it generates its own percussion regardless of production."
      },
      {
        performer: "Wiley",
        theme: "Round 2 — K.A.N. Spelling",
        bar: "K.A.N. ain't shutting no O's! K.A.N. can't grow with the pros! K.A.N. ain't ready for the flows!",
        explanation: "Wiley breaks down Kano's name letter-by-letter to deny him entry into the upper echelon of seasoned professional MCs."
      },
      {
        performer: "Wiley",
        theme: "Round 3 — 20 Riddim in a Shotgun",
        bar: "Listen up, Kane! Wiley's coming up, Kane! Who makes the gunshots clap, Kane? I've got 20 riddim in a shotgun: who's a hot shot, Kane!",
        explanation: "Wiley directly addresses his younger rival by his real name, likening his vast catalog of instrumentals to heavy ammunition."
      },
      {
        performer: "Wiley",
        theme: "Round 4 — Lamppost to Lamppost",
        bar: "From city to city, from town to town, from lamppost to lamppost, we run the roads!",
        explanation: "Wiley's street anthem detailing the nationwide spread of Grime music from local East London street corners to every city across the UK."
      },
      {
        performer: "Wiley",
        theme: "Round 5 — Master System to Streets of Rage",
        bar: "Listen, I've been around since Master System! I'm the Eskimo boy, living in the ice age! I'm a street wear, living in the streets of rage!",
        explanation: "Wiley references Sega's 1980s console and classic beat-'em-up Streets of Rage to highlight his pioneer status and inner-city resilience."
      },
      {
        performer: "Wiley",
        theme: "Round 5 — Big Mac Beef",
        bar: "To get a Big Mac for beef without lettuce and cheese! We're not letting them breathe, they get wetted with ease!",
        explanation: "Wiley plays on McDonald's signature burger to describe pure, unadulterated conflict without filler or negotiation."
      }
    ],
    oddMoments: [
      "Wiley experienced a rare flow fumble in round three while spitting his rapid 'Listen up, Kane' verse, quickly stopping himself to admit 'I did fumble' before running it back with flawless execution.",
      "Jammer stepped in front of the camera between rounds two and three to threaten bootleggers: 'This is Escobar dance! If I ever see any pretty bootlegging this shit... I'll murk you!'",
      "Round one consisted solely of a 20-second opening statement from Wiley with no verse from Kano before Jammer immediately called 'Round two, fight!'"
    ],
    coolMoments: [
      "Kano debuting the immortal 'Who's running it? Not Kano!' chant in Jammer's crowded basement, with the entire room chanting along in unison.",
      "Wiley and Kano engaging in an 8-bar trading sequence in round four, matching each other's rapid tempo without dropping a single syllable.",
      "Wiley's legendary 'E to the S-K-I-M-O' and 'Streets of Rage' closing routine, providing the definitive sonic stamp of the Eskibeat genre."
    ],
    postBattleContext: "Recorded in 2004 in Jammer's Leytonstone basement for the inaugural Lord of the Mics DVD, Kano vs Wiley became the seminal cultural milestone that propelled Grime into mainstream consciousness. The clash helped launch Kano's groundbreaking debut album 'Home Sweet Home' (2005) and cemented Wiley's status as the Godfather of Grime. Decades later, it remains universally acknowledged as the greatest and most influential battle in UK grime history.",
    judgementSummary: {
      "verdict": "DRAW (LOTA Result)",
      "summary": "Kano vs Wiley is scored as a historic, immortal draw. In the foundational clash of Grime culture, 19-year-old Kano proved he was ready for the throne by matching the genre's creator with breathtaking speed, technical precision, and timeless anthems like 'Not Kano!' and the 'omelette' punchline. Wiley proved his untouchable status as Grime's chief architect, flowing with effortless swagger across 'Beats without bass', 'Lamppost to lamppost', and his 'E-S-K-I-M-O' finale. Neither titan yielded an inch, leaving both cemented as legends of UK music."
    }
  },
  "footsie-vs-scratchy": {
    winner: "draw",
    resultSource: "lota",
    battlePageEnabled: true,
    views: "850k",
    host: "Jammer (Lord of the Mics)",
    clashSummary: "FOOTSIE and SCRATCHY squared off in one of the rawest, most personal, and culturally foundational clashes of Lord of the Mics 1 (2004). Set inside Jammer's infamous basement dungeon in Leytonstone, East London, the battle represented a heavyweight cross-borough clash of elite early Grime crews: Footsie representing the gritty, bass-heavy East London swagger of N.A.S.T.Y. Crew (and future Newham Generals alongside D Double E), against Scratchy Demus representing the frantic, lightning-fast cadences of Bow's Roll Deep Crew. Clashing on the cramped wooden staircase of Jammer's basement with the camera pushed inches from their faces, the two MCs delivered a relentless exhibition of underground warfare, trading iconic refrains and biting personal disses that became instant folklore.\n\nRound one exploded immediately with Scratchy unleashing what would become one of the most legendary battle hooks in UK urban music history: 'What's all this? I'm hearing all lies about me / Another body in a body bag you'll be / Killer man with my bare hands, you'll see / You can't fuck with Scratchy!' His hyperactive, high-pitched delivery caught the dungeon off guard, filling the room with manic urgency. Footsie stood his ground at the foot of the stairs, unfazed by the storm, and countered with crushing bass authority. Anchoring his feet and projecting his booming low-end voice, Footsie mocked Scratchy's untamed afro and eccentric energy, dropping his immortal spelling punchline: 'It's not D-A-T / I'll bang you in the head with the B-A-T!' that shook the room.\n\nRound two escalated into a hilariously cut-throat personal standoff. Perched up on the steps, Scratchy leaned into Footsie's physical features, firing off scathing 'big bait nose' bars and rapid war patterns, refusing to yield an inch of territory despite Footsie's intimidating physical frame. Footsie answered with unyielding Newham grit, reminding Scratchy that high-speed gibberish wouldn't save him from real street pressure, turning Scratchy's frantic flow against him and asserting that N.A.S.T.Y. Crew ruled the airwaves.\n\nRound three descended into an all-out close-quarters war of attrition. With Jammer hyping the boiling basement, Footsie pressed up onto the stairs, closing the physical distance until the two MCs were virtually nose-to-nose. Scratchy fired rapid-fire Roll Deep flows at point-blank range, relying on blistering stamina and sheer speed, while Footsie answered with thunderous, rhythmic blunt-force blows, using his signature cadence to command the room's energy.\n\nLord of the Archives scores the clash a historic DRAW. Scratchy provided the battle's most iconic hook with his immortal body-bag anthem and showcased sharper round-to-round consistency, while Footsie brought unmatched vocal presence, physical gravity, and devastating punchlines ('B-A-T'). Over two decades later, Footsie vs Scratchy remains the epitome of early Grime's raw, unfiltered, basement energy.",
    performanceAnalysis: [
      {
        performer: "Footsie",
        overview: "Footsie delivered a masterclass in vocal gravity, bass-heavy projection, and raw physical presence. Standing at the foot of the stairs, the future Newham General absorbed Scratchy's hyperactive barrage without flinching, using his deep, resonant tone to overpower his opponent's speed. His legendary 'B-A-T' spelling punchline and biting disses aimed at Scratchy's hair established the foundational template for Newham's menacing sound.",
        lyricalThemes: "Physical intimidation; 'B-A-T' baseball bat threats; D-A-T rhyming structures; mocking Scratchy's messy hair and erratic demeanor; N.A.S.T.Y. Crew / Newham street dominance; low-frequency vocal power; close-quarters basement confrontation.",
        keyTechnicalHighlights: [
          {
            title: "'B-A-T' Spelling Punchline",
            description: "Footsie delivers the clash's most memorable punchline, contrasting 'D-A-T' with spelling out 'B-A-T' to deliver a blunt-force threat that resonated through the dungeon."
          },
          {
            title: "Basement Staircase Intimidation",
            description: "Using his imposing frame and deep vocal register, Footsie pressed into Scratchy's space on the stairs, proving that physical conviction can blunt rapid-fire technical speed."
          },
          {
            title: "Bass-Heavy Low-End Cadence",
            description: "Rather than attempting to match Scratchy's 140 BPM hyper-speed, Footsie slowed his pocket down to deliver rhythmic, heavy blows that cut cleanly over the instrumental."
          }
        ]
      },
      {
        performer: "Scratchy",
        overview: "Scratchy produced one of the most explosive, hyper-kinetic performances in early Grime history. Spitting from the wooden stairs with nervous, electric energy, he launched the battle with an immortal hook that echoed across UK playgrounds for a generation. His relentless tempo, sharp Roll Deep syncopation, and sharp-tongued personal jabs about Footsie's facial features kept the pressure at maximum intensity.",
        lyricalThemes: "Immortal 'body in a body bag' hook; bare-hand combat; Roll Deep crew superiority; 'big bait nose' personal attacks; frantic high-cadence war dubs; refusing to back down from physical threats on the stairs.",
        keyTechnicalHighlights: [
          {
            title: "Immortal 'Body Bag' Hook",
            description: "Scratchy opens round one with his signature war refrain ('Another body in a body bag you'll be / Killer man with my bare hands, you'll see'), cementing one of the most famous hooks in Grime history."
          },
          {
            title: "Personal Nose Jab Counter-Offense",
            description: "After Footsie mocked his hair, Scratchy immediately pivoted in round two to mock Footsie's 'big bait nose', demonstrating quick-witted clash instinct under pressure."
          },
          {
            title: "Relentless High-Cadence Delivery",
            description: "Scratchy maintained an extraordinary words-per-minute rate throughout all three rounds, showcasing the rapid, skippy Bow E3 flow that defined Roll Deep's golden era."
          }
        ]
      }
    ],
    notableBars: [
      {
        performer: "Scratchy",
        theme: "Round 1 — Body Bag Anthem",
        bar: "What's all this? I'm hearing all lies about me! Another body in a body bag you'll be! Killer man with my bare hands, you'll see! You can't fuck with Scratchy!",
        explanation: "Scratchy's legendary opening salvo that instantly codified early Grime clashing, combining paranoia, lethal threats, and an infectious rhythmic bounce."
      },
      {
        performer: "Footsie",
        theme: "Round 1 — B-A-T Punchline",
        bar: "It's not D-A-T! I'll bang you in the head with the B-A-T!",
        explanation: "Footsie's iconic spelling rhyme, turning a simple acronym into a blunt physical weapon delivered with crushing East London vocal force."
      },
      {
        performer: "Footsie",
        theme: "Round 1 — Hair Diss",
        bar: "Look at your hair, blud! You look like you just rolled out of bed trying to clash! Fix up your hair before you step to me!",
        explanation: "Footsie immediately disarms Scratchy's aggressive pacing by roasting his wild, unkempt afro on camera."
      },
      {
        performer: "Scratchy",
        theme: "Round 2 — Big Bait Nose",
        bar: "Talking about my hair? Look at your big bait nose! You're standing there breathing all the air out the basement with that big bait nose!",
        explanation: "Scratchy fires back in round two with a hilarious personal attack on Footsie's facial appearance, igniting laughter and shock in the room."
      },
      {
        performer: "Footsie",
        theme: "Round 2 — Newham Pressure",
        bar: "You're talking fast but you ain't saying nothing! We run East London, Newham Generals on the block, don't get flattened in this dungeon!",
        explanation: "Footsie dismisses Scratchy's high-speed barrage as empty noise, asserting his borough authority and physical dominance."
      },
      {
        performer: "Scratchy",
        theme: "Round 3 — Roll Deep Warfare",
        bar: "Step to the Scratchy get big air! Roll Deep in the building, we don't care! Bare hands or weapons, you won't survive round here!",
        explanation: "Scratchy closes the clash by repping Roll Deep's undisputed dominance over the early 2000s pirate radio landscape."
      }
    ],
    oddMoments: [
      "The entire clash was staged awkwardly on Jammer's narrow basement staircase, with Scratchy clinging to the banister on the higher steps while Footsie towered up from the lower landing.",
      "The battle devolved into an absurdly personal aesthetic roast in round two, as Footsie relentlessly mocked Scratchy's hair while Scratchy fired back with 'big bait nose' jabs.",
      "Jammer had his handheld camcorder pressed within inches of both MCs' foreheads, capturing sweat dripping in the unventilated Leytonstone cellar."
    ],
    coolMoments: [
      "Scratchy unleashing the immortal 'What's all this? I'm hearing all lies about me / Another body in a body bag you'll be' opening hook, which became one of Grime's most recited battle bars.",
      "Footsie's thunderous delivery of 'It's not D-A-T / I'll bang you in the head with the B-A-T!', matching Scratchy's speed with raw physical intimidation.",
      "The fierce, nose-to-nose 8-bar trading on the staircase in round three, encapsulating the purest essence of Lord of the Mics 1."
    ],
    postBattleContext: "Recorded in 2004 for the inaugural Lord of the Mics DVD, Footsie vs Scratchy became one of the most culturally revered clashes in UK Grime history. Footsie went on to form the iconic Newham Generals with D Double E, becoming one of Grime's premier producers and most respected MCs. Scratchy solidified his place as a core pillar of Roll Deep, continuing to release music and tour internationally. The clash is celebrated as a quintessential showcase of early Grime's raw energy, personal humour, and dungeon authenticity.",
    judgementSummary: {
      "verdict": "DRAW (LOTA Result)",
      "summary": "Footsie vs Scratchy is ruled a historic draw. Scratchy delivered one of the most iconic hooks in Grime history with his immortal 'body bag' opening and maintained a relentless, rapid-fire cadence throughout the battle. Footsie countered with undeniable physical presence, booming bass-heavy projection, and lethal punchlines including his famous 'B-A-T' sequence. With both MCs showcasing opposing but equally potent styles of early Grime warfare, LOTA scores this classic dungeon clash as an enduring dead heat."
    }
  }
};
