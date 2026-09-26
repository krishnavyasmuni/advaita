/* Viṣṇu paper: preserve the original HTML as a no-script fallback, but display
   its complete text using the established Varṇa-vicāra paged-reader template. */
(()=>{
'use strict';
const path=location.pathname;
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(path))return;
const source=document.getElementById('preface')?.parentElement;
if(!source){console.warn('Viṣṇu reader: original article not found; leaving fallback intact.');return;}
const base='/advaita/articles/a-vaishnava-lens-on-vishnu-as-the-supreme-deity/';
const imageBase='/advaita/assets/images/source-documents/';
const label=n=>(n?.textContent||'').replace(/\s+/g,' ').trim().replace(/^\d+(?:\.\d+)*\.?\s*/, '');
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'section';
const existingIds=new Set();
const unique=s=>{let id=s,i=2;while(existingIds.has(id))id=`${s}-${i++}`;existingIds.add(id);return id};
const makeFigure=(name,alt)=>{const f=document.createElement('figure');f.className='source-figure';const im=document.createElement('img');im.src=imageBase+name;im.alt=alt;im.loading='lazy';f.append(im);return f};
const sanitize=node=>{
  const c=node.cloneNode(true);
  const nodes=[c,...c.querySelectorAll('*')];
  nodes.forEach(n=>{
    const style=n.getAttribute('style')||'';
    if(n.matches('p')&&(/color\s*:\s*#a92727|color\s*:\s*#65516f/i.test(style)||/^[“\"]/.test(n.textContent.trim())))n.classList.add('translation');
    if(n.matches('details')&&/show sanskrit|hide sanskrit/i.test(n.querySelector('summary')?.textContent||''))n.classList.add('sanskrit-reveal');
    n.removeAttribute('style');
    if(n.hasAttribute('width'))n.removeAttribute('width');
  });
  return c;
};
const sourceNodes=[...source.children],start=sourceNodes.findIndex(n=>n.id==='preface');
if(start<0){console.warn('Viṣṇu reader: preface heading missing; leaving fallback intact.');return;}
const pages=[],headings=new Map();let parent='',current=null,loose=[],parentAnchor=null;
const push=(p)=>{if(!p)return;const significant=p.nodes.some(n=>n.matches?.('p,table,ol,ul,blockquote,details,figure,img,h4,h5')||n.textContent?.trim());if(significant)pages.push(p)};
const loosePage=()=>{if(!loose.length)return;const id=unique(slug(parent));if(parentAnchor)headings.set(parentAnchor,id);push({id,title:parent,parent,nodes:loose});loose=[]};
for(const n of sourceNodes.slice(start)){
 if(n.matches('h2')){
   push(current);current=null;loosePage();parent=label(n);parentAnchor=n.id||null;loose=[];
 }else if(n.matches('h3')){
   push(current);
   const title=label(n),id=unique(n.id||slug(title));
   if(n.id)headings.set(n.id,id);
   if(parentAnchor){headings.set(parentAnchor,id);parentAnchor=null}
   current={id,title,parent:parent||'Article',nodes:loose};loose=[];
 }else if(current){current.nodes.push(n)}else{loose.push(n)}
}
push(current);loosePage();
if(!pages.length){console.warn('Viṣṇu reader: no sections; leaving fallback intact.');return;}
// The web transcription omitted the three paragraphs of the conclusion
// on page 68 of Caligayla's source PDF. Restore them as a separate section.
const conclusion=document.createElement('div');
conclusion.innerHTML=`
<p>Thus, using close to fifty scriptural citations across Śruti, Smṛti &amp; Purāṇas, the Supremacy of Viṣṇu, his primary status as Brahman, as creator of Śiva, Brahmā and everything else and his superiority over them, has been done. Also the supremacy of his worship, which is the only way to Mokṣa, over that of other deities, has been established. The status of Śiva as having Viṣṇu as his antaryāmin, being his devotee and being neither fully same nor fully different from him as curd to milk, has been explained. In line with the stated methodology of <em>Samanvaya</em>, no Pramāṇa has been ignored or disregarded, and all objections have been addressed. Aside from the scriptural Pramāṇa, the Ācāryas, entirely non-Vaiṣṇava ones such as Sāyaṇa, Śaṅkara, Madhusūdana Sarasvatī, Paṇḍitācārya etc have been cited as supporting evidence wherever required.</p>
<p>Though I have intentionally avoided citing Vaiṣṇava Ācāryas in the document, they deserve a mention here. The final Padma Purāṇa verse as seen invokes not just the Scriptures, but the consensus of the Ācāryas, as evidence for Viṣṇu’s supremacy. And indeed, the majority Ācāryas throughout history have been Vaiṣṇava, belonging to sects such as Śrī, Mādhva, Gauḍīya, Puṣṭimārgī, Rāmānandī, Vārakarī, etc.</p>
<p>I would also restate the disclaimer at the very beginning, that this work is not meant as an attack on the Smārtas or Śaivas or any other sect, but only to present the Vaiṣṇava stance from a scriptural perspective.</p>
<p class="source-note"><small>Source PDF, p. 68, note 6: Except Rāmānuja &amp; Govindarāja, cited alongside non-Vaiṣṇava alternatives.</small></p>`;
const endOfSummary=pages.findIndex(p=>/bibliography/i.test(p.parent));
const insertAt=endOfSummary>=0?endOfSummary:pages.length;
pages.splice(insertAt,0,{id:unique('conclusion-from-source'),title:'Conclusion',parent:'Summary and conclusion',nodes:[...conclusion.children]});
// Reuse the source PDF's opening invocation rather than the old bulky contents.
const opening=sourceNodes.slice(0,start).filter(n=>n.matches('p,details,figure'));
const first=pages[0];
if(first){first.nodes.unshift(...opening);first.nodes.unshift(makeFigure('vishnu-cover-art.webp','Line illustration of Viṣṇu and Lakṣmī reproduced from the paper’s cover.'))}
const firstTable=pages.flatMap(p=>p.nodes).find(n=>n.matches?.('table'));
if(firstTable){const idx=pages.findIndex(p=>p.nodes.includes(firstTable));const at=pages[idx].nodes.indexOf(firstTable);pages[idx].nodes.splice(at+1,0,makeFigure('vishnu-veda-diagram.webp','Vedic divisions diagram reproduced from page 5 of the source PDF.'))}
pages.at(-1).nodes.push(makeFigure('vishnu-closing-emblem.webp','Closing emblem reproduced from the source paper.'));
const q=(s,cls)=>{const e=document.createElement(s);if(cls)e.className=cls;return e};
const sitebar=q('header','sitebar'),home=q('a');home.href='/advaita/';home.textContent='Viveka Dṛṣṭi';sitebar.append(home);
const main=q('main','page'),header=q('header','article-head'),h1=q('h1');h1.textContent='A Vaiṣṇava Lens on Viṣṇu as the Supreme Deity';header.append(h1);
const grid=q('div','reader-grid'),aside=q('aside','side-toc'),sideTitle=q('h2','side-toc-title');sideTitle.textContent='Contents';aside.setAttribute('aria-label','Table of contents');
const content=q('article','article'),mobile=q('details','mobile-toc'),sum=q('summary');sum.textContent='Contents';const toc=q('nav','toc'),tocMobile=q('nav','toc');toc.setAttribute('aria-label','Sections');tocMobile.setAttribute('aria-label','Mobile sections');
let group=null,lastParent='';
const href=id=>id===pages[0].id?base:`${base}?section=${encodeURIComponent(id)}`;
for(const page of pages){
 if(page.parent!==lastParent){lastParent=page.parent;group=q('div','toc-group');const title=q('div','toc-parent');title.textContent=page.parent;const children=q('div','toc-children');group.append(title,children);toc.append(group)}
 const a=q('a');a.href=href(page.id);a.dataset.section=page.id;a.textContent=page.title;group.lastChild.append(a);
}
tocMobile.innerHTML=toc.innerHTML;aside.append(sideTitle,toc);mobile.append(sum,tocMobile);
const context=q('div','page-context'),ctParent=q('strong'),ctCount=q('span');ctParent.id='section-parent';ctCount.id='section-count';context.append(ctParent,ctCount);
const reader=q('div');reader.id='source-content';const nav=q('nav','page-nav'),prev=q('a','prev'),next=q('a','next');prev.id='page-prev';next.id='page-next';nav.setAttribute('aria-label','Document sections');nav.append(prev,next);content.append(mobile,context,reader,nav);grid.append(aside,content);main.append(header,grid);
// Only replace the original DOM after every section is safely prepared.
document.body.replaceChildren(sitebar,main);document.body.className='vishnu-vicara-page';
document.querySelector('link[href="/advaita/assets/css/site.css"]')?.remove();
const byId=new Map(pages.map((page,i)=>[page.id,i]));
const requested=()=>new URLSearchParams(location.search).get('section')||location.hash.slice(1)||pages[0].id;
const pager=(anchor,page,direction)=>{if(!page){anchor.removeAttribute('href');anchor.classList.add('disabled');anchor.innerHTML=`<small>${direction}</small>`;return}anchor.classList.remove('disabled');anchor.href=href(page.id);anchor.replaceChildren();const small=q('small');small.textContent=direction;anchor.append(small,document.createTextNode(page.title))};
const show=(id,replace=false)=>{
 const i=byId.get(id)??0,page=pages[i];
 reader.replaceChildren();const heading=q('h3');heading.id=page.id;heading.textContent=page.title;reader.append(heading);
 for(const node of page.nodes)reader.append(sanitize(node));
 reader.querySelectorAll('details.sanskrit-reveal').forEach(d=>{const s=d.querySelector(':scope>summary');if(!s)return;const sync=()=>s.textContent=d.open?'Hide Sanskrit':'Show Sanskrit';d.addEventListener('toggle',sync);sync()});
 reader.querySelectorAll('a[href^="#"]').forEach(a=>{const target=a.getAttribute('href').slice(1),resolved=headings.get(target)||target;if(byId.has(resolved))a.href=href(resolved)});
 ctParent.textContent=page.parent;ctCount.textContent=`Section ${i+1} of ${pages.length}`;
 pager(prev,pages[i-1],'Previous');pager(next,pages[i+1],'Next');
 document.querySelectorAll('.toc a[data-section]').forEach(a=>{const on=a.dataset.section===page.id;a.classList.toggle('is-active',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
 document.title=`${page.title} — A Vaiṣṇava Lens on Viṣṇu — Viveka Dṛṣṭi`;
 if(replace||id!==page.id||location.hash){history.replaceState(null,'',href(page.id))}
};
show(requested(),true);
// Ordinary URLs preserve browser navigation and opening sections in new tabs.
})();