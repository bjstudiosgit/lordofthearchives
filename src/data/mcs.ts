import type { Battle } from "./battleTypes";
import { gzoneBattles } from "./gzone";
import { pengameBattles } from "./pengameBattles";

export interface MC {
  id: string;
  slug: string;
  name: string;
  realName?: string;
  nickname?: string;
  battles: number;
  wins: number;
  losses: number;
  scoredBattles?: number;
  totalViews?: number;
  points?: number;
  style: string;
  image: string;
  bio: string;
  profile?: {
    introduction: string;
    sections: Array<{
      title: string;
      body: string;
    }>;
  };
  isActive?: boolean;
  weightClass?: string;
  height?: string;
  location?: string;
  instagram?: string;
  twitter?: string;
  tiktok?: string;
  youtube?: string;
  quote?: string;
  tags?: string[];
  badges?: string[];
}

export const mcProfileSlugOverrides: Record<string, string> = {
  "a-petrelli": "apetrelli",
  "anbu-sensei": "anbusensei",
  "ashley-tragic": "ashleytragic",
  "badee-harz": "badeeharz",
  "black-t": "blackt",
  "bmf-alz": "bmfalz",
  "bonnie-godiva": "bonniegodiva",
  "char-b": "charb",
  "cj-zino": "cjzino",
  "crai-g": "craig",
  "dan-dannah": "dandannah",
  "domi-dusk": "domidusk",
  "el-bandzo": "elbandzo",
  "f-don": "fdon",
  "frizz-price": "frizzprice",
  "h-star": "hstar",
  "khaos-kayy": "khaoskayy",
  "ldn-mikez": "ldnmikez",
  "leo-mg": "leomg",
  "lil-shakz": "lilshakz",
  "mr-benz": "mrbenz",
  "premeboi-j": "premeboij",
  "ren-dmc": "rendmc",
  "ritchie-rich": "ritchierich",
  "rizzy-raps": "rizzyraps",
  "selly-the-rapper": "sellytherapper",
  "shorty-woa": "shortywoa",
  "star-co": "starco",
  "z-k": "zk",
};

export const getMcProfileSlug = (mcId: string): string => mcProfileSlugOverrides[mcId] ?? mcId;

export const getMcProfileHref = (mcId: string): string => `/mc/${getMcProfileSlug(mcId)}`;

const MIN_INDEXABLE_PROFILE_BATTLES = 10;

// Short records remain useful inside the archive, but they do not yet have
// enough battle history to stand alone as substantive search results.
export const hasIndexableMcProfile = (mc: MC): boolean =>
  mc.battles >= MIN_INDEXABLE_PROFILE_BATTLES;

