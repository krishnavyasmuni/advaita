/* Deep-v4 expansion bundle D: Kurma, Matsya, Garuda, Brahmanda. */
(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const E=n=>D['Purāṇa:'+n]||D[n]||null;
  function S(n,t){const e=E(n);if(!e)return null;const xs=A(e.articleSections);let s=xs.find(x=>N(x?.title)===N(t));if(!s){s={title:t,paragraphs:[],bullets:[],subsections:[]};xs.push(s);e.articleSections=xs;}return s;}
  function sub(n,sec,title,ps){const s=S(n,sec);if(s)s.subsections=[...A(s.subsections),{title,paragraphs:ps}];}
  function refs(n,xs){const e=E(n);if(!e)return;e.sources=[...A(e.sources),...xs];const s=S(n,'Further reading');if(s)s.bullets=[...A(s.bullets),...xs.map(x=>typeof x==='string'?x:x.title+(x.detail?' — '+x.detail:''))];}

  /* KURMA */
  sub('Kūrma Purāṇa','Structure','Purvabhaga and Uttarabhaga: a Vaishnava title with a strongly syncretic theological program',[
    `The Kurma Purana takes its title from Vishnu’s tortoise incarnation, yet the received work is one of the least useful texts for a simple Vaishnava-versus-Shaiva classification. Its two major divisions, commonly called Purvabhaga and Uttarabhaga, contain Vaishnava framing alongside extensive praise of Shiva, goddess material, dharma, yoga, pilgrimage and philosophical instruction.`,
    `The tortoise avatara provides a frame of divine teaching rather than a demand that every chapter narrate the churning of the ocean. Vishnu as Kurma can transmit a theological universe capacious enough to include Shiva as an exalted or even supreme form in particular passages.`,
    `The Purvabhaga establishes cosmology, mythology and the multi-deity sacred world of the text. The Uttarabhaga contains some of its most influential didactic material, including the Ishvara Gita and extensive dharma-oriented instruction often associated with the Vyasa Gita complex.`,
    `Chapter counts vary among manuscripts and editions, and the relation between present divisions and older descriptions of the Kurma is not perfectly secure. As elsewhere, the title is older than any surviving manuscript and may have covered somewhat different contents at earlier stages.`,
    `The structure is nevertheless coherent around a project of synthesis. Rather than constructing one exclusive sectarian hierarchy, large portions explain how Vishnu, Shiva, Brahman, Shakti, yoga and Vedic social duty can be held in one Brahmanical religious order.`,
    `This syncretism should not be confused with absence of theology. It is itself a theological choice: sectarian forms are treated as valid manifestations or pathways within a larger unity, while ritual and social order remain important to embodied religious life.`
  ]);
  sub('Kūrma Purāṇa','Contents','Kurma, the churning memory and the authority of a divine teacher',[
    `The tortoise avatara is best known from the churning of the ocean, where Vishnu supports Mount Mandara as gods and asuras seek amrita. The image of hidden support is a fitting metaphor for the Purana’s use of Kurma as teacher: the avatara provides a stable base on which many religious systems are assembled.`,
    `In broader Puranic versions of the churning, divine cooperation and rivalry coexist. Gods require asuras, poison appears before nectar, Shiva intervenes, Lakshmi emerges and Vishnu manages the distribution of immortality. No single deity monopolizes every function.`,
    `That narrative ecology helps explain the Kurma Purana’s inclusiveness. A Vaishnava frame does not prevent major Shaiva revelation because the shared mythic world already depends on coordinated divine powers.`,
    `The tortoise also carries older cosmological associations of support and stability. Puranic redaction turns those associations toward avatara theology, making a nonhuman form the bearer of cosmic and scriptural order.`,
    `The Kurma’s use of dialogue allows teachings to be nested under different speakers. A section can acquire the authority of Shiva, Vyasa or another figure without breaking the overarching frame.`,
    `For literary history, this layered teaching structure is important because it facilitates insertion of semi-independent didactic texts. A Gita can be embedded in the Purana while retaining its own voice and internal coherence.`
  ]);
  sub('Kūrma Purāṇa','Contents','Ishvara Gita: Shiva as teacher of yoga and the nature of the supreme',[
    `The Ishvara Gita is one of the Kurma Purana’s most important embedded philosophical units. Shiva becomes teacher, delivering a discourse on supreme reality, bondage, yoga and liberation. Its presence inside a Kurma/Vishnu-framed Purana is a primary example of the work’s theological synthesis.`,
    `The discourse uses concepts shared with Vedanta, Samkhya and yoga without becoming a commentary on one later school. Purusha, prakriti, knowledge, meditation and devotion are coordinated under an Ishvara-centered account.`,
    `Shiva’s supreme status in the Gita should not be explained away as inconsistency. The compiler preserves a Shaiva revelation because the larger text can accommodate divine identities at different levels. In some synthetic theologies, Vishnu and Shiva are treated as mutually revealing rather than absolutely rival.`,
    `Yoga is presented as disciplined transformation of body, breath, senses and mind. Ethical restraint and concentration prepare a knowledge that cannot be reduced to verbal learning.`,
    `The discourse also retains devotion. The supreme Lord is not only an impersonal principle to be analyzed; worship and grace remain religiously meaningful. This combination makes the Gita attractive to later readers seeking a bridge between yoga and theism.`,
    `A scholarly reading should treat the Ishvara Gita as an embedded text with its own possible history. Its vocabulary and theological profile may not date every surrounding Kurma chapter, and comparison with independent Shaiva and yogic literature is essential.`
  ]);
  sub('Kūrma Purāṇa','Contents','Vyasa-oriented dharma teaching: varna, ashrama, household life and renunciation',[
    `The Kurma’s dharma material attempts to map an entire Brahmanical life. Education, marriage, household obligations, purity, food, gifts, ancestral rites and the transition toward renunciation are treated as parts of one ordered path.`,
    `This social vision is normative. It tells us how textual specialists imagined ideal hierarchy and duty, not how every person in the period actually lived. Comparison with inscriptions, legal documents and regional practice is necessary before prescription becomes social description.`,
    `The text places strong value on the ashrama system because it can reconcile worldly responsibility with liberation. The householder sustains dependents and ritual life; later withdrawal redirects energy toward knowledge.`,
    `Yet renunciation is not simply the superior path for everyone at every moment. The Purana repeatedly insists on fitness, sequence and duty. Premature abandonment of obligations can itself be criticized.`,
    `Ancestral rites and gifts show the social circulation of merit. Religious life binds the living to the dead and households to ritual recipients.`,
    `The didactic sections therefore complement the Ishvara Gita. One explains liberation through knowledge and yoga; the other explains the disciplined social world from which many practitioners approach that goal.`
  ]);
  sub('Kūrma Purāṇa','Contents','Pilgrimage and sacred geography: synthesis written onto place',[
    `The Kurma’s pilgrimage materials provide a geographic counterpart to its theological synthesis. Tirthas associated with Vishnu, Shiva, goddesses and sages can be visited within one sacred landscape.`,
    `A place becomes holy through layered narrative. A divine manifestation, sacrifice, curse or austerity explains why bathing and worship there have special force.`,
    `Pilgrimage lets a devotee cross sectarian boundaries without abandoning identity. A Vaishnava traveler may honor Shiva at a tirtha because the local sacred history places the deity inside the same cosmic order.`,
    `Mahatmya rhetoric uses superlatives, but those claims are better read as devotional intensification than as systematic ranking. Several Puranas can each call different places supreme.`,
    `The routes also connect Sanskrit textual authority to local institutions. Priests and temples can use Puranic stories to explain why their place belongs to a pan-Indian sacred network.`,
    `The Kurma thus embodies synthesis not only in doctrine but in movement. The pilgrim physically inhabits a world in which multiple divine forms are encountered as parts of one religious cosmos.`
  ]);
  sub('Kūrma Purāṇa','Theology','Hari-Hara synthesis, Brahman and the limits of sectarian labels',[
    `The Kurma Purana is frequently cited in discussions of Hari-Hara unity because it contains passages that resist treating Vishnu and Shiva as absolute competitors. The exact formulation varies by section, but the cumulative effect is a theology in which sectarian names can refer to a deeper common reality.`,
    `This does not mean every chapter is neutral. Some passages praise one deity in strong supremacy language. The significant point is that the compiler can preserve such praise without needing to condemn the alternate tradition everywhere else.`,
    `Brahman language provides one mechanism for synthesis. If the highest reality exceeds limited attributes, Vishnu and Shiva can be understood as supreme manifestations or identities through which devotees approach it.`,
    `Shakti and goddess traditions add another layer. Divine power is necessary for manifestation and worship, so the synthesis is not only between two male sectarian centers.`,
    `Yoga and knowledge interiorize the same unity. Once attention turns from external difference toward the ground of consciousness, sectarian form can be retained devotionally while metaphysical conflict is softened.`,
    `The Kurma is therefore historically important as a document of Brahmanical negotiation. It shows that medieval sectarian development produced not only rivalry but sophisticated strategies of mutual inclusion.`
  ]);
  sub('Kūrma Purāṇa','Influences and reception','A source for dharma, yoga and ecumenical theology',[
    `The Kurma’s later influence is visible through citation in dharma and ritual literature as well as through the independent interest of its Gita sections. Authors could mine the Purana for social rules without adopting every theological passage.`,
    `Its Hari-Hara materials became useful in traditions emphasizing the compatibility of major deities. Modern descriptions sometimes call this “Smarta,” but the historical phenomenon is broader than one later institutional label.`,
    `The Ishvara Gita has attracted separate translation and study because it functions almost as an independent Shaiva philosophical scripture within the larger work.`,
    `Pilgrimage sections contribute to local sacred traditions in the usual modular way: a mahatmya can survive independently of complete-Kurma reading.`,
    `Print editions fixed a convenient Purva/Uttara sequence while obscuring some manuscript variation. Detailed scholarship remains less developed than for texts with modern critical editions.`,
    `The Kurma’s most enduring significance is its refusal of a simple taxonomy. A Purana named for Vishnu’s avatara can preserve Shaiva philosophical revelation and still remain recognizably within a Vaishnava-Brahmanical scriptural world.`
  ]);
  refs('Kūrma Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Survey of the Kurma’s two-part structure, dating and sectarian complexity.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Chronology and dharma material.'},
    {title:'Studies and translations of the Ishvara Gita',detail:'Context for the embedded Shaiva philosophical discourse.'}
  ]);

  /* MATSYA */
  sub('Matsya Purāṇa','Structure','Nearly three hundred chapters: flood myth, Puranic theory and technical knowledge',[
    `The Matsya Purana is commonly transmitted in roughly 290 chapters and is one of the major encyclopedic Puranas. Its title comes from Vishnu’s fish avatara, whose flood narrative frames the preservation and transmission of sacred knowledge, but the received work ranges far beyond that myth.`,
    `The opening flood story is structurally appropriate to an encyclopedia. Manu preserves life and knowledge across cosmic destruction, and the Purana itself can be imagined as part of what must survive. The narrative makes textual transmission a response to catastrophe.`,
    `Later chapters cover creation, genealogies, manvantaras, royal lines, vows, gifts, pilgrimage, iconography, temple construction, urban planning, festivals and other technical subjects. The work is therefore a major source for both mythic and material culture.`,
    `Its chapter sequence shows accretion. Technical blocks can be studied against specialized Vastusastra, Silpasastra and Dharmasastra literature. Shared wording may indicate borrowing or common sources rather than one uniform authorial plan.`,
    `The Matsya also contains important Puranic self-description, including discussions of the characteristics or lists of Puranas. Such passages reveal how compilers defined their own genre.`,
    `A deep reading should therefore preserve the framing unity of flood and preservation while acknowledging that the received book became an archive of many kinds of knowledge accumulated over centuries.`
  ]);
  sub('Matsya Purāṇa','Contents','Manu and the flood: preservation, kingship and the transmission of a world',[
    `The Matsya avatara appears to Manu as a small fish asking protection. As Manu repeatedly transfers the growing fish to larger waters, the narrative reverses the expected relation between protector and protected. The being he shelters reveals itself as the cosmic protector who will save him.`,
    `Warning of the flood transforms kingship into guardianship of continuity. Manu must prepare not merely for personal survival but for preservation of seeds, living forms and sacred knowledge.`,
    `The boat, the fish’s horn and the passage through cosmic waters create one of the most memorable Indian flood narratives. Comparison with the Shatapatha Brahmana shows that the story has a long pre-Puranic history, while the Matsya version places it explicitly within avatara theology.`,
    `The flood does not end history; it resets it. After dissolution, classification and instruction are necessary to rebuild an ordered world. This gives the Purana’s later encyclopedic teaching a narrative rationale.`,
    `The story has often been compared with flood myths from other cultures. Comparative mythology can be suggestive, but direct historical dependence requires evidence. The more secure history is the transformation of an older Indian Manu-flood tradition into a Vaishnava avatara narrative.`,
    `Theologically, the fish shows divine responsiveness through scale. Supreme Vishnu can appear as a vulnerable creature, accept human care and then reveal cosmic magnitude. Protection is reciprocal before it becomes hierarchical.`
  ]);
  sub('Matsya Purāṇa','Contents','Puranic genre theory, genealogies and the organization of remembered time',[
    `The Matsya is important for the study of Puranas because it contains internal statements about Puranic characteristics and lists. These passages helped later scholars formulate the famous pancalakshana model: creation, secondary creation, genealogies, manvantaras and dynastic histories.`,
    `No large extant Purana is actually limited to five characteristics, and the Matsya itself proves the point by containing enormous ritual and technical sections. The pancalakshana formula is better understood as an ideal core of old Puranic subject matter than as a complete table of contents.`,
    `Genealogies connect cosmic ancestors, sages and royal houses. As in Vayu and Brahmanda, comparative sequences can preserve old historical memory while also showing redaction.`,
    `Manvantaras divide cosmic time into administrations of Manus, gods and sages. The system allows mythic plurality: different divine events can be assigned to different cycles without contradiction.`,
    `Dynastic lists approach historically recognizable periods in some passages. Their evidentiary value depends on manuscript control, because later redactors could update the sequence.`,
    `The Matsya’s theory and practice of Purana therefore diverge productively. It teaches a compact definition of the genre while demonstrating how the genre expanded far beyond it.`
  ]);
  sub('Matsya Purāṇa','Contents','Temple architecture, images and urban form',[
    `The Matsya’s architectural chapters are among the most frequently cited Puranic sources in studies of Indian temple design. They discuss site selection, measurements, plans, temple types and aspects of image making within a religious framework.`,
    `Architecture here is cosmological craft. Proportion and orientation place built space in relation to larger orders of direction, deity and ritual movement.`,
    `Image prescriptions identify deities through attributes, posture and measurement. The artisan translates narrative theology into visual form, but the resulting image still requires consecration before it functions as established divine presence.`,
    `The Purana also contains material relevant to settlement and civic form. Temples belong to inhabited landscapes of roads, water, residences and political authority rather than isolated sacred objects.`,
    `Comparison with Brihat Samhita and later Vastusastra literature shows both shared technical traditions and differences. A textual rule should not be assumed to describe every surviving temple.`,
    `For dating, technical parallels are valuable but complex. A redactor can excerpt an older architectural rule centuries later. The age of the borrowed knowledge and the age of the Matsya chapter are related but not identical questions.`
  ]);
  sub('Matsya Purāṇa','Contents','Vrata, dana and ritual economies of merit',[
    `The Matsya’s ritual chapters give sustained attention to vows and gifts. Fasting, worship and calendrical discipline are linked to narratives that explain why a particular observance has power.`,
    `Dana sections can be extraordinarily elaborate, describing symbolic gifts whose components reproduce cosmic or royal abundance. The scale of some prescriptions implies elite patrons even while simpler observances remain available to ordinary households.`,
    `Gift is both religious and social. Merit depends on recipient, intention, time and place, creating networks between patrons and ritual specialists.`,
    `Sacred calendars make religious life repetitive rather than episodic. A devotee encounters a yearly sequence of opportunities to renew relation with deities and ancestors.`,
    `The text’s promised fruits again range from worldly prosperity to liberation. Puranic ritual addresses human life before demanding transcendence of all worldly aims.`,
    `Historians should use these sections alongside inscriptions recording actual donations. Text and inscription illuminate each other: one gives normative ideals, the other particular acts performed by historical patrons.`
  ]);
  sub('Matsya Purāṇa','Contents','Pralaya, cosmology and the meaning of technical knowledge in a perishable world',[
    `The flood at the opening and later descriptions of dissolution create a philosophical frame for the technical chapters. Cities, temples, dynasties and bodies are painstakingly ordered even though cosmic time will eventually erase them.`,
    `This is not nihilism. The Puranic response to impermanence is correct action within the cycle. Building well, governing well and worshipping well remain meaningful because dharma is the proper form of temporary existence.`,
    `Cyclic cosmology also relativizes political claims. No dynasty is final, and no city escapes time. The same text that teaches royal and architectural order teaches their eventual dissolution.`,
    `Avatara theology answers impermanence through recurring divine intervention. Vishnu does not appear once in a finished creation; divine support returns when cycles require it.`,
    `The preserved Purana itself becomes another answer. Knowledge can cross catastrophe through transmission, just as Manu carries seeds across the flood.`,
    `This relationship between impermanence and preservation is one of the Matsya’s deepest structural themes and explains why an encyclopedic body of knowledge can coherently follow a myth of cosmic destruction.`
  ]);
  sub('Matsya Purāṇa','Influences and reception','From flood myth to architectural sourcebook',[
    `The Matsya’s reception is unusually divided between narrative and technical interests. Devotional readers know the fish avatara; historians of architecture know temple chapters; historians of Puranas know genre definitions and genealogies.`,
    `This fragmentation reflects the text’s compendial nature. Later users could extract the portion relevant to their discipline without adopting the entire Purana as a primary devotional scripture.`,
    `The flood narrative entered broad Vaishnava mythology and modern comparative religion. Its older Vedic antecedent makes it especially important for studying transformation across Sanskrit genres.`,
    `Architectural passages became influential in colonial and modern attempts to reconstruct “Hindu architecture” from texts. Such projects were useful but sometimes treated normative Sanskrit prescriptions as universal building codes.`,
    `The Matsya’s Purana lists shaped modern scholarship by encouraging researchers to compare extant texts with traditional genre definitions. The mismatch helped reveal how much Puranic literature grew beyond an older genealogical-cosmological core.`,
    `The work’s enduring value is therefore encyclopedic in the strongest sense: it preserves evidence for how myth, ritual, technical craft and historiography were imagined as parts of one sacredly ordered knowledge system.`
  ]);
  refs('Matsya Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Structure, Puranic genre theory and textual history of the Matsya.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Ritual chronology and social practices.'},
    {title:'Studies of Indian temple architecture and Vastusastra',detail:'Comparative context for the Matsya architectural and iconographic chapters.'}
  ]);

  /* GARUDA */
  sub('Garuḍa Purāṇa','Structure','Purvakhanda and Pretakhanda: the famous afterlife text is only one part of the Purana',[
    `Modern popular reception often treats the Garuda Purana as a book about death, hell and funeral rites. The received text is much broader. Its large Purvakhanda is an encyclopedia of Vaishnava theology, ritual, cosmology, medicine, gemology, polity, yoga and other knowledge, while the Pretakhanda or Preta-kalpa concentrates on death, the post-mortem journey and ancestral rites.`,
    `This imbalance matters because the Purvakhanda is substantially larger than the death-focused section in many editions. A reader who knows only funerary excerpts knows a later-reception profile, not the architecture of the whole Purana.`,
    `The dialogue between Vishnu and Garuda provides a fitting frame. Garuda is both divine vehicle and questioning devotee, allowing instruction to range from supreme theology to practical concerns of embodied life.`,
    `The Pretakhanda has an especially unstable textual history. Chapter order and extent vary widely among printed recensions, and some popular “Garuda Purana” translations reproduce only a late funerary selection. Edition identification is therefore indispensable.`,
    `The Purvakhanda’s encyclopedic blocks are also layered. Medical and gemological material can derive from specialist traditions; ritual sections can reflect different historical milieus.`,
    `The two-part structure nevertheless creates a meaningful life cycle. The Purvakhanda teaches how to inhabit the world through knowledge and worship; the Pretakhanda asks what happens when embodied life ends and how the living remain responsible for the dead.`
  ]);
  sub('Garuḍa Purāṇa','Contents','Vaishnava worship, iconography and the everyday accessibility of Vishnu',[
    `The Purvakhanda contains substantial material on Vishnu’s forms, worship and sacred names. Image and mantra allow the transcendent Lord to become accessible through repeatable practices.`,
    `Iconographic descriptions identify avatars and other forms through attributes and bodily signs. The text participates in the same medieval visual culture reflected in Agni, Matsya and specialized image-making treatises.`,
    `Consecration distinguishes sacred image from ordinary material. Ritual specialists use mantra and installation to establish a stable focus of divine presence.`,
    `Daily offerings make that presence relational. Food, flowers, lamps and praise form a regular rhythm rather than a rare sacrificial event.`,
    `The Purana’s Vaishnava hierarchy does not erase other gods. Shiva, goddesses and planetary powers remain part of the ritual environment, often subordinated within a Vishnu-centered cosmos.`,
    `The resulting religion is institutionally flexible. Temple worship, domestic recitation and pilgrimage can all express the same devotion at different scales.`
  ]);
  sub('Garuḍa Purāṇa','Contents','Medicine, gems and practical sciences in the Purvakhanda',[
    `The Garuda is an important example of the encyclopedic Purana because it includes medical material on diseases, substances and treatment alongside religious instruction. Such chapters show knowledge circulating beyond specialist Ayurvedic compendia.`,
    `Gemology is especially notable. Stones are classified by appearance, quality and effects, linking economic value, aesthetics and beliefs about auspicious power.`,
    `The presence of technical knowledge does not make the section secular in a modern sense. Health, prosperity and protection are part of dharmic welfare, and materials can have ritual as well as practical significance.`,
    `Specialist blocks may preserve terminologies from different periods. Their comparison with medical and gemological sastras can help reconstruct sources and redactional chronology.`,
    `The concise style of many entries suggests digesting. A Purana can provide accessible summaries to readers who do not possess an entire specialist library.`,
    `This practical range also counters the modern funerary stereotype. The same Garuda Purana that describes death is deeply concerned with maintaining life, health and material order.`
  ]);
  sub('Garuḍa Purāṇa','Contents','Pretakhanda I: dying, the preta condition and the continuing obligations of the household',[
    `The Pretakhanda begins from a problem that death creates for both deceased and survivors. A newly dead person is represented as preta, a transitional state rather than a fully installed ancestor. Funeral rites help transform that unstable condition.`,
    `The body is gone, but social relation continues. Sons and other relatives perform offerings whose imagined effects accompany the dead. The text therefore extends kinship beyond biological life.`,
    `Descriptions of the journey after death give moral consequence a spatial form. Roads, messengers, rivers and stations translate karma into narrative geography that listeners can visualize.`,
    `Offerings of water and pinda become bodily support in this imagined journey. The ritual act performed by the living and the narrative experience of the dead are synchronized.`,
    `Fear is certainly part of the rhetoric, but the section is also consolatory. It gives mourners a sequence of meaningful actions at a moment when ordinary agency appears powerless.`,
    `Historically, these rites should be compared with Grhyasutra, Dharmasastra and regional funeral traditions. The Garuda represents one influential medieval formulation, not the sole source of Hindu funerary practice.`
  ]);
  sub('Garuḍa Purāṇa','Contents','Pretakhanda II: Yama, hells and the moral imagination of consequence',[
    `Hells in the Garuda Purana are often presented in lurid detail, but their literary function is systematic: moral actions are given embodied consequences. Violence, theft, deceit and abuse become experiences suffered by the agent.`,
    `Yama’s realm is juridical. Messengers, judgment and records translate karma into the language of administration, making invisible causality intelligible through familiar social institutions.`,
    `The punishments are not necessarily eternal. Many Hindu hell traditions function as temporary consequences before further rebirth. This distinguishes them from theological models of one irreversible final damnation.`,
    `The vividness of the scenes made them highly portable in preaching and popular art. Fear can motivate ethical restraint even for listeners uninterested in abstract theories of karma.`,
    `Lists of hells vary among texts and even recensions of the Garuda. Their instability is another reason to avoid treating one popular translation as a universal map of the afterlife.`,
    `The section’s moral world is social as well as ritual. Crimes against vulnerable people, deception and abuse of trust receive consequences alongside failures of religious duty.`
  ]);
  sub('Garuḍa Purāṇa','Contents','Shraddha, sapindikarana and the transformation from dead person to ancestor',[
    `The most socially important funerary teaching concerns not punishment but ritual transformation. A deceased relative must be integrated into the ancestor group through a sequence of rites extending beyond the cremation.`,
    `Pinda offerings create a material language of continuity. Food shaped and offered by descendants represents the body, nourishment and identity of the dead in transition.`,
    `Sapindikarana joins the newly dead to established pitrs. The rite thus reorganizes genealogy after each death: a household’s ancestor structure is ritually updated.`,
    `Monthly and annual observances sustain memory after the immediate mourning period. The dead remain participants in household religion rather than disappearing after cremation.`,
    `The text also regulates recipients, purity and timing, showing how ancestor ritual depends on wider Brahmanical social relations.`,
    `Modern practice varies regionally, but the Purana’s continuing ritual prestige means its categories still shape popular explanations of what post-death rites are intended to accomplish.`
  ]);
  sub('Garuḍa Purāṇa','Influences and reception','How one section came to define the whole book',[
    `The Garuda Purana’s modern reputation is a case study in selective reception. Funeral specialists and popular publishers extracted the Pretakhanda because death gives it immediate practical relevance. Over time, this part became synonymous with the title.`,
    `In some communities the text is especially heard after a death, reinforcing the association. Yet that practice does not prove that the whole Purana was originally composed as a funeral manual.`,
    `Popular translations often intensify the problem by publishing a few hundred pages of afterlife material as “The Garuda Purana” without explaining the much larger Purvakhanda.`,
    `The hell narratives entered visual and oral culture because their moral imagery is memorable. They can be retold independently of precise chapter numbering.`,
    `Scholarly attention to medicine, gems and iconography has begun to recover the other Garuda. These sections reveal an encyclopedic intellectual history comparable to Agni and Matsya.`,
    `A responsible modern article should therefore perform a reception correction: explain why the death material became famous while restoring the full text’s much broader structure.`
  ]);
  refs('Garuḍa Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Structure, recension problems and the disproportionate modern focus on the Pretakhanda.'},
    {title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Funerary and shraddha material in historical context.'},
    {title:'P. V. Kane — History of Dharmasastra',detail:'Comparative history of death rites, ancestor ritual and later textual prescriptions.'}
  ]);

  /* BRAHMANDA */
  sub('Brahmāṇḍa Purāṇa','Structure','An old cosmological-genealogical core with major later embedded works',[
    `The Brahmanda Purana is closely related to the Vayu Purana and preserves much of the same old cosmological, genealogical and dynastic archive. At the same time, many modern editions are famous for later embedded texts such as the Lalitopakhyana and the Adhyatma Ramayana. The received work therefore contains strata of very different historical character.`,
    `Traditional organization is often described through padas corresponding broadly to creation, elaboration, genealogy and conclusion, though printed chapter schemes differ. The Vayu parallels provide one of the strongest clues to an older common textual formation behind the two titles.`,
    `The name Brahmanda—cosmic egg—fits the cosmological emphasis. Large-scale descriptions of worlds, cycles and creation provide the frame within which dynasties and sacred geography are organized.`,
    `The Lalitopakhyana is a substantial Shakta narrative centered on Lalita Tripurasundari and includes the celebrated Lalita Sahasranama tradition. Its theology and ritual world are more specialized than much of the older cosmological core.`,
    `The Adhyatma Ramayana, transmitted within many later Brahmanda editions, rereads the Rama story through explicit Vedantic and devotional theology. Its textual history should be studied as an embedded work and not used automatically to date the oldest Brahmanda strata.`,
    `The Purana is therefore an ideal example of layered canon formation. An old genealogical-cosmological backbone remained authoritative enough to attract major new theological scriptures under its title.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Cosmic egg, worlds and the mapping of enormous time',[
    `Brahmanda cosmology imagines the manifested universe as an ordered totality contained within layered cosmic structures. The image of the egg provides a bounded form for a cosmos whose internal scales are otherwise immense.`,
    `Continents, mountains, oceans and planetary regions create nested spaces. These should be read as sacred cosmography: their purpose is to locate beings and karmic destinies within a moral universe.`,
    `Time is equally nested through yugas, manvantaras and kalpas. Human dynasties occupy a very narrow band within durations that dwarf political history.`,
    `Creation and dissolution repeat, preventing the cosmic egg from becoming a one-time creation. Manifest worlds are temporary configurations of a more enduring reality.`,
    `The close parallels with Vayu allow line-by-line comparison of some cosmological passages. Differences help identify redactional changes and the movement of blocks between traditions.`,
    `The cosmology also gives later embedded theologies a ready-made universe to reinterpret. Lalita or Rama can be elevated to supreme status without needing a new cosmographic system; they are placed above or within an inherited Puranic cosmos.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Genealogies and dynasties: the Brahmanda-Vayu archive of historical memory',[
    `The dynastic material shares important sequences with Vayu, Matsya and Vishnu. Solar and lunar lineages create continuity from primordial ancestors to epic and later rulers.`,
    `Because of these parallels, the Brahmanda became central to attempts to reconstruct an older Puranic genealogical tradition. Agreement across independent recensions can support antiquity relative to later sectarian expansions.`,
    `Yet the lists remain vulnerable to scribal corruption. Proper names are easily altered, duplicated or omitted, especially when copyists no longer recognize the dynasty.`,
    `Later historical additions can extend a genealogy toward the redactor’s present. Such extension makes the text a living chronicle but complicates dating.`,
    `The theological purpose of genealogy should not be forgotten. Kingship is placed within cosmic descent, turning political succession into a branch of sacred history.`,
    `Comparative historical use therefore requires a critical apparatus of names and variants. A printed list without manuscript evidence is a starting point, not a final chronology.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Lalitopakhyana: the Goddess as imperial center of a Shakta cosmos',[
    `The Lalitopakhyana narrates the emergence and victory of Lalita Tripurasundari in a richly developed Shakta universe. The Goddess appears not as a local warrior deity alone but as supreme sovereign whose court, weapons and attendants organize cosmic power.`,
    `The conflict with Bhandasura gives martial narrative a ritual-theological structure. Divine armies, Shaktis and weapons embody aspects of the Goddess’s power, and victory establishes a cosmic order centered on her.`,
    `Sri Vidya concepts give the section a distinctive profile. Mantra, diagram, divine city and hierarchical emanation connect Puranic story with a sophisticated ritual tradition.`,
    `The celebrated Lalita Sahasranama belongs to this wider textual world. A thousand names function as theology through enumeration: each epithet articulates a relation between the Goddess and cosmos, body, ritual, knowledge or liberation.`,
    `The embedded Shakta work demonstrates how the Brahmanda title could authorize specialized traditions. A sophisticated Sri Vidya scripture becomes part of a Mahapurana without requiring the older genealogical core to be rewritten completely.`,
    `For reception, the section’s independent liturgical life is crucial. Many devotees know the Lalita Sahasranama without ever reading the Brahmanda Purana as a whole, illustrating once again the modular survival of Puranic scripture.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Contents','Adhyatma Ramayana: Rama narrative transformed into Vedantic revelation',[
    `The Adhyatma Ramayana retells the Rama story with a much more explicit theology of Rama as supreme Brahman than the older Valmiki epic generally sustains. Narrative events become occasions for metaphysical teaching.`,
    `Characters can display awareness of divine identity that changes the ethical texture of familiar episodes. Exile and war remain, but they unfold within a providential frame in which Rama’s ultimate nature is less ambiguous.`,
    `The text is devotional and Vedantic rather than merely narrative. Discourses on self, maya and liberation interpret the epic plot as spiritual allegory while preserving its emotional power.`,
    `Its relation to the Brahmanda Purana is historically complex. It circulates independently and is widely regarded as a later embedded work. The date of the Adhyatma cannot simply be transferred to the oldest Brahmanda passages or vice versa.`,
    `The work exerted major influence on later Rama devotion and vernacular interpretation. It provided a Sanskrit source for reading Rama not only as righteous king and avatara but as the fully explicit supreme reality.`,
    `Its inclusion demonstrates the Puranic archive’s capacity to receive an entire theological epic. A Mahapurana can become a library containing another book that itself achieves independent canonical life.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Theology','From old Puranic cosmology to Shakta and Rama-centered supremacies',[
    `The Brahmanda’s theology cannot be summarized by one sectarian label because its layers preserve different centers. Older cosmological and genealogical materials participate in a broadly Brahmanical Puranic universe, while later embedded works develop strong Shakta and Vaishnava/Rama theologies.`,
    `This plurality is historical rather than embarrassing. The authority of the title made it a suitable home for new revelations.`,
    `The Lalita material interprets supreme reality through Goddess sovereignty and Sri Vidya. The Adhyatma Ramayana interprets the same broad cosmos through Rama as Brahman.`,
    `A redactional approach allows both to be taken seriously without pretending they came from one theological author at one date.`,
    `The shared older material with Vayu also prevents later famous sections from monopolizing description of the whole work.`,
    `The Brahmanda is thus a vivid example of the difference between a textual history and a systematic theology: the received Purana is unified by transmission under one title more than by one doctrinal voice.`
  ]);
  sub('Brahmāṇḍa Purāṇa','Influences and reception','A parent text overshadowed by its most successful embedded scriptures',[
    `Modern readers often encounter the Brahmanda through the Lalita Sahasranama or Adhyatma Ramayana, both of which have independent devotional lives far larger than awareness of the parent Purana.`,
    `Sri Vidya traditions recite and interpret Lalita names within sophisticated ritual systems. The fact that a hymn is Puranic does not mean its living use is limited to Puranic recitation.`,
    `Rama traditions likewise read the Adhyatma independently, translate it and use it to support theological interpretations of the epic.`,
    `Historians, meanwhile, value the older Brahmanda for its Vayu parallels and genealogies. The same title therefore serves radically different scholarly and devotional audiences.`,
    `Print editions that include all these materials in one physical set create the impression of a timeless integrated whole. Manuscript and citation history reveal a cumulative archive.`,
    `The Brahmanda’s reception is consequently a lesson in successful embedding: later works can become more famous than their host while continuing to draw prestige from the host’s Mahapurana identity.`
  ]);
  refs('Brahmāṇḍa Purāṇa',[
    {title:'Ludo Rocher — The Puranas',detail:'Brahmanda-Vayu relationship, textual layers and embedded works.'},
    {title:'Studies of the Lalitopakhyana and Sri Vidya traditions',detail:'Context for the Shakta material and Lalita Sahasranama.'},
    {title:'Studies and translations of the Adhyatma Ramayana',detail:'Textual independence, Vedantic Rama theology and later reception.'},
    {title:'F. E. Pargiter — Ancient Indian Historical Tradition',detail:'Classic comparative use of Brahmanda and related genealogies; influential but methodologically dated in places.'}
  ]);
})();
