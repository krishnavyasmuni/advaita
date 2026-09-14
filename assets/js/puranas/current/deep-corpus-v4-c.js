/* Deep-v4 expansion bundle C: Brahmavaivarta, Varaha, Linga, Skanda, Vamana. */
(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const E=n=>D['Purāṇa:'+n]||D[n]||null;
  function S(n,t){const e=E(n);if(!e)return null;const xs=A(e.articleSections);let s=xs.find(x=>N(x?.title)===N(t));if(!s){s={title:t,paragraphs:[],bullets:[],subsections:[]};xs.push(s);e.articleSections=xs;}return s;}
  function sub(n,sec,title,ps){const s=S(n,sec);if(s)s.subsections=[...A(s.subsections),{title,paragraphs:ps}];}
  function refs(n,xs){const e=E(n);if(!e)return;e.sources=[...A(e.sources),...xs];const s=S(n,'Further reading');if(s)s.bullets=[...A(s.bullets),...xs.map(x=>typeof x==='string'?x:x.title+(x.detail?' — '+x.detail:''))];}

  /* BRAHMAVAIVARTA */
  sub('Brahmavaivarta Purāṇa','Structure','Four khandas and a late medieval Krishna-Radha theological architecture',[
    `The received Brahmavaivarta Purana is commonly divided into four large khandas: Brahma, Prakriti, Ganesha and Krishna-janma. This architecture is striking because the title might suggest a book centered on Brahma, while the largest theological weight of the received text falls on Krishna, Radha and the divine feminine powers associated with Prakriti. The structure therefore records a major redactional transformation.`,
    `The Brahma Khanda establishes cosmological and theological foundations but does not determine the final center of gravity. The Prakriti Khanda expands the divine feminine through named goddesses and powers; the Ganesha Khanda creates a large mythic-ritual world around Ganesha; and the Krishna-janma Khanda brings the work to its characteristic late medieval devotional climax.`,
    `Traditional verse counts and Puranic lists create the impression of continuity with an older Brahmavaivarta, but the received text’s language, Radha theology and sectarian interests point to substantial late medieval redaction. Older citations under the title cannot automatically be assumed to refer to the exact chapters now printed.`,
    `This problem is particularly important because “Brahmavaivarta” appears in earlier bibliographic traditions. A title can survive while the content associated with it changes drastically. Scholars therefore distinguish evidence for the existence of a Purana by that name from evidence for the date of the present four-khanda recension.`,
    `The four-part structure is nevertheless coherent as received. It moves from cosmic generation to divine powers, from those powers to a major deity of ritual beginnings, and finally to a Krishna-centered universe in which Radha becomes metaphysically indispensable.`,
    `A long-form reading should therefore do two things at once: take the received work seriously as a deliberate devotional system and keep open the historical question of how much of that system belongs to earlier texts once circulating under the same title.`
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Brahma and Prakriti Khandas: creation re-read through divine power',[
    `The opening cosmology does not remain a neutral Puranic creation scheme. As the work unfolds, creation is increasingly explained through the relation between supreme divinity and Prakriti, the power through which forms, qualities and beings manifest. The theological direction points toward the later Krishna-Radha synthesis.`,
    `The Prakriti Khanda is especially important because it organizes multiple goddesses within a common metaphysical field. Lakshmi, Sarasvati, Durga and other powers can be distinguished in cult and story while understood as manifestations or aspects of a more fundamental divine feminine principle.`,
    `This strategy resembles broader Shakta processes of integration but is here subordinated to a Krishna-centered devotional universe. Divine femininity is not independent of Krishna, yet neither is it reducible to decorative consorthood. The cosmic economy depends on Shakti.`,
    `Narratives about jealousy, marriage, curse and reconciliation give metaphysical distinctions an affective form. The gods and goddesses are not abstract categories; their relations model tensions among powers of speech, prosperity, fertility and protection.`,
    `The text’s theology of manifestation allows many deities to retain ritual relevance. A devotee can worship a goddess or Ganesha without abandoning the hierarchy that makes Krishna supreme in the final synthesis.`,
    `Historically, these chapters show the capacity of late Puranic literature to absorb already-developed sectarian cults into one encyclopedic devotional world. The received Purana is less a fossil of one ancient system than a medieval act of theological federation.`
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Ganesha Khanda: birth, family, curse and the enlargement of a popular god',[
    `The Ganesha Khanda gives unusually extensive narrative space to a deity who in many earlier Sanskrit sources occupies a more limited role. This expansion reflects the growing importance of Ganesha as remover of obstacles, lord of beginnings and independent recipient of devotion.`,
    `Birth narratives link Ganesha to Parvati and Shiva while preserving the dramatic tension created by a child who initially stands between the Goddess’s private space and Shiva’s authority. The famous beheading and restoration story gives his unusual elephant form a narrative theology of loss and transformation.`,
    `Different Puranas tell the birth differently, and the Brahmavaivarta version should be read comparatively rather than treated as the single original account. Variation reveals how communities adapted Ganesha to different theological systems.`,
    `Stories of curse, marriage and encounters with other gods situate Ganesha inside a full divine social world. His power is demonstrated not only through a single origin episode but through repeated capacity to alter the fortunes of gods and humans.`,
    `Ritual instructions connect these myths to worship. Offerings, names and observances translate the narrative deity into an accessible household and temple presence.`,
    `The very existence of such a large Ganesha section inside a Krishna-centered Purana demonstrates the inclusive character of later devotional compilation. Sectarian supremacy does not require editorial elimination of other flourishing cults.`
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Krishna-janma Khanda: Krishna, Radha and the relocation of the cosmic center to Goloka',[
    `The Krishna-janma Khanda is the defining section of the received Brahmavaivarta. It retells Krishna material but does so through a theology in which Goloka, Radha and an eternal divine erotic relationship become central. This is not simply another summary of the Bhagavata’s tenth skandha.`,
    `Krishna is presented as the supreme source from whom other divine forms derive. The familiar Vaishnava hierarchy in which Krishna is an avatara of Vishnu is reversed or reinterpreted: Vishnu can become an emanation or manifestation of the more ultimate Krishna.`,
    `Radha’s status is even more distinctive. Earlier Sanskrit sources do not give her the same comprehensive metaphysical role. In the Brahmavaivarta she becomes Krishna’s essential Shakti, eternal counterpart and source of divine feminine manifestation. The pair can be described as two aspects of one supreme reality.`,
    `Goloka gives this theology a cosmic location beyond ordinary Vaikuntha models. The pastoral world is no longer merely a historical setting for Krishna’s youth; it is projected into the highest divine realm. Vraja becomes metaphysics.`,
    `Erotic and domestic narratives must therefore be read on two levels. They depict jealousy, union and separation, but later theological interpretation sees these emotions as expressions of divine play rather than ordinary human romance.`,
    `The text’s late medieval character is crucial here because it documents a stage at which Radha-Krishna devotion had become capable of reorganizing the full Puranic cosmos. That historical lateness is not a defect; it is evidence for one of the major developments in North Indian Vaishnavism.`
  ]);
  sub('Brahmavaivarta Purāṇa','Theology','Radha as Shakti, Krishna as Svayam Bhagavan and the logic of divine polarity',[
    `The received Purana’s theology can be summarized as a radical personalization of nondual dependence. Krishna is supreme, but his power is not an impersonal attribute separable from Radha. Radha is the living Shakti through whom bliss, love and manifestation become relational.`,
    `This framework allows unity and duality to coexist. Krishna and Radha can be described as one reality and yet devotion requires relation between lover and beloved. Theological nonduality is expressed through an eternal polarity rather than the disappearance of difference.`,
    `The other gods are integrated by emanation. Narayana, Shiva, Brahma, goddesses and cosmic powers occupy real sacred roles while depending on the supreme pair. This is an inclusive hierarchy characteristic of sectarian Puranas.`,
    `The feminine principle is therefore elevated far beyond a subordinate social analogy. Radha is not only wife or beloved; she is the source of Prakriti and divine capacities. The metaphysical language explains why later Radha-centered devotion can treat her worship as indispensable to access to Krishna.`,
    `Bhakti takes an affective form because supreme reality is imagined relationally. Love, longing, jealousy and reunion can all become theological categories when purified of ordinary selfishness.`,
    `The Purana’s theology should be compared with Gaudiya, Vallabha and other Radha-Krishna traditions without assuming direct dependence in every direction. It belongs to the same broad late medieval efflorescence while preserving its own doctrinal vocabulary.`
  ]);
  sub('Brahmavaivarta Purāṇa','Influences and reception','Radha’s Sanskrit scriptural elevation and the problem of dating influence',[
    `The Brahmavaivarta became especially important to modern histories of Radha because it gives her an explicit Sanskrit Puranic supremacy unavailable in many earlier sources. Scholars use it as evidence for the consolidation of Radha-Krishna theology, not as proof that every feature of that theology existed in the Vedic period.`,
    `The direction of influence is complex. Vernacular poetry, regional cult and Sanskrit Puranic redaction developed in interaction. A late Purana can absorb devotional ideas already circulating outside Sanskrit and then give them new scriptural prestige.`,
    `Ganesha and goddess materials likewise gained authority through inclusion in the work, even when those cults possessed independent textual traditions. The Purana functions as an integrator rather than an origin point for every myth it contains.`,
    `Modern translators often foreground the Krishna-janma Khanda because it appears most distinctive, but this can obscure the four-part architecture and the way Prakriti theology prepares Radha’s later role.`,
    `The text’s erotic narratives have also generated apologetic and critical modern readings. Historical interpretation should avoid both reduction to sexuality and premature allegory; the passages belong to a devotional literary culture in which divine love was deliberately explored through embodied emotional language.`,
    `The work’s most important reception achievement is canonization. It converts a developed Radha-Krishna devotional world into the idiom of Mahapurana, placing late medieval theology inside an ancient scriptural category.`
  ]);
  refs('Brahmavaivarta Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Dating, four-khanda structure and the distinction between older title evidence and the late received text.'},
    {title:'Studies of Radha in Sanskrit and medieval Vaishnava literature',detail:'Context for the unusually elevated Radha theology of the received Brahmavaivarta.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Citation and ritual evidence relevant to Puranic chronology.'}
  ]);

  /* VARAHA */
  sub('Varāha Purāṇa','Structure','A Vaishnava title with a pilgrimage-heavy received text',[
    `The Varaha Purana takes its title from Vishnu’s boar incarnation, yet the received work is not a continuous Varaha narrative. Large portions are devoted to pilgrimage, vows, sacred geography and the praise of deities and sites. This is a classic example of the difference between a Puranic title and the actual distribution of surviving contents.`,
    `Traditional descriptions and manuscript evidence suggest that the text once existed in a fuller form than some surviving recensions. Printed editions often contain a little over two hundred chapters, but chapter totals and internal divisions vary. Claims about lost sections are based partly on Puranic catalogues and citations to material not found in present editions.`,
    `Dialogue between Varaha and the Earth provides a convenient theological frame. The deity who once raised the Earth from the cosmic waters becomes a teacher to the personified Earth, allowing cosmology, geography and religious practice to be connected.`,
    `The received text’s pilgrimage concentration means that structure is often regional rather than purely narrative. Long blocks can move through Mathura, shrines, rivers and tirthas, attaching legends and ritual fruits to locations.`,
    `Shaiva and goddess materials coexist with the Vaishnava frame. The presence of such material is not surprising in a pilgrimage Purana because sacred geography brings many cults into contact. A tirtha network cannot be reduced to one deity even when the narrative hierarchy favors Vishnu.`,
    `A deep reading should therefore organize the Varaha around its major functional blocks—dialogue, sacred geography, vrata, deity praise and ritual—rather than search for a single lost biography of the boar avatara.`
  ]);
  sub('Varāha Purāṇa','Contents','Varaha and Earth: cosmic rescue turned into a theology of inhabited land',[
    `The Varaha myth gives the Purana a powerful geographic theology. Vishnu’s boar form rescues the Earth from cosmic waters, so the land on which ritual and pilgrimage occur has already been the object of divine intervention. Earth is not inert matter but a saved and personified participant in revelation.`,
    `When Earth asks questions, the frame reverses ordinary human geography. Rivers, mountains and pilgrimage places are described from the perspective of a cosmic being who embodies the terrain itself.`,
    `The boar form also demonstrates the Puranic principle that divine embodiment is fitted to crisis. A form that might appear animal and low in a social hierarchy becomes cosmically indispensable. The avatara destabilizes simplistic distinctions between divine and animal bodies.`,
    `Varaha traditions occur in Vishnu, Bhagavata and other Puranas as well as in temple iconography. Comparative reading reveals different emphases: some focus on battle with a demon, others on rescue of Earth, others on theological dialogue.`,
    `The Varaha Purana’s choice to let the rescued Earth become interlocutor turns the myth into a charter for sacred geography. Once the whole Earth has been raised by Vishnu, particular places can be marked as intensified points of divine presence.`,
    `This frame is especially appropriate for a text whose surviving contents are so dominated by tirtha and ritual. Cosmology becomes the foundation of pilgrimage.`
  ]);
  sub('Varāha Purāṇa','Contents','Mathura and regional sacred geography: building a Vaishnava pilgrimage field',[
    `The Mathura-centered materials are among the most historically significant sections of the Varaha tradition. Mathura is not praised merely as the birthplace of a famous deity; its wider region is mapped through groves, waters, shrines and stories that make movement through the landscape a devotional practice.`,
    `A mahatmya produces sacred density by accumulation. One pond is linked to a sage, another to Krishna, another to a divine victory or a vow. The pilgrim encounters a layered archive whose stories overlap physically.`,
    `The text’s praise of place can be extravagant, assigning extraordinary fruits to a single bath or act of worship. Such rhetoric is part of the mahatmya genre. Competing sacred centers make comparable claims, and historians should read them as assertions of prestige rather than literal comparative statistics of merit.`,
    `Mathura’s importance in Krishna devotion gives these chapters a special place in Vaishnava history. They show a Sanskrit effort to define a regional sacred landscape before or alongside the much later global prominence of Vrindavan-centered bhakti.`,
    `The geography also integrates non-Krishna deities and local cults. A pilgrimage field can contain Shiva, goddesses, serpent powers and ancestor rites while remaining broadly Vaishnava.`,
    `Comparison with archaeology, inscriptions and other Mathura mahatmyas is essential. A Puranic story establishes religious memory, not automatically the historical construction date of the shrine it praises.`
  ]);
  sub('Varāha Purāṇa','Contents','Vratas, gifts and the ritualization of ordinary time',[
    `The Varaha’s ritual chapters demonstrate how Puranic religion extends beyond great pilgrimage. Fast days, vows, gifts and domestic worship create repeatable practices for devotees unable to travel continuously.`,
    `A vrata typically joins bodily discipline to narrative. Restricting food, keeping vigil or making offerings is explained through a story that demonstrates the observance’s efficacy. The body becomes a calendar on which devotion is marked.`,
    `Gift prescriptions connect household merit to social relations. Brahmins and other recipients become part of the ritual mechanism, and the value of a gift can depend on time, place and intention.`,
    `The promised fruits range widely. Some rites aim at worldly welfare or offspring, others at removal of sin, heaven or liberation. The Purana therefore addresses a spectrum of motivations rather than demanding one soteriological goal from every participant.`,
    `Vaishnava names and images often anchor these practices, but the same ritual logic can be applied to other deities in different passages. This reflects a shared Puranic technology of vow rather than sectarian isolation.`,
    `For social history, prescriptions should be compared with actual inscriptions and later manuals. They tell us what textual specialists authorized, which is important evidence even when practice varied.`
  ]);
  sub('Varāha Purāṇa','Theology','Avatara, sacred place and inclusive Vaishnavism',[
    `The Varaha Purana’s Vaishnavism is spatial. Vishnu is supreme not only because cosmology says so but because his acts generate landscapes of memory. Divine descent gives places histories, and pilgrimage allows devotees to enter those histories.`,
    `The boar avatara demonstrates radical embodiment. Supreme divinity can take a form adapted to physical rescue without compromising transcendence. Later Vedanta traditions explain incarnation metaphysically in different ways, but Puranic narrative makes the principle emotionally and visually intelligible.`,
    `The presence of Shiva and goddesses shows that supremacy is generally expressed through hierarchy rather than exclusion. Sacred places associated with other deities can still participate in a Vishnu-centered cosmos.`,
    `Bhakti is therefore embodied in travel, bathing, image worship, fasting and hearing. The text does not sharply divide “philosophy” from ritual because knowing Vishnu includes repeated bodily relation to his manifestations.`,
    `Earth herself is an important theological figure. As both goddess and physical world, she mediates between cosmic myth and everyday habitation. Devotion takes place on a body that has been rescued by the Lord.`,
    `This theology helps explain the text’s apparently miscellaneous contents. Every local rite or place can be related back to the divine preservation of a world made sacred through avatara.`
  ]);
  sub('Varāha Purāṇa','Influences and reception','Pilgrimage extraction, regional use and the problem of the missing “whole”',[
    `The Varaha’s reception often occurred through extracted mahatmyas rather than full sequential reading. A regional pilgrimage section can circulate independently because practitioners need the local route and myths, not the entire Purana.`,
    `This modular circulation complicates textual history. A manuscript containing “Varaha Purana” material may preserve only one regional block, while a printed complete edition assembles many such units under one cover.`,
    `Later dharma and vrata writers cite Varaha authority for observances, establishing the prestige of the title even when the surviving chapter location differs. Such citations can also preserve traces of lost or altered sections.`,
    `Modern scholarship has sometimes treated the apparent incompleteness of the work as a failure. A more productive view sees it as evidence of Puranic textual ecology: titles can persist while modules expand, detach or disappear.`,
    `Vaishnava pilgrimage traditions around Mathura give the text continuing religious relevance even when devotees encounter the stories through later manuals rather than the Sanskrit Purana itself.`,
    `The Varaha’s importance therefore lies in showing how an avatara-centered title can become a flexible archive of sacred geography. The Earth-rescue myth provides a cosmological signature under which regional religious worlds could be gathered.`
  ]);
  refs('Varāha Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Extent, lost-material problem and the pilgrimage-heavy character of the received Varaha.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Chronological use of vrata and ritual material.'},
    {title:'Studies of Mathura sacred geography and Vaishnava pilgrimage',detail:'Context for the regional mahatmya blocks preserved in the Varaha tradition.'}
  ]);

  /* LINGA */
  sub('Liṅga Purāṇa','Structure','Purvabhaga and Uttarabhaga: a Shaiva cosmos organized around manifestation',[
    `The Linga Purana is commonly divided into a Purvabhaga and Uttarabhaga and contains roughly one hundred sixty chapters in widely used editions, though chapter counts and verse totals vary. The two-part organization is less a simple “first half/second half” than a framework for a wide Shaiva archive of cosmology, linga theology, myth, ritual, yoga and pilgrimage.`,
    `The title identifies the work’s characteristic theological symbol. Linga does not mean that every chapter discusses a cult object. Rather, the linga becomes a principle for understanding manifestation: the unbounded Shiva can disclose himself through a sign that both reveals and refuses complete anthropomorphic limitation.`,
    `The Purvabhaga establishes much of the cosmological and mythic field. Creation, cycles, divine forms and narratives demonstrate Shiva’s supremacy and relation to other gods. Ritual chapters then explain how cosmic reality becomes accessible in worship.`,
    `The Uttarabhaga continues and expands ritual, observance and sacred teachings. The precise distribution differs across editions, so citation should identify the textual base rather than rely on an abstract universal numbering.`,
    `The work has strong links to wider Shaiva literature. Pashupata, Agamic and yogic concepts appear beside conventional Puranic cosmology. This does not make the text a manual of one school; it shows redactors drawing from several Shaiva environments.`,
    `Its structure is therefore best understood as concentric. Cosmic Shiva, manifested linga, temple image, mantra, body and sacred place are progressively smaller scales at which the same divine reality can be encountered.`
  ]);
  sub('Liṅga Purāṇa','Contents','The fiery linga and the theological defeat of measurement',[
    `The story of the endless fiery column is one of Shaiva mythology’s most influential narratives. Brahma and Vishnu encounter a vertical reality whose beginning and end they cannot discover. Their search fails because the object of inquiry exceeds the spatial categories through which they attempt to measure it.`,
    `The linga is therefore not merely a substitute body for Shiva. It is a narrative critique of finite representation. The god can manifest as sign without being exhausted by the sign.`,
    `Brahma’s and Vishnu’s roles differ among retellings, and polemical details can become sharper in later sectarian versions. Comparative study with Shiva and Skanda Puranas helps distinguish the common myth from recension-specific elaboration.`,
    `The emergence of Shiva from the column turns unknowability into revelation. The failure of measurement does not produce agnosticism; it establishes the need for divine self-disclosure.`,
    `Temple linga worship translates that myth into ordinary practice. A finite stone can be bathed, touched and adorned while standing for a reality the foundational narrative declares immeasurable. Ritual paradox becomes the point.`,
    `The story’s visual and ritual influence is enormous because it provides a theology for one of the most ubiquitous forms of Shiva worship. It explains why non-anthropomorphic form can be more, not less, adequate to transcendence.`
  ]);
  sub('Liṅga Purāṇa','Contents','Cosmology, kalpas and Shiva as the axis of creation and dissolution',[
    `The Linga Purana participates fully in the Puranic fascination with repeated creation. Elements, beings, worlds and ages emerge and disappear in cycles, but Shaiva redaction places Shiva at the level from which those cycles are ultimately governed or transcended.`,
    `This cosmic position is expressed through names and forms. Shiva can appear as Rudra, Maheshvara and many differentiated manifestations while remaining beyond them. Lists of forms organize divine plurality around one source.`,
    `Kalpa narratives let the text accommodate multiple creation traditions. Different sequences can belong to different cosmic cycles, reducing pressure to harmonize every myth into one chronology.`,
    `Dissolution gives Shaiva theology particular force because Rudra’s destructive aspect can be understood not as evil but as the return of forms to their source. Destruction and creation become phases of one divine process.`,
    `The cosmic axis represented by linga or fiery pillar also links vertical cosmology to temple symbolism. The local shrine can reproduce the structure of a universe centered on Shiva.`,
    `These cosmological chapters should not be treated as detachable pseudoscience. They establish the scale on which ritual later operates: bathing a linga is meaningful because the linga has already been identified with the cosmic principle through which worlds emerge.`
  ]);
  sub('Liṅga Purāṇa','Contents','Ritual life of the linga: installation, bathing, mantra and repeated worship',[
    `Ritual chapters explain how a linga is selected, installed and worshipped. Consecration marks the transition from material object to established divine presence, involving purification, mantra and priestly action.`,
    `Abhisheka, the bathing of the linga, is especially characteristic. Water, milk and other substances become offerings that flow across the sign of Shiva. The rite creates a sensory theology of cooling, honoring and continual renewal.`,
    `Flowers, bilva leaves, lamps, incense and food offerings build a repeated devotional rhythm. Puranic worship is not confined to rare festivals; daily repetition creates an ongoing relationship between devotee and deity.`,
    `Mantra internalizes the same presence. Names and syllables allow Shiva to be approached through sound when the devotee is away from a temple. The portability of mantra complements the fixed sacred location of the linga.`,
    `Vratas and festival observances intensify ordinary worship at particular times. Night vigils and fasting associated with Shiva create bodily forms of devotion in which restraint becomes an offering.`,
    `These practices overlap with Agamic Shaivism, but the Purana’s public narrative format gives them a broad scriptural frame. It helps translate specialist temple and mantra traditions into a wider Puranic religious world.`
  ]);
  sub('Liṅga Purāṇa','Contents','Yoga, Pashupata resonances and the interiorization of Shiva worship',[
    `The Linga Purana does not confine Shiva to external image. Yogic chapters turn attention toward breath, senses, concentration and the internal realization of the Lord.`,
    `Pashupata vocabulary and ascetic ideals appear in a wider Shaiva environment where liberation is understood through overcoming the bonds that keep the soul in limited identity. The exact relation to institutional Pashupata schools must be argued passage by passage.`,
    `The body becomes a ritual field. External bathing and offering have internal analogues in purification of mind and disciplined awareness. This parallel allows household temple worship and ascetic practice to belong to one theology.`,
    `Knowledge of Shiva is not mere conceptual information. It requires transformation of attention, withdrawal from compulsive desire and recognition of dependence on the Lord.`,
    `At the same time, the Purana retains the merit language of pilgrimage, gifts and vrata. Yoga does not erase popular religious practices; it creates a hierarchy in which external and internal disciplines can support one another.`,
    `The result is a broad Shaivism capable of addressing temple patrons, household devotees and ascetic specialists without pretending they all perform the same practice.`
  ]);
  sub('Liṅga Purāṇa','Influences and reception','Linga theology in temple religion and modern interpretation',[
    `The Purana contributed to a scriptural language through which the ubiquitous Shiva linga could be interpreted cosmologically. The fiery-column myth, installation rites and praise of linga worship gave a shared Sanskrit framework to regionally diverse temple practices.`,
    `Modern discussions often reduce the linga to sexual symbolism or, in reaction, deny all generative symbolism. The Puranic evidence is broader. The form can carry meanings of cosmic axis, formless manifestation, generative power, divine presence and sectarian identity simultaneously.`,
    `Pilgrimage traditions use linga narratives to connect specific shrines to cosmic Shiva. A local stone can become a jyotirlinga or self-manifest form through mahatmya storytelling.`,
    `Shaiva commentators and ritualists drew on Puranic authority alongside Agamas. The relationship is complementary rather than one-way: temple traditions also influenced what later Puranic redactors chose to include.`,
    `Print editions standardized a particular two-part text, but manuscript variation remains significant. Popular translations often omit apparatus, which can make a late or regional verse appear universally attested.`,
    `For scholarship, the Linga Purana is valuable precisely because it joins metaphysical symbol and institutional practice. It shows how a sign of transcendence becomes the center of ordinary, repeatable, material worship.`
  ]);
  refs('Liṅga Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Structure, dating and sectarian profile of the Linga Purana.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Historical study of Shaiva rites and Puranic chronology.'},
    {title:'Studies of Pashupata and Agamic Shaivism',detail:'Context for the ascetic, mantra and temple traditions reflected in the Purana.'}
  ]);

  /* SKANDA */
  sub('Skanda Purāṇa','Structure','Two historical objects under one famous title',[
    `“Skanda Purana” can refer to two related but historically very different textual formations. The early Skandapurana reconstructed from old Nepalese palm-leaf manuscripts is a comparatively coherent Shaiva work whose earliest witnesses are exceptionally important for Puranic philology. The much larger later Skanda corpus consists of enormous regional khandas and mahatmyas that grew for centuries.`,
    `Failure to distinguish these objects creates some of the worst errors in popular Puranic writing. The figure of roughly eighty thousand verses belongs to the traditional and later encyclopedic identity of the Skanda corpus; it should not be projected onto the early Nepalese text as though one giant book survived unchanged from antiquity.`,
    `The early text focuses strongly on Shiva, sacred geography, mythic origins and the emergence of major Shaiva pilgrimage centers. The Groningen Skandapurana Project has shown through manuscript comparison that this text itself exists in recensions, but it is far more tightly controlled than the later khanda conglomerate.`,
    `The later corpus is often arranged into major khandas such as Maheshvara, Vaishnava, Brahma, Kashi, Avanti, Nagara and Prabhasa, with further sub-khandas. Regional manuscripts and prints vary substantially in what they include and how they number it.`,
    `Many later mahatmyas can circulate independently. A Kashi or Prabhasa section may function as a local pilgrimage scripture even for readers who never encounter the rest of the Skanda corpus. The “book” is therefore partly a library of sacred geographies.`,
    `A scholarly article must keep these two histories visible throughout. The early Skandapurana is crucial evidence for early medieval Shaivism; the later corpus is crucial evidence for the Sanskritization and networking of regional pilgrimage. Neither should be sacrificed to make the title look simpler.`
  ]);
  sub('Skanda Purāṇa','Contents','The early Skandapurana: Shaiva myth and the formation of sacred centers',[
    `The early Skandapurana uses Puranic narrative to explain a Shaiva world in formation. Shiva’s manifestations, divine conflicts and stories of sages are repeatedly tied to places, creating theological maps rather than a simple biography of Skanda.`,
    `Skanda or Karttikeya is important, but the title should not lead readers to expect a work primarily about his childhood and battles. Shiva-centered sacred geography occupies much of the text’s historical significance.`,
    `The Nepalese manuscripts allow scholars to observe redaction with unusual precision. Differences among recensions can sometimes be located to added passages rather than guessed solely from style. This makes the text a methodological landmark for Purana studies.`,
    `Early sacred-center narratives are especially valuable because they can be compared with inscriptions and archaeology from the same broad historical horizon. Literary claims still require caution, but the gap between text and external evidence is often smaller than in purely hypothetical dating of undated Puranas.`,
    `The text also shows sectarian competition and accommodation. Shaiva supremacy can be asserted while Vishnu, Brahma and local powers remain active within the narrative universe.`,
    `Its importance is therefore larger than its title. The early Skandapurana is one of the best sources for how a developing Shaiva network used Sanskrit narrative to connect myths, places and religious institutions.`
  ]);
  sub('Skanda Purāṇa','Contents','Kashi Khanda: making Varanasi into a cosmic city',[
    `The Kashi materials of the later Skanda corpus are among the most influential Sanskrit constructions of Varanasi’s sacred identity. The city is not merely one tirtha among others; it is represented as a place uniquely related to Shiva, death and liberation.`,
    `Mahatmya technique saturates the urban landscape. Wells, lingas, shrines, ghats and routes acquire stories, ritual instructions and promised fruits. A pilgrim moves through a city whose physical geography is overlaid by a scriptural map.`,
    `The theology of dying in Kashi gives the city extraordinary soteriological prestige. Shiva’s relation to the dying, the Taraka teaching and the promise of liberation turn ordinary mortality into a sacred geographical event.`,
    `Such claims generated competition with other liberation-granting tirthas. Puranic geography often speaks in superlatives, and the historian should read these as assertions of local supremacy within a competitive network of sacred centers.`,
    `The Kashi Khanda’s later date relative to the early Skandapurana is not a reason to dismiss it. It is precisely a major document for the mature medieval religious city, temple networks and pilgrimage imagination.`,
    `Its influence extends beyond Sanskrit. Vernacular Kashi guides, ritual practice and modern pilgrimage media continue to reproduce categories and stories shaped by the mahatmya tradition.`
  ]);
  sub('Skanda Purāṇa','Contents','Prabhasa, Avanti and other regional khandas: a Sanskrit atlas assembled over centuries',[
    `The later Skanda corpus is best imagined as a sacred atlas. Prabhasa in Gujarat, Avanti around Ujjain, Kashi, Himalayan and other regions receive elaborate textual worlds. Each khanda can preserve local temple lists, river routes, myths and ritual calendars.`,
    `Prabhasa material is especially associated with the western pilgrimage complex around Somnath and neighboring sacred places. Shaiva identity, regional history and pan-Indian Puranic myth are woven together so that a western landscape becomes part of universal sacred memory.`,
    `Avanti materials similarly elevate Ujjain and the Mahakala region. A famous local deity is integrated into the larger Shaiva cosmos, while routes and subsidiary shrines create a pilgrimage system rather than one isolated temple.`,
    `Regional blocks can grow by accretion. A new shrine or local legend may be inserted without rewriting the whole khanda. This flexibility helps explain enormous verse totals and manuscript diversity.`,
    `The same modularity makes dating difficult. One chapter can be centuries later than its frame. Internal historical references, citations and manuscript age must therefore be used at the block level.`,
    `The corpus’s geographic breadth is itself a historical achievement. By collecting local mahatmyas under the Skanda title, redactors created a pan-Indian Shaiva literary network while allowing regions to retain distinctive sacred identities.`
  ]);
  sub('Skanda Purāṇa','Contents','Pilgrimage mechanics: routes, merit, stories and the religious technology of place',[
    `A Skanda mahatmya usually does more than declare a place holy. It teaches sequence: where to bathe, which deity to see, what story explains the site, what fast or gift should accompany the visit and what spiritual fruit follows.`,
    `This sequence turns pilgrimage into ritual choreography. Walking becomes an ordered practice, and geography itself functions like a liturgical text.`,
    `Mahatmyas frequently relocate pan-Indian myths. A story known elsewhere is attached to a local pond or hill, making the universal narrative physically encounterable. Such relocation is one of the key mechanisms by which regional places acquired Sanskrit prestige.`,
    `Merit rhetoric is deliberately competitive. A bath here equals many sacrifices; death there guarantees liberation; hearing the mahatmya may equal the journey. These comparisons advertise the sacred field in a crowded pilgrimage economy.`,
    `The promise that hearing can substitute for travel also expands the audience. A distant devotee can participate imaginatively in sacred geography through recitation.`,
    `For social history, the routes imply local specialists and institutions even when not named. Priests, temple communities, lodging and donation systems are the material infrastructure beneath the literary map.`
  ]);
  sub('Skanda Purāṇa','Influences and reception','Why the Skanda corpus is indispensable to regional religious history',[
    `The Skanda is less influential as one continuous scripture than as hundreds of regional authorities. Kashi, Prabhasa and other mahatmyas shaped how sacred places explained themselves to pilgrims.`,
    `The early Skandapurana has a different modern reception. Its old Nepalese manuscripts and critical edition made it central to academic debates about early medieval Shaivism and the possibility of reconstructing Puranic textual history with philological rigor.`,
    `The Groningen project demonstrated that Purana studies need not rely only on late printed vulgates. Careful stemmatic and recensional analysis can reveal stages of growth within a text whose title continued for centuries.`,
    `Later regional khandas entered vernacular traditions, temple narratives and local ritual guides. A story’s influence may therefore be strong in one region and virtually unknown in another.`,
    `Modern digitization creates both opportunity and danger. Thousands of pages can be searched, but scans from different recensions are often labeled simply “Skanda Purana,” encouraging false equivalence.`,
    `The title’s long history is ultimately its greatest scholarly value. It lets us study how an early Shaiva Purana became the umbrella for one of the largest sacred-geography archives in Sanskrit.`
  ]);
  sub('Skanda Purāṇa','Critical edition','The Groningen Skandapurana Project and what critical reconstruction changes',[
    `The critical study of the early Skandapurana is based on Nepalese manuscripts, including old palm-leaf witnesses, whose age and relationships permit a much firmer reconstruction than is possible for many Puranas.`,
    `Editors distinguish recensions and document additions rather than forcing all witnesses into one synthetic text. The apparatus therefore makes visible the historical growth of passages.`,
    `This work has major consequences for dating. When an addition appears only in a later recension, it cannot be used to characterize the earliest recoverable Skandapurana.`,
    `The method also clarifies sacred geography. A pilgrimage center appearing in the oldest recension has a different evidentiary status from one added in later branches.`,
    `None of this creates an “original autograph.” The critical edition reconstructs recoverable textual stages from surviving witnesses. It is a historical model, not a manuscript miraculously identical to a first author’s copy.`,
    `The project should be a model for future work on the later Skanda khandas. Their size makes full critical editing difficult, but regional stemmata and block-level studies can replace vague claims about one timeless eighty-thousand-verse text.`
  ]);
  refs('Skanda Purāṇa',[
    {title:'The Skandapurana Project, University of Groningen',detail:'Critical editions and studies of the early Skandapurana based on Nepalese manuscript recensions.'},
    {title:'Ludo Rocher — The Puranas',detail:'Overview of the enormous later Skanda corpus and its regional khandas.'},
    {title:'Hans T. Bakker and collaborators — studies of the Skandapurana and early Shaivism',detail:'Historical geography, textual strata and Shaiva religious institutions.'}
  ]);

  /* VAMANA */
  sub('Vāmana Purāṇa','Structure','A Vamana title whose surviving contents are often strongly Shaiva and regional',[
    `The Vamana Purana is another warning against classifying a Purana by title alone. Although named for Vishnu’s dwarf incarnation, much of the extant work has a pronounced Shaiva orientation and substantial sacred-geography material, especially connected with northern Indian regions such as Kurukshetra.`,
    `Traditional descriptions speak of a larger text and sometimes of divisions not fully represented in the received recension. Common printed editions contain around ninety to one hundred chapters, but the relation between these witnesses and the idealized Purana described in medieval lists remains uncertain.`,
    `Vamana-Bali material provides a Vaishnava signature, yet it does not dominate every section. Shiva, Parvati, tirthas, vows and regional myths occupy extensive space. This mixture likely reflects layered redaction under a stable title.`,
    `The work’s structure is consequently better described by thematic blocks than by a single sectarian narrative: avatara myth, Shaiva mythology, sacred geography, ritual and dharma coexist.`,
    `Regional concentration can reveal the interests of redactors. Detailed knowledge of a pilgrimage field often tells us more about the milieu of a chapter than the name of the Purana does.`,
    `The Vamana thus belongs to the same Puranic phenomenon seen in Varaha: an avatara title becomes a container for a much broader medieval religious archive.`
  ]);
  sub('Vāmana Purāṇa','Contents','Vamana and Bali: sovereignty measured by three steps',[
    `The Vamana myth dramatizes divine power through deliberate smallness. Vishnu approaches Bali not as a warrior but as a dwarf Brahmin asking for three steps of land. The apparent modesty of the request exposes the limits of the king’s ability to measure his own sovereignty.`,
    `When Vamana expands into Trivikrama, bodily scale becomes cosmic argument. The feet traverse worlds, and a gift that seemed politically trivial becomes total surrender.`,
    `Bali is not reduced to a simple villain. His generosity and fidelity to his promise can remain admirable even while his sovereignty is curtailed. This moral complexity is one reason the myth supports several devotional interpretations.`,
    `The role of Shukra and other advisers raises the question of when prudence should override a vow. Bali chooses gift and truth despite warning, turning defeat into a kind of religious victory.`,
    `Different Puranas emphasize different aspects: cosmic stride, restoration of Indra, Bali’s devotion or later festival associations. The Vamana Purana’s version should be located within this shared archive.`,
    `The episode also joins Brahmanical ritual authority to kingship. The deity wins through the social form of a Brahmin petitioner, making royal generosity the mechanism by which cosmic hierarchy is restored.`
  ]);
  sub('Vāmana Purāṇa','Contents','Shaiva narratives: why the Purana’s sectarian identity cannot be inferred from its name',[
    `Large Shaiva portions praise Shiva, narrate his relations with Parvati and locate his manifestations in sacred places. This evidence led scholars to classify parts of the received work as strongly Shaiva despite the Vaishnava title.`,
    `Such a combination is historically plausible in Puranic transmission. A title can preserve older bibliographic identity while later redactors insert material serving contemporary regional cults.`,
    `Shaiva myth also integrates easily with the Vamana-Bali world because both traditions share sages, mountains, sacred rivers and royal lineages. Redaction does not have to build a new universe.`,
    `Episodes of Shiva’s asceticism and marriage explore the now-familiar paradox of a deity who is both world-renouncer and cosmic householder. These themes connect the Vamana to Shiva, Skanda and Linga Puranic traditions.`,
    `Theological hierarchy can shift by passage. In one section Vishnu’s avatara restores the gods; in another Shiva receives supreme praise. Rather than force these statements into one systematic creed, textual history can treat them as voices preserved by a composite work.`,
    `This plurality is one reason Puranas were useful across sectarian boundaries. A community could preserve an inherited title while making the text speak more strongly to its own devotional environment.`
  ]);
  sub('Vāmana Purāṇa','Contents','Kurukshetra and northern sacred geography',[
    `The Vamana Purana preserves important material on Kurukshetra and associated tirthas. The region is already famous from the Mahabharata, but Puranic mahatmya transforms the battlefield into a much denser pilgrimage landscape of ponds, shrines and ritual routes.`,
    `Epic memory becomes only one layer. Sages, gods and local myths attach additional sacred events to individual sites, making the field valuable even outside the narrative of the great war.`,
    `Bathing and gift prescriptions organize movement through the region. Particular lunar days or eclipses can magnify merit, tying geography to astronomical time.`,
    `Kurukshetra’s association with sacrifice and dharma gives the mahatmya a powerful inherited prestige. The Puranic text intensifies that prestige by multiplying sites within the larger sacred field.`,
    `Historically, pilgrimage literature can be compared with inscriptions and later tirtha manuals to reconstruct the growth of the region’s ritual network. The text itself remains prescriptive, not a map of every historical shrine at one date.`,
    `The Vamana’s northern focus is therefore a clue to redactional milieu. It shows how regional sacred geography could become one of the principal reasons for preserving and expanding a Purana whose title originally pointed elsewhere.`
  ]);
  sub('Vāmana Purāṇa','Contents','Vrata, donation and the social life of pilgrimage',[
    `Ritual sections make sacred geography actionable. Bathing is joined to fasting, gifts, worship and story-hearing so that the pilgrim’s body and possessions participate in the sacred field.`,
    `Donation creates relationships between travelers and ritual specialists. Merit is transferred through food, cloth, cattle or other gifts whose value may be multiplied by the holiness of place and time.`,
    `Vratas allow the same logic to move beyond pilgrimage. A sacred day can reproduce some of the intensity of a sacred place through fasting and worship.`,
    `The text’s promised fruits reveal a broad audience. Rulers, householders and people seeking children or release from sin can all find relevant observances.`,
    `These prescriptions also show the economic side of sacred geography. A pilgrimage center depends on flows of people and gifts, even when the Purana describes those flows as merit rather than commerce.`,
    `The social history must be reconstructed carefully, but the normative text establishes what kinds of exchanges were imagined as proper within a sacred journey.`
  ]);
  sub('Vāmana Purāṇa','Influences and reception','A regional pilgrimage scripture hidden behind an avatara title',[
    `The Vamana Purana’s relatively low modern profile obscures its value for regional religious history. Its Kurukshetra and Shaiva materials show how a Purana can matter most intensely in particular landscapes.`,
    `Later pilgrimage manuals can absorb its stories without reproducing the title prominently. Influence therefore travels through extracted mahatmya more often than through complete-book commentary.`,
    `The Vamana-Bali myth itself has a much wider reception in festivals, temple iconography and Vaishnava literature, but those traditions draw from a shared Puranic archive rather than necessarily from this Purana alone.`,
    `Modern summaries that list the Vamana among “Vaishnava Puranas” on the basis of its title miss the most interesting historical fact: the surviving work contains strong Shaiva and regional layers.`,
    `Textual incompleteness and variation make the work a good case for reconstructing lost Puranic forms from citations. Medieval descriptions may preserve memories of sections no longer present.`,
    `The Vamana’s importance is consequently methodological as well as religious. It demonstrates that Puranic identity is carried by title, transmission and reception even when the actual contents shift dramatically across centuries.`
  ]);
  refs('Vāmana Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Discussion of the Vamana’s received extent, Shaiva profile and title/content problem.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Ritual evidence and chronology.'},
    {title:'Studies of Kurukshetra tirtha and Puranic sacred geography',detail:'Regional context for the pilgrimage-heavy portions of the received work.'}
  ]);
})();
