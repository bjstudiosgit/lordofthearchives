import type { Battle } from "./battleTypes";

type NotableBar = NonNullable<Battle["notableBars"]>[number];

const skamzVsDanDannahExplanations: Record<string, string> = {
  "SKAMZ::Just because you scream out ‘wah’ don’t mean you’re ready for war.": "SKAMZ mirrors DAN’s own ‘wah/war’ construction and turns it back on him. In SKAMZ’s version the shared homophone becomes a rebuttal, arguing that DAN’s loud delivery and emotional reactions do not prove readiness for an actual battle.",
  "Your name’s Skamz, real name so soft.": "DAN opens by separating the threatening suggestion of ‘Skamz’ from the person behind the stage name. The contrast establishes his first-round case that SKAMZ’s battle persona is manufactured rather than lived.",
  "You ain’t no scammer.": "This blunt denial strips SKAMZ’s name of its implied criminal credibility. Its simplicity is deliberate: DAN states the accusation plainly before spending the round presenting examples of supposed fakery.",
  "Rap like you’re some sort of road thug — liar, capper.": "DAN attacks the gap between SKAMZ’s aggressive writing and the life he claims SKAMZ actually leads. ‘Liar’ and ‘capper’ compress the fake-road angle into two direct labels that the rest of the round can reinforce.",
  "Just because you scream out ‘wah’ don’t mean you’re ready for war.": "The punch turns SKAMZ’s shouted ‘wah’ ad-lib into the near-homophone ‘war’. DAN argues that sounding combative is not the same as being prepared for conflict, so the wordplay also advances the authenticity angle.",
  "You got to the finals and flopped.": "DAN uses SKAMZ’s previous final as evidence against his big-stage reputation. The line shifts the attack from image to recorded performance history: reaching the occasion matters less if the decisive showing failed.",
  "How many times have you flopped? I forgot.": "The apparent memory lapse is the punch. DAN exaggerates the number of SKAMZ’s failures until they are supposedly too numerous to remember, turning a catalogue of setbacks into a compact joke.",
  "Any time that I lost, I came back stronger.": "DAN answers any discussion of his own record by reframing defeat as evidence of resilience. It creates a contrast with SKAMZ: DAN claims his losses produced growth, while SKAMZ’s alleged flops are presented as a repeating pattern.",
  "Call me a price — 419.": "The line invokes 419 fraud, named after the section of Nigeria’s criminal code associated with advance-fee scams. DAN uses that number to enter SKAMZ’s scam-name territory and claim greater authority over the concept.",
  "You can never be a rasta, you tell too much porky pie.": "‘Porky pie’ is Cockney rhyming slang for a lie, while pork conflicts with Rastafarian dietary practice. DAN joins dishonesty and Rasta identity in one phrase, accusing SKAMZ of lying so much that the persona cannot hold together.",
  "You ain’t prepared to get your hands dirty. Me, I’m prepared to fight in the mud.": "The dirt-to-mud escalation measures commitment through the same physical image. DAN casts SKAMZ as unwilling to accept minor discomfort while presenting himself as ready for the messiest version of the confrontation.",
  "I actually don’t like him.": "The lack of metaphor is the point: DAN briefly drops battle convention and states personal dislike outright. That tonal reset makes the following threats feel less theatrical and signals an escalation in the round.",
  "If we actually start fighting, I’ll bust his head open with a mic and shock it like my name is Mike Tyson.": "DAN links the microphone in his hand to Mike Tyson through the shared ‘mic/Mike’ sound. Tyson supplies the knockout image, so a piece of stage equipment becomes both the weapon and the bridge into the boxing reference.",
  "I’ll kick you like I’m from Thailand.": "Thailand points to Muay Thai, a combat sport built around kicks, knees, elbows and clinch work. DAN keeps the fighting passage moving by changing from Tyson’s boxing hands to a Thai kicking image.",
  "If you’re so live on this, then right now why you dying?": "‘Live’ first means energetic or effective on stage, then flips into its literal opposite, dying. DAN turns SKAMZ’s claimed live-performance strength into an image of him losing the battle in real time.",
  "Three rounds of my aim at his big artist.": "DAN announces that the entire performance has been directed at reducing SKAMZ’s supposed star status. ‘Aim’ gives the three rounds a single target, framing the closer as the completion of a planned attack rather than loose final bars.",
  "Like a candle, I’m making a wish.": "Candles connect to wishes through birthday ritual, but the calm image also sets up extinction: a flame can be blown out. DAN uses the familiar action as a compact bridge into his closing threats.",
  "I’m cooking.": "This is a live-performance claim that DAN’s writing is landing and gathering momentum. The short declaration functions like a self-reload, allowing him to mark control of the room before continuing the scheme.",
  "You’ll get blazed like a spliff.": "‘Blazed’ means both set alight and heavily affected by cannabis. Comparing SKAMZ to a spliff keeps the smoke vocabulary literal while using it as battle shorthand for being decisively beaten.",
  "You ain’t number one, are you taking the piss?": "DAN directly disputes SKAMZ’s ranking and treats the claim to top status as absurd. The conversational question invites the room to share that disbelief, turning hierarchy into crowd-facing ridicule.",
  "Not a legend — if you think it’s eight, it’s a myth.": "Legend and myth belong to the same storytelling field, allowing DAN to deny one status with the other. The audible ‘it’s eight’ wording also hints at rating talk before ‘myth’ dismisses the reputation as fiction.",
  "About Sosa, you’ll get fired like Somoza.": "The line uses the shared Sosa/Somoza sound to move from a named reference into dismissal. ‘Fired’ works as removal and violent imagery, giving the rhyme a consequence rather than leaving it as name association alone.",
  "You ain’t no soldier, you just got stopped like soda.": "DAN undercuts a soldier image with ‘soda’, using the close sound to turn toughness into something soft and consumable. ‘Stopped’ supplies the battle result: SKAMZ’s advance is presented as already halted.",
  "Make him my Princess Fiona.": "Princess Fiona transforms into an ogre in Shrek. DAN uses that transformation as an appearance insult and as a continuation of the animated-character field that returns later in his round.",
  "You ain’t disrespectful, you’re insecure.": "DAN reframes SKAMZ’s harsh personals as compensation rather than confidence. The attack targets motive: instead of praising the material for being fearless, he argues that its extremity reveals weakness.",
  "You’ve got too much animation.": "‘Animation’ describes SKAMZ’s exaggerated delivery while also extending the Princess Fiona/cartoon field. DAN suggests the performance is overacted, turning visible energy into evidence that the persona is artificial.",
  "Make me snap like alligators.": "The verb ‘snap’ covers both losing patience and the closing action of an alligator’s jaws. DAN converts emotional pressure into an animal attack image, giving the warning a clear physical payoff.",
  "Even now, you’re still dying hair.": "The phrase sounds like ‘dyeing hair’ while preserving the battle’s repeated language of SKAMZ dying. DAN uses the homophone to turn an appearance detail into a final claim that his opponent is losing in the present moment.",
  "For this battle, I couldn’t write.": "SKAMZ opens with apparent vulnerability, admitting difficulty preparing for the matchup. The risk creates tension, but it also lowers expectations so that completing a substantial round becomes its own rebuttal.",
  "This is a battle, I do what the fuck I like.": "SKAMZ rejects limits on how personal his material can become. The line establishes battle rap as his defence: within the format, he claims the freedom to use history and family angles that would be unacceptable elsewhere.",
  "I’m smoking D-A-N again.": "Spelling DAN separates the name into a target that can be handled letter by letter, while ‘again’ foregrounds the rematch. ‘Smoking’ means both defeating DAN and returning to a familiar opponent for another round.",
  "This ain’t a blue story.": "Blue Story is a film and soundtrack rooted in London gang conflict. SKAMZ invokes it to deny that DAN’s street presentation has cinematic weight, reducing the claimed drama to something that will not become a credible story.",
  "Your BM looks like Jabba the Hutt.": "Jabba the Hutt supplies an instantly recognisable Star Wars body comparison aimed at DAN’s baby mother. The reference is deliberately crude, but it also opens a franchise scheme that SKAMZ continues in the next line.",
  "You ain’t built for these Star Wars anymore.": "SKAMZ expands the Jabba reference from one appearance joke into a statement about conflict and age. ‘Star Wars’ becomes both the franchise and a battle between recognised names, with DAN framed as no longer equipped for it.",
  "Crying isn’t enough.": "SKAMZ treats visible emotion as an inadequate response to the pressure of the matchup. Its bluntness lets him pivot from performance criticism into the more sensitive family material that follows.",
  "As your dying wish, I won’t mention your daughter again.": "A dying wish is normally a final request granted out of mercy. SKAMZ twists that convention by promising to stop the daughter angle only after presenting DAN as finished, making restraint itself part of the threat; the family claim remains battle material, not verified fact.",
  "How the fuck is Dan a lion? Dan is a flower, he literally acts like a dandelion.": "SKAMZ breaks ‘dandelion’ into DAN + de/lion, first denying DAN the lion’s strength and then reducing him to a flower. The name decomposition carries both the setup and reversal, making it one of the battle’s clearest tailored flips.",
  "How can you be a ruler, brother? You’re not even straight.": "A ruler is an authority figure and a tool expected to draw a straight line. SKAMZ denies DAN both meanings at once, using ‘straight’ as the hinge between status and the line’s sexuality-based insult.",
  "You can call me broke, but you’re broken.": "SKAMZ turns DAN’s likely money attack from the temporary condition ‘broke’ into the deeper condition ‘broken’. The added suffix changes finances into character and suggests DAN cannot be repaired.",
  "This was a one-way ticket to hell.": "The travel metaphor removes any possibility of return: accepting the battle becomes DAN’s irreversible journey toward defeat. ‘Hell’ also supports the darker monster and violence imagery used around SKAMZ’s later material.",
  "Ninja Turtle mist.": "The phrase compresses Teenage Mutant Ninja Turtles imagery into a visual of coloured or toxic-looking mist. It works as a quick pop-culture texture inside the round, although the surviving transcript leaves the precise preceding setup unclear.",
  "Build him up into Venom, then turn him into Carnage.": "Venom and Carnage are linked Spider-Man symbiotes, with Carnage presented as the more extreme escalation. SKAMZ uses that progression to say he can first create DAN’s dangerous form and then transform or overwhelm it with something worse.",
  "This ain’t a Shaolin trip.": "Shaolin evokes martial-arts discipline, training and stylised combat. SKAMZ denies DAN the glamour of that tradition, framing the violence in this battle as immediate rather than a cinematic training journey.",
  "Give him a big bang like Howard.": "Howard Wolowitz is one of the central characters in The Big Bang Theory. SKAMZ turns the programme title into an impact or explosion, using Howard as the identifying clue that completes the reference.",
  "I’ll get him done in the worst way — I’m a monster.": "SKAMZ opens the third by defining himself as the threat rather than immediately naming a weapon. ‘Monster’ establishes the inhuman-villain frame that leads naturally into the Among Us material.",
  "Stuffed down in the vents after cutting his neck — I’m an imposter.": "In Among Us, the impostor kills crewmates and travels through vents. SKAMZ maps both game mechanics onto DAN’s fate, making ‘impostor’ a precise role claim rather than a loose gaming name-drop.",
  "They didn’t know that the villain among us.": "The phrase completes the Among Us scheme by hiding SKAMZ’s villain identity inside the game title. It also works narratively: the room supposedly failed to recognise the danger until the third-round reveal.",
  "Me dropping the mic? That’s not something that you should mention.": "SKAMZ anticipates a known performance criticism and addresses it before DAN can reuse it. By naming the mic-drop incident himself, he tries to take ownership of the angle and reduce its value as opposition material.",
  "Sit down, it’s detention.": "The command casts DAN as a misbehaving student and SKAMZ as the authority controlling the room. It begins an education-and-training passage that later moves into dojo imagery.",
  "Eddie Gordo, step in my dojo.": "Eddy Gordo is Tekken’s capoeira specialist, while a dojo is a martial-arts training space. SKAMZ combines a fighting-game character with a real training setting to invite DAN into a contest where SKAMZ claims instructor-level control.",
  "Evian backwards — naive.": "The letters in ‘Evian’ reverse exactly to ‘naive’. SKAMZ uses a clean visual palindrome-style reversal as an insult, making the bottled-water name itself prove his description of DAN.",
  "This a war, Reiner, you should’ve been Armored Titan.": "Reiner Braun is the Armored Titan in Attack on Titan, protected by hardened plating. SKAMZ tells DAN that entering this war required that level of defence, implying the attack has already found an unarmoured target.",
  "I’m not a snake, just brought me a python.": "Python names both a large snake and, potentially, a weapon or coding reference depending on the surrounding delivery. SKAMZ denies the disloyal ‘snake’ label while retaining the animal’s size and danger for his own attack.",
  "Give him a strike, that’s lightning.": "A lightning strike supplies the literal image, while ‘strike’ also means a hit against DAN. The compact double meaning turns a single act of violence into a natural-force comparison.",
  "I’m gold, cause I’m cold — your flows ain’t passing the silver lining.": "Gold and silver establish a medal hierarchy, with SKAMZ placing himself above DAN. ‘Cold’ then introduces weather language and ‘silver lining’ bridges the metallic ranking to the edge of a cloud, joining both schemes in one close.",
  "Truth say there can only be one, so I’ll kick man down like this is Sparta.": "The closer invokes the famous Spartan kick from 300 and uses ‘there can only be one’ to frame the rematch as elimination. The physical kicking image gives SKAMZ a decisive final action rather than ending on an abstract claim of superiority.",
};

