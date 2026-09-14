(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => { D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data); };
  put('Nāradīya Purāṇa', {
    sanskritTitle:'नारदीयपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); the Pūrvabhāga is framed largely as Sanatkumāra teaching Nārada, while the Uttarabhāga has its own narrative framing',
    language:'Sanskrit',
    booksCount:'2 bhāgas: Pūrvabhāga in 4 pādas, 125 chapters; Uttarabhāga, 82 chapters; 207 chapters in the common received arrangement',
    verseCount:'25,000 verses in traditional Mahāpurāṇa catalogues; the surviving text is substantially shorter and edition-dependent',
    period:'Composite early-medieval Vaiṣṇava Purāṇa. P. V. Kane proposed roughly 700–1000 CE; R. C. Hazra proposed about 875–1000 CE for the main first-part compilation, with the second part established by the early second millennium.',
    status:'Extant Mahāpurāṇa, distinct from the shorter Bṛhannāradīya Upapurāṇa. Older catalogues and scholarship often confused the two.',
    extent:'An encyclopedic first part combining Vaiṣṇava devotion with Veda and Vedāṅga surveys, dharma, pilgrimage, mantra and summaries of other Purāṇas; an 82-chapter second part strongly associated with Ekādaśī observance and the Rukmāṅgada narrative.',
    primaryRecensions:[
      'The common Nāradīya/Nārada Mahāpurāṇa: Pūrvabhāga 125 chapters in four pādas and Uttarabhāga 82 chapters.',
      'The Bṛhannāradīya Purāṇa is a separate shorter Upapurāṇa and should not be substituted for the Mahāpurāṇa.',
      'Bombay and later printed recensions preserve the broad architecture but vary in readings and detail.'
    ],
    leadParagraphs:[
      'The Nāradīya Purāṇa is an unusually self-conscious encyclopedic Mahāpurāṇa. Its first part teaches devotion, pilgrimage and dharma while also surveying Vedic branches, Vedāṅgas and the contents of other Purāṇas, making it valuable for the history of how medieval Sanskrit scholars mapped their own sacred-literary world.',
      'The work is strongly Vaiṣṇava, repeatedly praising Viṣṇu or Nārāyaṇa and bhakti, but it is not narrow in subject matter. Śaiva material, tīrtha traditions, astronomy, grammar, mantra, gifts, śrāddha and social-religious duties all enter the same Purāṇic frame.',
      'A basic textual precaution is to distinguish the Mahāpurāṇa from the Bṛhannāradīya Upapurāṇa. Confusing them produces false statements about chapter totals, verse totals and contents.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'The Nāradīya Purāṇa is composite rather than the work of one historical author. Kane placed the main compilation roughly between 700 and 1000 CE; Hazra proposed about 875–1000 CE for the first part on the basis of ritual history, quotations and relations with other texts.',
        'The Uttarabhāga has partly independent framing and should not simply be assigned the same date as every chapter of the Pūrvabhāga. Citations in medieval nibandha and Dharmaśāstra writers show that substantial second-part material, including Ekādaśī traditions, was established by the twelfth century.',
        'Its awareness of developed Vedic, Vedāṅga, Purāṇic and ritual corpora fits an early-medieval scholarly milieu in which these traditions were already deeply interreferential.'
      ]},
      {title:'Structure',paragraphs:[
        'The common received Mahāpurāṇa has two large divisions. Pūrvabhāga contains 125 chapters arranged in four pādas; Uttarabhāga contains 82 chapters.',
        'Traditional catalogues assign 25,000 verses, but that number should not be equated with a counted total in one modern printing.'
      ],subsections:[
        {title:'Pūrvabhāga',bullets:['Four pādas, 125 chapters total.','Sanatkumāra–Nārada instruction is a major frame.','Religious encyclopedia: devotion, tīrtha, dharma, mantra, Veda/Vedāṅga and Purāṇa surveys.']},
        {title:'Uttarabhāga',bullets:['82 chapters.','A major opening sequence develops Ekādaśī through the Rukmāṅgada–Mohinī story.','Later chapters continue vrata, tīrtha and devotional instruction.']}
      ]},
      {title:'Contents',paragraphs:[
        'The first part ranges from cosmology and bhakti to highly practical religious knowledge. Its summaries of Vedic branches, Vedāṅgas and Purāṇas are especially important for Purāṇic self-classification.',
        'Pilgrimage sections describe rivers and tīrthas, while chapters on vows, purity, gifts, śrāddha and good conduct connect household practice with Vaiṣṇava merit.',
        'The second part makes Ekādaśī observance narratively vivid through King Rukmāṅgada, turning a calendrical vow into a test of truthfulness, family obligation and devotion.'
      ],bullets:['Vaiṣṇava bhakti and divine names.','Vedas, Vedāṅgas, mantra, astronomy and grammar.','Summaries of the eighteen Mahāpurāṇas.','Gaṅgā and wider tīrtha geography.','Ekādaśī and the Rukmāṅgada cycle.','Varṇāśrama, expiation, śrāddha and dāna.']},
      {title:'Theology',paragraphs:[
        'Viṣṇu or Nārāyaṇa is the supreme devotional center, and remembrance, worship, vrata and bhakti recur as paths to religious attainment.',
        'The text nevertheless incorporates a broad Brahmanical sacred world. Śaiva and other traditions are integrated without erasing the dominant Vaiṣṇava hierarchy.',
        'Ekādaśī exemplifies disciplined bhakti: calendrical observance, truthfulness and loyalty to Viṣṇu become mutually reinforcing religious virtues.'
      ]},
      {title:'Critical edition',paragraphs:[
        'No complete modern stemmatic critical edition comparable to the Baroda Viṣṇu Purāṇa or Kashiraj Vāmana, Kūrma and Varāha editions has become standard for the whole Nāradīya.',
        'Textual criticism must first separate the Nāradīya Mahāpurāṇa from the Bṛhannāradīya Upapurāṇa. Printed Sanskrit recensions, manuscript catalogues, translations and medieval citations therefore remain essential evidence.',
        'When a medieval quotation is absent from a modern printing, the discrepancy should be recorded as evidence for transmission rather than silently harmonized.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Nāradīya became useful as a compendium of vows, pilgrimage, Vedic learning and Purāṇic classification.',
        'Its Ekādaśī teaching contributed to the broad Vaiṣṇava culture of fortnightly fasting and vigil, while Rukmāṅgada circulated in later vernacular and performance traditions.',
        'Its summaries of other Purāṇas provide evidence for medieval ideas of the canon, though they do not prove that every summarized Purāṇa already had exactly its modern form.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'The work is rich in prescriptive religion: daily conduct, purity, vrata, gifts, śrāddha and pilgrimage.',
        'These chapters are evidence for Brahmanical normative projects rather than direct statistical descriptions of society.'
      ],bullets:['Ekādaśī fasting, vigil and worship.','Tīrthayātrā and sacred bathing.','Dāna and merit-making.','Śrāddha and ancestral rites.','Varṇāśrama and sadācāra prescriptions.']},
      {title:'Further reading',bullets:['Ludo Rocher, The Purāṇas, for structure, nomenclature and textual history.','R. C. Hazra, Studies in the Purāṇic Records on Hindu Rites and Customs, for chronology and ritual history.','Narada Purana, Ancient Indian Tradition and Mythology translation and introductory study.']}
    ],
    chapterMap:['Pūrvabhāga: 125 chapters in four pādas.','Uttarabhāga: 82 chapters; Ekādaśī/Rukmāṅgada dominates a major early block.'],
    ritualHistory:'A major witness to Purāṇic authorization of vows, pilgrimage, gifts, śrāddha and Vaiṣṇava calendrical observance.',
    rituals:['Ekādaśī vrata','Vaiṣṇava pūjā and nāmasmaraṇa','Tīrtha bathing','Dāna','Śrāddha'],
    sacredGeography:['Gaṅgā and major river tīrthas','Wide pilgrimage networks described in māhātmya style'],
    dharma:['Varṇāśrama duties','Sadācāra','Purity and expiation','Ancestral rites'],
    reception:'Important as a Vaiṣṇava compendium, as a source for the Rukmāṅgada–Ekādaśī tradition and as an internal map of the Purāṇa corpus.',
    scholarlyPositions:['Kane: roughly 700–1000 CE for the main compilation.','Hazra: roughly 875–1000 CE for the first part; the second part was in circulation by the early second millennium.','Modern scholarship distinguishes Nāradīya Mahāpurāṇa from Bṛhannāradīya Upapurāṇa.'],
    dependencies:['Draws on and summarizes Vedic, Vedāṅga, Dharmaśāstra and Purāṇic traditions.','Medieval nibandha authors cite material attributed to the Nāradīya Purāṇa.'],
    primaryEvidence:['Two-part received structure of 207 chapters.','Medieval legal/ritual citations.','Internal summaries of other Purāṇas.'],
    sources:[
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard survey of Purāṇic textual history and individual works.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'hazra',title:'R. C. Hazra — Studies in the Purāṇic Records on Hindu Rites and Customs',detail:'Chronology and ritual-historical analysis.',url:'https://archive.org/details/in.ernet.dli.2015.110115'},
      {key:'narada',title:'Narada Purana — English translation and introductory study',detail:'Accessible translation of the received Mahāpurāṇa with discussion of sources and chronology.',url:'https://www.wisdomlib.org/hinduism/book/narada-purana-english'}
    ],
    bibliography:['P. V. Kane, History of Dharmaśāstra, discussions of Purāṇic chronology and medieval citation.'],
    mahapuranaFinal:true,mahapuranaAudited:true,mahapuranaBenchmark:true
  });
})();