export const mcs: MC[] = [
  {
    "id": "f-don",
    "slug": "fdon",
    "name": "F-DON",
    "realName": "Afolabi Ajala",
    "nickname": "The Lyrical Don",
    "battles": 20,
    "wins": 13,
    "losses": 4,
    "style": "Lyrical",
    "image": "/fdon.png",
    "bio": "F-Don stands as an immovable bedrock within PenGame, competing continuously from inaugural clashes through successive tournament eras. His style hinges on physically imposing, punch-heavy UK rap delivered with booming authority. His greatest asset is undeniable ring presence and raw sonic directness on gritty tempos; his clearest limitation remains structural predictability, compounded by recurring memory lapses and an over-reliance on basic extended rhyme runs.",
    "profile": {
      "introduction": "Spanning over half a decade of competition across solo brackets, tournaments and tag-team formats, F-Don represents one of the most enduring figures in the league. His artistic identity is rooted in straightforward, combative aggression, pairing imposing baritone projection with street-level bravado and accessible pop-culture punchlines. Early campaigns showcased unpolished drill fundamentals that gradually hardened into a dependable, heavy-hitting presence capable of commanding the stage against both technical lyricists and stylistic newcomers. However, this longevity exposes notable creative inertia. While his physical charisma, crowd connectivity and instinctive timing keep him persistently effective, his technical ceiling is capped by repetitive syntax, familiar associative wordplay and a vulnerability to pressure that surfaces in abrupt stumbles and blunt resets.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "F-Don's rounds follow an intensely uniform progression. Openings are commonly triggered by the verbal reset listen, look or yo, listen, serving as both a metronomic countdown and a psychological clutch. Verses typically build from initial declarative boasts towards elongated multi-bar rhyme schemes, rarely deviating into varied stanza structures. Transitions between concepts are abrupt rather than fluid, bridged by conversational crutches, direct interrogatives or trust me. When momentum falters or memory slips, recovery relies on blunt restarts, repeated end-rhymes or a loud reassertion of veteran status to force the pocket back into alignment."
        },
        {
          "title": "Delivery and cadence",
          "body": "F-Don relies on deep, resonant vocal projection that naturally dominates sound systems. His pocket control is strongest on mid-tempo grime, drill and four-four rap beats, where he locks into predictable on-beat cadences and strikes hard on the second and fourth snares. When comfortable, his delivery carries authentic weight through physical menace and deliberate vocal punctuation. Tempo changes and off-kilter instrumentals reveal technical stiffness. Attempts at double-time cadence or rapid syncopation strain his breath control, producing audible gasps, swallowed consonants and uneven metre. When a beat demands rhythmic elasticity, he often substitutes sonic brute force for agile pocket management."
        },
        {
          "title": "Rhyme construction",
          "body": "Rhyme schemes are dominated by lengthy single-vowel mono-rhyme clusters and straightforward AABB couplets. He routinely constructs protracted chains across common phonemes, extending runs through terms such as crime, time, spine, grind, dine and decline. These families create immediate sonic cohesion on beat, but can become predictable filler when lines exist chiefly to satisfy the terminal rhyme rather than sharpen the punch. Multisyllabic complexity is intermittent and rarely nested internally. Reused phonetic shells and safe end-rhymes recur across opponents, demonstrating workmanlike construction that prioritises rhythmic security over intricate craftsmanship."
        },
        {
          "title": "Repetition and hooks",
          "body": "Repetition operates as both a deliberate performance tactic and a safety mechanism. Intentional refrains and call-and-response declarations, including claims that the ring is his residence or assertions of veteran supremacy, effectively anchor rounds and rally live spectators. Unintentional repetition exposes cognitive strain. Under pressure or during memory slips, short phrases are recited several times to buy recovery time. His vocabulary also leans on recurring colloquialisms such as gem, prick, crud and on piss. These stock identifiers can replace fresh descriptive detail, creating an echo across tournament seasons where structural framing sounds indistinguishable from earlier campaigns."
        },
        {
          "title": "Vocabulary and diction",
          "body": "F-Don's lexical choices remain grounded in contemporary London street parlance, maintaining an accessible and direct vernacular. Sentences use plain functional syntax that leaves little ambiguity, allowing threats and barbs to register immediately. This simplicity also produces severe lexical compression. Descriptive precision is limited, with opponents frequently reduced to generic slurs, financial insufficiency or basic insults about stature and hygiene. Rather than constructing idiosyncratic attacks, he often relies on familiar phrases and conversational filler. The direct diction maximises clarity during live execution, but deprives extended rounds of subtext, layered double meanings and broader literary range."
        },
        {
          "title": "Angles and opponent focus",
          "body": "Opponent angles are primarily surface-level and visceral. F-Don targets clear physical contrasts, tournament exits and perceived fragility, using his own longevity as the opposing standard. These angles often remain topical and interchangeable; substantial passages could be redirected towards another challenger with only minor adjustment. He rarely dismantles an opponent's psychology or develops unfamiliar biographical material into a sustained case. Instead, he favours broad mockery and blunt street dismissals that depend on an immediate visual or status-based punch rather than detailed character deconstruction."
        },
        {
          "title": "References and imagery",
          "body": "Pop-culture references are weighted towards mainstream anime, gaming, comic books and familiar television. Charizard, Ben 10, Tekken and Marvel superheroes appear alongside British street touchstones such as Top Boy, vehicle comparisons and BTEC qualifications. These references are generally functional, engineered for immediate recognition rather than sophisticated metaphorical depth. Too often, the named figure or franchise operates as a literal tool for completing a rhyme scheme rather than expanding the argument or imagery. The result is accessible and crowd-friendly, but rarely transforms a familiar cultural reference into a genuinely original concept."
        },
        {
          "title": "Themes and persona",
          "body": "F-Don's core persona is an unapologetic heavyweight anchored in physical dominance and territorial entitlement. He presents himself as the perennial league monarch and gatekeeper, treating opponents as uninvited guests trespassing in his home. Themes revolve around street legitimacy, physical violence, financial superiority and the ritual humiliation of pretenders. Humour is biting and mocking, functioning as an extension of his intimidation. This authoritative posture commands respect and creates an imposing barrier for newer challengers, but the absence of vulnerability or self-reflection leaves the character largely static across years of competition."
        },
        {
          "title": "Performance under pressure",
          "body": "Live competition exposes F-Don's precarious relationship with composure. Facing hostile reactions, abrupt beat drops or strong opponent momentum, his instinct is to increase volume and push through the friction. When memory lapses strike, he can acknowledge forgetting material, deploy hurried verbal cover or reset an entire sequence with visible irritation. Rebuttals are uncommon and typically limited to repeating an opponent's last punch with an added insult. Despite these vulnerabilities, extensive stage experience gives him a stubborn recovery instinct. He rarely folds completely, instead muscling his way through disruption until the round reaches its end."
        },
        {
          "title": "Limitations",
          "body": "Technical monotony is F-Don's clearest flaw. Repeated listen, look openings, predictable mono-rhyme clusters and rudimentary AABB cadences impose a rigid ceiling on artistic growth. Memory unreliability remains a competitive liability, disrupting momentum in high-stakes clashes and reducing round efficiency. His writing can sacrifice thematic depth for phonetic convenience, allowing the required end-rhyme to dictate the direction of a bar. The limited use of layered wordplay, complex internal rhyming and varied structures leaves him exposed against versatile, analytical writers who can identify and exploit his formulaic patterns."
        },
        {
          "title": "Strengths",
          "body": "Despite technical limitations, F-Don possesses vital competitive attributes. His physical stature and deep baritone voice create room-shaking authority that commands an audience immediately. He understands live showmanship, using direct punchlines that land cleanly on first listen without requiring later interpretation. His rhythmic delivery on standard rap and drill instrumentals is forceful and reliable, locking into the beat with undeniable impact. Unshakeable self-belief, confrontational humour and a willingness to trade heavy blows in any environment make him a battle-tested gatekeeper whom no opponent can approach casually."
        },
        {
          "title": "Development and legacy",
          "body": "From his earliest appearances to tournament headline slots, F-Don's trajectory reflects hardening rather than reinvention. He has polished his vocal projection, developed sharper comedic timing and learned to use his imposing presence as a psychological weapon. His fundamental machinery, from rhyme construction to recovery crutches, remains close to its original form. His legacy within PenGame is that of a definitive cornerstone: an ever-present, bruising benchmark against whom emerging talent must prove itself. He remains a test of survival and an embodiment of live beat clashing at its most raw and unvarnished."
        }
      ]
    },
    "weightClass": "Lightweight",
    "height": "5'9\"",
    "location": "London",
    "instagram": "effdon",
    "quote": "The pen is mightier than the sword, but my bars are sharper than both.",
    "badges": [
      "VETERAN",
      "LYRICIST"
    ]
  },
  {
    "id": "aymuni",
    "slug": "aymuni",
    "name": "AYMUNI",
    "realName": "Arnold Alingi",
    "nickname": "The Technician",
    "battles": 4,
    "wins": 3,
    "losses": 1,
    "style": "Technical",
    "image": "/aymuni.png",
    "bio": "PenGame Season 1 artist. A master of flow and technical precision.",
    "weightClass": "Welterweight",
    "height": "5'11\"",
    "location": "Birmingham",
    "instagram": "aymuni_bars",
    "quote": "Precision over power, every single time.",
    "badges": [
      "DEBUT WINNER",
      "TECHNICAL GENIUS"
    ]
  },
  {
    "id": "ashley-tragic",
    "slug": "ashleytragic",
    "name": "ASHLEY TRAGIC",
    "realName": "Ashley Green",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "/ashleytragic.png",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "ft",
    "slug": "ft",
    "name": "FOREVER TAPPED",
    "realName": "Adrian Clarke",
    "battles": 10,
    "wins": 5,
    "losses": 4,
    "style": "Versatile",
    "image": "/forevertapped.png",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "shorty-woa",
    "slug": "shortywoa",
    "name": "SHORTY WOA",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "/shortywoa.png",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "saidu",
    "slug": "saidu",
    "name": "SAIDU",
    "realName": "Saidu Kargbo",
    "battles": 2,
    "wins": 1,
    "losses": 1,
    "style": "Technical",
    "image": "/saidu.png",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "bigga",
    "slug": "bigga",
    "name": "BIGGA",
    "realName": "Laurie John-Phillip",
    "battles": 3,
    "wins": 2,
    "losses": 1,
    "style": "Powerhouse",
    "image": "/bigga.png",
    "bio": "PenGame Season 1 artist."
  },
  {
    "id": "dan-dannah",
    "slug": "dandannah",
    "name": "DAN DANNAH",
    "realName": "Daniel Joseph",
    "battles": 18,
    "wins": 2,
    "losses": 10,
    "style": "Lyrical",
    "image": "/dandannah.png",
    "bio": "Dan Dannah stands as PenGame’s definitive institutional gatekeeper, an ever-present veteran whose style is rooted in relentless, forward-leaning grime ferocity and high-decibel confrontation. His greatest strength is an uncompromising, physical stage presence that commands the room on 140 BPM instrumentals. However, his clearest limitation remains a persistent technical ceiling, marked by swallowed diction, predictable rhyme schemes and an over-reliance on modular, interchangeable violence.",
    "profile": {
      "introduction": "Spanning from the raw beginnings of Season 1 through multi-season tournaments, Cold War brackets and Champions League campaigns, Dan Dannah represents the foundational combatant of the league. Emerging initially as an under-projecting novice against Bigga, he systematically retooled himself into an aggressive, intimidating heavyweight. His artistic identity hinges on traditional grime energy, prioritising raw kinetic force over intricate penmanship. Across clashes with technical writers, comedic stylists and younger challengers, Dannah has proven remarkably durable, yet structurally predictable. His body of work reveals an artist whose sheer intensity and pocket command reliably overwhelm underprepared opponents, but whose recurring flaws—coarse rhyme patterns, repetitive conceptual angles and blurred vocal articulation—routinely hinder him when facing opponents with multi-layered writing and superior dynamic control.",
      "sections": [
            {
                  "title": "Structure and transitions",
                  "body": "Dannah constructs rounds around rigid, battle-ready blocks designed to detonate on the drop. He frequently opens with his trademark crowd-priming ritual or addresses the host before launching into aggressive eight-bar and sixteen-bar volleys. Progression within his verses is linear and cumulative, moving from initial taunts into sustained physical threats. However, his transitional connective tissue is formulaic; he leans heavily on verbal resets such as \"listen\", \"look\" or rhetorical interrogatives like \"what did you think was gonna happen?\" to shift gears. When an instrumental transition or stumble disrupts his sequence, he eschews subtle recovery, instead halting the performance, openly instructing the engineer to restart the rhythm, and re-entering from the top of the block with uncompromised velocity."
            },
            {
                  "title": "Delivery and cadence",
                  "body": "Rooted in classic grime lineage, Dannah operates with natural comfort across 140 BPM tempos, locking into the pocket with assertive, driving momentum. His delivery is characterised by urgent forward lean, percussive syllable placement and aggressive projection that actively crowds the opponent's physical space. While this high-octane attack generates immediate arena impact, it exposes significant technical vulnerabilities. As rounds advance, his relentless vocal strain leads to audible breath depletion, forcing him to cluster phrases abruptly before the snare. Furthermore, his delivery lacks dynamic variation; he rarely drops into nuanced pauses or conversational half-time cadences, maintaining a single, sustained shout that can turn monotonous and overwhelm delicate instrumental nuances on unconventional or slower drill beats."
            },
            {
                  "title": "Rhyme construction",
                  "body": "Dannah’s rhyming mechanics rely heavily on primary, monosyllabic end-rhymes organised into lengthy single-vowel chains. He repeatedly defaults to familiar phonetic families, most noticeably extended strings on the \"-an\" and \"-ang\" sounds—cycling through Dan, man, plan, bang, slam, and Liu Kang across multiple clashes. While he occasionally constructs rapid multisyllabic runs, such as linking element, impediment, and adrenaline, these combinations follow well-trodden battle rap templates rather than bespoke internal mosaics. His rhyming is built for sonic momentum rather than semantic surprise; terminal words are selected primarily to maintain punchy momentum rather than intricate wordplay. This safe construction guarantees rhythmic stability, but makes his punchline destinations readily foreseeable to seasoned judges and audiences."
            },
            {
                  "title": "Repetition and hooks",
                  "body": "Dannah makes deliberate, highly effective use of performance rituals, specifically his signature \"Let me hear you say: War!\" call-and-response chant that primes the audience and forces arena engagement before his verse begins. In contrast to these calculated crowd-participation hooks, his rounds also display unintended structural repetition born of cognitive fatigue. Under competitive pressure, Dannah frequently recycles transitional crutches, repeatedly invoking opponent names mechanically, repeating variations of \"D-A-N\", or defaulting to rhetorical questions while organising his next thought. When earning a performance reload, he rarely introduces improvised variations, instead faithfully executing identical four-bar set-pieces with muscular precision, treating the reset as a technical hammer rather than an opportunity for creative divergence."
            },
            {
                  "title": "Vocabulary and diction",
                  "body": "Operating within a focused lexicon of London street vernacular, grime terminology and martial jargon, Dannah relies on direct, unvarnished language. Terms like head-top, batted down, murk, and lack appear routinely as shorthand for physical dominance. His sentence construction is punchy and direct, avoiding complex syntactic inversion in favour of straightforward declarative threats. The primary deficit in his verbal execution is diction clarity; under rapid tempo and elevated vocal volume, his enunciation frequently deteriorates. Swallowed consonants and blurred syllables have drawn explicit critique from league adjudicators, who note that potentially impactful lines are lost to the room because his breathless, rushed vocalisation obscures critical punchlines in the heat of delivery."
            },
            {
                  "title": "Angles and opponent focus",
                  "body": "Dannah’s approach to opposition writing fluctuates between sharp, surface-level personal attacks and completely modular, interchangeable violence. When targeting specific opponents, he isolates obvious traits: mocking physical features, exploiting an opponent’s lisp, weaponising youth against older competitors, or parodying an opponent’s adopted moniker, such as comparing Monroe to Marilyn or flipping Skamz into financial fraud. However, these bespoke angles are rarely sustained across an entire round. Instead, they serve as brief decorative entry points into long, generic passages of physical harm and street dominance that could be directed at any combatant. His material lacks forensic personal deconstruction, leaving him vulnerable against writers who dissect his extensive competitive history and institutional stagnation."
            },
            {
                  "title": "References and imagery",
                  "body": "Dannah decorates his rounds with an accessible array of pop culture, comic book, anime and gaming references. He routinely invokes martial figures and superhuman archetypes, drawing upon Liu Kang, Street Fighter, Dragon Ball Z's Cell, Magneto, Wolverine, Bruce Wayne, and John Jones to illustrate combat superiority. Domestically, his imagery incorporates British consumer fixtures and cultural touchstones like Santander, Stardawg, and Strongbow. While these references provide colourful visual flourishes that register instantly with the live audience, they predominantly function as direct, functional similes—punching like a fighter or disassembling like Magneto—rather than multi-layered conceptual vehicles. They decorate his bars effectively, but rarely elevate the underlying writing beyond conventional battle tropes."
            },
            {
                  "title": "Themes and persona",
                  "body": "Dannah’s competitive character is built entirely around authentic grime aggression, unapologetic masculinity, and the ethos of an unyielding veteran gladiator. He presents himself as an institutional gatekeeper who treats battle rap as genuine combat, openly dismissing comedy and theatricality in favour of menacing confrontation. His recurring themes centre on physical retribution, territorial dominance, and survival against all challengers. Conversely, this persona leaves him exposed to consistent counter-angles; opponents routinely target his status as a perpetual league journeyman, mock his parental domesticity, and highlight his inability to capture undisputed championship silverware despite years of participation. He remains steadfastly committed to his lane, projecting an aura of uncompromising, stubborn durability."
            },
            {
                  "title": "Performance under pressure",
                  "body": "Under intense pressure, Dannah demonstrates commendable psychological toughness, rarely freezing into catastrophic silence. When a line misfires, an instrumental clashes, or a tongue-twister collapses, he avoids panicky retreat; he typically acknowledges the error bluntly, calls out the slip, and resets with furious resolve. However, his technical composure under pressure reveals limitations. Hostile crowds and high-stakes tournament rounds often cause him to rush his cadence, exacerbating breath control deficiencies and muddying his diction. His capacity for off-the-cuff improvisation and organic rebuttals is minimal; he relies almost entirely on pre-written material, meaning that when an opponent lands a devastating contextual strike, Dannah must rely on brute volume rather than sharp spontaneous counter-punching."
            },
            {
                  "title": "Limitations",
                  "body": "Dannah's foremost limitation is technical enunciation; his tendency to swallow consonants under high tempo repeatedly dilutes punchline clarity. Structurally, his writing suffers from predictable rhyme schemes, leaning on elementary end-sounds and modular thematic templates that lack lyrical surprise. His tactical repertoire is narrow, relying almost entirely on aggression while lacking the ability to incorporate humour, forensic personal dissection, or sophisticated narrative angles. Furthermore, his delivery remains dynamically flat, maintaining a sustained shout that strains his vocal cords and restricts his musical adaptability on slower or unconventional beats. This combination of coarse construction and vocal rushing establishes a rigid ceiling against elite writers who control pacing, space, and layered penmanship."
            },
            {
                  "title": "Strengths",
                  "body": "Dannah’s enduring effectiveness stems from authentic grime energy, commanding physical stature, and unshakeable confidence inside the clash arena. He possesses a natural, percussive pocket control on traditional 140 BPM grime instrumentals, driving beats forward with ferocious momentum. His pre-round call-and-response rituals immediately unify the venue, converting neutral crowds into active participants. Dannah delivers his material with genuine conviction, looking straight through opponents and establishing an intimidating physical presence that rattles hesitant challengers. His direct, punchy writing ensures that when his lines land clearly, they deliver immediate visceral impact. This visceral authenticity and veteran durability make him a fearsome, punishing obstacle for anyone attempting to rise through the league ranks."
            },
            {
                  "title": "Development and legacy",
                  "body": "Dannah’s evolution marks him as one of PenGame’s most vital institutional pillars. Progressing from an inexperienced, under-projected novice in the inaugural season into a feared, headline-level heavyweight, he embodies the league’s gritty, beat-driven identity. While his core technical flaws—rushed diction, safe rhyming, and modular writing—have remained largely uncorrected over the years, his stagecraft, ring generalship, and crowd command have developed substantially. He has tested generations of talent across tournaments, singles, and tag-team formats, serving as the benchmark against which emerging contenders measure their readiness. Dannah’s legacy is that of the quintessential battle-tested soldier: an immovable gatekeeper whose raw energy and uncompromising presence helped define the league's competitive standard."
            }
      ]
},
    "instagram": "dan_dannah"
  },
  {
    "id": "kmarh",
    "slug": "kmarh",
    "name": "KMARH",
    "battles": 8,
    "wins": 6,
    "losses": 2,
    "style": "Lyrical",
    "image": "/kmarh.png",
    "bio": "A foundational PenGame figure and leading Midlands representative, K Marh became a perennial title contender through deep tournament runs in Seasons 2 and 3. His style is defined by aggressive, percussive UK road-rap flows and imposing presence. His greatest strength is raw forward-driving vocal energy, while persistent memory lapses and recurrent stumbles remain his clearest competitive limitation.",
    "profile": {
      "introduction": "Across regular seasons, tournament finals and the Champions League era, K Marh embodies the gritty, unapologetic core of British on-beat battle rap. Rising from Birmingham to challenge London dominance, he built an identity around street realism, menacing delivery and relentless tempo. Against technical writers and comedic performers alike, he frequently controls the room through force of will. That threat is continually checked by structural fragility. His musical instincts and punchline velocity make him an enduring danger, but recurring memory lapses under tournament pressure have repeatedly prevented him from converting strong campaigns into undisputed league supremacy.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "K Marh constructs rounds as aggressive high-impact sprints, front-loading verses with hard declarations before momentum often declines. The middle sections can dissolve into disconnected couplets as the writing moves abruptly between opponent-specific ideas and generic road threats. Look, listen, yo and first things first function as predictable resets. When memory or timing fails, recovery is blunt: he calls for the beat to be cut back or restarts an entire section. These interruptions restore mechanical footing but sacrifice continuity and expose the fragility underneath his opening intensity."
        },
        {
          "title": "Delivery and cadence",
          "body": "K Marh possesses a naturally driving, percussive cadence over 140 BPM drill and heavy trap production. Opening passages lock tightly to booming drums, with clipped phrasing and commanding projection creating genuine menace. Dynamic range is limited, however, and an almost constant level of intensity can become monotonous across three rounds. Rapid acceleration exposes breath-control problems: syllables bunch together, diction blurs and air disappears before the turnaround. He remains highly compatible with dark street production but is less adaptable when an instrumental requires swing, restraint or more intricate syncopation."
        },
        {
          "title": "Rhyme construction",
          "body": "His foundation combines functional multisyllabic rhymes with stacked endings and occasional internal flourishes. K Marh understands rhythmic consonance and can chain two- and three-syllable patterns to sustain forward motion. The chosen sound families are often safe and familiar, returning to common UK rap phonetics across different opponents. These structures support rapid delivery and clear crowd comprehension, but offer limited surprise. Intricate polysyllabic architecture and expectation-breaking patterns remain uncommon, keeping the writing effective in motion without placing it among the league's most inventive technical work."
        },
        {
          "title": "Repetition and hooks",
          "body": "Calculated hooks, melodic motifs and organised crowd participation are largely absent from K Marh's catalogue. He treats rounds as uninterrupted verses rather than performances built around refrains. Repetition therefore appears mainly as a symptom of memory failure. When a line disappears under pressure, the preceding couplet may be repeated several times to buy processing time. Recurring formulations such as man won't and bury you also create structural echoes across battles. This separates him from theatrical performers who can disguise limited writing through deliberate, audience-facing repetition."
        },
        {
          "title": "Vocabulary and diction",
          "body": "K Marh's vocabulary remains inside the established language of contemporary UK drill and road rap. Street slang, weapon terminology and regional phrasing dominate short active declarations designed for intimidation. This economy gives the delivery grit and allows it to cut through loud venues without confusion. Descriptive precision is limited, with rivals repeatedly framed through familiar ideas of cowardice, physical inadequacy and invalid street identity. The narrow register leaves little space for broader vocabulary, philosophical framing, subtle doubles or varied emotional tone."
        },
        {
          "title": "Angles and opponent focus",
          "body": "A major weakness is the preference for interchangeable street material over detailed opponent deconstruction. General threats frequently replace analysis of career contradictions, battle history or stylistic weakness. Tailored moments tend to remain surface-level, focusing on stature, weight, tournament exits or obvious name flips. These ideas can land with force but rarely grow into a sustained case against an opponent's credibility. Against analytical writers, the shortage of bespoke material allows rivals to control the wider narrative even when K Marh wins individual exchanges through delivery."
        },
        {
          "title": "References and imagery",
          "body": "K Marh draws from television, combat sports, gaming and action-film imagery. Familiar characters, political moments and British cultural landmarks offer quick shorthand for dominance or violence. These references are generally decorative punchlines rather than integrated thematic metaphors. Recognition supplies much of the reaction, while the surrounding idea receives limited development. The palette is accessible and effective in live settings, but reliance on known pop-cultural images can substitute for more original or personally observed writing."
        },
        {
          "title": "Themes and persona",
          "body": "His persona is that of an uncompromising road-rap traditionalist and Midlands pioneer. Street authenticity, territorial pride, criminal hierarchy and physical deterrence form the core themes. Battles are treated with grim seriousness, and opponents are framed as intruders requiring immediate humiliation. The conviction commands respect but limits adaptability. Self-deprecation and theatrical irony rarely enter the performance, leaving him vulnerable to lighter charismatic opponents who can make his solemn intimidation appear rigid or humourless."
        },
        {
          "title": "Performance under pressure",
          "body": "Competitive pressure exposes a divide between physical composure and memory reliability. K Marh remains steady in hostile spaces and refuses to be physically intimidated, but high-stakes moments repeatedly produce stumbles, pauses and audible restarts. Improvised recovery is limited. Rather than rebutting in real time or freestyling through an error, he tends to stop, reset the instrumental and begin the passage again. The posture remains defiant even as the written sequence fractures, preserving some authority while weakening confidence in the round."
        },
        {
          "title": "Limitations",
          "body": "Chronic memory fragility is K Marh's clearest competitive vulnerability. Round-derailing stumbles reduce judge and crowd confidence during decisive fixtures. The broader writing follows a predictable blueprint with limited pacing variation, narrow vocabulary and stock road-rap idioms that can make material feel transferable between opponents. Breath control also weakens during acceleration, while the near absence of spontaneous rebuttal leaves him poorly equipped to adapt once a rival takes control of the room's narrative."
        },
        {
          "title": "Strengths",
          "body": "K Marh's effectiveness comes from physical authority, punchline directness and a natural musical pocket. When prepared and composed, his delivery lands with concussive weight and cuts through powerful venue systems. Heavy grime and drill production suits him more convincingly than it does many spoken-word-oriented battlers. Individual couplets carry genuine knockout power, producing reactions through vocal aggression and visceral imagery. His authentic energy connects strongly with audiences who value street credibility and uncompromised intensity over theatrical polish."
        },
        {
          "title": "Development and legacy",
          "body": "Across multiple seasons and the transition into Champions League fixtures, K Marh established himself as a permanent platform figure and Midlands pioneer. Vocal command improved and major stages became more comfortable, but unresolved memory instability and limited expansion beyond road-rap archetypes repeatedly blocked the final step towards championship success. His legacy remains secure as an indefatigable workhorse whose aggression and musical instinct helped define PenGame's raw beat-driven identity, even if the career is equally marked by the decisive hurdles left unconquered."
        }
      ]
    }
  },
  {
    "id": "kurly",
    "slug": "kurly",
    "name": "KURLY",
    "realName": "Alan McGeachie",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/kurly.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "frizz-price",
    "slug": "frizzprice",
    "name": "FRIZZ PRICE",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "/frizzprice.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "ren-dmc",
    "slug": "rendmc",
    "name": "REN DMC",
    "realName": "Ren Boateng",
    "nickname": "The Legend",
    "battles": 14,
    "wins": 8,
    "losses": 2,
    "style": "Versatile",
    "image": "/rendmc.png",
    "bio": "PenGame Season 4 tournament champion and seasoned league veteran Ren DMC represents the quintessential performance-driven UK battle MC. His style fuses punchy comedic grime flows with aggressive maternal insults, situational mockery and theatrical crowd participation. His greatest strengths are comic timing, charismatic presence and unflappable composure; his clearest limitation is reliance on basic rhymes, predictable crutches and repetitive shock-value vulgarity.",
    "profile": {
      "introduction": "Spanning early campaigns through his championship triumph in the 2024 Road to Wembley tournament, Ren DMC's body of work establishes him as an elite entertainer within the on-beat arena. Facing diverse stylists and recurrent rivals, he prioritises direct crowd connection and comic theatricality over intricate penmanship. His development reflects a steady maturation from chaotic, insult-heavy brawler into a tactical competitor who weaponises venue energy and defuses opponent angles with ease. Technical limitations, symmetrical end-rhymes and recycled maternal tropes cap his literary depth, but razor-sharp comedic timing and an ability to dominate live rooms ensure that he remains a formidable, decisive force.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "Ren DMC constructs rounds around a familiar three-part arc: conversational opening disclaimers, rapid personal mockery and a high-impact closing sequence or audience chant. Standard stage-setting phrases establish an aggressive comedic premise before he moves through modular clusters of jokes. Transitions between separate angles rely on resets such as real talk, stop and think or look, helping him recover breath and redirect listener focus. He also uses theatrical misdirection, appearing to forget a lyric before pivoting into a scripted punch. This flexibility supports recovery during disruption, though rounds can feel stitched together rather than built around one sustained critique."
        },
        {
          "title": "Delivery and cadence",
          "body": "Rapping mainly over grime and drill tempos, Ren DMC brings crisp pocket control and natural bounce. His punchy staccato cadence prioritises clarity and comic timing over complex rhythmic patterns. Booming projection and controlled volume changes signal approaching punchlines and underline dismissals. Breath management is generally reliable, although frantic passages can force abrupt pauses near the end of longer runs. Musical adaptability is a major asset: he navigates varied instrumentals confidently and can adjust his flow in real time, even turning production problems into part of the performance rather than allowing them to derail the round."
        },
        {
          "title": "Rhyme construction",
          "body": "Ren DMC uses conservative, functional rhyme mechanics designed for immediate understanding. Verses depend on straightforward two-syllable families, basic monosyllabic couplets and symmetrical AABB structures. Internal rhymes appear mainly as stepping stones towards the end-line punch rather than dense constructions in their own right. Safe phonetic pairings and familiar frameworks recur between battles. The pen rarely surprises through lexical intricacy; its effectiveness comes from the rhythm, inflection and decisiveness with which the final bar is delivered."
        },
        {
          "title": "Repetition and hooks",
          "body": "Deliberate repetition is central to Ren DMC's performance arsenal. Call-and-response chants allow him to seize room momentum and recruit the audience directly against an opponent. Repetition also acts as a structural crutch. During memory slips or periods of venue noise, he can triple an introductory phrase or repeat a short clause to buy recovery time. These resets reveal lexical limits, but his comic conviction often transforms a potential stumble into shared theatre. The crowd experiences the recovery as part of the show rather than a complete break in control."
        },
        {
          "title": "Vocabulary and diction",
          "body": "Ren DMC operates in an accessible street-level London vernacular, avoiding obscure vocabulary in favour of immediate punch. Familiar UK slang sits alongside blunt physical description and active, conversational sentences. This simplicity ensures that jokes land on first listen without demanding secondary interpretation from judges or spectators. The drawback is limited lexical variety. Across multiple campaigns, his descriptive toolkit remains broadly unchanged, relying on recurring idioms, predictable adjectives and direct colloquialisms. Clarity is consistently strong, but the language rarely provides substantial subtext or layered meaning."
        },
        {
          "title": "Angles and opponent focus",
          "body": "His offence moves between sharp personalised observation and interchangeable insult material. At his best, Ren DMC isolates tangible details such as clothing, family employment, theatrical props or the absurd logistics surrounding an opponent's entourage, then develops them into humiliating comic narratives. These specific angles can seriously undermine credibility. He also defaults frequently to modular filler, particularly maternal degradation, hygiene jokes and promiscuity tropes that could target almost anyone. The vulgarity sustains room energy but carries less lasting critical weight than his focused conceptual attacks."
        },
        {
          "title": "References and imagery",
          "body": "British television, urban cinema, gaming and commercial culture provide Ren DMC with immediate comedic shorthand. Familiar characters, controller inputs and high-street brands are used to frame opponents as incompetent posers. His imagery favours slapstick and everyday humiliation: travel problems, fashion failures and awkward family encounters become accessible visual scenes. These references usually function actively inside the joke rather than appearing as decoration. Their instant recognition is valuable in live rooms, although a heavy dependence on familiar media can substitute for deeper self-generated metaphor."
        },
        {
          "title": "Themes and persona",
          "body": "Ren DMC embodies an irreverent, self-aware trickster who combines street confidence with broad pantomime humour. He avoids the posture of an entirely serious enforcer and instead embraces absurdity and self-deprecation. Physical traits and known opposition angles can be claimed first, depriving rivals of their force. Financial dominance, fraudulent personas and maternal mockery recur throughout the material. His refusal to take himself too seriously makes him difficult to damage: personal accusations are frequently absorbed, laughed off and repurposed as evidence of versatility rather than treated as genuine threats."
        },
        {
          "title": "Performance under pressure",
          "body": "Under tournament pressure, Ren DMC displays elite composure, adaptability and stage presence. Hostile crowds, props and technical interruptions rarely break his focus. Instrumental errors can be addressed in rhythm, with demands for a reload turned into part of the entertainment. Memory slips are covered through pauses, improvised humour or self-admonishing asides. His rebuttal game is quick and dismissive, particularly when opponents rely on visible gimmicks. This grace under fire gives him the ability to recover rounds that appear close to collapse and reclaim momentum before the audience fully registers the problem."
        },
        {
          "title": "Limitations",
          "body": "Ren DMC's primary limitation is a clear technical ceiling defined by rudimentary rhyme schemes, predictable metres and modest lexical ambition. Broad farce and vulgar shock value, especially repeated maternal insults, can wear thin across tournament runs. Structurally, rounds can become formulaic, recycling comic pacing, stalling phrases and crowd chants when the written material is less substantial. He also favours immediate laughs over sustained psychological deconstruction. Against disciplined technical writers, those choices can leave him vulnerable on pure lyricism whenever stage charisma fails to dominate the room completely."
        },
        {
          "title": "Strengths",
          "body": "Ren DMC's dominance comes from charismatic presence, flawless comedic timing and instinctive understanding of live performance. Every bar is projected with clarity, controlled inflection and dynamic physical movement. Simple observations become venue-shaking punches through timing and conviction. By involving the audience and judges in his theatrical orbit, he turns rounds into interactive spectacles. Adaptability, fearlessness and exceptional control of room energy consistently allow him to overwhelm denser writers, making him one of the scene's most effective performance-first competitors."
        },
        {
          "title": "Development and legacy",
          "body": "Across his competitive tenure, Ren DMC evolved from a raw chaotic entertainer into a tournament strategist. Early performances showed infectious energy undermined by pacing and structural instability. Sustained competition sharpened his timing, improved his handling of beat changes and developed the poise required for high-stakes brackets, culminating in championship success. Fundamental penmanship and reliance on vulgar crutches changed less dramatically, but his stagecraft and situational intelligence advanced considerably. His legacy is that of PenGame's definitive performance-first champion, demonstrating how command, adaptability and comic connection can overcome orthodox technical limitations."
        }
      ]
    },
    "instagram": "ren.dmc"
  },
  {
    "id": "lil-shakz",
    "slug": "lilshakz",
    "name": "LIL SHAKZ",
    "realName": "Shakhan Johnson-Baiden",
    "battles": 3,
    "wins": 3,
    "losses": 0,
    "style": "Lyrical",
    "image": "/lilshakz.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "pocaa",
    "slug": "pocaa",
    "name": "POCAA",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/pocaa.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "cheezee",
    "slug": "cheezee",
    "name": "CHEEZEE",
    "realName": "Justin Straughan",
    "battles": 10,
    "wins": 4,
    "losses": 5,
    "style": "Aggressive",
    "image": "/cheezee.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "el-bandzo",
    "slug": "elbandzo",
    "name": "EL BANDZO",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Powerhouse",
    "image": "/elbandzo.png",
    "bio": "PenGame Season 2 artist."
  },
  {
    "id": "amity",
    "slug": "amity",
    "name": "AMITY",
    "battles": 3,
    "wins": 0,
    "losses": 3,
    "style": "Lyrical",
    "image": "/amity.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "dbc",
    "slug": "dbc",
    "name": "DBC",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Technical",
    "image": "/dbc.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "skamz",
    "slug": "skamz",
    "name": "SKAMZ",
    "realName": "Alexandre Sousa",
    "battles": 21,
    "wins": 12,
    "losses": 7,
    "style": "Aggressive",
    "image": "/skamz.png",
    "bio": "A central figure in PenGame's modern era, Skamz is an explosive on-beat performer whose aggression and crowd control often disguise a narrow, highly repetitive battle vocabulary.",
    "profile": {
      "introduction": "Skamz is one of PenGame's most experienced and recognisable competitors, but experience has not produced a broad vocabulary. His style is built around a compact set of words, sounds and attack patterns that he repeatedly drives through high-tempo grime delivery. At his best, that economy feels forceful and immediate. Under pressure, the same habits expose the limits of his writing.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "Transitions are frequently held together by a small group of entry words: yo, look, listen and familiar assurances such as I can't lie or real talk. These phrases function less as ideas than as timing devices. They buy space, restart his cadence and return him to a known position on the beat after a stumble or a difficult breath."
        },
        {
          "title": "Delivery and cadence",
          "body": "Skamz naturally leans into the front of the beat. Short bursts strike with the kick and snare before he accelerates into double-time, creating the sensation that the round is constantly moving forward. That momentum is one of his strongest weapons, but it leaves little room for silence, tonal variation or a carefully delayed punch."
        },
        {
          "title": "Rhyme construction",
          "body": "His writing repeatedly returns to familiar sound clusters. Adrenaline, veteran, medicine and skeleton form one dependable route; loser, ruler, scooter and Medusa form another. These chains are easy to deliver at speed and give him reliable destinations, but their recurrence across different opponents makes supposedly tailored rounds feel increasingly interchangeable."
        },
        {
          "title": "Repetition and hooks",
          "body": "Repeated words are not always evidence of failure. Skamz also uses them deliberately as hooks, crowd instructions and run-backs, turning a simple phrase into a rhythmic event. The distinction is control: purposeful repetition builds anticipation, while emergency repetition merely keeps the verse alive until the next prepared section arrives."
        },
        {
          "title": "Vocabulary and diction",
          "body": "The core vocabulary is blunt and physical: bodies, weapons, family members, humiliation and defeat. Verbs tend towards immediate actions such as smoke, choke, slap, stab and duppy. This gives the material a brutal clarity, but it also narrows the emotional and descriptive range. Different battles can begin to share the same threats, targets and sentence shapes."
        },
        {
          "title": "Angles and opponent focus",
          "body": "His most distinctive material comes from information attached to the opponent: previous losses, family relationships, appearance, reputation and standing within the league. He prefers immediate personal damage over an abstract concept. When the angle is precise, the round feels confrontational and specific; when it is not developed beyond the first insult, shock replaces argument."
        },
        {
          "title": "References and imagery",
          "body": "Anime, fighting games and childhood television often supply the imagery that the surrounding language does not. Recognisable names from Attack on Titan, Dragon Ball, Mortal Kombat, Tekken and Nintendo instantly communicate scale, danger or victory. The references are accessible and crowd-friendly, yet they can replace deeper scene-setting rather than enrich it."
        },
        {
          "title": "Themes and persona",
          "body": "Authority, humiliation and survival dominate his writing. Opponents are reduced through family attacks, physical comparisons, claims of weakness and reminders of earlier defeats. His own character is presented through endurance and threat: the battler who keeps returning, absorbs setbacks and attempts to overwhelm the room before a rival can establish control."
        },
        {
          "title": "Performance under pressure",
          "body": "When control slips, his sentences become more visibly shaped by the rhyme rather than the thought. Word order bends to place the required sound on the final beat, while a failed passage can collapse into repeated names or single insults. Instead of expanding through freestyle detail, he often loops the simplest available phrase until the rhythm is recovered."
        },
        {
          "title": "Limitations",
          "body": "The gap between his strongest and weakest performances is largely a question of structure. A clear angle gives his energy somewhere to travel and makes the repeated sounds feel intentional. Without that structure, speed produces density rather than progression: many words arrive, but the argument remains in the same place."
        },
        {
          "title": "Strengths",
          "body": "Skamz's effectiveness is not based on lexical variety. It comes from cadence, projection, timing and his ability to make a direct insult feel larger in the room than it appears on the page. His best performances turn repetition into emphasis and a limited word set into a recognisable voice. His weakest expose the machinery: the reset words, recycled sounds and familiar references become impossible to ignore."
        },
        {
          "title": "Development and legacy",
          "body": "Repeated tournament runs have made both his strengths and his habits unusually visible. Rivals know the cadence, the preferred sounds and the pressure points, so every return tests whether he can reshape familiar tools. That tension is central to his place in PenGame: Skamz is both a major part of the league's identity and a battler whose next level depends on moving beyond the patterns that created it."
        }
      ]
    },
    "instagram": "skamzsousa"
  },
  {
    "id": "junie",
    "slug": "junie",
    "name": "JUNIE",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Versatile",
    "image": "/junie.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "icuredamsterdam",
    "slug": "icuredamsterdam",
    "name": "ICUREDAMSTERDAM",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Lyrical",
    "image": "/icuredamsterdam.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "animal",
    "slug": "animal",
    "name": "ANIMAL",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Technical",
    "image": "/animal.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "messie",
    "slug": "messie",
    "name": "MESSIE 13",
    "battles": 1,
    "wins": 1,
    "losses": 0,
    "style": "Aggressive",
    "image": "/messie13.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "bmf-alz",
    "slug": "bmfalz",
    "name": "BMF ALZ",
    "battles": 3,
    "wins": 0,
    "losses": 2,
    "style": "Powerhouse",
    "image": "/bmfalz.png",
    "bio": "PenGame Season 3 artist."
  },
  {
    "id": "whoisorion",
    "slug": "whoisorion",
    "name": "WHOISORION",
    "realName": "Anthony Oluwabukumi Ologun",
    "battles": 19,
    "wins": 6,
    "losses": 5,
    "style": "Lyrical",
    "image": "/whoisorion.png",
    "bio": "A cornerstone headliner and Tag Team Champion in PenGame, WhoisOrion is an irrepressible showman whose style merges high-tempo grime flows with ruthless comedic insult. His greatest assets are electrifying crowd control and instinctive command of the instrumental pocket. His clearest limitation is an over-reliance on surface-level filler and interchangeable shock-value tropes that restrict his thematic depth.",
    "profile": {
      "introduction": "Across a prolific PenGame tenure spanning early breakout clashes, tag-team dominance and headline Champions League fixtures, WhoisOrion has established an unmistakable artistic identity. Blending commercial rap polish, grime cadences and raw insult comedy, he treats on-beat battling as dynamic live theatre rather than conventional bar-for-bar warfare. His career reveals substantial growth in stage command, pacing and comedic showmanship, transforming early chaotic impulses into a performance method that routinely manufactures crowd pandemonium and reloads. Yet this effectiveness remains in tension with technical fragility. Timing and bounce can mask lyrical shortfalls, but formulaic rhyme schemes, recycled target angles and recovery stalling expose the boundary between battle craftsmanship and theatrical charisma.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "WhoisOrion constructs rounds in punchy two-bar and four-bar blocks, often opening with casual staging banter, DJ adjustments and informal check-ins with the venue. Conversational resets such as yo, look and listen sit beside theatrical misdirection to pivot into harsh punchlines. Progression is episodic rather than thematic, jumping between separate insult concepts with limited connective tissue. Transitions are frequently bridged by mic checks, animated gestures or audience call-outs. When momentum falls, his standard recovery is to halt, demand a reload or use conversational stalling before relaunching. This looseness supports adaptability but fragments long-form narrative cohesion."
        },
        {
          "title": "Delivery and cadence",
          "body": "WhoisOrion's delivery is defined by exceptional pocket control, bouncing confidently across grime, drill and classic UK rap tempos. He moves from conversational half-time cadences into rapid double-time passages without easily losing the beat. A raspy, punchy projection cuts through heavy basslines where quieter performers can disappear. Breathing is generally managed through rhythmic pauses and emphatic end-rhyme punches, although extended fast-flow sections occasionally push his stamina and produce clipped syllables or audible recovery breaths. His natural timing makes the instrumental an active part of the performance, with syncopated snares used to reinforce both comedy and aggression."
        },
        {
          "title": "Rhyme construction",
          "body": "His rhyme architecture relies on accessible AABB couplets and predictable phonetic families rather than dense multi-layered writing. WhoisOrion favours familiar multisyllabic endings and comfortable sound clusters, occasionally adding internal rhymes to maintain speed across faster tempos. End-rhymes are often functional pairings constructed backwards from the intended punchline. Structural formulas and comparisons recur between battles, revealing a method designed for dependable live impact rather than technical novelty. The approach sacrifices poetic density, but it ensures that punchlines remain audible, intelligible and immediate in loud venues."
        },
        {
          "title": "Repetition and hooks",
          "body": "WhoisOrion imports songcraft into the battle arena through deliberate hooks, anthemic refrains and crowd-participation chants. Signature assertions transform clashes into interactive performances and can generate immediate reloads. This purposeful repetition contrasts with his recovery loops. During memory slips or uncertain transitions, introductory lines may be repeated several times while he regathers the next passage. Designed hooks represent some of his most memorable showmanship; unscripted repetition can test the room's patience and reveal moments when theatrical energy is covering incomplete or forgotten writing."
        },
        {
          "title": "Vocabulary and diction",
          "body": "His language is rooted in colloquial London street vernacular, trading lexical breadth for visceral impact. WhoisOrion favours everyday slang, blunt labels and direct declarative sentences, avoiding abstract vocabulary or literary metaphor so that lines require no decoding over loud beats. This accessibility produces a restricted palette, with conversational crutches, vulgarities and familiar put-downs recurring across performances. The diction lacks poetic depth and structural elegance, but offers exceptional clarity. Comedic ridicule, personal mockery and aggressive punches reach their targets immediately and without interpretive friction."
        },
        {
          "title": "Angles and opponent focus",
          "body": "WhoisOrion combines sharp personal ridicule with interchangeable generic insult. At his best, he builds funny caricatures from an opponent's appearance, height, hygiene, reputation or previous tournament disappointment. Name flips are quick, direct and engineered for immediate payoff. Considerable portions of his material remain modular, however: accusations of lacking views or commercial momentum, living with parents and crude family attacks could be transferred between opponents. When he abandons tailored writing for familiar tropes, rounds lose bespoke weight and settle for superficial crowd reaction rather than sustained character deconstruction."
        },
        {
          "title": "References and imagery",
          "body": "His imagery draws heavily from mainstream British culture, fast food, television, sport and pop music. High-street habits, boxing figures, girl groups, family acts and gaming references provide immediately recognisable punchline vehicles. These comparisons work by placing opponents inside familiar cultural hierarchies, allowing the audience to understand the joke at once. Their accessibility produces dependable laughter but can substitute for original concept writing. Commercial and nostalgic references offer rapid gratification while sometimes limiting the inventive ceiling of the pen."
        },
        {
          "title": "Themes and persona",
          "body": "WhoisOrion presents a larger-than-life persona that combines commercial arrogance with comedic self-awareness. Rather than posing as an untouchable underworld figure, he occupies the role of a mainstream entertainer entering a battle-purist environment. Status, views and perceived commercial viability are used to dismiss opponents as overly serious underground acts. Common attacks on his appearance or history are neutralised through self-deprecation or exaggerated vulgarity. His authority is theatrical: he frames rivals not as dangerous equals but as supporting characters inside his show."
        },
        {
          "title": "Performance under pressure",
          "body": "When adversity arrives, seasoned stagecraft provides WhoisOrion with a strong buffer. Lyric stumbles, beat discrepancies or vocal strain are folded into theatrical banter, clowning and improvised audience engagement. Instead of freezing, he can break character, joke with the host or DJ and restart the instrumental with confidence. Rebuttals are situational and comedic rather than structurally complex, usually targeting an opponent's immediate behaviour or the crowd's reaction. Difficult tempos can test his respiratory stamina, but his emotional composure reliably salvages unstable moments that would cause less charismatic performers to collapse."
        },
        {
          "title": "Limitations",
          "body": "WhoisOrion is limited by technical predictability, modest lexical range and thematic recurrence. His writing often uses basic syntactic scaffolding, obvious end-rhymes and recycled comedic setups that offer little layered wordplay. Rounds can feel fragmented, moving between unrelated ideas without building a sustained argument. Interchangeable family insults and generic commercial critiques further dilute the specificity of his attacks. His habit of interrupting continuity to create reloads or cover memory slips also exposes technical vulnerability. Away from live room energy, the writing can appear sparse and heavily dependent on delivery for its impact."
        },
        {
          "title": "Strengths",
          "body": "WhoisOrion's effectiveness comes from outstanding pocket awareness, infectious charisma and exceptional comedic timing. He glides across rapid grime and drill tempos with bounce and clear articulation. Physical presence and theatrical expression elevate simple insults into arena-sized moments, while directness and natural humour establish an immediate connection with audiences. He does not simply rap over instrumentals; he orchestrates live entertainment. The ability to dictate room tempo, engineer explosive reloads and make accessible humour feel event-sized places him among PenGame's most consistently compelling on-beat performers."
        },
        {
          "title": "Development and legacy",
          "body": "From an unpredictable tournament wildcard to a Tag Team Champion and Champions League attraction, WhoisOrion's career shows clear maturation. He has learned to pace aggression, refine comedic timing and use stage presence with greater control. Formulaic rhyming, modular writing and structural looseness remain largely unresolved, but the competitive impact is undeniable. WhoisOrion helped demonstrate that rhythm, charisma and theatrical showmanship can be as decisive as literary complexity in on-beat battle rap. His legacy is that of a league pioneer whose magnetic beat-riding performance established a benchmark for live entertainment within modern UK battle culture."
        }
      ]
    },
    "instagram": "whoisorion"
  },
  {
    "id": "sevz",
    "slug": "sevz",
    "name": "SEVZ",
    "realName": "Sermon Matu",
    "battles": 17,
    "wins": 7,
    "losses": 3,
    "style": "Aggressive",
    "image": "/sevz.png",
    "bio": "Sevz is a permanent fixture within PenGame, evolving from a high-spirited tournament underdog into an enduring crowd favourite. His style fuses relentless UK drill and grime cadences with biting youthful cheek and rapid punchline volleys. His greatest strength is infectious stage charisma and crowd momentum; his clearest limitation remains erratic breath control and structural predictability that can falter under formal judging.",
    "profile": {
      "introduction": "Across PenGame's multi-season trajectory, from early developmental clashes to main-stage tournament fixtures, Sevz has established an unmistakable competitive persona. Operating as a perennial people's champion, his identity centres on scrappy fearlessness, punchy British vernacular, rapid-fire flows and unapologetic irreverence. His artistic growth is visible in an expanding tactical repertoire and sharper situational awareness during high-stakes clashes. His technical ceiling remains defined by surface-level tropes, predictable antithetical setups and timing lapses under scrutiny. These habits can cost him close tournament decisions, but his live connection and visceral delivery ensure that he remains one of the platform's most vital performers.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "Sevz structures rounds around high-frequency modular couplets rather than progressive narratives. Verses often begin with ritual verbal clearing, particularly look, listen or about time that I, sometimes joined by stage banter about monitor levels that creates transitional breathing room. Progression remains linear, stacking setup-and-punch sequences without much cumulative escalation. When rhythm slips or a punch misses the room, he uses blunt resets and repeats the opening clause to restart his pocket mechanically. Rounds can also end abruptly on functional sign-offs rather than a final haymaker, suggesting that his strongest ammunition has been spent before the bell."
        },
        {
          "title": "Delivery and cadence",
          "body": "Operating over high-tempo UK drill and grime instrumentals, Sevz brings natural rhythmic bounce and commanding projection. A forward-leaning staccato cadence injects immediate energy, with his pocket control strongest through mid-tempo passages where punches land squarely on the snare. Friction appears when he accelerates into longer multisyllabic patterns. He can outrun the production, compress bar lengths and swallow terminal syllables, obscuring the intended punch. Breath control remains a recurring vulnerability: extended high-velocity passages produce audible strain, reduce vocal authority and can pull him out of pocket during the final third of a round."
        },
        {
          "title": "Rhyme construction",
          "body": "Sevz prioritises immediate phonetic punch over intricate internal geometry. Schemes favour straightforward AABB end-rhymes anchored by familiar vowel banks, with flashes of compound construction appearing in shorter bursts. Multisyllabic runs are rarely sustained for long before he returns to safer structural templates. Antithetical comparisons, in which the opponent is reduced while Sevz occupies the stronger opposite image, recur throughout the catalogue. These prefabricated shapes provide rhythmic stability and clear live impact, but limit technical unpredictability and make parts of his writing increasingly easy to anticipate."
        },
        {
          "title": "Repetition and hooks",
          "body": "Sevz moves between deliberate crowd-engagement repetition and involuntary stalling. At his best, rhythmic spelling, short refrains and repeated commands act as rallying points that encourage participation and generate reloads. When memory or transitions fail, repetition becomes a safety net. Entry words such as look, trust me and bro are looped, while earlier setups may be repeated to buy retrieval time. The difference between showmanship and recovery is not always disguised successfully, and repeated stalling can blunt offensive momentum by revealing incomplete preparation behind the energetic presentation."
        },
        {
          "title": "Vocabulary and diction",
          "body": "Sevz works within a focused contemporary London street vernacular. His vocabulary uses familiar slang and compact direct sentences that communicate instantly in noisy venues. The approach gives his material raw conversational bite but restricts expressive range. Descriptive precision is often replaced by generic derogatory labels, with opponents repeatedly characterised as dead, washed or amateur. Complex subordination and syntactic variation are uncommon. The language remains highly relatable and easy to follow, yet the narrow palette becomes increasingly visible across extended tournament campaigns."
        },
        {
          "title": "Angles and opponent focus",
          "body": "Sevz approaches opponents through immediate name flips and visible mockery rather than layered psychological analysis. Names, weight, appearance, clothing and simple brand associations provide quick routes to crowd laughter. Personal angles rarely develop into sustained arguments about an opponent's history or artistic identity. A significant portion of the material remains interchangeable, consisting of generic drill posturing, league-supremacy claims and threats of professional burial. The speed and humour can make these attacks effective in the moment, but the lack of deeper character work prevents them from leaving lasting reputational damage."
        },
        {
          "title": "References and imagery",
          "body": "Sevz saturates his writing with accessible British pop culture, sport, brands and entertainment. Restaurant chains, resale platforms, coffee shops, footballers, superheroes and gaming figures provide immediate points of recognition. These references establish cultural common ground with his audience and give punchlines quick readability. They can also substitute for original conceptual writing, relying on familiar internet comparisons rather than transforming the reference into distinctive imagery. The result is accessible and crowd-friendly but rarely poetic, with recognition often doing more work than the surrounding construction."
        },
        {
          "title": "Themes and persona",
          "body": "Sevz projects the brazen young upstart challenging established league hierarchy. His central themes are generational disrespect and the promise of an unavoidable new order, with veterans framed as obsolete while he claims the future. Drill-style threats sit beside juvenile playground ridicule, creating humiliation through cheek rather than stern gravitas. Opponents question his youth, upbringing and street credibility, but he neutralises these attacks through unbothered audacity. The persona is entertaining and naturally sympathetic to crowds, giving him everyman charisma even when the underlying themes remain conventional."
        },
        {
          "title": "Performance under pressure",
          "body": "Tournament pressure exposes structural volatility alongside strong resilience. Memory lapses and cadence slips rarely lead to complete silence; Sevz covers hesitation through physical animation, increased volume and requests for audio adjustment. His improvised rebuttal ability remains limited, with memorised material preferred over spontaneous counter-arguments. Difficult and unusual beats can expose timing problems and breathlessness, but hostile crowds often strengthen rather than weaken his delivery. Natural showmanship helps him recover audience goodwill and salvage rounds whose technical execution has begun to unravel."
        },
        {
          "title": "Limitations",
          "body": "Sevz's clearest limitation is technical discipline under formal adjudication. Breath control deteriorates during rapid passages, producing rushed and muffled conclusions where key wordplay is lost. The writing repeatedly returns to formulaic antithetical setups, predictable AABB rhymes and familiar entry-word resets. Angles remain thematically shallow, favouring weight, appearance and generic family insults over calculated artistic deconstruction. Audible monitor complaints can also break performance immersion. These weaknesses help explain why strong room support does not always convert into decisive judged victories."
        },
        {
          "title": "Strengths",
          "body": "Sevz's effectiveness comes from exceptional live charisma, musical instinct and rapport with the battle audience. When settled into a grime or drill pocket, his cadence has an infectious bounce that immediately energises the venue. Sharp comedic timing and cheeky British directness puncture intimidating veterans and serious personas. He does not shrink under spotlight pressure; confidence and animation project fearlessness. Easily understood refrains and relentless forward motion allow him to turn neutral rooms into partisan crowds, producing the reloads and high-decibel energy associated with PenGame's marquee events."
        },
        {
          "title": "Development and legacy",
          "body": "From an energetic novice to major tournament appearances, Sevz has grown into a foundational league asset. He has anchored rivalries, adapted between solo and team formats and developed greater awareness of high-stakes situations. Artistic evolution remains incomplete: early breath-control problems, structural habits and formulaic angles continue to appear in later campaigns. His legacy is nevertheless secure as a quintessential people's champion, an irreplaceable cultural lightning rod whose infectious energy and raw musicality capture a central part of PenGame's contemporary identity."
        }
      ]
    },
    "instagram": "pressuremakes_"
  },
  {
    "id": "smil3z",
    "slug": "smil3z",
    "name": "SMIL3Z",
    "realName": "Juan Vaz",
    "battles": 19,
    "wins": 12,
    "losses": 3,
    "style": "Lyrical",
    "image": "/smil3z.png",
    "bio": "Cold War Tournament Champion and a defining PenGame fixture, Smil3z represents raw UK on-beat aggression. Built on relentless forward momentum and street-rooted intimidation, his greatest asset is an imposing vocal delivery that commands the room. His overall impact remains restricted by predictable rhyme patterns, repetitive appearance-based angles and a marked reluctance to pursue forensic opponent deconstruction.",
    "profile": {
      "introduction": "Across a relentless campaign from his Season 4 debut to victory in the Cold War tournament, Smil3z has established himself as one of PenGame's most battle-tested and intimidating competitors. Operating with the swagger of a recording artist rather than a traditional battle technician, his identity centres on explosive grime-drill cadence, menacing physical presence and unapologetic hostility. He developed from an erratic, breathless brawler into a composed tournament closer capable of sweeping opponents through force of delivery. Yet structural predictability, interchangeable violence and a narrow lexical range remain largely unchanged. His career demonstrates how conviction, rhythm and stage authority can dominate on-beat battle rap despite clear technical limits."
      ,"sections": [
        {
          "title": "Structure and transitions",
          "body": "Smil3z structures rounds with formulaic rigidity, often beginning with sound-level demands before launching into high-energy threats. Rounds advance in linear bursts from broad street posturing towards direct mockery, but transitions remain unsophisticated. Repeated resets such as look, yo, listen and say nothing bridge conceptual changes and buy processing time. When momentum fades or breath control deteriorates, he rarely pivots smoothly, instead increasing aggression or calling for a reload. The blueprint changes little between battles, making the pacing and direction of multi-round performances easy to anticipate."
        },
        {
          "title": "Delivery and cadence",
          "body": "Thriving over 140 BPM grime and dark drill production, Smil3z possesses urgent, chest-heavy projection that cuts through live mixes. His pocket control is formidable through straight four-bar metres, where an aggressive percussive attack drives the verse forward. Adrenaline can push him ahead of the beat, cramming excess syllables into bars and weakening cadence. Breath control remains a persistent liability: extended multisyllabic runs produce gasps, swallowed consonants and rushed punches. Minimal dark production suits his suffocating delivery, while instrumentals demanding swing, restraint or melodic deceleration expose limited rhythmic flexibility."
        },
        {
          "title": "Rhyme construction",
          "body": "Smil3z uses conservative rhyme architecture dominated by basic monosyllabic and disyllabic endings. Familiar UK rap phonetics recur throughout the catalogue, including repeated short-e chains and safe pairings designed for immediate impact. Complex internal patterns and mosaic rhyming are largely absent. His common couplet structure establishes an aggressive premise on the odd bar and delivers a physical consequence on the even bar. That predictability preserves clarity in loud venues, but offers limited technical ingenuity and little replay value once the force of the live delivery is removed."
        },
        {
          "title": "Repetition and hooks",
          "body": "Smil3z uses deliberate status declarations and call-and-response ad-libs to trigger crowd reaction. These designed performance moments are frequently overshadowed by repetition created under technical strain. When memory wavers, he returns to entry phrases, cycles introductory demands or repeats the preceding line with greater aggression to reset his internal rhythm. The method prevents complete collapse and can disguise hesitation through volume, but it also reveals dependence on muscle memory rather than flexible lyrical control."
        },
        {
          "title": "Vocabulary and diction",
          "body": "His vocabulary is narrow and rooted in contemporary London street language and familiar road-rap imagery. Morgues, demons, weapons, relatives and body bags recur between opponents with little variation. Sentences favour direct imperative phrasing that leaves no ambiguity about aggressive intent. What the writing loses in nuance, metaphor and lexical breadth is partly recovered through conversational clarity. The diction is immediate and easy for audiences and judges to follow, but the limited word set constrains the sophistication and long-term distinctiveness of his material."
        },
        {
          "title": "Angles and opponent focus",
          "body": "Opponent-specific writing remains a clear weakness. Smil3z favours visible physical caricature, repeatedly targeting facial features, clothing, hygiene and footwear. Geographical angles are similarly broad, reducing locations to generic dismissal. A substantial portion of the writing is interchangeable and could be delivered against another opponent without meaningful adjustment. When facing detailed angle writers, his limited interest in personal history, artistic identity or psychological weakness leaves him strategically exposed. Immediate visual mockery can produce laughter, but rarely develops into a sustained case against the person opposite him."
        },
        {
          "title": "References and imagery",
          "body": "Cultural references come from an accessible populist pool of cartoons, music, celebrities and anime. They usually function as self-contained punches designed to provoke an immediate response before the verse returns to street hostility. Visual imagery is dominated by exaggerated urban violence: morgues, blades, cold water and graphic injuries. The scale can become cartoonish, with physical destruction replacing grounded observation. Rather than building memorable thematic worlds, these references and violent images often operate as shortcuts that complete a line without adding deeper conceptual originality."
        },
        {
          "title": "Themes and persona",
          "body": "Smil3z embodies an uncompromising street enforcer who openly values exposure and artistic presence over battle-rap purism. Dominance, street supremacy, financial security and violent retaliation define the thematic range. Authority is expressed through eye contact, physical posturing and aggressive use of space. Humour is coarse and dismissive, intended to humiliate rather than charm. The persona's strength is absolute conviction: even where the underlying concept is thin, Smil3z commits fully to the predator-versus-prey dynamic and can intimidate less assured opponents through presence alone."
        },
        {
          "title": "Performance under pressure",
          "body": "Smil3z is a resilient high-stakes competitor whose composure often improves as tournament pressure increases. Minor stumbles and syllable slips appear across the catalogue, but he rarely suffers a complete collapse. Improvisation is limited; recovery comes through blunt retorts, stage commands and a renewed surge of energy rather than intricate spontaneous rebuttal. Hostile rooms and disengaged spectators do not cause him to shrink. He responds by increasing projection and physical presence, using force of will to impose his tempo even when the environment is not naturally supportive."
        },
        {
          "title": "Limitations",
          "body": "Smil3z is technically restricted by structural monotony, narrow vocabulary and dependence on rudimentary end-rhyme families. Recycled phonetics, generic threats and appearance-based insults produce diminishing returns across tournaments. Breath control deteriorates during faster passages, muddying endings and weakening punches. His reluctance to build detailed opponent angles or calculated rebuttals creates strategic vulnerability against analytical writers. The material relies heavily on execution, leaving a thin written foundation whenever energy, volume or physical authority fails to dominate the exchange."
        },
        {
          "title": "Strengths",
          "body": "Smil3z's primary strength is undeniable stage presence, combining explosive projection, authentic aggression and natural timing over grime tempos. He attacks beats with percussive force and makes straightforward punches register instantly. Menacing eye contact, combative body language and confidence provide effective psychological pressure before the opponent has settled. He avoids overcomplicated setups and maintains clear payoffs for judges. This combination of raw charisma, street credibility and unwavering conviction makes him an especially dangerous tournament competitor capable of winning decisively through presence and execution."
        },
        {
          "title": "Development and legacy",
          "body": "From a raw Season 4 debut, Smil3z developed into a tournament specialist and ultimately a Cold War champion. He refined pacing, reduced fatal stumbles and learned to manage the endurance demands of bracket competition. Artistic growth remains one-dimensional, with later rhyme structures and angle choices closely resembling earlier work. His legacy within PenGame is nevertheless substantial: a definitive on-beat powerhouse who proved that conviction, vocal authority and relentless live aggression can conquer a tournament without abandoning an intentionally raw and unrefined style."
        }
      ]
    }
  },
  {
    "id": "grams",
    "slug": "grams",
    "name": "MARNI GRAMZ",
    "realName": "Amarni Hudson",
    "nickname": "Grams",
    "battles": 14,
    "wins": 1,
    "losses": 5,
    "style": "Versatile",
    "image": "/grams.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "renaya",
    "slug": "renaya",
    "name": "RENAYA",
    "battles": 3,
    "wins": 1,
    "losses": 2,
    "style": "Technical",
    "image": "/renaya.png",
    "bio": "PenGame Season 4 artist.",
    "instagram": "renayaofficial"
  },
  {
    "id": "drizzgb",
    "slug": "drizzgb",
    "name": "DRIZZGB",
    "realName": "Dray Callaghan",
    "battles": 18,
    "wins": 6,
    "losses": 2,
    "style": "Aggressive",
    "instagram": "drizzgb",
    "image": "/drizzgb.png",
    "bio": "Hailing from Birmingham, DrizzGB stands as one of PenGame's most prominent and enduring fixtures. His style is built on relentless aggression, acerbic mockery and crowd-pleasing irreverence. His greatest strength lies in his commanding stage presence and instinctive ability to land devastating personal exposés. His clearest limitation remains an over-reliance on coarse generic filler, predictable rhyming schemes and frequent structural resets under competitive pressure.",
    "profile": {
      "introduction": "Across multi-season campaigns, tournament clashes and high-stakes rematches, DrizzGB has established an unmistakable identity as Birmingham's foremost combatant in a predominantly London-centric arena. Balancing overt territorial pride with unrestrained comedic disrespect, his body of work showcases a battle rapper capable of dismantling top-tier opponents through targeted psychological warfare and explosive room control. Yet this formidable track record is constantly shadowed by technical vulnerabilities. When forced away from prepared exposés or outside comfortable mid-tempo drill and grime pockets, his writing often collapses into crude familial insults and repetitive verbal crutches. DrizzGB remains a compelling, polarising spectacle whose raw charisma and instinct for crowd momentum consistently compensate for noticeable deficits in lyrical variety and structural discipline.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "DrizzGB constructs rounds around high-impact set pieces rather than seamless long-form narratives. His verses typically open with abrupt declarations, frequently initiated by conversational imperatives such as look, listen or yo. Rather than engineering organic thematic bridges between concepts, he relies on staccato line transitions and sudden vocal pauses to gauge room reaction. When a punchline fails to connect or a memorisation hiccup threatens his momentum, he habitually employs verbal resets, repeating his setup bar or appealing directly to the host and sound engineer. While this stop-start architecture can fragment his verses, it also provides tactical recovery windows before his primary offensive haymakers."
        },
        {
          "title": "Delivery and cadence",
          "body": "Operating predominantly over standard UK drill and grime tempos, DrizzGB favours a direct, full-throated delivery that prioritises vocal projection and clarity over intricate rhythmic syncopation. He attacks beats squarely on the downbeat, rarely experimenting with off-beat pockets or polyrhythmic cadences. This driving flow ensures that punchlines cut through heavy club acoustics. When instrumentals demand fluid double-time variations or subtle pocket control, however, his phrasing can become rigid and breathless. Under pacing strain, his metre occasionally rushes against the snare, forcing audible breaths between couplets. Nevertheless, his natural chest voice and unyielding volume lend his verses a visceral punch that commands attention."
        },
        {
          "title": "Rhyme construction",
          "body": "DrizzGB's rhyme architecture leans heavily towards straightforward AABB end-rhyme couplets and elementary bisyllabic schemes. He frequently anchors verses to well-worn rhyme families, leaning into familiar sound pairings such as pack, attack and back, or skin, chin and win. When he attempts extended multisyllabic sequences, the construction can feel mechanically assembled around one rhyme sound rather than dynamically woven into complex syntax. Internal rhyming is sparse and primarily functional, deployed to sustain momentum towards a predictable end-line payoff. This mechanical approach limits his technical ceiling, yet its unadorned simplicity ensures immediate punchline comprehension across the venue floor."
        },
        {
          "title": "Repetition and hooks",
          "body": "Repetition serves both as an intentional performance weapon and an involuntary coping mechanism. When dominating a battle, DrizzGB harnesses room-filling refrains, opponent interrogations and rhythmic chants to force crowd participation and trigger reloads. Repetition also exposes cognitive strain. During memory lapses or unstable transitions, he frequently loops introductory phrases, repeats a four-bar passage from the top or fixates on an opponent's physical attribute. These restarts can disrupt continuity, but his conviction often transforms an obvious technical fault into an energetic reset, allowing him to recalibrate without completely relinquishing stage authority."
        },
        {
          "title": "Vocabulary and diction",
          "body": "Lexically, DrizzGB operates within a narrow, vernacular-heavy register dominated by UK street slang, Birmingham locational signifiers and abrasive profanity. His diction relies on well-worn insults and blunt assertions. Nuanced figurative language and broad lexical variety are uncommon; instead, he communicates through aggressive conversational brevity. Sentences arrive in short declarative fragments that leave no ambiguity regarding his intent. While this economical vocabulary deprives his rounds of poetic depth, it sharpens his colloquial punchiness. Every insult lands without interpretive friction, making the language well suited to immediate consumption in a rowdy live battle environment."
        },
        {
          "title": "Angles and opponent focus",
          "body": "DrizzGB's effectiveness hinges on preparation and the depth of his opponent-specific angles. At his best, he draws on public exchanges, battle history and career missteps to construct devastating character attacks. His deconstruction of rivals through targeted personal material represents the height of his competitive threat. When facing unfamiliar or less documented opponents, however, his writing can regress into interchangeable stock material. In these weaker outings he leans on recycled generic threats, predictable physical roasts and crude attacks on relatives, exposing a sharp disparity between his tailored masterclasses and generic filler."
        },
        {
          "title": "References and imagery",
          "body": "His referential palette is drawn from British everyday life, youth subculture and nostalgic media. References range from pop-culture fixtures such as Dragon Ball Z, Ben 10 and Jackass to domestic utilities, broadband providers, confectionery and reality television figures. Familiar characters can generate immediate audience recognition, but they often function as surface-level comparative shortcuts rather than developed metaphors. His imagery is similarly visceral and unpolished, revolving around physical conflict, domestic disorder, cannabis and graphic sexual humiliation. Although it lacks subtle figurative depth, the approach grounds his performances in recognisable working-class British experience."
        },
        {
          "title": "Themes and persona",
          "body": "At the centre of DrizzGB's persona is an unapologetic Midlands anti-hero who revels in territorial antagonism and social impropriety. Proudly representing Birmingham's 0121 dialling code, he relishes entering London territory to challenge local favourites and established league hierarchies. His thematic core combines public humiliation, street authenticity and masculine dominance with a sharp comedic streak. When opponents target his background, appearance or private life, he deflects vulnerability by doubling down on offensive hostility. This combative swagger gives him an intimidating aura and can make rivals visibly uncomfortable on stage."
        },
        {
          "title": "Performance under pressure",
          "body": "Under competitive pressure, DrizzGB displays strong survival instincts despite clear technical vulnerabilities. Hostile crowds, sharp rebuttals and instrumental problems can produce visible irritation, erratic restarts, misremembered bars and tense exchanges with sound engineers. Yet he rarely allows a mistake to become a complete collapse. Instead of freezing, he responds aggressively, weaponising restarts, engaging judges directly and using vocal volume to re-establish dominance. His capacity for improvised rebuttal is limited and often crude, but his tenacity allows him to weather hostile room dynamics that would break less resilient performers."
        },
        {
          "title": "Limitations",
          "body": "DrizzGB's artistic ceiling is restricted by pronounced technical and conceptual boundaries. His rhyming patterns remain formulaic and predictable, relying on basic phonetics and recycled cadences that lack rhythmic sophistication. Structurally, his rounds struggle to maintain cohesive narrative momentum and can unravel into disconnected fragments separated by verbal resets. An over-reliance on graphic familial insults, physical body-shaming and recycled street-violence narratives creates thematic stagnation when personal research is unavailable. His occasional inability to ride shifting tempos cleanly also reveals limitations in breath management, metronomic discipline and versatile vocal control."
        },
        {
          "title": "Strengths",
          "body": "DrizzGB's enduring competitive potency comes from exceptional stage presence, comedic timing and unyielding directness. He cuts through performance artifice, addressing opponents with confrontational clarity that instantly commands the room. When armed with sharply tailored personal material, his execution is ruthless, generating venue-shifting moments through conviction and dramatic delivery. His natural musicality over classic drill and grime tempos, combined with a strong instinct for crowd psychology, enables him to orchestrate thunderous reloads and turn indifferent audiences into vocal supporters through force of personality alone."
        },
        {
          "title": "Development and legacy",
          "body": "Across his extensive PenGame tenure, DrizzGB has evolved from an unrefined regional disruptor into one of the league's most dependable headline attractions and tournament finalists. His fundamental technical habits and basic rhyming schemes have seen limited structural evolution, but his understanding of pacing, psychological warfare and room manipulation has matured significantly. Unresolved weaknesses in flow versatility and thematic breadth prevent universal technical acclaim, yet his legacy is secure. As Birmingham's standard-bearer, DrizzGB has supplied the league with some of its most explosive and boundary-pushing moments, embodying British battle rap at its most combative and theatrical."
        }
      ]
    }
  },
  {
    "id": "a-petrelli",
    "slug": "apetrelli",
    "name": "A PETRELLI",
    "realName": "Amari Anderson",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "/APETRELLI.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "dhani",
    "slug": "dhani",
    "name": "DHANI",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/dhani.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "prynlee",
    "slug": "prynlee",
    "name": "PRYNLEE",
    "realName": "Princess Mayaki",
    "battles": 5,
    "wins": 0,
    "losses": 3,
    "style": "Technical",
    "image": "/prynlee.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "aliaano",
    "slug": "aliaano",
    "name": "ALIAANO",
    "battles": 3,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "/aliaano.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "jc",
    "slug": "jc",
    "name": "JC",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "/jc.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "kandi",
    "slug": "kandi",
    "name": "KANDI",
    "realName": "Kandavorous Butler",
    "battles": 18,
    "wins": 4,
    "losses": 9,
    "style": "Lyrical",
    "image": "/kandi.png",
    "bio": "PenGame Season 4 artist.",
    "instagram": "kandiorkaddi"
  },
  {
    "id": "iiiberealz",
    "slug": "iiiberealz",
    "name": "iiiBEREALZ",
    "realName": "Reande Gordon",
    "battles": 18,
    "wins": 6,
    "losses": 5,
    "style": "Technical",
    "image": "/iiiberealz.png",
    "bio": "PenGame Season 4 artist."
  },
  {
    "id": "twenty8",
    "slug": "twenty8",
    "name": "TWENTY8",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "/twenty8.png",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "storm",
    "slug": "storm",
    "name": "STORM",
    "battles": 5,
    "wins": 1,
    "losses": 1,
    "style": "Aggressive",
    "image": "/storm.png",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "blazn",
    "slug": "blazn",
    "name": "BLAZN",
    "realName": "Aliyah Blazn",
    "battles": 4,
    "wins": 0,
    "losses": 4,
    "style": "Technical",
    "image": "/blazn.png",
    "bio": "PenGame Christmas 2023 artist."
  },
  {
    "id": "deeno",
    "slug": "deeno",
    "name": "DEENO",
    "realName": "Owen Deeney",
    "nickname": "The Viking",
    "battles": 17,
    "wins": 7,
    "losses": 6,
    "style": "Lyrical",
    "image": "/deeno.png",
    "bio": "The Viking of the Gzone. Deeno brings raw power and commanding presence to every clash. Known for heavy disrespect, layered multi-syllabic writing and smooth flow switches, he combines versatility with aggression. Crowned with the unmistakable ginger beard, he steps into battles like a raider ready for war.",
    "weightClass": "Light Heavyweight",
    "height": "5'11\" (And a smidge)",
    "location": "Reading",
    "instagram": "deeno_viking",
    "tiktok": "deeno_viking",
    "quote": "I don't just battle, I conquer.",
    "badges": [
      "DEBUT WINNER",
      "GOLD STAR"
    ]
  },
  {
    "id": "ess2mad",
    "slug": "ess2mad",
    "name": "ESS2MAD",
    "realName": "Shadrac Ford",
    "battles": 2,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "/ess2mad.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "jm",
    "slug": "jm",
    "name": "JM",
    "realName": "Joseph Myrick",
    "battles": 9,
    "wins": 3,
    "losses": 5,
    "style": "Lyrical",
    "image": "/jm.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "jm.cdf"
  },
  {
    "id": "fendry",
    "slug": "fendry",
    "name": "FENDRY",
    "realName": "Fletcher Pendry",
    "battles": 10,
    "wins": 6,
    "losses": 2,
    "style": "Technical",
    "image": "/fendry.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "missink",
    "slug": "missink",
    "name": "MISSINK",
    "realName": "Leah Hawkings",
    "battles": 3,
    "wins": 2,
    "losses": 0,
    "style": "Lyrical",
    "image": "/missink.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "cucha",
    "slug": "cucha",
    "name": "CUCHA",
    "realName": "Bianca Teixeira",
    "battles": 7,
    "wins": 1,
    "losses": 5,
    "style": "Technical",
    "image": "/cucha.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "passive",
    "slug": "passive",
    "name": "PASSIVE",
    "realName": "Jakob Arnold",
    "battles": 12,
    "wins": 5,
    "losses": 3,
    "style": "Aggressive",
    "image": "/passive.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "passive_mp3"
  },
  {
    "id": "hunce",
    "slug": "hunce",
    "name": "HUNCE",
    "realName": "Haruun Abukar",
    "battles": 3,
    "wins": 0,
    "losses": 3,
    "style": "Versatile",
    "image": "/hunce.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "anbu-sensei",
    "slug": "anbusensei",
    "name": "ANBU SENSEI",
    "realName": "Elijah Njoku",
    "battles": 10,
    "wins": 4,
    "losses": 1,
    "style": "Technical",
    "image": "/anbusensei.png",
    "bio": "Anbu Sensei stands as a premier villain and perennial tournament contender within PenGame, defined by hyper-aggressive beat-riding momentum and ruthless, taboo-breaking disrespect. His greatest asset is venomous stage presence paired with a natural ear for UK tempo pockets. His standing is continually checked by predictable shock-value fallback, erratic breath control on extended schemes and severe structural fragility when rattled.",
    "profile": {
      "introduction": "Across PenGame, from early standalone clashes through a Cold War finals run and Champions League fixtures, Anbu Sensei has forged one of the league's most recognisable competitive identities. He operates as an unapologetic antagonist, fusing UK grime and drill flows with Japanese anime iconography, internet culture and devastating personal insults. His extensive body of work exposes a persistent artistic paradox: visceral charisma and rhythmic attack reliably electrify live crowds, while the writing often depends on interchangeable violence, repetitive family angles and frantic verbal resets when challenged. He remains an elite threat whose genuine technical ceiling is constrained by stubborn stylistic habits.",
      "sections": [
        {
          "title": "Structure and transitions",
          "body": "Anbu Sensei builds rounds around immediate kinetic momentum, opening with punchy declarative passages before accelerating into his preferred rhythmic pockets. Structural progression can suffer diminishing returns, beginning at maximum intensity before dissolving into disconnected couplets. Transitions rely heavily on reset phrases such as look, listen, hold on and yeah, yeah. When a stumble, interruption or flat punch threatens momentum, recovery is mechanical rather than fluid: he may stop, confront the distraction and restart a multisyllabic sequence from its opening bar instead of improvising through the lapse."
        },
        {
          "title": "Delivery and cadence",
          "body": "Sensei's delivery is weaponised, aggressive and closely connected to British sound-system culture. He thrives in standard grime and drill pockets, where percussive projection and sharp syllabic attack cut through heavy basslines and difficult venue acoustics. When locked in, he hammers the rhythm with concussive authority. Extended double-time passages and long breath sequences reveal the limitation: stamina can fade towards the close of a run, producing audible gasps, swallowed endings and clipped syllables. Unusual tempos also expose stiffness when his uniform high-register bark is not adjusted to the instrumental."
        },
        {
          "title": "Rhyme construction",
          "body": "At his sharpest, Sensei demonstrates sophisticated multisyllabic writing, stacking four- and five-syllable compound schemes and using internal rhyme to accelerate towards the punch. Under competitive pressure, however, his construction can regress into conservative sound families, repeated slant rhymes and safe suffixes with limited innovation. Familiar phonetic structures reappear across extended campaigns, suggesting a finite library of dependable patterns. His best multisyllabics are technically precise, but the baseline method prioritises cadence and immediate impact over consistently original rhyme architecture."
        },
        {
          "title": "Repetition and hooks",
          "body": "Sensei uses premeditated branding devices and crowd chants as theatrical anchors, rallying the room and reinforcing his identity. This calculated showmanship contrasts with defensive repetition during execution errors. When memory stalls, he can enter recursive loops, repeating entry words and fragmented bars while reconstructing the next sequence. Setup phrasing also recurs across tournaments, with familiar interrogative structures and self-defining declarations used against different opponents. His hooks demonstrate charisma; the unscripted repetition reveals memory strain and periods where the writing has exhausted its available routes."
        },
        {
          "title": "Vocabulary and diction",
          "body": "Sensei's lexicon combines London street vernacular with online terminology and combat vocabulary. Sentence construction is economical, designed for immediate impact rather than syntactic complexity. He can be sharply descriptive when targeting physical details, clothing or appearance, but the wider vocabulary remains constrained by a narrow rotation of abrasive profanity used to fill metre and cover breath recovery. The diction is direct and potent in a live room, yet structurally uniform, rarely displaying the lexical diversity or lateral conceptual range associated with the league's most cerebral writers."
        },
        {
          "title": "Angles and opponent focus",
          "body": "Sensei targets visible vulnerabilities with predatory focus, using relationships, employment, previous tournament defeats and physical insecurities to create tailored attacks. Against established rivals, this can produce memorable name flips and bespoke mockery. A considerable share of the material remains interchangeable, however. Generic street violence, firearm imagery and crude shock-value attacks on relatives repeatedly fill space that could be used for deeper opponent analysis. These stock routes dilute stronger customised sections. Sensei prefers blunt character assassination designed to shock rather than a sustained psychological dismantling of the person opposite him."
        },
        {
          "title": "References and imagery",
          "body": "Sensei's imagery draws heavily from Japanese anime, video games, UK consumer culture and British television. Naruto, Solo Leveling, Baki, Bleach, Skyrim and children's media appear beside football figures and familiar retailers. When integrated naturally, the references add vivid contemporary colour to his martial persona. At other times, the cultural name becomes a decorative substitute for original writing. Extended fictional schemes can detach the performance from direct competition and may require explanation before the room can follow them. The references strengthen his brand, but overuse narrows the range of imagery available beyond it."
        },
        {
          "title": "Themes and persona",
          "body": "Operating through the Sensei identity, he presents an unforgiving martial master disciplining inferior students. The thematic core combines dominance, villainy, financial superiority and social humiliation, often accompanied by claims to premier status within the league. Menacing authority is balanced by petty, caustic humour. The pursuit of shock value can become self-defeating when taboo subjects and extreme family attacks overpower the underlying craft. His hostility gives him unmistakable competitive gravity, but the persona remains largely one-dimensional, anchored in destruction and self-aggrandisement without much vulnerability or philosophical contrast."
        },
        {
          "title": "Performance under pressure",
          "body": "Sensei's response to adversity exposes a divide between outward bravado and underlying volatility. With crowd momentum, his pacing and authority can appear impenetrable. Indifference, sharp rebuttals or unexpected beat structures can break that control, producing memory slips, abrupt pauses, frustrated resets and side arguments with hosts, spectators or opponents. His spontaneous retorts can be sharply funny when they target something visible in the room, but seamless recovery remains inconsistent. Pressure often pushes his delivery towards frantic breathlessness and defensive theatrical outbursts rather than controlled improvisation."
        },
        {
          "title": "Limitations",
          "body": "Sensei's limitations are clearly defined. Structural sequences are vulnerable to disruption, with a small mistake capable of forcing a complete stanza restart. Crude shock value, repetitive sexual degradation and redundant family insults offer diminishing returns against elite opposition and discerning judges. Inconsistent breath management compromises the clarity of rapid multisyllabic passages near the ends of rounds. Interchangeable violence and niche fictional references can also prevent the more nuanced psychological analysis required to defeat varied tactical writers, leaving his ceiling dependent on brute-force execution."
        },
        {
          "title": "Strengths",
          "body": "Despite those limitations, Sensei remains a major live attraction. Menacing charisma commands attention before a line is delivered, while pocket control on authentic 140 BPM grime instrumentals gives punchlines a concussive snap and strong rhythmic bounce. His instinct for cruel observational comedy and sharp name flips can produce room-shaking reactions. Aggressive directness, a distinctive vocal identity and refusal to soften the villainous edge ensure that appearances feel consequential. At his best, the combination of rhythm, intimidation and humour makes him one of the league's most dangerous on-beat performers."
        },
        {
          "title": "Development and legacy",
          "body": "From developmental outings through a Cold War finals run and Champions League fixtures, Sensei's evolution reflects growing polish and stage authority. Timing has tightened, the villain persona has deepened and he has proved capable of carrying major venues. Fundamental issues in breath control, structural recovery and repetitive shock-value writing remain unresolved, but his contribution to league identity is substantial. He stands as a defining antagonist and gatekeeper: a beat-riding powerhouse whose presence tests the durability, composure and adaptability of every opponent placed in front of him."
        }
      ]
    },
    "instagram": "anbusenseii"
  },
  {
    "id": "domi-dusk",
    "slug": "domidusk",
    "name": "DOMI DUSK",
    "realName": "Dominick Boachie",
    "battles": 5,
    "wins": 1,
    "losses": 2,
    "style": "Lyrical",
    "image": "/domidusk.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "jaycee",
    "slug": "jaycee",
    "name": "JAYCEE",
    "realName": "Jordan Curtis",
    "battles": 9,
    "wins": 3,
    "losses": 3,
    "style": "Technical",
    "image": "/jaycee.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "trappy",
    "slug": "trappy",
    "name": "TRAPPY",
    "realName": "Daijarn Burrell",
    "battles": 9,
    "wins": 1,
    "losses": 1,
    "style": "Aggressive",
    "image": "/trappy.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "trappy_uk"
  },
  {
    "id": "ad",
    "slug": "ad",
    "name": "AD",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "/ad.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "che3kz",
    "slug": "che3kz",
    "name": "CHE3KZ",
    "realName": "Kerin Morris",
    "battles": 6,
    "wins": 2,
    "losses": 3,
    "style": "Aggressive",
    "image": "/che3kz.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "premeboi-j",
    "slug": "premeboij",
    "name": "PREMEBOI J",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "/premeboij.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "zen",
    "slug": "zen",
    "name": "ZEN",
    "realName": "Faris Sarwar",
    "battles": 8,
    "wins": 5,
    "losses": 2,
    "style": "Technical",
    "image": "/zen.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "lhlmzen"
  },
  {
    "id": "caveman",
    "slug": "caveman",
    "name": "CAVEMAN",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Aggressive",
    "image": "/caveman.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "rahika",
    "slug": "rahika",
    "name": "RAHIKA",
    "battles": 1,
    "wins": 1,
    "losses": 0,
    "style": "Lyrical",
    "image": "/rahika.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "ricko",
    "slug": "ricko",
    "name": "RICKO",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/ricko.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "karma10tnf",
    "slug": "karma10tnf",
    "name": "KARMA10TNF",
    "battles": 6,
    "wins": 1,
    "losses": 3,
    "style": "Aggressive",
    "image": "/karma10tnf.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "mr-benz",
    "slug": "mrbenz",
    "name": "MR.BENZ",
    "battles": 3,
    "wins": 0,
    "losses": 1,
    "style": "Versatile",
    "image": "/mrbenz.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "marcel",
    "slug": "marcel",
    "name": "MARCEL",
    "realName": "Callum Marcel",
    "battles": 7,
    "wins": 1,
    "losses": 3,
    "style": "Lyrical",
    "image": "/marcel.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "marcel_official_music"
  },
  {
    "id": "penno",
    "slug": "penno",
    "name": "PENNO",
    "realName": "Ryan Penno",
    "battles": 3,
    "wins": 1,
    "losses": 0,
    "style": "Technical",
    "image": "/penno.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "millz",
    "slug": "millz",
    "name": "MILLZ",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "/millz.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "foz",
    "slug": "foz",
    "name": "FOZ",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "/foz.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "rasiah",
    "slug": "rasiah",
    "name": "RA'SIAH",
    "realName": "Ross Walcott",
    "battles": 9,
    "wins": 4,
    "losses": 2,
    "style": "Lyrical",
    "image": "/rasiah.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "220",
    "slug": "220",
    "name": "220",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/220.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "kime",
    "slug": "kime",
    "name": "K.I.M.E",
    "realName": "Shakime Edwards-Walker",
    "battles": 4,
    "wins": 0,
    "losses": 2,
    "style": "Aggressive",
    "image": "/kime.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "2mwad",
    "slug": "2mwad",
    "name": "2MWAD",
    "realName": "Lance Pennant",
    "battles": 1,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/2mwad.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "mello",
    "slug": "mello",
    "name": "MELLO",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/mello.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "tapped24",
    "slug": "tapped24",
    "name": "TAPPED24",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "/tapped24.png",
    "bio": "PenGame Season 5 artist.",
    "instagram": "tapped24_"
  },
  {
    "id": "char-b",
    "slug": "charb",
    "name": "CHAR.B",
    "realName": "Charlie Brown",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/charb.png",
    "bio": "PenGame Season 5 artist."
  },
  {
    "id": "bonnie-godiva",
    "slug": "bonniegodiva",
    "name": "BONNIE GODIVA",
    "realName": "Jasmine Latty",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/bonniegodiva.png",
    "bio": "PenGame Cold War artist."
  },
  {
    "id": "jmuni",
    "slug": "jmuni",
    "name": "JMUNI",
    "realName": "Jaden Britton",
    "battles": 4,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/jmuni.png",
    "bio": "PenGame Cold War artist."
  },
  {
    "id": "lc",
    "slug": "lc",
    "name": "LC",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/lc.png",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "iffy",
    "slug": "iffy",
    "name": "IFFY",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/iffy.png",
    "bio": "PenGame Academy 2026 artist."
  },
  {
    "id": "star-co",
    "slug": "starco",
    "name": "STAR CO",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Versatile",
    "image": "/starco.png",
    "bio": "PenGame Academy 2026 artist."
  },
  {
    "id": "rp",
    "slug": "rp",
    "name": "TheRealRP",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "/rp.png",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "monroe",
    "slug": "monroe",
    "name": "MONROE",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Technical",
    "image": "/monroe.png",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "varntae",
    "slug": "varntae",
    "name": "VARNTAE",
    "battles": 2,
    "wins": 0,
    "losses": 1,
    "style": "Lyrical",
    "image": "/varntae.png",
    "bio": "PenGame 2026 Champions League artist.",
    "instagram": "varntaeofficial"
  },
  {
    "id": "eddfirst",
    "slug": "eddfirst",
    "name": "EDDFIRST",
    "realName": "Edward Hunt",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/eddfirst.png",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "zion",
    "slug": "zion",
    "name": "ZION",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/zion.png",
    "bio": "PenGame 2026 Champions League artist."
  },
  {
    "id": "rackz",
    "slug": "rackz",
    "name": "RACKZ",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/rackz.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "mz",
    "slug": "mz",
    "name": "MZ",
    "battles": 3,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/mz.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "relapse",
    "slug": "relapse",
    "name": "RELAPSE",
    "realName": "Jake Wilde",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "/relapse.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "guni",
    "slug": "guni",
    "name": "GUNI",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/guni.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "scotty",
    "slug": "scotty",
    "name": "SCOTTY",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Lyrical",
    "image": "/scotty.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "7wxve",
    "slug": "7wxve",
    "name": "7WXVE",
    "realName": "Torrin Mitchell",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/7wxve.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "s-kidz",
    "slug": "s-kidz",
    "name": "S'KIDZ",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/skidz.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "dyzz",
    "slug": "dyzz",
    "name": "DYZZ",
    "battles": 2,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/dyzz.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "jynx",
    "slug": "jynx",
    "name": "JYNX",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Technical",
    "image": "/jynx.png",
    "bio": "PenGame Academy artist."
  },
  {
    "id": "black-t",
    "slug": "blackt",
    "name": "BLACK T",
    "battles": 1,
    "wins": 0,
    "losses": 0,
    "style": "Aggressive",
    "image": "/blackt.png",
    "bio": "PenGame Season 4 artist who debuted against RENAYA. Known for aggressive delivery, wordplay and performance-focused writing."
  }
];

