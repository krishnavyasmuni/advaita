(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function entry(name){return D['Purāṇa:'+name]||D[name]||null;}
  function sec(name,title){const e=entry(name);if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}
  function read(name,items){const s=sec(name,'Further reading');if(s)s.bullets=[...A(s.bullets),...items];const e=entry(name);if(e)e.bibliography=[...A(e.bibliography),...items];}

  // MATSYA PURĀṆA
  paras('Matsya Purāṇa','Date of composition',[
    'The Matsya Purāṇa is a composite Sanskrit compilation whose received text cannot be assigned responsibly to a single date. Its dynastic and cosmological materials preserve old Purāṇic traditions, while chapters on image-making, temple construction, gifts, festivals and other ritual institutions reflect successive stages in the development of classical and early-medieval Brahmanical religion.',
    'Because the text shares large blocks and motifs with other Purāṇas, chronology depends heavily on intertextual comparison. A parallel passage may indicate common inheritance, borrowing from one Purāṇa to another, or use of an earlier source no longer extant. Direction of dependence must therefore be argued rather than assumed from similarity alone.',
    'Scholars have often placed substantial portions of the Matsya in the first millennium CE, with early cores and later accretions extending across several centuries. The wide range is not scholarly indecision so much as recognition that genealogical, dharma, architectural and tīrtha materials need separate histories.',
    'Quotations in Dharmaśāstra digests and later ritual literature can provide termini ante quem for particular prescriptions. Conversely, developed temple and iconographic instructions may help situate some chapters within a religious world where permanent image worship and architectural theory had become systematized.',
    'The manuscript record is considerably later than the earliest proposed strata. Manuscript age therefore anchors transmission but cannot by itself date the content. A serious article must keep composition, redaction, recension and surviving witness analytically distinct.'
  ]);
  sub('Matsya Purāṇa','Structure','The encyclopedic received text',[
    'Common printed recensions contain approximately 291 chapters, but manuscript evidence is not uniform. The text moves between mythic narrative, cosmology, genealogy, rites, gifts, pilgrimage, architecture, iconography and political or social instruction. It is therefore better understood as a Purāṇic encyclopedia than as a continuous narrative of the Matsya incarnation.',
    'The frame conventionally associates the teaching with Viṣṇu as Matsya and Manu, linking the text to the flood narrative and preservation of knowledge. From that frame the Purāṇa expands outward into subjects that define the full Brahmanical cosmos: time, kingship, ritual, sacred places, images and social obligation.',
    'Modern navigation by chapter number must be edition-specific. Catalogues and manuscript reports show recensional differences, and earlier critical-edition projects noted extra chapters in some Grantha and regional witnesses. The apparent precision of “291 chapters” should therefore not conceal textual variation.'
  ],[
    'Mythic-cosmological material: flood, creation, cosmic cycles, genealogies and divine narratives.',
    'Normative material: gifts, vows, funerary and domestic rites, royal duties and social obligations.',
    'Material culture: temple construction, iconography, image dimensions and consecratory concerns.',
    'Sacred geography: tīrthas, especially major north Indian pilgrimage traditions.',
    'Chapter totals vary across witnesses and editions; academic citations should identify the edition used.'
  ]);
  sub('Matsya Purāṇa','Contents','The flood and the Matsya revelation',[
    'The flood story gives the text its most famous narrative identity. Manu encounters the fish, protects it as it grows, learns of the coming deluge and is instructed in preservation. In Purāṇic development the fish is recognized as Viṣṇu, so a myth of survival becomes an avatāra revelation.',
    'The episode belongs to a long Indian history of flood traditions and should be compared with the Śatapatha Brāhmaṇa and later Purāṇic versions rather than treated as an isolated tale. Differences in divine identity, rescued knowledge, the role of seeds or sages and post-flood creation reveal how the story was reworked in changing theological settings.',
    'As a literary frame, the rescue of Manu also legitimizes encyclopedic teaching. The deity who saves life and knowledge from dissolution becomes the source of the cultural and ritual knowledge needed to rebuild ordered society.'
  ]);
  sub('Matsya Purāṇa','Contents','Temple architecture, images and the built sacred world',[
    'The Matsya Purāṇa is especially important for the history of temple and image theory. Chapters discuss measurements, forms, placement and ritual concerns connected with sacred architecture and mūrti production. These sections belong to a larger Sanskrit technical world that also includes Vāstu, Śilpa and Āgamic literature.',
    'The material should not be read as a universal building code followed mechanically across India. Prescriptive texts articulate ideals, classificatory systems and ritual expectations; surviving temples often reflect regional workshops, patronage, materials and local technical traditions. Comparison with archaeology is therefore essential.',
    'Even so, the presence of architectural instruction inside a Mahāpurāṇa is historically significant. It demonstrates that Purāṇic authority could extend from myth and cosmology into the production of physical sacred environments. A temple is imagined as a materialized cosmos whose proportions, images and consecration participate in religious order.'
  ]);
  sub('Matsya Purāṇa','Contents','Genealogy, kingship and sacred history',[
    'Like several older Purāṇic compilations, the Matsya preserves genealogical sequences connecting patriarchs, Manus and royal dynasties. Such lists were historically attractive to modern scholars seeking chronological data, but they are first of all sacred historiography: they organize political memory inside cosmic cycles.',
    'Dynastic sections should be compared with the Vāyu, Brahmāṇḍa, Viṣṇu and other Purāṇas because the shared lists preserve both common traditions and redactional divergence. Agreement may reveal a common genealogical archive; divergence may reflect local political memory or later updating.',
    'Royal duty appears alongside this sacred history. Kingship is evaluated through protection, gift, ritual patronage and maintenance of social order, locating political authority inside dharma rather than treating it as autonomous power.'
  ]);
  sub('Matsya Purāṇa','Contents','Dāna, vrata, śrāddha and sacred geography',[
    'The Purāṇa devotes extensive attention to gifts and observances. Dāna chapters classify objects, recipients, times and promised fruits, turning material transfer into a religious technology. These passages are valuable for intellectual and social history because they reveal how wealth was moralized and redistributed through Brahmanical ideals.',
    'Ancestral rites and related obligations connect living households to the dead. Such material belongs in dialogue with Dharmaśāstra and later nibandha literature; discrepancies among texts show that ritual norms developed rather than descending unchanged from one source.',
    'Pilgrimage material extends this economy of merit into space. Rivers, confluences and tīrthas become sites where bathing, fasting, worship and gift can yield intensified results. The text thereby joins cosmology, geography and social practice.'
  ]);
  paras('Matsya Purāṇa','Theology',[
    'The Matsya Purāṇa is framed as Vaiṣṇava revelation through the Fish incarnation, yet the received text is not narrowly sectarian. Śiva, goddesses and other deities occupy important narrative and ritual roles, reflecting the inclusive hierarchies typical of much Purāṇic literature.',
    'Viṣṇu’s role as rescuer of Manu gives preservation a theological meaning: divine intervention protects not only biological continuity but Vedic-Purāṇic knowledge and the possibility of renewed dharma after cosmic disruption.',
    'The architectural and iconographic chapters give theology a material dimension. Divine forms require proportion, placement and consecration; worship is therefore mediated through crafted bodies and built space. The religious object is not treated simply as decoration but as an authorized locus of presence.',
    'The text also integrates karmic merit with devotion and dharma. Gifts, vows, pilgrimage and ritual observance are meaningful because the cosmos is morally structured. Soteriological and worldly fruits coexist, revealing a religious system with multiple legitimate aims.',
    'This breadth makes the Matsya a useful witness to the transition from mythic Purāṇic cosmology to temple-centered classical Hinduism without requiring a theory that one suddenly replaced the other.'
  ]);
  paras('Matsya Purāṇa','Critical edition',[
    'Unlike the Vāmana, Kūrma and Varāha Purāṇas, the Matsya does not have a single completed modern critical edition that has become universally standard in Purāṇic studies. The All-India Kashiraj Trust sponsored extensive manuscript inventory and collation work, including studies of extra chapters in Grantha-script witnesses, but printed editions remain recensional rather than definitive.',
    'The manuscript inventory itself is important scholarly evidence. Reports from the Purāṇa Bulletin document Devanagari, Telugu, Grantha and other witnesses across institutional collections, showing that the text circulated in multiple regional script traditions.',
    'A future stemmatic edition would need to distinguish simple scribal variants from structural interpolation. Encyclopedic chapters on architecture, gifts or pilgrimage could have independent transmission histories, making a single linear stemma difficult for the whole work.',
    'Citation practice should therefore name the Sanskrit edition used and, where possible, compare parallel chapter numbering. Modern translations that silently follow one printed recension cannot settle questions about absent or additional chapters.',
    'For research on architecture or ritual, the apparatus must extend beyond the Purāṇa itself: parallel Śilpa, Vāstu, Āgama and Dharmaśāstra texts can reveal whether a Matsya passage is innovative, derivative or part of a wider technical tradition.'
  ]);
  paras('Matsya Purāṇa','Influences and reception',[
    'The Matsya Purāṇa has had a wide but often indirect reception. Its flood story belongs to the canonical repertoire of avatāra mythology; its architectural and iconographic chapters were repeatedly mined by modern historians of Indian art; and its gift and ritual prescriptions entered comparative study of Dharmaśāstra and Purāṇic religion.',
    'The text’s influence should not be inferred simply because later architecture resembles a rule found in the Purāṇa. Technical knowledge could circulate orally, through workshop lineages and through multiple textual corpora. Demonstrating direct influence requires closer textual or historical linkage.',
    'Its genealogies influenced reconstructions of ancient Indian dynastic history in nineteenth- and early twentieth-century scholarship. Modern historiography has become more cautious, treating these lists as layered literary evidence rather than transparent annals.',
    'Pilgrimage and gift sections also participated in the social authority of Purāṇic literature. Citation by later ritual digests gave selected chapters a life outside continuous reading of the entire Purāṇa.',
    'The Matsya’s modern identity as an “encyclopedic Purāṇa” is therefore not merely descriptive; it reflects the fact that different scholarly disciplines—religion, art history, architecture, legal history and mythology—have each extracted different parts of the text.'
  ]);
  paras('Matsya Purāṇa','Rites, dharma and social history',[
    'The dāna literature of the Matsya is one of its richest sources for social history. Gifts are classified by substance, recipient, occasion and religious result. These prescriptions articulate an ideal economy in which surplus wealth can be transformed into merit through socially structured transfer.',
    'Royal and household duties show the Purāṇa participating in the same normative world as Dharmaśāstra while using mythic authority and promised fruits more expansively. Rules should be compared diachronically rather than read as a single legal code.',
    'Temple and image chapters imply patrons, artisans, ritual specialists and institutional resources. Even when a prescription is idealized, it testifies to a social world in which large-scale religious construction, workshop expertise and consecration ceremonies were imaginable and prestigious.',
    'Pilgrimage sections imply mobility across regions and a service economy around sacred places. Bathing, fasting and gift connect the pilgrim’s body to local priests, rivers, shrines and seasonal calendars.',
    'Ancestral rites bind household continuity to ritual specialists and calendrical observance. Together with dāna and pilgrimage, they show how Purāṇic religion integrates family, property, space and time into a single moral economy.',
    'Because these materials are normative, social historians should compare them with inscriptions, temple endowments, legal digests and archaeological evidence. The strongest historical use of the Matsya comes from triangulation rather than literalizing prescriptions.'
  ]);
  read('Matsya Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, section on the Matsya Purāṇa.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
    'Purāṇa Bulletin reports of the All-India Kashiraj Trust on the Matsya Purāṇa manuscript inventory and critical-edition project.',
    'V. S. Agrawala and V. Raghavan, reports and studies connected with the Matsya Purāṇa manuscript tradition.',
    'P. V. Kane, History of Dharmaśāstra, for comparison of Purāṇic dāna, śrāddha and ritual materials.',
    'Studies of Sanskrit Vāstu and Śilpa literature for comparison with the Matsya architectural chapters.'
  ]);

  // KŪRMA PURĀṆA
  paras('Kūrma Purāṇa','Date of composition',[
    'The Kūrma Purāṇa is a layered early-medieval work whose theological and institutional profile resists a single sectarian or chronological label. The title invokes Viṣṇu’s Tortoise incarnation, yet major sections praise Śiva, teach yoga and Vedāntic themes, and integrate Vaiṣṇava, Śaiva and Śākta materials.',
    'R. C. Hazra used ritual and sectarian evidence to distinguish older and later portions, while subsequent scholarship has emphasized the text’s place in a period of intense interaction among Vaiṣṇava and Śaiva traditions. The mixture should not be explained lazily as inconsistency; it may preserve deliberate redactional synthesis.',
    'Major strata are often placed between roughly the seventh and eleventh centuries CE, but individual chapters may be earlier or later. The Iśvaragītā in particular requires comparison with the Bhagavadgītā, Pāśupata materials and later Śaiva theological traditions rather than automatic dating from the enclosing Purāṇa.',
    'The text’s quotation history in medieval digests and its treatment of rites, caste, āśrama and pilgrimage provide relative chronological evidence. Such evidence works best when specific passages are traced, because a late redactor could preserve much older normative material.',
    'The critical edition establishes a recoverable recension, not an authorial date. Manuscripts collated for the Kashiraj Trust included Devanagari, Bengali, Oriya, Nandināgarī, Kashmirian and other witnesses, illustrating the broad geographical spread of the tradition.'
  ]);
  sub('Kūrma Purāṇa','Structure','Two-part recension and critical text',[
    'The extant Kūrma Purāṇa is commonly divided into a Pūrvabhāga and Uttarabhāga, with the critical edition totaling ninety-five chapters. Traditional Purāṇic catalogues assign a much larger verse count than the roughly six thousand verses represented by surviving recensions.',
    'This discrepancy should not be solved by inventing lost chapters. Traditional verse totals may preserve memory of larger recensions, conventional numerology or different definitions of the title. The critical edition describes what can be established from surviving manuscript evidence.',
    'Within the two-part frame, the Purāṇa shifts between cosmology, avatāra narrative, Śaiva revelation, tīrtha, dharma, yoga and liberation. Its architecture is therefore thematic and dialogical rather than a single narrative progression.'
  ],[
    'Pūrvabhāga: creation, myth, sacred geography and broad religious teaching.',
    'Uttarabhāga: important dharma, yoga and theological material in the received structure.',
    'Critical edition: Anand Swarup Gupta, All-India Kashiraj Trust, 1971; 95 chapters.',
    'Traditional verse count is far larger than the extent of surviving recensions.'
  ]);
  sub('Kūrma Purāṇa','Contents','Kūrma, cosmic stability and revelation',[
    'The tortoise avatāra supplies the work with an image of support and stability, most famously associated with the churning of the ocean. In the Purāṇa, however, the title is not a promise that every chapter concerns this myth. Kūrma functions as a divine revealer capable of authorizing an encyclopedic range of teaching.',
    'The churning narrative itself belongs to a pan-Purāṇic mythic complex involving gods, demons, Mount Mandara, Vāsuki, poison, nectar and the emergence of divine treasures. Comparing variants reveals sectarian redistribution of agency, especially the prominence given to Viṣṇu, Śiva and the Goddess in different texts.'
  ]);
  sub('Kūrma Purāṇa','Contents','The Iśvaragītā',[
    'The Iśvaragītā is one of the most important theological units in the Kūrma Purāṇa. Cast as Śiva’s teaching, it addresses knowledge, yoga, the nature of the supreme, bondage and liberation in language that invites comparison with the Bhagavadgītā and Upaniṣadic-Vedāntic traditions.',
    'Its importance lies in the way it relocates a “gītā” genre into a Śaiva revelation while preserving an integrative metaphysical vocabulary. Śiva can be praised as supreme without requiring rejection of Viṣṇu; instead, the text often works through identities among highest principles and divine forms.',
    'The Iśvaragītā should be studied as a text within the Purāṇa and as a semi-independent doctrinal unit. Commentarial or citation history may illuminate which audience encountered it apart from the larger Kūrma.'
  ]);
  sub('Kūrma Purāṇa','Contents','Dharma, āśrama and renunciation',[
    'The Kūrma devotes substantial space to duties, life stages, purity, gifts, expiation and ascetic practice. This material shows the Purāṇa mediating between Dharmaśāstra norms and sectarian devotion. Householder religion and renunciation are not separate literary worlds but parts of one graded religious order.',
    'The text’s treatment of saṃnyāsa and yoga is especially important because Purāṇic religion is sometimes caricatured as purely temple- or pilgrimage-centered. Here contemplative and renunciatory disciplines are integrated into the same scripture that teaches tīrthas, rites and divine myths.'
  ]);
  sub('Kūrma Purāṇa','Contents','Sacred geography and tīrtha',[
    'Pilgrimage material maps holy rivers, shrines and regions into the Purāṇic cosmos. The theological logic resembles other māhātmyas: myth explains why the place is sacred, ritual instruction explains what to do there, and a phalaśruti explains the religious result.',
    'These sections are historically valuable when compared with regional evidence. They can reveal the growing prestige of sites and routes but should not be treated as neutral geography. A māhātmya promotes, ranks and theologizes place.'
  ]);
  paras('Kūrma Purāṇa','Theology',[
    'The Kūrma Purāṇa is famous for theological inclusiveness. Although transmitted under a Vaiṣṇava avatāra title, it contains strong Śaiva revelation and reverence for the Goddess. Rocher singled it out as especially interesting for the study of religious ideas because no simple sectarian label exhausts the text.',
    'This inclusiveness is structured rather than indifferent. Individual passages can declare a particular deity supreme, but other sections identify or reconcile highest divine forms. The result is a theology of hierarchical equivalence and synthesis characteristic of parts of early-medieval Brahmanical religion.',
    'The Iśvaragītā gives Śiva a profound metaphysical role while drawing on categories shared with Sāṃkhya, Yoga and Vedānta. Liberation depends on knowledge and disciplined realization, not only on ritual merit.',
    'Bhakti nevertheless remains central. Knowledge is not presented as hostility to devotion; rather, devotion can orient the practitioner toward the supreme reality disclosed by philosophical insight.',
    'The Purāṇa therefore provides unusually rich evidence for the porous boundary between sectarian theism and nondual metaphysics. Later doctrinal schools may read those passages differently, but the text itself preserves the productive coexistence.'
  ]);
  paras('Kūrma Purāṇa','Critical edition',[
    'Anand Swarup Gupta’s 1971 critical edition for the All-India Kashiraj Trust is the principal modern critical text. Trust reports document extensive collation of manuscripts from India and overseas, including Devanagari, Bengali, Oriya, Nandināgarī and Kashmirian witnesses.',
    'The manuscript diversity matters because it shows a text transmitted across strong regional scribal traditions. Agreement among geographically separated witnesses can support an older reading; localized additions can illuminate the history of a particular recension.',
    'A critical edition does not make every historical question disappear. Composite Purāṇas can incorporate blocks that had independent transmission before entering the archetype reconstructed by the editor. Philological analysis must therefore operate both between manuscripts and within the literary stratigraphy of the constituted text.',
    'Chapter numbering should follow the critical edition in academic work when possible, with cross-references to major printed recensions if the audience is likely to use them. Quoting a popular translation without identifying its Sanskrit base is inadequate for arguments about textual history.',
    'The Iśvaragītā and other doctrinal blocks deserve specialized sub-editions and intertextual study. Their vocabulary should be compared systematically with epic gītās, Śaiva scriptures and Vedāntic literature.'
  ]);
  paras('Kūrma Purāṇa','Influences and reception',[
    'The Kūrma’s doctrinal synthesis made it useful to later authors interested in reconciling Śaiva and Vaiṣṇava authority. Its individual passages entered ritual and dharma discourse through citation, while the Iśvaragītā attracted attention as a Śaiva counterpart to better-known gītā literature.',
    'The Purāṇa also contributed to pilgrimage traditions and the scriptural authority of particular sacred places. As with other māhātmyas, influence is often regional and institutional rather than visible through famous commentaries on the whole book.',
    'Modern historians of Hinduism use the Kūrma as evidence against overly rigid models of sectarian separation. The same textual compilation can praise Viṣṇu, reveal Śiva as supreme teacher and honor the Goddess without treating those commitments as mutually exclusive.',
    'Its critical edition has made it particularly valuable for philological comparison with less critically established Purāṇas. Scholars can ask whether shared passages are older, borrowed or redactionally transformed with greater textual control.'
  ]);
  paras('Kūrma Purāṇa','Rites, dharma and social history',[
    'The Kūrma Purāṇa preserves a broad normative program: varṇa and āśrama duties, purity, gifts, penance, renunciation, yoga and pilgrimage. The combination reveals a social vision in which household, ascetic and temple-oriented paths are coordinated rather than isolated.',
    'Dharma passages should be treated as arguments about ideal order, not transcripts of social reality. Their historical value lies in comparison with Dharmaśāstra, inscriptional evidence and later digests. Where wording is quoted by a dated nibandha, a specific passage gains a useful chronological anchor.',
    'Renunciatory material complicates the assumption that Purāṇas speak only to householders. The text can authorize withdrawal, meditation and knowledge while still preserving ritual obligations for those remaining in social life.',
    'Pilgrimage chapters imply networks of sacred places and ritual specialists. Gift and bathing practices turn mobility into merit and connect local institutions to a Sanskrit scriptural framework.',
    'The theological synthesis also has a social dimension: communities devoted to different deities can be represented inside one normative universe. This does not prove peaceful coexistence everywhere, but it shows that literary strategies of inclusion were religiously important.'
  ]);
  read('Kūrma Purāṇa',[
    'Anand Swarup Gupta (ed.), The Kūrma Purāṇa: Critical Edition, All-India Kashiraj Trust, Varanasi, 1971.',
    'Purāṇa Bulletin / All-India Kashiraj Trust manuscript-collation reports for the Kūrma Purāṇa.',
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
    'P. V. Kane, History of Dharmaśāstra, for comparison of dharma, āśrama, penance and gift materials.',
    'Studies of the Iśvaragītā and early-medieval Śaiva-Vaiṣṇava theological interaction.'
  ]);

  // BRAHMĀṆḌA PURĀṆA
  paras('Brahmāṇḍa Purāṇa','Date of composition',[
    'The Brahmāṇḍa Purāṇa preserves some materials that belong to an old Purāṇic stratum, especially cosmography and genealogical traditions closely related to the Vāyu Purāṇa, but the received compilation also contains major later additions. Any single date for the whole text would therefore collapse a long history of transmission.',
    'The close relation between Brahmāṇḍa and Vāyu has long been central to Purāṇic scholarship. Shared sequences may preserve a common older textual ancestor or extensive borrowing. Establishing direction of dependence requires detailed comparison of readings, omissions and narrative order rather than assuming that one extant title simply copied the other.',
    'Later Śākta material, especially the Lalitopākhyāna and the Lalitāsahasranāma in recensions that transmit them, belongs to a different religious and historical horizon from the oldest cosmological core. The same is true of the Adhyātma Rāmāyaṇa, which is transmitted as part of the Brahmāṇḍa in important traditions but is widely treated as a later devotional-Vedāntic work.',
    'This stratification makes the Brahmāṇḍa a textbook case for modular dating. Cosmology, dynastic lists, sacred geography, Lalitā traditions and Rāma theology should each be assigned dates only after analysis of their own intertexts and manuscript history.',
    'Traditional claims of vast antiquity belong to the Purāṇa’s sacred self-understanding. Historical philology asks a different question: when can a given recoverable textual form be shown to have existed?' 
  ]);
  sub('Brahmāṇḍa Purāṇa','Structure','The received Purāṇa and its major strata',[
    'The Brahmāṇḍa is organized in large thematic divisions whose names and chapter counts vary across editions. Older classificatory schemes describe sections such as Prakriyā, Anuṣaṅga, Upodghāta and Upasaṃhāra, but the transmitted structure must be checked against the edition cited.',
    'The oldest-looking core is dominated by cosmology, geography, cosmic time, manvantaras and genealogies. Later layers include extensive sectarian and devotional units. These modules can be very large, which is why treating the Purāṇa as a homogeneous authorial composition is especially misleading.',
    'The Lalitopākhyāna is a substantial Śākta narrative associated with the Goddess Lalitā Tripurasundarī. The Adhyātma Rāmāyaṇa is likewise transmitted within the Brahmāṇḍa tradition in many editions, though its literary history and date require separate treatment.'
  ],[
    'Older cosmological-genealogical core closely related to the Vāyu Purāṇa.',
    'Large sacred-geographical and dynastic materials.',
    'Lalitopākhyāna / Lalitāsahasranāma in important Śākta recensions.',
    'Adhyātma Rāmāyaṇa in many transmitted editions, generally treated as a later layer.',
    'Chapter totals and internal divisions vary among printed and manuscript traditions.'
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','The cosmic egg and layered universe',[
    'The title “Brahmāṇḍa” foregrounds the cosmic egg, and the Purāṇa devotes extensive attention to the structure, scale and temporal rhythms of the universe. Continents, oceans, mountains, planetary regions and cosmic shells are described within a sacred cosmography shared, with variations, across several Purāṇas.',
    'This material should not be read as failed modern astronomy. It is a theological map that organizes ritual space, divine hierarchy and human geography within a living cosmos. Bhārata, Meru, lokas and cycles of time are meaningful because they locate human action inside a moral-cosmic structure.',
    'Comparison with the Vāyu Purāṇa is essential. Detailed agreements can help reconstruct an older Purāṇic cosmographical tradition, while differences expose subsequent redaction and sectarian adaptation.'
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Genealogies and dynastic memory',[
    'The Purāṇa preserves extended genealogies of sages and kings, including solar and lunar dynasties and sequences of future rulers. These lists became important to modern attempts at reconstructing ancient Indian chronology, but their primary literary function is to connect political history to cosmic time and divine ancestry.',
    'Genealogical traditions should be collated across Brahmāṇḍa, Vāyu, Matsya and Viṣṇu witnesses. Shared errors, omissions and ordering can reveal textual relationships. Political names may also have been updated as the Purāṇic tradition moved through new dynastic environments.'
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Lalitopākhyāna and Lalitā Tripurasundarī',[
    'The Lalitopākhyāna narrates the Goddess Lalitā as supreme queen and warrior in a highly developed Śākta theological world. Her defeat of Bhaṇḍāsura, cosmic court, weapons, attendants and relation to Śrīvidyā became deeply influential in later goddess worship.',
    'The Lalitāsahasranāma, transmitted in this Purāṇic environment, is one of the most important thousand-name hymns in Śākta practice. Its names condense theology, mantra, iconography and metaphysics. Later commentators, especially within Śrīvidyā, treat the sequence as a map of doctrine rather than a random catalogue of epithets.',
    'Historically, the Śākta block should not be projected unchanged into the oldest Brahmāṇḍa core. Its importance lies precisely in showing how a Purāṇic title could absorb a mature Tantric-Śākta system and become one of its scriptural vehicles.'
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Adhyātma Rāmāyaṇa',[
    'The Adhyātma Rāmāyaṇa retells the Rāma story through a strongly devotional and Vedāntic lens, identifying Rāma with the supreme reality and frequently reinterpreting narrative events as theological teaching. It became highly influential in later Rāma devotion.',
    'Its transmission as part of the Brahmāṇḍa Purāṇa illustrates modular growth. The work can circulate independently and possess its own commentarial and vernacular afterlives while remaining embedded in the Purāṇic corpus.',
    'For academic purposes it should be cited by its own book and chapter system and discussed as a later component unless a specific argument demonstrates earlier integration into a given Brahmāṇḍa recension.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Theology',[
    'The Brahmāṇḍa is theologically plural because its strata are historically plural. Older cosmological material belongs to a broad Brahmanical Purāṇic framework; later Śākta and Rāma-devotional units can articulate much sharper sectarian supremacies.',
    'In the Lalitā material the supreme is conceptualized as Goddess, royal power, mantra and consciousness. Śrīvidyā categories make cosmic creation inseparable from the body of the Goddess and from ritualized language.',
    'In the Adhyātma Rāmāyaṇa, Rāma becomes the supreme Brahman in personal form, and the epic narrative is used to teach devotion and nondual or Vedāntically inflected metaphysics. This differs markedly from the theology of the older cosmographical chapters.',
    'Rather than harmonizing these voices artificially, a critical article should preserve their stratification. The Purāṇa’s historical significance lies in its capacity to host multiple theological systems over time.',
    'The shared cosmological framework nevertheless supplies continuity: whether the supreme is narrated through Brahman, Viṣṇu/Rāma or Lalitā, cosmic time and the ordered universe remain central media of theological thought.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Critical edition',[
    'The Brahmāṇḍa Purāṇa lacks a single universally adopted modern stemmatic critical edition comparable to the Baroda Viṣṇu Purāṇa or Kashiraj editions of the Vāmana, Kūrma and Varāha. Scholars therefore work across major Sanskrit prints, manuscript evidence and parallel passages in related Purāṇas.',
    'The close relationship with the Vāyu Purāṇa creates both an opportunity and a danger. Parallel readings can help reconstruct older material, but editors must not silently “correct” Brahmāṇḍa from Vāyu or vice versa. Divergence is part of the recensional history.',
    'Large embedded works require separate textual criticism. The Lalitopākhyāna, Lalitāsahasranāma and Adhyātma Rāmāyaṇa have their own manuscript and commentarial histories, which may not coincide with the transmission of the oldest Brahmāṇḍa material.',
    'References must therefore identify the edition and, ideally, the internal work. A citation to “Brahmāṇḍa Purāṇa” without specifying that it comes from the Adhyātma Rāmāyaṇa or Lalitopākhyāna can conceal major chronological and theological distinctions.',
    'A future digital edition would benefit from a modular architecture that aligns Brahmāṇḍa passages with Vāyu parallels while preserving recensional independence and separately indexing the Śākta and Rāma corpora.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Influences and reception',[
    'The Brahmāṇḍa has multiple reception histories because its major strata became influential in different communities. Its cosmology and genealogies contributed to the shared learned Purāṇic archive; its Lalitā material became foundational in Śrīvidyā; its Adhyātma Rāmāyaṇa had a major afterlife in Rāma devotion.',
    'The Lalitāsahasranāma is recited independently throughout South Asian Śākta practice and has generated an extensive commentarial tradition. Its ritual importance far exceeds the frequency with which devotees read the entire Brahmāṇḍa Purāṇa continuously.',
    'The Adhyātma Rāmāyaṇa likewise circulated independently, influenced vernacular Rāma traditions and provided theologians with a Purāṇic scriptural frame for identifying Rāma with the supreme Brahman.',
    'Genealogical chapters shaped modern historiography, particularly before stronger distinctions were made between sacred dynastic memory and reconstructable political chronology. Contemporary scholarship reads them comparatively and critically.',
    'The Purāṇa therefore demonstrates a central feature of Sanskrit textual culture: reception often targets detachable modules. Canonical authority can belong to the title while actual religious use concentrates on one hymn, one upākhyāna or one embedded scripture.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Rites, dharma and social history',[
    'The older Purāṇic layers contribute cosmological and genealogical frameworks for social order, while later layers reveal the institutional worlds of Śākta mantra, temple and household devotion. Social history must therefore be stratified along with textual history.',
    'Śrīvidyā-oriented materials imply initiatory, mantra-based and ritual specialists whose practice cannot be reconstructed from Purāṇic narrative alone. Comparison with Tantric manuals, commentaries and inscriptions is necessary to distinguish public praise from restricted ritual systems.',
    'The Lalitāsahasranāma’s widespread recitation shows how highly technical theology can move into household devotion through a portable liturgical text. Names become a medium linking esoteric interpretation, temple worship and daily practice.',
    'Rāma devotion in the Adhyātma Rāmāyaṇa similarly relocates Vedāntic teaching into narrative and recitation. Household reading and public performance can therefore become vehicles for metaphysical instruction.',
    'Genealogical and cosmographical sections encode ideals of kingship and social continuity, but they should not be mined naively for demographic or legal facts. Their strongest social-historical use comes through comparison with inscriptions and dated political traditions.',
    'The Brahmāṇḍa as a whole is thus less a single social document than a layered archive of changing Brahmanical institutions—from cosmological genealogy to mature Śākta and Rāma devotional worlds.'
  ]);
  read('Brahmāṇḍa Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, section on the Brahmāṇḍa Purāṇa.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs.',
    'F. E. Pargiter, Ancient Indian Historical Tradition, for the history of comparative use of Purāṇic genealogies (to be read critically).',
    'Modern Sanskrit editions of the Brahmāṇḍa Purāṇa, with edition-specific chapter citation.',
    'Critical scholarship on the Lalitopākhyāna, Lalitāsahasranāma and Śrīvidyā traditions.',
    'Studies and editions of the Adhyātma Rāmāyaṇa as an embedded but independently transmitted work.',
    'Comparative study of the Vāyu and Brahmāṇḍa Purāṇas for reconstruction of older cosmological and genealogical strata.'
  ]);
})();