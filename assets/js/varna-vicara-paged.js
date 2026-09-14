(()=>{
const base='/vivekadrishti/articles/varna-vicara/';
const pages=[
{id:'introduction',file:'preface.html',parent:'Preface',title:'Introduction',stop:'remark-1'},
{id:'remark-1',file:'preface.html',parent:'Preface',title:'Remark on Ācārya Consensus',kind:'remark'},
{id:'remark-2',file:'preface.html',parent:'Preface',title:'Remark on Paramparā and Circular Reasoning',kind:'remark'},
{id:'purvapaksha-position',file:'purvapaksha.html',parent:'Pūrvapakṣa',title:'Position and pramāṇas',stop:'remark-3'},
{id:'remark-3',file:'purvapaksha.html',parent:'Pūrvapakṣa',title:'Remark on Birth-Based Brāhmaṇa Privileges',kind:'remark'},
{id:'rejection-universal',file:'rejection.html',parent:'Pūrvapakṣa',title:'Refutation of Pūrvapakṣa',stop:'vishvamitra'},
{id:'vishvamitra',file:'rejection.html',parent:'Bhaviṣya Purāṇa on Varṇa',title:'Viśvāmitra, mlecchas and śūdras',stop:'remark-4'},
{id:'remark-4',file:'rejection.html',parent:'Bhaviṣya Purāṇa on Varṇa',title:'Remark on the Fast to Become a Brāhmaṇa',stop:'jati-distinctions',kind:'remark-heading'},
{id:'jati-distinctions',file:'rejection.html',parent:'Bhaviṣya Purāṇa on Varṇa',title:'Rejection of jāti-distinctions'}
];
const byId=new Map(pages.map(x=>[x.id,x]));
const aliases=new Map([['preface','introduction'],['purvapaksha','purvapaksha-position'],['rejection','vishvamitra']]);
const params=new URLSearchParams(location.search);let id=params.get('section')||location.hash.slice(1)||'introduction';id=aliases.get(id)||id;
const current=byId.get(id)||pages[0],index=pages.indexOf(current);
if(location.hash||params.get('section')!==current.id){const u=new URL(location.href);u.hash='';current.id==='introduction'?u.searchParams.delete('section'):u.searchParams.set('section',current.id);history.replaceState(null,'',u.pathname+u.search)}
const root=document.getElementById('source-content'),parent=document.getElementById('section-parent'),count=document.getElementById('section-count');
if(parent)parent.textContent=current.parent;if(count)count.textContent=`Section ${index+1} of ${pages.length}`;document.title=`${current.title} — Varṇa-vicāra — Viveka Dṛṣṭi`;
document.querySelectorAll('.toc a[data-section]').forEach(a=>{const on=a.dataset.section===current.id;a.classList.toggle('is-active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
const href=p=>p?(p.id==='introduction'?base:`${base}?section=${encodeURIComponent(p.id)}`):'';
const pager=(el,p,label)=>{if(!el)return;if(!p){el.classList.add('disabled');el.removeAttribute('href');el.innerHTML=`<small>${label}</small>`;return}el.classList.remove('disabled');el.href=href(p);el.innerHTML=`<small>${label}</small>${p.title}`};
pager(document.getElementById('page-prev'),pages[index-1],'Previous');pager(document.getElementById('page-next'),pages[index+1],'Next');
const bindSanskrit=scope=>scope.querySelectorAll('details.sanskrit-reveal').forEach(d=>{const s=d.querySelector(':scope>summary');if(!s)return;const sync=()=>s.textContent=d.open?'Hide Sanskrit':'Show Sanskrit';d.addEventListener('toggle',sync);sync()});
const remarkSection=(source,page)=>{const section=document.createElement('section');section.className='remark-section plain-remark';section.id=page.id;const h=document.createElement('h3');h.className='remark-label';h.textContent=page.title;section.appendChild(h);
if(source.matches('details'))[...source.children].filter(n=>!n.matches('summary')).forEach(n=>section.appendChild(n.cloneNode(true)));
else{let n=source.nextSibling;while(n){if(n.nodeType===1&&page.stop&&n.id===page.stop)break;section.appendChild(n.cloneNode(true));n=n.nextSibling}}
if(page.id==='remark-4'){const p=section.querySelector('p');if(p)p.innerHTML='Vishvamitra was not born a Brahmin or Brahmin-Jati. In some stories he does a long period of Tapas <strong>by which</strong> he attained Brahminhood. In this story too he does a long time of tapas, but that is stated to have been useless. Only by performing this fast for a year he attained Brahminhood. A basic understanding of the Vishvamitra story tells us that he became a true Brahmin due to the attainment of ritual rights etc. The Purana states that Mlecchas and Shudras can also do this fast to attain Brahminhood. We should understand it to be in the same sense as Vishvamitra.'}
return section};
const extract=(frag,page)=>{const start=frag.querySelector(`#${CSS.escape(page.id)}`);if(!start)throw Error(`Missing ${page.id}`);if(page.kind==='remark'||page.kind==='remark-heading')return[remarkSection(start,page)];const out=[start.cloneNode(true)];let n=start.nextSibling;while(n){if(n.nodeType===1&&page.stop&&n.id===page.stop)break;out.push(n.cloneNode(true));n=n.nextSibling}if(page.id==='rejection-universal'&&out[0])out[0].textContent='Refutation of Pūrvapakṣa';return out};

const jatiArguments=[
{
title:'The question posed by the text: jāti or karma?',
context:'The discussion is not imported into the passage from outside. Śatānīka raises it explicitly after the account of Kārttikeya: is jāti superior, or is karma superior? He immediately restates the contrast as birth (janman) versus action. The sages then ask what, exactly, could constitute brāhmaṇa-status—birth, Vedic study, body or self, saṃskāra, conduct, or action.',
refs:['bp-1-40-3','bp-1-40-4','bp-1-40-8','bp-1-40-10','bp-1-40-11','bp-1-40-12'],
label:'Bhaviṣya Purāṇa 1.40.3–4, 8, 10–12',
argument:'Method of the argument: a proposed hereditary distinction is not simply assumed. The text asks what its locus and identifying mark would be and says that characteristics not established by valid means of knowledge should not be treated as real. Brahmā then introduces the answer as a reasoned (satarka) statement.'
},
{
title:'Reductio I — if varṇa were a natural jāti, it should be perceptible like horse and cow',
context:'The first major test treats hereditary brāhmaṇa-hood as though it were a genuine natural-kind distinction. If “brāhmaṇa” and “śūdra” were different jātis in the same sense that horse and cow are different jātis, there should be a stable class-characteristic by which one can perceive the difference.',
refs:['bp-1-40-19','bp-1-40-20','bp-1-40-21'],
label:'Bhaviṣya Purāṇa 1.40.19–21',
argument:'The reductio is direct: a horse entering a herd of cows remains perceptibly a horse; a brāhmaṇa entering a group of śūdras has no comparable species-mark. The common jāti that perception establishes is manuṣya-jāti, humanity. The text therefore relocates the practical distinction to saṃskāra and distinctive kriyā rather than an intrinsic human sub-species inherited at birth.'
},
{
title:'Reductio II — brāhmaṇahood cannot be an eternal property of the jīva',
context:'A second possibility is that the distinction does not lie in the visible body but in the individual soul. The text answers this through transmigration: the same jīva passes through radically different births and statuses.',
refs:['bp-1-40-22','bp-1-40-25','bp-1-40-26','bp-1-40-27','bp-1-40-28','bp-1-40-29'],
label:'Bhaviṣya Purāṇa 1.40.22, 25–29',
argument:'If brāhmaṇahood were an eternal property of the jīva, it could not disappear when that jīva is born as a hunter, animal, or bird and later appear again in a brāhmaṇa birth. The story is used to deny precisely this: the text concludes that brāhmaṇya is not eternally lodged in the jīva.'
},
{
title:'Natural species have fixed marks; human varṇa does not',
context:'The text next compares the proposed hereditary varṇas with genuinely distinguishable animal kinds. Elephants, horses, cattle and other animals possess stable bodily and class-features. It asks whether any analogous eternal brāhmaṇa-form exists among human beings.',
refs:['bp-1-40-30','bp-1-40-31','bp-1-40-32','bp-1-40-33','bp-1-40-34','bp-1-40-35'],
label:'Bhaviṣya Purāṇa 1.40.30–35',
argument:'The answer is negative. No eternal bodily form, colour, or natural species-mark separates human varṇas. Brāhmaṇa-status is called non-permanent, conventional (sāṅketika), and artificial/constructed (kṛtrima); the convention is then tied to kārya-śakti, capacity for a particular work. The text even says that persisting in a supposedly intrinsic arrangement after these pramāṇas refute it is self-contradictory.'
},
{
title:'A supposedly hereditary status can be lost and gained',
context:'The argument then turns from metaphysics to consequences. Lineage, saṃskāras and even Vedic learning do not make the status indestructible: bad conduct and prohibited occupations are said to cause loss of brāhmaṇa-status.',
refs:['bp-1-40-42','bp-1-40-43','bp-1-40-44','bp-1-40-45','bp-1-40-46','bp-1-40-47'],
label:'Bhaviṣya Purāṇa 1.40.42–47',
argument:'This is incompatible with brāhmaṇahood as an inalienable birth-essence. The sequence first says that even one furnished with distinguished gotra and saṃskāras may lose brāhmaṇya through durācāra; it then concludes that no imperishable jāti inheres in the embodied self and explicitly states movement from śūdra to brāhmaṇa and from brāhmaṇa to śūdra.'
},
{
title:'Vedic learning is not the essence; conduct is the lakṣaṇa',
context:'Chapter 41 tests Vedic learning as another proposed discriminator. It points out that people of many social origins can study Veda, move elsewhere, assume recognised statuses and become socially indistinguishable by the very signs used to identify those statuses.',
refs:['bp-1-41-1','bp-1-41-2','bp-1-41-3','bp-1-41-4','bp-1-41-5','bp-1-41-6','bp-1-41-7','bp-1-41-8','bp-1-41-9'],
label:'Bhaviṣya Purāṇa 1.41.1–9',
argument:'The punch line is 1.41.8: Vedic study by itself is called a skill (śilpa), whereas conduct (vṛtta) is remembered as the mark (lakṣaṇa) of a brāhmaṇa. The point is not that learning is worthless, but that it cannot serve as an innate hereditary essence when it is acquired and when conduct can contradict the status.'
},
{
title:'External insignia and saṃskāras do not prove an intrinsic jāti',
context:'Perhaps the distinction is identified by the sacred thread, topknot, praṇava, initiation, sandhyā, girdle, staff, antelope skin and similar external or ritual marks. The text tests that proposal immediately.',
refs:['bp-1-41-10','bp-1-41-11','bp-1-41-12'],
label:'Bhaviṣya Purāṇa 1.41.10–12',
argument:'Because those marks can be adopted by people labelled śūdra, they cannot establish an intrinsic difference in the person. They may function as ritual conventions or signs, but the argument denies that they reveal a naturally inborn human jāti.'
},
{
title:'Occult or mantra power also fails as an innate marker',
context:'Another possible reply is that brāhmaṇas possess a special spiritual or mantra-power that distinguishes them. The text again asks whether this power is really exclusive and ineradicable.',
refs:['bp-1-41-13','bp-1-41-14','bp-1-41-15','bp-1-41-16','bp-1-41-17'],
label:'Bhaviṣya Purāṇa 1.41.13–17',
argument:'The proposed sign fails because mantra-power is attributed to tapas, truth and other acquired excellences and is available to human beings generally. The text therefore refuses to turn extraordinary capacity into a hereditary essence and explicitly says that no inherent difference is thereby established between śūdra and brāhmaṇa.'
},
{
title:'Reductio III — is brāhmaṇahood visible, invisible, inherited, produced, or caused?',
context:'The text then runs through increasingly abstract escape-routes. Is jāti-dharma a special quality connected with revelation? Is it produced from the womb? Is it caused by a collection of factors? Is brāhmaṇahood visible or invisible? Does saṃskāra produce the superiority?',
refs:['bp-1-41-21','bp-1-41-22','bp-1-41-23','bp-1-41-24','bp-1-41-26','bp-1-41-27','bp-1-41-28','bp-1-41-29','bp-1-41-30','bp-1-41-31','bp-1-41-32'],
label:'Bhaviṣya Purāṇa 1.41.21–24, 26–32',
argument:'This is a dilemma and causal reductio. If the distinction is visible, everyone should be able to perceive it; if it is wholly unseen, there is no determinate perceptual basis for identifying it. If an excellence is produced by study or saṃskāra, it belongs to whoever possesses that cause and cannot coherently be restricted to heredity. The sequence ends by stressing the common material constitution of human bodies.'
},
{
title:'An exhaustive search finds no inner or outer bodily difference',
context:'The argument becomes deliberately exhaustive. It searches for the alleged difference in internal and external properties—pleasure, power, knowledge, courage, lifespan, limbs, strength, intelligence, dharma, appearance, medicine, womb, movement, bodily substances, skin, flesh, fat, bone, blood and colour.',
refs:['bp-1-41-34','bp-1-41-35','bp-1-41-36','bp-1-41-37','bp-1-41-38','bp-1-41-39','bp-1-41-40','bp-1-41-41','bp-1-41-42','bp-1-41-43','bp-1-41-44','bp-1-41-45','bp-1-41-46'],
label:'Bhaviṣya Purāṇa 1.41.34–46',
argument:'The conclusion is not merely that one particular physical theory fails. The text claims that the śūdra–brāhmaṇa difference is not found even after a systematic search through the relevant bodily and psychological properties. It again contrasts this with genuine natural jātis and argues that a birth-produced distinction collapses under pramāṇa, example and reasoning.'
},
{
title:'Reductio IV — where in the body is brāhmaṇahood: each part, or the whole?',
context:'The text now confronts the claim that the body itself is brāhmaṇa. This is the whole-and-parts argument. If brāhmaṇahood really inheres in a brāhmaṇa body, one must identify where it resides.',
refs:['bp-1-41-49','bp-1-41-50','bp-1-41-51','bp-1-41-52','bp-1-41-53','bp-1-41-54','bp-1-41-55','bp-1-41-56','bp-1-41-57'],
label:'Bhaviṣya Purāṇa 1.41.49–57',
argument:'The reductio asks whether each individual bodily component possesses brāhmaṇahood or whether it appears only in the aggregate. It denies both. The body is a perishable compound of the same material elements found in other humans; searching the body does not reveal brāhmaṇya. If mere bodily constitution produced it, the consequence would overextend to bodies the theory itself calls non-brāhmaṇa. The conclusion is explicit: brāhmaṇahood is neither in the body nor identical with the body.'
},
{
title:'Transmigration makes a single eternal jāti impossible',
context:'Chapter 42 begins from saṃsāra itself. A living being moves, under karma, through innumerable kinds of embodiment—higher, lower and intermediate. The text asks what sense it makes to be proud of one present birth-class within that process.',
refs:['bp-1-42-2','bp-1-42-3','bp-1-42-4','bp-1-42-5','bp-1-42-6','bp-1-42-7'],
label:'Bhaviṣya Purāṇa 1.42.2–7',
argument:'The decisive question is: “whose jāti is eternally one?” (kasyaikā śāśvatī jātiḥ). This is another direct rejection of jāti as an eternal essence of the person. The present designation is contingent within karmic transmigration, not a permanent metaphysical identity.'
},
{
title:'Saṃskāra without knowledge and conduct does not establish brāhmaṇahood',
context:'The text grants the strongest ritual case: a person may possess the full series of saṃskāras from conception onward. It then asks whether this is sufficient when knowledge, discipline, self-control and good conduct are absent.',
refs:['bp-1-42-8','bp-1-42-9','bp-1-42-10','bp-1-42-11','bp-1-42-12','bp-1-42-13','bp-1-42-14','bp-1-42-15','bp-1-42-16','bp-1-42-17','bp-1-42-18'],
label:'Bhaviṣya Purāṇa 1.42.8–18',
argument:'The answer is no. A saṃskṛta person of bad conduct can fall, while the text strikingly says that one without the ritual saṃskāras but possessed of good conduct may be a foremost brāhmaṇa. Whatever precise ritual force one assigns to saṃskāra, this passage makes it insufficient as an unconditional hereditary essence.'
},
{
title:'The text’s own counterexamples: revered brāhmaṇas from unexpected births',
context:'The argument is then illustrated through traditional birth-stories of revered sages. These are the Purāṇa’s own exempla, not a modern historical claim about the biographies of those figures.',
refs:['bp-1-42-20','bp-1-42-21','bp-1-42-22','bp-1-42-23','bp-1-42-24','bp-1-42-25','bp-1-42-26','bp-1-42-27','bp-1-42-28','bp-1-42-29','bp-1-42-30','bp-1-42-31','bp-1-42-32'],
label:'Bhaviṣya Purāṇa 1.42.20–32',
argument:'The examples function as counterinstances to a universal rule that brāhmaṇa-status necessarily follows only from brāhmaṇa parentage. The passage repeatedly attributes attained brāhmaṇahood to tapas and excellence, and ends by treating the relevant designation as conventional because even ritually formed bodies can lose it through grave misconduct.'
},
{
title:'Reductio V — the reproductive test: human varṇas do not behave like separate biological jātis',
context:'Chapter 43 returns to the horse-and-cow comparison in biological form. Distinct animal species reproduce within their own kind and do not generate ordinary offspring across those species. The text asks whether brāhmaṇa and śūdra display any analogous reproductive boundary.',
refs:['bp-1-43-14','bp-1-43-15','bp-1-43-16','bp-1-43-37','bp-1-43-38','bp-1-43-39','bp-1-43-40','bp-1-43-41','bp-1-43-42','bp-1-43-43','bp-1-43-44','bp-1-43-45'],
label:'Bhaviṣya Purāṇa 1.43.14–16, 37–45',
argument:'The reductio is biological: if the human varṇas were different natural jātis like cow, horse, camel and elephant, ordinary sexual generation across them should fail in the same way. It does not. The text therefore treats their common reproductive humanity as evidence against a species-like jāti difference between dvija and śūdra.'
},
{
title:'The human division is called a convention, not a natural species boundary',
context:'After the reproductive argument, the chapter states its conclusion directly and connects it again with the possibility of falling from brāhmaṇa-status.',
refs:['bp-1-43-49','bp-1-43-50','bp-1-43-52'],
label:'Bhaviṣya Purāṇa 1.43.49–50, 52',
argument:'The text says that this human division is produced by the force of convention (saṅketa-bala) and calls the contrary jāti-construction a false or misplaced construction. This should be read with the preceding arguments: “conventional” does not mean that all social or ritual distinctions disappear; it means they are not an immutable natural essence carried solely by birth.'
},
{
title:'Positive account — varṇa is described through qualities, work and conduct',
context:'Chapter 44 supplies the constructive side after the preceding negations. It describes brāhmaṇas through self-control, truth, knowledge, compassion and good conduct, then assigns the varṇas characteristic work arising from qualities.',
refs:['bp-1-44-24','bp-1-44-25','bp-1-44-26','bp-1-44-27','bp-1-44-28','bp-1-44-29','bp-1-44-30','bp-1-44-31','bp-1-44-33'],
label:'Bhaviṣya Purāṇa 1.44.24–31, 33',
argument:'This is why the preceding chapters should not be flattened into “varna does not exist.” Their target is jāti-vāda understood as an immutable, species-like hereditary essence. The positive criterion is repeatedly expressed through guṇa, karma, lakṣaṇa, śīla and ācāra: the text even says a śūdra endowed with śīla may be superior to a brāhmaṇa, while a brāhmaṇa devoid of conduct may be lower than a śūdra.'
}
];

const verseData=(doc,id)=>{const h=doc.getElementById(id);if(!h)throw Error(`Missing ${id}`);const sec=h.closest('section');if(!sec)throw Error(`Missing section for ${id}`);const sa=sec.querySelector('[lang^="sa"]');const tr=sec.querySelector('p');if(!sa||!tr)throw Error(`Incomplete ${id}`);const m=id.match(/^bp-(\d+)-(\d+)-(\d+)$/);return{ref:m?`${m[1]}.${m[2]}.${m[3]}`:id,sa:sa.innerHTML,tr:tr.innerHTML}};
const passage=(doc,item)=>{const data=item.refs.map(id=>verseData(doc,id));const ref=document.createElement('p');ref.className='reference';ref.textContent=item.label;const details=document.createElement('details');details.className='sanskrit-reveal';const summary=document.createElement('summary');summary.textContent='Show Sanskrit';const sa=document.createElement('div');sa.lang='sa-Deva';sa.innerHTML=data.map(v=>v.sa).join('<br><br>');details.append(summary,sa);const tr=document.createElement('p');tr.className='translation';tr.innerHTML=data.map(v=>`<strong>${v.ref}</strong> ${v.tr}`).join('<br><br>');return[ref,details,tr]};
const argumentSection=(doc,item)=>{const section=document.createElement('section');section.className='remark-section plain-remark argument-section';const h=document.createElement('h4');h.className='remark-label';h.textContent=item.title;const context=document.createElement('p');context.innerHTML=item.context;const logic=document.createElement('p');logic.className='argument-chain';logic.innerHTML=item.argument;section.append(h,context,...passage(doc,item),logic);return section};
const mountJatiArguments=async()=>{const oldHeading=root.querySelector('#jati-distinctions');const heading=oldHeading?oldHeading.cloneNode(true):Object.assign(document.createElement('h3'),{id:'jati-distinctions',textContent:'Rejection of Jāti-distinctions in every sense'});const intro=document.createElement('div');intro.innerHTML=`<p>This section isolates the <strong>actual anti-jāti argument</strong> in the Bhaviṣya Purāṇa rather than reproducing the surrounding ritual material. Connected verses are kept together whenever they form a single objection, reductio, dilemma, example, or conclusion.</p><p class="argument-chain">The target of these passages is the claim that brāhmaṇa, kṣatriya, vaiśya and śūdra are immutable natural jātis fixed solely by birth. The text tests that thesis successively in perception, the jīva, bodily form, lineage, saṃskāra, Vedic learning, external marks, spiritual power, causation, bodily parts, transmigration and reproduction, before giving a positive account in terms of qualities, work and conduct.</p><p class="reference">Methodological note</p><p class="translation">The Sanskrit and English translations below are taken from the complete Chapters 39–44 source article already published on Viveka Dṛṣṭi. The prose headed by each argument and the logical summaries are contextual explanation, not additional Purāṇa verses.</p>`;const loading=document.createElement('p');loading.className='reference';loading.textContent='Loading selected Bhaviṣya Purāṇa passages…';root.replaceChildren(heading,intro,loading);
try{const r=await fetch('/vivekadrishti/articles/bhavisya-purana-addresses-varna-system/?v=20260914-arguments',{cache:'no-store'});if(!r.ok)throw Error('Bhaviṣya Purāṇa source article');const doc=new DOMParser().parseFromString(await r.text(),'text/html');const frag=document.createDocumentFragment();jatiArguments.forEach(item=>frag.appendChild(argumentSection(doc,item)));const close=document.createElement('section');close.className='remark-section plain-remark';close.innerHTML='<h4 class="remark-label">Cumulative result</h4><p>The sequence does not rest on a single proof-text. It attacks hereditary jāti-essentialism from several independent directions: there is no perceptible natural-kind mark, no eternal locus in the jīva, no exclusive bodily form, no exclusive ritual or external sign, no stable location in the body or its parts, no reproductive species-barrier, and the status is expressly said to be gainable and losable.</p><p class="argument-chain">The cumulative inference is therefore stronger than “good conduct is admirable.” Birth alone cannot be the universal necessary-and-sufficient ground of varṇa if the alleged distinction fails the text’s own tests of pramāṇa and yukti and if brāhmaṇya is repeatedly described as mutable, conventional, and dependent upon qualifying conduct, action and capacities.</p>';frag.appendChild(close);loading.replaceWith(frag);bindSanskrit(root)}catch(e){loading.className='load-error';loading.textContent='Could not load the selected Bhaviṣya Purāṇa passages. Refresh the page.';console.error(e)}};

(async()=>{try{const r=await fetch(`${base}${current.file}?v=paged5`,{cache:'no-store'});if(!r.ok)throw Error(current.file);const t=document.createElement('template');t.innerHTML=await r.text();root.replaceChildren(...extract(t.content,current));bindSanskrit(root);if(current.id==='jati-distinctions')await mountJatiArguments()}catch(e){root.innerHTML='<p class="load-error">Could not load this section. Refresh the page.</p>';console.error(e)}})();
})();