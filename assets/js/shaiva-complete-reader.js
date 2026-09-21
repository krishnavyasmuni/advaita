/* The original 52-page Śaiva manuscript, displayed in the Varṇa-vicāra article template.
   Data are source-derived; presentation must not rewrite or substitute any passages. */
(()=>{'use strict';
const site='/vivekadrishti/',base=site+'articles/a-shaiva-lens-on-shiva-as-the-supreme-deity/';
const root=document.getElementById('source-content');if(!root)return;
const make=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
async function get(path){const r=await fetch(site+path+'?v=20260921-varna-1');if(!r.ok)throw Error(path+': HTTP '+r.status);return(await r.text()).trim();}
async function load(){
 const encoded=await get('assets/data/shaiva-manuscript.b64');
 const bytes=Uint8Array.from(atob(encoded),ch=>ch.charCodeAt(0));
 if(!('DecompressionStream' in window))throw Error('This browser cannot decompress the manuscript');
 const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));
 const pages=JSON.parse(await new Response(stream).text());
 if(!Array.isArray(pages)||pages.length!==52||pages.slice(0,50).some(x=>!Array.isArray(x)||!x.length)||pages.slice(50).some(x=>!Array.isArray(x)||x.length))throw Error('Incomplete 52-page manuscript');
 return pages;
}
function sectionGroup(title){
 if(title==='Index')return 'Manuscript';
 const number=parseInt(title,10);
 if(number<=4)return 'Introduction and Purāṇas';
 if(number<=6)return 'Scriptural evidence';
 return 'Objections and Dharmaśāstra';
}
function sectionsFrom(pages){
 const sections=[{id:'opening',title:'Opening pages',parent:'Manuscript',blocks:[]}];
 let current=sections[0];
 pages.forEach((blocks,i)=>blocks.forEach(([kind,value])=>{
  if(kind==='heading'){
   const number=/^\s*(\d+)\./.exec(value);
   const id=/^index\b/i.test(value)?'index':number?'section-'+number[1]:'section-'+sections.length;
   current={id,title:value,parent:sectionGroup(value),blocks:[]};
   sections.push(current);
  }else current.blocks.push({kind,value,page:i+1});
 }));
 return sections;
}
function sanskrit(text){
 const d=make('details','sanskrit-reveal');const summary=make('summary','','Show Sanskrit');
 const body=make('div','',text);body.lang='sa-Deva';
 d.append(summary,body);
 d.addEventListener('toggle',()=>{summary.textContent=d.open?'Hide Sanskrit':'Show Sanskrit';});
 return d;
}
function renderBlock({kind,value}){
 if(kind==='sa'){const wrapper=make('div','shaiva-standalone-sanskrit');wrapper.append(sanskrit(value));return wrapper;}
 if(kind==='quote')return make('blockquote','translation shaiva-quote',value);
 if(kind==='table'){
  const fragment=document.createDocumentFragment();
  for(const row of value){
   const [original,english,note]=row;
   const pair=make('div','shaiva-verse-pair');
   if(original)pair.append(sanskrit(original));
   if(english){const trans=make('p','translation',english);trans.lang='en';pair.append(trans);}
   if(note)pair.append(make('small','shaiva-note',note));
   fragment.append(pair);
  }
  return fragment;
 }
 if(kind==='p'){
  if(/^\s*\d{1,2}\.\d{1,2}(?:\.\d+)?\s+/.test(value)&&value.length<180)return make('h4','shaiva-source-heading',value);
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
async function render(){
 const pages=await load(),sections=sectionsFrom(pages);
 const params=new URLSearchParams(location.search),requested=params.get('section');
 let chosen=sections.find(s=>s.id===requested);
 const pageMatch=/^#source-page-(\d+)$/.exec(location.hash);
 if(!chosen&&pageMatch){const p=Number(pageMatch[1]);chosen=sections.find(s=>s.blocks.some(b=>b.page===p));}
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
 content.append(make('h3','shaiva-section-title',chosen.title));
 let lastPage=0;
 for(const block of chosen.blocks){
  if(block.page!==lastPage){
   lastPage=block.page;
   const marker=make('small','shaiva-source-page','Original PDF · page '+lastPage+' of 52');
   marker.id='source-page-'+lastPage;content.append(marker);
  }
  content.append(renderBlock(block));
 }
 if(chosen.id==='opening'){
  const img=make('img','shaiva-cover');img.alt='Original artwork of Śiva from the supplied manuscript';img.decoding='async';img.loading='eager';
  content.append(img);
  get('assets/data/shaiva-cover.webp.b64').then(x=>img.src='data:image/webp;base64,'+x).catch(e=>{console.warn('Original manuscript artwork could not load',e);img.replaceWith(make('p','shaiva-end-note','The original cover artwork is temporarily unavailable.'));});
 }
 root.replaceChildren(content);
 if(pageMatch){requestAnimationFrame(()=>document.getElementById('source-page-'+pageMatch[1])?.scrollIntoView());}
}
render().catch(e=>{console.error('Unable to load the complete Śaiva manuscript',e);root.replaceChildren(make('p','shaiva-loading-error','The manuscript could not load. Refresh this page or open the preserved earlier edition.'));const a=make('a','','Open preserved earlier edition');a.href='source-original.html';root.append(a);});
})();
