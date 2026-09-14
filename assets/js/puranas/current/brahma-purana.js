(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => {
    D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data);
  };

  put('Brahma Purāṇa', {
    sanskritTitle:'ब्रह्मपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the received frame has Lomaharṣaṇa recount to the sages at Naimiṣāraṇya material formerly spoken by Brahmā',
    language:'Sanskrit',
    booksCount:'245 numbered adhyāyas in the Ānandāśrama recension; the sequence includes a duplicated chapter number in some descriptions',
    verseCount:'10,000 ślokas in traditional Purāṇa catalogues; 13,783 verses counted by S. H. Trivedi in the 245-chapter Ānandāśrama text, including its large attached materials',
    period:'A layered textual tradition. Older Purāṇic materials survive, but R. C. Hazra placed the main compilation of the received Brahma Purāṇa broadly between the tenth and twelfth centuries CE. The Odisha blocks, Gautamī Māhātmya and concluding ritual-philosophical chapters have separate histories and cannot be assigned one date.',
    status:'Extant Mahāpurāṇa title; the received 245-chapter compilation is probably not identical with the earlier Brahma Purāṇa cited by medieval legal writers. The Gautamī Māhātmya is a separately transmissible work attached within the common recension.',
    extent:'The common printed text has 245 chapters. Its largest continuous block is the Gautamī or Godāvarī Māhātmya at chapters 70–175; chapters 28–69 and 176–178 are strongly associated with Odisha sacred geography; chapters 180–210 reproduce much of the Viṣṇu Purāṇa Kṛṣṇa cycle.',
    primaryRecensions:[
      'The 245-chapter Ānandāśrama Sanskrit recension used extensively by Hazra and Trivedi.',
      'The text indexed by Peter Schreiner and Renate Söhnen in Sanskrit Indices and Text of the Brahmapurāṇa (1987), followed by their chapter-by-chapter summary (1989).',
      'The Gautamī Māhātmya, chapters 70–175 in the common numbering, which also circulates independently as a Godāvarī pilgrimage text.',
      'Brahmottara materials transmitted as a supplement in some printed and regional traditions; they must not be assumed to belong to every witness of the 245-chapter text.'
    ],
    leadParagraphs:[
      'The Brahma Purāṇa is conventionally the first of the eighteen Mahāpurāṇas and is consequently called the Ādi Purāṇa in later descriptions. That honorific does not make the surviving 245-chapter compilation the oldest Purāṇa. The received work is a layered Sanskrit archive in which creation and genealogy stand beside immense bodies of pilgrimage narrative, regional temple tradition, ritual law, Kṛṣṇa mythology, Sāṃkhya, Yoga and liberation teaching.',
      'Its most distinctive materials form two sacred landscapes. Chapters 28–69 and 176–178 map Utkala and the Puruṣottama–Jagannātha region, narrating Indradyumna, the wooden images of Kṛṣṇa, Balarāma and Subhadrā, solar worship, Ekāmra and the five Puruṣottama tīrthas. Chapters 70–175 form the Gautamī Māhātmya, in which myths from across the Purāṇic world are relocated along the Godāvarī and used to explain the origin and merit of named bathing places.',
      'The title is also theologically misleading if read too narrowly. Brahmā is an important narrator and creator, but the work is not principally a Brahmā sectarian scripture. Its Odisha chapters are strongly Vaiṣṇava, its solar chapters praise Sūrya, its Gautamī narratives repeatedly honour Śiva and Viṣṇu, and its closing chapters join Nārāyaṇa devotion to Sāṃkhya, Yoga and mokṣa.'
    ],

    articleSections:[
      {
        title:'Date of composition',
        paragraphs:[
          'A single date for the Brahma Purāṇa would conceal the main fact established by comparison: the title is old, but the present text is a compilation of strata. Chapters correspond at length with the Vāyu, Mārkaṇḍeya, Viṣṇu and Sāmba Purāṇas, the Harivaṃśa, and the Śānti and Anuśāsana books of the Mahābhārata. Textual borrowing, regional addition and independent circulation of large māhātmyas require the units to be dated separately.',
          'R. C. Hazra’s most consequential argument concerns textual identity. Medieval Nibandha authors quote many verses under the name Brahma Purāṇa which are absent from the received text, even when the surviving chapters treat the same ritual subjects. He therefore concluded that the present compilation had displaced or radically reworked an older Brahma Purāṇa. On the evidence of quotations and ritual history he placed the principal compilation broadly between the tenth and twelfth centuries, while assigning different limits to particular chapter groups.',
          'The Odisha material illustrates the method and its uncertainty. Trivedi, following Hazra, placed important Puruṣottama and Ekāmra strata between roughly the ninth and twelfth centuries because of the sacred sites known to the text and their use by medieval ritual digests. Arguments from the Konark Sun temple are less decisive than they first appear: a verse can refer to an earlier solar shrine, and identification with the surviving thirteenth-century monument cannot by itself date the chapter.',
          'The Gautamī Māhātmya is textually secondary to the Odisha block. The Nāradīya Purāṇa’s synopsis of a Brahma Purāṇa knows Puruṣottama and Ekāmra materials but does not mention the Gautamī cycle. Hazra judged the attached Godāvarī work unlikely to be earlier than the tenth century, while acknowledging that the absence of datable external borrowing prevents an exact terminus.',
          'Older material nevertheless remains embedded in the compilation. Dynastic lists, cosmogony, manvantara doctrine, epic narratives and verses shared with older Purāṇic traditions cannot be dated merely by the medieval redaction which now contains them. The historically responsible formula is therefore: an old title and inherited materials, a predominantly medieval received compilation, and some later additions.'
        ]
      },
      {
        title:'Structure',
        paragraphs:[
          'The Ānandāśrama recension used by Trivedi contains 245 numbered chapters and 13,783 verses by her count. Traditional Purāṇa catalogues assign 10,000 verses to the Brahma Purāṇa. These totals refer to different textual concepts and witnesses; neither should be silently converted into an exact measure of an archetypal work.',
          'Modern accounts sometimes divide the text into Pūrvabhāga and Uttarabhāga, but the received chapter sequence is more intelligible as a succession of textual blocks. The opening chapters supply cosmogony, manvantaras, genealogies, geography and dynastic history. A long Odisha section is followed by the Gautamī Māhātmya; the text then returns briefly to Odisha, passes into Kṛṣṇa narrative, and closes with hells, karmic retribution, ancestral rites, Vaiṣṇava devotion, dissolution, Sāṃkhya and Yoga.',
          'The speakers change with the blocks. Lomaharṣaṇa addresses the sages at Naimiṣāraṇya and reports an older discourse of Brahmā, but Vyāsa, Nārada, Brahmā, Maheśvara, Vasiṣṭha and other speakers also govern independent units. The plurality of frames supports what comparison already shows: the book is not the work of one historical author writing 245 chapters in sequence.',
          'The Gautamī Māhātmya is the clearest internal seam. It begins at chapter 70 with Nārada questioning Brahmā about tīrthas and ends at chapter 175 by repeating the descent of Gautamī Gaṅgā. It has its own geographical purpose and circulates apart from the larger Purāṇa. Translation and citation should therefore identify both its Brahma Purāṇa numbering and its identity as an independent Godāvarī māhātmya.'
        ],
        subsections:[
          {title:'Principal chapter blocks',bullets:[
            'Chapters 1–27 — Naimiṣāraṇya frame, creation, patriarchs, manvantaras, solar and lunar dynasties, Rāma, Kṛṣṇa genealogy, cosmography and Bhāratavarṣa.',
            'Chapters 28–69 — Sūrya worship, Śiva–Satī–Pārvatī narratives, Ekāmra and Utkala, Indradyumna, the wooden Jagannātha triad and the Puruṣottama tīrthas.',
            'Chapters 70–175 — Gautamī Māhātmya: the descent of the Godāvarī and more than a hundred origin legends for riverine tīrthas.',
            'Chapters 176–179 — return to Puruṣottama, Ananta-Vāsudeva and the Kaṇḍu–Pramlocā story.',
            'Chapters 180–210 — Kṛṣṇa-caritra closely corresponding to the fifth book of the Viṣṇu Purāṇa.',
            'Chapters 211–225 — avatāras, hells, karmic consequence, gifts, śrāddha, mixed social categories and dharma.',
            'Chapters 226–229 — praise of Vāsudeva, Kṛṣṇa worship, the devout outcaste and Viṣṇu’s māyā.',
            'Chapters 230–245 — Kali-yuga and future time, cosmic dissolutions, Sāṃkhya, Yoga, knowledge, liberation and the phalaśruti.'
          ]}
        ]
      },
      {
        title:'Contents',
        paragraphs:[
          'The following map describes the common 245-chapter recension. It does not imply that every block originated together or occurs in identical form in every manuscript. The chapter sequence itself preserves the history of a Purāṇa becoming a library of cosmology, dynasty, pilgrimage, ritual, myth and philosophy.'
        ],
        subsections:[
          {
            title:'Chapters 1–27: creation, dynasties and the world',
            paragraphs:[
              'At Naimiṣāraṇya, Lomaharṣaṇa begins by recalling Brahmā’s discourse and narrates the cosmic egg, the mental sons, Rudra, Dakṣa, Manu and the peopling of the world. The stories of Vena and Pṛthu, the milking of the earth, the Pracetases and Dakṣa’s descendants establish the characteristic Purāṇic movement from cosmogony into genealogy.',
              'The manvantaras and dissolutions lead into the solar genealogy: Vivasvat, Saṃjñā and Chāyā, Yama, the Aśvins, Ilā and Sudyumna, Ikṣvāku, Triśaṅku, Sagara and Bhagīratha. The lunar line proceeds through Soma, Budha, Purūravas, Yayāti, Yadu and Puru toward the Kuru and Yādava worlds. Rāma is treated within the solar dynasty, while Kṛṣṇa’s ancestry prepares for the later Kṛṣṇa-caritra.',
              'The block also describes Jambūdvīpa, the concentric continents and oceans, Bhāratavarṣa, peoples, mountains and rivers. Chapter 25 is a pilgrimage catalogue with a strong northern orientation; Trivedi regarded its weak connection with adjacent chapters as a sign of interpolation.'
            ]
          },
          {
            title:'Chapters 28–69: Odisha and Puruṣottama',
            paragraphs:[
              'Chapters 28–33 form a concentrated solar dossier: Koṇāditya, the birth of Mārtaṇḍa, Sūrya’s names, ritual bathing, calendrical observances and Saptamī worship. Verbal parallels with the Sāmba and Bhaviṣya traditions make this material important for the textual history of Sanskrit solar religion.',
              'Chapters 34–40 recount Dakṣa’s sacrifice, Satī’s death, Pārvatī’s austerity and marriage, Kāma’s burning and Vīrabhadra’s destruction of the renewed sacrifice. Ekāmrakṣetra and Utkala then become the setting for a specifically regional sacred history.',
              'The Puruṣottama cycle centres on Indradyumna. An earlier blue-stone image disappears; the king performs sacrifice, receives a dream, finds divine wood from the sea and has images of Kṛṣṇa, Balarāma and Subhadrā fashioned and consecrated. Later chapters describe the banyan, Markandeya’s vision of the divine child during pralaya, Nṛsiṃha worship, Śvetamādhava, the ocean bath, the five tīrthas, ceremonial bathing and repeated journeys through the Puruṣottama field.',
              'This is not merely a list of monuments. Narrative, image theology, kingship, ritual calendar and the physical circuit of pilgrimage together produce a religious map of Odisha. The received Brahma Purāṇa is therefore a major literary witness to the developing Jagannātha–Puruṣottama tradition.'
            ]
          },
          {
            title:'Chapters 70–175: the Gautamī Māhātmya',
            paragraphs:[
              'The Gautamī Māhātmya begins by deriving the Godāvarī from Gaṅgā. Through the marriage of Śiva and Pārvatī, Gaṇeśa’s stratagem and Gautama’s expiation, the heavenly river is released from Śiva’s hair. Gautama asks her to benefit the worlds; her earthly course becomes the Gautamī or Godāvarī and reaches the eastern ocean.',
              'The remaining chapters are an extended tīrtha atlas. Famous myths—Vāmana and Bali, Sagara and Bhagīratha, Varāha, Kārttikeya, Hariścandra and Śunaḥśepa, Dadhīci, Dakṣa, the churning of the ocean, Ilā, Rāma, Garuḍa, Lakṣmī, the gods and demons—are relocated along the river. Each narrative explains the name of a bathing place and the sin, curse, ritual failure or worldly distress which its water is said to remove.',
              'The collection accommodates multiple deities. Śiva grants boons and establishes liṅgas; Viṣṇu protects sacrifices and defeats demons; Sūrya, Gaṇeśa, the Goddess and the river herself receive worship. The famous story of the hunter and the learned Brahmin contrasts technically correct Śiva worship with absolute devotional self-offering. The river is the unifying sacred power rather than one exclusive sectarian doctrine.',
              'As a historical source, the māhātmya records how regional geography was made pan-Indian: inherited Purāṇic myths authenticate local sites, and local sites in turn offer ritual access to the whole mythic universe. Its late attachment to the Brahma Purāṇa should not obscure its importance as an independent Godāvarī scripture.'
            ]
          },
          {
            title:'Chapters 176–210: Puruṣottama and Kṛṣṇa',
            paragraphs:[
              'After the Gautamī cycle the text returns to Odisha. The image of Vāsudeva passes from Brahmā to Indra, Rāvaṇa, Vibhīṣaṇa, Rāma and the ocean before being established in Puruṣottamakṣetra. Ananta-Vāsudeva and the field are praised, and the Kaṇḍu–Pramlocā narrative links austerity, desire and the birth of Māriṣā.',
              'Chapters 180–210 narrate Kṛṣṇa from birth through Vraja, Mathurā and Dvārakā. The wording closely follows the Viṣṇu Purāṇa’s fifth book across most of the cycle. Such extensive correspondence is not a vague similarity of legend; it is evidence of large-scale textual reuse within the Purāṇic tradition.',
              'The Kṛṣṇa book is therefore read on two levels. Religiously it supplies the received Brahma Purāṇa with a sustained Vaiṣṇava narrative. Philologically it is one of the clearest witnesses that a Purāṇa could absorb an already organized textual block and place it under a different frame and title.'
            ]
          },
          {
            title:'Chapters 211–229: consequence, ancestors and devotion',
            paragraphs:[
              'The next chapters survey divine descents and then turn sharply toward eschatology. Hells, paths to Yama, sins and their retributions translate moral action into post-mortem geography. Gifts and righteous conduct provide the positive counterpart.',
              'The śrāddha block discusses the Pitṛs, occasions, officiants, offerings, exclusions and ritual procedure. The surrounding chapters address food, purity, mixed social categories and the authority of dharma. Because medieval legal compilers preserve Brahma Purāṇa quotations not found here, the received ritual dossier must be distinguished from the older work they cited.',
              'Chapters 226–229 return to Vāsudeva. One narrative tells of a devout outcaste who keeps an Ekādaśī vigil by singing to Viṣṇu and transfers the merit to a Brahmarākṣasa. Another makes Nārada experience Viṣṇu’s māyā through an entire alternate embodied life. These stories join ritual devotion, moral equality before bhakti and the instability of worldly identity.'
            ]
          },
          {
            title:'Chapters 230–245: dissolution, Sāṃkhya and Yoga',
            paragraphs:[
              'The final movement describes the disorders of Kali-yuga, future conditions and several forms of dissolution. Naimittika, prākṛta and final release are distinguished, moving the text from cosmic time into the problem of freedom from rebirth.',
              'Sāṃkhya categories, the twenty-four tattvas, kṣara and akṣara, kṣetra and kṣetrajña, knowledge and ignorance are joined to disciplines of Yoga. Concentration, restraint and insight culminate in Nārāyaṇa rather than in a purely non-theistic scheme.',
              'The last chapter praises hearing and reciting the Purāṇa. The phalaśruti makes the composite book—creation, pilgrimage, Kṛṣṇa, ancestors and philosophy—into a single sacred act of transmission even though historical analysis can still recover the seams within it.'
            ]
          }
        ]
      },
      {
        title:'Theology',
        paragraphs:[
          'The Brahma Purāṇa is not chiefly a theology of Brahmā. The creator supplies narrative authority and appears throughout the cosmology, but supremacy shifts with genre and textual block. The work is best described as a regionally inflected, strongly Vaiṣṇava but deliberately capacious Purāṇic compilation.',
          'The Puruṣottama chapters identify Viṣṇu–Kṛṣṇa as the liberating Lord embodied in the sacred field and its images. Nṛsiṃha, Vāmana, Varāha, Rāma and Kṛṣṇa are prominent, and the closing Yoga material makes Nārāyaṇa the goal of contemplative discipline. The long Kṛṣṇa-caritra reinforces this Vaiṣṇava centre.',
          'Śiva nevertheless holds sovereign roles throughout the received book. The Satī–Pārvatī cycle, Ekāmra, the origin of the Gautamī, numerous Gautamī liṅgas and the devotional hunter all belong to robust Śaiva religious worlds. A Gautamī dialogue can call Brahmā, Viṣṇu and Śiva forms of one reality even while praising Śiva’s special generosity. Such passages should be read in their immediate narrative setting rather than forced into a single systematic creed.',
          'Sūrya is the focus of chapters 28–33, which prescribe image, hymn, bath, festival and Saptamī observance. The presence of this concentrated Saura layer explains the secondary title Saura Purāṇa sometimes associated with the work; it does not turn all 245 chapters into one solar scripture.',
          'The concluding philosophy joins Purāṇic theism to Sāṃkhya and Yoga. The changing world is kṣara, the divine ground akṣara; knowledge of the self and the tattvas, ethical restraint, meditation and devotion converge in liberation. The result is synthetic rather than scholastically uniform.'
        ]
      },
      {
        title:'Critical edition',
        paragraphs:[
          'No complete stemmatic critical edition of the Brahma Purāṇa comparable to the Baroda critical Viṣṇu Purāṇa has established a single reconstructed text for the entire manuscript tradition. The common Sanskrit editions therefore remain witnesses to particular recensions, and exact chapter references should name the edition used.',
          'The Ānandāśrama edition underlies much twentieth-century analysis. Surabhi H. Trivedi’s 1960 critical study used that 245-chapter text and compared parallel passages, Nibandha quotations, ritual history, regional geography and chapter form. It is a critical study of the Purāṇa, not itself a critical Sanskrit edition in the modern stemmatic sense.',
          'Peter Schreiner and Renate Söhnen’s Sanskrit Indices and Text of the Brahmapurāṇa (1987) supplied a transliterated text with extensive indices; their Brahmapurāṇa: Summary of Contents, with Index of Names and Motifs (1989) provides a detailed chapter-by-chapter analytical guide. Together these volumes remain basic tools for locating names, motifs and parallel narrative units.',
          'The four-volume English translation prepared by a board of scholars under G. P. Bhatt and published in the Ancient Indian Tradition and Mythology series gives broad access to the received text and its Gautamī material. Bibek Debroy’s two-volume translation offers a recent complete English rendering based on a modern printed Sanskrit text. A translation’s completeness should not be confused with a critical reconstruction of all manuscripts.',
          'The Gautamī Māhātmya requires separate textual control because it circulates independently and entered the Brahma Purāṇa secondarily. Likewise, Brahmottara supplements and regional māhātmya witnesses must be catalogued rather than merged automatically with the 245-chapter base.'
        ]
      },
      {
        title:'Influences and reception',
        paragraphs:[
          'The Brahma Purāṇa’s first place in many lists gave it the honorific Ādi Purāṇa and continuing canonical visibility, but modern scholarship separates that rank from chronological antiquity. Its reception therefore has two histories: the prestige of the old title and the regional-religious authority of the received compilation.',
          'Its textual relations are unusually extensive. Opening cosmology and genealogy parallel the Vāyu and other Purāṇas; solar passages intersect with Sāmba and Bhaviṣya traditions; the Kaṇḍu–Pramlocā story and almost the entire Kṛṣṇa cycle correspond closely with the Viṣṇu Purāṇa; dharma and mokṣa passages overlap with the Mahābhārata. These relations show a shared Purāṇic textual economy, not merely influence by one author on another.',
          'The Puruṣottama chapters became important evidence for the literary formation of the Jagannātha sacred complex. They connect Indradyumna, divine wood, the Kṛṣṇa–Balarāma–Subhadrā triad, temple ritual, annual observance and the geography of Purī in a single narrative field. Their value lies in the history of a tradition, not in proving one exact construction date for the surviving temple.',
          'The Gautamī Māhātmya has a parallel regional life. By giving Godāvarī sites mythic origins and portable rites, it helped constitute the river as a complete sacred geography. Its independent transmission and translation show that readers could receive the māhātmya as a scripture in its own right while still locating it inside the Brahma Purāṇa.',
          'Medieval Dharma writers cite a Brahma Purāṇa extensively. The absence of many quoted verses from the present recension is not a minor bibliographic inconvenience; it is one of the strongest witnesses that the canonical title outlived and was transferred across changing textual bodies.'
        ]
      },
      {
        title:'Rites, dharma and social history',
        paragraphs:[
          'Pilgrimage is the dominant ritual form of the received text. The Odisha chapters coordinate bathing, seeing images, fasting, calendrical festivals, vows and repeated circuits through a bounded sacred field. The Gautamī Māhātmya performs the same work along a river, assigning myths, deities, sins and promised fruits to particular confluences and banks.',
          'The rites belong to multiple cults: Sūrya worship and Saptamī observance; consecration and festival worship of Kṛṣṇa, Balarāma and Subhadrā; Nṛsiṃha and Nārāyaṇa worship; Śiva liṅgas and vows; river bathing; gifts; Ekādaśī vigil; and temple construction. This plurality makes the work valuable for the history of lived Purāṇic religion beyond a one-deity classification.',
          'Chapters 214–225 gather hells, karmavipāka, gifts, śrāddha, food rules, social categories and general dharma. They articulate normative ideals: they prescribe what learned compilers believed should be done and what consequences should follow. They are not direct statistics for medieval society, and the date of each prescription must be assessed through quotation and textual comparison.',
          'The ancestral chapters are especially important for textual history. Earlier Nibandha authorities cite many Brahma Purāṇa rules on impurity, funerals, penance and śrāddha that are missing from the extant book. Where present chapters are cited by later authors, they can supply termini for particular strata; where citations fail to match, they reveal replacement rather than simple loss of a verse.',
          'The text also offers narrative ethics. Hospitality is dramatized by the pigeons who sacrifice themselves for a hunter; fidelity to dharma is tested through Manikuṇḍala; devotional intention is contrasted with ritual expertise in the hunter and Brahmin story; the outcaste singer’s Ekādaśī merit releases a Brahmarākṣasa. These narratives translate prescriptions into morally charged lives while retaining the social assumptions of their textual worlds.'
        ]
      },
      {
        title:'Further reading',
        bullets:[
          'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, especially the analysis of the received Brahma Purāṇa and the lost earlier text.',
          'Ludo Rocher, The Purāṇas, A History of Indian Literature II.3, Wiesbaden, 1986, pp. 154–156.',
          'Surabhi H. Trivedi, The Brahma Purāṇa: A Critical Study, Maharaja Sayajirao University of Baroda, 1960.',
          'Peter Schreiner and Renate Söhnen, Sanskrit Indices and Text of the Brahmapurāṇa, Purāṇa Research Publications 1, 1987.',
          'Renate Söhnen and Peter Schreiner, Brahmapurāṇa: Summary of Contents, with Index of Names and Motifs, Purāṇa Research Publications 2, 1989.',
          'G. P. Bhatt and the Board of Scholars, The Brahma Purāṇa, 4 vols., Ancient Indian Tradition and Mythology series.',
          'Bibek Debroy, The Brahma Purana, 2 vols., India Penguin Classics, 2021–2022.'
        ]
      }
    ],

    chapterMap:[
      '1–27 — Creation, manvantaras, solar and lunar dynasties, Rāma, Kṛṣṇa genealogy, cosmography and Bhāratavarṣa.',
      '28–69 — Sūrya, Satī–Pārvatī, Ekāmra, Utkala, Indradyumna, Jagannātha and Puruṣottama pilgrimage.',
      '70–175 — Gautamī/Godāvarī Māhātmya and its tīrtha legends.',
      '176–179 — Puruṣottama, Ananta-Vāsudeva and Kaṇḍu–Pramlocā.',
      '180–210 — Kṛṣṇa-caritra closely parallel to Viṣṇu Purāṇa book V.',
      '211–225 — Avatāras, hells, karmic retribution, gifts, śrāddha and dharma.',
      '226–229 — Vāsudeva worship, Ekādaśī devotion and Viṣṇu’s māyā.',
      '230–245 — Kali-yuga, dissolution, Sāṃkhya, Yoga, liberation and phalaśruti.'
    ],
    ritualHistory:'The largest ritual dossier is pilgrimage: Puruṣottamakṣetra and the Godāvarī are mapped through bath, image-seeing, vow, festival, gift and narrated merit. Chapters 214–225 add hells, karmic consequence, śrāddha, food and social rules; comparison with Nibandha quotations demonstrates that the received dossier replaced parts of an older Brahma Purāṇa.',
    rituals:['Puruṣottama pilgrimage circuits and ocean bathing','Jagannātha/Kṛṣṇa, Balarāma and Subhadrā consecration and worship','Sūrya worship and Saptamī observance','Gautamī/Godāvarī tīrtha bathing','Nṛsiṃha, Nārāyaṇa and Śiva worship','Ekādaśī vigil and devotional song','Dāna and śrāddha'],
    sacredGeography:['Puruṣottamakṣetra/Purī','Ekāmrakṣetra/Bhubaneswar','Utkala/Odisha','Koṇāditya/solar sacred place','Gautamī/Godāvarī and its tīrthas','Bhāratavarṣa and the seven-dvīpa cosmography'],
    dharma:['Hospitality and protection of guests','Gifts and their promised fruits','Karmavipāka and hells','Śrāddha and ancestral rites','Food, purity and social classification','Knowledge, Yoga and liberation'],
    reception:'Conventionally first among the Mahāpurāṇas and styled Ādi Purāṇa; important to Jagannātha–Puruṣottama and Godāvarī sacred geography; heavily cited under its title by medieval Dharma writers, though many quotations belong to an earlier textual form.',
    scholarlyPositions:[
      'Hazra: the present Brahma Purāṇa is not identical with the older text cited under that title; its main compilation belongs broadly to the tenth–twelfth centuries, with separately dated strata.',
      'Rocher: the received work is composite and strongly defined by māhātmya and textual borrowing; its title and canonical rank cannot establish its date.',
      'Trivedi: the Ānandāśrama text has 245 chapters and 13,783 verses; formal, geographical, intertextual and citation evidence must be combined chapter by chapter.'
    ],
    dependencies:[
      'Creation and genealogy share extensive material with Vāyu and other Purāṇic traditions.',
      'Solar chapters have verbal relationships with the Sāmba and Bhaviṣya Purāṇas.',
      'The Kaṇḍu–Pramlocā story and Kṛṣṇa-caritra correspond closely with the Viṣṇu Purāṇa.',
      'Dharma and mokṣa chapters parallel the Mahābhārata, especially Śānti and Anuśāsana materials.',
      'The Nāradīya Purāṇa synopsis is evidence for a Brahma Purāṇa form containing Odisha but not Gautamī material.'
    ],
    primaryEvidence:[
      'Ānandāśrama Sanskrit recension, 245 chapters.',
      'Schreiner and Söhnen, transliterated Sanskrit text and indices, 1987.',
      'Söhnen and Schreiner, detailed contents summary and motif index, 1989.',
      'Bhatt/Board of Scholars English translation in four volumes.',
      'Medieval Nibandha quotations collected and compared by Hazra and Trivedi.'
    ],
    sources:[
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Foundational analysis of the lost earlier Brahma Purāṇa, the received compilation, Nibandha quotations and section-specific chronology.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard scholarly survey of the Brahma Purāṇa’s structure, sacred geography, textual identity and wider Purāṇic context.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'trivedi',title:'Surabhi H. Trivedi — The Brahma Purāṇa: A Critical Study (1960)',detail:'Full study of date, place, chapter structure, textual parallels, religion, society, geography and philosophy; online text links to the source dissertation.',url:'https://www.wisdomlib.org/hinduism/essay/brahma-purana-critical-study'},
      {key:'sohnen-schreiner-summary',title:'Renate Söhnen and Peter Schreiner — Brahmapurāṇa: Summary of Contents, with Index of Names and Motifs (1989)',detail:'Detailed chapter-by-chapter summary and research index.',url:'https://books.google.com/books?id=J2c6-tAt4vwC'},
      {key:'schreiner-sohnen-text',title:'Peter Schreiner and Renate Söhnen — Sanskrit Indices and Text of the Brahmapurāṇa (1987)',detail:'Transliterated Sanskrit text and extensive indices in Purāṇa Research Publications 1.',url:'https://www.cambridge.org/core/journals/journal-of-the-royal-asiatic-society/article/sanskrit-indices-and-text-of-the-brahmapurana-by-peter-schreiner-and-renate-sohnen-purana-research-publications-tubingen-1-pp-xxiii-826-and-26-microfiches-wiesbaden-otto-harrassowitz-1987-dm-146/E0DD256902931ACC546EE6AF7A2A34C2'},
      {key:'bhatt-translation',title:'G. P. Bhatt and Board of Scholars — The Brahma Purāṇa, Ancient Indian Tradition and Mythology',detail:'Four-volume English translation of the received text, including the separately framed Gautamī Māhātmya.',url:'https://archive.org/details/dli.bengal.10689.20566'},
      {key:'debroy-1',title:'Bibek Debroy — Brahma Purana, Volume 1',detail:'Recent complete English translation with an introduction to the received text.',url:'https://www.penguin.co.in/book/brahma-purana-volume-1/'},
      {key:'debroy-2',title:'Bibek Debroy — Brahma Purana, Volume 2',detail:'Second volume of the recent complete English translation.',url:'https://www.penguin.co.in/book/brahma-purana-volume-2/'}
    ],
    bibliography:[
      'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs',
      'Ludo Rocher, The Purāṇas (Wiesbaden: Harrassowitz, 1986)',
      'Surabhi H. Trivedi, The Brahma Purāṇa: A Critical Study (1960)',
      'Peter Schreiner and Renate Söhnen, Sanskrit Indices and Text of the Brahmapurāṇa (1987)',
      'Renate Söhnen and Peter Schreiner, Brahmapurāṇa: Summary of Contents (1989)',
      'G. P. Bhatt et al., The Brahma Purāṇa, 4 vols.',
      'Bibek Debroy, The Brahma Purana, 2 vols.'
    ],
    mahapuranaFinal:true,
    mahapuranaAudited:true,
    mahapuranaBenchmark:true
  });
})();
