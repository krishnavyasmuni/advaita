/* Complete Śaiva article reader. The manuscript data is preserved separately;
   this file only turns it into the same quiet, paged reading experience used
   by the Varṇa-vicāra article. */
(()=>{
'use strict';

const site='/vivekadrishti/';
const base=site+'articles/a-shaiva-lens-on-shiva-as-the-supreme-deity/';
const root=document.getElementById('source-content');
if(!root)return;

const make=(tag,cls,text)=>{
  const node=document.createElement(tag);
  if(cls)node.className=cls;
  if(text!==undefined)node.textContent=text;
  return node;
};

const empty=()=>document.createDocumentFragment();

function normaliseSpelling(value){
  let text=String(value??'');
  const replacements=[
    [/Shvestahsvara/gi,'Śvetāśvatara'],
    [/Shvetashvara/gi,'Śvetāśvatara'],
    [/Shankaracharya/gi,'Śaṅkarācārya'],
    [/Shankara/gi,'Śaṅkara'],
    [/MahaNarayana/gi,'Mahānārāyaṇa'],
    [/Narayana/gi,'Nārāyaṇa'],
    [/Vaishnavism/gi,'Vaiṣṇavism'],
    [/Vaishnava/gi,'Vaiṣṇava'],
    [/Vaishnav/gi,'Vaiṣṇava'],
    [/Shaivism/gi,'Śaivism'],
    [/Shaiva/gi,'Śaiva'],
    [/Shiva/gi,'Śiva'],
    [/Vishnu/gi,'Viṣṇu'],
    [/Krishna/gi,'Kṛṣṇa'],
    [/Mahabharat/gi,'Mahābhārata'],
    [/Bhagavat Gita/gi,'Bhagavad Gītā'],
    [/Bhagavadgita/gi,'Bhagavad Gītā'],
    [/Bhagavat Puran/gi,'Bhāgavata Purāṇa'],
    [/Puranas/gi,'Purāṇas'],
    [/Purana/gi,'Purāṇa'],
    [/Itihasas/gi,'Itihāsas'],
    [/Itihasa/gi,'Itihāsa'],
    [/Dharmashastras/gi,'Dharmaśāstras'],
    [/Dharmashastra/gi,'Dharmaśāstra'],
    [/Upanishads/gi,'Upaniṣads'],
    [/Upanishad/gi,'Upaniṣad'],
    [/Shruti/gi,'Śruti'],
    [/Smriti/gi,'Smṛti'],
    [/Mimamsa/gi,'Mīmāṃsā'],
    [/Karmakanda/gi,'Karmakāṇḍa'],
    [/Jnana-kanda/gi,'jñāna-kāṇḍa'],
    [/Kali Yuga/gi,'Kali Yuga'],
    [/Prajapati/gi,'Prajāpati'],
    [/Mahadeva/gi,'Mahādeva'],
    [/Maheshvara/gi,'Maheśvara'],
    [/Maheshvar/gi,'Maheśvara'],
    [/Rama/gi,'Rāma'],
    [/Ramayana/gi,'Rāmāyaṇa'],
    [/Gita/gi,'Gītā'],
    [/Garud Puran/gi,'Garuḍa Purāṇa'],
    [/Padma Puran/gi,'Padma Purāṇa'],
    [/Matsya Puran/gi,'Matsya Purāṇa'],
    [/Kurma Puran/gi,'Kūrma Purāṇa'],
    [/Skanda Puran/gi,'Skanda Purāṇa'],
    [/Shiva Puran/gi,'Śiva Purāṇa'],
    [/Bhagavat Puran/gi,'Bhāgavata Purāṇa']
  ];
  for(const [pattern,replacement] of replacements)text=text.replace(pattern,replacement);
  return text;
}

function articleText(value){
  let text=String(value??'').replace(/\u00a0/g,' ');
  text=text
    .replace(/\bcontinued\s+on\s+(?:the\s+)?source\s+PDF\s+page\s+\d+\b/gi,' ')
    .replace(/\bsource\s+PDF\s+page\s+\d+\b/gi,' ')
    .replace(/\bPDF\s+page\s+\d+\b/gi,' ')
    .replace(/\b(?:source\s+)?document\b/gi,'article')
    .replace(/\bthis\s+article\s+article\b/gi,'this article')
    .replace(/\bBY\s+POPCULTKING\b/gi,' ')
    .replace(/\b([A-Z]{2,})\b/g,match=>match.toLowerCase())
    .replace(/\s*&\s*/g,' and ')
    .replace(/\s*([,.;:!?])/g,'$1')
    .replace(/([,.;:!?])(?=[A-Z“‘])/g,'$1 ')
    .replace(/,([A-Za-z])/g,', $1')
    .replace(/\s+([)])/g,'$1')
    .replace(/([([])\s+/g,'$1')
    .replace(/\s*:\s*/g,': ')
    .replace(/\s{2,}/g,' ')
    .trim();
  if(!text)return '';
  text=normaliseSpelling(text);
  return text.replace(/^([a-z])/u,(_,letter)=>letter.toUpperCase());
}

function sentenceTitle(value){
  let text=articleText(value)
    .replace(/^\s*\d+(?:\.\d+)*[.)]?\s*/,'')
    .replace(/\s*:\s*$/,'')
    .trim();
  if(!text)return '';
  text=text.charAt(0).toUpperCase()+text.slice(1);
  return text;
}

function stripOuterQuotes(value){
  return String(value??'').trim()
    .replace(/^[“"‘']+/,'')
    .replace(/[”"’']+$/,'')
    .trim();
}

function cleanSanskrit(value){
  let text=String(value??'').replace(/\s*\(Translation:\s*$/i,'').trim();
  text=text.replace(/\s+[‘'][\s\S]*$/,'').trim();
  text=stripOuterQuotes(text);
  return text;
}

function sanskrit(value){
  const text=cleanSanskrit(value);
  if(!text)return empty();
  const details=make('details','sanskrit-reveal');
  const summary=make('summary',null,'Show Sanskrit');
  const source=make('div',null,text);
  source.lang='sa-Deva';
  details.append(summary,source);
  details.addEventListener('toggle',()=>{summary.textContent=details.open?'Hide Sanskrit':'Show Sanskrit';});
  return details;
}

function translation(value){
  const text=stripOuterQuotes(articleText(value));
  return text?make('p','translation',text):empty();
}

function reference(value){
  const text=articleText(value);
  return text?make('p','reference',text):empty();
}

function note(value){
  const text=articleText(value);
  if(!text)return empty();
  const block=make('p','aside-note');
  block.textContent=text;
  return block;
}

function normaliseMajorHeading(value){
  const raw=String(value??'').trim();
  const numberMatch=/^\s*(\d+)\./.exec(raw);
  const number=numberMatch?Number(numberMatch[1]):null;
  if(/^\s*index\b/i.test(raw))return {id:'index',title:'Contents'};
  const titles={
    1:'Preface',
    2:'On guṇa-based Purāṇa classification',
    3:'Viṣṇu as tāmasic and Śiva as sāttvic',
    4:'Double standards on absolute and relative supremacy',
    5:'Evidence from Śruti on the supremacy of Śiva',
    6:'Supremacy of Śiva in itihāsas',
    7:'Pūrvapakṣa: Mahānārāyaṇa Upaniṣad on the supposed supremacy of Viṣṇu',
    8:'Addressing the scope-of-questions argument',
    9:'Supremacy of Śiva in Dharmaśāstras'
  };
  const title=titles[number]||sentenceTitle(raw);
  const prefix=number===6?'6.1 Lord Rāma on the supremacy of Śiva':null;
  return {id:number?'section-'+number:'section-'+title.toLowerCase().replace(/[^a-z0-9]+/g,'-'),title,number,prefix};
}

function sectionGroup(number){
  if(number===null)return 'Opening';
  if(number<=3)return 'Introduction and Purāṇas';
  if(number<=6)return 'Scriptural evidence';
  return 'Objections and Dharmaśāstra';
}

function sectionsFrom(pages){
  const sections=[{id:'opening',title:'Invocation',parent:'Opening',blocks:[]}];
  let current=sections[0];
  pages.forEach((blocks,pageIndex)=>blocks.forEach(([kind,value])=>{
    if(kind==='heading'){
      const info=normaliseMajorHeading(value);
      current={id:info.id,title:info.title,parent:info.id==='index'?'Opening':sectionGroup(info.number),blocks:[]};
      if(info.prefix)current.blocks.push({kind:'subheading',value:info.prefix,page:pageIndex+1});
      sections.push(current);
      return;
    }
    const previous=current.blocks[current.blocks.length-1];
    if(kind==='table'&&previous?.kind==='table'&&Array.isArray(previous.value)&&Array.isArray(value)){
      previous.value.push(...value);
    }else if(kind==='sa'&&previous?.kind==='sa'){
      previous.value+='\n'+value;
    }else{
      current.blocks.push({kind,value,page:pageIndex+1});
    }
  }));
  return sections;
}

function indexList(value){
  const text=String(value??'').replace(/\s+/g,' ').trim();
  const wrapper=make('div','article-index');
  const topPattern=/(?:^|\s)(\d+)\.\s+(.+?)(?=\s+\d+\.\s+|$)/g;
  let match;
  while((match=topPattern.exec(text))){
    const number=match[1];
    const body=match[2].trim();
    const firstSub=body.search(/\s+\d+\.\d+\s+/);
    const topTitle=(firstSub<0?body:body.slice(0,firstSub)).trim();
    const entry=make('div','index-entry');
    const heading=make('a','index-heading',sentenceTitle(number+'. '+topTitle));
    heading.href=base+'?section=section-'+number;
    entry.append(heading);
    const subText=firstSub<0?'':body.slice(firstSub).trim();
    const subPattern=/(?:^|\s)(\d+\.\d+)\s+(.+?)(?=\s+\d+\.\d+\s+|$)/g;
    let sub;
    while((sub=subPattern.exec(subText))){
      const child=make('a','index-subitem',sentenceTitle(sub[1]+' '+sub[2]));
      child.href=base+'?section=section-'+number;
      entry.append(child);
    }
    wrapper.append(entry);
  }
  return wrapper.childElementCount?wrapper:make('p',null,articleText(value));
}

function renderVerse(value){
  const raw=articleText(value);
  const marks=[...raw.matchAll(/\|\|\s*(\d+)\s*\|\|/g)];
  if(!marks.length)return null;
  const fragment=document.createDocumentFragment();
  let start=0;
  for(const mark of marks){
    const before=raw.slice(start,mark.index).trim();
    if(before)fragment.append(translation(before));
    fragment.append(reference('Verse '+mark[1]));
    start=mark.index+mark[0].length;
  }
  const tail=raw.slice(start).trim();
  if(tail)fragment.append(translation(tail));
  return fragment;
}

function renderQuote(value){
  const visible=articleText(value);
  if(!visible)return empty();
  if(/^(?:english(?:\s+translation)?|translation)\s*:?[.]?$/i.test(visible))return reference('English translation');
  if(/^(?:Bhagavadgītā|Laugakṣī|Laugakshi)\b/i.test(visible))return reference(visible);
  const withoutLabel=visible.replace(/^\s*(?:English\s+)?translation\s*:\s*/i,'').trim();
  if(!withoutLabel)return empty();
  const noteAt=withoutLabel.search(/\s+NOTE\s*:\s*/i);
  const fragment=document.createDocumentFragment();
  const quoteText=noteAt<0?withoutLabel:withoutLabel.slice(0,noteAt).trim();
  const pieces=quoteText.split(/\s+>\s+/).map(stripOuterQuotes).filter(Boolean);
  for(const piece of pieces)fragment.append(translation(piece));
  if(noteAt>=0)fragment.append(note(withoutLabel.slice(noteAt+1)));
  return fragment;
}

function renderTable(value){
  if(!Array.isArray(value)||!value.length)return empty();
  const table=make('table','shaiva-parallel');
  table.setAttribute('aria-label','Sanskrit and English translation');
  const thead=document.createElement('thead');
  const headRow=document.createElement('tr');
  const leftHead=make('th',null,'Sanskrit');
  const rightHead=make('th',null,'English translation');
  leftHead.scope='col';rightHead.scope='col';
  thead.append(headRow);headRow.append(leftHead,rightHead);
  const tbody=document.createElement('tbody');
  for(const rowData of value){
    const row=document.createElement('tr');
    const original=Array.isArray(rowData)?rowData[0]||'':'';
    const english=Array.isArray(rowData)?rowData[1]||'':'';
    const extra=Array.isArray(rowData)?rowData.slice(2).filter(Boolean).join(' '):'';
    const left=make('td','shaiva-parallel__sanskrit',cleanSanskrit(original));
    left.lang='sa-Deva';
    left.dataset.label='Sanskrit';
    const right=make('td','shaiva-parallel__english',articleText(english));
    right.lang='en';
    right.dataset.label='English translation';
    if(extra)right.append(make('small','shaiva-note',articleText(extra)));
    row.append(left,right);
    tbody.append(row);
  }
  table.append(thead,tbody);
  return table;
}

function renderParagraph(value,section){
  const visible=articleText(value);
  if(!visible||/popcultking/i.test(visible))return empty();
  if(section==='index')return indexList(visible);
  if(/^\s*(?:english\s+)?translation\s*:?\s*$/i.test(visible))return reference('English translation');
  if(/^\s*sanskrit\s+text(?:\s+and\s+english\s+translation)?\s*:?\s*$/i.test(visible))return reference(sentenceTitle(visible));
  if(/^\s*shankara[’']s commentary\b/i.test(visible)||/^\s*shankara[’']s commentary\s*\(sanskrit bhashya\)\s*$/i.test(visible))return reference(visible);
  if(/^\s*\(?translation\s*:/i.test(visible))return translation(visible.replace(/^\s*\(?translation\s*:\s*/i,'').replace(/\)\s*$/,'').trim());
  const verse=renderVerse(value);if(verse)return verse;
  if(/^\s*[●•]/u.test(visible))return make('p','article-bullet',visible.replace(/^\s*[●•]\s*/u,''));
  if(/^\s*note\s*:/i.test(visible))return note(visible);
  if(/^\s*\d{1,2}\.\d{1,2}(?:\.\d+)?\s+/.test(visible)&&visible.length<220){
    return make('h3',null,sentenceTitle(visible));
  }
  if(/^(?:bhagavadgītā|laugakṣī|laugakshi)\b/i.test(visible)&&visible.length<100)return reference(visible);
  if(/^[“"]/.test(visible)&&visible.length>40)return translation(visible);
  return make('p',null,visible);
}

function renderBlock(block,section){
  if(block.kind==='sa')return sanskrit(block.value);
  if(block.kind==='quote')return renderQuote(block.value);
  if(block.kind==='table')return renderTable(block.value);
  if(block.kind==='subheading')return make('h3',null,sentenceTitle(block.value));
  if(block.kind==='p'){
    const visible=articleText(block.value);
    if(section==='opening'&&/^a scripture-based case for the supremacy of śiva$/i.test(visible))return empty();
    return renderParagraph(block.value,section);
  }
  return make('p',null,articleText(block.value));
}

function href(section){
  return section.id==='opening'?base:base+'?section='+encodeURIComponent(section.id);
}

function tocInto(node,sections,selected){
  node.replaceChildren();
  let group='';
  let children=null;
  for(const section of sections){
    if(section.parent!==group){
      group=section.parent;
      const wrapper=make('div','toc-group');
      wrapper.append(make('div','toc-parent',group));
      children=make('div','toc-children');
      wrapper.append(children);
      node.append(wrapper);
    }
    const link=make('a',section.id===selected.id?'is-active':'',section.title);
    link.href=href(section);
    link.dataset.section=section.id;
    if(section.id===selected.id)link.setAttribute('aria-current','page');
    children.append(link);
  }
}

function navLink(anchor,section,label){
  anchor.replaceChildren(make('small',null,label));
  if(!section){
    anchor.classList.add('disabled');
    anchor.removeAttribute('href');
    return;
  }
  anchor.classList.remove('disabled');
  anchor.href=href(section);
  anchor.append(document.createTextNode(section.title));
}

async function get(path){
  const response=await fetch(site+path+'?v=20260923-shaiva-parity-1');
  if(!response.ok)throw Error(path+': HTTP '+response.status);
  return (await response.text()).trim();
}

async function load(){
  const encoded=await get('assets/data/shaiva-manuscript.b64');
  const bytes=Uint8Array.from(atob(encoded),character=>character.charCodeAt(0));
  if(!('DecompressionStream' in window))throw Error('This browser cannot decompress the manuscript');
  const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));
  const pages=JSON.parse(await new Response(stream).text());
  if(!Array.isArray(pages)||pages.length!==52||pages.slice(0,50).some(page=>!Array.isArray(page)||!page.length)||pages.slice(50).some(page=>!Array.isArray(page)||page.length))throw Error('Incomplete manuscript');
  return pages;
}

async function render(){
  const pages=await load();
  const sections=sectionsFrom(pages);
  const requested=new URLSearchParams(location.search).get('section');
  let selected=sections.find(section=>section.id===requested)||sections[0];
  if(requested&&!sections.some(section=>section.id===requested))history.replaceState(null,'',href(selected));
  const index=sections.indexOf(selected);
  const desktop=document.getElementById('shaiva-desktop-toc');
  const mobile=document.getElementById('shaiva-mobile-toc');
  if(desktop)tocInto(desktop,sections,selected);
  if(mobile)tocInto(mobile,sections,selected);
  document.getElementById('section-parent').textContent=selected.parent;
  document.getElementById('section-count').textContent='Section '+(index+1)+' of '+sections.length;
  navLink(document.getElementById('page-prev'),sections[index-1],'Previous');
  navLink(document.getElementById('page-next'),sections[index+1],'Next');
  document.title=selected.title+' — A Scripture-Based Case for the Supremacy of Śiva — Viveka Dṛṣṭi';
  const content=document.createDocumentFragment();
  content.append(make('h3',null,selected.title));
  for(const block of selected.blocks)content.append(renderBlock(block,selected.id));
  root.replaceChildren(content);
}

render().catch(error=>{
  console.error('Unable to load the Śaiva article',error);
  root.replaceChildren(make('p','load-error','The article could not load. Refresh this page and try again.'));
});
})();