const detailsByTechnique: Record<string, string[]> = {
  reference: [
    "The reference gives the room a familiar image to decode quickly, then redirects that image back at the opponent.",
    "Its effectiveness comes from using recognisable source material as the setup while the final wording returns to the battle.",
    "The cultural shorthand keeps the setup economical: the audience supplies the wider context before the punch completes it.",
  ],
  wordplay: [
    "The key wording carries more than one meaning, so the same phrase works as a literal statement and as the attack.",
    "The punch is built around a deliberate double reading, rewarding a second listen without sacrificing the immediate hit.",
    "Sound and meaning are doing separate jobs here: the phrasing holds the rhyme together while the alternate reading lands the punch.",
  ],
  appearance: [
    "It turns a visible feature into an immediate comparison, making the insult readable even before every internal connection is caught.",
    "Because the angle is visually verifiable in the room, the setup needs little explanation and can move straight to the punch.",
    "The writing exaggerates a physical detail into a larger image, giving the crowd something concrete to picture as the line lands.",
  ],
  status: [
    "This is hierarchy writing: the line lowers the opponent's standing while presenting the performer as the more credible name in the matchup.",
    "Rather than chasing a standalone joke, the bar reinforces the round's wider argument about level, relevance and position on the platform.",
    "The punch measures the two battlers against the same standard and uses the contrast to claim a clear gap in status.",
  ],
  critique: [
    "The attack is aimed at the opponent's actual craft or credibility, which makes it more specific than a detachable generic insult.",
    "By criticising how the opponent writes, performs or moves in the scene, the line contributes to a broader case rather than standing alone.",
    "The bar works as performance criticism inside the battle, turning a perceived weakness into evidence for the performer's wider argument.",
  ],
  imagery: [
    "The concrete image lets the audience visualise the consequence of the setup, giving the punch more force than an abstract threat would carry.",
    "Its strength is visual clarity: the wording creates a scene in the room before resolving that scene into the attack.",
    "The image supplies both atmosphere and structure, allowing the performer to escalate the idea without losing the audience.",
  ],
  angle: [
    "This line advances a sustained opponent-specific angle, so its value comes from strengthening the round's case as well as landing by itself.",
    "The punch adds another piece of evidence to the round's central argument instead of abandoning the angle for an unrelated bar.",
    "Its placement matters: the line develops the same pressure point used elsewhere in the round and makes the overall attack feel connected.",
  ],
  concept: [
    "The idea functions as an organising device for the surrounding material, giving several punches a shared premise rather than a loose sequence.",
    "This is concept-led writing: the performer establishes one rule or scenario and lets the punch emerge from following that logic through.",
    "The bar helps hold the section together by returning the attack to a recognisable central premise.",
  ],
  personal: [
    "The specificity is the weapon: it draws on claimed history or identity material that could not be transferred cleanly to another opponent.",
    "Because the angle is personal to this matchup, it raises the stakes beyond a generic punch and sharpens the sense of direct confrontation.",
    "The line uses battle-specific history to make the attack feel researched, while the archive treats the underlying claim as performance material.",
  ],
  threat: [
    "The violent language is structured as battle imagery, with the escalation supplying intensity and a clear end point for the setup.",
    "Delivery is central to this kind of line: the compact threat gives the performer space to emphasise the final image in the room.",
    "The threat works less as a factual claim than as a pressure device, increasing the round's aggression before the next punch.",
  ],
  context: [
    "The line anchors the verse in the history of this matchup, helping the audience understand why the following attacks matter.",
    "This contextual detail establishes the round's premise and turns later punches into responses rather than isolated insults.",
    "Its main job is narrative: it locates the bar inside the battlers' shared history before the writing moves into the payoff.",
  ],
  performance: [
    "The wording is designed for the room as much as the page, leaving space for emphasis, reaction and a clean return to the next setup.",
    "Cadence and stage control carry part of the meaning here, making the line more effective in performance than a transcript alone suggests.",
    "The short construction gives the performer a clear reaction point and helps reset the room before the next sequence.",
  ],
  family: [
    "The family reference is used as deliberate battle-rap pressure; its impact comes from crossing into a subject the opponent is expected to defend.",
    "This extends the personal attack beyond the battler alone, increasing the disrespect while remaining an unverified claim made in performance.",
    "The line targets a sensitive relationship to raise the emotional temperature of the round rather than relying only on technical wordplay.",
  ],
  health: [
    "The health language is used as hostile battle material, converting vulnerability into a direct attack rather than presenting a verified claim.",
    "The punch draws its reaction from discomfort and taboo, so the archive records the mechanism without treating the allegation as fact.",
    "This is shock-led writing: the medical framing makes the insult feel invasive and deliberately difficult to ignore.",
  ],
};

