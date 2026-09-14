/* Deep long-form expansions: Padma, Vishnu, Vayu, Shiva Puranas. */
(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const add=(name,sections,sources=[])=>{
    const key=`Purāṇa:${name}`, e=Object.assign({},D[name]||{},D[key]||{});
    D[key]=Object.assign({},e,{scholarlyDepth:'deep-v3',articleSections:[...(e.articleSections||[]),...sections],sources:[...(e.sources||[]),...sources]});
  };

  add('Padma Purāṇa',[
    {title:'Date of composition',paragraphs:[
      'The Padma Purana is one of the clearest cases in which the history of a title must be separated from the history of the books now printed under that title. Medieval catalogues know a Padma Purana, yet the surviving Bengal and western Indian recensions differ not merely in isolated verses but in the number, order and contents of their khandas. Dating “the Padma Purana” therefore means reconstructing a succession of recensional formations rather than assigning one date to a single author.',
      'Its growth is visible in the relation between older Purana materials and large regional or ritual additions. Creation, cosmology, dynasties and inherited myths provide a classical Purana framework, but immense stretches of the received corpus are concerned with pilgrimage, vrata, sacred months, temple sites, sectarian praise and practical dharma. Such units could be attached and expanded because the Purana title functioned as a carrier of authority across regions.',
      'Hazra’s comparison of Purana passages with medieval dharma and vrata digests is especially useful for the Padma. When a nibandha cites a Padma verse, the citation can establish that a teaching circulated under that title by the date of the digest. When the verse is absent from one surviving recension but present in another, the discrepancy can reveal recensional history rather than simple scribal error.',
      'Sectarian passages also require local dating. The Uttara Khanda contains influential Vaishnava materials, classifications of Puranas, sacred-name theology and polemical statements, but the size and composition of the Uttara differ between witnesses. A late sectarian chapter cannot be made the doctrinal key to an earlier cosmological or pilgrimage stratum merely because both are now bound together.',
      'The correct chronological model is therefore cumulative: an old Purana title and inherited mythic materials; medieval expansion through pilgrimage and ritual compendia; sectarian reworking; and regional recension formation. The relative age of any particular claim must be argued from its chapter, parallels, citations and manuscript distribution.'
    ]},
    {title:'Structure',paragraphs:[
      'The most important structural fact is that there is no universally transmitted six-khanda Padma Purana. The Bengal recension is commonly described through five khandas—Srishti, Bhumi, Svarga, Patala and Uttara—whereas the western Indian recension commonly has six, including an Adi or Svarga division and a Brahma Khanda in addition to differently ordered Srishti material. Even khandas bearing the same name can differ substantially in chapter count and contents.',
      'This recensional difference is not a minor problem to be hidden in a footnote. It changes how the reader cites and interprets the text. A chapter number in a western printed Padma may not identify the same passage in a Bengal witness. The Bhumi Khanda of the Bengal recension has additional chapters; the Patala Khanda likewise contains material absent from the western form; parts of Srishti are not shared. A scholarly article therefore has to describe each large unit by content as well as number.',
      'Within the khandas, the Purana behaves as a collection of dossiers. Pushkara pilgrimage can occupy a sustained block; Bhumi moves among legends, dharma and sacred geography; Patala contains substantial Rama-related and pilgrimage material; Uttara acts as a late encyclopedic field for Vaishnava devotion, vows, sacred months, polemic and ritual. The internal unit often matters more historically than the nominal khanda containing it.',
      'The narrative frames provide continuity without requiring compositional unity. Speakers can introduce old myths, local mahatmyas or ritual manuals as earlier revelation. This mechanism allows a book to expand while retaining canonical identity. The structural seams—the sudden change from cosmology to a tirtha guide, from dynastic myth to a vrata catalogue—are therefore evidence for the method of Purana compilation.',
      'Traditional verse totals, often around fifty-five thousand for the Padma, describe the prestige and imagined extent of the canonical work rather than the exact length of every surviving manuscript. Recensions of such radically different architecture make any single total historically secondary to the concrete witness being used.'
    ],subsections:[
      {title:'The Bengal and western recensions',paragraphs:[
        'The Bengal five-khanda form and the western six-khanda form should be thought of as related libraries rather than two printings of one fixed book. Shared myths and ritual themes demonstrate common tradition, while reordered, expanded and missing units demonstrate long independent transmission. The recension label should accompany any serious chapter citation.',
        'This also means that modern translations can silently privilege one regional Padma. A reader comparing translations may encounter different chapter counts or even entire narrative units. The difference is textual history, not necessarily translation error.'
      ]},
      {title:'Mahatmya as a structural engine',paragraphs:[
        'Mahatmyas are not merely appendices praising famous places. They are one of the principal mechanisms by which the Padma grew. A sacred lake, river, month or temple can be inserted into the Purana through an origin myth, a sequence of ritual promises and a dialogue frame. Once attached, the local dossier becomes part of pan-Indian scripture.',
        'The result is a book whose architecture is partly geographical. Pushkara, river systems, sacred forests and major Vaishnava sites organize large portions of the text. The khandas therefore function not only as literary books but as containers for maps of religious practice.'
      ]}
    ]},
    {title:'Contents',paragraphs:[
      'The Padma Purana cannot be summarized adequately as “creation and Vishnu stories.” Its defining feature is the conversion of cosmic myth into a practical sacred world. Creation narratives explain the order of beings; genealogies place kings and sages within that order; pilgrimage mahatmyas localize divine events; vrata and month observances organize sacred time; and sectarian chapters make particular forms of devotion the interpretive centre of that enormous inherited universe.'
    ],subsections:[
      {title:'Srishti and the problem of beginnings',paragraphs:[
        'Srishti material treats creation, cosmic succession, divine genealogies and ritual beginnings, but it is itself recension-sensitive. In one tradition material classified as Srishti appears later or is divided differently. That instability is instructive: even the book named “Creation” is a redactional unit, not a guarantee of access to the earliest layer of the Purana.',
        'Creation is repeatedly linked to ritual and place. Cosmogony does not remain an abstract account of elements and beings; it supplies genealogies for deities whose shrines, vows and festivals will later dominate the work. The universal beginning legitimates the regional and practical religion that follows.',
        'Stories of Brahma, Vishnu, Shiva, sages and royal ancestors also show the Padma’s theological plurality. Later Vaishnava strata can place Vishnu at the summit, while earlier or parallel blocks preserve more distributed divine agency. The contents should therefore be mapped by stratum rather than harmonized into one doctrinal voice.'
      ]},
      {title:'Pushkara and the sacralization of Brahma’s landscape',paragraphs:[
        'Early portions of a major recension devote extended attention to Pushkara, the lake and pilgrimage complex associated especially with Brahma. The importance of this block is larger than the rarity of Brahma temples might suggest. It demonstrates how a Purana can turn a geographically specific site into a cosmic centre by narrating sacrifice, divine action, bathing and promised merit.',
        'Pushkara material also complicates simplistic sectarian classification. A work now frequently presented as strongly Vaishnava preserves a major Brahma pilgrimage dossier. Canonical labels such as sattvika, rajasa and tamasa belong to later sectarian taxonomies and do not adequately predict the actual distribution of sacred centres inside the text.',
        'The mahatmya instructs readers how to inhabit the place: which waters matter, when to bathe, what to give, what story explains the site and what merit follows. It is therefore simultaneously myth, ritual manual and cultural geography.'
      ]},
      {title:'Bhumi Khanda — earth, kings, moral tales and pilgrimage',paragraphs:[
        'The Bhumi Khanda is especially difficult to reduce because it combines the “earth” theme with extensive narrative and normative material. Legends of kings, sages, family conflict and devotion become occasions for teaching charity, fidelity, sacred observance and the consequences of action. The earth is not merely described geographically; it is the field in which dharma becomes narratively visible.',
        'Pilgrimage guides are woven into these stories. A place acquires authority because a divine or heroic event occurred there, while the event acquires continuing relevance because pilgrims can revisit its location. The text thus converts past narrative into repeatable religious action.',
        'Differences between Bengal and western Bhumi chapters are particularly important for source criticism. An interpretation based on an episode found only in one branch should identify that branch rather than presenting it as universal Padma tradition.'
      ]},
      {title:'Svarga/Adi and Brahma materials — cosmic and ritual ordering',paragraphs:[
        'The western recension’s Adi or Svarga division and related Brahma material collect narratives of cosmic realms, gods, rites and sacred authority. The labels differ between editions, another sign that the large divisions themselves were subject to editorial reshaping.',
        'Descriptions of heaven are not independent of earthly ritual. Gift, vow, pilgrimage and devotional action are repeatedly measured by post-mortem fruit. The vertical cosmology of heavens and hells provides the moral economy through which ordinary observances are made consequential.',
        'At the same time, the Purana periodically relativizes heavenly reward in favour of devotion or liberation. This creates a hierarchy of religious goals rather than a single motivation for practice.'
      ]},
      {title:'Patala Khanda — Rama traditions and the expansion of sacred narrative',paragraphs:[
        'Patala material contains substantial Rama-related narrative in addition to the nominal underworld theme. This is a typical Purana development: a khanda name may preserve one older organizing idea while later editors use the division as a container for large narrative cycles.',
        'Rama material in the Padma should be compared with the Valmiki Ramayana, later Adhyatma and devotional Rama traditions rather than treated as a duplicate. Changes in theology, dialogue and episode selection reveal how Purana compilers read the epic past from later devotional environments.',
        'The khanda also contains pilgrimage and ritual materials that connect epic memory with places and observances. Rama becomes not only a character in remembered history but an authority for sacred geography and devotional practice.'
      ]},
      {title:'Uttara Khanda — sacred months, names, devotion and sectarian argument',paragraphs:[
        'The Uttara Khanda is among the most influential and most textually sensitive portions of the Padma. It contains large bodies of vrata, month observance, sacred-name praise, Vaishnava teaching, pilgrimage and sectarian classification. Precisely because these passages are frequently quoted in modern religious argument, their recension and date require careful control.',
        'Sacred months such as Karttika can be treated as complete ritual environments. Stories explain why fasting, lamps, bathing, recitation and worship on specified days possess amplified merit. The calendar becomes a portable sacred geography: a household can enter extraordinary religious time even when unable to travel to a distant tirtha.',
        'Name theology makes recitation itself salvific. The movement is comparable to other bhakti Puranas: access to divine grace is relocated from expensive sacrificial competence toward hearing, remembering and uttering sacred names. Yet the same khanda can preserve restrictive social or sectarian rules, so devotional openness and normative hierarchy coexist rather than cancel one another.',
        'The famous classification of Puranas by sattva, rajas and tamas belongs to this later sectarian world. It is evidence for how one Vaishnava redaction ranked competing scriptures, not an ancient neutral taxonomy by which the actual contents of every Purana can be explained.'
      ]}
    ]},
    {title:'Theology',paragraphs:[
      'The Padma Purana’s theology is best described as layered Vaishnava predominance within a plural Purana corpus. Vishnu, Krishna and Rama are exalted in powerful strata, especially later devotional ones, but Brahma at Pushkara, Shiva in numerous myths and pilgrimage centres, and Goddess traditions remain structurally important.',
      'Vaishnava theology often works through accessibility. Pilgrimage, sacred names, fasting, lamps, month observances and stories of ordinary devotees make divine favour available outside the rarefied world of Vedic sacrifice. The Purana repeatedly translates cosmic supremacy into acts that a householder or pilgrim can perform.',
      'Rama and Krishna function differently across blocks. Rama is frequently tied to epic memory, kingship and sacred geography, whereas Krishna traditions can emphasize loving devotion, name and festival. Treating both simply as “avatars of Vishnu” misses the different ritual and emotional worlds generated around them.',
      'Sectarian polemic is also theology. When a passage ranks scriptures, condemns rival practices or defines the proper Vaishnava identity, it is constructing religious boundaries in a competitive medieval environment. Such passages are historically revealing precisely because they are not timeless descriptions of all Hindu traditions.',
      'The text nevertheless contains strategies of inclusion. Other gods can be honoured as forms, servants or powers within a Vishnu-centred cosmos. This hierarchical inclusivism allowed the Purana to preserve older and regional material without requiring redactors to erase every non-Vaishnava sacred centre.'
    ]},
    {title:'Influences and reception',paragraphs:[
      'The Padma’s influence is distributed across ritual, pilgrimage and sectarian traditions rather than concentrated in one famous embedded text. Its mahatmyas supplied scriptural authority to places; its vrata chapters entered digests and household practice; its Vaishnava passages became prooftexts; and its narrative units circulated independently in preaching and vernacular retelling.',
      'Medieval nibandhas are among the most important witnesses to this reception. When legal and ritual compilers quote the Padma, they show that Purana authority was practical: it could determine a fast, gift, impurity rule, pilgrimage merit or calendrical observance. Citation history also lets modern scholars reconstruct forms of the text no longer preserved intact.',
      'Pushkara’s literary sacralization is one regional example. The Padma did not create the physical lake, but by embedding Brahma’s sacrifice, local waters and ritual promises in a Mahapurana it participated in making the site legible within a pan-Indian sacred geography.',
      'Vaishnava reception frequently privileges the Uttara Khanda. Sacred-name theology, Karttika observances and sectarian classifications have been quoted by later devotional communities as Purana authority. A historical study must both acknowledge that authority and identify the late or recension-specific context in which particular passages occur.',
      'Vernacular religious cultures often receive Padma material without the whole Sanskrit book. A story may enter a vrata-katha collection; a pilgrimage narrative may be retold locally; a Rama episode may migrate into regional epic literature. “Influence of the Padma Purana” therefore often means influence of a detachable textual unit.',
      'Modern print culture created a new kind of unity by binding enormous recensions into standardized volumes. That editorial convenience can make the Padma look more fixed than its manuscript history warrants. Digital quotation intensifies the problem when a passage is reproduced without khanda, recension or edition.',
      'For comparative Purana study, the Padma is consequently a model case of canonical persistence through textual plurality. Its importance lies partly in the fact that different communities could inherit recognizably “Padma” scripture while transmitting materially different books.'
    ]},
    {title:'Rites, dharma and social history',paragraphs:[
      'The practical religion of the Padma is extraordinarily broad: pilgrimage, fasts, sacred months, gifts, purity, domestic observance, image worship and recitation appear repeatedly. These prescriptions are valuable for reconstructing medieval religious ideals but should not be read as direct evidence that every Hindu community practised them uniformly.',
      'Vrata literature often makes time the decisive ritual resource. A lunar day, fortnight or month can magnify a simple act such as lighting a lamp, fasting, bathing or naming the deity. This makes religious merit portable and repeatable, helping explain why Purana vrata chapters were so useful to later household manuals.',
      'Pilgrimage chapters perform a parallel operation on space. A bath at Pushkara or another tirtha is tied to specific myths and promised fruits; gifts given there receive multiplied merit; local priests and ritual specialists become part of the sacred economy presupposed by the text.',
      'Dharma chapters encode social hierarchy and household ideals, but the stories often complicate them through exceptional devotees, fallen kings, women exercising religious agency or persons saved through relatively accessible acts. Norm and narrative should therefore be read together.',
      'The economic dimension of merit is also visible. Donation is transformed into a religious transaction whose value depends on donor, recipient, place, time and intention. Such passages illuminate ideals of patronage and religious redistribution even though they cannot by themselves quantify historical wealth or institutional practice.'
    ]},
    {title:'Critical edition',paragraphs:[
      'The Padma Purana has no complete critical edition capable of replacing the major regional recensions with one reconstructed archetype. Given the scale of difference between Bengal and western forms, such an edition would have to represent a branching textual history rather than simply choose the “best” reading chapter by chapter.',
      'Printed editions are consequently primary witnesses. They should be cited by press or editorial lineage, not treated as interchangeable. A translation based on one recension cannot silently be used to prove the absence of a passage from another.',
      'Local textual criticism is often more realistic than attempting to solve the entire Purana at once. A scholar studying Pushkara, Karttika or a Rama block can collate the manuscripts and editions of that unit, compare medieval citations and map its independent reception.',
      'The size of the corpus makes indices and digital search useful, but searchability is not textual criticism. A phrase missing from one electronic text may survive in another recension; conversely a popular online quotation may derive from a late printed interpolation. Edition identification remains essential.'
    ]},
    {title:'Further reading',paragraphs:[
      'Rocher provides the necessary overview of recensions and older scholarship; Hazra is indispensable for chapter-level chronology, ritual materials and medieval citation. Detailed work should then follow the unit being studied rather than treating the entire Padma as one homogeneous source.',
      'Research on pilgrimage should compare Padma mahatmyas with inscriptions, local sthala-puranas and other Purana versions. Research on Vaishnava polemic should compare recension and manuscript distribution before using Uttara Khanda claims as evidence for the whole tradition.'
    ]}
  ],[
    {title:'Ludo Rocher — The Puranas',detail:'Standard survey of Padma Purana recensions, contents and bibliography.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Source-critical analysis of Padma strata, ritual chapters and medieval citations.'}
  ]);

  add('Viṣṇu Purāṇa',[
    {title:'Date of composition',paragraphs:[
      'The Vishnu Purana is often treated as one of the more coherent classical Mahapuranas, but coherence does not imply single authorship. Its six-amsha architecture contains cosmology, genealogy, ritual-dharma, Krishna narrative and eschatology that draw on traditions shared with the Vayu, Brahmanda, Harivamsha, Mahabharata and later Bhagavata. Relative chronology must therefore distinguish the shape of the received redaction from the age of the materials it organizes.',
      'The dynastic lists have attracted chronological argument because they appear to move from mythic kings toward more historically recognizable lineages. Such lists are redactional constructions, however, and can be extended or abbreviated. They are evidence for what a compiler wished to place in sacred history, not a simple king-list whose final name dates every preceding chapter.',
      'The Krishna book likewise reflects a mature Vaishnava narrative tradition. Comparison with the Harivamsha and Brahma Purana demonstrates close textual relationships, but direction of borrowing can vary by passage. The Bhagavata’s much more elaborate Krishna theology belongs to a later stage of reception and should not be retrojected wholesale into Vishnu Purana book five.',
      'A broad first-millennium CE formation with older inherited material and later redaction remains safer than a single century. The advantage of the modern Pathak critical edition is not that it supplies an exact composition date but that it gives chronology a more controlled textual object than older vulgate editions.'
    ]},
    {title:'Structure',paragraphs:[
      'The six amshas create one of the most intelligible architectures in Purana literature. Amsha one establishes creation, cosmic principles and foundational myths; two maps the universe; three organizes manvantaras, Vedic transmission and religious duties; four gives solar and lunar genealogies; five narrates Krishna; six treats Kali-yuga, suffering, dissolution and liberation. The sequence moves from universe to history to divine incarnation and finally beyond history.',
      'This design gives the work a conceptual rhythm. Cosmography is not a detachable encyclopedic chart because it establishes the field in which dynasties and avataras operate. Genealogy is not mere antiquarianism because it places Krishna within the Yadava line. Krishna is not the final stopping point because the sixth book subjects even his world to decline and cosmic dissolution.',
      'Dialogue frames also shape the book. Parashara’s teaching to Maitreya organizes much of the received work. The relatively stable frame gives the Vishnu Purana a stronger sense of continuity than highly accretive tirtha Puranas, even though embedded myths and didactic units have independent histories.',
      'Traditional verse counts often give twenty-three thousand, whereas the extant Vishnu Purana is substantially shorter. The discrepancy should be treated as evidence for changing textual extent or idealized cataloguing rather than solved by assuming all “missing” verses once belonged to the exact six-amsha recension now reconstructed.'
    ],subsections:[
      {title:'Amsha I — creation, Dhruva, Prithu and cosmic kingship',paragraphs:[
        'The first amsha builds a Vaishnava cosmos through creation theory and exemplary narratives. Prakriti, cosmic intellect, elements and Brahma’s creative activity are placed under a supreme Vishnu framework. Theological hierarchy is therefore established before the long genealogical and narrative sequence develops.',
        'Dhruva transforms insult and dynastic marginalization into ascetic devotion. His fixed celestial status literalizes the name “firm” and makes devotion cosmographic: a royal child becomes a cosmic point around which stars turn. The story would later become enormously influential in Bhagavata and vernacular tradition.',
        'Prithu’s relation to the earth similarly joins kingship to cosmic order. The earth becomes productive under legitimate royal authority, and political sovereignty is imagined as the capacity to make the world habitable without simply consuming it.'
      ]},
      {title:'Amsha II — Jambudvipa, planetary order and the scale of the universe',paragraphs:[
        'The second amsha maps continents, oceans, mountains, lokas and celestial motions. For modern readers the temptation is to judge the account as failed physical geography. Within the Purana, however, cosmography serves theological and ritual purposes: it locates Bharata as a privileged field of action and places human history inside a hierarchical, cyclical universe.',
        'Astronomical and geographical traditions are layered. Some lists preserve inherited cosmological schemata; others reflect mathematical or regional knowledge circulating among learned compilers. A critical edition lets one separate variant readings but does not turn symbolic cosmology into one historically uniform scientific model.'
      ]},
      {title:'Amsha III — Manus, Veda, ashrama and religious order',paragraphs:[
        'The third amsha is a bridge between cosmic cycles and social-religious organization. Manvantaras repeat creation under different Manus; accounts of Vedic branches explain the transmission of revelation; duties and rites locate the human person within varna-ashrama order.',
        'This combination is conceptually deliberate. The same universe that cycles through Manus also depends on continuing recitation, teaching, sacrifice, household obligation and renunciation. Religious order is therefore presented as a recurring institution of cosmic continuity rather than a merely local legal code.'
      ]},
      {title:'Amsha IV — solar and lunar dynasties',paragraphs:[
        'The fourth amsha converts sacred genealogy into a bridge between cosmic origins and epic history. Solar kings lead toward Rama traditions; lunar descent moves through Pururavas, Yayati and the Yadu-Puru split toward Kurus and Yadavas. The great epics are thereby inserted into one Purana genealogical map.',
        'Genealogy also authorizes political memory. A ruler’s significance depends not only on deeds but on place in a chain descending from divine and primordial ancestors. Later dynastic additions could therefore be incorporated without changing the logic of the book.'
      ]},
      {title:'Amsha V — Krishna from Vraja to Dvaraka',paragraphs:[
        'The fifth amsha is a sustained Krishna biography: birth under Kamsa, transfer to Vraja, childhood demon encounters, Govardhana, departure for Mathura, Kamsa’s death, Yadava politics and later conflicts. It is far more compact than Bhagavata book ten and often emphasizes the place of Krishna within Vishnu’s avatara theology rather than the later rasa-centred devotional elaboration.',
        'The close relation with the Brahma Purana Kṛṣṇa-caritra makes this book a major laboratory for inter-Purana transmission. Shared sequence and wording show that complete narrative units could move between Purana redactions. Establishing which form is earlier requires textual collation, not merely comparing English summaries.',
        'The book’s placement after genealogy is crucial. Krishna enters not as a timeless deity disconnected from history but as the culminating Yadava figure already prepared by amsha four. Divine incarnation and dynastic history are structurally fused.'
      ]},
      {title:'Amsha VI — Kali-yuga, dissolution and liberation',paragraphs:[
        'The sixth amsha changes the mood of the entire work. Kali-yuga descriptions portray religious and social decline; several forms of pralaya dissolve worlds and identities; teachings on suffering, devotion, knowledge and liberation ask what remains when cosmic and political order fail.',
        'The ending prevents a triumphalist reading of the Krishna narrative. Even the age in which the avatara appeared passes away. Vishnu’s supremacy lies not merely in rescuing one dynasty but in transcending and grounding the cosmic cycles themselves.',
        'This soteriological close also enables later Vedanta traditions to use the Vishnu Purana as theological scripture. Its language of the supreme, self, matter and liberation could be interpreted within distinct schools without reducing the whole Purana to one commentator’s system.'
      ]}
    ]},
    {title:'Contents',paragraphs:[
      'What distinguishes the Vishnu Purana is the degree to which its contents form an argument. Creation produces a hierarchical cosmos; cosmography gives that cosmos space; manvantaras and Vedic transmission give it recurring order; dynasties give it sacred history; Krishna reveals the supreme within that history; Kali and pralaya show the insufficiency of history; liberation turns the reader toward the source beyond it.',
      'The work repeatedly uses narratives to test the relationship between worldly role and divine orientation. Dhruva begins from wounded royal pride but arrives at devotion; Prahlada places Vishnu loyalty above demonic kinship; Prithu models kingly responsibility; Krishna acts inside dynastic politics while embodying a reality larger than them.',
      'The book is therefore simultaneously cosmological, political, devotional and philosophical. Modern summaries that isolate “ten avatars” or “Krishna stories” miss the architecture by which those subjects are made parts of one Vishnu-centred vision.'
    ]},
    {title:'Theology',paragraphs:[
      'Vishnu is presented as the supreme ground of creation, preservation and dissolution, but the Purana expresses this supremacy through several registers. He can be transcendent source, immanent presence, personal deity and avatara. Krishna belongs to this theology without exhausting it.',
      'The doctrine of avatara allows cosmic transcendence to enter narrative time. Varaha, Narasimha, Vamana, Rama and Krishna are not merely heroes collected into a list; their stories demonstrate divine intervention at different points of cosmic and moral crisis.',
      'Other deities remain significant. Brahma creates within the larger order; Shiva appears in major myths and can receive reverence; goddesses and sages possess independent narrative authority. Vaishnava supremacy is therefore commonly articulated through hierarchical inclusion rather than denial of the rest of the Brahmanical pantheon.',
      'Devotion and knowledge are not treated as mutually exclusive. The final books integrate disciplined conduct, understanding of self and cosmos, and orientation toward Vishnu. Later Vedanta commentators could consequently cite the Purana for very different systematic purposes.',
      'The theology of time is equally important. Vishnu is the stability underlying kalpas, manvantaras, dynasties and dissolution. Human kingship, even Krishna’s historical Yadava world, gains meaning only inside that scale.'
    ]},
    {title:'Influences and reception',paragraphs:[
      'The Vishnu Purana became one of the most frequently cited Puranas in Vaishnava theology because its organization makes doctrinal extraction comparatively easy. Medieval Vedanta authors could cite compact formulations about Vishnu, creation, self and liberation without first navigating thousands of tirtha narratives.',
      'Its dynastic lists influenced modern reconstructions of early Indian historical tradition, although responsible historians treat them as layered literary evidence rather than straightforward chronology. Comparison with Vayu, Brahmanda and epic genealogies reveals both a shared archive and deliberate redaction.',
      'The Krishna book contributed to the Sanskrit narrative tradition later elaborated by the Bhagavata and regional Krishna literature. Its relatively concise form is particularly useful for identifying what later texts expand: childhood intimacy, gopi devotion and rasa receive far greater development in the Bhagavata.',
      'The work also influenced other Puranas directly or through a common textual reservoir. The close Krishna parallels in the Brahma Purana are the clearest example, but cosmological and genealogical passages likewise circulate across the Purana corpus.',
      'Commentarial reception placed the work inside sectarian argument. Sri Vaishnava, Madhva and other theologians cite it differently, demonstrating that scriptural authority does not imply interpretive uniformity.',
      'The Pathak critical edition has reshaped modern reception by making variant readings and manuscript evidence more visible. Scholars can now distinguish what is well supported across witnesses from what belongs to narrower recensional branches.'
    ]},
    {title:'Rites, dharma and social history',paragraphs:[
      'The third amsha provides extensive evidence for Brahmanical ideals of Vedic transmission, life stages, household obligation, śrāddha and conduct. Such material belongs to a normative discourse shared with dharmashastra and other Puranas. It should be compared with independent legal and inscriptional evidence before being treated as social description.',
      'Kingship is embedded more widely through Prithu and the dynastic books. Legitimate rule is imagined as protection, productivity and maintenance of dharma, while tyrannical or demonic rule disrupts the relationship between human society and cosmic order.',
      'Pilgrimage is less structurally dominant than in Padma or Brahma, which is itself informative. The Vishnu Purana’s centre of gravity lies more heavily in cosmology, genealogy and theology. Differences among Puranas reveal different models of religious authority rather than one standard “Purana contents” template.',
      'Ascetic and household ideals coexist. The book can authorize social duties while ultimately subordinating every worldly station to liberation. The tension allowed later commentators to read it both as support for ordered religious life and as scripture of transcendent knowledge.'
    ]},
    {title:'Critical edition',paragraphs:[
      'M. M. Pathak’s two-volume critical edition from the Oriental Institute, Vadodara, is a major distinction of Vishnu Purana scholarship. It collates a broad manuscript base and constitutes a Sanskrit text with apparatus rather than simply reprinting one press recension.',
      'A critical edition reconstructs the earliest recoverable common textual form from available witnesses; it does not recover the words of a single historical Vyasa or prove that every constituted verse is earlier than every rejected one. Later readings can remain ancient and culturally important even when they fall outside the reconstructed archetype.',
      'For intertextual work, the apparatus is essential. A passage shared with Brahma, Vayu or Bhagavata must be compared in Sanskrit across witnesses before claims about borrowing are made. One printed parallel can conceal recensional variation in both works.',
      'Translations based on older editions remain valuable, but verse and chapter references should be reconciled with the critical text when precision matters.'
    ]},
    {title:'Further reading',paragraphs:[
      'The Pathak edition should be the textual starting point for any detailed claim. Rocher supplies the broader history of scholarship and Purana comparison, while specialist work on genealogy, Vaishnavism and Krishna narrative should be used for individual amshas.',
      'For theology, the Purana should also be read through the history of its citation by Vedanta authors. Those commentaries are not neutral explanations of original meaning, but they demonstrate how the text became scriptural capital in later doctrinal debate.'
    ]}
  ],[
    {title:'M. M. Pathak, ed. — Critical Edition of the Visnupuranam, 2 vols. (1997–1999)',detail:'Oriental Institute, Vadodara; critical Sanskrit text and apparatus.'},
    {title:'Ludo Rocher — The Puranas',detail:'Survey of Vishnu Purana structure, dating and scholarship.'}
  ]);

  add('Vāyu Purāṇa',[
    {title:'Date of composition',paragraphs:[
      'The Vayu Purana preserves one of the older large Purana traditions, but “old” must be defined carefully. Major cosmological, genealogical and dynastic strata belong to the formative classical Purana world, while individual chapters, pilgrimage dossiers and ritual expansions are later. Its very close relationship with the Brahmanda Purana demonstrates common textual ancestry or extensive exchange rather than one fixed book appearing at a single date.',
      'The Vayu is frequently cited by medieval dharma compilers under the name Vayaviya. These citations provide external evidence for the circulation of ritual, śrāddha, gift and tirtha materials under the title. As with Brahma, matching and nonmatching quotations can reveal how the received recension changed.',
      'The Gaya Mahatmya at the end is a clear late-growth problem. It is absent from some manuscripts, can circulate independently and was already cited by later medieval authorities. Its history therefore differs from the older cosmological and genealogical nucleus even though modern editions number it continuously as chapters 105–112.',
      'The Reva Khanda tradition further demonstrates unstable attribution. A long Narmada mahatmya was printed under Skanda in modern editions despite manuscript evidence associating a Reva Khanda with Vayu. Regional sacred texts could migrate between prestigious Purana titles, making catalogue history an essential part of chronology.'
    ]},
    {title:'Structure',paragraphs:[
      'One important recension divides the Vayu into four padas: Prakriya, Anushanga, Upodghata and Upasamhara, with common Anandashrama numbering of chapters 1–6, 7–64, 65–99 and 100–112. Other editions instead produce two large khandas and redistribute the pada labels. This is not simply a matter of modern typography; it reflects different ways of inheriting the work’s internal architecture.',
      'The Prakriya is a compressed statement of creation and elemental evolution. The long middle of the Purana then expands into kalpas, divine manifestations, geography, manvantaras, sages, genealogies, śrāddha, gifts, music and dynastic history. The Upasamhara moves toward dissolution and concluding sacred geography.',
      'The four-pada terminology is historically significant because similar organization appears in the Brahmanda. Their common structure joins their many verbal and thematic parallels, reinforcing the view that the two texts descend from a closely related Purana complex.',
      'The Vayu also possesses unusually extensive genealogical organization. Sages, Prajapatis, Vedic teachers, solar and lunar kings and later dynasties are woven into one temporal scaffold. The work’s historical importance derives partly from this continuity, even though the lists are redactional rather than archival records.',
      'Gaya at the end functions like an attached local book. The transition from cosmic and dynastic materials to a concentrated pilgrimage guide shows the same mechanism visible in Brahma’s Gautami: a self-contained sacred geography is naturalized as the conclusion of an older Purana.'
    ],subsections:[
      {title:'Prakriya — the compressed cosmological opening',paragraphs:[
        'The opening chapters describe origin, dissolution and re-creation through categories shared with Samkhya-influenced Purana cosmology. Mahat, elements and differentiated beings supply the metaphysical mechanics by which an unmanifest state becomes a structured universe.',
        'The brevity of this pada is important. It operates as a theoretical preface, while later padas repeatedly return to creation through specific kalpas, gods and genealogies. “Creation” in the Vayu is therefore both an abstract process and a series of narrated cosmic histories.'
      ]},
      {title:'The long middle — kalpas, Rudra, geography and lineages',paragraphs:[
        'The Vayu is particularly rich in kalpa narratives and Shaiva material. Rudra’s manifestations, Daksha’s sacrifice, hymns and divine genealogies coexist with descriptions of continents, mountains, rivers, planetary motions and manvantaras. Shaiva emphasis grows inside a broadly Purana cosmological framework rather than replacing it.',
        'The text then devotes exceptional attention to ancestors, sages and the transmission of Vedic knowledge. Lists of teachers and lineages are not decorative: they represent cultural memory as a chain of authorized transmission parallel to royal genealogy.'
      ]},
      {title:'Gaya Mahatmya — pilgrimage as an appended conclusion',paragraphs:[
        'The final Gaya chapters organize one of North India’s most important ancestral pilgrimage centres. Myth, funeral obligation and geography converge: the place is valuable especially because rites performed there are said to affect the fate of ancestors.',
        'Its variable manuscript presence demonstrates that ritual centrality and textual originality are different questions. A later attached mahatmya can become one of the most practically influential parts of a Purana.'
      ]}
    ]},
    {title:'Contents',paragraphs:[
      'The Vayu Purana is unusually useful for seeing the older encyclopedic Purana before vast regional mahatmyas dominate the genre. Its centre of gravity lies in creation, cosmic cycles, geography, genealogies, sages, ritual and dynastic history. Later pilgrimage additions then show how this classical framework remained open to regional expansion.'
    ],subsections:[
      {title:'Creation and kalpas',paragraphs:[
        'Creation is presented through both philosophical categories and mythic episodes. The transition from unmanifest principles to elements and embodied beings uses vocabulary shared with Samkhya, while specific kalpas explain recurring divine forms and events. Cyclical time permits repeated creation without requiring each narrative to be the unique beginning of the universe.',
        'The many kalpas also create room for apparently contradictory myths. A deity may arise differently in different cosmic cycles because the Purana does not assume one linear creation story. Variation can be cosmologically licensed rather than editorially embarrassing.'
      ]},
      {title:'Rudra and Shaiva myth within an older Purana frame',paragraphs:[
        'The Vayu contains substantial Rudra-Shiva material, including manifestations, praise and the Daksha-sacrifice complex. This is one reason the text is sometimes connected with Shaiva canonical identity and why lists can alternate Vayu and Shiva Puranas.',
        'Yet the text is not simply a later sectarian Shiva Purana. Its genealogical and cosmological architecture has a different history, and many chapters preserve broadly Brahmanical material in which Vishnu, Brahma, ancestors and sages remain indispensable.'
      ]},
      {title:'Cosmography and astronomy',paragraphs:[
        'Descriptions of Jambudvipa, mountains, oceans, worlds, planetary movements and time units create the spatial and temporal framework in which human action takes place. The text combines inherited mythic cosmography with learned observation and calendrical schemes.',
        'For intellectual history these chapters should be compared with Jyotisha and other Purana cosmologies rather than assessed only against modern astronomy. Their significance lies in how cosmological knowledge was organized and authorized.'
      ]},
      {title:'Pitrs, sraddha and ancestral worlds',paragraphs:[
        'The Vayu’s extensive account of Pitrs is one of its distinctive features. Classes of ancestors, their origins, offerings and relationships to descendants create a complex theology of lineage that explains why śrāddha is more than family remembrance.',
        'Ancestral rites link domestic religion to cosmology: food and water offered by descendants affect beings located in an invisible but structured ancestral order. The later Gaya Mahatmya spatializes the same system by identifying a place where such rites possess exceptional efficacy.'
      ]},
      {title:'Sages, Vedic branches and authorized transmission',paragraphs:[
        'Lists of rishis and Vedic teachers create an intellectual genealogy parallel to the royal one. Knowledge must descend through persons and schools, and the Purana locates its own narration inside that broader culture of transmission.',
        'These sections are especially useful for comparing Purana accounts of Veda division. Differences among texts reveal how later scholastic communities mapped the history of revelation onto their own inherited schools.'
      ]},
      {title:'Solar, lunar and later dynasties',paragraphs:[
        'The dynastic chapters move from primordial ancestors through solar and lunar lines toward epic and later kings. Similar lists in Vishnu, Brahmanda and Matsya permit detailed comparison of shared sources and redactional additions.',
        'Modern historians once mined these lists aggressively for chronology. They remain valuable, but only when treated as stratified literary tradition. Genealogical sequence can preserve memory while also serving theological and political aims.'
      ]},
      {title:'Music, ritual and encyclopedic knowledge',paragraphs:[
        'The Vayu includes materials on music and other learned subjects that demonstrate the breadth of Purana authority. Such chapters are not random trivia if read historically: they show a genre expanding to encompass systems of cultivated knowledge alongside myth and dharma.',
        'Technical passages should be compared with specialist shastras to determine whether the Purana summarizes, adapts or preserves independent traditions.'
      ]},
      {title:'Gaya and the transformation of genealogy into pilgrimage',paragraphs:[
        'The final Gaya material gives ritual geography to the Purana’s long concern with ancestors. The pilgrim who performs rites at Gaya enters a landscape already explained by myths of gods, demons and sacred stones, and the place promises unusually powerful effects for the dead.',
        'This is structurally elegant even if the mahatmya is secondary: the Purana’s genealogical concern with descent culminates in a pilgrimage devoted to obligations toward one’s own descent line.'
      ]}
    ]},
    {title:'Theology',paragraphs:[
      'The Vayu combines broad Purana cosmology with strong Shaiva emphasis. Rudra can be exalted within creation cycles and mythic crises, but Vishnu, Brahma, Devi and ancestral powers remain integrated into the same cosmos. The theology is older and more layered than the later seven-samhita Shiva Purana.',
      'Cosmic cyclicity is perhaps the most pervasive theological principle. Gods, Manus, sages and dynasties arise within repeating kalpas, while the supreme order survives their succession. This allows multiple divine origin stories to coexist without requiring a single linear creed.',
      'The ancestor theology gives family continuity a cosmic dimension. The dead occupy structured classes and depend on ritual exchange with descendants, making lineage itself a religious category.',
      'Shaiva devotion does not eliminate ritual pluralism. Hymns, gifts, śrāddha, pilgrimage and Vedic transmission all remain valid modes within the text’s sacred order.'
    ]},
    {title:'Influences and reception',paragraphs:[
      'The Vayu’s close relation with the Brahmanda Purana makes it central to modern reconstruction of early Purana textual history. Large parallel sequences allow scholars to infer a shared textual complex and to study how two canonical titles diverged through redaction.',
      'Medieval dharma writers cite the Vayaviya frequently for śrāddha, gift, tirtha and ashrama rules. This practical citation history shows that the text functioned as normative authority rather than merely mythology.',
      'Its genealogies contributed to later Purana and historical traditions. Because they preserve variants not found elsewhere, comparison among Vayu, Vishnu, Brahmanda and Matsya remains essential for reconstructing the evolution of dynastic memory.',
      'The Gaya Mahatmya influenced one of the major ancestral pilgrimage traditions of South Asia. Its separate circulation demonstrates how a local ritual scripture could acquire Mahapurana authority while retaining independent life.',
      'The Reva Khanda attribution problem has become a modern lesson in print-era canon formation. Once a press assigns a regional mahatmya to a famous Purana, subsequent editions can reproduce the attribution even when manuscripts tell a more complicated story.',
      'The alternating place of Vayu and Shiva in lists of eighteen has also shaped canonical reception. Rather than asking which list is “wrong,” the variation should be read as evidence that Purana canons were themselves historically negotiated.'
    ]},
    {title:'Rites, dharma and social history',paragraphs:[
      'Śrāddha is central enough that the Vayu became a major source for later ritual digests. The text classifies ancestors, recipients, times and offerings, creating a normative system whose history can be traced through quotation.',
      'Dāna chapters organize religious redistribution by specifying worthy gifts, recipients and promised fruits. Such prescriptions reveal ideals of patronage and Brahmanical economy, not direct records of every historical transaction.',
      'Ashrama and dharma materials locate individuals within life-stage and social categories while the Purana’s stories repeatedly show those categories under pressure from kingship, asceticism and divine intervention.',
      'Gaya pilgrimage turns domestic ancestral duty into long-distance ritual. The text thereby links household lineage to a regional priestly and pilgrimage economy, a connection that can be compared with inscriptions and later practice.'
    ]},
    {title:'Critical edition',paragraphs:[
      'The Vayu has several major printed recensions whose division differs significantly. The Anandashrama and Vangavasi four-pada arrangement cannot simply be equated chapter for chapter with the two-part Asiatic Society or Venkateshvara forms.',
      'A full modern stemmatic edition remains a desideratum. Comparative work with the Brahmanda is especially important because parallel passages can help identify older readings while also revealing independent revision.',
      'The Gaya and Reva mahatmya problems show why large attached units should be edited independently before being forced into a host text. Manuscript title, colophon, sequence and regional provenance all matter.',
      'Tagare’s English translation and older Sanskrit prints remain valuable access points, but historical claims should identify which recension and chapter numbering they follow.'
    ]},
    {title:'Further reading',paragraphs:[
      'Rocher and Hazra provide the essential history of the title, recensions and ritual citations. Detailed structural study should compare the Vayu directly with Brahmanda rather than treating either as an isolated work.',
      'Research on Gaya or Reva requires specialist pilgrimage-text scholarship because the transmission of those mahatmyas is partly independent of the main Purana.'
    ]}
  ],[
    {title:'G. V. Tagare — The Vayu Purana, English translation',detail:'Translation with a detailed introduction to recensions, four padas and relation to Brahmanda.'},
    {title:'Ludo Rocher — The Puranas',detail:'Standard textual-history survey.'},
    {title:'R. C. Hazra — Studies in the Puranic Records',detail:'Important for Vayaviya citations and ritual chronology.'}
  ]);

  add('Śiva Purāṇa',[
    {title:'Date of composition',paragraphs:[
      'The Shiva Purana has one of the most complicated relationships between canonical title, traditional self-description and extant manuscripts. The text repeatedly claims a much larger twelve-samhita form, traditionally one hundred thousand verses abridged to twenty-four thousand, yet no surviving manuscript tradition preserves those twelve samhitas as a complete ancient book. Modern recensions are later and materially different.',
      'Benjamin Fleming’s study of the Sanskrit manuscripts and an eighteenth-century Persian translation demonstrates just how unstable the received corpus is. The Vangavasi Press and Venkateshvara Press editions share only three samhita titles—Vidyeshvara, Kailasa and Vayaviya—while other samhitas in the seven-part Venkateshvara recension draw heavily on material grouped differently in the six-samhita Vangavasi form.',
      'Hazra placed important parts of the modern seven-samhita redaction, including Rudra, Shatarudra and Kotirudra materials, in the later medieval period, with substantial dependence on an older Jnana Samhita tradition. The Shiva Purana is consequently less useful as evidence for the earliest history of Shaivism than older Vayu, Linga, epic and Agamic sources.',
      'The eighteenth-century Persian translation is a powerful terminus for one North Indian configuration of the text. It also proves that the Purana was actively transmitted across linguistic and courtly environments, where translators and patrons encountered a Shiva scripture not necessarily identical to modern standardized editions.',
      'Dating must therefore be performed at samhita and chapter level. The marriage of Shiva and Parvati, the birth of Skanda or the linga myth may be ancient stories, but the prose or verse form in a particular Shiva Purana samhita can be medieval. Mythic antiquity and textual antiquity are distinct.'
    ]},
    {title:'Structure',paragraphs:[
      'The widely circulated Venkateshvara-style recension contains seven samhitas: Vidyeshvara, Rudra, Shatarudra, Kotirudra, Uma, Kailasa and Vayaviya. A common chapter count gives 25, 197, 42, 43, 51, 23 and 76 chapters respectively, with the enormous Rudra Samhita internally divided into Srishti, Sati, Parvati, Kumara and Yuddha khandas. This seven-part architecture should be described as one major received recension, not as the uncontested original form.',
      'The Vangavasi recension organizes much overlapping material into six samhitas and includes a Jnana Samhita from which later sections appear to draw. The difference is fundamental: readers of two printed “Shiva Puranas” can encounter different book names, ordering and redaction.',
      'The Vidyeshvara Samhita acts as a ritual-theological portal, emphasizing the linga, worship, sacred recitation and the authority of the Purana. Rudra Samhita then supplies the long narrative biography of Shiva’s cosmic emergence, Sati, Parvati, Skanda and battles. Later samhitas multiply manifestations, ritual instructions, cosmology and philosophical teaching.',
      'Vayaviya Samhita is particularly important because its title and content intersect the older Vayaviya/Vayu tradition. Canonical lists that alternate Shiva and Vayu and the presence of Vayaviya material inside Shiva demonstrate how later Shaiva compilers inherited and reorganized older Purana authority.',
      'The book’s own twelve-samhita memory should be preserved as evidence for how the tradition imagined textual history. It may reflect an earlier or idealized larger corpus, but absence from extant manuscripts prevents reconstructing those lost samhitas simply from the self-description.'
    ],subsections:[
      {title:'Vidyeshvara Samhita — linga, recitation and ritual authority',paragraphs:[
        'Vidyeshvara introduces Shiva’s symbolic and ritual presence through the linga, temple, mantra, worship and merit of hearing scripture. It teaches the reader not only who Shiva is but how Purana recitation, image and linga worship create access to him.',
        'The famous contest of Brahma and Vishnu before an immeasurable fiery linga makes the aniconic sign into a theological argument: neither creator nor preserver can reach the limit of the reality manifested as Shiva. The story simultaneously explains a ritual object and establishes hierarchy.'
      ]},
      {title:'Rudra Samhita — a narrative life of Shiva',paragraphs:[
        'Rudra is the narrative centre of the seven-samhita recension. Its Srishti Khanda establishes creation and divine hierarchy; Sati Khanda narrates Daksha, Sati and the broken sacrifice; Parvati Khanda follows rebirth, austerity, courtship and marriage; Kumara Khanda moves toward Skanda; Yuddha Khanda assembles major demon conflicts.',
        'The resulting sequence resembles a divine biography, but its component myths circulated long before this arrangement. The redactor creates coherence by making separate Shaiva cycles stages in one cosmic family history.'
      ]},
      {title:'Shatarudra and Kotirudra — multiplying Shiva',paragraphs:[
        'These samhitas emphasize the many forms, manifestations and sacred presences of Shiva. The numerical language of hundred and crore dramatizes inexhaustibility rather than functioning as a literal census of independent gods.',
        'Their relation to the Jnana Samhita of another recension is crucial for textual history. Similar material under different structural labels reveals recensional reorganization rather than independent composition of every chapter.'
      ]},
      {title:'Uma and Kailasa — Goddess, household and sacred mountain',paragraphs:[
        'Uma Samhita brings Goddess-centred, ritual and cosmological materials into the Shaiva frame, while Kailasa uses Shiva’s mountain abode as a setting for teaching and myth. The divine household—Shiva, Parvati, sons and attendants—becomes a model through which ascetic and domestic values can be negotiated.',
        'Kailasa is not simply scenery. The mountain represents a vertical sacred geography in which remote ascetic transcendence and intimate divine family life occupy the same place.'
      ]},
      {title:'Vayaviya Samhita — cosmology, yoga and inherited Purana authority',paragraphs:[
        'Vayaviya contains broad cosmological, theological and soteriological teaching associated with the wind-god’s authority. Its presence links the Shiva Purana to an older Vayaviya textual world while placing that inheritance inside an explicitly Shaiva canon.',
        'The section develops knowledge, yoga and liberation alongside myth and ritual. It therefore provides a philosophical close comparable in function, though not textual history, to the moksha endings of several other Mahapuranas.'
      ]}
    ]},
    {title:'Contents',paragraphs:[
      'The seven-samhita Shiva Purana can be read as an extended attempt to make every major dimension of Brahmanical religious life Shaiva: creation begins from Shiva; cosmic conflict reveals Shiva; marriage and family display Shiva; linga and temple localize Shiva; pilgrimage maps Shiva; mantra and vrata worship Shiva; yoga and knowledge return the practitioner to Shiva. The text is encyclopedic, but its encyclopedism has a consistent sectarian centre.'
    ],subsections:[
      {title:'The fiery linga and the problem of divine supremacy',paragraphs:[
        'The Brahma-Vishnu contest before the infinite linga is one of the Purana’s most influential myths. Its theological force lies in scale: both gods can travel indefinitely yet fail to discover the beginning or end of Shiva’s manifestation. Knowledge of supremacy therefore comes through failure of ordinary divine perception.',
        'The myth also legitimates linga worship by making the ritual sign identical with an immeasurable cosmic reality. A seemingly simple stone form is not a reduced image of Shiva; it is a marker of what cannot be contained in anthropomorphic form.',
        'Later Shaiva ritual traditions could therefore use the episode both polemically and contemplatively: polemically to place Shiva above Brahma and Vishnu, contemplatively to explain why the linga is the appropriate focus for an infinite deity.'
      ]},
      {title:'Daksha, Sati and the critique of sacrifice without Shiva',paragraphs:[
        'The Daksha cycle turns Vedic sacrifice into a theological crisis. Daksha’s refusal to honour Shiva produces Sati’s death and the violent destruction of the rite. The point is not simply sectarian revenge; the narrative argues that sacrificial order becomes incomplete when it excludes the ascetic deity who stands partly outside that order.',
        'Sati’s self-destruction and rebirth as Parvati permit the divine marriage to be retold as a cosmic reconciliation. Shiva’s dangerous exteriority is not abolished; it is brought into relation with household, kinship and generative power.',
        'The episode became one of the foundational myths through which Shaiva traditions negotiated the relationship between Vedic Brahmanical ritual and ascetic devotion.'
      ]},
      {title:'Parvati’s tapas and divine marriage',paragraphs:[
        'Parvati’s austerity gives the Goddess active theological agency. She does not merely wait to become Shiva’s wife; she undertakes disciplined tapas capable of compelling recognition from the supreme ascetic. The courtship dramatizes the meeting of renunciation and desire at the level of divinity.',
        'Disguises and tests explore whether the devotee can recognize Shiva beneath socially unsettling forms. Parvati’s persistence makes her both ideal devotee and divine power, preparing later Shaiva-Shakta interpretations of the inseparability of Shiva and Shakti.',
        'The wedding then reverses the scandal of the Daksha episode: divine asceticism is ritually incorporated into cosmic household order, while retaining an entourage of ghosts, ganas and marginal beings that prevents Shiva from becoming merely conventional.'
      ]},
      {title:'Skanda, Ganesha and the divine family',paragraphs:[
        'The births and rivalries of Shiva’s sons make the divine household a narrative field for theology. Skanda embodies martial power needed against demonic threats; Ganesha becomes remover of obstacles and guardian of beginnings. Their stories connect cosmic conflict with everyday ritual roles.',
        'Different Puranas narrate their births differently. The Shiva Purana’s versions should therefore be compared with Skanda, Matsya, Brahmavaivarta and regional traditions. Variation reveals sectarian and ritual priorities rather than one recoverable biographical fact about a god.'
      ]},
      {title:'Demon wars and the limits of divine boon',paragraphs:[
        'Tripura, Jalandhara, Andhaka and other conflicts repeatedly begin with ascetic power converted into dangerous sovereignty. Demons obtain boons through tapas and then destabilize the world; Shiva’s intervention restores order without denying the efficacy of the austerity that created the crisis.',
        'The pattern reveals a Purana theology of power: tapas, boon and divine favour are real forces, but power detached from dharma produces the conditions for its own destruction.'
      ]},
      {title:'Linga, temple, mantra and everyday Shaiva practice',paragraphs:[
        'Ritual chapters translate mythic supremacy into repeated practice. Linga installation, bathing, flowers, ash, rudraksha, mantra, fasting and temple worship allow a devotee to participate in the cosmic Shiva disclosed by narrative.',
        'The text often assigns extraordinary fruits to relatively accessible acts, a Purana strategy that broadens participation beyond elaborate Vedic sacrifice. Hearing the Shiva Purana itself becomes a ritual of devotion and merit.',
        'These prescriptions overlap with Agama and later Shaiva ritual manuals. Their historical value is greatest when compared with those specialist traditions and with temple inscriptions.'
      ]},
      {title:'Yoga, knowledge and liberation',paragraphs:[
        'Later samhitas move from external worship toward internal realization. Mantra and meditation, the relation of Shiva and Shakti, knowledge of the self and yogic discipline are treated as paths beyond ordinary merit.',
        'This does not render temple worship inferior in a simple hierarchy. Purana synthesis often presents external and internal forms as stages or mutually supporting modes. The same Shiva can be worshipped as linga and realized as the consciousness beyond form.'
      ]}
    ]},
    {title:'Theology',paragraphs:[
      'The central theology is Shaiva supremacy, but its forms vary by samhita. Shiva is infinite linga, creator, destroyer, householder, ascetic, yogin, teacher and gracious Lord. These roles solve different religious problems and should not be reduced to one abstract definition.',
      'Shakti is indispensable. Sati and Parvati are not accessories to Shiva’s identity; without Shakti, cosmic generation and divine action are incomplete. Later sections can move toward stronger metaphysical language of inseparability.',
      'The text also develops hierarchical inclusion. Vishnu and Brahma are powerful and often revered but receive their ultimate place within a Shiva-centred order. Polemical hierarchy coexists with narratives of cooperation and mutual devotion.',
      'The linga theology bridges form and formlessness. It is a concrete ritual focus whose mythic meaning is precisely that the divine cannot be bounded. This made it an exceptionally durable Shaiva symbol across temple and domestic contexts.',
      'Grace and devotion sit beside tapas and knowledge. Shiva can be reached through severe asceticism, simple worship, mantra, hearing sacred narrative or yogic realization. The plurality of paths broadens the social and ritual reach of the Purana.'
    ]},
    {title:'Influences and reception',paragraphs:[
      'The Shiva Purana became one of the most accessible narrative compendia of later Shaivism. Stories of the fiery linga, Sati, Parvati, Skanda, Ganesha and major demon conflicts circulate far beyond readers who know the Sanskrit book.',
      'Its later date means it often records mature Shaiva synthesis rather than creating the traditions it narrates. Comparisons with early inscriptions, epic Shaivism, Pashupata sources and Agamas are therefore necessary to distinguish reception from origin.',
      'The seven-samhita recension shaped modern Hindu publishing and English translation so strongly that many readers assume it is the only Shiva Purana. Fleming’s manuscript work demonstrates that this apparent stability is partly a product of print standardization.',
      'The Persian translation reveals a different reception environment: Sanskrit Shaiva scripture entered an eighteenth-century Indo-Persian intellectual world. Such translation is evidence for cross-cultural curiosity and for the textual form available to its translators.',
      'Temple preaching and katha traditions detach narrative units from their samhita context. The marriage of Shiva, Ganesha’s birth or Tripura can function as independent religious stories while continuing to carry Purana authority.',
      'The canonical rivalry with Vayu is itself a reception history. Lists that substitute one for the other reveal changing definitions of what counted as a Mahapurana and the growing prestige of an explicitly Shiva-titled scripture.',
      'Modern sectarian apologetics sometimes project the Shiva Purana’s hierarchy back into Vedic religion. A historical reading instead values the text as evidence for how later medieval Shaivas organized older myth, ritual and philosophy into a comprehensive Purana world.'
    ]},
    {title:'Rites, dharma and social history',paragraphs:[
      'Linga worship is the ritual centre of the received Purana. Installation, bathing, offerings, mantra and circumambulation make the cosmic sign part of everyday religious practice. Temple and domestic worship are thus connected by a common theology of presence.',
      'Ash and rudraksha turn the devotee’s body into a Shaiva ritual surface. Wearing, marking and reciting are relatively portable practices that allow identity to extend beyond formal temple occasions.',
      'Vratas and sacred days organize time around Shiva. Fasting, night vigil and recitation can produce merit, purification or liberation, demonstrating the Purana’s tendency to make intense devotional practice accessible through the calendar.',
      'Marriage and household narratives coexist with ascetic ideals. Shiva’s divine family legitimates household devotion even while the god remains archetypal yogin. The Purana therefore negotiates a tension central to Shaivism rather than choosing one social path absolutely.',
      'Social prescriptions elsewhere remain Brahmanical and hierarchical. Devotional accessibility should not be mistaken for the disappearance of varna, gender or ritual status from the text’s normative world.',
      'Temple, pilgrimage and recitation imply institutional settings—priests, patrons, storytellers and audiences. These can be compared with inscriptions and regional Shaiva history, but the Purana itself remains prescriptive literature rather than direct institutional documentation.'
    ]},
    {title:'Critical edition',paragraphs:[
      'There is no single critical edition that resolves the relation among the major Shiva Purana recensions. Modern readers must begin by identifying whether an edition follows the Venkateshvara seven-samhita form, the Vangavasi six-samhita form or another manuscript lineage.',
      'Fleming’s recent manuscript and Persian-translation research is therefore unusually important. It shows that samhita names and boundaries were reorganized and that only part of the modern architecture is shared across recensions.',
      'The traditional twelve-samhita claim should be printed as part of the text’s self-understanding, not used to invent the contents of lost books. No extant complete manuscript substantiates the ideal twelvefold corpus.',
      'Future critical work must edit samhitas separately and map reuse across them. The relation of Jnana Samhita to Rudra, Shatarudra and Kotirudra is a prime example of why whole-book assumptions can obscure textual genealogy.',
      'Translations based on one printed recension should name that recension. “Complete Shiva Purana” is otherwise misleading because completeness is always relative to a particular received form.'
    ]},
    {title:'Further reading',paragraphs:[
      'Benjamin Fleming’s manuscript study should now accompany Rocher and Hazra as a starting point because it updates the older print-based picture with recensional and Persian evidence.',
      'For religious history, the Shiva Purana should be read beside Linga Purana, Vayu, Skandapurana, epic Shaiva materials and Agamas. Those comparisons show what is inherited, what is reorganized and what is distinctive to the later Purana redactions.'
    ]}
  ],[
    {title:'Benjamin Fleming — Persian Translation of Sivapurana and Eighteenth-Century North Indian Saivism',detail:'Recent manuscript-based study of the competing Shiva Purana recensions and Persian translation.',url:'https://academic.oup.com/jhs/article/18/1/31/7991035'},
    {title:'R. C. Hazra — Studies in the Puranic Records',detail:'Important for chronology of later Shiva Purana samhitas.'},
    {title:'Ludo Rocher — The Puranas',detail:'Survey of editions, contents and canonical variation.'}
  ]);
})();