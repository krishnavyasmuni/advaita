/* Render long-form papers in the same paged reader used by Varṇa-vicāra. */
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
const slug=value=>stripNumber(value).toLowerCase()
 .normalize('NFKD').replace(/[\\u0300-\\u036f]/g,'')
 .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'section';

const headings=[...sourceRoot.querySelectorAll('h2,h3')];
const firstRealH2=headings.find(n=>n.tagName==='H2'&&!/^contents$/i.test(text(n)));
let contentRoot=sourceRoot;
if(firstRealH2){
 let cursor=firstRealH2.parentElement;
 while(cursor&&cursor!==sourceRoot){
   const direct=[...cursor.children].filter(n=>n.matches('h2,h3'));
   if(direct.length>=2)contentRoot=cursor;
   cursor=cursor.parentElement;
 }
}
let nodes=[...contentRoot.children];
let h2s=nodes.filter(n=>n.matches('h2')&&!/^contents$/i.test(text(n)));
if(!h2s.length)h2s=nodes.filter(n=>n.matches('h3'));
if(!h2s.length)return;

const used=new Set(),makeId=(node,fallback)=>{
 let value=(node.id||slug(text(node))||fallback).replace(/^section-+/,'');
 if(used.has(value)){let n=2;while(used.has(value+'-'+n))n++;value+='-'+n}
 used.add(value);return value;
};
const groups=[];
for(let g=0;g<h2s.length;g++){
 const parent=h2s[g],start=nodes.indexOf(parent),end=g+1<h2s.length?nodes.indexOf(h2s[g+1]):nodes.length;
 const inside=nodes.slice(start+1,end);
 const children=inside.filter(n=>n.matches('h3'));
 const entries=[];
 if(children.length){
   for(let j=0;j<children.length;j++){
     const child=children[j],childStart=inside.indexOf(child);
     const childEnd=j+1<children.length?inside.indexOf(children[j+1]):inside.length;
     entries.push({node:child,nodes:inside.slice(childStart+1,childEnd),prefix:j===0?inside.slice(0,childStart):[]});
   }
 }else entries.push({node:parent,nodes:inside,prefix:[]});
 groups.push({node:parent,title:stripNumber(text(parent)),entries});
}

const pages=[];
let opening=[];
const contentsIndex=nodes.findIndex(n=>n.matches('h2')&&/^contents$/i.test(text(n)));
const firstStart=nodes.indexOf(h2s[0]);
if(contentsIndex>=0)opening=nodes.slice(contentsIndex+1,firstStart);
else opening=nodes.slice(0,firstStart);
opening=opening.filter(n=>!n.matches('h1,h2,ol,ul'));
groups.forEach(group=>{
 group.entries.forEach((entry,idx)=>{
   const pageId=makeId(entry.node,slug(group.title)+'-'+(idx+1));
   pages.push({
     id:pageId,
     parent:group.title,
     title:stripNumber(text(entry.node)),
     nodes:[...(pages.length===0?opening:[]),...entry.prefix,...entry.nodes],
     sourceId:entry.node.id||''
   });
 });
});
if(!pages.length)return;
const byId=new Map(pages.map((p,i)=>[p.id,{page:p,index:i}]));
const sourceToPage=new Map();
groups.forEach(group=>group.entries.forEach((entry,idx)=>{
 const page=pages.find(p=>p.title===stripNumber(text(entry.node))&&p.parent===group.title&&(!entry.node.id||p.sourceId===entry.node.id));
 if(page){
   sourceToPage.set(entry.node.id||slug(text(entry.node)),page.id);
   entry.node.querySelectorAll?.('[id]').forEach(n=>sourceToPage.set(n.id,page.id));
 }
}));

