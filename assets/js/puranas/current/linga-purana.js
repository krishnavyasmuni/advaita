(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Liṅga Purāṇa', {
    sanskritTitle:'लिङ्गपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); Sūta/Lomaharṣaṇa teaches the sages at Naimiṣāraṇya and reports discourses concerning the Iśāna kalpa',
    language:'Sanskrit',
    booksCount:'Two parts and 163 extant chapters: Pūrvabhāga 108 and Uttarabhāga 55; the final verse of the received text still describes an Uttarabhāga of only 46 chapters',
    verseCount:'11,000 ślokas in the Purāṇa’s own traditional extent statement; chapter and verse totals vary among printed and manuscript witnesses',
    period:'Composite Śaiva text whose older core is variously placed between the fifth and tenth centuries CE. The received two-part recension grew over time, and at least nine Uttarabhāga chapters postdate the shorter form remembered by the text itself.',
    status:'Extant Mahāpurāṇa in multiple versions. The 108+55 chapter printed recension is the normal reference text, but its internal 46-chapter Uttarabhāga total is direct evidence of expansion.',
    extent:'Pūrvabhāga ranges across liṅga theology, creation, cosmic time, Śiva’s manifestations, dynasties, geography, astronomy, pilgrimage, ritual, Yoga and myth. Uttarabhāga adds Vaiṣṇava praise, Pāśupata and liṅga rites, dharma, cosmology, mantra, sacred places and liberation teaching.',
    primaryRecensions:[
      'Common two-part recension — Pūrvabhāga 108 chapters and Uttarabhāga 55, basis of J. L. Shastri’s two-volume English translation.',
      'A shorter Uttarabhāga remembered at 2.55.37 as forty-six chapters, establishing that nine chapters or their equivalent entered after that extent notice took shape.',
      'Manuscript and print variants in ritual, pilgrimage and concluding materials; the entire Uttarabhāga has sometimes been treated as a secondary attachment to an older first part.',
      'The Sanskrit text accompanied in some editions by the Śivatoṣiṇī commentary, whose own remarks recognize that the received order does not fully follow the internal contents list.'
    ],
    leadParagraphs:[
      'The Liṅga Purāṇa is a Śaiva Mahāpurāṇa named for the liṅga as the “sign” through which the signless Lord becomes manifest. Its best-known myth is the immeasurable fiery column before Brahmā and Viṣṇu, but the text’s theology is wider: Śiva is beyond colour, taste, touch and change, while the entire visible cosmos is a field of signs in which consciousness and creative power can be worshipped.',
      'The received work has two parts and 163 chapters. Pūrvabhāga’s 108 chapters move from creation and cosmic time through astronomy, dynasties, sacred geography, Vārāṇasī, Śiva mythology, Pāśupata Yoga and ritual. Uttarabhāga has 55 chapters, although its final extent statement says forty-six. That mismatch is unusually transparent evidence that the Purāṇa continued to grow.',
      'The title does not mean the book treats only an icon. It is an encyclopedia of medieval Śaiva religion: installation of liṅga and Nandin, mantra, vows, eclipse bathing, tīrtha, śrāddha, gifts, ethics, hells, royal and divine narratives, Sāṃkhya-shaped cosmology, devotion to Śiva and honour for Viṣṇu and Brahmā all enter the same textual world.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'No single date fits all 163 chapters. Estimates for the oldest core range from the fifth to the tenth century CE, reflecting differences among cosmological, genealogical, ritual, pilgrimage and sectarian materials. The work’s own chapter-count problem proves accretion without supplying a calendar date for each addition.',
          'R. C. Hazra’s ritual-historical method places substantial received Śaiva and Dharma material in the early medieval period and isolates later developments by quotation, cult practice and intertextual comparison. Rocher consequently summarizes a broad chronology rather than assigning one author and year.',
          'Pūrvabhāga preserves older Purāṇic reservoirs—creation, manvantaras, solar and lunar lines, Vasiṣṭha and Viśvāmitra, Kṛṣṇa’s end and standard cosmography—alongside developed liṅga, Pāśupata and tīrtha teaching. Inherited antiquity of a story cannot date the chapter that incorporates it.',
          'Uttarabhāga is structurally later in its received form. At 2.55.37 the text declares that the second part contains forty-six chapters although fifty-five are transmitted. The simplest inference is that a shorter conclusion was retained after at least nine chapters or their textual equivalent had been inserted.',
          'The correct historical description is therefore an old and repeatedly reworked Śaiva-Purāṇic compilation, with a first part of mixed strata and a second part whose growth can be seen from internal numerical evidence.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'The common recension is divided into Pūrvabhāga, 108 chapters, and Uttarabhāga, 55 chapters. Traditional extent notices assign 11,000 verses. Modern editions and translations generally preserve this 108+55 numbering even when manuscripts differ in smaller details.',
          'An internal summary near the beginning ranges across the whole Purāṇa: creation from Pradhāna, Brahmā, Viṣṇu and Rudra, cosmic time, dynasties, Śiva’s manifestations, liṅga worship, Vārāṇasī and other holy places, Yoga, dharma, śrāddha, mantra, Viṣṇu’s descents, Kṛṣṇa, cosmic wars and liberation. The Śivatoṣiṇī commentary already observes that the received order does not perfectly follow this advertised sequence.',
          'The first part is not a single narrative. Short doctrinal and ritual clusters interrupt genealogies; geography and astronomy stand beside myth; chapters on Vārāṇasī or Pāśupata practice have the scale of independent manuals. The second part likewise combines Vaiṣṇava praise, Śaiva rites, normative dharma and philosophy.',
          'The speaking frame gives the collection ritual coherence. Sūta recites what was heard in authoritative divine and sage dialogues, making transmission itself a sacred act even when the book preserves visible seams.'
        ],
        subsections:[
          {title:'Major textual movements',bullets:[
            'Pūrvabhāga 1–25 — Naimiṣa frame, traditional extent, creation, cosmic time, Śiva’s twenty-eight Yogācārya manifestations, liṅga and early mythology.',
            'Pūrvabhāga 26–54 — sages and dynasties, Vasiṣṭha–Viśvāmitra materials, dharma, śrāddha, divine narratives and cosmological teaching.',
            'Pūrvabhāga 55–61 — sun, moon, planets, stars, time and astronomy in a mythic cosmology.',
            'Pūrvabhāga 62–76 — terrestrial and cosmic geography, continents, mountains, rivers, dynastic and divine matter.',
            'Pūrvabhāga 77–95 — Vārāṇasī, Kedāra, Prayāga, Kurukṣetra and other tīrthas; ethics, Pāśupata Yoga and religious observance.',
            'Pūrvabhāga 96–108 — Śiva’s battles and manifestations, Dakṣa, Kāma, Umā, Nandi, Upamanyu, Pāśupata vow and concluding praise.',
            'Uttarabhāga 1–55 — Nārāyaṇa and Viṣṇu, Pāśupata and liṅga ritual, mantra, gifts, dharma, sacred geography, Yoga and the forty-six-versus-fifty-five chapter seam.'
          ]}
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'The Purāṇa’s contents are best read as thematic clusters rather than a continuous plot. The following map follows the common two-part printed text and uses chapter ranges only where they are stable and useful.'
        ],
        subsections:[
          {
            title:'Creation, the signless and the manifested liṅga',
            paragraphs:[
              'The text begins from Pradhāna and the cosmic egg. Brahmā, Viṣṇu and Rudra emerge within a universe of guṇas, time and repeated creation, but Śiva as the supreme ground is not limited to any one created function.',
              'When Brahmā and Viṣṇu dispute supremacy, an endless liṅga of fire appears. Their failed search for its top and bottom discloses a reality beyond measurement. The liṅga is therefore not merely a cult object: it is the manifested sign of what is alinga—without sign, quality or boundary.',
              'Sāṃkhya vocabulary gives the symbolism precision. Liṅga can name subtle, manifest or generative nature; Liṅgin is the conscious Lord who possesses and transcends it. Icon, cosmos, matter and spirit are joined without making Śiva reducible to material form.'
            ]
          },
          {
            title:'Cosmic time, teachers and genealogies',
            paragraphs:[
              'Kalpas, manvantaras, yugas and the days and nights of Brahmā place human action within repeated cosmic cycles. The Purāṇa names twenty-eight Vyāsas and corresponding manifestations of Śiva as Yoga teachers, turning textual transmission into part of cosmic history.',
              'Prajāpatis, sages and dynasties connect cosmogony to social and royal time. Vasiṣṭha, Viśvāmitra, Śakti, Parāśara, Vyāsa and Śuka form a lineage of conflict, grief and sacred knowledge. Solar and lunar genealogies lead toward epic and Kṛṣṇa traditions.',
              'The end of the Yādavas and Kṛṣṇa’s departure are narrated within a Śaiva hierarchy: Viṣṇu’s descents are honoured as divine play, yet Kṛṣṇa and Viṣṇu repeatedly propitiate Rudra. Such passages express sectarian ranking without erasing Vaiṣṇava mythology.'
            ]
          },
          {
            title:'Astronomy, geography and sacred space',
            paragraphs:[
              'Pūrvabhāga 55–61 describes sun, moon, planets, stars and their motions through a Purāṇic astronomical model. Calendrical and mythic explanations serve ritual time as much as physical observation.',
              'The earth is organized into continents, oceans, mountains, rivers and regions. Sacred geography then selects places where cosmic power is ritually concentrated. Vārāṇasī receives exceptional praise, while Kedāra, Prayāga, Kurukṣetra and many Śaiva and Vaiṣṇava shrines create a wider pilgrimage network.',
              'A tīrtha is both location and narrative. Bathing, gift, vow and vision work because a myth of Śiva, a sage or another deity has made the site a crossing between ordinary and divine worlds.'
            ]
          },
          {
            title:'Śiva myth and divine conflict',
            paragraphs:[
              'Dakṣa’s sacrifice, Satī, Kāma’s burning, Umā’s tapas, Kārttikeya, Nandi, Andhaka and Jālandhara all appear in forms shared with the wider Śaiva-Purāṇic tradition. The Purāṇa also recounts Śiva’s destruction of demonic powers and Viṣṇu’s acquisition of the Sudarśana discus through Rudra’s grace.',
              'Upamanyu becomes the exemplary devotee and teacher of Pāśupata observance. His hunger, austerity and vision translate theology into the experience of dependence on Śiva’s grace.',
              'The stories repeatedly stage paradox: the ascetic Lord marries and fathers sons; the destroyer grants life and liberation; dangerous boons flow from impartial compassion; gods who appear to compete are situated within one cosmic order.'
            ]
          },
          {
            title:'Pāśupata Yoga, ethics and liberation',
            paragraphs:[
              'Pāśupata Yoga appears in several chapters rather than one isolated manual. Restraint, meditation, ash, mantra, vow, knowledge of the Lord and detachment from bodily identity aim to loosen the bonds of the paśu, the individual soul.',
              'The Purāṇa praises ahiṃsā and says violence should be avoided everywhere, yet another polemical chapter imagines violent defence against denigration of Śiva. The tension is historically important: encyclopedic scripture can preserve incompatible ethical rhetoric from different milieus.',
              'Liberation teaching distinguishes ignorance and activity from perfect knowledge. Devotion and ritual purify, Yoga concentrates, and knowledge granted by the Lord reveals the self’s relation to Śiva. Release is thus grace-shaped but demands disciplined practice.'
            ]
          },
          {
            title:'Uttarabhāga: ritual synthesis and expansion',
            paragraphs:[
              'The second part begins with extensive praise of Nārāyaṇa and Viṣṇu before returning to Śaiva practice. This is not an accidental contradiction: Purāṇic sectarianism can honour another deity in detail while ultimately placing all divine power within Śiva’s sovereignty.',
              'Liṅga installation, Nandin, the five-syllable mantra, Pāśupata vow, gifts, purity, food, expiation, śrāddha, sacred places and Yoga form a practical compendium. Household, temple and ascetic disciplines coexist.',
              'The concluding chapter’s claim that Uttarabhāga has forty-six chapters, against the fifty-five transmitted, preserves the history of this compendium’s enlargement. The added materials should be studied individually rather than dismissed merely because they are secondary.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'The central distinction is between alinga, the unmanifest and signless, and liṅga, the sign or subtle manifestation. Śiva is the Liṅgin, possessor and ground of every sign. The cosmos is real as his manifestation but cannot contain or measure him.',
          'The fiery pillar narrative gives this metaphysics a dramatic form. Brahmā and Viṣṇu are unable to reach its ends; worship begins where conceptual and spatial mastery fail. A finite liṅga can therefore disclose infinity precisely because it is acknowledged as sign rather than exhaustive portrait.',
          'Śiva and Śakti join consciousness to creative nature. The union of Liṅgin and liṅga can be described with Puruṣa–Prakṛti and Sāṃkhya categories, but the Purāṇa transforms those categories theistically: nature’s evolution proceeds under the Lord’s power and liberation depends on knowledge and grace.',
          'Viṣṇu and Brahmā are honoured, and Uttarabhāga includes sustained Vaiṣṇava material. Śaiva supremacy is asserted through origin, boon and worship narratives rather than through exclusion of every other deity. The result is hierarchical inclusivism characteristic of many sectarian Purāṇas.',
          'Ritual, Yoga and knowledge form one path. Liṅga worship, mantra, tīrtha and vrata engage body and community; Pāśupata Yoga detaches the practitioner from bonds; knowledge recognizes the signless Lord behind the manifested universe.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'No complete stemmatic critical edition has reconstructed all Liṅga Purāṇa manuscripts. The common 108+55 Sanskrit text and its printed derivatives remain the practical reference, but variant chapters and the internal extent problem require edition-specific citation.',
          'J. L. Shastri’s two-volume English translation, Ancient Indian Tradition and Mythology volumes 5–6, follows a received Sanskrit recension and supplies introductions and notes. The first volume covers Pūrvabhāga 1–95; the second completes Pūrvabhāga 96–108 and translates Uttarabhāga 1–55.',
          'The Śivatoṣiṇī commentary printed with some witnesses is text-historically valuable. Its response to the internal contents list acknowledges that advertised order and received sequence do not fully agree—evidence that readers before modern scholarship already confronted the composite book.',
          'The statement at 2.55.37 is the strongest internal control: forty-six chapters are claimed where fifty-five exist. A critical edition would need to determine whether the extra nine form one addition, several insertions or a renumbering around an older conclusion.',
          'Digital editions and popular summaries often reproduce the common translation. They are useful for search and access but should not be described as manuscript collation or proof that every surviving witness has identical wording.'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Purāṇa is a major witness to the intellectual interpretation of the liṅga. It joins aniconic worship to Sāṃkhya categories, cosmic creation and the theology of transcendence, shaping modern as well as traditional explanations of the emblem as far more than a simple anthropomorphic substitute.',
          'Its Vārāṇasī, Kedāra and other tīrtha chapters participate in the formation of pan-Indian Śaiva pilgrimage. Local places are linked to cosmic myths and repeatable rites, allowing regional sanctuaries to become manifestations of one universal Lord.',
          'Narrative blocks share material with Śiva, Skanda, Vāyu, Kūrma and other Purāṇas, while ritual chapters stand in conversation with Pāśupata and Āgamic Śaivism. Direction of borrowing must be decided passage by passage; the Liṅga title alone does not guarantee priority.',
          'The lists of twenty-eight Yogācārya manifestations and of Vyāsas became important for Śaiva sacred history. They place teachers and textual transmission inside cyclical time and legitimate a lineage of Yoga as Śiva’s recurring intervention.',
          'Modern readers often approach the book through its fiery pillar or mythic chapters. The full received text is equally an archive of astronomy, geography, śrāddha, diet, gifts, expiation and philosophy; its historical influence cannot be reduced to icon theology.'
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'Installation and worship of liṅga and Nandin organize the central ritual system. Ablution, flowers, incense, lamp, food, mantra, circumambulation and calendrical observance turn the metaphysical sign into a daily and temple practice.',
          'Pāśupata disciplines use ash, vow, bodily restraint, meditation and knowledge. The text connects those ascetic signs with householder devotion rather than isolating two wholly separate communities. Upamanyu’s narrative gives disciplined dependence on Śiva an exemplary life.',
          'Dharma chapters treat śrāddha, the five sacrifices, food, purity, sexual and reproductive conduct, caste, expiation, gifts, hells and post-mortem consequence. These are normative records of particular Brahmanical-Śaiva redactors, not transparent descriptions of all early-medieval society.',
          'Pilgrimage and public piety widen practice beyond the home. Bathing at eclipses, visiting Vārāṇasī or Kedāra, giving food and wealth, hearing scripture and installing an emblem promise merit accessible through movement and patronage.',
          'Ethical plurality must remain visible. Strong praise of non-violence stands beside severe sectarian defence of Śiva’s honour. Historical interpretation should neither harmonize the contradiction away nor treat one passage as the only voice of the 163-chapter corpus.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, for chapter strata and Śaiva ritual history.',
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3, Wiesbaden, 1986, pp. 187–188.',
          'J. L. Shastri, trans., The Liṅga Purāṇa, 2 vols., Ancient Indian Tradition and Mythology 5–6.',
          'Stella Kramrisch, The Presence of Śiva, especially the discussion of liṅga, alinga, Puruṣa and Prakṛti.',
          'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology, for comparative Purāṇic narrative and textual method.'
        ]
      }
    ],

    chapterMap:[
      'Pūrvabhāga 1–25 — creation, time, Yogācāryas, liṅga and early Śiva mythology.',
      'Pūrvabhāga 26–54 — sages, dynasties, dharma, śrāddha, divine narratives and cosmology.',
      'Pūrvabhāga 55–61 — astronomy of sun, moon, planets and stars.',
      'Pūrvabhāga 62–76 — cosmic and terrestrial geography and genealogical continuations.',
      'Pūrvabhāga 77–95 — tīrthas, ethics, Pāśupata Yoga and observance.',
      'Pūrvabhāga 96–108 — Dakṣa, Kāma, Umā, Nandi, Upamanyu, battles and Pāśupata vow.',
      'Uttarabhāga 1–55 — Vaiṣṇava praise, Śaiva ritual, mantra, dharma, pilgrimage, Yoga and the shorter forty-six-chapter extent notice.'
    ],
    ritualHistory:'A major synthesis of liṅga installation, temple and household pūjā, Pāśupata asceticism, pilgrimage, mantra, śrāddha and normative dharma; the expanded Uttarabhāga shows practical material continuing to accumulate.',
    rituals:['Liṅga and Nandin installation','Ablution, offering and mantra','Five-syllable namaḥ śivāya practice','Pāśupata vow, ash and Yoga','Vārāṇasī, Kedāra, Prayāga and Kurukṣetra pilgrimage','Eclipse bathing, gifts and śrāddha','Purity, food and expiation'],
    sacredGeography:['Vārāṇasī','Kedāra','Prayāga','Kurukṣetra','Kailāsa','Śaiva and Vaiṣṇava shrines across Bhāratavarṣa','Seven-continent Purāṇic cosmography'],
    dharma:['Ahiṃsā and sectarian loyalty','Śrāddha and the five sacrifices','Food, purity and expiation','Gifts and karmic consequence','Pāśupata and Yoga disciplines','Knowledge, grace and liberation'],
    reception:'A foundational Purāṇic explanation of liṅga as cosmic and metaphysical sign; influential for Śaiva pilgrimage, Pāśupata sacred history and the integration of emblem worship with cosmology and liberation.',
    scholarlyPositions:[
      'Rocher: the oldest core is placed broadly between the fifth and tenth centuries, but the received text is composite and versioned.',
      'Internal evidence: Uttarabhāga 2.55.37 remembers forty-six chapters against the fifty-five now transmitted, proving expansion.',
      'Kramrisch: liṅga theology joins unmanifest and manifest, spirit and creative nature; the emblem must be read in the text’s metaphysical vocabulary.'
    ],
    dependencies:[
      'Creation, dynasties and Kṛṣṇa materials draw on shared epic-Purāṇic reservoirs.',
      'Dakṣa, Kāma, Umā, Andhaka and Jālandhara cycles overlap with Śiva and Skanda traditions.',
      'Pāśupata teaching relates to wider early-medieval Śaiva ascetic and Āgamic worlds.',
      'Sāṃkhya categories are reworked within a theistic Śiva–Śakti cosmology.'
    ],
    primaryEvidence:[
      'Common Sanskrit recension, Pūrvabhāga 108 and Uttarabhāga 55.',
      'Internal contents summary and the forty-six-chapter Uttarabhāga statement.',
      'Śivatoṣiṇī commentary in printed witnesses.',
      'J. L. Shastri’s complete two-volume English translation.',
      'Manuscript and citation comparisons summarized by Hazra and Rocher.'
    ],
    sources:[
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Foundational chronological and ritual-historical study of the Liṅga Purāṇa’s strata.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard survey of date, two-part structure, internal expansion evidence and bibliography.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'shastri-online',title:'J. L. Shastri — The Liṅga Purāṇa, complete English translation',detail:'Searchable two-volume translation with the common 108+55 chapter sequence.',url:'https://www.wisdomlib.org/hinduism/book/the-linga-purana'},
      {key:'shastri-part1',title:'The Liṅga-Purāṇa, Part 1 — J. L. Shastri',detail:'Open scan of the first AITM translation volume.',url:'https://archive.org/details/in.ernet.dli.2015.460751'},
      {key:'mlbd-part2',title:'Liṅga Purāṇa, Part 2 — Ancient Indian Tradition and Mythology 6',detail:'Publisher page for the second translation volume, covering Pūrvabhāga 96–108 and Uttarabhāga.',url:'https://www.mlbd.in/products/linga-purana-pt-2-aitm-vol-6-ancient-indian-tradition-and-mythology-vol-6-j-l-shastri-9788120803411-8120803418'},
      {key:'kramrisch',title:'Stella Kramrisch — The Presence of Śiva',detail:'Scholarly interpretation of liṅga, alinga and the metaphysics of Śiva.',url:'https://books.google.com/books/about/The_Presence_of_Siva.html?id=leE9DwAAQBAJ'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'J. L. Shastri, trans., The Liṅga Purāṇa, 2 vols.',
      'Stella Kramrisch, The Presence of Śiva',
      'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology'
    ],
    mahapuranaFinal:true,
    mahapuranaAudited:true,
    mahapuranaBenchmark:true
  });
})();
