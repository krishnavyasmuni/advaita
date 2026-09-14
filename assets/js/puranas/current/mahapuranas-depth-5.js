(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function entry(name){return D['Purāṇa:'+name]||D[name]||null;}
  function sec(name,title){const e=entry(name);if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}
  function read(name,items){const s=sec(name,'Further reading');if(s)s.bullets=[...A(s.bullets),...items];const e=entry(name);if(e)e.bibliography=[...A(e.bibliography),...items];}

  // PADMA PURĀṆA
  paras('Padma Purāṇa','Date of composition',[
    'The Padma Purāṇa is not a text for which a single date can be defended. Its enormous size, pronounced recensional variation and accumulation of pilgrimage, sectarian and ritual materials show a history extending across much of the first and early second millennia CE. Statements such as “the Padma Purāṇa was composed in the tenth century” are useful only as shorthand for particular strata.',
    'R. C. Hazra and later students of the text treated chronology by comparing ritual usages, sectarian claims, quotations and the contents of different recensions. Some materials may preserve relatively early Brahmanical and tīrtha traditions, while large parts of the received text reflect medieval Vaiṣṇava, Śaiva and other sectarian interventions.',
    'The western/Devanagari and Bengali recensions are sufficiently different that they must be treated as major textual traditions rather than minor copyist variation. The Bengal recension is commonly described as having five principal khaṇḍas, while widely printed western recensions use a six-part architecture; individual chapters and entire blocks can be absent, relocated or expanded.',
    'Later temple and pilgrimage references provide chronological anchors for some sections. If a passage presupposes the established importance of a medieval sacred center or a sectarian institution known only from later centuries, it cannot automatically be assigned to an early Purāṇic core.',
    'The correct scholarly procedure is therefore stratigraphic: date the Sṛṣṭi, Bhūmi, Svarga/Ādi-Brahma, Pātāla, Uttara and other materials separately where possible, and identify the recension before making claims about the age or theology of “the Padma Purāṇa.”'
  ]);
  sub('Padma Purāṇa','Structure','Bengal and western recensions',[
    'The Padma is one of the largest Mahāpurāṇas and one of the clearest examples of recensional instability. A major Bengali tradition presents five principal khaṇḍas—Sṛṣṭi, Bhūmi, Svarga, Pātāla and Uttara—while common western or Devanagari editions divide the material differently into six khaṇḍas, often separating Ādi/Svarga and Brahma material.',
    'These are not simply two tables of contents for an otherwise identical book. Chapters can be unique to one recension; the order of blocks differs; and materials such as Kriyāyogasāra can circulate as an appendix or as a separately counted unit. A passage citation without recension is therefore incomplete scholarship.',
    'The work’s traditional verse count is often given around fifty-five thousand, but actual totals depend on edition and on what is included. Canonical verse counts should be treated as traditional bibliographic claims, not modern census data.'
  ],[
    'Bengal recension: five principal khaṇḍas in the common scholarly description.',
    'Western/Devanagari recensions: commonly six khaṇḍas, with altered names and arrangements.',
    'Kriyāyogasāra and other blocks can be treated as appendices or separate divisions in particular editions.',
    'Chapter and verse references must identify the recension or printed edition.'
  ]);
  sub('Padma Purāṇa','Contents','Puṣkara and the Brahmā-centered sacred landscape',[
    'The Padma preserves an important body of material praising Puṣkara in Rajasthan and associating the site with Brahmā. This has long attracted scholarly attention because Brahmā worship is comparatively limited in later institutional Hinduism, whereas Puṣkara became one of its most famous surviving centers.',
    'The māhātmya logic joins myth, ritual and geography. The lake is not merely described; it is constituted as sacred through stories of divine action, rankings against other tīrthas, and promises attached to bathing, fasting and gift. Such chapters are evidence for the textual production of pilgrimage prestige.',
    'The Puṣkara material also complicates a simple identification of the whole Padma as Vaiṣṇava. The history of the title includes strong Brahmā-oriented, Vaiṣṇava and other sectarian layers.'
  ]);
  sub('Padma Purāṇa','Contents','Bhūmi-khaṇḍa and exemplary narrative',[
    'The Bhūmi material interweaves sacred geography with moral and devotional narrative. Stories of kings, householders, sinners, devotees and transformations illustrate the efficacy of truth, gifts, vows, pilgrimage and devotion. The result is not a systematic ethics manual but an exemplary pedagogy in which consequences are dramatized.',
    'Narratives frequently place dharma inside family and political relationships. Merit and sin are shown through inheritance, marriage, generosity, betrayal, pilgrimage and the obligations of rulers. This makes the Bhūmi-khaṇḍa valuable for the history of normative imagination even when its stories cannot be treated as documentary social data.'
  ]);
  sub('Padma Purāṇa','Contents','Pātāla-khaṇḍa, Rāma and Vaiṣṇava devotion',[
    'The Pātāla-khaṇḍa in widely circulated editions contains substantial Rāma-related material and illustrates the tendency of large Purāṇas to absorb epic narrative into sectarian devotion. Rāma can be treated not simply as an exemplary king but as a manifestation of the supreme Viṣṇu whose story itself becomes meritorious to hear.',
    'Comparison with Vālmīki’s Rāmāyaṇa, the Adhyātma Rāmāyaṇa and later Vaiṣṇava retellings is essential. Similar episodes can carry different theological weight depending on whether Rāma is foregrounded as human hero, avatāra or supreme reality.'
  ]);
  sub('Padma Purāṇa','Contents','Uttara-khaṇḍa and sectarian compilation',[
    'The Uttara-khaṇḍa is one of the most unstable and accretional parts of the Padma tradition. It contains extensive Vaiṣṇava devotion, sacred-month observances, pilgrimage, vrata, theological classification and passages used by later sectarian communities.',
    'Famous classifications of Purāṇas into sāttvika, rājasa and tāmasa groups occur in this wider textual world and became influential in later sectarian polemic. Such classifications should be dated and contextualized rather than projected back onto the entire history of the eighteen Mahāpurāṇas.',
    'The section also contains strong praise of particular texts, names, vows and forms of worship. Each such block must be assessed for its own transmission because the Uttara-khaṇḍa was especially open to later religious supplementation.'
  ]);
  paras('Padma Purāṇa','Theology',[
    'The Padma’s theology is best described as stratified pluralism rather than one consistent system. Large portions are strongly Vaiṣṇava, but Brahmā, Śiva, goddesses and local deities remain central in other blocks. Sectarian redactors repeatedly reframe inherited material rather than replacing it entirely.',
    'Vaiṣṇava sections elevate Viṣṇu, Rāma, Kṛṣṇa, sacred names and devotional observance. Bhakti is embodied in hearing, pilgrimage, fasting, image worship, holy months and recitation, demonstrating how medieval Vaiṣṇavism connected affective devotion to public and household institutions.',
    'The text’s famous sectarian classifications should be understood as rhetoric. Calling one Purāṇa sāttvika and another tāmasa is a theological strategy for ranking scriptures, not an objective ancient library classification accepted by all Hindu traditions.',
    'Pilgrimage theology is equally important. A divine hierarchy is materialized through sacred places: Puṣkara, river systems, regional temples and other tīrthas become concentrated sites of divine efficacy.',
    'The enormous range of the work shows how a Purāṇa could function as a platform for competing and overlapping religious communities. The historian should preserve those tensions rather than harmonize them into one imagined authorial doctrine.'
  ]);
  paras('Padma Purāṇa','Critical edition',[
    'The Padma Purāṇa does not possess one universally accepted full critical edition that resolves the Bengal and western recensions into a single stemmatic archetype. This is not merely a gap in scholarship; the scale and modularity of the text make such an edition exceptionally difficult.',
    'A critical method must first map the major recensions. The Bengali manuscripts preserve structures and omissions not found in common Devanagari prints, while western and southern printed traditions can rearrange or rename substantial blocks. Collating only multiple copies of one printed lineage would not constitute the text as a whole.',
    'Individual khaṇḍas may require separate critical editions. Ashoke Chatterjee and other scholars pursued focused study of Padma recensions and particular units, illustrating a practical approach to a corpus too large and unstable for casual harmonization.',
    'Quotation history is especially valuable. If a medieval nibandha or sectarian theologian quotes a Padma verse that can be located in a specific recension, the citation helps anchor that unit before the date of the quoting author. Conversely, famous verses absent from older witnesses require caution.',
    'Academic citation must therefore give khaṇḍa, chapter, verse and edition/recension wherever possible. “Padma Purāṇa 1.20” without recensional information can be misleading because “book one” does not denote the same textual block in every tradition.'
  ]);
  paras('Padma Purāṇa','Influences and reception',[
    'The Padma had an enormous reception through pilgrimage, vrata and sectarian citation. Its prestige allowed later communities to authorize regional sacred places and devotional practices by embedding them under a recognized Mahāpurāṇa title.',
    'Vaiṣṇava traditions drew heavily on Padma passages for scriptural classification, the praise of divine names, sacred months and devotional conduct. The influence is often visible through quotation rather than through continuous commentary on the entire Purāṇa.',
    'Regional pilgrimage traditions likewise use Padma authority to connect local landscapes with pan-Indian myth. Such reception can be studied by comparing Sanskrit māhātmyas with local vernacular literature, temple inscriptions and ritual calendars.',
    'The text’s nineteenth- and twentieth-century printed editions profoundly shaped modern ideas of what the Padma is. Once one recension became cheaply printable and widely translated, its contents could appear canonical even where manuscript history was much more diverse.',
    'Modern scholarship increasingly treats this plurality as data rather than corruption. The changing Padma is evidence for how Purāṇic authority was continuously negotiated across regions and sects.'
  ]);
  paras('Padma Purāṇa','Rites, dharma and social history',[
    'The Padma is exceptionally rich in vrata, dāna, tīrtha and sacred-calendar materials. These chapters provide evidence for the idealized practices of medieval household religion: fasting, bathing, recitation, feeding Brahmins, gift, temple worship and journeys are repeatedly linked to specific lunar days and months.',
    'Sacred months such as Kārttika become ritual frameworks in which daily household actions are intensified through vows and devotional discipline. The calendar is therefore not background chronology but a medium of religious practice.',
    'Pilgrimage chapters imply a complex social infrastructure of routes, custodians, donors, priests and local institutions. Māhātmyas promote sites and can exaggerate their supremacy, but precisely that promotional character reveals competition for religious attention and patronage.',
    'Dharma passages should be compared with Smṛti and nibandha sources. The Padma does not describe a single social order valid everywhere; it participates in normative debates whose vocabulary and emphases changed over centuries.',
    'Sectarian chapters also reveal identity formation. Rules about whom to worship, which scriptures to hear and what marks or observances to adopt help construct communities through everyday practice.',
    'Because the Purāṇa is so stratified, social-historical claims must be tied to specific textual blocks. A late Uttara-khaṇḍa rule cannot be used uncritically as evidence for early Gupta society.'
  ]);
  read('Padma Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the Padma Purāṇa and its recensions.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, chapter on the Padma Purāṇa.',
    'Ashoke Chatterjee Shastri, studies of the Padma Purāṇa and its recensions, including work on the Svarga-khaṇḍa.',
    'Studies on the Religion and Philosophy of the Padma Purāṇa using major southern/western recensions.',
    'P. V. Kane, History of Dharmaśāstra, for Padma citations in vrata, dāna and dharma traditions.',
    'Major Sanskrit prints should be cited by edition because Bengal and western recensions differ substantially.'
  ]);

  // ŚIVA PURĀṆA
  paras('Śiva Purāṇa','Date of composition',[
    'The Śiva Purāṇa is a living Śaiva compilation transmitted in substantially different recensions. The surviving seven-saṃhitā and six-saṃhitā structures cannot simply be reduced to copyist variation, and some manuscripts preserve still other large divisions. Consequently, chronology must be recensional and sectional.',
    'Modern estimates commonly place major surviving strata in the early second millennium, with material perhaps beginning earlier and continuing to receive additions after the eleventh century. Developed temple ritual, pilgrimage, sectarian theology and the internal history of Śaiva traditions provide relative chronological evidence.',
    'The Purāṇa itself speaks of a much larger twelve-saṃhitā form of one hundred thousand verses that was abridged. This is important evidence for traditional theories of textual transmission, but it is not a recoverable manuscript archetype. The five “lost” saṃhitās cannot be reconstructed merely from the self-description.',
    'The relation between Śiva Purāṇa and Vāyu Purāṇa has caused bibliographic confusion in older scholarship, when Vāyu was sometimes treated as a Śiva Purāṇa. Modern research normally distinguishes the two textual traditions, while recognizing their shared Śaiva and Purāṇic environments.',
    'Dating should therefore separate the surviving recensions, identify individual saṃhitās and trace quotations or parallel passages. An infobox date is only an orientation; the scholarly argument belongs at the level of blocks and witnesses.'
  ]);
  sub('Śiva Purāṇa','Structure','The seven-saṃhitā recension',[
    'A widely used recension contains seven saṃhitās: Vidyeśvara, Rudra, Śatarudra, Koṭirudra, Umā, Kailāsa and Vāyavīya, with about 457 chapters in the common printed arrangement. The Rudra-saṃhitā itself is divided into several thematic khaṇḍas that narrate creation, Satī, Pārvatī, Kumāra and related cycles.',
    'This structure provides a convenient map for modern readers but should not be mistaken for the only Śiva Purāṇa. Another major recension has six saṃhitās and about 290 chapters, while other manuscripts can use Pūrvakhaṇḍa/Uttarakhaṇḍa structures.',
    'The diversity suggests redaction at the level of large books, not merely individual verses. A statement found in Vāyavīya-saṃhitā, for example, cannot automatically be assumed to occur in the same place—or at all—in another recension.'
  ],[
    'Vidyeśvara-saṃhitā: framing, liṅga worship, basic Śaiva religious instruction.',
    'Rudra-saṃhitā: creation and major Satī–Pārvatī–Śiva narrative cycles.',
    'Śatarudra and Koṭirudra: forms of Śiva, liṅga, worship and associated mythology.',
    'Umā-saṃhitā: goddess, cosmology, rites and teachings in the received arrangement.',
    'Kailāsa and Vāyavīya: yoga, liberation, Pāśupata/Śaiva teaching and recensional conclusion.',
    'Six-saṃhitā and other manuscript traditions require separate structural maps.'
  ]);
  sub('Śiva Purāṇa','Contents','Satī, Dakṣa and the reconstitution of divine marriage',[
    'The Dakṣa-Satī cycle dramatizes the conflict between sacrificial status and Śiva’s outsider sovereignty. Satī’s humiliation and death, Śiva’s grief and the destruction of Dakṣa’s sacrifice are not only myths of divine anger; they negotiate Śiva’s incorporation into the Brahmanical sacrificial order without reducing him to it.',
    'The subsequent rebirth of Satī as Pārvatī transforms catastrophe into a new marriage theology. Pārvatī’s tapas becomes the disciplined means by which cosmic erotic power is restored and the divine household is reconstituted.'
  ]);
  sub('Śiva Purāṇa','Contents','Pārvatī, Kumāra and Gaṇeśa',[
    'The Pārvatī cycle integrates asceticism, marriage and fertility. Śiva is the paradigmatic yogin whose withdrawal threatens cosmic continuity; Pārvatī’s austerity and union with him make divine sexuality a condition for the birth of a demon-slaying son.',
    'Kumāra/Skanda narratives link the household of Śiva to martial sovereignty, while Gaṇeśa traditions explain the origin and authority of the elephant-headed remover of obstacles. Different recensions preserve variant details, making the Purāṇa an important witness to the consolidation of the Śaiva divine family.'
  ]);
  sub('Śiva Purāṇa','Contents','Liṅga, jyotirliṅga and sacred geography',[
    'The liṅga is treated as both cultic object and theological sign. Narratives of the endless pillar of fire dramatize the inadequacy of Brahmā and Viṣṇu before Śiva’s immeasurable form, while ritual chapters teach installation, worship and merit.',
    'Jyotirliṅga traditions map Śiva’s presence across a network of famous temples and regions. Lists and associated legends became central to later pilgrimage culture, though the textual history of individual māhātmyas and lists must be traced carefully rather than assumed to be uniform from the earliest recension.',
    'This geographical theology connects local temples to a pan-Indian Śaiva canon. A shrine can be both intensely regional and one manifestation of a cosmic Śiva.'
  ]);
  sub('Śiva Purāṇa','Contents','Yoga, knowledge and liberation',[
    'Later doctrinal sections present yoga, knowledge, devotion and Śaiva observance as coordinated paths. Śiva is not only mythic deity but supreme teacher whose nature can be realized through disciplined practice.',
    'Advaita-like vocabulary appears in important passages, but the text should not be flattened into Śaṅkara’s Advaita Vedānta. Nondual statements occur inside a theistic Śaiva scriptural world with mantra, liṅga, grace and devotion.'
  ]);
  paras('Śiva Purāṇa','Theology',[
    'The Śiva Purāṇa presents Śiva as supreme reality while preserving Brahmā, Viṣṇu, Devī and other gods within an encompassing Śaiva cosmos. Sectarian supremacy usually works through hierarchy and identity rather than simple denial of other deities.',
    'A major theological tension joins niṣkala and sakala: Śiva can be beyond form and qualities while also manifesting as personal deity, liṅga, cosmic ruler, husband, father and teacher. The liṅga mediates this tension by functioning as an aniconic sign that is nevertheless materially installed and worshiped.',
    'Śiva’s ascetic and erotic identities are not accidental contradictions. The myths repeatedly ask how the detached yogin becomes husband and father without ceasing to transcend social life. Pārvatī’s role is therefore structurally necessary to Śaiva cosmology and soteriology.',
    'Grace and devotion operate alongside yoga and knowledge. Ritual worship can lead toward liberation because the object of worship is identical with the supreme reality disclosed in philosophical teaching.',
    'The Purāṇa also provides evidence for a broad Śaiva synthesis in which Pāśupata, temple, household and contemplative strands coexist. Specific affiliations should be demonstrated section by section rather than assigned to the entire compilation.'
  ]);
  paras('Śiva Purāṇa','Critical edition',[
    'The Śiva Purāṇa lacks a single universally accepted modern critical edition establishing all major recensions from a full manuscript stemma. Scholarship therefore depends on careful use of identified Sanskrit prints and manuscript catalogues.',
    'The most important critical fact is structural plurality. The seven-saṃhitā recension of about 457 chapters and the six-saṃhitā recension of about 290 chapters represent substantially different textual organizations. They should not be blended silently into one synthetic table of contents.',
    'Internal claims about twelve original saṃhitās and one hundred thousand verses belong to the text’s theory of sacred transmission. They may preserve memory of lost forms, but critical editing cannot treat an internal claim as equivalent to surviving manuscript evidence.',
    'Individual narrative cycles can be compared across Śiva, Liṅga, Skanda and other Purāṇas. Such comparison is useful for redactional history, but parallel versions must be kept distinct. The goal is not to reconstruct one “original Śiva myth” by conflating all sources.',
    'Future editorial work should use a modular digital model capable of aligning recensions by episode and saṃhitā while preserving differences in chapter order. For a text this large, variant architecture is as important as variant wording.'
  ]);
  paras('Śiva Purāṇa','Influences and reception',[
    'The Śiva Purāṇa became one of the most widely circulated narrative scriptures of Śaivism, especially through printed editions, vernacular translations, public recitation and retellings of Satī, Pārvatī, Gaṇeśa and jyotirliṅga myths.',
    'Its divine-family narratives shaped popular iconography and festival storytelling. The text is one important witness among several—alongside Skanda, Liṅga, epics and regional literature—to the formation of the familiar Śiva-Pārvatī-Gaṇeśa-Skanda household.',
    'Jyotirliṅga traditions helped connect major regional temples into a shared pan-Indian itinerary. The Purāṇic network does not erase local histories; rather, it overlays them with a transregional Śaiva identity.',
    'Modern publishing has strongly standardized one recension, meaning contemporary devotional reception can be more uniform than the manuscript record. A scholar studying “popular Śiva Purāṇa” should therefore distinguish modern print culture from premodern transmission.',
    'The text also remains important for comparative theology because it joins bhakti, ritual, liṅga symbolism, nondual language and yoga without collapsing them into one later philosophical school.'
  ]);
  paras('Śiva Purāṇa','Rites, dharma and social history',[
    'Liṅga worship is the practical center of many ritual sections. Installation, bathing, offerings, mantra and observance embed Śaiva theology in repeatable temple and household acts. The ritual object mediates between local material presence and the transcendent Śiva.',
    'Vrata and festival materials organize the calendar around Śaiva devotion. Fasting, night vigil, recitation and worship transform time into an instrument of merit and community identity.',
    'Pilgrimage chapters map Śaiva institutions across the subcontinent. They imply priests, patrons, travelers and temple economies while promoting particular centers through mythic superiority claims.',
    'The divine marriage narratives also encode social ideals and tensions around asceticism, marriage, female austerity, lineage and reproduction. They are theological stories, not ethnographic records, but their normative imagination influenced later Hindu cultural forms.',
    'Initiatory and yogic material points beyond public temple worship to specialist Śaiva disciplines. Social history must therefore recognize multiple constituencies—householders, renouncers, ritual experts and patrons—within the textual world.',
    'As always with Purāṇic prescriptions, comparison with inscriptions, Āgamas, temple records and regional practice is necessary. The Śiva Purāṇa tells us what redactors authorized; other sources help determine how particular communities lived those ideals.'
  ]);
  read('Śiva Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, pp. 222–228 and related discussion of Śiva Purāṇa recensions.',
    'Major Sanskrit six-saṃhitā and seven-saṃhitā printed recensions, cited explicitly by edition.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, for comparative chronology and ritual.',
    'Alexis Sanderson and other scholarship on early-medieval Śaivism for context beyond the Purāṇa.',
    'Studies of Pāśupata, Śaiva Siddhānta and Purāṇic Śaivism for doctrinal comparison without conflation.',
    'Temple, inscriptional and pilgrimage studies for jyotirliṅga reception and regional Śaiva institutions.'
  ]);

  // LIṄGA PURĀṆA
  paras('Liṅga Purāṇa','Date of composition',[
    'The Liṅga Purāṇa is a stratified Śaiva work whose major layers are commonly placed between the middle and later first millennium CE, with continued expansion afterward. Its two-part structure itself contains evidence of growth: the received Uttarabhāga has fifty-five chapters, while an internal verse can be read as describing a shorter forty-six-chapter second part.',
    'Hazra’s chronological work gave particular attention to the Liṅga because rites, sectarian institutions and quotations can be compared with dated Dharmaśāstra and Purāṇic materials. Such analysis indicates that the text accumulated over time rather than emerging as one systematic theology.',
    'The Nāradīya Purāṇa’s description of a Liṅga Purāṇa associated with an Agnikalpa does not correspond neatly to the extant text, which identifies itself differently. This discrepancy suggests title history and possible replacement of an earlier recension rather than a transparent continuity.',
    'The famous liṅgodbhava-type theology draws on a wider Śaiva mythic network also represented in other Purāṇas. Intertextual comparison is necessary to establish relative chronology; the presence of the myth alone cannot date the text.',
    'As with other Purāṇas, manuscript dates establish the history of witnesses, not the age of every myth or ritual they transmit. Sectional dating remains essential.'
  ]);
  sub('Liṅga Purāṇa','Structure','Pūrvabhāga and Uttarabhāga',[
    'The received text is divided into a Pūrvabhāga of 108 chapters and an Uttarabhāga of 55, for a total of 163. The internal statement that the second section contains only forty-six chapters has long been taken as evidence that nine chapters may have entered after an earlier self-description was composed.',
    'The first part is broad and cosmological: creation, cosmic time, Śiva mythology, genealogies, geography, ritual and the theology of the liṅga appear alongside narratives shared with other Purāṇas. The second intensifies ritual, liṅga glorification, vows, mantra and yoga.',
    'The structure should therefore not be read as “old half” and “new half” in a simple chronological sense. Both halves can be internally layered, and even the names Pūrvabhāga/Uttarabhāga describe textual position rather than guaranteed date.'
  ],[
    'Pūrvabhāga: 108 chapters in the common recension.',
    'Uttarabhāga: 55 extant chapters; an internal verse has been interpreted as preserving memory of a 46-chapter form.',
    'Total received structure: 163 chapters, with manuscript and edition variation.',
    'The text’s self-description and Nāradīya catalogue evidence do not fully match the extant recension.'
  ]);
  sub('Liṅga Purāṇa','Contents','Liṅga as sign, pillar and cosmic principle',[
    'The text develops the liṅga far beyond a simple cult object. It is a sign of Śiva’s transcendence, a cosmic axis and a ritual focus through which the formless can be approached materially. Narratives of the immeasurable fiery column dramatize the inability of Brahmā and Viṣṇu to find the limits of Śiva.',
    'Theological interpretation must avoid reducing liṅga to one modern sexual reading. Sanskrit usage includes “mark” or “sign,” and the Purāṇa explicitly connects the cult object to metaphysical distinctions between unmanifest and manifest Śiva. Fertility symbolism can be present without exhausting the tradition’s meanings.',
    'Installation and worship chapters transform this metaphysics into ritual technology: measurements, materials, mantra, bathing and offerings produce an authorized locus of divine presence.'
  ]);
  sub('Liṅga Purāṇa','Contents','Cosmology, kalpas and Śiva’s manifestations',[
    'The Purāṇa narrates creation, dissolution, cosmic ages and divine manifestations inside a Śaiva hierarchy. Śiva’s forms are multiplied across cosmic time, allowing inherited Purāṇic cosmology to be reinterpreted through one supreme deity.',
    'Lists of manifestations and teachers connect cosmic history to lineages of revelation. Such catalogues are important for sectarian self-understanding because they make Śaiva knowledge as recurrent and primordial as the cycles of the universe itself.'
  ]);
  sub('Liṅga Purāṇa','Contents','Image, temple and ritual practice',[
    'Detailed attention to the liṅga is accompanied by treatment of Nandin, images, temples, vows and consecration. This material situates the Purāṇa in an institutional religious world where permanent icons and shrines are central media of worship.',
    'The prescriptions should be compared with Śaiva Āgamas and Śilpa texts. Similarity does not prove direct borrowing, but it reveals a shared technical vocabulary linking Purāṇic narrative authority to specialist ritual and architectural traditions.'
  ]);
  sub('Liṅga Purāṇa','Contents','Pāśupata yoga and liberation',[
    'The concluding religious vision includes yoga and explicitly Śaiva disciplines aimed at liberation. The practitioner moves beyond external worship toward controlled body, breath, mind and knowledge, showing that the liṅga cult and contemplative soteriology belong to one graded path rather than separate religions.',
    'Pāśupata associations require precise textual analysis because “Pāśupata” can designate specific historical institutions as well as broader Śaiva vocabulary. The Purāṇa is valuable evidence for how ascetic practices were domesticated within a Mahāpurāṇic framework.'
  ]);
  paras('Liṅga Purāṇa','Theology',[
    'The central doctrine distinguishes Śiva as niṣkala, beyond form and differentiating qualities, from sakala manifestations accessible in cosmic and cultic form. The liṅga mediates these poles: it is materially present but points beyond finite anthropomorphic representation.',
    'Śiva is presented as the source and end of Brahmā, Viṣṇu and the universe. Yet the Purāṇa does not erase the other gods; it reassigns them functions within a Śaiva totality. Sectarian supremacy therefore operates through incorporation.',
    'Theology, ritual and iconography are inseparable. To know what the liṅga “means” is also to know how it is installed, worshiped and internalized through meditation. The text resists a modern division between philosophy and cult.',
    'Yoga provides the soteriological culmination. Ritual merit and devotion prepare for deeper realization of Śiva, while grace and divine knowledge prevent liberation from becoming a purely self-generated technique.',
    'The Purāṇa thus offers one of the strongest Sanskrit witnesses for the intellectualization of aniconic Śiva worship: a ubiquitous cultic form is explained as a metaphysical symbol of an unlimited divine reality.'
  ]);
  paras('Liṅga Purāṇa','Critical edition',[
    'The Liṅga Purāṇa does not currently have one universally adopted full modern critical edition comparable to the Kashiraj Vāmana or Kūrma editions. Researchers must therefore state the Sanskrit edition used and check major variants where an argument depends on wording or chapter order.',
    'The discrepancy between the received fifty-five-chapter Uttarabhāga and an internal statement apparently indicating forty-six chapters is a basic piece of redactional evidence. It should not be explained away solely by ingenious grammatical reinterpretation when textual growth offers a historically plausible account.',
    'The Nāradīya catalogue creates a second editorial problem by describing a Liṅga Purāṇa whose kalpa association differs from the extant text. This may point to a lost or substantially reworked predecessor under the same title.',
    'Parallel Śaiva myths in Śiva, Skanda, Vāyu and other texts can assist analysis but must not be imported to fill perceived gaps. Each Purāṇa preserves its own recensional history.',
    'A future critical edition should collate regional manuscript families and treat ritual/iconographic blocks as potential modules. For a work embedded in living liṅga worship, later liturgical supplementation is historically meaningful rather than mere contamination.'
  ]);
  paras('Liṅga Purāṇa','Influences and reception',[
    'The Liṅga Purāṇa contributed to the scriptural explanation of one of Śaivism’s most widespread cult forms. Its narratives and ritual teachings gave theological depth to liṅga worship across temple and household environments.',
    'The endless-pillar myth became a major iconographic and narrative theme, especially in liṅgodbhava imagery. Direct dependence on the Purāṇa must be demonstrated regionally, but the shared theological complex is central to medieval Śaiva art.',
    'Later ritual writers and compilers drew on Purāṇic authority for installation, vows and pilgrimage. Selected passages could circulate more widely than continuous reading of the entire 163-chapter work.',
    'Modern scholarship has often used the Liṅga to bridge textual, iconographic and ritual studies. Its value is greatest when those fields remain distinct enough to test one another rather than assuming that an image simply illustrates a text.',
    'The Purāṇa also documents Śaiva attempts to integrate yoga and metaphysics with public cult, a synthesis that shaped the modern understanding of Śiva as simultaneously aniconic absolute, anthropomorphic deity and yogin.'
  ]);
  paras('Liṅga Purāṇa','Rites, dharma and social history',[
    'Installation and daily worship of the liṅga imply specialist ritual knowledge, donors, temple institutions and material resources. Rules about substances, measurements, offerings and mantra are therefore evidence for a complex cultic economy as well as theology.',
    'Vratas and festival observances allow householders to participate without establishing a temple. Fasting, vigil, recitation and simple worship translate an institutional Śaiva system into repeatable domestic practice.',
    'Pilgrimage chapters connect local liṅgas and sacred places to the cosmic Śiva. They are promotional texts that rank sites and promise merit, revealing the competition and networking through which regional cults entered pan-Indian sacred geography.',
    'Yoga and Pāśupata-oriented passages point to renunciant or specialist constituencies. The same Purāṇa therefore addresses social worlds ranging from household donors to ascetics.',
    'Normative statements about caste, gift and purity should be compared with Dharmaśāstra and inscriptional evidence rather than read as a uniform description of society.',
    'The strongest social history emerges from the interaction of these layers: temple patronage, household vow, pilgrimage and ascetic discipline are not separate domains but overlapping ways of participating in Śiva’s sacred order.'
  ]);
  read('Liṅga Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, discussion of the Liṅga Purāṇa.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, chapter on the Liṅga Purāṇa.',
    'The Liṅga Purāṇa, Ancient Indian Tradition and Mythology translation series, for a complete translation tied to a Sanskrit recension.',
    'Cornelia Dimmitt and J. A. B. van Buitenen, Classical Hindu Mythology, for comparative Purāṇic myth.',
    'Studies of Pāśupata Śaivism and Śaiva ritual/Āgamic literature for contextual comparison.',
    'Iconographic studies of liṅgodbhava and liṅga worship, used critically alongside the textual evidence.'
  ]);

  // GARUḌA PURĀṆA
  paras('Garuḍa Purāṇa','Date of composition',[
    'The Garuḍa Purāṇa has at least two major chronological problems: the date of the encyclopedic Pūrvakhaṇḍa and the date of the funerary Pretakalpa/Pretakhaṇḍa. They should not be assigned one date merely because they now circulate under one title.',
    'Hazra argued that the funerary section is a later attachment: it begins afresh, is not represented in the early summary of contents in the same way as the main body, and was not cited by older nibandha writers in the pattern expected if it had always formed part of the text. This argument remains essential to any university-level discussion.',
    'The Pūrvakhaṇḍa itself is composite and encyclopedic, treating ritual, medicine, gemology, polity, grammar, yoga and other disciplines alongside Vaiṣṇava myth. Major strata are usually situated in the medieval period, but individual technical chapters may draw on older specialist sources.',
    'The Pretakhaṇḍa’s transmission is exceptionally unstable. Jonathan Parry noted enormous variation among different versions used in the study of Hindu death ritual. Consequently, a modern funeral manual labeled “Garuda Purana” may not reproduce the same recension as a Sanskrit printed edition.',
    'Chronology should therefore distinguish the main Purāṇa, the Pretakalpa, later digests such as the Garuḍa Purāṇa Sāroddhāra, and regional ritual traditions that invoke Garuḍa authority.'
  ]);
  sub('Garuḍa Purāṇa','Structure','Pūrvakhaṇḍa and Pretakhaṇḍa',[
    'The common received structure has a large Pūrvakhaṇḍa of roughly 229 chapters in some editions, with other recensions extending into the 240s, and a much shorter Uttarakhāṇḍa generally known as Pretakhaṇḍa or Pretakalpa whose chapter total varies dramatically.',
    'Some printed traditions include an additional Brahmakhaṇḍa or arrange the material differently. Traditional verse totals around nineteen thousand exceed the approximately eight thousand verses found in many surviving recensions.',
    'The two-part structure is therefore descriptive, not a guarantee of textual unity. The funerary section has its own opening, subject matter and recensional history and should be studied as a major attached dossier.'
  ],[
    'Pūrvakhaṇḍa: encyclopedic Vaiṣṇava Purāṇa; roughly 229–243 chapters depending on recension.',
    'Pretakhaṇḍa/Pretakalpa: death, funeral rites, preta state, Yama, hells and postmortem journey; chapter count varies greatly.',
    'Some printed editions add or rename large divisions, including a Brahmakhaṇḍa.',
    'The Garuḍa Purāṇa Sāroddhāra is a later digest/commentarial work and must not be cited as though identical with every Purāṇa recension.'
  ]);
  sub('Garuḍa Purāṇa','Contents','The encyclopedic Pūrvakhaṇḍa',[
    'The first part ranges far beyond mythology. It contains materials on worship, cosmology, medicine, diagnosis, poisons, gems, omens, polity, metrics, grammar, yoga and liberation. This breadth places it beside the Agni Purāṇa as a major example of the encyclopedic turn in medieval Purāṇic literature.',
    'Technical chapters should be compared with specialist śāstras. A gemological or medical passage may summarize knowledge circulating in dedicated treatises rather than originate it. The Purāṇa’s significance lies partly in repackaging specialist learning within a religious encyclopedia accessible under Vaiṣṇava authority.',
    'The frame of Viṣṇu instructing Garuḍa gives coherence to this diversity. Garuḍa is both divine vehicle and recipient-transmitter of knowledge, allowing topics from ritual to medicine to be imagined as components of one sacred science.'
  ]);
  sub('Garuḍa Purāṇa','Contents','Death, preta and the path to Yama',[
    'The Pretakhaṇḍa describes dying, treatment of the corpse, cremation, the unstable preta condition, offerings, the journey toward Yama’s realm, judgment, hells and eventual rebirth or ancestral incorporation. Its vivid postmortem geography is one reason the Garuḍa Purāṇa became popularly identified with death.',
    'The journey is not merely speculative eschatology. It explains why survivors must perform rites: offerings, piṇḍas, water and śrāddha are represented as materially significant to the dead person’s transition. The living household and the postmortem body are therefore linked through ritual exchange.',
    'Different recensions describe the route, duration and torments differently. A scholarly article must resist presenting one popular English translation as the timeless Hindu doctrine of death.'
  ]);
  sub('Garuḍa Purāṇa','Contents','Hell, karma and moral pedagogy',[
    'Lists of hells correlate particular acts with embodied punishments. The imagery is graphic because it is pedagogical: moral consequence is made visible by mapping sin onto a postmortem body capable of suffering.',
    'These passages should be compared with Dharmaśāstra, Buddhist preta/naraka literature and other Purāṇic hell catalogues. Similarity can reflect a shared South Asian moral imagination rather than direct borrowing from one identifiable source.',
    'Hell is usually not eternal. Punishment belongs within karma and rebirth, after which the being continues through saṃsāra. This distinguishes Purāṇic eschatology from theological systems centered on one irreversible final judgment.'
  ]);
  sub('Garuḍa Purāṇa','Contents','Medicine, gems and practical knowledge',[
    'Medical chapters address disease, drugs, poisons and treatment in a compressed Purāṇic format. They should be studied alongside Āyurvedic saṃhitās and later compendia to identify borrowing, simplification and adaptation.',
    'Gemology likewise combines physical description, valuation, auspiciousness and supernatural effect. Such chapters show that medieval “science,” economy and religion were not separated by modern disciplinary boundaries.',
    'The practical materials help explain the Purāṇa’s social reach. A religious encyclopedia could serve priests and devotees while also preserving useful knowledge for rulers, healers, merchants and householders.'
  ]);
  paras('Garuḍa Purāṇa','Theology',[
    'The Garuḍa Purāṇa is broadly Vaiṣṇava: Viṣṇu is the ultimate teacher and cosmic authority, and liberation is framed through knowledge and devotion to the supreme. Yet the encyclopedic text incorporates ritual and technical traditions that are not reducible to sectarian doctrine.',
    'The funerary theology joins karma, preta, ancestor and rebirth. Death does not instantaneously produce a fixed eternal state; ritual transition matters. The deceased is imagined as undergoing transformations whose success is linked to actions of surviving relatives.',
    'The theology of ritual reciprocity is therefore central. Śrāddha and piṇḍa are not symbolic memorials in the text’s own worldview; they participate in the constitution and nourishment of the postmortem person.',
    'Yoga and liberation chapters provide a different horizon in which the cycle of postmortem transit can be transcended. The Purāṇa can therefore speak both to householders concerned with correct death rites and to seekers pursuing release from rebirth.',
    'The coexistence of fearful hell imagery and liberating knowledge is coherent within a karmic cosmos: moral pedagogy governs ordinary saṃsāric existence, while devotion and realization offer a higher exit from it.'
  ]);
  paras('Garuḍa Purāṇa','Critical edition',[
    'The Garuḍa Purāṇa is textually unstable, especially in the Pretakhaṇḍa. There is no single modern critical edition that has established one universally accepted text of all recensions. Researchers must identify the Sanskrit print or manuscript family behind a translation.',
    'The chapter totals of the Pūrvakhaṇḍa vary, and the Pretakhaṇḍa exists in markedly different versions. Jonathan Parry’s work on death ritual emphasized the magnitude of this variation, which makes “chapter x of the Garuḍa Purāṇa” an unsafe reference unless an edition is named.',
    'The Garuḍa Purāṇa Sāroddhāra associated with Navanidhirāma is especially important to distinguish. It systematizes funerary and eschatological material and became influential through English translation, but it is not simply synonymous with the entire received Purāṇa.',
    'Hazra’s argument that the Pretakalpa is a later addition is a model of historical criticism using internal framing, contents lists and citation history. Even if individual details are revised by future manuscript work, the method remains exemplary.',
    'A rigorous edition would require separate stemmata for the main encyclopedia and funerary traditions, followed by study of when and how they were joined. Regional death-ritual manuscripts may preserve performative recensions rather than merely corrupt literary copies.'
  ]);
  paras('Garuḍa Purāṇa','Influences and reception',[
    'No feature has shaped reception more than the association of the Garuḍa Purāṇa with death. In many Hindu communities the title evokes funeral recitation, preta doctrine and the afterlife even though those subjects occupy only one portion of the larger encyclopedia.',
    'This reception was reinforced by the circulation of the Sāroddhāra and by colonial-era translations, which could present a particular funerary recension as “the” Garuḍa Purāṇa. Modern popular summaries often inherit that narrowing.',
    'Anthropological work, including Jonathan Parry’s study of death in Banaras, demonstrates that actual funeral practice cannot simply be read off the text. Communities combine Vedic sūtra, Purāṇic, regional and family traditions, and local specialists may interpret textual authority selectively.',
    'The Pūrvakhaṇḍa had a different reception as an encyclopedia. Its gemological, medical and ritual chapters contribute to the history of Sanskrit knowledge compilation even where they never became famous devotional narratives.',
    'The text is therefore best understood through multiple receptions: funerary scripture, Vaiṣṇava Purāṇa, technical compendium and modern popular book of the afterlife.'
  ]);
  paras('Garuḍa Purāṇa','Rites, dharma and social history',[
    'The Pretakhaṇḍa is a major normative source for the social organization of death. It distributes responsibilities among relatives, priests and ritual recipients and sequences acts from dying and cremation through the preta period toward ancestral incorporation.',
    'These rites make kinship ritually productive. Descendants are not merely mourners; their actions affect the deceased’s postmortem condition. The text thus links family continuity, inheritance of obligation and eschatology.',
    'Gift is central throughout funerary ritual. Food, cows, vessels, cloth and payments to Brahmins are assigned religious efficacy, revealing a moral economy in which wealth is redirected at moments of extreme vulnerability.',
    'Anthropological comparison shows that practice varies. The Purāṇa should be treated as a prescriptive authority whose relation to local custom is empirical, not assumed. Banaras, Tamil Śrī Vaiṣṇava, Bengali and other traditions can follow different ritual grammars.',
    'The medical and practical chapters broaden the social world beyond death. Healers, rulers, householders and specialists appear implicitly in the knowledge the text chooses to preserve.',
    'The contrast between funerary anxiety and yoga/liberation teaching also reflects different religious audiences. Some users seek safe ancestral transition; others seek release from the system of rebirth in which such transitions occur.'
  ]);
  read('Garuḍa Purāṇa',[
    'Ludo Rocher, The Purāṇas, Otto Harrassowitz, 1986, pp. 175–178 and related discussion.',
    'R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, chapter on the Garuḍa Purāṇa.',
    'Jonathan P. Parry, Death in Banaras, Cambridge University Press, 1994, especially discussion of Purāṇic funeral ideology and recensional variation.',
    'The Garuḍa Purāṇa, Ancient Indian Tradition and Mythology series, Motilal Banarsidass, for translation of a major Sanskrit recension.',
    'Garuḍa Purāṇa Sāroddhāra of Navanidhirāma, used explicitly as a later digest rather than equated with the whole Purāṇa.',
    'P. V. Kane, History of Dharmaśāstra, for comparative funeral, śrāddha and gift traditions.',
    'Comparative studies of preta, naraka and ancestral rites in Sanskrit and South Asian religious literature.'
  ]);
})();