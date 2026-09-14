(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const T=x=>typeof x==='string'?x:(x?.text||x?.summary||x?.description||x?.note||x?.title||'');
  const U=xs=>{const seen=new Set();return xs.map(T).map(x=>String(x||'').trim()).filter(x=>{const k=N(x);if(!k||seen.has(k))return false;seen.add(k);return true;});};
  const E=name=>D[`Purāṇa:${name}`]||D[name]||{};
  function sec(e,title){return A(e.articleSections).find(s=>N(s?.title)===N(title));}
  function add(name,title,{paragraphs=[],bullets=[]}={}){
    const e=E(name);if(!Object.keys(e).length)return;const sections=A(e.articleSections).map(s=>Object.assign({},s,{paragraphs:A(s.paragraphs).slice(),bullets:A(s.bullets).slice(),subsections:A(s.subsections).slice()}));
    let s=sections.find(x=>N(x.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[]};sections.push(s);}
    s.paragraphs=U([...A(s.paragraphs),...paragraphs]);s.bullets=U([...A(s.bullets),...bullets]);
    D[`Purāṇa:${name}`]=Object.assign({},e,{articleSections:sections,mahapuranaAudited:true});
  }

  add('Brahma Purāṇa','Contents',{paragraphs:[
    'The received Brahma Purana is defined as much by sacred geography as by cosmogony. Two especially large religious landscapes are the Purushottama-Jagannatha material of Odisha and the Gautami Mahatmya of the Godavari. They should be treated as major components of the surviving work, not as incidental appendices.',
    'The title Adi Purana reflects its conventional first place in several Mahapurana lists; it does not prove that the present pilgrimage-heavy recension is chronologically the oldest extant Purana.'
  ],bullets:['Creation and genealogy','Purushottama/Jagannatha and Odisha sacred geography','Gautami (Godavari) Mahatmya','Solar material and Surya worship','Vrata, gifts and pilgrimage practice']});
  add('Brahma Purāṇa','Rites, dharma and social history',{paragraphs:['Hazra’s use of the Brahma Purana is especially important where ritual and pilgrimage passages can be compared with Dharma literature and with quotations preserved outside the present printed recension. The discrepancy between old quotations and the surviving text is evidence for textual replacement and growth.']});

  add('Padma Purāṇa','Structure',{paragraphs:[
    'The two principal recensional organizations must remain visible. The Bengal recension has five books—Srishti, Bhumi, Svarga, Patala and Uttara—while the western/printed tradition commonly has six, with a Brahma book and a differently arranged opening. Entire chapter blocks differ, not merely individual readings.'
  ]});
  add('Padma Purāṇa','Contents',{bullets:['Pushkar and Brahma pilgrimage material','Bhumi-khanda legends and pilgrimage','Patala-khanda narrative and sectarian material','Large Uttara-khanda ritual, vrata and devotional collections','Famous Sattva-Rajas-Tamas Purana classification in a late Padma stratum']});

  add('Śiva Purāṇa','Structure',{paragraphs:[
    'There is no single universally fixed Shiva Purana table of contents. One widespread printed recension has seven Samhitas—Vidyeshvara, Rudra, Shatarudra, Kotirudra, Uma, Kailasa and Vayaviya—while another important manuscript/printed organization has five principal Samhitas and 212 chapters. The article therefore treats “the Shiva Purana” as a recensional tradition.'
  ]});
  add('Śiva Purāṇa','Contents',{bullets:['Linga and Shiva worship','Daksha, Sati and the destruction of the sacrifice','Parvati’s austerity and marriage to Shiva','Kumara/Skanda and Ganesha cycles','Jyotirlinga and sacred-place traditions','Mantra, yoga and liberation teachings']});

  add('Liṅga Purāṇa','Structure',{paragraphs:[
    'The common recension has a Purva part of 108 chapters and an Uttara part of 55. A striking internal verse, however, says the Uttara once had forty-six chapters; the mismatch is direct evidence that the transmitted work expanded.'
  ]});
  add('Liṅga Purāṇa','Theology',{paragraphs:['The linga is treated as the “mark” of the immeasurable Shiva rather than merely as a cult object. The work nevertheless preserves Vedic material and reverence for Vishnu and Brahma, so its Shaiva supremacy theology does not erase the wider Puranic pantheon.']});

  add('Garuḍa Purāṇa','Contents',{paragraphs:[
    'The popular identification of the Garuda Purana with death is badly disproportionate. Roughly ninety percent of the received work belongs to the Purvakhanda and concerns the world of the living; the Pretakhanda is the smaller section devoted to death, funerary rites and post-mortem destiny.'
  ],bullets:['Vishnu worship and pilgrimage','Iconography and temple material','Polity and ethics','Ayurveda and medicine','Gemology and testing precious stones','Grammar, metrics and other sciences','Pretakhanda: death ritual, preta journey, Yama and hells']});
  add('Garuḍa Purāṇa','Manuscripts and editions',{paragraphs:['The Pretakhanda is especially unstable: substantially different versions circulate, and chapter numbering varies sharply. Funeral claims should therefore cite the recension or edition rather than a bare chapter number detached from its textual witness.']});

  add('Nāradīya Purāṇa','Contents',{paragraphs:[
    'Purvabhaga chapters 92–109 are a uniquely valuable bibliographic dossier: eighteen successive chapters summarize the eighteen Mahapuranas, one Purana per chapter. Their descriptions often differ from the contents of modern recensions and are therefore evidence for earlier states of those titles.',
    'The Naradiya Mahapurana must be kept distinct from the Brihannaradiya Upapurana. Their shared association with Narada does not make them one text.'
  ],bullets:['Vishnu worship and bhakti','Rukmangada narrative','Ganges, Kashi, Gaya and neighbouring pilgrimage Mahatmyas','Chapters 92–109: summaries of the eighteen Mahapuranas']});

  add('Bhāgavata Purāṇa','Contents',{bullets:['Book 1: Vyasa, Narada, Parikshit and Shuka frame','Books 2–5: creation, Kapila, Dhruva, Prithu, Rishabha-Bharata and cosmography','Books 6–8: Ajamila, Vritra, Prahlada, Gajendra, churning and Vamana','Book 9: solar and lunar dynasties','Book 10: Krishna from Vraja through Mathura and Dvaraka','Book 11: Uddhava Gita and the end of the Yadavas','Book 12: Kali age, future dynasties, dissolution and conclusion']});
  add('Bhāgavata Purāṇa','Influences and reception',{paragraphs:['Sridhara Svamin’s Bhavarthadipika became the most influential early Sanskrit commentary and was received across sectarian boundaries. Vallabha, the Gaudiya Vaishnava tradition and other Krishna traditions then developed extensive independent commentarial and liturgical receptions.']});

  add('Agni Purāṇa','Contents',{paragraphs:['The Agni Purana is not organized like a continuous mythic narrative. Its 382–383 chapters function as a medieval encyclopedia in which specialist summaries often follow one another with little transition. That miscellaneous structure is itself part of the history of the text.'],bullets:['Temple, monastery and image construction','Iconography and consecration','Kingship, polity, warfare and weapons','Ayurveda, veterinary and practical sciences','Grammar and lexicography','Metrics, poetics, rhetoric and rasa','Yoga, moksha and Vedantic summaries']});
  add('Agni Purāṇa','Rites, dharma and social history',{paragraphs:['Hazra and later scholars use the Agni Purana cautiously because its technical chapters are layered. Its ritual and Dharmashastra-like passages are historically valuable, but the date of one borrowed or summarized specialist tract cannot automatically date all 382–383 chapters.']});

  add('Skanda Purāṇa','Manuscripts and editions',{paragraphs:[
    'The old Skandapurana is anchored by exceptionally early Nepalese manuscript evidence, including a witness usually dated around 810–811 CE. The modern Groningen/Leiden critical edition reconstructs this older text from manuscript evidence rather than from the enormous later seven-book printed corpus.',
    'The later Skanda corpus is a vast library of regional Mahatmyas and sacred geography. It should not be silently projected back into the old Skandapurana manuscript tradition.'
  ]});
  add('Skanda Purāṇa','Contents',{bullets:['Old Skandapurana: early Shaiva mythology and sacred geography','Later corpus: Kashi, Avanti, Reva/Narmada and many regional Mahatmyas','Tirtha, vrata, temple and pilgrimage traditions','Skanda/Karttikeya material within a much wider Shaiva encyclopedia']});

  add('Bhaviṣya Purāṇa','Structure',{paragraphs:['The common Bombay recension has four principal parts—Brahma, Madhyama, Pratisarga and Uttara—but other manuscripts omit, divide or reorganize them. Five broad manuscript versions are known, so the printed four-part arrangement is not a universal archetype.']});
  add('Bhaviṣya Purāṇa','Contents',{paragraphs:[
    'The Brahma part contains rites, social rules, festivals and substantial solar material; the Madhyama is strongly ritual/Tantric; the Pratisarga contains the famous “future history” layers; the Uttara or Bhavishyottara is a vast compendium of festivals, vrata, gifts and pilgrimage.',
    'Late Pratisarga passages reflect knowledge of medieval and early modern communities and political history. They are evidence for continuing Puranic revision, not proof that the whole Purana was composed in the nineteenth century or that late history was predicted by an early author.'
  ]});

  add('Brahmavaivarta Purāṇa','Structure',{paragraphs:['The received text has four books: Brahma, Prakriti, Ganesha and Krishnajanma. The common recension has about 276 chapters and presents a dramatically different work from the older Brahmavaivarta known through medieval quotations.']});
  add('Brahmavaivarta Purāṇa','Theology',{paragraphs:['The received Purana places Krishna and Radha at the summit of reality and makes Goloka the transcendent divine realm. Prakriti and the principal goddesses are integrated into this Radha-Krishna theology; other major gods are interpreted within the same supreme Krishna framework.']});

  add('Mārkaṇḍeya Purāṇa','Contents',{paragraphs:[
    'The work begins from unresolved Mahabharata questions. Jaimini is sent to four wise birds, whose answers occupy a large early portion of the Purana and combine myth, karma, dharma and shraddha teaching.',
    'Chapters 81–93 form the thirteen-chapter Devi Mahatmya, transmitted independently as Chandi or Durga Saptashati. Its Suratha-Samadhi frame and three great Goddess cycles made this embedded work far more liturgically influential than most of the surrounding Purana.'
  ],bullets:['Jaimini and the wise birds','Yoga teaching, especially chapters 39–43','Manvantara and royal narratives','Devi Mahatmya, chapters 81–93','Dharma, karma, samsara and shraddha']});

  add('Vāmana Purāṇa','Structure',{paragraphs:[
    'Older printed editions contained about 95–96 chapters. The All-India Kashiraj Trust critical edition has 69 chapters plus a separate 28-chapter Saro-mahatmya devoted to sacred places around Kurukshetra and Thanesar. A Brhad-vamana with four Samhitas is mentioned in tradition but is no longer extant.'
  ]});
  add('Vāmana Purāṇa','Contents',{paragraphs:['The title suggests Vishnu’s dwarf incarnation, but much of the received text glorifies Shiva and the Goddess. Its Kurukshetra sacred geography is at least as characteristic of the extant work as the Vamana narrative itself.']});

  add('Varāha Purāṇa','Structure',{paragraphs:[
    'Printed editions have 217–218 chapters; the Kashiraj Trust critical edition has 215. The Narada Purana describes a two-part Varaha Purana whose first part broadly resembles the surviving work but whose Uttarabhaga is not extant.',
    'Hazra distinguished four major blocks by narrator and subject: chapters 1–112, 113–192, 193–212 (the Dharma Samhita), and the closing Brahma-Sanatkumara section. This fourfold analysis is essential evidence that the received Purana is a compilation of strata rather than one uniform composition.'
  ]});
  add('Varāha Purāṇa','Contents',{bullets:['Varaha and Earth dialogue','Mathura and north Indian sacred geography','Vrata, pilgrimage and temple religion','Dharma Samhita, chapters 193–212 in the received organization','Goddess and regional cult materials']});

  add('Matsya Purāṇa','Contents',{paragraphs:[
    'The flood and Matsya-Manu story is only the opening identity of the text. The received 291-chapter Purana is highly encyclopedic and preserves important materials on festivals and samskaras, pilgrimage, kingship, temple and house architecture, image-making, gifts and yoga.',
    'The work also gives one of the best-known early formulations of the five characteristics of a Purana. Its own contents immediately show, however, that actual Puranas ranged far beyond those five subjects.'
  ],bullets:['Matsya and the flood','Five-characteristic definition of Purana','Festivals and domestic observances','Prayaga, Narmada and Avimukta/Kashi Mahatmyas','Temple, sculpture, painting and house architecture','Royal duties and government','Dana and religious merit']});

  add('Kūrma Purāṇa','Structure',{paragraphs:['The critical edition has 95 chapters, divided into 51 chapters of the Purva-vibhaga and 44 of the later division. Tradition gives 17,000 verses, whereas the surviving text is roughly 6,000 verses.']});
  add('Kūrma Purāṇa','Theology',{paragraphs:[
    'Rocher singled out the Kurma Purana as especially interesting for its religious inclusiveness: although named for Vishnu’s tortoise form, it reveres Vishnu, Shiva and Shakti without allowing one deity to dominate every section.',
    'Its eleven-chapter Ishvara Gita places Shiva in the role of philosophical teacher and develops Atman, Brahman, Prakriti, Maya, yoga, bhakti and liberation in an Advaita-inflected synthesis.'
  ]});

  add('Brahmāṇḍa Purāṇa','Contents',{paragraphs:[
    'The received Brahmanda is a container for several large embedded works and Mahatmyas as well as older cosmology and genealogy. The Lalitopakhyana is central to Sri Vidya Goddess theology; the Adhyatma Ramayana is a 65-chapter Advaita-Rama work transmitted within important Brahmanda recensions.',
    'Because these embedded texts and regional Mahatmyas are not uniform across all manuscripts, the article distinguishes the Brahmanda textual tradition from any one modern printed compilation.'
  ],bullets:['Cosmic egg, creation, kalpas and yugas','Genealogies and sacred geography','Lalitopakhyana and Lalita Sahasranama tradition','Adhyatma Ramayana in major recensions','Regional Mahatmyas and pilgrimage']});

  add('Vāyu Purāṇa','Structure',{paragraphs:[
    'The Vayu Purana has markedly different organizations. Anandashrama/Vangavasi editions divide it into Prakriya (1–6), Anushanga (7–64), Upodghata (65–99) and Upasamhara (100–112), while other editions divide the text into two large parts. The Gaya Mahatmya at the end is absent from some manuscripts and also circulates independently.'
  ]});
  add('Vāyu Purāṇa','Contents',{bullets:['Creation and cosmology','Manvantaras and cosmic chronology','Genealogies of gods, sages and royal dynasties','Astronomy and movement of heavenly bodies','Sacred geography','Gaya Mahatmya in some recensions']});

  add('Devī Bhāgavata Purāṇa','Structure',{paragraphs:['The received Devi Bhagavata has twelve books and 318 chapters. Its own traditional total is 18,000 verses, while common Sanskrit recensions are close to that figure rather than radically shorter.']});
  add('Devī Bhāgavata Purāṇa','Theology',{paragraphs:['Mahadevi is the supreme reality from whom gods, worlds and forms arise. The work combines Goddess bhakti with Vedantic, yogic, mantra and ritual teaching rather than limiting Shakta religion to mythic battle narratives.']});
  add('Devī Bhāgavata Purāṇa','Influences and reception',{paragraphs:['The text’s own colophons style it a Mahapurana and Shakta traditions receive it as such, while other traditional eighteen-Purana lists give the corresponding place to the Bhagavata Purana. The classification dispute is part of the history of the canon and should be stated rather than silently resolved.']});

  add('Mahābhāgavata Purāṇa','Influences and reception',{paragraphs:[
    'The Mahabhagavata is a late Shakta Purana associated especially with Bengal. Modern scholarship often classifies it among the Upapuranas, while its own eighty-first-chapter colophon uses Mahapurana language; the site preserves that self-designation without pretending the external classification is unanimous.'
  ]});
  add('Mahābhāgavata Purāṇa','Contents',{bullets:['Mahadevi as supreme Goddess','Sati, Daksha and Shiva','Parvati and Kali traditions','Ganga and Goddess manifestations','Tantric forms of worship and Mahavidya-oriented material','Vedantic interpretation within a Shakta framework']});
})();
