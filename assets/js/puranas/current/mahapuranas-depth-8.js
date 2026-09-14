(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function sec(name,title){const e=D['Purāṇa:'+name]||D[name];if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}

  paras('Nāradīya Purāṇa','Influences and reception',[
    'The Nāradīya’s catalogue chapters also have a reception history within modern scholarship. Because they describe the contents and identities of other Purāṇas, historians use them as medieval evidence for canon formation. Their value lies not in assuming that the compiler possessed our present editions, but in documenting which titles, classifications and expected contents were intelligible in the compiler’s own textual world.',
    'Its ritual reception is equally important. Vrata and pilgrimage chapters could be excerpted, cited and transmitted without readers engaging the entire Mahāpurāṇa. This modular use explains why the influence of the Nāradīya is often visible in ritual digests and local practice rather than through a celebrated commentary on the whole text.'
  ]);

  sub('Bhāgavata Purāṇa','Contents','Cosmology as a devotional problem',[
    'Skandhas Two, Three and Five devote substantial attention to creation, the cosmic person, planetary regions, Jambūdvīpa and the structure of the universe. These chapters are sometimes treated as detachable premodern cosmology, but within the Purāṇa they support devotional meditation by presenting the universe as a body, order or manifestation through which Bhagavān can be contemplated.',
    'The fifth-skandha cosmography also creates an interpretive challenge for later readers because its sacred spatial model differs from modern astronomy. Traditional commentators, modern devotional interpreters and historians have therefore developed different strategies: literal harmonization, symbolic reading, genre-sensitive interpretation and historical contextualization. A university treatment should distinguish these approaches instead of pretending the interpretive problem does not exist.'
  ]);

  paras('Agni Purāṇa','Rites, dharma and social history',[
    'Royal material adds another social dimension. Coronation, fortification, military organization, diplomacy, punishment and administrative advice place kingship inside a sacred encyclopedia. The ruler is not imagined as operating outside religion: protection, justice, ritual patronage and practical statecraft form parts of one normative office.',
    'The chapters on expiation and impurity should likewise be compared with Dharmaśāstra. They show how Purāṇic compilers translated juridical and ritual norms into a wider instructional corpus, often alongside devotional remedies. This makes the Agni a useful witness to the circulation of dharma knowledge beyond specialist legal treatises.'
  ]);

  paras('Brahmavaivarta Purāṇa','Structure',[
    'The four khaṇḍas also differ markedly in scale and emphasis. The Brahmakhaṇḍa establishes cosmological and Kṛṣṇa-centered premises; the Prakṛtikhaṇḍa organizes goddess and feminine divine power; the Gaṇeśakhaṇḍa develops Gaṇeśa narratives and cultic material; and the much larger Kṛṣṇajanmakhaṇḍa provides the principal Rādhā-Kṛṣṇa narrative universe. Treating the four as equivalent subdivisions obscures the dominance of the final book in the received work.',
    'Recensional work should therefore ask not only whether chapter totals vary but whether the proportional relationship among these khaṇḍas is stable. The unusual size and theological density of the Kṛṣṇajanmakhaṇḍa are relevant to the hypothesis that the received text underwent major late-medieval reshaping.'
  ]);

  paras('Mārkaṇḍeya Purāṇa','Structure',[
    'The larger Purāṇa’s frame is itself unusually important for understanding genre. Questions are passed through multiple narrators, and the famous episode of the wise birds answering Jaimini allows authoritative teaching to emerge from unexpected speakers. This nested architecture is not narrative ornament alone: it distributes authority across sages, kings, animals and embedded revelations and helps the compilation accommodate diverse inherited materials.',
    'The Devī Māhātmya’s formal compactness becomes more visible against this looser surrounding structure. Its repeated hymns, three battle cycles and return to the Suratha–Samādhi frame create a deliberate literary closure that explains why it could detach from the parent Purāṇa and circulate as an independent ritual scripture.'
  ]);

  paras('Vāmana Purāṇa','Theology',[
    'The relation between Śiva and Viṣṇu is best understood through local textual function rather than a global label. Vāmana provides the title and an avatāric horizon, but Śiva repeatedly becomes the deity whose myths explain the holiness of particular places. The received text therefore demonstrates how sectarian identities can be layered: Vaiṣṇava nomenclature and Śaiva sacred geography coexist without requiring one to be dismissed as accidental corruption.',
    'Pārvatī and the Śaiva household also participate in this geography. Myths of austerity, marriage, transgression and expiation are attached to mountains, lakes and tīrthas so that divine biography becomes spatial theology. Place is sacred because it records a transformation in the divine story, and pilgrimage reenacts that story through bodily movement.',
    'This theological structure makes merit relational rather than abstract. The same act—bathing, fasting, worship or gift—can acquire different value according to location because divine history differentiates space. The Vāmana is therefore a strong source for the Purāṇic theory that sacred geography modifies the efficacy of ritual.'
  ]);
  paras('Vāmana Purāṇa','Critical edition',[
    'Gupta’s editorial treatment of the Saro-māhātmya is also a methodological lesson for Purāṇic philology. By retaining a strongly attested but recensionally restricted block and numbering it separately, the edition refuses both extremes: neither deleting all later growth nor pretending that every transmitted chapter belongs to one uniform archetype. This approach is especially suitable to Purāṇas, whose textual history often consists of meaningful accretion.'
  ]);

  paras('Varāha Purāṇa','Influences and reception',[
    'The Mathurā material gives the Varāha a place in the long history of Vaiṣṇava sacred geography before the fully developed early-modern Vraja pilgrimage system. Later Kṛṣṇa traditions could inherit, reorganize or supersede older maps of the region. Comparing Purāṇic place lists across time is therefore a way to study the historical expansion of Vraja rather than assuming one timeless sacred landscape.',
    'The Purāṇa’s dharma and ritual passages also circulated through citation. Medieval digests that invoke Varāha authority demonstrate that selected normative verses acquired a reception independent of the continuous manuscript. These citations can preserve older readings and show which parts of a composite Purāṇa mattered to jurists and ritual specialists.'
  ]);
  sub('Varāha Purāṇa','Contents','Image worship and temple-centered Vaiṣṇavism',[
    'The received text contains material in which worship of Viṣṇu through images, offerings and sacred places becomes a major practical expression of devotion. This is important for the history of Purāṇic Vaiṣṇavism because it links avatāra narrative to durable institutions: a deity known through cosmic myth is also approached in a locally installed form.',
    'Such passages should be compared with Pāñcarātra and Vaikhānasa traditions without assuming identity. Shared practices can indicate a common temple culture while differences in mantra, initiation and ritual sequence preserve the boundaries of distinct textual genres.'
  ]);

  paras('Matsya Purāṇa','Theology',[
    'The flood narrative also constructs a theology of revelation under conditions of catastrophe. Knowledge survives because divine intervention preserves a recipient capable of transmitting order after dissolution. Manu is therefore not only biological ancestor but a bridge between cosmic preservation and the restoration of dharma.',
    'The text’s architectural material extends this preservation theology into built form. Temple measurement, iconography and consecration organize matter so that divine presence can remain stable in human communities. Cosmic order is thus reproduced at a smaller scale through planned sacred space.',
    'The inclusion of Śiva, Devī and other gods within a Matsya-Viṣṇu frame reflects the same encyclopedic pluralism found elsewhere in the work. Vaiṣṇava revelation provides narrative authority, but ritual knowledge is broad enough to serve a multi-deity Brahmanical environment.'
  ]);

  paras('Kūrma Purāṇa','Rites, dharma and social history',[
    'The coexistence of gṛhastha and saṃnyāsa ideals is socially significant. The Purāṇa does not imagine renunciation as a rejection of the entire dharmic order; it presents life stages as differentiated disciplines within a larger religious hierarchy. This allows ascetic authority to be acknowledged without making household society illegitimate.',
    'Its rules of purity, penance and gift also show the permeability between Purāṇa and Dharmaśāstra. Norms can be recontextualized within a theistic narrative and supported by promises of divine or karmic fruit. Purāṇic authority thereby broadens the audience and rhetorical form of legal-ritual teaching.',
    'The sectarian synthesis has institutional implications as well. A text capable of honoring Śiva and Viṣṇu within one sacred framework can legitimate shared pilgrimage sites and overlapping patronage without erasing distinct ritual communities. Literary accommodation should not be confused with social uniformity, but it is evidence for strategies by which plurality was managed.'
  ]);

  paras('Brahmāṇḍa Purāṇa','Structure',[
    'The large embedded works also create a hierarchy of textual scales. A reader may encounter the Brahmāṇḍa as a Mahāpurāṇa, the Lalitopākhyāna as a major internal narrative, the Lalitāsahasranāma as an independently recited hymn, or the Adhyātma Rāmāyaṇa as a separately copied scripture. Structure therefore has to be described both codicologically—what sits inside a manuscript—and functionally—what communities actually extract and transmit on its own.',
    'This modularity is one reason chapter totals vary so dramatically among editions. Inclusion or exclusion of an embedded work can change the apparent size and sectarian profile of the Purāṇa without altering the older cosmological core. A research citation should consequently identify both the enclosing Brahmāṇḍa and the internal work when relevant.'
  ]);
})();