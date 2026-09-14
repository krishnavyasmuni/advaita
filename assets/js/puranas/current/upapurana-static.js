/* Brahma-style adapter for the second Upapurāṇa URL family. */
(() => {
  const mount=document.getElementById('upapurana-standalone');
  if(!mount)return;

  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arr=v=>Array.isArray(v)?v.filter(Boolean):(v?[v]:[]);
  const itemText=v=>{
    if(v==null)return '';
    if(typeof v==='string'||typeof v==='number')return String(v);
    return String(v.text||v.claim||v.summary||v.description||v.detail||v.title||'');
  };
  const hasDocumentedCriticalEdition=items=>{
    const source=arr(items).map(itemText).join(' ').replace(/\s+/g,' ');
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

  const slug=location.pathname.split('/').filter(Boolean).pop()||'';
  async function run(){
    if(window.UPAPURANA_READY)await window.UPAPURANA_READY;
    const data=window.UPAPURANA_BY_SLUG||{};
    const sources=window.UPAPURANA_SOURCES||{};
    const profile=data[slug];
    if(!profile){
      mount.innerHTML='<p class="article-error">This Upapurāṇa research route could not be resolved. <a href="/vivekadrishti/articles/scripture/">Return to the Scripture Index</a>.</p>';
      return;
    }

    document.title=String(profile.name)+' — Upapurāṇa Research | Viveka Dṛṣṭi';
    const refs=arr(profile.sourceIds).map(id=>({id,...(sources[id]||{})})).filter(r=>String(r.title||'').trim());
    const refNum=Object.fromEntries(refs.map((r,i)=>[r.id,i+1]));
    const cites=()=>{
      const nums=refs.map(r=>refNum[r.id]).filter(Boolean);
      return nums.length?'<sup class="upapurana-source-cluster" aria-label="Research sources">'+nums.map(n=>'<a href="#upap-ref-'+n+'">['+n+']</a>').join(' ')+'</sup>':'';
    };
    const renderSectionItems=(items,index)=>{
      const values=arr(items).filter(x=>String(itemText(x)).trim());
      if(index===7)return values.length?'<ul class="upapurana-reading-list">'+values.map(x=>'<li>'+esc(itemText(x))+'</li>').join('')+'</ul>'+cites():'<p>No further-reading entries have been recorded.</p>';
      return values.map(x=>'<p>'+esc(itemText(x))+'</p>').join('')+(values.length?cites():'');
    };

    const criticalAvailable=hasDocumentedCriticalEdition(profile.sections?.critical);
    const defs=[];
    [['date','Date of composition'],['structure','Structure'],['contents','Contents'],['theology','Theology'],['critical','Critical edition'],['reception','Influences and reception'],['social','Rites, dharma and social history'],['further','Further reading']].forEach(([key,label],index)=>{
      if(key==='critical'&&!criticalAvailable)return;
      defs.push({id:'upap-section-'+(defs.length+1),label,html:renderSectionItems(profile.sections?.[key],index)});
    });
    const referencesHtml=refs.length
      ?'<ol>'+refs.map((r,i)=>'<li id="upap-ref-'+(i+1)+'"><b>'+esc(r.title)+'</b>'+(r.detail?' — '+esc(r.detail):'')+(r.url?' <a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">Open source ↗</a>':'')+'</li>').join('')+'</ol>'
      :'<p>No references have been recorded for this entry.</p>';
    defs.push({id:'upap-section-'+(defs.length+1),label:'References',html:referencesHtml+'<p class="upapurana-editorial-note"><b>Editorial rule:</b> a traditional-list attestation, manuscript date, printed edition and stemmatic critical edition are different kinds of evidence. Where the work is lost or its identity is disputed, this page reports a fragment/testimonia dossier rather than inventing a complete book.</p>'});

    const witnesses=arr(profile.witnesses);
    const info=[['Corpus','Upapurāṇa witness corpus'],['Preservation',profile.status],['Orientation',profile.orientation],['Attestation',String(witnesses.length)+' of 4 index lists']].filter(([,v])=>String(v||'').trim());
    const witnessHtml=witnesses.length?'<div class="upapurana-witness-box"><b>Traditional witnesses</b><ul>'+witnesses.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul></div>':'';
    const toc='<nav class="kena-toc" aria-label="Contents"><div class="kena-toc-title">Contents</div><ol>'+defs.map(s=>'<li><a href="#'+s.id+'" data-upap-target="'+s.id+'">'+esc(s.label)+'</a></li>').join('')+'</ol></nav>';
    const sectionHtml=defs.map(s=>'<section class="kena-section purana-full-section mahapurana-article-section mahapurana-collapse-section'+(s.label==='References'?' universal-references':'')+'" id="'+s.id+'"><h2 role="button" tabindex="0" aria-expanded="false" aria-controls="'+s.id+'-body">'+esc(s.label)+'</h2><div id="'+s.id+'-body" class="mahapurana-collapse-body" hidden>'+s.html+'</div></section>').join('');

    mount.innerHTML='<section class="kena-article-reader purana-full-reader mahapurana-wiki-reader mahapurana-static-reader upapurana-static-reader"><header class="kena-article-head"><span class="eyebrow">Upapurāṇa · encyclopedia article</span><h1>'+esc(profile.name)+'</h1></header><div class="kena-article-scroll"><article class="purana-full-article universal-wiki-article mahapurana-wiki-article"><aside class="kena-infobox universal-infobox purana-full-infobox"><div class="kena-infobox-title">'+esc(profile.name)+'</div>'+info.map(([k,v])=>'<div class="kena-info-row"><b>'+esc(k)+'</b><span>'+esc(v)+'</span></div>').join('')+witnessHtml+'</aside><div class="kena-lead"><p>This research article treats <b>'+esc(profile.name)+'</b> as one of the '+Object.keys(data).length+' distinct Upapurāṇa witness-labels represented by the four traditional lists compared in the Viveka Dṛṣṭi Scripture Index. Those lists disagree with one another, and they sometimes preserve homonymous, lost or textually disputed titles.</p><p>'+esc(profile.status||'')+'. The article therefore distinguishes composition, redaction, manuscript transmission, printed recension, critical edition and later reception instead of treating “Upapurāṇa” as a fixed eighteen-book canon.</p></div>'+toc+sectionHtml+'</article></div></section>';

    const setOpen=(section,open)=>{
      const body=section?.querySelector(':scope > .mahapurana-collapse-body'),heading=section?.querySelector(':scope > h2');
      if(!body||!heading)return;
      section.classList.toggle('is-open',open);
      body.hidden=!open;
      heading.setAttribute('aria-expanded',open?'true':'false');
    };
    mount.addEventListener('click',e=>{
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
    mount.addEventListener('keydown',e=>{
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
    mount.classList.add('is-loaded');
  }
  run().catch(err=>{console.error(err);mount.innerHTML='<p class="article-error">The Upapurāṇa research article could not be loaded. <a href="/vivekadrishti/articles/scripture/">Return to the Scripture Index</a>.</p>'});
})();
