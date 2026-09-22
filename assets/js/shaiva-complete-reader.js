/* The author's 52-page Śaiva manuscript, rendered with the Varṇa-vicāra article layout. */
(()=>{'use strict';
const site='/vivekadrishti/',base=site+'articles/a-shaiva-lens-on-shiva-as-the-supreme-deity/';
const root=document.getElementById('source-content');if(!root)return;
const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
async function get(path){const r=await fetch(site+path+'?v=20260921-tidy-3');if(!r.ok)throw Error(path+': HTTP '+r.status);return(await r.text()).trim();}
async function load(){
 const encoded=await get('assets/data/shaiva-manuscript.b64');
 const bytes=Uint8Array.from(atob(encoded),ch=>ch.charCodeAt(0));
 if(!('DecompressionStream'in window))throw Error('This browser cannot decompress the manuscript');
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));
 const pages=JSON.parse(await new Response(stream).text());
 if(!Array.isArray(pages)||pages.length!==52||pages.slice(0,50).some(x=>!Array.isArray(x)||!x.length)||pages.slice(50).some(x=>!Array.isArray(x)||x.length))throw Error('Incomplete manuscript');
 return pages;
}
function sectionGroup(title){
 if(/^index\b/i.test(title)||/^invocation$/i.test(title))return 'Opening';
 const number=parseInt(title,10);
 if(number<=4)return 'Introduction and Purāṇas';
 if(number<=6)return 'Scriptural evidence';
 return 'Objections and Dharmaśāstra';
}
function sectionsFrom(pages){
 const sections=[{id:'opening',title:'Invocation',parent:'Opening',blocks:[]}];let current=sections[0];
 pages.forEach((blocks,i)=>blocks.forEach(([kind,value])=>{
  if(kind==='heading'){
   const number=/^\s*(\d+)\./.exec(value);
   const id=/^index\b/i.test(value)?'index':number?'section-'+number[1]:'section-'+sections.length;
   current={id,title:/^index\b/i.test(value)?'Contents':value,parent:sectionGroup(value),blocks:[]};sections.push(current);
  }else current.blocks.push({kind,value,page:i+1});
 }));return sections;
}
function sanskrit(text){const p=make('p','shaiva-sanskrit',text);p.lang='sa-Deva';p.hidden=true;return p;}
function renderIndex(text){
 const entry=make('div','shaiva-index-entry');
 const pieces=text.split(/\s+(?=\d+\.\d+\s)/);
 const top=/^(\d+)\.\s+(.+)$/.exec(pieces.shift()||'');
 if(!top)return make('p','shaiva-paragraph',text);
 const title=make('a','shaiva-index-heading',top[1]+'. '+top[2]);title.href=base+'?section=section-'+top[1];entry.append(title);
 for(const piece of pieces){const sub=make('div','shaiva-index-subitem',piece);entry.append(sub);}
 return entry;
}
function renderBlock({kind,value},section){
 if(kind==='sa')return sanskrit(value);
 if(kind==='quote'){
  if(value==='English'||/^Bhagavadgītā, IX\.25$/.test(value)||/^Laugakshi Smriti, Volume 6$/.test(value))return make('p','shaiva-passage-label',value);
  return make('blockquote','translation shaiva-quote',value);
 }
 if(kind==='table'){
  const table=make('table','shaiva-parallel');
  table.setAttribute('aria-label','Sanskrit and English translation');
  const thead=document.createElement('thead'),headRow=document.createElement('tr');
  const sanskritHead=make('th',null,'Sanskrit'),englishHead=make('th',null,'English translation');
  sanskritHead.scope='col';englishHead.scope='col';sanskritHead.lang='sa-Deva';headRow.append(sanskritHead,englishHead);thead.append(headRow);
  const tbody=document.createElement('tbody');
  for(const [original,english,note] of value){
   const row=document.createElement('tr');
   const left=make('td','shaiva-parallel__sanskrit',original||'');left.lang='sa-Deva';
   const right=make('td','shaiva-parallel__english',english||'');right.lang='en';
   if(note)right.append(make('small','shaiva-note',note));
   row.append(left,right);tbody.append(row);
  }
  table.append(thead,tbody);return table;
 }
 if(kind==='p'){
  if(section==='index')return renderIndex(value);
  if(section==='opening'&&value==='A Scripture-Based Case for the Supremacy of Shiva')return make('span','shaiva-source-title-anchor');
  if(section==='opening'&&/^BY POPCULTKING$/i.test(value))return make('p','shaiva-byline',value);
  if(/^\s*\d{1,2}\.\d{1,2}(?:\.\d+)?\s+/.test(value)&&value.length<180)return make('h3','shaiva-subheading',value);
  return make('p','shaiva-paragraph',value);
 }
 return make('p','shaiva-paragraph',String(value));
}
function href(s){return s.id==='opening'?base:base+'?section='+encodeURIComponent(s.id);}
function tocInto(node,sections,selected){
 node.replaceChildren();let group='',children;
 for(const s of sections){
  if(s.parent!==group){group=s.parent;const wrapper=make('div','toc-group');wrapper.append(make('div','toc-parent',group));children=make('div','toc-children');wrapper.append(children);node.append(wrapper);}
  const a=make('a',s.id===selected.id?'is-active':'',s.title);a.href=href(s);a.dataset.section=s.id;
  if(s.id===selected.id)a.setAttribute('aria-current','page');children.append(a);
 }
}
function navLink(anchor,s,label){
 anchor.replaceChildren(make('small','',label));
 if(!s){anchor.classList.add('disabled');anchor.removeAttribute('href');return;}
 anchor.classList.remove('disabled');anchor.href=href(s);anchor.append(document.createTextNode(s.title));
}
function readPreference(){try{const value=sessionStorage.getItem('shaiva-show-sanskrit');return value===null||value==='true';}catch{return true;}}
function writePreference(on){try{sessionStorage.setItem('shaiva-show-sanskrit',String(on));}catch{}}
async function render(){
 const pages=await load(),sections=sectionsFrom(pages);
 const params=new URLSearchParams(location.search),requested=params.get('section');
 let chosen=sections.find(s=>s.id===requested);
 const pageMatch=null;
 if(!chosen)chosen=sections[0];
 const i=sections.indexOf(chosen);
 if(requested&&!sections.some(s=>s.id===requested))history.replaceState(null,'',href(chosen));
 for(const toc of [document.getElementById('shaiva-desktop-toc'),document.getElementById('shaiva-mobile-toc')])if(toc)tocInto(toc,sections,chosen);
 document.getElementById('section-parent').textContent=chosen.parent;
 document.getElementById('section-count').textContent='Section '+(i+1)+' of '+sections.length;
 navLink(document.getElementById('page-prev'),sections[i-1],'Previous');
 navLink(document.getElementById('page-next'),sections[i+1],'Next');
 document.title=chosen.title+' — A Scripture-Based Case for the Supremacy of Shiva — Viveka Dṛṣṭi';
 const content=document.createDocumentFragment();
 if(chosen.id!=='opening')content.append(make('h3','shaiva-section-title',chosen.title));
 const tools=make('div','shaiva-tools'),button=make('button','shaiva-sanskrit-toggle','Show Sanskrit');
 button.id='shaiva-sanskrit-toggle';button.type='button';button.setAttribute('aria-pressed','false');
 tools.append(button);content.append(tools);
 for(const block of chosen.blocks)content.append(renderBlock(block,chosen.id));
 if(chosen.id==='opening'){
  const img=make('img','shaiva-cover');img.alt='Śiva artwork';img.decoding='async';img.loading='eager';content.append(img);
  get('assets/data/shaiva-cover.webp.b64').then(x=>img.src='data:image/webp;base64,'+x).catch(e=>{console.warn('Original manuscript artwork could not load',e);img.remove();});
 }
 root.replaceChildren(content);
 const toggle=document.getElementById('shaiva-sanskrit-toggle');
 const sanskritNodes=Array.from(root.querySelectorAll('.shaiva-sanskrit,.shaiva-parallel__sanskrit'));
 if(!sanskritNodes.length)toggle.parentElement.hidden=true;
 else{
  let show=readPreference();
  function apply(){for(const p of sanskritNodes)p.hidden=!show;toggle.textContent=show?'Hide Sanskrit':'Show Sanskrit';toggle.setAttribute('aria-pressed',String(show));}
  toggle.addEventListener('click',()=>{show=!show;writePreference(show);apply();});apply();
 }
}
render().catch(e=>{console.error('Unable to load the complete Śaiva manuscript',e);root.replaceChildren(make('p','shaiva-loading-error','The article could not load. Refresh this page or try again.'));const a=make('a','','Open preserved earlier edition');a.href='source-original.html';root.append(a);});
})();
