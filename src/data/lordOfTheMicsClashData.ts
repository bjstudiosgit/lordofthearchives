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
  }
};
