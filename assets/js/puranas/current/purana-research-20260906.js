/* Professional Purana research layer — 2026-09-06.
 * Loaded after the existing research corpus so that it enriches rather than replaces it.
 * Focus: recension-aware contents maps, internal stratigraphy, and external quotation history.
 */
(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const A = v => Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
  const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  const HAZRA = {
    title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',
    detail:'Part I studies the chronology of Purāṇic chapters; the chronological table and appendices of traceable/untraceable quotations are used here as evidence for textual strata, not as a substitute for manuscript criticism.',
    url:'https://archive.org/details/in.ernet.dli.2015.110115/page/323/mode/2up'
  };
  const ROCHER = {
    title:'Ludo Rocher — The Purāṇas (1986)',
    detail:'Standard modern survey of Purāṇic textual history, recensions, editions, contents and scholarship.',
    url:'https://books.google.com/books?id=n0-4RJh5FgoC'
  };
  const HINDUPEDIA = {
    title:'Hindupedia — Purāṇa entries',
    detail:'Used as a tertiary cross-check for traditional divisions and received summaries; chronological and textual claims are checked against specialist scholarship.',
    url:'https://www.hindupedia.com/'
  };

  function getEntry(name){
    const key = 'Purāṇa:' + name;
    const e = Object.assign({}, D[name] || {}, D[key] || {});
    e.articleSections = A(e.articleSections).slice();
    e.sources = A(e.sources).slice();
    D[key] = e;
    return e;
  }

  function addSource(e, source){
    const key = norm((source.title || '') + ' ' + (source.url || ''));
    if (!A(e.sources).some(s => norm((typeof s === 'string' ? s : (s?.title || s?.citation || '')) + ' ' + (s?.url || '')) === key)) {
      e.sources.push(source);
    }
  }

  function addContents(e, intro, map){
    e.articleSections.push({
      title:'Contents',
      paragraphs:[intro],
      subsections:map.map(([title, text, bullets]) => ({
        title,
        paragraphs:A(text),
        bullets:A(bullets)
      }))
    });
  }

  function enrich(name, cfg){
    const e = getEntry(name);
    e.professionalWiki = true;
    e.datingBasis = [
      ...A(e.datingBasis),
      ...A(cfg.datingBasis)
    ];
    e.hazraNotes = [
      ...A(cfg.hazraNotes)
    ];
    e.reception = [
      ...A(e.reception),
      ...A(cfg.attestation)
    ];
    if (cfg.structure) e.structure = [e.structure, ...A(cfg.structure)].filter(Boolean);
    addContents(e, cfg.contentsIntro || 'The following map follows the received textual divisions while distinguishing large blocks that have their own transmission or redactional history.', cfg.map || []);
    [HAZRA, ROCHER, HINDUPEDIA, ...A(cfg.sources)].forEach(s => addSource(e,s));
    D['Purāṇa:' + name] = e;
  }

  enrich('Brahma Purāṇa', {
    datingBasis:'The received 245-chapter Brahma Purāṇa should be dated block by block. Citation mismatch, the interruption caused by the Gautamī Māhātmya, regional Odisha sacred geography, and large verbal parallels with other Sanskrit works provide independent evidence for growth rather than one authorial date.',
    hazraNotes:[
      'Hazra’s quotation method is especially important here: medieval nibandha writers cite numerous ritual verses as Brahma Purāṇa that are absent from the received recension, even where the extant text treats the same subject differently. This is evidence that the old title once carried materially different textual content.',
      'The structural seam at chapters 70–175 is unusually strong. The Gautamī Māhātmya circulates independently, is absent from some Brahma Purāṇa witnesses, and chapter 176 resumes the Puruṣottama sequence interrupted at chapter 69.'
    ],
    attestation:'External quotation is therefore part of the history of the Brahma Purāṇa, not a decorative bibliography: citations in medieval legal and ritual digests preserve evidence for an earlier textual state no longer identical with the 245-chapter recension.',
    map:[
      ['Chapters 1–27 — creation, genealogies and cosmography','The opening supplies the conventional Purāṇic platform: cosmogony, patriarchs, manvantaras, solar and lunar dynasties, Bhāratavarṣa and the ordered cosmos. It is compact compared with the pilgrimage materials that dominate the middle of the book.'],
      ['Chapters 28–69 — Utkala sacred geography','A major Odisha dossier sacralizes Konāditya, Ekāmra, Virajā and especially Puruṣottamakṣetra. Temple, image, festival, bathing and pilgrimage traditions are woven into a multi-centred religious geography rather than a single sectarian itinerary.'],
      ['Chapters 70–175 — Gautamī Māhātmya','A 106-chapter riverine pilgrimage work maps tīrthas along the Godāvarī through origin myths, local deities, ritual acts and promised fruits. Its independent circulation and abrupt insertion are central evidence for the compilation history of the received Purāṇa.'],
      ['Chapters 176–179 — return to Puruṣottama','The text resumes the Odisha/Puruṣottama thread after the Gautamī block, one of the clearest internal indications that the intervening māhātmya was attached secondarily.'],
      ['Chapters 180–210 — Kṛṣṇa-caritra','A sustained Kṛṣṇa narrative closely related to Viṣṇu Purāṇa book five moves from Kṛṣṇa’s birth and early exploits into the Mathurā/Dvārakā cycle. The scale and verbal relationship mark it as a transferred or heavily reworked narrative unit.'],
      ['Chapters 211–229 — dharma, afterlife and Vāsudeva devotion','The emphasis turns to avatāras, moral consequence, hells, ancestor rites, dharma and devotional exempla, linking ritual obligation with a more explicit Vaiṣṇava soteriology.'],
      ['Chapters 230–245 — Kali, dissolution, Sāṃkhya, Yoga and mokṣa','The closing movement passes through Kali-yuga and pralaya to philosophical instruction. Large parallels with Mahābhārata Śānti materials show why the final philosophical dossier must be analysed as a textual block rather than used to date the whole work.']
    ]
  });

  enrich('Padma Purāṇa', {
    datingBasis:'The Padma Purāṇa is not represented by one universally stable chapter sequence. Bengal, western and other printed/manuscript recensions differ in the number, order and extent of khaṇḍas, so historical claims must identify the recension being cited.',
    hazraNotes:'Hazra treats the Padma at the level of chapter groups and ritual materials rather than assigning its enormous received corpus a single date. The Nāradīya Purāṇa’s medieval synopsis is also valuable because it names a five-khaṇḍa Padma whose profile does not coincide exactly with every modern printed recension.',
    attestation:'The medieval Nāradīya catalogue functions as an external witness to a stage of the Padma tradition: agreement can show continuity, while topics prominent in later printed Padma recensions but absent from that synopsis require separate historical explanation.',
    map:[
      ['Sṛṣṭi-khaṇḍa — creation and sacred beginnings','Cosmogony, divine and royal narratives, ritual material and sacred geography are combined. In widely used arrangements the opening eighteen chapters form a Pushkara-oriented block, already showing how a local māhātmya can sit inside a universal creation book.'],
      ['Bhūmi-khaṇḍa — earth, kings, dharma and pilgrimage','Narratives of kings and sages are interwoven with ethical instruction, gifts, vows and tīrtha material. Chapter totals differ across recensions, so topic sequence is safer than a universal numeric map.'],
      ['Svarga/Brahma/Ādi divisions — recension-sensitive middle books','What one edition calls Svarga, Brahma or Ādi material may be distributed differently in another. These blocks contain cosmology, sacred places, rites and sectarian teaching and should be cited by edition as well as khaṇḍa.'],
      ['Pātāla-khaṇḍa — extensive narrative and Vaiṣṇava material','A large received division combines epic-related narrative, pilgrimage, vrata and Vaiṣṇava devotion. Its contents illustrate the Padma’s tendency to absorb sizeable semi-independent cycles.'],
      ['Uttara-khaṇḍa — vrata, pilgrimage and sectarian synthesis','The concluding book is exceptionally rich in observance, sacred geography and devotional classification. Some famous sectarian passages belong to textual strata that require comparison with earlier catalogues and manuscripts rather than automatic projection into antiquity.'],
      ['Regional appendices and māhātmyas','Texts such as the Karavīra Māhātmya can circulate as important manuscript appendices while being absent from particular printed editions. A professional contents map therefore records attached regional books rather than silently treating one publisher’s table of contents as the Purāṇa itself.']
    ]
  });

  enrich('Viṣṇu Purāṇa', {
    datingBasis:'The Viṣṇu Purāṇa has a comparatively coherent six-aṃśa architecture, but its early date estimates still concern a received redaction assembled from older traditions. The history of individual passages, commentarial witnesses and later variants must remain distinct from the date of that architecture.',
    hazraNotes:'Hazra’s chronological discussion is particularly useful as a check against dating by sectarian label alone. The relatively disciplined pañcalakṣaṇa organization distinguishes the Viṣṇu from many later encyclopedic Purāṇas but does not make it a unitary composition.',
    attestation:'Its close relationship with other Kṛṣṇa and dynastic traditions—including material also found in the Harivaṃśa, Vāyu/Brahmāṇḍa traditions and later Bhāgavata—should be analysed through parallel passages rather than vague statements of “influence.”',
    map:[
      ['Aṃśa 1 — 22 chapters: creation and exemplary kings','Cosmogony and primary creation lead into Dakṣa, Dhruva, Pṛthu and Prahlāda. The book establishes Viṣṇu as the metaphysical ground of Purāṇic creation while embedding theology in royal and devotional narratives.'],
      ['Aṃśa 2 — 16 chapters: cosmography and Bharata','The seven continents, oceans, mountains, Bhāratavarṣa, cosmic regions and astronomical order are described alongside the Bharata/Jada Bharata cycle, joining mapped cosmos to liberation teaching.'],
      ['Aṃśa 3 — 18 chapters: manvantaras, Veda and social-religious order','Manus, the recurrent arrangement of the Veda, śākhās, ritual obligations and life-stage duties place textual transmission and dharma inside cyclical cosmic history.'],
      ['Aṃśa 4 — 24 chapters: solar and lunar dynasties','A sustained genealogical history carries royal lines toward the Yādavas and Kṛṣṇa. This is one of the clearest surviving examples of vaṃśānucarita as a Purāṇic organizing principle.'],
      ['Aṃśa 5 — 38 chapters: Kṛṣṇa-caritra','Kṛṣṇa’s birth, Vraja childhood, Kaṃsa, Mathurā, Dvārakā and later exploits form a continuous book whose parallels with other Kṛṣṇa corpora are essential for literary history.'],
      ['Aṃśa 6 — 8 chapters: Kali, dissolution and liberation','The final book compresses Kali-yuga, cosmic dissolution and soteriology into a short closure, turning dynastic and cosmic decline toward knowledge of Viṣṇu and release.']
    ]
  });

  enrich('Vāyu Purāṇa', {
    datingBasis:'The Vāyu and Brahmāṇḍa traditions preserve extensive parallel material and cannot be studied in isolation. Their shared verses, differing arrangement and cross-attributed medieval quotations point toward an earlier common textual history followed by separation and independent growth.',
    hazraNotes:[
      'Hazra and earlier textual historians use the unusually dense Vāyu–Brahmāṇḍa parallels as chronological evidence. Entire dharma and śrāddha blocks correspond closely, while some verses quoted by medieval authors as Brahmāṇḍa survive only in the Vāyu recension.',
      'In the four-pāda arrangement, the Gayā Māhātmya at chapters 105–112 is not equally present in all witnesses and can circulate independently; it should therefore be marked as a textual block rather than treated as indistinguishable from the older core.'
    ],
    attestation:'Cross-attribution is itself evidence: when medieval writers cite as Brahmāṇḍa verses now found in Vāyu, the quotation history helps reconstruct a period when the two named corpora were less sharply separated than their modern titles imply.',
    map:[
      ['Prakriyā-pāda, chapters 1–6 — cosmogonic opening','A compressed opening establishes creation and the basic cosmological frame.'],
      ['Anuṣaṅga-pāda, chapters 7–64 — cosmology, gods, sages and genealogical order','The largest early division develops cosmic geography, divine and patriarchal genealogies, ritual and mythic materials that repeatedly parallel the Brahmāṇḍa tradition.'],
      ['Upodghāta-pāda, chapters 65–99 — yugas, dynasties and historical-cosmic sequence','Manvantaras, royal genealogies, yuga theory and related materials deepen the Purāṇa’s importance for reconstructing early Purāṇic historical imagination.'],
      ['Upasaṃhāra-pāda, chapters 100–104 — conclusion of the core sequence','The received four-pāda architecture moves toward closure before the attached Gayā cycle.'],
      ['Chapters 105–112 — Gayā Māhātmya','Pilgrimage and ancestor-rite traditions around Gayā form a recognizable sacred-geography block whose independent/variable transmission must be kept visible in the article map.']
    ]
  });

  enrich('Śiva Purāṇa', {
    datingBasis:'The Śiva Purāṇa has conspicuously different recensional architectures. A seven-saṃhitā Kāśī tradition and a six-saṃhitā Bombay/Bengal tradition cannot be collapsed into one universal chapter count without creating false precision.',
    hazraNotes:'Dating must therefore proceed first by identifying the recension and then by examining saṃhitā-level theology, ritual, pilgrimage and citation. Traditional claims for a much larger primordial text describe canonical ideology, not the recoverable history of the surviving recensions.',
    attestation:'Recensional comparison is the primary external control: where saṃhitās, chapter order or verse totals differ substantially, a modern article should show the divergence instead of silently choosing one edition.',
    structure:'The seven-saṃhitā Kāśī recension is used as the principal navigational map below because it exposes the surviving architecture clearly; the article retains the six-saṃhitā recension as a parallel textual witness, not a “wrong” version.',
    map:[
      ['Vidyeśvara-saṃhitā — 25 chapters','Programmatic Śaiva theology, liṅga worship, sacred observance and the authority of the Purāṇa establish the ritual-theological frame.'],
      ['Rudra-saṃhitā — 197 chapters in five khaṇḍas','The massive narrative centre is divided into Sṛṣṭi (20), Satī (43), Pārvatī (55), Kumāra (20) and Yuddha (59) khaṇḍas: creation, Dakṣa and Satī, Śiva’s marriage, Skanda and major demon-battle cycles.'],
      ['Śatarudra-saṃhitā — 42 chapters','Forms and manifestations of Rudra, devotional narratives and worship extend the theology of Śiva’s multiplicity.'],
      ['Koṭirudra-saṃhitā — 43 chapters','Liṅgas, sacred sites, ritual acts and divine manifestations connect cosmic Śiva to localized worship.'],
      ['Umā-saṃhitā — 51 chapters','Myth, dharma and theology associated with Umā/Śiva broaden the work beyond a simple biography of the god.'],
      ['Kailāsa-saṃhitā — 23 chapters','Initiatory, mantra and renunciatory themes become prominent, linking Purāṇic narrative with Śaiva ritual systems.'],
      ['Vāyavīya-saṃhitā — 76 chapters in two parts','A concluding doctrinal and ritual dossier, commonly divided 35 + 41 chapters, presents cosmology, Śaiva knowledge and practice through a Vāyu-mediated frame.']
    ]
  });

  enrich('Bhāgavata Purāṇa', {
    datingBasis:'The received twelve-skandha architecture is substantially more coherent than many encyclopedic Purāṇas, but its chronology still requires multiple kinds of evidence: early quotation, commentary, South Indian devotional parallels, philosophical vocabulary and manuscript transmission.',
    hazraNotes:'Hazra is useful for the broader Purāṇic chronology and citation method, but the Bhāgavata also requires later specialist work—especially Friedhelm Hardy and the B. J. Institute critical edition. The page therefore separates the date of final redaction from the antiquity of inherited narratives.',
    attestation:'The early history of Bhāgavata reception must be built from identifiable quotations and commentators, not from later claims about immemorial circulation. Śrīdhara Svāmin is a major textual witness, while the Ahmedabad critical edition demonstrates how chapter and stanza totals differ from the familiar canonical number of 18,000.',
    sources:[{title:'The Bhāgavata — Critical Edition, B. J. Institute of Learning and Research (1996–2002)',detail:'Multi-volume critical edition; 329 constituted chapters, with variants and interpolations recorded separately.',url:'https://www.ompublications.in/product/books/OM35133'}],
    map:[
      ['Skandha 1 — 19 chapters: frame, Parīkṣit and the question of dying well','Sūta addresses the sages at Naimiṣa; Vyāsa’s dissatisfaction, Nārada’s instruction, the Pāṇḍava aftermath and Parīkṣit’s curse converge on the central question: what should a person hear, remember and do when death is near?'],
      ['Skandha 2 — 10 chapters: Śuka’s answer, cosmic form and Purāṇic method','Meditation on the virāṭ form, creation, avatāras and the famous ten lakṣaṇas turn the deathbed dialogue into a map of the whole Purāṇic universe.'],
      ['Skandha 3 — 33 chapters: Vidura–Maitreya, creation, Varāha and Kapila','Cosmogony and the Kardama–Devahūti cycle culminate in Kapila’s Sāṃkhya and bhakti teaching; the book is both cosmological and explicitly soteriological.'],
      ['Skandha 4 — 31 chapters: Dakṣa, Dhruva, Pṛthu and the Pracetases','Royal ambition, sacrifice, divine grace and kingship are explored through Dakṣa’s conflict, the child Dhruva, King Pṛthu and Nārada’s allegorical instruction to Prācīnabarhis.'],
      ['Skandha 5 — 26 chapters: Ṛṣabha, Bharata and cosmic geography','Ṛṣabha and the three lives of Bharata lead into Jambūdvīpa, planetary and infernal cosmography. The juxtaposition makes attachment and cosmic location parallel problems of orientation.'],
      ['Skandha 6 — 19 chapters: Ajāmila, Dakṣa’s descendants and Vṛtra','Ajāmila dramatizes the salvific power of the divine name; subsequent genealogies and the Indra–Vṛtrāsura cycle complicate easy moral divisions between deva and asura.'],
      ['Skandha 7 — 15 chapters: Prahlāda and Narasiṃha','Hiraṇyakaśipu’s persecution of Prahlāda culminates in Narasiṃha, followed by extended reflection on bhāgavata devotion and social/religious duty.'],
      ['Skandha 8 — 24 chapters: manvantaras, Gajendra, churning and Vāmana','Gajendra’s rescue, the ocean-churning cycle and Vāmana/Bali are placed within recurrent manvantaras, showing preservation as a repeated cosmic pattern.'],
      ['Skandha 9 — 24 chapters: solar and lunar dynasties','Royal genealogies carry the narrative from Manu and Ikṣvāku through figures such as Ambarīṣa and Yayāti toward the Yadu line, preparing historically and genealogically for Kṛṣṇa.'],
      ['Skandha 10 — 90 chapters: the complete Kṛṣṇa cycle','The largest book moves from Kṛṣṇa’s birth through Vraja, Pūtanā, Kāliya, Govardhana and rāsa to Mathurā, Kaṃsa, Dvārakā, marriages, Jarāsandha, royal politics and the mature Yādava world. It is much more than the childhood cycle highlighted in popular retellings.'],
      ['Skandha 11 — 31 chapters: Yādava end and Uddhava teaching','The impending destruction of the Yādavas frames the Uddhava Gītā: the avadhūta’s teachers, bhakti, yoga, jñāna, renunciation and the final withdrawal of Kṛṣṇa.'],
      ['Skandha 12 — 13 chapters: Kali, future dynasties, dissolution and closure','Kali-age kings, cosmic dissolution and Parīkṣit’s end bring the narrative back to the original death-frame; praise of hearing the Bhāgavata closes the text by making its own recitation a religious practice.']
    ]
  });

  enrich('Devī Bhāgavata Purāṇa', {
    datingBasis:'The Devī Bhāgavata is a twelve-skandha Śākta Purāṇa whose received form belongs to the medieval period. Dating should distinguish inherited epic/Purāṇic narratives from the redaction that systematically makes Devī the supreme ontological principle.',
    hazraNotes:'Hazra’s general Purāṇic method remains useful, but the Devī Bhāgavata requires Śākta-specific scholarship and careful separation from the Bhāgavata Purāṇa. The text itself enumerates 318 chapters across twelve skandhas, giving an unusually useful internal control on the received architecture.',
    attestation:'The work’s competition and dialogue with other Purāṇic corpora are visible in shared narratives recentered on the Goddess. Reception history should therefore record both textual parallels and the later authority of the Devī Gītā and Śākta ritual passages.',
    map:[
      ['Skandha 1 — 20 chapters: Naimiṣa frame, Purāṇic definition and Devī as ground','The opening identifies the book, gives its twelve-skandha/318-chapter count, defines Purāṇic characteristics and establishes the Goddess as the power underlying creation, preservation and dissolution.'],
      ['Skandha 2 — 12 chapters: Vyāsa, Śuka and dynastic frame','Genealogical and sage narratives connect the Purāṇa to the Vyāsa–Śuka and Kuru/Parīkṣit worlds familiar from wider epic and Purāṇic tradition.'],
      ['Skandha 3 — 30 chapters: creation, divine power and kingship narratives','Cosmogonic and theological narratives repeatedly reinterpret the activity of Brahmā, Viṣṇu and Śiva through the prior agency of Mahādevī.'],
      ['Skandha 4 — 25 chapters: avatāra and divine-conflict cycles','Epic and avatāra materials are retold in a framework where Śakti is not a secondary consort but the power enabling divine action.'],
      ['Skandha 5 — 35 chapters: Goddess battles and sovereignty','Demon-conflict narratives foreground the autonomous martial Goddess and develop themes also known from older Devī traditions in a fuller Śākta Purāṇic setting.'],
      ['Skandha 6 — 31 chapters: kings, sages, karma and devotion','A varied narrative book connects royal and sage exempla to karma, divine grace and the efficacy of devotion to Devī.'],
      ['Skandha 7 — 40 chapters: Himalayan Goddess theology and Devī Gītā','The book culminates in a major theological discourse in which Devī teaches her own supreme nature, cosmology, yoga and devotion; the Devī Gītā is one of the text’s most influential philosophical units.'],
      ['Skandha 8 — 24 chapters: cosmography','Worlds, continents, mountains, rivers and cosmic regions are mapped within a universe whose ultimate source is Devī.'],
      ['Skandha 9 — 50 chapters: Prakṛti and forms of the Goddess','The longest non-narrative-heavy Śākta dossier systematizes manifestations and associated myths, including goddesses and sacred female powers known across regional traditions.'],
      ['Skandha 10 — 13 chapters: manvantaras and cosmic cycles','Manu cycles and recurrent cosmic administration place Śākta supremacy inside the standard Purāṇic architecture of time.'],
      ['Skandha 11 — 24 chapters: daily religion, purity and practice','Ritual discipline, conduct and embodied observance show how the Purāṇa translates Goddess theology into repeatable household and initiatory practice.'],
      ['Skandha 12 — 14 chapters: Gāyatrī, sacred knowledge and conclusion','The final book links Gāyatrī and supreme Devī, sacred recitation and liberating knowledge, bringing the Purāṇa to a self-conscious theological close.']
    ]
  });

  enrich('Nāradīya Purāṇa', {
    datingBasis:'The Nāradīya/Nārada Mahāpurāṇa must first be distinguished from the Bṛhannāradīya Upapurāṇa. Its received two-part structure is medieval and layered, and citations headed merely “Nāradīya” must be identified by wording rather than title alone.',
    hazraNotes:'Hazra’s stratification places substantial parts of the Pūrvabhāga and Uttarabhāga earlier than later expansions and treats ritual/canonical sections separately. The Purāṇa’s own catalogues of other Purāṇas are themselves external evidence for the medieval state of the wider corpus.',
    attestation:'Its summaries of other Purāṇas are unusually valuable: they can show that a named textual block was known to a medieval compiler, or reveal that later printed recensions contain major sections absent from the synopsis he knew.',
    map:[
      ['Pūrvabhāga — 125 chapters in four pādas','The first half is a large devotional-encyclopedic compilation combining Viṣṇu-bhakti, sacred geography, Gaṅgā traditions, vrata, varṇāśrama, sin/expiation, śrāddha and scriptural learning.'],
      ['Pūrvabhāga, pādas 1–4 — internal organization','The four pādas provide the actual navigational architecture of the 125 chapters. Their mixed genres are better read as themed textual clusters than as one continuous Nārada biography.'],
      ['Purāṇa catalogues — a medieval library inside the text','One of the most historically useful units summarizes the subjects of other Purāṇas. These notices should be compared text by text with surviving recensions and never treated as neutral modern tables of contents.'],
      ['Uttarabhāga — 82 chapters','The second part expands observance, pilgrimage, dharma and Vaiṣṇava devotion, with chapter numbering considerably more stable than in many huge Purāṇas but still dependent on edition.'],
      ['Rukmāṅgada and Ekādaśī cycle','The Rukmāṅgada-carita gives extended narrative form to vrata theology: royal duty, truth, family conflict and devotion are organized around rigorous Ekādaśī observance.']
    ]
  });

  enrich('Mārkaṇḍeya Purāṇa', {
    datingBasis:'The Mārkaṇḍeya is a layered Purāṇa in which the Devī Māhātmya is both firmly embedded and independently transmitted. The relative age of its narrative blocks must therefore be analysed separately from the final 137-chapter arrangement.',
    hazraNotes:'Hazra’s chapter-level chronology helps distinguish older narrative/manvantara material from later ritual and sectarian strata. Independent transmission of the Devī Māhātmya (chapters 81–93 in the common numbering) provides an especially clear example of a celebrated work living both inside and outside a Mahāpurāṇa.',
    attestation:'The Devī Māhātmya’s enormous independent commentarial, ritual and manuscript history means that citation of “Mārkaṇḍeya Purāṇa” and citation of the Devī Māhātmya are overlapping but not identical reception histories.',
    map:[
      ['Chapters 1–3 — Jaimini’s questions and the frame','Jaimini approaches Mārkaṇḍeya with unresolved epic questions and is redirected toward the wise birds, establishing the unusual dialogical frame of the opening corpus.'],
      ['Chapters 4–45 — discourse of the birds','A wide narrative and didactic anthology answers Jaimini through stories, dharma, cosmological and yogic teaching. The famous bird interlocutors give this first large block a distinctive literary identity.'],
      ['Chapters 46–80 — Mārkaṇḍeya–Krauṣṭuki and manvantara narratives','The frame shifts into a more recognizably Purāṇic sequence of cosmic cycles, royal narratives and exemplary figures, preparing for the eighth Manu.'],
      ['Chapters 81–93 — Devī Māhātmya','The Goddess defeats Madhu-Kaiṭabha, Mahiṣāsura and Śumbha-Niśumbha in three great caritas. This thirteen-chapter unit became an independently transmitted liturgical and theological classic.'],
      ['Chapters 94–137 — later manvantaras and closure','The narrative returns to future Manus and related royal/cosmic cycles after the Devī Māhātmya, confirming that the Goddess text is embedded within a larger manvantara framework rather than functioning as the conclusion of the Purāṇa.']
    ]
  });

  enrich('Agni Purāṇa', {
    datingBasis:'The Agni Purāṇa is an encyclopedic compilation whose subjects have different chronological horizons. Its mantra/tantra, polity, law, medicine, metrics, poetics, grammar and lexicography should be compared with the datable technical literature they excerpt or parallel rather than assigned one Purāṇic date.',
    hazraNotes:'Hazra proposed a principal medieval compilation while explicitly recognizing later technical strata. The work’s value for chronology lies precisely in its borrowings and summaries: a poetics or grammar chapter can be dated through the specialist textual tradition more securely than through the Purāṇa’s mythic frame.',
    attestation:'External technical literature supplies terminus points for individual dossiers. Hazra, for example, distinguishes the chronology of metrics, poetics, grammar/lexicography and Tantric chapters rather than treating chapters 1–383 as contemporaneous.',
    map:[
      ['Chapters 1–20 — avatāras, epic synopses and Purāṇic definition','After the opening, chapters 2–4 treat Matsya, Kūrma and Varāha; 5–11 summarize the seven Rāmāyaṇa kāṇḍas; 12 the Harivaṃśa; 13–15 the Mahābhārata; 16 Buddha and Kalki; 17–20 the characteristic subjects of Purāṇa.'],
      ['Chapters 21–70 — Vaiṣṇava ritual, image and temple','Pāñcarātra-oriented worship, bathing, mudrā, image consecration, temple architecture, iconography and the four vyūhas make this an extensive ritual-technical manual.'],
      ['Chapters 71–106 — Gaṇeśa, liṅga, Devī and consecration','Chapter 71 turns to Gaṇeśa; 72–105 cover liṅga/Devī worship and allied rites; 106 treats urban vāstu. The change of divine focus illustrates the encyclopedic rather than narrowly sectarian character of the work.'],
      ['Chapters 107–120 — cosmology, tīrthas and geography','Svāyambhuva Manu, bhuvanakośa, pilgrimage, ancestor rites and Purāṇic geography form a compact cosmographic block.'],
      ['Chapters 121–150 — astronomy, astrology and manvantaras','Astronomical/astrological systems dominate 121–149; chapter 150 returns to Purāṇic time through the Manus.'],
      ['Chapters 151–217 — dharma, expiation, vrata and dāna','Varṇa and āśrama duties, impurity/expiation, vows and gifts turn the Purāṇa into a digest of normative religious law.'],
      ['Chapters 218–258 — kingship, war, dhanurveda and law','Rājadharma, administration, diplomacy, fortification and warfare lead into Dhanurveda and juridical topics—a major archive for medieval Sanskrit political encyclopedism.'],
      ['Chapters 259–278 — ritual and mixed technical dossiers','Consecration and ritual instructions bridge the political/legal books and the great scientific-literary compendium that follows.'],
      ['Chapters 279–367 — medicine, grammar, metrics, poetics and lexicography','Ayurveda, veterinary/plant lore, grammar, chandas, alaṃkāra and lexical material make the late-middle Purāṇa resemble a compact multidisciplinary handbook. Individual technical chapters have their own source histories.'],
      ['Chapters 368–383 — philosophy, yoga and conclusion','Later chapters move through philosophical and yogic instruction toward self-knowledge and the concluding summary of the text’s enormous scope.']
    ]
  });

  enrich('Bhaviṣya Purāṇa', {
    datingBasis:'“Bhaviṣya Purāṇa” is one of the clearest cases where a canonical title has carried radically different and continually expanding material. The four-part printed corpus contains layers of very different dates; the Pratisargaparvan in particular includes demonstrably late historical and pseudo-historical accretions.',
    hazraNotes:'Hazra’s method is essential here: older ritual chapters, medieval material and very late additions must be dated separately. A prophecy-shaped narrative is not evidence that its described event was predicted centuries earlier; vocabulary, persons, institutions, manuscript history and external citation provide the chronological controls.',
    attestation:'The safest historical use of the Bhaviṣya is therefore inverse to popular “prophecy” reading: ask when a passage first appears in manuscripts or citations and which social world its language presupposes, then describe it as evidence for that redactional horizon.',
    map:[
      ['Brahmaparvan — about 215 chapters in the Bombay printed recension','Creation, solar religion, ritual, calendrical and social materials make this a large and heterogeneous first book. Its early chapters and later ritual accretions should not automatically be dated together.'],
      ['Madhyamaparvan — 62 chapters in three sections','Strongly ritual and Tantric materials, vrata and technical observance form a distinctive middle corpus with its own compositional history.'],
      ['Pratisargaparvan — four sections (7 + 35 + 32 + 26 chapters)','This is the most controversial block. Successive “future” histories extend into recognizably early-modern and modern horizons; they must be treated as late textual accretions rather than ancient predictions of later events.'],
      ['Uttaraparvan — about 208 chapters','Festivals, vratas, gifts, sacred days and pilgrimage dominate a large ritual-calendrical compendium, useful for social-religious history when its individual practices are dated critically.'],
      ['Recensional warning — four versus five parvans','Manuscripts and catalogues do not agree perfectly on the macro-division. Every chapter citation in serious work should therefore identify the edition/recension used.']
    ]
  });

  enrich('Brahmavaivarta Purāṇa', {
    datingBasis:'The present four-khaṇḍa Brahmavaivarta is a late medieval/early modern redaction very different from the older text cited under the same title. Its Kṛṣṇa–Rādhā theology and ritual/social chapters must be situated in that later history.',
    hazraNotes:[
      'Hazra’s appendix/citation method produces unusually concrete evidence: medieval nibandha writers preserve roughly a very large body of material attributed to an older Brahmavaivarta, while only a small fraction can be located in the present recension.',
      'Hazra identifies received Smṛti-oriented chapters across all four khaṇḍas—on mixed castes, gifts, worship, hell/karma, brahmin status, vratas, varṇāśrama and women’s duties—as evidence of late recasting rather than a transparent survival of the early cited Purāṇa.'
    ],
    attestation:'The striking mismatch between medieval quotations and the surviving four-khaṇḍa text is one of the strongest warnings in Purāṇic textual history against equating an ancient title with its latest extant recension.',
    map:[
      ['Brahma-khaṇḍa — 30 chapters','Cosmology and theological framing establish Kṛṣṇa as supreme and reinterpret creation through the Purāṇa’s late Vaiṣṇava metaphysics.'],
      ['Prakṛti-khaṇḍa — 67 chapters','Prakṛti and the goddesses, their manifestations, rites and associated narratives give the feminine divine a systematic place inside Kṛṣṇa-centred theology.'],
      ['Gaṇeśa-khaṇḍa — 46 chapters','Gaṇeśa’s birth, myths, worship and theological integration form a substantial semi-independent divine cycle.'],
      ['Kṛṣṇajanma-khaṇḍa — about 131 chapters (counts vary slightly)','The longest division develops Kṛṣṇa’s birth and especially Kṛṣṇa–Rādhā theology, Goloka and devotional myth. It is central to the distinctive profile of the present recension.'],
      ['Smṛti and vrata dossiers inside the four books','Normative chapters on gifts, worship, hells, vrata, social duties and ritual are not random extras: their vocabulary and citation history are key evidence for the late redactional history reconstructed by Hazra.']
    ]
  });

  enrich('Varāha Purāṇa', {
    datingBasis:'The critical edition has 215 chapters, while common printed recensions may have 217–218. The Nāradīya Purāṇa describes a two-part Varāha whose Uttarabhāga is not represented by the extant text, showing that the surviving book is not simply the complete ancient canonical object.',
    hazraNotes:'Hazra divides the extant Varāha into four major sections on the basis of interlocutors and literary character: chapters 1–112, 113–192, 193–212 (Dharma-saṃhitā) and 213 to the end. That internal segmentation is more historically informative than a single approximate date.',
    attestation:'The lost Uttarabhāga known from an external Purāṇic synopsis is a crucial negative witness: what a medieval source says the Varāha contained can preserve the memory of material absent from all surviving modern manuscripts.',
    sources:[{title:'Varāha Purāṇa — critical edition, Anand Swarup Gupta (All-India Kashiraj Trust, 1981)',detail:'Two-volume critical edition; chapters 1–143 in volume I and 144–215 with appendices in volume II.',url:'https://ci.nii.ac.jp/ncid/BA33606932'}],
    map:[
      ['Chapters 1–112 — Varāha–Pṛthvī dialogue','The first large section moves through creation, deity myths, vows, gifts and pilgrimage under the defining dialogue between Varāha and Earth. Its mixed ritual and sacred-geography material already shows multiple strata.'],
      ['Chapters 113–192 — Pṛthvī–Sanatkumāra transmission','The frame changes: Sūta reports Pṛthvī’s teaching to Sanatkumāra about the Varāha–Pṛthvī dialogue. Pilgrimage, vows, divine narratives and tīrtha material continue in a distinct literary section.'],
      ['Chapters 193–212 — Dharma-saṃhitā','A Janamejaya–Vaiśampāyana dialogue concentrates normative dharma, śrāddha, afterlife and moral consequence in a recognizable legal-religious block.'],
      ['Chapters 213–215/218 — Brahmā–Sanatkumāra close','The final section shifts interlocutors again and closes the received recension. Exact end numbering depends on edition; the critical text stops at 215.'],
      ['The missing Uttarabhāga of the Nāradīya synopsis','The medieval catalogue describes a second half not found in surviving Varāha manuscripts. The article therefore treats “lost textual state” as part of contents history rather than pretending the current 215 chapters exhaust the old title.']
    ]
  });

  enrich('Liṅga Purāṇa', {
    datingBasis:'The received Liṅga Purāṇa has a Pūrvabhāga of 108 chapters and an Uttarabhāga of 55, yet an internal verse in the final chapter states that the latter has only 46 chapters. That mismatch is direct evidence that the second part expanded after an earlier enumeration.',
    hazraNotes:'Hazra’s external-quotation appendix is especially striking for the Liṅga: large bodies of verses quoted as Liṅga Purāṇa by medieval writers are absent from the present recension. He uses that mismatch to argue for destructive recasting of an older text whose authority continued to be cited into the medieval/early modern period.',
    attestation:'The absence of those quoted verses is not a minor footnote. It means reception history preserves a Liṅga Purāṇa partly inaccessible in the surviving 163-chapter compilation, so “the text says” must always be tied to a witness or recension.',
    map:[
      ['Pūrvabhāga — 108 chapters: liṅga theology and cosmic Śiva','Creation, the liṅga as cosmic principle, Śiva mythology, yugas/manvantaras, genealogies, geography and extensive worship are organized around the claim that Śiva transcends and manifests the cosmos.'],
      ['Pūrvabhāga — ritual, sacred places and divine cycles','Liṅga installation and worship, vratas, tīrthas and major Śaiva narratives turn metaphysical claims into embodied religious practice.'],
      ['Pūrvabhāga — avatars and Pāśupata horizons','Śiva/Yogeśvara manifestation traditions and Pāśupata-oriented material are historically important for locating particular sections within the development of Śaiva institutions.'],
      ['Uttarabhāga — 55 received chapters, but an internal count of 46','The second part continues cosmology, worship, mantras, gifts, ethics, yoga and liberation. Its own closing enumeration preserves evidence for a shorter earlier state.'],
      ['Uttarabhāga conclusion — yoga and phalaśruti','The final movement presents forms of yoga and liberation before praising transmission of the Liṅga Purāṇa itself, making the internal 46-chapter claim especially significant for textual history.']
    ]
  });

  enrich('Skanda Purāṇa', {
    datingBasis:'“Skanda Purāṇa” denotes both an early Sanskrit Skandapurāṇa reconstructed through manuscript criticism and a huge later corpus of khaṇḍas/māhātmyas transmitted under the same title. Modern scholarship must keep those textual objects distinct.',
    hazraNotes:'Hazra’s chapter chronology remains valuable for the later khaṇḍa corpus: he dates identifiable pilgrimage and ritual chapters through medieval citation. Modern Groningen research goes further by critically editing the early Skandapurāṇa from old manuscripts, demonstrating that the massive received compendium cannot simply be projected backward as one ancient book.',
    attestation:'The Nāradīya Purāṇa’s seven-khaṇḍa synopsis is an important medieval external witness, but printed Skanda editions and regional manuscript corpora differ greatly. A responsible map therefore names the seven major khaṇḍas while separately treating the early critical Skandapurāṇa.',
    sources:[{title:'Groningen Skandapurāṇa Project',detail:'Critical study and edition of the early Skandapurāṇa manuscript tradition.',url:'https://www.skandapurana.org/'}],
    map:[
      ['Early Skandapurāṇa — critical-text tradition','The early text studied by the Groningen project is a historically specific Śaiva Purāṇa with its own manuscript genealogy. It should not be conflated with every later māhātmya carrying the Skanda title.'],
      ['Māheśvara-khaṇḍa','Śaiva myth, sacred geography and pilgrimage are gathered under a major later khaṇḍa whose internal divisions vary by edition.'],
      ['Vaiṣṇava-khaṇḍa','Vaiṣṇava sacred places and narratives demonstrate that the later Skanda corpus is not a narrowly single-deity compilation despite its Śaiva title.'],
      ['Brahma-khaṇḍa','Cosmological, ritual and pilgrimage dossiers form another large component of the received seven-khaṇḍa scheme.'],
      ['Kāśī-khaṇḍa','One of the most famous urban sacred-geography texts, constructing Vārāṇasī through tīrthas, temples, myths, death and liberation. Its chapters have their own medieval citation history.'],
      ['Avanti-khaṇḍa','Regional sacred geography centred on Avanti/Ujjain and related tīrthas exemplifies the compendium’s aggregation of local pilgrimage books.'],
      ['Nāgara-khaṇḍa','Ritual, social and regional materials transmitted as Nāgara form a distinctive later textual complex with medieval citation evidence.'],
      ['Prabhāsa-khaṇḍa','The Prabhāsa/Saurashtra pilgrimage corpus is another enormous regional book. Hazra identifies specific chapters cited by medieval authors, showing why individual strata can sometimes be dated even when the whole khaṇḍa cannot.']
    ]
  });

  enrich('Vāmana Purāṇa', {
    datingBasis:'The Vāmana Purāṇa survives in substantially different printed/manuscript forms: older editions can have about 96 chapters, while newer arrangements have 69 chapters plus a supplement. Its title is Vaiṣṇava, but much of the received work is strongly Śaiva and regional.',
    hazraNotes:'Hazra devoted a substantial chronological discussion to the Vāmana and argued that the extant work differs from the Mahāpurāṇa described in old catalogues, even classifying the surviving recension as an Upapurāṇa-type replacement. That conclusion is debated in classification, but the textual mismatch itself must be shown.',
    attestation:'The discrepancy between canonical descriptions and the surviving work is external evidence for title continuity across textual replacement or radical redaction. It is more informative than simply assigning the Vāmana a position in an eighteen-Purāṇa list.',
    map:[
      ['Chapter 1 and opening frame — Nārada asks about Vāmana','The Purāṇa opens with the expected Vaiṣṇava question about Viṣṇu’s dwarf incarnation, establishing the canonical title’s narrative rationale.'],
      ['Main mythological corpus — Śiva, Viṣṇu and Goddess cycles','The received body quickly expands far beyond Vāmana: Śaiva myths, goddess traditions, cosmology and pilgrimage occupy major space, a profile central to debates about the relation between title and surviving text.'],
      ['Saromāhātmya — 28-chapter Kurukṣetra/Thanesar pilgrimage book','A major sacred-geography unit maps tīrthas, rivers and forests around Kurukṣetra and Thanesar and into eastern Punjab. Treating it as a coherent māhātmya makes the internal geography legible.'],
      ['69-chapter recension and supplementary material','Newer editions commonly distinguish a 69-chapter main text from a supplement absent in some Bengal manuscripts. Chapter references therefore need edition identification.'],
      ['96-chapter older printed arrangement','Older printed versions package the material differently, another reminder that chapter number alone is not a stable textual identifier across the Vāmana tradition.']
    ]
  });

  enrich('Kūrma Purāṇa', {
    datingBasis:'The Kūrma is a layered Vaiṣṇava-Śaiva Purāṇa with a particularly important history of theological reorientation. The critical edition’s Pūrvabhāga/Uttarabhāga architecture should be distinguished from chapter counts in older translations and prints.',
    hazraNotes:'Hazra’s chronological work and later scholarship both stress that the Kūrma cannot be reduced to a simple sectarian label: Pāñcarātra/Vaiṣṇava foundations coexist with powerful Śaiva and Pāśupata materials, including the Īśvara Gītā.',
    attestation:'Large didactic units such as the Īśvara Gītā and Vyāsa Gītā should be studied as identifiable textual blocks with their own parallels and reception rather than as anonymous “philosophy sections.”',
    map:[
      ['Pūrvabhāga — 51 chapters in the critical edition','Creation, avatāra frame, divine myths, cosmology and sacred history establish the broad Purāṇic world. Older printed numbering can extend this first part differently, so edition should be stated.'],
      ['Pūrvabhāga — theology and sacred geography','Vaiṣṇava and Śaiva materials are deliberately interlaced; pilgrimage and deity myths show a synthetic religious environment rather than a clean replacement of one sect by another.'],
      ['Uttarabhāga chapters 1–11 — Īśvara Gītā','Śiva teaches metaphysics, yoga and liberation in a major philosophical unit whose prominence is essential to the Purāṇa’s later Śaiva profile.'],
      ['Uttarabhāga chapters 12–33 — Vyāsa Gītā and dharma','Vyāsa’s instruction develops renunciation, knowledge, ethical/religious duty and liberation, forming a second coherent didactic block.'],
      ['Uttarabhāga later chapters — tīrtha, rite, dissolution and close','Pilgrimage and ritual instruction lead back into cosmic and soteriological closure. The critical edition’s second part totals 44 chapters.']
    ]
  });

  enrich('Matsya Purāṇa', {
    datingBasis:'The Matsya is a large layered Purāṇa whose architectural, ritual, political and dāna chapters can often be dated or contextualized through comparison with technical śāstra. Its flood/creation frame is therefore only one stratum of a much broader encyclopedia.',
    hazraNotes:'Hazra’s chapter-oriented chronology is especially appropriate because the work changes genre repeatedly: myth and genealogy, festival/saṃskāra manuals, kingship, architecture/iconography and mahādāna catalogues have different source relationships.',
    attestation:'Technical parallels with vāstu, śilpa, dharma and polity literature are external evidence for the history of particular Matsya blocks. The article uses those boundaries rather than treating 291 chapters as one continuous narrative.',
    map:[
      ['Chapters 1–53 — Matsya frame, flood, creation and early Purāṇic history','The fish avatāra and Manu frame lead into creation, genealogical and mythic materials that establish the conventional Purāṇic universe.'],
      ['Chapters 54–102 — festivals, vratas and saṃskāra-oriented religion','A long practical block organizes sacred time, observance and life-cycle/household concerns, demonstrating the work’s shift from myth to normative ritual encyclopedia.'],
      ['Chapters 103–214 — sacred geography, myth, dynasties and mixed dossiers','Pilgrimage, divine narratives, genealogical material and ritual teaching occupy a heterogeneous middle whose smaller units must be assessed independently.'],
      ['Chapters 215–227 — kingship and government','Royal duties, administration and political order form a coherent rājadharma dossier that should be read beside Artha/Dharmaśāstra traditions.'],
      ['Chapters 228–251 — warfare, construction and technical transition','Political-military and technical subjects lead into the famous architectural corpus.'],
      ['Chapters 252–270 — architecture, sculpture and consecration','Temple forms, images, pedestals, liṅgas, installation, bathing of images, vāstu defects and maṇḍapas make this one of the Purāṇa’s most important śilpa/vāstu blocks.'],
      ['Chapters 271–273 — dynastic/Kali material','A brief return to dynasties and historical time separates the architectural manual from the concluding gift corpus.'],
      ['Chapters 274–289 — mahādānas','Sixteen great gifts and related ritual economies are catalogued in detail, a major source for the ideology of royal and elite donation.'],
      ['Chapters 290–291 — kalpas and conclusion','The text closes by returning to cosmic enumeration and a contents/phalāśruti-style ending after its long encyclopedic journey.']
    ]
  });

  enrich('Garuḍa Purāṇa', {
    datingBasis:'The Garuḍa is not primarily a “book of death.” Its surviving recensions contain a large encyclopedic Pūrvakhaṇḍa and a much smaller, highly variable Pretakhaṇḍa. Some editions add a Brahmakhaṇḍa, and chapter totals vary significantly.',
    hazraNotes:'Hazra’s discussion and later work distinguish the present Garuḍa from an earlier textual title cited by medieval authorities. The famous Garuḍa-purāṇa-sāroddhāra is itself a later digest/commentarial work and must not be mistaken for the Mahāpurāṇa.',
    attestation:'Three substantially different Pretakhaṇḍa traditions and the history of the Sāroddhāra show how strongly reception can reshape public ideas of a Purāṇa. Funeral material is important, but it is neither textually uniform nor representative of the whole corpus.',
    map:[
      ['Pūrvakhaṇḍa — about 229 chapters (240–243 in some recensions)','The much larger first part is an encyclopedia of Vaiṣṇava and multi-deity worship, temple/image practice, sacred geography, law, polity, science and soteriology. Its exact chapter count is recension-dependent.'],
      ['Pūrvakhaṇḍa — worship, temple and icon','Viṣṇu, Lakṣmī, Śiva, Sūrya, Gaṇeśa, Durgā and other deities appear in ritual and iconographic instructions, demonstrating a broader religious world than the Purāṇa’s modern funerary stereotype suggests.'],
      ['Pūrvakhaṇḍa — gems, omens, polity and nīti','Gemology, signs, statecraft and ethical-political instruction belong to the encyclopedic middle and connect the text with specialist Sanskrit knowledge systems.'],
      ['Pūrvakhaṇḍa — Dhanvantari, medicine and materia medica','Ayurvedic disease, treatment, herbs and related sciences form a substantial technical dossier with an independent history of use by historians of Indian medicine.'],
      ['Pūrvakhaṇḍa — language, yoga and Brahma knowledge','Grammar/lexical topics, philosophical instruction and yoga move the encyclopedia toward liberation rather than death ritual alone.'],
      ['Uttarakhanda/Pretakhaṇḍa — 34–49 chapters depending recension','Funeral rites, the post-mortem journey, Yama, śrāddha and afterlife form the famous second part. Its very large recensional variation means exact prescriptions cannot be generalized across all Garuḍa witnesses.'],
      ['Garuḍa-purāṇa-sāroddhāra — reception, not the Purāṇa itself','Navanidhirāma’s later digest/commentarial work became widely translated and was often confused with the Garuḍa Purāṇa. The article explicitly separates that reception text from the underlying Mahāpurāṇa.']
    ]
  });

  enrich('Brahmāṇḍa Purāṇa', {
    datingBasis:'The Brahmāṇḍa shares so much material with the Vāyu that their relationship is fundamental to chronology. The extant book also contains identifiable later appendices and a famous Lalitopākhyāna whose transmission must be distinguished from the older core.',
    hazraNotes:[
      'Hazra and Pargiter use hundreds of Vāyu–Brahmāṇḍa parallels and medieval cross-attributions to reconstruct an earlier common history. Some verses quoted as Brahmāṇḍa by medieval authors are now found in Vāyu, while substantial dharma and śrāddha sequences correspond closely in both.',
      'The Lalitopākhyāna has its own invocation/dialogue and functions as a large Śākta appendix in many received arrangements; it should be mapped explicitly rather than dissolved into the preceding Upasaṃhāra.'
    ],
    attestation:'The Vāyu/Brahmāṇḍa cross-citation evidence is among the best examples of external quotation altering how a Purāṇa’s history is reconstructed: modern title boundaries are later than at least part of the shared textual tradition.',
    map:[
      ['Pūrvabhāga, Prakriyā-pāda — 5 chapters','A compact cosmogonic opening establishes creation and the fundamental cosmic process.'],
      ['Pūrvabhāga, Anuṣaṅga-pāda — 33 chapters','Cosmology, geography, genealogies, sages, gods and related historical-cosmic materials form the larger first-half corpus and repeatedly parallel Vāyu.'],
      ['Madhyabhāga, Upodghāta-pāda — 74 chapters','The largest central division develops dynasties, yugas, ritual, cosmological and religious materials in a broad Purāṇic encyclopedia.'],
      ['Uttarabhāga, Upasaṃhāra-pāda — 4 core chapters','A short formal conclusion follows the much larger Upodghāta, an architecture quite different from the scale of the attached Śākta narrative.'],
      ['Lalitopākhyāna — about 40 chapters as an appended Śākta book','The story and worship of Lalitā/Tripurasundarī became one of the Brahmāṇḍa’s most influential transmitted units. Its fresh frame and scale support treating it as a major attached work with its own reception.'],
      ['Adhyātma Rāmāyaṇa and other associated transmission','Some later manuscript/printed traditions associate additional works with the Brahmāṇḍa title. Their authority and history need separate witness-based treatment rather than automatic inclusion in the oldest reconstructable text.']
    ]
  });

  /* Load a presentation-only override. It is deliberately scoped to standalone Purāṇa pages. */
  if (!document.querySelector('link[data-purana-professional-wiki]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/vivekadrishti/assets/css/puranas/current/purana-professional-20260906.css?build=20260906-v1';
    link.dataset.puranaProfessionalWiki = 'true';
    document.head.appendChild(link);
  }
})();
