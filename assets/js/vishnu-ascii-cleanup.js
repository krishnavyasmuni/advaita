/* Plain-English cleanup for the Vishnu article.
   The source and Devanagari remain intact; only the visible Roman text is
   normalised after the shared Varna-vicara reader has built the page. */
(()=>{
'use strict';
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;

const root=document.getElementById('source-content');
if(!root)return;

const devanagariRun=/(?:[॥।]\s*)?[\u0900-\u097F][\u0900-\u097F\s।॥०-९|,.;:!?()\-–—\u200c\u200d]*[\u0900-\u097F।॥]/gu;
const toAscii=value=>String(value??'')
  .replace(/[śṣ]/g,'sh').replace(/[ŚṢ]/g,'Sh')
  .replace(/[ṛṝ]/g,'r').replace(/[ṚṜ]/g,'R')
  .replace(/[ṇṅñ]/g,'n').replace(/[ṆṄÑ]/g,'N')
  .replace(/[ṭ]/g,'t').replace(/[Ṭ]/g,'T')
  .replace(/[ḍ]/g,'d').replace(/[Ḍ]/g,'D')
  .replace(/[ḷ]/g,'l').replace(/[Ḷ]/g,'L')
  .replace(/[ṃṁ]/g,'m').replace(/[ṂṀ]/g,'M')
  .replace(/[ḥ]/g,'h').replace(/[Ḥ]/g,'H')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g,'')
  .replace(/[ß]/g,'ss')
  .replace(/[æ]/gi,'ae')
  .replace(/[œ]/gi,'oe')
  .replace(/\bKrshna\b/gi,'Krishna')
  .replace(/\bRgveda\b/gi,'Rigveda')
  .replace(/\bDrshti\b/gi,'Drishti');

const isSanskritNode=node=>{
  const element=node.nodeType===Node.ELEMENT_NODE?node:node.parentElement;
  return !!element?.closest('details.sanskrit-reveal,[lang^="sa"],.shaiva-parallel__sanskrit');
};

const makeDetails=text=>{
  const details=document.createElement('details');
  details.className='sanskrit-reveal';
  const summary=document.createElement('summary');
  summary.textContent='Show Sanskrit';
  const source=document.createElement('div');
  source.lang='sa-Deva';
  source.textContent=text.trim();
  details.append(summary,source);
  details.addEventListener('toggle',()=>{summary.textContent=details.open?'Hide Sanskrit':'Show Sanskrit'});
  return details;
};

/* The generic reader already marks flattened mixed-script runs. Turn those
   markers into the same closed Sanskrit control used by the Shaiva article. */
root.querySelectorAll('.mixed-sanskrit').forEach(span=>{
  if(span.closest('details.sanskrit-reveal'))return;
  span.replaceWith(makeDetails(span.textContent));
});

/* Catch mixed runs that were not marked by the older reader. Keeping each run
   in its own details element prevents Devanagari from sitting inside English
   prose or quotation blocks. */
const candidates=[...root.querySelectorAll('p,blockquote')].filter(node=>!node.closest('details,table'));
for(const node of candidates){
  if(node.querySelector('details.sanskrit-reveal'))continue;
  const text=node.textContent||'';
  if(!/[\u0900-\u097F]/u.test(text))continue;
  const matches=[...text.matchAll(devanagariRun)];
  if(!matches.length)continue;
  const fragment=document.createDocumentFragment();
  let cursor=0;
  for(const match of matches){
    const before=text.slice(cursor,match.index).replace(/[“"]\s*$/u,'').trim();
    if(before){const p=document.createElement(node.tagName.toLowerCase());p.className=node.className;p.textContent=before;fragment.append(p)}
    fragment.append(makeDetails(match[0]));
    cursor=match.index+match[0].length;
  }
  const after=text.slice(cursor).replace(/^\s*[”"]\s*/u,'').trim();
  if(after){const p=document.createElement(node.tagName.toLowerCase());p.className=node.className;p.textContent=after;fragment.append(p)}
  node.replaceWith(fragment);
}

/* Remove diacritics from every Roman text node, while leaving source Sanskrit
   and the contents of its controls untouched. */
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const textNodes=[];
let current;
while((current=walker.nextNode())){
  if(current.parentElement?.closest('script,style'))continue;
  textNodes.push(current);
}
for(const node of textNodes){
  if(isSanskritNode(node))continue;
  node.nodeValue=toAscii(node.nodeValue);
}

const title=document.querySelector('.article-head h1');
if(title)title.textContent=toAscii(title.textContent);
const brand=document.querySelector('.sitebar a');
if(brand)brand.textContent='Viveka Drsti';
document.title=toAscii(document.title).replace(/Viveka Drsti/,'Viveka Drsti');
})();
