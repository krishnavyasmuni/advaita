(()=>{
'use strict';
const base='/vivekadrishti/articles/a-vaishnava-lens-on-vishnu-as-the-supreme-deity/';
const pages=[
{id:'introduction',parent:'1. Preface',title:'Introduction',stop:'methodology',pdf:'2–3'},
{id:'methodology',parent:'1. Preface',title:'Methodology',stop:'vedas',pdf:'4–8'},
{id:'karma-kanda',parent:'2. Vedas',title:'Karma-kāṇḍa',stop:'jnana-kanda',pdf:'9–11'},
{id:'jnana-kanda',parent:'2. Vedas',title:'Jñāna-kāṇḍa',stop:'smrtis',pdf:'12–17'},
{id:'dharmasastras-vedangas',parent:'3. Smṛtis',title:'Dharmaśāstras and Vedāṅgas',stop:'ramayana',pdf:'18–19'},
{id:'ramayana',parent:'3. Smṛtis',title:'Rāmāyaṇa',stop:'mahabharata',pdf:'20–23'},
{id:'mahabharata',parent:'3. Smṛtis',title:'Mahābhārata',stop:'puranas',pdf:'24–33'},
{id:'purana-meta-analysis',parent:'4. Purāṇas',title:'Meta-analysis of the Purāṇas',stop:'purana-statements',pdf:'34–40'},
{id:'purana-statements',parent:'4. Purāṇas',title:'Statements of the Purāṇas',stop:'objections',pdf:'40–49'},
{id:'objections',parent:'5. Objections',title:'Objections',stop:'summary-conclusion',pdf:'50–62'},
{id:'summary-conclusion',parent:'6. Summary and conclusion',title:'Summary and conclusion',stop:'bibliography',pdf:'63–68'}
];
const byId=new Map(pages.map(p=>[p.id,p]));
const aliases=new Map([['preface','introduction'],['vedas','karma-kanda'],['smrtis','dharmasastras-vedangas'],['puranas','purana-meta-analysis']]);
const url=new URL(location.href),raw=url.searchParams.get('section')||url.hash.slice(1)||'introduction';
const current=byId.get(aliases.get(raw)||raw)||pages[0],index=pages.indexOf(current);
if(url.hash||url.searchParams.get('section')!==current.id){url.hash='';if(index===0)url.searchParams.delete('section');else url.searchParams.set('section',current.id);history.replaceState(null,'',url.pathname+url.search);}
const href=p=>p?(p===pages[0]?base:base+'?section='+encodeURIComponent(p.id)):'';
function populateToc(id){
 const nav=document.getElementById(id);if(!nav)return;
 let group=null,parent='';
 pages.forEach(p=>{
  if(p.parent!==parent){parent=p.parent;group=document.createElement('div');group.className='toc-group';const label=document.createElement('div');label.className='toc-parent';label.textContent=parent;group.appendChild(label);const children=document.createElement('div');children.className='toc-children';group.appendChild(children);nav.appendChild(group);}
  const a=document.createElement('a');a.href=href(p);a.dataset.section=p.id;a.textContent=p.title;if(p===current){a.className='is-active';a.setAttribute('aria-current','page');}group.lastElementChild.appendChild(a);
 });
}
populateToc('desktop-toc');populateToc('mobile-toc');
document.getElementById('section-parent').textContent=current.parent+' · PDF pp. '+current.pdf;
document.getElementById('section-count').textContent='Section '+(index+1)+' of '+pages.length;
document.title=current.title+' — Hari-paratva-vimarśa — Viveka Dṛṣṭi';
function setPager(id,p,label){const a=document.getElementById(id);if(!p){a.classList.add('disabled');a.removeAttribute('href');a.innerHTML='<small>'+label+'</small>';return;}a.href=href(p);a.innerHTML='<small>'+label+'</small>'+p.title;}
setPager('page-prev',pages[index-1],'Previous');setPager('page-next',pages[index+1],'Next');
const content=document.getElementById('source-content');
function normalise(node){
 if(node.nodeType!==1)return node;
 const all=[node,...node.querySelectorAll('*')];
 all.forEach(el=>{
   if(el.matches('script,iframe,object,embed,link,style')){el.remove();return;}
   if(el.matches('p')&&(/^\s*[“"]/.test(el.textContent)||/a92727|65516f/i.test(el.getAttribute('style')||'')))el.classList.add('translation');
   if(el.matches('details'))el.classList.add('sanskrit-reveal');
   if(el.matches('[lang="sa-Deva"]')||el.matches('p')&&/[\u0900-\u097f]/.test(el.textContent)&&el.closest('details'))el.setAttribute('lang','sa-Deva');
   [...el.attributes].forEach(a=>{if(a.name==='style'||/^on/i.test(a.name))el.removeAttribute(a.name);});
   if(el.matches('a[href]')){const h=el.getAttribute('href');if(/^javascript:/i.test(h))el.removeAttribute('href');}
 });
 node.querySelectorAll('table').forEach(table=>{const wrap=document.createElement('div');wrap.className='table-scroll';table.before(wrap);wrap.appendChild(table);});
 node.querySelectorAll('details.sanskrit-reveal').forEach(d=>{const summary=d.querySelector('summary');if(!summary)return;const sync=()=>{summary.textContent=d.open?'Hide Sanskrit':'Show Sanskrit';};d.addEventListener('toggle',sync);sync();});
 return node;
}
function addOriginalConclusion(){
 const heading=document.createElement('h3');heading.textContent='Conclusion';heading.id='conclusion';content.appendChild(heading);
 const paragraphs=[
 'Thus, using close to fifty scriptural citations across Śruti, Smṛti & Purāṇas, the Supremacy of Viṣṇu, his primary status as Brahman, as creator of Śiva, Brahmā and everything else, and his superiority over them, has been done. Also the supremacy of his worship, which is the only way to Mokṣa, over that of other deities, has been established. The status of Śiva as having Viṣṇu as his antaryāmin, being his devotee and being neither fully same nor fully different from him as curd to milk, has been explained. In line with the stated methodology of Samanvaya, no Pramāṇa has been ignored or disregarded, and all objections have been addressed. Aside from the scriptural Pramāṇa, the Ācāryas, entirely non-Vaiṣṇava ones such as Sāyaṇa, Śaṅkara, Madhusūdana Sarasvatī, Paṇḍitācārya etc have been cited as supporting evidence wherever required.',
 'Though I have intentionally avoided citing Vaiṣṇava Ācāryas in the document, they deserve a mention here. The final Padma Purāṇa verse as seen invokes not just the Scriptures, but the consensus of the Ācāryas, as evidence for Viṣṇu’s supremacy. And indeed, the majority Ācāryas throughout history have been Vaiṣṇava, belonging to sects such as Śrī, Mādhva, Gauḍīya, Puṣṭimārgī, Rāmānandī, Vārakarī, etc.',
 'I would also restate the disclaimer at the very beginning, that this work is not meant as an attack on the Smārtas or Śaivas or any other sect, but only to present the Vaiṣṇava stance from a scriptural perspective.'
 ];
 paragraphs.forEach(t=>{const p=document.createElement('p');p.textContent=t;content.appendChild(p);});
 const note=document.createElement('p');note.className='source-footnote';note.textContent='6. Except Rāmānuja & Govindarāja, cited alongside non-Vaiṣṇava alternatives.';content.appendChild(note);
}
fetch(base+'source.html?v=20260918-1').then(r=>{if(!r.ok)throw Error('HTTP '+r.status);return r.text();}).then(html=>{
 const doc=new DOMParser().parseFromString(html,'text/html');
 const start=doc.getElementById(current.id),end=doc.getElementById(current.stop);
 if(!start||!start.closest('.empyrean-final-article'))throw Error('The section cannot be located in the original article.');
 const parent=start.parentElement;
 if(end&&end.parentElement!==parent)throw Error('Unexpected source document structure.');
 const output=document.createDocumentFragment();
 if(index===0){const preface=doc.getElementById('preface');if(preface&&preface.parentElement===parent){let n=parent.firstElementChild;while(n&&n!==preface){if(n.matches('p,details')&&!n.closest('nav'))output.appendChild(normalise(n.cloneNode(true)));n=n.nextElementSibling;}}}
 let n=start;
 while(n&&n!==end){const next=n.nextElementSibling;if(!n.matches('script,style')&&!(/^Editorial note:/i.test(n.textContent.trim())&&n.matches('p')))output.appendChild(normalise(n.cloneNode(true)));n=next;}
 if(!output.childNodes.length)throw Error('This section is empty.');
 content.replaceChildren(output);
 if(current.id==='summary-conclusion'&&!content.textContent.includes('Thus, using close to fifty scriptural citations'))addOriginalConclusion();
 // The existing online transcription is preserved verbatim above; the source PDF's final conclusion is restored separately.
}).catch(error=>{console.error('Article failed to load:',error);content.replaceChildren();const p=document.createElement('p');p.className='load-error';p.textContent='The article could not be loaded. ';const a=document.createElement('a');a.href=base+'source.html';a.textContent='Read the preserved full-text edition';p.appendChild(a);content.appendChild(p);});
})();