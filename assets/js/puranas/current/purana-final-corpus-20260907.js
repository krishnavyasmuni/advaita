/* Final source-critical Purana supplement — 2026-09-07.
 * Independent of loader order. The final article layer combines this with the existing deep corpus.
 */
(() => {
  const C = window.PURANA_FINAL_CORPUS = window.PURANA_FINAL_CORPUS || {};
  const put = (name, data) => { C[name] = Object.assign({}, C[name] || {}, data); };

  const HAZRA = 'R. C. Hazra, Studies in the Puranic Records on Hindu Rites and Customs (especially Part I, chronological table, and appendices of traceable/untraceable quotations).';
  const ROCHER = 'Ludo Rocher, The Puranas, A History of Indian Literature II.3 (Wiesbaden, 1986).';

  put('Brahma Purāṇa', {
    externalAttestations:[
      'Medieval nibandha writers quote a substantial body of ritual and dharma material as Brahma Purāṇa that is not recoverable from the received 245-chapter recension. The mismatch is strongest evidence for an older textual state carried under the same title.',
      'The Nāradīya Purāṇa’s synopsis helps control the history of the extant book: it knows major Puruṣottama and Ekāmra materials but does not describe the enormous Gautamī block in its present position.',
      'The Gautamī Māhātmya also circulates independently and can be absent from Brahma Purāṇa witnesses; chapter 176 resumes the Puruṣottama sequence interrupted at chapter 69.'
    ],
    textualRelationships:[
      'Chapters 180–210 form a Kṛṣṇa-caritra with extensive relationship to Viṣṇu Purāṇa book 5; direction of dependence should be argued from readings and recension history rather than assumed from canonical rank.',
      'The philosophical conclusion contains close parallels with Mahābhārata Śānti material. These transferred passages show why doctrinal vocabulary in the final chapters cannot by itself date the whole Purāṇa.'
    ],
    manuscriptsEditions:[
      'Common printed editions have 245 chapters, with chapters 70–175 constituting the Gautamī Māhātmya. The relative stability of that printed count does not erase evidence for earlier or independent textual states.',
      'Peter Schreiner and Renate Söhnen produced a transliterated text, indices, and extended summary useful for navigating the received work; Surabhi H. Trivedi’s critical study remains a major chapter-by-chapter scholarly guide.'
    ],
    commentaryReception:[
      'The work is especially important for the Sanskritization of Odisha and Godāvarī sacred geography. Puruṣottama, Ekāmra, Virajā, Konāditya and the Gautamī river are not incidental places but organizing centres of large textual blocks.',
      'Its reception therefore belongs as much to pilgrimage, temple and regional religious history as to abstract classification among eighteen Mahāpurāṇas.'
    ],
    bibliography:[HAZRA, ROCHER,'Surabhi H. Trivedi, Brahma Purana: A Critical Study (Baroda, 1960).','Peter Schreiner and Renate Söhnen, studies, transliteration and summary of the Brahma Purāṇa.']
  });

  put('Padma Purāṇa', {
    externalAttestations:[
      'The medieval Nāradīya Purāṇa gives a synopsis of a five-khaṇḍa Padma tradition. Comparison with later Bengal, western and other printed recensions shows that the title has not always denoted one fixed chapter sequence.',
      'Hazra’s study of the Padma argues for different dates for identifiable khaṇḍas and chapter groups; in particular he treated the Ādi-khaṇḍa as secondary to older Padma material rather than dating the entire compilation as one unit.',
      'Regional māhātmyas can circulate independently or as appendices. Their presence in one print and absence from another is textual evidence, not merely an editorial inconvenience.'
    ],
    textualRelationships:[
      'Padma chapters repeatedly share vrata, tīrtha and narrative material with Nāradīya, Matsya, Kūrma and other Purāṇic corpora. Large verbal agreements should be mapped passage by passage before claims of borrowing are made.',
      'Famous sectarian and classificatory passages in the Uttara and other late strata should be dated from manuscript and quotation history, not automatically projected into the earliest recoverable Padma tradition.'
    ],
    manuscriptsEditions:[
      'There is no single universal Padma chapter numbering. Khaṇḍa names, sequence, chapter totals and attached regional books vary substantially between manuscript and printed traditions.',
      'Every numerical citation on this site should therefore be read as belonging to the stated recension; topic-based navigation is deliberately used where cross-recensional numbering would create false precision.'
    ],
    commentaryReception:[
      'The Padma became a major reservoir for pilgrimage, vrata, sectarian theology and sacred geography. Its historical influence often operates through detachable ritual and regional units rather than through sequential reading of the entire work.'
    ],
    bibliography:[HAZRA,ROCHER,'R. C. Hazra, “The Padma-Purāṇa,” Indian Culture IV (1937).']
  });

  put('Viṣṇu Purāṇa', {
    externalAttestations:[
      'The comparatively coherent six-aṃśa architecture is externally reinforced by a long commentarial and printed tradition, but individual narratives still belong to older shared Purāṇic and epic complexes.',
      'Dynastic, cosmographic and Kṛṣṇa materials should be compared with Vāyu/Brahmāṇḍa, Harivaṃśa and later Bhāgavata versions as parallel textual traditions rather than reduced to a generic statement that one “influenced” another.'
    ],
    textualRelationships:[
      'Aṃśa 4 belongs to the wider Purāṇic genealogical tradition also represented in Vāyu and Brahmāṇḍa; Aṃśa 5 belongs to the Sanskrit Kṛṣṇa narrative complex represented by Harivaṃśa, Brahma and Bhāgavata traditions.',
      'The compact sixth aṃśa makes Kali, pralaya and liberation the interpretive closure of a work otherwise dominated by cosmogony, dynasties and Kṛṣṇa.'
    ],
    manuscriptsEditions:[
      'M. M. Pathak’s Critical Edition of the Viṣṇupurāṇam was published by the Oriental Institute, Vadodara, in two volumes (1997, 1999). The constituted Sanskrit text has also been made available in transliterated electronic form by Peter Schreiner.',
      'The critical edition should be distinguished from any single popular print: a constituted text is a reasoned reconstruction from witnesses and does not erase regional or commentarial readings.'
    ],
    commentaryReception:[
      'The Viṣṇu Purāṇa has been central to modern reconstruction of early Purāṇic form because its six-book organization preserves cosmogony, manvantaras, genealogy, dynastic history and Kṛṣṇa narrative in unusually disciplined proportion.'
    ],
    bibliography:[HAZRA,ROCHER,'M. M. Pathak (ed.), The Critical Edition of the Viṣṇupurāṇam, 2 vols. (Vadodara, 1997–1999).','Peter Schreiner, Viṣṇupurāṇa studies and electronic constituted text.']
  });

  put('Vāyu Purāṇa', {
    externalAttestations:[
      'Vāyu and Brahmāṇḍa share extensive passages, yet medieval authors sometimes cite as Brahmāṇḍa verses that survive in the Vāyu text. Such cross-attribution is evidence for an earlier period when the boundaries between the named corpora were less stable.',
      'The Gayā Māhātmya at the end of the four-pāda recension is not equally represented in all witnesses and also participates in a wider independent pilgrimage tradition.'
    ],
    textualRelationships:[
      'The Vāyu–Brahmāṇḍa relationship is one of the most important large-scale parallel traditions in Purāṇic studies. Shared genealogies, dharma, śrāddha and cosmological passages must be compared as textual units.',
      'Its dynastic material has also been heavily used in attempts to reconstruct ancient Indian historical tradition, but genealogical sequence and modern political chronology are not the same kind of evidence.'
    ],
    manuscriptsEditions:[
      'The four-pāda arrangement—Prakriyā, Anuṣaṅga, Upodghāta and Upasaṃhāra—provides the clearest navigational frame for the common recension. The appended Gayā material should remain visibly marked as a distinct block.'
    ],
    commentaryReception:[
      'The Vāyu is especially valuable for the history of Purāṇic genealogy, cosmology and ancestor ritual. Its importance is philological as much as sectarian.'
    ],
    bibliography:[HAZRA,ROCHER,'F. E. Pargiter, Ancient Indian Historical Tradition, for the early comparative use of Vāyu/Brahmāṇḍa genealogies.']
  });

  put('Śiva Purāṇa', {
    externalAttestations:[
      'The strongest external control is recensional: the seven-saṃhitā Kāśī tradition and six-saṃhitā Bombay/Bengal tradition differ enough that a chapter number without recension can be misleading.',
      'Traditional statements about a primordial vastly larger Śiva Purāṇa belong to the text’s canonical self-description and should not be confused with the recoverable manuscript history of the extant saṃhitās.'
    ],
    textualRelationships:[
      'Large mythic units—Dakṣa and Satī, Pārvatī’s marriage, Skanda, liṅga theology and sacred-site cycles—belong to wider Śaiva narrative traditions also found in Liṅga, Skanda and other Purāṇas. Comparison must be made at episode and wording level.'
    ],
    manuscriptsEditions:[
      'This site uses the seven-saṃhitā recension as the principal map because it is easy to navigate, while explicitly recording the six-saṃhitā tradition as a different textual architecture rather than an error.',
      'Verse and chapter totals attached to one recension are not silently transferred to the other.'
    ],
    commentaryReception:[
      'The received work became a major vehicle for liṅga worship, Śiva mythology, pilgrimage, initiation, mantra and household devotion. Different saṃhitās can reflect different ritual and theological emphases.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Bhāgavata Purāṇa', {
    externalAttestations:[
      'The old attribution of authorship to the thirteenth-century scholar Bopadeva cannot account for evidence that the Bhāgavata circulated earlier. Dating therefore asks when the twelve-skandha redaction stabilized, not whether one late individual “wrote” the entire work.',
      'Śrīdhara Svāmin’s Bhāvārthadīpikā, composed roughly between the mid-fourteenth and mid-fifteenth centuries, became an exceptionally influential witness to the text and to its medieval interpretation.',
      'The Ahmedabad critical edition demonstrates materially that the canonical “18,000 verses” is not a literal count reproduced by every witness: the constituted text has 329 chapters, 13,129 metrical stanzas and 452 prose passages, with variants and interpolations recorded separately.'
    ],
    textualRelationships:[
      'Kṛṣṇa narratives in Skandha 10 belong to a Sanskrit mythic complex also represented by Harivaṃśa and Viṣṇu Purāṇa, but the Bhāgavata reorganizes them inside a much stronger theology of hearing, līlā, rasa and devotion.',
      'Its philosophical vocabulary draws on Upaniṣadic, Sāṃkhya, Yoga, Bhagavad Gītā and Vedāntic idioms without collapsing neatly into one later school. The text’s reception history is therefore part of its doctrinal history.'
    ],
    manuscriptsEditions:[
      'The B. J. Institute of Learning and Research published the multi-volume critical edition edited by H. G. Shastri, Bharati K. Shelat and K. K. Shastree between 1996 and 2002, using manuscripts in many scripts and major commentaries.',
      'Common editions usually count 335 chapters, whereas the critical text constitutes 329. Chapter and verse counts on this page identify which textual object they describe.'
    ],
    commentaryReception:[
      'Śrīdhara’s commentary became a point of reference for later Śrīvaiṣṇava, Dvaita, Gauḍīya and other commentators, though not every tradition depended on him in the same way. Vallabha’s Subodhinī and independent Kerala commentary traditions show that Bhāgavata exegesis was plural.',
      'The Purāṇa’s reception transformed Sanskrit and vernacular theology, poetry, painting, dance, music and performance; that afterlife is not adequately represented by saying merely that the text was “influential.”'
    ],
    bibliography:[HAZRA,ROCHER,'Friedhelm Hardy, Viraha-Bhakti: The Early History of Kṛṣṇa Devotion in South India.','H. G. Shastri, Bharati K. Shelat and K. K. Shastree (eds.), The Bhāgavata: Critical Edition (Ahmedabad, 1996–2002).','Ravi M. Gupta, “Why Śrīdhara Svāmī? The Makings of a Successful Sanskrit Commentary,” Religions 11 (2020).']
  });

  put('Devī Bhāgavata Purāṇa', {
    externalAttestations:[
      'The Devī Bhāgavata’s own twelve-skandha architecture and internal chapter enumeration provide a useful control on the received form, but individual narratives rework older epic and Purāṇic materials inside a medieval Śākta redaction.',
      'Shared episodes should not be described as simple duplication: the work repeatedly recentres inherited narratives by making Devī the ontological power behind Brahmā, Viṣṇu and Śiva.'
    ],
    textualRelationships:[
      'The Devī Gītā in Skandha 7 stands in conscious dialogue with wider Sanskrit gītā literature, combining supreme-Goddess theology with yoga, knowledge and devotion.',
      'Skandha 5 and other martial-Goddess cycles should be read beside the Devī Māhātmya tradition while preserving the distinct narrative and theological work performed by each text.'
    ],
    manuscriptsEditions:[
      'The received work is divided into twelve skandhas and commonly enumerates 318 chapters. Numerical references on the page follow that received architecture.',
      'Unlike the Bhāgavata, the Devī Bhāgavata does not yet possess a single universally adopted modern stemmatic critical edition; printed texts remain only part of the manuscript history.'
    ],
    commentaryReception:[
      'The text became a major Purāṇic authority for Śākta traditions, especially through the Devī Gītā, Goddess cosmology, Gāyatrī theology and ritual materials. Its reception must be distinguished from that of the older Devī Māhātmya.'
    ],
    bibliography:[ROCHER,'C. Mackenzie Brown, The Triumph of the Goddess: The Canonical Models and Theological Visions of the Devī-Bhāgavata Purāṇa.']
  });

  put('Nāradīya Purāṇa', {
    externalAttestations:[
      'The Mahāpurāṇa must first be distinguished from the Bṛhannāradīya and other Nārada-titled works. A medieval citation labelled only “Nāradīya” cannot be assigned to the present text without checking wording and context.',
      'Its own synopses of other Purāṇas are unusually valuable external witnesses to the medieval state of the wider corpus: agreement can show continuity, while mismatch can expose lost or later material.',
      'Hazra argued that substantial portions of the Uttarabhāga, including chapters 38–82, belong to a later medieval stage; such dating is section-specific, not a date for every chapter under the Nāradīya title.'
    ],
    textualRelationships:[
      'The Purāṇic catalogues turn the text into a medieval library map. They should be compared against surviving recensions one title at a time rather than treated as infallible tables of contents.',
      'Vrata and pilgrimage materials often intersect with Padma and other ritual corpora, making verbal comparison essential for relative chronology.'
    ],
    manuscriptsEditions:[
      'The common recension is divided into a Pūrvabhāga of 125 chapters arranged in four pādas and an Uttarabhāga of about 82 chapters. Title confusion with Bṛhannāradīya is a separate problem from internal chapter variation.'
    ],
    commentaryReception:[
      'The Nāradīya is historically important less for one dominant narrative than for devotional practice, pilgrimage, vrata and its self-conscious mapping of the Purāṇic canon.'
    ],
    bibliography:[HAZRA,ROCHER,'R. C. Hazra, “The Bṛhannāradīya- and the Nāradīya-Purāṇa,” Indian Culture III (1937).']
  });

  put('Mārkaṇḍeya Purāṇa', {
    externalAttestations:[
      'The Devī Māhātmya is embedded in the Mārkaṇḍeya yet also possesses an enormous independent manuscript, commentary and ritual life. Its independent transmission is direct evidence that a celebrated Purāṇic block can function as a text in its own right.',
      'Early printed Mārkaṇḍeya editions did not all end identically: the Calcutta edition stops in chapter 136, while Bombay and Poona traditions complete the Dama narrative in chapter 137.'
    ],
    textualRelationships:[
      'The opening discourse of the wise birds, the manvantara sequence and the Devī Māhātmya are structurally different literary units. Their juxtaposition is part of the received Purāṇa’s history, not evidence that all were composed together.',
      'The Devī Māhātmya’s three caritas should be studied alongside wider Goddess literature without dissolving its distinctive theology and ritual reception into the later Devī Bhāgavata.'
    ],
    manuscriptsEditions:[
      'M. L. Wadekar’s Critical Edition of the Mārkaṇḍeyapurāṇam was published by the Oriental Institute, Vadodara, in 2011. The critical project gives the text a stronger modern philological basis than most Mahāpurāṇas possess.',
      'Critical numbering of the Devī Māhātmya and popular numbering may differ because the critically constituted surrounding Mārkaṇḍeya text is not identical with every old print.'
    ],
    commentaryReception:[
      'The Devī Māhātmya became one of the most ritually and theologically influential Goddess scriptures in South Asia, while the surrounding Mārkaṇḍeya remained important for manvantara, dharma and narrative traditions.'
    ],
    bibliography:[HAZRA,ROCHER,'M. L. Wadekar (ed.), Critical Edition of the Mārkaṇḍeyapurāṇam (Vadodara, 2011).','Thomas B. Coburn, Devī-Māhātmya: The Crystallization of the Goddess Tradition.']
  });

  put('Agni Purāṇa', {
    externalAttestations:[
      'The Agni is best dated as a dossier of dossiers. Its poetics, grammar, lexicography, medicine, polity, astronomy and ritual materials can often be compared with specialist śāstra whose chronology is more controlled than the Purāṇa’s mythic frame.',
      'Hazra’s chapter-level method is therefore especially appropriate: the date of one technical block should not be silently assigned to chapters on an entirely different discipline.'
    ],
    textualRelationships:[
      'The opening epic summaries, temple and image manuals, dharma material, Dhanurveda, Ayurveda, chandas, alaṃkāra and grammar all participate in wider Sanskrit textual systems. Their sources and parallels need to be named field by field.',
      'The work’s encyclopedic form is itself historical evidence for a culture in which Purāṇic authority could gather specialist knowledge into a single religious compendium.'
    ],
    manuscriptsEditions:[
      'No single modern critical edition has displaced the standard printed Sanskrit traditions. Chapter references should therefore name the edition when textual wording matters.',
      'The received sequence of roughly 380 chapters is stable enough for broad navigation but not a guarantee of uniform manuscript wording or antiquity.'
    ],
    commentaryReception:[
      'The Agni has been used less as a single devotional scripture than as an encyclopedic source for ritual, iconography, medicine, metrics, poetics, polity and technical history.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Bhaviṣya Purāṇa', {
    externalAttestations:[
      'The Bhaviṣya is the clearest warning against reading a Purāṇic title as a single ancient composition. Manuscripts and prints under this name contain layers extending into recognizably late historical horizons.',
      'A “prophecy” about a later event is not evidence of ancient prediction. The historical question is when the passage first appears in manuscripts or quotations and which vocabulary, institutions and persons its author presupposes.',
      'Bhaviṣyottara material also has a partly independent textual life and should not automatically be equated with every printed Uttaraparvan.'
    ],
    textualRelationships:[
      'Ritual and calendrical chapters intersect with Dharmaśāstra and vrata literature, whereas Pratisarga historical narratives belong to very different redactional horizons. They must not be dated by the same argument.'
    ],
    manuscriptsEditions:[
      'Printed four-parvan arrangements are convenient reference systems, not proof that every manuscript has the same macrostructure. The Pratisargaparvan in particular has undergone repeated expansion.',
      'The page therefore treats each parvan and, where necessary, each historical block as a separate textual object.'
    ],
    commentaryReception:[
      'Modern notoriety of the Bhaviṣya has often centred on supposed predictions. A scholarly article instead uses those passages as evidence for the social and political horizons in which they were actually redacted.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Brahmavaivarta Purāṇa', {
    externalAttestations:[
      'Medieval nibandha writers quote a large body of Brahmavaivarta material not found in the present four-khaṇḍa recension. The mismatch strongly indicates that an older work under the same title differed substantially from the extant text.',
      'The present recension’s Smṛti-oriented chapters on gifts, caste, vows, women, worship, hells and social duty belong to the history of late recasting rather than providing direct access to the earlier quoted Purāṇa.'
    ],
    textualRelationships:[
      'The extant work’s Kṛṣṇa–Rādhā and Goloka theology should be situated inside late medieval Vaiṣṇava literary history rather than treated as the unchanged content of the ancient canonical title.',
      'Its Prakṛti and Gaṇeśa books incorporate major divine traditions into a Kṛṣṇa-centred cosmology, making the four-khaṇḍa architecture a theological argument as well as a table of contents.'
    ],
    manuscriptsEditions:[
      'The surviving four-khaṇḍa text—Brahma, Prakṛti, Gaṇeśa and Kṛṣṇajanma—belongs to a later textual state than the Brahmavaivarta known from many medieval citations.',
      'Chapter totals vary slightly by print, especially in Kṛṣṇajanma; numerical claims should therefore identify the edition.'
    ],
    commentaryReception:[
      'The received Brahmavaivarta became important for Rādhā-Kṛṣṇa theology and later devotional imagination, even though that very prominence should not be retrojected into the older lost recension.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Varāha Purāṇa', {
    externalAttestations:[
      'The Nāradīya Purāṇa describes a two-part Varāha and an Uttarabhāga not represented by the extant text. This is valuable negative evidence for a lost or transformed textual state.',
      'Changes of interlocutor divide the surviving work into large literary units; those seams should be treated as evidence for compilation history rather than smoothed into one continuous conversation.'
    ],
    textualRelationships:[
      'The received text combines Varāha–Pṛthvī revelation, pilgrimage, vrata, a Dharma-saṃhitā and concluding Brahmā–Sanatkumāra material. Each block belongs to a different literary and ritual horizon.',
      'Shared passages with Padma, Bhaviṣyottara and other ritual corpora require passage-level comparison before dependence is assigned.'
    ],
    manuscriptsEditions:[
      'Anand Swarup Gupta’s two-volume critical edition of the Varāha Purāṇa was published by the All-India Kashiraj Trust in 1981 and constitutes 215 chapters.',
      'Popular editions can count 217–218 chapters. The critical text’s 215 should therefore not be silently treated as the only historical chapter system.'
    ],
    commentaryReception:[
      'The extant Varāha is particularly important for tīrtha, vrata and dharma material; its historical profile is much broader than the boar avatāra implied by the title.'
    ],
    bibliography:[HAZRA,ROCHER,'Anand Swarup Gupta (ed.), The Varāha Purāṇa, critically edited, 2 vols. (Varanasi, 1981).']
  });

  put('Liṅga Purāṇa', {
    externalAttestations:[
      'Medieval ritual and legal writers quote many verses as Liṅga Purāṇa that are absent from the received recension. Hazra used that absence to argue that the text was substantially recast while the old title retained authority.',
      'The Uttarabhāga now has 55 chapters, but an internal enumeration in its final chapter states a total of 46. That internal mismatch is direct evidence for expansion after an earlier textual state.'
    ],
    textualRelationships:[
      'Liṅga theology, Pāśupata materials, Śiva manifestations and pilgrimage overlap with wider Śaiva Purāṇic literature, especially Śiva and Skanda traditions. Similarity of subject is not enough; verbal and structural parallels must be distinguished.'
    ],
    manuscriptsEditions:[
      'The common received architecture is Pūrvabhāga 108 chapters plus Uttarabhāga 55. The text’s own older count of 46 for the second part should remain visible beside the modern total.',
      'No single modern stemmatic critical edition has settled the entire Liṅga tradition; printed editions therefore remain witnesses, not final arbiters.'
    ],
    commentaryReception:[
      'The Purāṇa is a major source for liṅga theology, Śaiva ritual, sacred geography and yoga, but its citation history shows that medieval readers sometimes knew a text materially different from the one now printed.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Skanda Purāṇa', {
    externalAttestations:[
      'The title “Skanda Purāṇa” covers at least two very different historical objects: the early Skandapurāṇa reconstructed from old manuscripts and the enormous later khaṇḍa/māhātmya corpus transmitted under the same canonical name.',
      'The Nāradīya Purāṇa’s seven-khaṇḍa synopsis is a medieval witness to the later corpus, but it should not be used to redefine the early critical Skandapurāṇa.',
      'Hazra’s quotation work can date individual pilgrimage chapters inside later khaṇḍas even when the enormous received compilation has no single composition date.'
    ],
    textualRelationships:[
      'Kāśī, Avanti, Prabhāsa and other regional books are best understood as large sacred-geography corpora gathered under Skanda authority. Their local transmission histories matter as much as the umbrella title.',
      'The early Skandapurāṇa is an important source for the historical development of Śaiva mythology and pilgrimage and must be cited by its critical-edition chapter system.'
    ],
    manuscriptsEditions:[
      'The Groningen Skandapurāṇa Project has produced a multi-volume critical edition of the early text from old manuscript witnesses. This project is philologically distinct from editions of the huge later seven-khaṇḍa corpus.',
      'For the later corpus, chapter counts and internal subdivisions vary by regional and printed tradition; the site therefore maps major khaṇḍas rather than pretending to one universal numbering.'
    ],
    commentaryReception:[
      'The later Skanda corpus became one of the largest archives of Sanskrit sacred geography, preserving urban, riverine, regional and sectarian māhātmyas whose influence often continued independently of the complete Purāṇa.'
    ],
    bibliography:[HAZRA,ROCHER,'The Groningen Skandapurāṇa Project critical editions and studies (Adriaensen, Bakker, Isaacson, Bisschop, Yokochi and collaborators).']
  });

  put('Vāmana Purāṇa', {
    externalAttestations:[
      'The surviving Vāmana differs markedly from the Mahāpurāṇa described in old canonical catalogues. Hazra therefore treated the extant recension as a replacement or heavily transformed work under an older title.',
      'The text’s large Śaiva and pilgrimage content is itself a warning against inferring contents from the Vaiṣṇava title “Vāmana.”'
    ],
    textualRelationships:[
      'The Saromāhātmya is a coherent Kurukṣetra/Thanesar pilgrimage corpus within the received text and should be treated as a literary unit with its own sacred-geography logic.',
      'Śaiva, Vaiṣṇava and Goddess narratives coexist in the surviving compilation; sectarian classification alone does not explain its textual history.'
    ],
    manuscriptsEditions:[
      'Anand Swarup Gupta’s critical edition of the Vāmana Purāṇa was published by the All-India Kashiraj Trust in 1967.',
      'Older printed arrangements can have roughly 96 chapters, while newer presentations often distinguish a 69-chapter main text and supplementary material. Edition identification is therefore essential.'
    ],
    commentaryReception:[
      'The work is particularly valuable for Kurukṣetra sacred geography and for showing how a Purāṇic title can survive major changes in sectarian and narrative profile.'
    ],
    bibliography:[HAZRA,ROCHER,'Anand Swarup Gupta (ed.), The Vāmana Purāṇa, critically edited (Varanasi, 1967).']
  });

  put('Kūrma Purāṇa', {
    externalAttestations:[
      'The Kūrma contains both Vaiṣṇava/Pāñcarātra and strong Śaiva-Pāśupata materials. Its sectarian history is therefore best reconstructed through textual strata rather than by choosing one label for the whole book.',
      'Large didactic works such as the Īśvara Gītā and Vyāsa Gītā are identifiable textual blocks whose parallels and reception can be studied independently.'
    ],
    textualRelationships:[
      'The Īśvara Gītā places Śiva-centred metaphysics, yoga and liberation inside a Purāṇa framed by Viṣṇu’s Kūrma form. The coexistence is a feature of the redactional history, not an anomaly to harmonize away.',
      'Dharma, pilgrimage and philosophical passages interact with wider Smṛti and Purāṇic traditions and should be compared at chapter level.'
    ],
    manuscriptsEditions:[
      'Anand Swarup Gupta’s critical edition was published by the All-India Kashiraj Trust in 1971. Its preparation collated a wide manuscript base, including Devanāgarī, Kashmiri and South Indian witnesses.',
      'The critical edition has a Pūrvabhāga of 51 chapters and Uttarabhāga of 44. Older prints and translations can use different first-part numbering.'
    ],
    commentaryReception:[
      'The Kūrma is unusually valuable for studying medieval Vaiṣṇava–Śaiva interaction because its received theology does not fit a simple narrative of one tradition replacing the other.'
    ],
    bibliography:[HAZRA,ROCHER,'Anand Swarup Gupta (ed.), The Kūrma Purāṇa, critically edited (Varanasi, 1971).']
  });

  put('Matsya Purāṇa', {
    externalAttestations:[
      'The Matsya changes genre repeatedly—from flood and creation myth to vrata, kingship, architecture, iconography and mahādāna. Relative chronology is therefore strongest when technical blocks are compared with their specialist śāstra parallels.',
      'Hazra’s chapter-oriented method prevents a late architectural or ritual parallel from being misused as a date for the flood narrative or dynastic materials.'
    ],
    textualRelationships:[
      'The architecture and image chapters belong to the wider vāstu/śilpa tradition; the rājadharma block belongs to political and Dharmaśāstra discourse; the mahādāna chapters belong to the ritual economy of elite gifting.',
      'These relationships should be presented as named textual systems rather than vague statements that the Purāṇa is “encyclopedic.”'
    ],
    manuscriptsEditions:[
      'The common received text has roughly 291 chapters. No universally adopted modern critical edition has replaced the major printed Sanskrit witnesses.',
      'Broad chapter ranges are useful for navigation, while wording-level claims should cite the edition or manuscript used.'
    ],
    commentaryReception:[
      'The Matsya has had unusual importance in modern scholarship on temple architecture, iconography, royal duty and donation because those technical blocks preserve detailed normative material within a Purāṇic frame.'
    ],
    bibliography:[HAZRA,ROCHER]
  });

  put('Garuḍa Purāṇa', {
    externalAttestations:[
      'Three substantially different Pretakhaṇḍa traditions are known. Funeral and afterlife prescriptions therefore cannot be quoted as if every Garuḍa manuscript contained one identical second book.',
      'The Garuḍa-purāṇa-sāroddhāra of Navanidhirāma is a later digest/commentarial work that was repeatedly mistaken in modern translation for the Garuḍa Purāṇa itself. Keeping the two texts separate is essential.',
      'Alternative old titles such as Sauparṇa, Tārkṣya and Vainateya show that the reception history of the corpus is wider than one modern book title.'
    ],
    textualRelationships:[
      'The much larger Pūrvakhaṇḍa is an encyclopedia of worship, iconography, medicine, gems, polity, language, yoga and liberation. Reducing the Garuḍa to death ritual is therefore a distortion produced by modern reception.',
      'Medical and technical chapters should be compared with Ayurveda, gemological and nīti literature as independent knowledge traditions.'
    ],
    manuscriptsEditions:[
      'Pūrvakhaṇḍa chapter totals vary around the low 230s to 240s depending recension; the Pretakhaṇḍa varies even more dramatically, roughly from the mid-30s to high-40s in common descriptions.',
      'The article therefore reports ranges and recension labels instead of presenting one printed table of contents as universal.'
    ],
    commentaryReception:[
      'Modern popular identification of the Garuḍa with funerary religion owes much to the circulation and translation of the Sāroddhāra. The complete Purāṇa has a far broader encyclopedic profile.'
    ],
    bibliography:[HAZRA,ROCHER,'Navanidhirāma, Garuḍa-purāṇa-sāroddhāra, to be distinguished from the Mahāpurāṇa itself.']
  });

  put('Brahmāṇḍa Purāṇa', {
    externalAttestations:[
      'Extensive Vāyu–Brahmāṇḍa verbal parallels and medieval cross-attributions show that the two corpora share an older textual history that precedes their modern separation as independent Purāṇas.',
      'The Lalitopākhyāna has its own frame and a large independent Śākta reception; its scale and transmission justify treating it as an attached major work inside the received Brahmāṇḍa.',
      'Works such as the Adhyātma Rāmāyaṇa are associated with Brahmāṇḍa transmission in later manuscript/printed history, but that association should not automatically define the oldest recoverable core.'
    ],
    textualRelationships:[
      'Shared genealogy, cosmology, dharma and śrāddha materials with Vāyu are the primary comparative problem. Direction of borrowing cannot be inferred merely from which modern title a verse now appears under.',
      'The Lalitopākhyāna connects the Purāṇa to Śrīvidyā and Tripurasundarī traditions, creating a reception history very different from the earlier genealogical/cosmological core.'
    ],
    manuscriptsEditions:[
      'The received architecture is conventionally mapped through Prakriyā, Anuṣaṅga, Upodghāta and Upasaṃhāra, with the Lalitopākhyāna treated separately where appropriate.',
      'No single modern critical edition has resolved the entire corpus; printed editions and regional manuscripts must therefore remain visible as witnesses.'
    ],
    commentaryReception:[
      'The Brahmāṇḍa is important simultaneously for early Purāṇic historical tradition and for later Śākta theology. Those two scholarly uses concern different textual layers and should not be collapsed.'
    ],
    bibliography:[HAZRA,ROCHER,'F. E. Pargiter, Ancient Indian Historical Tradition, for comparative use of Vāyu/Brahmāṇḍa genealogies.']
  });
})();
