export const lastUpdated = "June 2026";

export interface Battle {
  id: string;
  slug: string;
  mc1: string;
  mc2: string;
  mc3?: string;
  mc4?: string;
  title: string;
  displayTitle?: string;
  date?: string;
  videoUrl?: string;
  views?: string | number | null;
  winner?: string;
  winner2?: string;
  isUnreleased?: boolean;
  theme: string;
  season: number | string;
  competition?: string;
  subGroup?: string;
  stage?: string;
  group?: string;
  tag?: string;
  customEp?: string;
  seasonOrder?: number;
  statusNote?: string;
  host?: string;
  judges?: string[];
  clashSummary?: string;
  performanceAnalysis?: {
    performer: string;
    overview: string;
    lyricalThemes: string;
    keyTechnicalHighlights: {
      title: string;
      description: string;
    }[];
  }[];
  notableBars?: {
    performer?: string;
    theme?: string;
    bar: string;
    explanation?: string;
  }[];
  oddMoments?: string[];
  coolMoments?: string[];
  postBattleContext?: string;
}

export const battles: Battle[] = [
  {
    "id": "pg-s01-2020-07-26-f-don-vs-aymuni",
    "slug": "f-don-vs-aymuni",
    "mc1": "f-don",
    "mc2": "aymuni",
    "winner": "aymuni",
    "title": "F-DON vs AYMUNI",
    "date": "26-07-2020",
    "videoUrl": "https://www.youtube.com/watch?v=EjyBfOa-xRY",
    "theme": "pengame",
    "season": 1,
    "views": "46k",
    "customEp": "1x01",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "The battle concluded with Aymuni being declared the winner. While F-Don was noted for having a superior \"drill sound\" and strong crowd engagement, the judges ultimately favored Aymuni due to his superior technical preparation, lyrical density, and \"pen game.\" The event highlights a stylistic tension between pure musical flow and the structured wordplay required for competitive battle rapping.",
    "performanceAnalysis": [
      {
        "performer": "Aymuni",
        "overview": "Aymuni's performance was characterized by high technical proficiency and a focus on multifaceted wordplay. His approach was described by judges as \"prepared\" and \"confident.\"",
        "lyricalThemes": "Aymuni utilized metaphors involving literature, anatomy, and wordplay on common objects.",
        "keyTechnicalHighlights": [
          {
            "title": "Literary Metaphors",
            "description": "He dismissed his opponent's depth by stating, \"You ain't got bars so what's the point of a verse... I can see you're dead in the blurb.\""
          },
          {
            "title": "Phonetic Wordplay",
            "description": "He employed puns such as \"loading my pen and they felt tips\" and \"show my shellfish\" (selfish)."
          },
          {
            "title": "Physicality and Threat",
            "description": "His lyrics often combined street imagery with wordplay, such as \"three sticks in the whip but we never pulled up in a merc\" and references to the \"X-men\" (crossing people out)."
          }
        ]
      },
      {
        "performer": "F-Don",
        "overview": "F-Don focused on \"vibe,\" flow, and street credibility. His performance was noted for its musicality and its resonance with the live audience.",
        "lyricalThemes": "F-Don's content centered on personal growth, \"road\" life, and financial success.",
        "keyTechnicalHighlights": [
          {
            "title": "The \"Running Man\" Motif",
            "description": "He referenced \"trapping doing 10 toes that's a running man\" and made a \"pagan... do the running man\" like Forrest Gump."
          },
          {
            "title": "Personal Narrative",
            "description": "He highlighted his transition from receiving \"lunch money\" to \"putting money in [his] mother's hands.\""
          },
          {
            "title": "Flow and Sound",
            "description": "F-Don described his style as \"wavy like the ocean,\" focusing on the \"drill sound\" rather than dense battle-specific bars."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Literature Metaphors",
        "bar": "already read that you ain't got bar so what's the point of a verse what's the point of reading through chapters i can see you're dead in the blurb",
        "explanation": "This bar cleverly uses the structure of a book (verse, chapters, blurb) to say the opponent is defeated before their story even really begins."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Literature Metaphors",
        "bar": "so many man got written off i could probably fill up a hundred journals",
        "explanation": "\"Written off\" works two ways here: dismissing opponents as finished, and literally writing so much material that it could fill journals. It keeps the book/literature scheme running while showing Aymuni's pen as something with a long record of damage."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Literature Metaphors",
        "bar": "that went over your head like a helmet i'm loading my pen and they felt tips",
        "explanation": "This plays on the double meaning of \"felt tips\" (the markers used for writing) and the physical feeling of an attack."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Pop Culture",
        "bar": "no way can a man cross me out x-men i'll put man in the church",
        "explanation": "The X-Men reference turns \"cross me out\" into a comic-book punchline about removing an opponent."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Automotive Wordplay",
        "bar": "a money like whips that means putting my hands on things that's spinning putting my hand on sticks watch me put it in gear and shift you won't hear engine noise or skids but you will feel exhausted when i rip it",
        "explanation": "This sequence skillfully strings together car references (\"whips,\" \"gear,\" \"shift,\" \"engine noise,\" \"skids\") and culminates in a punchline playing on the dual meaning of a car's \"exhaust\" and feeling physically \"exhausted\" from an attack."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Elements & Dominance",
        "bar": "if you're flames and i must be a furnace blood i'm on a whole nother level if you're harder than i must be a diamond",
        "explanation": "This elemental comparison is used to prove that no matter how intense the opponent is, the rapper is always the more extreme version."
      },
      {
        "performer": "Aymuni (A-Money)",
        "theme": "Lyrical Deconstruction",
        "bar": "one bar two bar three by four how many bars did you bring to the war five by six bar seven bar eight don't miss the drop niggas don't be late your bar's nine from ten and one less",
        "explanation": "Aymuni uses a counting scheme to actively mock his opponent's lack of \"bars\" during the battle."
      },
      {
        "performer": "F-Don",
        "theme": "Chess & Dominance",
        "bar": "hustling like a chess game what's the queen's heads on the plate that's a checkmate why cause i'm coming for the crown now king of the ring rap niggas better bow down",
        "explanation": "F-Don builds a dominance scheme around chess, royalty, and battle status."
      },
      {
        "performer": "F-Don",
        "theme": "Real-Life Struggles",
        "bar": "mother used to give me lunch money now i'm putting money in my mother's hands couple things you wouldn't understand because you never started from the underground",
        "explanation": "This grounds the battle in personal history, growth, and financial progression."
      },
      {
        "performer": "F-Don",
        "theme": "Pop Culture",
        "bar": "spot a pagan from a mile off made that pussy do the running man forrest gump",
        "explanation": "F-Don uses \"pagan\" for an enemy and flips \"running man\" into both a dance reference and an image of someone being forced to run. The Forrest Gump mention sharpens the punchline because the character is famously known for running."
      },
      {
        "performer": "F-Don",
        "theme": "Pop Culture",
        "bar": "cats be chasing that white rabbit that sent alice into wonderland",
        "explanation": "This uses the classic Lewis Carroll story as a metaphor for drug use and chasing a high."
      },
      {
        "performer": "F-Don",
        "theme": "Pop Culture",
        "bar": "getting dirty classic this is rascal i get shady like marshall that's our iron man it's not marvel",
        "explanation": "This impressively weaves together references to Dizzee Rascal (\"dirty classic\"), Eminem (\"shady like marshall\"), and comic books (\"iron man it's not marvel\")."
      }
    ],
    "oddMoments": [
      "A Mismatched Battle Format: An odd element of the battle as a whole is that the two competitors weren't entirely playing the same game. F-Don essentially brought standard rap/drill verses to a clash, whereas Aymuni brought tailored, battle-specific punchlines.",
      "The \"Shampoo\" Threat: While trying to sound intimidating, F-Don delivers a rather confusing threat about his crew arriving: 'yeah i'm a tall black nigga with some tattoos but i'll get my niggas up in here like some shampoo'."
    ]
  },
  {
    "id": "pg-s01-2020-07-30-ashley-tragic-vs-ft",
    "slug": "ashley-tragic-vs-ft",
    "mc1": "ashley-tragic",
    "mc2": "ft",
    "winner": "ft",
    "title": "ASHLEY TRAGIC vs Forever Tapped",
    "date": "30-07-2020",
    "videoUrl": "https://www.youtube.com/watch?v=5wrkWj3Ka3U",
    "theme": "pengame",
    "season": 1,
    "views": "12k",
    "customEp": "1x02",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "The battle began under unexpected circumstances: Forever Tapped's original opponent, Edward, pulled out, prompting Ashley Tragic to step in at the last minute to support the event. As a result, Ashley Tragic entered with no tailored preparation and relied purely on his raw rapping ability. Forever Tapped came in focused on the win, bringing aggressive \"mom bars\" and direct disrespect, though he suffered a memory lapse and had to transition into freestyling.",
    "performanceAnalysis": [
      {
        "performer": "Ashley Tragic",
        "overview": "Ashley Tragic approached the battle like a traditional UK rap artist, leaning on musicality, natural delivery, and general artistry rather than opponent-specific battle material.",
        "lyricalThemes": "His themes stayed broad because he stepped in at the last minute without time to write tailored material for Forever Tapped.",
        "keyTechnicalHighlights": [
          {
            "title": "Musicality and Cadence",
            "description": "Ashley was praised for his smooth, natural flow. Lippy noted that if the contest was about who was the better overall artist, Ashley would be the clear pick."
          },
          {
            "title": "Freestyle Adaptability",
            "description": "He earned respect for stepping up to save the battle, using rebuttals and quick freestyle schemes to answer Forever Tapped's aggression."
          },
          {
            "title": "Pop Culture Freestyle Schemes",
            "description": "Ashley used references like Spiderman, Street Fighter, Tekken, and Tokyo Drift to create direct, easy-to-follow punches under pressure."
          },
          {
            "title": "Battle-Specific Weakness",
            "description": "Because he had no tailored preparation, his rounds lacked the direct, personalized punchlines expected in a competitive battle."
          }
        ]
      },
      {
        "performer": "Forever Tapped",
        "overview": "Forever Tapped came with a gritty, combative style influenced by old-school UK rap and bashment, using aggression, disrespect, and direct attacks to control the battle.",
        "lyricalThemes": "His material leaned into street violence, maternal disrespect, video games, and pop-culture references.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Disrespect",
            "description": "He used aggressive threats and \"mom bars\" to create shock value while keeping the energy competitive rather than genuinely hostile."
          },
          {
            "title": "Nameflips and Direct Attacks",
            "description": "Forever Tapped personalized the battle through Ashley Tragic nameflips, including the \"she met the tragedy\" line."
          },
          {
            "title": "Violent Wordplay",
            "description": "Lines like \"take off top\" linked car imagery with drill language, turning a sunroof reference into a threat while keeping the disrespect motif running."
          },
          {
            "title": "Memorization Weakness",
            "description": "He admitted to blanking during the performance and having to rely on freestyling to keep the round moving."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Forever Tapped",
        "theme": "Nameflip",
        "bar": "nah nah nah actually tragic yeah",
        "explanation": "Forever Tapped flips Ashley Tragic's stage name into \"actually tragic,\" making the attack feel written directly for the opponent in front of him."
      },
      {
        "performer": "Forever Tapped",
        "theme": "Nameflip",
        "bar": "she met the tragedy she likes that melanin",
        "explanation": "This continues the Ashley Tragic nameflip by folding \"tragedy\" into a punchline, giving Forever Tapped's verse a more personalized battle-rap edge."
      },
      {
        "performer": "Forever Tapped",
        "theme": "Disrespect",
        "bar": "i was gonna f** my mom but broski looks like a virgin... suck your mom suck your land to suck your mom again",
        "explanation": "Forever Tapped uses extreme taboo disrespect to shock the room and rattle Ashley. The post-battle context makes clear the insults were part of the sport rather than real bad energy."
      },
      {
        "performer": "Forever Tapped",
        "theme": "Violent Wordplay",
        "bar": "look clash take off top sunroofs... get your mom involved as a threesome",
        "explanation": "\"Take off top\" works as a double meaning: opening a car sunroof, and drill/rap language for shooting someone in the head. He then ties the threat back into the recurring mom-bar motif."
      },
      {
        "performer": "Ashley Tragic",
        "theme": "Rebuttal",
        "bar": "try to talk about my mom and sex i told you come outside you didn't because you weren't that bad",
        "explanation": "Ashley responds directly to Forever Tapped's mom insults by calling his bluff, arguing that the aggressive talk does not match real-life action."
      },
      {
        "performer": "Ashley Tragic",
        "theme": "Double Entendre",
        "bar": "Spiderman he's only bad on the webs",
        "explanation": "On the surface, this references Spiderman and his webs. The hidden meaning flips \"webs\" into the internet, calling the opponent a keyboard warrior who only acts tough online."
      },
      {
        "performer": "Ashley Tragic",
        "theme": "Video Game Scheme",
        "bar": "up down left square xx rack hit him with a combo like street fighter hitting with a combo just like tekken",
        "explanation": "Ashley builds a freestyle scheme around PlayStation-style inputs and fighting games, comparing his rapid attacks to combo sequences in Street Fighter and Tekken."
      },
      {
        "performer": "Ashley Tragic",
        "theme": "Film Reference",
        "bar": "spin a man there like tokyo drift in my section i'm overly swift",
        "explanation": "The Tokyo Drift reference connects Ashley's smooth, fast movement through the round with precision driving, suggesting he can maneuver around the opponent with ease."
      }
    ],
    "oddMoments": [
      "The Original Opponent Backed Out: The battle was not originally supposed to feature Ashley Tragic. Forever Tapped was scheduled to battle an opponent named Edward, but Edward pulled out because he was \"moving shaky,\" forcing Ashley Tragic to step in as a last-minute \"wild card\" replacement.",
      "Both Competitors Ended Up Freestyling: It was widely acknowledged by the judges that Ashley Tragic was freestyling because he stepped in on such short notice. Surprisingly, Forever Tapped admitted in his post-battle interview that despite having prepared material, he \"kind of blanked out\" and also had to resort to freestyling during the clash.",
      "Confusion Over League Rules: After Forever Tapped delivered several aggressive insults directed at Ashley's mother, Ashley Tragic stated that he \"didn't know there was allowed to be mom bars\" in the competition. He quickly brushed it off, clarifying that it was all laughs and there was \"no bad energy\" between the two men.",
      "PlayStation Button Scheme: In the middle of a verse, Ashley Tragic unexpectedly rapped a sequence of PlayStation controller inputs (\"up down left square xx\") to set up a punchline comparing his lyrical strikes to combination attacks in the video games Street Fighter and Tekken."
    ]
  },
  {
    "id": "pg-s01-2020-08-06-shorty-woa-vs-saidu",
    "slug": "shorty-woa-vs-saidu",
    "mc1": "shorty-woa",
    "mc2": "saidu",
    "winner": "saidu",
    "title": "SHORTY WOA vs SAIDU",
    "date": "06-08-2020",
    "videoUrl": "https://www.youtube.com/watch?v=Ip9k3pT_lhY",
    "theme": "pengame",
    "season": 1,
    "views": "8k",
    "customEp": "1x03",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "This matchup features Saidu, an 18-year-old from South London who favours grime, R&B, and hip-hop, going against Shorty Woa, a 22-year-old from London whose influences include hip-hop, R&B, drill, and UK artist Ghetts. The clash consists of three intense rounds that result in a tight split decision from the judges. Ultimately, the battle ends in a 2-1 decision after a strong back-and-forth performance from both competitors.",
    "performanceAnalysis": [
      {
        "performer": "Saidu",
        "overview": "Saidu brings a raw, aggressive energy to the cypher. Judge Joe Black noted that his unconventional style took time to settle, with the first round requiring him to brush up on \"bars and lyrics.\"",
        "lyricalThemes": "Saidu's performance leaned on aggression, pressure, and tightening his material as the battle progressed.",
        "keyTechnicalHighlights": [
          {
            "title": "Momentum Building",
            "description": "After a slower first round, Saidu found his footing and grew stronger as the clash went on."
          },
          {
            "title": "Tightening the Rounds",
            "description": "Judge Joe Black had Saidu taking the second and third rounds by keeping his verses tighter and capitalising on Shorty Woa's slip-ups."
          },
          {
            "title": "Threatening Wordplay",
            "description": "Saidu used aggressive punchlines and repetition to assert dominance, including the \"bars are houses\" line and blackout-style cadences."
          }
        ]
      },
      {
        "performer": "Shorty Woa",
        "overview": "Shorty Woa prides himself on versatility and the ability to \"paint pictures with his words,\" echoing the influence of Ghetts in his approach.",
        "lyricalThemes": "Shorty Woa focused on vivid delivery, room control, and broad musical versatility across grime, R&B, drill, and hip-hop influence.",
        "keyTechnicalHighlights": [
          {
            "title": "Strong Opening Round",
            "description": "Shorty Woa came out with a commanding presence and was judged to have taken the first round."
          },
          {
            "title": "Delivery and Crowd Reaction",
            "description": "Judge Joe Black favoured Shorty Woa for his delivery and the reaction he was generating in the room."
          },
          {
            "title": "Humpty Dumpty Scheme",
            "description": "Shorty Woa showed his technical pen with a multi-layered nursery-rhyme flip built around Humpty Dumpty and the king's men."
          },
          {
            "title": "Dismissive Closer",
            "description": "His closing material attacked fake flexers and road credibility, ending with a calm but pointed \"tell them relax\" sentiment."
          },
          {
            "title": "Late-Round Cracks",
            "description": "Judge Joe Black noted that little breaks and cracks started to show in Shorty Woa's second round, which opened the door for Saidu."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Saidu",
        "theme": "Threatening Wordplay",
        "bar": "If bars are houses that kick down those not knocking thing, you'll forget a ding dong",
        "explanation": "Saidu uses a house-and-doorbell double entendre. By linking \"knocking\" and \"ding dong,\" he moves between the literal image of a doorbell and the aggressive idea of someone getting physically hit or \"rung\" like a bell. It turns a simple image into a threatening punchline."
      },
      {
        "performer": "Saidu",
        "theme": "Cadence",
        "bar": "Man with a black pant and a black pen chat shit make come on black out",
        "explanation": "This line stands out for repetition and alliteration. By stacking the word \"black,\" Saidu creates a sharp, percussive rhythm that points to both physical presence and lyrical ability through the \"black pen,\" before building to the threat of making the opponent \"black out.\""
      },
      {
        "performer": "Shorty Woa",
        "theme": "Humpty Dumpty Scheme",
        "bar": "Sunday froze like Pompeii, a tight grip makes me comfy. I never fuck with a nigger on the fence, no get licked down like Humpty. Filling up with a hardcore man, but the horse's men couldn't fuck me",
        "explanation": "Shorty Woa starts with historical disaster imagery through Pompeii, then slides into a dark street flip of the Humpty Dumpty nursery rhyme. The fence/wall image sets up the fall, while the \"horse's men\" reference reworks the king's horses and king's men into a boast that even a whole army could not take him down."
      },
      {
        "performer": "Shorty Woa",
        "theme": "R&B Pop-Culture Pun",
        "bar": "Came to get mine on a destiny thing, put the bee on them unless that thing",
        "explanation": "This is a pop-culture double entendre built from \"destiny\" into Destiny's Child, then into \"bee\" as a nod toward Beyoncé. It shows Shorty Woa's versatility by folding R&B influence into the battle while still keeping the line competitive."
      },
      {
        "performer": "Shorty Woa",
        "theme": "Closer",
        "bar": "Last week it was ballers, never trying to claim shot callers, man I knew to the road like Taurus, tell them relax",
        "explanation": "Shorty Woa uses automotive wordplay to mock inexperience. \"New to the road like Taurus\" points toward the Ford Taurus while dismissing the opponent as someone pretending to be a veteran shot caller. The relaxed close makes the insult feel controlled rather than frantic."
      }
    ],
    "oddMoments": [
      "Unconventional Style Adjustment: Judge Joe Black noted that Saidu's highly unconventional style took a while to settle, requiring him to focus on adjusting his flow and lyrics after a shaky first round.",
      "Humpty Dumpty & Nursery Rhyme Street Flips: Shorty Woa weaves a dark street-centric version of the classic Humpty Dumpty nursery rhyme into his battle scheme, flipping 'the king's horses and men' into a boast about his own invincibility."
    ]
  },
  {
    "id": "pg-s01-2020-08-23-bigga-vs-dan-dannah",
    "slug": "bigga-vs-dan-dannah",
    "mc1": "bigga",
    "mc2": "dan-dannah",
    "winner": "bigga",
    "title": "BIGGA vs DAN DANNAH",
    "date": "23-08-2020",
    "videoUrl": "https://www.youtube.com/watch?v=hCyj9Nfr9V0",
    "theme": "pengame",
    "season": 1,
    "views": "11k",
    "customEp": "1x04",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "This battle features Bigga (a 30-year-old from Enfield, North London) taking on Dan Dannah (a 28-year-old representing West and East London) in the first season of Pengame Rap Battles. The clash showcases a contrast in styles: Bigga brings a dominant, aggressive presence with direct disrespect, while Dan Dannah brings a faster, Grime-influenced flow that blends battle rap aggression with moments of real-life introspection.",
    "performanceAnalysis": [
      {
        "performer": "Bigga",
        "overview": "Bigga correctly identifies his own biggest strengths before the battle: his physical presence and his voice. He uses an aggressive, imposing style, framing himself as a \"grown man\" who views his opponent as beneath him.",
        "lyricalThemes": "Conversational disrespect, direct street threats, and asserting dominance over a younger opponent.",
        "keyTechnicalHighlights": [
          {
            "title": "Style & Strategy",
            "description": "He uses an aggressive, imposing style, framing himself as a \"grown man\" who views his opponent as beneath him (\"little Niggas Ain't Even on a task list\")."
          },
          {
            "title": "Delivery",
            "description": "He uses conversational disrespect and direct street threats, attempting to make Dan look like a lesser opponent who isn't ready for a real war."
          }
        ]
      },
      {
        "performer": "Dan Dannah",
        "overview": "Dan is heavily influenced by the Grime genre, specifically citing artists like Ghetts and Joel Black. He has a faster, more rhythmic flow compared to Bigga, balancing battle rap aggression with moments of real-life introspection.",
        "lyricalThemes": "Grime-influenced flows, battle rap bravado, real-life responsibilities, and conscious lyricism.",
        "keyTechnicalHighlights": [
          {
            "title": "Style & Strategy",
            "description": "Dan has a faster, more rhythmic flow compared to Bigga, drawing heavy influence from Grime artists like Ghetts."
          },
          {
            "title": "Delivery",
            "description": "He balances traditional battle rap bravado with conscious lyricism. While threatening to \"ignite the flame,\" he also pivots to talking about real-life responsibilities, making his rounds feel more narrative-driven."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Bigga",
        "theme": "The Fraud Boy Line",
        "bar": "I'm gonna treat you like fraud boys do and put you in a basket / only thing I can help with your rap career is Clos in a car skit",
        "explanation": "This bar uses wordplay around fraud and internet culture. \"Put you in a basket\" plays on both 'basket' as in adding items to a shopping cart during fraud, and physically disposing of someone. The \"car skit\" reference mocks the opponent's rap career as only being fit for a short social media comedy sketch rather than serious music."
      },
      {
        "performer": "Bigga",
        "theme": "The Obituary Line",
        "bar": "Me and your Auntie's already sorting out obituaries in the back with a preet",
        "explanation": "This establishes Bigga's dark, hyper-realistic persona. By invoking the opponent's aunt and casually discussing funeral arrangements (\"obituaries\"), Bigga creates an intensely personal and believable threat that transcends standard battle rap braggadocio."
      },
      {
        "performer": "Bigga",
        "theme": "Football Metaphor",
        "bar": "I look at you I don't see options, always been in the Prem we ain't League hopping",
        "explanation": "This grounds the battle in status and hierarchy. Using the English football league system, Bigga equates himself to the \"Prem\" (Premier League - the highest tier) and dismisses his opponent as a lower-tier player trying to jump leagues, asserting that they are simply not in the same class."
      },
      {
        "performer": "Bigga",
        "theme": "Gossip Blog Name-Drop",
        "bar": "that might pop on UK gossip or that other one man the shade B [The Shade Borough]",
        "explanation": "Bigga modernizes the traditional threat of exposing an opponent's secrets by specifically name-dropping popular UK Instagram gossip blogs (UK Gossip, The Shade Borough). This makes the threat feel highly contemporary and grounded in modern social media culture."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Nautical Wordplay",
        "bar": "Tell a man I'm captain if your first mate",
        "explanation": "This relies on clever double-meanings. \"First mate\" refers both to a subordinate sailor on a ship and literally the opponent's \"first mate\" (friend). The punchline flips the dynamic, establishing Dan Dannah as the \"captain\" commanding respect over the opponent and their crew."
      },
      {
        "performer": "Dan Dannah",
        "theme": "The Sniper/Striker Simile",
        "bar": "I'm taking control as I aim for the goal like a striker or more like a sniper",
        "explanation": "This sequence links sports imagery with combat imagery. Dan bridges the concept of \"aiming for the goal\" as a football \"striker\" to the lethal precision of a \"sniper,\" showcasing his ability to switch between competitive and aggressive themes seamlessly."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Multi-Syllable Scheme",
        "bar": "Wrap around your head like turban / s off a dead MC with a sermon / ...I exterminate man like vermin / man tried to draw me out like CS now with the doctor's the surgery",
        "explanation": "This impressively strings together a heavy multi-syllabic rhyme scheme (\"turban\", \"sermon\", \"vermin\"). It then pivots into a clever wordplay on \"draw me out\" connecting \"CS\" (gas or computer science/Counter-Strike) to ending up in the \"surgery,\" highlighting Dan's highly technical flow."
      }
    ],
    "oddMoments": [
      "The Bizarre Maternal Insult: In the middle of his second round, Bigga throws out an incredibly specific and unconventional insult regarding Dan Dannah's mother, stating, \"your M [mom's] feet probably look like yours\". This stands out as a notably strange angle for a battle rap, which typically relies on more traditional disrespect.",
      "Mid-Round Slang Consultation: During his third and final round, Bigga breaks his aggressive persona to literally ask for vocabulary lessons. He pauses his performance to ask, \"teach me your slang,\" specifically wanting to know if \"do a dash\" means someone is a prank, and if getting beaten up after a dance means \"we crash\".",
      "Pandemic-Era Context: A miscellaneous detail that sets the scene for the clash is the timing of the event. Before the battle, Dan Dannah mentions that his pre-battle nerves are partly because \"it's been so long\" in quarantine and he is simply \"itching to get out\". This detail places the battle firmly in the context of the COVID-19 pandemic lockdowns.",
      "Candid Pre-Battle Confessions: Both MCs are surprisingly honest and self-deprecating in their pre-battle interviews, rather than strictly projecting confidence. Bigga bluntly admits he has \"never done this before\" and predicts the battle will either \"go completely wrong\" or he will \"absolutely annihilate someone\". Meanwhile, Dan Dannah admits he didn't have a grand master plan for entering the league; he says, \"I see the pen game up there I just applied I got through\".",
      "Abrupt Jail Threat Ending: Bigga ends his portion of the battle on a highly aggressive and strangely specific note, shifting away from standard rap braggadocio to directly tell Dan Dannah, \"if we was in jail man you'll be fucked when i s up\".",
      "Random UK Gossip Blog Shoutouts: While trying to tell Dan Dannah not to reveal his secrets, Bigga unexpectedly references specific UK Instagram pop-culture pages, noting that his secrets might end up on \"UK gossip or that other one man the shade B [The Shade Borough]\"."
    ]
  },
  {
    "id": "pg-s01-2020-09-06-aymuni-vs-saidu",
    "slug": "saidu-vs-aymuni",
    "mc1": "saidu",
    "mc2": "aymuni",
    "winner": "aymuni",
    "title": "SAIDU vs AYMUNI (Semi)",
    "date": "06-09-2020",
    "videoUrl": "https://www.youtube.com/watch?v=KXE4ZHwveZI",
    "theme": "pengame",
    "season": 1,
    "views": "12k",
    "customEp": "1x06",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "The matchup between Saidu and Aymuni was a highly competitive semi-final battle. Ultimately, the commentators gave the edge to Aymuni, viewing him as the superior traditional battle rapper due to his heavy punchlines, while Saidu was highly praised for his musicality and potential as a recording artist.",
    "performanceAnalysis": [
      {
        "performer": "Saidu",
        "overview": "The commentators were highly impressed with Saidu's distinct vocal tone and flow pattern, noting that he gives off heavy 'Ice Kid vibes'. They praised his sound as feeling 'nostalgic without being played out,' and highlighted that his flow is 'very techy'.",
        "lyricalThemes": "Nostalgic grime flows, technical cadences, and music-focused lyricism.",
        "keyTechnicalHighlights": [
          {
            "title": "Vocal Tone and Cadence",
            "description": "Saidu's distinct vocal tone and flow pattern gives off heavy 'Ice Kid vibes', resulting in a sound that is nostalgic without being played out."
          },
          {
            "title": "The 'Old School' Critique",
            "description": "Despite his strong delivery and high confidence, the panel felt Saidu's material lacked direct aggression and felt more like 'old school' rapping rather than aiming bars directly at his opponent."
          },
          {
            "title": "Pacing and Filler",
            "description": "Saidu had more filler in his rounds. While he might have won if judged purely on paper, his punchlines lacked the impact needed in a live battle setting."
          },
          {
            "title": "Ultimate Verdict",
            "description": "The judges agreed Saidu has massive star power, concluding he has a heavily 'weighted box as a music artist' and incredible potential for a recording career."
          }
        ]
      },
      {
        "performer": "Aymuni",
        "overview": "Aymuni took an effortless approach, starting slow and building up momentum. The panel highlighted his heavy, impactful punchlines and praised him for having 'no wasted words'. During the clash, he appeared intense, 'angry,' and 'scary'. His main critiques were that his rounds were slightly shorter and that his energy noticeably died down toward the middle and end of his performance.",
        "lyricalThemes": "Effortless pacing, raw punchline execution, high-intensity aggression, and efficient writing.",
        "keyTechnicalHighlights": [
          {
            "title": "The 'Effortless' Build-Up",
            "description": "Aymuni starting his rounds slow and deliberately building up momentum, pacing himself like a lion playing with its prey."
          },
          {
            "title": "Punches in Bunches",
            "description": "With no wasted words and heavy haymaker punchlines thrown in bunches, Aymuni landed several key three-pointers that outnumbered Saidu's punches."
          },
          {
            "title": "Intimidating Presence",
            "description": "Aymuni was visibly intense, angry, and scary, proving he came into the room to truly battle rather than just rap."
          },
          {
            "title": "The 'Energy Drain' Flaw",
            "description": "Aymuni's rounds were slightly shorter and his energy visibly died down towards the middle and end, which the panel warned is a flaw since a battler should never let the crowd see them physically drain."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Aymuni",
        "theme": "The Calculator Bar",
        "bar": "a mouse on his calculator",
        "explanation": "This bar relies on tech/office wordplay. Using \"mouse\" and \"calculator\", Aymuni creates a punchline around navigating or calculating his opponent's moves. The delivery was particularly notable because Aymuni looked incredibly angry and menacing, adding a layer of physical intimidation to a deeply technical bar."
      },
      {
        "performer": "Saidu",
        "theme": "The Bic Pen Bar",
        "bar": "i hope that this fighting pen is fancy see your thing is probably a bic that's where your balls are coming out scratchy",
        "explanation": "Saidu creatively deconstructs the concept of a rapper's \"pen game.\" By comparing his opponent's writing to a cheap \"Bic\" pen, he sets up a double-entendre around a \"scratchy ball\" (the ballpoint of a cheap pen versus physical balls), simultaneously attacking his opponent's lyrical quality and masculinity."
      },
      {
        "performer": "Saidu",
        "theme": "The Puppet Bar",
        "bar": "...like a bucket and then man put hands on you and opening up a pocket... i'm gonna open you up put my hand down... and then hold it like a puppet",
        "explanation": "This bar attempts to invoke a violent image of hollowing someone out and controlling them like a puppet. However, the phrasing breaks down into awkward, overly intimate imagery (\"put my hand down... hold it\"), demonstrating how complex violent metaphors can sometimes misfire and create unintentional comedy in a battle setting."
      }
    ],
    "oddMoments": [
      "Questionable Imagery: The aforementioned \"puppet\" bar caused the hosts to pause the video because they found the concept awkwardly intimate and slightly reaching (\"where are you putting yourself where's the hand\").",
      "Half-Hearted Disrespect: There was a moment involving flicking a hat off a head. The commentators used this to point out that physical disrespect in a battle cannot be \"half-hearted\"—if an MC commits to an action like that, they need to follow it up aggressively and leave no room for the opponent to recover.",
      "Visibly Draining: Aymuni's energy physically drained as his rounds went on, which the commentators warned is a major oddity/mistake in a clash; you should never let the crowd see that you are just trying to get through your material.",
      "Pre-Battle Drinks: Aymuni was casually drinking Wray & Nephew (transcribed as \"rare nephew\") right before delivering an incredibly intimidating, laser-focused performance.",
      "Survival Instinct: The panel loved the palpable tension in the room. They noted you could see the exact moment the MCs realized they were in a real fight, leading to a raw desperation that forced them to pull new tactics out of the bag and create great battle \"moments\".",
      "Saidu's Star Power: Despite losing the battle in the eyes of the panel, Saidu's tone and energy left the hosts completely convinced that his future career in music is incredibly bright."
    ]
  },
  {
    "id": "pg-s01-2020-09-20-bigga-vs-ft",
    "slug": "bigga-vs-ft",
    "mc1": "bigga",
    "mc2": "ft",
    "winner": "bigga",
    "title": "BIGGA vs Forever Tapped (Semi)",
    "date": "20-09-2020",
    "videoUrl": "https://www.youtube.com/watch?v=RIeHpKnKsVo",
    "theme": "pengame",
    "season": 1,
    "views": "15k",
    "customEp": "1x05",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "The battle between Bigga and Dan was a heavily one-sided affair, ultimately described by the reviewers as a clear win and a \"body\" for Bigga. Bigga completely overpowered Dan through sheer presence, aggression, and a highly believable persona. While Dan showcased some good flow, his performance was ultimately derailed by a lack of vocal projection, poor beat selection, and audio issues, making him seem outmatched against Bigga's commanding delivery.",
    "performanceAnalysis": [
      {
        "performer": "Bigga",
        "overview": "Bigga's performance was defined by his strong cadence, intense aggression, and unmatched believability. The reviewers noted that he used his physical size and presence to his advantage, projecting his voice loudly and effectively, drawing comparisons to artists like Big Zu. He controlled the room and maintained a high level of confidence throughout.",
        "lyricalThemes": "Vocal projection, room dominance, direct belittlement, and jail talk.",
        "keyTechnicalHighlights": [
          {
            "title": "Simplicity and Belittlement",
            "description": "Rather than relying on hyper-complex lyricism, Bigga utilized simple, direct bars that effectively belittled Dan. His technique framed Dan as a mere obstacle rather than a threat, which amplified his authoritative presence."
          }
        ]
      },
      {
        "performer": "Dan",
        "overview": "Dan was praised for having a good \"techie\" flow, but his performance suffered drastically due to a lack of vocal projection. His voice was often muffled and too low, causing his lyrics to get lost. Reviewers observed that he appeared to rush his rounds, struggled to stay on beat, and at times looked as though he wanted to give up and just get through his verse.",
        "lyricalThemes": "Techie flow, general punchlines, and generic battle bars.",
        "keyTechnicalHighlights": [
          {
            "title": "General Punches vs. Tailored Attacks",
            "description": "Dan relied heavily on his flow, but his bars were criticized for being generic \"general shots\". Reviewers noted that his punches were not specifically tailored to Bigga, making them less impactful in a direct clash."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Dan",
        "theme": "Flow and Internal Rhyming",
        "bar": "I'm taking control as I aim for the goal like a striker or more like a sniper",
        "explanation": "Dan utilizes a sharp sports and military comparison. Linking the precision of \"aiming for the goal\" as a football striker with the lethal accuracy of a sniper, this bar highlights his structured flow and multi-syllabic rhyming capability."
      },
      {
        "performer": "Dan",
        "theme": "Wordplay",
        "bar": "I don't do no more I'm not active, I still want to heat I'm not plastic",
        "explanation": "This relies on layered street slang. Being \"not active\" typically means stepping away from street life, but he counters that by wanting \"heat\" (firearms or friction). The punchline \"I'm not plastic\" plays on how plastic melts under heat, asserting that he can withstand the pressure of a real clash."
      },
      {
        "performer": "Dan",
        "theme": "Aggression",
        "bar": "I'm fire like this... doesn't mean I won't use my sword, you battle and lose the war",
        "explanation": "This bar bridges lyrical fire with physical threats. By mentioning he'll \"use my sword,\" Dan suggests that even though he is highly technical (\"fire like this\"), he is still willing to bring the battle to a violent, real-world conclusion."
      },
      {
        "performer": "Dan",
        "theme": "Multi-syllabic Schemes",
        "bar": "Shut man down with a hook in a draws / Wrapped around your head like turban / Send off a dead MC with a sermon / ...I exterminate man like vermin",
        "explanation": "This impressively strings together a heavy multi-syllabic rhyme scheme (\"turban\", \"sermon\", \"vermin\"). It creates a vivid sequence mapping out the opponent's demise—from physical violence to a funeral \"sermon\" and treating them like \"vermin.\""
      },
      {
        "performer": "Dan",
        "theme": "Wordplay",
        "bar": "Man tried to draw me out like CS, now with the doctor's the surgery",
        "explanation": "A clever punchline connecting \"CS\" (which can refer to CS gas used by police to \"draw out\" suspects, or computer science/Counter-Strike) to ending up in the \"surgery,\" showcasing Dan's ability to weave double meanings."
      },
      {
        "performer": "Bigga",
        "theme": "Belittlement",
        "bar": "I got grown man plans, little n**** ain't even on a task list / I'm going to treat you like fraud boys do and put you in a basket",
        "explanation": "This bar uses wordplay around fraud and internet culture. \"Put you in a basket\" plays on both 'basket' as in adding items to a shopping cart during fraud, and physically disposing of someone. It establishes Bigga's authoritative \"grown man\" persona over Dan."
      },
      {
        "performer": "Bigga",
        "theme": "Disrespect",
        "bar": "Me and your Auntie's already sorting out obituaries in the back...",
        "explanation": "This establishes Bigga's dark, hyper-realistic persona. By invoking the opponent's aunt and casually discussing funeral arrangements (\"obituaries\"), Bigga creates an intensely personal and believable threat that transcends standard battle rap braggadocio."
      },
      {
        "performer": "Bigga",
        "theme": "Financial Mockery",
        "bar": "All for the love of the cause, I told my n*** stay focused that's why I'm in love with this Ford / You're trying to see maximum profit and you ain't affording a Ford",
        "explanation": "Bigga mocks the opponent's financial aspirations by contrasting \"maximum profit\" with the inability to afford a basic vehicle (\"Ford\"). The repetition of \"Ford\" acts as a dismissive pun on \"afford.\""
      },
      {
        "performer": "Bigga",
        "theme": "Status",
        "bar": "I look at you I don't see options, always been in the Prem, we ain't League hopping",
        "explanation": "This grounds the battle in status and hierarchy. Using the English football league system, Bigga equates himself to the \"Prem\" (Premier League) and dismisses his opponent as a lower-tier player trying to jump leagues."
      },
      {
        "performer": "Bigga",
        "theme": "Dismissive Punchline",
        "bar": "I don't give a f** about you blood, this is a me problem",
        "explanation": "A beautifully simple but devastatingly arrogant line. Bigga strips away any importance from his opponent, framing the entire battle not as a competition between two men, but merely as a personal inconvenience for himself."
      },
      {
        "performer": "Bigga",
        "theme": "Jail Talk",
        "bar": "Teach me your slang, if I make you do a dash does that mean you're prang? ... Man, if we was in jail man you'll be f*ed",
        "explanation": "Bigga abruptly drops traditional rap structures to engage in stark, conversational intimidation. Asking for vocabulary lessons on slang (\"prang\", \"dash\") belittles Dan's street cred, leading into a highly believable and terrifying \"jail\" threat."
      }
    ],
    "oddMoments": [
      "Audio Issues and \"Sabotage\": During Dan's round, the audio mixing was noticeably poor. The beat was too busy, Dan was off-time, and his vocal levels were far too low. The audio setup seemed almost \"sabotaged,\" though it was likely just a terrible choice of beat.",
      "Blind Reactions: The hosts explicitly stated at the beginning of the video that they do not watch the battles in advance, meaning their reactions and constructive criticisms are entirely raw and off-the-cuff.",
      "Future Matchup Speculation: The reviewers spent considerable time debating a potential future matchup between Bigga and another battler named \"A Money.\" They weighed A Money's superior lyricism against Bigga's overwhelming presence and believability, noting that \"battle rap\" often favors presence over pure lyricism."
    ]
  },
  {
    "id": "pg-s01-2020-10-12-bigga-vs-aymuni",
    "slug": "bigga-vs-aymuni",
    "mc1": "bigga",
    "mc2": "aymuni",
    "winner": "bigga",
    "title": "BIGGA vs AYMUNI (FINAL)",
    "date": "12-10-2020",
    "videoUrl": "https://www.youtube.com/watch?v=OHD0XCG94L8",
    "theme": "pengame",
    "season": 1,
    "views": "103k",
    "customEp": "1x07",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [
      "Lippy Lickshot",
      "LV General",
      "Joe Black"
    ],
    "clashSummary": "The event is the Pen Game Rap Battles Season 1 Final, featuring a highly anticipated matchup between Bigga and Aymuni. The panel of hosts unanimously concluded that Bigga won the clash with a clean 3-0 victory. While Aymuni was praised for his lyricism and had strong support from commenters leading up to the final, Bigga secured the win through superior consistency, performance, and stage presence across all three rounds.",
    "performanceAnalysis": [
      {
        "performer": "Bigga",
        "overview": "Bigga dominated the battle through strong vocal projection, poise, and extreme believability. The hosts compared his commanding delivery to a \"sergeant\" and noted that he looked completely confident in what he was saying. Instead of simply reciting lyrics, Bigga slowed his pacing down to directly \"talk to a man,\" giving his rounds a conversational but highly intimidating weight.",
        "lyricalThemes": "Commanding delivery, believability, intimidation.",
        "keyTechnicalHighlights": [
          {
            "title": "Thematic Consistency",
            "description": "Bigga anchored his rounds with a consistent storyline and theme, ensuring that his technical bars made cohesive sense. His strong vocal projection even drew comparisons to the energetic deliveries of UK artists Casisdead and Big Zuu."
          }
        ]
      },
      {
        "performer": "Aymuni",
        "overview": "Aymuni's biggest downfall was his lack of conviction and projection. The hosts felt he failed to match Bigga's physical presence, noting that in a final, you have to show you aren't threatened by getting into your opponent's space. Furthermore, Aymuni rapped far too fast, choosing to rush through his material as if he were just reading it in his head rather than actually performing it for the room.",
        "lyricalThemes": "Fast pace, lack of conviction.",
        "keyTechnicalHighlights": [
          {
            "title": "Flow Swaps",
            "description": "Aymuni showcased technical versatility by utilizing different cadences, including a fast-paced delivery that the hosts identified as a classic \"Wiley flow\". However, the speed of this flow actively worked against him in the battle format."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Bigga",
        "bar": "Your soul's not here I'm battling deeper yo I thought they told you I thought you knew I could've been breaking that bars free the guys would do that when the cruise back feel me rasta mountain gun finger you that name",
        "explanation": "Bigga establishes his aggressive, street-oriented persona. He claims to battle 'deeper' than just words, moving past traditional rap and connecting directly to real-world street consequences with references to 'gun fingers' and 'rasta mountain'."
      },
      {
        "performer": "Bigga",
        "bar": "By the end of this you'll be disfigured forensic team take pictures now got the same thoughts as a cid looking at you like stupid little niggas I make money out doing what I do allegedly allegedly",
        "explanation": "This paints a highly vivid, cinematic picture of violence. Mentioning 'forensic teams' and 'CID' (Criminal Investigation Department) grounds the threat in harsh reality, ending with a cheeky 'allegedly' to blur the line between rap entertainment and actual criminal activity."
      },
      {
        "performer": "Aymuni",
        "bar": "Let me get on my good-ish oh some good-ish I gotta give jimmy boy back that peace fuck what happened with my man god it's been more than weeks",
        "explanation": "Aymuni attempts to set a new, confident pace with a trademark flow switch. He leans into an conversational swagger, though this specific sequence was later critiqued by Bigga for borrowing too heavily from other artists' flows ('bad sportsmanship')."
      },
      {
        "performer": "Aymuni",
        "bar": "I've got horn goal texting she's been calling every week she got big back with little titties she looks like a freak weed I might allah at reeks and sleep in the sheets",
        "explanation": "Aymuni pivots away from direct battle aggression to boastful storytelling. This fast-paced, multi-syllabic rhyme scheme serves as a technical flex, aiming to show he can out-rap his opponent on a purely lyrical and structural level."
      },
      {
        "performer": "Aymuni",
        "bar": "That's a whole airport oh you don't know what's going on there none of that shit makes me fearful I saw believing god I could not fear you you're gonna get gone in buzz I'll be honest I am not careful",
        "explanation": "Aymuni directly addresses Bigga's imposing presence. By invoking 'God' and stating he 'could not fear you', Aymuni tries to neutralize Bigga's primary weapon—his intimidating aura and believability."
      },
      {
        "performer": "Aymuni",
        "bar": "The title was there hey to me this sounds like my wind been final you can't talk your shit with me go through the untitled",
        "explanation": "This bar operates on a meta-level regarding the battle itself. As the Season 1 Final, Aymuni references 'the title' and 'final', asserting his absolute confidence that the championship is already his."
      },
      {
        "performer": "Aymuni",
        "bar": "Don't need to come across rude my green and I'm heading home you don't want to let it go and I'll be honest with you I don't think that you'll let go because if you wanted to let it go my brother you let it go",
        "explanation": "Aymuni slows down his flow to deliver a more conversational, psychological jab. The repetitive use of 'let it go' creates a rhythmic trap that paints his opponent as stubborn and clinging to a lost cause."
      }
    ],
    "oddMoments": [
      "Bad Sportsmanship Dispute: There was tension over Aymuni utilizing a specific flow and phrase (\"let me get on my good-ish\") during his round. Bigga viewed Aymuni remixing or borrowing this from another rapper as \"bad sportsmanship\" and clarified that he personally does not steal bars.",
      "Prize Money: Following his victory in the Season 1 final, Bigga revealed that he actually gave his prize money away."
    ],
    "postBattleContext": "Laurie John-Phillip, better known as Bigga, was charged with the murder of rapper Hypo in June 2022, as well as possession of a bladed article. He was later acquitted at the Old Bailey in August 2023, with the case centring on whether the fatal stabbing was murder or an act of self-defence.\n\nHypo, whose real name was Lamar Jackson, was a prominent figure within the Mashtown collective and a close associate of artists such as Margs and Asco.\n\nHowever, following the charge, he was no longer featured by the platform. Although he was ultimately acquitted, Bigga has not returned to Pen Game, and his association with the league appears to have ended in the aftermath of the case."
  },
  {
    "id": "pg-s02-2021-03-28-kmarh-vs-lil-shakz",
    "slug": "kmarh-vs-lil-shakz",
    "mc1": "kmarh",
    "mc2": "lil-shakz",
    "title": "KMARH vs LIL SHAKZ (FINAL)",
    "date": "28-03-2021",
    "videoUrl": "https://www.youtube.com/watch?v=IqxMWUwETog",
    "views": "111k",
    "winner": "lil-shakz",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x07",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "The highly anticipated Season 2 finale saw K-Mar face off against the 16-year-old prodigy Lil Shakz for the £1,000 prize and a Link Up TV music video. Lil Shakz brought his signature infectious energy and sharp punchlines, maintaining incredible composure for a finale setting. While K-Mar was widely considered the most technically gifted rapper in the tournament, the pressure of the final appeared to get to him. K-Mar choked and stumbled through multiple rounds, eventually giving up in the third. The judges unanimously awarded the victory to Lil Shakz by default, citing K-Mar's collapses.",
    "performanceAnalysis": [
      {
        "performer": "LIL SHAKZ",
        "overview": "Lil Shakz delivered exactly what brought him to the finals: relentless energy, charisma, and clean execution. He didn't let the pressure of the finale rattle him, putting together three solid rounds that highlighted his confidence and sharp delivery.",
        "lyricalThemes": "Success, confidence, and energetic crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Consistent Execution",
            "description": "Maintained flawless delivery and high energy across all three rounds, capitalizing on his opponent's mistakes."
          }
        ]
      },
      {
        "performer": "KMARH",
        "overview": "Despite being praised by judge Lippy as 'the best rapper here,' K-Mar suffered from trying to do too much. His complex flows and intricate rhyme schemes fell apart under the pressure of the finale, leading to devastating chokes that ultimately cost him the battle.",
        "lyricalThemes": "Street violence, complex internal rhyme schemes.",
        "keyTechnicalHighlights": [
          {
            "title": "Technical Ambition",
            "description": "Attempted highly complex flow patterns that unfortunately led to him losing his place and choking."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "LIL SHAKZ",
        "theme": "Wordplay",
        "bar": "We do abs in the booth like Cordae",
        "explanation": "A clever reference to YBN Cordae, a rapper known for his lyrical focus and technical ability rather than purely trap beats. Shakz uses this to suggest he treats studio sessions like intense lyrical workouts, flexing his 'abs' (abilities/strength) to stay in peak rapping condition, emphasizing his dedication to the craft over gimmicks."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Confidence",
        "bar": "If I was trying to be the president, don't know, I would get elected. And I ain't got a trap. And man, just rap, cause everything I write is so expensive.",
        "explanation": "This sequence perfectly encapsulates Shakz's immense self-belief and undeniable charisma. In a scene heavily dominated by street bravado and trap-centric lyrics, Shakz confidently states that his pure rapping ability and stage presence alone hold premium ('expensive') value, making him as influential as a political leader."
      },
      {
        "performer": "KMARH",
        "theme": "Wordplay",
        "bar": "Don't sleep on this, you'll die in your dreams — Freddy Krueger",
        "explanation": "A brilliant pop-culture double entendre referencing the iconic horror villain from 'A Nightmare on Elm Street'. K-Mar warns his opponent not to 'sleep on him' (underestimate him), playing on the literal meaning of sleep where Krueger attacks his victims, turning a common rap trope into a vivid and threatening punchline."
      },
      {
        "performer": "KMARH",
        "theme": "Wordplay",
        "bar": "Your shit's coming like penny shooter, my shit's coming like semi-Luger",
        "explanation": "K-Mar draws a sharp contrast between himself and his opponent using weapon imagery. He equates Shakz's lyrical impact to a harmless 'penny shooter' (a child's toy), while comparing his own complex, hard-hitting bars to a 'semi-Luger' (a powerful, semi-automatic German pistol), emphasizing the vast difference in their offensive capabilities."
      }
    ],
    "oddMoments": [
      "The Finale Choke: The highly anticipated finale unfortunately ended in a whimper rather than a bang, as K-Mar completely forgot his third round, forcing him to concede the battle mid-verse.",
      "Joe Black's Blunt Assessment: When asked for his verdict, judge Joe Black bluntly stated, 'It was more of a case of one man losing it than another man winning it,' summarising the disappointment of the anti-climactic finish."
    ]
  },
  {
    "id": "pg-s02-2021-03-21-kmarh-vs-cheezee",
    "slug": "kmarh-vs-cheezee",
    "mc1": "kmarh",
    "mc2": "cheezee",
    "title": "KMARH vs CHEEZEE (Semi)",
    "date": "21-03-2021",
    "videoUrl": "https://www.youtube.com/watch?v=PsPJw3KvPsk",
    "views": "38k",
    "winner": "kmarh",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x06",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "In this tightly contested Season 2 semi-final, K-Mar faced off against Cheese. K-Mar brought high-energy performance with punchlines targeting Cheese's name and street credibility. Cheese countered with a relentless, fast-paced flow and direct attacks on K-Mar's authenticity. The judges were split on the outcome: Chaos voted for Cheese due to his consistent delivery, but Lippy and Joe Black ultimately gave the victory to K-Mar, praising his fiery energy and standout bars. K-Mar secured a 2-1 split decision to advance to the finals.",
    "performanceAnalysis": [
      {
        "performer": "KMARH",
        "overview": "K-Mar relied on aggressive delivery and clever wordplay, bringing undeniable energy to the room. He mixed street bars with comedic punchlines, maintaining strong crowd control throughout the battle.",
        "lyricalThemes": "Street authenticity, name flips (cheese/dank), and aggressive punchlines.",
        "keyTechnicalHighlights": [
          {
            "title": "Name Flips",
            "description": "Consistently attacked Cheese's name with references to 'dank' and 'getting sliced'."
          }
        ]
      },
      {
        "performer": "CHEEZEE",
        "overview": "Cheese delivered a rapid-fire, highly structured performance. He questioned K-Mar's street credibility and utilized complex, multi-syllabic rhyme schemes to try and overwhelm his opponent.",
        "lyricalThemes": "Questioning authenticity, rapid-fire threats, and flow manipulation.",
        "keyTechnicalHighlights": [
          {
            "title": "Rapid-Fire Flow",
            "description": "Showcased impressive breath control and a relentless, fast-paced delivery designed to overwhelm."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "KMARH",
        "theme": "Wordplay",
        "bar": "I see you're ex-pussy, oh, you're at least a Q, at most a half... And a mere got smoky clout, rolling spark, token pass.",
        "explanation": "K-Mar uses clever drug-related double entendres to disrespect Cheese."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Direct Threat",
        "bar": "Stab you up, chop you up, hack you up, mop you up. No point calling a doctor up, unless it's airlift helicopters.",
        "explanation": "Cheese drops his complex rhyme schemes for a moment to deliver a blunt, aggressive threat."
      },
      {
        "performer": "KMARH",
        "theme": "Thematic Flipping",
        "bar": "When they hear my flow, they get amped. Big cheese smelling like dank.",
        "explanation": "A simple but effective punchline playing on Cheese's name."
      }
    ],
    "oddMoments": [
      "The Split Decision: This was one of the closer battles of the season, resulting in a 2-1 split decision where judge Chaos heavily favoured Cheese, but was outvoted by Lippy and Joe."
    ]
  },
  {
    "id": "pg-s02-2021-03-14-lil-shakz-vs-ren-dmc",
    "slug": "lil-shakz-vs-ren-dmc",
    "mc1": "lil-shakz",
    "mc2": "ren-dmc",
    "title": "LIL SHAKZ vs REN DMC (Semi)",
    "date": "14-03-2021",
    "videoUrl": "https://www.youtube.com/watch?v=9Ao6f4p8wH0",
    "views": "103k",
    "winner": "lil-shakz",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x05",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "The first semi-final of Season 2 saw 16-year-old prodigy Lil Shakz face off against the highly disrespectful Ren DMC. Ren DMC leaned heavily into his signature \"shock value\" approach, fabricating elaborate, highly offensive stories about sleeping with Shakz's girlfriend and mother. However, Lil Shakz delivered the highlight of the battle with a legendary defensive flip—pointing out that since he was only 16, Ren's bragging about sleeping with his girlfriend was essentially a self-incriminating admission of a crime. This incredible presence of mind, combined with Shakz's infectious passion, crowd control, and energy, earned him a 2-1 split decision victory, sending the teenager straight to the Season 2 finals.",
    "performanceAnalysis": [
      {
        "performer": "LIL SHAKZ",
        "overview": "Lil Shakz demonstrated composure far beyond his 16 years. He opened by addressing his age directly, preventing Ren from using it as an easy angle, and then relied on relentless energy and charisma to control the room. His defining moment was his Round 2 rebuttal, where he flawlessly neutralized Ren's entire Round 1 story with a single logical observation. The judges (Chaos and Joe Black) ultimately rewarded his undeniable passion and sharp rebuttals over Ren's pure shock value.",
        "lyricalThemes": "Age/youth, situational rebuttals, crowd control, energetic hype.",
        "keyTechnicalHighlights": [
          {
            "title": "On-The-Spot Rebuttals",
            "description": "Delivered one of the greatest defensive rebuttals in the platform's history, completely dismantling his opponent's previous round."
          }
        ]
      },
      {
        "performer": "REN DMC",
        "overview": "Ren DMC doubled down on the highly offensive, boundary-pushing style that won him his quarter-final match. He showed zero regard for the age difference, launching into explicit, fabricated narratives about Lil Shakz's girlfriend and mother. While judge Lippy Lickshot appreciated the sheer audacity of the disrespect (noting that \"sucking your mother is a very effective weapon\"), the other judges felt it wasn't enough to overcome Shakz's overwhelming energy and quick wit.",
        "lyricalThemes": "Shock value, explicit disrespect, fabricated narratives, \"your mom\" jokes.",
        "keyTechnicalHighlights": [
          {
            "title": "Disrespectful Storytelling",
            "description": "Incredibly vivid, disrespectful storytelling designed purely to rattle his opponent and shock the room."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "LIL SHAKZ",
        "theme": "The Legendary Rebuttal",
        "bar": "You said you had sex with my girl and you're a big man, bro. I'm 16. So, you're sleeping with little youths out here.",
        "explanation": "The defining moment of the battle. Ren DMC spent his entire first round bragging about sleeping with Shakz's girlfriend. Shakz immediately opens his next round by pointing out the disturbing legal implications of a grown man sleeping with a 16-year-old's girlfriend, instantly turning the room against Ren's angle and completely neutralizing the disrespect."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Reclaiming the Narrative",
        "bar": "Don't say I'm good for my age... I tell a man, shut up, I'm good in general... Caught a terrible MC three times older than me. He will see my potential.",
        "explanation": "Shakz smartly addresses the \"elephant in the room\" (his youth) right out of the gate, demanding to be judged on pure skill rather than graded on a curve for his age."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Crowd Control",
        "bar": "Marz, I know that you wanna smile. You might as well give me a thousand pounds. Car True say I've already won this round.",
        "explanation": "Shakz shows total comfort in the environment by directly addressing the host (Margs/Marz) and confidently calling his own victory mid-battle."
      },
      {
        "performer": "REN DMC",
        "theme": "Call of Duty Wordplay",
        "bar": "You ain't never robbed no one. You only wore a mask cause COVID-19... You only seen a strap playing COD.",
        "explanation": "A fantastic double-entendre that deconstructs Shakz's street persona by equating his \"masks\" to pandemic compliance and his \"straps\" (guns) to the video game Call of Duty."
      },
      {
        "performer": "REN DMC",
        "theme": "Shock Value Disrespect",
        "bar": "So I ain't gonna tell you, suck your mum. Cos I want your mum to come suck me.",
        "explanation": "Ren DMC abandons intricate wordplay in favor of pure, unfiltered disrespect, dropping an outrageous line solely for the crowd's shocked reaction."
      },
      {
        "performer": "REN DMC",
        "theme": "Disrespectful Storytelling",
        "bar": "Pornhub, me and your girl had sex, it was all love. He was all vexed when he walked up. I told man to fetch me some water. Uh, Ren, I told man to fetch me some juice.",
        "explanation": "Ren weaves a highly disrespectful narrative where he not only sleeps with Shakz's girlfriend but then treats Shakz like a servant in his own hypothetical scenario."
      }
    ],
    "oddMoments": [
      "Lippy's Justification: When voting for Ren DMC, Lippy Lickshot drops a highly memorable piece of judging rationale, stating completely deadpan: \"Even though it's immature, sucking your mother is a very effective weapon in these streets.\""
    ]
  },
  {
    "id": "pg-s02-2021-03-07-cheezee-vs-el-bandzo",
    "slug": "cheezee-vs-el-bandzo",
    "mc1": "cheezee",
    "mc2": "el-bandzo",
    "title": "CHEEZEE vs EL BANDZO",
    "date": "07-03-2021",
    "videoUrl": "https://www.youtube.com/watch?v=hHf9oUvCqJk",
    "views": "42k",
    "winner": "cheezee",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x04",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "Cheezee squared off against El Bandzo in a stylistic clash between raw energy and calculated punchlines, ending in a 2-1 split decision victory for Cheezee. El Bandzo delivered some of the most memorable and comedic punchlines of the night, heavily attacking Cheezee's weight, hygiene, and name. However, Cheezee's commanding presence, relentless aggression, and a surprisingly vulnerable third round—where he abandoned street bravado to speak maturely about raising his son—won over judges Chaos and Lippy Lickshot, who favored his \"vibes\" and direct attacks.",
    "performanceAnalysis": [
      {
        "performer": "CHEEZEE",
        "overview": "Cheezee anchored his performance in pure passion and aggression (\"I rap with my heart\"). While he possessed strong street bars and complex internal rhyme schemes, his most devastating moment came in Round 3 when he completely subverted the typical battle rap tough-guy persona. By openly admitting he didn't carry a gun because he was focused on teaching his son right from wrong, he brought a level of \"real talk\" that completely neutralized El Bandzo's comedic disrespect.",
        "lyricalThemes": "Real talk, fatherhood, physical aggression, drug wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Subverting Expectations",
            "description": "An incredibly mature third round that abandoned traditional battle rap tropes for vulnerable, fatherly authenticity."
          }
        ]
      },
      {
        "performer": "EL BANDZO",
        "overview": "El Bandzo took a highly comedic, disrespectful approach. He explicitly titled his first round \"offensive G\" and spent his time delivering hilarious, personal insults regarding Cheezee's weight, name, and supposed body odor. His punchlines were highly structured and heavily reliant on pop-culture references (TikTok dances, movies). However, the judges felt his performance lacked the direct, confrontational energy required to seal a unanimous win.",
        "lyricalThemes": "Fat jokes, hygiene insults, pop culture (Corvette Corvette TikTok dance), name flips.",
        "keyTechnicalHighlights": [
          {
            "title": "Structured Punchlines",
            "description": "Hilarious, structured punchlines that were deeply disrespectful and entertaining."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "CHEEZEE",
        "theme": "Real Talk / Fatherhood",
        "bar": "I ain't got a gun, rude boy. No, no, I got a son. And I teach him right and wrong every day. Cause that's what a real man does.",
        "explanation": "Cheezee delivers a masterful subversion of typical battle rap posturing. Instead of bragging about violence, he takes the moral high ground, prioritizing fatherhood and true masculinity over street bravado."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Reclaiming the Narrative",
        "bar": "I got a big belly. I'm still eating... I got a bag of man that need feeding.",
        "explanation": "After facing two rounds of fat jokes from El Bandzo, Cheezee brilliantly flips the angle, using his weight as a metaphor for his success and his responsibility to provide for his people."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Comedic Aggression",
        "bar": "Let me start this thing with a joke hard, that's what you are my bro. You're the chicken that crossed the road and got hit by a car my bro.",
        "explanation": "A blunt, aggressive, playground-style insult that immediately sets the tone for his direct, confrontational style."
      },
      {
        "performer": "EL BANDZO",
        "theme": "The Name Flip",
        "bar": "You look like you smell. Is that why they call you cheese? ... I was gonna smoke here but I smoked Cali, not cheese.",
        "explanation": "El Bandzo attacks his opponent's name from two angles simultaneously: equating \"Cheese\" to bad body odor, and comparing it unfavorably to high-grade \"Cali\" weed."
      },
      {
        "performer": "EL BANDZO",
        "theme": "Pop Culture Wordplay",
        "bar": "Corvette, Corvette. Don't let these bars go over your head. Got a flicky on me any time that I step and I'll back that out of disrespect.",
        "explanation": "El Bandzo references the viral \"Corvette Corvette\" TikTok dance, contrasting the lighthearted pop culture reference with imagery of pulling out a \"flicky\" (knife)."
      },
      {
        "performer": "EL BANDZO",
        "theme": "Food Wordplay",
        "bar": "Had to leave my spaggy bro at home. He'll turn man's spaghetti. And with cheese, that's a scene. Do you get it?",
        "explanation": "A fantastic closer where El Bandzo mixes violence (\"turn man spaghetti\") with his opponent's name (Cheese / spaghetti cheese) for a clever punchline."
      }
    ],
    "oddMoments": [
      "The TikTok Dance: El Bandzo actively references and seemingly performs a bit of the \"Corvette Corvette\" TikTok dance mid-battle, completely juxtaposing the serious, violent bars he's delivering.",
      "\"Offensive G\": El Bandzo formally introduces his own round before he starts rapping (\"This one's called offensive G\"), an unusual theatrical touch.",
      "Judging Disconnect: Lippy notes that it was hard to judge because \"there wasn't a lot of bars directed at each other.\" This highlights how different the two MCs' approaches were—Cheezee was talking about his life and heart, while Bandzo was firing off structured jokes."
    ]
  },
  {
    "id": "pg-s02-2021-02-28-lil-shakz-vs-pocaa",
    "slug": "lil-shakz-vs-pocaa",
    "mc1": "lil-shakz",
    "mc2": "pocaa",
    "title": "LIL SHAKZ vs POCAA",
    "date": "28-02-2021",
    "videoUrl": "https://www.youtube.com/watch?v=zjzdL7JcILk",
    "views": "53k",
    "winner": "lil-shakz",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x03",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "Lil Shakz vs Pocaa was a highly energetic and tightly contested clash that ended in a 2-1 split decision victory for Lil Shakz. Pocaa brought fierce street bars and relentless energy, focusing on road credibility and a drill-style performance. However, Lil Shakz took a more traditional battle rap approach, utilizing comedic disrespect, sharp wordplay, and crowd engagement. The judges were split on what they valued most, but Joe Black and Lippy Lickshot ultimately felt Shakz's bars were better tailored for a direct battle environment, edging out Pocaa's performance-heavy style.",
    "performanceAnalysis": [
      {
        "performer": "LIL SHAKZ",
        "overview": "Lil Shakz shined through his charisma and willingness to use unorthodox, highly personal disrespect. Rather than trying to out-tough Pocaa, he attacked her with schoolyard-style insults (e.g., claiming her breath smelled like \"an old white man\") that completely shifted the tone of the room. His ability to subvert expectations with his rhyme schemes and mix topical references (Brexit, COVID) with battle-rap name flips proved to be his winning formula.",
        "lyricalThemes": "Comedic disrespect, topical wordplay (Brexit/Virus), subversion of expectations.",
        "keyTechnicalHighlights": [
          {
            "title": "Scheme Subversion",
            "description": "Expertly set up predictable punchlines only to pull the rug out with completely unexpected references."
          }
        ]
      },
      {
        "performer": "POCAA",
        "overview": "Pocaa brought incredible presence and aggression to the clash. She utilized heavy drill flows and painted vivid pictures of street violence and scoring points \"on the scoreboard.\" Judge Chaos voted for her purely based on her infectious energy and the conviction of her delivery. However, the other judges felt her material, while excellent musically, was not direct enough for a head-to-head clash.",
        "lyricalThemes": "Drill/road credibility, street violence, scoreboard metaphors.",
        "keyTechnicalHighlights": [
          {
            "title": "High-Octane Delivery",
            "description": "Utilized repetitive, energetic refrains that made her rounds feel like established drill anthems."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "LIL SHAKZ",
        "theme": "Comedic Disrespect",
        "bar": "Strawberry flavour... mint flavour would be even better. Cause your breath just stinks like an old white man.",
        "explanation": "Shakz completely disrupts the serious, tough-guy atmosphere with a hilarious, hyper-specific personal insult that likely had the whole room laughing."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Scheme Subversion",
        "bar": "Man's cold like Antarctica... You thought I was gonna say English weather. Just like Hedy, you should have known better.",
        "explanation": "Shakz sets up a highly predictable punchline (cold like English weather), calls out the audience for expecting it, and flips it into a clever reference to Headie One (\"Know Better\")."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Topical Punchlines",
        "bar": "Like, have you got the virus? You look infected. Came to the place, end it just like Brexit.",
        "explanation": "Shakz links Pocaa's supposed poor hygiene to the COVID-19 virus, rhyming it cleanly with the messy conclusion of Brexit."
      },
      {
        "performer": "LIL SHAKZ",
        "theme": "Name Flips",
        "bar": "Your name's Pocka, your mum should've taught you proper. I'm the showstopper, you're the showflopper.",
        "explanation": "A classic, straightforward battle rap name flip to establish dominance in his final round."
      },
      {
        "performer": "POCAA",
        "theme": "Street Anthems",
        "bar": "Press the button, press the button... I'm scoring all the points and they know I'm the one.",
        "explanation": "Pocaa utilizes repetitive, energetic refrains that make her rounds feel like established drill anthems rather than written battle verses."
      },
      {
        "performer": "POCAA",
        "theme": "Road Credibility",
        "bar": "Most humble, but I'm violent... Must be the Trident. Four door dingers, team full of killers.",
        "explanation": "Pocaa sets the tone early in round one by immediately jumping into aggressive street imagery, establishing her character as someone not to be messed with."
      }
    ],
    "oddMoments": [
      "The Age Gap & \"Sexual Tension\": Host Margs makes a highly unusual comment after the battle concludes, noting the age dynamic (\"it's a bit mad that you're 16 and 20\") and claiming there was \"a little sexual tension or something\" in the room, making for an incredibly awkward but memorable post-battle breakdown.",
      "The Split Decision: Unlike the unanimous victories seen in other clashes, this battle resulted in a 2-1 split decision, with Chaos heavily backing Pocaa's energy while Lippy and Joe preferred Shakz's directness."
    ]
  },
  {
    "id": "pg-s02-2021-02-21-frizz-price-vs-ren-dmc",
    "slug": "frizz-price-vs-ren-dmc",
    "mc1": "frizz-price",
    "mc2": "ren-dmc",
    "title": "FRIZZ PRICE vs REN DMC",
    "date": "21-02-2021",
    "videoUrl": "https://www.youtube.com/watch?v=eVVMoxD-8uc",
    "views": "163k",
    "winner": "ren-dmc",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x02",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "Ren DMC faced off against Frizz Price in what judge Lippy Lickshot hailed as his \"favourite Pen Game battle so far.\" Frizz Price, already an established artist, brought aggressive road-rap and grime-influenced street bars. However, Ren DMC countered with a relentless barrage of highly personal, disrespectful, and often hilarious angles. Ren systematically broke down Frizz's gangster persona and attacked her appearance, securing a 3-0 victory by commanding the room's energy and delivering back-to-back haymakers.",
    "performanceAnalysis": [
      {
        "performer": "FRIZZ PRICE",
        "overview": "Frizz showcased her experience as a recording artist, bringing authentic street tales and a commanding presence. She focused heavily on her road credibility, delivering bars about \"loaded sticks\" and \"moving bricks like Tetris.\" In the third round, she smartly called out Ren's reliance on fat jokes (\"If you ain't talking about fat, you ain't got no bars\"). However, her traditional road-rap approach struggled to overcome Ren's highly targeted comedic angles.",
        "lyricalThemes": "Street credibility, drug wordplay (Tetris), physical intimidation.",
        "keyTechnicalHighlights": [
          {
            "title": "Authentic Grime Delivery",
            "description": "Utilized a commanding Grime-influenced flow to tell sharp street-level stories."
          }
        ]
      },
      {
        "performer": "REN DMC",
        "overview": "Ren DMC masterfully blended comedy with brutal disrespect. Dressed in what the judges dubbed \"tangerine swag,\" Ren delivered some of the most memorable moments of the season. He utilized incredible bait-and-switches—pretending to romance Frizz before delivering vicious punchlines—and deconstructed her street persona by comparing her to fictional movie gangsters. His ability to make the battle deeply personal gave him the clear edge.",
        "lyricalThemes": "Personal disrespect, fat jokes, movie/TV references (Top Boy, Scarface, Blue Story), gender-bending wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "The Bait and Switch",
            "description": "Expertly shifted flows and tones to set up unexpected punchlines, notably in the romance scheme."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "FRIZZ PRICE",
        "theme": "Drug Wordplay",
        "bar": "Fed him his eight but he's moving bricks like Tetris",
        "explanation": "Frizz uses the classic puzzle game Tetris, where players arrange falling blocks, as a double entendre for moving \"bricks\" (drugs) on the street."
      },
      {
        "performer": "FRIZZ PRICE",
        "theme": "Appearance Disrespect",
        "bar": "Your high top's fucked in the wind it leans. I can tell that you're broke from your top and your jeans.",
        "explanation": "Frizz takes direct aim at Ren's appearance and haircut, attempting to strip away his confidence through straightforward mockery."
      },
      {
        "performer": "FRIZZ PRICE",
        "theme": "Self-Awareness Angle",
        "bar": "If you ain't talking about fat, you ain't got no bars",
        "explanation": "A great defensive angle where Frizz immediately neutralizes Ren's primary angle from the previous round by calling out his over-reliance on fat jokes."
      },
      {
        "performer": "REN DMC",
        "theme": "The Bait and Switch",
        "bar": "Maybe take you out for a meal... Now let me bust inside. Now let me rub them thighs. No, man, I'm fucked. I lied. Don't smoke, but I must be high. Why would I move to this dusty guy?",
        "explanation": "One of the most famous moments of the clash. Ren fakes out the room by shifting into a romantic, R&B-style flow targeting Frizz, only to violently pull the rug out from under the audience with a brutal punchline about her appearance."
      },
      {
        "performer": "REN DMC",
        "theme": "Movie Gangster Deconstruction",
        "bar": "You've watched Top Boy too many times. You've watched Blue Story too many times... Thinking you're Nino but just remember Nino died in the end. And Scarface died in the end. So big girl, please stop trying to pretend.",
        "explanation": "Ren directly attacks Frizz's street credibility by comparing her to fictional movie and TV gangsters, pointing out that even the fictional characters she idolizes end up dead, completely undermining her persona."
      },
      {
        "performer": "REN DMC",
        "theme": "The M&S Punchline",
        "bar": "I'm confused by your gender. Where you shopping at? Marks and Spencer? Cause you look like a Mark or Spencer.",
        "explanation": "A massive room-shaking punchline. Ren plays on the British department store \"Marks & Spencer,\" splitting the name into male names to joke about Frizz's masculine presentation."
      }
    ],
    "oddMoments": [
      "The \"Tangerine Swag\": Judge Chaos specifically highlights Ren's bright orange outfit, admitting that the \"tangerine swag\" and \"citrus flow\" initially threw him off before Ren started dropping heavy bars.",
      "Established Artist Recognition: Both Joe Black and Lippy note that they were already familiar with Frizz Price's music outside of the battle scene prior to the clash."
    ]
  },
  {
    "id": "pg-s02-2021-02-14-kmarh-vs-kurly",
    "slug": "kmarh-vs-kurly",
    "mc1": "kmarh",
    "mc2": "kurly",
    "title": "KMARH vs KURLY",
    "date": "14-02-2021",
    "videoUrl": "https://www.youtube.com/watch?v=g3V6ioR7JBY",
    "views": "53k",
    "winner": "kmarh",
    "theme": "pengame",
    "season": 2,
    "customEp": "2x01",
    "stage": "Archived",
    "group": null,
    "tag": null,
    "clashSummary": "The opening battle of Season 2 featured Kmarh facing off against Kurly. The judges unanimously awarded the victory to Kmarh (3-0). The decision came down to Kmarh's pure battle aggression—as Lippy noted, \"only one man left his yard today to attack a man.\" While Kurly brought incredibly technical flows and dense rhyme schemes, his performance felt more like a musical showcase than a direct confrontation, allowing Kmarh to dominate through directness and intent.",
    "performanceAnalysis": [
      {
        "performer": "KMARH",
        "overview": "Kmarh commanded the battle with raw aggression, direct disrespect, and layered wordplay. Judge Joe Black specifically noted that despite his aggressive delivery, Kmarh was \"logged in\" and dropped several complex bars that \"went over a lot of people's heads.\" Kmarh perfectly balanced traditional battle rap intimidation with clever double entendres, particularly around cars, street life, and wordplay.",
        "lyricalThemes": "Aggression, direct disrespect, car wordplay, historical themes, vegan wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Aggressive Delivery",
            "description": "Used sharp disrespect to command the room and 'attack' his opponent."
          }
        ]
      },
      {
        "performer": "KURLY",
        "overview": "Kurly showcased a rapid-fire, highly technical flow laden with multi-syllabic internal rhymes. He utilized complex pop-culture and animal metaphors (referencing Harry Potter, Mowgli, and chameleons). However, his delivery lacked the venom required for a clash; he was rapping beautifully but failed to properly \"attack\" his opponent, a flaw all three judges pointed out.",
        "lyricalThemes": "Technical flows, multi-syllabic internal rhymes, pop-culture and animal metaphors.",
        "keyTechnicalHighlights": [
          {
            "title": "Technical Flow",
            "description": "Extremely fast, complex multi-syllabic rhyme schemes."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "KMARH",
        "theme": "Car/Driving Metaphors",
        "bar": "I don't see class in your BM, so I might call it a night, me I get gassed on my tank, they ain't got a clutch, they're forcing a drive",
        "explanation": "Kmarh strings together a dense sequence of car-related double meanings. He plays on \"BM\" (BMW/Baby Mother), \"gassed,\" \"clutch,\" and \"drive\" to contrast his natural momentum with Kurly's forced effort."
      },
      {
        "performer": "KMARH",
        "theme": "The Jungle Book Scheme",
        "bar": "Got enough gorillas and apes in the camp, and they all holding sticks / you ain't really lived in a jungle bro, stop lying you ain't Mowgli kid",
        "explanation": "He uses The Jungle Book imagery (\"Mowgli,\" \"apes,\" \"jungle\") to mock Kurly's street credibility, contrasting a real dangerous environment with a fictional story."
      },
      {
        "performer": "KMARH",
        "theme": "Historical Wordplay",
        "bar": "Them boy they do it for the whips and chains, that's why they still slave in the way",
        "explanation": "A sharp double-entendre using \"whips and chains.\" On the surface, it refers to cars (whips) and jewelry (chains), but he cleverly pivots it to historical slavery, implying his opponents are trapped by materialistic desires."
      },
      {
        "performer": "KMARH",
        "theme": "Vegan Double Entendre",
        "bar": "Stay on my P's and Q's like vegans do... we're just tryna make P's and goals",
        "explanation": "A quick punchline playing on \"P's\" (money/peas) and the dietary restrictions of vegans."
      },
      {
        "performer": "KURLY",
        "theme": "Pop Culture / Harry Potter",
        "bar": "Calling me potter like I said but I, you stepped in a fire and fried",
        "explanation": "Kurly utilizes wordplay around Harry Potter and the Goblet of Fire, warning Kmarh of the consequences of stepping into the clash with him."
      },
      {
        "performer": "KURLY",
        "theme": "Technical Flow",
        "bar": "I'm fed up of fellas just spreading and getting these checks, I'm better with techers, say what you like, me and you on the mic, we'll see who's better with wetters",
        "explanation": "This sequence highlights Kurly's primary strength: a dense, multi-syllabic rhyme scheme (\"checks,\" \"techers,\" \"wetters\") delivered with a rapid, musical flow."
      }
    ],
    "oddMoments": [
      "The \"Drop the Mic\" Rule: Host Margs establishes a very strict rule right at the beginning of the season: \"If you drop the mic, you're done, no second chances,\" highlighting the pressure of the live environment.",
      "The \"Chaos\" Judge: For this battle, the judging panel deviates from the usual Season 1 lineup. While Lippy and Joe Black return, the third judge is introduced simply as \"the boy of chaos himself.\""
    ]
  },
  {
    "id": "pg-s03-2021-12-19-f-don-vs-skamz",
    "slug": "f-don-vs-skamz",
    "mc1": "f-don",
    "mc2": "skamz",
    "winner": "f-don",
    "title": "F-DON vs SKAMZ",
    "theme": "pengame",
    "season": 3,
    "views": "85k",
    "date": "19-12-2021",
    "videoUrl": "https://www.youtube.com/watch?v=zD8cB3tqS2Q",
    "customEp": "3x13",
    "subGroup": "Late Additions",
    "seasonOrder": 23,
    "stage": null,
    "group": null,
    "tag": "Late Additions",
    "clashSummary": "F-Don defeated Skamz in the Season 3 final to win the title. The battle was competitive and carried the weight of a championship clash, but F-Don's consistency, crowd control, and clearer final-round instincts ultimately carried him over the line. Skamz had strong moments, but the judges felt F-Don stayed sharper across the full battle and handled the final pressure better.",
    "performanceAnalysis": [
      {
        "performer": "F-Don",
        "overview": "F-Don brought the more complete championship performance. He attacked with confidence, humour, and direct disrespect while keeping the room engaged through beat choices, flow changes, and reaction lines. Even when the battle got messy, he stayed composed enough to keep control of the room.",
        "lyricalThemes": "Final-round pressure, crowd control, direct disrespect, reaction writing, and championship composure.",
        "keyTechnicalHighlights": [
          {
            "title": "Reaction Writing",
            "description": "He consistently aimed for lines that made the room respond immediately."
          },
          {
            "title": "Crowd Control",
            "description": "F-Don stayed in command of the room and used the live energy to his advantage."
          },
          {
            "title": "Final Pressure",
            "description": "He looked like a battler who understood the final was the moment to close the deal."
          }
        ]
      },
      {
        "performer": "Skamz",
        "overview": "Skamz came with aggression, energy, and some sharp moments, but he also had disruption, stumbles, and a few sections that never fully settled. The writing had venom and intent, yet the final needed him to be cleaner and more composed than he managed to be.",
        "lyricalThemes": "Aggression, pressure, disrespect, urgency, and attempts to match the final-stage intensity.",
        "keyTechnicalHighlights": [
          {
            "title": "Aggressive Presence",
            "description": "Skamz looked like he wanted to force the issue and make the battle uncomfortable."
          },
          {
            "title": "Direct Disrespect",
            "description": "He aimed to keep the battle nasty and personal rather than letting F-Don settle."
          },
          {
            "title": "Main Weakness",
            "description": "A few stumbles and inconsistent sections made it harder to sustain momentum across the whole final."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "F-Don",
        "theme": "Status",
        "bar": "This is the last battle of the whole series. This is the end.",
        "explanation": "A simple championship framing line that sets the stakes for the final."
      },
      {
        "performer": "F-Don",
        "theme": "Pop Culture",
        "bar": "You're attuned into me, bro. I am the whole car gay.",
        "explanation": "A rough transcripted line that plays on delivery and sound rather than clean wording, used as part of his pressure setup."
      },
      {
        "performer": "Skamz",
        "theme": "Pressure",
        "bar": "You don't impress with a stolen flow. You get no reception like a broken phone.",
        "explanation": "Skamz attacks F-Don's originality and uses broken-phone imagery to frame him as disconnected."
      },
      {
        "performer": "F-Don",
        "theme": "Brother Rivalry",
        "bar": "You call yourself Titan, then I'm Captain Levi. Watch how I launch my attack on Titan.",
        "explanation": "A strong Attack on Titan reference that turns the name angle into a finishing setup."
      }
    ],
    "oddMoments": [
      "The final felt like a genuine championship battle, with both men pushing hard for the win.",
      "The judges repeatedly stressed how hard it was to call because both battlers had moments.",
      "Skamz had stretches where the writing was there but the delivery didn't fully settle.",
      "F-Don's confidence and reaction-making lines gave him the edge in the room.",
      "The season ended with the judges giving F-Don the title."
    ],
    "postBattleContext": "F-Don won Season 3 by taking the final against Skamz. The judges respected Skamz's run and energy, but F-Don's consistency, control, and ability to create reactions in the biggest battle of the season made him the clear champion by the end of the night."
  },
  {
    "id": "pg-s03-2021-11-14-f-don-vs-dan-dannah",
    "slug": "f-don-vs-dan-dannah",
    "mc1": "f-don",
    "mc2": "dan-dannah",
    "winner": "f-don",
    "title": "F-DON vs DAN DANNAH",
    "theme": "pengame",
    "season": 3,
    "views": "66k",
    "date": "14-11-2021",
    "videoUrl": "https://www.youtube.com/watch?v=yxqE3CHfxiY",
    "customEp": "3x11b",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 21,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "F-Don defeated Dan Dannah 2-1 in the second Season 3 semi-final and secured his place in the final. The battle was close and heavily debated, with Dan bringing high-energy direct attack and F-Don countering with tighter performance control, one-liners, flow changes, and crowd reactions. In the end, the judges felt F-Don had the slightly stronger battle instincts and enough reaction moments to edge it.",
    "performanceAnalysis": [
      {
        "performer": "Dan Dannah",
        "overview": "Dan came in with energy, directness, and a clear desire to make the battle personal. His rounds focused on F-Don's image, movement, and credibility, and he repeatedly tried to frame the clash as a battle of brothers where he could still win by being the sharper battler.",
        "lyricalThemes": "Brotherhood tension, direct attack, crowd energy, and anti-comfort battle writing.",
        "keyTechnicalHighlights": [
          {
            "title": "High Energy",
            "description": "Dan brought a loud, confident presence and kept the room engaged."
          },
          {
            "title": "Direct Attacks",
            "description": "He aimed at F-Don's style, image, and tournament path without wasting time."
          },
          {
            "title": "Beat Switching",
            "description": "His performance used changes in cadence and delivery to try to surprise the room."
          }
        ]
      },
      {
        "performer": "F-Don",
        "overview": "F-Don responded with a calmer but sharper battle approach. He leaned on one-liners, reaction-making moments, and performance tricks that made the room laugh or react immediately, including the instrumental choices and flow changes that kept the battle feeling alive.",
        "lyricalThemes": "One-liners, crowd reactions, brotherly disrespect, and performance control.",
        "keyTechnicalHighlights": [
          {
            "title": "Reaction Writing",
            "description": "F-Don consistently aimed for moments that got the room reacting on the spot."
          },
          {
            "title": "Beat Selection",
            "description": "The instrumental choices helped him create confusion and then flip expectations."
          },
          {
            "title": "Stage Control",
            "description": "He stayed composed and made the battle feel like it was moving on his terms."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Dan Dannah",
        "theme": "Pop Culture",
        "bar": "Blood, this fool's like Ryu versus Ken.",
        "explanation": "Dan frames the brother-to-brother clash like a classic fighting game matchup."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Battle Identity",
        "bar": "Goku versus Vegeta, but I'm Kakarot in the end.",
        "explanation": "He uses Dragon Ball imagery to present himself as the final winner in the dynamic."
      },
      {
        "performer": "F-Don",
        "theme": "Story Flip",
        "bar": "You call yourself Titan, then I'm Captain Levi. Watch how I launch my attack on Titan.",
        "explanation": "A clean Attack on Titan reference that turns Dan's name or image into a setup for a punch."
      },
      {
        "performer": "F-Don",
        "theme": "Reaction Line",
        "bar": "You pulled something at the start. I didn't even expect it.",
        "explanation": "This captures the idea that F-Don was reacting to Dan's opening energy while keeping the crowd with him."
      }
    ],
    "oddMoments": [
      "The battle was heavily debated and the judges repeatedly described it as close.",
      "The brother dynamic gave the clash an awkward but compelling tension.",
      "Some of the beat choices made the room briefly confused before the flips landed.",
      "The judges spent a lot of time talking about reactions and delivery rather than just raw bars.",
      "The decision felt like one of those Pen Game battles where both men looked cold and the margins were tiny."
    ],
    "postBattleContext": "F-Don advanced to the final after a tight semi-final. The judges leaned his way because his material created more live reactions, even though Dan's voice, delivery, and directness made the battle difficult to separate cleanly."
  },
  {
    "id": "pg-s03-2021-11-14-kmarh-vs-f-don",
    "slug": "kmarh-vs-f-don",
    "mc1": "kmarh",
    "mc2": "f-don",
    "winner": "f-don",
    "title": "KMARH vs F-DON",
    "theme": "pengame",
    "season": 3,
    "views": "35k",
    "date": "14-11-2021",
    "videoUrl": "https://www.youtube.com/watch?v=iOvKWdlh2EI",
    "customEp": "3x12",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 22,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "F-Don defeated K-Marh 2-1 in the first Season 3 semi-final and secured his place in the final. It was a clash between K-Marh's technical rap ability and F-Don's more direct battle presence, aggression, punchlines, and crowd impact. K-Marh took the third clearly, but F-Don had already built enough of a lead in the first two rounds.",
    "performanceAnalysis": [
      {
        "performer": "K-Marh",
        "overview": "K-Marh delivered a technically impressive performance with dense writing, strong breath control, and polished rhythm. His third round was especially strong and showed why he is so highly rated as a rapper, but his early rounds did not attack F-Don as directly as they needed to in a live battle setting.",
        "lyricalThemes": "Technical rhythm, abstract imagery, layered metaphors, and writing-led battle rap.",
        "keyTechnicalHighlights": [
          {
            "title": "Advanced Flow",
            "description": "Judges praised the technical difficulty of his rhythm and breath control."
          },
          {
            "title": "Dense Writing",
            "description": "His bars used layered metaphors, internal rhyme, and abstract imagery."
          },
          {
            "title": "Strong Third Round",
            "description": "The final round was widely seen as his best and the round that showed his full ability."
          }
        ]
      },
      {
        "performer": "F-Don",
        "overview": "F-Don came with a direct battle plan and focused on K-Marh's size, projection, voice, background, and battle suitability. His writing was less technically complex than K-Marh's, but it was clearer, more immediate, and easier for the room to react to live.",
        "lyricalThemes": "Direct disrespect, crowd-readable punches, appearance angles, and stage aggression.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Battle Attack",
            "description": "F-Don aimed his material clearly at K-Marh rather than just rapping around him."
          },
          {
            "title": "Crowd-Readable Punches",
            "description": "His lines were easier to catch live and easier for judges to score on the spot."
          },
          {
            "title": "Performance Aggression",
            "description": "He brought the sharper battle energy the room wanted in the first two rounds."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "K-Marh",
        "theme": "Pen Game",
        "bar": "This pen give me sentences.",
        "explanation": "A strong double meaning that turns writing into punishment and makes the pen the weapon."
      },
      {
        "performer": "K-Marh",
        "theme": "Status",
        "bar": "If you shoot at a king, don't try and miss.",
        "explanation": "K-Marh positions himself as the king and warns that attacks on him have to land cleanly."
      },
      {
        "performer": "F-Don",
        "theme": "Size Diss",
        "bar": "K-Marh's wet. Luckily, he can fit in a clothes dryer.",
        "explanation": "F-Don uses 'wet' as weak and follows with a size insult that keeps the joke visual."
      },
      {
        "performer": "F-Don",
        "theme": "Height Angle",
        "bar": "You're like four foot, so I can't expect you to aim higher.",
        "explanation": "A direct height-based insult that also flips 'aim higher' into a literal and figurative jab."
      }
    ],
    "oddMoments": [
      "Judges said that if it were an audio battle, K-Marh could have won clearly.",
      "F-Don's first two rounds were enough to secure the 2-1 before K-Marh's strong third.",
      "K-Marh's third round was considered possibly the best round of the battle.",
      "The result was framed more as a format issue than a dismissal of K-Marh's ability."
    ],
    "postBattleContext": "F-Don moved on to the final after doing enough in the first two rounds. The judges praised K-Marh heavily as a rapper, but the battle showed that technical quality alone is not always enough in Pen Game; the room rewarded direct attack, stage presence, and hard-hitting moments."
  },
  {
    "id": "pg-s03-2021-11-07-dbc-vs-amity",
    "slug": "dbc-vs-amity",
    "mc1": "dbc",
    "mc2": "amity",
    "winner": "dbc",
    "title": "DBC vs AMITY",
    "date": "07-11-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=bF7qJA9eiH0&t=6s&pp=ygUYU0tBTVogVlMgSUNVUkVEQU1TVEVSREFN0gcJCTgLAYcqIYzv",
    "views": "12k",
    "customEp": "3x05a",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 8,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "Amity defeated DBC by clean sweep in this Group A battle, taking the full three points. DBC showed clearer delivery than in his previous appearance, but the judges still felt his material lacked direction and direct opponent focus. Amity came across as more controlled, more direct, and more battle-ready.",
    "performanceAnalysis": [
      {
        "performer": "Amity",
        "overview": "Amity came into this battle with more confidence and sharper structure than in his earlier appearance. He mixed drill-style aggression with more direct battle writing, which helped him stand out against DBC.",
        "lyricalThemes": "Direct opponent focus, improved structure, name and image attacks, and wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Opponent Focus",
            "description": "Amity attacked DBC more clearly than DBC attacked him."
          },
          {
            "title": "Second-Round Strength",
            "description": "Judges specifically highlighted his second round as his best section."
          },
          {
            "title": "Wordplay",
            "description": "The judges felt his wordplay had improved and showed stronger battle craft."
          }
        ]
      },
      {
        "performer": "DBC",
        "overview": "DBC improved in clarity, which was a big step forward, but his bars still felt scattered and not direct enough. He had energy and aggression, yet too much of the writing felt like general street talk rather than material built specifically for Amity.",
        "lyricalThemes": "Street imagery, gun talk, boxing, weapon references, and flow pockets.",
        "keyTechnicalHighlights": [
          {
            "title": "Improved Clarity",
            "description": "The judges could hear him better this time than in his earlier battle."
          },
          {
            "title": "Energy and Aggression",
            "description": "DBC still had presence even when the writing did not fully land."
          },
          {
            "title": "Prop Moment",
            "description": "The KFC bag moment stood out, though it became distracting because it never turned into a real payoff."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Amity",
        "theme": "Name Flip",
        "bar": "DBC gets treated like DPD, meaning he gets wrapped with a box.",
        "explanation": "Amity turns DBC into a delivery-company pun, using shipping imagery to suggest DBC is getting packaged up."
      },
      {
        "performer": "Amity",
        "theme": "Pop Culture",
        "bar": "I’m running with the torch, I’m feeling Olympic.",
        "explanation": "A clean Olympic torch reference that signals momentum and status."
      },
      {
        "performer": "Amity",
        "theme": "Battle Reference",
        "bar": "A-M-I-T-Y, trust me, broski, yeah, you’re not that guy.",
        "explanation": "A self-spelling intro that turns into a direct status check on DBC."
      },
      {
        "performer": "DBC",
        "theme": "Tech Wordplay",
        "bar": "Cheat this shit like my data. If I’m honest, clear his storage.",
        "explanation": "DBC uses phone-and-data imagery as a threat, turning deletion into a battle bar."
      },
      {
        "performer": "DBC",
        "theme": "Energy Line",
        "bar": "Pack-a-dee, pack-a-dee, pack.",
        "explanation": "More rhythmic than punchline-driven, this line shows the energy that the judges felt still needed sharper direction."
      },
      {
        "performer": "DBC",
        "theme": "Prop Moment",
        "bar": "I brought the KFC bag toward him, warned him to be careful, then didn’t really do anything with it.",
        "explanation": "The moment was memorable, but because there was no punchline or reveal, it landed as a distraction rather than a payoff."
      }
    ],
    "oddMoments": [
      "Joey Clipstar even said he found the battle boring overall, although he still gave the win to Amity.",
      "The main criticism of DBC was that he was 'spitting bars' without really saying enough that landed specifically on Amity.",
      "The KFC bag moment became the strangest part of the battle because it never resolved into a clear reveal.",
      "The judges criticised the amount of generic gun talk, saying it had started to become boring.",
      "This battle showed the difference between writing bars and writing battle bars: DBC had bars, but Amity had more material aimed at the person standing across from him."
    ]
  },
  {
    "id": "pg-s03-2021-11-03-kmarh-vs-ft",
    "slug": "kmarh-vs-ft",
    "mc1": "kmarh",
    "mc2": "ft",
    "winner": "kmarh",
    "title": "KMARH vs F.T",
    "date": "03-11-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=EYqYDM3ZC64",
    "views": "36k",
    "customEp": "3x03",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 5,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "K Marh, also referred to as KMR in the judging section, defeated FT in a close Group B battle, taking the decision 2-1. It was one of the more competitive clashes of Season 3, with FT opening strongly and KMR growing into the battle until his late momentum edged him over the line.",
    "performanceAnalysis": [
      {
        "performer": "K Marh / KMR",
        "overview": "KMR built gradually rather than exploding out of the gate. His writing had more depth and rhythm from the start, and his ability to recover after FT’s pressure became the decisive factor as the battle wore on.",
        "lyricalThemes": "Beat comfort, layered writing, comeback energy, technical flow, and resilience.",
        "keyTechnicalHighlights": [
          {
            "title": "Rap Ability",
            "description": "KMR sounded more natural on the beat and more comfortable rhythmically."
          },
          {
            "title": "Layered Writing",
            "description": "His material had denser phrasing, darker imagery, and more complex rhyme patterns."
          },
          {
            "title": "Resilience",
            "description": "He kept answering back every time FT landed a strong punch."
          }
        ]
      },
      {
        "performer": "FT",
        "overview": "FT came with strong presence and immediate disrespect. His opening round was punch-heavy and direct, but his energy dipped in the second, and KMR’s comeback in the third made the overall battle harder to score in FT’s favour.",
        "lyricalThemes": "Direct disrespect, choke angles, shock-value threats, and crowd-readable punches.",
        "keyTechnicalHighlights": [
          {
            "title": "Strong Opening Round",
            "description": "FT began with confidence, energy, and conviction."
          },
          {
            "title": "Direct Punching",
            "description": "His writing was less polished musically, but more immediate in a battle setting."
          },
          {
            "title": "Shock Value",
            "description": "His material leaned hard on disrespect and provocative imagery to control the room."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "FT",
        "theme": "Choke Angle",
        "bar": "Saw you on YouTube forgetting your bars.",
        "explanation": "FT attacks KMR’s preparation by claiming he has seen him choke on footage before."
      },
      {
        "performer": "FT",
        "theme": "Wordplay",
        "bar": "You got no drive like a broken car.",
        "explanation": "A simple but clean bar that turns car trouble into a lack of momentum or ambition."
      },
      {
        "performer": "FT",
        "theme": "Pop Culture",
        "bar": "You’re not a bad guy, this Mankind Mick Foley.",
        "explanation": "FT uses wrestling history to suggest KMR’s bad-guy image is more costume than reality."
      },
      {
        "performer": "K Marh / KMR",
        "theme": "Battle Talk",
        "bar": "I’m not going to do the chatty thing. That’s your main thing.",
        "explanation": "KMR attacks FT’s talk-heavy style and sets up the contrast between chatter and technical writing."
      },
      {
        "performer": "K Marh / KMR",
        "theme": "Tech Reference",
        "bar": "Hey Siri, you talk to the machine.",
        "explanation": "A modern tech bar that turns conversation into a threat setup."
      },
      {
        "performer": "K Marh / KMR",
        "theme": "Precision",
        "bar": "I’m too precise with aim. I’m a live grenade.",
        "explanation": "KMR mixes accuracy with destructive force to close on a strong battle-rap image."
      }
    ],
    "oddMoments": [
      "The host forgot to introduce the judges before the battle, which became a funny production-side moment after the clash.",
      "FT apparently had a name change or technical issue with his name, but the host continued calling him FT.",
      "The battle was described by LV as possibly the best battle so far at that point in the season.",
      "The judges did not fully agree on what mattered most: some valued KMR’s rap ability, while Tiny Boost gave FT credit for having more battle punches.",
      "KMR was seen as the better rapper musically, while FT was seen as more punch-heavy in the clash format.",
      "FT’s opening round was strong enough to put KMR under pressure early.",
      "KMR’s main winning quality was his bounce-back. He did not just survive the attacks; he returned fire every round.",
      "The battle came down to preference: polished rapper versus direct puncher. The judges leaned 2-1 toward KMR.",
      "The “mum” angle got pushed further than expected, with LV even saying he thought FT might avoid it but then “blew it up.”",
      "This was a proper close one. Not a robbery, not a bodybag — more like two people fighting over the aux cord while the room quietly decides who has the better trauma response."
    ]
  },
  {
    "id": "pg-s03-2021-10-27-skamz-vs-junie",
    "slug": "skamz-vs-junie",
    "mc1": "skamz",
    "mc2": "junie",
    "winner": "skamz",
    "title": "SKAMZ vs JUNIE",
    "date": "27-10-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=rrYfCgsrc7w",
    "views": "25k",
    "customEp": "3x02a",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 3,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "Skamz defeated Junie by clean sweep in this Group D battle, taking the full three points. The judges felt Skamz was more prepared, more direct, and more battle-ready, while Junie’s material was looser, less focused, and not as clearly aimed at his opponent.",
    "performanceAnalysis": [
      {
        "performer": "Skamz",
        "overview": "Skamz came in with a clear battle plan. He attacked Junie’s lack of released music, questioned his experience, and kept returning to the idea that Junie was not ready for a judged clash.",
        "lyricalThemes": "Preparation, name flips, opponent-specific attacks, and direct battle pressure.",
        "keyTechnicalHighlights": [
          {
            "title": "Preparation Angle",
            "description": "He repeatedly framed Junie as underprepared and inexperienced, which gave the round immediate context."
          },
          {
            "title": "Clarity and Directness",
            "description": "His bars were easy to follow and always aimed squarely at Junie."
          },
          {
            "title": "Cadence and Control",
            "description": "He controlled the tone from the start and kept the performance pointed."
          }
        ]
      },
      {
        "performer": "Junie",
        "overview": "Junie came with a looser, playful flow and a handful of pop-culture and commercial references, but his material often felt generic and not battle-specific enough to trouble Skamz.",
        "lyricalThemes": "Pop culture, fast-flow rhymes, commercial references, and confidence-based delivery.",
        "keyTechnicalHighlights": [
          {
            "title": "Playful Flow",
            "description": "He tried to bring charisma and bounce, even when the writing itself was not as direct."
          },
          {
            "title": "Reference Density",
            "description": "His rounds included Inspector Gadget, The Flash, DPD, BTC, PPV, and Muhammad Ali references."
          },
          {
            "title": "Energy Attempts",
            "description": "He had moments of confidence, but the judges felt the nerves showed."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Skamz",
        "theme": "Preparation Angle",
        "bar": "Doing research on this prick was easy, cause he didn’t release no tracks.",
        "explanation": "Skamz turns Junie’s lack of released music into a direct attack, making him seem untested and underprepared."
      },
      {
        "performer": "Skamz",
        "theme": "Cold Disrespect",
        "bar": "My bro, please, keep it like that.",
        "explanation": "A simple follow-up that makes the insult colder by implying Junie’s silence is preferable."
      },
      {
        "performer": "Skamz",
        "theme": "Name Flip",
        "bar": "You snooze, you lose.",
        "explanation": "Skamz uses the phrase to suggest Junie was asleep at the wheel and lost because he was not ready."
      },
      {
        "performer": "Skamz",
        "theme": "Name Flip",
        "bar": "The month of June is the month Junie got put in my zoo.",
        "explanation": "A seasonal name-flip that personalises the attack and ties Junie’s name to the month June."
      },
      {
        "performer": "Junie",
        "theme": "Pop Culture",
        "bar": "You can inspect this gadget.",
        "explanation": "A reference to Inspector Gadget that Junie uses as a playful threat."
      },
      {
        "performer": "Junie",
        "theme": "Commercial Wordplay",
        "bar": "Now you owe me, send it to my BTC.",
        "explanation": "BTC becomes a modern money reference, turning the line into a crypto-flavoured payment demand."
      }
    ],
    "oddMoments": [
      "The judges were very clear that Skamz won comfortably.",
      "Junie’s biggest issue was not a total lack of bars, but that too much of his material did not feel aimed directly at Skamz.",
      "Skamz’s repeated 'you have no music' angle worked because it was easy for the room to understand.",
      "Junie looked like he had ideas, but the nerves and lack of battle structure hurt him."
    ],
    "postBattleContext": "The battle positioned Skamz as a stronger contender in the group and gave him an early reputation as someone to watch."
  },
  {
    "id": "pg-s03-2021-10-27-icuredamsterdam-vs-f-don",
    "slug": "icuredamsterdam-vs-f-don",
    "mc1": "icuredamsterdam",
    "mc2": "f-don",
    "winner": "f-don",
    "title": "ICUREDAMSTERDAM vs F-DON",
    "date": "27-10-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=rrYfCgsrc7w",
    "views": "42k",
    "customEp": "3x02b",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 4,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "F-Don defeated I Cured Amsterdam in the second Group D battle after the judges unanimously favoured him. The clash centred on style contrast: I Cured Amsterdam brought a strange masked character performance, while F-Don delivered clearer flow, better beat control, and more judge-friendly directness.",
    "performanceAnalysis": [
      {
        "performer": "I Cured Amsterdam",
        "overview": "I Cured Amsterdam was the wildcard. The mask created immediate intrigue and his writing leaned into surreal imagery, crude humour, wrestling references, and oddball character work, but the performance felt scattered and difficult to follow.",
        "lyricalThemes": "Masked character work, appearance insults, surreal comparisons, and wrestling references.",
        "keyTechnicalHighlights": [
          {
            "title": "Character Work",
            "description": "The mask gave him an instant visual identity and made him stand out from a standard battler."
          },
          {
            "title": "Surreal Imagery",
            "description": "His lines used strange, off-beat comparisons that kept the room guessing."
          },
          {
            "title": "Risk Taking",
            "description": "He clearly wasn’t trying to be generic, even if the experiment did not fully land."
          }
        ]
      },
      {
        "performer": "F-Don",
        "overview": "F-Don looked comfortable and experienced. He understood the format, used the mask as a repeated angle, and delivered clear, direct punches with stronger beat control and more confidence.",
        "lyricalThemes": "Mask attacks, experience, direct insults, beat riding, and crowd-readable punchlines.",
        "keyTechnicalHighlights": [
          {
            "title": "Mask Angle",
            "description": "He turned the mask into an insecurity angle rather than letting it become intimidating."
          },
          {
            "title": "Beat Control",
            "description": "F-Don rode the instrumental more cleanly and sounded more in command."
          },
          {
            "title": "Directness",
            "description": "His punches were easier to understand and score in a live judged setting."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "F-Don",
        "theme": "Experience Angle",
        "bar": "First things first, I ain’t no rookie.",
        "explanation": "F-Don immediately signals he has done this before, which fits the judges’ sense that he was more battle-ready."
      },
      {
        "performer": "F-Don",
        "theme": "Mask Angle",
        "bar": "You came wearing a mask cause you don’t like the look of your own face.",
        "explanation": "He strips the mystery from the mask and reframes it as insecurity."
      },
      {
        "performer": "F-Don",
        "theme": "UK Reference",
        "bar": "Thorpe Park, Alton Towers, the only time he’s been on a ride.",
        "explanation": "F-Don flips street slang about riding out into literal amusement park rides, making the punch easy to catch."
      },
      {
        "performer": "F-Don",
        "theme": "Pop Culture",
        "bar": "Call me Scorpion because I’m on fire and that’s a flawless victory.",
        "explanation": "A Mortal Kombat reference that lets him claim a clean win while keeping the energy sharp."
      },
      {
        "performer": "I Cured Amsterdam",
        "theme": "Appearance Insult",
        "bar": "His face had a fight with a cheese grater.",
        "explanation": "A vivid, crude visual attack aimed straight at F-Don’s appearance."
      },
      {
        "performer": "I Cured Amsterdam",
        "theme": "Wrestling Reference",
        "bar": "All he said was woo like Ric Flair.",
        "explanation": "A wrestling-flavoured jab that turns Ric Flair’s signature shout into mockery."
      }
    ],
    "oddMoments": [
      "I Cured Amsterdam’s mask became one of the main talking points of the battle.",
      "The judges liked the uniqueness, but felt the execution was too scattered to win.",
      "Several judges expected something darker or drill-heavy from the mask look and got something more abstract instead.",
      "The battle became a good example of style versus function: unusual but uneven versus clear and effective. I Cured Amsterdam came away with intrigue, but the judges felt the idea still needed tightening before it could fully land in Pen Game."
    ]
  },
  {
    "id": "pg-s03-2021-10-27-skamz-vs-icuredamsterdam",
    "slug": "skamz-vs-icuredamsterdam",
    "mc1": "skamz",
    "mc2": "icuredamsterdam",
    "winner": "skamz",
    "title": "SKAMZ vs ICUREDAMSTERDAM",
    "date": "27-10-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=2xqTUyxbSxg",
    "views": null,
    "customEp": "3x06a",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 10,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "Skamz defeated I Cured Amsterdam by a clean sweep in this Group D battle. The judges felt Skamz was more consistent, more direct, and more battle-ready, while Amsterdam's originality still left an impression even though his rounds became scattered and hard to follow.",
    "performanceAnalysis": [
      {
        "performer": "Skamz",
        "overview": "Skamz looked prepared for the pressure of Group D and stayed direct throughout. He attacked Amsterdam's music, image, name, and freestyle history with clear structure and enough consistency to keep the judges locked in.",
        "lyricalThemes": "Research-based attacks, name flips, credibility checks, and steady battle structure.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Writing",
            "description": "Most of his material was aimed squarely at I Cured Amsterdam."
          },
          {
            "title": "Research Angles",
            "description": "He attacked Amsterdam's tracks, singing, freestyle clips, and awkward persona."
          },
          {
            "title": "Consistency",
            "description": "He kept landing clean punches instead of getting dragged into chaos."
          }
        ]
      },
      {
        "performer": "I Cured Amsterdam",
        "overview": "Amsterdam remained one of the most distinctive characters in Season 3, but this battle showed the same weakness as his previous appearance: the ideas were interesting, yet the structure was loose and hard to follow.",
        "lyricalThemes": "Surreal humour, off-centre imagery, freestyle energy, and image-based insults.",
        "keyTechnicalHighlights": [
          {
            "title": "Character Work",
            "description": "His unusual persona made him impossible to ignore."
          },
          {
            "title": "Left-Field Humour",
            "description": "He used strange comparisons and surreal insults to stay unpredictable."
          },
          {
            "title": "Research Attempts",
            "description": "He tried to turn Skamz's background, freestyle, and music into angles."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Skamz",
        "theme": "Threat Setup",
        "bar": "No point in wearing a vest that aims above necks.",
        "explanation": "Skamz says the protection is pointless because he is aiming above it."
      },
      {
        "performer": "Skamz",
        "theme": "Visual Threat",
        "bar": "Around his body, you see red like you're on TikTok watching silhouettes.",
        "explanation": "He turns the look of a TikTok silhouette clip into a violent image."
      },
      {
        "performer": "Skamz",
        "theme": "Name Flip",
        "bar": "He killed Amsterdam? That's lovely. My smoke cure a whole country.",
        "explanation": "Skamz flips Amsterdam's name and scales the impact up from one city to a whole country."
      },
      {
        "performer": "Skamz",
        "theme": "Image Attack",
        "bar": "Bruv, look at your boots. This guy looks like he works in Asda.",
        "explanation": "A simple appearance jab that makes Amsterdam look ordinary and unthreatening."
      },
      {
        "performer": "I Cured Amsterdam",
        "theme": "Sound Attack",
        "bar": "Your hardest bars freestyle was amazing. So good they made the beat louder than the vocals.",
        "explanation": "Amsterdam says Skamz's freestyle was so weak or poorly mixed that the beat overpowered him."
      },
      {
        "performer": "I Cured Amsterdam",
        "theme": "Numbers Angle",
        "bar": "You paid 150 and got 700 views in six months.",
        "explanation": "A value-for-money attack that suggests Skamz's results do not justify the spend."
      }
    ],
    "oddMoments": [
      "Group D felt tight enough that the host made it clear the result could matter for progression.",
      "One judge said Amsterdam felt like he was in a trance and could not follow what was happening.",
      "The host accidentally referred to it as 'I killed Amsterdam versus Scrams,' which added to the chaos.",
      "Skamz's consistency won the room even though Amsterdam remained memorable."
    ],
    "postBattleContext": "Skamz came out of the battle looking like one of the strongest and most prepared names in Group D. Amsterdam was still unforgettable, but the judges wanted more control and structure before they could fully trust him in a judged setting."
  },
  {
    "id": "pg-s03-2021-10-24-dbc-vs-ren-dmc",
    "slug": "dbc-vs-ren-dmc",
    "mc1": "dbc",
    "mc2": "ren-dmc",
    "winner": "ren-dmc",
    "title": "DBC vs REN DMC",
    "date": "24-10-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=kL9ZeJxOqLE",
    "views": "32k",
    "customEp": "3x01b",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 2,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "Ren DMC defeated DBC in the second Group A battle with a clean sweep. Ren was more direct, funnier, and easier to remember, especially in the first round. DBC had moments of potential and improved in the final round, but poor clarity in the first two rounds made it hard for the judges to reward his material.",
    "performanceAnalysis": [
      {
        "performer": "Ren DMC",
        "overview": "Ren built his win around comedy, directness, and crowd control. He used a strong class-based angle, made DBC look sheltered, and landed a memorable producer-tag attack that hit the battle as an artist-focused diss.",
        "lyricalThemes": "Class attack, authenticity, music industry jokes, and direct character work.",
        "keyTechnicalHighlights": [
          {
            "title": "Comedy Angles",
            "description": "Ren used humour to make DBC look less credible without losing the battle's edge."
          },
          {
            "title": "Class-Based Attack",
            "description": "He framed DBC as too comfortable and privileged to convincingly sell a street persona."
          },
          {
            "title": "Artist-Specific Punches",
            "description": "The 'Purchase your tracks today' angle made the round feel specific to DBC as a musician."
          }
        ]
      },
      {
        "performer": "DBC",
        "overview": "DBC came with a darker, more aggressive tone and plenty of threat-based imagery, but his first two rounds were badly affected by volume and clarity issues. When he finally projected more in the third, the judges could hear his potential more clearly.",
        "lyricalThemes": "Violence, intimidation, pop-culture references, and darker drill energy.",
        "keyTechnicalHighlights": [
          {
            "title": "Aggressive Delivery",
            "description": "His final round showed the kind of force that could work in this format if present from the start."
          },
          {
            "title": "Pop-Culture References",
            "description": "He worked in references like Tekken, Eddie Gordo, Tupac, Biggie, Michael Jackson, Kobe, and Pop Smoke."
          },
          {
            "title": "Threat Imagery",
            "description": "His writing leaned on weapon language and violent framing to try to create danger."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Ren DMC",
        "theme": "Comedy Angle",
        "bar": "You remind me of Big Shaq, if he had bad plaques.",
        "explanation": "Ren compares DBC to Big Shaq to mock his image, while 'bad plaques' keeps the joke tied to music and credibility."
      },
      {
        "performer": "Ren DMC",
        "theme": "Class Angle",
        "bar": "Your dad's a doctor, your mum's a banker and they earn more than me.",
        "explanation": "This line attacks DBC's background, suggesting his street persona is not believable because he comes from a comfortable home."
      },
      {
        "performer": "Ren DMC",
        "theme": "Artist Attack",
        "bar": "I went on Spotify, I heard your music and I was mad amazed... then I heard 'Purchase your tracks today.'",
        "explanation": "Ren turns the producer tag into a direct criticism of DBC's music and how it may have been made or released."
      },
      {
        "performer": "DBC",
        "theme": "Tech Scheme",
        "bar": "I am the king in law, like Tekken, but move around like Eddie Gordo.",
        "explanation": "DBC uses Tekken and Eddie Gordo to frame himself as both powerful and unpredictable."
      },
      {
        "performer": "DBC",
        "theme": "Dead Icons",
        "bar": "Tell Tupac, Big, MJ, Kobe, Pop Smoke that I said hello.",
        "explanation": "This is a dramatic afterlife threat, listing famous icons as if Ren is about to join them."
      },
      {
        "performer": "DBC",
        "theme": "Funeral Angle",
        "bar": "Moment of silence for my man.",
        "explanation": "A simple but effective pause-and-punish line that treats the opponent like he has already been beaten."
      }
    ],
    "oddMoments": [
      "The main problem in the battle was DBC's volume. Multiple judges said they could not hear enough of what he was saying in the first two rounds.",
      "Ren's first round effectively won him the battle because it was the clearest, funniest, and most direct stretch of the clash.",
      "DBC improved in the final round, but the earlier delivery issues had already done most of the damage.",
      "The battle showed how much Pen Game rewards clarity, directness, and crowd readability."
    ],
    "postBattleContext": "Ren's win was decisive, but not because DBC had nothing to offer. The judges clearly saw potential in his darker style; the problem was that the performance needed more projection and clarity from the start. Ren simply understood the room better and made his material land."
  },
  {
    "id": "pg-s03-2021-09-12-kmarh-vs-animal",
    "slug": "kmarh-vs-animal",
    "mc1": "kmarh",
    "mc2": "animal",
    "winner": "kmarh",
    "title": "KMARH vs ANIMAL",
    "date": "12-09-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=XvtydpNkz7E",
    "views": "19k",
    "customEp": "3x07a",
    "subGroup": "Launch Battles",
    "seasonOrder": 12,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "K-Marh defeated Animal in this Group B battle, helping confirm K-Marh and FT as the two battlers progressing out of the group. Animal brought his usual energetic, grime-influenced chaos, but K-Marh was cleaner, more complete, and more battle-ready.",
    "performanceAnalysis": [
      {
        "performer": "K-Marh",
        "overview": "K-Marh delivered the more polished performance. He stayed on track, finished his rounds, and gave the judges enough structure to score him clearly above Animal, even if they still wanted more direct opponent-specific writing.",
        "lyricalThemes": "Coldness, smoke, blades, cards, food, pressure, and education-based metaphors.",
        "keyTechnicalHighlights": [
          {
            "title": "More Complete Rounds",
            "description": "K-Marh finished his material and gave the judges a full performance to compare."
          },
          {
            "title": "Sharper Imagery",
            "description": "He built his rounds around colder, cleaner visuals than Animal's chaos."
          },
          {
            "title": "Battle Discipline",
            "description": "He stayed closer to the format and avoided the major collapse that hit his opponent."
          }
        ]
      },
      {
        "performer": "Animal",
        "overview": "Animal brought a lively grime-style performance with lots of rhythm, repetition, and sudden switches. The problem was that the material often lacked directness, and he choked badly in the third round.",
        "lyricalThemes": "Grime flow, self-branding, repetition, chaos, and performance energy.",
        "keyTechnicalHighlights": [
          {
            "title": "Grime-Style Flow",
            "description": "His delivery had movement and attitude, which gave the battle some life."
          },
          {
            "title": "Distinctive Persona",
            "description": "He leaned into the 'animalistic' identity throughout."
          },
          {
            "title": "Presence",
            "description": "The judges acknowledged his energy even though the battle itself did not reward it."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "K-Marh",
        "theme": "Cold Metaphor",
        "bar": "Stay cold, you know, like drinks in the cooler.",
        "explanation": "A simple coldness bar that keeps K-Marh's tone calm and controlled."
      },
      {
        "performer": "K-Marh",
        "theme": "Weapon / Game Scheme",
        "bar": "Play your card, burn your hand, you ain't holding a heater.",
        "explanation": "K-Marh mixes card-game language with weapon slang to create a layered threat."
      },
      {
        "performer": "K-Marh",
        "theme": "Credibility",
        "bar": "Only seen smoke from the shisha.",
        "explanation": "He says Animal only knows harmless smoke, not real pressure."
      },
      {
        "performer": "Animal",
        "theme": "Identity",
        "bar": "Bad man with bad manners.",
        "explanation": "Animal uses a blunt self-branding line to set his tone and posture."
      },
      {
        "performer": "Animal",
        "theme": "Pop Culture",
        "bar": "Just like Stormzy how I come through, then man said shut up.",
        "explanation": "Animal connects his entrance to Stormzy's 'Shut Up' era to build grime credibility."
      }
    ],
    "oddMoments": [
      "K-Marh was supposed to battle T13 first, but T13 did not appear, so K-Marh was already through on points before this clash.",
      "Animal choked in the third round, which heavily affected the result.",
      "The judges criticised both battlers for not tailoring enough material directly to the opponent.",
      "One judge said the battle felt more like sci-fi than battle rap because of the odd imagery."
    ],
    "postBattleContext": "The result confirmed K-Marh and FT as the likely quarter-finalists from Group B. The judges still wanted more opponent-specific venom from both battlers, but K-Marh had enough structure to win clearly."
  },
  {
    "id": "pg-s03-2021-09-12-junie-vs-icuredamsterdam",
    "slug": "junie-vs-icuredamsterdam",
    "mc1": "junie",
    "mc2": "icuredamsterdam",
    "winner": "icuredamsterdam",
    "title": "JUNIE vs ICUREDAMSTERDAM",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=bF7qJA9eiH0",
    "views": "11k",
    "date": "12-09-2021",
    "customEp": "3x09a",
    "subGroup": "Launch Battles",
    "seasonOrder": 16,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "iCured Amsterdam defeated Junie by a clean sweep in the second Group D battle. The judges felt Junie struggled badly with projection, confidence, and battle-specific writing, while iCured Amsterdam produced one of his stronger performances of the season.",
    "performanceAnalysis": [
      {
        "performer": "iCured Amsterdam",
        "overview": "iCured Amsterdam came across more effective here than in some previous battles. His character was still chaotic, masked, and unusual, but he seemed more focused against Junie. He attacked Junie's name, image, lack of online presence, performance style, and delivery.",
        "lyricalThemes": "Name flips, absence of online presence, creative imagery, and performance-driven chaos.",
        "keyTechnicalHighlights": [
          {
            "title": "More Direct Than Usual",
            "description": "Amsterdam attacked Junie more clearly than in earlier battles."
          },
          {
            "title": "Animated Performance",
            "description": "He used movement and physicality to create memorable moments."
          },
          {
            "title": "Improved Impact",
            "description": "The judges felt he pulled something out of the hat compared with previous performances."
          }
        ]
      },
      {
        "performer": "Junie",
        "overview": "Junie struggled again. He had some bars and ideas, but they did not land with enough force. His delivery was too quiet, his presence was uncertain, and his writing did not feel tailored enough to iCured Amsterdam.",
        "lyricalThemes": "Self-confidence, basic insults, and loose verse-like material.",
        "keyTechnicalHighlights": [
          {
            "title": "Some Lyrical Ideas",
            "description": "Junie had lines around soap, drilling on beats, flow, and online presence."
          },
          {
            "title": "Delivery Weakness",
            "description": "His projection was too soft and lacked aggression."
          },
          {
            "title": "Stage Nerves",
            "description": "He admitted going blank under the lights."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "iCured Amsterdam",
        "theme": "Calendar Flip",
        "bar": "Whatever you do, Junie ain't next after me. It just skips to July.",
        "explanation": "A clean name flip using the June/July calendar sequence."
      },
      {
        "performer": "iCured Amsterdam",
        "theme": "Street Fighter",
        "bar": "Your girl got the Hadouken. She got the Shoryuken.",
        "explanation": "He uses Street Fighter special moves as exaggerated attack imagery."
      },
      {
        "performer": "iCured Amsterdam",
        "theme": "Research Angle",
        "bar": "On his Instagram, there's nothing, no presence online found.",
        "explanation": "A direct hit on Junie's online footprint and visibility."
      },
      {
        "performer": "iCured Amsterdam",
        "theme": "Mythology",
        "bar": "To take Troy, I ain't got to hide in a Trojan horse.",
        "explanation": "He says he can win openly without deception."
      },
      {
        "performer": "Junie",
        "theme": "Wordplay",
        "bar": "You can't rap for your name. It's a wrap for your name.",
        "explanation": "A clean sound-based bar that tries to finish Amsterdam's name and reputation."
      },
      {
        "performer": "Junie",
        "theme": "Hygiene Insult",
        "bar": "Do you use soap when you're washing your face?",
        "explanation": "A simple appearance-based insult aimed at Amsterdam."
      }
    ],
    "oddMoments": [
      "Junie admitted he was going blank on stage.",
      "Joey Clipstar directly questioned whether Junie had worked enough for the battle.",
      "The judges felt Junie's material sounded like verses rather than battle rounds.",
      "Nash joked that Amsterdam's energy might have caused the lights or board to fall.",
      "The host kept joking about the name, calling him 'I Killed Amsterdam' at points."
    ],
    "postBattleContext": "Amsterdam weaponised the weirdness and made it work more effectively than before. Junie got swallowed by the lights and left the stage looking like the confidence had been repossessed."
  },
  {
    "id": "pg-s03-2021-09-12-skamz-vs-f-don",
    "slug": "skamz-vs-f-don-2",
    "mc1": "skamz",
    "mc2": "f-don",
    "winner": "skamz",
    "title": "SKAMZ vs F-DON",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=2xqTUyxbSxg",
    "views": null,
    "date": "12-09-2021",
    "customEp": "3x09b",
    "subGroup": "Launch Battles",
    "seasonOrder": 17,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "Skamz defeated F-Don by a clean sweep in a strong Group D battle. It was one of the more competitive clashes in the group, with both battlers showing clear delivery, confidence, and battle awareness. The judges praised both sides, but Skamz edged it by being cleaner, sharper, and more consistent on the day.",
    "performanceAnalysis": [
      {
        "performer": "Skamz",
        "overview": "Skamz came into the battle looking confident and prepared. His material was tailored to F-Don, attacking his music, past appearances, comeback, image, and status. He also used humour well without losing the battle focus.",
        "lyricalThemes": "Comeback mocking, image attacks, music criticism, and direct opponent focus.",
        "keyTechnicalHighlights": [
          {
            "title": "Opponent-Specific Writing",
            "description": "Skamz repeatedly attacked F-Don's history, music, and return to Pen Game."
          },
          {
            "title": "Mockery as Pressure",
            "description": "He used humour to make F-Don look washed or outdated."
          },
          {
            "title": "Consistency",
            "description": "He kept landing across the battle instead of relying on one big moment."
          }
        ]
      },
      {
        "performer": "F-Don",
        "overview": "F-Don was still strong. He had clarity, rhythm, and experience, and the judges acknowledged that both battlers had good qualities. However, the judges felt this was not his sharpest battle and that Skamz brought more impact and looked more dangerous in the room.",
        "lyricalThemes": "Clear delivery, tactical angle choice, Naruto references, and punchline basics.",
        "keyTechnicalHighlights": [
          {
            "title": "Clarity",
            "description": "F-Don's delivery remained clear and controlled."
          },
          {
            "title": "Naruto Angle",
            "description": "He chose a beat and theme connected to Skamz's interests."
          },
          {
            "title": "Main Weakness",
            "description": "The judges felt he did not bring his strongest level this time."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Skamz",
        "theme": "Identity",
        "bar": "S-K-A-M-Z, too wicked.",
        "explanation": "A simple branding line that spells his name and sets his tone."
      },
      {
        "performer": "Skamz",
        "theme": "Dominance",
        "bar": "I must be a king, because your mum bowed down for this ruler.",
        "explanation": "Wordplay around king and ruler turns into a crude dominance punch."
      },
      {
        "performer": "Skamz",
        "theme": "Comeback Angle",
        "bar": "Why'd you bring back this gem? Oh, I get it, he came back around to get beat again.",
        "explanation": "Skamz attacks F-Don's return to the competition and frames him as someone coming back only to lose again."
      },
      {
        "performer": "Skamz",
        "theme": "Petty Pressure",
        "bar": "I clicked on all of your videos and gave it one dislike.",
        "explanation": "A modern artist attack that makes the criticism feel specific and personal."
      },
      {
        "performer": "F-Don",
        "theme": "Naruto Angle",
        "bar": "You're a Naruto fan, so I'm gonna kill you on your home ground.",
        "explanation": "F-Don turns Skamz's interests into a tactical battleground."
      },
      {
        "performer": "F-Don",
        "theme": "Technique",
        "bar": "Killer MC Jutsu.",
        "explanation": "A Naruto-themed bar that turns his battle style into a finishing move."
      }
    ],
    "oddMoments": [
      "The judges agreed this was a strong battle and one viewers would enjoy.",
      "Despite the clean sweep, the judging comments made it sound closer than the score.",
      "One judge said this was not one of F-Don's strongest battles.",
      "Someone in the background kept shouting 'facts', which became a running distraction."
    ],
    "postBattleContext": "F-Don had the experience, but Skamz had the sharper hunger. The win strengthened the sense that Skamz was one of the major names to watch from Group D."
  },
  {
    "id": "pg-s03-2021-09-12-junie-vs-f-don",
    "slug": "junie-vs-f-don",
    "mc1": "junie",
    "mc2": "f-don",
    "winner": "f-don",
    "title": "JUNIE vs F-DON",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=2xqTUyxbSxg",
    "views": "31k",
    "date": "12-09-2021",
    "customEp": "3x06b",
    "subGroup": "Launch Battles",
    "seasonOrder": 11,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "F-Don defeated Junie by a clean sweep in the second Group D battle. The judges felt Junie struggled with confidence, projection, and structure, while F-Don looked more prepared, more composed, and far more comfortable in the battle environment.",
    "performanceAnalysis": [
      {
        "performer": "F-Don",
        "overview": "F-Don looked like the experienced battler from the start. He kept his material clear and direct, stayed on beat, and used his confidence to frame Junie as someone who simply was not ready for Pen Game.",
        "lyricalThemes": "Levels, confidence, preparation, and clean punch delivery.",
        "keyTechnicalHighlights": [
          {
            "title": "Stage Control",
            "description": "He looked calm and in command throughout the battle."
          },
          {
            "title": "Clear Punchlines",
            "description": "His material was easy for the judges to hear and score."
          },
          {
            "title": "Confidence Angle",
            "description": "Offering Junie money if he won added psychological pressure."
          }
        ]
      },
      {
        "performer": "Junie",
        "overview": "Junie struggled badly. His performance felt timid, underprepared, and unfocused, and the judges felt he needed to go back and build more confidence, stage presence, and battle character before returning.",
        "lyricalThemes": "Self-belief, ambition, but weak delivery and limited battle structure.",
        "keyTechnicalHighlights": [
          {
            "title": "Attempted Energy",
            "description": "He tried to bring tempo, but it did not hold up under pressure."
          },
          {
            "title": "General Bars",
            "description": "A lot of his material sounded like loose rap lines rather than direct battle writing."
          },
          {
            "title": "Stage Presence",
            "description": "The judges repeatedly pointed to confidence and projection as the key problems."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "F-Don",
        "theme": "Title Angle",
        "bar": "I came for the title. Should've gave me the crown and the rival.",
        "explanation": "F-Don frames himself as a serious contender rather than just another participant."
      },
      {
        "performer": "F-Don",
        "theme": "Impact Comparison",
        "bar": "My bars hit like I threw bricks. Yours come like you threw pebbles.",
        "explanation": "A clean force comparison that makes Junie's writing sound weak by contrast."
      },
      {
        "performer": "F-Don",
        "theme": "Pressure",
        "bar": "Talk is cheap, that's why this brother runs his mouth.",
        "explanation": "F-Don attacks Junie's reliability and says his talking does not add up to action."
      },
      {
        "performer": "Junie",
        "theme": "Self-Positioning",
        "bar": "Amazon Prime.",
        "explanation": "Junie uses the delivery service as a speed reference, but the line does not land as a full battle punch."
      },
      {
        "performer": "Junie",
        "theme": "Money Angle",
        "bar": "Money on my mind like I need more fans.",
        "explanation": "This is more of a general ambition bar than a direct attack on F-Don."
      }
    ],
    "oddMoments": [
      "F-Don offered Junie one thousand pounds if Junie won the battle.",
      "The judges felt Junie was not ready for the platform.",
      "The room seemed to be rooting for Junie to recover, but the recovery never really came.",
      "The judges gave Junie advice about character, aggression, and confidence rather than just burying him."
    ],
    "postBattleContext": "F-Don won comfortably without needing a huge performance, while Junie was told to go back and build his battle character. The battle made it clear that Pen Game rewards more than the ability to rap - it rewards projection, structure, and the confidence to use them."
  },
  {
    "id": "pg-s03-2021-09-12-ft-vs-bmf-alz",
    "slug": "ft-vs-bmf-alz",
    "mc1": "ft",
    "mc2": "bmf-alz",
    "winner": "ft",
    "title": "F.T vs BMF ALZ",
    "theme": "pengame",
    "season": 3,
    "views": "13k",
    "date": "12-09-2021",
    "videoUrl": "https://www.youtube.com/watch?v=3NHxEKvOm8U",
    "customEp": "3x10b",
    "subGroup": "Launch Battles",
    "seasonOrder": 19,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "FT defeated BMF Alz in the first quarter-final battle and advanced to the semi-finals. The judges felt FT was clearer, more entertaining, and more effective overall. Alz had presence, size, and some strong ideas, but the mask covering his mouth badly affected his delivery and made the bars harder to judge.",
    "performanceAnalysis": [
      {
        "performer": "FT",
        "overview": "FT showed why he made the quarter-finals. He was confident, direct, and comfortable using the crowd. His style mixed humour, disrespect, freestyle moments, and opponent-specific angles, and even when he stumbled he recovered well enough to keep the room on his side.",
        "lyricalThemes": "Previous choke angle, crowd control, comedy, opponent-specific insults, and performance recovery.",
        "keyTechnicalHighlights": [
          {
            "title": "Previous Battle Angle",
            "description": "FT repeatedly used Alz's earlier choke history to make the round feel personal and timely."
          },
          {
            "title": "Comedy and Crowd Control",
            "description": "He used humour and timing to keep the room engaged and reacting."
          },
          {
            "title": "Freestyle Recovery",
            "description": "FT freestyled parts of his material and turned the room back in his favour after stumbling."
          }
        ]
      },
      {
        "performer": "BMF Alz",
        "overview": "BMF Alz had physical presence and some strong ideas, but the mask blocking his mouth badly affected his delivery. The judges could see the threat and hear the intent in places, but the sound issue made it hard to reward him as fully as FT.",
        "lyricalThemes": "Aggression, wheelchair and disability wordplay, sports references, authority bars, and threat imagery.",
        "keyTechnicalHighlights": [
          {
            "title": "Physical Presence",
            "description": "Alz looked like a threat and had the size and energy to stand out on stage."
          },
          {
            "title": "Wordplay Attempts",
            "description": "He worked in wheelchair, Federer, J.Lo, vegan food, and Hadouken references."
          },
          {
            "title": "Main Weakness",
            "description": "The mask blocked too much of his delivery, making his bars harder to hear and score."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "FT",
        "theme": "Choke Angle",
        "bar": "We saw you get put in the Chokey.",
        "explanation": "FT uses the Matilda punishment cupboard as a double meaning for Alz choking in a previous battle."
      },
      {
        "performer": "FT",
        "theme": "Pop Culture",
        "bar": "You're getting tortured all for the principal, like Miss Trunchbull.",
        "explanation": "This extends the Matilda scheme and uses Miss Trunchbull to keep the pressure on Alz."
      },
      {
        "performer": "FT",
        "theme": "Movement Diss",
        "bar": "You'll never have disability, but you move like Stephen Hawking.",
        "explanation": "A harsh movement-based diss that references Stephen Hawking and Alz's stage movement."
      },
      {
        "performer": "BMF Alz",
        "theme": "Recovery Threat",
        "bar": "Leave you paralysed in a wheelchair, but you can still get around.",
        "explanation": "Alz turns wheelchair wordplay into a threat and tries to keep the scheme moving."
      },
      {
        "performer": "BMF Alz",
        "theme": "Video Game",
        "bar": "Down, right, O and you got hit with a Hadouken.",
        "explanation": "A Street Fighter command sequence turned into an attack image."
      }
    ],
    "oddMoments": [
      "The judges repeatedly mentioned that BMF Alz's mask blocked his delivery.",
      "FT stumbled early but recovered enough to win clearly.",
      "The Matilda and Chokey scheme became one of FT's strongest recurring ideas.",
      "FT included freestyle moments that helped his entertainment value.",
      "BMF Alz had presence, but his bars were not always audible enough to score."
    ],
    "postBattleContext": "FT moved on to the semi-finals. The judges saw BMF Alz as a threat with enough presence to trouble people, but the mask issue was too costly in a quarter-final where clarity and impact mattered most."
  },
  {
    "id": "pg-s03-2021-09-12-dan-dannah-vs-ren-dmc",
    "slug": "dan-dannah-vs-ren-dmc",
    "mc1": "dan-dannah",
    "mc2": "ren-dmc",
    "winner": "ren-dmc",
    "title": "DAN DANNAH vs REN DMC",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=kL9ZeJxOqLE",
    "views": "45k",
    "date": "12-09-2021",
    "customEp": "3x05b",
    "subGroup": "Launch Battles",
    "seasonOrder": 9,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "Dan Dannah defeated Ren DMC in a close Group A battle after a lively back-and-forth. Ren had the funnier moments and strong wordplay, while Dan’s aggression, hunger, and battle intent better suited the Pen Game format. The judges were split on style, but Dan’s more serious approach ultimately edged it.",
    "performanceAnalysis": [
      {
        "performer": "Dan Dannah",
        "overview": "Dan came in serious, aggressive, and purpose-driven. He attacked Ren’s ability, image, family, and credibility while showing clear improvement from his earlier appearance.",
        "lyricalThemes": "Serious battle tone, direct attacks, improvement, and pressure-heavy performance.",
        "keyTechnicalHighlights": [
          {
            "title": "Serious Battle Tone",
            "description": "Dan framed the clash as a real fight rather than a comedy exchange."
          },
          {
            "title": "Direct Attacks",
            "description": "He went after Ren’s pen, image, and status with clarity."
          },
          {
            "title": "Improved Performance",
            "description": "The judges noted that he looked like a different person from his previous battle."
          }
        ]
      },
      {
        "performer": "Ren DMC",
        "overview": "Ren brought comedy, wordplay, and crowd-friendly insult writing. His material targeted Dan’s appearance, family, clothing, and music image, and his personality gave the battle life.",
        "lyricalThemes": "Comedy punches, personal angles, wordplay, and performance charisma.",
        "keyTechnicalHighlights": [
          {
            "title": "Comedy Punches",
            "description": "Ren used humour effectively to control reactions in the room."
          },
          {
            "title": "Personal Angles",
            "description": "He attacked Dan’s clothes, hair, family, and music image."
          },
          {
            "title": "Crowd Control",
            "description": "Ren’s off-the-cuff moments helped his rounds feel lively and unpredictable."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Dan Dannah",
        "theme": "Sleep Angle",
        "bar": "You could call this a lullaby.",
        "explanation": "Dan uses a sleep reference to suggest his bars are putting Ren to bed."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Status Contrast",
        "bar": "You only came for the clout. Me, I came for the bag.",
        "explanation": "He contrasts Ren chasing attention with himself chasing money and victory."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Pressure",
        "bar": "Your bars are straight trash, bin bag ting.",
        "explanation": "A simple, direct rubbish metaphor aimed at Ren’s writing."
      },
      {
        "performer": "Ren DMC",
        "theme": "Wordplay",
        "bar": "Pear pressure, have a word with your hairdresser.",
        "explanation": "Ren uses hair and pressure imagery to attack Dan’s look and hairstyle."
      },
      {
        "performer": "Ren DMC",
        "theme": "Clothing Angle",
        "bar": "You wore that top in your last four music vids.",
        "explanation": "A very specific visual angle that makes the insult feel researched and personal."
      },
      {
        "performer": "Ren DMC",
        "theme": "Pop Culture",
        "bar": "I give her the Willy Wonka, she love Anaconda like Nicki Minaj.",
        "explanation": "Ren folds two pop culture references into a crude, crowd-friendly punchline."
      }
    ],
    "oddMoments": [
      "Blacks initially wanted to call the battle a draw, showing how close it felt in the room.",
      "Ren DMC won over some judges with comedy and wordplay, while Dan won others with seriousness and aggression.",
      "Joey Clipstar said comedy gets crowd reaction, but Pen Game is about bars, so he leaned Dan.",
      "Ren made strong use of Dan’s clothes and hair as visible angles.",
      "This was a proper style clash: Ren was the entertainer, Dan was the attacker."
    ]
  },
  {
    "id": "pg-s03-2021-09-12-dan-dannah-vs-dbc",
    "slug": "dan-dannah-vs-dbc",
    "mc1": "dan-dannah",
    "mc2": "dbc",
    "winner": "dan-dannah",
    "title": "DAN DANNAH vs DBC",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=UUeIIKi0M68",
    "views": "18k",
    "date": "12-09-2021",
    "customEp": "3x08b",
    "subGroup": "Launch Battles",
    "seasonOrder": 15,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "Dan Dannah defeated DBC by a clean sweep in this Group A battle. The judges felt Dan was controlling the stage, improving in real time, and showing the kind of hunger and structure that the format rewards. DBC brought aggression and energy, but the performance still lacked convincing presence, variety, and direct battle shape.",
    "performanceAnalysis": [
      {
        "performer": "Dan Dannah",
        "overview": "Dan looked much sharper here. His delivery had authority, his writing was more opponent-focused, and he carried himself like the stronger battler from the start. The judges felt he was visibly growing into the competition.",
        "lyricalThemes": "Stage control, credibility attacks, name flips, status, and organised aggression.",
        "keyTechnicalHighlights": [
          {
            "title": "Stage Control",
            "description": "Dan looked comfortable and commanding throughout the clash."
          },
          {
            "title": "Direct Battle Writing",
            "description": "His bars were clearly aimed at DBC rather than sounding generic."
          },
          {
            "title": "Improved Presence",
            "description": "The judges repeatedly highlighted his growth and confidence."
          }
        ]
      },
      {
        "performer": "DBC",
        "overview": "DBC came with aggression, but the judges felt the material still needed more character and more reason behind it. A lot of the writing leaned on generic gun talk and shock-value threats without enough structure to land hard.",
        "lyricalThemes": "Violence, street imagery, threat writing, and performance risk.",
        "keyTechnicalHighlights": [
          {
            "title": "Aggression",
            "description": "DBC did try to apply pressure and bring force to the battle."
          },
          {
            "title": "Street Imagery",
            "description": "His material leaned heavily on guns, blocks, and violent framing."
          },
          {
            "title": "Recovery",
            "description": "He kept going after the mic drop, but the reset hurt his momentum."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Dan Dannah",
        "theme": "Titan Scheme",
        "bar": "The name's Dan, but all my G's call me Titan.",
        "explanation": "Dan uses a giant-mythology reference to make himself sound larger than life."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Window Threat",
        "bar": "You got a better chance beating a penthouse than surviving getting thrown out the window.",
        "explanation": "A height-based threat that makes DBC's odds sound impossible."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Name Attack",
        "bar": "DB, it don't stand for dope boy.",
        "explanation": "Dan attacks DBC's initials and says he does not match the street image implied by them."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Free Flow Scheme",
        "bar": "You think you're behind bars till you get caught on free flow.",
        "explanation": "This line flips prison language into rap language and creates a neat double meaning."
      },
      {
        "performer": "DBC",
        "theme": "Kitchen Scheme",
        "bar": "Swing my pen like Gordon Ramsay, Hell's Kitchen.",
        "explanation": "DBC mixes writing and cooking imagery, but the idea works better than the execution."
      },
      {
        "performer": "DBC",
        "theme": "Food Angle",
        "bar": "Treat man like Caribbean flavours, dish man like some rice and peas.",
        "explanation": "He uses food language to frame defeat and handling someone."
      }
    ],
    "oddMoments": [
      "DBC dropped the mic during the battle and had to reset.",
      "The judges felt Dan was bullying DBC on stage, but meant it as a positive sign of dominance.",
      "DBC was criticised again for overusing gun talk.",
      "Dan was praised for changing, improving, and looking like someone who wanted to win the competition."
    ],
    "postBattleContext": "Dan's clean sweep helped confirm him as one of the strongest names in Group A. The judging made it clear that raw aggression is not enough on Pen Game; presence, structure, and character matter just as much."
  },
  {
    "id": "pg-s03-2021-09-12-dan-dannah-vs-amity",
    "slug": "dan-dannah-vs-amity",
    "mc1": "dan-dannah",
    "mc2": "amity",
    "winner": "dan-dannah",
    "title": "DAN DANNAH vs AMITY",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=kL9ZeJxOqLE",
    "views": "28k",
    "date": "12-09-2021",
    "customEp": "3x01a",
    "subGroup": "Launch Battles",
    "seasonOrder": 1,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "Dan Dannah edged Amity 3-1 in the opening battle of Pen Game Season 3. Amity impressed early with aggression, drill energy, and sharp writing, but Dan’s clearer structure, direct attacks, and stronger closing rounds helped him take the decision.",
    "performanceAnalysis": [
      {
        "performer": "Dan Dannah",
        "overview": "Dan opened with confidence and framed the clash as a mismatch. He relied on direct attacks, humour, character angles, and crowd-friendly punchlines, building a case that Amity was more style than substance.",
        "lyricalThemes": "Name flips, authenticity attacks, pop-culture references, and easy-to-catch punchlines.",
        "keyTechnicalHighlights": [
          {
            "title": "Name Flips",
            "description": "His cleanest direct shot was the line built around 'no amnesty for Amity'."
          },
          {
            "title": "Character Angles",
            "description": "He questioned Amity’s street image and later contrasted it with a church-boy / gospel artist angle."
          },
          {
            "title": "Crowd Accessibility",
            "description": "His best material landed quickly and clearly, which suited the live judged format."
          }
        ]
      },
      {
        "performer": "Amity",
        "overview": "Amity brought the darker sound. His delivery had drill influence, high aggression, and strong wordplay, and he was widely respected for parts of the first two rounds.",
        "lyricalThemes": "Drill cadence, threat writing, street imagery, and layered wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Drill-Style Cadence",
            "description": "His rounds had a sharper, more musical rhythm than Dan’s more traditional battle-rap approach."
          },
          {
            "title": "Villain Energy",
            "description": "Lines like the Thanos reference gave his material a bigger-than-life, destructive feel."
          },
          {
            "title": "Technical Writing",
            "description": "The judges clearly recognised the wit and writing quality even when some sections felt less direct."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Dan Dannah",
        "theme": "Name Flip",
        "bar": "There’s no amnesty for Amity.",
        "explanation": "A direct name flip. Dan turns Amity’s name into a statement that he will receive no mercy in the clash."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Threat Metaphor",
        "bar": "I’ll take man off the road like black ice.",
        "explanation": "Black ice is dangerous and hard to see, so Dan uses it to suggest he can remove someone suddenly and decisively."
      },
      {
        "performer": "Dan Dannah",
        "theme": "UK Reference",
        "bar": "You’ll get left in agony in A&E.",
        "explanation": "A&E is the UK’s Accident and Emergency service. Dan links the word 'agony' to the hospital setting to imply injury."
      },
      {
        "performer": "Dan Dannah",
        "theme": "Pop Culture",
        "bar": "I’m the Avatar, you can’t stand with me.",
        "explanation": "He uses Avatar as a power comparison, presenting himself as operating on a higher level than his opponent."
      },
      {
        "performer": "Amity",
        "theme": "Villain Energy",
        "bar": "Feeling like Thanos, you don’t wanna get this ringing.",
        "explanation": "Amity uses Thanos to project power and destruction, keeping the line dark and aggressive."
      },
      {
        "performer": "Amity",
        "theme": "Direct Attack",
        "bar": "You ain’t no paper chaser, just an actor.",
        "explanation": "He attacks Dan’s authenticity, accusing him of pretending to be something he is not."
      }
    ],
    "oddMoments": [
      "The judges seemed split across the early rounds, with one judge saying Amity had the first two before Dan recovered late.",
      "Dan’s third round had a messy stretch, but he regained control enough to close the battle out.",
      "Amity arguably had the stronger drill tone, while Dan had the clearer Pen Game battle structure."
    ],
    "postBattleContext": "It was a close, competitive clash rather than a bodybag. Amity came away looking credible in defeat, while Dan’s experience, clearer angles, and late recovery ultimately carried the 3-1 decision."
  },
  {
    "id": "pg-s03-2021-09-12-animal-vs-ft",
    "slug": "animal-vs-ft",
    "mc1": "animal",
    "mc2": "ft",
    "winner": "ft",
    "title": "ANIMAL vs F.T",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=qMNxlYE7sek",
    "views": "18k",
    "date": "12-09-2021",
    "customEp": "3x04",
    "subGroup": "Launch Battles",
    "seasonOrder": 7,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "FT defeated Animal by clean sweep in this Group B battle, collecting another three points. Animal was originally due to battle T13, but T13 did not turn up, so Animal received those points before later facing FT. Once the actual battle started, FT proved to be the more direct and more effective battler.",
    "performanceAnalysis": [
      {
        "performer": "FT",
        "overview": "FT came into this battle already warm from his previous appearance. His confidence showed immediately. He focused heavily on Animal's name, using animal-themed flips and direct disrespect throughout the clash.",
        "lyricalThemes": "Animal-name flips, direct opponent focus, punchline clarity, and freestyle-direct energy.",
        "keyTechnicalHighlights": [
          {
            "title": "Animal-Name Flips",
            "description": "FT repeatedly attacked Animal's name using species-based wordplay."
          },
          {
            "title": "Direct Opponent Focus",
            "description": "His bars were clearly aimed at Animal rather than sounding generic."
          },
          {
            "title": "Double Meanings",
            "description": "The 'smoked behind these bars' line stood out as layered wordplay."
          }
        ]
      },
      {
        "performer": "Animal",
        "overview": "Animal brought a very energetic and unusual performance. His style leaned more toward grime, with lots of rhythm, repetition, sudden switches, and off-the-cuff-feeling phrases, but his material often lacked clear punchlines and direct aim.",
        "lyricalThemes": "Grime flow, chaotic energy, self-branding, repetition, and personality-driven performance.",
        "keyTechnicalHighlights": [
          {
            "title": "Grime-Style Flow",
            "description": "Animal had a lively, rhythmic delivery that gave his rounds movement."
          },
          {
            "title": "Self-Branding",
            "description": "He leaned into the 'animalistic' identity throughout the clash."
          },
          {
            "title": "Personality",
            "description": "Even in defeat, he came across as distinctive rather than bland."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "FT",
        "theme": "Name Flip",
        "bar": "My man thinks he's an animal, I just think he's a snake.",
        "explanation": "FT turns Animal's own name against him immediately by reframing it as a sneaky, untrustworthy snake."
      },
      {
        "performer": "FT",
        "theme": "Direct Attack",
        "bar": "You're getting smoked behind these bars like a pack of burnt.",
        "explanation": "This line layers 'bars' as lyrics and prison bars, while 'smoked' carries multiple meanings to make the punch more textured."
      },
      {
        "performer": "FT",
        "theme": "Identity Attack",
        "bar": "My man thinks he's Animal, but I know he's a human.",
        "explanation": "FT strips away the stage name and says Animal is just another person underneath it."
      },
      {
        "performer": "FT",
        "theme": "Power Flip",
        "bar": "I am a dragon, you are a weasel.",
        "explanation": "A simple hierarchy punch where FT casts himself as mythic and dangerous while shrinking Animal down to something smaller and sneakier."
      },
      {
        "performer": "Animal",
        "theme": "Identity Line",
        "bar": "Bad man with bad manners.",
        "explanation": "Animal uses a blunt self-branding line to set his tone and posture."
      },
      {
        "performer": "Animal",
        "theme": "Oddball Rhythm",
        "bar": "Badal badap boop bap.",
        "explanation": "This is more rhythmic than lyrical, working like a chant or sound-effect pattern to keep the energy moving."
      },
      {
        "performer": "Animal",
        "theme": "Backfire Moment",
        "bar": "Chop him up like spaghetti.",
        "explanation": "The image became unintentionally funny because the wording is awkward and the visual does not quite make sense."
      }
    ],
    "oddMoments": [
      "Animal was originally meant to battle T13, but T13 did not appear, so Animal was awarded points before facing FT.",
      "FT had already battled earlier in the same recording, meaning he came into this one warmed up.",
      "The judges felt Animal had good flow, but not enough clear punchlines.",
      "FT's material sounded so direct that one judge asked if he had been freestyling.",
      "Animal's 'chop him up like spaghetti' line became a judging-room talking point because the image did not really make sense.",
      "LV described Animal's style as more 'grime,' which explains the energy and rhythm, but the judges still preferred FT's battle structure.",
      "FT won because he used Animal's own name against him for the entire battle.",
      "Animal had personality, but FT had the punches. In Pen Game, that usually means the personality gets sent home with a participation ghost."
    ]
  },
  {
    "id": "pg-s03-2021-09-12-amity-vs-ren-dmc",
    "slug": "amity-vs-ren-dmc",
    "mc1": "amity",
    "mc2": "ren-dmc",
    "winner": "ren-dmc",
    "title": "AMITY vs REN DMC",
    "date": "12-09-2021",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=UUeIIKi0M68",
    "views": "16k",
    "customEp": "3x08a",
    "subGroup": "Launch Battles",
    "seasonOrder": 14,
    "stage": null,
    "group": null,
    "tag": "Launch Battles",
    "clashSummary": "Ren DMC defeated Amity in the final Group A battle and secured his place in the quarter-finals. The clash was a style battle between Ren's comedy and research-led punchlines and Amity's darker drill-flavoured aggression, but Ren's sharper writing carried the room.",
    "performanceAnalysis": [
      {
        "performer": "Ren DMC",
        "overview": "Ren came fully prepared. He attacked Amity's shoes, breath, weight, mum, job, image, age, behaviour, and head shape, but he did it with proper timing and enough performance control to make the jokes land.",
        "lyricalThemes": "Comedy punches, research angles, personal attacks, and crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Homework",
            "description": "The judges noticed he had done real research and tailored the material to Amity."
          },
          {
            "title": "Punchline Timing",
            "description": "He knew when to pause and let a joke breathe."
          },
          {
            "title": "Character",
            "description": "His comedic performance style helped the material hit harder."
          }
        ]
      },
      {
        "performer": "Amity",
        "overview": "Amity brought the darker, more serious approach. His flow and drill tone were strong, but the punchlines did not always hit with the force needed to beat Ren's cleaner material.",
        "lyricalThemes": "Drill cadence, threat writing, street image, and direct rebuttal.",
        "keyTechnicalHighlights": [
          {
            "title": "Drill Delivery",
            "description": "His voice and rhythm gave him a strong sound in the room."
          },
          {
            "title": "Aggression",
            "description": "He consistently tried to frame Ren as a joker who would not survive outside battle rap."
          },
          {
            "title": "Potential",
            "description": "The judges clearly thought he had more in the tank if he sharpened the punch delivery."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Ren DMC",
        "theme": "Shoes Angle",
        "bar": "Man, I hate your creps. Anytime you walk in them shoes, man, I hate your steps.",
        "explanation": "Ren attacks Amity's trainers and flips steps into both walking and general movement."
      },
      {
        "performer": "Ren DMC",
        "theme": "Road Angle",
        "bar": "Claim you're on road with the Hackney boys, you was in yard playing Backstreet Boys.",
        "explanation": "He contrasts street credibility with pop music to make Amity sound soft."
      },
      {
        "performer": "Ren DMC",
        "theme": "Visual Joke",
        "bar": "Should've came here in a purple onesie, because the girls could be Tinky Winky.",
        "explanation": "A Teletubbies joke that turns Amity into a comedy target."
      },
      {
        "performer": "Ren DMC",
        "theme": "Character Attack",
        "bar": "This is called Pen Game, you can't impress mugs like that.",
        "explanation": "Ren reminds Amity that battle rap here is judged on writing, not just toughness."
      },
      {
        "performer": "Amity",
        "theme": "Street Challenge",
        "bar": "I'm tired of battling neeks outside battling jokes like you.",
        "explanation": "Amity dismisses Ren as a joker rather than a real threat."
      },
      {
        "performer": "Amity",
        "theme": "MOT Scheme",
        "bar": "I treat it like MOT, get taken off for your poor performance.",
        "explanation": "He uses the UK vehicle inspection idea to say Ren should be taken out of service for performing badly."
      }
    ],
    "oddMoments": [
      "The battle decided who progressed from Group A.",
      "Ren's style was starting to feel slightly played, but he still had the cleaner material on the day.",
      "LV said Amity sounded like a drill artist and could become a real problem if he sharpened his punch delivery.",
      "Joey Clipstar noted that comedy can get crowd reaction, but Pen Game still rewards bars."
    ],
    "postBattleContext": "Ren DMC advanced to the quarter-finals alongside Dan Dannah. The judges respected Amity and felt he had a lane, but Ren's homework, polish, and opponent-specific writing won the decision."
  },
  {
    "id": "pg-s03-2021-11-17-messie-vs-bmf-alz",
    "slug": "messie-vs-bmf-alz",
    "mc1": "messie",
    "mc2": "bmf-alz",
    "winner": "messie",
    "date": "17-11-2021",
    "title": "MESSIE 13 vs BMF ALZ",
    "theme": "pengame",
    "season": 3,
    "videoUrl": "https://www.youtube.com/watch?v=XvtydpNkz7E",
    "views": "14k",
    "customEp": "3x07b",
    "subGroup": "Late Additions",
    "seasonOrder": 13,
    "stage": null,
    "group": null,
    "tag": "Late Additions",
    "clashSummary": "Messie 13 defeated BMF Alz in this Group C battle. The clash mattered for pride as well as progression, and despite both battlers advancing because of Group C dropouts, the judges felt Messie was the more composed and more complete performer.",
    "performanceAnalysis": [
      {
        "performer": "Messie 13",
        "overview": "Messie 13 came across as the more composed battler. He used direct attacks, name flips, and research-based material around BMF Alz's tracks, views, and image, but the judges still wanted him to be a little more serious and aggressive.",
        "lyricalThemes": "Credibility attacks, name flips, online research, and controlled battle structure.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Research",
            "description": "Messie attacked Alz's track names, views, and online presence."
          },
          {
            "title": "Name Flips",
            "description": "He personalised the material with BMF and Alz/Owlz angles."
          },
          {
            "title": "Stage Comfort",
            "description": "He looked more settled and less rattled than Alz."
          }
        ]
      },
      {
        "performer": "BMF Alz",
        "overview": "Alz had some interesting ideas and a few conceptual references, but his battle was badly damaged by chokes, repetition, and structure problems. He tried to freestyle through the mistakes, but the preparation issues were too obvious to ignore.",
        "lyricalThemes": "Conceptual wordplay, mythic references, freestyle survival, and pressure problems.",
        "keyTechnicalHighlights": [
          {
            "title": "Concept Ideas",
            "description": "He had references around Medusa, Kruger, samosas, and the Bermuda Triangle."
          },
          {
            "title": "Freestyle Attempt",
            "description": "After forgetting material, he tried to continue off the dome."
          },
          {
            "title": "Pressure Response",
            "description": "He did not quit, but the memory issues heavily damaged the performance."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Messie 13",
        "theme": "Body Bag",
        "bar": "I just come here to catch this body. 3-0, no two in a cubit.",
        "explanation": "Messie frames the clash as a clear sweep and uses body-bag language to set the tone."
      },
      {
        "performer": "Messie 13",
        "theme": "Research Angle",
        "bar": "I saw your track on YouTube. It's ironic you called it Clueless.",
        "explanation": "He flips the title of Alz's song back onto him as an insult."
      },
      {
        "performer": "Messie 13",
        "theme": "Name Flip",
        "bar": "You call yourself BMF, but BMF is Black Mafia Family.",
        "explanation": "Messie points out the weight behind the initials and says Alz does not live up to them."
      },
      {
        "performer": "Messie 13",
        "theme": "Technical Bar",
        "bar": "Can't see me coming like cataracts.",
        "explanation": "Cataracts cloud vision, so Messie uses the condition to say Alz cannot see him coming."
      },
      {
        "performer": "BMF Alz",
        "theme": "Mythic Angle",
        "bar": "I'm here to ruin your dreams like I'm Kruger.",
        "explanation": "A Freddy Krueger reference that frames Alz as someone who attacks people in their sleep or dreams."
      },
      {
        "performer": "BMF Alz",
        "theme": "Food Scheme",
        "bar": "I like that bar about triangles, yeah, that's the samosa.",
        "explanation": "He turns a triangle reference into a food punchline using the shape of a samosa."
      }
    ],
    "oddMoments": [
      "Group C had multiple dropouts, so the two battlers were already moving through to the quarter-finals.",
      "LV General called out BMF Alz before the battle for talking heavily beforehand.",
      "Alz choked and had to freestyle, which became one of the main talking points.",
      "The judges wanted both battlers to take the culture more seriously."
    ],
    "postBattleContext": "Messie won the battle, but the judges warned him that the win would not be enough later if he kept treating battles too lightly. Alz was told to sort out the preparation issues before returning."
  },
  {
    "id": "pg-s03-2021-11-14-kmarh-vs-messie",
    "slug": "kmarh-vs-messie",
    "mc1": "kmarh",
    "mc2": "messie",
    "title": "KMARH vs MESSIE",
    "date": "14-11-2021",
    "theme": "pengame",
    "season": 3,
    "views": null,
    "videoUrl": "https://www.youtube.com/watch?v=yxqE3CHfxiY",
    "customEp": "3x11a",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 20,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "K-Marh defeated Messie 13 in this quarter-final battle and advanced to the semi-finals. The battle revolved around one clear narrative: Messie kept attacking K-Marh for previous chokes and stumbles, while K-Marh had to prove he could get through the pressure cleanly. K-Marh ultimately won on the strength of his flow, breath control, technical delivery, and composure across the full battle.",
    "performanceAnalysis": [
      {
        "performer": "K-Marh",
        "overview": "K-Marh delivered one of his strongest performances of the season. He stayed calm under pressure, caught the beat cleanly, and used technical flow rather than volume to control the room. His writing was layered and intentional, and he kept proving he could survive the choke narrative without folding.",
        "lyricalThemes": "Technical flow, beat control, pressure management, layered imagery, and battle-focused writing.",
        "keyTechnicalHighlights": [
          {
            "title": "Pressure Management",
            "description": "K-Marh survived the choke angle and refused to let it define the battle."
          },
          {
            "title": "Technical Flow",
            "description": "His internal rhyme patterns and breath control stood out throughout the clash."
          },
          {
            "title": "Beat Control",
            "description": "He caught the rhythm switch cleanly, which impressed the judges."
          }
        ]
      },
      {
        "performer": "Messie 13",
        "overview": "Messie opened with the clearest angle in the battle by attacking K-Marh's past choking issues. He had confidence, a strong theme, and a memorable flow switch, but the longer the battle went on, the less that narrative mattered because K-Marh kept delivering. A late stumble damaged Messie's own angle badly.",
        "lyricalThemes": "Choke narrative, identity and credibility attacks, personal pressure, and crowd-readable writing.",
        "keyTechnicalHighlights": [
          {
            "title": "Strong Opening Angle",
            "description": "Messie's first round directly attacked K-Marh's choke history and made the issue the centre of the battle."
          },
          {
            "title": "Performance Confidence",
            "description": "He sounded confrontational and direct, which gave the round real pressure."
          },
          {
            "title": "Main Weakness",
            "description": "A late stumble hurt him badly because it undercut the exact narrative he was using against K-Marh."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "K-Marh",
        "theme": "Status",
        "bar": "Why'd you call yourself Messie? You ain't raising the bar.",
        "explanation": "A direct name flip that turns Messie's football-star connotations into a criticism of his standard in battle rap."
      },
      {
        "performer": "K-Marh",
        "theme": "Pen Game",
        "bar": "I write off man with a pen.",
        "explanation": "This turns writing into the weapon and makes the pen the thing that destroys his opponent."
      },
      {
        "performer": "Messie 13",
        "theme": "Choke Angle",
        "bar": "How you gonna say you need practice, bro, at the same time you actually choke?",
        "explanation": "Messie's central attack line questions K-Marh's readiness and uses his past choke history against him."
      },
      {
        "performer": "Messie 13",
        "theme": "Credibility",
        "bar": "What you know about sitting in a London Crown Court on a naughty case?",
        "explanation": "A court and street-credibility angle used to frame Messie as more experienced and serious."
      }
    ],
    "oddMoments": [
      "Messie's whole battle plan was built around K-Marh choking.",
      "K-Marh not choking almost became a punchline because it killed the main narrative.",
      "Judges praised K-Marh's breath control and technical delivery.",
      "Messie's late stumble hurt him because he had spent the battle attacking K-Marh for stumbling.",
      "K-Marh's performance felt more controlled and mature than some of his earlier battles."
    ],
    "postBattleContext": "K-Marh's win sent him into the semi-finals. The judges felt Messie had a strong first-round idea, but K-Marh proved he could hold his nerve and perform at a higher technical level when the pressure was highest."
  },
  {
    "id": "pg-s3.5-2023-12-10-ren-dmc-vs-skamz",
    "slug": "ren-dmc-vs-skamz",
    "mc1": "ren-dmc",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "REN DMC vs SKAMZ",
    "date": "10-12-2023",
    "theme": "pengame",
    "season": 3,
    "views": "52k",
    "videoUrl": "https://www.youtube.com/watch?v=3NHxEKvOm8U",
    "customEp": "3x10a",
    "subGroup": "Mid Season Drops",
    "seasonOrder": 18,
    "stage": null,
    "group": null,
    "tag": "Mid Season Drops",
    "clashSummary": "Skamz defeated Ren DMC in a strong quarter-final battle to progress to the semi-finals. It was serious, creative, and difficult to call, with Ren leaning on comedy, research, props, and crowd control while Skamz brought more venom, directness, disrespect, and battle intent.",
    "performanceAnalysis": [
      {
        "performer": "Skamz",
        "overview": "Skamz came with real venom and understood that Ren's comedy and preparation could be dangerous, so he attacked with direct disrespect from the beginning. He targeted Ren's battles, style, family, return to battle rap, and his general image, then escalated further in the third round with a T-shirt reveal that became the battle's decisive visual moment.",
        "lyricalThemes": "Direct disrespect, family attacks, anti-comedy pressure, and shock-value battle tactics.",
        "keyTechnicalHighlights": [
          {
            "title": "High Aggression",
            "description": "Skamz pushed the battle forward with more venom than Ren and framed the clash as personal warfare."
          },
          {
            "title": "Personal Angles",
            "description": "He targeted Ren's daughter, partner, battle history, and image to make the material feel sharper."
          },
          {
            "title": "Shock Tactic",
            "description": "The T-shirt reveal became the battle's biggest moment and helped lock the win."
          }
        ]
      },
      {
        "performer": "Ren DMC",
        "overview": "Ren was still very strong, bringing researched angles about Skamz's background, fraud allegations, school history, family, and Angola connection. He also used props and performance choices well, but his final round lost urgency just as Skamz was escalating.",
        "lyricalThemes": "Research-heavy writing, comedy timing, props, fraud narratives, and performance control.",
        "keyTechnicalHighlights": [
          {
            "title": "Research-Heavy Writing",
            "description": "Ren built detailed angles from Skamz's background, family, schooling, and online identity."
          },
          {
            "title": "Performance Tools",
            "description": "Dropped phone, shades, and Rubik's Cube moments gave the battle extra layers of theatre."
          },
          {
            "title": "Comedy Timing",
            "description": "He still controlled reactions with humour and pauses even when Skamz was pushing harder."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Skamz",
        "theme": "Name Flip",
        "bar": "I don't want to play with DMC, so let me turn him into THC.",
        "explanation": "Skamz turns Ren's name into a cannabis reference, saying he'll smoke him out of the battle."
      },
      {
        "performer": "Skamz",
        "theme": "Family Angle",
        "bar": "This is the end for Ren. Your BM won't see you again. Your daughter won't see you again.",
        "explanation": "A direct personal escalation that uses family to add pressure and shock value."
      },
      {
        "performer": "Ren DMC",
        "theme": "Fraud Scheme",
        "bar": "Let me tell you about a brother called Skamz. He does fraud and it always bangs.",
        "explanation": "Ren opens with the obvious scam angle and uses it as a full battle theme."
      },
      {
        "performer": "Ren DMC",
        "theme": "Prop Flip",
        "bar": "Don't be fooled, it's just hype. He bought that T-shirt off my website.",
        "explanation": "Ren tries to turn Skamz's T-shirt reveal back on him by claiming it was bought from his site."
      }
    ],
    "oddMoments": [
      "Ren's dropped phone moment fooled the room and worked as a performance trick.",
      "Skamz's T-shirt reveal became the most memorable moment of the battle.",
      "Ren tried to flip the reveal by saying Skamz bought the shirt from his website.",
      "Ren's Rubik's Cube prop distracted some viewers because he never fully resolved the bit.",
      "The judges felt Ren was a strong artist, but Skamz came with more battle venom."
    ],
    "postBattleContext": "Skamz's win sent him into the semi-finals. The judges felt Ren was still clever and well prepared, but Skamz came to battle harder and made the room uncomfortable on purpose, which proved decisive in a close quarter-final."
  },
  {
    "id": "pg-s3.5-2023-12-24-drizzgb-vs-kandi",
    "slug": "drizzgb-vs-kandi",
    "mc1": "drizzgb",
    "mc2": "kandi",
    "title": "DRIZZGB Vs KANDI",
    "theme": "pengame",
    "season": 3.5,
    "views": "92k",
    "date": "24-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=cuSl7-qEfj0",
    "customEp": "X.01",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Lippy Lickshot",
    "clashSummary": "DrizzGB and Kandi opened the 2023 Christmas Special with three unruly rounds driven by personal angles, crowd interruptions and repeated wheel-ups. Kandi attacked first with abrasive street imagery and quick visual insults. DrizzGB answered with a far more structured campaign around Kandi's forced voice, mixed identity claims, lack of money and use of his girlfriend Tasha's phone in the PenGame group chat. The transcript contains no formal judges' decision, although Drizz called it 3-0 at the close and controlled most of the room's biggest reactions.",
    "performanceAnalysis": [
      {
        "performer": "DrizzGB",
        "overview": "DrizzGB delivered the cleaner and more complete battle performance. He established the voice angle immediately, expanded it through cough-sweet and herbal-tea imagery, then built the later rounds around Kandi's finances and relationship with Tasha. His writing had clearer setups, recurring themes and more obvious landing points.",
        "lyricalThemes": "Voice and identity attacks, financial embarrassment, relationship angles, battle experience and controlled comedy.",
        "keyTechnicalHighlights": [
          {
            "title": "Extended Voice Scheme",
            "description": "The lemon-sip, cough-sweet, herbal-tea and Abra Cadabra references all support one sustained attack on Kandi's forced vocal delivery."
          },
          {
            "title": "Kandi Name Flips",
            "description": "Drizz repeatedly turns Kandi's name into sugar and confectionery language, including Kandi Crush and landing hooks."
          },
          {
            "title": "Tasha Narrative",
            "description": "The group-chat phone story develops across rounds and becomes the battle's central personal angle rather than a single isolated joke."
          },
          {
            "title": "Room Command",
            "description": "Drizz earned repeated wheel-ups and kept returning cleanly after interruptions, showing stronger control of the live setting."
          }
        ]
      },
      {
        "performer": "Kandi",
        "overview": "Kandi brought raw hostility, fast rhyme chains and a confrontational presence. His strongest material used short visual comparisons and direct threats, but several passages became difficult to follow and the crowd repeatedly interrupted the flow. The aggression was credible; the writing was less consistently shaped into complete punches.",
        "lyricalThemes": "Street threats, appearance jokes, family disrespect, credibility attacks and rapid associative rhyming.",
        "keyTechnicalHighlights": [
          {
            "title": "Immediate Pressure",
            "description": "Kandi starts aggressively and gives the battle a hostile tone before Drizz has delivered a line."
          },
          {
            "title": "Compact Comparisons",
            "description": "The Big Shaq, KitKat and German-car lines work as brief, recognisable images that are easier to catch than his denser passages."
          },
          {
            "title": "Flow Over Structure",
            "description": "Kandi often prioritises cadence and internal rhyme over a clean setup-punch format, which makes parts of the transcript feel fragmented."
          },
          {
            "title": "Unpredictable Presence",
            "description": "His unfiltered delivery and willingness to attack from unusual angles keep the performance volatile even when the wording is unclear."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DrizzGB",
        "theme": "Appearance",
        "bar": "This brother here is greasy as fuck, blood, you need to wash up. You look like you just woke up, you're a scruff.",
        "explanation": "Drizz begins with a direct visual attack, making Kandi's presentation the first evidence against his credibility."
      },
      {
        "performer": "DrizzGB",
        "theme": "Voice Scheme",
        "bar": "This brother needs lemon sip, wait, or a thousand cough sweets. Stop with the verbal G, drink herbal tea.",
        "explanation": "The remedies form a connected scheme suggesting Kandi's aggressive voice sounds strained rather than natural."
      },
      {
        "performer": "DrizzGB",
        "theme": "Identity",
        "bar": "Man said he's Irish, Pakistani and Jamaican. Oh, he's Grams? I think you're mistaken.",
        "explanation": "Drizz mocks Kandi's list of claimed backgrounds and presents the identity as confused or exaggerated."
      },
      {
        "performer": "DrizzGB",
        "theme": "Name Flip",
        "bar": "I said this is a game, no Xbox or PlayStation, but I can get Kandi crushed.",
        "explanation": "Kandi Crush flips the opponent's name through the mobile game Candy Crush while keeping the battle framing intact."
      },
      {
        "performer": "DrizzGB",
        "theme": "Boxing Wordplay",
        "bar": "Fuck your punchlines when I land these hooks. I'm on the front line, no Kandi shook.",
        "explanation": "Punchlines and hooks work as both rap terminology and boxing language, presenting Drizz as the more effective attacker."
      },
      {
        "performer": "DrizzGB",
        "theme": "Performance Attack",
        "bar": "Just 'cause you shout and rap with your eyes closed, that don't make you a psycho.",
        "explanation": "Drizz separates loud performance habits from genuine intimidation and attacks Kandi's stage persona as forced."
      },
      {
        "performer": "DrizzGB",
        "theme": "Tournament Record",
        "bar": "You ain't getting past the first round, let alone to the semi-finals.",
        "explanation": "The line uses PenGame's tournament history to question Kandi's ability to progress against stronger opposition."
      },
      {
        "performer": "DrizzGB",
        "theme": "Financial Angle",
        "bar": "He can't afford a phone, so he uses his girl's in the PenGame chat.",
        "explanation": "Drizz turns a practical group-chat detail into a wider attack on Kandi's independence and finances."
      },
      {
        "performer": "DrizzGB",
        "theme": "Relationship Angle",
        "bar": "I feel sorry for Tasha. See, nobody wanna mash her. She gotta settle with you, but she's pissed 'cause she knows that her man is a capper.",
        "explanation": "The rhyme extends the phone story into a relationship narrative and frames Tasha as settling for someone dishonest."
      },
      {
        "performer": "DrizzGB",
        "theme": "Voice and Magic",
        "bar": "A man really tried to sound like Abra Cadabra. Your voice is as fake as a bitch. I got the magic, alakazam.",
        "explanation": "Drizz links Kandi's delivery to rapper Abra Cadabra, then completes the idea with a magic-word punch."
      },
      {
        "performer": "Kandi",
        "theme": "Impact",
        "bar": "My lips bring the hits back, like you bring a girl to the clash, I'm thinking, how did he lips that?",
        "explanation": "Kandi uses lips as both rap delivery and physical intimacy, turning Drizz's guest into part of the attack."
      },
      {
        "performer": "Kandi",
        "theme": "Threat",
        "bar": "Back my shank and then twist that.",
        "explanation": "A short, direct threat that matches Kandi's preference for blunt aggression over long setups."
      },
      {
        "performer": "Kandi",
        "theme": "Pop Culture",
        "bar": "You never been hot like Big Shaq.",
        "explanation": "The Big Shaq reference uses the viral 'man's not hot' character to mock Drizz's status and image."
      },
      {
        "performer": "Kandi",
        "theme": "Confectionery Wordplay",
        "bar": "You always break there like a KitKat.",
        "explanation": "The chocolate-bar comparison presents Drizz as someone who folds or breaks under pressure."
      },
      {
        "performer": "Kandi",
        "theme": "Lifestyle",
        "bar": "I used to serve my food with a portion of fries. Don't know why this guy keeps talking the lies.",
        "explanation": "Kandi contrasts claimed street experience with what he says are fabricated stories from Drizz."
      },
      {
        "performer": "Kandi",
        "theme": "Knockout",
        "bar": "You got knocked out, must be liking the floor.",
        "explanation": "A concise performance-history attack that turns a past defeat into a repeated attraction to the ground."
      },
      {
        "performer": "Kandi",
        "theme": "Car Status",
        "bar": "Never touched foot in a German car.",
        "explanation": "Kandi uses luxury German cars as a status test and claims Drizz cannot support the lifestyle he presents."
      },
      {
        "performer": "Kandi",
        "theme": "Crowd Control",
        "bar": "These man already murked this dog.",
        "explanation": "Kandi tries to enlist the room in the verdict by suggesting Drizz was defeated before his own attack finished."
      },
      {
        "performer": "Kandi",
        "theme": "Credibility",
        "bar": "Rat is a snitch.",
        "explanation": "The blunt accusation attacks trustworthiness and suits Kandi's stripped-down, confrontational delivery."
      },
      {
        "performer": "Kandi",
        "theme": "Direct Challenge",
        "bar": "I don't know why this guy talks so rudely.",
        "explanation": "Kandi frames Drizz's confidence as empty disrespect, setting up his wider attempt to challenge the opponent's credibility."
      }
    ],
    "oddMoments": [
      "A Christmas cracker replaces the normal coin toss, with Drizz winning the right to choose who starts.",
      "Drizz's first round receives the first wheel-up of the Christmas Special.",
      "The room pauses for a VAR-style check over whether Tasha exists and whether Drizz really has her number.",
      "Kandi reveals that he wears size 15 shoes, briefly taking over the room's attention.",
      "No judges give an official verdict, although Drizz declares the result 3-0 at the end."
    ]
  },
  {
    "id": "pg-s3.5-2023-12-25-grams-vs-storm",
    "slug": "grams-vs-storm",
    "mc1": "grams",
    "mc2": "storm",
    "title": "GRAMS vs STORM",
    "date": "25-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=yg8_6ezAX0s",
    "theme": "pengame",
    "season": 3.5,
    "views": "78k",
    "customEp": "X.03",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Lippy Lickshot",
    "clashSummary": "Grams and Storm delivered one of the Christmas Special's most openly hostile battles. Grams framed the event as Storm's funeral, attacked his height, music numbers, race, family and credibility, then changed the entire atmosphere with a garage-style third-round beat switch. Storm answered with darker street writing, death imagery and direct challenges to Grams' authenticity. No judges issued an official result, but Grams generated the larger performance moments while Storm's strongest material came through compact threats and pop-culture references.",
    "performanceAnalysis": [
      {
        "performer": "Grams",
        "overview": "Grams treated the battle as a staged event rather than a sequence of isolated bars. The funeral opening established his narrative, the first two rounds used statistics and personal angles to diminish Storm, and the third-round garage switch turned performance choice itself into a punchline.",
        "lyricalThemes": "Funeral framing, name flips, career statistics, race and identity, family disrespect and genre-based performance comedy.",
        "keyTechnicalHighlights": [
          {
            "title": "Funeral Concept",
            "description": "Grams opens by announcing that someone is dying and maintains that framing through coffin, graveyard and funeral imagery."
          },
          {
            "title": "Storm Name Flips",
            "description": "He reduces Storm to a gust of wind and repeatedly says the opponent does not live up to the power of his own name."
          },
          {
            "title": "Evidence-Based Attacks",
            "description": "The 400 views and 13 likes line grounds the career angle in a specific public metric."
          },
          {
            "title": "Genre Switch",
            "description": "The garage beat becomes part of the attack, allowing Grams to argue that Storm belongs in a pub or dance setting rather than a rap battle."
          }
        ]
      },
      {
        "performer": "Storm",
        "overview": "Storm relied on a dense, threatening style built from burial imagery, street references and accusations that Grams' persona was false. His performance became most effective when he simplified the wording into memorable images such as rolling Grams into a spliff, putting him in a hearse or taking him off the map.",
        "lyricalThemes": "Death and burial imagery, street credibility, drug metaphors, fantasy references and direct authenticity challenges.",
        "keyTechnicalHighlights": [
          {
            "title": "Death Motif",
            "description": "Hearses, graves, the angel of death and painted-red canvases create a consistent violent atmosphere."
          },
          {
            "title": "UK Pop Culture",
            "description": "Top Boy, Kamali and Madeleine McCann references give the writing recognisable British reference points."
          },
          {
            "title": "Personal Rebuttal",
            "description": "Storm repeatedly calls Grams a liar and challenges him to confirm claims made in direct messages."
          },
          {
            "title": "Dense Delivery",
            "description": "His internal rhymes create momentum, but several longer sequences lose clarity before reaching a clean punch."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Grams",
        "theme": "Name Flip",
        "bar": "This ain't no storm, it's a gust of wind.",
        "explanation": "Grams immediately reduces the force implied by Storm's name to a minor weather event."
      },
      {
        "performer": "Grams",
        "theme": "Name and Pop Culture",
        "bar": "The real X-Men Storm is a bitch, but she bad. This imposter here just a bitch.",
        "explanation": "The Marvel reference lets Grams compare Storm unfavourably with the better-known character who shares his name."
      },
      {
        "performer": "Grams",
        "theme": "Career Statistics",
        "bar": "You get 400 views and 13 likes on a track. You better stop wasting your time with these raps.",
        "explanation": "Specific engagement numbers make the career attack concrete and easy for the room to understand."
      },
      {
        "performer": "Grams",
        "theme": "Pandemic Scheme",
        "bar": "His whole content is COVID-related. I'll leave him dead like a COVID patient. He ain't got substance, the needle's vacant.",
        "explanation": "Grams links topical content, death and vaccination imagery into a sustained pandemic scheme."
      },
      {
        "performer": "Grams",
        "theme": "Funeral Framing",
        "bar": "You got dressed for your own funeral, you dickhead. Rest in peace.",
        "explanation": "This closes the first round by returning to the funeral concept introduced before the beat started."
      },
      {
        "performer": "Grams",
        "theme": "Authenticity",
        "bar": "Storm ain't got no substance. What is this white boy doing in rap? Your bars come from a rural lifestyle; tell us all what you were doing in the trap.",
        "explanation": "Grams attacks the gap between Storm's background and the street identity presented in his lyrics."
      },
      {
        "performer": "Grams",
        "theme": "Career Choice",
        "bar": "You chose the wrong job. It would've been better if you started PenGame as a reporter.",
        "explanation": "The line dismisses Storm as someone better suited to covering battles than competing in them."
      },
      {
        "performer": "Grams",
        "theme": "Migos Wordplay",
        "bar": "You can take off faster than sports cars. If my amigos with me, Offset.",
        "explanation": "Takeoff and Offset reference two members of Migos while describing Storm fleeing from danger."
      },
      {
        "performer": "Grams",
        "theme": "Genre Switch",
        "bar": "Fuck rap, this is more your vibe. Put any beat on, you're gonna get fried. Trust me, Storm, you are not the guy.",
        "explanation": "Grams uses the garage beat itself as evidence that Storm belongs outside the serious rap setting."
      },
      {
        "performer": "Grams",
        "theme": "Pub Culture",
        "bar": "Put the mic down and go have a pint.",
        "explanation": "The concise closer recasts Storm as an ordinary pub customer rather than a credible battle rapper."
      },
      {
        "performer": "Storm",
        "theme": "Smoking Metaphor",
        "bar": "Put Grams in a Rizla, roll you up, now I'm lighting this spliff.",
        "explanation": "Storm flips Grams' name into cannabis weight and rolling-paper imagery to frame the opponent as something he can consume."
      },
      {
        "performer": "Storm",
        "theme": "Top Boy Reference",
        "bar": "If I shoot, I'll leave this Top Boy like Kamali.",
        "explanation": "The threat references Kamale from Top Boy, grounding the punch in a recognisable UK crime-drama character."
      },
      {
        "performer": "Storm",
        "theme": "Fantasy Reference",
        "bar": "Leave him in that gaff like Bilbo Baggins.",
        "explanation": "Bilbo Baggins and his home provide an unexpected fantasy image inside Storm's otherwise street-focused round."
      },
      {
        "performer": "Storm",
        "theme": "Death Persona",
        "bar": "Angel of death, I'll drag him. Aim for his neck, I'm savage.",
        "explanation": "Storm gives himself a supernatural executioner role and follows it with a direct physical threat."
      },
      {
        "performer": "Storm",
        "theme": "Visual Violence",
        "bar": "Rip through his flesh, paint red on the canvas.",
        "explanation": "The canvas metaphor turns violence into a graphic visual artwork."
      },
      {
        "performer": "Storm",
        "theme": "Burial",
        "bar": "Now he's going head first in a hearse like Victor.",
        "explanation": "Storm uses the hearse as a final destination and builds the line around a named reference from his rhyme sequence."
      },
      {
        "performer": "Storm",
        "theme": "Disappearance",
        "bar": "Take him off the map like the government did to Madeleine.",
        "explanation": "A dark British cultural reference presents Grams as someone who can be made to disappear completely."
      },
      {
        "performer": "Storm",
        "theme": "Appearance",
        "bar": "There's lines in his eyes, his hairline's offside.",
        "explanation": "Football's offside rule becomes a visual joke about a receding hairline moving beyond its proper position."
      },
      {
        "performer": "Storm",
        "theme": "Name Flip",
        "bar": "Skinny build, but I drop Grams like a bag.",
        "explanation": "Storm uses Grams as both the opponent's name and a measured quantity that can be dropped."
      },
      {
        "performer": "Storm",
        "theme": "Finality",
        "bar": "Checkmate, no chess. Who the fuck is next?",
        "explanation": "The battle is framed as already decided, with Storm immediately looking beyond Grams to another opponent."
      }
    ],
    "oddMoments": [
      "Grams delays the opening to stage Storm's funeral before beginning his first round.",
      "The host repeatedly uses VAR calls to restore order during crowd interruptions.",
      "Storm's supporter becomes involved in the room, prompting a brief argument about interference.",
      "Grams switches to a garage-style beat in round three and turns the rhythm change into the central punch.",
      "The clash ends without an official judges' decision, leaving viewers to call the result."
    ]
  },
  {
    "id": "pg-s3.5-2023-12-25-sevz-vs-twenty8",
    "slug": "sevz-vs-twenty8",
    "mc1": "sevz",
    "mc2": "twenty8",
    "title": "SEVZ Vs TWENTY8",
    "theme": "pengame",
    "season": 3.5,
    "views": "85k",
    "date": "25-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=Mue8jWzJq_A",
    "customEp": "X.02",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Lippy Lickshot",
    "clashSummary": "Twenty8 opened this Christmas exhibition with dark religious, horror and video-game imagery, while Sevz answered with a clearer and more deliberately structured attack. Sevz repeatedly framed Twenty8 as an inexperienced student, mocked his delivery and built clean name flips around the number 28. Twenty8 maintained an intense tone across all three rounds and produced vivid threats, but several passages became crowded or difficult to land. The host asked viewers to decide the winner; no formal judges' result appears in the transcript.",
    "performanceAnalysis": [
      {
        "performer": "Sevz",
        "overview": "Sevz gave the more controlled performance, using short setups, recognisable references and recurring teacher-student language. He attacked Twenty8's lack of experience, unclear speech, musical prospects and frightening persona, then closed with a long technical sequence about haircuts, bridges in ability, Einstein and bars set too low.",
        "lyricalThemes": "Experience versus inexperience, speech and delivery, number-name flips, teaching imagery, pop culture and technical superiority.",
        "keyTechnicalHighlights": [
          {
            "title": "Darts Opening",
            "description": "The Phil Taylor reference creates an immediate darted/run double meaning before Sevz settles into the first round."
          },
          {
            "title": "Teacher Persona",
            "description": "Schooling, sensei, tuition and low-bar imagery consistently position Twenty8 as a student who is not ready."
          },
          {
            "title": "Number Name Flip",
            "description": "\"28 won't see 28\" converts the stage name into a concise mortality threat."
          },
          {
            "title": "Clear Landing Points",
            "description": "Sevz's bars generally finish on recognisable images, making the material easier for the live room to follow."
          }
        ]
      },
      {
        "performer": "Twenty8",
        "overview": "Twenty8 established a violent, cinematic identity through Mortal Kombat, the boogeyman, Sully, samurai and religious references. His delivery carried conviction and the imagery stayed consistent, but the densest rhyme chains often moved past their strongest ideas without giving them enough room to land.",
        "lyricalThemes": "Religion, horror, video games, death, weapons, crime drama and supernatural menace.",
        "keyTechnicalHighlights": [
          {
            "title": "Mortal Kombat Scheme",
            "description": "Combat with mortals and \"get over here\" reference the game while presenting Twenty8 as an executioner."
          },
          {
            "title": "Religious Opposition",
            "description": "Calling Sevz a church boy allows Twenty8 to build curses, Jehovah, Ramadan and biblical David into the attack."
          },
          {
            "title": "Cinematic Violence",
            "description": "Sully, samurai, the boogeyman and skeleton imagery give the performance a recognisable visual language."
          },
          {
            "title": "Density Versus Clarity",
            "description": "Twenty8's rapid internal rhymes create energy, but some punchlines become obscured by the volume of surrounding material."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Sevz",
        "theme": "Darts",
        "bar": "The moment you saw a man round the corner, Phil Taylor, you should've just darted.",
        "explanation": "Darts champion Phil Taylor sets up \"darted\" as both the sport and a warning that Twenty8 should have run."
      },
      {
        "performer": "Sevz",
        "theme": "Target Wordplay",
        "bar": "Me, I'm in my bag, so I guess that makes you a target.",
        "explanation": "Being in his bag means performing at a high level, while a target is also something carried or selected for attack."
      },
      {
        "performer": "Sevz",
        "theme": "Quality Control",
        "bar": "I'ma dunk his head in the toilet, straight up flushing all of his bars of shit.",
        "explanation": "The toilet image turns a criticism of weak writing into a direct physical and comic visual."
      },
      {
        "performer": "Sevz",
        "theme": "Horror Reference",
        "bar": "I would drop you five sheets, but you ain't Pennywise. This boy's a clown.",
        "explanation": "Pennywise connects money, the horror character and clown imagery while dismissing Twenty8's attempt to sound frightening."
      },
      {
        "performer": "Sevz",
        "theme": "Delivery Attack",
        "bar": "Bro talks like he got hands in his mouth. Fam, this boy's a puppet.",
        "explanation": "The strange physical image criticises Twenty8's clarity and resolves into a puppet comparison."
      },
      {
        "performer": "Sevz",
        "theme": "Soft Drink Scheme",
        "bar": "I'm Dr Pepper, he's a Fanta, so stick to the soft drinks.",
        "explanation": "Sevz creates a status hierarchy through drink brands and labels Twenty8 the softer opponent."
      },
      {
        "performer": "Sevz",
        "theme": "Dental Visual",
        "bar": "If it's war that he wants, bring ammo. I'll make his teeth look like a piano.",
        "explanation": "The black-and-white piano-key image turns a threat into a clear visual punch."
      },
      {
        "performer": "Sevz",
        "theme": "Name Flip",
        "bar": "28 won't see 28. I envision him dying, his family crying.",
        "explanation": "Twenty8's stage name becomes an age he supposedly will not reach."
      },
      {
        "performer": "Sevz",
        "theme": "Teacher Angle",
        "bar": "If you wanna learn something, I'm a sensei, so hush your mouth and assimilate.",
        "explanation": "Sevz presents himself as the instructor and Twenty8 as a student expected to listen and copy."
      },
      {
        "performer": "Sevz",
        "theme": "Haircut Scheme",
        "bar": "If I send shots, cut your hair low, 'cause you're gonna get wigged or waved.",
        "explanation": "Cut, wig and waves combine violence with a connected sequence of hairstyle terms."
      },
      {
        "performer": "Twenty8",
        "theme": "Mortal Kombat",
        "bar": "I'm on combat with mortals. Get over here and I'll make man's brain go splat.",
        "explanation": "The wording flips Mortal Kombat and quotes Scorpion's signature command before completing the threat."
      },
      {
        "performer": "Twenty8",
        "theme": "Name and Location",
        "bar": "I heard that man's from Barking, right? Ironic, you're a dog that needs to be put down.",
        "explanation": "The London area Barking becomes the setup for a dog comparison and execution threat."
      },
      {
        "performer": "Twenty8",
        "theme": "Identity",
        "bar": "If I take away the punches in your lines, who are you? You a bitch hiding behind the crew.",
        "explanation": "Twenty8 questions whether Sevz has any identity beyond punchlines and group support."
      },
      {
        "performer": "Twenty8",
        "theme": "Fire Scheme",
        "bar": "I grab a lighter, gasoline, turn you into ashes.",
        "explanation": "A straightforward ignition sequence creates a complete and easily visualised threat."
      },
      {
        "performer": "Twenty8",
        "theme": "Nine Lives",
        "bar": "Sevz got the power to revive? I got three rounds and I'm taking out nine lives.",
        "explanation": "The three-round structure is multiplied into a cat's nine lives to suggest repeated elimination."
      },
      {
        "performer": "Twenty8",
        "theme": "Religious Horror",
        "bar": "The devil in my palm telling me to pull a shank from my gums.",
        "explanation": "The line combines supernatural influence with an exaggerated concealed-weapon image."
      },
      {
        "performer": "Twenty8",
        "theme": "Biblical Reference",
        "bar": "Do it like David, bash man's head with a boulder.",
        "explanation": "David and Goliath supplies the biblical image of defeating an opponent with a stone."
      },
      {
        "performer": "Twenty8",
        "theme": "True Crime",
        "bar": "Do it like Jeffrey Dahmer.",
        "explanation": "The serial-killer reference reinforces Twenty8's horror persona through a recognisable name."
      },
      {
        "performer": "Twenty8",
        "theme": "Boxing Wordplay",
        "bar": "Forget the mic check one-two, you'll get a high-low one-two hook.",
        "explanation": "The standard sound-check count becomes a boxing combination aimed at Sevz."
      },
      {
        "performer": "Twenty8",
        "theme": "Crime Drama",
        "bar": "Shoot up the room like Sully done.",
        "explanation": "The Top Boy reference uses Sully's violent reputation to make the threat cinematic and familiar."
      }
    ],
    "oddMoments": [
      "A Christmas cracker determines that Twenty8 starts the battle.",
      "Twenty8 stops the beat during his first round and briefly continues without it.",
      "The host accidentally calls Sevz's second round \"round five\" before correcting himself.",
      "Sevz pauses to perform a mic check, which Twenty8 later flips into a one-two boxing bar.",
      "The battle closes with viewers asked to decide the winner rather than an official result."
    ]
  },
  {
    "id": "pg-s3.5-2023-12-26-ft-vs-blazn",
    "slug": "ft-vs-blazn",
    "mc1": "ft",
    "mc2": "blazn",
    "title": "Forever Tapped vs BLAZN",
    "theme": "pengame",
    "season": 3.5,
    "views": "88k",
    "date": "26-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=D-tGxfgZphQ",
    "customEp": "X.04",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Lippy Lickshot",
    "clashSummary": "Forever Tapped and Blazn closed the Christmas set with an explicitly off-the-dome wildcard exhibition. The host states that Blazn is under 18 and that neither performer arrived expecting a conventional prepared battle. Blazn attacked FT's appearance, age, stamina and veteran status with fearless improvised lines. FT used his experience to involve the camera and room, then made Blazn's supportive father the running subject of his later rounds. The clash is best understood as a chaotic freestyle showcase rather than a judged contest.",
    "performanceAnalysis": [
      {
        "performer": "Forever Tapped / FT",
        "overview": "FT leaned on veteran instincts rather than polished writing. He moved around the room, directed the camera, reacted to interruptions and repeatedly returned to Blazn's father for improvised material. The repetition became excessive, but his confidence kept the exhibition moving whenever the structure broke down.",
        "lyricalThemes": "Freestyle crowd work, camera control, veteran status, parent-focused comedy and improvised rhyme chains.",
        "keyTechnicalHighlights": [
          {
            "title": "Environmental Freestyling",
            "description": "FT builds material from the people, glasses, camera movement and reactions visible in the room."
          },
          {
            "title": "Camera Direction",
            "description": "He repeatedly asks the cameraman to follow him, turning movement around the venue into part of the performance."
          },
          {
            "title": "Veteran Recovery",
            "description": "FT resets after pauses and lost rhyme paths without abandoning the round."
          },
          {
            "title": "Running Father Angle",
            "description": "Blazn's father becomes a recurring source of crowd comedy, although FT relies on the angle for too much of the battle."
          }
        ]
      },
      {
        "performer": "Blazn / Blazian",
        "overview": "Blazn performed without hesitation despite facing a PenGame veteran. Her strongest freestyles were short visual attacks built around FT's green clothing, size, breathing, speed and head shape. She also rebutted the repeated father angle directly. The writing was raw and inconsistent, but the confidence and willingness to respond gave the showcase its competitive energy.",
        "lyricalThemes": "Appearance jokes, speed and stamina, direct rebuttals, family defence, youth versus experience and improvised pop-culture references.",
        "keyTechnicalHighlights": [
          {
            "title": "Fearless Energy",
            "description": "Blazn immediately attacks FT's appearance and does not defer to his greater battle experience."
          },
          {
            "title": "Visual Freestyles",
            "description": "The frog, green clothing, football, Sonic and volleyball lines are all built from simple images that the room can catch immediately."
          },
          {
            "title": "Direct Rebuttal",
            "description": "She challenges FT's fixation on her father and turns it into an accusation about his own unresolved family issues."
          },
          {
            "title": "Raw Structure",
            "description": "The freestyle format produces abrupt transitions and unfinished ideas, but Blazn remains engaged throughout."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "Blazn / Blazian",
        "theme": "Appearance and Colour",
        "bar": "You're a frog. You're fat. Funny, 'cause you're wearing green.",
        "explanation": "Blazn builds the opening freestyle directly from FT's appearance and clothing colour."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Green Scheme",
        "bar": "I like to smoke my green. I just wanna put you in my Rizzla and smoke you like weed.",
        "explanation": "FT's green clothing becomes the setup for rolling and smoking imagery."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Samurai Reference",
        "bar": "I ain't Chinese, Japanese, but I got a samurai.",
        "explanation": "The improvised line reaches for Japanese warrior imagery to give the freestyle a weapon reference."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Veteran Rebuttal",
        "bar": "I know you, bro. You were on the very first PenGame rap battle episode.",
        "explanation": "Blazn acknowledges FT's history while also framing him as an older figure from the platform's past."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Family Rebuttal",
        "bar": "You wanna talk about my dad? Yeah, he's over there. Where's your dad?",
        "explanation": "She answers FT's central angle immediately by contrasting her father's visible support with his absence."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Stamina",
        "bar": "Man, he running out of breath.",
        "explanation": "A live observation turns FT's physical exertion into a simple performance attack."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Football",
        "bar": "I kick his head like a football.",
        "explanation": "The direct sports image gives the freestyle a clear physical punch."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Speed",
        "bar": "I'm running just like Sonic. He can't roll like me.",
        "explanation": "Sonic the Hedgehog becomes a comparison for Blazn's speed and FT's inability to keep pace."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Psychological Rebuttal",
        "bar": "You wanna talk so much about my dad, it's funny. I know you've got some childhood trauma; that's what I feel in your aura.",
        "explanation": "Blazn turns FT's repeated subject into a criticism of why he is so fixated on it."
      },
      {
        "performer": "Blazn / Blazian",
        "theme": "Volleyball",
        "bar": "Your head is like a volleyball, so I'm gonna hit you with it.",
        "explanation": "A simple shape comparison produces one of her clearest improvised visual jokes."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Crowd Work",
        "bar": "She's rolling like she's one of the boys, but she's one of the girls.",
        "explanation": "FT opens by commenting on Blazn's posture and energy rather than relying on prepared material."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Father Angle",
        "bar": "Her dad shouldn't have allowed her into this world.",
        "explanation": "The harsh improvised line introduces the father angle that FT repeats throughout the exhibition."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Camera Control",
        "bar": "Cameraman, please, I beg you, follow me.",
        "explanation": "FT turns camera direction into part of the freestyle and uses movement to command the room."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Live Observation",
        "bar": "I'm here with your dad. He's skanking like a fiend. He's got white hair like me.",
        "explanation": "FT builds a rhyme from Blazn's father dancing in the room and their shared hair colour."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Shade Wordplay",
        "bar": "Take the shades off, you're not bad. There's your dad; I'm gonna throw shade on you.",
        "explanation": "Shades and throwing shade connect the visible glasses with verbal disrespect."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Parenting",
        "bar": "I've got six children to my name. It's mad.",
        "explanation": "FT uses his own experience as a parent to contrast himself with the father he is addressing in the room."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Rap Reference",
        "bar": "Trying to throw these millions like Eminem. Trust me, me and you can never be friends.",
        "explanation": "The freestyle reaches for Eminem as a rhyme and rap-status reference before closing the relationship down."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Technology Scheme",
        "bar": "It's all about phones and chargers. Don't understand, this ting, it's all commerce.",
        "explanation": "FT creates a loose freestyle chain around technology, charging and commercial exchange."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Rhyme Chain",
        "bar": "You're gonna tell the police, you're an informer. Importer, exporter.",
        "explanation": "The bar is driven by sound association, moving from informer into an improvised importer-exporter rhyme."
      },
      {
        "performer": "Forever Tapped / FT",
        "theme": "Freestyle Close",
        "bar": "You still got the glasses on. You got smoked, and your dad's not wrong. Right, it's done.",
        "explanation": "FT closes by returning to visible details in the room and declaring the freestyle finished."
      }
    ],
    "oddMoments": [
      "The host gives an explicit under-18 disclaimer before the battle begins.",
      "Both performers confirm that the wildcard clash is entirely off the dome.",
      "FT is given no control over the randomly selected beats.",
      "Blazn's father is present, dances during the battle and becomes FT's main freestyle subject.",
      "The host repeatedly resets the room as both battlers and the crowd interrupt each other.",
      "The battle ends with a supportive father-daughter moment and no official winner."
    ]
  },
  {
    "id": "pg-s04-skamz-vs-dan-dannah",
    "slug": "skamz-vs-dan-dannah",
    "mc1": "skamz",
    "mc2": "dan-dannah",
    "title": "SKAMZ vs DAN DANNAH",
    "date": "22-06-2023",
    "videoUrl": "https://www.youtube.com/watch?v=rwez7A43Pjs",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 1,
    "views": "108k",
    "customEp": "4x01",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "debatable",
    "statusNote": "No Official Winner",
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "Season 4 opened with a three-round heavyweight rematch between SKAMZ and DAN DANNAH. Margs explained that the season had moved away from the tournament format, leaving the audience to debate the result in the comments. SKAMZ attacked with animated delivery, recurring name flips and pop-culture references, while DAN DANNAH answered with a more controlled father-and-son angle, direct character attacks and reminders of their previous encounter. The transcript records no official verdict, making the battle a genuine audience decision.",
    "performanceAnalysis": [
      {
        "performer": "SKAMZ",
        "overview": "SKAMZ brought the louder and more unpredictable performance, using repeated hooks, aggressive delivery and fast switches between threats, jokes and references.",
        "lyricalThemes": "His material focused on DAN DANNAH's PenGame record, their shared loss to Efton, family disrespect, anime and gaming references, and the idea that battling SKAMZ is itself a scam.",
        "keyTechnicalHighlights": [
          {
            "title": "White Bandana Refrain",
            "description": "SKAMZ repeatedly linked DAN DANNAH's name to surrender, telling him that the wrong move should have ended with a white bandana."
          },
          {
            "title": "Name and Fraud Flips",
            "description": "He embraced the meaning of his own name and turned it into the claim that DAN DANNAH had been tricked simply by accepting the battle."
          },
          {
            "title": "Pop-Culture Chains",
            "description": "His rounds moved through Dragon Ball, Attack on Titan, Mortal Kombat, Mario Kart and Batman references, giving the performance a restless punchline-heavy style."
          }
        ]
      },
      {
        "performer": "DAN DANNAH",
        "overview": "DAN DANNAH delivered a steadier, more structured rebuttal built around seniority, discipline and the claim that SKAMZ was an apprentice challenging his master.",
        "lyricalThemes": "He attacked SKAMZ as fraudulent, feminine, cowardly and overconfident, while repeatedly presenting himself as the veteran, father figure and superior battle rapper.",
        "keyTechnicalHighlights": [
          {
            "title": "Father and Apprentice Angle",
            "description": "DAN framed SKAMZ as his younger, son and apprentice before turning an employment phrase into a death-sentence punchline."
          },
          {
            "title": "Scam Name Breakdown",
            "description": "He extended SKAMZ's name into a fraud and Santander scheme, arguing that the name itself revealed a fake persona."
          },
          {
            "title": "Previous-Battle Authority",
            "description": "DAN repeatedly referenced having beaten or outperformed SKAMZ before, using their history to support his claim of veteran status."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "SKAMZ",
        "theme": "Name Flip",
        "bar": "Don't know why you want war with me. Wrong move, should've thrown in a white bandana.",
        "explanation": "The surrender image doubles as a direct flip on DAN DANNAH's name and becomes SKAMZ's recurring first-round refrain."
      },
      {
        "performer": "SKAMZ",
        "theme": "Battle Record",
        "bar": "Don't talk about me losing to Efton, I swear you lost to Efton too. Don't talk about me not winning Pen Game, I can't lie, bro, you lost it too.",
        "explanation": "SKAMZ neutralizes two obvious attack angles by pointing out that DAN shares the same failures."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Authority",
        "bar": "You're my younger, my son, my apprentice. Now I will execute you, get him off with work, that's what I call a death sentence.",
        "explanation": "DAN combines his father-and-master angle with employment and execution meanings of a sentence."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Name Flip",
        "bar": "Why is your name called SKAMZ? Because you're fake, you're a fraud, you're a scam.",
        "explanation": "The direct breakdown anchors DAN's second round and turns SKAMZ's stage name into a character accusation."
      },
      {
        "performer": "SKAMZ",
        "theme": "Self-Aware Wordplay",
        "bar": "You probably think that you got a plan, but he didn't know versing SKAMZ is a scam.",
        "explanation": "SKAMZ converts the accusation against his name into a boast that accepting the clash was DAN's mistake."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Experience",
        "bar": "You got the opportunity to battle me, came up and you took it, but everybody thinks that I'm on smoke until it's time to hold bullets.",
        "explanation": "DAN closes by contrasting the excitement of accepting the battle with the pressure of facing him."
      },
      {
        "performer": "SKAMZ",
        "theme": "Gaming Wordplay",
        "bar": "I earned my title, bro, that's facts. I'm known as that guy that's murking rats. Now you gotta watch this man get murked, makes sense why I Pen Game Boy in me back.",
        "explanation": "SKAMZ links his PenGame reputation to the Game Boy handheld while presenting himself as an established battler."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Character Attack",
        "bar": "You rap aggressive, rule after passive. We on beef and you're a vegan, I'll eat him and I'll leave him cabbage.",
        "explanation": "DAN contrasts SKAMZ's aggressive delivery with what he sees as passive character, extending the food scheme through beef, veganism and cabbage."
      },
      {
        "performer": "SKAMZ",
        "theme": "Anime Wordplay",
        "bar": "Everyone knows that I like anime. This my attack on Titan.",
        "explanation": "SKAMZ turns DAN DANNAH's Titan nickname into a direct Attack on Titan reference."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Previous Battle",
        "bar": "Remember we've done this before. I spun you in front of everyone and they saw.",
        "explanation": "DAN uses their previous clash as evidence for his superiority and makes the rematch feel like unfinished business."
      }
    ],
    "oddMoments": [
      "Margs announced that Season 4 was no longer a tournament and explicitly left the result to viewers in the comments.",
      "SKAMZ briefly stopped and restarted his white-bandana refrain during round one.",
      "The closing transcript repeats part of Margs' outro."
    ],
    "coolMoments": [
      "The battle was introduced as a clash between PenGame heavyweights and the first battle of the returning season.",
      "Both MCs directly addressed their shared history with Efton and earlier PenGame appearances.",
      "The crowd stayed engaged through three full rounds and Margs described the battle as a strong way to open the season."
    ],
    "postBattleContext": "Margs closed the battle by asking viewers to decide who won. No judges or official winner are named in the transcript, so the archive records the result as debatable."
  },
  {
    "id": "pg-s04-sevz-vs-grams",
    "slug": "sevz-vs-grams",
    "mc1": "sevz",
    "mc2": "grams",
    "title": "SEVZ vs GRAMS",
    "date": "18-08-2023",
    "videoUrl": "https://www.youtube.com/watch?v=bKQyxyXpAr0",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 5,
    "views": "33k",
    "customEp": "4x05",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "debatable",
    "statusNote": "No Official Winner",
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "SEVZ and GRAMS delivered a fast, high-energy Season 4 clash that never settled into a formal judges' result. SEVZ leaned into clean writing, technical wordplay and structured punchlines about balance, control and elevation, while GRAMS answered with brash personality, street talk and crowd-ready one-liners. Both rappers had strong rounds and Margs closed by asking viewers to call the winner in the comments, so the battle is best treated as an audience-decision clash rather than an official judged result.",
    "performanceAnalysis": [
      {
        "performer": "SEVZ",
        "overview": "SEVZ sounded the cleaner and more technically organised of the two. His writing was packed with layered references, precise setups and clear punchline structures, and he repeatedly kept the battle focused on his own control of the room rather than getting dragged into pure chaos.",
        "lyricalThemes": "Cleanliness, technical control, status elevation, opponent breakdowns and schematic wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Clean Opener",
            "description": "He starts by calling himself clean and untouchable, using the OCD/OTP angle to frame himself as someone the room cannot dirt up."
          },
          {
            "title": "Superhero Schemes",
            "description": "His Tony Stark and Clark Kent references let him move between comic-book and hero imagery while still landing direct shots at GRAMS."
          },
          {
            "title": "Technical Finish",
            "description": "The rat, mousetrap, downhill gradient and guillotine bars give his rounds a consistent feeling of control, sharpening the attack with clear visual ideas."
          }
        ]
      },
      {
        "performer": "GRAMS",
        "overview": "GRAMS brought the louder, more chaotic energy. He relied on direct disrespect, character attacks and crowd-facing confidence, and he recovered well when he had to restart part of his second round.",
        "lyricalThemes": "Street posture, personal disrespect, career/status attacks, crowd control and freestyle recovery.",
        "keyTechnicalHighlights": [
          {
            "title": "Immediate Pressure",
            "description": "He opens by attacking SEVZ's age, confidence and ability to handle the clash, giving the battle a confrontational tone from the start."
          },
          {
            "title": "Career and Status Angles",
            "description": "He keeps pushing the idea that SEVZ is too young or too early in his journey to stand with him, using work, money and experience as recurring lines of attack."
          },
          {
            "title": "Recovery Under Pressure",
            "description": "When he loses his place in round two, he resets and keeps going, which helps preserve his live-room energy even when the structure slips."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "SEVZ",
        "theme": "Cleanliness",
        "bar": "I rap clean, like I'm OCD",
        "explanation": "A simple but effective opener that frames SEVZ as meticulous, tidy and hard to catch slipping."
      },
      {
        "performer": "SEVZ",
        "theme": "Superhero Scheme",
        "bar": "You can call me Tony Stark, I'ma let some things off my chest",
        "explanation": "This combines the Iron Man image with the idea of releasing heavy material, giving the punchline both style and forward momentum."
      },
      {
        "performer": "SEVZ",
        "theme": "Threat and Control",
        "bar": "If you wanna fight, my pen's my guardian angel",
        "explanation": "The line turns his pen into a weapon and protector at the same time, showing how he sees writing as the thing that keeps him dangerous."
      },
      {
        "performer": "GRAMS",
        "theme": "Direct Challenge",
        "bar": "You should've dropped out this battle as soon as you knew you was versing Grams",
        "explanation": "A blunt opener that immediately frames the clash as one SEVZ should have avoided from the beginning."
      },
      {
        "performer": "GRAMS",
        "theme": "Career Angle",
        "bar": "When I was your age, I ain't have no time to be writing bars I was putting in work",
        "explanation": "GRAMS uses age and work experience as proof that SEVZ is still too early in his journey to compete with him."
      },
      {
        "performer": "GRAMS",
        "theme": "Status Flip",
        "bar": "Turn this FG to a 3.5",
        "explanation": "He turns the battle into a grading or rating flip, trying to reduce SEVZ's level while keeping the line sharp and memorable."
      }
    ],
    "oddMoments": [
      "Margs introduces SEVZ as \"new to the Pen Game\" and a \"Young Gunna\" before the clash properly starts.",
      "GRAMS loses his place in round two and asks to restart, briefly breaking the rhythm before carrying on.",
      "The battle ends with Margs telling viewers to comment who they think won instead of naming an official result."
    ],
    "postBattleContext": "Margs closes by asking viewers to comment who won, so the archive records the clash as debatable rather than giving it an official winner."
  },
  {
    "id": "pg-s04-skamz-vs-grams",
    "slug": "skamz-vs-grams",
    "mc1": "skamz",
    "mc2": "grams",
    "title": "SKAMZ vs GRAMS",
    "date": "04-11-2023",
    "videoUrl": "https://www.youtube.com/watch?v=2aNOEFAWkV8",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 16,
    "views": "57k",
    "customEp": "4x16",
    "stage": null,
    "group": null,
    "tag": null,
    "winner": "grams",
    "clashSummary": "Grams and Skamz clashed in a highly anticipated match-up that ended up being one-sided. Grams delivered three solid rounds of lyrical performance, utilizing pirate hunter metaphors, anime callbacks, and sharp critiques of Skamz's career. Skamz struggled to match the volume and focus, admitting to a flop in the second round and ultimately dropping the mic in the third round due to lack of preparation. Grams was declared the winner after Skamz's forfeit.",
    "performanceAnalysis": [
      {
        "performer": "skamz",
        "overview": "Skamz had solid energy in his opening round but completely lost composure, leading to a freestyle attempt in the second round and a forfeit in the third.",
        "lyricalThemes": "Disrespect, personal beef, and name wordplay.",
        "keyTechnicalHighlights": [
          {
            "title": "Amsterdam Travel Line",
            "description": "A clean setup sending Grams 'high' like Amsterdam."
          },
          {
            "title": "Intent to Supply Angle",
            "description": "Threatening to pull Grams out of the boot like a drug charge."
          },
          {
            "title": "Nanny Callback",
            "description": "A repeated warning using family status as pressure."
          }
        ]
      },
      {
        "performer": "grams",
        "overview": "Grams brought premium lyricism and consistent flows, controlling the tempo and building strong narrative angles throughout all three rounds.",
        "lyricalThemes": "Anime references (Zoro/Luffy), street life authenticity, and career longevity.",
        "keyTechnicalHighlights": [
          {
            "title": "Star/Alignment Scheme",
            "description": "Flipping Skamz's star status by threatening to shoot him out of alignment."
          },
          {
            "title": "Melanin Reference",
            "description": "Boasting about physical and presence advantages in the third round."
          },
          {
            "title": "Erling Haaland Metaphor",
            "description": "Highlighting his clinical finishing style on the beat."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "skamz",
        "theme": "Travel",
        "bar": "Like Amsterdam, I'll send him high, he'll never land.",
        "explanation": "A standard wordplay on getting high in Amsterdam and Neverland."
      },
      {
        "performer": "skamz",
        "theme": "Street",
        "bar": "I'll drag grams out of the boot, like you're getting charged for intent to supply.",
        "explanation": "A clever punchline tying the drug unit grams to the back of a car (the boot)."
      },
      {
        "performer": "grams",
        "theme": "Anime",
        "bar": "Every other line, I'm a pirate hunter. Like Zoro, I'll cut through diamonds, so fuck who's shining.",
        "explanation": "A direct reference to One Piece character Zoro, framing his writing as sharp enough to cut diamonds."
      },
      {
        "performer": "grams",
        "theme": "Status",
        "bar": "You can be a star, I will still shoot you out of alignment.",
        "explanation": "Clever astronomy wordplay used to counter Skamz's status as a headline star."
      },
      {
        "performer": "grams",
        "theme": "Football",
        "bar": "On attack I'm like Erling Haaland. Commando, my finishing brilliant.",
        "explanation": "Comparing his rapid flow and clinical finishing to Manchester City striker Haaland."
      }
    ],
    "oddMoments": [
      "Skamz openly admitted to flopping his second round and freestyle-ended it.",
      "Skamz forfeited his third round, dropping the mic and walking off."
    ],
    "coolMoments": [
      "Grams' flow switch in the third round on the grime beat was a highlight.",
      "Skamz's opening round had strong delivery before the stumbles."
    ],
    "postBattleContext": "Due to Skamz's forfeit in the third round, Grams was the consensus winner of the battle."
  },
  {
    "id": "pg-s04-2023-09-23-f-don-vs-whoisorion",
    "slug": "f-don-vs-whoisorion",
    "mc1": "f-don",
    "mc2": "whoisorion",
    "winner": "f-don",
    "title": "F-DON vs WHOISORION",
    "date": "23-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=xT7S7Z979hA",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 10,
    "views": "115k",
    "customEp": "4x10",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "F-DON and WHOISORION opened the night with a battle that mixed direct name-flips, body-shaming, family angles and a steady escalation in crowd hostility. WHOISORION came in first with a barrage aimed at F-DON's name, weight, age and Uber-driver image, while F-DON answered with father-and-son framing, class and ethnicity angles and a confident final-round closure. The transcript ends with Margs treating it as a strong battle rather than a formally judged one, and the archive records F-DON as the listed winner.",
    "performanceAnalysis": [
      {
        "performer": "F-DON",
        "overview": "F-DON brought veteran poise, a better sense of closure and the clearest final-round structure, especially when he tied his opponent back to family and status.",
        "lyricalThemes": "Father-and-son framing, authority, final-round closers, status, and turning the battle back on the opponent's identity.",
        "keyTechnicalHighlights": [
          {
            "title": "Father Angle",
            "description": "He repeatedly framed WHOISORION as a son-like figure or a battle he had already outgrown."
          },
          {
            "title": "Back Against Orion",
            "description": "The Orion naming angle was used as an anchor for several of his strongest bars."
          },
          {
            "title": "Final Round Control",
            "description": "His last round tightened up the battle and gave him the cleanest close."
          }
        ]
      },
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION brought the more relentless attack style, especially in the first round where he went hard on F-DON's age, appearance and career.",
        "lyricalThemes": "Age, weight, Uber driving, name flips, family and identity insecurity.",
        "keyTechnicalHighlights": [
          {
            "title": "Old Man Angle",
            "description": "He repeatedly made F-DON's age and appearance the core of his attack."
          },
          {
            "title": "Uber Driver Refrain",
            "description": "WHOISORION returned to the Uber angle as a way to reduce F-DON's credibility."
          },
          {
            "title": "Aggressive Open",
            "description": "His first round set the tone with the most direct pressure of the battle."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "WHOISORION",
        "theme": "Age",
        "bar": "You're so old, you probably bought it for Tony Blair.",
        "explanation": "A sharp age attack that ties F-DON to an earlier political era."
      },
      {
        "performer": "WHOISORION",
        "theme": "Job Angle",
        "bar": "Shut your mouth and go back to your Uber.",
        "explanation": "A clean reduction of F-DON's status to his day job."
      },
      {
        "performer": "F-DON",
        "theme": "House Angle",
        "bar": "Pen Game is my house now, so welcome home, daughter.",
        "explanation": "A veteran flex that frames the entire battle as F-DON's territory while flipping Prynlee into a daughter figure."
      },
      {
        "performer": "WHOISORION",
        "theme": "Weight",
        "bar": "Your belly's bigger than mine and Ashley's skinny. No way you could 69.",
        "explanation": "A body-shaming punchline that extends into a sexualized joke."
      },
      {
        "performer": "F-DON",
        "theme": "Anime",
        "bar": "I am Goku, your Gohan.",
        "explanation": "A simple but effective father-and-son anime reference."
      },
      {
        "performer": "WHOISORION",
        "theme": "Family",
        "bar": "My bro let it ring out, you and your bitch. That's how you arrange a marriage.",
        "explanation": "A marriage-ring punchline that turns a weapon sound into a family insult."
      },
      {
        "performer": "F-DON",
        "theme": "Wisdom",
        "bar": "I'm inspired by guys that provide wisdom. You're inspired by guys inside prison.",
        "explanation": "A clean contrast angle that separates their influences and identities."
      },
      {
        "performer": "WHOISORION",
        "theme": "Body",
        "bar": "I swear you are a little twat. I see you punching a punch machine and I laugh.",
        "explanation": "A crowd-friendly dig at F-DON's toughness and presentation."
      },
      {
        "performer": "F-DON",
        "theme": "Hero",
        "bar": "I'm the MC that runs shit like River Run in my element.",
        "explanation": "A confident self-placement bar that reinforces his veteran status."
      },
      {
        "performer": "WHOISORION",
        "theme": "Closing",
        "bar": "Everybody knows you ain't been bad. You're still serving up a bench in a bin bag.",
        "explanation": "A final insult that tries to strip F-DON of any hard-man image."
      }
    ],
    "oddMoments": [
      "The transcript has repeated crowd-reaction loops and some clipped commentary.",
      "WHOISORION's first round is unusually long and relentless.",
      "Margs treats the battle as a strong opener rather than a formal judged contest."
    ],
    "coolMoments": [
      "The battle sets the tone for Season 4 with two loud, heavyweight performances.",
      "F-DON's final round feels like the cleanest close in the clash.",
      "WHOISORION's first-round pressure keeps the battle competitive from the jump."
    ],
    "postBattleContext": "The transcript ends with Margs asking viewers to decide the winner. The archive keeps F-DON as the listed winner and treats the battle as an audience-calls moment rather than a formal judged result."
  },
  {
    "id": "pg-s04-2023-09-30-ft-vs-prynlee",
    "slug": "ft-vs-prynlee",
    "mc1": "ft",
    "mc2": "prynlee",
    "winner": "ft",
    "title": "F.T vs PRYNLEE",
    "displayTitle": "F.T vs PRYNLEE",
    "date": "30-09-2023",
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
    "judges": [],
    "clashSummary": "F-DON and WHOISORION opened the night with a battle that mixed direct name-flips, body-shaming, family angles and a steady escalation in crowd hostility. WHOISORION came in first with a barrage aimed at F-DON's name, weight, age and Uber-driver image, while F-DON answered with father-and-son framing, class and ethnicity angles and a confident final-round closure. The transcript ends with Margs treating it as a strong battle rather than a formally judged one, and the archive records F-DON as the listed winner.",
    "performanceAnalysis": [
      {
        "performer": "F-DON",
        "overview": "F-DON brought veteran poise, a better sense of closure and the clearest final-round structure, especially when he tied his opponent back to family and status.",
        "lyricalThemes": "Father-and-son framing, authority, final-round closers, status, and turning the battle back on the opponent's identity.",
        "keyTechnicalHighlights": [
          {
            "title": "Father Angle",
            "description": "He repeatedly framed WHOISORION as a son-like figure or a battle he had already outgrown."
          },
          {
            "title": "Back Against Orion",
            "description": "The Orion naming angle was used as an anchor for several of his strongest bars."
          },
          {
            "title": "Final Round Control",
            "description": "His last round tightened up the battle and gave him the cleanest close."
          }
        ]
      },
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION brought the more relentless attack style, especially in the first round where he went hard on F-DON's age, appearance and career.",
        "lyricalThemes": "Age, weight, Uber driving, name flips, family and identity insecurity.",
        "keyTechnicalHighlights": [
          {
            "title": "Old Man Angle",
            "description": "He repeatedly made F-DON's age and appearance the core of his attack."
          },
          {
            "title": "Uber Driver Refrain",
            "description": "WHOISORION returned to the Uber angle as a way to reduce F-DON's credibility."
          },
          {
            "title": "Aggressive Open",
            "description": "His first round set the tone with the most direct pressure of the battle."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "WHOISORION",
        "theme": "Age",
        "bar": "You're so old, you probably bought it for Tony Blair.",
        "explanation": "A sharp age attack that ties F-DON to an earlier political era."
      },
      {
        "performer": "WHOISORION",
        "theme": "Job Angle",
        "bar": "Shut your mouth and go back to your Uber.",
        "explanation": "A clean reduction of F-DON's status to his day job."
      },
      {
        "performer": "F-DON",
        "theme": "House Angle",
        "bar": "Pen Game is my house now, so welcome home, son.",
        "explanation": "A veteran flex that frames the entire battle as F-DON's territory."
      },
      {
        "performer": "WHOISORION",
        "theme": "Weight",
        "bar": "Your belly's bigger than mine and Ashley's skinny. No way you could 69.",
        "explanation": "A body-shaming punchline that extends into a sexualized joke."
      },
      {
        "performer": "F-DON",
        "theme": "Anime",
        "bar": "I am Goku, your Gohan.",
        "explanation": "A simple but effective father-and-son anime reference."
      },
      {
        "performer": "WHOISORION",
        "theme": "Family",
        "bar": "My bro let it ring out, you and your bitch. That's how you arrange a marriage.",
        "explanation": "A marriage-ring punchline that turns a weapon sound into a family insult."
      },
      {
        "performer": "F-DON",
        "theme": "Wisdom",
        "bar": "I'm inspired by guys that provide wisdom. You're inspired by guys inside prison.",
        "explanation": "A clean contrast angle that separates their influences and identities."
      },
      {
        "performer": "WHOISORION",
        "theme": "Body",
        "bar": "I swear you are a little twat. I see you punching a punch machine and I laugh.",
        "explanation": "A crowd-friendly dig at F-DON's toughness and presentation."
      },
      {
        "performer": "F-DON",
        "theme": "Hero",
        "bar": "I'm the MC that runs shit like River Run in my element.",
        "explanation": "A confident self-placement bar that reinforces his veteran status."
      },
      {
        "performer": "WHOISORION",
        "theme": "Closing",
        "bar": "Everybody knows you ain't been bad. You're still serving up a bench in a bin bag.",
        "explanation": "A final insult that tries to strip F-DON of any hard-man image."
      }
    ],
    "oddMoments": [
      "The transcript has repeated crowd-reaction loops and some clipped commentary.",
      "WHOISORION's first round is unusually long and relentless.",
      "Margs treats the battle as a strong opener rather than a formal judged contest."
    ],
    "coolMoments": [
      "The battle sets the tone for Season 4 with two loud, heavyweight performances.",
      "F-DON's final round feels like the cleanest close in the clash.",
      "WHOISORION's first-round pressure keeps the battle competitive from the jump."
    ],
    "postBattleContext": "The transcript ends with Margs asking viewers to decide the winner. The archive keeps F-DON as the listed winner and treats the battle as an audience-calls moment rather than a formal judged result."
  },
  {
    "id": "pg-s04-2023-10-12-whoisorion-vs-renaya",
    "slug": "whoisorion-vs-renaya",
    "mc1": "whoisorion",
    "mc2": "renaya",
    "winner": "whoisorion",
    "title": "WHOISORION vs RENAYA",
    "date": "12-10-2023",
    "videoUrl": "https://www.youtube.com/watch?v=ic39lVGmkr0",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 15,
    "views": "118k",
    "customEp": "4x15",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "WHOISORION and RENAYA battled through a messy but lively Season 4 clash that mixed gendered insults, 'who's Orion?' repetition, sexual disrespect, body-shaming and a late-round stop-start finish. WHOISORION came out first with a barrage of attacks aimed at RENAYA's appearance, credibility and femininity, while RENAYA fought back with a stronger second-half presence and a third-round comeback that pushed the battle toward a possible decider. The transcript ends with Margs saying the battle didn't finish exactly how he wanted, but that it was still a dope clash. The archive keeps WHOISORION as the listed winner.",
    "performanceAnalysis": [
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION was the more forceful opener, using direct disrespect and repeated name-refrains to keep RENAYA under pressure early.",
        "lyricalThemes": "Gendered insults, body-shaming, sexual disrespect, identity questions and crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Who's Orion Refrain",
            "description": "He repeatedly asks 'Who's Orion?' as a way to dominate the room and destabilize his opponent."
          },
          {
            "title": "First-Round Pressure",
            "description": "His opening round stays aggressive and relentless, with a lot of audience-facing insult chains."
          },
          {
            "title": "Career Damage Claim",
            "description": "He frames the battle as something that could damage RENAYA's rap career if she stays in the clash."
          }
        ]
      },
      {
        "performer": "RENAYA",
        "overview": "RENAYA takes longer to warm up, but her third-round material is the clearest stretch in the transcript and gives the battle real late movement.",
        "lyricalThemes": "Rebuttal energy, self-definition, lyrical aggression and closing-round recovery.",
        "keyTechnicalHighlights": [
          {
            "title": "Late Recovery",
            "description": "Her final round is the strongest attempt to turn the tide and get the room back on her side."
          },
          {
            "title": "Lyrical Criminal",
            "description": "She pushes a repeated self-description that tries to reframe the fight around skill rather than the abuse around her."
          },
          {
            "title": "Stop-Start Resistance",
            "description": "She keeps going even as the battle gets interrupted and reset near the end."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "WHOISORION",
        "theme": "Gender",
        "bar": "There's no other female rapper. It's just you.",
        "explanation": "A blunt attempt to isolate RENAYA as the only woman in the room and make her feel exposed."
      },
      {
        "performer": "WHOISORION",
        "theme": "Kitchen Angle",
        "bar": "Bitch, you should be cooking. Get back to the kitchen. Drop that mic. Let me hand you the mittens.",
        "explanation": "A domestic insult chain that turns into a kitchen-and-mittens punchline."
      },
      {
        "performer": "WHOISORION",
        "theme": "Refrain",
        "bar": "Who is Orion? Who is Orion?",
        "explanation": "A repeated motif that becomes the battle's signature chant."
      },
      {
        "performer": "RENAYA",
        "theme": "Self-Description",
        "bar": "I'm a lyrical criminal.",
        "explanation": "A clean declaration of identity that starts her comeback section."
      },
      {
        "performer": "RENAYA",
        "theme": "Rebuttal",
        "bar": "You spent money to look fly before buying a buggy.",
        "explanation": "A direct insult that flips the opponent's image back on him."
      },
      {
        "performer": "WHOISORION",
        "theme": "Body",
        "bar": "You're sounding really quiet. This little piece of energy for going to your diet.",
        "explanation": "A body-shaming line that keeps the pressure on RENAYA's appearance."
      },
      {
        "performer": "RENAYA",
        "theme": "Perseverance",
        "bar": "Everything you're in if it's a ripple.",
        "explanation": "One of the more compact lines from her late-round recovery."
      },
      {
        "performer": "WHOISORION",
        "theme": "Closing",
        "bar": "I'm a bad bitch. Savage. I'm real life badness.",
        "explanation": "A swagger-heavy closing run that keeps him in control of the room."
      }
    ],
    "oddMoments": [
      "The battle has a clear stop-start feel near the end.",
      "WHOISORION's 'Who is Orion?' chant becomes a repeated running joke.",
      "Margs says the battle didn't finish exactly how he wanted."
    ],
    "coolMoments": [
      "RENAYA's third-round comeback gives the clash a real sense of escalation.",
      "WHOISORION's opening barrage is one of the loudest stretches in the battle.",
      "The ending feels raw and unresolved in a way that suits the room's energy."
    ],
    "postBattleContext": "Margs closes by asking viewers to comment who won and says the battle didn't finish as expected, so the archive treats it as an audience-call clash. WHOISORION remains listed as the winner."
  },
  {
    "id": "pg-s04-2023-10-14-skamz-vs-kandi",
    "slug": "skamz-vs-kandi",
    "mc1": "skamz",
    "mc2": "kandi",
    "winner": "kandi",
    "title": "SKAMZ vs KANDI",
    "date": "14-10-2023",
    "videoUrl": "https://www.youtube.com/watch?v=aHXWvEutw0w",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 20,
    "views": "142k",
    "customEp": "4x20",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Skamz and Kandi battled in a chaotic match-up that was decided in the final round. Kandi got a reload in the first round after an early stumble but recovered to spit highly disrespectful bars, including a line about Dan Dannah. Skamz answered with aggressive punchlines targeting Kandi's girlfriend and street credibility. In the third round, Kandi delivered a fast-paced grime flow that won the room, while Skamz choked and dropped the mic. The host called the battle for Kandi due to Skamz's forfeit.",
    "performanceAnalysis": [
      {
        "performer": "skamz",
        "overview": "Skamz had strong energy in rounds one and two but choked in the third round, dropping the mic and forfeiting the battle.",
        "lyricalThemes": "Girlfriend insults, fake badman claims, and street violence.",
        "keyTechnicalHighlights": [
          {
            "title": "Tasha / Whore Setup",
            "description": "A repeated, aggressive punchline targeting Kandi's girlfriend."
          },
          {
            "title": "PlayStation Theft",
            "description": "A hilarious line about sleeping with Kandi's mother and stealing his console."
          },
          {
            "title": "Mickey Mouse / Boots Metaphor",
            "description": "Mocking Kandi's outfit and appearance."
          }
        ]
      },
      {
        "performer": "kandi",
        "overview": "Kandi overcame an early choke, utilizing his reload to deliver a solid performance and closing with a strong grime verse.",
        "lyricalThemes": "Insiders, feds, street life, and grime flows.",
        "keyTechnicalHighlights": [
          {
            "title": "Dannah Butt Line",
            "description": "A highly controversial bar about Dan Dannah that shocked the room."
          },
          {
            "title": "Epstein Island/Savile setup",
            "description": "A dark setup targeting Skamz's parenting."
          },
          {
            "title": "Surgical / Grime Flow",
            "description": "Slicing through Skamz with high-speed grime delivery in the third round."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "skamz",
        "theme": "Humor",
        "bar": "I found out he still lives with his momma, I gave that bitch dick and stole your PlayStation.",
        "explanation": "A classic mom joke combined with game console theft to disarm Kandi."
      },
      {
        "performer": "skamz",
        "theme": "Wordplay",
        "bar": "This demon's getting demonetised... I got God on my side.",
        "explanation": "Clever play on 'demon' and 'demonetised' matching the YouTube format."
      },
      {
        "performer": "kandi",
        "theme": "Disrespect",
        "bar": "Sniff crack out of Dandana's arsecheeks.",
        "explanation": "An extremely vulgar line targeting league regular Dan Dannah."
      },
      {
        "performer": "kandi",
        "theme": "Insult",
        "bar": "You wear panties there that are lacy, tuck your dick in between your legs and pretend you're a lady.",
        "explanation": "A direct attack questioning Skamz's masculinity."
      },
      {
        "performer": "kandi",
        "theme": "Violence",
        "bar": "With this sword man I'll chop man's face off.",
        "explanation": "An aggressive grime-style delivery closing his final round."
      }
    ],
    "oddMoments": [
      "Kandi had a complete restart in the first round which caused tension.",
      "Skamz dropped the mic in the third round after a bad stumble, leading to his defeat."
    ],
    "coolMoments": [
      "Kandi's transition into a grime beat in the third round.",
      "The high energy and back-and-forth shouting in the room."
    ],
    "postBattleContext": "Kandi was declared the winner after Skamz choked and dropped the mic in his final round."
  },
  {
    "id": "pg-s04-2023-11-12-f-don-vs-jc",
    "slug": "f-don-vs-jc",
    "mc1": "f-don",
    "mc2": "jc",
    "winner": "f-don",
    "title": "F-DON vs JC",
    "date": "12-11-2023",
    "videoUrl": "https://www.youtube.com/watch?v=1ak-PYsWcm4",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 17,
    "views": "92k",
    "customEp": "4x17",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "F-Don faced JC in a battle that highlighted the gap between experienced league veterans and newcomers. JC stepped up first but struggled to construct structured rounds, resorting to short freestyle attempts and forgetting his bars. F-Don capitalized on this with three clean, high-performance rounds, showcasing his technical wordplay, references to Goku and Saitama, and strong South London angles. JC was unable to mount a serious challenge, giving F-Don a dominant victory.",
    "performanceAnalysis": [
      {
        "performer": "f-don",
        "overview": "F-Don showed why he is a top lyricist in the league, dropping layered punches and executing his rounds with supreme confidence.",
        "lyricalThemes": "Pop culture (Goku/Saitama), South London dominance, and high top hair insults.",
        "keyTechnicalHighlights": [
          {
            "title": "Saitama Reference",
            "description": "Using One-Punch Man to frame his punchline efficiency."
          },
          {
            "title": "Ten Years / Hair Scheme",
            "description": "A brutal double-meaning on JC's hair and lack of progress."
          },
          {
            "title": "Transgender/Benders Angle",
            "description": "A shocking personal punchline targeting JC's lifestyle."
          }
        ]
      },
      {
        "performer": "jc",
        "overview": "JC was clearly nervous during his debut, struggling with the beat and failing to deliver prepared material in his second and third rounds.",
        "lyricalThemes": "West London claims, freestyle energy, and simple insults.",
        "keyTechnicalHighlights": [
          {
            "title": "Bunion Metaphor",
            "description": "A comparison about busting F-Don like a bunion."
          },
          {
            "title": "Dover Cliffs Image",
            "description": "A visual description of flying off the cliffs of Dover."
          },
          {
            "title": "Alicia Keys Flip",
            "description": "Addressing F-Don't appearance in his short second round."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "f-don",
        "theme": "Anime",
        "bar": "They call me Saitama. Cause one punch line is all I need to win.",
        "explanation": "A One-Punch Man reference to show he can finish the battle in one line."
      },
      {
        "performer": "f-don",
        "theme": "Anime",
        "bar": "They call me Goku because every season I'm on new levels.",
        "explanation": "Dragon Ball Z reference representing his growth and superiority."
      },
      {
        "performer": "f-don",
        "theme": "Appearance",
        "bar": "You've had the same hairstyle for ten years... you wouldn't win this battle if I gave you ten years.",
        "explanation": "A double-meaning punchline on JC's hair and a prison sentence."
      },
      {
        "performer": "f-don",
        "theme": "Status",
        "bar": "You couldn't find somebody more nameless. Margs, you're gonna need to pick up the mic and bring me someone who's famous.",
        "explanation": "Challenging the host to bring him better opponents rather than debutants."
      },
      {
        "performer": "jc",
        "theme": "Energy",
        "bar": "Hopefully I'll be back on pen game, and bust you just like a bunion.",
        "explanation": "A rhyme setup comparing F-Don to a bunion breakout."
      }
    ],
    "oddMoments": [
      "JC kept stopping and apologizing, asking to freestyle because he forgot his written material.",
      "F-Don started his final round, stopped, wheeled the beat, and restarted to make sure he delivered it perfectly."
    ],
    "coolMoments": [
      "F-Don't rapid flow delivery on the acapella section of his first round.",
      "The crowd's reaction to F-Don's South London line."
    ],
    "postBattleContext": "F-Don won the battle unanimously after JC repeatedly choked and failed to complete his rounds."
  },
  {
    "id": "pg-s04-2023-11-25-skamz-vs-whoisorion",
    "slug": "skamz-vs-whoisorion",
    "mc1": "skamz",
    "mc2": "whoisorion",
    "winner": "whoisorion",
    "title": "SKAMZ vs WHOISORION",
    "date": "25-11-2023",
    "videoUrl": "https://www.youtube.com/watch?v=uSyg7e_dua8",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 18,
    "views": "142k",
    "customEp": "4x18",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Skamz and WhoIsOrion went head-to-head in a chaotic and deeply personal battle at a live show in Peckham. Skamz opened with a barrage of weight-related insults and fat jokes, setting an aggressive tone. WhoIsOrion responded with structured, highly disrespectful rounds, focusing on Skamz's nephew and family. In the third round, WhoIsOrion brought out a doll representing 'baby scams' as a prop, using it to mock Skamz's parenting and uncle status. WhoIsOrion won the crowd vote in a very close and dramatic finish.",
    "performanceAnalysis": [
      {
        "performer": "skamz",
        "overview": "Skamz brought his signature high energy and rapid-fire delivery, but relied heavily on weight jokes and simple disrespect.",
        "lyricalThemes": "Weight insults, Big Mac setups, and physical threats.",
        "keyTechnicalHighlights": [
          {
            "title": "Big Mac Scheme",
            "description": "An extended sequence comparing WhoIsOrion to a fast-food order."
          },
          {
            "title": "Amsterdam/High Setup",
            "description": "An aggressive line about sending his opponent to the lord."
          },
          {
            "title": "Samurai Sword Angle",
            "description": "Drawing a sword metaphorically to slice through the competition."
          }
        ]
      },
      {
        "performer": "whoisorion",
        "overview": "WhoIsOrion matched Skamz's disrespect but structured his rounds with superior punchlines, callbacks, and a devastating prop reveal.",
        "lyricalThemes": "Family secrets, the nephew angle, and anime/Top Boy flips.",
        "keyTechnicalHighlights": [
          {
            "title": "Bitch Behind Bars / Remy Scheme",
            "description": "Comparing Skamz's internet presence to Remy Ma behind bars."
          },
          {
            "title": "Epstein/Savile Lines",
            "description": "Dark humor setups targeting Skamz's nephew's safety."
          },
          {
            "title": "Baby Scams Prop",
            "description": "Bringing a doll on stage to physically act out his third-round threats."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "skamz",
        "theme": "Weight",
        "bar": "Can I get a number nine large with extra dip? Type of fat bitch.",
        "explanation": "A GTA Big Smoke reference used to insult Orion's weight."
      },
      {
        "performer": "skamz",
        "theme": "Weight",
        "bar": "If he said he got a Mac, look, yeah, a big Mac meal.",
        "explanation": "Flipping Orion's firearm claims into a McDonald's meal joke."
      },
      {
        "performer": "whoisorion",
        "theme": "Status",
        "bar": "He's only bad in his pen, them pad is strictly rap. He's really a bitch behind bars. Like Remy, we all know that.",
        "explanation": "A double-meaning scheme comparing paper bars to prison bars and Remy Ma."
      },
      {
        "performer": "whoisorion",
        "theme": "Disrespect",
        "bar": "Why did Orion cross the road? To bust in his mother's mouth.",
        "explanation": "A highly offensive joke subverting the classic chicken-crossing-the-road setup."
      },
      {
        "performer": "whoisorion",
        "theme": "Family",
        "bar": "I feel like a victim. I'll bring Jimmy Savile back from the dead, just so we can babysit him.",
        "explanation": "A dark punchline about babysitting Skamz's nephew with a notorious historic figure."
      }
    ],
    "oddMoments": [
      "WhoIsOrion brought a doll representing Skamz's nephew to the stage and threw it on the floor.",
      "Skamz kept interrupting WhoIsOrion's rounds, leading to minor arguments on stage."
    ],
    "coolMoments": [
      "WhoIsOrion's crowd-pulling third round which completely shifted the room's energy.",
      "The maturity shown at the end where both MCs paid respect to each other."
    ],
    "postBattleContext": "WhoIsOrion was declared the winner by crowd noise after a strong third-round performance."
  },
  {
    "id": "pg-s04-2023-12-10-ren-dmc-vs-renaya",
    "slug": "ren-dmc-vs-renaya",
    "mc1": "ren-dmc",
    "mc2": "renaya",
    "winner": "ren-dmc",
    "title": "REN DMC vs RENAYA",
    "date": "10-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=Ur4QeBIu0zc",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 19,
    "views": "138k",
    "customEp": "4x19",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Ren DMC faced Renaya in a highly anticipated battle that turned out to be a clean sweep. Renaya struggled with nerves and stumbled in all three rounds, failing to complete most of her verses. Ren DMC took advantage of this by delivering three highly polished, aggressive, and creative rounds. He used personal angles about Renaya's parenting, her internet presence, and compared her to Jack from Top Boy. Ren DMC won the battle easily, proving his status as a top contender.",
    "performanceAnalysis": [
      {
        "performer": "ren-dmc",
        "overview": "Ren DMC delivered a masterclass in performance and control, keeping his energy high and adapting to Renaya's chokes with devastating punchlines.",
        "lyricalThemes": "Name flips (Renaya/Oye), parenting angles, and Brixton/Top Boy comparisons.",
        "keyTechnicalHighlights": [
          {
            "title": "Alicia Keys/Brixton Scheme",
            "description": "A smooth opening flow comparing Renaya to a Brixton version of Alicia Keys."
          },
          {
            "title": "Heady One Name-Flip",
            "description": "A witty punchline comparing Renaya's lifestyle to Headie One."
          },
          {
            "title": "Christmas Dinner / Six Man Inner",
            "description": "A holiday-themed double-entendre that hit hard in the room."
          }
        ]
      },
      {
        "performer": "renaya",
        "overview": "Renaya was unable to match Ren DMC's experience, choking repeatedly and leaving most of her rounds unfinished.",
        "lyricalThemes": "Female empowerment, sex insults, and name similarity.",
        "keyTechnicalHighlights": [
          {
            "title": "Cyclical Daddy Issues",
            "description": "An opening angle addressing Ren DMC's role as a father."
          },
          {
            "title": "Stella Artois / Fella Setup",
            "description": "A simple comparison attacking Ren DMC's lifestyle."
          },
          {
            "title": "Teresa / Retard Line",
            "description": "A short setup in her third round addressing Ren DMC's family."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "ren-dmc",
        "theme": "Parenting",
        "bar": "Lift my foot up and sky that kid.",
        "explanation": "Ren DMC explaining how he would deny a child if he had one with Renaya."
      },
      {
        "performer": "ren-dmc",
        "theme": "Identity",
        "bar": "On Pen Game, your name is Renea, but on the road, your name is Oye.",
        "explanation": "A direct name-flip calling out her street rep vs her battle rep."
      },
      {
        "performer": "ren-dmc",
        "theme": "Wordplay",
        "bar": "You give head to everyone, your rap name should have been Heady One.",
        "explanation": "A pun on Headie One's name used as a personal attack."
      },
      {
        "performer": "ren-dmc",
        "theme": "Holiday",
        "bar": "I was in a yard singing Jingle Bells... she was in a yard having Six Man Inner.",
        "explanation": "A Christmas-themed double entendre referencing sexual activity."
      },
      {
        "performer": "ren-dmc",
        "theme": "Disrespect",
        "bar": "Dubai flight getting shitted on... letting some next man tap her.",
        "explanation": "A reference to the Dubai 'porta potty' rumors to demean Renaya."
      }
    ],
    "oddMoments": [
      "Renaya walked off the stage multiple times mid-round after forgetting her bars.",
      "Ren DMC had to repeat sections of his second round due to crowd interruptions."
    ],
    "coolMoments": [
      "Ren DMC's holiday-themed flow in the second round.",
      "Ren DMC's smooth freestyle additions to cover Renaya's stumbles."
    ],
    "postBattleContext": "Ren DMC won the battle unanimously after Renaya choked in every round."
  },
  {
    "id": "pg-s04-2023-12-25-ft-vs-iiiberealz",
    "slug": "ft-vs-iiiberealz",
    "mc1": "ft",
    "mc2": "iiiberealz",
    "winner": "ft",
    "title": "F.T vs iiiBEREALZ",
    "displayTitle": "F.T vs iiiBEREALZ",
    "date": "25-12-2023",
    "videoUrl": "https://www.youtube.com/watch?v=j25ckAgC5_4",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 21,
    "views": "98k",
    "customEp": "4x21",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Forever Tapped (FT) and iiiBEREALZ (IB Reels) faced off in a chaotic Christmas-day battle that saw both MCs struggle in the final round. iiiBEREALZ had a solid first two rounds but choked in the third. FT capitalized but then stumbled himself in the third round, attempting to explain a confusing 'pause' setup which led to arguments with the crowd and running over time. FT was declared the winner, but the battle left the room divided.",
    "performanceAnalysis": [
      {
        "performer": "ft",
        "overview": "FT brought strong presence and violent schemes but was let down by a messy third round that devolved into explanations.",
        "lyricalThemes": "Street politics, weapon use, and crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Rambo in Hip Line",
            "description": "A sharp flow about carrying a knife and rising glocks."
          },
          {
            "title": "Nightmares/Dreams Setup",
            "description": "A clever punchline about dreams turning into nightmares."
          },
          {
            "title": "Pause/Sperm Scheme",
            "description": "A highly controversial and confusing third-round setup that he tried to explain."
          }
        ]
      },
      {
        "performer": "iiiberealz",
        "overview": "iiiBEREALZ showed good technical writing in the early rounds but was unable to finish his third round, resulting in a stumble.",
        "lyricalThemes": "Short man syndrome, chapped lips, and album sales.",
        "keyTechnicalHighlights": [
          {
            "title": "Neck/Neckless Pun",
            "description": "A quick setup addressing FT's physical build."
          },
          {
            "title": "Heath Ledger / Joker Reference",
            "description": "A pop-culture reference targeting FT's mental state."
          },
          {
            "title": "Chapped Lips / Pigment setup",
            "description": "A funny insult about FT's facial appearance."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "ft",
        "theme": "Wordplay",
        "bar": "Battling me, you're battling nightmares. That's what you get, following dreams.",
        "explanation": "A clean flip of the 'follow your dreams' motivational phrase."
      },
      {
        "performer": "ft",
        "theme": "Disrespect",
        "bar": "I'll pull the rap out the trousers like a dick and bust this nine... and I said pause.",
        "explanation": "The confusing double-entendre that FT spent the rest of his round explaining."
      },
      {
        "performer": "ft",
        "theme": "Violence",
        "bar": "Burn you then I'll burn in my spliff... coke get crumbled like cookie bud.",
        "explanation": "Comparing drug prep to destroying his opponent in the clash."
      },
      {
        "performer": "iiiberealz",
        "theme": "Height",
        "bar": "You got short man syndrome. Watch your battles and nah, you ain't win none.",
        "explanation": "Targeting FT's height and his historical win record."
      },
      {
        "performer": "iiiberealz",
        "theme": "Critique",
        "bar": "I saw your video signs... you say don't walk with a knife, then I heard your songs and I'm caught in a bind.",
        "explanation": "Calling out FT's hypocrisy between his anti-knife campaign and his actual lyrics."
      }
    ],
    "oddMoments": [
      "FT stopped his third round multiple times to explain his 'pause' punchline to a laughing crowd.",
      "The host had to stop FT's third round because it was running way over time."
    ],
    "coolMoments": [
      "FT's aggressive second round flow which gained the crowd's favor.",
      "iiiBEREALZ's smooth delivery in his opening verse."
    ],
    "postBattleContext": "FT was listed as the winner, though both MCs suffered heavy stumbles in their final rounds."
  },
  {
    "id": "pg-s04-2024-04-07-cheezee-vs-smil3z",
    "slug": "cheezee-vs-smil3z",
    "mc1": "cheezee",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "CHEEZEE vs SMIL3Z",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 22,
    "views": "156k",
    "date": "07-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=8amzmw6EDTY",
    "customEp": "4x22",
    "stage": null,
    "group": null,
    "tag": null,
    "clashSummary": "Cheezee and Smil3z closed the night in a battle that had a controversial finish. Smil3z was consistent across three rounds, delivering sharp personal angles about Cheezee's family and his job at a betting shop. Cheezee had a solid performance but got distracted by Rizzo in the crowd during his third round, leading to stumbles. Despite the crowd's mixed reactions, the host Big Marv explicitly selected Smil3z as the winner to go through to the tournament.",
    "performanceAnalysis": [
      {
        "performer": "cheezee",
        "overview": "Cheezee had good presence and flow but lost his focus in the final round due to crowd interactions.",
        "lyricalThemes": "Energy, Messi comparisons, and direct challenges.",
        "keyTechnicalHighlights": [
          {
            "title": "Messi Comparison",
            "description": "An opening flow comparing his longevity to Lionel Messi."
          },
          {
            "title": "Upside Down Smile",
            "description": "A clean name-flip setup targeting Smil3z."
          },
          {
            "title": "Knifed by a Clown",
            "description": "A sharp insult referencing the name Smil3z."
          }
        ]
      },
      {
        "performer": "smil3z",
        "overview": "Smil3z stayed focused and delivered three clean rounds of personal setups, controlling the stage and securing a tournament spot.",
        "lyricalThemes": "Family secrets, job insults, and gruesome finishes.",
        "keyTechnicalHighlights": [
          {
            "title": "Cardi B Shoes Line",
            "description": "A setup about leaving the scene with bloody shoes."
          },
          {
            "title": "Bookies/Betting Scheme",
            "description": "A personal angle about Cheezee's job and betting on his death."
          },
          {
            "title": "Cooking Cheese Metaphor",
            "description": "A funny, high-temperature grime scheme in the third round."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "cheezee",
        "theme": "Name",
        "bar": "I'll turn that smile straight upside down if you think that you're fucking with me now.",
        "explanation": "A clean play on Smil3z's name and physical expressions."
      },
      {
        "performer": "cheezee",
        "theme": "Parenting",
        "bar": "Don't pay rent cause he lives with his chick, and he ain't got dough to give to his kids.",
        "explanation": "A sharp third-round personal attack accusing Smil3z of neglecting his children."
      },
      {
        "performer": "smil3z",
        "theme": "Violence",
        "bar": "Left that scene with bloody shoes like Cardi B.",
        "explanation": "Referencing Cardi B's famous song 'Bodak Yellow' about bloody shoes."
      },
      {
        "performer": "smil3z",
        "theme": "Job",
        "bar": "I heard you work at the bookies... well, I'll place a bet: in 60 seconds, you'll be dead.",
        "explanation": "Flipping Cheezee's occupation at a betting shop into a threat."
      },
      {
        "performer": "smil3z",
        "theme": "Cheese",
        "bar": "Cooking cheese... you might smell man through your screen.",
        "explanation": "Using a heat/cooking metaphor based on his opponent's name Cheezee."
      }
    ],
    "oddMoments": [
      "Cheezee got distracted by Rizzo shouting in the crowd and stopped mid-verse to argue.",
      "The host complained about Cheezee's third round interruption but allowed a restart."
    ],
    "coolMoments": [
      "Smil3z's third round grime verse which completely won over the crowd.",
      "Smil3z's surgical setups in the second round."
    ],
    "postBattleContext": "Smil3z was chosen by the host Big Marv as the winner to advance to the Croydon Box Park tournament."
  },
  {
    "id": "pg-s04-2024-04-14-cheezee-vs-whoisorion",
    "slug": "cheezee-vs-whoisorion",
    "mc1": "cheezee",
    "mc2": "whoisorion",
    "winner": "cheezee",
    "title": "CHEEZEE vs WHOISORION",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 2,
    "views": "145k",
    "date": "06-07-2023",
    "videoUrl": "https://www.youtube.com/watch?v=qg_MosabMok",
    "customEp": "4x02",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "CHEEZEE and WHOISORION delivered a heated three-round Season 4 clash built around personal attacks, name flips and relentless disrespect. WHOISORION opened with kitchen and cheese schemes before targeting CHEEZEE's credibility and age. CHEEZEE answered with attacks on Orion's flow, Uber job, appearance and relationship. Both maintained strong aggression, and Margs said he could not call the result. The archive retains CHEEZEE as the community winner while noting that the new Season 4 format had no official judging.",
    "performanceAnalysis": [
      {
        "performer": "CHEEZEE",
        "overview": "CHEEZEE relied on direct insults, clear crowd-facing delivery and repeated attacks on WHOISORION's music career, appearance, driving job and relationship.",
        "lyricalThemes": "Uber and taxi angles, Orion and star flips, appearance jokes, family disrespect and claims that WHOISORION lacked bars or recognition.",
        "keyTechnicalHighlights": [
          {
            "title": "Orion Star Flip",
            "description": "CHEEZEE used the Orion constellation angle to claim that he was the only real star in the clash."
          },
          {
            "title": "Uber Angle",
            "description": "He repeatedly contrasted WHOISORION's rap ambitions with his work as an Uber driver."
          },
          {
            "title": "Cheddar Rebuttal",
            "description": "CHEEZEE reclaimed his own name by warning that smoking this cheddar would not get Orion high."
          }
        ]
      },
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION brought energetic, rapid-fire aggression with recurring cheese schemes, personal research and theatrical punchline setups.",
        "lyricalThemes": "Cheese and kitchen wordplay, alleged street credibility, age, family and relationship attacks, and the suggestion that CHEEZEE was outdated.",
        "keyTechnicalHighlights": [
          {
            "title": "Kitchen Scheme",
            "description": "His opener linked putting a MAC on CHEEZEE with cooking, mittens and the kitchen."
          },
          {
            "title": "Medical Wordplay",
            "description": "He connected beating CHEEZEE with A&E, the GP and appearing across media platforms."
          },
          {
            "title": "69 Sequence",
            "description": "His final round extended the number 69 through violence, age, work hours and relationship jokes."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "WHOISORION",
        "theme": "Kitchen Wordplay",
        "bar": "The hospital is where I would admit him. You don't move coke, no, you are not whipping. You do not cook with mittens. When I put the MAC on CHEEZEE, anytime you see him in the kitchen.",
        "explanation": "A layered opening that connects hospital admission, drug cooking, kitchen mittens and a weapon reference."
      },
      {
        "performer": "WHOISORION",
        "theme": "Name Flip",
        "bar": "You ain't gone jail. Something is fishy: either you're snitching or it's just cap. But it makes sense, hence his name is CHEEZEE.",
        "explanation": "He turns CHEEZEE's name into an accusation that his street claims are fake or suspicious."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Astronomy",
        "bar": "I am the only star in this clash. Guess I'm the one that took the belt off Orion.",
        "explanation": "CHEEZEE uses Orion's astronomical identity to crown himself the clash's only star."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Occupation",
        "bar": "You ain't got a future. Tell me, how can I clash with this loser? Shut your mouth and go back to your Uber.",
        "explanation": "A direct career attack that reduces Orion's rap identity to his driving job."
      },
      {
        "performer": "WHOISORION",
        "theme": "DJ Khaled",
        "bar": "This wally looks like DJ Khaled, so he got hit with another one.",
        "explanation": "The punchline uses DJ Khaled's signature phrase while threatening another attack."
      },
      {
        "performer": "WHOISORION",
        "theme": "Medical Scheme",
        "bar": "CHEEZEE, you cannot beat me. A&E, off the disc where he be. The worst you would do is send me to the GP.",
        "explanation": "WHOISORION strings together medical destinations to belittle CHEEZEE's threat level."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Handle Bars",
        "bar": "Orion, I am the star. Even on a bike, you couldn't handle bars.",
        "explanation": "A compact double meaning on bicycle handlebars and rap bars."
      },
      {
        "performer": "CHEEZEE",
        "theme": "Name Flip",
        "bar": "I understand that you might like weed, but you won't get high if you smoke this cheddar.",
        "explanation": "CHEEZEE converts his own name into a smoking and dominance punchline."
      },
      {
        "performer": "WHOISORION",
        "theme": "69 Scheme",
        "bar": "You can get hit with a six or nine. We know you a snitch like 6ix9ine. Go get a job like six to nine.",
        "explanation": "A sustained numerical scheme linking violence, the rapper 6ix9ine and working hours."
      },
      {
        "performer": "WHOISORION",
        "theme": "Marriage Wordplay",
        "bar": "My bro let it ring out, you and your bitch. That's how you arrange a marriage.",
        "explanation": "The sound of a weapon 'ringing' is flipped into a marriage-ring punchline."
      }
    ],
    "oddMoments": [
      "Several lines and short passages are repeated in the transcript.",
      "Margs described the battle as too close for him to call.",
      "The closing phrase repeats many times in the transcript."
    ],
    "coolMoments": [
      "Both performers sustained full three-round attacks without a decisive collapse.",
      "CHEEZEE's Orion and Uber angles gave the battle clear recurring themes.",
      "WHOISORION's kitchen opener and extended 69 scheme were among the clash's most structured passages."
    ],
    "postBattleContext": "Season 4 was explicitly presented as an unjudged straight-battling format. Margs asked viewers to decide the winner and said he could not call this clash. CHEEZEE remains listed as the community winner."
  },
  {
    "id": "pg-s04-2024-04-28-dan-dannah-vs-smil3z",
    "slug": "dan-dannah-vs-smil3z",
    "mc1": "dan-dannah",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "DAN DANNAH vs SMIL3Z",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 13,
    "views": "124k",
    "date": "28-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Et4qPga1hv4",
    "customEp": "4x13",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "DAN DANNAH and SMIL3Z battled in a noisy, high-energy Season 4 clash that leaned on anti-autotune digs, violent imagery, family disrespect and repeated crowd reactions. DAN DANNAH opened with darker, more theatrical writing and kept trying to frame SMIL3Z as an imitation artist, while SMIL3Z answered with sharper directness, stronger crowd control and a more confident late-round finish. The room repeatedly interrupted, reset and hyped both MCs, and the transcript ends with Margs asking viewers to decide the winner. The archive keeps SMIL3Z as the listed winner and treats the battle as an audience-call result.",
    "performanceAnalysis": [
      {
        "performer": "DAN DANNAH",
        "overview": "DAN DANNAH brought the more cinematic writing and plenty of menace, but his flow was often overwhelmed by the room and SMIL3Z's sharper late pressure.",
        "lyricalThemes": "Dark imagery, family attacks, menace, supernatural threats and proving his badness.",
        "keyTechnicalHighlights": [
          {
            "title": "Wicked Opener",
            "description": "He began with a strong threatening tone and built an evil, nightmare-style image around his opponent."
          },
          {
            "title": "Militant Switch",
            "description": "His writing kept pivoting between calm delivery and a harder, more aggressive stance."
          },
          {
            "title": "Season Status",
            "description": "He repeatedly framed himself as an established battler who had already earned his place in Pen Game."
          }
        ]
      },
      {
        "performer": "SMIL3Z",
        "overview": "SMIL3Z was the cleaner finisher, especially in the third round where he sounded more settled, more direct and easier for the room to ride with.",
        "lyricalThemes": "Direct disrespect, family and mother angles, authenticity, badness and crowd control.",
        "keyTechnicalHighlights": [
          {
            "title": "Control of the Decider",
            "description": "His final round arrived with the clearest momentum and the strongest response from the room."
          },
          {
            "title": "Fake Badness Angle",
            "description": "He repeatedly cut down DAN DANNAH's image of toughness and treated him like an overhyped performer."
          },
          {
            "title": "Closing Confidence",
            "description": "He ended with the more confident final stretch and the cleaner sense of closure."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DAN DANNAH",
        "theme": "Threat",
        "bar": "I don't know who you think that you are. Somehow you think of a star.",
        "explanation": "An opening that immediately challenges SMIL3Z's status and identity."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Season Status",
        "bar": "I set back in season three.",
        "explanation": "He reminds the room that he already has Pen Game history behind him."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Name Flip",
        "bar": "D-A-N can get B-A-N from Pen Game. You won't see him again.",
        "explanation": "A direct name flip that turns his own identity into a threat of removal."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Family",
        "bar": "I'll get my uncle to see what your mumsy's on.",
        "explanation": "A disrespectful family angle that lands as one of the battle's most explicit insults."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Badness",
        "bar": "I ain't here to clown, I'm here to show the world what I'm about.",
        "explanation": "A clear statement of intent that helps SMIL3Z's final-round control."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Nightmare",
        "bar": "I'm on your worst nightmare. You could even defeat me inside your dreams.",
        "explanation": "He turns the battle into a horror-style image to project menace."
      },
      {
        "performer": "SMIL3Z",
        "theme": "Veteran Check",
        "bar": "I told that BTEC morphiest that I'm not the one.",
        "explanation": "A blunt dismissal that keeps the pressure on in the middle of the clash."
      },
      {
        "performer": "DAN DANNAH",
        "theme": "Crowd Energy",
        "bar": "That beat was tough you know. That beat was cold.",
        "explanation": "A rare meta moment where he reacts to the instrumental while the room is still heated."
      }
    ],
    "oddMoments": [
      "The battle has repeated crowd calls, resets and stop-start interruptions.",
      "Both MCs are forced to pause and restart lines as the room reacts.",
      "The end of the battle is handled as a viewer-decision moment rather than a formal judged call."
    ],
    "coolMoments": [
      "DAN DANNAH's opening round has strong theatrical menace.",
      "SMIL3Z's third round feels like the cleanest and most decisive stretch.",
      "The clash keeps a raw live-room energy throughout."
    ],
    "postBattleContext": "Margs closes by asking viewers to comment who won, so the archive treats the clash as an audience-call battle. SMIL3Z remains listed as the winner."
  },
  {
    "id": "pg-s04-2024-06-02-dhani-vs-skamz",
    "slug": "dhani-vs-skamz",
    "mc1": "dhani",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "DHANI vs SKAMZ",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 4,
    "views": "105k",
    "date": "04-08-2023",
    "videoUrl": "https://www.youtube.com/watch?v=-qKjJBC0uso",
    "customEp": "4x04",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "DHANI made his PenGame debut against resident wordsmith SKAMZ. DHANI completed a composed opening round, but his second ended almost immediately with a choke and his third broke down after a short recovery attempt. SKAMZ delivered three complete rounds, mixing name flips, superhero references and direct attacks on DHANI's image and writing. Margs acknowledged the pressure of the PenGame room and respected DHANI for taking part, but the performance gap makes SKAMZ the clear winner.",
    "performanceAnalysis": [
      {
        "performer": "SKAMZ",
        "overview": "SKAMZ controlled the battle through preparation, consistency and three complete rounds while his opponent struggled to recover.",
        "lyricalThemes": "DHANI's modelling image, sexuality jokes, superhero references, name flips and the mismatch between a debutant and a PenGame veteran.",
        "keyTechnicalHighlights": [
          {
            "title": "Fireman Sam",
            "description": "SKAMZ immediately flipped DHANI's firefighter image into the claim that PenGame asked for fire and brought him Fireman Sam."
          },
          {
            "title": "Superman Scheme",
            "description": "He wore the S in his name like Superman and identified himself as Clark Kent."
          },
          {
            "title": "Hands Name Flip",
            "description": "He repeatedly bent DHANI's name toward 'D hands' and closed with fighting imagery."
          }
        ]
      },
      {
        "performer": "DHANI",
        "overview": "DHANI showed promise in his opening round with composed multis and self-assured delivery, but two severe memory lapses prevented a complete performance.",
        "lyricalThemes": "SKAMZ fading into the background, technical superiority, bars and scoring, and confidence as a newcomer.",
        "keyTechnicalHighlights": [
          {
            "title": "Debut Confidence",
            "description": "His first round directly compared their writing and argued that SKAMZ was only a forgettable background MC."
          },
          {
            "title": "Iceberg Comparison",
            "description": "DHANI described himself as an iceberg-level threat while calling SKAMZ wet and technically limited."
          },
          {
            "title": "Third-Round Recovery",
            "description": "He briefly returned with an intelligence and relevance scheme before losing the material again."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DHANI",
        "theme": "Status",
        "bar": "This guy here's not a dead MC, he's just one of them fading into the background, man-you-might-forget MCs.",
        "explanation": "DHANI opens by framing SKAMZ as forgettable rather than dangerous."
      },
      {
        "performer": "DHANI",
        "theme": "Iceberg",
        "bar": "Me and these man come like iceberg Gs. This guy, he's just a wet MC, and he ain't got no tech like me.",
        "explanation": "A temperature and water comparison used to establish technical superiority."
      },
      {
        "performer": "DHANI",
        "theme": "Scoring",
        "bar": "If he sees better than me, he is the highest of highlights, top score.",
        "explanation": "DHANI links visibility, highlights and scoring to claim the stronger performance."
      },
      {
        "performer": "SKAMZ",
        "theme": "Fireman Sam",
        "bar": "Pen Game said they wanted fire and then brought me a Fireman Sam.",
        "explanation": "SKAMZ turns DHANI's firefighter presentation into a children's television punchline."
      },
      {
        "performer": "SKAMZ",
        "theme": "Big Smoke",
        "bar": "You should've run away before you saw SKAMZ on the land, and that's code word for Big Smoke.",
        "explanation": "A threat built around his own name and a Big Smoke reference."
      },
      {
        "performer": "SKAMZ",
        "theme": "Sonic",
        "bar": "If I hit man, then you got to see coins going up like Sonic.",
        "explanation": "The impact is compared to Sonic losing rings after taking damage."
      },
      {
        "performer": "SKAMZ",
        "theme": "Superman",
        "bar": "I got a big S on my chest, you can't see it yet. I'm Clark Kent.",
        "explanation": "SKAMZ turns the first letter of his name into a Superman identity."
      },
      {
        "performer": "SKAMZ",
        "theme": "Prison Pen",
        "bar": "He got a pen like Biros, I got a pen like HMP.",
        "explanation": "A concise comparison between an ordinary pen and the prison system to make his writing sound dangerous."
      },
      {
        "performer": "DHANI",
        "theme": "Writing",
        "bar": "Quickly eradicate your relevancy. Not a walk or dance in a park, I write my bars intelligently.",
        "explanation": "DHANI's third-round recovery briefly returns to his technical-writer angle."
      },
      {
        "performer": "SKAMZ",
        "theme": "Tion Wayne",
        "bar": "This battle just turned into graphic content. His shit leaked, Tion Wayne.",
        "explanation": "SKAMZ closes with a contemporary music reference that frames the defeat as graphic footage."
      }
    ],
    "oddMoments": [
      "DHANI's second round ends after only a few lines when he chokes.",
      "DHANI also loses his material in the third round after attempting to recover.",
      "Margs pauses to explain how different the pressure feels inside the PenGame room."
    ],
    "coolMoments": [
      "DHANI's opening round showed enough composure to suggest potential despite the later chokes.",
      "SKAMZ adapted to the one-sided battle and still completed all three rounds.",
      "Margs gave DHANI a respectful send-off rather than humiliating a debuting performer."
    ],
    "postBattleContext": "There was no formal judging panel, but SKAMZ is the clear and listed winner because DHANI failed to complete rounds two and three. Margs emphasized the pressure of performing in the room and praised DHANI for stepping into the clash."
  },
  {
    "id": "pg-s04-2024-06-09-drizzgb-vs-aliaano",
    "slug": "drizzgb-vs-aliaano",
    "mc1": "drizzgb",
    "mc2": "aliaano",
    "winner": "drizzgb",
    "title": "DRIZZGB vs ALIAANO",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 12,
    "views": "82k",
    "date": "09-06-2024",
    "videoUrl": "https://www.youtube.com/watch?v=sVphZlho_zs",
    "customEp": "4x12",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "DRIZZGB and ALIAANO clashed in a fast, chaotic Season 4 battle built on gendered name-flips, identity jabs, anti-autotune attacks and repeated crowd interruptions. DRIZZGB opened with a sharp first-round pressure run and kept pushing the 'real artist' angle, while ALIAANO answered with a punchier third-round comeback built around direct aggression, relationship insults and self-belief. The room repeatedly stopped and restarted lines, and the transcript ends with Margs asking viewers to decide the result. The archive keeps DRIZZGB as the listed winner and treats the battle as an audience-call moment rather than a judged one.",
    "performanceAnalysis": [
      {
        "performer": "DRIZZGB",
        "overview": "DRIZZGB came in with the stronger overall control, especially in round one and the closing stretch, where he leaned into structure, mockery and status claims.",
        "lyricalThemes": "Gendered insults, authenticity, anti-autotune messaging, culture, identity and artist status.",
        "keyTechnicalHighlights": [
          {
            "title": "Opening Pressure",
            "description": "His first round stayed aggressive and busy, setting the tone before the room began interrupting."
          },
          {
            "title": "Artist Claim",
            "description": "He repeatedly framed himself as the real artist and the more original battler."
          },
          {
            "title": "Closing Control",
            "description": "His final round landed the cleaner closing statements and the more confident finish."
          }
        ]
      },
      {
        "performer": "ALIAANO",
        "overview": "ALIAANO fought back with energy and a more direct personal attack style, but the battle noise and frequent resets made his rounds feel less complete than DRIZZGB's.",
        "lyricalThemes": "Grime confidence, street aggression, sexual disrespect, anti-battle bravado and comeback energy.",
        "keyTechnicalHighlights": [
          {
            "title": "Direct Heat",
            "description": "He responded with blunt insults and a no-nonsense tone that kept the clash alive."
          },
          {
            "title": "Comeback Third",
            "description": "His third round felt like the strongest of his set, with the most sustained pushback."
          },
          {
            "title": "Crowd Engagement",
            "description": "He used the room well even when the transcript kept breaking his flow."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DRIZZGB",
        "theme": "Gender Flip",
        "bar": "He looks like a woman, I don't need to wonder.",
        "explanation": "A blunt opening insult that sets up DRIZZGB's first-round attack."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Movement",
        "bar": "Kill him in a flash, Batman could have done that.",
        "explanation": "A comic-book style threat that keeps the opening punchy."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Artist Status",
        "bar": "I'm here to make history. Leave a mark, put a foot in the scene.",
        "explanation": "He frames himself as a scene-making artist rather than just a battler."
      },
      {
        "performer": "ALIAANO",
        "theme": "Identity",
        "bar": "In a room full of girls right now, on my bombiest day, they still wouldn't pick you.",
        "explanation": "ALIAANO uses social comparison to make the opponent look undesirable and forgettable."
      },
      {
        "performer": "ALIAANO",
        "theme": "Aggression",
        "bar": "I'm an actual artist. GB, that's garbage.",
        "explanation": "A direct name flip that attacks DRIZZGB's credibility."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Autotune",
        "bar": "Let's turn off the auto-tune. Let's see you can really rap.",
        "explanation": "DRIZZGB positions himself as a purist against an overprocessed sound."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Final Claim",
        "bar": "Fuck that, I'm getting a bag. And scams, you're going outside.",
        "explanation": "A closing statement that ties success, money and dominance together."
      },
      {
        "performer": "ALIAANO",
        "theme": "Closing",
        "bar": "I can't lie, I wasn't excited about this raw beef.",
        "explanation": "A calmer, self-aware line that lands during the late back-and-forth."
      }
    ],
    "oddMoments": [
      "The battle is repeatedly interrupted by crowd reactions and restarts.",
      "Several bars are replayed or half-finished while the room tries to reset the energy.",
      "Margs repeatedly pushes the battle forward after the stop-start interruptions."
    ],
    "coolMoments": [
      "DRIZZGB's first round comes out with strong pace and clarity.",
      "ALIAANO's third round gives the clash its best late pushback.",
      "The battle has a raw, live-room feel that matches the Season 4 energy."
    ],
    "postBattleContext": "Margs closes by asking viewers to comment who won, so the archive treats the clash as an audience-call battle. DRIZZGB remains the listed winner."
  },
  {
    "id": "pg-s04-2024-06-16-drizzgb-vs-grams",
    "slug": "drizzgb-vs-grams",
    "mc1": "drizzgb",
    "mc2": "grams",
    "winner": "drizzgb",
    "title": "DRIZZGB vs GRAMS",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 7,
    "views": "88k",
    "date": "02-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=27vmHsuthuE",
    "customEp": "4x07",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "DRIZZGB and GRAMS battled in a high-energy Season 4 clash that leaned heavily on joke writing, performance control and direct disrespect. DRIZZGB opened with a fast, confident first round, but GRAMS answered with sharper crowd-reading, more complete structures and sustained pressure around identity, family and authenticity. DRIZZGB's third-round comeback attempt brought the room back with louder punchlines, but the transcript closes with the room broadly treating GRAMS as the clearer winner. The archive keeps GRAMS as the listed winner and frames the battle as an unjudged audience call.",
    "performanceAnalysis": [
      {
        "performer": "DRIZZGB",
        "overview": "DRIZZGB brought the more manic and playful energy, mixing name flips, culture bars and direct insults with a loud room-filling delivery.",
        "lyricalThemes": "Name flips, culture, family disrespect, street authenticity and anti-facade commentary.",
        "keyTechnicalHighlights": [
          {
            "title": "Gram and Pre-roll Scheme",
            "description": "He repeatedly used GRAMS' name to build drug and smoking wordplay."
          },
          {
            "title": "Culture Dissection",
            "description": "DRIZZGB attacked GRAMS' heritage, local credibility and appearance from his opening round."
          },
          {
            "title": "Final-Round Fightback",
            "description": "His third round came back with heavier jokes and clearer punchlines after GRAMS had control in the middle of the battle."
          }
        ]
      },
      {
        "performer": "GRAMS",
        "overview": "GRAMS was the more structurally consistent battler, using longer setups, character attacks and a better sense of escalation across the three rounds.",
        "lyricalThemes": "Authenticity, family, class, regional identity, career stagnation and exposing DRIZZGB as a performer rather than a real threat.",
        "keyTechnicalHighlights": [
          {
            "title": "Black and Asian Contrast",
            "description": "He used race and cultural identity carefully to frame the clash as more than just generic disrespect."
          },
          {
            "title": "Career Stagnation",
            "description": "GRAMS kept pointing back to DRIZZGB's lack of growth, views and meaningful output."
          },
          {
            "title": "Control of the Room",
            "description": "His second and third rounds built enough consistency that the room repeatedly reacted as though he had the edge."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DRIZZGB",
        "theme": "Name Flip",
        "bar": "But he's only got one Gram. That ain't a pack. That is a pre-roll.",
        "explanation": "A compact opening name flip that turns GRAMS into drug and smoking imagery."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Control",
        "bar": "I can't hear your face, Vin. Your tongue's as frail as your chin.",
        "explanation": "A strange but forceful insult that uses face and tongue imagery to mock GRAMS' delivery."
      },
      {
        "performer": "GRAMS",
        "theme": "Culture",
        "bar": "I'm black, you're Asian. I am the real deal. I am Jamaican. Real Jafakan.",
        "explanation": "GRAMS uses heritage and authenticity as the core of his rebuttal."
      },
      {
        "performer": "GRAMS",
        "theme": "Worldbuilding",
        "bar": "If we was in Dragon Balls the only childs who could represent you. And I'm Goku the way that I'll come through.",
        "explanation": "A Dragon Ball reference that frames himself as the stronger, heroic figure."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Age and Status",
        "bar": "I was probably on road when this thong was born.",
        "explanation": "A blunt age-and-experience flex intended to make GRAMS feel junior and behind."
      },
      {
        "performer": "GRAMS",
        "theme": "Family",
        "bar": "I'll make your whole family turn against you.",
        "explanation": "A direct family angle that underlines the seriousness of his attack."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Local Credibility",
        "bar": "You ain't even meant to have black friends. What are you doing out here on the rap test?",
        "explanation": "A provocative line that attacks GRAMS' social identity and authenticity."
      },
      {
        "performer": "GRAMS",
        "theme": "Career",
        "bar": "Your career is sinking. Think he took a trip to the Titanic.",
        "explanation": "A clean Titanic comparison that gives the career angle a strong visual image."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Final Push",
        "bar": "JZB, 3-0, you get me? Body bag, fam, you got deaded, fam.",
        "explanation": "DRIZZGB's closing stretch tries to claim a full sweep and intensify the finish."
      },
      {
        "performer": "GRAMS",
        "theme": "Closure",
        "bar": "This is his closure.",
        "explanation": "A short but effective round-ending phrase that captures the room's sense that the battle was over."
      }
    ],
    "oddMoments": [
      "The transcript repeatedly loops over crowd reactions and rewinds the same bars.",
      "DRIZZGB's first round includes a number of loose but memorable name flips.",
      "The room keeps interrupting with wheeled reactions, making the battle feel especially live."
    ],
    "coolMoments": [
      "Both MCs come in loud and ready, with no easing into the clash.",
      "GRAMS' second round felt like the moment the battle turned in his favor.",
      "DRIZZGB's final-round energy kept the room engaged until the very end."
    ],
    "postBattleContext": "The transcript never gives an official judges' decision, so the archive records this as an unjudged Season 4 audience battle with GRAMS as the listed winner."
  },
  {
    "id": "pg-s04-2024-06-23-drizzgb-vs-whoisorion",
    "slug": "drizzgb-vs-whoisorion",
    "mc1": "drizzgb",
    "mc2": "whoisorion",
    "winner": "whoisorion",
    "title": "DRIZZGB vs WHOISORION",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 14,
    "views": "108k",
    "date": "23-06-2024",
    "videoUrl": "https://www.youtube.com/watch?v=_WX5qdYNtoc",
    "customEp": "4x14",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "DRIZZGB and WHOISORION fought through a long, noisy Season 4 battle built around race, appearance, fake credibility, family disrespect and a lot of crowd-led stop-start energy. DRIZZGB opened with a manic, joke-heavy first round and kept leaning into fruit-pun style wordplay and status attacks, while WHOISORION answered with more personal, sprawling rounds that referenced his own history, the opponent's image, label affiliations and repeated 'who's Orion?' schemes. The transcript ends with Margs asking viewers to decide who won, so the archive keeps WHOISORION as the listed winner and treats it as an audience-call battle.",
    "performanceAnalysis": [
      {
        "performer": "DRIZZGB",
        "overview": "DRIZZGB had the sharper opening and the more immediately catchy writing, but he often got drowned out by the room's noise and the battle's constant interruptions.",
        "lyricalThemes": "Name flips, visual insults, race, fake status, fruit schemes and self-presentation as the fresher MC.",
        "keyTechnicalHighlights": [
          {
            "title": "Drizzle Scheme",
            "description": "He quickly weaponized his own name and the weather/drink imagery around Driz and drizzle."
          },
          {
            "title": "Fruit Run",
            "description": "His second-round stretch used fruit puns as a sustained comedic attack."
          },
          {
            "title": "Closing Push",
            "description": "He finished with enough heat to keep the room reactive even as the battle became chaotic."
          }
        ]
      },
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION was the more persistent battler across the full runtime, leaning into layered name-flips, family angles and repeated attacks on DRIZZGB's image and credibility.",
        "lyricalThemes": "Identity, family, race, fraudulence, money, status and direct disrespect.",
        "keyTechnicalHighlights": [
          {
            "title": "Who's Orion",
            "description": "He repeatedly pressed the idea that DRIZZGB didn't really understand who he was talking to."
          },
          {
            "title": "Family Disrespect",
            "description": "His rounds kept returning to insults about mums, dads and the wider family picture."
          },
          {
            "title": "Final Pressure",
            "description": "His closing section felt like the more complete finish, with the cleaner sense of control."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "DRIZZGB",
        "theme": "Drizzle",
        "bar": "I feel like Driz has the perfect name. Kai don't make it rain, it makes it drizzle.",
        "explanation": "A clean opening name flip that anchors his first round."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Connection",
        "bar": "You ain't no plug, you have no connection.",
        "explanation": "A simple credibility attack that strips the opponent of street status."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Fruit Scheme",
        "bar": "I'm a lion. Onion. I'm crying.",
        "explanation": "One of the battle's repeated nonsense-to-punchline style moments."
      },
      {
        "performer": "WHOISORION",
        "theme": "Family",
        "bar": "Suck your mother's, mother's, mother's, mother's, mother's, mother's mother.",
        "explanation": "A long, escalating family disrespect chain."
      },
      {
        "performer": "WHOISORION",
        "theme": "Status",
        "bar": "I'm God, I'm God, you're a nitty.",
        "explanation": "A blunt self-elevation bar that sets up his second-round confidence."
      },
      {
        "performer": "DRIZZGB",
        "theme": "Views",
        "bar": "You stupid, you cut it's the third round and you're losing two.",
        "explanation": "A direct scoreboard-style line that frames him as ahead in the room's eyes."
      },
      {
        "performer": "WHOISORION",
        "theme": "Identity",
        "bar": "Who's Orion? I know about you. I know you're spread with a silver spoon.",
        "explanation": "A repeated identity attack that turns the name into a status question."
      },
      {
        "performer": "WHOISORION",
        "theme": "Closing",
        "bar": "I'm not the rap game and your name ain't side you, this the pen game.",
        "explanation": "A closing line that re-centers the battle on Pen Game itself."
      }
    ],
    "oddMoments": [
      "The battle has a lot of stop-start energy and crowd interruptions.",
      "Some lines are repeated or replayed as the room reacts.",
      "The hosts repeatedly have to steer the clash back on track."
    ],
    "coolMoments": [
      "DRIZZGB's opening round lands some of the clearest one-liners in the battle.",
      "WHOISORION's repeated 'Who's Orion?' angle gives the clash a running motif.",
      "The closing exchange keeps the room engaged right through the end."
    ],
    "postBattleContext": "Margs closes by asking viewers to comment who won, so the archive treats the clash as an audience-call battle. WHOISORION remains the listed winner."
  },
  {
    "id": "pg-s04-2024-06-30-f-don-vs-aymuni",
    "slug": "f-don-vs-aymuni-2",
    "mc1": "f-don",
    "mc2": "aymuni",
    "winner": "f-don",
    "title": "F-DON vs AYMUNI 2",
    "displayTitle": "F-DON vs AYMUNI 2",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 3,
    "views": "128k",
    "date": "21-07-2023",
    "videoUrl": "https://www.youtube.com/watch?v=MMSQ_RQbqUk",
    "customEp": "4x03",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "Season 1 finalists F-DON and AYMUNI returned for a three-round rematch under Season 4's unjudged format. AYMUNI leaned heavily into F-DON's age and appearance, using dense insult chains and name flips. F-DON answered with veteran authority, anime references, a recurring 'we are not the same' structure and claims that PenGame had become his house. The room reacted strongly to both, but F-DON's broader themes, rebuttal energy and commanding final round support his listed community win.",
    "performanceAnalysis": [
      {
        "performer": "F-DON",
        "overview": "F-DON performed as the returning veteran, combining direct rebuttals, crowd control and structured themes about status, experience and ownership of PenGame.",
        "lyricalThemes": "Veteran authority, father-and-son framing, anime, class differences, prison versus wisdom, and his growth since Season 1.",
        "keyTechnicalHighlights": [
          {
            "title": "Welcome Home",
            "description": "He told AYMUNI that PenGame was now his house and welcomed him back as a son."
          },
          {
            "title": "We Are Not the Same",
            "description": "F-DON contrasted their lifestyles and inspirations through a repeated round-two structure."
          },
          {
            "title": "All Might Scheme",
            "description": "His final round used My Hero Academia and Fortnite references to frame himself as number one."
          }
        ]
      },
      {
        "performer": "AYMUNI",
        "overview": "AYMUNI brought tightly packed mockery and visual punches, focusing relentlessly on F-DON's age, face, hair and long career.",
        "lyricalThemes": "Age and appearance, the F-DON name, historical references, family disrespect and the suggestion that F-DON's career had stagnated.",
        "keyTechnicalHighlights": [
          {
            "title": "Age Schemes",
            "description": "AYMUNI extended F-DON's age through Tony Blair, Henry I, stone writing and horse-drawn transport."
          },
          {
            "title": "F-DON Name Flip",
            "description": "He repeatedly reshaped the name into school grades and dismissive phrases."
          },
          {
            "title": "Medusa Reversal",
            "description": "He joked that even Medusa would close her eyes when looking at F-DON."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "AYMUNI",
        "theme": "Age",
        "bar": "You're so old, you probably voted for Tony Blair. You should get hit with a chicken strip for fucking up school meals everywhere.",
        "explanation": "AYMUNI combines F-DON's age with British political history and school-meal policy."
      },
      {
        "performer": "AYMUNI",
        "theme": "Weapon Wordplay",
        "bar": "He's got the same face as my shotgun, cause the nose chopped off too.",
        "explanation": "F-DON's facial features are compared to a shortened firearm."
      },
      {
        "performer": "F-DON",
        "theme": "PenGame Status",
        "bar": "I ain't seen you since Season 1. Since then I've had a door run. Pen Game is my house now, so welcome home, son.",
        "explanation": "F-DON uses the long gap between appearances to establish himself as the current veteran and AYMUNI as his child."
      },
      {
        "performer": "F-DON",
        "theme": "Anime",
        "bar": "I am Goku, you're Gohan.",
        "explanation": "The Dragon Ball father-and-son relationship reinforces F-DON's seniority angle."
      },
      {
        "performer": "AYMUNI",
        "theme": "Name Flip",
        "bar": "How did you get the name F-DON? Is it cause you F dons, or cause you were so dumb in class you couldn't do no more than an F?",
        "explanation": "AYMUNI converts the name into both failure and a school-grade insult."
      },
      {
        "performer": "AYMUNI",
        "theme": "Appearance",
        "bar": "My man looks like a dead iguana. That's a dragon I've already slain.",
        "explanation": "A visual insult becomes a fantasy-style victory metaphor."
      },
      {
        "performer": "F-DON",
        "theme": "Contrast",
        "bar": "I'm inspired by guys that provide wisdom. You're inspired by guys inside prison. This is not the same cloth, my attire is different.",
        "explanation": "F-DON's strongest repeated theme contrasts their influences and identities."
      },
      {
        "performer": "F-DON",
        "theme": "Chief Keef",
        "bar": "You remind me of Chief Keef, cause this the type of guy that I don't like.",
        "explanation": "The line references Chief Keef's song while dismissing AYMUNI's persona."
      },
      {
        "performer": "AYMUNI",
        "theme": "History",
        "bar": "His first bars probably written in stone, with a hammer and chisel he carved it.",
        "explanation": "AYMUNI extends the age angle by placing F-DON's earliest writing in ancient history."
      },
      {
        "performer": "F-DON",
        "theme": "All Might",
        "bar": "You're only here to help me on my endeavour, cause I'm number one, All Might.",
        "explanation": "A My Hero Academia reference casts AYMUNI as supporting F-DON's rise as the number-one hero."
      }
    ],
    "oddMoments": [
      "F-DON restarts the opening of his third round after crowd interruptions.",
      "Parts of F-DON's final round are duplicated in the transcript.",
      "Margs repeatedly reminds viewers that the new format has no judges."
    ],
    "coolMoments": [
      "The clash reunites the Season 1 finalists under a completely different format.",
      "AYMUNI's age angle remains consistent across all three rounds.",
      "F-DON's father-and-son framing connects their PenGame history to the rematch."
    ],
    "postBattleContext": "Season 4 had no official judges, so Margs asked viewers to decide who got smoked. F-DON remains listed as the community winner of this rematch."
  },
  {
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
    "date": "16-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=BPdBaYkeZh0",
    "customEp": "4x09",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "F-DON and WHOISORION opened the night with a battle that mixed direct name-flips, body-shaming, family angles and a steady escalation in crowd hostility. WHOISORION came in first with a barrage aimed at F-DON's name, weight, age and Uber-driver image, while F-DON answered with father-and-son framing, class and ethnicity angles and a confident final-round closure. The transcript ends with Margs treating it as a strong battle rather than a formally judged one, and the archive records F-DON as the listed winner.",
    "performanceAnalysis": [
      {
        "performer": "F-DON",
        "overview": "F-DON brought veteran poise, a better sense of closure and the clearest final-round structure, especially when he tied his opponent back to family and status.",
        "lyricalThemes": "Father-and-son framing, authority, final-round closers, status, and turning the battle back on the opponent's identity.",
        "keyTechnicalHighlights": [
          {
            "title": "Father Angle",
            "description": "He repeatedly framed WHOISORION as a son-like figure or a battle he had already outgrown."
          },
          {
            "title": "Back Against Orion",
            "description": "The Orion naming angle was used as an anchor for several of his strongest bars."
          },
          {
            "title": "Final Round Control",
            "description": "His last round tightened up the battle and gave him the cleanest close."
          }
        ]
      },
      {
        "performer": "WHOISORION",
        "overview": "WHOISORION brought the more relentless attack style, especially in the first round where he went hard on F-DON's age, appearance and career.",
        "lyricalThemes": "Age, weight, Uber driving, name flips, family and identity insecurity.",
        "keyTechnicalHighlights": [
          {
            "title": "Old Man Angle",
            "description": "He repeatedly made F-DON's age and appearance the core of his attack."
          },
          {
            "title": "Uber Driver Refrain",
            "description": "WHOISORION returned to the Uber angle as a way to reduce F-DON's credibility."
          },
          {
            "title": "Aggressive Open",
            "description": "His first round set the tone with the most direct pressure of the battle."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "WHOISORION",
        "theme": "Age",
        "bar": "You're so old, you probably bought it for Tony Blair.",
        "explanation": "A sharp age attack that ties F-DON to an earlier political era."
      },
      {
        "performer": "WHOISORION",
        "theme": "Job Angle",
        "bar": "Shut your mouth and go back to your Uber.",
        "explanation": "A clean reduction of F-DON's status to his day job."
      },
      {
        "performer": "F-DON",
        "theme": "House Angle",
        "bar": "Pen Game is my house now, so welcome home, son.",
        "explanation": "A veteran flex that frames the entire battle as F-DON's territory."
      },
      {
        "performer": "WHOISORION",
        "theme": "Weight",
        "bar": "Your belly's bigger than mine and Ashley's skinny. No way you could 69.",
        "explanation": "A body-shaming punchline that extends into a sexualized joke."
      },
      {
        "performer": "F-DON",
        "theme": "Anime",
        "bar": "I am Goku, your Gohan.",
        "explanation": "A simple but effective father-and-son anime reference."
      },
      {
        "performer": "WHOISORION",
        "theme": "Family",
        "bar": "My bro let it ring out, you and your bitch. That's how you arrange a marriage.",
        "explanation": "A marriage-ring punchline that turns a weapon sound into a family insult."
      },
      {
        "performer": "F-DON",
        "theme": "Wisdom",
        "bar": "I'm inspired by guys that provide wisdom. You're inspired by guys inside prison.",
        "explanation": "A clean contrast angle that separates their influences and identities."
      },
      {
        "performer": "WHOISORION",
        "theme": "Body",
        "bar": "I swear you are a little twat. I see you punching a punch machine and I laugh.",
        "explanation": "A crowd-friendly dig at F-DON's toughness and presentation."
      },
      {
        "performer": "F-DON",
        "theme": "Hero",
        "bar": "I'm the MC that runs shit like River Run in my element.",
        "explanation": "A confident self-placement bar that reinforces his veteran status."
      },
      {
        "performer": "WHOISORION",
        "theme": "Closing",
        "bar": "Everybody knows you ain't been bad. You're still serving up a bench in a bin bag.",
        "explanation": "A final insult that tries to strip F-DON of any hard-man image."
      }
    ],
    "oddMoments": [
      "The transcript has repeated crowd-reaction loops and some clipped commentary.",
      "WHOISORION's first round is unusually long and relentless.",
      "Margs treats the battle as a strong opener rather than a formal judged contest."
    ],
    "coolMoments": [
      "The battle sets the tone for Season 4 with two loud, heavyweight performances.",
      "F-DON's final round feels like the cleanest close in the clash.",
      "WHOISORION's first-round pressure keeps the battle competitive from the jump."
    ],
    "postBattleContext": "The transcript ends with Margs asking viewers to decide the winner. The archive keeps F-DON as the listed winner and treats the battle as an audience-calls moment rather than a formal judged result."
  },
  {
    "id": "pg-s04-2024-08-05-sevz-vs-skamz",
    "slug": "sevz-vs-skamz",
    "mc1": "sevz",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "SEVZ vs SKAMZ",
    "theme": "pengame",
    "season": 4,
    "seasonOrder": 8,
    "views": "132k",
    "date": "09-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=6E_P4AZYCto",
    "customEp": "4x08",
    "stage": null,
    "group": null,
    "tag": null,
    "host": "Margs (Andre Wright)",
    "judges": [],
    "clashSummary": "SEVZ and SKAMZ went at it in one of the more chaotic Season 4 battles, with both MCs leaning on room control, personal attacks and repeated punchline setups. SEVZ opened with a strong first round, using speed, angle-building and a clear attempt to frame SKAMZ as a fake or fragile opponent. SKAMZ answered with a series of sharp rebuttals, jokes about SEVZ's name and family, and a frantic but effective final-round comeback that the room clearly liked. The transcript ends without an official judges' decision, but the archive keeps SKAMZ as the listed winner.",
    "performanceAnalysis": [
      {
        "performer": "SEVZ",
        "overview": "SEVZ came in hot with a more technical first round and maintained a strong sense of pressure, but his momentum faded slightly as SKAMZ adjusted and answered back harder.",
        "lyricalThemes": "Speed, brain versus heat, fake tough-guy behavior, status, and crowd-facing confidence.",
        "keyTechnicalHighlights": [
          {
            "title": "Heat and Brain Contrast",
            "description": "He repeatedly contrasted physical heat with mental clarity, turning the difference into a dominance angle."
          },
          {
            "title": "Motion Schemes",
            "description": "SEVZ used birthday candles, mannequin challenges and freeze imagery to build a clean opening run."
          },
          {
            "title": "Back Out Flip",
            "description": "His third-round interruption and restart became part of the battle's live energy."
          }
        ]
      },
      {
        "performer": "SKAMZ",
        "overview": "SKAMZ answered with more chaos and volatility, but his writing became sharper as the battle progressed and his third round landed the hardest.",
        "lyricalThemes": "Identity, family, fake father claims, anime and game references, authenticity and crowd pressure.",
        "keyTechnicalHighlights": [
          {
            "title": "Family Angles",
            "description": "He repeatedly turned SEVZ's family and father references into punchlines and rebuttals."
          },
          {
            "title": "Anime and Game References",
            "description": "His third round used Kaido, Neo and Tekken references to give the finish extra character."
          },
          {
            "title": "Back-Out Reversal",
            "description": "He flipped the term 'back out' into a repeated pressure tag that landed well in the room."
          }
        ]
      }
    ],
    "notableBars": [
      {
        "performer": "SEVZ",
        "theme": "Energy",
        "bar": "You're scared, loud chattering, teeth some neat. Your hair ain't grown in the past season.",
        "explanation": "A direct opening insult that sets the tone with appearance and confidence attacks."
      },
      {
        "performer": "SEVZ",
        "theme": "Heat",
        "bar": "You're like a birthday candle. You're off by the simplest breeze.",
        "explanation": "A neat comparison that uses fragility and heat to belittle SKAMZ."
      },
      {
        "performer": "SKAMZ",
        "theme": "Marriage",
        "bar": "No cap, bro, you better relax. I think the battle against A Money must have got F Don a bit too gassed.",
        "explanation": "A setup that ties SEVZ into the wider PenGame ecosystem and questions his confidence."
      },
      {
        "performer": "SKAMZ",
        "theme": "Illiteracy",
        "bar": "I'm contagious, not in the syllabus. Back to this guy, bro, you're an idiot.",
        "explanation": "A compact self-mythologizing line that turns the school angle into a threat."
      },
      {
        "performer": "SEVZ",
        "theme": "Motion",
        "bar": "Mannequin challenge or the panicking challenge. Freeze. Look at the camera, say cheese.",
        "explanation": "A strong crowd-facing sequence that uses freezing imagery to stall SKAMZ."
      },
      {
        "performer": "SKAMZ",
        "theme": "Fake Name",
        "bar": "No wonder you're called scams. I'ma slap you, change your name back to legitimate.",
        "explanation": "A direct and memorable name-flip that plays on the battle alias and authenticity."
      },
      {
        "performer": "SEVZ",
        "theme": "Experience",
        "bar": "His last rap battle was after this applying in Thief. I couldn't care but you're past your feet.",
        "explanation": "A bar that frames the opponent as awkward and underprepared."
      },
      {
        "performer": "SKAMZ",
        "theme": "Back Out",
        "bar": "Before I blow a back out, hit him in his face like, why's this back out?",
        "explanation": "The repeated 'back out' phrase becomes a pressure tag in the third-round comeback."
      },
      {
        "performer": "SEVZ",
        "theme": "Composure",
        "bar": "You're an offline disgust guy with my PEN.",
        "explanation": "A concise insult about SKAMZ's status in the writing space."
      },
      {
        "performer": "SKAMZ",
        "theme": "Tekken",
        "bar": "This Nina got cleaner graphics than the new Tekken.",
        "explanation": "A clean pop-culture finish that closes the battle on a vivid image."
      }
    ],
    "oddMoments": [
      "SEVZ repeatedly restarts and re-spaces lines in the transcript, but keeps the energy alive.",
      "SKAMZ has a number of lines that are clearer in performance than on the page.",
      "The room repeatedly reacts to callbacks and interruptions, making the battle feel very live."
    ],
    "coolMoments": [
      "SEVZ's opening round was the cleanest stretch of the battle.",
      "SKAMZ's third-round comeback gave the clash its decisive energy shift.",
      "The restart and beat-cut moments added to the fight atmosphere rather than breaking it."
    ],
    "postBattleContext": "The transcript never gives an official judges' decision, so the archive records this as an unjudged Season 4 battle with SKAMZ as the listed winner."
  },
  {
    "id": "pg-s05-unreleased-mello-vs-tapped24",
    "slug": "mello-vs-tapped24",
    "mc1": "mello",
    "mc2": "tapped24",
    "title": "MELLO vs TAPPED24",
    "isUnreleased": true,
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x41",
    "date": null,
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles",
    "winner": "TBD",
    "statusNote": "Upcoming"
  },
  {
    "id": "pg-s05-2023-09-02-drizzgb-vs-grams",
    "slug": "drizzgb-trappy-vs-grams-passive",
    "mc1": "drizzgb",
    "mc2": "grams",
    "mc3": "trappy",
    "mc4": "passive",
    "date": "02-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=1MgsxzR9vJE",
    "title": "DRIZZGB & TRAPPY vs GRAMS & PASSIVE",
    "displayTitle": "DRIZZGB & TRAPPY vs GRAMS & PASSIVE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "customEp": "5x30",
    "stage": null,
    "group": null,
    "tag": "2v2 Tournament",
    "winner": "drizzgb",
    "winner2": "trappy"
  },
  {
    "id": "pg-s05-2024-04-02-whoisorion-vs-kandi",
    "slug": "whoisorion-vs-kandi",
    "mc1": "whoisorion",
    "mc2": "kandi",
    "title": "WHOISORION vs KANDI",
    "date": "02-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=9Yi2Q_vNKLE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2",
    "customEp": "5x45",
    "stage": null,
    "group": null,
    "tag": "South vs North 2",
    "winner": "whoisorion"
  },
  {
    "id": "pg-s05-2024-09-14-che3kz-vs-premeboi-j",
    "slug": "che3kz-vs-premeboi-j",
    "mc1": "che3kz",
    "mc2": "premeboi-j",
    "title": "CHE3KZ vs PREMEBOI J",
    "date": "14-09-2024",
    "videoUrl": "https://www.youtube.com/watch?v=8xHhcLgskHQ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x14",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "che3kz"
  },
  {
    "id": "pg-s05-2024-09-18-zen-vs-caveman",
    "slug": "zen-vs-caveman",
    "mc1": "zen",
    "mc2": "caveman",
    "title": "ZEN vs CAVEMAN",
    "date": "18-09-2024",
    "videoUrl": "https://www.youtube.com/watch?v=LJW3j439xXQ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "views": "28k",
    "customEp": "5x15",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "zen"
  },
  {
    "id": "pg-s05-2024-09-21-kandi-vs-prynlee",
    "slug": "kandi-vs-prynlee",
    "mc1": "kandi",
    "mc2": "prynlee",
    "title": "KANDI vs PRYNLEE",
    "date": "21-09-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Z_SvZqwoiMY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x01",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "kandi"
  },
  {
    "id": "pg-s05-2024-09-25-rahika-vs-ricko",
    "slug": "rahika-vs-ricko",
    "mc1": "rahika",
    "mc2": "ricko",
    "date": "25-09-2024",
    "videoUrl": "https://www.youtube.com/watch?v=CSzF9sZ_03E",
    "title": "RAHIKA vs RICKO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x16",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "rahika"
  },
  {
    "id": "pg-s05-2024-09-28-iiiberealz-vs-ess2mad",
    "slug": "iiiberealz-vs-ess2mad",
    "mc1": "iiiberealz",
    "mc2": "ess2mad",
    "title": "iiiBEREALZ vs ESS2MAD",
    "date": "28-09-2024",
    "videoUrl": "https://www.youtube.com/watch?v=rB79D9o-WQo",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x02",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "iiiberealz"
  },
  {
    "id": "pg-s05-2024-10-02-jm-vs-fendry",
    "slug": "jm-vs-fendry",
    "mc1": "jm",
    "mc2": "fendry",
    "title": "JM vs FENDRY",
    "date": "02-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Cad3qLWsTR0",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x03",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "fendry"
  },
  {
    "id": "pg-s05-2024-10-09-grams-vs-whoisorion",
    "slug": "grams-vs-whoisorion",
    "mc1": "grams",
    "mc2": "whoisorion",
    "date": "09-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=mSwnP0m3sHo",
    "title": "GRAMS vs WHOISORION",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "views": "134k",
    "winner": "whoisorion",
    "customEp": "5x05",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles"
  },
  {
    "id": "pg-s05-2024-10-12-passive-vs-hunce",
    "slug": "passive-vs-hunce",
    "mc1": "passive",
    "mc2": "hunce",
    "title": "PASSIVE vs HUNCE",
    "date": "12-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=fYNgIGjJKqg",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x06",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "passive"
  },
  {
    "id": "pg-s05-2024-10-19-whoisorion-vs-drizzgb",
    "slug": "whoisorion-cheezee-vs-drizzgb-trappy",
    "mc1": "whoisorion",
    "mc2": "drizzgb",
    "mc3": "cheezee",
    "mc4": "trappy",
    "title": "WHOISORION & CHEEZEE vs DRIZZGB & TRAPPY",
    "displayTitle": "WHOISORION & CHEEZEE vs DRIZZGB & TRAPPY",
    "date": "19-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Gs5oCCGUlX4",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "customEp": "5x26",
    "stage": null,
    "group": null,
    "tag": "2v2 Tournament",
    "winner": "drizzgb",
    "winner2": "trappy"
  },
  {
    "id": "pg-s05-2024-10-19-grams-vs-storm",
    "slug": "grams-passive-vs-storm-ad",
    "mc1": "grams",
    "mc2": "storm",
    "mc3": "passive",
    "mc4": "ad",
    "date": "19-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=OXbPIvnFCmU",
    "title": "GRAMS & PASSIVE vs STORM & AD",
    "displayTitle": "GRAMS & PASSIVE vs STORM & AD",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "customEp": "5x27",
    "stage": null,
    "group": null,
    "tag": "2v2 Tournament",
    "winner": "grams",
    "winner2": "passive"
  },
  {
    "id": "pg-s05-2024-10-23-smil3z-vs-f-don",
    "slug": "smil3z-iiiberealz-vs-f-don-dan-dannah",
    "mc1": "smil3z",
    "mc2": "f-don",
    "mc3": "iiiberealz",
    "mc4": "dan-dannah",
    "title": "SMIL3Z & iiiBEREALZ vs F-DON & DAN DANNAH",
    "displayTitle": "SMIL3Z & iiiBEREALZ vs F-DON & DAN DANNAH",
    "date": "23-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=w3WElZsbdsk",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "customEp": "5x28",
    "stage": null,
    "group": null,
    "tag": "2v2 Tournament",
    "winner": "f-don",
    "winner2": "dan-dannah"
  },
  {
    "id": "pg-s05-2024-10-29-skamz-vs-kandi",
    "slug": "skamz-sevz-vs-kandi-deeno",
    "mc1": "skamz",
    "mc2": "kandi",
    "mc3": "sevz",
    "mc4": "deeno",
    "title": "SKAMZ & SEVZ vs KANDI & DEENO",
    "displayTitle": "SKAMZ & SEVZ vs KANDI & DEENO",
    "date": "29-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=TpDAx1ew7gg",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "customEp": "5x29",
    "stage": null,
    "group": null,
    "tag": "2v2 Tournament",
    "winner": "deeno",
    "winner2": "kandi"
  },
  {
    "id": "pg-s05-2024-10-30-domi-dusk-vs-jaycee",
    "slug": "domi-dusk-vs-jaycee",
    "mc1": "domi-dusk",
    "mc2": "jaycee",
    "title": "DOMI DUSK vs JAYCEE",
    "date": "30-10-2024",
    "videoUrl": "https://www.youtube.com/watch?v=vV4XT8mSsvQ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles",
    "customEp": "5x09",
    "stage": null,
    "group": null,
    "tag": "Box Park 1v1 Battles",
    "winner": "jaycee"
  },
  {
    "id": "pg-s05-2024-11-02-karma10tnf-vs-mr-benz",
    "slug": "karma10tnf-vs-mr-benz",
    "mc1": "karma10tnf",
    "mc2": "mr-benz",
    "title": "KARMA10TNF vs MR.BENZ",
    "date": "02-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=p-q9WTLYIHI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x17",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-11-03-drizzgb-vs-jm",
    "slug": "drizzgb-vs-jm",
    "mc1": "drizzgb",
    "mc2": "jm",
    "date": "03-11-2024",
    "title": "DRIZZGB vs JM",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Wrexham Battles",
    "customEp": "5x13",
    "stage": null,
    "group": null,
    "tag": "Wrexham Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-11-06-marcel-vs-penno",
    "slug": "marcel-vs-penno",
    "mc1": "marcel",
    "mc2": "penno",
    "title": "MARCEL vs PENNO",
    "date": "06-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Ay7pCjVzCsU",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x18",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "marcel"
  },
  {
    "id": "pg-s05-2024-11-09-millz-vs-foz",
    "slug": "millz-vs-foz",
    "mc1": "millz",
    "mc2": "foz",
    "title": "MILLZ vs FOZ",
    "date": "09-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=MNVSmLxNlcc",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x19",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-11-13-rasiah-vs-220",
    "slug": "rasiah-vs-220",
    "mc1": "rasiah",
    "mc2": "220",
    "title": "RA'SIAH vs 220",
    "date": "13-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=lGQp_RhhcS0",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x20",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-11-27-anbu-sensei-vs-deeno",
    "slug": "anbu-sensei-vs-deeno",
    "mc1": "anbu-sensei",
    "mc2": "deeno",
    "date": "27-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=iU4YJypksOk",
    "title": "ANBU SENSEI vs DEENO",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "views": "204k",
    "winner": "anbu-sensei",
    "customEp": "5x07",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles"
  },
  {
    "id": "pg-s05-2024-11-30-ess2mad-vs-deeno",
    "slug": "ess2mad-vs-deeno",
    "mc1": "ess2mad",
    "mc2": "deeno",
    "title": "ESS2MAD vs DEENO",
    "date": "30-11-2024",
    "videoUrl": "https://www.youtube.com/watch?v=EcBXDHJYpb0",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles",
    "customEp": "5x10",
    "stage": null,
    "group": null,
    "tag": "Box Park 1v1 Battles",
    "winner": "deeno"
  },
  {
    "id": "pg-s05-2024-12-07-kime-vs-caveman",
    "slug": "kime-vs-caveman",
    "mc1": "kime",
    "mc2": "caveman",
    "title": "K.I.M.E vs CAVEMAN",
    "date": "07-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=g-WRsKVkb3I",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "views": "42k",
    "customEp": "5x21",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-12-11-che3kz-vs-marcel",
    "slug": "che3kz-vs-marcel",
    "mc1": "che3kz",
    "mc2": "marcel",
    "title": "CHE3KZ vs MARCEL",
    "date": "11-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=TryRWFw4DGY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x22",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "che3kz"
  },
  {
    "id": "pg-s05-2024-12-14-jm-vs-mr-benz",
    "slug": "jm-vs-mr-benz",
    "mc1": "jm",
    "mc2": "mr-benz",
    "title": "JM vs MR.BENZ",
    "date": "14-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=6hgdislkpGw",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x23",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "jm"
  },
  {
    "id": "pg-s05-2024-12-18-millz-vs-karma10tnf",
    "slug": "millz-vs-karma10tnf",
    "mc1": "millz",
    "mc2": "karma10tnf",
    "title": "MILLZ vs KARMA10TNF",
    "date": "18-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=WLZZUCCs42I",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x24",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-12-25-drizzgb-vs-f-don",
    "slug": "drizzgb-trappy-vs-f-don-dan-dannah",
    "mc1": "drizzgb",
    "mc2": "f-don",
    "mc3": "trappy",
    "mc4": "dan-dannah",
    "winner": "drizzgb",
    "winner2": "trappy",
    "title": "DRIZZGB & TRAPPY vs F-DON & DAN DANNAH",
    "displayTitle": "DRIZZGB & TRAPPY vs F-DON & DAN DANNAH",
    "date": "25-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=HoOQSlbsdf0",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2v2 Tournament",
    "views": "302k",
    "customEp": "5x31",
    "stage": "Final",
    "group": null,
    "tag": "2v2 Tournament"
  },
  {
    "id": "pg-s05-2024-12-26-dan-dannah-vs-iiiberealz",
    "slug": "dan-dannah-vs-iiiberealz",
    "mc1": "dan-dannah",
    "mc2": "iiiberealz",
    "date": "26-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=kLL2HKMyWFs",
    "title": "DAN DANNAH vs iiiBEREALZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "customEp": "5x08",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2024-12-28-deeno-vs-jm",
    "slug": "deeno-vs-jm",
    "mc1": "deeno",
    "mc2": "jm",
    "date": "28-12-2024",
    "videoUrl": "https://www.youtube.com/watch?v=nEWdn3I6nlQ",
    "title": "DEENO vs JM",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles",
    "views": "178k",
    "winner": "jm",
    "customEp": "5x32",
    "stage": null,
    "group": null,
    "tag": "North vs South Christmas Battles"
  },
  {
    "id": "pg-s05-2025-01-01-passive-vs-zen",
    "slug": "passive-vs-zen",
    "mc1": "passive",
    "mc2": "zen",
    "date": "01-01-2025",
    "title": "PASSIVE vs ZEN",
    "videoUrl": "https://www.youtube.com/watch?v=72rXm2Hfpo8",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles",
    "views": "215k",
    "winner": "zen",
    "customEp": "5x33",
    "stage": null,
    "group": null,
    "tag": "North vs South Christmas Battles"
  },
  {
    "id": "pg-s05-2025-01-04-domi-dusk-vs-fendry",
    "slug": "domi-dusk-vs-fendry",
    "mc1": "domi-dusk",
    "mc2": "fendry",
    "date": "04-01-2025",
    "title": "DOMI DUSK vs FENDRY",
    "videoUrl": "https://www.youtube.com/watch?v=Uiq_H6S_fis",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles",
    "views": "98k",
    "winner": "fendry",
    "customEp": "5x34",
    "stage": null,
    "group": null,
    "tag": "North vs South Christmas Battles"
  },
  {
    "id": "pg-s05-2025-01-11-jaycee-vs-kime",
    "slug": "jaycee-vs-kime",
    "mc1": "jaycee",
    "mc2": "kime",
    "date": "11-01-2025",
    "videoUrl": "https://www.youtube.com/watch?v=5k0qXDQe9Zc",
    "title": "JAYCEE vs K.I.M.E",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles",
    "views": "114k",
    "winner": "kime",
    "customEp": "5x36",
    "stage": null,
    "group": null,
    "tag": "North vs South Christmas Battles"
  },
  {
    "id": "pg-s05-2025-01-18-cucha-vs-karma10tnf",
    "slug": "cucha-vs-karma10tnf",
    "mc1": "cucha",
    "mc2": "karma10tnf",
    "winner": "cucha",
    "date": "18-01-2025",
    "title": "CUCHA vs KARMA10TNF",
    "videoUrl": "https://www.youtube.com/watch?v=6BMNwwVGQuY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Manchester Battles",
    "customEp": "5xM1",
    "views": "15k",
    "stage": null,
    "group": null,
    "tag": "Manchester Battles"
  },
  {
    "id": "pg-s05-2025-01-22-missink-vs-prynlee",
    "slug": "missink-vs-prynlee",
    "mc1": "missink",
    "mc2": "prynlee",
    "title": "MISSINK vs PRYNLEE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x38",
    "date": "22-01-2025",
    "videoUrl": "https://www.youtube.com/watch?v=0WumtkpJnIE",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles",
    "winner": "missink"
  },
  {
    "id": "pg-s05-2025-01-25-2mwad-vs-skamz",
    "slug": "2mwad-vs-skamz",
    "mc1": "2mwad",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "2MWAD vs SKAMZ",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x39",
    "views": "52k",
    "date": "25-01-2025",
    "videoUrl": "https://www.youtube.com/watch?v=bTFHmhIZhvQ",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles"
  },
  {
    "id": "pg-s05-2025-01-29-che3kz-vs-cucha",
    "slug": "che3kz-vs-cucha",
    "mc1": "che3kz",
    "mc2": "cucha",
    "winner": "che3kz",
    "title": "CHE3KZ vs CUCHA",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x37",
    "views": "22k",
    "date": "29-01-2025",
    "videoUrl": "https://www.youtube.com/watch?v=cLbzlRDVBtA",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles"
  },
  {
    "id": "pg-s05-2025-02-01-anbu-sensei-vs-smil3z",
    "slug": "anbu-sensei-vs-smil3z",
    "mc1": "anbu-sensei",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "ANBU SENSEI vs SMIL3Z",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x38",
    "views": "48k",
    "date": "01-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=2SLu421-rjI",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles"
  },
  {
    "id": "pg-s05-2025-02-06-marcel-vs-kandi",
    "slug": "marcel-vs-kandi",
    "mc1": "marcel",
    "mc2": "kandi",
    "winner": "kandi",
    "title": "MARCEL vs KANDI",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x39",
    "views": "19k",
    "date": "06-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=BuBgv8qx5jA",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles"
  },
  {
    "id": "pg-s05-2025-02-08-domi-dusk-vs-hunce",
    "slug": "domi-dusk-vs-hunce",
    "mc1": "domi-dusk",
    "mc2": "hunce",
    "winner": "domi-dusk",
    "title": "DOMI DUSK vs HUNCE",
    "date": "08-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=OwgC7cTldzs",
    "theme": "pengame",
    "season": 5,
    "subGroup": "2025 Chicken Shop Battles",
    "customEp": "5x40",
    "views": "34k",
    "stage": null,
    "group": null,
    "tag": "2025 Chicken Shop Battles"
  },
  {
    "id": "pg-s05-2025-02-12-whoisorion-vs-zen",
    "slug": "whoisorion-vs-zen",
    "mc1": "whoisorion",
    "mc2": "zen",
    "winner": "zen",
    "date": "12-02-2025",
    "title": "WHOISORION vs ZEN",
    "videoUrl": "https://www.youtube.com/watch?v=NpGsWG3wyMs",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Manchester Battles",
    "customEp": "5xM2",
    "views": "28k",
    "stage": null,
    "group": null,
    "tag": "Manchester Battles"
  },
  {
    "id": "pg-s05-2025-02-12-hunce-vs-anbu-sensei",
    "slug": "hunce-vs-anbu-sensei",
    "mc1": "hunce",
    "mc2": "anbu-sensei",
    "winner": "anbu-sensei",
    "date": "12-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=OvJDWnktDak",
    "title": "HUNCE vs ANBU SENSEI",
    "statusNote": "Audio release only",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Box Park 1v1 Battles",
    "customEp": "5x11",
    "views": "92k",
    "stage": null,
    "group": null,
    "tag": "Box Park 1v1 Battles"
  },
  {
    "id": "pg-s05-2025-02-15-deeno-vs-kandi",
    "slug": "deeno-vs-kandi",
    "mc1": "deeno",
    "mc2": "kandi",
    "winner": "deeno",
    "date": "15-02-2025",
    "title": "DEENO vs KANDI",
    "videoUrl": "https://www.youtube.com/watch?v=eH2SAFop3Dw",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Manchester Battles",
    "customEp": "5xM3",
    "views": "42k",
    "stage": null,
    "group": null,
    "tag": "Manchester Battles"
  },
  {
    "id": "pg-s05-2025-02-19-grams-vs-mr-benz",
    "slug": "grams-vs-mr-benz",
    "mc1": "grams",
    "mc2": "mr-benz",
    "title": "GRAMS vs MR.BENZ",
    "date": "19-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=rFl86v_k3Ak",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2",
    "customEp": "5x44",
    "stage": null,
    "group": null,
    "tag": "South vs North 2",
    "winner": "grams"
  },
  {
    "id": "pg-s05-2025-02-19-cucha-vs-char-b",
    "slug": "cucha-vs-char-b",
    "mc1": "cucha",
    "mc2": "char-b",
    "title": "CUCHA vs CHAR.B",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2",
    "date": "19-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=BZ6mj-OLNAc",
    "customEp": "5x47",
    "stage": null,
    "group": null,
    "tag": "South vs North 2",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-02-24-rasiah-vs-fendry",
    "slug": "rasiah-vs-fendry",
    "mc1": "rasiah",
    "mc2": "fendry",
    "title": "RA'SIAH vs FENDRY",
    "date": "24-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=wvCBSkhtmpE",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North Battles",
    "customEp": "5x25",
    "stage": null,
    "group": null,
    "tag": "North Battles",
    "winner": "fendry"
  },
  {
    "id": "pg-s05-2025-02-26-fendry-vs-jaycee",
    "slug": "fendry-vs-jaycee",
    "mc1": "fendry",
    "mc2": "jaycee",
    "title": "FENDRY vs JAYCEE",
    "date": "26-02-2025",
    "videoUrl": "https://www.youtube.com/watch?v=IDdNJQcjqmM",
    "theme": "pengame",
    "season": 5,
    "subGroup": "South vs North 2",
    "customEp": "5x46",
    "stage": null,
    "group": null,
    "tag": "South vs North 2",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-03-03-storm-vs-cheezee",
    "slug": "storm-vs-cheezee",
    "mc1": "storm",
    "mc2": "cheezee",
    "winner": "storm",
    "date": "03-03-2025",
    "title": "STORM vs CHEEZEE",
    "videoUrl": "https://www.youtube.com/watch?v=SV1TMBL-fzY",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Manchester Battles",
    "customEp": "5xM4",
    "views": "18k",
    "stage": null,
    "group": null,
    "tag": "Manchester Battles"
  },
  {
    "id": "pg-s05-2025-04-01-iiiberealz-vs-rasiah",
    "slug": "iiiberealz-vs-rasiah",
    "mc1": "iiiberealz",
    "mc2": "rasiah",
    "date": "01-04-2025",
    "videoUrl": "https://www.youtube.com/watch?v=9Ht0f3aW3Dk",
    "title": "iiiBEREALZ vs RA'SIAH",
    "theme": "pengame",
    "season": 5,
    "subGroup": "North vs South Christmas Battles",
    "views": "142k",
    "winner": "iiiberealz",
    "customEp": "5x35",
    "stage": null,
    "group": null,
    "tag": "North vs South Christmas Battles"
  },
  {
    "id": "pg-s05-2025-04-07-missink-vs-cucha",
    "slug": "missink-vs-cucha",
    "mc1": "missink",
    "mc2": "cucha",
    "date": "07-04-2025",
    "title": "MISSINK vs CUCHA",
    "videoUrl": "https://www.youtube.com/watch?v=jDN2K8vboMs",
    "theme": "pengame",
    "season": 5,
    "subGroup": "Dungeon Battles",
    "views": "167k",
    "winner": "missink",
    "customEp": "5x04",
    "stage": null,
    "group": null,
    "tag": "Dungeon Battles"
  },
  {
    "id": "pg-s05-2025-05-05-domi-dusk-vs-rasiah",
    "slug": "domi-dusk-vs-rasiah",
    "mc1": "domi-dusk",
    "mc2": "rasiah",
    "title": "DOMI DUSK vs RA'SIAH",
    "date": "05-05-2025",
    "videoUrl": "https://www.youtube.com/watch?v=9vJt4wJFDq4",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "views": "52k",
    "customEp": "5x52",
    "stage": "Regular Season",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-06-02-tapped24-vs-domi-dusk",
    "slug": "tapped24-vs-domi-dusk",
    "mc1": "tapped24",
    "mc2": "domi-dusk",
    "title": "TAPPED24 vs DOMI DUSK",
    "date": "02-06-2025",
    "videoUrl": "https://www.youtube.com/watch?v=aijMyPxEPxo",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "customEp": "5x53",
    "stage": "Regular Season",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-07-02-rasiah-vs-smil3z",
    "slug": "rasiah-vs-smil3z",
    "mc1": "rasiah",
    "mc2": "smil3z",
    "title": "RA'SIAH vs SMIL3Z",
    "date": "02-07-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "6x34",
    "seasonOrder": 34,
    "subGroup": "Semi Finals",
    "views": "170k",
    "stage": "Semi Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=1F248Semx9w",
    "winner": "smil3z"
  },
  {
    "id": "pg-s06-2025-09-13-grams-vs-skamz",
    "slug": "grams-vs-skamz-2",
    "mc1": "grams",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "GRAMS vs SKAMZ",
    "date": "13-09-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "views": "126k",
    "customEp": "6x40",
    "seasonOrder": 40,
    "subGroup": "Side battle",
    "stage": "Semi Finals",
    "group": null,
    "tag": "Side battle",
    "videoUrl": "https://www.youtube.com/watch?v=QutHCTF_6a0"
  },
  {
    "id": "pg-s05-2025-10-27-zen-vs-dan-dannah",
    "slug": "zen-vs-dan-dannah",
    "mc1": "zen",
    "mc2": "dan-dannah",
    "title": "ZEN vs DAN DANNAH",
    "date": "27-10-2025",
    "theme": "pengame",
    "season": "2025",
    "customEp": "5x56",
    "subGroup": "Regular Season",
    "views": "42k",
    "stage": "Regular Season",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=SF4--RZNTSE",
    "winner": "zen"
  },
  {
    "id": "pg-s05-2025-11-12-kime-vs-sevz",
    "slug": "kime-vs-sevz",
    "mc1": "kime",
    "mc2": "sevz",
    "title": "K.I.M.E vs SEVZ",
    "date": "12-11-2025",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "customEp": "5x57",
    "stage": "Regular Season",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=IylHnqYy8T0",
    "winner": "sevz"
  },
  {
    "id": "pg-s06-2025-11-15-dan-dannah-vs-trappy",
    "slug": "dan-dannah-vs-trappy",
    "mc1": "dan-dannah",
    "mc2": "trappy",
    "title": "DAN DANNAH vs TRAPPY",
    "date": "15-11-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "6x37",
    "seasonOrder": 37,
    "subGroup": "Side battle",
    "views": "88k",
    "stage": "Quarter Finals",
    "group": null,
    "tag": "Side battle",
    "videoUrl": "https://www.youtube.com/watch?v=y_KM5xMbrg8",
    "winner": "trappy"
  },
  {
    "id": "pg-s06-coldwar-f-don-vs-drizzgb-side",
    "slug": "f-don-vs-drizzgb",
    "mc1": "f-don",
    "mc2": "drizzgb",
    "title": "F-DON vs DRIZZGB",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "6x38",
    "seasonOrder": 38,
    "subGroup": "Side battle",
    "stage": "Quarter Finals",
    "group": null,
    "tag": "Side battle",
    "date": "16-08-2025",
    "videoUrl": "https://www.youtube.com/watch?v=zCUEw1FMEhM",
    "winner": "unknown"
  },
  {
    "id": "pg-s06-coldwar-zen-vs-marcel-side",
    "slug": "zen-vs-marcel",
    "mc1": "zen",
    "mc2": "marcel",
    "title": "ZEN vs MARCEL",
    "displayTitle": "ZEN vs MARCEL",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "6x39",
    "seasonOrder": 39,
    "subGroup": "Side battle",
    "stage": "Semi Finals",
    "group": null,
    "tag": "Side battle",
    "date": "10-09-2025",
    "videoUrl": "https://www.youtube.com/watch?v=lj6QVgOBxL0",
    "winner": "unknown"
  },
  {
    "id": "pg-s06-coldwar-ft-vs-jaycee-side",
    "slug": "ft-vs-jaycee",
    "mc1": "ft",
    "mc2": "jaycee",
    "title": "Forever Tapped vs JAYCEE",
    "date": "20-09-2025",
    "videoUrl": "https://www.youtube.com/watch?v=Rsv-zRxai-8",
    "displayTitle": "Forever Tapped vs JAYCEE",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "customEp": "6x41",
    "seasonOrder": 41,
    "subGroup": "Side battle",
    "stage": "Semi Finals",
    "group": null,
    "tag": "Side battle",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-11-24-kmarh-vs-aliaano",
    "slug": "kmarh-vs-aliaano",
    "mc1": "kmarh",
    "mc2": "aliaano",
    "title": "K.MARH vs ALIAANO",
    "date": "24-11-2025",
    "theme": "pengame",
    "season": "2025",
    "customEp": "5x59",
    "subGroup": "Return Special",
    "views": "56k",
    "stage": null,
    "group": null,
    "tag": "Return Special",
    "videoUrl": "https://www.youtube.com/watch?v=wvCPJz8uWzo",
    "winner": "kmarh"
  },
  {
    "id": "pg-s05-2025-11-25-trappy-vs-drizzgb",
    "slug": "trappy-vs-drizzgb",
    "mc1": "trappy",
    "mc2": "drizzgb",
    "title": "Finals Cypher (Trappy/DrizzGB/Kojey)",
    "date": "25-11-2025",
    "theme": "pengame",
    "season": "2025",
    "customEp": "5x60",
    "subGroup": "Tournament Special",
    "views": "29k",
    "stage": null,
    "group": null,
    "tag": "Tournament Special",
    "winner": "unknown"
  },
  {
    "id": "pg-s05-2025-12-17-varntae-vs-anbu-sensei",
    "slug": "varntae-vs-anbu-sensei",
    "mc1": "varntae",
    "mc2": "anbu-sensei",
    "title": "VARNTAE vs ANBU SENSEI",
    "date": "17-12-2025",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Christmas Special",
    "views": "141k",
    "customEp": "5x61",
    "stage": null,
    "group": null,
    "tag": "Christmas Special",
    "videoUrl": "https://www.youtube.com/watch?v=0PsRkfaZ1jU",
    "winner": "anbu-sensei"
  },
  {
    "id": "pg-s05-2025-12-24-trappy-vs-iiiberealz",
    "slug": "trappy-vs-iiiberealz",
    "mc1": "trappy",
    "mc2": "iiiberealz",
    "title": "TRAPPY vs iiiBEREALZ",
    "date": "24-12-2025",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Christmas Special",
    "winner": "iiiberealz",
    "videoUrl": "https://www.youtube.com/watch?v=dnE5-VZkpbY",
    "views": "92k",
    "customEp": "5x62",
    "stage": null,
    "group": null,
    "tag": "Christmas Special"
  },
  {
    "id": "pg-s2023-2023-09-09-skamz-vs-sevz",
    "slug": "skamz-vs-sevz-2",
    "mc1": "skamz",
    "mc2": "sevz",
    "title": "SKAMZ vs SEVZ",
    "date": "09-09-2023",
    "videoUrl": "https://www.youtube.com/watch?v=DECvslhWjPo",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Semi Finals",
    "customEp": "Tx29",
    "stage": "Semi Finals",
    "group": null,
    "tag": null,
    "winner": "skamz"
  },
  {
    "id": "pg-s2023-2024-01-27-ren-dmc-vs-blazn",
    "slug": "ren-dmc-vs-blazn",
    "mc1": "ren-dmc",
    "mc2": "blazn",
    "winner": "ren-dmc",
    "title": "REN DMC vs BLAZN",
    "date": "27-01-2024",
    "videoUrl": "https://www.youtube.com/watch?v=KdixjypYofU",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx01",
    "subGroup": "Group A",
    "views": "35k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-01-31-drizzgb-vs-skamz",
    "slug": "drizzgb-vs-skamz",
    "mc1": "drizzgb",
    "mc2": "skamz",
    "winner": "drizzgb",
    "title": "DRIZZGB vs SKAMZ",
    "date": "31-01-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Is4HqSBvf6o",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx02",
    "subGroup": "Group A",
    "views": "42k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-07-skamz-vs-blazn",
    "slug": "skamz-vs-blazn",
    "mc1": "skamz",
    "mc2": "blazn",
    "winner": "skamz",
    "title": "SKAMZ vs BLAZN",
    "date": "07-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=JLgtqbs6HN0",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx03",
    "subGroup": "Group A",
    "views": "28k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-10-ren-dmc-vs-drizzgb-group-a",
    "slug": "ren-dmc-vs-drizzgb",
    "mc1": "ren-dmc",
    "mc2": "drizzgb",
    "title": "REN DMC vs DRIZZGB",
    "date": "07-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=OOZAd1TtT9A",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx04",
    "subGroup": "Group A",
    "views": null,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "winner": "ren-dmc"
  },
  {
    "id": "pg-s2023-2024-02-14-drizzgb-vs-blazn",
    "slug": "drizzgb-vs-blazn",
    "mc1": "drizzgb",
    "mc2": "blazn",
    "winner": "drizzgb",
    "title": "DRIZZGB vs BLAZN",
    "date": "14-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=oEKgvkt1_y0",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx05",
    "subGroup": "Group A",
    "views": "15k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-17-skamz-vs-ren-dmc-group-a",
    "slug": "skamz-vs-ren-dmc-2",
    "mc1": "skamz",
    "mc2": "ren-dmc",
    "winner": "skamz",
    "title": "SKAMZ vs REN DMC",
    "date": "17-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=fAmMPCXJVCs",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx06",
    "subGroup": "Group A",
    "views": null,
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-21-f-don-vs-iiiberealz",
    "slug": "f-don-vs-iiiberealz",
    "mc1": "f-don",
    "mc2": "iiiberealz",
    "winner": "f-don",
    "title": "F-DON vs iiiBEREALZ",
    "date": "21-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=OKnnvyGPhuU",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx07",
    "subGroup": "Group B",
    "views": "28k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-24-smil3z-vs-deeno",
    "slug": "smil3z-vs-deeno",
    "mc1": "smil3z",
    "mc2": "deeno",
    "winner": "smil3z",
    "title": "SMIL3Z vs DEENO",
    "date": "24-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=lhMhWKs7mAk",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx08",
    "subGroup": "Group B",
    "views": "45k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-02-28-f-don-vs-deeno",
    "slug": "f-don-vs-deeno",
    "mc1": "f-don",
    "mc2": "deeno",
    "winner": "f-don",
    "title": "F-DON vs DEENO",
    "date": "28-02-2024",
    "videoUrl": "https://www.youtube.com/watch?v=LD-wdrRQNh4",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx09",
    "subGroup": "Group B",
    "views": "32k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-03-02-smil3z-vs-iiiberealz",
    "slug": "smil3z-vs-iiiberealz",
    "mc1": "smil3z",
    "mc2": "iiiberealz",
    "winner": "smil3z",
    "title": "SMIL3Z vs iiiBEREALZ",
    "date": "02-03-2024",
    "videoUrl": "https://www.youtube.com/watch?v=qBIzm2166hk",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx10",
    "subGroup": "Group B",
    "views": "22k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-03-06-iiiberealz-vs-deeno",
    "slug": "iiiberealz-vs-deeno",
    "mc1": "iiiberealz",
    "mc2": "deeno",
    "winner": "iiiberealz",
    "title": "iiiBEREALZ vs DEENO",
    "date": "06-03-2024",
    "videoUrl": "https://www.youtube.com/watch?v=y1I3Ur-naf0",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx11",
    "subGroup": "Group B",
    "views": "18k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-03-09-f-don-vs-smil3z",
    "slug": "f-don-vs-smil3z",
    "mc1": "f-don",
    "mc2": "smil3z",
    "winner": "f-don",
    "title": "F-DON vs SMIL3Z",
    "date": "09-03-2024",
    "videoUrl": "https://www.youtube.com/watch?v=UiGcqxoqnes",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx12",
    "subGroup": "Group B",
    "views": "38k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-04-03-whoisorion-vs-kandi",
    "slug": "whoisorion-vs-kandi-2",
    "mc1": "whoisorion",
    "mc2": "kandi",
    "winner": "whoisorion",
    "title": "WHOISORION vs KANDI",
    "date": "03-04-2024",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx13",
    "subGroup": "Group C",
    "views": "25k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-04-06-cheezee-vs-dan-dannah",
    "slug": "cheezee-vs-dan-dannah",
    "mc1": "cheezee",
    "mc2": "dan-dannah",
    "winner": "cheezee",
    "title": "CHEEZEE vs DAN DANNAH",
    "date": "06-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=PhfHQf5G5G8",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx14",
    "subGroup": "Group C",
    "views": "31k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-04-10-whoisorion-vs-cheezee",
    "slug": "whoisorion-vs-cheezee-2",
    "mc1": "whoisorion",
    "mc2": "cheezee",
    "winner": "whoisorion",
    "title": "WHOISORION vs CHEEZEE",
    "date": "10-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=vGXVPRJUfOA",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx15",
    "subGroup": "Group C",
    "views": "29k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-04-13-dan-dannah-vs-kandi",
    "slug": "dan-dannah-vs-kandi",
    "mc1": "dan-dannah",
    "mc2": "kandi",
    "winner": "dan-dannah",
    "title": "DAN DANNAH vs KANDI",
    "date": "13-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=KMiWwP_LWIw",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx16",
    "subGroup": "Group C",
    "views": "12k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s2023-2024-04-17-cheezee-vs-kandi",
    "slug": "cheezee-vs-kandi",
    "mc1": "cheezee",
    "mc2": "kandi",
    "title": "CHEEZEE vs KANDI",
    "date": "17-04-2024",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx17",
    "subGroup": "Group C",
    "stage": "Group Stage",
    "group": "C",
    "tag": null,
    "winner": "cheezee",
    "videoUrl": "https://www.youtube.com/watch?v=__WPVyxpUYI"
  },
  {
    "id": "pg-s2023-2024-04-20-whoisorion-vs-dan-dannah",
    "slug": "whoisorion-vs-dan-dannah",
    "mc1": "whoisorion",
    "mc2": "dan-dannah",
    "title": "WHOISORION vs DAN DANNAH",
    "date": "20-04-2024",
    "videoUrl": "https://www.youtube.com/watch?v=Y-Wi8wUh_Ec",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx18",
    "subGroup": "Group C",
    "stage": "Group Stage",
    "group": "C",
    "tag": null,
    "winner": "whoisorion"
  },
  {
    "id": "pg-s2023-2024-05-04-sevz-vs-prynlee",
    "slug": "sevz-vs-prynlee",
    "mc1": "sevz",
    "mc2": "prynlee",
    "title": "SEVZ vs PRYNLEE",
    "date": "04-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=QFaATrditrM",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx19",
    "subGroup": "Group D",
    "stage": "Group Stage",
    "group": "D",
    "tag": null,
    "winner": "sevz"
  },
  {
    "id": "pg-s2023-2024-05-08-sevz-vs-ft",
    "slug": "sevz-vs-ft",
    "mc1": "sevz",
    "mc2": "ft",
    "title": "SEVZ vs Forever Tapped",
    "displayTitle": "SEVZ vs Forever Tapped",
    "date": "08-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=X2QCtM3AIYE",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx20",
    "subGroup": "Group D",
    "stage": "Group Stage",
    "group": "D",
    "tag": null,
    "winner": "sevz"
  },
  {
    "id": "pg-s2023-2024-05-11-grams-vs-prynlee",
    "slug": "grams-vs-prynlee",
    "mc1": "grams",
    "mc2": "prynlee",
    "title": "GRAMS vs PRYNLEE",
    "date": "11-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=sHyfaHUsWc8",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx21",
    "subGroup": "Group D",
    "stage": "Group Stage",
    "group": "D",
    "tag": null,
    "winner": "grams"
  },
  {
    "id": "pg-s2023-2024-05-15-sevz-vs-grams",
    "slug": "sevz-vs-grams-2",
    "mc1": "sevz",
    "mc2": "grams",
    "title": "SEVZ vs GRAMS",
    "date": "15-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=bXY5a7Hjs38",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx22",
    "subGroup": "Group D",
    "stage": "Group Stage",
    "group": "D",
    "tag": null,
    "winner": "sevz"
  },
  {
    "id": "pg-s2023-2024-05-18-grams-vs-ft",
    "slug": "grams-vs-ft",
    "mc1": "grams",
    "mc2": "ft",
    "title": "GRAMS vs Forever Tapped",
    "displayTitle": "GRAMS vs Forever Tapped",
    "date": "18-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=CNb9rI3MRng",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx23",
    "subGroup": "Group D",
    "stage": "Group Stage",
    "group": "D",
    "tag": null,
    "winner": "ft",
    "statusNote": "GRAMS disqualified"
  },
  {
    "id": "pg-s2023-2024-05-25-sevz-vs-cheezee",
    "slug": "sevz-vs-cheezee",
    "mc1": "sevz",
    "mc2": "cheezee",
    "title": "SEVZ vs CHEEZEE",
    "date": "25-05-2024",
    "videoUrl": "https://www.youtube.com/watch?v=1MZK2MMH2cg",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx24",
    "subGroup": "Quarter Finals",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "winner": "sevz"
  },
  {
    "id": "pg-s2023-2024-06-01-whoisorion-vs-drizzgb",
    "slug": "whoisorion-vs-drizzgb-2",
    "mc1": "whoisorion",
    "mc2": "drizzgb",
    "title": "WHOISORION vs DRIZZGB",
    "date": "01-06-2024",
    "videoUrl": "https://www.youtube.com/watch?v=1YUdUfHwN6Y",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx25",
    "subGroup": "Quarter Finals",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "winner": "drizzgb"
  },
  {
    "id": "pg-s2023-2024-06-08-smil3z-vs-skamz",
    "slug": "smil3z-vs-skamz",
    "mc1": "smil3z",
    "mc2": "skamz",
    "title": "SMIL3Z vs SKAMZ",
    "date": "08-06-2024",
    "videoUrl": "https://www.youtube.com/watch?v=lYnSuNjCjjo",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx26",
    "subGroup": "Quarter Finals",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "winner": "smil3z"
  },
  {
    "id": "pg-s2023-2024-06-15-ren-dmc-vs-f-don",
    "slug": "ren-dmc-vs-f-don",
    "mc1": "ren-dmc",
    "mc2": "f-don",
    "title": "REN DMC vs F-DON",
    "date": "15-06-2024",
    "videoUrl": "https://www.youtube.com/watch?v=h2xd9HbRANU",
    "theme": "pengame",
    "season": 2023,
    "customEp": "Tx27",
    "subGroup": "Quarter Finals",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "winner": "ren-dmc"
  },
  {
    "id": "pg-s2023-2024-08-03-whoisorion-vs-grams",
    "slug": "whoisorion-iiiberealz-vs-grams-smil3z",
    "mc1": "whoisorion",
    "mc2": "grams",
    "mc3": "iiiberealz",
    "mc4": "smil3z",
    "title": "WHOISORION & iiiBEREALZ vs GRAMS & SMIL3Z",
    "displayTitle": "WHOISORION & iiiBEREALZ vs GRAMS & SMIL3Z",
    "date": "03-08-2024",
    "videoUrl": "https://www.youtube.com/watch?v=nvsvjrSb5DY",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "2v2",
    "customEp": "Tx28",
    "stage": "2v2",
    "group": null,
    "tag": "2v2",
    "winner": "whoisorion",
    "winner2": "iiiberealz"
  },
  {
    "id": "pg-s2023-2024-08-07-ren-dmc-vs-drizzgb",
    "slug": "ren-dmc-vs-drizzgb-2",
    "mc1": "ren-dmc",
    "mc2": "drizzgb",
    "title": "REN DMC vs DRIZZGB 2",
    "displayTitle": "REN DMC vs DRIZZGB 2",
    "date": "07-08-2024",
    "videoUrl": "https://www.youtube.com/watch?v=PxqpG9UtEww",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Semi Finals",
    "customEp": "Tx30",
    "stage": "Semi Finals",
    "group": null,
    "tag": null,
    "winner": "ren-dmc"
  },
  {
    "id": "pg-s2023-2024-08-10-ren-dmc-vs-skamz",
    "slug": "ren-dmc-vs-skamz-3",
    "mc1": "ren-dmc",
    "mc2": "skamz",
    "winner": "ren-dmc",
    "title": "REN DMC vs SKAMZ",
    "date": "10-08-2024",
    "videoUrl": "https://www.youtube.com/watch?v=QzWWm2YmW00",
    "theme": "pengame",
    "season": 2023,
    "subGroup": "Final",
    "views": "112k",
    "customEp": "Tx31",
    "stage": "Final",
    "group": null,
    "tag": null
  },
  {
    "id": "pg-s2023-2024-10-13-whoisorion-vs-grams",
    "slug": "whoisorion-vs-grams-2",
    "mc1": "whoisorion",
    "mc2": "grams",
    "title": "WHOISORION vs GRAMS",
    "date": "13-10-2024",
    "theme": "pengame",
    "season": 5,
    "customEp": "2023x30",
    "subGroup": "October Specials",
    "stage": null,
    "group": null,
    "tag": "October Specials",
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2025-03-05-kandi-vs-rasiah",
    "slug": "kandi-vs-rasiah",
    "mc1": "kandi",
    "mc2": "rasiah",
    "winner": "rasiah",
    "title": "KANDI vs RA'SIAH",
    "date": "05-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=as_la5t5iqA",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "views": "219k",
    "customEp": "6x01",
    "seasonOrder": 1,
    "stage": "Regular Season",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-08-passive-vs-skamz",
    "slug": "passive-vs-skamz",
    "mc1": "passive",
    "mc2": "skamz",
    "winner": "passive",
    "title": "PASSIVE vs SKAMZ",
    "date": "08-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=bIpqrBLcVqw",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "views": "390k",
    "customEp": "6x02",
    "seasonOrder": 2,
    "stage": "Regular Season",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-12-passive-vs-rasiah",
    "slug": "passive-vs-rasiah",
    "mc1": "passive",
    "mc2": "rasiah",
    "winner": "passive",
    "title": "PASSIVE vs RA'SIAH",
    "date": "12-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=lYnwH9sTZGk",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "views": "266k",
    "customEp": "6x03",
    "seasonOrder": 3,
    "stage": "Regular Season",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-22-kandi-vs-skamz",
    "slug": "kandi-vs-skamz-2",
    "mc1": "kandi",
    "mc2": "skamz",
    "winner": "skamz",
    "title": "KANDI vs SKAMZ",
    "date": "22-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=c4FT_-jYPpk",
    "theme": "pengame",
    "season": "2025",
    "subGroup": "Regular Season",
    "customEp": "6x04",
    "seasonOrder": 4,
    "views": "150k",
    "stage": "Regular Season",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-15-skamz-vs-rasiah",
    "slug": "skamz-vs-rasiah",
    "mc1": "skamz",
    "mc2": "rasiah",
    "winner": "rasiah",
    "title": "SKAMZ vs RA'SIAH",
    "date": "15-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=zKNs9v1szKY",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x05",
    "seasonOrder": 5,
    "views": "77k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-22-passive-vs-kandi",
    "slug": "passive-vs-kandi",
    "mc1": "passive",
    "mc2": "kandi",
    "winner": "passive",
    "title": "PASSIVE vs KANDI",
    "date": "22-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=FNcbo032rW4",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x06",
    "seasonOrder": 6,
    "views": "449k",
    "stage": "Group Stage",
    "group": "A",
    "tag": null
  },
  {
    "id": "pg-s06-2025-03-24-grams-vs-missink",
    "slug": "grams-vs-missink",
    "mc1": "grams",
    "mc2": "missink",
    "title": "GRAMS vs MISSINK",
    "date": "24-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=2iD1-amdMRA",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x07",
    "seasonOrder": 7,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "winner": "missink"
  },
  {
    "id": "pg-s06-2025-03-28-kandi-vs-bonnie-godiva",
    "slug": "kandi-vs-bonnie-godiva",
    "mc1": "kandi",
    "mc2": "bonnie-godiva",
    "title": "KANDI vs BONNIE GODIVA",
    "date": "28-03-2025",
    "videoUrl": "https://www.youtube.com/watch?v=6QyxFkVFfgE",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x08",
    "seasonOrder": 8,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "winner": "bonnie-godiva"
  },
  {
    "id": "pg-s06-2025-03-31-tapped24-vs-jmuni",
    "slug": "tapped24-vs-jmuni",
    "mc1": "tapped24",
    "mc2": "jmuni",
    "title": "TAPPED24 vs JMUNI",
    "date": "31-03-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x09",
    "seasonOrder": 9,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=EsgazGxYk6M",
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2025-03-24-drizzgb-vs-sevz",
    "slug": "drizzgb-vs-sevz",
    "mc1": "drizzgb",
    "mc2": "sevz",
    "title": "DRIZZGB vs SEVZ",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "views": "68k",
    "customEp": "6x10",
    "seasonOrder": 10,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2025-04-05-f-don-vs-kime",
    "slug": "f-don-vs-kime",
    "mc1": "f-don",
    "mc2": "kime",
    "title": "F-DON vs K.I.M.E.",
    "videoUrl": "https://www.youtube.com/watch?v=rJgNjZACdZQ",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group A",
    "customEp": "6x11",
    "seasonOrder": 11,
    "stage": "Group Stage",
    "group": "A",
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2025-04-16-jm-vs-zen",
    "slug": "jm-vs-zen",
    "mc1": "jm",
    "mc2": "zen",
    "winner": "jm",
    "title": "JM vs ZEN",
    "date": "16-04-2025",
    "videoUrl": "https://www.youtube.com/watch?v=m-i86qkAvB8",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x12",
    "seasonOrder": 12,
    "views": "165k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s06-2025-04-19-marcel-vs-smil3z",
    "slug": "marcel-vs-smil3z",
    "mc1": "marcel",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "MARCEL vs SMIL3Z",
    "date": "19-04-2025",
    "videoUrl": "https://www.youtube.com/watch?v=8C0wpxyNjfA",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x13",
    "seasonOrder": 13,
    "views": "130k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s06-2025-04-23-jm-vs-marcel",
    "slug": "jm-vs-marcel",
    "mc1": "jm",
    "mc2": "marcel",
    "winner": "jm",
    "title": "JM vs MARCEL",
    "date": "23-04-2025",
    "videoUrl": "https://www.youtube.com/watch?v=cBuI0vkdy4I",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x14",
    "seasonOrder": 14,
    "views": "81k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s06-2025-04-23-fendry-vs-iiiberealz",
    "slug": "fendry-vs-iiiberealz",
    "mc1": "fendry",
    "mc2": "iiiberealz",
    "winner": "fendry",
    "date": "23-04-2025",
    "title": "FENDRY vs iiiBEREALZ",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Quarter Finals",
    "customEp": "6x33",
    "seasonOrder": 33,
    "views": "138k",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=0NHPfYBdQe4"
  },
  {
    "id": "pg-s06-2025-04-26-jm-vs-smil3z",
    "slug": "jm-vs-smil3z",
    "mc1": "jm",
    "mc2": "smil3z",
    "winner": "jm",
    "title": "JM vs SMIL3Z",
    "date": "26-04-2025",
    "videoUrl": "https://www.youtube.com/watch?v=cd7l9D0p7aQ",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x15",
    "seasonOrder": 15,
    "views": "302k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s06-2025-04-30-zen-vs-marcel",
    "slug": "zen-vs-marcel-2",
    "mc1": "zen",
    "mc2": "marcel",
    "winner": "marcel",
    "title": "ZEN vs MARCEL",
    "date": "16-04-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x16",
    "seasonOrder": 16,
    "views": "106k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=3gewrivwS_Y"
  },
  {
    "id": "pg-s06-2025-05-03-zen-vs-smil3z",
    "slug": "zen-vs-smil3z",
    "mc1": "zen",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "ZEN vs SMIL3Z",
    "date": "03-05-2025",
    "videoUrl": "https://www.youtube.com/watch?v=-ilZEXmrji0",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group B",
    "customEp": "6x17",
    "seasonOrder": 17,
    "views": "173k",
    "stage": "Group Stage",
    "group": "B",
    "tag": null
  },
  {
    "id": "pg-s06-2025-05-28-deeno-vs-fendry",
    "slug": "deeno-vs-fendry",
    "mc1": "deeno",
    "mc2": "fendry",
    "winner": "fendry",
    "title": "DEENO vs FENDRY",
    "date": "28-05-2025",
    "videoUrl": "https://www.youtube.com/watch?v=3yaLKvfSp5o",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x18",
    "seasonOrder": 18,
    "views": "86k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-05-31-sevz-vs-cucha",
    "slug": "sevz-vs-cucha",
    "mc1": "sevz",
    "mc2": "cucha",
    "winner": "sevz",
    "title": "SEVZ vs CUCHA",
    "date": "31-05-2025",
    "videoUrl": "https://www.youtube.com/watch?v=2B8OSXMsyl4",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x19",
    "seasonOrder": 19,
    "views": "143k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-06-04-deeno-vs-cucha",
    "slug": "deeno-vs-cucha",
    "mc1": "deeno",
    "mc2": "cucha",
    "winner": "deeno",
    "title": "DEENO vs CUCHA",
    "date": "04-06-2025",
    "videoUrl": "https://www.youtube.com/watch?v=uhj2-0XDzEo",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x20",
    "seasonOrder": 20,
    "views": "63k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-06-07-sevz-vs-fendry",
    "slug": "sevz-vs-fendry",
    "mc1": "sevz",
    "mc2": "fendry",
    "winner": "sevz",
    "title": "SEVZ vs FENDRY",
    "date": "07-06-2025",
    "videoUrl": "https://www.youtube.com/watch?v=XAbOEncQcPs",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x21",
    "seasonOrder": 21,
    "views": "82k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-06-11-fendry-vs-cucha",
    "slug": "fendry-vs-cucha",
    "mc1": "fendry",
    "mc2": "cucha",
    "winner": "fendry",
    "title": "FENDRY vs CUCHA",
    "date": "11-06-2025",
    "videoUrl": "https://www.youtube.com/watch?v=gtLAE2vjdN0",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x22",
    "seasonOrder": 22,
    "views": "67k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-06-14-sevz-vs-deeno",
    "slug": "sevz-vs-deeno",
    "mc1": "sevz",
    "mc2": "deeno",
    "winner": "sevz",
    "title": "SEVZ vs DEENO",
    "date": "14-06-2025",
    "videoUrl": "https://www.youtube.com/watch?v=2NZH98272YM",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group C",
    "customEp": "6x23",
    "seasonOrder": 23,
    "views": "89k",
    "stage": "Group Stage",
    "group": "C",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-09-iiiberealz-vs-karma10tnf",
    "slug": "iiiberealz-vs-karma10tnf",
    "mc1": "iiiberealz",
    "mc2": "karma10tnf",
    "winner": "iiiberealz",
    "title": "iiiBEREALZ vs KARMA10TNF",
    "date": "09-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=GbFEtydekdc",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x24",
    "seasonOrder": 24,
    "views": "201k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-12-iiiberealz-vs-jaycee",
    "slug": "iiiberealz-vs-jaycee",
    "mc1": "iiiberealz",
    "mc2": "jaycee",
    "winner": "iiiberealz",
    "title": "iiiBEREALZ vs JAYCEE",
    "date": "12-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=vB0RUppQtLk",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x25",
    "seasonOrder": 25,
    "views": "170k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-16-karma10tnf-vs-che3kz",
    "slug": "karma10tnf-vs-che3kz",
    "mc1": "karma10tnf",
    "mc2": "che3kz",
    "winner": "karma10tnf",
    "title": "KARMA10TNF vs CHE3KZ",
    "date": "16-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=fda25xwlaRY",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x26",
    "seasonOrder": 26,
    "views": "106k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-19-jaycee-vs-che3kz",
    "slug": "jaycee-vs-che3kz",
    "mc1": "jaycee",
    "mc2": "che3kz",
    "winner": "jaycee",
    "title": "JAYCEE vs CHE3KZ",
    "date": "19-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=pMkmX0yXHEU",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x27",
    "seasonOrder": 27,
    "views": "97k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-23-jaycee-vs-karma10tnf",
    "slug": "jaycee-vs-karma10tnf",
    "mc1": "jaycee",
    "mc2": "karma10tnf",
    "winner": "jaycee",
    "title": "JAYCEE vs KARMA10TNF",
    "date": "23-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=F5RtuRAuHB0",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x28",
    "seasonOrder": 28,
    "views": "116k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-07-26-iiiberealz-vs-che3kz",
    "slug": "iiiberealz-vs-che3kz",
    "mc1": "iiiberealz",
    "mc2": "che3kz",
    "winner": "iiiberealz",
    "title": "iiiBEREALZ vs CHE3KZ",
    "date": "26-07-2025",
    "videoUrl": "https://www.youtube.com/watch?v=FcijpIWcBzk",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Group D",
    "customEp": "6x29",
    "seasonOrder": 29,
    "views": "174k",
    "stage": "Group Stage",
    "group": "D",
    "tag": null
  },
  {
    "id": "pg-s06-2025-09-03-jaycee-vs-smil3z",
    "slug": "jaycee-vs-smil3z",
    "mc1": "jaycee",
    "mc2": "smil3z",
    "winner": "smil3z",
    "title": "JAYCEE vs SMIL3Z",
    "date": "03-09-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Quarter Finals",
    "customEp": "6x31",
    "seasonOrder": 31,
    "views": "195k",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=C2BKWDnhzos"
  },
  {
    "id": "pg-s06-2025-09-05-passive-vs-fendry",
    "slug": "passive-vs-fendry",
    "mc1": "passive",
    "mc2": "fendry",
    "title": "PASSIVE vs FENDRY",
    "date": "05-09-2025",
    "theme": "pengame",
    "season": "Cold War",
    "customEp": "6x35",
    "competition": "PenGame Cold War",
    "seasonOrder": 35,
    "subGroup": "Semi Finals",
    "views": "154k",
    "stage": "Semi Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=PLz7Wr9381Y",
    "winner": "fendry"
  },
  {
    "id": "pg-s06-2025-09-06-jm-vs-passive",
    "slug": "jm-vs-passive",
    "mc1": "jm",
    "mc2": "passive",
    "winner": "passive",
    "title": "JM vs PASSIVE",
    "date": "06-09-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Quarter Finals",
    "customEp": "6x30",
    "seasonOrder": 30,
    "views": "329k",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=qv0fpCvR2bA"
  },
  {
    "id": "pg-s06-2025-09-17-rasiah-vs-sevz",
    "slug": "rasiah-vs-sevz",
    "mc1": "rasiah",
    "mc2": "sevz",
    "winner": "rasiah",
    "title": "RA'SIAH vs SEVZ",
    "date": "17-09-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Quarter Finals",
    "customEp": "6x32",
    "seasonOrder": 32,
    "views": "147k",
    "stage": "Quarter Finals",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=AnrNTKfX6SM"
  },
  {
    "id": "pg-s06-2025-10-25-smil3z-vs-fendry",
    "slug": "smil3z-vs-fendry",
    "mc1": "smil3z",
    "mc2": "fendry",
    "title": "SMIL3Z vs FENDRY",
    "date": "25-10-2025",
    "theme": "pengame",
    "season": "Cold War",
    "competition": "PenGame Cold War",
    "subGroup": "Finals",
    "winner": "smil3z",
    "videoUrl": "https://www.youtube.com/watch?v=OHq6pL-6pE4",
    "views": "156k",
    "customEp": "6x36",
    "seasonOrder": 36,
    "stage": "Finals",
    "group": null,
    "tag": null
  },
  {
    "id": "pg-s06-2026-02-18-skamz-vs-dan-dannah",
    "slug": "skamz-vs-dan-dannah-2",
    "mc1": "skamz",
    "mc2": "dan-dannah",
    "winner": "dan-dannah",
    "title": "SKAMZ vs DAN DANNAH",
    "date": "18-02-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Champions League",
    "views": "148k",
    "customEp": "CLx01",
    "seasonOrder": 1,
    "stage": "Champions League",
    "group": null,
    "tag": null,
    "videoUrl": "https://www.youtube.com/watch?v=YVmYId8Mq5k"
  },
  {
    "id": "pg-s06-2026-03-22-bmf-alz-vs-zion",
    "slug": "bmf-alz-vs-zion",
    "mc1": "bmf-alz",
    "mc2": "zion",
    "title": "BMF ALZ vs ZION",
    "date": "22-03-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Champions League",
    "views": "42k",
    "customEp": "CLx02",
    "seasonOrder": 2,
    "stage": "Champions League",
    "group": null,
    "tag": null,
    "winner": "unknown",
    "statusNote": "Awaiting upload"
  },
  {
    "id": "pg-s06-2026-04-05-iiiberealz-vs-dan-dannah",
    "slug": "iiiberealz-vs-dan-dannah-2",
    "mc1": "iiiberealz",
    "mc2": "dan-dannah",
    "title": "iiiBEREALZ vs DAN DANNAH",
    "date": "05-04-2026",
    "videoUrl": "https://www.youtube.com/watch?v=bR5DYMHJnjU",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Champions League",
    "views": "74k",
    "customEp": "CLx03",
    "seasonOrder": 3,
    "stage": "Champions League",
    "group": null,
    "tag": null,
    "winner": "iiiberealz"
  },
  {
    "id": "pg-s06-2026-04-11-whoisorion-vs-jaycee",
    "slug": "whoisorion-vs-jaycee",
    "mc1": "whoisorion",
    "mc2": "jaycee",
    "title": "WHOISORION vs JAYCEE",
    "date": "11-04-2026",
    "videoUrl": "https://www.youtube.com/watch?v=saDVRCNX7AE",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Champions League",
    "views": "95k",
    "customEp": "CLx04",
    "seasonOrder": 4,
    "stage": "Champions League",
    "group": null,
    "tag": null,
    "winner": "whoisorion"
  },
  {
    "id": "pg-s06-2026-04-13-anbu-sensei-vs-drizzgb",
    "slug": "anbu-sensei-vs-drizzgb",
    "mc1": "anbu-sensei",
    "mc2": "drizzgb",
    "title": "ANBU SENSEI vs DRIZZGB",
    "date": "13-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Champions League",
    "videoUrl": "https://www.youtube.com/watch?v=2zs1dXkikYk",
    "views": "5k",
    "customEp": "CLx05",
    "seasonOrder": 5,
    "stage": "Champions League",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-scl-2026-04-15-jm-vs-kmarh",
    "slug": "jm-vs-kmarh",
    "mc1": "jm",
    "mc2": "kmarh",
    "title": "JM vs K.MARH",
    "date": "15-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx06",
    "seasonOrder": 6,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-04-18-lc-vs-relapse",
    "slug": "lc-vs-relapse",
    "mc1": "lc",
    "mc2": "relapse",
    "title": "LC vs RELAPSE",
    "date": "18-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx07",
    "seasonOrder": 7,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-04-20-varntae-vs-star-co",
    "slug": "varntae-vs-star-co",
    "mc1": "varntae",
    "mc2": "star-co",
    "title": "VARNTAE vs STAR.CO",
    "date": "20-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx08",
    "seasonOrder": 8,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-04-22-monroe-vs-pocaa",
    "slug": "monroe-vs-pocaa",
    "mc1": "monroe",
    "mc2": "pocaa",
    "title": "MONROE vs POCAA",
    "date": "22-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx09",
    "seasonOrder": 9,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-04-25-eddfirst-vs-domi-dusk",
    "slug": "eddfirst-vs-domi-dusk",
    "mc1": "eddfirst",
    "mc2": "domi-dusk",
    "title": "EDDFIRST vs DOMI DUSK",
    "date": "25-04-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx10",
    "seasonOrder": 10,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-whoisorion-vs-lc",
    "slug": "whoisorion-vs-lc",
    "mc1": "whoisorion",
    "mc2": "lc",
    "title": "WHOISORION vs LC",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx11",
    "seasonOrder": 11,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-monroe-vs-kmarh",
    "slug": "monroe-vs-kmarh",
    "mc1": "monroe",
    "mc2": "kmarh",
    "title": "MONROE vs K.MARH",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx12",
    "seasonOrder": 12,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-drizzgb-vs-rp",
    "slug": "drizzgb-vs-rp",
    "mc1": "drizzgb",
    "mc2": "rp",
    "title": "DRIZZGB vs RP",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx13",
    "seasonOrder": 13,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-kandi-vs-star-co",
    "slug": "kandi-vs-star-co",
    "mc1": "kandi",
    "mc2": "star-co",
    "title": "KANDI vs STAR.CO",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx14",
    "seasonOrder": 14,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-skamz-vs-relapse",
    "slug": "skamz-vs-relapse",
    "mc1": "skamz",
    "mc2": "relapse",
    "title": "SKAMZ vs RELAPSE",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx15",
    "seasonOrder": 15,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-char-b-vs-dan-dannah",
    "slug": "char-b-vs-dan-dannah",
    "mc1": "char-b",
    "mc2": "dan-dannah",
    "title": "CHAR.B vs DAN DANNAH",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx16",
    "seasonOrder": 16,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-iiiberealz-vs-pocaa",
    "slug": "iiiberealz-vs-pocaa",
    "mc1": "iiiberealz",
    "mc2": "pocaa",
    "title": "iiiBEREALZ vs POCAA",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx17",
    "seasonOrder": 17,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-varntae-vs-domi-dusk",
    "slug": "varntae-vs-domi-dusk",
    "mc1": "varntae",
    "mc2": "domi-dusk",
    "title": "VARNTAE vs DOMI DUSK",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx18",
    "seasonOrder": 18,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-03-eddfirst-vs-jaycee",
    "slug": "eddfirst-vs-jaycee",
    "mc1": "eddfirst",
    "mc2": "jaycee",
    "title": "EDDFIRST vs JAYCEE",
    "date": "03-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 2",
    "customEp": "CLx19",
    "seasonOrder": 19,
    "stage": "Champions League Fixture 2",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-30-jm-vs-anbu-sensei",
    "slug": "jm-vs-anbu-sensei",
    "mc1": "jm",
    "mc2": "anbu-sensei",
    "title": "JM vs ANBU SENSEI",
    "date": "30-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Audio Releases",
    "customEp": "CLx20",
    "seasonOrder": 20,
    "stage": "Champions League Audio Release",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Audio released"
  },
  {
    "id": "pg-scl-2026-05-31-skamz-vs-whoisorion",
    "slug": "skamz-vs-whoisorion-2",
    "mc1": "skamz",
    "mc2": "whoisorion",
    "title": "SKAMZ vs WHOISORION",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx21",
    "seasonOrder": 21,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-kandi-vs-iiiberealz",
    "slug": "kandi-vs-iiiberealz",
    "mc1": "kandi",
    "mc2": "iiiberealz",
    "title": "KANDI vs iiiBEREALZ",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx22",
    "seasonOrder": 22,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-dan-dannah-vs-monroe",
    "slug": "dan-dannah-vs-monroe",
    "mc1": "dan-dannah",
    "mc2": "monroe",
    "title": "DAN DANNAH vs MONROE",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx23",
    "seasonOrder": 23,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-jm-vs-varntae",
    "slug": "jm-vs-varntae",
    "mc1": "jm",
    "mc2": "varntae",
    "title": "JM vs VARNTAE",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx24",
    "seasonOrder": 24,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-anbu-sensei-vs-relapse",
    "slug": "anbu-sensei-vs-relapse",
    "mc1": "anbu-sensei",
    "mc2": "relapse",
    "title": "ANBU SENSEI vs RELAPSE",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx25",
    "seasonOrder": 25,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-jaycee-vs-kmarh",
    "slug": "jaycee-vs-kmarh",
    "mc1": "jaycee",
    "mc2": "kmarh",
    "title": "JAYCEE vs K.MARH",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx26",
    "seasonOrder": 26,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-eddfirst-vs-star-co",
    "slug": "eddfirst-vs-star-co",
    "mc1": "eddfirst",
    "mc2": "star-co",
    "title": "EDDFIRST vs STAR.CO",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx27",
    "seasonOrder": 27,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-char-b-vs-pocaa",
    "slug": "char-b-vs-pocaa",
    "mc1": "char-b",
    "mc2": "pocaa",
    "title": "CHAR.B vs POCAA",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx28",
    "seasonOrder": 28,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-domi-dusk-vs-rp",
    "slug": "domi-dusk-vs-rp",
    "mc1": "domi-dusk",
    "mc2": "rp",
    "title": "DOMI DUSK vs RP",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx29",
    "seasonOrder": 29,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-scl-2026-05-31-drizzgb-vs-lc",
    "slug": "drizzgb-vs-lc",
    "mc1": "drizzgb",
    "mc2": "lc",
    "title": "DRIZZGB vs LC",
    "date": "31-05-2026",
    "theme": "pengame",
    "season": "Champions League",
    "competition": "Champions League",
    "subGroup": "Fixture 3",
    "customEp": "CLx30",
    "seasonOrder": 30,
    "stage": "Champions League Fixture 3",
    "group": null,
    "tag": null,
    "views": null,
    "winner": "unknown",
    "statusNote": "Fixture listed"
  },
  {
    "id": "pg-s08-2025-11-12-monroe-vs-rackz",
    "slug": "monroe-vs-rackz",
    "mc1": "monroe",
    "mc2": "rackz",
    "title": "MONROE vs RACKZ",
    "date": "12-11-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=V3MLj1vvFhk",
    "views": "12k",
    "customEp": "Academy x01",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2025-11-19-dyzz-vs-jynx",
    "slug": "dyzz-vs-jynx",
    "mc1": "dyzz",
    "mc2": "jynx",
    "title": "DYZZ vs JYNX",
    "date": "19-11-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=DaeHry0lL7o",
    "views": "10k",
    "customEp": "Academy x02",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2025-12-01-jmuni-vs-mz",
    "slug": "jmuni-vs-mz",
    "mc1": "jmuni",
    "mc2": "mz",
    "title": "J MUNI vs MZ",
    "date": "01-12-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=8qVJb6BYP1Y",
    "views": "15k",
    "customEp": "Academy x03",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2025-12-05-mz-vs-s-kidz",
    "slug": "mz-vs-s-kidz",
    "mc1": "mz",
    "mc2": "s-kidz",
    "title": "MZ vs S'KIDZ",
    "date": "05-12-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "views": "14k",
    "customEp": "Academy x04",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2025-12-15-eddfirst-vs-varntae",
    "slug": "eddfirst-vs-varntae",
    "mc1": "eddfirst",
    "mc2": "varntae",
    "title": "EDDFIRST vs VARNTAE",
    "date": "15-12-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=ARB_14kSSPw",
    "views": "16k",
    "customEp": "Academy x05",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2025-12-20-guni-vs-7wxve",
    "slug": "guni-vs-7wxve",
    "mc1": "guni",
    "mc2": "7wxve",
    "title": "GUNI vs 7WXVE",
    "date": "20-12-2025",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=pB15H-CjNmo",
    "views": "12k",
    "customEp": "Academy x06",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-01-03-eddfirst-vs-scotty",
    "slug": "eddfirst-vs-scotty",
    "mc1": "eddfirst",
    "mc2": "scotty",
    "title": "EDDFIRST vs SCOTTY",
    "date": "03-01-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Graduation Day",
    "videoUrl": "https://www.youtube.com/watch?v=jjSU0oASggg",
    "views": "25k",
    "customEp": "Academy x07",
    "stage": "Academy Graduation Day",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-01-10-jaycee-vs-rp",
    "slug": "jaycee-vs-rp",
    "mc1": "jaycee",
    "mc2": "rp",
    "title": "JAYCEE vs RP",
    "date": "10-01-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Graduation Day",
    "views": "18k",
    "customEp": "Academy x08",
    "stage": "Academy Graduation Day",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-01-28-lc-vs-penno",
    "slug": "lc-vs-penno",
    "mc1": "lc",
    "mc2": "penno",
    "title": "LC vs PENNO",
    "date": "28-01-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "videoUrl": "https://www.youtube.com/watch?v=gkpB6Kn0xi0",
    "views": "18k",
    "customEp": "Academy x09",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-02-05-dyzz-vs-rackz",
    "slug": "dyzz-vs-rackz",
    "mc1": "dyzz",
    "mc2": "rackz",
    "title": "DYZZ vs RACKZ",
    "date": "05-02-2026",
    "videoUrl": "https://www.youtube.com/watch?v=0qT7qS4_G1o",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Graduate Debut",
    "views": "14k",
    "customEp": "Academy x10",
    "stage": "Academy Graduate Debut",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2026-02-07-lc-vs-anbu-sensei",
    "slug": "lc-vs-anbu-sensei",
    "mc1": "lc",
    "mc2": "anbu-sensei",
    "title": "LC vs ANBU SENSEI",
    "date": "07-02-2026",
    "videoUrl": "https://www.youtube.com/watch?v=04BHiF6ZiCs",
    "theme": "pengame",
    "season": "Academy",
    "customEp": "Academy x11",
    "subGroup": "Academy Graduate Debut",
    "views": "42k",
    "stage": "Academy Graduate Debut",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-02-09-jmuni-vs-mz-2",
    "slug": "jmuni-vs-mz-2",
    "mc1": "jmuni",
    "mc2": "mz",
    "title": "J MUNI vs MZ II",
    "date": "09-02-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "views": "11k",
    "customEp": "Academy x12",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2026-02-10-iffy-vs-star-co",
    "slug": "iffy-vs-star-co",
    "mc1": "iffy",
    "mc2": "star-co",
    "title": "IFFY vs STAR CO",
    "date": "10-02-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Graduation Day",
    "videoUrl": "https://www.youtube.com/watch?v=LKgHLZjGWz4",
    "views": "22k",
    "customEp": "Academy x13",
    "stage": "Academy Graduation Day",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s08-2026-02-18-scotty-vs-guni",
    "slug": "scotty-vs-guni",
    "mc1": "scotty",
    "mc2": "guni",
    "title": "SCOTTY vs GUNI",
    "date": "18-02-2026",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy Clashes",
    "views": "9k",
    "customEp": "Academy x14",
    "stage": "Academy Clashes",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-2026-02-21-rp-vs-eddfirst",
    "slug": "rp-vs-eddfirst",
    "mc1": "rp",
    "mc2": "eddfirst",
    "title": "RP vs EDDFIRST",
    "date": "21-02-2026",
    "videoUrl": "https://www.youtube.com/watch?v=Te8n1UbyGUc",
    "theme": "pengame",
    "season": "Academy",
    "subGroup": "Academy",
    "views": "44k",
    "customEp": "Academy x15",
    "stage": "Academy",
    "group": null,
    "tag": null,
    "winner": "unknown"
  },
  {
    "id": "pg-s06-cancelled-anbu-sensei-vs-kandi",
    "slug": "anbu-sensei-vs-kandi",
    "mc1": "anbu-sensei",
    "mc2": "kandi",
    "title": "ANBU SENSEI vs KANDI (CANCELLED)",
    "theme": "pengame",
    "season": "Cold War",
    "isUnreleased": true,
    "subGroup": "Cancelled Clashes",
    "statusNote": "Cancelled",
    "customEp": "6x∅A",
    "stage": null,
    "group": null,
    "tag": "Cancelled",
    "winner": "cancelled"
  },
  {
    "id": "pg-s06-cancelled-passive-millz-kandi-millz",
    "slug": "passive-vs-millz",
    "mc1": "passive",
    "mc2": "millz",
    "title": "PASSIVE vs MILLZ / KANDI vs MILLZ (CANCELLED)",
    "theme": "pengame",
    "season": "Cold War",
    "isUnreleased": true,
    "subGroup": "Cancelled Clashes",
    "statusNote": "Cancelled",
    "customEp": "6x∅B",
    "stage": null,
    "group": null,
    "tag": "Cancelled",
    "winner": "cancelled"
  },
  
];

export const pengameBattles: Battle[] = battles;

export const getBattlePageStem = (battle: Pick<Battle, "slug">): string =>
  battle.slug
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

export const getBattleLegacyPageStem = (battle: Pick<Battle, "slug">): string =>
  battle.slug
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/-vs-/g, "vs")
    .replace(/vs-/g, "vs");

export const getBattlePageSlug = (battle: Pick<Battle, "slug">): string =>
  `${getBattlePageStem(battle)}.html`;

export const getBattleHref = (battle: Pick<Battle, "slug">): string =>
  `/battle/${getBattlePageSlug(battle)}`;

export const getBattleRouteHref = (battle: Pick<Battle, "slug">): string =>
  `/battle/${getBattlePageStem(battle)}`;

export const findBattleByRouteSlug = (routeSlug: string): Battle | undefined => {
  const cleanSlug = decodeURIComponent(routeSlug).replace(/\/+$/g, "");
  const cleanStem = cleanSlug.replace(/\.html$/i, "");
  const legacyStem = cleanStem.replace(/\.html$/i, "");

  return pengameBattles.find(
    (battle) =>
      battle.slug === cleanSlug ||
      battle.slug === cleanStem ||
      getBattlePageSlug(battle) === cleanSlug ||
      getBattlePageStem(battle) === cleanStem ||
      getBattleLegacyPageStem(battle) === legacyStem,
  );
};
