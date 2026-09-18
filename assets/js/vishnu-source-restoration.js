/* Source-PDF restoration for the Viṣṇu paper; loaded before its paged reader. */
(()=>{
'use strict';
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;
const root=document.getElementById('preface')?.parentElement;if(!root)return;
const children=()=>[...root.children],text=n=>(n?.textContent||'').replace(/\s+/g,' ').trim();
const make=(tag,s)=>{const n=document.createElement(tag);if(s)n.textContent=s;return n};
const find=(selector,re)=>children().find(n=>n.matches(selector)&&re.test(text(n)));
const opening=find('p',/^While special attention has been given to/i);
if(opening&&!document.getElementById('objections')){const h=make('h2','5. Objections');h.id='objections';opening.before(h)}
// Śrīdhara's Sanskrit gloss, source PDF p. 47 (omitted in the web transcription).
const sridhara=find('p',/Śrīdhara explains that Rudra, though possessing full knowledge/i);
if(sridhara&&!root.querySelector('[data-vishnu-sridhara-source]')){const d=make('details');d.className='sanskrit-reveal';d.dataset.vishnuSridharaSource='47';const p=make('p','भगवानिति स्वयं सर्वज्ञोऽपि स्वपराभवेन बाणमन्यांश्च प्रति कृष्णमहिमानमबोधयदिति भावः ।');p.lang='sa-Deva';d.append(make('summary','Show Sanskrit'),p);sridhara.after(d)}
// Each entry follows the corresponding row of the paper's original tables on pp. 63–67.
// The interpretations below are attributed to the original paper, not independently established facts.
const tables=[
['Table 1: Karma-kāṇḍa',[
['Ṛgveda 10.113.2','Viṣṇu worshipped for his intrinsic nature; Indra circumstantially.'],
['Ṛgveda 1.156.2','Viṣṇu is most ancient, creator and self-born.'],
['Ṛgveda 1.22.20','Viṣṇu’s supreme station is contemplated by the wise.'],
['Taittirīya Saṃhitā 5.5.1','Viṣṇu is highest among the deities.'],
['Śatapatha Brāhmaṇa 14.1.1.5','Viṣṇu is supreme among the deities.'],
['Aitareya Brāhmaṇa 1.1.1','Viṣṇu highest among the deities; Sāyaṇa explains “highest” as superiority.'],
['Śatapatha Brāhmaṇa 5.2.3.6','Viṣṇu highest among the deities.'],
['Paiṅgi-rahasya Brāhmaṇa','Viṣṇu alone existed at the beginning, neither Śiva nor Brahmā.']]],
['Table 2: Jñāna-kāṇḍa',[
['Nārāyaṇa Sūkta','Nārāyaṇa (Viṣṇu) is supreme Brahman, the supreme being.'],
['Nārāyaṇa Upaniṣad','Nārāyaṇa creates Śiva, Brahmā, Indra and all beings.'],
['Mahopaniṣad 1.1','Nārāyaṇa alone was in the beginning, not Śiva or Brahmā.'],
['Puruṣa Sūkta (Taittirīya Āraṇyaka)','Primordial Puruṣa, creator of everything, is the husband of Lakṣmī, i.e. Viṣṇu.'],
['Chāndogya Upaniṣad 12.8.3','The supreme person (“uttama puruṣa”) is identified as Kṛṣṇa by Śaṅkara and reinforced by Ānandagiri, as cited in the paper.'],
['Bṛhadāraṇyaka Upaniṣad 3.7.3','Śaṅkara identifies the supreme God, creator of the earth, as Nārāyaṇa.'],
['Kaṭha Upaniṣad 1.2.15','Śaṅkara identifies the being praised by all the Vedas as Viṣṇu.']]],
['Table 3: Vedāṅgas, Dharmaśāstras and Rāmāyaṇa',[
['Manusmṛti 1.10–11','Nārāyaṇa as creator.'],
['Bṛhat Parāśara Horā Śāstra 1.9–11','Nārāyaṇa supreme creator; Brahmā and Rudra subordinate.'],
['Vālmīki Rāmāyaṇa 1.15.32','All deities, including Śiva, worship and seek help from Viṣṇu.'],
['Vālmīki Rāmāyaṇa 1.74.14–20','Viṣṇu breaks Śiva’s bow; all deities and ṛṣis accept Viṣṇu as superior.'],
['Vālmīki Rāmāyaṇa 5.51.45','Even Brahmā, Śiva and Indra cannot save one Rāma wishes to slay in battle.'],
['Vālmīki Rāmāyaṇa 6.105.12–14','Rāma (Viṣṇu) identified as supreme Brahman.']]],
['Table 4: Mahābhārata (including Bhagavad Gītā)',[
['Mahābhārata 1.1.22–24','Opening salutes Viṣṇu and calls him supreme creator, Brahman.'],
['Mahābhārata 12.338','Śiva, subordinate to Brahmā and called his son, asks him about the supreme Lord.'],
['Mahābhārata 12.339','Brahmā narrates the greatness of the supreme Lord and identifies him as Nārāyaṇa.'],
['Mahābhārata 12.350','Śiva and Brahmā arise from supreme Viṣṇu as his instruments.'],
['Mahābhārata 14.118.37','Kṛṣṇa says Śiva, Brahmā and other gods seek refuge in him.'],
['Bhagavad Gītā 7.7','Nothing is superior to Kṛṣṇa; everything depends on him.'],
['Bhagavad Gītā 10.2','Deities and ṛṣis do not know his origin because he created them.'],
['Bhagavad Gītā 9.23','Worship of other deities reaches him but through an improper method, as glossed by Śaṅkara.'],
['Bhagavad Gītā 9.25','Worshippers of other deities reach their respective abodes; Kṛṣṇa’s reach him.'],
['Bhagavad Gītā 6.47','Śaṅkara’s gloss identifies the supreme yogin as a worshipper of Vāsudeva.']]],
['Table 5: Purāṇas',[
['Agni Purāṇa 379','“Bhagavān” and “Brahman” are principally used for Viṣṇu; others secondarily.'],
['Liṅga Purāṇa 2.1.7','Viṣṇu is supreme and creator of Brahmā and Rudra.'],
['Skanda Purāṇa 2.2.24.11','The cosmic Puruṣa arises at Vāsudeva’s impulse; Śiva and Brahmā are partial manifestations.'],
['Garuḍa Purāṇa 3.2.32','Viṣṇu and Lakṣmī alone existed at the beginning.'],
['Garuḍa Purāṇa 3.2.34–35','Viṣṇu alone is supreme; only he is principally Brahman.'],
['Garuḍa Purāṇa 3.4.4–9','Viṣṇu is neither exactly identical to nor wholly separate from Brahmā and Śiva, whom he indwells.'],
['Garuḍa Purāṇa 3.6.44','Śiva and others do not know even Viṣṇu’s feet.'],
['Garuḍa Purāṇa 3.1.72','Viṣṇu supreme among deities; Śiva foremost among his devotees.'],
['Bhāgavata Purāṇa 12.13.16','Viṣṇu supreme among deities; Śiva foremost among Vaiṣṇavas.'],
['Bhāgavata Purāṇa 2.5.15','Nārāyaṇa supreme in the Vedas and among deities.'],
['Bhāgavata Purāṇa 3.8 and 3.12','Viṣṇu creates Brahmā; Brahmā creates Śiva.'],
['Bhāgavata Purāṇa 10.63','Śiva’s defeat in the Bāṇa narrative is explained by Śrīdhara as revealing Kṛṣṇa’s greatness.'],
['Varāha Purāṇa 70.16–18','Śiva describes Viṣṇu as supreme and creator of himself and Brahmā.'],
['Padma Purāṇa 6.236.2, 9','Its Śiva passage condemns regarding another deity as superior or equal to Viṣṇu.'],
['Padma Purāṇa 5.97.27','Its samanvaya passage concludes Viṣṇu supreme.']]]
];
const makeTable=(rows,offset=0)=>{const t=make('table');t.className='source-evidence-table';t.append(make('caption','Statements and references as tabulated in the source PDF'));const tr=make('tr');['No.','Reference','Statement in the source'].forEach(s=>tr.append(make('th',s)));const head=make('thead');head.append(tr);t.append(head);const body=make('tbody');rows.forEach((r,i)=>{const row=make('tr');[String(i+1+offset),...r].forEach(v=>row.append(make('td',v)));body.append(row)});t.append(body);return t};
tables.forEach(([heading,rows],i)=>{const h=find('h3',new RegExp('^Table '+(i+1)+':'));if(!h)return;let n=h.nextElementSibling;while(n&&!n.matches('table,h2,h3'))n=n.nextElementSibling;if(n?.matches('table'))n.replaceWith(makeTable(rows,[0,8,0,6,0][i]));h.textContent=heading});
const purana=find('h3',/^Table 5:/);
if(purana&&!root.querySelector('[data-vishnu-recap]')){const rec=make('div');rec.dataset.vishnuRecap='65-67';rec.innerHTML='<h4>Purāṇa meta-analysis — summary in the source</h4><ul><li>The opening questions of Vaiṣṇava Purāṇas ask generally which deity is supreme; the Śaiva Purāṇas cited begin with questions specifically about Śiva.</li><li>The paper compares Padma Purāṇa 6.236, Skanda Purāṇa 7.1.2.87 and Matsya Purāṇa 56.68 on the sāttvika, rājasa and tāmasa classification of Purāṇas.</li><li>It cites Varāha Purāṇa 70.20–24 on sattva, rajas and tamas.</li></ul>';purana.before(rec)}
// The PDF (pp. 70–71) has 30 separately numbered scriptures and 18 works.
const scriptures=[
['Vedas',['Ṛgveda Saṃhitā','Taittirīya Saṃhitā','Aitareya Brāhmaṇa','Śatapatha Brāhmaṇa','Paiṅgi Rahasya Brāhmaṇa','Puruṣa Sūktam (Taittirīya Āraṇyaka)','Mahopaniṣat','Nārāyaṇopaniṣat','Chāndogyopaniṣat','Bṛhadāraṇyakopaniṣat','Kaṭhopaniṣat','Śvetāśvataropaniṣat']],
['Smṛti',['Manusmṛti','Bṛhat Parāśara Horā Śāstra','Rāmāyaṇa','Mahābhārata (BORI CE)','Bhagavad Gītā (Mahābhārata)','Viṣṇu Sahasranāma (Mahābhārata)']],
['Darśana',['Mīmāṃsā Sūtras','Brahma Sūtras']],
['Purāṇas',['Agni','Liṅga','Skanda','Kūrma','Śiva','Viṣṇu','Bhāgavata','Varāha','Padma','Nārada']]
];
const acharyas=[
['Commentaries of Śaṅkarācārya',['On the Brahma Sūtras (Śārīraka-Mīmāṃsā)','On the Bhagavad Gītā','On Chāndogya Upaniṣat','On Bṛhadāraṇyakopaniṣat','On the Viṣṇu Sahasranāma']],
['Works of other Ācāryas',['Madhusūdana Sarasvatī’s Advaita-Siddhi, Nirṇaya Sagar Press','Yāmunācārya’s Āgama-prāmāṇya','Ānandagiri’s sub-commentary on Śaṅkara’s commentary of Chāndogya Upaniṣad, Anand Ashram Press','Sāyaṇa’s commentary on the Aitareya Brāhmaṇa','The Brahma Saṃhitā, rediscovered by Caitanya Mahāprabhu','Śrīpati Paṇḍitācārya’s commentary on Brahma Sūtras (Śrīkara Bhāṣya), Oriental Institute, Mysore','Vijayendra Tīrtha’s Paratattvaprakāśikā','Śrīdharācārya’s commentary on the Bhāgavatam (Bhāvārthadīpikā)','Govindarāja’s commentary on the Rāmāyaṇa (Bhūṣaṇa)','Maheśvara Tīrtha’s commentary on the Rāmāyaṇa (Tattvadīpa)','Madhusūdana Sarasvatī’s commentary on the Gītā','Rāmānuja’s commentary on the Bhagavad Gītā','Abhinavagupta’s commentary on the Bhagavad Gītā']]
];
function restoreBibliography(h,groups){if(!h)return;let n=h.nextElementSibling;const old=[];while(n&&!n.matches('h2,h3')){old.push(n);n=n.nextElementSibling}old.filter(e=>e.matches('ol,ul')).forEach(e=>e.remove());const wrap=make('div');wrap.className='source-bibliography';let first=1;groups.forEach(([name,items])=>{wrap.append(make('h4',name));const list=make('ol');list.start=first;items.forEach(item=>list.append(make('li',item)));first+=items.length;wrap.append(list)});h.after(wrap)}
restoreBibliography(find('h3',/^I\. Scriptures/),scriptures);
restoreBibliography(find('h3',/^II\. Works of the Ācāryas/),acharyas);
const note=find('p',/^Editorial note: This web edition preserves/i);
if(note)note.textContent='Editorial note: This online article is an edited transcription of Caligayla’s paper, not a page-for-page diplomatic edition. Check the source PDF for exact wording and references.';
})();