const getTechnique = (theme = ""): string => {
  const normalized = theme.toLowerCase();
  return Object.keys(detailsByTechnique).find((technique) => normalized.includes(technique)) ?? "";
};

const getVariant = (bar: string, variants: string[]): string => {
  const hash = Array.from(bar).reduce((total, character) => total + character.charCodeAt(0), 0);
  return variants[hash % variants.length];
};

const defaultDetails = [
  "The line is most effective as part of the surrounding sequence, where its wording reinforces the performer’s wider attack on this opponent.",
  "Its construction keeps the setup direct and gives the final phrase a clear reaction point, helping the section retain momentum in the room.",
  "The phrasing links the immediate punch to the round’s larger argument, making it more purposeful than a disconnected one-liner.",
];

export const getExpandedBarExplanation = (battle: Battle, item: NotableBar): string | undefined => {
  const explanation = item.explanation?.trim();
  if (!explanation || String(battle.season) !== "2026") return explanation;

  if (battle.id === "pg-s06-2026-02-18-skamz-vs-dan-dannah") {
    return skamzVsDanDannahExplanations[`${item.performer}::${item.bar}`]
      ?? skamzVsDanDannahExplanations[item.bar]
      ?? explanation;
  }

  if (explanation.length >= 85) return explanation;

  const technique = getTechnique(item.theme);
  const variants = detailsByTechnique[technique] ?? defaultDetails;
  return `${explanation} ${getVariant(item.bar, variants)}`;
};