mcs.push({
  id: "brandz", slug: "brandz", name: "BRANDZ",
  battles: 0, wins: 0, losses: 0, style: "Unknown", image: "/brandz.png",
  bio: "PenGame battler appearing in the 2026 archive.",
});

const academyMcProfiles = [
  ["wizdom", "WIZDOM"],
  ["jayceii", "JAYCEII"],
  ["elz", "ELZ"],
  ["trickyy", "Trickyy"],
  ["ritchie-rich", "RITCHIE RICH"],
  ["jase", "JASE"],
  ["shelton", "SHELTON"],
  ["essmack", "ESSMACK"],
  ["grhymz", "GRHYMZ"],
  ["afrodon", "AFRODON"],
  ["h-star", "H STAR"],
  ["khaos-kayy", "KHAOS KAYY"],
  ["leo-mg", "LEO MG"],
  ["kie5", "KIE5"],
  ["zanotti", "ZANOTTI"],
  ["zkay", "ZKAY"],
  ["selly-the-rapper", "SELLY THE RAPPER"],
  ["cv", "CV"],
  ["jsmih", "JSMIH"],
] as const;

mcs.push(
  ...academyMcProfiles.map(([id, name]) => ({
    id,
    slug: getMcProfileSlug(id),
    name,
    battles: 0,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: `/${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`,
    bio: id === "trickyy" ? "PenGame Academy artist, also competing as Tricksta in Clash Money." : "PenGame Academy artist.",
    ...(id === "trickyy" ? { nickname: "Tricksta" } : {}),
  })),
  {
    id: "jm-clash-money",
    slug: "jm-clash-money",
    name: "JM",
    nickname: "Clash Money",
    battles: 7,
    wins: 0,
    losses: 0,
    style: "Grime",
    image: "/hero-archives-emblem.png",
    bio: "Clash Money MC from the 2015–2016 era, competing across main stage and Trials events.",
  },
);

