(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const put = (name, data) => { D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data); };
  put('Bhāgavata Purāṇa', {
    sanskritTitle:'भागवतपुराणम्',
    traditionalAuthor:'Vyāsa (traditional attribution); principally Śuka narrating to King Parīkṣit, framed by Sūta before the sages of Naimiṣa',
    language:'Sanskrit',
    booksCount:'12 skandhas; 335 chapters in common received editions, while the Ahmedabad critical edition constitutes 329 chapters',
    verseCount:'Traditionally 18,000 verses; counts vary. The Ahmedabad critical edition constitutes 13,129 metrical stanzas and 452 prose passages, with variants and interpolations recorded separately.',
    period:'Composite Vaiṣṇava Purāṇa of the later first millennium CE. Friedhelm Hardy influentially argued for a ninth- or early tenth-century redaction in South India; the text was certainly known by the early eleventh century.',
    status:'Extant and exceptionally influential Vaiṣṇava Mahāpurāṇa with a very large manuscript/commentary tradition and a multi-volume critical edition published in Ahmedabad, 1996–2002.',
    extent:'Twelve skandhas move from cosmology, creation and avatāra theology through exemplary bhakti narratives to the immense Kṛṣṇa cycle of Skandha 10, the Uddhava teaching of Skandha 11 and Kali-age closure in Skandha 12.',
    primaryRecensions:[
      'Pan-Indian manuscript families in Śāradā, Newari, Maithili, Bengali, Devanāgarī, Nandināgarī, Telugu, Kannada, Grantha and Malayalam scripts.',
      'Common printed editions usually count 335 chapters and approximately 18,000 traditional verses.',
      'The B. J. Institute critical edition (1996–2002) constitutes 329 chapters and records short and long interpolations separately.'
    ],
    leadParagraphs:[
      'The Bhāgavata Purāṇa is one of the most influential Sanskrit scriptures of Kṛṣṇa devotion. Its theology turns the full Purāṇic universe—creation, avatāras, kings, sages, cosmology, dharma and liberation—toward bhakti as the highest human response to Bhagavān.',
      'The tenth skandha dominates reception, but the Purāṇa is much broader than Kṛṣṇa biography. Kapila, Dhruva, Prahlāda, Ṛṣabha and Bharata, Ajāmila, Gajendra, Vāmana, cosmic geography and the Uddhava Gītā all belong to its theological architecture.',
      'Its date and place of final redaction remain debated. Hardy connected its emotional Kṛṣṇa bhakti with Tamil Āḻvār traditions and proposed the ninth or early tenth century, while other scholars argue for earlier strata or alternative regional settings.'
    ],
    articleSections:[
      {title:'Date of composition',paragraphs:[
        'No single date accounts for every stratum. Modern estimates vary widely, but a later-first-millennium redaction is common in scholarship.',
        'Friedhelm Hardy argued that forms of viraha-bhakti and Kṛṣṇa mythology reveal sustained contact with Tamil devotional traditions and proposed the ninth or early tenth century as the most plausible date for the work in substantially received form.',
        'A version was certainly circulating by the early eleventh century. Earlier narrative materials may be much older than the final twelve-skandha architecture.'
      ]},
      {title:'Structure',paragraphs:[
        'The received text has twelve skandhas. Common editions count 335 chapters, though chapter division varies among manuscript families.',
        'Traditional enumeration gives 18,000 verses. The Ahmedabad critical edition has 13,129 metrical stanzas plus 452 prose passages, demonstrating why traditional śloka totals and modern counted stanzas must be distinguished.'
      ],subsections:[
        {title:'Skandhas 1–3',bullets:['Parīkṣit/Śuka and Sūta/Naimiṣa frames.','Avatāras, cosmology, Vidura–Maitreya, Varāha and Kapila.']},
        {title:'Skandhas 4–9',bullets:['Dhruva, Pṛthu, Dakṣa, Ṛṣabha/Bharata, cosmography, Ajāmila, Prahlāda, Gajendra, manvantaras and dynasties.']},
        {title:'Skandha 10',bullets:['Largest and most celebrated book: Kṛṣṇa in Vraja, Mathurā and Dvārakā.']},
        {title:'Skandhas 11–12',bullets:['Uddhava Gītā, Yādava end, dynasties, Kali age, dissolution and final praise of Bhāgavata hearing.']}
      ]},
      {title:'Contents',paragraphs:[
        'The Purāṇa expands the classical pañcalakṣaṇa model into a tenfold scheme and repeatedly subordinates cosmology and history to the question of the supreme refuge.',
        'Bhakti narratives show devotion crossing boundaries of age, birth and species: Dhruva is a child, Prahlāda an Asura prince, Gajendra an elephant, and the cowherd women of Vraja paradigms of total love.',
        'Skandha 10 turns Kṛṣṇa mythology into a sustained theology of līlā. Skandha 11 gives a more discursive synthesis of bhakti, yoga, renunciation and knowledge.'
      ],bullets:['Kapila and Sāṃkhya.','Ṛṣabha and Bharata.','Prahlāda and Narasiṃha.','Kṛṣṇa’s Vraja and Dvārakā cycles.','Uddhava Gītā.','Kali-age kings and eschatology.']},
      {title:'Theology',paragraphs:[
        'The text distinguishes Bhagavān as the fullest apprehension of the absolute while also using Brahman and Paramātman language. Kṛṣṇa is the fullest personal manifestation at the devotional center of the work.',
        'Bhakti is both means and end. Hearing, chanting, remembering and serving purify the mind, but mature devotion is valued beyond instrumental reward, including liberation.',
        'Sāṃkhya, Yoga and Vedānta vocabulary is integrated rather than reduced to one later school, helping Advaita, Viśiṣṭādvaita, Dvaita, Vallabha, Gauḍīya and other readers claim the text.'
      ]},
      {title:'Critical edition',paragraphs:[
        'The Bhāgavata has one of the strongest modern critical-edition projects among the Mahāpurāṇas. The B. J. Institute of Learning and Research, Ahmedabad, published a four-volume edition in six physical parts between 1996 and 2002 under H. G. Shastri, Bharati K. Shelat and K. K. Shastree.',
        'Selected manuscripts in numerous scripts and major commentaries were collated. The constituted text totals 329 chapters, 13,129 metrical stanzas and 452 prose passages, while hundreds of interpolations are documented outside the main text.',
        'A critical text is a reasoned reconstruction from witnesses, not a recovered autograph; the apparatus and regional recensions remain indispensable.'
      ]},
      {title:'Influences and reception',paragraphs:[
        'The Bhāgavata became foundational across Vaiṣṇava traditions and helped make Kṛṣṇa’s Vraja līlā central to Sanskrit and vernacular devotional culture.',
        'Śrīdhara Svāmin’s Bhāvārthadīpikā became a major Sanskrit commentary, followed by extensive exegesis in Vallabha, Gauḍīya, Madhva and other traditions.',
        'Its narratives transformed painting, dance, drama, music and vernacular poetry across South Asia.'
      ]},
      {title:'Rites, dharma and social history',paragraphs:[
        'The Bhāgavata often relativizes ritual and status before devotion, yet it retains kingship, household dharma, pilgrimage, vrata, gifts and varṇāśrama materials.',
        'Its strongest ritual-literary intervention is to authorize śravaṇa and kīrtana—hearing and reciting divine narrative—as powerful religious acts. Parīkṣit’s death-frame makes concentrated scriptural hearing a model of preparation for death.',
        'Prescriptive social passages should be read as Brahmanical norms in tension with the text’s many stories of devotion outside elite ritual competence.'
      ],bullets:['Śravaṇa and kīrtana.','Nāmasmaraṇa.','Pilgrimage and vrata.','Royal and household dharma.']},
      {title:'Further reading',bullets:['Friedhelm Hardy, Viraha-Bhakti: The Early History of Kṛṣṇa Devotion in South India.','H. G. Shastri et al., The Bhāgavata: Critical Edition, Ahmedabad, 1996–2002.','Ludo Rocher, The Purāṇas.','Edwin F. Bryant, Krishna: The Beautiful Legend of God.']}
    ],
    chapterMap:['Common editions: 12 skandhas and 335 chapters; the Ahmedabad critical text constitutes 329.','Skandha 10 is the largest Kṛṣṇa book; Skandha 11 contains the Uddhava Gītā.'],
    ritualHistory:'The text elevates hearing, recitation and remembrance into central religious practices while retaining pilgrimage, vows, gifts and conventional dharma.',
    rituals:['Śravaṇa','Kīrtana','Nāmasmaraṇa','Vaiṣṇava worship','Pilgrimage','Vrata'],
    sacredGeography:['Vraja and Govardhana','Mathurā','Dvārakā','Gaṅgā and major tīrthas'],
    dharma:['Bhakti-centered ethics','Kingship and household duties','Renunciation','Varṇāśrama material'],
    reception:'Foundational for Kṛṣṇa devotional traditions, commentaries, vernacular literatures, visual art, music, dance and performance.',
    scholarlyPositions:['Hardy: ninth or early tenth century with strong South Indian/Tamil devotional connections.','Other scholars argue for earlier strata or earlier redaction; dating remains debated.','The Ahmedabad critical edition materially changes chapter and verse counts relative to popular editions.'],
    dependencies:['Reworks Kṛṣṇa material known from the Harivaṃśa and Viṣṇu Purāṇa.','Draws on Upaniṣadic, Sāṃkhya, Yoga, Bhagavad Gītā and Vedāntic vocabulary.'],
    primaryEvidence:['Twelve-skandha architecture.','Large pan-Indian manuscript tradition.','Early Sanskrit commentaries.','Ahmedabad critical apparatus.'],
    sources:[
      {key:'rocher',title:'Ludo Rocher — The Purāṇas (1986)',detail:'Standard survey of Purāṇic textual history.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'},
      {key:'hardy',title:'Friedhelm Hardy — Viraha-Bhakti',detail:'Influential study of Tamil Kṛṣṇa devotion and Bhāgavata dating/origin.',url:'https://books.google.com/books?id=XY42EAAAQBAJ'},
      {key:'bhagavata-ce',title:'The Bhāgavata: Critical Edition, B. J. Institute of Learning and Research (1996–2002)',detail:'Multi-volume critical edition based on manuscripts in many scripts and major commentaries.',url:'https://www.ompublications.in/product/books/OM35133'}
    ],
    bibliography:['Śrīdhara Svāmin, Bhāvārthadīpikā.','Edwin F. Bryant, Krishna: The Beautiful Legend of God.'],
    mahapuranaFinal:true,mahapuranaAudited:true,mahapuranaBenchmark:true
  });
})();
