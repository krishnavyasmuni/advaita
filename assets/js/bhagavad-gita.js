(() => {
  const root = document.querySelector('[data-gita-chapter]');
  if (!root) return;

  const chapter = Number(root.dataset.gitaChapter);
  const counts = [47,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78];
  const names = ["Arjuna’s Despondency","The Yoga of Knowledge","The Yoga of Action","Knowledge and Renunciation of Action","The Yoga of Renunciation","The Yoga of Meditation","Knowledge and Realization","The Imperishable Brahman","Royal Knowledge and Royal Secret","Divine Glories","The Vision of the Universal Form","Devotion","The Field and the Knower of the Field","The Three Guṇas","The Supreme Person","Divine and Demonic Qualities","The Threefold Faith","Liberation through Renunciation"];

  const sridharaEnglish = {
    1: {
      1: `Here indeed the supremely compassionate Lord, the son of Devakī—whose descent is for the welfare of all the worlds and whose feet are worshipped by all—rescued Arjuna from the ocean of grief and delusion by the raft of instruction in the secret of dharma and knowledge. Arjuna’s discrimination had been overthrown by grief and delusion arising from ignorance of reality, and he had become intent on abandoning his own dharma and taking up another’s dharma. Kṛṣṇa Dvaipāyana set down that very meaning taught by the Lord in seven hundred verses. In doing so, he wrote mostly the verses that issued from Śrī Kṛṣṇa’s own mouth, and composed some himself in order to connect them. As stated in the Gītā Māhātmya: “The Gītā should be well studied; what need is there of extensive scriptures? It issued directly from the lotus-mouth of Padmanābha.” Then, from “On the field of dharma” up to “he spoke these words in sorrow,” the narrative is set out in order to introduce the dialogue of Śrī Kṛṣṇa and Arjuna. “On the field of dharma”: O Sañjaya, when my sons and the sons of Pāṇḍu, desiring to fight, had assembled together on Kurukṣetra, the field of dharma, what did they do?`,
      2: `On “having seen”: Having seen the army of the Pāṇḍavas arranged in battle formation, King Duryodhana went to Droṇa, his teacher, and spoke the words that follow.`,
      3: `He states those very words in the nine verses beginning “Behold this.” O teacher, behold this extensive army of the Pāṇḍavas, deployed—set in battle formation—by Dhṛṣṭadyumna, the son of Drupada.`,
      4: `On “here are heroes”: In this army are great bowmen—those whose bows discharge arrows. Bhīma and Arjuna are already famous here as warriors; there are heroes equal to them, endowed with valor and the warrior’s dharma. He names them: Yuyudhāna is Sātyaki.`,
      5: `Further, on “Dhṛṣṭaketu”: Cekitāna is the name of a king. Śaibya is a bull among men, that is, the best of men.`,
      6: `On “Yudhāmanyu”: Vikrānta Yudhāmanyu is one warrior. Saubhadra is Abhimanyu. The Draupadeyas are the five sons born to Draupadī from Yudhiṣṭhira and the others, beginning with Prativindhya. The definitions of mahāratha and the rest are: “One who can fight ten thousand bowmen and is skilled in weapons and their science is remembered as a mahāratha. One who can fight an unlimited number is called an atiratha. One who fights a single warrior is a rathin, and one inferior to that is regarded as an ardharathin.”`,
      7: `On “ours”: Nibodha means “understand.” Nāyaka means “leader.” Saṃjñārtham means “for complete understanding.”`,
      8: `He names them in the two verses beginning “You yourself.” “You” means Droṇa. Samitiṃjaya means one who conquers in battle. Saumadatti, the son of Somadatta, is Bhūriśravā.`,
      9: `On “and others”: “For my sake” means resolved to give up even their lives for my purpose. They possess various—many—weapons, instruments for striking. “Skilled in war” means expert.`,
      10: `Then what follows? He says, “insufficient.” Although our force is joined by heroes of that kind and is protected by Bhīṣma, it appears insufficient—unable to fight against them. But this force of the Pāṇḍavas, protected by Bhīma, appears sufficient and capable. Because Bhīṣma favors both sides, our force is not capable against the Pāṇḍava army; because Bhīma favors only one side, the Pāṇḍavas’ force is capable.`,
      11: `Therefore he says how you should act, in “at the approaches.” Remaining at your own assigned places of battle at the approaches—the entrances into the formation—without abandoning them, all of you should protect Bhīṣma on every side, so that while fighting others he is not struck from behind by anyone. The sense is: our very life depends on Bhīṣma’s strength.`,
      12: `Having heard Duryodhana’s words filled with such respect, what did Bhīṣma do? He says in “of him.” Producing joy in that king, the grandsire Bhīṣma roared loudly like a lion and blew his conch.`,
      13: `Seeing the battle enthusiasm of the commander Bhīṣma, eagerness for battle arose everywhere; this is stated in “then.” Paṇavas, ānakas, and gomukhas are particular kinds of musical instruments. At once, at that very moment, they were sounded. The sound of the conches and the other instruments became tumultuous and great.`,
      14: `Then, in the five verses beginning “then,” he describes the battle enthusiasm that arose in the Pāṇḍava army. After the uproar of the instruments in the Kaurava army, Kṛṣṇa and Arjuna, standing in their chariot, powerfully blew their divine conches.`,
      15: `He shows this very thing in detail in “Pāñcajanya.” Pāñcajanya and the others are the names of the conches of Śrī Kṛṣṇa and the others. Bhīma is one whose deeds are terrible; because his belly is like a wolf’s, he is Vṛkodara. He blew the great conch Pauṇḍra.`,
      16: `On “Anantavijaya”: Nakula blew the conch named Sughoṣa, and Sahadeva the one named Maṇipuṣpaka.`,
      17: `On “the king of Kāśī”: Kāśya means the king of Kāśī. What kind of man is he? One whose bow is supreme, excellent.`,
      18: `On “Drupada”: “O lord of the earth” means O Dhṛtarāṣṭra.`,
      19: `That sound of the conches produced great fear in your people; this is stated in “that tumult.” It tore the hearts of the sons of Dhṛtarāṣṭra—your people—while resounding tumultuously through both heaven and earth.`,
      20: `At that time Arjuna addressed Śrī Kṛṣṇa; this is stated in the four verses beginning “then.” Vyavasthitān means those who stood ready with the intention of fighting. “He whose banner bears the monkey” is Arjuna.`,
      21: `On “Hṛṣīkeśa”: The very words he spoke are given in “between the two armies.”`,
      22: `On “until I see these”: One may object, “You are a fighter, not a spectator of the battle.” To this he says: “With whom am I to fight?”`,
      23: `On “those about to fight”: The construction is: “Place my chariot between the two armies until I have seen those who have assembled here wishing to please Dhṛtarāṣṭra’s son Duryodhana.”`,
      24: `What happened next? Sañjaya says, “Thus.” Guḍākā means sleep; Arjuna is its lord, one who has conquered sleep. Thus addressed by Arjuna, Hṛṣīkeśa placed the best of chariots between the two armies, O Bhārata—O Dhṛtarāṣṭra.`,
      25: `On “before Bhīṣma and Droṇa”: Having placed the chariot before the grandsire Bhīṣma, Droṇa, and the kings, he said, “O Pārtha, behold these Kurus.”`,
      26: `What happened then? He says: “fathers” means paternal uncles and the others. “Sons and grandsons” means the sons and grandsons of Duryodhana and the others. Sakhīn means friends, and suhṛdaḥ means those who had rendered him kindness. He saw them all.`,
      27: `Then what did he do? He says, “those.” Āviṣṭa means pervaded, possessed. Viṣīdan means sinking deeply—falling into despondency and dejection.`,
      28: `What did he say? This is given from “seeing these” through the end of the chapter. O Kṛṣṇa, seeing these kinsmen standing fully before me, desiring to fight, my limbs—hands, feet, and so on—give way and grow weak. And my mouth dries up completely, losing all moisture.`,
      29: `Moreover, on “trembling”: Vepathu means trembling. Romaharṣa means horripilation, the hair standing on end. Sraṃsate means slips or falls. Paridahyate means burns all over.`,
      30: `And further, on “nor”: I see contrary omens—signs indicating misfortune.`,
      31: `Moreover, on “nor”: I see no good result in killing my own people in battle.`,
      32: `If it is asked, “Do you not see victory and the other results?” he answers, “I do not desire them.” He expands this in the verse and a half beginning “What use is kingdom to us?” Those for whose sake we desired kingdom and the rest are standing here for battle having relinquished life and wealth, accepting their sacrifice. Therefore, what use have we for kingdom and the rest?`,
      33: `If it is asked, “Do you not see victory and the other results?” he answers, “I do not desire them.” He expands this in the verse and a half beginning “What use is kingdom to us?” Those for whose sake we desired kingdom and the rest are standing here for battle having relinquished life and wealth, accepting their sacrifice. Therefore, what use have we for kingdom and the rest?`,
      34: `Suppose it is said: “If, out of compassion, you do not kill them, they will certainly kill you out of greed for the kingdom. Therefore kill them and enjoy the kingdom.” He answers in the verse and a half beginning “these I do not wish to kill.” Even if they were killing us, I would not wish to kill them even for the sovereignty of the three worlds, even to obtain that—how much less merely for the earth.`,
      35: `Suppose it is said: “If, out of compassion, you do not kill them, they will certainly kill you out of greed for the kingdom. Therefore kill them and enjoy the kingdom.” He answers in the verse and a half beginning “these I do not wish to kill.” Even if they were killing us, I would not wish to kill them even for the sovereignty of the three worlds, even to obtain that—how much less merely for the earth.`,
      36: `One may object: It is remembered, “The incendiary, the poisoner, one who attacks with a weapon, the robber of wealth, the seizer of land, and the seizer of another’s wife—these six are aggressors.” Thus these men are aggressors on all six grounds, beginning with arson, and killing aggressors is proper. For it is said, “One should kill an aggressor who approaches, without deliberation; no fault falls upon the killer for killing an aggressor.” To this he replies in the verse and a half beginning “sin.” The teaching of Arthaśāstra beginning “an aggressor who approaches” is weaker than Dharmaśāstra. As Yājñavalkya says, “When two Smṛtis conflict, reasoning is stronger in legal procedure; but Dharmaśāstra is held to be stronger than Arthaśāstra.” Therefore, even though these men are aggressors, killing these teachers and other venerable persons would indeed bring us sin, because such killing is unjust and contrary to dharma. Nor would there be happiness here; therefore he says, “one’s own people indeed.”`,
      37: `One may object: Since the fault of killing relatives is the same for them as for you, just as they enter battle accepting the fault of killing relatives, you too should do so. Why this despondency? He answers in the two verses beginning “although.” Although Duryodhana and the others, whose minds are ruined and whose discrimination is corrupted by greed for the kingdom, do not see the fault, how can we, who clearly see the fault, fail to understand that we should turn away from this sin? Our resolve should be solely to withdraw.`,
      38: `No commentary.`,
      39: `No commentary.`,
      40: `The words “adharma overwhelms” state the mental fault.`,
      41: `The word “become corrupted” states the bodily fault.`,
      42: `The word “become corrupted” states the bodily fault.`,
      43: `No commentary.`,
      44: `No commentary.`,
      45: `No commentary.`,
      46: `No commentary.`,
      47: `The intention behind “I do not wish to kill these” (1.35), “If they should kill me while I offer no resistance” (1.46), and the like is stated with “in every way.” “In every way” means in many respects: even though they are aggressors; even though they are now intent on killing me; even though withdrawal from battle would lead to adharma, infamy, and the like; even though battle is the means to sovereignty over the three worlds and so on—in short, even though you, the Lord of the Lord of all, my best well-wisher and instructor, have told me to fight. The firm conviction that the destruction of relatives has become certain is the cause of grief; or here the word śoka may refer simply to despondency. By reversing the order, the text shows that this grief is the cause of abandoning the bow and arrows. Saṃvigna-mānasaḥ means “one whose determination to fight has been greatly shaken.” The verbal root vij means “to fear or tremble.” Thus, because his resolve to fight had been shaken, he cast aside the bow with its arrows—which in the sacrificial rite of battle stood in the place of the ladles sruk and sruva—and, as though intent on fasting unto death and the like, withdrew from the warrior’s station and sat down in the seat of the chariot. Thus, among the works of Śrī Veṅkaṭanātha, lion among poets and logicians and independent master of all systems…`
    }
  };

  const esc = (value) => String(value || '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const lines = (value) => esc(value).replace(/\n/g, '<br>');
  const verseUrl = (n) => 'https://raw.githubusercontent.com/vedicscriptures/bhagavad-gita/main/slok/bhagavadgita_chapter_' + chapter + '_slok_' + n + '.json';

  const makeVerse = (d, meanings) => {
    const n = d.verse;
    const rootText = String(d.slok || '').replace(/\|\|[^|]+\|\|/g, '').replace(/\|/g, '').replace(/\\n/g, '\n').replace(/\s+\d+-\d+\s*$/, '');
    const rootLines = rootText.split('\n').map((x) => x.trim()).filter(Boolean).join('<br>');
    const english = d.gambir && d.gambir.et ? lines(d.gambir.et) : 'English translation unavailable in the source record.';
    const key = chapter + '.' + n;
    const wordMeaning = meanings[key] || 'Word-for-word meaning unavailable in the source record.';
    const commentary = d.srid && d.srid.sc ? lines(d.srid.sc) : 'No separate Sanskrit commentary is recorded for this verse in the source data.';
    const translatedCommentary = sridharaEnglish[chapter] && sridharaEnglish[chapter][n]
      ? lines(sridharaEnglish[chapter][n])
      : (d.srid && d.srid.et ? lines(d.srid.et) : 'The source repository supplies Śrīdhara Svāmī’s commentary in Sanskrit; no English translation field is supplied there.');

    return '<article class="gita-verse" id="gita-' + chapter + '-' + n + '">' +
      '<h2><span>BG</span> ' + chapter + '.' + n + '</h2><hr class="gita-verse-rule">' +
      '<div class="gita-sanskrit" lang="sa-Deva">' + rootLines + '</div>' +
      '<p class="gita-translation">' + english + '</p>' +
      '<div class="gita-controls">' +
      '<details class="gita-details"><summary>Word-for-word</summary><div class="gita-reveal"><p>' + lines(wordMeaning) + '</p></div></details>' +
      '<details class="gita-details"><summary>Transliteration</summary><div class="gita-reveal"><p><em>' + lines(d.transliteration) + '</em></p></div></details>' +
      '<details class="gita-details"><summary>Śrīdhara Sanskrit</summary><div class="gita-reveal"><p lang="sa">' + commentary + '</p></div></details>' +
      '</div><section class="gita-commentary"><h3>Śrīdhara’s Commentary.</h3><p>' + translatedCommentary + '</p></section></article>';
  };

  const load = async () => {
    root.innerHTML = '<p class="gita-loading">Loading chapter text…</p>';
    const [data, meanings] = await Promise.all([
      Promise.all(Array.from({length: counts[chapter - 1]}, (_, i) => fetch(verseUrl(i + 1)).then((r) => r.json()))),
      fetch('/vivekadrishti/assets/data/bhagavad-gita-word-meanings.json').then((r) => r.json())
    ]);

    root.innerHTML = '<header class="gita-hero"><p class="eyebrow">Śrīmad Bhagavad Gītā</p><h1>Chapter ' + chapter + '</h1><p class="subtitle">' + names[chapter - 1] + '</p><div class="gita-rule" aria-hidden="true"></div></header>' +
      '<nav class="gita-chapter-nav" aria-label="Chapter navigation"><a href="/vivekadrishti/pages/bhagavad-gita/">All chapters</a>' + (chapter > 1 ? '<a href="/vivekadrishti/articles/bhagavad-gita-chapter-' + (chapter - 1) + '/">Previous</a>' : '') + (chapter < 18 ? '<a href="/vivekadrishti/articles/bhagavad-gita-chapter-' + (chapter + 1) + '/">Next</a>' : '') + '</nav>' +
      '<div class="gita-contents"><h2>Contents</h2><ol>' + data.map((d) => '<li><a href="#gita-' + chapter + '-' + d.verse + '">Verse ' + d.verse + '</a></li>').join('') + '</ol></div>' +
      data.map((d) => makeVerse(d, meanings)).join('') +
      '<div class="gita-source-note"><strong>Textual basis</strong><p>Sanskrit, transliteration, Śrīdhara Svāmī’s Sanskrit commentary, and the Gambirananda English verse translation are loaded from the <a href="https://github.com/vedicscriptures/bhagavad-gita" target="_blank" rel="noopener">Bhagavad Gītā data repository</a>, whose source lineage is the <a href="https://www.gitasupersite.iitk.ac.in/" target="_blank" rel="noopener">Gītā Supersite</a>. Word-for-word meanings are from the public-domain <a href="https://github.com/gita/gita" target="_blank" rel="noopener">Gītā JSON dataset</a>.</p></div>';
  };

  load().catch(() => {
    root.innerHTML = '<p class="gita-no-source">This chapter could not be loaded. Please refresh and try again.</p>';
  });
})();