const season2025McProfiles = [
  ["rizzy-raps", "RIZZY RAPS"],
  ["zoellz", "ZOELLZ"],
  ["crai-g", "CRAI-G"],
  ["cojay", "COJAY"],
  ["tek", "TEK"],
] as const;

mcs.push(
  ...season2025McProfiles.map(([id, name]) => ({
    id,
    slug: getMcProfileSlug(id),
    name,
    battles: 0,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: `/${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`,
    bio: "PenGame 2025 artist.",
  })),
);

const gzoneMcProfiles = [
  ["1flaymr", "1FLAYMR", "1flaymah_music"],
  ["ajna", "AJNA"],
  ["badee-harz", "BADEE HARZ"],
  ["btizz", "BTIZZ", "bt1zz"],
  ["cj-zino", "CJ ZINO", "cj.zino"],
  ["deluxx", "DELUXX"],
  ["ldn-mikez", "LDN MIKEZ"],
  ["nattyebk", "NATTYEBK"],
  ["pr1nc3", "PR1NC3", "itzyaboy_pr1nc3"],
  ["proty", "PROTY"],
  ["renzo", "RENZO"],
  ["roman", "ROMAN", "roman_official94"],
  ["ryno", "RYNO"],
  ["tymeless", "TYMELESS"],
  ["z-k", "Z.K"],
] as const;

