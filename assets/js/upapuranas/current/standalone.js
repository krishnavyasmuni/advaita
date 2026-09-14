/* Standalone Wikipedia-style Upapurāṇa research reader. */
(()=>{
const host=document.getElementById('upapurana-standalone');if(!host)return;
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arr=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
const itemText=v=>{
  if(v==null)return '';
  if(typeof v==='string'||typeof v==='number')return String(v);
  return String(v.text||v.claim||v.summary||v.description||v.detail||v.title||'');
};
const sourceText=v=>arr(v).map(itemText).join(' ');
const hasDocumentedCriticalEdition=items=>{
  const source=sourceText(items).replace(/\s+/g,' ');
  return /\bis explicitly a critical edition\b|\bproject is producing critical editions\b/i.test(source);
};
const ensureNavigation=()=>{
  document.body.classList.add('mahapurana-static-page','mahapurana-unified-page');
  document.querySelectorAll('.site-header,.site-footer,.upapurana-back,.upapurana-route-nav').forEach(node=>node.remove());
  if(!document.querySelector('body > .purana-page-nav')){
    const nav=document.createElement('nav');
    nav.className='purana-page-nav';
    nav.setAttribute('aria-label','Scripture navigation');
    nav.innerHTML='<a class="purana-back-button" href="/vivekadrishti/articles/scripture/">← Back to Scripture Index</a><a class="purana-home-link" href="/vivekadrishti/">Home</a>';
    document.body.insertBefore(nav,document.body.firstElementChild);
  }
  if(!document.querySelector('body > .purana-return-nav')){
    const nav=document.createElement('nav');
    nav.className='purana-return-nav';
    nav.setAttribute('aria-label','Return to Scripture Index');
    nav.innerHTML='<a href="/vivekadrishti/articles/scripture/">← Back to Scripture Index</a>';
    document.body.appendChild(nav);
  }
};
ensureNavigation();
const data=window.UPAPURANA_RESEARCH_39||{};
const slug=String(location.pathname).replace(/\/$/,'').split('/').pop();
const d=Object.values(data).find(x=>x.slug===slug);
if(!d){host.innerHTML='<p class="article-error">No Upapurāṇa research dossier was found for this route. <a href="/vivekadrishti/articles/scripture/">Return to the Scripture Index</a>.</p>';return;}
document.title=String(d.name)+' — Upapurāṇa Research | Viveka Dṛṣṭi';

const references=arr(d.references).filter(r=>itemText(r).trim());
const refIndex={};references.forEach((r,i)=>{if(r.id)refIndex[r.id]=i+1;});
const cites=ids=>{
  const nums=[...new Set(arr(ids).map(id=>refIndex[id]).filter(Boolean))];
  return nums.length?'<sup class="upap-cite">'+nums.map(n=>'<a href="#upap-ref-'+n+'">['+n+']</a>').join(' ')+'</sup>':'';
};
const renderItems=items=>arr(items).map(item=>{
  const text=itemText(item);if(!text.trim())return '';
  const heading=item&&typeof item==='object'&&item.title&&item.text?'<h3>'+esc(item.title)+'</h3>':'';
  return heading+'<p>'+esc(text)+cites(item&&typeof item==='object'?item.refs:[])+'</p>';
}).join('');
const criticalAvailable=hasDocumentedCriticalEdition(d.sections?.critical);
const sectionDefs=[];
[['date','Date of composition'],['structure','Structure'],['contents','Contents'],['theology','Theology'],['critical','Critical edition'],['reception','Influences and reception'],['social','Rites, dharma and social history']].forEach(([key,label])=>{
  if(key==='critical'&&!criticalAvailable)return;
  sectionDefs.push({id:'upap-section-'+(sectionDefs.length+1),label,html:renderItems(d.sections?.[key])});
});
const further=arr(d.further||d.sections?.further);
sectionDefs.push({id:'upap-section-'+(sectionDefs.length+1),label:'Further reading',html:further.length?'<ul class="upapurana-reading-list">'+further.map(x=>'<li>'+esc(itemText(x))+'</li>').join('')+'</ul>':'<p>No further-reading entries have been recorded.</p>'});
const referencesHtml=references.length
  ?'<ol>'+references.map((r,i)=>'<li id="upap-ref-'+(i+1)+'">'+(r.url?'<a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.title||itemText(r))+'</a>':esc(r.title||itemText(r)))+(r.detail?' — '+esc(r.detail):'')+'</li>').join('')+'</ol>'
  :'<p>No references have been recorded for this entry.</p>';
sectionDefs.push({id:'upap-section-'+(sectionDefs.length+1),label:'References',html:referencesHtml+'<p class="upapurana-editorial-note"><b>Editorial rule:</b> a traditional-list attestation, manuscript date, printed edition and stemmatic critical edition are different kinds of evidence. Where the work is lost or its identity is disputed, this page reports a fragment/testimonia dossier rather than inventing a complete book.</p>'});

const info=[['Corpus','Upapurāṇa'],['Textual status',d.status],['Research classification',d.sect],['Traditional-list witnesses',String(arr(d.witnesses).length)+' of 4'],['Witnesses',arr(d.witnesses).join(' · ')||'—']].filter(([,v])=>String(v||'').trim());
const toc='<nav class="kena-toc" aria-label="Contents"><div class="kena-toc-title">Contents</div><ol>'+sectionDefs.map(s=>'<li><a href="#'+s.id+'" data-upap-target="'+s.id+'">'+esc(s.label)+'</a></li>').join('')+'</ol></nav>';
const sectionHtml=sectionDefs.map(s=>'<section class="kena-section purana-full-section mahapurana-article-section mahapurana-collapse-section'+(s.label==='References'?' universal-references':'')+'" id="'+s.id+'"><h2 role="button" tabindex="0" aria-expanded="false" aria-controls="'+s.id+'-body">'+esc(s.label)+'</h2><div id="'+s.id+'-body" class="mahapurana-collapse-body" hidden>'+s.html+'</div></section>').join('');

host.innerHTML='<div class="kena-article-reader purana-full-reader mahapurana-wiki-reader mahapurana-static-reader upapurana-static-reader"><header class="kena-article-head"><span class="eyebrow">Upapurāṇa · encyclopedia article</span><h1>'+esc(d.name)+'</h1></header><div class="kena-article-scroll"><article class="purana-full-article universal-wiki-article mahapurana-wiki-article"><aside class="kena-infobox universal-infobox purana-full-infobox"><div class="kena-infobox-title">'+esc(d.name)+'</div>'+info.map(([k,v])=>'<div class="kena-info-row"><b>'+esc(k)+'</b><span>'+esc(v)+'</span></div>').join('')+'</aside><div class="kena-lead"><p>'+esc(d.identity||String(d.name)+' is represented in the comparative Upapurāṇa witness corpus.')+'</p><p>This dossier distinguishes traditional classification, textual identity, composition/redaction, manuscript transmission and modern editions. Where the text is lost or identity-disputed, uncertainty is treated as a research result rather than filled with material from a similarly named Purāṇa.</p></div>'+toc+sectionHtml+'</article></div></div>';

const setOpen=(section,open)=>{
  const body=section?.querySelector(':scope > .mahapurana-collapse-body'),heading=section?.querySelector(':scope > h2');
  if(!body||!heading)return;
  section.classList.toggle('is-open',open);
  body.hidden=!open;
  heading.setAttribute('aria-expanded',open?'true':'false');
};
host.addEventListener('click',e=>{
  const tocLink=e.target.closest?.('.kena-toc a[data-upap-target]');
  if(tocLink){
    e.preventDefault();
    const section=document.getElementById(tocLink.dataset.upapTarget);
    setOpen(section,true);
    section?.scrollIntoView({behavior:'smooth',block:'start'});
    history.replaceState(null,'','#'+tocLink.dataset.upapTarget);
    return;
  }
  const heading=e.target.closest?.('.mahapurana-collapse-section > h2');
  if(heading){
    e.preventDefault();
    const section=heading.parentElement;
    setOpen(section,!section.classList.contains('is-open'));
  }
});
host.addEventListener('keydown',e=>{
  const heading=e.target.closest?.('.mahapurana-collapse-section > h2');
  if(!heading||(e.key!=='Enter'&&e.key!==' '))return;
  e.preventDefault();
  const section=heading.parentElement;
  setOpen(section,!section.classList.contains('is-open'));
});
if(location.hash){
  const target=document.getElementById(location.hash.slice(1));
  if(target?.classList.contains('mahapurana-collapse-section')){
    setOpen(target,true);
    requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  }
}
host.classList.add('is-loaded');
})();
