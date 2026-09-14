(function(){
  'use strict';

  const data=window.ITIHASA_BOOKS||{};
  const key=document.body.dataset.bookKey||'';
  const book=data[key];
  const root=document.getElementById('itihasa-book-root');
  if(!root)return;

  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const slug=v=>String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const arr=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const polish=v=>String(v??'')
    .replace(/\bthe following map follows\b/gi,'The sequence follows')
    .replace(/\bthis contents map follows\b/gi,'The sequence follows')
    .replace(/\bso this article keeps later fame distinct from the passage’s role in the received epic\b/gi,'Later fame and the passage’s function within the received epic are therefore distinct questions')
    .replace(/\bthis article (?:keeps|uses|treats|should|must)\b[^.]*\.?/gi,'')
    .replace(/\ba responsible citation\b/gi,'Precise citation')
    .replace(/\s{2,}/g,' ').trim();
  const valueOf=v=>{
    if(v==null)return '';
    if(typeof v==='string'||typeof v==='number')return polish(v);
    return polish(v.text||v.summary||v.description||v.detail||v.claim||v.title||v.citation||'');
  };
  const hasText=v=>arr(v).map(valueOf).join(' ').trim().length>0;
  const paragraphs=values=>arr(values).map(valueOf).filter(Boolean).map(p=>'<p>'+esc(p)+'</p>').join('');
  const sourceTitle=s=>valueOf(s?.title||s?.citation||s?.name||s);
  const link=s=>{
    const title=sourceTitle(s);
    return s?.url?'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(title)+'</a>':esc(title);
  };
  const unitId=(unit,i)=>'unit-'+(i+1)+'-'+slug(unit?.title||('part-'+(i+1)));

  if(!book){
    root.innerHTML='<p>This article could not be loaded. Return to the Scripture Index and choose the book again.</p>';
    return;
  }

  /* The data files deliberately put a reusable corpus-level paragraph first.
     When book-specific history exists, lead with that evidence instead of the template. */
  const history=arr(book.history);
  const specificHistory=history.length>1?history.slice(1):history;
  const structure=arr(book.structure);
  const specificStructure=structure.length>1?[...structure.slice(1),structure[0]]:structure;
  const reception=arr(book.reception);
  const specificReception=reception.length>1?reception.slice(0,-1):reception;
  const textualHistory=arr(book.textualHistory);
  const specificTextualHistory=textualHistory.length>1?[...textualHistory.slice(1),textualHistory[0]]:textualHistory;

  document.title=String(book.title)+' — Viveka Dṛṣṭi';
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.content=book.description||String(book.title)+': guide to structure, contents, textual history and interpretation.';

  const units=arr(book.units);
  const unitToc=units.map((unit,i)=>'<li><a href="#'+unitId(unit,i)+'">'+esc(valueOf(unit.title||('Part '+(i+1))))+'</a></li>').join('');
  const unitHtml=units.map((unit,i)=>{
    const title=valueOf(unit.title||('Part '+(i+1)));
    const range=unit.range?'<span class="itihasa-range">'+esc(unit.range)+'</span>':'';
    const body=unit.paragraphs&&arr(unit.paragraphs).length?unit.paragraphs:(unit.text||unit.summary);
    return '<section class="itihasa-unit" id="'+unitId(unit,i)+'"><h3>'+esc(title)+' '+range+'</h3>'+paragraphs(body)+'</section>';
  }).join('');

  const interpretationHtml=arr(book.interpretation).map(part=>{
    const title=typeof part==='object'&&part.title?'<h3>'+esc(part.title)+'</h3>':'';
    const body=typeof part==='object'?(part.paragraphs&&arr(part.paragraphs).length?part.paragraphs:(part.text||part.summary)):part;
    return title+paragraphs(body);
  }).join('');

  const criticalExtent=valueOf(book.criticalExtent);
  const sectionDefs=[
    {id:'date-text',title:'Date and textual position',html:paragraphs(specificHistory)},
    {id:'structure',title:'Structure and numbering',html:paragraphs(specificStructure)+(book.numberingNote?'<p class="itihasa-note"><b>Numbering.</b> '+esc(valueOf(book.numberingNote))+'</p>':'')},
    {id:'contents',title:'Contents',html:unitHtml},
    {id:'interpretation',title:'Interpretation and significance',html:interpretationHtml},
    {id:'reception',title:'Reception and influence',html:paragraphs(specificReception)}
  ];

  if(criticalExtent){
    let criticalHtml=paragraphs(specificTextualHistory);
    if(criticalHtml.indexOf(criticalExtent)===-1)criticalHtml='<p><b>Critical-edition scope.</b> '+esc(criticalExtent)+'</p>'+criticalHtml;
    sectionDefs.push({id:'textual-history',title:'Critical edition and transmission',html:criticalHtml});
  }else if(hasText(specificTextualHistory)){
    sectionDefs.push({id:'textual-history',title:'Textual transmission',html:paragraphs(specificTextualHistory)});
  }

  const refs=arr(book.sources).map(s=>({source:s,title:sourceTitle(s)})).filter(x=>x.title);
  const refsHtml=refs.length
    ?'<ol class="itihasa-reference-list">'+refs.map((x,i)=>'<li id="itihasa-ref-'+(i+1)+'">'+link(x.source)+(x.source.detail?' — '+esc(valueOf(x.source.detail)):'')+'</li>').join('')+'</ol>'
    :'<p>No external references have been recorded for this entry.</p>';
  sectionDefs.push({
    id:'references',
    title:'References and further reading',
    html:refsHtml+'<p class="itihasa-source-note">Chapter and sarga ranges follow the edition or numbering system named above; regional recensions and translations may divide the same material differently.</p>'
  });

  const facts=[
    ['Work',book.work],['Position',book.position],['Meaning',book.meaning],['Language','Sanskrit'],
    ['Commonly printed extent',book.traditionalExtent],['Critical-edition extent',criticalExtent],
    ['Principal setting',book.setting],['Textual basis',book.textualBasis]
  ].filter(([,v])=>hasText(v));

  const previous=book.previous?.url?'<a href="'+esc(book.previous.url)+'">← '+esc(book.previous.title)+'</a>':'<span></span>';
  const next=book.next?.url?'<a href="'+esc(book.next.url)+'">'+esc(book.next.title)+' →</a>':'<span></span>';
  const toc='<nav class="kena-toc" aria-label="Contents"><div class="kena-toc-title">Contents</div><ol>'+
    sectionDefs.map(section=>{
      const nested=section.id==='contents'&&unitToc?'<ol class="itihasa-toc-sub">'+unitToc+'</ol>':'';
      return '<li><a href="#'+section.id+'">'+esc(section.title)+'</a>'+nested+'</li>';
    }).join('')+'</ol></nav>';

  root.innerHTML=
    '<header class="kena-article-head">'+
      '<span class="eyebrow">'+esc(book.work)+' · '+esc(book.position||'book guide')+'</span>'+
      '<h1>'+esc(book.title)+(book.devanagari?'<span class="purana-devanagari-title" lang="sa-Deva">'+esc(book.devanagari)+'</span>':'')+'</h1>'+
    '</header>'+
    '<aside class="kena-infobox universal-infobox purana-full-infobox" aria-label="Article facts">'+
      '<div class="kena-infobox-title">'+esc(book.title)+'</div>'+
      facts.map(([k,v])=>'<div class="kena-info-row"><b>'+esc(k)+'</b><span>'+esc(valueOf(v))+'</span></div>').join('')+
    '</aside>'+
    '<div class="kena-lead">'+paragraphs(book.lead)+'</div>'+
    toc+
    sectionDefs.map(section=>'<section id="'+section.id+'" class="kena-section purana-full-section mahapurana-article-section itihasa-content-section"><h2>'+esc(section.title)+'</h2><div class="mahapurana-collapse-body">'+section.html+'</div></section>').join('')+
    '<nav class="itihasa-neighbours" aria-label="Adjacent books">'+previous+next+'</nav>';

  root.addEventListener('click',ev=>{
    const anchor=ev.target.closest?.('a[href^="#"]');
    if(!anchor||!root.contains(anchor))return;
    const targetId=anchor.getAttribute('href').slice(1);
    const target=document.getElementById(targetId);
    if(!target)return;
    ev.preventDefault();
    target.scrollIntoView({behavior:'smooth',block:'start'});
    history.replaceState(null,'','#'+targetId);
  });

  if(location.hash){
    const target=document.getElementById(location.hash.slice(1));
    if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
  }
})();
