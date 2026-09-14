(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Śiva Purāṇa', {
    sanskritTitle:'शिवपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the received work is transmitted through Sūta, Vāyu and multiple divine and sage dialogues',
    language:'Sanskrit',
    booksCount:'Seven saṃhitās and 457 chapters in the commonly translated recension; an older Bombay print has six saṃhitās and 290 chapters, while still other manuscripts preserve two-part organizations',
    verseCount:'24,000 ślokas in the received seven-saṃhitā tradition; opening catalogues remember a much larger twelve-saṃhitā Śiva Purāṇa of 100,000 verses, five of whose named divisions are absent from the common text',
    period:'A layered medieval Śaiva compilation. Hazra and later surveys place substantial older material around the tenth–eleventh centuries CE, while several received books and chapters were revised or added through the fourteenth century and later.',
    status:'Extant Mahāpurāṇa in multiple, substantially different recensions. The common seven-saṃhitā text is a major medieval Śaiva scripture but cannot be equated without qualification with the twelve-saṃhitā work described in its own catalogue.',
    extent:'The common seven-saṃhitā recension contains Vidyeśvara 25 chapters, Rudra 197, Śatarudra 42, Koṭirudra 43, Umā 51, Kailāsa 23 and Vāyavīya 76, for 457 chapters. The six-saṃhitā Bombay recension totals 290 and rearranges or lacks major units.',
    primaryRecensions:[
      'Common seven-saṃhitā recension — Vidyeśvara, Rudra, Śatarudra, Koṭirudra, Umā, Kailāsa and Vāyavīya; basis of J. L. Shastri’s four-volume and Bibek Debroy’s three-volume English translations.',
      'Bombay/Vaṅgavāsī six-saṃhitā recension — Jñāna, Vidyeśvara, Kailāsa, Sanatkumāra, Vāyavīya and Dharma; 290 chapters in the nineteenth-century print described by Hazra and Rocher.',
      'A two-khaṇḍa Puri manuscript recorded by Haraprasad Shastri, with 51 chapters in Pūrvakhaṇḍa and 45 in Uttarakhaṇḍa.',
      'The remembered twelve-saṃhitā form of 100,000 verses, including Vaināyaka, Mātṛ, Rudraikādaśa, Sahasrakoṭirudra and Dharma divisions not preserved as such in the common seven-book text.'
    ],
    leadParagraphs:[
      'The Śiva Purāṇa is one of the principal Sanskrit scriptures of medieval Śaivism. It presents Śiva as the supreme Lord who creates, sustains and dissolves the cosmos while exceeding every measurable form. Myth, ritual and philosophy are inseparable: the endless fiery liṅga explains transcendence, the marriage of Śiva and Pārvatī organizes the divine household, and instruction on mantra, ash, rudrākṣa, pilgrimage, initiation, Yoga and liberation makes theology a lived discipline.',
      'Most modern readers encounter a seven-saṃhitā text of 24,000 verses and 457 chapters. Its Rudrasaṃhitā contains the best-known narrative cycles—Dakṣa and Satī, Pārvatī’s austerity and marriage, Skanda, Gaṇeśa and cosmic battles—while Vidyeśvara, Koṭirudra, Kailāsa and Vāyavīya preserve dense ritual and doctrinal teaching. That organization is not universal: a six-saṃhitā recension has 290 chapters, and manuscripts can differ at the level of entire books.',
      'The received scripture therefore has two equally important identities. In religious reception it is a coherent proclamation of Śiva, Śakti and the liberating power of devotion. In textual history it is a recensional archive assembled from narratives, ritual manuals, tīrtha lists, philosophical discourse and older Śaiva-Purāṇic reservoirs over several centuries.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'The title Śiva Purāṇa is older than any single surviving manuscript organization. Purāṇa catalogues and the extant text itself remember a twelve-saṃhitā scripture of 100,000 verses, whereas the common recension has seven saṃhitās and 24,000 verses. The difference is evidence of loss, abridgement and reconstitution, not a chronological statement that all remembered verses once formed one recoverable autograph.',
          'R. C. Hazra placed important older portions of the extant work around the tenth or eleventh century CE. He considered the rare six-saṃhitā Bombay recension likely to preserve an older organization than several eastern and southern printed forms. Later scholarship accepts the broad medieval setting but treats exact dates cautiously because the saṃhitās do not share one history.',
          'Some received passages are later than the fourteenth century. The diagnostic evidence includes developed ritual systems, relations with other Purāṇas and Āgamic Śaivism, quotation history, sacred geography and differences among manuscripts. A date for Rudrasaṃhitā narrative does not automatically date Kailāsa initiation teaching or the Vāyavīya synthesis.',
          'The seven-saṃhitā text also contains older inherited matter. Dakṣa’s sacrifice, Rudra’s Vedic and epic identities, the fiery pillar, Skanda’s wars, cosmology and genealogical material belong to long narrative traditions. Their antiquity as motifs must not be confused with the date of the Sanskrit chapters that now retell them.',
          'The safest summary is consequently layered: an old canonical title and inherited Śaiva mythology; a substantial early-medieval redactional foundation; divergent six- and seven-saṃhitā recensions; and high-medieval or later ritual, sectarian and local additions.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'The commonly translated recension contains seven saṃhitās and 457 chapters. Rudrasaṃhitā is itself divided into five khaṇḍas—Sṛṣṭi 20 chapters, Satī 43, Pārvatī 55, Kumāra 20 and Yuddha 59—making its 197 chapters almost half of the whole. Vāyavīyasaṃhitā is divided into 35-chapter Pūrvabhāga and 41-chapter Uttarabhāga.',
          'The six-saṃhitā Bombay recension has a different architecture: Jñāna 78 chapters, Vidyeśvara 16, Kailāsa 12, Sanatkumāra 59, Vāyavīya in two thirty-chapter parts, and Dharma 65, for 290. Umā and several common-recension books do not stand there as independent units. Chapter concordance therefore requires more than changing a section number.',
          'The opening catalogue lists twelve saṃhitās—Vidyeśvara, Rudra, Vaināyaka, Umā, Mātṛ, Rudraikādaśa, Kailāsa, Śatarudra, Sahasrakoṭirudra, Koṭirudra, Vāyavīya and Dharma—with verse totals adding to 100,000. The common text preserves seven of these names while absorbing, losing or reorganizing the others.',
          'Narrative frames support the composite structure. Sūta teaches sages at Prayāga and Naimiṣa; Vāyu transmits large doctrinal blocks; Śiva, Pārvatī, Brahmā, Viṣṇu, Nārada, Sanatkumāra, Upamanyu and many other speakers govern embedded discourses. The scripture produces unity through Śiva’s supremacy rather than one continuous narrator.'
        ],
        subsections:[
          {title:'Common seven-saṃhitā map',bullets:[
            'Vidyeśvarasaṃhitā, 25 chapters — praise of the Purāṇa, the fiery liṅga, Śiva’s images, daily worship, Oṃ and five-syllable mantra, ash and rudrākṣa.',
            'Rudrasaṃhitā, 197 chapters — creation; Dakṣa and Satī; Pārvatī’s birth, tapas and marriage; Skanda and Gaṇeśa; Andhaka, Tripura, Jalandhara, Śaṅkhacūḍa and other battles.',
            'Śatarudrasaṃhitā, 42 chapters — Śiva’s many forms, manifestations, avatāra-like descents and exemplary devotees.',
            'Koṭirudrasaṃhitā, 43 chapters — liṅga installation and worship, the twelve jyotirliṅgas, vows, tīrthas and salvific observance.',
            'Umāsaṃhitā, 51 chapters — cosmology, worlds, bodies, death, karmic consequence, hells, gifts, dharma and knowledge.',
            'Kailāsasaṃhitā, 23 chapters — praṇava theology, guru, initiation, ascetic discipline, renunciation and esoteric knowledge of Śiva.',
            'Vāyavīyasaṃhitā, 76 chapters — creation and genealogy, Paśupati doctrine, Śiva-Śakti, ritual, initiation, Pāśupata discipline, Yoga and liberation.'
          ]}
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'This synopsis follows the common seven-saṃhitā recension used in the complete English translations. It is a reading map, not a concordance to the six-saṃhitā Bombay text. Parallel narratives and teachings may appear under different book names in other witnesses.'
        ],
        subsections:[
          {
            title:'Vidyeśvara: authority, liṅga and daily religion',
            paragraphs:[
              'Sūta introduces the Purāṇa as a means of liberation suited to the present age. The sages ask how human beings burdened by worldly fault may attain the highest good; hearing Śiva’s glory, devotion and disciplined worship form the answer.',
              'The contest of Brahmā and Viṣṇu culminates in an immeasurable column of fire. Neither can find its beginning or end; Śiva manifests as the reality beyond their claims. The narrative grounds liṅga worship in metaphysics: a finite emblem makes the unbounded Lord ritually approachable without reducing him to one body.',
              'The book then prescribes images and liṅgas, installation, worship, Oṃ and the five-syllable namaḥ śivāya mantra, sacred ash, rudrākṣa, conduct and sacred places. These chapters establish the ritual vocabulary elaborated by later saṃhitās.'
            ]
          },
          {
            title:'Rudra I–II: creation, Dakṣa and Satī',
            paragraphs:[
              'Sṛṣṭikhaṇḍa presents Śiva as the ground from whom Brahmā and Viṣṇu receive their cosmic functions. Creation, guṇas, divine forms and the production of beings are repeatedly returned to the unity of Śiva and Śakti.',
              'Satīkhaṇḍa tells Dakṣa’s hostility toward the unconventional god. Satī marries Śiva but enters her father’s uninvited sacrifice, rejects the insult to her husband and abandons her body. Vīrabhadra and Bhadrakālī destroy the rite; Dakṣa is restored only after the sacrificial order acknowledges Śiva.',
              'The cycle is not merely family tragedy. It dramatizes a religious argument: ritual status, lineage pride and external purity fail when they exclude the Lord who exceeds convention. Śiva’s later reconciliation prevents the lesson from becoming a rejection of sacrifice itself.'
            ]
          },
          {
            title:'Rudra III: Pārvatī, tapas and the divine wedding',
            paragraphs:[
              'Satī is reborn to Himālaya and Menā as Pārvatī. The gods require a son of Śiva to defeat Tāraka, but the yogin remains absorbed in meditation. Kāma’s attempt to awaken desire ends in his burning, making Pārvatī’s own tapas rather than divine manipulation the decisive power.',
              'Śiva tests her resolve in disguise and finally accepts the marriage. The elaborate wedding joins ascetic and household worlds: the terrifying, ash-covered host becomes the auspicious bridegroom without ceasing to be the Great Yogi. Pārvatī is not a secondary ornament but the power through whom Śiva’s cosmic action becomes manifest.',
              'The book’s popularity in later temple, festival and vernacular traditions comes from this negotiation of opposites—renunciation and marriage, wilderness and home, terror and grace.'
            ]
          },
          {
            title:'Rudra IV–V: Skanda, Gaṇeśa and cosmic battles',
            paragraphs:[
              'Kumārakhaṇḍa narrates the extraordinary transmission of Śiva’s seed, Skanda’s birth and his leadership of the gods against Tāraka. Gaṇeśa’s creation by Pārvatī, beheading by Śiva’s attendants and restoration with an elephant head establishes him as guardian of thresholds and first recipient of worship.',
              'Yuddhakhaṇḍa gathers conflict narratives: Andhaka’s desire and transformation, the triple cities of the Asuras, Jalandhara, Śaṅkhacūḍa and other enemies. Battles are theological theatre in which divine weapons, boons and apparent rivalry among gods resolve into Śiva’s sovereignty.',
              'The divine household is inseparable from these wars. Pārvatī, Skanda and Gaṇeśa embody powers required by the cosmos, while devotees and demons alike may approach Śiva through austerity and receive dangerous boons. Grace is abundant but morally complex.'
            ]
          },
          {
            title:'Śatarudra and Koṭirudra: manifestations and sacred places',
            paragraphs:[
              'Śatarudrasaṃhitā multiplies Śiva’s forms. Manifestations associated with sages, devotees, cosmic tasks and local cults show how one Lord appears under many names without exhausting the transcendent source. Upamanyu and other exemplars teach the efficacy of steadfast devotion.',
              'Koṭirudrasaṃhitā turns that theology into a map of worship. It explains liṅga installation, offering and vows, then narrates the twelve jyotirliṅgas: Somnātha, Mallikārjuna, Mahākāla, Oṃkāra, Kedāra, Bhīmaśaṅkara, Viśveśvara, Tryambaka, Vaidyanātha, Nāgeśa, Rāmeśvara and Ghuśmeśvara in the received sequence.',
              'Each jyotirliṅga story links a local place to Śiva’s universal light. The list helped create a pan-Indian pilgrimage network, but textual descriptions and modern temple identifications do not always supply an unambiguous historical geography.'
            ]
          },
          {
            title:'Umā, Kailāsa and Vāyavīya: consequence, initiation and liberation',
            paragraphs:[
              'Umāsaṃhitā ranges across cosmic regions, embodiment, death, karmic consequence, hells, gifts and normative dharma. Its encyclopedic movement places Śaiva devotion within the wider Purāṇic moral universe rather than limiting the book to mythic biography.',
              'Kailāsasaṃhitā centres on praṇava, mantra, guru and dīkṣā. Renunciation and ascetic discipline internalize the sacrificial world; knowledge received from a qualified teacher transforms the initiate’s relation to body, bonds and Śiva.',
              'Vāyavīyasaṃhitā supplies the broadest doctrinal synthesis. Creation and genealogy lead into the triad of Pati, paśu and pāśa: Śiva is Lord, individual beings are bound souls, and impurity, karma and māyā form their bonds. Ritual, devotion, Pāśupata discipline, Yoga and knowledge cooperate in release through Śiva’s grace.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'Śiva is both supreme personal Lord and reality beyond every form. The fiery pillar denies that Brahmā or Viṣṇu can measure the absolute, yet the liṅga, anthropomorphic image, mantra and sacred place make the same Lord present to worship. Transcendence and embodiment are complementary rather than contradictory.',
          'Śiva and Śakti are inseparable. He is consciousness and Lord; she is the power of manifestation through whom creation, knowledge and action occur. Satī and Pārvatī narratives give that doctrine a life history, while Vāyavīya discourse states it conceptually. Divine unity therefore includes a real theological place for the Goddess.',
          'The Pati–paśu–pāśa scheme organizes bondage and liberation. Souls are beginninglessly bound by impurity, karma and māyā but are not identical with those bonds. Śiva’s grace, mediated by guru, initiation, mantra, worship, ethical discipline and knowledge, makes release possible.',
          'Bhakti is not opposed to knowledge or Yoga. Hearing Śiva’s stories, repeating his name, worshipping the liṅga, meditating on Oṃ, controlling mind and senses and learning the true relation of Lord, soul and bond form a graded and mutually supporting path. Different saṃhitās emphasize different practices because the text addresses householders, pilgrims, ritual specialists and renouncers.',
          'Other deities retain dignity within a Śaiva hierarchy. Brahmā creates and Viṣṇu sustains by Śiva’s power; Viṣṇu is sometimes rival, sometimes exemplary devotee and often honoured partner. Purāṇic supremacy statements are rhetorical theology, not evidence that every chapter rejects all non-Śaiva worship.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'No complete stemmatic critical edition has reconstructed the relation among all six-, seven- and two-part Śiva Purāṇa witnesses. The common chapter numbering is therefore an edition system, not a universal reference independent of manuscript history.',
          'The seven-saṃhitā edition published at Kāśī and widely reprinted became the basis of J. L. Shastri’s four-volume English translation in Ancient Indian Tradition and Mythology. It contains 457 chapters and remains the most accessible full scholarly translation. Bibek Debroy’s three-volume rendering provides a recent complete translation of the same broad received tradition.',
          'The nineteenth-century Bombay/Vaṅgavāsī print preserves six saṃhitās and 290 chapters. Hazra considered this rarer organization likely older than several other printed recensions, but “older organization” does not mean that every reading in the print is earlier or that its six books reproduce the lost twelve-saṃhitā text.',
          'Haraprasad Shastri recorded a Puri manuscript in two khaṇḍas and 96 chapters. Additional texts also claim Śiva Purāṇa affiliation. These witnesses show why an isolated colophon or online chapter number cannot settle recensional identity.',
          'Research use should cite saṃhitā, internal khaṇḍa where applicable, chapter, verse and edition. Translations can be complete relative to their base text while the larger Purāṇa still lacks a full critical reconstruction.'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Śiva Purāṇa helped consolidate a narrative world now central to pan-Indian Hindu culture: Satī and Dakṣa, Pārvatī’s tapas and wedding, Kāma’s burning, Skanda’s birth, Gaṇeśa’s elephant head, Andhaka, Tripura, Jalandhara and the jyotirliṅgas. These stories also occur in epics and other Purāṇas; the Śiva Purāṇa’s importance lies in organizing them around one sustained Śaiva theology.',
          'Its ritual vocabulary had an equally large afterlife. Namaḥ śivāya, Oṃ, sacred ash, rudrākṣa, liṅga installation, Monday and other vows, guru and initiation, pilgrimage and hearing the Purāṇa became portable signs of Śaiva identity. The scripture links household practice, temple worship and ascetic discipline rather than treating them as separate religions.',
          'The twelve jyotirliṅga cycle authorizes a network of regional shrines through a universal theology of light. Later guidebooks, recitation traditions and temple claims often quote or paraphrase Koṭirudra narratives. Historical identification should still distinguish the received literary list from the architectural date of a present shrine.',
          'The text participates in a shared Śaiva-Purāṇic archive with Liṅga, Skanda, Vāyu and other works, and in broader epic-Purāṇic traditions of Dakṣa, Skanda and cosmic war. Parallel passages can mark borrowing, common source or later harmonization; resemblance alone does not decide direction.',
          'Modern reception ranges from Sanskrit recitation and vernacular kathā to film, television, comic and devotional summary. Popular retellings often extract Rudrasaṃhitā narrative while leaving aside the dense ritual and philosophical saṃhitās that make up most of the scripture’s intellectual world.'
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'Liṅga worship is the central recurring rite. The text explains types of liṅga, choice of place, installation, bathing, flowers, lamps, food, circumambulation and mantra. Physical worship is paired with mental worship and knowledge; the emblem is effective because it points beyond itself to the unbounded Lord.',
          'Ash, rudrākṣa and the five-syllable mantra mark the devotee’s body and speech. Rules for their preparation and use reveal a developed medieval Śaiva culture in conversation with Āgamic and Pāśupata practice. They are normative prescriptions from particular textual layers, not a census of what every Śaiva community did.',
          'Initiation and the guru dominate Kailāsa and Vāyavīya. Dīkṣā loosens bonds, mantra reorganizes the initiate’s identity, and ascetic vows direct bodily discipline toward knowledge. The text accommodates householders through daily pūjā, gift, pilgrimage and story-hearing while reserving intensive disciplines for qualified initiates and renouncers.',
          'Purāṇic dharma remains present: gifts, ancestors, food, purity, life stages, karmic retribution, heaven and hell. Umā’s moral cosmology and narratives of pride, fidelity, austerity and grace place sectarian devotion within a social and ethical order.',
          'The divine household provides a powerful social imagination. Satī confronts paternal authority, Pārvatī attains marriage through autonomous tapas, Menā fears the terrifying ascetic groom, and Gaṇeśa defends his mother’s threshold. These narratives can challenge ritual arrogance while still inhabiting the patriarchal and caste-marked norms of their redactors.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, for dating and the six-saṃhitā recension.',
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3, Wiesbaden, 1986, pp. 222–228.',
          'J. L. Shastri, trans., The Śiva Purāṇa, 4 vols., Ancient Indian Tradition and Mythology 1–4, Motilal Banarsidass.',
          'Bibek Debroy, trans., The Shiva Purana, 3 vols., India Penguin Classics, 2023.',
          'Stella Kramrisch, The Presence of Śiva, for the larger Sanskrit mythic and theological world of Śiva.',
          'Tracy Pintchman, ed., Seeking Mahādevī, especially studies of Purāṇic Goddess identity and cosmogenesis.'
        ]
      }
    ],

    chapterMap:[
      'Vidyeśvara 1–25 — Purāṇa authority, fiery liṅga, worship, mantra, ash and rudrākṣa.',
      'Rudra: Sṛṣṭi 1–20; Satī 1–43; Pārvatī 1–55; Kumāra 1–20; Yuddha 1–59.',
      'Śatarudra 1–42 — forms and manifestations of Śiva and exemplary devotion.',
      'Koṭirudra 1–43 — liṅga worship, twelve jyotirliṅgas, vows and pilgrimage.',
      'Umā 1–51 — worlds, embodiment, death, karmic consequence, gifts and dharma.',
      'Kailāsa 1–23 — praṇava, guru, initiation, renunciation and knowledge.',
      'Vāyavīya: Pūrvabhāga 1–35 and Uttarabhāga 1–41 — creation, Pati–paśu–pāśa, ritual, Yoga and liberation.'
    ],
    ritualHistory:'A major witness to medieval Śaiva synthesis: liṅga pūjā, mantra, ash, rudrākṣa, vrata, pilgrimage, guru and initiation connect household, temple, Pāśupata and renunciant practice.',
    rituals:['Liṅga installation, bathing and daily worship','Oṃ and namaḥ śivāya mantra','Sacred ash and rudrākṣa','Guru, dīkṣā and ascetic discipline','Jyotirliṅga pilgrimage and local tīrthas','Vrata, gift and Purāṇa hearing','Yoga, meditation and knowledge'],
    sacredGeography:['Kailāsa','Kāśī/Viśveśvara','The twelve jyotirliṅga fields','Himālaya and Pārvatī’s landscape','Prayāga and Naimiṣa narrative settings','Śaiva tīrthas across northern and southern India'],
    dharma:['Devotion joined to knowledge and Yoga','Guru and initiate obligations','Householder pūjā and gift','Ascetic and renunciant disciplines','Karmic consequence, hells and afterlife','Critique of pride and exclusion in Dakṣa’s sacrifice'],
    reception:'One of the principal Sanskrit sources for the Śiva–Satī–Pārvatī household, Skanda and Gaṇeśa narratives, liṅga theology, jyotirliṅga pilgrimage and the practical symbols of Śaiva devotion.',
    scholarlyPositions:[
      'Hazra: important extant material belongs around the tenth–eleventh centuries, and the rare six-saṃhitā Bombay recension probably preserves an older organization than several later prints.',
      'Rocher: multiple recensions and the remembered twelve-saṃhitā work make a single table or date misleading; the textual history must be stated before summarizing contents.',
      'Modern translations: complete for the common seven-saṃhitā recension, not critical reconstructions of every Śiva Purāṇa manuscript family.'
    ],
    dependencies:[
      'Dakṣa, Satī, Skanda and other cycles rework Vedic, epic and older Purāṇic materials.',
      'Liṅga theology and jyotirliṅga narratives overlap with Liṅga, Skanda and regional māhātmya traditions.',
      'Vāyavīya shares subjects and sometimes textual reservoirs with Vāyu and developed Pāśupata-Śaiva teaching.',
      'Ritual sections stand in conversation with medieval Śaiva Āgama and mantra traditions.'
    ],
    primaryEvidence:[
      'Common seven-saṃhitā Sanskrit edition, 457 chapters.',
      'Bombay/Vaṅgavāsī six-saṃhitā recension, 290 chapters.',
      'Puri two-khaṇḍa manuscript described by Haraprasad Shastri.',
      'J. L. Shastri’s complete four-volume translation.',
      'Bibek Debroy’s recent three-volume complete translation.'
    ],
    sources:[
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Classic dating and recension analysis, including the importance of the six-saṃhitā Bombay text.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard survey of the remembered twelve-saṃhitā work, extant recensions, chapter tables and scholarship.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'shastri-online',title:'J. L. Shastri — The Śiva Purāṇa, complete English translation',detail:'Searchable four-volume translation of the common seven-saṃhitā recension.',url:'https://www.wisdomlib.org/hinduism/book/shiva-purana-english'},
      {key:'mlbd',title:'J. L. Shastri — The Śiva Purāṇa, 4 vols.',detail:'Publisher page for Ancient Indian Tradition and Mythology volumes 1–4.',url:'https://www.motilalbanarsidass.com/products/the-siva-purana-4-volumes-j-l-shastri'},
      {key:'shastri-part4',title:'The Śiva-Purāṇa, Part 4 — J. L. Shastri',detail:'Open scan of the concluding translation volume.',url:'https://archive.org/details/dli.bengal.10689.12960'},
      {key:'debroy',title:'Bibek Debroy — Shiva Purana box set, 3 vols.',detail:'Recent complete English translation of the received 24,000-verse text.',url:'https://www.penguin.co.in/book/shiva-purana-boxset/'},
      {key:'kramrisch',title:'Stella Kramrisch — The Presence of Śiva',detail:'Major scholarly synthesis of Śiva’s Vedic, epic and Purāṇic mythology and metaphysics.',url:'https://books.google.com/books/about/The_Presence_of_Siva.html?id=leE9DwAAQBAJ'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'J. L. Shastri, trans., The Śiva Purāṇa, 4 vols.',
      'Bibek Debroy, trans., The Shiva Purana, 3 vols.',
      'Stella Kramrisch, The Presence of Śiva',
      'Tracy Pintchman, ed., Seeking Mahādevī'
    ],
    mahapuranaFinal:true,
    mahapuranaAudited:true,
    mahapuranaBenchmark:true
  });
})();
