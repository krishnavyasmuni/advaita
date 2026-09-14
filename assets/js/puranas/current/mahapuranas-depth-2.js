(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const A=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const N=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function sec(name,title){const e=D['Purāṇa:'+name]||D[name];if(!e)return null;const list=A(e.articleSections);let s=list.find(x=>N(x?.title)===N(title));if(!s){s={title,paragraphs:[],bullets:[],subsections:[]};list.push(s);}e.articleSections=list;D['Purāṇa:'+name]=e;return s;}
  function paras(name,title,ps){const s=sec(name,title);if(s)s.paragraphs=[...A(s.paragraphs),...ps];}
  function sub(name,title,st,ps,bs=[]){const s=sec(name,title);if(s)s.subsections=[...A(s.subsections),{title:st,paragraphs:ps,bullets:bs}];}

  paras('Skanda Purāṇa','Date of composition',[
    'The Skanda title covers at least two historically distinct textual horizons. The early Skandapurāṇa reconstructed from old Nepalese and related manuscripts is a comparatively coherent Śaiva composition whose first recension is generally placed around the transition from the sixth to the seventh century. The gigantic later Khaṇḍa corpus familiar from printed editions accumulated over many further centuries.',
    'The discovery and study of early manuscripts fundamentally changed the chronology of the work. A dated Nepalese witness from 810 CE provides an unusually firm point in the history of Purāṇic transmission. It proves that a substantial early recension existed by that date and permits comparison of later manuscripts against a witness separated from the presumed period of composition by only a few centuries.',
    'Critical scholarship associated with Hans T. Bakker, Peter Bisschop, Yuko Yokochi and collaborators has shown that the early text underwent recensional development of its own. “Early” therefore does not mean perfectly unitary. Inserted cycles, rewritten passages and variant organization can still reveal stages in the formation of Śaiva sacred history.',
    'The later Khaṇḍas require independent dating. A Kāśī, Prabhāsa, Avantī or Reva māhātmya incorporated under the Skanda title cannot be assigned automatically to the seventh century merely because an early Skandapurāṇa existed then. Each regional dossier has its own manuscript, institutional and historical context.'
  ]);
  sub('Skanda Purāṇa','Structure','The early Skandapurāṇa',[
    'The early text is not organized as the immense seven-Khaṇḍa printed collection. Its critical editions reconstruct a Śaiva work in which mythology, Pāśupata authority, Skanda traditions and sacred geography form a comparatively coherent whole.',
    'This early architecture is important because it changes the meaning of the title. Skanda or Kārttikeya is significant, but the work is not simply a biography of the war god. Śiva, religious lineages, Vārāṇasī and the mapping of Śaiva authority are equally central.',
    'Successive critical volumes preserve recensional evidence rather than silently homogenizing every manuscript. This makes structure itself historical evidence: the placement or absence of a narrative cycle can indicate a stage in the development of the text.'
  ]);
  sub('Skanda Purāṇa','Structure','The later Khaṇḍa corpus',[
    'Later Skanda traditions form a vast network of regional texts. Printed collections may arrange material into Khaṇḍas such as Māheśvara, Vaiṣṇava, Brāhma, Kāśī, Avantya, Nāgara and Prabhāsa, but the exact list, sequence and chapter totals vary among editions.',
    'Individual māhātmyas often possess a degree of independent life. A regional pilgrimage text can circulate separately, be expanded by local transmitters and eventually appear under the prestigious Skanda title. The resulting corpus is therefore better described as accretional than as one book steadily enlarged by a single line of redactors.',
    'This is why the traditional figure of roughly eighty-one thousand verses should be used as part of the history of the later Skanda complex, not as a verse count for the early critically edited work.'
  ]);
  sub('Skanda Purāṇa','Contents','Pāśupata Śaivism and religious authority',[
    'The early Skandapurāṇa is one of the major textual sources for the history of Pāśupata Śaivism. Mythic narratives, sacred places and teacher traditions do more than praise Śiva; they articulate a landscape of religious authority in which ascetic lineages and divine geography mutually reinforce one another.',
    'This makes the text unusually useful for historical comparison. Its geographical and political references can be placed beside inscriptions, archaeology and other Sanskrit sources. Purāṇic mythology becomes evidence for the self-understanding of early medieval Śaiva communities rather than being treated as timeless legend alone.',
    'The text also demonstrates how sectarian supremacy works in a Purāṇic environment. Śiva is central and supreme, yet other gods and inherited mythic cycles remain visible. They are repositioned inside a Śaiva cosmic hierarchy rather than simply erased.'
  ]);
  sub('Skanda Purāṇa','Contents','Vārāṇasī and the sacralization of place',[
    'Vārāṇasī occupies a decisive place in the early tradition. The city is represented not merely as a collection of shrines but as a cosmic field whose salvific power is explained through Śiva’s presence, mythic events and specific ritual actions. This early material is crucial for the history of the city’s later pan-Indian religious prestige.',
    'Sacred geography is productive in such chapters. By narrating why a place is powerful and what happens when one worships, bathes or dies there, the text helps constitute the place as a destination. Literature is part of the social process through which a route or shrine becomes pilgrimage geography.',
    'Later Kāśī material under the Skanda title greatly expands this process. The relationship is historical rather than simply additive: a prestigious early Śaiva association with Vārāṇasī created a powerful textual environment for later regional elaboration.'
  ]);
  sub('Skanda Purāṇa','Contents','Prabhāsa, Avantī and the Narmadā traditions',[
    'The later corpus preserves enormous regional dossiers for western and central India. Prabhāsa and the Somanātha region, Avantī and Ujjain, and the Reva or Narmadā landscape receive myths, tīrtha lists and ritual promises that turn local geography into an extensive Sanskrit sacred archive.',
    'These materials preserve names of shrines, rivers, crossings and ritual stations that can be compared with other regional sources. They are especially valuable because philosophical and courtly texts often have little reason to record the small-scale geography of pilgrimage.',
    'At the same time, they are prescriptive. A māhātmya promotes and ranks places; it does not merely survey them. Historical use therefore requires comparison with inscriptions, archaeology, local traditions and manuscript dating.'
  ]);
  sub('Skanda Purāṇa','Contents','How a māhātmya works',[
    'A typical pilgrimage unit joins an origin story, a set of ritual instructions and a phalaśruti promising religious fruits. The form allows narrative, geography and practice to become inseparable. A pilgrim does not simply visit a location but enters a story and performs the action by which that story becomes personally efficacious.',
    'Bathing, fasting, gifts, circumambulation, temple worship and the hearing of local myths can all be ranked against older ideals such as sacrifice or austerity. This creates a religious economy in which pilgrimage offers concentrated access to merit.',
    'Because these stories could be recited at the sites they praise, textual authority and local institution reinforced one another. A regional shrine could become legible within a pan-Indian Sanskrit world without ceasing to be intensely local.'
  ]);
  paras('Skanda Purāṇa','Theology',[
    'The early text is strongly Śaiva and closely associated with Pāśupata religious worlds. Śiva’s supremacy is expressed through cosmology, lineage, sacred place and narrative, giving the theology an institutional and geographical dimension rather than limiting it to abstract doctrine.',
    'Skanda remains important as divine son, warrior and bearer of specific mythic cycles, but the title should not obscure the larger Śaiva program. The Purāṇa is as much about the ordering of Śiva’s sacred world as about Skanda himself.',
    'Later Khaṇḍas can be far more heterogeneous. Regional Vaiṣṇava, Śākta and local cultic material may be absorbed under the same title. The theology of a late printed Khaṇḍa therefore cannot be projected backward into the early Nepalese manuscript tradition.'
  ]);
  paras('Skanda Purāṇa','Critical edition',[
    'The critical-edition project for the early Skandapurāṇa is one of the landmark achievements of modern Purāṇic philology. Its editors compare old manuscript witnesses in order to reconstruct recensions and stages of textual development rather than merely producing an eclectic Sanskrit reading.',
    'The dated 810 CE Nepalese manuscript is especially important because very few Purāṇas possess such an early dated witness. Its antiquity provides a fixed point against which later expansion and rewriting can be assessed.',
    'Critical editing also changes citation practice. References to the early text should use the critical-edition chapter system; references to the later corpus should identify Khaṇḍa and edition. Saying only “Skanda Purāṇa” can conceal centuries of textual difference.',
    'There is no single critical edition that can collapse the entire later eighty-one-thousand-verse complex into the same textual object as the early work. The two horizons should remain visibly distinct even when both are studied under the history of the Skanda title.'
  ]);
  paras('Skanda Purāṇa','Influences and reception',[
    'The early work is indispensable for reconstructing Pāśupata history, the sacralization of Vārāṇasī and the relation between Śaiva communities and early medieval political geography. Its value lies precisely in the possibility of correlating text, place and historical institution.',
    'The later corpus had a different but enormous influence as an archive of pilgrimage. Local communities could gain Purāṇic authority by incorporating sacred landscapes into the Skanda network, while pilgrims encountered regions through a combination of story, ritual and promised merit.',
    'This long history explains why the Skanda Purāṇa is simultaneously one of the most important early Śaiva texts and one of the most sprawling late Purāṇic corpora. Neither identity should be sacrificed to the other.'
  ]);
  paras('Skanda Purāṇa','Rites, dharma and social history',[
    'The early material preserves Pāśupata and Śaiva patterns of religious identity, while the later māhātmyas foreground the practical world of pilgrimage. Taken together they span ascetic, temple and household religious contexts across a very long period.',
    'Pilgrimage texts repeatedly promote sacred bathing, fasting, gift, worship, circumambulation and death at holy places. These acts imply priests, patrons, travelers, routes and institutions even when the text speaks primarily in theological language.',
    'The corpus is therefore a major source for the social history of sacred geography. Its strongest evidence comes not from assuming every prescription was practiced universally but from tracing how particular regions chose to represent and authorize religious action.'
  ]);

  paras('Bhaviṣya Purāṇa','Date of composition',[
    'No single date can characterize the Bhaviṣya Purāṇa. The work is exceptionally stratified, and the very idea of narrating “future” events encouraged later transmitters to extend the text as new rulers, religions and political orders became part of Indian historical memory.',
    'Some verses or ritual materials may be relatively old, while conspicuously late passages in the Pratisarga material presuppose medieval and early-modern history. References to Islamic rulers, Mughal history and figures of the eighteenth century provide direct termini for particular strata and make it impossible to attribute the whole received text to remote antiquity.',
    'This late growth is not evidence that the entire Purāṇa is a modern fabrication. It is evidence that a canonical title remained open. Older ritual and Purāṇic materials coexist with successive historical additions, and each layer must be dated by its own language, sources and historical knowledge.',
    'The Bhaviṣya is consequently one of the clearest examples of why Purāṇic chronology must distinguish title, recension, parvan and passage. A true statement about the age of one block can become false when generalized to the whole compilation.'
  ]);
  sub('Bhaviṣya Purāṇa','Structure','The four common printed parvans',[
    'A widely used printed organization contains Brahma, Madhyama, Pratisarga and Uttara Parvans, but manuscripts do not always reproduce the same boundaries or chapter totals. The structure is therefore a convenient description of a common edition rather than a recovered archetype.',
    'The parvans also have different centers of gravity. Ritual, calendrical and religious-practice materials occupy large portions of the work, while the Pratisarga became famous because of its universal-history and prophecy-like narratives. Modern discussion often overrepresents this one part.',
    'The Uttara material contains extensive vrata and observance traditions. Ignoring these chapters reduces a large ritual Purāṇa to a collection of sensational historical references and obscures the religious purposes for which much of the text circulated.'
  ],[
    'Brahma Parvan: mythic, religious and solar/cultic materials in common editions.',
    'Madhyama Parvan: substantial ritual and ceremonial instruction.',
    'Pratisarga Parvan: layered genealogical and historical narratives, including very late strata.',
    'Uttara Parvan: extensive vrata and religious-observance material.'
  ]);
  sub('Bhaviṣya Purāṇa','Contents','The Pratisarga and universal history',[
    'The Pratisarga recasts historical change within a Purāṇic framework of dynasties, foreign peoples and Kali-yuga. This form allowed new events to be narrated as though they had always belonged to sacred history. The result is a remarkable archive of how later Sanskrit writers domesticated unprecedented political and religious realities.',
    'Passages referring to medieval or early-modern figures should be read as evidence for the period that produced them, not as supernatural predictions from antiquity. Their historical value increases rather than decreases when their late date is acknowledged because they then become sources for memory, comparison and religious self-definition.',
    'The same principle applies to descriptions of non-Hindu religious communities. They reveal how particular Sanskrit redactors understood outsiders through inherited categories and newly available information; they do not provide a neutral ethnography of those communities.'
  ]);
  sub('Bhaviṣya Purāṇa','Contents','Vrata, calendar and domestic religious life',[
    'A large part of the Bhaviṣya is concerned with repeatable observance: fasts, sacred days, gifts, worship and calendrical discipline. Such material belongs to the practical heart of Purāṇic religion and likely mattered more to many users than the historical passages that dominate modern internet discussion.',
    'Vrata literature coordinates body and calendar. Food restriction, worship, recitation and gift are tied to specific lunar or solar occasions, turning time itself into a ritual resource. The household becomes a place where large cosmological claims are enacted through recurring practices.',
    'These instructions also illuminate gender, patronage and family religion, though they remain prescriptive. They describe ideals about who should perform, sponsor or benefit from observance and must be compared with other legal, inscriptional and regional evidence before being treated as social fact.'
  ]);
  sub('Bhaviṣya Purāṇa','Contents','Solar and ritual traditions',[
    'The work contains important solar materials and contributes to the broader Purāṇic history of Sūrya worship. These passages should be studied separately from the very late Pratisarga layers because they may belong to different stages of composition and religious milieu.',
    'Ritual chapters likewise preserve relationships among mantra, image worship, gifts and calendrical observance. Their inclusion demonstrates that the Bhaviṣya title was not defined solely by futurity; it could function as a broad ritual authority.',
    'The coexistence of solar, domestic and historical materials is one reason attempts to assign the entire Purāṇa a single sectarian identity or date are especially misleading.'
  ]);
  paras('Bhaviṣya Purāṇa','Theology',[
    'The Bhaviṣya does not possess one uniform theology across all strata. Different sections promote solar, Vaiṣṇava, Śaiva and other Brahmanical practices, while later historical passages engage with religious communities unknown to the older Purāṇic world.',
    'Its most consistent theological habit is not exclusive deity supremacy but the sacralization of time. Calendar, future history and ritual observance are all organized through a Purāṇic vision in which temporal change remains intelligible within cosmic order.',
    'This helps explain why the title could remain productive. A text defined by relation to future and cyclical time possesses a built-in conceptual mechanism for absorbing later history without formally abandoning its Purāṇic identity.'
  ]);
  paras('Bhaviṣya Purāṇa','Critical edition',[
    'The central editorial problem is stratification at the level of whole blocks. A critical edition must record not only variant readings but whether chapters, parvans or historical sequences occur at all in particular manuscripts. Presence and absence can be more historically revealing than a single word variant.',
    'Late strata should not be silently removed in an attempt to recover an artificially ancient text. They are genuine witnesses to the later history of the Bhaviṣya title and to the ways Sanskrit religious communities represented changing political worlds.',
    'At the same time, late passages cannot be used to date every surrounding chapter. An edition should help readers distinguish older ritual units, medieval redaction and early-modern additions rather than forcing the work into one chronological category.',
    'Citation must therefore include parvan, subsection and edition. Isolated “prophecies” copied without recensional information are particularly unsafe because the same title can contain strata separated by many centuries.'
  ]);
  paras('Bhaviṣya Purāṇa','Influences and reception',[
    'The Bhaviṣya has acquired an outsized modern reputation because selected Pratisarga passages are presented as predictions of later religions or political events. Scholarly reception is more cautious: those passages are used to reconstruct the date and concerns of the redactors who knew the events they describe.',
    'This critical reading does not diminish the text. It reveals a rare record of canonical adaptation in which Sanskrit authors repeatedly folded new historical realities into a sacred narrative of time. The Purāṇa becomes a source for the study of memory as well as ritual.',
    'Its extensive vrata and calendrical material also had a practical afterlife in ritual digests and observance traditions. A balanced reception history must therefore place the famous historical material beside the far larger world of household and festival religion.'
  ]);
  paras('Bhaviṣya Purāṇa','Rites, dharma and social history',[
    'Vrata, gift, sacred calendar and ritual purity form a major body of prescriptive social evidence. The text imagines religious households organizing portions of the year around recurring observances with defined foods, recipients, stories and promised fruits.',
    'Historical strata provide a different kind of social evidence. Their vocabulary for foreign peoples, rulers and religious communities shows how later Sanskrit writers categorized a changing world through inherited Purāṇic concepts.',
    'Both forms of evidence require contextualization. Prescriptions do not prove universal practice, and historical narratives are not neutral chronicles, but together they make the Bhaviṣya a uniquely long-lived record of Brahmanical attempts to organize ritual time and historical change.'
  ]);

  paras('Brahmavaivarta Purāṇa','Date of composition',[
    'The received Brahmavaivarta Purāṇa is a comparatively late Mahāpurāṇa in its present form. The antiquity of the title should be separated from the age of the surviving four-Khaṇḍa work, whose strong Rādhā-Kṛṣṇa theology and religious vocabulary fit a late-medieval devotional environment.',
    'Older references to a Brahmavaivarta do not prove that the cited work contained the present Kṛṣṇa and Rādhā materials. A title can persist while its textual contents are replaced or extensively rewritten. Historical arguments must therefore compare actual quotations and manuscript evidence rather than simply citing the name.',
    'The received form is often placed around the fifteenth or sixteenth century, while allowing earlier components and later variation. This dating makes the work valuable for understanding a mature period of Kṛṣṇa devotion rather than treating lateness as evidence of lesser religious significance.',
    'Its chronology also encourages comparison with contemporary Sanskrit and vernacular devotional cultures. The period was one of intense theological and literary creativity, and the Purāṇa belongs to that environment of interaction rather than to an isolated “decline” of Sanskrit scripture.'
  ]);
  sub('Brahmavaivarta Purāṇa','Structure','The four Khaṇḍas',[
    'The received Purāṇa is organized into Brahma, Prakṛti, Gaṇeśa and Kṛṣṇa Khaṇḍas. This fourfold architecture gathers cosmology, goddess theology, Gaṇeśa narrative and an extensive Rādhā-Kṛṣṇa world under one title.',
    'The Kṛṣṇa Khaṇḍa is the largest and gives the work its best-known theological profile, but the earlier books are not disposable preliminaries. The Prakṛti Khaṇḍa in particular is essential for understanding how feminine divine power is integrated into the supremacy of Kṛṣṇa and Rādhā.',
    'The Gaṇeśa Khaṇḍa demonstrates the synthetic ambitions of the compiler. A major deity with his own powerful cultic world is incorporated into a hierarchy centered elsewhere, showing how late Purāṇic texts coordinated multiple devotional communities.'
  ],[
    'Brahma Khaṇḍa: cosmology and divine ordering.',
    'Prakṛti Khaṇḍa: goddess forms and the theology of divine nature or power.',
    'Gaṇeśa Khaṇḍa: narratives and worship associated with Gaṇeśa.',
    'Kṛṣṇa Khaṇḍa: the largest unit, centered on Rādhā-Kṛṣṇa and Goloka.'
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Goloka and the re-centering of Kṛṣṇa',[
    'The received work places Kṛṣṇa at the summit of a cosmological hierarchy in which Goloka possesses supreme status. This is not simply the Kṛṣṇa biography familiar from the Harivaṃśa or Viṣṇu Purāṇa; it is a late devotional cosmology in which pastoral divine life becomes the highest metaphysical realm.',
    'The elevation of Goloka changes the relationship among divine forms. Viṣṇu and other deities can be understood within a Kṛṣṇa-centered hierarchy, while the pastoral imagery of cows, cowherds and intimate love is given cosmic rather than merely local significance.',
    'This theology shows how a Purāṇa can reinterpret inherited myth without discarding it. Older avatāra frameworks remain recognizable but are reorganized around a different statement of ultimate divinity.'
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Rādhā as cosmic principle',[
    'Rādhā’s role is one of the most distinctive features of the received Brahmavaivarta. She is not merely one figure in Kṛṣṇa’s youthful narrative but a cosmic counterpart whose relation to Kṛṣṇa expresses the structure of divine reality itself.',
    'The language of Puruṣa and Prakṛti is devotionalized through the pair. Feminine divine power can unfold through multiple goddess forms while remaining connected with Rādhā, allowing the Purāṇa to coordinate goddess cosmology and Kṛṣṇa devotion.',
    'This makes comparison with the Bhāgavata especially instructive. The Bhāgavata became foundational for later Rādhā-Kṛṣṇa traditions even though it does not construct the same explicit Rādhā-centered cosmology. The Brahmavaivarta documents a later stage in the Sanskrit canonization of Rādhā.'
  ]);
  sub('Brahmavaivarta Purāṇa','Contents','Gaṇeśa and the synthetic Purāṇic universe',[
    'The substantial Gaṇeśa material demonstrates that the text’s late Vaiṣṇavism is not narrowly exclusive. Gaṇeśa can possess an elaborate narrative and devotional place while ultimately being situated within the compiler’s larger hierarchy of divine power.',
    'Such synthesis is characteristic of Purāṇic religious competition. A compiler does not need to deny the efficacy or greatness of another deity in order to assert the supremacy of a chosen divine center. The other deity can be honored, narrated and then genealogically or metaphysically related to that center.',
    'For historians, this helps reconstruct a devotional landscape in which sectarian communities shared myths, festivals and gods even while producing strong claims of theological priority.'
  ]);
  paras('Brahmavaivarta Purāṇa','Theology',[
    'The received text presents one of the most developed Rādhā-Kṛṣṇa theologies in the Purāṇic corpus. Kṛṣṇa is not merely an avatāra who descends from a higher Viṣṇu; he can be presented as the ultimate divine person from whom other forms derive.',
    'Rādhā embodies divine feminine power in an equally elevated way. Her relation to Kṛṣṇa is expressed through images of inseparability and complementary divine identity, giving emotional categories such as love, jealousy, separation and reunion a cosmological significance.',
    'The Prakṛti theology provides a bridge to goddess traditions. Multiple female deities can be understood as manifestations of one divine power, allowing a Kṛṣṇa-centered Purāṇa to contain a sophisticated theology of the Goddess rather than treating feminine divinity as peripheral.',
    'The result is a late devotional synthesis in which affect and metaphysics are deliberately intertwined. Divine love does not illustrate a philosophy invented elsewhere; it becomes one of the principal ways in which the structure of ultimate reality is narrated.'
  ]);
  paras('Brahmavaivarta Purāṇa','Critical edition',[
    'The central textual problem is the relationship between the old title and the received late-medieval work. Citations of an earlier Brahmavaivarta tradition need to be compared directly with modern manuscripts before they can be used to establish the antiquity of a present passage.',
    'Manuscripts and printed editions also vary in chapter totals and readings within the four Khaṇḍas. The existence of the stable four-part concept does not mean every witness transmits an identical text.',
    'A historical edition would ideally distinguish material demonstrably known in earlier citation from the received Rādhā-centered redaction. Such stratification would clarify how a Purāṇic title was transformed by late-medieval devotional creativity.',
    'Until then, claims about the age of specific theological passages should remain cautious. The antiquity of Kṛṣṇa devotion in general does not date a particular Goloka or Rādhā formulation in the surviving Brahmavaivarta.'
  ]);
  paras('Brahmavaivarta Purāṇa','Influences and reception',[
    'The Purāṇa belongs to a wider late-medieval world in which Rādhā-Kṛṣṇa devotion flourished in Sanskrit, regional languages, song and performance. Its Sanskrit form should therefore be read as one participant in a multilingual religious culture rather than as a stage isolated from vernacular bhakti.',
    'Its exact relationship to individual Vaiṣṇava schools must be demonstrated case by case, but its themes clearly share the period’s intense interest in Rādhā, Goloka, intimate divine love and the metaphysical elevation of pastoral Kṛṣṇa.',
    'The text’s goddess and Gaṇeśa materials also gave it a reception beyond a narrowly Rādhā-only devotional audience. Its synthesis allowed several popular cults to be located within one scriptural hierarchy.',
    'Modern scholarship values it especially as evidence for late Purāṇic creativity. Rather than measuring it against an imagined classical purity, historians can ask how Sanskrit canon formation continued to respond to new devotional forms.'
  ]);
  paras('Brahmavaivarta Purāṇa','Rites, dharma and social history',[
    'The received work integrates worship, vows and devotional observance with its theology of Rādhā, Kṛṣṇa, goddesses and Gaṇeśa. These practices show how cosmic hierarchy was translated into household and temple religion.',
    'The text also preserves normative statements about gender, sexuality, family and purity that need careful historical reading. They represent the ideals and anxieties of particular redactional environments, not transparent descriptions of all late-medieval Hindu society.',
    'Its devotional anthropology is especially important: ordinary emotions and relationships can be reimagined as reflections of divine love. That move affected later religious aesthetics even where communities did not accept every social prescription of the Purāṇa.',
    'The social world of the text is therefore best reconstructed by combining its ritual rules with contemporary literary, inscriptional and regional sources rather than treating the Purāṇa as a self-sufficient social code.'
  ]);
})();