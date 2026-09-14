(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Garuḍa Purāṇa', {
    sanskritTitle:'गरुडपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the received work is framed chiefly as teaching spoken by Viṣṇu to Garuḍa and transmitted within the Purāṇic sage-recitation tradition',
    language:'Sanskrit',
    booksCount:'Recension-dependent. The large Pūrvakhaṇḍa has about 229 chapters in some editions and 240–243 in others; the funerary Pretakhaṇḍa/Uttarakhaṇḍa has 35, 45 or 49 chapters in three major printed recensions. Some Venkateśvara-derived editions also transmit a Brahmakhaṇḍa.',
    verseCount:'19,000 ślokas in traditional Mahāpurāṇa catalogues; one received recension announces 8,800 verses, while surviving printed texts are substantially shorter than the traditional 19,000 and vary by recension.',
    period:'Composite early-medieval Vaiṣṇava Purāṇa. R. C. Hazra proposed c. 850–1000 CE, most probably the tenth century, for the extant Garuḍa Purāṇa; broader scholarship allows earlier material and later accretions, and the funerary books have their own unstable transmission history.',
    status:'Extant Mahāpurāṇa in materially different recensions. No single chapter numbering is universal, the Pretakalpa survives in divergent forms, and there is no complete modern stemmatic critical edition of the whole work.',
    extent:'A much larger encyclopedic Pūrvakhaṇḍa treats cosmology, worship, temple and image construction, pilgrimage, polity, dharma, medicine, veterinary knowledge, gemology, grammar, prosody and Yoga. A smaller Pretakhaṇḍa/Uttarakhaṇḍa treats dying, post-mortem states, funeral rites, śrāddha and related afterlife teaching.',
    primaryRecensions:[
      'The Sarasvatī/Vidyāsāgara Calcutta recension (1890), whose Uttarakhaṇḍa/Pretakalpa has 35 chapters and about 1,401 verses.',
      'The Vaṅgavāsī/Pañcānana Tarkaratna Calcutta recension (1890), whose corresponding funerary book has 45 chapters and about 2,691 verses.',
      'The Veṅkateśvara Bombay recension (1906), whose corresponding funerary book has 49 chapters and about 2,895 verses; printings in this family may also contain a distinct Brahmakhaṇḍa.',
      'Naunidhirāma’s Garuḍa-purāṇa-sāroddhāra, a later sixteen-chapter digest and elaboration of funeral and afterlife material, must not be confused with the complete Purāṇa or treated as a universal Pretakalpa recension.'
    ],
    leadParagraphs:[
      'The Garuḍa Purāṇa is a Vaiṣṇava Mahāpurāṇa whose surviving forms are far more encyclopedic than its modern reputation as a “book of the dead” suggests. The much larger first part ranges across creation, worship, sacred geography, image and temple construction, royal policy, law and custom, medicine, veterinary treatment, gems, grammar, prosody and Yoga. Funerary and afterlife teaching is important, but it belongs to a smaller and unusually unstable textual complex.',
      'The text is traditionally attributed to Vyāsa and places Viṣṇu and Garuḍa at the centre of its revelatory frame. Viṣṇu is the supreme ground of the cosmos, yet the practical religion of the Purāṇa is capacious: rites and praises of Śiva, Devī, Sūrya, Gaṇeśa and other deities stand beside Vaiṣṇava mantra, image worship and liberation teaching. Lakṣmī, Māyā and Prakṛti are woven into its account of divine manifestation.',
      'The work cannot be described by one invariant chapter count. Major printed recensions differ in the size of the Pūrvakhaṇḍa, and the funerary Uttarakhaṇḍa/Pretakalpa is transmitted in sharply different 35-, 45- and 49-chapter forms. That variation is central to the textual history: popular digests and ritual handbooks should be identified as such rather than silently substituted for the Purāṇa.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'The Garuḍa Purāṇa is composite, and no single date can account for its encyclopedic first part, funerary recensions and later print families. Older material was repeatedly collected, reorganized and supplemented. Dating therefore concerns strata and received recensions rather than an author composing the present work in one sitting.',
          'R. C. Hazra, using ritual history, quotations and relations with Dharmaśāstra and other Purāṇas, proposed approximately 850–1000 CE and regarded the tenth century as the most likely period for the extant Garuḍa Purāṇa. That remains an important working estimate, especially for the organized body of ritual, legal and encyclopedic material.',
          'Ludo Rocher emphasizes the uncertainty of Purāṇic chronology and surveys broader estimates for the Garuḍa tradition. Individual passages can preserve older sources while the chapters that transmit them are later. The use of Yājñavalkya-Smṛti material, affinities with other encyclopedic Purāṇas and the incorporation of technical śāstric blocks all point to compilation from pre-existing textual reservoirs.',
          'Chronological controls are uneven. Medieval authors cite a Garuḍa Purāṇa, but not every citation can be found in every surviving edition. Such mismatches may indicate lost passages, alternative recensions or texts circulating under the same title. They are evidence for transmission history, not a licence to reconstruct a lost archetype without manuscripts.',
          'The Pretakalpa/Uttarakhaṇḍa must be dated and studied separately from the larger Pūrvakhaṇḍa. Its large differences in chapter and verse totals show that funerary material continued to be rearranged and expanded. Later digests such as the Garuḍa-purāṇa-sāroddhāra further shaped modern reception without being identical to the complete Mahāpurāṇa.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'There is no universally authoritative chapter count. Printed and manuscript traditions commonly divide the text into a large Pūrvakhaṇḍa and a much smaller Uttarakhaṇḍa or Pretakhaṇḍa, but editions disagree over their boundaries and numbering. Pūrvakhaṇḍa totals of roughly 229 and 240–243 chapters are encountered in major print traditions.',
          'Traditional Purāṇa catalogues assign 19,000 verses to the Garuḍa Purāṇa. A received recension announces 8,800 verses, while the surviving printed corpus is much smaller than the traditional 19,000 and varies substantially with the inclusion and form of later books. Traditional extent notices must therefore be kept separate from extant verse counts.',
          'The principal revelatory relationship is Viṣṇu teaching Garuḍa. Garuḍa transmits sacred knowledge within a wider network of sages, and the book repeatedly embeds shorter divine and sage dialogues. This layered speech-frame allows ritual manuals, myths and technical treatises to be presented as parts of one Purāṇic revelation.',
          'Some Veṅkateśvara-derived printings append or recognize a Brahmakhaṇḍa in addition to Pūrvakhaṇḍa and Pretakhaṇḍa. Because its status and numbering are recension-dependent, it is misleading to present a three-part structure as universal.'
        ],
        subsections:[
          {
            title:'The encyclopedic Pūrvakhaṇḍa',
            bullets:[
              'Opening chapters — creation, cosmic order, Viṣṇu, mantra, worship, vows, sacred places and Purāṇic myth.',
              'In the common 240-chapter recension, chapters in the mid-forties treat iconometry, temple construction, images and consecration.',
              'A large middle portion contains ritual, pilgrimage, omens, gem-testing and other technical or practical subjects.',
              'In the common 240-chapter recension, chapters about 93–106 reproduce or closely follow substantial Yājñavalkya-Smṛti Dharmaśāstra material.',
              'Chapters about 111–113 in that recension treat royal policy, statecraft and nīti.',
              'A large Dhanvantari medical block, commonly numbered roughly 146–218, treats disease, pharmacology, materia medica, diet and allied subjects; medical and veterinary passages occur elsewhere as well.',
              'The closing chapters move toward Yoga, knowledge and liberation; in common descriptions a final doctrinal unit is called the Brahma-gītā.'
            ]
          },
          {
            title:'The funerary Uttarakhaṇḍa or Pretakalpa',
            paragraphs:[
              'Three major printed recensions illustrate the instability of the funerary book. The Sarasvatī/Vidyāsāgara edition has 35 chapters and about 1,401 verses; the Vaṅgavāsī/Tarkaratna edition has 45 chapters and about 2,691; and the Veṅkateśvara edition has 49 chapters and about 2,895. The latter two are relatively close to one another, whereas the shorter Sarasvatī text differs more substantially.'
            ]
          },
          {
            title:'Digests and expanded print traditions',
            paragraphs:[
              'The Garuḍa-purāṇa-sāroddhāra attributed to Naunidhirāma is a later sixteen-chapter digest and elaboration of death and afterlife material. Its wide circulation has contributed to the modern identification of the whole Purāṇa with funerary teaching. It is an important reception text, not a substitute for recension-specific study of the Mahāpurāṇa.'
            ]
          }
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'Because the received text is encyclopedic and recension-dependent, a thematic map is more accurate than pretending that one chapter sequence governs every witness. Chapter ranges below refer to the common 240-chapter Pūrvakhaṇḍa where stated.'
        ],
        subsections:[
          {
            title:'Cosmology, Viṣṇu and sacred manifestation',
            paragraphs:[
              'The opening religious world is Vaiṣṇava. Viṣṇu is the supreme reality from whom cosmic manifestation proceeds and to whom worship and liberation ultimately return. Creation, cosmic cycles, worlds, gods and sages are organized inside a Purāṇic universe rather than as an independent philosophical system.',
              'Lakṣmī is associated with divine power, prosperity and the material unfolding of the cosmos. Māyā and Prakṛti vocabulary permits the text to speak of one transcendent ground and a differentiated world without treating the many gods, ritual forms and sacred places as religiously meaningless.',
              'The theology is hierarchical rather than narrowly exclusive. Śiva, Devī, Sūrya, Gaṇeśa and other deities receive praise and ritual attention. The Purāṇa therefore documents a Vaiṣṇava milieu capable of incorporating a broad field of Brahmanical worship.'
            ]
          },
          {
            title:'Temple, image, pilgrimage and material religion',
            paragraphs:[
              'Chapters in the mid-forties of the common recension treat the measurements and construction of sacred images and temples, together with installation and worship. These passages belong to the history of Purāṇic participation in the technical world of pratiṣṭhā and vāstu rather than to narrative mythology alone.',
              'Pilgrimage, vows, gifts and sacred geography recur throughout the first part. Rivers, tīrthas and shrines are presented as places where mythic memory and repeatable ritual action meet.',
              'Gemology or ratnaparīkṣā forms another technical component. Gems are classified, tested and connected with prosperity, danger and royal or ritual use. The subject illustrates how a Mahāpurāṇa could absorb specialist knowledge while preserving a theological frame.'
            ]
          },
          {
            title:'Dharma, law and kingship',
            paragraphs:[
              'A substantial Dharmaśāstra block closely follows the Yājñavalkya Smṛti. In the common 240-chapter recension this material falls approximately in chapters 93–106 and treats social and religious duties, purity, gifts, expiation and related normative subjects.',
              'Royal policy and nīti are treated in a compact group commonly numbered about 111–113. The king’s duties, advisers, security, administration and prudential conduct place the Purāṇa in conversation with Arthaśāstra and nīti traditions without turning it into a single systematic political treatise.',
              'Normative passages should be read as prescriptions of particular Brahmanical redactors rather than direct reports of how every community lived. Their historical value lies in the ideals, classifications and anxieties they preserve.'
            ]
          },
          {
            title:'Dhanvantari, medicine and the sciences of life',
            paragraphs:[
              'The Garuḍa Purāṇa contains one of the largest medical compilations inside a Mahāpurāṇa. A Dhanvantari section in the common recension, roughly chapters 146–218, surveys diagnosis, fevers and other diseases, therapeutics, diet, materia medica and practical treatment.',
              'The medical chapters share vocabulary and material with classical Āyurvedic literature. Detailed comparison is necessary before claiming direct borrowing in either direction: Purāṇic redactors could excerpt, abbreviate and rearrange knowledge circulating in several medical works.',
              'Materia medica includes extensive plant nomenclature; veterinary and animal treatment also enter the encyclopedic horizon. These chapters are important evidence for the transmission of medical learning outside dedicated medical saṃhitās.'
            ]
          },
          {
            title:'Grammar, prosody, omens and Yoga',
            paragraphs:[
              'Grammar, metrics and related learned subjects appear beside ritual and medicine. Their presence is characteristic of encyclopedic Purāṇas such as the Garuḍa and Agni, which function partly as portable repositories of many branches of knowledge.',
              'Omens, bodily signs and divinatory classifications translate uncertain events into readable signs. Such material belongs to the social history of practical knowledge even when its premises differ from modern science.',
              'The closing doctrinal chapters teach Yoga, meditation and liberation. In the common 240-chapter arrangement a concluding unit is often called the Brahma-gītā. Dattātreya appears as a Yoga teacher, and meditation can move from qualified forms of Viṣṇu toward the unconditioned supreme.'
            ]
          },
          {
            title:'Death, the preta state and ancestral rites',
            paragraphs:[
              'The Pretakalpa/Uttarakhaṇḍa describes dying, the condition of the preta, karmic consequences, hells, gifts for the dead, funeral observances, śrāddha and the transition toward the ancestral state. It gives narrative and ritual form to the problem of maintaining relations with a person whose social presence has ended but whose post-mortem status is not yet settled.',
              'This material explains the later fame of the Garuḍa Purāṇa at funerals, but it must not be projected over the entire text. The funerary book is much smaller than the encyclopedic first part and is precisely the portion whose recensions diverge most visibly.',
              'Ritual descriptions are prescriptive textual traditions, not proof of one uniform Hindu funeral practice. Regional custom, family tradition, priestly manuals and later digests interact with the Purāṇa in complex ways.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'The Garuḍa Purāṇa is predominantly Vaiṣṇava. Viṣṇu is identified with the supreme ground of being, cosmic order and liberation, while avatāras, images, mantras and sacred places provide accessible forms through which the transcendent can be worshipped.',
          'Lakṣmī and the language of Māyā or Prakṛti give cosmic plurality a theological explanation. Divine power manifests the world without exhausting the supreme reality. This helps the text combine cosmology, ritual and a liberation teaching that ultimately exceeds ritual reward.',
          'The Purāṇa honours other deities extensively. Śiva, Devī, Sūrya, Gaṇeśa and local or functional divinities can be ritually effective without overturning the Vaiṣṇava hierarchy of the work. Such inclusivism is normal in sectarian Purāṇic literature and should not be mistaken for the absence of a theological orientation.',
          'Ritual and knowledge are complementary. Image worship, vows, pilgrimage, gifts and domestic duties organize religious life; Yoga disciplines attention and detachment; knowledge reorients the practitioner toward the highest Viṣṇu. Different strata place different weight on these means.',
          'The funerary books apply the same moral cosmos to death. Karma, gifts, rites, judgment, hells, preta experience and ancestral transition make post-mortem destiny continuous with embodied conduct, while liberation remains a distinct horizon beyond ordinary merit and rebirth.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'There is no complete modern stemmatic critical edition of the Garuḍa Purāṇa based on a systematic reconstruction of all major manuscript families. Modern scholarship therefore has to cite editions and recensions explicitly instead of treating a convenient printed text as “the” invariant Purāṇa.',
          'The three-volume English Garuḍa Purāṇa in the Ancient Indian Tradition and Mythology series, published by Motilal Banarsidass under the general editorship of J. L. Shastri, is a valuable complete translation of a received Sanskrit text with introductions and notes. It is not a critical edition in the strict philological sense.',
          'Manmatha Nath Dutt’s 1908 English translation represents another important printed form and preserves useful chapter access and editorial observations. Differences between Dutt, later Indian printings and the AITM translation should be treated as evidence for textual variation rather than silently harmonized.',
          'The funerary book provides the clearest warning. Comparative research on Sarasvatī, Vaṅgavāsī and Veṅkateśvara print traditions finds 35, 45 and 49 chapters respectively, with major verse-total differences. Medieval citations attributed to a Garuḍa Pretakalpa are also absent from some surviving versions, implying lost or alternative textual forms.',
          'Naunidhirāma’s sixteen-chapter Garuḍa-purāṇa-sāroddhāra must be catalogued separately. It is indispensable for the reception of the death material, but quoting it as though it were a chapter-for-chapter witness to every Garuḍa Purāṇa recension obscures rather than solves the textual problem.'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Garuḍa Purāṇa belongs to the encyclopedic wing of Purāṇic literature and is frequently compared with the Agni Purāṇa. Both gather myth, ritual, law, polity, architecture, medicine and learned technical subjects. Similarity can reflect shared sources or parallel compilation; dependence must be demonstrated topic by topic.',
          'Its Dharmaśāstra chapters preserve extensive material close to the Yājñavalkya Smṛti, while medical chapters participate in the wider Sanskrit Āyurvedic tradition. Temple, image and gemological passages likewise connect the Purāṇa with specialist śāstras. The book is therefore a witness to the movement of technical knowledge across genre boundaries.',
          'The Pretakalpa became disproportionately influential in later public memory. Recitation around death, ritual manuals and vernacular explanations made the name “Garuḍa Purāṇa” strongly associated with post-mortem journeys and funeral obligations even though such material occupies only part of the surviving corpus.',
          'The Garuḍa-purāṇa-sāroddhāra intensified this reception. Its compact organization of afterlife teaching was easier to copy, translate and use than the entire encyclopedic Mahāpurāṇa, but its popularity also encouraged later readers to collapse text, digest and local ritual tradition into one object.',
          'For modern scholarship the very instability of the Garuḍa corpus is historically valuable. Divergent chapter counts, borrowed śāstric blocks and differing funeral recensions show how a Purāṇa could remain a living compilation rather than a closed book fixed at one moment.'
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'The ritual world of the Pūrvakhaṇḍa extends from domestic worship to temple culture. Mantra, image installation, consecration, offerings, vows, pilgrimage and gifts connect householders, priests, patrons and sacred institutions. The text is therefore evidence for public and material religion as well as private devotion.',
          'Dharma chapters regulate purity, food, gifts, expiation, social duties and life-cycle obligations. Because much of this material is close to Yājñavalkya-Smṛti tradition, it also shows how Dharmaśāstra norms were repackaged inside Purāṇic revelation for a different reading and recitation environment.',
          'Royal and political teaching addresses kingship, advisers, protection, prudence and administration. Such sections reveal an ideal of the ruler as both guardian of order and participant in religious merit, but they should not be read as a literal constitution of any one historical kingdom.',
          'Medical, veterinary and materia-medica chapters widen the social archive. They preserve classifications of disease, plant names, diet and treatment that circulated between learned medicine and broader religious compilations. Their presence also warns against defining Purāṇa only as myth.',
          'The funeral books prescribe rites for the liminal dead and the ancestors: bodily disposal, gifts, piṇḍa, śrāddha, preta transition and karmic consequence. Comparative ethnography shows that actual practice is regionally and socially diverse. The Purāṇa is one authoritative resource within that diversity, not an exhaustive description of every Hindu funeral.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3 (Wiesbaden, 1986), for the standard survey of the Garuḍa Purāṇa, its structure, chronology and bibliography.',
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, especially the discussion of the Garuḍa Purāṇa’s date and ritual strata.',
          'J. L. Shastri, general ed., The Garuḍa Purāṇa, 3 vols., Ancient Indian Tradition and Mythology 12–14, for a complete English translation of a received recension.',
          'Manmatha Nath Dutt, trans., The Garuda Purana (Calcutta, 1908), for an early complete English translation representing another printed recension.',
          'Emil Abegg, Der Pretakalpa des Garuḍa-Purāṇa (1921; 2nd unchanged ed. 1956), for philological study of the funerary text.',
          'Jonathan P. Parry and later anthropological studies of Hindu death ritual, for the relation between Purāṇic prescriptions, preta theory and lived mortuary practice.',
          'P. Sensarma, “Plants in the Indian Puranas: An Ethnobotanical Investigation,” for the Garuḍa Purāṇa’s medical plant nomenclature in the context of Purāṇic materia medica.'
        ]
      }
    ],

    chapterMap:[
      'Pūrvakhaṇḍa opening — creation, Viṣṇu, cosmology, mantra, worship, vows and pilgrimage.',
      'Common 240-chapter recension, mid-40s — images, temple construction, measurements and consecration.',
      'Common 240-chapter recension, about 93–106 — Dharmaśāstra material closely related to the Yājñavalkya Smṛti.',
      'Common 240-chapter recension, about 111–113 — nīti, royal duties and polity.',
      'Common 240-chapter recension, roughly 146–218 — Dhanvantari medical compendium, therapeutics, diet and materia medica.',
      'Closing Pūrvakhaṇḍa chapters — Yoga, knowledge, Dattātreya teaching and the Brahma-gītā complex.',
      'Pretakalpa/Uttarakhaṇḍa — dying, preta experience, karmic consequences, funeral rites, gifts, śrāddha and ancestors; 35, 45 or 49 chapters in three major printed recensions.'
    ],
    ritualHistory:'A major Purāṇic archive of Vaiṣṇava worship, image and temple consecration, vows, pilgrimage, gifts, Dharmaśāstra, kingship and funerary ritual. The unstable Pretakalpa and later Sāroddhāra show death-ritual material continuing to circulate independently and in reorganized forms.',
    rituals:[
      'Viṣṇu mantra, pūjā and image worship',
      'Temple and image construction and consecration',
      'Vrata, pilgrimage and sacred gifts',
      'Purity, expiation and domestic dharma',
      'Royal and public religious duties',
      'Antyeṣṭi, preta rites and śrāddha',
      'Yoga, meditation and liberation disciplines'
    ],
    sacredGeography:[
      'Purāṇic cosmography and sacred regions',
      'Tīrthas, rivers and pilgrimage sites throughout Bhāratavarṣa',
      'Gayā and ancestral-rite geography in funerary traditions',
      'Temple space as ritually constructed sacred geography'
    ],
    dharma:[
      'Yājñavalkya-Smṛti-derived social and ritual duties',
      'Purity, food, gifts and expiation',
      'Kingship, counsel and nīti',
      'Household, temple and pilgrimage obligations',
      'Medical care, diet and practical knowledge',
      'Funeral, preta and ancestral duties',
      'Karma, Yoga and liberation'
    ],
    reception:'An encyclopedic Vaiṣṇava Mahāpurāṇa whose later public identity became strongly associated with death rites. Its funeral recensions and Sāroddhāra shaped mortuary reception, while its much larger first part remained a repository of ritual, law, medicine, temple culture and technical learning.',
    scholarlyPositions:[
      'Hazra: the extant Garuḍa Purāṇa is best placed c. 850–1000 CE, probably the tenth century, while individual materials may be older or later.',
      'Rocher: the work is composite and recensionally variable; chapter totals and chronological claims must be attached to particular textual forms.',
      'Comparative Pretakalpa research: the major Sarasvatī, Vaṅgavāsī and Veṅkateśvara print traditions transmit substantially different 35-, 45- and 49-chapter funeral books.',
      'Genre comparison: the encyclopedic Pūrvakhaṇḍa is closely comparable to the Agni Purāṇa, but shared technical material requires case-by-case analysis rather than a blanket theory of borrowing.'
    ],
    dependencies:[
      'Dharmaśāstra material closely related to the Yājñavalkya Smṛti.',
      'Shared encyclopedic and technical reservoirs with the Agni Purāṇa and other Purāṇas.',
      'Āyurvedic material connected with Dhanvantari and the wider classical medical tradition.',
      'Temple, image and consecration teaching related to vāstu, pratiṣṭhā and iconographic śāstras.',
      'Funerary teachings transmitted alongside independent ritual manuals and later digests such as the Garuḍa-purāṇa-sāroddhāra.'
    ],
    primaryEvidence:[
      'Major printed Pūrvakhaṇḍa recensions with differing chapter totals, including 229 and 240–243 chapter arrangements.',
      'Sarasvatī/Vidyāsāgara Pretakalpa — 35 chapters, about 1,401 verses.',
      'Vaṅgavāsī/Tarkaratna Pretakalpa — 45 chapters, about 2,691 verses.',
      'Veṅkateśvara Pretakalpa — 49 chapters, about 2,895 verses.',
      'Yājñavalkya-Smṛti-related chapters and the Dhanvantari medical block in the common 240-chapter recension.',
      'Medieval citations and later ritual digests demonstrating circulation of Garuḍa material outside a single surviving recension.'
    ],
    sources:[
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Foundational ritual-historical study; argues for an extant Garuḍa Purāṇa of approximately 850–1000 CE and analyzes its strata.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard scholarly survey of the Garuḍa Purāṇa’s chronology, contents, recensions and bibliography.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'aitm',title:'The Garuḍa Purāṇa — Ancient Indian Tradition and Mythology, vols. 12–14',detail:'Three-volume English translation of a received Sanskrit recension under the general editorship of J. L. Shastri.',url:'https://www.motilalbanarsidass.com/products/garuda-purana-pt-1-aitm-vol-12-ancient-indian-tradition-and-mythology'},
      {key:'dutt',title:'Manmatha Nath Dutt — The Garuda Purana (1908)',detail:'Early complete English translation, useful for comparison of printed recension and chapter sequence.',url:'https://www.wisdomlib.org/hinduism/book/the-garuda-purana-dutt'},
      {key:'oxford-death',title:'Indian death rituals: the enactment of ambivalence — University of Oxford thesis',detail:'Comparative study of Garuḍa Pretakalpa editions; documents divergent 35-, 45- and 49-chapter recensions and the role of the Sāroddhāra.',url:'https://ora.ox.ac.uk/objects/uuid:85f22493-a5cf-4611-aa49-a7cf179993ad'},
      {key:'abegg',title:'Emil Abegg — Der Pretakalpa des Garuḍa-Purāṇa',detail:'Philological study of the Garuḍa Purāṇa’s funerary complex and its textual tradition.',url:'https://www.degruyterbrill.com/document/doi/10.1515/9783112688069/html'},
      {key:'sensarma',title:'P. Sensarma — Plants in the Indian Puranas: An Ethnobotanical Investigation',detail:'Study of Purāṇic plant knowledge, including the Garuḍa Purāṇa’s medical plant nomenclature and chronology in relation to Hazra.',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC3336616/'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'The Garuḍa Purāṇa, 3 vols., Ancient Indian Tradition and Mythology 12–14',
      'Manmatha Nath Dutt, trans., The Garuda Purana (Calcutta, 1908)',
      'Emil Abegg, Der Pretakalpa des Garuḍa-Purāṇa (1921; 2nd unchanged ed. 1956)',
      'Indian death rituals: the enactment of ambivalence (University of Oxford thesis)',
      'P. Sensarma, “Plants in the Indian Puranas: An Ethnobotanical Investigation”'
    ],
    mahapuranaFinal:true,
    mahapuranaAudited:true,
    mahapuranaBenchmark:true
  });
})();