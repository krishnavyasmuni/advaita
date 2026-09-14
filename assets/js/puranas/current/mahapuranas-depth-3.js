(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function entry(name){return D['Purāṇa:'+name]||D[name]||null;}
  function sec(name,title){const e=entry(name);if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}
  function read(name,items){const s=sec(name,'Further reading');if(s)s.bullets=[...A(s.bullets),...items];const e=entry(name);if(e)e.bibliography=[...A(e.bibliography),...items];}

  // MĀRKAṆḌEYA PURĀṆA
  paras('Mārkaṇḍeya Purāṇa','Date of composition',[
    'The Mārkaṇḍeya Purāṇa is among the more useful Purāṇas for demonstrating why chronology must be argued at the level of textual strata. Its non-sectarian narrative frame, the celebrated Devī Māhātmya embedded in chapters 81–93 of many printed recensions, and later additions do not all need to belong to the same historical moment. Modern dating therefore distinguishes the formation of the surrounding Purāṇa from the date of the goddess text and from the age of surviving manuscripts.',
    'Older scholarship often placed substantial portions of the Mārkaṇḍeya relatively early within the extant Purāṇic corpus, in part because it lacks the massive temple and pilgrimage accretions that characterize several later Mahāpurāṇas. Such relative dating is suggestive rather than decisive: absence of later institutions is not by itself proof of antiquity, and individual narrative blocks may have circulated before incorporation into the received compilation.',
    'The Devī Māhātmya has generated its own chronology. Thomas Coburn proposed a setting around the fifth or sixth century CE, while later philological work, including Yuko Yokochi’s research on goddess traditions, has argued for somewhat later horizons for aspects of its formation. The important point for this article is that the Devī Māhātmya is a distinct, highly structured composition embedded within the Purāṇa, and its date should not simply be equated with the date of the entire Mārkaṇḍeya.',
    'The dynastic, mythic and dharma materials surrounding the goddess cycle preserve older literary motifs while reflecting the redactional interests of the compilers who joined them. Historical argument therefore uses intertextuality with epic and Purāṇic parallels, metrical and stylistic evidence, quotation history and manuscript comparison rather than a single traditional date.',
    'Surviving manuscripts are centuries later than the earliest proposed strata. They document transmission, not first composition. A serious chronology must distinguish the date of a witness, the date of a recension represented by that witness, and the date of the narrative or hymn that recension transmits.'
  ]);
  sub('Mārkaṇḍeya Purāṇa','Structure','Narrative architecture and the place of the Devī Māhātmya',[
    'The received Purāṇa is commonly transmitted in a little over one hundred chapters, although chapter numbering varies by edition. Much of the work is cast as discourse ultimately associated with the sage Mārkaṇḍeya, but the text repeatedly embeds subordinate dialogues and exemplary narratives rather than maintaining one uninterrupted conversation.',
    'The Devī Māhātmya forms a self-contained thirteen-chapter unit in the common arrangement. Its internal architecture is much tighter than the surrounding Purāṇa: three major caritas narrate the defeat of Madhu and Kaiṭabha, Mahiṣāsura, and Śumbha-Niśumbha, framed by the story of King Suratha and the merchant Samādhi seeking instruction from the sage Medhas.',
    'This embeddedness matters methodologically. A scholar can study the Devī Māhātmya as a work with its own hymnic and narrative design while also asking why it was preserved inside the Mārkaṇḍeya. The enclosing Purāṇa supplied a prestigious scriptural location; the goddess text in turn became the most influential portion of the larger work.'
  ],[
    'Outer Purāṇic frame: dialogues, exemplary stories, cosmological and dharma material associated with Mārkaṇḍeya and other speakers.',
    'Devī Māhātmya: a thirteen-chapter unit with three battle cycles and major hymns to the Goddess.',
    'Later chapter numbering differs among editions; citations should identify the edition when precision matters.'
  ]);
  sub('Mārkaṇḍeya Purāṇa','Contents','The Suratha–Samādhi frame',[
    'The Devī Māhātmya begins from a psychological problem rather than a cosmic battle. King Suratha has lost his kingdom; the merchant Samādhi has been rejected by his family; both nevertheless remain emotionally attached to what has harmed or abandoned them. Their inability to detach becomes the occasion for Medhas to explain Mahāmāyā, the power through which living beings are bound to objects, identities and relationships.',
    'This frame turns the goddess myths into an answer to a problem of cognition and attachment. The battles are not only divine history; they reveal a power that operates cosmically and psychologically. The conclusion returns to Suratha and Samādhi, whose different aspirations lead to different boons, thereby linking mythic revelation to royal and renunciatory goals.'
  ]);
  sub('Mārkaṇḍeya Purāṇa','Contents','The three caritas of the Devī Māhātmya',[
    'The first carita presents the Goddess as Yoganidrā or Mahāmāyā associated with Viṣṇu’s cosmic sleep. When Madhu and Kaiṭabha threaten Brahmā, the power of sleep is praised so that Viṣṇu may awaken. The episode establishes that the feminine divine power is not secondary decoration: even Viṣṇu’s capacity to act is explained through her presence and withdrawal.',
    'The second carita narrates Mahiṣāsura’s conquest and the emergence of the Goddess from the combined energies of the gods. Their weapons and powers are gathered in one female figure who defeats the buffalo demon. The narrative synthesizes previously distributed divine powers and provides one of the foundational literary images of Durgā as supreme warrior.',
    'The third and longest carita develops a sequence of increasingly complex opponents—Dhūmralocana, Caṇḍa and Muṇḍa, Raktabīja, Niśumbha and Śumbha. Multiple goddesses and the Mātr̥kās emerge, yet the theology ultimately reasserts their unity in the one Devī. The final confrontation makes explicit that the apparent plurality of female forms is the manifestation of a single supreme power.'
  ]);
  sub('Mārkaṇḍeya Purāṇa','Contents','Material outside the Devī Māhātmya',[
    'The fame of the goddess cycle can obscure the rest of the Purāṇa. The larger text contains cosmological teaching, stories of kings and sages, moral exempla, accounts of births and rebirths, and material on duties and human conduct. These chapters belong to the broader Purāṇic project of joining sacred history to normative reflection.',
    'Narratives such as those concerning Harīścandra, the birds who answer difficult questions, and teachings about social and ethical conduct show a literary texture quite different from the tightly organized Devī Māhātmya. That diversity is historically important because it demonstrates that the received Purāṇa is not reducible to a single sectarian program.'
  ]);
  paras('Mārkaṇḍeya Purāṇa','Theology',[
    'The surrounding Mārkaṇḍeya Purāṇa is comparatively non-sectarian in the sense that it does not subordinate every topic to a single deity with the consistency found in some later Vaiṣṇava or Śaiva compilations. The Devī Māhātmya, by contrast, offers one of the decisive Sanskrit formulations of the Goddess as supreme reality.',
    'Its theological innovation lies less in inventing female divinities than in integrating many inherited female powers into an overarching doctrine. Devī is simultaneously cosmic sleep, creative power, martial sovereignty, auspiciousness, knowledge, hunger, memory, faith and the presence abiding in living beings. The famous recurrent salutations identify her not merely with one mythic body but with pervasive functions of existence.',
    'The text preserves a productive tension between transcendence and manifestation. The Goddess appears in many forms and receives weapons or energies from male gods, yet the hymns and the final Śumbha episode insist that these powers are ultimately hers. Later Śākta traditions could therefore read the work as scriptural warrant for a metaphysics in which gods are expressions of the supreme Devī.',
    'The language of māyā is equally important. Mahāmāyā binds beings through attachment, but she is also the power who grants knowledge and liberation. The same divine agency can obscure and reveal. This ambivalence resists a simplistic equation of māyā with mere illusion and supports later Śākta accounts of power as both world-producing and salvific.',
    'The theology is expressed through hymn and story rather than through one systematic philosophical chapter. Its afterlife in Śākta Tantra, liturgy and goddess theology depends precisely on the portability of those hymns and narrative archetypes.'
  ]);
  paras('Mārkaṇḍeya Purāṇa','Critical edition',[
    'The critical edition of the Mārkaṇḍeyapurāṇam prepared by M. L. Wadekar at the Oriental Institute, Vadodara, is a major modern philological resource. Its separation of volumes, including detailed treatment of the Devī Māhātmya, makes it possible to compare a critically constituted text with the many popular and liturgical editions in circulation.',
    'Critical editing is especially important for the Devī Māhātmya because the work has an enormous ritual afterlife. Recitational traditions may preserve stotras, ancillary rites, kavacas, argalās, kīlakas or other materials adjacent to the thirteen chapters. These should not be assumed automatically to belong to the earliest recoverable form of the core narrative.',
    'The editor’s task is therefore not to choose between “devotional” and “scholarly” texts but to identify textual layers and witnesses. A liturgical appendix can be religiously authoritative in a living tradition while still being historically later than the critical core.',
    'For precise academic citation, scholars should distinguish the chapter numbering of the full Mārkaṇḍeya Purāṇa from the independent numbering often used for the Devī Māhātmya. Quoting only “chapter 5” without specifying the system can create ambiguity.',
    'Future work can profitably connect manuscript philology to the study of performance: recitation manuals, regional scripts, festival booklets and commentaries show how the text was stabilized differently for ritual communities than for critical editors.'
  ]);
  paras('Mārkaṇḍeya Purāṇa','Influences and reception',[
    'The reception history of the Mārkaṇḍeya is dominated by the Devī Māhātmya, which became one of the foundational scriptures of Śākta Hinduism. It is recited independently of the parent Purāṇa, translated into numerous Indian languages, commented upon, ritualized and embedded in festival traditions, especially forms of Durgā worship.',
    'Its influence is not limited to formal Śākta sects. The images of Mahiṣāsuramardinī, Caṇḍikā and the many-armed Goddess entered temple sculpture, painting, vernacular narrative, devotional song and public festival culture. The text’s compact mythic cycles became exceptionally adaptable visual and performative templates.',
    'Thomas Coburn’s scholarship emphasized the Devī Māhātmya as a crystallization of a Goddess tradition in Sanskrit. This formulation remains influential because the text gathers earlier motifs while producing a new theological center: ultimate reality can be spoken of comprehensively as feminine.',
    'Later texts such as the Devī Bhāgavata and Tantric traditions extend, reinterpret or systematize themes already prominent here. Direct literary dependence must be demonstrated passage by passage, but the Devī Māhātmya unquestionably established a scriptural vocabulary that later goddess traditions could presuppose.',
    'The surrounding Mārkaṇḍeya Purāṇa had a quieter reception. Its survival is nevertheless inseparable from the prestige of the embedded goddess text, a striking example of how one section can reshape the historical identity of an entire Purāṇa.'
  ]);
  paras('Mārkaṇḍeya Purāṇa','Rites, dharma and social history',[
    'The larger Purāṇa contains normative material relevant to household and social conduct, but the most historically influential ritual system attached to the text developed around Devī Māhātmya recitation. The thirteen chapters are treated not simply as literature but as efficacious sound whose recitation can be prescribed for protection, prosperity, victory, removal of danger and liberation-oriented devotion.',
    'Ritual manuals often surround the core with preparatory and concluding texts, nyāsa, kavaca and other liturgical elements. Their historical layering is itself evidence for the growth of Śākta ritual culture. A university-level treatment must therefore distinguish the textual core from the larger recitational package while studying both.',
    'The myths also encode ideals of sovereignty. Suratha’s royal loss, the Goddess’s restoration of cosmic order and the martial destruction of demons allowed royal and later public communities to connect political protection with divine feminine power.',
    'The language of the hymns maps the Goddess onto socially valued qualities—śraddhā, smṛti, buddhi, kṣudhā, nidrā, śakti and others—thereby providing evidence for how religious discourse conceptualized ordinary embodied life as a field of divine presence.',
    'Festival reception, especially Navarātri and Durgā-centered observances, demonstrates how a Purāṇic text can move from manuscript to calendar, temple, household and public space. Historical claims about practice should still be corroborated regionally rather than inferred from prescription alone.'
  ]);
  read('Mārkaṇḍeya Purāṇa',[
    'M. L. Wadekar (ed.), The Critical Edition of the Mārkaṇḍeyapurāṇam, 2 vols., Oriental Institute, Vadodara, 2011.',
    'Thomas B. Coburn, Devī-Māhātmya: The Crystallization of the Goddess Tradition, Motilal Banarsidass, 1984/1985.',
    'Thomas B. Coburn, Encountering the Goddess: A Translation of the Devī-Māhātmya and a Study of Its Interpretation, SUNY Press, 1991.',
    'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology: A Reader in the Sanskrit Purāṇas, Temple University Press.',
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.'
  ]);

  // VĀMANA PURĀṆA
  paras('Vāmana Purāṇa','Date of composition',[
    'The Vāmana Purāṇa is a particularly clear warning against dating a Purāṇa from its title or presumed sectarian identity. Although named for Viṣṇu’s dwarf incarnation, the extant work is heavily Śaiva and pilgrimage-oriented. The received manuscripts therefore represent a history of redaction in which the relation between an earlier Vāmana-titled text and the surviving Śaiva compilation is not straightforward.',
    'Modern scholarship has placed the formation of the surviving text broadly in the early medieval period, with ninth- to eleventh-century horizons often proposed for major strata. Such estimates derive from sectarian profile, pilgrimage geography, comparison with other Purāṇas and the history of cited or parallel materials rather than from a dated authorial colophon.',
    'The Purāṇa’s Saro-māhātmya, centered on the Kurukṣetra–Sthāṇvīśvara/Thanesar region, is especially useful for historical analysis because sacred geography can be compared with the rise of regional Śaiva centers. Local religious history may therefore offer better chronological anchors for individual blocks than global statements about the whole Purāṇa.',
    'Traditional notices of a larger Bṛhad-Vāmana divided into four saṃhitās do not correspond to the extant critically edited text. The possibility of loss or replacement means that the history of the title is larger than the history of the surviving recension.',
    'A responsible chronology should thus speak of the date of the extant recension, the Saro-māhātmya and other identifiable units separately wherever the evidence permits.'
  ]);
  sub('Vāmana Purāṇa','Structure','The critical text and the Saro-māhātmya',[
    'Anand Swarup Gupta’s critical edition for the All-India Kashiraj Trust constituted the text from manuscript evidence and presents sixty-nine principal chapters together with a twenty-eight-chapter Saro-māhātmya. Earlier printed versions could contain roughly ninety-five or ninety-six chapters, illustrating how significantly the received structure varied.',
    'The Saro-māhātmya is not a miscellaneous appendix in historical terms. It is a coherent sacred-geographical dossier devoted to the lakes, tīrthas, forests and shrines of the Kurukṣetra region and surrounding north Indian landscape. Its organization transforms regional space into scriptural space.',
    'Traditional references to a four-saṃhitā Bṛhad-Vāmana are not matched by surviving manuscripts. Consequently, the critical text should not be treated as a simple abridgment of a known larger archetype; the relationship between lost and extant textual forms remains uncertain.'
  ],[
    'Critical edition: 69 principal chapters plus 28 chapters of the Saro-māhātmya.',
    'Older printed recensions: about 95–96 chapters in some editions.',
    'Lost or unlocated Bṛhad-Vāmana: traditionally described as a larger four-saṃhitā text.'
  ]);
  sub('Vāmana Purāṇa','Contents','Vāmana, Bali and inherited Vaiṣṇava material',[
    'The opening association with Vāmana preserves the Vaiṣṇava identity implied by the title. The dwarf incarnation and Bali belong to a much older mythic complex known from Vedic, epic and Purāṇic sources. In the Vāmana Purāṇa this inherited narrative does not control the entire work, but it anchors the title within pan-Indian avatāra tradition.',
    'Comparison with the Viṣṇu and Bhāgavata Purāṇas is instructive. Each reshapes the Bali episode differently: the Vāmana title highlights the avatāra, while the extant body of the text moves into a much broader Śaiva sacred world. The mismatch is evidence for redactional history rather than a reason to force the text into one sectarian category.'
  ]);
  sub('Vāmana Purāṇa','Contents','Śiva, Pārvatī and Śaiva mythic geography',[
    'Much of the surviving text is oriented toward Śiva, Pārvatī and Śaiva sacred places. Myths are repeatedly attached to landscapes, so theology and geography advance together. A shrine is important because a divine event occurred there; the event is made religiously actionable because worship at the place grants merit.',
    'This pattern is characteristic of māhātmya literature but especially important here because it explains the identity of the extant Purāṇa better than the title alone. The received work participates in the early-medieval expansion of Śaiva pilgrimage networks and the textual elevation of regional centers.'
  ]);
  sub('Vāmana Purāṇa','Contents','The Saro-māhātmya and Kurukṣetra region',[
    'The Saro-māhātmya maps a sacred landscape around Kurukṣetra and Sthāṇvīśvara/Thanesar through tīrthas, waters, forests and narratives. Rather than functioning as a modern travel guide, it ranks places according to mythic history and promised religious fruit.',
    'For historians this dossier is valuable because it can be compared with the political and religious importance of Thanesar and the broader Haryana region in the early medieval period. The Purāṇa participates in producing the prestige of a region by embedding local sites in Sanskrit mythic time.',
    'Pilgrimage sequences also imply movement: routes, ritual stations and repeated acts of bathing, worship and gift. Even where the text does not describe institutions explicitly, it presupposes a social infrastructure capable of receiving pilgrims and sustaining sacred memory.'
  ]);
  paras('Vāmana Purāṇa','Theology',[
    'The extant Vāmana Purāṇa resists simple sectarian classification. Its title and inherited avatāra material are Vaiṣṇava, but much of the surviving text glorifies Śiva and Śaiva pilgrimage. This is not unusual within Purāṇic religion, where one deity’s supremacy in a given block can coexist with reverence for others.',
    'Theologically, place is one of the work’s most important media. Divine presence is localized in tīrthas, waters and shrines, and salvific or merit-producing power becomes accessible through bodily movement and ritual action. Sacred geography is therefore not secondary to doctrine; it is doctrine materialized.',
    'The coexistence of Viṣṇu, Śiva and goddess traditions demonstrates the porousness of early-medieval sectarian worlds. The text can absorb inherited Vaiṣṇava mythology while functioning as an archive of Śaiva regional devotion.',
    'Such pluralism should not be mistaken for theological neutrality. Individual episodes still construct hierarchies and praise particular deities intensely. The analytical task is to map those local hierarchies rather than impose one label on every chapter.'
  ]);
  paras('Vāmana Purāṇa','Critical edition',[
    'The Vāmana Purāṇa is one of the Mahāpurāṇas for which a modern critical edition exists. Anand Swarup Gupta’s 1967 edition for the All-India Kashiraj Trust was based on manuscript collation and materially changed the structure familiar from some earlier printed versions.',
    'The difference between a ninety-five-chapter printed text and a sixty-nine-chapter critical text with a separate Saro-māhātmya illustrates why chapter numbers without edition data are unsafe. A citation system that assumes all printed Vāmana Purāṇas are structurally identical can point scholars to the wrong passage.',
    'The critical edition also makes visible the problem of the lost Bṛhad-Vāmana. Traditional descriptions cannot simply be reconstructed by expanding the extant text with later materials; absence is part of the textual history.',
    'A genuinely critical study should compare manuscript families, examine whether pilgrimage blocks circulated independently, and trace quotations in medieval digests. The existence of a critical edition is the beginning of historical analysis, not its end.',
    'Digital transcription should preserve the edition’s apparatus and variant readings where licensing permits. A plain e-text that suppresses the apparatus cannot substitute for the critical edition in arguments about recensional history.'
  ]);
  paras('Vāmana Purāṇa','Influences and reception',[
    'The Vāmana Purāṇa’s reception is strongest when approached regionally. Its Saro-māhātmya contributed to the Sanskrit sacralization of Kurukṣetra and neighboring centers, giving later pilgrims and ritual communities a mythic map through which landscape could be interpreted.',
    'The text also participates in the wider Purāṇic circulation of the Vāmana-Bali myth, but its distinctiveness lies in the transformation of a Vaiṣṇava title into a largely Śaiva pilgrimage compilation. That history is valuable for studying how canonical titles could be repurposed across sectarian and regional settings.',
    'Printed editions and vernacular translations later standardized particular versions of the text, sometimes obscuring the degree of manuscript variation. Modern reception therefore has its own recensional effects: what readers imagine as “the Vāmana Purāṇa” often reflects one publishing lineage.',
    'For historians of religion, the work is especially useful when read alongside inscriptions and archaeology from Kurukṣetra, Thanesar and adjacent regions. Text and material evidence can reveal where literary promotion corresponds to institutional prominence and where it does not.'
  ]);
  paras('Vāmana Purāṇa','Rites, dharma and social history',[
    'Pilgrimage is the most historically revealing practical domain of the extant text. Sacred bathing, worship, fasting, gift and movement between tīrthas are repeatedly assigned religious fruits. The body of the pilgrim becomes the instrument through which sacred geography is activated.',
    'These prescriptions imply patrons, Brahmins, shrine specialists, local custodians and routes. Although a māhātmya is prescriptive and promotional rather than a census of actual practice, it provides evidence for the kinds of social relations a pilgrimage center sought to organize.',
    'The ranking of sites also shows competition within sacred geography. By comparing a local bath or shrine to famous pan-Indian rites and tīrthas, the text claims equivalence or superiority for regional places. Religious merit becomes a language through which local prestige is negotiated.',
    'Gift and vow material places household wealth within a religious economy. Different observances offer differing costs and fruits, enabling participation by devotees with unequal resources while preserving hierarchies of merit.',
    'The text should therefore be used in social history alongside inscriptions, land grants, temple records and regional archaeology. Prescriptions show ideals and institutional ambitions; corroborating evidence helps determine how those ideals were enacted.'
  ]);
  read('Vāmana Purāṇa',[
    'Anand Swarup Gupta (ed.), The Vāmana Purāṇa: Critical Edition, All-India Kashiraj Trust, Varanasi, 1967.',
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, especially the section on the Vāmana Purāṇa.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
    'H. H. Wilson, essays and translations relating to the Purāṇic corpus, for the history of nineteenth-century scholarship.',
    'Purāṇa Bulletin / All-India Kashiraj Trust reports on manuscript collation and critical-edition methodology.'
  ]);

  // VARĀHA PURĀṆA
  paras('Varāha Purāṇa','Date of composition',[
    'The Varāha Purāṇa is a composite work whose extant form contains internally distinguishable sections with different speakers, interests and likely dates. R. C. Hazra’s stratigraphic observations remain useful precisely because they resist assigning all two hundred-plus chapters to one redactor.',
    'The first large block is framed by Varāha and Pṛthvī, while later sections change interlocutors and genre. Such shifts are not merely literary ornament: they can signal incorporation of previously independent material, especially pilgrimage and dharma collections.',
    'The absence of the Uttarabhāga described by the Nāradīya Purāṇa is chronologically important. The medieval author of that catalogue appears to have known, or at least described, a Varāha text larger or differently organized than the surviving witnesses. Textual loss and replacement must therefore be included in any account of formation.',
    'Major strata are commonly placed in the early-medieval period, but dating should proceed section by section through quotation history, ritual vocabulary, sectarian context and relations to other Purāṇas. A single date printed in an infobox cannot represent the complexity of the transmission.',
    'The title’s association with Viṣṇu’s boar incarnation should likewise not be used as a dating criterion. Varāha mythology is ancient; the compilation that organizes pilgrimage, vows and sacred places under that divine speaker is much later.'
  ]);
  sub('Varāha Purāṇa','Structure','Four major textual zones in the extant work',[
    'Hazra and later scholarship distinguish several large zones within the received Varāha Purāṇa. The opening chapters are associated with Sūta’s narration of the dialogue of Varāha and the Earth; a second large section changes the chain of transmission; later chapters include a Dharma-saṃhitā associated with Janamejaya and Vaiśampāyana; the closing unit changes frame again.',
    'These changes support a model of accretion. The received book is not merely a continuous speech by Varāha but a container into which ritual, pilgrimage and dharma materials were integrated under a prestigious title.',
    'The critical edition by Anand Swarup Gupta contains 215 chapters. Other printed editions commonly give 217 or 218, and traditional verse totals are far larger than the surviving text. Edition-specific citation is therefore essential.'
  ],[
    'Chapters 1–112 in Hazra’s broad division: Sūta narrates the Varāha–Pṛthvī dialogue.',
    'Chapters 113–192: altered narrative frame transmitting further Varāha teaching and related materials.',
    'Chapters 193–212: Janamejaya–Vaiśampāyana material, often identified as a Dharma-saṃhitā.',
    'Final chapters: Brahmā–Sanatkumāra frame in the received text.',
    'Critical edition: 215 chapters; common printed recensions may differ.'
  ]);
  sub('Varāha Purāṇa','Contents','Varāha as cosmic and didactic speaker',[
    'The Varāha form of Viṣṇu provides a powerful frame because it joins cosmology to intimacy with the Earth. The god who raises Pṛthvī from the cosmic waters becomes a teacher addressing the Earth herself. This makes geography, sacred place and ritual obligation natural extensions of the avatāra myth.',
    'The boar myth is therefore not only one episode among many. It supplies a theological grammar for locating salvation and merit in terrestrial places. The earth that was rescued becomes the field in which tīrthas, temples and vows are mapped.'
  ]);
  sub('Varāha Purāṇa','Contents','Mathurā and regional māhātmya material',[
    'The Purāṇa is especially important for Vaiṣṇava sacred geography, including traditions connected with Mathurā and other pilgrimage regions. Māhātmya blocks attach divine stories to particular sites and prescribe acts by which pilgrims can appropriate the power of those stories.',
    'These chapters should be treated as regional religious literature embedded in a Mahāpurāṇa. Their historical significance lies in the interaction between pan-Indian Sanskrit authority and local cultic landscapes. A place enters the Purāṇic universe by being narrated, ranked and ritualized.'
  ]);
  sub('Varāha Purāṇa','Contents','Vrata, dāna and dharma materials',[
    'Large parts of the extant work are practical rather than mythic in the narrow sense. Vows, gifts, worship, observances and rules of conduct translate cosmic Vaiṣṇavism into repeatable household action. The Purāṇa thereby acts as a ritual handbook embedded in narrative authority.',
    'The Dharma-saṃhitā portion is particularly important for comparison with Smṛti and nibandha literature. Where medieval legal or ritual digests quote Varāha passages, those citations can provide termini ante quem for individual rules and reveal which strata circulated with recognized authority.'
  ]);
  paras('Varāha Purāṇa','Theology',[
    'The text is broadly Vaiṣṇava, but its theology is not limited to the Varāha incarnation. Viṣṇu-Nārāyaṇa functions as the divine horizon within which creation, sacred place, image worship and liberation are understood, while other deities continue to operate in inherited Purāṇic roles.',
    'Its most characteristic theological move is the union of deity and geography. Sacred places are powerful because they are manifestations or memorials of divine action; ritual at those places is effective because the cosmic order is locally accessible.',
    'The Earth is not a passive backdrop. In the Varāha–Pṛthvī frame she is interlocutor and beneficiary of divine rescue, giving the text a distinctive theological ecology in which terrestrial space is dignified through direct relation to Viṣṇu.',
    'Bhakti, ritual merit and dharma coexist without a rigid opposition. The Purāṇa assumes that devotion can be enacted through vows, gifts, images, pilgrimage and hearing sacred narrative. Soteriology is distributed through practices rather than confined to philosophical abstraction.'
  ]);
  paras('Varāha Purāṇa','Critical edition',[
    'Anand Swarup Gupta’s two-volume critical edition for the All-India Kashiraj Trust is central to modern study of the Varāha Purāṇa. It provides a critically constituted 215-chapter text and permits more reliable comparison with the 217- or 218-chapter printed recensions.',
    'The edition does not eliminate the historical problem created by the lost Uttarabhāga described in the Nāradīya Purāṇa. A critical edition reconstructs the best-attested recoverable text from surviving witnesses; it cannot restore an entire missing textual half merely from a medieval summary.',
    'Recensional change is especially likely in pilgrimage blocks. Māhātmyas could circulate locally, acquire additions and be inserted into larger compilations. Variant geography is therefore potentially historical evidence rather than noise to be silently normalized.',
    'Scholarly citation should specify the critical-edition chapter and, when discussing a variant, the witness or printed recension. Statements such as “the Varāha Purāṇa has 218 chapters” need qualification because they describe one publishing tradition, not every manuscript.',
    'A future digital critical environment should link the constituted text, apparatus, manuscript metadata and independent māhātmya witnesses. That would make it possible to study the Purāṇa as a network of textual units rather than only as a single linear book.'
  ]);
  paras('Varāha Purāṇa','Influences and reception',[
    'The Varāha Purāṇa contributed to the spread and authorization of Vaiṣṇava pilgrimage traditions. Its māhātmyas helped locate cosmic Viṣṇu devotion in specific regional landscapes, giving local shrines a place within Sanskrit sacred history.',
    'The text also preserves an important stage in the reception of Varāha himself. The boar avatāra moves from Vedic and epic antecedents into a fully Purāṇic theology where cosmic rescue, temple devotion and sacred geography can reinforce one another.',
    'Medieval ritual and dharma writers provide another avenue of reception. Quotations attributed to the Varāha Purāṇa show which normative passages possessed authority outside the continuous manuscript tradition and help reconstruct the circulation of otherwise unstable chapters.',
    'In modern scholarship the Purāṇa is often less studied than the Bhāgavata or Viṣṇu, yet precisely this relative neglect makes critical-edition and regional research valuable. It preserves materials that illuminate how Purāṇic Vaiṣṇavism functioned institutionally, not only doctrinally.'
  ]);
  paras('Varāha Purāṇa','Rites, dharma and social history',[
    'Vrata and dāna sections show how householders could convert calendar, wealth and bodily discipline into religious merit. Fasting, worship and gift are often coordinated with sacred days and places, creating a layered economy in which time, geography and social exchange intensify one another.',
    'Pilgrimage prescriptions imply networks of Brahmins, local ritual experts, donors and travelers. A text does not prove that every recommended route was followed, but it reveals the institutional imagination of the communities that promoted those places.',
    'The Dharma-saṃhitā material belongs in conversation with the broader Smṛti tradition. Rules should be compared with Manu, Yājñavalkya, later digests and inscriptions rather than treated as timeless descriptions of Hindu society.',
    'The Earth-centered Varāha frame gives ritual geography unusual coherence. Bathing or worship at a tīrtha can be understood as participation in a land already sanctified by divine rescue. Geography is thus moralized and ritualized.',
    'Social historians must remain attentive to prescription versus practice. Purāṇic gifts and vows are elite textual ideals; epigraphy, archaeology and regional literature are needed to determine who performed them, at what scale, and under which institutions.'
  ]);
  read('Varāha Purāṇa',[
    'Anand Swarup Gupta (ed.), The Varāha Purāṇa: Critical Edition, 2 vols., All-India Kashiraj Trust, Varanasi, 1981.',
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, pp. on the Varāha Purāṇa.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
    'R. C. Hazra, Studies in the Upapurāṇas, for comparative Purāṇic transmission and title history.',
    'Purāṇa Bulletin / All-India Kashiraj Trust reports on the Varāha critical-edition project and manuscript collation.'
  ]);
})();