(() => {
  const root = document.querySelector('[data-gita-chapter]');
  if (!root) return;

  const chapter = Number(root.dataset.gitaChapter);
  const counts = [47,72,43,42,29,47,30,28,34,42,55,20,34,27,20,24,28,78];
  const names = ["Arjuna’s Despondency","The Yoga of Knowledge","The Yoga of Action","Knowledge and Renunciation of Action","The Yoga of Renunciation","The Yoga of Meditation","Knowledge and Realization","The Imperishable Brahman","Royal Knowledge and Royal Secret","Divine Glories","The Vision of the Universal Form","Devotion","The Field and the Knower of the Field","The Three Guṇas","The Supreme Person","Divine and Demonic Qualities","The Threefold Faith","Liberation through Renunciation"];

  const sridharaEnglish = {
    2: {
      "1": "Then, expecting what happened, Sañjaya said “him thus”: he whose eyes were full and agitated with tears; to Arjuna grieving in the manner described, Madhusūdana spoke these words.",
      "2": "He says that very speech: Śrī Bhagavān said, “from where?” From what cause has this impurity, this delusion, come upon you in this perilous crisis? It is unpractised by the noble, does not lead to heaven, and brings dishonour.",
      "3": "Therefore: O Pārtha, do not resort to cowardice; do not attain it, for it is not appropriate or fit for you. Abandon this petty weakness of heart, this cowardice; rise for battle, O scorcher of foes.",
      "4": "Arjuna says: I have not withdrawn through cowardice but because the battle is unrighteous. How shall I fight Bhīṣma and Droṇa, who are worthy of worship? Especially with arrows—where it is improper even to say “I shall fight with words,” how could I fight with arrows? O destroyer of foes.",
      "5": "If you say that he could not even maintain his body, he answers: Without killing Droṇa and the other great teachers, without committing teacher-killing opposed to the next world, it is better here to live even on alms. On the contrary, by killing the teachers here I would eat enjoyments of wealth and desire, smeared heavily with their blood. Alternatively, “wealth and desire” qualifies the teachers: because they are agitated by thirst for wealth, they will not withdraw from the battle; their killing is therefore inevitable. Thus Bhīṣma said to Yudhiṣṭhira: “A man is a slave to wealth; wealth is slave to no one. Truly, O king, I am bound by wealth to the Kauravas.”",
      "6": "Further, even if we accept adharma, we do not know whether victory or defeat for us is preferable. He shows both: whether we conquer them or they conquer us. And even our victory would in result be defeat: those whom, after killing, we would not wish to live are standing before us.",
      "7": "Therefore Arjuna says: My nature, marked by courage and the like, has been overcome by the defect of miserliness and by the fault born of destroying my own family. I ask you, my mind confused about dharma—uncertain whether abandoning battle and begging is dharma or adharma. Tell me decisively what is truly beneficial for me. Moreover, I am your disciple, fit to be instructed; instruct me, who have taken refuge in you.",
      "8": "If you say, “Consider and do what is proper,” he says: I do not see any action that could remove my grief, which dries up and torments my senses. Even if I obtain an unrivalled prosperous kingdom on earth, or even lordship over the gods, after obtaining all that is desired I still do not see a means to remove grief.",
      "9": "Expecting what Arjuna did after saying this, Sañjaya said: “Thus”—the meaning is clear.",
      "10": "Then, expecting what happened, he says: Hṛṣīkeśa said to him “as if laughing,” that is, with a cheerful face.",
      "11": "Because this grief arises from lack of discrimination between body and Self, the Blessed Lord spoke to show that discrimination: You mourn for relatives who are not objects of grief; although I had taught you, you merely speak words of the wise—“How shall I fight Bhīṣma?” and so on—but you are not wise. For the dead, and even for the living who are bereft of relatives, thinking “How will they live?”, the wise do not grieve.",
      "12": "He gives the reason why they are not to be grieved: Just as I, the Supreme Lord, never was non-existent at any time—even when this play-body manifests and disappears, I always existed, being beginningless—so you were never non-existent; you always existed. These kings too were never non-existent, being portions of Me. Likewise, after this, we shall not cease to exist; we shall remain. Therefore they are not objects of grief, being free from birth and death.",
      "13": "The objection is that the Lord’s freedom from birth and death is true, but the births and deaths of embodied beings are well known. He answers: For the embodied, the body-identified living being, just as in this gross body childhood and the other states are conditions dependent on the body—not on the Self—though one state ends and another arises, the recognition “I am the same” remains. So, when this body is destroyed, obtaining another body also depends on the subtle body; the Self is not destroyed. The newborn’s activity, such as nursing, from prior impressions shows this. Therefore the wise do not become deluded at the destruction and production of bodies, thinking that the Self alone dies or is born.",
      "14": "The objection is: “I do not grieve for the past and future, but for myself suffering separation from them.” He answers: The “measures” are the sense functions by which objects are measured and known; their contacts with objects produce cold, heat, and the like. They come and go and are impermanent, so endure them. Just as contact with water or sunlight at a given time naturally gives cold or heat, so union and separation from desired things give happiness and sorrow. Since these are unstable, endurance is proper for the wise, not subjection to joy and grief.",
      "15": "Even effort to remedy them should give way to endurance because it yields great fruit: these contacts do not distress or overpower the person who is even-minded in happiness and sorrow. Remaining undisturbed by them, through dharma and knowledge he becomes fit for immortality, that is, liberation.",
      "16": "The objection is: “Cold and heat are unbearable; how can they be endured?” By inquiry into truth everything can be endured: the being of the nonexistent—cold, heat, and the like, which are not properties of the Self—is not found in the Self; and the nonbeing or destruction of the existent, whose nature is existence, is not found. The conclusion of both existent and nonexistent has been seen by seers of truth, knowers of reality. Thus endure with this discrimination.",
      "17": "Having spoken generally of the indestructible existent, he specifies it: That by which all this, subject to coming and going—body and the like—is pervaded as its witness, know that to be the imperishable Self, free from destruction. He gives the reason: no one can cause destruction of the imperishable.",
      "18": "He shows that the bodies have the nature of coming and going: these bodies have an end. They are said by seers of truth to belong to the embodied one, who is eternal, indestructible, and immeasurable, while bodies bear happiness, sorrow, and the like. Since the Self is not destroyed and has no relation to happiness or sorrow, abandon delusion-born grief and fight; do not abandon your own dharma.",
      "19": "Thus grief caused by the death of Bhīṣma and the others is removed. The sorrow stated as arising from the Self’s being a killer—“I do not wish to kill these”—is also without cause: “this” means the Self; it is neither the object nor the agent of killing. Hence it does not kill and is not killed.",
      "20": "He establishes this by the absence of the six modifications: “not born” denies birth; “does not die” denies destruction; “nor, having become, will it become again” denies the second change, post-birth existence, because it is already existence by itself. “Unborn” is the reason. “Eternal”—always of one form—denies growth. “Everlasting”—ever existing—denies decline. “Ancient” denies transformation: though existing formerly, it is ever new, not changed into another form. Thus the six changes taught by Yāska and the other Vedic scholars—birth, existence, growth, transformation, decline, and destruction—are negated. Therefore the intended absence of destruction is concluded: it is not killed when the body is killed.",
      "21": "Therefore the absence of agency in killing is established: whoever knows the Self as eternal, free from growth, imperishable, free from decline, unborn, and indestructible—how does that person kill anyone, or cause anyone to be killed? Such a one has no means for killing. Nor, becoming the instigator, does he cause anyone to kill anyone—no one in any way. This also says: do not see fault in Me as the instigator.",
      "22": "The objection is: “Even if the Self is indestructible, I grieve when considering the destruction of its body.” He answers: because bodies, bound by karma, necessarily perish, there is no occasion for grief at the destruction of an old body.",
      "23": "He clarifies immortality by showing the absence of any means of killing: weapons do not moisten or soften the Self; they do not make it pliable.",
      "24": "He gives the reasons: being without parts, it cannot be cut; being formless, it cannot be burned; because it lacks liquidity, it cannot be dried. Thus it is not fit for cutting and the rest. Since it is eternal, all-pervading, stable in nature, free from change of form, immovable—retaining its prior form—and beginningless, it has these qualities.",
      "25": "Moreover, it is unmanifest—not an object of the eyes—inconceivable—not an object of the mind—and immutable—not accessible even to the organs of action. Thus it is said by the authorities to be eternal and the like. He concludes: knowing it to be so, you ought not grieve.",
      "26": "Thus he said that there is no grief because the Self lacks birth and destruction. Now, even accepting that the Self is born with each body and destroyed with its death: if you think it is eternally born whenever a body is born and eternally dead whenever that body dies, still you ought not grieve.",
      "27": "Why? For one who has been born, death is certain when the karma initiating that embodiment is exhausted; for one who has died, birth is likewise certain through the karma producing the next body. Therefore, in this unavoidable matter of birth and death, you, being wise, should not grieve; you are not fit to do so.",
      "28": "Further, considering the nature of the body and the birth and death of the Self conditioned by it: beings have the Unmanifest, primordial matter, as their beginning or previous state; they are manifest in the middle, in the interval between birth and death; and they dissolve into the Unmanifest at death. They are so constituted; what lamentation or ground for grief is there? Like one awakened, grief for objects seen in a dream is improper.",
      "29": "Why do even the learned grieve? To show that the Self is difficult to know: someone, seeing the Self through scripture and the teacher, sees it as wondrous, because the all-pervading, eternal knowledge-bliss Self is unlike worldly things, appearing as impossible as magic. Another speaks of it and hears of it as wondrous. Yet someone overcome by contrary notions does not know it even after hearing; by “and” it should be understood that even after speaking, someone may not truly know.",
      "30": "He concludes the instruction on the difficult-to-understand Self and its freedom from lamentation: the embodied Self in everyone’s body is eternally invulnerable; therefore you should not grieve for any being.",
      "31": "What Arjuna said—“Trembling arises in my body” and the like—is also unfitting: because the Self is not destroyed, you should not tremble even at killing; and considering your own duty too, you must not tremble. What you said—“I see no good in killing my own people”—is answered: nothing is higher for a kṣatriya than a righteous, just war.",
      "32": "If great good has come of itself, why tremble? Such a war, unasked and arriving unsought, is gained only by fortunate warriors, because it is an unobstructed door to heaven. Thus his claim, “How could we be happy after killing our kin?”, is refuted.",
      "33": "He states the fault in the opposite case: if you do not perform this righteous battle, then, abandoning your own duty and fame, you will incur sin.",
      "34": "Moreover, people will proclaim your lasting and imperishable infamy; for one held in honour and esteem, infamy is greater than death.",
      "35": "Moreover, those great chariot-warriors who formerly esteemed you for your many qualities will think you withdrew from battle out of fear; having been greatly esteemed, you will then fall into lightness and disrepute.",
      "36": "Moreover, your enemies will utter many unutterable and insulting words—words unfit to be spoken—slandering your power. What could indeed be more painful than that?",
      "37": "The objection was: “We do not know which is preferable, victory or defeat.” He answers: in either side there is gain for you. If killed, you will attain heaven; if victorious, you will enjoy the earth. Therefore rise, O son of Kuntī, with a firm resolve for battle.",
      "38": "The objection was: “Sin alone would fall upon us.” He answers: regarding happiness and sorrow equally, and likewise gain and loss, victory and defeat—the causes of those pairs—make them equal. Their equality rests on freedom from joy and grief. Join the battle, become ready. Fighting with the understanding of your own duty, abandoning desire for happiness and the rest, you will not incur sin.",
      "39": "He concludes the teaching of knowledge-yoga and introduces karma-yoga, its means: that by which reality is fully manifested is “sāṅkhya,” complete knowledge; the intellect concerning the Self that should be cultivated in it has been taught to you. If, even after this teaching, direct realization of the Self is not possible, then hear this intellect in karma-yoga, for the sake of direct realization through purification of the inner organ. Endowed with this intellect and with karma-yoga offered to the Supreme Lord, becoming pure within and receiving direct knowledge through His grace, you will completely abandon the bondage made of action.",
      "40": "The objection is: “As in farming, action may be obstructed and fail to bear fruit; and through defects in a mantra or its limbs an adverse result may arise. How can karma-yoga remove the bondage of action?” He answers: in this desireless karma-yoga there is no loss or fruitlessness of the beginning or effort, and no adverse result, because it is directed to the Lord and is not subject to defects and obstacles. Even a small beginning of this dharma, merely undertaking it, protects one from the great fear of saṁsāra; unlike desire-motivated action, it does not become fruitless through a defect in an accessory.",
      "41": "He explains the difference: in this karma-yoga, whose form is worship of the Lord, there is one resolute intellect, a certainty that “through devotion to the Supreme Lord I shall surely cross over.” In the irresolute, desire-driven, there are many and endless intellects, because desires are endless and differ according to action, quality, and fruit. Daily and occasional duties performed for worship of God do not perish from a defect in an accessory; they are prescribed to be done as one can, and no defect remains because they are directed to the Lord. Desire-motivated action is not so; hence the great difference.",
      "42": "The objection is: “Why do those who desire things not abandon difficult desires and adopt the resolute intellect?” He answers: those undiscerning people attached to Vedic statements speak this flowery speech, lovely at first like a poisonous creeper, proclaiming heaven and other fruits and saying that there is nothing else. In the Veda they delight in its arthavāda passages—“the merit of one performing Cāturmāsya is inexhaustible,” “we have become immortal by drinking Soma,” and the like—so they speak as though there were no higher reality, the Lord, to be attained.",
      "43": "Therefore they are “desire-souled,” their minds agitated by desire; “heaven as supreme,” for whom heaven is the highest goal. They proclaim a course toward enjoyment and sovereignty, consisting of many special rites that grant birth, actions, and their fruits.",
      "44": "Consequently, for those attached to enjoyment and sovereignty, whose minds that flowery speech has carried away, resolute intellect directed to one-pointed absorption in the Lord does not arise.",
      "45": "The objection is: “If heaven and the like are not the highest fruit, why do the Vedas prescribe rites as their means?” The Vedas concern the three guṇas: for qualified, desire-motivated persons they teach the relation of actions to their fruits. But you become free from the three guṇas, desireless. Be free from pairs such as pleasure and pain, heat and cold—endure them. Be steadfast in eternal sattva, relying on courage. Be free from yoga-kṣema: from taking what is not obtained and preserving what is obtained. Be self-possessed and not negligent. One distracted by dualities and occupied with gain and preservation cannot transcend the three guṇas.",
      "46": "The objection is: “Perhaps the intellect of worshipping God without desire, after abandoning Vedic fruits, is a bad intellect.” He answers: an udapāna is a small reservoir or well in which water is drunk; because its water is limited, purposes such as bathing and drinking are obtained by going around to different places. All those purposes at once exist in a large lake filled everywhere. Similarly, whatever purpose or fruit of action is in all the Vedas is wholly included in the knower of Brahman with resolute intellect, established in Brahman, because lesser joys are contained in Brahman-bliss. Therefore this intellect is right.",
      "47": "If you think that all the fruits of action will arise through worship of the Lord and therefore act with that intention, he prevents it: for you, who seek knowledge of the Self, there is entitlement only to action, not to its fruits that cause bondage; let desire not be the cause of action. The objection is: “Once action is done, its fruit necessarily comes, like satiety after eating.” He says: do not become one whose action is motivated by a desired result such as heaven—the desired alone is the result; an undesired fruit need not arise. Therefore do not become attached to non-action either, fearing the bondage of fruit; do not make abstention your commitment.",
      "48": "What then? Being established in yoga—single-mindedness toward the Lord—perform actions. Abandon attachment, the fixation on doership, and act solely by dependence on God. Be equal regarding success and failure, even of the result and knowledge, and act as an offering to God alone. Such equanimity is called yoga by the wise, because it is the settling of the mind.",
      "49": "Desire-motivated action is extremely inferior to action done through buddhi-yoga, the yoga produced by resolute intellect or whose means is intellect. Therefore seek and perform karma-yoga, taking refuge in buddhi and knowledge—or take refuge in the Lord, the protector, in buddhi. Those who seek fruits are pitiable and miserly, as the scripture says: one who departs without knowing the Imperishable is a miser.",
      "50": "The one endowed with buddhi-yoga is superior: in this very life, by the grace of the Lord, he abandons both good action, which leads to heaven, and bad action, which leads to hell. Therefore strive for yoga, karma-yoga. The skill in actions is the ability to make even binding actions serve liberation through worship of God.",
      "51": "He explains how actions become a means of liberation: the wise, endowed with buddhi, relinquishing the fruits born of action and acting only to worship God, become freed from birth as bondage and go to Viṣṇu’s state, called liberation, free from every affliction.",
      "52": "When, through the Lord’s grace from performing worship, your intellect crosses the deep and difficult wilderness of delusion—delusion is identification of the Self with the body, called a dense thicket—then you will reach dispassion toward what is to be heard and what has been heard. You will not seek them as things to be acquired or inquire after them.",
      "53": "Previously distracted by hearing many worldly and Vedic meanings, when your intellect becomes steady and unmoving in samādhi—samādhi is the Lord, in whom the mind is gathered—undistracted by other objects and stable through practice, then you will attain yoga, the fruit of yoga: knowledge of reality.",
      "54": "Arjuna, wishing to know the signs of the knower of the Self mentioned in the previous verse, asks: What is the definition or mark of one whose prajñā is steady, naturally established in samādhi? By what mark is he called sthitaprajña? How does he speak, sit, and walk?",
      "55": "The disciplines that are means for the seeker are themselves the natural marks of the perfected one. Therefore, while stating the signs of the perfected, he describes the inner means until the chapter’s end. First he answers: when one completely abandons all desires lodged in the mind, one is called sthitaprajña. The cause is being satisfied in the Self alone, by the Self itself, with supreme bliss; when one delights in the Self and gives up small desires for sense objects, one has this mark.",
      "56": "Further: whose mind is not agitated even when suffering arises; whose longing has gone in pleasures; whose attachment, fear, and anger have departed—such a sage is called sthitadhi, one with steady wisdom, or sthitaprajña.",
      "57": "This answers “How does he speak?” One without deep attachment anywhere, even to sons and the like, does not praise or rejoice when obtaining each favourable good, and does not hate or blame when obtaining unfavourable evil; he speaks only as an indifferent witness. His wisdom is established.",
      "58": "Further: when this yogin withdraws or retracts his senses from sense objects, as a tortoise naturally draws in its limbs—hands, feet, and the rest—his wisdom is established.",
      "59": "The objection is: non-engagement of the senses with objects cannot be a mark of sthitaprajña, since the dull, the sick, and those devoted to fasting also do not engage with objects. He answers: for an ignorant embodied person who does not take in objects through the senses, the objects withdraw; that experience ends, but taste, attachment, or desire remains. Even that taste naturally ceases on seeing the Supreme for the sthitaprajña. Or, for one fasting, objects mostly withdraw because hunger removes the expectation of sound, touch, and the rest, but craving for taste remains; the rest is the same.",
      "60": "Without sense-control sthitaprajña is impossible; therefore great effort is needed in the seeker. Even the mind of a discriminating person striving for liberation is forcibly carried away by the senses, because they are turbulent and prone to agitation.",
      "61": "Therefore, restraining all the senses, the disciplined yogin should abide with Me as supreme. This answers how he sits: with the senses under control. For one whose senses are under control, wisdom is established.",
      "62": "Having spoken of the defects when the external senses are uncontrolled, he speaks of the defect when the mind is uncontrolled: for a person who contemplates sense objects with a judgement of their qualities, attachment to them arises; from attachment a greater desire arises; and from desire, when obstructed by something, anger arises.",
      "63": "From anger comes delusion, the absence of discrimination between what should and should not be done; from that comes confusion and deviation of the memory of what scripture and teacher have taught; from that comes destruction or overpowering of the intellect, as when a tree is covered; then one perishes, becoming like the dead.",
      "64": "The objection is: “The senses naturally run toward objects and cannot be opposed; how can sthitaprajña be possible?” He answers: even while using objects, one whose senses are free from attachment and aversion, whose mind is controlled and made subordinate to the Self, attains prasāda, peace. This also answers how he walks and enjoys: he approaches objects with senses under his control.",
      "65": "What follows when prasāda arises? The destruction of all sorrow arises; then, for one of tranquil mind, the intellect becomes firmly established. This is the meaning.",
      "66": "He establishes by contrast that sense-restraint is a means of sthitaprajña: for one who is not yoked, with uncontrolled senses, an intellect concerning the Self does not arise from scripture and the teacher—how could it be established? Nor is there contemplation; through contemplation the intellect becomes established in the Self. For one who does not contemplate there is no peace, the mind’s settling in the Self; for the unpeaceful, where is happiness, the bliss of liberation?",
      "67": "He gives the reason for the absence of intellect in the unyoked: among uncontrolled senses roaming freely in objects, whichever one sense the mind follows, being uncontrolled and going along with that sense, carries away the person’s wisdom and scatters it among objects; how much more when many senses carry it away. It is like wind driving the boat of a distracted helmsman all around the sea.",
      "68": "He concludes that sense-restraint is both means and mark: since this is so, know that for one whose senses are completely restrained from objects, wisdom is established. The address “mighty-armed” hints that one capable of conquering enemies can also conquer here.",
      "69": "The objection is: no one is seen in the world with senses completely restrained, as if asleep or without seeing and acting; this mark seems impossible. He answers: the “night” of all beings is the Self-abiding state, night-like for minds covered by the darkness of ignorance, because ordinary seeing and acting are absent. In that Self-abiding state the self-controlled one is awake and awakened. That in which beings awaken through object-knowledge is night for the sage who sees the Self; he has no seeing and acting there. Just as owls that are blind by day see at night, the Brahman-knower with eyes open sees Brahman, not objects; thus the mark is possible.",
      "70": "The objection is: if he has no sight of objects, how does he experience them? A filled ocean, unmoving in its boundary, receives waters from many rivers and still more waters enter; likewise all sense objects, drawn in by prārabdha karma, enter the inward-seeing sage while he remains unchanged by enjoyment. He attains peace and liberation, not one who desires and strives for enjoyment.",
      "71": "Since this is so: having abandoned or ignored obtained desires, and being without longing for unobtained ones; because he is without ego, therefore without “mine” regarding the means of enjoyment; becoming inward-seeing, he moves and experiences enjoyments by the force of prārabdha, or goes anywhere. Such a person attains peace.",
      "72": "He praises and concludes the knowledge-nistha taught: this is the brāhmī state, steadfastness in knowledge of Brahman. A person whose inner being has been purified by worship of the Supreme attains it and is not deluded again by worldly saṃsāra. Since, established in it even for a moment at death, he attains dissolution and liberation in Brahman, what need is there to say of one established in it from childhood?"
    },
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

  const verseUrl = (n) => 'https://raw.githubusercontent.com/vedicscriptures/bhagavad-gita/main/slok/bhagavadgita_chapter_' + chapter + '_slok_' + n + '.json';

  const expandEntries = (entries) => {
    const out = {};
    (entries || []).filter(Boolean).forEach((entry) => {
      const nums = String(entry.verse_number || '').match(/\d+/g);
      if (!nums || !nums.length) return;
      const first = Number(nums[0]);
      const last = Number(nums[nums.length - 1]);
      for (let n = first; n <= last; n += 1) out[n] = entry;
    });
    return out;
  };

  const makeVerse = (d, meanings, sourceMode) => {
    const n = d.verse;
    const rootText = sourceMode === 'legacy'
      ? String(d.slok || '').replace(/\\|\\|[^|]+\\|\\|/g, '').replace(/\\|/g, '').replace(/\\\\n/g, '\\n').replace(/\\s+\\d+-\\d+\\s*$/, '')
      : String(d.slok || '').replace(/(?:\\|\\||।।)\\s*[0-9०-९]+(?:[-–][0-9०-९]+)?\\s*(?:\\|\\||।।)/g, '').replace(/\\|/g, '');
    const rootLines = rootText.split('\\n').map((x) => x.trim()).filter(Boolean).join('<br>');
    const english = sourceMode === 'legacy'
      ? (d.gambir && d.gambir.et ? lines(d.gambir.et) : 'English translation unavailable in the source record.')
      : (d.mukEnglish ? lines(d.mukEnglish) : 'No Mukundananda translation supplied in the source record.');
    const key = chapter + '.' + n;
    const wordMeaning = sourceMode === 'legacy'
      ? (meanings[key] || 'Word-for-word meaning unavailable in the source record.')
      : (d.wordMeaning || 'Word-for-word meaning unavailable in the source record.');
    const commentary = d.srid && d.srid.sc
      ? lines(d.srid.sc)
      : (sourceMode === 'legacy' ? 'No separate Sanskrit commentary is recorded for this verse in the source data.' : 'No commentary');
    const translatedCommentary = sridharaEnglish[chapter] && sridharaEnglish[chapter][n]
      ? lines(sridharaEnglish[chapter][n])
      : (sourceMode === 'legacy'
        ? (d.srid && d.srid.et ? lines(d.srid.et) : 'The source repository supplies Śrīdhara Svāmī’s commentary in Sanskrit; no English translation field is supplied there.')
        : 'No commentary');

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

  const renderChapter = (data, meanings, sourceMode, sourceNote) => {
    root.innerHTML = '<header class="gita-hero"><p class="eyebrow">Śrīmad Bhagavad Gītā</p><h1>Chapter ' + chapter + '</h1><p class="subtitle">' + names[chapter - 1] + '</p><div class="gita-rule" aria-hidden="true"></div></header>' +
      '<nav class="gita-chapter-nav" aria-label="Chapter navigation"><a href="/vivekadrishti/pages/bhagavad-gita/">All chapters</a>' + (chapter > 1 ? '<a href="/vivekadrishti/articles/bhagavad-gita-chapter-' + (chapter - 1) + '/">Previous</a>' : '') + (chapter < 18 ? '<a href="/vivekadrishti/articles/bhagavad-gita-chapter-' + (chapter + 1) + '/">Next</a>' : '') + '</nav>' +
      '<div class="gita-contents"><h2>Contents</h2><ol>' + data.map((d) => '<li><a href="#gita-' + chapter + '-' + d.verse + '">Verse ' + d.verse + '</a></li>').join('') + '</ol></div>' +
      data.map((d) => makeVerse(d, meanings, sourceMode)).join('') +
      '<div class="gita-source-note"><strong>Textual basis</strong><p>' + sourceNote + '</p></div>';
  };

  const load = async () => {
    root.innerHTML = '<p class="gita-loading">Loading chapter text…</p>';

    if (chapter !== 2) {
      const [data, meanings] = await Promise.all([
        Promise.all(Array.from({length: counts[chapter - 1]}, (_, i) => fetch(verseUrl(i + 1)).then((r) => r.json()))),
        fetch('/vivekadrishti/assets/data/bhagavad-gita-word-meanings.json').then((r) => r.json())
      ]);
      renderChapter(
        data,
        meanings,
        'legacy',
        'Sanskrit, transliteration, Śrīdhara Svāmī’s Sanskrit commentary, and the Gambirananda English verse translation are loaded from the <a href="https://github.com/vedicscriptures/bhagavad-gita" target="_blank" rel="noopener">Bhagavad Gītā data repository</a>, whose source lineage is the <a href="https://www.gitasupersite.iitk.ac.in/" target="_blank" rel="noopener">Gītā Supersite</a>. Word-for-word meanings are from the public-domain <a href="https://github.com/gita/gita" target="_blank" rel="noopener">Gītā JSON dataset</a>.'
      );
      return;
    }

    const [common, mukundananda, sridhara] = await Promise.all([
      fetch('https://raw.githubusercontent.com/gita/gita-frontend-v2/main/data/common/common_en.json').then((r) => r.json()),
      fetch('https://raw.githubusercontent.com/gita/gita-frontend-v2/main/data/authors/author_22_en.json').then((r) => r.json()),
      fetch('https://raw.githubusercontent.com/gita/gita-frontend-v2/main/data/authors/author_8_sa.json').then((r) => r.json())
    ]);
    const commonChapter = (common.chapters || []).find((entry) => Number(entry.chapter_number) === chapter) || {};
    const mukChapter = (mukundananda.chapters || []).find((entry) => Number(entry.chapter_number) === chapter) || {};
    const sridharaChapter = (sridhara.chapters || []).find((entry) => Number(entry.chapter_number) === chapter) || {};
    const commonByVerse = Object.fromEntries((commonChapter.verses || []).filter(Boolean).map((entry) => [Number(entry.verse_number), entry]));
    const mukByVerse = expandEntries(mukChapter.verses);
    const sridharaByVerse = expandEntries(sridharaChapter.verses);
    const data = Array.from({length: counts[chapter - 1]}, (_, index) => {
      const n = index + 1;
      const c = commonByVerse[n] || {};
      const m = mukByVerse[n] || {};
      const sh = sridharaByVerse[n] || {};
      return {
        verse: n,
        slok: c.sanskrit_text || '',
        transliteration: c.transliteration || '',
        wordMeaning: c.word_meanings || '',
        mukEnglish: m.translation || '',
        srid: {sc: sh.commentary || ''}
      };
    });
    renderChapter(
      data,
      {},
      'mukundananda',
      'Sanskrit, transliteration, and word-for-word meanings are loaded from <a href="https://github.com/gita/gita-frontend-v2" target="_blank" rel="noopener">gita-frontend-v2</a>. Swami Mukundananda’s English translation is from its <a href="https://github.com/gita/gita-frontend-v2/blob/main/data/authors/author_22_en.json" target="_blank" rel="noopener">author_22_en.json</a>; Śrīdhara Svāmī’s Sanskrit commentary is from <a href="https://github.com/gita/gita-frontend-v2/blob/main/data/authors/author_8_sa.json" target="_blank" rel="noopener">author_8_sa.json</a>. The English Śrīdhara text shown here is a literal rendering prepared from that Sanskrit source.'
    );
  };

  load().catch(() => {
    root.innerHTML = '<p class="gita-no-source">This chapter could not be loaded. Please refresh and try again.</p>';
  });
})();