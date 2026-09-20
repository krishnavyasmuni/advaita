/* A shared, accessible paged reader for the four essays in Other.
   The Varṇa-vicāra reader is deliberately not modified. */
(()=>{
'use strict';
const config=document.getElementById('article-config');
const source=document.getElementById('source-document');
if(!config||!source)return;
const articleTitle=config.dataset.title||'Article';
const base=config.dataset.base||location.pathname.replace(/\/?$/,'/');
const sourceRoot=source.querySelector('.article-body')||source;
const text=node=>(node?.textContent||'').replace(/\s+/g,' ').trim();
const stripNumber=value=>(value||'').replace(/^\s*\d+(?:\.\d+)*[.)]?\s*/,'').trim();
const slug=value=>stripNumber(value).toLowerCase().normalize('NFKD')
  .replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'section';

// The source papers have nested WordPress-era wrappers. Find their actual
// continuous article contents rather than treating the wrappers as chapters.
const firstRealH2=[...sourceRoot.querySelectorAll('h2')].find(n=>!/^contents$/i.test(text(n)));
let contentRoot=sourceRoot;
if(firstRealH2){
  let cursor=firstRealH2.parentElement;
  while(cursor&&cursor!==sourceRoot){
    if([...cursor.children].filter(n=>n.matches('h2,h3')).length>=2)contentRoot=cursor;
    cursor=cursor.parentElement;
  }
}
const nodes=[...contentRoot.children];
let chapterHeads=nodes.filter(n=>n.matches('h2')&&!/^contents$/i.test(text(n)));
if(!chapterHeads.length)chapterHeads=nodes.filter(n=>n.matches('h3'));
if(!chapterHeads.length){source.hidden=false;return;}

const used=new Set();
function uniqueId(node){
  let value=(node.id||slug(text(node))).replace(/^section-+/, '')||'section';
  if(used.has(value)){let number=2;while(used.has(value+'-'+number))number++;value+='-'+number;}
  used.add(value);return value;
}
const groups=[];
for(let i=0;i<chapterHeads.length;i++){
  const head=chapterHeads[i],start=nodes.indexOf(head);
  const end=i+1<chapterHeads.length?nodes.indexOf(chapterHeads[i+1]):nodes.length;
  const contents=nodes.slice(start+1,end);
  const subheads=contents.filter(n=>n.matches('h3'));
  const entries=[];
  if(subheads.length){
    for(let j=0;j<subheads.length;j++){
      const sub=subheads[j],begin=contents.indexOf(sub);
      const finish=j+1<subheads.length?contents.indexOf(subheads[j+1]):contents.length;
      entries.push({heading:sub,nodes:contents.slice(begin+1,finish),prefix:j===0?contents.slice(0,begin):[]});
    }
  }else entries.push({heading:head,nodes:contents,prefix:[]});
  groups.push({heading:head,title:stripNumber(text(head)),entries});
}
const contentsAt=nodes.findIndex(n=>n.matches('h2')&&/^contents$/i.test(text(n)));
const opening=nodes.slice(contentsAt>=0?contentsAt+1:0,nodes.indexOf(chapterHeads[0]))
  .filter(n=>!n.matches('h1,h2,ol,ul'));
const pages=[];
const entryPage=new WeakMap();
const sourceToPage=new Map();
function registerId(id,page){if(id&&!sourceToPage.has(id))sourceToPage.set(id,page);}
for(const group of groups){
  for(const entry of group.entries){
    const page={id:uniqueId(entry.heading),parent:group.title,
      title:stripNumber(text(entry.heading)),sourceId:entry.heading.id||'',
      nodes:[...(pages.length===0?opening:[]),...entry.prefix,...entry.nodes]};
    pages.push(page);entryPage.set(entry,page);
    registerId(entry.heading.id,page);
    for(const node of page.nodes){
      registerId(node.id,page);
      node.querySelectorAll?.('[id]').forEach(n=>registerId(n.id,page));
    }
  }
  // Chapter-heading anchors refer to the first readable subsection.
  registerId(group.heading.id,entryPage.get(group.entries[0]));
}
if(!pages.length){source.hidden=false;return;}
const byId=new Map(pages.map((page,index)=>[page.id,{page,index}]));
const el=(tag,cls,content)=>{
  const node=document.createElement(tag);if(cls)node.className=cls;
  if(content!==undefined)node.textContent=content;return node;
};
const bar=el('header','sitebar'),brand=el('a',null,'Viveka Dṛṣṭi');
brand.href='/vivekadrishti/';bar.append(brand);
const main=el('main','page'),head=el('header','article-head');head.append(el('h1',null,articleTitle));
const grid=el('div','reader-grid'),side=el('aside','side-toc'),sideNav=el('nav','toc');
side.setAttribute('aria-label','Table of contents');side.append(el('h2','side-toc-title','Contents'),sideNav);
const article=el('article','article'),mobile=el('details','mobile-toc'),mobileNav=el('nav','toc');
mobile.append(el('summary',null,'Contents'),mobileNav);
const context=el('div','page-context'),parent=el('strong'),count=el('span');
parent.id='section-parent';count.id='section-count';context.append(parent,count);
const reader=el('div','document-content');reader.id='source-content';
const pager=el('nav','page-nav');pager.setAttribute('aria-label','Document sections');
const prev=el('a','prev'),next=el('a','next');prev.id='page-prev';next.id='page-next';
pager.append(prev,next);article.append(mobile,context,reader,pager);grid.append(side,article);main.append(head,grid);
const href=page=>page&&(page===pages[0]?base:base+'?section='+encodeURIComponent(page.id));
function makeToc(nav){
  for(const group of groups){
    const wrap=el('div','toc-group'),title=el('div','toc-parent',group.title),children=el('div','toc-children');
    for(const entry of group.entries){
      const page=entryPage.get(entry);if(!page)continue;
      const link=el('a',null,page.title);link.dataset.section=page.id;
      link.href=href(page);children.append(link);
    }
    wrap.append(title,children);nav.append(wrap);
  }
}
makeToc(sideNav);makeToc(mobileNav);

// Remove legacy inline layout (which conflicts with the reader), while
// retaining the meaning of quotations, source citations, Sanskrit and notes.
function clean(node,currentPage){
  const copy=node.cloneNode(true);
  for(const n of [copy,...copy.querySelectorAll('*')]){
    if(!(n instanceof Element))continue;
    const style=n.getAttribute('style')||'';
    const words=n.matches('p')?text(n):'';
    const isSanskrit=(n.getAttribute('lang')||'').toLowerCase().startsWith('sa');
    if(n.matches('details')&&/\b(?:show|hide)\s+sanskrit\b/i.test(text(n.querySelector('summary'))))
      n.classList.add('sanskrit-reveal');
    if(n.matches('p')&&!isSanskrit){
      if(n.classList.contains('scripture-source'))n.classList.add('source-citation');
      else if(n.classList.contains('scripture-translation')||n.classList.contains('translation')||
        /color\s*:\s*#(?:a92727|65516f|7b3d35)/i.test(style)||/^[“"‘]/.test(words))
        n.classList.add('translation');
    }
    if(n.matches('p')&&isSanskrit&&!n.closest('details.sanskrit-reveal'))n.classList.add('sanskrit-text');
    if(n.matches('div')&&/grid-template-columns\s*:\s*44px/i.test(style))n.classList.add('reference-entry');
    if(n.matches('div')&&/border-left\s*:\s*(?:\d+px|\.\d+em)/i.test(style))n.classList.add('aside-note');
    n.removeAttribute('style');n.removeAttribute('width');n.removeAttribute('height');n.removeAttribute('align');
  }
  for(const a of copy.querySelectorAll('a[href^="#"]')){
    const id=decodeURIComponent((a.getAttribute('href')||'').slice(1));
    const destination=sourceToPage.get(id);
    if(!destination)continue;
    // A chapter title is not copied to the article body; its subsection is.
    const headingTarget=destination.sourceId===id||groups.some(g=>g.heading.id===id);
    a.href=destination===currentPage?(headingTarget?'#'+destination.id:'#'+encodeURIComponent(id)):
      href(destination)+(headingTarget?'':'#'+encodeURIComponent(id));
  }
  return copy;
}
function renderPage(index){
  const page=pages[index];reader.replaceChildren();
  const heading=el('h3',null,page.title);heading.id=page.id;reader.append(heading);
  page.nodes.forEach(node=>reader.append(clean(node,page)));
  for(const details of reader.querySelectorAll('details.sanskrit-reveal')){
    const summary=details.querySelector(':scope>summary');if(!summary)continue;
    const sync=()=>{summary.textContent=details.open?'Hide Sanskrit':'Show Sanskrit';};
    details.addEventListener('toggle',sync);sync();
  }
  parent.textContent=page.parent;count.textContent=`Section ${index+1} of ${pages.length}`;
  function setPager(link,other,label){
    link.replaceChildren(el('small',null,label));
    if(!other){link.removeAttribute('href');link.classList.add('disabled');return;}
    link.classList.remove('disabled');link.href=href(other);link.append(document.createTextNode(other.title));
  }
  setPager(prev,index?pages[index-1]:null,'Previous');
  setPager(next,index+1<pages.length?pages[index+1]:null,'Next');
  for(const nav of [sideNav,mobileNav])for(const link of nav.querySelectorAll('a[data-section]')){
    const active=link.dataset.section===page.id;link.classList.toggle('is-active',active);
    if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
  }
  document.title=`${page.title} — ${articleTitle} — Viveka Dṛṣṭi`;
  const url=new URL(location.href);
  if(index===0)url.searchParams.delete('section');else url.searchParams.set('section',page.id);
  history.replaceState(null,'',url.pathname+url.search+url.hash);
  const target=location.hash?document.getElementById(decodeURIComponent(location.hash.slice(1))):null;
  if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  else window.scrollTo(0,0);
}
const requested=new URLSearchParams(location.search).get('section');
const index=byId.has(requested)?byId.get(requested).index:0;
document.body.replaceChildren(bar,main);
document.body.className='document-paged-page';
renderPage(index);
})();