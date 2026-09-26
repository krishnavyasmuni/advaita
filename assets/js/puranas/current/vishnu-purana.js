(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Viṣṇu Purāṇa', {
    sanskritTitle:'विष्णुपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the extant work is cast chiefly as a dialogue between Parāśara and Maitreya',
    language:'Sanskrit',
    booksCount:'6 aṃśas; 126 adhyāyas',
    verseCount:'23,000 ślokas in traditional Purāṇa catalogues; approximately 6,000–7,000 verses in the extant six-aṃśa text',
    period:'Composite Purāṇic text. Hazra proposed c. 275–325 CE for an early recension; a 4th–5th-century CE date for a form approaching the received text remains a common working estimate, although individual strata are earlier or later.',
    status:'Extant Vaiṣṇava Mahāpurāṇa; comparatively stable six-aṃśa organization; critically edited by M. M. Pathak from a large manuscript base (1997–1999).',
    extent:'Six aṃśas containing 22, 16, 18, 24, 38 and 8 chapters respectively. The traditional total of 23,000 verses does not correspond to the extent of the surviving six-aṃśa text.',
    primaryRecensions:[
      'The received six-aṃśa text represented by the Baroda critical edition.',
      'Printed and regional manuscript recensions agreeing in the principal sixfold plan but differing in readings and occasional supplementary matter.',
      'Traditional notices of a Viṣṇu Purāṇa of 23,000 verses, the precise relation of which to the extant text is uncertain.'
    ],
    leadParagraphs:[
      'The Viṣṇu Purāṇa is one of the eighteen Mahāpurāṇas and one of the principal Sanskrit authorities of early Vaiṣṇavism. The extant work is arranged in six aṃśas and 126 adhyāyas. Its range is characteristic of the Purāṇic class—cosmogony, cosmography, manvantaras, genealogies, royal history, social and domestic duties, rites for the dead, Kṛṣṇa mythology, yoga and final liberation—but the arrangement is unusually compact and regular.',
      'Of the major Purāṇas it conforms most closely to the celebrated pañcalakṣaṇa definition: sarga, primary creation; pratisarga, renewed creation and dissolution; vaṃśa, genealogies; manvantara, the periods of the Manus; and vaṃśānucarita, the histories of dynasties. This formal completeness partly explains the importance attached to the work by the older historians of Purāṇic literature.',
      'The work is thoroughly Vaiṣṇava without being merely a collection of sectarian legends. Viṣṇu is identified with the causal and sustaining principle of the universe, while Brahmā, Rudra, Prakṛti, cosmic time and the elements are placed within an encompassing theology of Viṣṇu. The fifth aṃśa narrates Kṛṣṇa at length; the third treats Vedic transmission, varṇa, āśrama and śrāddha; and the sixth closes with pralaya, yoga and mokṣa.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'The age of the Viṣṇu Purāṇa has been variously estimated, and the history of those estimates is itself a useful warning against assigning a single date to a Purāṇa. H. H. Wilson admitted the antiquity of much of its substance but was inclined to place the extant compilation relatively late. Vincent A. Smith proposed 400–300 BCE; C. V. Vaidya a date about the ninth century CE; Winternitz declined to assign a definite date; R. C. Hazra proposed c. 275–325 CE; R. C. Dikshitar argued for a considerably earlier period; and later writers have continued to differ. Rocher consequently observed that the date of the Viṣṇu Purāṇa is as contested as that of any other Purāṇa.',
          'Hazra’s estimate, c. 275–325 CE, belongs to his wider attempt to establish a relative chronology of the Purāṇas from their rites, customs, sectarian features, quotations and relations to Smṛti literature. The strength of the method is comparative: the age of a rite or doctrine is considered in relation to the growth of the Purāṇic corpus. Its limitation is equally clear. A date inferred for one stratum cannot be transferred without argument to all six aṃśas.',
          'The extant work contains materials of manifestly different origin. Vedic and epic traditions stand beside developed Vaiṣṇava theology, Purāṇic genealogies, the institutional teaching of the third aṃśa and a Kṛṣṇa cycle closely related to the Harivaṃśa and other Purāṇas. The question is therefore not the date at which one author composed 126 chapters, but the period by which something near the received sixfold text had taken shape.',
          'McComas Taylor, translating the Baroda critical text, regards the fourth or fifth century CE as a reasonable working date for the work reaching approximately its present extent, while insisting on the provisional character of such a statement. This is broadly compatible with the Gupta-period setting often assigned to the classical Vaiṣṇava synthesis represented in the text.',
          'The dates of surviving manuscripts are much later than the composition of the material they transmit. The manuscript record is evidence for textual transmission, not a terminus a quo for the myths, doctrines or institutions found in the work.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'The received Viṣṇu Purāṇa consists of six aṃśas comprising 126 chapters: I, 22; II, 16; III, 18; IV, 24; V, 38; VI, 8. The fifth aṃśa, devoted to Kṛṣṇa, is the longest. The sixth, treating Kali-yuga, dissolution and liberation, is the shortest.',
          'Traditional Purāṇa lists assign 23,000 ślokas to the Viṣṇu Purāṇa. The surviving six-aṃśa text contains only about six to seven thousand, the total varying with edition and the treatment of prose and irregular verses. The discrepancy has sometimes been explained by supposing the loss of a larger recension or by connecting the title with Bṛhadviṣṇu and related Vaiṣṇava texts; the evidence does not permit certainty. The safer procedure is to distinguish the traditional numerical notice from the extent of the extant text.',
          'The work has often been singled out as the best example of the pañcalakṣaṇa Purāṇa. Sarga occupies much of the first aṃśa; cosmological re-creation and pralaya are distributed through the first and sixth; manvantaras form the opening of the third; the fourth is devoted principally to vaṃśa and vaṃśānucarita; and the dynastic sequence prepares directly for the Kṛṣṇa narrative of the fifth. Its ritual and theological chapters show, however, that the five characteristics never exhausted the actual contents of a Mahāpurāṇa.',
          'The principal frame is the conversation of Maitreya and Parāśara. Parāśara relates that, after his father had been killed by a Rākṣasa, he began a rite for the destruction of the Rākṣasas; Vasiṣṭha induced him to desist, and Pulastya rewarded his restraint by granting him knowledge of the Purāṇa. The work thus places its own transmission within a genealogy of sages. The conventional attribution to Vyāsa belongs to the broader Purāṇic theory of authorship and redaction.'
        ],
        subsections:[
          {title:'The six aṃśas',bullets:[
            'Aṃśa I — 22 chapters: creation, cosmic time, Varāha, Brahmā, Rudra, Lakṣmī and the churning of the ocean, Dhruva, Pṛthu, the Pracetases and Prahlāda.',
            'Aṃśa II — 16 chapters: Jambūdvīpa and Bhāratavarṣa, the other continents and oceans, the lower worlds, hells, planetary regions, the sun and moon, and the story of Bharata with the teaching of Ṛbhu.',
            'Aṃśa III — 18 chapters: the Manus, repeated Vyāsas, division of the Vedas, the Purāṇa list, Yama, varṇa, āśrama, domestic rites, śrāddha and the Māyāmoha episode.',
            'Aṃśa IV — 24 chapters: solar and lunar dynasties, Rāma, Nimi and Janaka, Yayāti, Yadu and Puru, the Kuru and Pāṇḍava lines, and future kings.',
            'Aṃśa V — 38 chapters: Kṛṣṇa from his birth and Vraja childhood through Kaṃsa, Mathurā and Dvārakā to the destruction of the Yādavas.',
            'Aṃśa VI — 8 chapters: Kali-yuga, cosmic dissolution, the sufferings of saṃsāra, Khāṇḍikya and Keśidhvaja, yoga, liberation and the phalaśruti.'
          ]},
          {title:'Manuscripts and the received text',paragraphs:[
            'Manuscripts of the Viṣṇu Purāṇa survive in a number of regional copies and exhibit the ordinary variations of a long Sanskrit transmission. The sixfold plan is nevertheless more stable than the organization of many large Purāṇas. The absence, in the core six-aṃśa text, of immense tīrtha-māhātmyas and vrata compilations is one of the features already remarked by Wilson. Supplementary pilgrimage and temple material in particular witnesses must therefore be identified by recension rather than silently treated as part of one invariant text.'
          ]}
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'The contents are summarized below according to the six aṃśas of the critical text. Chapter references are given where a section has particular importance for the history of Purāṇic religion or for comparison with other Sanskrit works.'
        ],
        subsections:[
          {
            title:'First Aṃśa: Cosmology',
            paragraphs:[
              'Maitreya’s opening questions concern the origin, duration and dissolution of the world, the genealogies of gods and patriarchs, the Manus and the dynasties of kings. Parāśara’s answer begins with Viṣṇu as the ultimate ground of the universe. The sequence of Pradhāna, Mahat, Ahaṃkāra, tanmātras and gross elements is substantially Sāṃkhyan in terminology, but its theological interpretation is Vaiṣṇava: the whole process proceeds through the power and presence of Viṣṇu.',
              'The first chapters include the measures of cosmic time, Varāha’s raising of the earth and Brahmā’s renewed creation. The origin of living beings, patriarchs and social orders follows. Rudra appears in eight forms; Dakṣa’s descendants connect the cosmology with the great genealogical web which occupies the later Purāṇa.',
              'The ninth chapter contains the curse of Durvāsas, Indra’s loss of prosperity, the churning of the ocean and the manifestation of Lakṣmī. The Lakṣmī hymn is theologically important because it joins the goddess to Viṣṇu not merely as a mythological consort but within the order of cosmic prosperity and sovereignty.',
              'Dhruva occupies chapters 11–13. The boy’s exclusion from his father’s lap leads to austerity and meditation on Viṣṇu; his exaltation as the fixed celestial Dhruva turns a royal and domestic narrative into an example of devotion. Pṛthu and the Pracetases continue the themes of kingship, fertility and cosmic order.',
              'Chapters 16–20 narrate Prahlāda. His devotion to Viṣṇu resists the authority of Hiraṇyakaśipu and the instruction of the Daitya teachers. The episode is an important witness to the development of the Prahlāda–Nṛsiṃha complex before its fuller elaboration in later Purāṇas. The aṃśa closes with Kaśyapa’s descendants, the Maruts and a return to the nature of the highest reality.'
            ]
          },
          {
            title:'Second Aṃśa: Earth',
            paragraphs:[
              'The second aṃśa is the principal cosmographical book. Priyavrata distributes the continents; Jambūdvīpa is described with Meru at its centre; Bhāratavarṣa receives separate treatment; and six further dvīpas are placed in concentric order with their surrounding oceans. This is religious cosmography, not geographical reportage in the modern sense. Lands, mountains, rivers and peoples are arranged within a universe whose structure is itself an expression of cosmic order.',
              'The account continues downward through subterranean regions, nāgas and hells and upward through the solar, lunar and planetary spheres. The motions of the sun and moon, calendrical divisions and the production of rain are integrated with ritual time. Viṣṇu is repeatedly made the final principle by which the cosmological machinery is sustained.',
              'The last four chapters alter the character of the aṃśa. The story of Bharata treats the danger of attachment even after renunciation. Its culmination in the teaching associated with Ṛbhu and Nidāgha relativizes the distinctions elaborated in the cosmographical chapters: names, social identities and spatial divisions belong to empirical existence and are not the final truth apprehended by knowledge.'
            ]
          },
          {
            title:'Third Aṃśa: Time, Veda and religious institutions',
            paragraphs:[
              'The third aṃśa begins with the manvantaras. The present age belongs to Vaivasvata, the seventh Manu, while future Manus and their gods, Indras and seers are enumerated in the regular Purāṇic manner. The doctrine of repeated Vyāsas follows: in each Dvāpara a Vyāsa arranges Vedic revelation; the Vyāsa of the present cycle is Kṛṣṇa Dvaipāyana.',
              'Chapters 4–6 describe the division of the Ṛg, Yajur, Sāma and Atharva Vedas among pupils and schools. The sixth chapter is of special importance for Purāṇic self-representation, since it names the Purāṇas and describes Purāṇic Saṃhitās. The passage places Purāṇic transmission alongside the organization of Vedic learning rather than outside the learned brahmanical system.',
              'Chapter 7 gives the discourse concerning those who are beyond the ordinary jurisdiction of Yama: devotion to Viṣṇu is made a distinguishing sign. Chapters 8 and 9 then set out the duties of the four varṇas and the four āśramas. The juxtaposition is characteristic of the text. Bhakti does not abolish the social and ritual order; it is placed above and through it as the religious orientation by which action receives its final end.',
              'Chapters 10–16 form a compact manual of domestic and ancestral observance: rites at birth and naming, marriage, the daily obligations of the householder, purification, conduct, death rites and several forms of śrāddha. Wilson already observed that this portion has a comparatively sober ritual character and lacks the enormous catalogues of sectarian vows and local māhātmyas found in many later Purāṇas. Hazra consequently treated it as important evidence for the history of Purāṇic rites and customs, although individual prescriptions still require separate chronological examination.',
              'The Māyāmoha narrative of chapters 17–18 is explicitly polemical. A deluding figure causes the Daityas to reject Vedic authority and they are thereby deprived of the power which had protected them. The descriptions of doctrines labelled Buddhist or Jaina belong to the rhetoric of brahmanical sectarian controversy and cannot be used as impartial accounts of those traditions.'
            ]
          },
          {
            title:'Fourth Aṃśa: Dynasties',
            paragraphs:[
              'The fourth aṃśa contains the dynastic material required by the vaṃśa and vaṃśānucarita characteristics of Purāṇa. The solar line proceeds from Manu and Ikṣvāku through Sagara and other kings; a compressed Rāma narrative is inserted in this genealogy. The line of Nimi and the Janakas of Mithilā is also given.',
              'The lunar dynasty begins with Soma and passes through Budha and Purūravas. Yayāti and his sons provide the main branching point. The Yadu line leads to the ancestry of Vasudeva and Kṛṣṇa; the Puru line leads through Bharata and Kuru to the Kauravas and Pāṇḍavas. Genealogy thus joins the Purāṇa directly to the historical imagination of the Mahābhārata.',
              'Among the independent narratives embedded in this section are the Syamantaka jewel and the account of Śiśupāla. The latter is connected with the series Hiraṇyakaśipu–Rāvaṇa–Śiśupāla, a theological device by which repeated enemies of the deity are incorporated into a single history of divine descent.',
              'The final chapters turn to future dynasties. Such passages have repeatedly been pressed into service for dating the Purāṇas; they are also among the passages most susceptible to extension during transmission. Dynastic notices therefore have evidentiary value only after the text of the particular recension has been established.'
            ]
          },
          {
            title:'Fifth Aṃśa: Kṛṣṇa',
            paragraphs:[
              'The fifth aṃśa, in 38 chapters, is the longest division of the work. It begins with the burden of the earth and the birth of Kṛṣṇa to Devakī and Vasudeva. The child is transferred to the cowherd settlement, where the familiar cycle of Pūtanā, Kāliya, Dhenuka and Pralamba is narrated. The Govardhana episode occupies chapters 11–12 and is followed by Kṛṣṇa’s sport with the cowherd women and the slaying of Ariṣṭa and Keśin.',
              'Akrūra brings Kṛṣṇa and Balarāma to Mathurā; the royal washerman, the garland-maker, the wrestling arena and the death of Kaṃsa follow. Ugrasena is restored and the Yādavas are subsequently driven by Jarāsandha’s attacks toward Dvārakā.',
              'The Dvārakā cycle includes Rukmiṇī, Pradyumna, Aniruddha, Naraka, Aditi’s earrings, the Pārijāta tree, Uṣā and Bāṇa. Balarāma’s return to Vraja and the diversion of the Yamunā are also narrated. The aṃśa closes not in triumph but with the destruction of the Yādavas and Arjuna’s attempt to conduct the surviving women away from Dvārakā.',
              'The relation of this Kṛṣṇa book to the Harivaṃśa is close and has long been discussed. The direction of dependence is not settled by similarity alone. Equally significant is the relation to the Brahma Purāṇa: large portions, including almost the entire Kṛṣṇa cycle, recur there in very close wording but under a different narrative frame. Taylor treats this as clear evidence of large-scale Purāṇic textual reuse.',
              'Comparison with the Bhāgavata Purāṇa is instructive. The Viṣṇu Purāṇa knows much of the same Kṛṣṇa mythology, but its narration is generally shorter and its devotional rhetoric less expansive. The Bhāgavata develops episodes which are comparatively compressed here into a much more elaborate theology of Kṛṣṇa-bhakti.'
            ]
          },
          {
            title:'Sixth Aṃśa: Liberation',
            paragraphs:[
              'The final aṃśa begins with the conditions of Kali-yuga: diminution of dharma, disorder in social relations and the decline of traditional learning. The description is followed by a familiar Purāṇic paradox. Precisely because the age is corrupt, religious merit may be obtained by means less arduous than those required in earlier ages; devotion to Viṣṇu acquires special efficacy.',
              'Chapters 3–5 describe dissolution. The cosmological pralaya at the end of an aeon is distinguished from elemental dissolution and from the final release by which the individual is freed from Prakṛti. The exposition is joined to a sustained catalogue of the sufferings inherent in embodied existence, from birth and old age to death and the instability even of heavenly reward.',
              'The dialogue of Khāṇḍikya and Keśidhvaja occupies chapters 6–7. Keśidhvaja expounds yoga through restraint, observance, posture, breath, withdrawal, concentration and contemplation. The terminology is recognizably that of classical Yoga, but the object of contemplation and the final metaphysical ground are interpreted as Viṣṇu. Liberation therefore results neither from ritual action alone nor from devotion severed from knowledge, but from a synthesis in which knowledge, yoga and devotion converge.',
              'The eighth chapter is the phalaśruti. Hearing and reciting the Purāṇa are themselves praised as religious acts, and the work closes by returning its encyclopaedic contents to the economy of sacred transmission with which it began.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'The theology of the Viṣṇu Purāṇa cannot be reduced to the statement that Viṣṇu is the chief deity. Viṣṇu is repeatedly identified with the principles by which the world is produced, sustained and withdrawn. He is both the personal Lord praised in hymns and the highest reality in which the distinctions of cause and effect, deity and world, are comprehended.',
          'Brahmā and Rudra are not denied or treated as unreal. They are assigned cosmic functions within the sovereignty of Viṣṇu. In several passages the language is sufficiently comprehensive to admit different later Vedāntic constructions; this is one reason why the work could be employed by commentators of divergent metaphysical commitments.',
          'Kṛṣṇa is the dominant avatāra of the fifth aṃśa, but the text also gives important forms of the Varāha, Nṛsiṃha, Vāmana/Trivikrama and Rāma traditions. The familiar later scheme of exactly ten avatāras should not be mechanically imposed upon every passage of the Purāṇa.',
          'Lakṣmī has a conspicuous place in the churning-of-the-ocean narrative and is praised in relation to sovereignty, prosperity and the divine order. Her relation to Viṣṇu anticipates themes which later Vaiṣṇava systems elaborate much more systematically.',
          'The religious path is similarly synthetic. The third aṃśa preserves Vedic and domestic duties; the stories of Dhruva and Prahlāda exalt devotion; the second and sixth contain strong renunciatory and philosophical material; the sixth sets out yoga. The text does not present these as mutually exclusive religions but as levels and disciplines within a Vaiṣṇava conception of liberation.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'The modern textual basis of the Viṣṇu Purāṇa was substantially improved by M. M. Pathak’s Critical Edition of the Viṣṇupurāṇam, published by the Oriental Institute, Vadodara, in two volumes in 1997 and 1999. The editors collected forty-three Sanskrit manuscripts and selected twenty-seven principal witnesses for the constitution of the text and apparatus.',
          'The importance of this edition is methodological. Earlier printed texts and translations necessarily rested on a smaller and less explicitly controlled manuscript base. A critical edition does not recover an autograph of “Vyāsa”; it records and evaluates the surviving evidence and permits the reader to distinguish the constituted text from important variants.',
          'GRETIL supplies an electronic Sanskrit text derived from the Pathak edition. McComas Taylor’s 2021 complete English translation, The Viṣṇu Purāṇa: Ancient Annals of the God with Lotus Eyes, is based on the critical text and is accompanied by an introduction devoted to chronology, structure, intertextuality, theology and transmission.',
          'H. H. Wilson’s translation of 1840 nevertheless remains indispensable for the history of scholarship. It was the first major English Purāṇa translation to appear in print and includes extensive notes comparing Purāṇic, epic and Smṛti parallels. Fitzedward Hall later revised and supplemented Wilson’s work. Its textual base is pre-critical, but its philological observations often remain worth consulting.'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Viṣṇu Purāṇa exercised an influence disproportionate to its length. Its importance to later Vaiṣṇava Vedānta is especially clear in the works of Rāmānuja, who cites the text repeatedly when identifying the Brahman of the Upaniṣads with Viṣṇu-Nārāyaṇa and when explaining the relation of God, selves and the material world. Sucharita Adluri has shown that the Purāṇa is not ornamental evidence in Rāmānuja but part of the textual architecture by which scriptural authority is constructed.',
          'The text also attracted Sanskrit commentary. Later Vaiṣṇava exegetes, including the Viṣṇucittīya tradition, read its cosmology and bhakti within explicitly sectarian theological systems; Śrīdhara Svāmin likewise commented on the work. The existence of divergent commentary is significant because the Purāṇa’s metaphysical vocabulary cannot simply be equated with one later school.',
          'The Purāṇa’s influence on other Purāṇic texts is visible at the level of wording as well as theme. The Brahma Purāṇa contains extensive passages closely corresponding to the Viṣṇu Purāṇa, including the Kaṇḍu–Pramlocā story and nearly the entire Kṛṣṇa cycle. The Bhāgavata Purāṇa shares major narrative sequences but transforms them by expansion, theological reaccentuation and the development of Kṛṣṇa-bhakti.',
          'The work also preserves and reshapes older material. Vedic cosmogony and myth, epic genealogy, Dharmaśāstra-like social teaching and classical Yoga are all absorbed into a Vaiṣṇava Purāṇic synthesis. “Influence” is therefore not a one-directional process: the Viṣṇu Purāṇa is both recipient and transmitter.'
        ],
        subsections:[
          {title:'Film adaptation',paragraphs:[
            'The 2025 animated film Mahavatar Narsimha drew upon the Viṣṇu Purāṇa together with the Nṛsiṃha Purāṇa and Bhāgavata Purāṇa. Its use belongs to the modern reception of the Prahlāda–Nṛsiṃha cycle and should be distinguished from evidence for the chronology or formation of the Sanskrit text.'
          ]}
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'For the history of Hindu rites the third aṃśa deserves treatment apart from the mythological books. Chapters 8–9 set out varṇa and āśrama; chapters 10–12 treat birth, marriage, the householder and sadācāra; chapters 13–16 treat śrāddha and ancestral observance. Hazra repeatedly used this kind of material to establish a relative chronology of Purāṇic practices.',
          'The text distinguishes the occupations and duties of the four varṇas while also listing obligations common to them, including truthfulness, benevolence, restraint, non-theft and avoidance of wrongful violence. These passages are normative śāstric statements. They are evidence for ideals articulated by a learned textual tradition; they cannot by themselves be taken as a statistical description of social life in a particular century.',
          'The āśrama material presents brahmacarya, householdership, forest life and renunciation as successive or coordinated forms of religious discipline. The householder is given particular ritual weight because sacrifice, hospitality and ancestral rites depend upon him.',
          'The śrāddha chapters are unusually detailed for so compact a Purāṇa. They discuss occasions, officiants, eligibility, offerings, prohibited foods, monthly rites, sapinḍīkaraṇa and the relation of the deceased to the ancestral group. Comparison with Manu and other Smṛti texts was already made by Wilson and became central to Hazra’s use of Purāṇic ritual chapters as historical evidence.',
          'The relatively restrained character of these chapters is noteworthy. Wilson stressed the absence from the core text of large bodies of sectarian vows, festival calendars and temple māhātmyas. This observation cannot by itself date the work, but it remains an important feature when the Viṣṇu Purāṇa is compared with the accretional ritual corpora of the Padma, Skanda and other later Purāṇas.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'M. M. Pathak (ed.), The Critical Edition of the Viṣṇupurāṇam, 2 vols., Oriental Institute, Vadodara, 1997–1999.',
          'McComas Taylor, The Viṣṇu Purāṇa: Ancient Annals of the God with Lotus Eyes, ANU Press, 2021.',
          'H. H. Wilson, The Vishnu Purana: A System of Hindu Mythology and Tradition, 1840; later revised by Fitzedward Hall.',
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3, Wiesbaden, 1986.',
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
          'Sucharita Adluri, Textual Authority in Classical Indian Thought: Ramanuja and the Vishnu Purana, Routledge, 2015.',
          'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology: A Reader in the Sanskrit Purāṇas.'
        ]
      }
    ],

    chapterMap:[
      'I.1–22 — Creation, cosmic time, Varāha, Brahmā, Rudra, Lakṣmī, Dhruva, Pṛthu, Pracetases, Prahlāda.',
      'II.1–16 — Jambūdvīpa, Bhāratavarṣa, concentric continents and oceans, lower worlds, hells, sun, moon, Bharata and Ṛbhu.',
      'III.1–18 — Manvantaras, Vyāsas, Vedic schools, Purāṇa list, Yama, varṇa, āśrama, domestic rites, śrāddha, Māyāmoha.',
      'IV.1–24 — Solar and lunar dynasties, Rāma, Janaka, Yayāti, Yadu, Puru, Kuru-Pāṇḍava genealogy, future kings.',
      'V.1–38 — Kṛṣṇa from Devakī and Vraja through Kaṃsa and Dvārakā to the destruction of the Yādavas.',
      'VI.1–8 — Kali-yuga, pralaya, saṃsāra, Khāṇḍikya–Keśidhvaja, yoga, liberation, phalaśruti.'
    ],
    ritualHistory:'The principal institutional and ritual dossier is III.8–16: varṇa, āśrama, birth and marriage rites, householder conduct, death rites and śrāddha. Hazra used these chapters comparatively in his chronology of Purāṇic rites and customs.',
    rituals:['Saṃskāras connected with birth and marriage','Daily rites and obligations of the householder','Purification and sadācāra','Death rites','Ekoddiṣṭa and other śrāddhas','Sapiṇḍīkaraṇa and ancestral offerings'],
    sacredGeography:['Bhāratavarṣa','Jambūdvīpa','Meru','The six other dvīpas','Lower worlds and Narakas','Vraja, Mathurā and Dvārakā in the Kṛṣṇa book'],
    dharma:['Varṇa duties in III.8','Āśrama duties in III.9','Birth, marriage and household conduct in III.10–12','Śrāddha in III.13–16'],
    reception:'Cited extensively by Rāmānuja and later Vaiṣṇava theologians; commented upon in Sanskrit; influential for later Purāṇic Kṛṣṇa narrative and Vaiṣṇava doctrinal synthesis.',
    scholarlyPositions:[
      'Hazra: c. 275–325 CE for an early recension or substantial form of the text.',
      'Rocher: the date remains contested and no single date should be made to cover every stratum.',
      'Taylor: a fourth–fifth-century CE date for something approaching the received extent is a reasonable working estimate, not an exact demonstrable terminus.'
    ],
    dependencies:[
      'Vedic cosmogonic and mythic material is recast within a Vaiṣṇava theology.',
      'Epic genealogy and Kṛṣṇa narrative connect the text closely with the Mahābhārata and Harivaṃśa.',
      'Large verbal correspondences with the Brahma Purāṇa demonstrate extensive Purāṇic textual reuse.',
      'The Bhāgavata Purāṇa shares and greatly expands important parts of the Kṛṣṇa cycle.',
      'The institutional chapters stand in close relation to Dharmaśāstra and Gṛhya-style ritual traditions.'
    ],
    primaryEvidence:[
      'M. M. Pathak critical edition, 1997–1999.','GRETIL electronic text based on the critical edition.','H. H. Wilson translation, 1840, with later Hall revision.','McComas Taylor complete translation of the critical text, 2021.'
    ],
    sources:[
      {key:'taylor',title:'McComas Taylor — The Viṣṇu Purāṇa: Ancient Annals of the God with Lotus Eyes (ANU Press, 2021)',detail:'Complete translation based on the Baroda critical text; introduction and notes on date, structure, textual relations, theology and transmission.',url:'https://press.anu.edu.au/publications/textbooks/visnu-purana'},
      {key:'pathak',title:'M. M. Pathak (ed.) — The Critical Edition of the Viṣṇupurāṇam, 2 vols. (Oriental Institute, 1997–1999)',detail:'Critical Sanskrit edition based on extensive manuscript collation.',url:'https://books.google.com/books/about/The_critical_edition_of_the_Vi%E1%B9%A3%E1%B9%87upur.html?id=BjwqAAAAYAAJ'},
      {key:'gretil',title:'GRETIL — Viṣṇupurāṇa, critical text',detail:'Electronic Sanskrit text based on the Pathak edition.',url:'https://gretil.sub.uni-goettingen.de/gretil/corpustei/transformations/html/sa_viSNupurANa-crit.htm'},
      {key:'wilson',title:'H. H. Wilson — The Vishnu Purana (1840)',detail:'First major English Purāṇa translation; valuable historical introduction and comparative notes, though pre-critical.',url:'https://www.sacred-texts.com/hin/vp/'},
      {key:'adluri',title:'Sucharita Adluri — Textual Authority in Classical Indian Thought: Ramanuja and the Vishnu Purana (2015)',detail:'Study of the Purāṇa as scriptural authority in Rāmānuja and Śrī Vaiṣṇava Vedānta.',url:'https://www.routledge.com/Textual-Authority-in-Classical-Indian-Thought-Ramanuja-and-the-Visnu-Purana/Adluri/p/book/9780415695756'},
      {key:'dimmitt',title:'Cornelia Dimmitt and J. A. B. van Buitenen — Classical Hindu Mythology',detail:'Comparative study and translations from the Sanskrit Purāṇas.',url:'https://books.google.com/books?id=TmU8EAAAQBAJ'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'H. H. Wilson, The Vishnu Purana (1840)',
      'M. M. Pathak (ed.), The Critical Edition of the Viṣṇupurāṇam (1997–1999)',
      'McComas Taylor, The Viṣṇu Purāṇa: Ancient Annals of the God with Lotus Eyes (2021)',
      'Sucharita Adluri, Textual Authority in Classical Indian Thought: Ramanuja and the Vishnu Purana (2015)'
    ]
  });
})();