mcs.push(
  ...gzoneMcProfiles.map(([id, name, instagram]) => ({
    id,
    slug: getMcProfileSlug(id),
    name,
    battles: 0,
    wins: 0,
    losses: 0,
    style: "Versatile",
    image: `/${name.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`,
    bio: "Gzone Season 1 artist.",
    ...(instagram ? { instagram } : {}),
  })),
);

for (const mc of mcs) {
  mc.image = mc.image.replace(/\.png$/i, ".webp");
}

type McRecord = {
  battles: number;
  wins: number;
  losses: number;
  scoredBattles: number;
};

const computeMcRecords = (battles: Battle[]): Map<string, McRecord> => {
  const records = new Map<string, McRecord>();

  for (const battle of battles) {
    const participants = Array.from(
      new Set([battle.mc1, battle.mc2, battle.mc3, battle.mc4].filter(Boolean) as string[]),
    );

    if (participants.length === 0) continue;

    const winners = Array.from(
      new Set(
        [battle.winner, battle.winner2].filter(
          (winner): winner is string => typeof winner === "string" && participants.includes(winner),
        ),
      ),
    );

    for (const mcId of participants) {
      const current = records.get(mcId) ?? { battles: 0, wins: 0, losses: 0, scoredBattles: 0 };

      current.battles += 1;
      if (winners.length > 0) {
        current.scoredBattles += 1;
        if (winners.includes(mcId)) current.wins += 1;
        else current.losses += 1;
      }

      records.set(mcId, current);
    }
  }

  return records;
};

