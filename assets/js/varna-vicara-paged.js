(()=>{
const base='/vivekadrishti/articles/varna-vicara/';
const pages=[
{id:'introduction',file:'preface.html',parent:'Preface',title:'Introduction',stop:'remark-1'},
{id:'remark-1',file:'preface.html',parent:'Preface',title:'Remark on Ācārya Consensus',kind:'remark'},
{id:'remark-2',file:'preface.html',parent:'Preface',title:'Remark on Paramparā and Circular Reasoning',kind:'remark'},
{id:'purvapaksha-position',file:'purvapaksha.html',parent:'Pūrvapakṣa',title:'Position and pramāṇas',stop:'remark-3'},
{id:'remark-3',file:'purvapaksha.html',parent:'Pūrvapakṣa',title:'Remark on Birth-Based Brāhmaṇa Privileges',kind:'remark'},
{id:'rejection-universal',file:'rejection.html',parent:'Rejection of jāti',title:'Universal prerequisite',stop:'vishvamitra'},
{id:'vishvamitra',file:'rejection.html',parent:'Rejection of jāti',title:'Viśvāmitra, mlecchas and śūdras',stop:'remark-4'},
{id:'remark-4',file:'rejection.html',parent:'Rejection of jāti',title:'Remark on the Fast to Become a Brāhmaṇa',stop:'jati-distinctions',kind:'remark-heading'},
{id:'jati-distinctions',file:'rejection.html',parent:'Rejection of jāti',title:'Rejection of jāti-distinctions'}
];
const byId=new Map(pages.map(x=>[x.id,x]));
const aliases=new Map([['preface','introduction'],['purvapaksha','purvapaksha-position'],['rejection','rejection-universal']]);
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
return section};
const extract=(frag,page)=>{const start=frag.querySelector(`#${CSS.escape(page.id)}`);if(!start)throw Error(`Missing ${page.id}`);if(page.kind==='remark'||page.kind==='remark-heading')return[remarkSection(start,page)];const out=[start.cloneNode(true)];let n=start.nextSibling;while(n){if(n.nodeType===1&&page.stop&&n.id===page.stop)break;out.push(n.cloneNode(true));n=n.nextSibling}return out};
(async()=>{try{const r=await fetch(`${base}${current.file}?v=paged2`,{cache:'no-store'});if(!r.ok)throw Error(current.file);const t=document.createElement('template');t.innerHTML=await r.text();root.replaceChildren(...extract(t.content,current));bindSanskrit(root)}catch(e){root.innerHTML='<p class="load-error">Could not load this section. Refresh the page.</p>';console.error(e)}})();
})();