(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function sec(name,title){const e=D['Purāṇa:'+name]||D[name];if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}

  // NĀRADĪYA — strengthen theology, social history and structural analysis.
  paras('Nāradīya Purāṇa','Structure',[
    'The distribution of materials across the two bhāgas is also evidence for compilation. Catalogue passages, devotional instruction, tīrtha-māhātmyas and vrata sequences often behave like internally coherent dossiers. Their boundaries should be recorded rather than smoothed away, because a future manuscript study may show that some circulated independently before being placed within the Nāradīya framework.'
  ]);
  paras('Nāradīya Purāṇa','Theology',[
    'The Purāṇa also participates in a theology of scriptural plurality. By summarizing, ranking or recommending other Purāṇas and sacred works, it does not imagine revelation as exhausted by its own pages. Authority is distributed across a canon whose members can be read as mutually reinforcing witnesses to Viṣṇu, dharma, pilgrimage and devotion. This is historically important for understanding how medieval Hindu communities conceptualized a library of sacred texts rather than a single closed canon.',
    'The prominence of nāma, hearing and recitation gives sound a distinctive theological status. A divine name is not merely a linguistic label for an absent deity; recitation is represented as a mode of presence and religious efficacy. This helps explain why Purāṇic bhakti could travel beyond temple institutions through portable practices of chanting, storytelling and domestic reading.'
  ]);
  paras('Nāradīya Purāṇa','Rites, dharma and social history',[
    'The vrata materials deserve analysis as a technology of religious scheduling. Observances tied to ekādaśī, lunar phases, months and festival days repeatedly coordinate fasting, wakefulness, bathing, image worship, fire offering, recitation and gift. What appears as a list of pious acts is actually an integrated system for making the household calendar religiously productive.',
    'These rites distribute agency across gender, kinship and wealth. Some observances require substantial gifts and priestly participation; others rely primarily on abstinence, vigil, recitation or simple offerings. The range suggests a repertoire capable of addressing patrons with very different resources while still maintaining hierarchies of merit and ritual expertise.',
    'Pilgrimage creates another social field. A māhātmya presupposes roads, lodging, local custodians, Brahmins, temples and ritual economies without describing them as institutions in a modern administrative sense. When combined with inscriptions and regional histories, the text can therefore contribute to reconstruction of the infrastructure behind sacred travel.',
    'Dharma in the Nāradīya should not be reduced to a rigid legal code. Normative teaching is intertwined with bhakti and merit: ethical conduct, ritual correctness, gift, devotion and sacred narration form overlapping modes of a properly ordered religious life. The text is especially revealing for the medieval expansion of dharma from juridical rule into devotional habit.'
  ]);

  // BHĀGAVATA — make social/ritual history and contents as deep as the theological sections.
  sub('Bhāgavata Purāṇa','Contents','Books Seven and Eleven as normative counterweights',[
    'The seventh skandha is not only the story of Prahlāda. After the Nṛsiṃha cycle, Nārada instructs Yudhiṣṭhira on general virtues, varṇa and āśrama duties, household life and renunciation. The placement is deliberate: radical devotion is followed by a sustained attempt to explain how ordinary social obligations can be situated within bhāgavata-dharma.',
    'The eleventh skandha provides a different normative horizon. The Uddhava teaching treats detachment, yoga, knowledge, devotion and the discernment appropriate to a world in which Kṛṣṇa is about to withdraw. Read together, Books Seven and Eleven prevent the Purāṇa from being characterized as a text of emotional Kṛṣṇa narrative alone; it is also an extended reflection on how devotional realization reorganizes social and ascetic disciplines.',
    'The dialogue between these books is pedagogically useful. Book Seven embeds bhakti within the social order, while Book Eleven repeatedly exposes the provisional character of worldly identities. The Purāṇa can therefore affirm dharma without making social classification the final measure of spiritual attainment.'
  ]);
  paras('Bhāgavata Purāṇa','Rites, dharma and social history',[
    'The Bhāgavata contains substantial normative material even though later reception often emphasizes its theology of ecstatic devotion. Skandha 7.11–15 discusses common ethical virtues, varṇa and āśrama duties, the responsibilities of householders, renunciatory ideals and paths associated with ancestors and gods. These chapters must be read alongside Dharmaśāstra, but their placement after Prahlāda reframes social duty through devotion to Bhagavān.',
    'A particularly important feature is the distinction between social designation and observable qualities in the discussion of varṇa. The passage became significant in later debate because it permits interpreters to ask whether conduct and characteristics can complicate birth-based classification. A research article should present the Sanskrit context and commentarial interpretations rather than turning one verse into a modern slogan in either direction.',
    'Household religion throughout the Purāṇa includes hospitality, gift, vows, remembrance, temple or image worship, pilgrimage and the hearing of sacred narrative. Śravaṇa and kīrtana are socially consequential practices: they create audiences, teachers, reciters and communities in which textual transmission itself becomes ritual action.',
    'Death is another recurring social horizon. Parīkṣit’s seven-day hearing frame asks what a person should do when death is certain; Ajāmila dramatizes the salvific significance attributed to the divine name; the Yādava destruction and Kṛṣṇa’s withdrawal place collective catastrophe inside a theology of impermanence. These narratives helped make recitation at moments of crisis a major feature of later Bhagavata reception.',
    'Kingship is treated ambivalently. Dhruva, Pṛthu, Ambarīṣa, Parīkṣit and other royal figures can embody devotion and protection of dharma, yet political power is repeatedly subordinated to spiritual realization. The Purāṇa therefore participates in Brahmanical theories of righteous kingship while denying that sovereignty itself constitutes the highest human end.',
    'The social world of the text includes Brahmins, rulers, householders, renouncers, women, pastoral communities, forest ascetics and figures represented as socially fallen or marginal. Their narrative treatment does not erase hierarchy, but it repeatedly makes bhakti available across boundaries that ritual status alone cannot explain. The historical task is to analyze this tension rather than describing the text simply as either egalitarian or conservative.'
  ]);

  // AGNI — strengthen theology and organization.
  paras('Agni Purāṇa','Structure',[
    'The sequence of technical dossiers is itself worth studying. Architecture and town planning, cosmography, tīrtha, royal duties, expiation, Śaiva prayer, coronation, nīti, physiognomy, weaponry, gems, medicine, metrics and poetics appear in recognizable clusters. The work is therefore not random miscellany: local runs of chapters preserve disciplinary coherence even when the encyclopedia as a whole is heterogeneous.'
  ]);
  paras('Agni Purāṇa','Theology',[
    'The encyclopedic form produces a theology of knowledge. Because Agni transmits instruction ultimately situated within a sacred conversational frame, disciplines that modern curricula would separate as architecture, statecraft, poetics, medicine and iconography are incorporated into a religiously ordered universe. Knowledge becomes one aspect of dharma rather than a secular domain outside revelation.',
    'Sectarian identity is correspondingly diffuse. Vaiṣṇava avatāras, Śaiva prayers, goddess traditions and Smārta-style ritual materials coexist. Rather than assuming theological incoherence, it is more productive to ask how compilers could regard multiple cults as legitimate while locating them within a Brahmanical cosmology and ritual hierarchy.',
    'Image and temple chapters give this pluralism a concrete institutional form. Different deities may receive specialized iconographic and ritual treatment, yet the underlying logic of consecration, sacred measurement and worship allows them to inhabit a shared technical system. The Purāṇa thereby documents a world in which sectarian devotion and common ritual technologies reinforced one another.',
    'The text’s discussions of yoga and liberation place encyclopedic worldly knowledge inside a larger soteriological horizon. Political skill, medicine or architecture can sustain ordered life, but they do not by themselves terminate saṃsāra. The presence of mokṣa-oriented teaching prevents the encyclopedia from becoming merely a manual of practical arts.'
  ]);

  // SKANDA — strengthen theological and social-historical argument.
  paras('Skanda Purāṇa','Theology',[
    'In the early recension, Pāśupata identity is more than a label for generalized devotion to Śiva. Ascetic authority, sacred geography and mythic genealogy work together to establish communities of transmission. The text’s theology is therefore ecclesiological in a broad sense: it explains not only who Śiva is but where legitimate Śaiva power is located and through whom it is mediated.',
    'Vārāṇasī is theological because liberation is spatialized. Śiva’s relation to the city makes death, residence, pilgrimage and ritual action there qualitatively different from identical acts elsewhere. This is one of the strongest examples in Sanskrit literature of soteriology being attached to urban sacred geography.',
    'The later Khaṇḍas modify this picture by allowing local manifestations, goddesses, Vaiṣṇava sites and regional myths to enter a Skanda-labeled universe. Their pluralism does not negate the older Śaiva core; it demonstrates how Purāṇic authority could be expanded through aggregation.'
  ]);
  paras('Skanda Purāṇa','Rites, dharma and social history',[
    'Pāśupata materials should be read beside inscriptions and the wider history of Śaiva ascetic institutions. References to teachers, vows, sacred locations and forms of observance can illuminate how religious specialists imagined lineage and authority, but the Purāṇa should not be treated as a transparent rulebook for every Pāśupata community.',
    'The enormous later pilgrimage corpus is a source for regional social history precisely because it preserves small-scale sacred geographies that court literature often ignores. Names of crossings, wells, temples, rivers and local deities can be compared with inscriptions and archaeological surveys to trace the changing religious map of Kāśī, Ujjain, Prabhāsa, the Narmadā valley and other regions.',
    'Māhātmyas also reveal competition and equivalence. A local site can be declared equal to, or superior to, a celebrated pan-Indian tīrtha; a particular bath can be said to yield the merit of a costly sacrifice. Such claims translate ritual capital into geographic prestige and help explain how pilgrimage centers sought patrons and visitors.'
  ]);

  // BHAVIṢYA — strengthen part structure, theology, rites.
  paras('Bhaviṣya Purāṇa','Structure',[
    'The instability is not confined to chapter numbers. Some manuscript traditions divide the title into two major parts, others into four parvans, and still others transmit materials that overlap with the Bhaviṣyottara as a semi-independent work. Structure is thus part of the evidence for textual history, not merely a navigational inconvenience.',
    'The Madhyama material has a pronounced ritual and in places Tantric character, while the Uttaraparvan/Bhaviṣyottara tradition is particularly rich in calendrical observances. These internal contrasts support a modular model of compilation: blocks with distinct ritual interests could be gathered under the forward-looking authority of the Bhaviṣya title.'
  ]);
  paras('Bhaviṣya Purāṇa','Theology',[
    'The Bhaviṣya has no single theology comparable to the carefully integrated Vaiṣṇavism of the Viṣṇu Purāṇa. Its strata include solar worship, Brahmanical ritual, vrata traditions, sectarian devotion and late universal-history materials. Theological description must therefore be attached to parvan and passage.',
    'Its solar materials are particularly important. Sūrya can function as a supreme or highly elevated deity whose worship is integrated with image, mantra, calendar and purity. Comparison with the Sāmba Purāṇa and evidence for historical Sun temples helps situate these passages within the wider development of Saura religion.',
    'The late Pratisarga material theologizes historical difference by placing foreign religions and rulers within Kali-yuga and Purāṇic sacred history. This is not neutral comparative religion: it is a strategy for making new communities intelligible through inherited cosmological categories.',
    'The vrata corpus offers a more domestic theology in which gods become accessible through repeated calendrical discipline. Fasting, worship, story and gift are joined so that theology is enacted through household time rather than only asserted in doctrinal propositions.'
  ]);
  paras('Bhaviṣya Purāṇa','Rites, dharma and social history',[
    'The Uttaraparvan/Bhaviṣyottara materials are a major archive of vrata culture. They specify ritual days, intended beneficiaries, forms of fasting, offerings, gifts and narrative explanations. The prescriptions reveal how calendrical religion could organize household labor and patronage across an entire year.',
    'Dāna frequently accompanies vrata because merit is socially transferred through gifts to ritual recipients. The resulting system links domestic piety to Brahmanical institutions and makes household wealth part of a sacred economy.',
    'Late historical strata offer a different type of social evidence: they document how Sanskrit redactors remembered Muslim, Sikh, Mughal, colonial and other historical actors. Those descriptions must be dated to the redaction that contains them; once correctly dated, they become valuable evidence for intellectual responses to social change rather than failed ancient prophecy.'
  ]);

  // BRAHMAVAIVARTA — strengthen theology, contents and social history.
  sub('Brahmavaivarta Purāṇa','Contents','Rādhā as cosmic principle rather than narrative accessory',[
    'The received Kṛṣṇajanmakhaṇḍa makes Rādhā indispensable to the structure of divinity. She is not merely one pastoral beloved among others but the privileged manifestation of primordial Prakṛti and the eternal counterpart of Kṛṣṇa. This distinguishes the work sharply from earlier Sanskrit Kṛṣṇa narratives in which Rādhā is absent or far less systematized.',
    'The transformation has major consequences for narrative. Vraja becomes the earthly disclosure of an eternal divine world, erotic relation becomes a theological language of cosmic complementarity, and the identity of other goddesses can be coordinated through Rādhā/Prakṛti. The Purāṇa therefore belongs to the history of mature Rādhā theology rather than simply to the history of Kṛṣṇa biography.'
  ]);
  paras('Brahmavaivarta Purāṇa','Theology',[
    'The title’s own explanation—that brahman is unfolded through Kṛṣṇa—captures the work’s theological ambition. Kṛṣṇa is not merely one avatāra within a Viṣṇu-centered sequence; he is treated as the highest divine reality from whom other forms derive. This elevation aligns the received text with late-medieval Kṛṣṇa-centered devotional worlds.',
    'Rādhā and Kṛṣṇa together structure a theology of differentiated unity. Masculine and feminine divinity are distinguishable for love, play and manifestation while remaining inseparable at the highest level. This grammar permits the text to honor Lakṣmī, Durgā, Sarasvatī and other goddesses as expressions of primordial Prakṛti without fragmenting divine power into unrelated cults.',
    'The Prakṛtikhaṇḍa expands this gendered metaphysics into cosmology. Feminine divine power is not limited to erotic devotion; it is the productive matrix of material and psychophysical existence. The received Purāṇa is therefore a significant witness to the intersection of Vaiṣṇava bhakti and goddess theology.',
    'Such claims require historical contextualization. They should not be retrojected into the earliest Purāṇic Kṛṣṇa traditions simply because the work bears a Mahāpurāṇa title. Their importance lies precisely in the evidence they provide for later Sanskrit devotional synthesis.'
  ]);
  paras('Brahmavaivarta Purāṇa','Rites, dharma and social history',[
    'The text’s theology of women and Prakṛti has a social dimension, but normative claims need careful handling. Praising all women as manifestations of divine feminine power can coexist with conventional patriarchal assumptions elsewhere in the text. A research treatment should therefore analyze rhetoric and rule separately rather than citing exalted goddess language as straightforward evidence of social equality.',
    'Rādhā-Kṛṣṇa devotion also creates ritual and performative communities through recitation, festival, image worship and later rāsa traditions. The Purāṇa should be compared with regional Bengali and north Indian evidence to determine where textual ideals intersect with actual devotional institutions.',
    'Marriage, sexuality, purity and household duty appear within a mythological world where bodily relations can be cosmologically significant. These passages are valuable for gender history precisely when read critically against Dharmaśāstra and vernacular devotional sources rather than isolated as timeless prescriptions.'
  ]);

  // VĀMANA — increase structure, contents and total depth.
  paras('Vāmana Purāṇa','Structure',[
    'The editor’s decision to number the Saro-māhātmya separately is philologically instructive. It acknowledges that the unit is strongly attested in part of the tradition while absent or incomplete in other major manuscript groups. Rather than forcing a binary choice between “authentic” and “spurious,” the critical edition preserves it while marking its distinctive transmission history.',
    'The discontinuous question-and-answer frame also matters. Nārada’s changing questions allow self-contained tīrtha and mythic units to be attached with relatively little narrative transition. This compositional flexibility helps explain how local māhātmyas could be incorporated without requiring a complete rewrite of the surrounding Purāṇa.'
  ]);
  sub('Vāmana Purāṇa','Contents','Dakṣa, Kāma and the geography of Śiva’s myths',[
    'Several famous Śaiva myths are retold so as to terminate in the praise of particular places. Dakṣa’s sacrifice can lead into narratives of expiation and tīrtha; the burning of Kāma can authorize Kedāra and Himalayan sacred geography. The narrative function is therefore double: the text recounts a pan-Indian myth and simultaneously anchors that myth to a local ritual destination.',
    'This redirection is important for Purāṇic literary history. A story inherited from epic or another Purāṇa is not merely copied; its conclusion and emphasis can be reshaped to serve a regional māhātmya. Intertextual comparison should therefore attend to what the Vāmana adds or relocates, not just to shared plot.'
  ]);
  sub('Vāmana Purāṇa','Contents','Pilgrimage as an organizing principle',[
    'H. H. Wilson already observed that much of the received work functions as a succession of māhātmyas. Modern scholarship can sharpen that insight by treating pilgrimage not as miscellaneous padding but as an organizing genre. Myth, geography, ritual instruction and phalaśruti repeatedly recur in a stable functional sequence.',
    'The Saro-māhātmya’s concentration on Sthāṇvīśvara and Kurukṣetra makes the Purāṇa unusually valuable for comparing literature with regional political history. Thanesar’s importance under early-medieval dynasties gives historians an external context in which to test the growth of its Śaiva sacred geography.'
  ]);
  paras('Vāmana Purāṇa','Influences and reception',[
    'The critical edition itself has influenced modern reception by separating the Saro-māhātmya numerically from the main sixty-nine chapters. Students using older English summaries or ninety-five-chapter prints therefore encounter a structurally different “Vāmana Purāṇa” from readers of Gupta’s edition. Modern scholarship must make that editorial history explicit.',
    'Regional reception should also be studied through place-name continuity. Where Purāṇic tīrthas can be plausibly connected to later Kurukṣetra traditions, the text becomes one witness in a long history of sacred-landscape memory; where identification is uncertain, the uncertainty should be preserved rather than resolved by devotional geography alone.'
  ]);
  paras('Vāmana Purāṇa','Rites, dharma and social history',[
    'The repeated promise that pilgrimage can equal or exceed costly sacrifice has social implications. It offers householders a religious technology based on mobility, fasting and gift rather than ownership of sacrificial resources, while still relying on Brahmanical expertise at the destination. Pilgrimage can therefore broaden participation without eliminating hierarchy.'
  ]);

  // VARĀHA — deepen contents, rites, theology and structure.
  paras('Varāha Purāṇa','Structure',[
    'The four-zone model is a heuristic rather than a claim that four independent books were mechanically stitched together. Changes in speakers, framing and subject matter provide evidence for redactional seams, but detailed manuscript comparison is required to decide whether each seam represents a separate source, a later insertion or an editorial reorganization.'
  ]);
  sub('Varāha Purāṇa','Contents','Mathurā-māhātmya and Vaiṣṇava urban sacred geography',[
    'Mathurā material is especially important because it places the Purāṇa within the history of Kṛṣṇa-Viṣṇu sacred geography. The city and surrounding tīrthas are not treated merely as sites associated with remembered events; their landscape is organized as a field of continuing divine efficacy accessible through bathing, worship, circumambulation and hearing.',
    'Comparison with the Bhāgavata, Harivaṃśa and later Vraja māhātmya traditions can reveal shifts in sacred emphasis. The Varāha’s geography should not automatically be identified with the fully developed early-modern Vraja pilgrimage circuit; changes in named places and ritual routes are evidence for historical development.',
    'Urban sacred geography also connects textual history with archaeology and inscription. Temples, images and donor communities may leave evidence independent of the Purāṇa, allowing literary claims about regional prestige to be tested.'
  ]);
  sub('Varāha Purāṇa','Contents','Dharma-saṃhitā as a normative archive',[
    'The Janamejaya–Vaiśampāyana block conventionally identified as a Dharma-saṃhitā deserves treatment alongside Dharmaśāstra rather than being buried in a general summary of contents. It addresses normative conduct through a Purāṇic dialogue and illustrates how legal-ritual knowledge could migrate into narrative scripture.',
    'Its relationship to later nibandha citation is methodologically important. If a digest quotes a recognizable Varāha verse, that citation can establish circulation by the digest’s date and can sometimes reveal readings older than surviving printed editions.'
  ]);
  paras('Varāha Purāṇa','Theology',[
    'The Varāha frame produces a distinctive relation between avatāra theology and earth theology. Viṣṇu’s rescue of Pṛthvī authorizes him to speak about the sacred locations, obligations and ritual possibilities distributed across her surface. The saved Earth becomes both interlocutor and sacred medium.',
    'This helps explain why pilgrimage is not secondary to Vaiṣṇava doctrine. If the Earth is restored and ordered through Viṣṇu, particular locations can be construed as intensified manifestations of that divine ordering. Sacred geography is therefore one extension of avatāra cosmology.'
  ]);
  paras('Varāha Purāṇa','Critical edition',[
    'Gupta’s critical text should also be compared explicitly with the Nāradīya Purāṇa’s medieval summary of Varāha contents. The mismatch between summary and surviving recension is positive evidence for textual change: it prevents the critical text from being mistaken for the only historical form the title ever possessed.'
  ]);
  paras('Varāha Purāṇa','Rites, dharma and social history',[
    'The combination of Mathurā pilgrimage and Dharma-saṃhitā material places the text at the intersection of regional devotion and transregional norm. A pilgrim moves through local shrines, while the dharma block articulates obligations intended to carry wider authority. The coexistence shows how Purāṇic scripture could connect local place to general social order.',
    'Image worship and sacred-place rites also imply institutional custodianship. Temples require patrons, officiants, maintenance and control of ritual space; māhātmyas can legitimize those institutions by presenting their sites as cosmically privileged.',
    'The language of merit allows different forms of capital—wealth, bodily austerity, travel and textual hearing—to be compared. This makes the Purāṇa useful for studying how Brahmanical traditions translated unequal resources into graded but mutually intelligible religious acts.'
  ]);

  // MATSYA — raise overall depth beyond a merely adequate pass.
  paras('Matsya Purāṇa','Influences and reception',[
    'Art-historical reception deserves particular caution. Because the Matsya preserves prescriptions for images and temples, modern scholars have sometimes treated it as a direct manual behind surviving monuments. The stronger method compares prescriptions with multiple technical texts and with workshop evidence; convergence can identify a shared normative vocabulary even where direct textual dependence cannot be shown.',
    'Its flood narrative has also entered comparative mythology, sometimes through broad claims about universal deluge stories. A philologically responsible comparison begins with the internal Indian sequence—from Brāhmaṇa to epic and Purāṇic versions—before moving to cross-cultural parallels whose historical relation may be impossible to demonstrate.'
  ]);
  paras('Matsya Purāṇa','Rites, dharma and social history',[
    'The architectural chapters add labor history to the Purāṇa’s social profile. Even idealized prescriptions presuppose patrons capable of commissioning buildings, specialists capable of measurement and carving, and ritual experts capable of consecrating completed structures. The text therefore stands at the intersection of religious authority, craft knowledge and elite patronage.',
    'Dāna and temple construction can also be read together as modes of converting wealth into durable religious merit. One transfers property to recipients; the other materializes patronage in sacred space. Both locate economic resources within a moral economy whose benefits are expressed in karmic and memorial terms.'
  ]);

  // KŪRMA — strengthen structure and critical method and total depth.
  paras('Kūrma Purāṇa','Structure',[
    'The two halves are not equal containers of one genre. Narrative, tīrtha and cosmological sequences give way to dense normative and doctrinal blocks, especially in the Uttarabhāga. This internal change of register is itself evidence for the way a Purāṇa could combine story, pilgrimage, dharma and philosophical instruction without treating them as separate works.',
    'The Iśvaragītā and dharma materials should therefore be indexed as internal textual units as well as by chapter. Scholars often cite embedded gītās independently, and a digital article that makes these units visible is closer to how the text actually functions in intellectual history than a flat chapter count alone.'
  ]);
  sub('Kūrma Purāṇa','Contents','Sectarian synthesis as literary strategy',[
    'Narrative sequencing repeatedly creates opportunities for one deity to praise or reveal another. Such scenes are not accidental inconsistencies; they provide a literary mechanism for reconciling competing claims to supremacy. A Vaiṣṇava-titled Purāṇa can consequently preserve a major Śaiva gītā without ceasing to participate in a broader Vaiṣṇava frame.',
    'This strategy should be compared with Hari-Hara imagery, Purāṇic mutual-praise passages and inscriptional evidence for shared patronage. Textual synthesis does not prove that sectarian conflict disappeared, but it demonstrates that theological reconciliation was itself a historically meaningful project.'
  ]);
  paras('Kūrma Purāṇa','Theology',[
    'The relationship between the Iśvaragītā and the Bhagavadgītā deserves close comparative study. Shared genres of divine instruction, yoga, knowledge and devotion do not imply simple imitation; the Kūrma reworks the authoritative gītā form so that Śiva becomes revealer within a different sectarian synthesis.'
  ]);
  paras('Kūrma Purāṇa','Critical edition',[
    'The Kashiraj critical project’s broad manuscript base is especially important for a synthesizing text. Bengali, Oriya, Devanagari, Nandināgarī and Kashmirian witnesses allow editors to test whether doctrinal units were regionally transmitted or widespread. Distribution across scripts can sometimes be as historically informative as individual variant readings.',
    'Critical use should also record passages relegated to appendices or apparatus. In a composite Purāṇa, material excluded from the constituted text may still represent an old regional recension or a historically influential interpolation; “not in the critical text” does not mean “religiously irrelevant.”'
  ]);

  // BRAHMĀṆḌA — strengthen theology and total depth.
  sub('Brahmāṇḍa Purāṇa','Contents','Vāyu–Brahmāṇḍa parallelism as a research problem',[
    'The close Vāyu–Brahmāṇḍa relationship should be treated as a major contents problem, not merely a note under textual history. Parallel cosmological, geographical and genealogical sequences permit line-by-line comparison of two surviving witnesses to an older Purāṇic tradition. Their agreements can preserve archaic structure; their divergences reveal independent redaction.',
    'For students, this is an ideal case study in source criticism. One should align passages, identify shared unusual readings, note omissions and expansions, and resist deciding priority from theological preference. The goal is to reconstruct relationships among texts, not to declare one canonical version authentic.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Theology',[
    'The older cosmological core also has a theology of scale. The brahmāṇḍa, cosmic regions and cycles of time relativize human history by placing kingdoms and genealogies within repeatedly created and dissolved worlds. Religious authority is grounded in a cosmos whose temporal dimensions exceed ordinary political memory.',
    'The Lalitā layer transforms that cosmic scale into Śākta sovereignty. Lalitā is queen, mantra, consciousness and generative power; her court and weapons encode a ritual cosmology rather than merely an epic-style battle narrative. Later Śrīvidyā interpretation reads names, geometry, mantra and deity as mutually corresponding levels of one reality.',
    'The Adhyātma Rāmāyaṇa performs a different synthesis by interpreting Rāma through devotional Vedānta. Narrative episodes become occasions for identifying the personal deity with the highest Brahman and for teaching the relation between devotion, knowledge and liberation.',
    'These theologies should remain historically differentiated. Their coexistence under one Purāṇic title is itself the point: Brahmāṇḍa authority became a capacious scriptural framework capable of hosting successive cosmological, Śākta and Rāma-centered systems.'
  ]);
  paras('Brahmāṇḍa Purāṇa','Rites, dharma and social history',[
    'The Śrīvidyā materials also imply a social distinction between public praise and initiated interpretation. The Lalitāsahasranāma can circulate widely as recitation, while esoteric correspondences among mantra, cakra and ritual procedure may depend on teachers and initiatory lineages. The same textual unit therefore participates in both popular and specialist religious worlds.',
    'The Adhyātma Rāmāyaṇa’s narrative format supports a different mode of diffusion: metaphysical claims become available through storytelling, recitation and vernacular adaptation. This makes it a valuable case of elite Vedāntic vocabulary entering broader devotional circulation.'
  ]);
})();