(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function sec(name,title){const e=D['Purāṇa:'+name]||D[name];if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}

  paras('Nāradīya Purāṇa','Date of composition',[
    'The Nāradīya Purāṇa is best treated as a layered medieval compilation rather than a composition that can be assigned to one authorial moment. Its cosmological and narrative materials stand beside highly developed temple worship, vrata, pilgrimage and scriptural-catalogue sections. Those different interests need not have entered the received text at the same time, and arguments for chronology therefore work most securely at the level of identifiable blocks.',
    'The name itself creates a bibliographic problem. Several Sanskrit works circulate under titles derived from Nārada, above all the large Nāradīya or Nārada Mahāpurāṇa and the Bṛhannāradīya associated with the Upapurāṇa tradition. A medieval citation headed only “Nāradīya” cannot automatically be transferred to the present Mahāpurāṇa without comparison of wording and context.',
    'R. C. Hazra’s work on Purāṇic chronology is especially useful here because he compares ritual customs, sectarian language, Smṛti relations and later citation rather than trusting a traditional date. The resulting picture is not a single year but a history of growth in which substantial portions belong to the medieval Purāṇic world and some material continued to be rearranged or enlarged afterward.',
    'The text’s developed concern with image worship, sacred months, gifts and pilgrimage presupposes an institutional religious environment in which temples and tīrthas were already major centers of Brahmanical devotion. Such evidence helps establish relative chronology even when no surviving manuscript is remotely as old as the traditions incorporated in the work.'
  ]);
  sub('Nāradīya Purāṇa','Structure','The two-part architecture',[
    'In a common recension the work is divided into a Pūrvabhāga and an Uttarabhāga. The Pūrvabhāga is itself arranged in four pādas and is commonly counted at 125 chapters, while the Uttarabhāga contains about 82. These numbers are useful for navigation but should be attached to the edition being cited because manuscript and printed traditions can differ in subdivision.',
    'The first part has a broad encyclopedic and devotional profile: cosmology, Vaiṣṇava teaching, rites, vows, sacred literature and narrative all appear. The second gives still greater prominence to pilgrimage, religious observance and the concrete practices through which devotion is embodied.',
    'This architecture makes sense of the work’s apparent variety. It does not read like a continuous biography of Nārada. Nārada functions instead as a paradigmatic transmitter whose authority can connect divine narrative, ritual instruction, pilgrimage and reflection on the wider Purāṇic canon.'
  ],[
    'Pūrvabhāga: four pādas and a broad mixture of narrative, theology, ritual and scriptural catalogue material.',
    'Uttarabhāga: extensive observance and sacred-geography material in the common two-part recension.',
    'Chapter references should identify part and edition because the title has more than one recensional history.'
  ]);
  sub('Nāradīya Purāṇa','Contents','Purāṇic catalogues and literary self-consciousness',[
    'One of the most valuable features of the Nāradīya is its attempt to describe other Purāṇas and their contents. These notices give historians a medieval picture of what a Purāṇic redactor believed the larger corpus contained. They are not neutral library catalogues, but they provide important evidence for canon formation and for the circulation of textual titles.',
    'Where a Nāradīya summary agrees with the surviving form of another Purāṇa, it can illuminate continuity. Where it differs, several possibilities must remain open: the compiler may have known a different recension, a portion may later have disappeared, or the summary may present an idealized description rather than a literal table of contents.',
    'The cataloguing impulse is itself theological. The text imagines sacred knowledge as a network of mutually authoritative narratives rather than as a single closed book. By locating itself among other Purāṇas, it teaches readers how to understand a scriptural library whose components overlap yet maintain distinctive names and profiles.'
  ]);
  sub('Nāradīya Purāṇa','Contents','Devotion, name, narrative and practice',[
    'The Vaiṣṇava devotional material repeatedly links theology to acts of hearing, praising and remembering. Divine narrative is therefore not merely information about the gods; listening to it can itself be a religious act. The Purāṇa’s own form becomes part of the practice that it recommends.',
    'Nārada is particularly suited to this vision. Across Sanskrit tradition he moves between divine and human worlds, instructing kings, sages and devotees. The Purāṇa uses that mobile authority to join topics that modern readers might separate into doctrine, ritual, music of praise, pilgrimage and ethics.',
    'The result is a lived theology of bhakti. Viṣṇu is supreme, but devotion is made visible through names, images, stories, sacred days and places. The theological claim is thus distributed across many forms of religious media rather than confined to philosophical propositions.'
  ]);
  sub('Nāradīya Purāṇa','Contents','Pilgrimage and sacred time',[
    'The practical chapters repeatedly sanctify both place and calendar. Tīrthas, lunar days, months, fasts, gifts and recitations are assigned religious fruits, turning cosmic time into a sequence of opportunities for household practice. The same logic makes a river, shrine or pilgrimage field into a material point of contact with Purāṇic sacred history.',
    'These sections assume a social world of householders, ritual specialists, temples, donors and travelers. They offer practices that can be performed repeatedly and at different levels of expense, from hearing or naming to journeys and substantial gifts. That range helped Purāṇic religion address audiences with different resources and religious goals.',
    'The promised fruits range from prosperity and removal of sin to divine proximity and liberation. Such variety should not be dismissed as inconsistency. It reflects a ritual system capable of accommodating worldly, ancestral and soteriological aims within one hierarchy of merit.'
  ]);
  paras('Nāradīya Purāṇa','Theology',[
    'The text’s Vaiṣṇavism generally operates by inclusion within hierarchy rather than by eliminating other gods. Viṣṇu-Nārāyaṇa is presented as supreme, while Brahmā, Śiva, goddesses, planets, ancestors and local sacred powers continue to appear within the same ritual world. This is a common Purāṇic mode of sectarian theology.',
    'Bhakti is expressed through a plurality of acts: hearing, recitation, image worship, pilgrimage, vows, gifts and the remembrance of divine names. Theological access is therefore mediated through body, sound, place, image and calendar. The text is particularly useful for understanding how medieval devotion became institutional as well as affective.',
    'This integrated devotional world also explains why the Nāradīya can move easily between high cosmology and practical observance. Cosmic supremacy is not left abstract; it is translated into the choices a devotee makes about worship, travel, fasting, recitation and charitable action.'
  ]);
  paras('Nāradīya Purāṇa','Critical edition',[
    'The Nāradīya lacks a single universally adopted modern stemmatic critical edition comparable to the Baroda Viṣṇu Purāṇa. Printed Sanskrit editions remain important witnesses but cannot by themselves settle the history of every chapter or ritual block.',
    'The first editorial requirement is correct identification of the textual object. The Mahāpurāṇa must be distinguished from Bṛhannāradīya and other Nārada-titled works. Only after that distinction can manuscript families, chapter order and variant readings be compared responsibly.',
    'Future critical work would benefit from mapping regional witnesses before attempting a synthetic reconstruction. Modular units such as māhātmyas and vrata collections may preserve genuine local histories, so variation should not automatically be reduced to scribal error.'
  ]);
  paras('Nāradīya Purāṇa','Influences and reception',[
    'The Nāradīya never achieved the global devotional prominence of the Bhāgavata, yet its historical importance is substantial. Medieval ritual writers could draw on it for vrata, pilgrimage and worship, while historians of literature use its Purāṇic catalogues to reconstruct changing perceptions of the canon.',
    'Its reception belongs to the larger prestige of Nārada as an authority on devotion. Later traditions connected with the Nārada Bhakti Sūtra or independent legends of Nārada are not automatically dependent on this Purāṇa, but they inhabit a shared religious imagination in which Nārada embodies mobile, vocal and communicative bhakti.',
    'The text is therefore best understood as an institutional archive of medieval Vaiṣṇava devotion: it shows how temple, household, pilgrimage and scriptural practices could be coordinated within one Purāṇic framework.'
  ]);
  paras('Nāradīya Purāṇa','Rites, dharma and social history',[
    'Vrata, dāna, pūjā, sacred bathing and pilgrimage provide unusually concrete evidence for the practices idealized by the text. These prescriptions are normative rather than documentary descriptions of every community, but they reveal what compilers wanted householders and patrons to regard as meritorious action.',
    'Gifts also expose the social dimension of merit. Donor, recipient, place and calendar can all affect the value assigned to an act. Religious practice is consequently embedded in relationships among households, ritual specialists and sacred institutions rather than imagined as purely private devotion.',
    'Pilgrimage chapters likewise imply routes, custodians and local economies even when the Purāṇa does not describe them administratively. Read beside inscriptions and regional evidence, they help reconstruct the social infrastructure through which sacred geography was maintained.'
  ]);

  paras('Bhāgavata Purāṇa','Date of composition',[
    'The date of the received Bhāgavata remains debated because different kinds of evidence point to different horizons. Scholars have compared its philosophical vocabulary, poetic style, relationship to southern bhakti, citation history and the development of Kṛṣṇa iconography. A broad range within the later first millennium is therefore safer than any claim that all twelve books were composed at one moment.',
    'The old attribution of authorship to the thirteenth-century scholar Bopadeva cannot explain evidence that the text was known earlier. The real historical problem is consequently how far before the early second millennium the received twelve-skandha architecture had stabilized, and which individual passages may preserve older or later strata.',
    'The Purāṇa’s literary coherence is greater than that of many vast encyclopedic compilations, but coherence does not remove textual history. Traditional narrative, philosophical exposition, dynastic material and Kṛṣṇa devotion could all be inherited and reshaped during redaction.'
  ]);
  sub('Bhāgavata Purāṇa','Structure','The movement of the twelve skandhas',[
    'The twelve books form a deliberate progression around the approaching death of King Parīkṣit. The opening establishes the problem of what one should hear and remember at death; the middle books expand creation, avatāras, cosmology, exemplary devotees and genealogy; the tenth gives the great Kṛṣṇa cycle; the eleventh turns toward instruction and withdrawal; and the twelfth closes the frame with Kali-yuga and Parīkṣit’s liberation.',
    'This architecture matters because the tenth book should not be isolated from the nine books that prepare for it. Dhruva, Prahlāda, Gajendra, Ajāmila, Bharata and other figures establish a devotional grammar in which divine remembrance repeatedly exceeds status, ritual success or worldly power.',
    'The eleventh book is equally important for the theology of the whole. The Uddhava teaching, the avadhūta’s teachers, yoga and reflections on knowledge show that the Bhāgavata does not reduce religion to narrative emotion; it deliberately integrates devotional love with contemplative and philosophical disciplines.'
  ]);
  sub('Bhāgavata Purāṇa','Contents','Kṛṣṇa beyond the Vraja childhood cycle',[
    'Modern devotional reception often foregrounds Kṛṣṇa’s Vraja childhood, Govardhana and the rāsa cycle. The tenth skandha, however, is much larger. Mathurā, Dvārakā, royal marriages, conflicts with Jarāsandha and other kings, the Yādava polity and the later destruction of the clan are essential to the narrative arc.',
    'The movement from pastoral Vraja to royal Dvārakā allows the Purāṇa to present the same divine person in radically different social worlds. Intimate devotion, kingship, political strategy and cosmic sovereignty are not assigned to separate gods; they are held together in one Kṛṣṇa theology.',
    'This breadth also differentiates the text from popular retellings that end with the rasa līlā. The received Sanskrit work insists on a complete life-world whose conclusion leads directly into the theological instruction of the eleventh book.'
  ]);
  sub('Bhāgavata Purāṇa','Contents','Exemplary devotees before Kṛṣṇa',[
    'The earlier skandhas create a gallery of devotional figures whose circumstances differ sharply. Dhruva begins from wounded royal ambition, Prahlāda faces persecution, Gajendra calls out in mortal danger, Ajāmila becomes a paradigm for the power of the divine name, and Bharata illustrates the subtle persistence of attachment.',
    'These narratives give bhakti ethical and existential range. Devotion can arise in a child, king, animal, fallen householder or renouncer; it can coexist with knowledge, ritual and social duty while also exposing the limits of those disciplines when they become detached from remembrance of Bhagavān.',
    'The tenth book thus appears not as a sudden shift to devotion but as the culmination of a theology already established narratively across the preceding books.'
  ]);
  paras('Bhāgavata Purāṇa','Theology',[
    'A central theological strategy is to relate Brahman, Paramātman and Bhagavān as modes in which one nondual reality is apprehended. Later Vedānta traditions disagree over the metaphysical implications of that formula, but its presence helps explain why the Bhāgavata could be read by several Vaiṣṇava schools without yielding one identical doctrinal system.',
    'The Purāṇa repeatedly treats hearing and narrating divine acts as transformative practice. Literary form is therefore inseparable from theology: the listener is not merely learning about Bhagavān but participating in a recommended discipline of śravaṇa and kīrtana.',
    'Love of Kṛṣṇa reaches its most radical expression in the gopī narratives, where devotion is valued above social calculation and reward. Later traditions developed sophisticated rasa theology from these chapters, but the Sanskrit text itself already presents longing, separation and remembrance as modes of religious knowledge.'
  ]);
  paras('Bhāgavata Purāṇa','Critical edition',[
    'The Bhāgavata has a comparatively stable twelve-book architecture, yet manuscripts and commentaries preserve variant readings and occasional differences in verse or chapter division. The traditional total of eighteen thousand verses should be understood as a canonical number rather than an exact count that every witness reproduces.',
    'Śrīdhara Svāmin’s Bhāvārthadīpikā became the most influential early commentary and an important witness to medieval textual reception. Later Vallabha and Gauḍīya exegetes built distinct theological readings on the same Purāṇa, creating a commentarial record that is indispensable for interpreting difficult passages.',
    'A reliable citation should therefore give skandha, chapter and verse and, where interpretation depends on wording, identify the Sanskrit edition or commentary. Translation page numbers alone conceal the textual and exegetical history.'
  ]);
  paras('Bhāgavata Purāṇa','Influences and reception',[
    'The Bhāgavata generated one of the richest receptions of any Purāṇa. Its narratives entered painting, temple iconography, recitation, kīrtana, dance-drama, vernacular poetry and theological commentary across South Asia. Individual episodes often circulated far beyond readers of the complete twelve-book Sanskrit work.',
    'Gauḍīya Vaiṣṇava, Puṣṭimārga and other Kṛṣṇa traditions all give the Purāṇa high authority while interpreting its metaphysics and devotional hierarchy differently. The text’s influence therefore lies not in producing doctrinal uniformity but in providing a shared scriptural field for competing and complementary Vaiṣṇava readings.',
    'Its seven-day recitation traditions also show how a large Sanskrit text can be transformed into a public religious event. Narrative sequence, ritual listening and community gathering become one form of reception.'
  ]);

  paras('Agni Purāṇa','Date of composition',[
    'The Agni Purāṇa is composite to an exceptional degree. Its mythological, ritual and technical chapters cannot plausibly be dated as one authorial composition, and individual blocks may preserve material older than the compilation that now contains them. Most historical discussions therefore place the developed encyclopedic form in the early medieval period while allowing continued interpolation and rearrangement.',
    'Technical subject matter is particularly useful for relative dating. Temple iconography, architecture, polity, literary theory and other śāstric clusters can be compared with independent specialist works. Similarity may indicate borrowing, a shared source or participation in the same scholastic environment, and the direction of dependence must be argued rather than assumed.',
    'The work’s encyclopedic character itself belongs to Purāṇic history. By the early medieval period the genre had expanded far beyond the classical five topics, and the Agni represents that development in concentrated form: sacred narrative becomes a container for an entire map of learned disciplines.',
    'Because the technical clusters may have different histories, the safest chronological statement distinguishes the age of a recognizable Agni compilation from the age of each chapter block. A late redactor can transmit genuinely old material without making the whole Purāṇa equally old.'
  ]);
  sub('Agni Purāṇa','Structure','The logic of an encyclopedic sequence',[
    'Common printed editions contain roughly 382 or 383 chapters. Unlike Purāṇas divided into a small number of stable skandhas, the Agni proceeds through a long chapter sequence in which myth, worship and technical instruction can change topic abruptly.',
    'Those abrupt transitions are historically informative. They suggest compilation from thematic dossiers: temple and image construction, royal government and warfare, medicine, grammar, metrics, poetics, omens, yoga and liberation. The work is better understood as a sacred compendium than as a continuous narrative.',
    'Chapter numbering should be tied to a particular edition because recensional variation affects boundaries and the placement of technical material. A citation such as “Agni Purāṇa on architecture” is not sufficiently precise for serious comparison with another śāstra.'
  ],[
    'Mythology and avatāra traditions.',
    'Temple, image, consecration and architectural instruction.',
    'Kingship, administration, military science and law.',
    'Medicine and practical sciences.',
    'Grammar, lexicography, metrics, poetics and dramaturgy.',
    'Yoga, knowledge and liberation.'
  ]);
  sub('Agni Purāṇa','Contents','Temple, image and consecration',[
    'The temple and iconographic chapters place the Agni within the same broad intellectual world as vāstu, śilpa and Āgamic literature. Plans, measurements, divine forms and consecration rites are treated as organized knowledge whose correctness contributes to the efficacy and dignity of sacred space.',
    'These chapters should not be read as proof that every surviving temple was built from the Agni Purāṇa. Prescriptive texts offer ideal models, and builders worked within regional craft traditions. Their value increases when textual prescriptions are compared with archaeology, inscriptions and specialist architectural works.',
    'The coexistence of images of Viṣṇu, Śiva, goddesses and other deities also illustrates the encyclopedic religious horizon of the work. A Purāṇa framed through Agni is not confined to one cultic technology.'
  ]);
  sub('Agni Purāṇa','Contents','Kingship, administration and warfare',[
    'The political chapters imagine the king as guardian of order. Counsel, officials, fortification, military organization, diplomacy and punishment appear within a moral universe in which statecraft is ultimately responsible to dharma.',
    'This material overlaps the world of nīti and artha literature but should not simply be equated with the Arthaśāstra. The Purāṇa condenses and reorganizes political knowledge for a different genre and audience, often placing practical rules beside religious obligations and expiation.',
    'Military instruction likewise belongs to the history of dhanurveda and royal culture. Its significance is greatest when treated as prescriptive intellectual history rather than a literal report of how every medieval army operated.'
  ]);
  sub('Agni Purāṇa','Contents','Medicine, language and literary theory',[
    'The Agni contains compact medical instruction alongside chapters on grammar, vocabulary, metrics, figures of speech and dramaturgy. This extraordinary juxtaposition shows the compiler’s ambition to map the disciplines required for an educated and ordered life.',
    'Literary-theoretical chapters preserve definitions that can be compared with specialist alaṃkāra and dramaturgical traditions. Even where the Purāṇa is not the earliest witness, it demonstrates how scholastic categories moved into broad compendia and could be transmitted to readers outside a single technical school.',
    'The medical chapters function similarly. They do not replace the large Ayurvedic saṃhitās, but their inclusion shows medicine being recognized as part of a Purāṇic encyclopedia of useful knowledge.'
  ]);
  paras('Agni Purāṇa','Theology',[
    'The Agni Purāṇa is religiously plural within a Brahmanical framework. Vaiṣṇava, Śaiva and other ritual materials coexist, while liberation is discussed through yoga and knowledge. Its theological profile is therefore not captured by assigning the work to one deity on the basis of title alone.',
    'The encyclopedic structure implies a theology of knowledge in which practical arts are not wholly secular. Architecture creates sacred space, polity protects order, medicine sustains embodied life, and literary learning belongs to the culture through which scripture and praise circulate.',
    'This does not mean every technical rule is itself a theological proposition. Rather, the Purāṇa places disciplines inside an ultimate horizon of dharma and mokṣa, allowing worldly expertise and soteriological teaching to share one textual frame.'
  ]);
  paras('Agni Purāṇa','Critical edition',[
    'No single modern stemmatic critical edition of the complete Agni Purāṇa has displaced the major printed recensions. Its enormous range and the modular character of technical blocks make the editorial task unusually difficult.',
    'Source criticism must compare whole sequences, not merely isolated verbal parallels. If a group of chapters shares order, terminology and distinctive errors with a technical treatise, dependence becomes more plausible; generic agreement may instead reflect a common scholastic reservoir.',
    'The relationship between chapters and independent śāstras is therefore one of the most promising routes into the text’s formation. A future critical edition would ideally combine manuscript genealogy with subject-specific expertise in architecture, polity, medicine and literary theory.',
    'Until such work is complete, precise references should identify edition and chapter and avoid treating one printed sequence as a timeless invariant Agni Purāṇa.'
  ]);
  paras('Agni Purāṇa','Influences and reception',[
    'The Agni has often been received selectively. Historians of architecture consult its temple chapters; historians of literature consult poetics; scholars of polity, warfare, medicine and iconography extract other clusters. This selective use is not a modern distortion so much as a response to the text’s genuinely modular encyclopedia.',
    'Its importance lies partly in transmission. A specialist doctrine preserved in a Purāṇa can reach a broader textual environment and acquire religious framing even when its technical origin lies elsewhere. The Purāṇa thus acts as a bridge between śāstric and Purāṇic learning.',
    'For intellectual history, the work shows that medieval classifications of knowledge were less compartmentalized than modern academic departments. Ritual, government, medicine, language, art and liberation could appear inside one authoritative Sanskrit compilation.'
  ]);
  paras('Agni Purāṇa','Rites, dharma and social history',[
    'Temple building, image installation, mantra, household observance, expiation and gift form one practical layer of the Agni, while royal and legal chapters form another. Read together they present a normative vision in which sacred institutions, households and kingship support a shared moral order.',
    'The social historian must distinguish prescription from practice. A rule about punishment, medical treatment, temple measurement or donation is evidence for an idealized intellectual model; it becomes evidence for actual institutions only when compared with inscriptions, archaeological remains or other documentary sources.',
    'The text is nevertheless exceptionally useful because it preserves many kinds of norm in one place. It allows comparison of the body, household, temple and kingdom as differently scaled fields that are all imagined as requiring disciplined order.'
  ]);
})();