const pengameRecordsById = computeMcRecords(pengameBattles);
const allRecordsById = computeMcRecords([...pengameBattles, ...gzoneBattles]);

const genericBioPattern = /^(PenGame|Gzone|Battle)(?: .*)? artist\.$/;

const getBattleParticipants = (battle: Battle): string[] =>
  [battle.mc1, battle.mc2, battle.mc3, battle.mc4].filter(Boolean) as string[];

const getMcDisplayName = (mcId: string): string =>
  mcs.find((mc) => mc.id === mcId)?.name ?? mcId.toUpperCase();

const formatMcSeasonLabel = (season: string): string =>
  /^\d/.test(season) ? `Season ${season}` : season;

const summarizeMcFromBattles = (mc: MC, battles: Battle[], fallbackBio: string): Pick<MC, "bio" | "quote"> => {
  if (!genericBioPattern.test(mc.bio)) return { bio: mc.bio, quote: mc.quote };

  const mcBattles = battles.filter((battle) => getBattleParticipants(battle).includes(mc.id));
  if (mcBattles.length === 0) return { bio: fallbackBio, quote: mc.quote };

  const seasons = Array.from(new Set(mcBattles.map((battle) => String(battle.season)))).slice(0, 3);
  const opponents = Array.from(
    new Set(
      mcBattles
        .flatMap((battle) => getBattleParticipants(battle))
        .filter((participant) => participant !== mc.id)
        .map(getMcDisplayName),
    ),
  ).slice(0, 4);
  const notableBar = mcBattles
    .flatMap((battle) => battle.notableBars ?? [])
    .find((bar) => !bar.performer || bar.performer.toLowerCase() === mc.name.toLowerCase());
  const analysis = mcBattles
    .flatMap((battle) => battle.performanceAnalysis ?? [])
    .find((item) => item.performer.toLowerCase() === mc.name.toLowerCase());
  const rawTheme = analysis?.lyricalThemes ? analysis.lyricalThemes.split(/[,;]/)[0]?.trim().toLowerCase() : undefined;
  const theme = rawTheme && rawTheme.length <= 60 ? rawTheme : undefined;
  const record = mc.wins + mc.losses > 0 ? `${mc.wins}-${mc.losses}` : `${mcBattles.length} battle`;
  const platform = mcBattles.some((battle) => battle.theme === "gzone") ? "Gzone" : "PenGame";
  const seasonText = seasons.length > 0 ? ` across ${seasons.map(formatMcSeasonLabel).join(", ")}` : "";
  const opponentText = opponents.length > 0 ? ` Notable clashes include ${opponents.join(", ")}.` : "";
  const styleText = theme ? ` His archive notes point to ${theme} as a recurring angle.` : "";

  return {
    bio: `${platform} battler with a ${record} recorded archive profile${seasonText}.${opponentText}${styleText}`,
    quote: mc.quote ?? notableBar?.bar,
  };
};