const el=(tag,cls,content)=>{
 const node=document.createElement(tag);
 if(cls)node.className=cls;
 if(content!==undefined)node.textContent=content;
 return node;
};
const shellBar=el('header','sitebar'),brand=el('a',null,'Viveka Dṛṣṭi');
brand.href='/vivekadrishti/';shellBar.append(brand);
const main=el('main','page'),head=el('header','article-head');head.append(el('h1',null,articleTitle));
const grid=el('div','reader-grid'),side=el('aside','side-toc'),sideNav=el('nav','toc');
side.setAttribute('aria-label','Table of contents');side.append(el('h2','side-toc-title','Contents'),sideNav);
const article=el('article','article'),mobile=el('details','mobile-toc'),mobileNav=el('nav','toc');
mobile.append(el('summary',null,'Contents'),mobileNav);
const context=el('div','page-context'),parent=el('strong'),count=el('span');
parent.id='section-parent';count.id='section-count';context.append(parent,count);
const reader=el('div');reader.id='source-content';
const pager=el('nav','page-nav');pager.setAttribute('aria-label','Document sections');
const prev=el('a','prev'),next=el('a','next');prev.id='page-prev';next.id='page-next';
pager.append(prev,next);article.append(mobile,context,reader,pager);grid.append(side,article);main.append(head,grid);

const href=page=>page&&page.id===pages[0].id?base:base+'?section='+encodeURIComponent(page.id);
const makeToc=nav=>{
 groups.forEach(group=>{
   const wrap=el('div','toc-group'),title=el('div','toc-parent',group.title),children=el('div','toc-children');
   group.entries.forEach(entry=>{
     const page=pages.find(p=>p.title===stripNumber(text(entry.node))&&p.parent===group.title&&(!entry.node.id||p.sourceId===entry.node.id));
     if(!page)return;
     const link=el('a',null,page.title);link.dataset.section=page.id;link.href=href(page);children.append(link);
   });
   wrap.append(title,children);nav.append(wrap);
 });
};
makeToc(sideNav);mobileNav.innerHTML=sideNav.innerHTML;

const clean=node=>{
 const copy=node.cloneNode(true);
 [copy,...copy.querySelectorAll('*')].forEach(n=>{
   const style=n.getAttribute('style')||'';
   const before=text(n);
   if(n.matches('p')&&(/color\\s*:\\s*#(?:a92727|65516f|7b3d35)/i.test(style)||/^[“"']/.test(before)))n.classList.add('translation');
   if(n.matches('details')&&/show\\s+sanskrit|hide\\s+sanskrit/i.test(text(n.querySelector('summary'))))n.classList.add('sanskrit-reveal');
   n.removeAttribute('style');n.removeAttribute('width');n.removeAttribute('height');n.removeAttribute('align');
 });
 copy.querySelectorAll('a[href^="#"]').forEach(a=>{
   const key=(a.getAttribute('href')||'').slice(1);
   const dest=sourceToPage.get(key)||sourceToPage.get(slug(key));
   if(dest)a.href=href(byId.get(dest).page);
 });
 return copy;
};
const renderPage=index=>{
 const page=pages[index];reader.replaceChildren();
 const title=el('h3',null,page.title);title.id=page.id;reader.append(title);
 page.nodes.forEach(node=>reader.append(clean(node)));
 reader.querySelectorAll('details.sanskrit-reveal').forEach(d=>{
   const summary=d.querySelector(':scope>summary');if(!summary)return;
   const sync=()=>summary.textContent=d.open?'Hide Sanskrit':'Show Sanskrit';
   d.addEventListener('toggle',sync);sync();
 });
 parent.textContent=page.parent;count.textContent=`Section ${index+1} of ${pages.length}`;
 const setup=(link,other,label)=>{
   link.replaceChildren(el('small',null,label));
   if(!other){link.removeAttribute('href');link.classList.add('disabled');return}
   link.classList.remove('disabled');link.href=href(other);link.append(document.createTextNode(other.title));
 };
 setup(prev,index?pages[index-1]:null,'Previous');setup(next,index+1<pages.length?pages[index+1]:null,'Next');
 [sideNav,mobileNav].forEach(nav=>nav.querySelectorAll('a[data-section]').forEach(link=>{
   const selected=link.dataset.section===page.id;link.classList.toggle('is-active',selected);
   if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');
 }));
 document.title=`${page.title} — ${articleTitle} — Viveka Dṛṣṭi`;
 const u=new URL(location.href);u.hash='';
 if(index===0)u.searchParams.delete('section');else u.searchParams.set('section',page.id);
 history.replaceState(null,'',u.pathname+u.search);
 window.scrollTo({top:0,behavior:'smooth'});
};
let requested=new URLSearchParams(location.search).get('section');
const pageIndex=byId.has(requested)?byId.get(requested).index:0;
document.body.replaceChildren(shellBar,main);
document.body.className='document-paged-page';
renderPage(pageIndex);
})();