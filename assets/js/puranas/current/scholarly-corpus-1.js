/* Scholarly content pass: Brahma, Padma, Vishnu, Vayu and Shiva Puranas. */
(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    const key = `Purāṇa:${name}`;
    D[key] = Object.assign({}, D[name] || {}, D[key] || {}, data);
  };
  const ROCHER = {key:'rocher',title:'Ludo Rocher — The Puranas (1986)',detail:'Standard history-of-literature survey; especially useful for separating the history of Purana titles from the changing contents of received recensions.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'};
  const HAZRA = {key:'hazra',title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Foundational source-critical study of Puranic strata, quotations in legal digests, ritual history and chronology.',url:'https://books.google.com/books?id=Jar4V3piCeQC'};
  const clean = {
    overview:'',summary:'',contents:[],keyContents:[],namedFeatures:[],primaryPassages:[],
    profile:'',theology:'',philosophy:'',themes:[],teachings:[],
    reception:'',significance:'',dependencies:[],scholarlyPositions:[],scholarlyDebates:[],commentaries:[],
    ritualHistory:'',socialHistory:'',dharma:'',rituals:[],vratas:[],sacredGeography:[],pilgrimage:[],
    manuscripts:'',criticalEdition:'',edition:'',textualHistory:'',primaryEvidence:[],primaryRecensions:[],chapterMap:[],bibliography:[]
  };

  /* Brahma already has the deepest dossier in the corpus.  Keep its prose and
     only remove legacy list fields that the shared renderer used to append. */
  put('Brahma Purāṇa', Object.assign({}, clean, {
    sources:[
      ROCHER,HAZRA,
      {key:'schreiner',title:'Peter Schreiner and Renate Söhnen — Sanskrit Indices and Text of the Brahmapurana (1987)',detail:'Machine-readable/indexed Sanskrit text used with their analytical work on the received recension.'},
      {key:'soehnen',title:'Renate Söhnen and Peter Schreiner — Brahmapurana: Summary of Contents, with Index of Names and Motifs (1989)',detail:'Chapter-by-chapter analytical guide to the received Brahma Purana.'},
      {key:'trivedi',title:'Surabhi Trivedi — studies of the Brahma Purana and its sacred geography',detail:'Used for the internal structure, verse count and analysis of the Odisha and Gautami materials.'}
    ]
  }));

  put('Padma Purāṇa', Object.assign({}, clean, {
    sanskritTitle:'पद्मपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); transmitted through changing Suta-style frames and regional recensions',
    language:'Sanskrit',
    booksCount:'A very large multi-khanda corpus; common printed recensions divide it into five or six major khandas, but names, order and extent vary substantially.',
    verseCount:'Traditional catalogues often assign about 55,000 verses; surviving recensions differ so extensively that the traditional total is not a secure description of any one manuscript.',
    period:'A composite medieval textual tradition assembled over many centuries. Individual strata are earlier, while substantial pilgrimage, vrata and sectarian materials were still being expanded in the later first and early second millennium CE.',
    status:'Extant Mahapurana title with exceptionally unstable recension history. The “Padma Purana” of one region or edition can differ materially from another.',
    extent:'Cosmogony, dynastic myth, dharma, pilgrimage geography, vows, Vaishnava and Shaiva theology, Rama and Krishna traditions, and large regional mahatmyas coexist in different arrangements.',
    leadParagraphs:[
      'The Padma Purana is best understood not as one book written from beginning to end, but as a large Purana library transmitted under one prestigious title. Its printed recensions contain enormous bodies of pilgrimage, vrata, dharma and sectarian material, yet the division into khandas, their order and even the contents attached to a given khanda are not uniform across the manuscript tradition.',
      'That instability is historically useful. The text shows how Purana transmission could absorb regional sacred geography and new ritual priorities while continuing to present itself as ancient revelation. A passage about a pilgrimage circuit or a sectarian observance therefore has to be dated and interpreted as a textual unit; the title “Padma Purana” by itself is not a date.',
      'Modern scholarship consequently treats the Padma as a history of strata and recensions. Hazra compared its ritual chapters with quotations in medieval nibandhas, while Rocher stressed the difficulty of speaking about a single Padma Purana behind the very different received forms.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'No single composition date can responsibly be assigned to the Padma Purana. The title is old, but the surviving corpus contains materials that belong to different historical environments. Genealogical and cosmological passages may preserve older Purana traditions, while large blocks devoted to pilgrimage, vrata, sectarian polemic and regional temples belong to successive medieval redactions.',
        'Hazra’s source-critical method is particularly important here. He compared verses quoted as Padma Purana by medieval authors with the chapters found in surviving editions, and he treated ritual vocabulary, named authorities and relations to other texts as chronological evidence. The result is not one date but a map of relatively earlier and later chapters.',
        'The Uttarakhanda is an obvious warning against treating the entire corpus as one historical layer. It contains influential Vaishnava, ritual and sectarian materials, but its size and contents are recension-sensitive and many passages reflect later medieval religious debates. Statements about its date should therefore identify the passage or chapter rather than using the age of the Purana title as proof.'
      ]},
      {title:'Structure',paragraphs:[
        'Common editions divide the Padma into major khandas such as Srishti, Bhumi, Svarga, Patala and Uttara, with some traditions also transmitting a Kriyayoga or related division. This familiar table of contents is useful for locating a printed passage, but it should not be mistaken for a universally transmitted original architecture.',
        'The khandas themselves often behave like compilations. A cosmological discussion can be followed by an extensive mahatmya; a dharma passage can sit beside a pilgrimage itinerary or sectarian hymn. This is characteristic Purana “composition-in-transmission”: editorial growth occurs by adding, replacing and relocating blocks that already have their own purposes.',
        'For scholarly citation, the edition or recension matters as much as the khanda and chapter number. A chapter reference without an edition can be misleading when another printed Padma has a different sequence or lacks the passage entirely.'
      ]},
      {title:'Contents',paragraphs:[
        'The Padma’s contents are held together less by a single narrative plot than by the Purana claim to organize a sacred world. Creation myths, royal and divine genealogies and stories of Vishnu, Shiva and the Goddess provide a mythic frame, but much of the received corpus is concerned with how a person inhabits sacred time and sacred geography.',
        'Pilgrimage is therefore not a decorative appendix. Regional mahatmyas turn rivers, forests, temples and towns into extensions of pan-Indian myth by attaching them to divine acts, sages and ritual promises. The same mechanism allows the corpus to grow: a local sacred landscape can be incorporated into the Padma and thereby acquire Purana authority.',
        'Vratas, gifts, fasts, calendrical observances, food rules, worship and stories of exemplary devotees similarly convert theology into practice. Rather than listing these topics as unrelated “facts,” the text is better read as a technology for locating ordinary religious life inside a cosmic and mythic order.'
      ]},
      {title:'Theology',paragraphs:[
        'The received Padma contains powerful Vaishnava materials, including praise of Vishnu, Krishna, Rama and sacred names, but it is not historically uniform enough to be described as the product of one Vaishnava author. Shaiva, Shakta and broadly Brahmanical strata coexist, and their relative prominence changes by recension.',
        'Later sectarian passages sometimes classify Puranas, foods, practices or religious communities in polemical ways. Those passages are valuable evidence for medieval competition, but their presence should not be projected backward as the theology of every Padma stratum.',
        'A historical reading therefore distinguishes the theology of a specific khanda or mahatmya from the theology of the title as a whole. The Padma is a record of how different communities used Purana authority, not a perfectly harmonized creed.'
      ]},
      {title:'Critical edition',paragraphs:[
        'There is no single complete stemmatic critical edition that resolves the Padma Purana’s enormous recension problem. Modern printed Sanskrit editions represent particular editorial traditions and are indispensable witnesses, but they can create an illusion of a stable book where the manuscripts show substantial variation.',
        'Textual criticism must therefore proceed locally: compare manuscripts and editions for the khanda or mahatmya under study; record whether a passage is absent, relocated or expanded; and compare medieval quotations where available. A claim supported only by one late printed edition should be identified as such.',
        'The scale of variation also changes how translation should be used. English translations are access tools, not substitutes for checking the Sanskrit witness on which a passage is based.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Padma Purana became influential precisely because it could authorize many kinds of practice. Pilgrimage communities, Vaishnava traditions, vrata manuals and later dharma compilers drew on portions of the corpus, while regional transmission kept reshaping what counted as the Padma in practice.',
        'Its reception is consequently visible in quotation and ritual use as much as in commentary. When a medieval legal or ritual digest quotes a Padma verse, the quotation can also become evidence for the history of the Purana itself: it shows that a particular teaching circulated under that title by that date.',
        'Modern popular summaries often select the most sectarian or devotional passages and present them as the essence of the whole work. A scholarly article instead preserves the plurality of the corpus and asks which Padma, in which recension, is being cited.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'The Padma is a major source for the history of prescriptive Hindu practice: fasts, vows, gifts, pilgrimage, worship, purity rules and household duties occur throughout the received corpus. These materials show what compilers wished to authorize, not a statistical picture of how every community actually lived.',
        'Its mahatmyas are especially important for religious history because they join narrative persuasion to practical itineraries. Merit is attached to bathing, seeing, fasting, reciting or giving at specific times and places. This transforms geography into a ritual system and helps explain why regional additions could be so durable.',
        'Social and sectarian classifications in later strata must be dated before being generalized. A polemical medieval chapter can illuminate medieval boundary-making without becoming evidence for an unchanged “ancient Hindu law.”'
      ]},
      {title:'Further reading',paragraphs:[
        'Rocher provides the best compact orientation to the recension problem; Hazra is indispensable for the chronology of ritual chapters and for comparing the received text with medieval quotations. Detailed study should then move to the particular khanda, mahatmya or manuscript tradition relevant to the question.'
      ]}
    ],
    sources:[ROCHER,HAZRA]
  }));

  put('Viṣṇu Purāṇa', Object.assign({}, clean, {
    sanskritTitle:'विष्णुपुराणम्',traditionalAuthor:'Vyāsa (traditional attribution); framed primarily as Parāśara teaching Maitreya',language:'Sanskrit',
    booksCount:'Six amshas in the received text.',verseCount:'Traditional catalogues commonly assign 23,000 verses, but the extant Vishnu Purana is substantially shorter; verse totals depend on recension and counting.',
    period:'Layered Purana with a comparatively coherent received core. Much material is usually placed in the first millennium CE, while individual passages and redactions are earlier or later.',
    status:'Extant Mahapurana with a major modern critical edition by M. M. Pathak (Oriental Institute, Vadodara, 1997–1999).',
    extent:'Six-part synthesis of creation, cosmology, manvantaras, dynasties, Krishna narrative, dharma, Kali-yuga, dissolution and liberation.',
    leadParagraphs:[
      'The Vishnu Purana is one of the more tightly organized surviving Mahapuranas. In six amshas it moves from creation and cosmic structure through dynasties and Krishna’s career to Kali-yuga, dissolution and liberation. That coherence makes it unusually useful for seeing what a developed classical Purana can look like without assuming that every verse belongs to one historical moment.',
      'Its theology is explicitly Vaishnava, but the work is also a cosmological and dynastic archive. Vishnu is not merely one character among others: the cycles of creation and destruction, the succession of Manus and kings, and the Krishna narrative are arranged within a vision of Vishnu as the ground and governor of the whole process.',
      'Textually, the Vishnu Purana now has an advantage many Puranas lack: M. M. Pathak’s two-volume critical edition was prepared from a broad manuscript base and gives modern scholarship a more controlled Sanskrit text than reliance on one nineteenth-century printed recension.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'The Vishnu Purana is composite, but its received organization is more coherent than that of many enormous pilgrimage Puranas. Scholars have long tried to date its dynastic lists, sectarian vocabulary and relations to epic and Purana parallels. The safest conclusion is a first-millennium textual formation with different strata rather than one year of authorship.',
        'Relative chronology can be argued from passages shared with the Vayu, Brahmanda, Bhagavata, Harivamsha and other traditions, but verbal similarity alone does not always reveal the direction of borrowing. Purana compilers worked with a common reservoir of genealogical and mythic material that could be repeatedly revised.',
        'The Krishna book likewise has to be compared with the Harivamsha and later Bhagavata tradition as a distinct literary layer. Its form shows a mature Vaishnava synthesis, while the dynastic and cosmological books preserve materials with different histories.'
      ]},
      {title:'Structure',paragraphs:[
        'The six amshas give the work a recognizable architecture. The first treats creation and early myth; the second maps the world and cosmic regions; the third organizes Vedic branches, manvantaras and religious duties; the fourth gives dynastic history; the fifth narrates Krishna; and the sixth turns toward Kali-yuga, dissolution, suffering and liberation.',
        'This architecture is interpretively significant. The Krishna narrative is not a free-standing biography placed at the center of the book; it appears after the cosmic and dynastic order has prepared the Yadava line. The final amsha then places even Krishna’s historical world inside larger cycles of decline and cosmic dissolution.',
        'A critical edition does not make the six-book structure “unchanged from antiquity,” but it allows scholars to distinguish stable shared readings from later or regional variants much more carefully than older printed texts allowed.'
      ]},
      {title:'Contents',paragraphs:[
        'Creation in the Vishnu Purana is cyclical. Prakriti, cosmic intellect, elements, Brahma’s creative activity and successive creations are integrated with the larger rhythm of kalpas and manvantaras. Cosmography then converts this temporal order into spatial form through continents, oceans, mountains, worlds and astronomical cycles.',
        'The dynastic books connect mythic time with royal lineage. Solar and lunar genealogies lead toward the Kuru and Yadava worlds, making the Purana an important witness to the way genealogical tradition linked Vedic ancestry, epic narrative and regional kingship.',
        'The fifth amsha’s Krishna narrative covers birth, childhood, the defeat of Kamsa, conflicts with other rulers and the Yadava world. Read within the six-amsha whole, Krishna is both a narrative protagonist and the visible manifestation of the Vishnu whose cosmic identity has already been established.'
      ]},
      {title:'Theology',paragraphs:[
        'The work presents Vishnu as supreme without requiring every theological passage to use one philosophical vocabulary. Vishnu can be the personal Lord, the cosmic source, the indwelling principle and the power by which creation is sustained. Krishna’s identity is interpreted within this larger Vishnu theology.',
        'The Purana also makes room for other deities within a hierarchical but inclusive sacred cosmos. The point is not that religious difference disappears, but that the text’s Vaishnava supremacy is expressed through a Purana universe already populated by Brahma, Shiva, gods, sages and ritual traditions.',
        'Its liberation teaching combines devotion, knowledge and disciplined conduct. Later Vedanta communities could therefore read the Vishnu Purana as theological scripture as well as mythic history.'
      ]},
      {title:'Critical edition',paragraphs:[
        'M. M. Pathak’s Critical Edition of the Visnupuranam, published by the Oriental Institute in two volumes in 1997 and 1999, is a major advance in Purana textual criticism. It was constructed by collating a large manuscript collection rather than simply reprinting one regional edition.',
        'The critical edition should not be described as “the original Vishnu Purana.” Its purpose is to reconstruct a reasoned text from the manuscript evidence and to preserve rejected or variant readings in the apparatus. For passages where theology or chronology depends on one word, that apparatus can matter as much as the printed line.',
        'Older translations remain historically useful, but modern citation should identify whether the Sanskrit reading agrees with the critical text. This is especially important where popular translations derive from pre-critical printed recensions.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Vishnu Purana has had a long afterlife in Vaishnava theology, Purana comparison and modern reconstructions of Indian dynastic tradition. Its comparatively ordered narrative made it a favorite source for nineteenth- and twentieth-century surveys of Hindu cosmology and mythology.',
        'Its Krishna book belongs to the larger history of Krishna literature alongside the Harivamsha and Bhagavata Purana. Comparison among them reveals not one fixed biography but several strategies for integrating pastoral, heroic and theological Krishna traditions.',
        'Modern scholarship also uses the Purana as a control text for parallel passages in other Puranas. The existence of a critical edition makes such comparison more meaningful because scholars can ask whether a parallel belongs to the broadly attested text or only to a late printed variant.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'The third amsha links cosmology to institutions of Vedic transmission, life stages, duties and rites. These passages are prescriptive and should be compared with Dharmashastra and other Purana witnesses rather than treated as a direct report of everyday society.',
        'The text’s interest in kings, genealogies and Kali-yuga also creates a moral history of political order. Decline is narrated through failures of dharma and shortening religious capacity, a Purana interpretation of history rather than neutral chronicle.',
        'Devotional practice belongs within this normative world. Worship of Vishnu is not isolated from household, royal or cosmic duty; it gives those domains a theological center.'
      ]},
      {title:'Further reading',paragraphs:[
        'Use Pathak’s 1997–1999 critical edition for the Sanskrit text and apparatus. Rocher remains the standard compact survey of the Purana’s literary history, while comparison with the Harivamsha and Bhagavata is essential for the Krishna material.'
      ]}
    ],
    sources:[ROCHER,HAZRA,{key:'pathak',title:'M. M. Pathak, ed. — The Critical Edition of the Visnupuranam, 2 vols. (1997–1999)',detail:'Oriental Institute, Vadodara; constituted Sanskrit text and critical apparatus.',url:'https://books.google.com/books?id=BjwqAAAAYAAJ'}]
  }));

  put('Vāyu Purāṇa', Object.assign({}, clean, {
    sanskritTitle:'वायुपुराणम्',traditionalAuthor:'Vyāsa (traditional attribution); Vāyu is a principal divine speaker in the received tradition',language:'Sanskrit',
    booksCount:'Common editions transmit roughly 112 chapters, sometimes arranged into two parts; chapter division and attached materials vary.',
    verseCount:'Traditional catalogues commonly give about 24,000 verses; the extant text is considerably shorter and recension-sensitive.',
    period:'One of the older extant Purana textual traditions, with major early first-millennium material and substantial later redaction. The received text cannot be assigned one date.',
    status:'Extant Mahapurana in some traditional lists and closely related to the Brahmanda Purana; later additions include important pilgrimage materials.',
    extent:'Cosmogony, manvantaras, geography, astronomy, genealogies, royal dynasties, rites, yoga and sacred geography, with unusually important early genealogical material.',
    leadParagraphs:[
      'The Vayu Purana is especially important to historians because it preserves an old form of the genealogical and cosmological Purana tradition. Its lists of sages, Manus and royal dynasties overlap closely with the Brahmanda Purana and with material used by historians of early Indian lineage traditions. “Old,” however, describes important strata, not every chapter of the book now printed as the Vayu Purana.',
      'External references show that a Vayu Purana was known in the early medieval period, but the received text continued to change. The Gaya Mahatmya and other pilgrimage materials illustrate how an established Purana title could absorb later sacred geography without erasing its earlier core.',
      'The central scholarly problem is therefore textual identity: which parts belong to the old Vayu/Brahmanda genealogical tradition, which are later rearrangements, and which are regional additions? A good article must keep those questions visible instead of turning the text into a timeless list of myths.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'The Vayu is frequently placed among the older surviving Purana traditions because of its archaic genealogical material, its close relation to the Brahmanda, and early references to a text known by this title. None of those facts licenses a single date for the received 112-chapter form.',
        'Different units have different chronological profiles. Dynastic lists and cosmological schemes can preserve early common Purana material, while pilgrimage mahatmyas, ritual chapters and sectarian expansions may be centuries later. Hazra’s analysis of quotations and internal evidence is therefore more useful than assigning the whole text an undifferentiated century.',
        'The Gaya Mahatmya is a clear case of secondary growth. Its importance to the received text and to pilgrimage history is real, but it should be described as an attached or later stratum rather than used to date the genealogical core.'
      ]},
      {title:'Structure',paragraphs:[
        'Printed Vayu editions are commonly organized into approximately 112 chapters, sometimes grouped into two broad parts. The apparent linear sequence conceals distinct textual blocks devoted to creation, cosmic cycles, geography, genealogies, rites and pilgrimage.',
        'Comparison with the Brahmanda Purana is essential. Long stretches share order and content closely enough to point to a common textual history, yet neither surviving book can simply be called a copy of the other. Redaction, omission and expansion occurred on both sides.',
        'For that reason, chapter numbering should be tied to an edition and parallels should be compared at the Sanskrit level. A genealogical passage that occurs in both traditions may preserve older shared material even if its present chapter frame is later.'
      ]},
      {title:'Contents',paragraphs:[
        'The Vayu’s cosmological books organize creation, kalpas, manvantaras, continents, worlds and astronomical time in the characteristic Purana manner. This cosmic frame establishes the scale within which genealogies of gods, sages and kings operate.',
        'Its dynastic material is historically significant not because the Purana is a modern chronicle, but because it preserves how Brahmanical lineages remembered and ordered the past. Lists associated with the solar and lunar dynasties, sages and future kings became comparative evidence when Pargiter and later scholars studied Purana historical traditions.',
        'The text also includes rites, gifts, funerary and ancestral concerns, yoga and sacred places. These later practical layers show the transformation of an old cosmological-genealogical Purana into a broader religious compendium.'
      ]},
      {title:'Theology',paragraphs:[
        'The title Vayu does not make the received Purana a narrowly sectarian scripture of the wind god. Its sacred universe is broadly Brahmanical, and later Shaiva and other theological materials coexist with the cosmological frame.',
        'Theology is often expressed through hierarchy and cosmic function rather than through one sustained doctrinal treatise. Creation, dissolution, divine genealogy and yoga together define the relation between finite beings and the larger cosmic order.',
        'Sectarian labels should therefore be applied to specific strata. The old genealogical material and a later Shaiva devotional passage answer different historical questions even when copied in the same manuscript.'
      ]},
      {title:'Critical edition',paragraphs:[
        'The Vayu does not yet enjoy a universally adopted complete critical edition comparable to the BORI Mahabharata or Pathak Vishnu Purana. Printed editions remain necessary, but their chapter sequence and readings must be checked against manuscripts and against the closely related Brahmanda tradition.',
        'Textual criticism is especially important for the genealogies, where small changes in names or order can affect historical reconstruction. Older scholarship sometimes treated a convenient printed reading as if it were the stable Purana text; a modern article should signal recension uncertainty.',
        'Comparison with quotations in older authors and with parallel Purana passages offers another control. External attestation can show that a verse or topic circulated under the Vayu title before the date of a surviving manuscript.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Vayu became central to modern scholarship on Purana genealogy because its lists could be compared with the Matsya, Brahmanda, Vishnu and epic traditions. This scholarly use is itself part of the text’s reception history and should not be confused with the purposes of the Purana compilers.',
        'In traditional religious use, the text’s value was broader: cosmology, sacred narrative, rites and pilgrimage gave it continuing utility even as its older genealogical material acquired new frames.',
        'Its close relation to the Brahmanda also makes it an important case study in Purana textuality. The comparison demonstrates that Purana transmission is better modeled as branching, overlapping textual traditions than as eighteen immutable books.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'Ritual and dharma chapters provide evidence for prescriptive Brahmanical concerns, while the Gaya material documents the literary construction of a major ancestral-pilgrimage landscape. These are different historical layers and should not be homogenized.',
        'Genealogies likewise encode ideals of royal succession and cosmic legitimacy rather than neutral administrative records. Their historical value comes from comparison, stratification and external corroboration.',
        'The text is therefore useful to social history when read critically: it shows what kinds of lineage, ritual, kingship and sacred geography compilers wished to authorize, while leaving the question of lived practice to other evidence.'
      ]},
      {title:'Further reading',paragraphs:[
        'Rocher gives the best concise map of the Vayu’s textual problems. Hazra is important for chronology and ritual strata; older work on Purana genealogies should be checked against modern textual criticism rather than adopted uncritically.'
      ]}
    ],
    sources:[ROCHER,HAZRA]
  }));

  put('Śiva Purāṇa', Object.assign({}, clean, {
    sanskritTitle:'शिवपुराणम्',traditionalAuthor:'Vyāsa (traditional attribution); transmitted as multiple Shaiva samhitas under the Shiva Purana title',language:'Sanskrit',
    booksCount:'Modern “complete” editions arrange several samhitas, but manuscript transmission often preserves individual samhitas and shorter recensions independently.',
    verseCount:'Traditional Purana catalogues give large ideal verse totals; extant recensions differ too much for one number to describe the historical manuscript tradition.',
    period:'Predominantly medieval Shaiva compilation with layers of different date. Hazra argued that much of one major printed recension is no earlier than the tenth century and another received recension is later still.',
    status:'Extant Shaiva Mahapurana title with a particularly complicated history of separate samhitas, shorter recensions and modern printed recombination.',
    extent:'Shaiva cosmogony and myth, linga theology, Shiva-Parvati narratives, devotion, pilgrimage, vrata, mantra, yoga and liberation across multiple transmitted samhitas.',
    leadParagraphs:[
      'The Shiva Purana is a case where the modern printed “book” can actively mislead. Recent manuscript-based research emphasizes that premodern readers often encountered individual samhitas, or shorter combinations of them, rather than the same complete set printed in twentieth-century editions. The history of the title is therefore a history of several related Shaiva compilations.',
      'Its subject is Shiva’s supremacy, but the theological argument is built through narrative, ritual and sacred geography as much as through abstract doctrine. Linga worship, the marriage of Shiva and Parvati, births and battles, devotional observance and liberation teachings all help define what it means for Shiva to be the ultimate Lord.',
      'A scholarly reading must separate three things that popular summaries often collapse: the traditional claim of primordial revelation, the medieval formation of particular samhitas, and the much later editorial act of printing selected samhitas as one coherent Shiva Purana.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'The Shiva Purana cannot be dated as one composition. R. C. Hazra argued that most sections of the recension printed by the Vangavasi Press in 1908 could not be earlier than the tenth century, while the recension represented by the 1906 Venkateshvara Press edition appears later, probably fourteenth century or after in important respects.',
        'These dates concern received recensional forms, not every myth they contain. Stories of Daksha, Shiva’s marriage, the linga, Skanda and other subjects circulated in much older Sanskrit traditions. Medieval compilers inherited, reorganized and theologized material rather than inventing the entire Shaiva mythic world at once.',
        'Manuscript transmission makes relative dating more secure than a single absolute date. When one samhita circulates independently or a shorter recension lacks material present in a printed “complete” edition, the difference becomes evidence for growth and recombination.'
      ]},
      {title:'Structure',paragraphs:[
        'Modern editions often present a sequence of named samhitas as if they were chapters of one stable ancient book. Manuscript catalogues tell a different story: single samhitas are common, and shorter combinations can represent historically important recensions.',
        'The samhita is therefore the correct first unit of analysis. Each compilation can have its own narrative frame, theological emphasis and ritual interests. A statement about “the Shiva Purana” should identify which samhita and recension supplies it whenever possible.',
        'This structure also explains apparent repetition. Multiple accounts of Shiva’s deeds are not necessarily careless duplication by one author; they can be traces of separate textual units that were later collected beneath the same Purana title.'
      ]},
      {title:'Contents',paragraphs:[
        'The corpus repeatedly narrates Shiva through cycles of cosmic manifestation and family myth. Brahma and Vishnu, the appearance of the linga, Sati and Daksha, Parvati’s austerities and marriage, Ganesha, Skanda and battles with demons establish Shiva’s relation to creation, divine hierarchy and the household.',
        'Ritual chapters translate those narratives into worship. Linga installation, mantra, vrata, pilgrimage and the praise of sacred places make the Purana usable as religious instruction rather than merely a mythology collection.',
        'The same text can move from dramatic myth to yoga and liberation because Shaiva supremacy is being articulated across several registers: Shiva is a deity with stories, the object of worship, the source of mantra and the ultimate reality sought through knowledge.'
      ]},
      {title:'Theology',paragraphs:[
        'Shiva is the supreme Lord of the corpus, but supremacy is argued in several ways. Myths place other gods within Shiva’s power; linga theology presents a form that exceeds ordinary anthropomorphic limitation; devotional chapters make grace and worship central; philosophical sections identify liberation with knowledge of the highest Shiva.',
        'The relation between Shiva and Shakti is equally important. Parvati is not merely a narrative spouse: creation, divine power and ritual efficacy increasingly depend on the inseparability of Lord and power. Later Shaiva and Shakta vocabularies intersect within this medieval Purana environment.',
        'Because the samhitas are layered, no single metaphysical formula should be imposed on all of them. The corpus is better read as a Shaiva theological archive than as a systematic treatise by one philosopher.'
      ]},
      {title:'Critical edition',paragraphs:[
        'There is no complete modern critical edition that has established a single stemma for all Shiva Purana samhitas. Recent scholarship instead emphasizes the need to reconstruct transmission from Sanskrit manuscript catalogues, separate samhita witnesses, shorter recensions and early translations.',
        'This changes the status of popular printed editions. They are real and influential witnesses, but they may combine materials that did not circulate together in earlier centuries. Their table of contents cannot automatically be projected backward as the ancient structure of the work.',
        'The eighteenth-century Persian Shiv Puran studied in recent Oxford scholarship is valuable precisely because translation becomes textual evidence: comparison with Sanskrit manuscripts reveals a shorter recension and helps recover forms of the Purana obscured by later print culture.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Shiva Purana belongs to a broad Shaiva Purana environment that includes the Linga and Skanda traditions, local mahatmyas and temple-centered textual cultures. Its myths and ritual instructions fed later vernacular storytelling and popular Shiva devotion even where readers did not possess a complete Sanskrit manuscript.',
        'Early modern translation is an especially revealing form of reception. A Persian rendering shows that Hindu patrons and translators could transmit Shaiva devotional literature outside a Sanskrit-only setting and outside the familiar story of Mughal court translation.',
        'Modern print then created another reception layer by standardizing selected samhitas into affordable “complete” books. The very idea that there is one fixed Shiva Purana on a shelf is partly a product of that editorial history.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'The corpus is rich in prescriptive ritual: linga worship, consecration, vows, gifts, fasts, pilgrimage, mantra and devotional observance. These passages are evidence for how medieval Shaiva authors authorized practice, not proof that every Shaiva community followed one uniform manual.',
        'Narratives of marriage, asceticism and household life also negotiate a central Shaiva tension: Shiva is the exemplary yogin who nevertheless becomes husband and father. The Purana uses that tension to integrate renunciatory power with household and temple religion.',
        'Regional sacred geography shows the same integrative process. Local places can be inserted into Shiva’s cosmic biography and thereby become part of a larger pan-Indian sacred map.'
      ]},
      {title:'Further reading',paragraphs:[
        'Rocher and Hazra remain necessary for the older scholarship, but manuscript history should be updated with recent work on the Persian translation and the Sanskrit samhita tradition. Any future detailed study should cite the exact recension rather than “Shiva Purana” generically.'
      ]}
    ],
    sources:[ROCHER,HAZRA,{key:'fleming',title:'Benjamin Fleming — “Persian Translation of Sivapurana and Eighteenth-Century North Indian Saivism”',detail:'Journal of Hindu Studies article using Persian translation, Sanskrit manuscripts and catalogues to reconstruct the muddled transmission history of the Shiva Purana.',url:'https://academic.oup.com/jhs/article/18/1/31/7991035'}]
  }));
})();