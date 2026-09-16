(() => {
  'use strict';
  const root=document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
  const host=root&&root.querySelector('[data-bhagavatam-host]');
  if(!host)return;
  const data=fetch('/vivekadrishti/assets/data/bhagavatam-sridhara-wfw-canto11-ch01-reviewed.json?v=20260916-1',{cache:'no-cache'})
    .then(r=>{if(!r.ok)throw Error('Reviewed Śrīdhara entry HTTP '+r.status);return r.json()})
    .then(d=>d.source_commit==='100560de6c9f68c2875097d40a2012a84c784179'&&Array.isArray(d.entries)?d.entries:[])
    .catch(e=>{console.warn('Canto 11 reviewed Śrīdhara entry unavailable:',e);return[]});
  const style=document.createElement('style');style.textContent='.sb-c11-note{max-width:652px;padding:11px 14px;margin:12px auto;background:#fffaf3;border-left:3px solid #a18c75;font-size:13px;line-height:1.6}.sb-c11-pair{display:grid;grid-template-columns:minmax(120px,1fr) 1.6fr;gap:10px;padding:7px 0;border-bottom:1px solid #e5dcd0;font-size:14px;line-height:1.6}.sb-c11-pair strong{color:#684e70;font-weight:500}@media(max-width:560px){.sb-c11-pair{grid-template-columns:1fr;gap:2px}}';document.head.append(style);
  function apply(){
    const shell=host.querySelector('.sb-chapter-shell[data-chapter="1"]');
    const section=shell&&shell.querySelector('#sb-11-1-1');
    const controls=section&&section.querySelector('.gita-controls');
    if(!controls||controls.querySelector('[data-reviewed-sridhara-11]'))return;
    data.then(entries=>{
      if(!controls.isConnected||controls.querySelector('[data-reviewed-sridhara-11]'))return;
      entries.filter(e=>e.canto===11&&e.chapter===1&&e.start===1).forEach(entry=>{
        const wrap=document.createElement('div');wrap.dataset.reviewedSridhara11='1';
        const intro=document.createElement('p');intro.className='sb-c11-note';intro.textContent='The following eleven-canto opening comprises Śrīdhara’s own introductory stanzas and prose under Bhāgavatam 11.1.1. It is not a completed translation of the rest of Chapter 1.';wrap.append(intro);
        const english=document.createElement('details');english.className='sb-details gita-details sb-literal-details';english.open=true;
        const eh=document.createElement('summary');eh.textContent='Śrīdhara commentary — English literal';const ep=document.createElement('p');ep.className='sb-source-content';ep.textContent=entry.literal_english;english.append(eh,ep);wrap.append(english);
        const words=document.createElement('details');words.className='sb-details gita-details sb-sridhara-wfw';words.open=true;
        const wh=document.createElement('summary');wh.textContent='Śrīdhara commentary — word/phrase meanings (11.1.1)';words.append(wh);
        entry.word_for_word.forEach(([original,gloss])=>{const row=document.createElement('div');row.className='sb-c11-pair';const a=document.createElement('strong');a.lang='sa-Deva';a.textContent=original;const b=document.createElement('span');b.textContent=gloss;row.append(a,b);words.append(row)});
        const end=document.createElement('p');end.className='sb-c11-note';end.textContent=entry.editorial_note;wrap.append(words,end);controls.append(wrap);
      });
    });
  }
  new MutationObserver(apply).observe(host,{childList:true,subtree:true});apply();
})();