export const pengameMcs: MC[] = Array.from(pengameRecordsById.entries())
  .map(([mcId, record]) => {
    const base = mcs.find((mc) => mc.id === mcId);

    if (!base) {
      return {
        id: mcId,
        slug: getMcProfileSlug(mcId),
        name: mcId,
        battles: record.battles,
        wins: record.wins,
        losses: record.losses,
        scoredBattles: record.scoredBattles,
        style: "Unknown",
        image: `/${mcId.toLowerCase().replace(/[^a-z0-9]/g, "")}.webp`,
        bio: "PenGame artist.",
      };
    }

    const profile = {
      ...base,
      battles: record.battles,
      wins: record.wins,
      losses: record.losses,
      scoredBattles: record.scoredBattles,
    };
    const summary = summarizeMcFromBattles(profile, pengameBattles, "PenGame artist.");

    return {
      ...profile,
      ...summary,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const allMcs: MC[] = Array.from(allRecordsById.entries())
  .map(([mcId, record]) => {
    const base = mcs.find((mc) => mc.id === mcId);

    if (!base) {
      return {
        id: mcId,
        slug: getMcProfileSlug(mcId),
        name: mcId,
        battles: record.battles,
        wins: record.wins,
        losses: record.losses,
        scoredBattles: record.scoredBattles,
        style: "Unknown",
        image: `/${mcId.toLowerCase().replace(/[^a-z0-9]/g, "")}.webp`,
        bio: "Battle artist.",
      };
    }

    const profile = {
      ...base,
      battles: record.battles,
      wins: record.wins,
      losses: record.losses,
      scoredBattles: record.scoredBattles,
    };
    const summary = summarizeMcFromBattles(profile, [...pengameBattles, ...gzoneBattles], "Battle artist.");

    return {
      ...profile,
      ...summary,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));
