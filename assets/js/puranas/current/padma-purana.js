(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Padma Purāṇa', {
    sanskritTitle:'पद्मपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the received books use several dialogue frames, especially Sūta with the sages and Śiva with Pārvatī or Nārada',
    language:'Sanskrit',
    booksCount:'Two major textual families: a five-khaṇḍa Bengal recension and a six-khaṇḍa Devanāgarī or western recension; the widely translated printed corpus counts Brahma and Kriyāyoga separately and therefore presents seven books',
    verseCount:'55,000 ślokas in traditional catalogues and in the text’s own claims; surviving printed recensions contain roughly 50,000, with totals changing according to the books and appendices included',
    period:'A layered textual complex formed over many centuries. Older creation, Brahmā and pilgrimage strata may reach the middle of the first millennium CE, while major Dharma, Rāma, Vaiṣṇava, vrata and sectarian blocks were added or recast from the early medieval through the fifteenth century and later.',
    status:'Extant Mahāpurāṇa in sharply divergent Bengal and Devanāgarī/western recensions. Exact book and chapter references are edition-specific; Kriyāyogasāra and several māhātmyas also have independent textual histories.',
    extent:'One of the largest Purāṇic corpora. The commonly translated Veṅkaṭeśvara-style text has Sṛṣṭi 82 chapters, Bhūmi 125, Svarga 62, Brahma 26, Pātāla 117, Uttara 255 and Kriyāyoga 26; those 693 chapters do not describe the unpublished five-book Bengal recension.',
    primaryRecensions:[
      'Bengal recension — five khaṇḍas: Sṛṣṭi, Bhūmi, Svarga, Pātāla and Uttara; preserved chiefly in Bengali-script manuscripts and never represented by the standard ten-volume English translation.',
      'Devanāgarī/western recension — six principal khaṇḍas in printed descriptions, with order and naming varying between Ānandāśrama, Veṅkaṭeśvara and related editions.',
      'The Veṅkaṭeśvara-based translated corpus — seven counted books when Brahmakhaṇḍa and Kriyāyoga/Kriyāyogasāra are treated separately.',
      'Independent or semi-independent Padma-attributed māhātmyas, vrata texts, Sahasranāmas and Kriyāyogasāra witnesses whose colophons cannot by themselves prove membership in every recension.'
    ],
    leadParagraphs:[
      'The Padma Purāṇa is not one stable book but a vast family of Sanskrit compilations. Its name, “the Lotus Purāṇa,” evokes the lotus of creation and Brahmā, yet the surviving corpus is encyclopedic: cosmogony, gifts and household ethics, sacred rivers, pilgrimage itineraries, Rāma and Kṛṣṇa narrative, Vaiṣṇava devotion, Śiva worship, vows, calendrical observance and sectarian catalogues stand beside one another.',
      'Its two major recensions differ at the scale of whole books and dozens of chapters. The older, still-unprinted Bengal recension has five khaṇḍas. The Devanāgarī or western line underlying most printed editions has six principal divisions; the ten-volume English translation counts seven by giving Brahmakhaṇḍa and Kriyāyoga independent places. A citation that says only “Padma Purāṇa” is therefore incomplete whenever chapter identity matters.',
      'The work’s religious influence comes especially from practical and portable texts: tīrtha-māhātmyas that turn landscapes into sacred maps, vratas for Ekādaśī and holy months, the Rāma Aśvamedha cycle, Gītā and Bhāgavata māhātmyas, praise of Tulasī and the divine name, and classifications of Purāṇas and Smṛtis. These materials shaped later Vaiṣṇava and pilgrimage traditions even when they originated in different strata.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'The antiquity of the Padma title and the date of the extant chapters are separate questions. Lists of Mahāpurāṇas consistently include a Padma Purāṇa, and early Jain authors knew a popular Padma-associated Rāma tradition. Neither fact proves that the present Uttarakhaṇḍa, Pātālakhaṇḍa or printed Kriyāyoga existed in its current form at that time.',
          'R. C. Hazra used medieval Dharma digests, quotations, ritual history and sectarian doctrine to divide the received books into strata. He regarded early portions of Sṛṣṭikhaṇḍa as preserving a Brahmā-oriented core, while assigning many vrata, tīrtha and sectarian passages to the medieval period. His method remains essential: a date belongs to a passage or textual block, not automatically to all 55,000 traditional verses.',
          'Asoke Chatterjee’s manuscript-based study reached the same structural conclusion by a different route. The text first circulated in parvan divisions and was repeatedly rearranged into khaṇḍas. Devanāgarī and Bengal manuscripts preserve different constitutions; Pātāla contains independent Rāmaite, Liṅga-worshipping and other groups; many Uttara materials also circulate separately. Composition was therefore a history of aggregation and recasting, not a single authorial event.',
          'The date range customarily quoted for the whole—roughly the fourth through fifteenth centuries CE—is a map of possibilities, not a composition date. Some creation, geography and narrative matter may preserve early first-millennium material. Extensive Dharmaśāstra, pilgrimage, temple, bhakti and polemical sections presuppose early- and high-medieval religious worlds; some extant southern temple geography and sectarian formulations are later still.',
          'Textual borrowing supplies relative chronology. Sṛṣṭi draws on Matsya, Viṣṇu and other Purāṇic reservoirs; Svarga compiles from epic, Dharma and tīrtha sources; the Rāma block reworks Vālmīki, later Rāma literature and courtly motifs; Gītā and Bhāgavata māhātmyas presuppose the authority of the works they praise. Each relation must be tested locally because a later compiler can preserve an older verse.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'Traditional catalogues assign 55,000 verses to the Padma Purāṇa, making it second only to the Skanda in conventional extent. The Veṅkaṭeśvara-style text used for the Motilal Banarsidass translation is smaller but still enormous. Its seven counted units total 693 chapters: Sṛṣṭi 82, Bhūmi 125, Svarga 62, Brahma 26, Pātāla 117, Uttara 255 and Kriyāyoga 26.',
          'That seven-book table is a description of a printed textual line, not the universal anatomy of Padma. The Bengal recension has five books—Sṛṣṭi, Bhūmi, Svarga, Pātāla and Uttara. The Devanāgarī tradition is commonly described as sixfold, though Ānandāśrama and Veṅkaṭeśvara arrangements differ in names and order. Counting Kriyāyogasāra or Brahma separately can produce a seventh division.',
          'The books themselves contain seams. Chatterjee separates Sṛṣṭi 1–43 from a Dharma-Purāṇa-like continuation beginning around chapter 44. Pātāla is not one continuous narrative: its Rāma Aśvamedha cycle, Kṛṣṇa and Vaiśākha materials, and Śaiva closing portions have different affiliations. Uttara is a library of monthly vows, river māhātmyas, theological praise, scriptural māhātmyas and sectarian classifications.',
          'Dialogue frames change with these units. Sūta addresses the sages; Brahmā, Śiva, Nārada, Pulastya, Bhīṣma and other speakers govern separate discourses. This multiplicity does not diminish the text’s sacred authority in tradition, but it confirms that historical analysis must work below the level of the modern bound volume.'
        ],
        subsections:[
          {title:'Printed seven-book map',bullets:[
            'Sṛṣṭikhaṇḍa, 82 chapters — creation, Puṣkara, divine and royal narratives, conduct and a Dharma-oriented second block in the Devanāgarī line.',
            'Bhūmikhaṇḍa, 125 chapters — gifts, household ethics, kings and legends, karmic consequence, Yayāti, Nahuṣa and extended didactic narrative.',
            'Svargakhaṇḍa, 62 chapters — cosmography, rivers and tīrthas, Prayāga, āśrama duties, food and Vaiṣṇava devotion.',
            'Brahmakhaṇḍa, 26 chapters — Lakṣmī and the ocean churning, Janmāṣṭamī, Ekādaśī, Kārttika, Tulasī, gifts, expiation and the divine name.',
            'Pātālakhaṇḍa, 117 chapters — Rāma’s horse sacrifice, later Kṛṣṇa and Vaiśākha material, Śiva and liṅga observance, and Purāṇa catalogues.',
            'Uttarakhaṇḍa, 255 chapters — Jālandhara, Ekādaśīs, holy months, river systems, Gītā and Bhāgavata māhātmyas, avatāras and Vaiṣṇava theology.',
            'Kriyāyoga/Kriyāyogasāra, 26 chapters — practical Vaiṣṇava action, Gaṅgā, Jagannātha-Purī, pilgrimage, vrata and gift.'
          ]}
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'The following synopsis follows the seven-book printed corpus because it is the form available in the complete English translation. It should not be used as a chapter concordance for Bengal manuscripts. Differences between book order, titles and contents are part of the history rather than errors to be harmonized away.'
        ],
        subsections:[
          {
            title:'Sṛṣṭikhaṇḍa: creation, Puṣkara and Dharma',
            paragraphs:[
              'The book opens with the lotus of creation, Brahmā and the ordering of the worlds. Its early chapters make Puṣkara a primordial Brahmā tīrtha: cosmology is joined immediately to a place where creation can be ritually encountered. Accounts of gods, Manus, kings and sacred geography broaden the frame.',
              'In the printed Devanāgarī line the first forty-three chapters form a comparatively coherent creation and narrative unit. From about chapter 44 the texture changes toward conduct, gifts, purity, women’s and household duties, wells, trees, bridges, Tulasī, Āmalakī, Gaṅgā, Gaṇeśa and planetary rites. Chatterjee argues that this continuation derives from an independently shaped Dharma Purāṇa and is absent from Bengal Sṛṣṭi manuscripts.',
              'The book therefore demonstrates the Padma process in miniature: an older Brahmā-Puṣkara frame acquires practical Dharma and vrata materials that answer the needs of household and pilgrimage religion.'
            ]
          },
          {
            title:'Bhūmikhaṇḍa: gifts, kinship and karmic worlds',
            paragraphs:[
              'The first forty chapters organize obligatory and occasional gifts and attach promised results to religious generosity. Stories then embody rules in conflicts of kinship, chastity, sovereignty and religious loyalty. Sudevā and Padmāvatī, Ikṣvāku and the boars, Indra and Sukalā, and Kṛkala turn abstract duty into narrative tests.',
              'The middle chapters praise parents and teachers, describe the body as an object of detachment, map good and bad acts, and show Yama’s realm. Yayāti’s long story leads into Pūru’s accession; Cyavana and Kuñjala frame further teaching on vows, gifts, hell and heaven.',
              'The closing narrative links Aśokasundarī and Nahuṣa with the defeat of Huṇḍa, then returns to the merit of hearing the Purāṇa. Bhūmi is consequently less a geographical book than a moralized account of life on earth.'
            ]
          },
          {
            title:'Svarga and Brahma: sacred geography and the ritual year',
            paragraphs:[
              'Svargakhaṇḍa begins with Brahman, Prakṛti and cosmography before becoming a pilgrimage guide. Rivers, mountains and tīrthas occupy chapters 10–40, with major attention to the Narmadā and to sites such as Kurukṣetra, Gayā and river confluences. Chapters 41–49 praise Prayāga; the conclusion turns to āśrama duties, food, gifts, renunciation and devotion to Viṣṇu.',
              'Brahmakhaṇḍa is compact and strongly practical. The churning of the ocean explains poison, Alakṣmī, Lakṣmī and nectar; narrative supports Janmāṣṭamī and Lakṣmī vows. Expiations, Ekādaśī, Kārttika, Tulasī, Dhātrī, land gifts, truth to promises and repetition of the Lord’s name shape a household Vaiṣṇava calendar.',
              'The juxtaposition is characteristic: sacred space and sacred time are parallel technologies. A river or tīrtha is visited, while a month, lunar day or vow is entered through disciplined observance.'
            ]
          },
          {
            title:'Pātālakhaṇḍa: Rāma, Kṛṣṇa and sectarian strata',
            paragraphs:[
              'The first sixty-eight chapters narrate events after Rāma’s return to Ayodhyā and centre on the Aśvamedha. Agastya explains Rāvaṇa and Rāma’s divine identity; a golden Sītā accompanies the sacrifice; the wandering horse creates a chain of encounters and wars. The cycle is a Purāṇic Rāma text in its own right, not a simple summary of Vālmīki.',
              'Later chapters move to Kṛṣṇa, the cowherd women, forms of bhakti and the merit of Vaiśākha. Several Vaiśākha chapters repeat or adapt Bhūmi material. The end turns toward Śiva worship, wearing the liṅga and ashes, Gautama’s hermitage, unusual Rāma variants and catalogues of Mahāpurāṇas and Upapurāṇas.',
              'Chatterjee’s division of the book into independent Rāmaite, Liṅga-worshipping and other groups explains its abrupt transitions. “Pātāla” is a received book title, not a single subject running through all 117 chapters.'
            ]
          },
          {
            title:'Uttarakhaṇḍa: vows, rivers and scriptural māhātmyas',
            paragraphs:[
              'The enormous Uttara opens with Jālandhara and then moves through Tulasī, food-gift, tīrthas and all twenty-six Ekādaśīs of the regular and intercalary months. Kārttika occupies chapters 93–124 and Māgha follows; later river sections map tributaries and sacred places in remarkable detail, including a long Sābarmatī cycle.',
              'Chapters 175–192 praise the eighteen chapters of the Bhagavad Gītā one by one through exemplary tales. The Gītā is visualized as the body of the deity and reading a chapter becomes a salvific practice. The Bhāgavata Māhātmya, beginning within this range in the printed numbering, promotes hearing the Bhāgavata as a cure for the conditions of the age.',
              'The final movement includes Yamunā praise, royal tales, Purāṇic classifications, avatāras and declarations of Viṣṇu’s greatness. Famous sattvika-rājasika-tāmasika lists belong to this late, sectarianly charged textual environment; they are primary evidence for later canon-making, not a neutral date chart for all Purāṇas.'
            ]
          },
          {
            title:'Kriyāyoga: devotion enacted',
            paragraphs:[
              'The short Kriyāyoga begins with creation and the virtues of Viṣṇu’s devotee, then turns rapidly to practical religion. Gaṅgā, Padmāvatī, Mādhava and Sulocanā frame moral instruction; Jagannātha-Purī, sacred travel, gifts, vows and worship make devotion visible in action.',
              'Independent manuscript and catalogue evidence also supports a Kriyāyogasāra as an Upapurāṇic work. Its later attachment to Padma transmission is therefore a textual relationship, not sufficient reason to treat every Kriyāyogasāra witness as an original seventh book of the same archetype.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'No single systematic theology governs the Padma corpus. The early title and Puṣkara materials remember a Brahmā-centred world; many received books make Viṣṇu, Nārāyaṇa, Rāma or Kṛṣṇa supreme; Śiva, the Goddess, Gaṅgā, Yamunā, Tulasī and regional deities receive their own praise. The unity lies in Purāṇic practice and narrative more than in one creed.',
          'Vaiṣṇava devotion is the most powerful current in the commonly printed recension. The Lord’s name, Ekādaśī, Kārttika, Tulasī, Janmāṣṭamī, Rāma’s kingship and sacrifice, Kṛṣṇa’s relations with the cowherd women, the Bhagavad Gītā and the Bhāgavata all become accessible paths in Kali-yuga. Bhakti is embodied in hearing, recitation, fasting, gift and pilgrimage.',
          'Sectarian exclusivism occurs beside accommodation. Uttara passages classify scriptures by the three guṇas and polemicize against rival teachings, yet Pātāla and other books contain Śiva ritual and strong Śaiva materials. The same compilation can praise one deity absolutely in one māhātmya and another elsewhere because the books did not originate as a single theological treatise.',
          'Philosophical passages include Sāṃkhya, Yoga, Vedāntic language about the self and Brahman, and the theology of divine grace. In most practical sections liberation is not detached metaphysics: knowledge is joined to purity, devotion, moral conduct and repeated contact with sacred names, days and places.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'There is no complete critical edition that collates the full Bengal and Devanāgarī families and reconstructs a single Padma archetype. The problem is larger than variant words: witnesses disagree about book divisions, order, chapter totals and the presence of entire Dharma, māhātmya and sectarian blocks. A stemma for one khaṇḍa would not automatically solve the others.',
          'The Ānandāśrama and Veṅkaṭeśvara print traditions remain indispensable but represent different editorial arrangements. The Veṅkaṭeśvara-style seven-book corpus underlies N. A. Deshpande’s ten-volume English translation in Ancient Indian Tradition and Mythology, volumes 39–48. It provides broad access to a major recension, not a translation of the unpublished five-book Bengal line.',
          'Asoke Chatterjee’s Padma-Purāṇa: A Study compares Devanāgarī printed editions with Bengal manuscripts and separately transmitted Padma-attributed works. His reconstruction of older parvan divisions, the two recensions, Sṛṣṭi’s Dharma block and the internal strata of Pātāla and Uttara is the closest thing to a book-length text-critical orientation, though it is not a new critical Sanskrit text.',
          'R. C. Hazra’s chapter in Studies in the Purāṇic Records on Hindu Rites and Customs uses quotations in medieval Nibandhas and the history of ritual to date strata. Rocher’s survey places those arguments in the larger problem of Purāṇic recensionality. Their work warns against quoting a chapter number without naming the edition.',
          'Digital and English witnesses should be labelled precisely. Wisdomlib reproduces the Deshpande translation and its seven-part table; Internet Archive scans preserve individual AITM volumes; manuscript catalogues preserve shorter Bengal khaṇḍas and independent māhātmyas. None should be silently merged into a synthetic “complete Padma Purāṇa.”'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Padma Purāṇa became an authority less through a single continuous story than through reusable units. Tīrtha-māhātmyas authorized Puṣkara, Prayāga, Narmadā, Gaṅgā, Yamunā, Sābarmatī and many regional sites; vrata chapters organized religious life around lunar days and holy months; narrative made those practices memorable.',
          'The Pātāla Rāma cycle enlarged the post-coronation and Aśvamedha world of Rāma. It participates in a broad intertextual field with the Vālmīki Rāmāyaṇa, Raghuvaṃśa, later Rāma narrative and regional retellings. Its theological Rāma is both exemplary king and manifestation of Viṣṇu.',
          'The Gītā Māhātmya and Bhāgavata Māhātmya had major independent afterlives. Printed separately or prefixed to editions, they teach readers how and why to hear the Bhagavad Gītā or Bhāgavata and assign salvific fruits to that encounter. Their reception can be wider than that of the 255-chapter Uttarakhaṇḍa that contains them.',
          'The three-guṇa classification of Purāṇas and related lists became influential in later sectarian argument. Its authority derives from a received Padma layer, but historical use requires restraint: it documents how some later Vaiṣṇava redactors ranked scriptures, not an uncontested pan-Hindu canon formed at the origin of the Purāṇas.',
          'Padma-attributed texts also travelled by colophon. Vaidyanātha, Kālañjara, Holikā, Kārttika and other māhātmyas, Sahasranāmas and Kriyāyogasāra witnesses claim locations within Padma. Chatterjee’s catalogue demonstrates that such claims range from plausible recensional fragments to secondary attempts to borrow Mahāpurāṇa prestige.'
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'The corpus is a major archive of medieval lived religion. It describes gifts, wells, groves and bridges; hospitality, parents, teachers and household conduct; vows for lunar days and months; bathing and pilgrimage; image and liṅga worship; funerary consequence, heaven and hell; food, purity, renunciation and devotion.',
          'Vrata creates a religious calendar. Ekādaśī fasts recur through the year and include the intercalary month; Kārttika and Māgha receive long māhātmyas; Janmāṣṭamī, Tulasī and Dhātrī observances join domestic materials to temple and Vaiṣṇava devotion. Promised fruits are theological incentives and evidence for ritual promotion, not statistics about universal practice.',
          'Tīrtha narratives map mobility. Rivers are described with tributaries, banks and sequences of places; myths explain why a location removes a particular fault or grants a desired good. Such chapters reveal the creation of regional pilgrimage networks within a Sanskrit cosmopolitan framework.',
          'Dharma material is socially normative and internally stratified. Rules concerning caste, gender, food, gifts and life stages describe the ideals of particular redactors and transmitters. Comparison with Bengal manuscripts shows that some major Dharma blocks were absent from one recension, so they cannot be treated as timeless doctrine of the whole Padma.',
          'Narrative often tests those ideals rather than merely listing them. Yayāti and Pūru explore age, desire and filial duty; Sudevā, Padmāvatī and Sukalā stage chastity and household loyalty; Rāma’s Aśvamedha joins kingship, expiation and sovereignty; stories attached to vows portray salvation as available through disciplined devotion in ordinary time.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, especially pp. 107–127 on Padma strata and ritual quotation.',
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3, Wiesbaden, 1986, pp. 206–214.',
          'Asoke Chatterjee, Padma-Purāṇa: A Study, Krishnagar, 1967, with separate analyses of Devanāgarī and Bengal recensions.',
          'N. A. Deshpande, trans., The Padma-Purāṇa, 10 vols., Ancient Indian Tradition and Mythology 39–48, Motilal Banarsidass.',
          'H. H. Wilson, Essays on the Purāṇas II, for the early modern scholarly discussion of Padma structure and pilgrimage.',
          'The Ānandāśrama and Veṅkaṭeśvara Sanskrit editions, consulted with explicit attention to book order and recension.'
        ]
      }
    ],

    chapterMap:[
      'Sṛṣṭi 1–43 — creation, Brahmā, Puṣkara and early narrative; 44–82 — Dharma-oriented continuation in the Devanāgarī line.',
      'Bhūmi 1–125 — gifts, household ethics, karmic consequence, Yayāti, Kuñjala, Aśokasundarī and Nahuṣa.',
      'Svarga 1–62 — cosmography, rivers, Narmadā and other tīrthas, Prayāga, āśrama duties and Viṣṇu devotion.',
      'Brahma 1–26 — ocean churning, Lakṣmī, Janmāṣṭamī, expiation, Ekādaśī, Kārttika, Tulasī and the divine name.',
      'Pātāla 1–68 — Rāma’s Aśvamedha; 69–117 — Kṛṣṇa, Vaiśākha, Śiva/liṅga worship and Purāṇa catalogues.',
      'Uttara 1–255 — Jālandhara, vows, sacred months, river māhātmyas, Gītā and Bhāgavata praise, avatāras and sectarian classifications.',
      'Kriyāyoga 1–26 — practical Vaiṣṇava devotion, Gaṅgā, Jagannātha-Purī, pilgrimage, vows and gifts.'
    ],
    ritualHistory:'A central source for the history of tīrtha-māhātmya, vrata and medieval household religion. Its recensional differences show ritual texts being added, detached and reassigned as Padma authority spread.',
    rituals:['Puṣkara, Prayāga, Narmadā, Gaṅgā, Yamunā and regional pilgrimage','Ekādaśī fasts and the vows of Kārttika and Māgha','Janmāṣṭamī, Tulasī and Dhātrī observances','Dāna, wells, trees, bridges and hospitality','Rāma’s Aśvamedha and royal expiation','Śiva/liṅga worship and Vaiṣṇava name-recitation','Hearing the Bhagavad Gītā, Bhāgavata and Purāṇa'],
    sacredGeography:['Puṣkara','Prayāga','Narmadā valley and its tīrthas','Gaṅgā and Yamunā','Sābarmatī system','Kurukṣetra and Gayā','Jagannātha-Purī in Kriyāyoga'],
    dharma:['Gifts and public religious works','Parents, teachers and household loyalty','Food, purity and life-stage duties','Karmic consequence, Yama, heaven and hell','Vrata discipline and the ritual calendar','Renunciation, knowledge and devotion'],
    reception:'A vast authority for pilgrimage and vrata; source of influential Gītā and Bhāgavata māhātmyas, the Pātāla Rāma cycle and later sectarian scripture classifications. Its title was also claimed by many independently circulating māhātmyas.',
    scholarlyPositions:[
      'Hazra: early Brahmā-oriented Sṛṣṭi material survives, but the received books contain widely separated ritual and sectarian strata which must be dated by quotation and practice.',
      'Chatterjee: the work moved from older parvan divisions into divergent Bengal and Devanāgarī khaṇḍa systems; several present books are compilations of independent groups.',
      'Rocher: Padma is a paradigmatic recensional Purāṇa, and a generalized date or content table must state which textual family it describes.'
    ],
    dependencies:[
      'Sṛṣṭi incorporates or parallels Matsya, Viṣṇu and other creation traditions.',
      'Svarga compiles epic, Dharma and tīrtha materials.',
      'Pātāla’s Rāma cycle reworks Vālmīki and later Rāma traditions and contains courtly literary parallels.',
      'Gītā and Bhāgavata māhātmyas presuppose and promote the authority of those scriptures.',
      'Several Uttara and Kriyāyoga units also circulate as independent texts or appendices.'
    ],
    primaryEvidence:[
      'Bengal-recension manuscripts in Bengali script, five khaṇḍas.',
      'Ānandāśrama and Veṅkaṭeśvara Sanskrit print traditions.',
      'N. A. Deshpande’s ten-volume translation of the Veṅkaṭeśvara-style corpus.',
      'Medieval Nibandha quotations analysed by Hazra.',
      'Manuscripts and Padma-attributed independent works catalogued by Asoke Chatterjee.'
    ],
    sources:[
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Foundational chapter-level chronology of Padma strata using Dharma quotations, ritual history and sectarian development.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard survey of Padma’s two recensions, extent, dating problems, contents and bibliography.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'chatterjee',title:'Asoke Chatterjee — Padma-Purāṇa: A Study (1967)',detail:'Book-length manuscript and source study of the Devanāgarī and Bengal recensions, their book divisions and separately circulating Padma materials.',url:'https://archive.org/details/in.ernet.dli.2015.135649'},
      {key:'deshpande-translation',title:'N. A. Deshpande — The Padma-Purāṇa, 10 vols.',detail:'Complete English translation of the seven-part Veṅkaṭeśvara-style printed corpus, AITM volumes 39–48.',url:'https://www.mlbd.in/products/padma-purana-english-translation-10-volumes-ancient-indian-tradition-and-mythology-aitm-39-48'},
      {key:'wisdomlib',title:'The Padma Purāṇa — N. A. Deshpande translation online',detail:'Searchable presentation of the translated printed recension, including the seven-book chapter table.',url:'https://www.wisdomlib.org/hinduism/book/the-padma-purana'},
      {key:'aitm-part-1',title:'The Padma-Purāṇa, Part 1 — Sṛṣṭikhaṇḍa',detail:'Open scan of the first Motilal Banarsidass translation volume.',url:'https://archive.org/details/padma_purana_part1_english'},
      {key:'aitm-part-10',title:'The Padma-Purāṇa, Part 10 — Uttara and Kriyāyoga material',detail:'Open scan of the concluding volume of the English translation.',url:'https://archive.org/details/dli.bengal.10689.21961'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'Asoke Chatterjee, Padma-Purāṇa: A Study (Krishnagar, 1967)',
      'N. A. Deshpande, trans., The Padma-Purāṇa, 10 vols., AITM 39–48',
      'Ānandāśrama and Veṅkaṭeśvara Sanskrit editions',
      'H. H. Wilson, Essays on the Purāṇas II'
    ],
    mahapuranaFinal:true,
    mahapuranaAudited:true,
    mahapuranaBenchmark:true
  });
})();
