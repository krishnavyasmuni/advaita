(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function entry(name){return D['Purāṇa:'+name]||D[name]||null;}
  function sec(name,title){const e=entry(name);if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function read(name,items){const s=sec(name,'Further reading');if(s)s.bullets=[...A(s.bullets),...items];const e=entry(name);if(e)e.bibliography=[...A(e.bibliography),...items];}

  paras('Nāradīya Purāṇa','Critical edition',[
    'A research citation should also distinguish the Nāradīya Mahāpurāṇa from the Bṛhannāradīya at the bibliography level. Catalogues, translations and digitized texts sometimes collapse titles that medieval authors themselves did not always use consistently. Before using a verse for chronology or theology, the scholar should verify the Sanskrit incipit, chapter context and recension rather than relying on an English title alone.',
    'The lack of a universally adopted stemmatic edition means that strong claims should be supported by more than one major Sanskrit witness when possible. For the Purāṇic catalogue chapters, comparison with the surviving structures of the Purāṇas they describe is itself a form of textual criticism: agreements, omissions and mismatches may reveal the recension known to the Nāradīya compiler.'
  ]);
  read('Nāradīya Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the Nāradīya/Nārada Purāṇa and the problem of similarly titled texts.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, especially the treatment of Nārada/Nāradīya materials and chronology.',
    'R. C. Hazra, Studies in the Upapurāṇas, for distinction between the Mahāpurāṇa and Bṛhannāradīya/related Nārada titles.',
    'Major Sanskrit editions of the Nāradīya Purāṇa, cited by part, chapter and edition rather than title alone.',
    'P. V. Kane, History of Dharmaśāstra, for medieval citations of Purāṇic vrata, dāna and ritual passages.',
    'Comparative study of the Nāradīya summaries of the eighteen Purāṇas against surviving recensions as evidence for medieval canon formation.'
  ]);

  paras('Bhāgavata Purāṇa','Critical edition',[
    'The Ahmedabad critical edition prepared by H. G. Shastri, Bharati K. Shelat, K. K. Shastree and collaborators for the B. J. Institute of Learning and Research is a major philological resource and should be named explicitly when the article makes textual claims. It was issued across multiple volumes covering the twelve skandhas and provides a stronger basis for variant-sensitive work than a single devotional print.',
    'Commentaries are also textual witnesses. Śrīdhara Svāmin’s Bhāvārthadīpikā establishes the presence and medieval interpretation of many readings; Vallabha, Jīva Gosvāmin, Viśvanātha Cakravartin and other exegetes preserve further evidence for how the text was read, segmented and doctrinally understood. Commentary does not replace manuscript criticism, but it can establish a terminus for a reading and reveal recensional assumptions.'
  ]);
  paras('Bhāgavata Purāṇa','Influences and reception',[
    'The dating debate has a direct bearing on reception history. Edwin F. Bryant surveys arguments for date and provenance, while Dennis Hudson’s work on the eighth-century Vaikuṇṭha Perumāḷ temple asks whether iconographic and theological parallels require earlier circulation of Bhagavata-type material. These arguments should be presented as competing scholarly models, not collapsed into a false consensus.',
    'The Bhāgavata’s reception across Gauḍīya Vaiṣṇavism, Puṣṭimārga and other communities is interpretively diverse. The same verses can be read through acintya-bhedābheda, śuddhādvaita or other theological grammars; citing “Vaiṣṇava interpretation” without naming a lineage obscures real exegetical differences.'
  ]);
  read('Bhāgavata Purāṇa',[
    'H. G. Shastri, Bharati K. Shelat, K. K. Shastree et al. (eds.), Śrīmad Bhāgavata Mahāpurāṇa: Critical Edition, B. J. Institute of Learning and Research, Ahmedabad, 1996–2002.',
    'Edwin F. Bryant, “The Date and Provenance of the Bhāgavata Purāṇa,” Journal of Vaiṣṇava Studies; survey of chronological and geographical arguments.',
    'D. Dennis Hudson, The Body of God: An Emperor’s Palace for Krishna in Eighth-Century Kanchipuram, Oxford University Press, 2008.',
    'Daniel P. Sheridan, The Advaitic Theism of the Bhāgavata Purāṇa, for philosophical analysis of the text.',
    'Śrīdhara Svāmin, Bhāvārthadīpikā, the foundational medieval Sanskrit commentary.',
    'Vallabha, Subodhinī, and major Gauḍīya commentarial works for distinct reception histories.',
    'Ludo Rocher, The Purāṇas, 1986, for the Bhāgavata within the broader history of Purāṇic literature.',
    'J. A. B. van Buitenen and other comparative Purāṇic studies for Kṛṣṇa narrative and textual history.'
  ]);

  paras('Agni Purāṇa','Critical edition',[
    'The Agni Purāṇa still lacks a single universally accepted modern stemmatic critical edition of the whole encyclopedic text. Because technical chapters on poetics, architecture, medicine, polity and ritual may have circulated in semi-independent forms, a future edition will have to combine manuscript stemmatics with source criticism of specialized śāstric parallels.',
    'For research in literary theory, the Agni should be collated against Alaṃkāra and dramaturgical treatises; for polity against Arthaśāstra and Nīti literature; for iconography against Śilpa and Āgama sources; for medicine against Āyurvedic compendia. A shared passage is not automatically evidence that the Purāṇa originated the doctrine.'
  ]);
  paras('Agni Purāṇa','Influences and reception',[
    'The Agni Purāṇa’s influence is often disciplinary rather than sectarian. Historians of Sanskrit poetics, iconography, architecture, statecraft and medicine encounter it as a witness to the compilation and popularization of specialist knowledge within a religious encyclopedia.',
    'Its encyclopedic character also makes it a source for the history of knowledge organization. The redactors assumed that divine revelation could encompass ritual, grammar, metrics, warfare, images and medicine; the modern division between “religion” and “secular science” therefore maps poorly onto the text’s own intellectual world.'
  ]);
  read('Agni Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the Agni Purāṇa as an encyclopedic text.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, chapter on the Agni Purāṇa.',
    'The Agni Purāṇa, Ancient Indian Tradition and Mythology translation series, Motilal Banarsidass, used with its Sanskrit recension identified.',
    'P. V. Kane, History of Dharmaśāstra, for comparison of ritual, dāna and normative chapters.',
    'Comparative scholarship on Sanskrit Alaṃkāraśāstra, Nāṭya, Vāstu/Śilpa, Āyurveda and Nīti for the specialized chapters.',
    'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology, for comparative narrative context.',
    'Major Sanskrit printed editions should be identified explicitly because no single full critical edition governs all citation.'
  ]);

  paras('Skanda Purāṇa','Critical edition',[
    'The modern Skandapurāṇa project must be cited volume by volume. The early text has been edited through a sequence beginning with Rob Adriaensen, Hans T. Bakker and Harunaga Isaacson and continuing with Bakker, Peter Bisschop, Yuko Yokochi and collaborators. Later volumes published by Brill provide critical Sanskrit, introductions and annotated synopses for successive chapter ranges.',
    'The project’s recensional method is itself part of the scholarship students should learn. The editors do not assume that one late vulgate preserves the original shape; they distinguish early manuscript strata and later revisions. This is a model for why “the Skanda Purāṇa says…” requires specification of early recension versus later Khaṇḍa corpus.'
  ]);
  paras('Skanda Purāṇa','Influences and reception',[
    'The early Skandapurāṇa is increasingly central to historical studies of early-medieval Śaivism precisely because its textual data can be correlated with political geography, pilgrimage and sectarian institutions. Bakker and Bisschop’s work shows how Purāṇic philology can contribute to history when it is combined with inscriptions and regional evidence.',
    'The later Khaṇḍa collections require a different reception model: they are vast archives of local māhātmyas, many with lives outside the pan-Skanda compilation. Their influence is best traced through regional pilgrimage networks, manuscripts and temple cultures rather than by treating all eighty-one-thousand traditional verses as one authorial work.'
  ]);
  read('Skanda Purāṇa',[
    'Rob Adriaensen, Hans T. Bakker and Harunaga Isaacson (eds.), The Skandapurāṇa, Vol. I, critical edition of adhyāyas 1–25.',
    'Hans T. Bakker and Harunaga Isaacson (eds.), The Skandapurāṇa, Vol. IIa.',
    'Hans T. Bakker, Peter C. Bisschop and Yuko Yokochi (eds.), The Skandapurāṇa, Vol. IIb.',
    'Yuko Yokochi (ed.), The Skandapurāṇa, Vol. III, and subsequent critical volumes.',
    'Peter C. Bisschop and Yuko Yokochi, The Skandapurāṇa, later Brill volumes including the Varāha and Andhaka cycles.',
    'Hans T. Bakker, studies of the Skandapurāṇa, Vārāṇasī, Thanesar and early-medieval Śaivism.',
    'Ludo Rocher, The Purāṇas, 1986, for the history of the later Skanda textual complex.',
    'Regional studies of Kāśī, Prabhāsa, Avantī and Reva/Narmadā māhātmyas for later reception.'
  ]);

  paras('Bhaviṣya Purāṇa','Critical edition',[
    'The Bhaviṣya Purāṇa has no single critical edition capable of resolving all surviving parvans and their late historical accretions. This matters more here than for many Purāṇas because the text continued to absorb material into very recent centuries. A printed vulgate can therefore create a false impression of chronological unity.',
    'Historical passages should be treated almost like documents within a dossier: identify recension, locate the earliest witness possible, establish the latest person or event presupposed, and compare vocabulary with dated Sanskrit and vernacular sources. Only then should the passage be used to discuss Hindu perceptions of Islam, Christianity, colonial rule or modern political change.'
  ]);
  paras('Bhaviṣya Purāṇa','Influences and reception',[
    'Modern reception has disproportionately focused on supposed “prophecies,” often removing late passages from their textual history. A research-grade article must explicitly reject this method. A passage about a post-medieval figure is evidence for the redactor who knew that figure, unless independent manuscript evidence demonstrates an earlier date.',
    'The less sensational vrata and solar materials are equally important for reception because they connect the Bhaviṣya to recurring household practice and Sūrya-oriented traditions. The history of the Purāṇa is therefore not reducible to the Pratisarga Parvan.'
  ]);
  read('Bhaviṣya Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the exceptionally layered Bhaviṣya Purāṇa.',
    'R. C. Hazra, studies of Purāṇic chronology and rites for methodological comparison.',
    'Major Sanskrit editions of the Bhaviṣya Purāṇa, always cited by parvan, chapter and edition.',
    'P. V. Kane, History of Dharmaśāstra, for vrata and ritual citations attributed to Bhaviṣya materials.',
    'Studies of Sanskrit representations of Muslims, Christians and colonial-era history, used to contextualize late Pratisarga strata.',
    'Manuscript catalogues and dated witnesses should take precedence over internet prophecy compilations for chronological claims.'
  ]);

  paras('Brahmavaivarta Purāṇa','Critical edition',[
    'The received Brahmavaivarta does not have a universally accepted modern stemmatic critical edition. Its four-khaṇḍa structure is stable in many prints, but the relationship between the extant Rādhā-Kṛṣṇa-centered work and earlier citations to a Brahmavaivarta title remains one of the central historical problems.',
    'Critical study should distinguish evidence for an older title from evidence for the received text. A medieval author’s quotation from a “Brahmavaivarta” proves that a work under that name circulated; it does not prove that the quoted author knew the same Kṛṣṇajanma and Prakṛti materials found in a much later printed recension.'
  ]);
  paras('Brahmavaivarta Purāṇa','Influences and reception',[
    'Edward C. Dimock’s scholarship on Bengali Vaiṣṇavism is useful for contextualizing the Purāṇa’s Rādhā-Kṛṣṇa erotic and devotional world, but direct dependence between the Sanskrit text and any one Bengali movement should be argued carefully. Shared themes can reflect a broader late-medieval religious environment.',
    'The prominence of Rādhā, prakṛti and gendered divine complementarity makes the received Brahmavaivarta especially important for studying late Sanskrit Vaiṣṇava theology, even if that very lateness separates it sharply from early Mahāpurāṇic strata.'
  ]);
  read('Brahmavaivarta Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the Brahmavaivarta Purāṇa and its late received form.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, chapter on the Brahmavaivarta Purāṇa.',
    'Edward C. Dimock Jr., studies of Bengali Vaiṣṇavism and Rādhā-Kṛṣṇa devotional traditions for historical context.',
    'Major Sanskrit editions of the Brahmavaivarta Purāṇa, cited by Brahma, Prakṛti, Gaṇeśa and Kṛṣṇajanma khaṇḍa.',
    'Comparative studies of Rādhā theology, Prakṛti doctrine and late-medieval Vaiṣṇava Sanskrit literature.',
    'Manuscript catalogues and early quotations under the Brahmavaivarta title, treated separately from the received four-khaṇḍa recension.'
  ]);
})();