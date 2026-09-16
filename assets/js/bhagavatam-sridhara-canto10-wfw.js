(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader][data-canto="10"]');
  const host = root && root.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const source = fetch('/vivekadrishti/assets/data/bhagavatam-sridhara-wfw-canto10-ch01-reviewed.json?v=20260916-1', {cache:'no-cache'})
    .then(response => {if (!response.ok) throw new Error('Śrīdhara checkpoint HTTP '+response.status);return response.json()})
    .then(data => data.source_commit === '100560de6c9f68c2875097d40a2012a84c784179' && Array.isArray(data.entries) ? data.entries : [])
    .catch(error => {console.warn('Śrīdhara Canto 10 checkpoint:', error);return []});
  const style = document.createElement('style');
  style.textContent='.sb-c10-wfw{margin:12px auto 18px!important;max-width:652px}.sb-c10-wfw>summary{border-color:#a18c75!important}.sb-c10-gloss{display:grid;grid-template-columns:minmax(115px,1fr) minmax(0,1.5fr);gap:10px;padding:7px 0;border-bottom:1px solid #ddd5ca;font:14px/1.65 Merriweather,Georgia,serif}.sb-c10-gloss strong{font-weight:500;color:#684e70}.sb-c10-note{max-width:652px;margin:18px auto;padding:11px 14px;background:#fff9f1;border-left:3px solid #ac9576;font-size:13px;line-height:1.6}@media(max-width:560px){.sb-c10-gloss{grid-template-columns:1fr;gap:2px}}';
  document.head.append(style);
  function insert(entry) {
    const shell=host.querySelector('.sb-chapter-shell[data-chapter="1"]');
    const section=shell&&shell.querySelector('#sb-10-1-1');
    const controls=section&&section.querySelector('.gita-controls');
    if (!controls||controls.querySelector('[data-sridhara-c10-reviewed]')) return;
    const intro=document.createElement('p');intro.className='sb-c10-note';intro.textContent='Śrīdhara 10.1.1 begins with eleven introductory stanzas of his own. This is a partial Chapter 1 checkpoint, not a completed word-for-word translation of the chapter.';
    const prose=document.createElement('details');prose.className='sb-details gita-details sb-literal-details sb-c10-wfw';prose.open=true;
    const proseHeading=document.createElement('summary');proseHeading.textContent='Śrīdhara commentary — English literal';
    const proseBody=document.createElement('p');proseBody.className='sb-source-content';proseBody.textContent=entry.literal_english;prose.append(proseHeading,proseBody);
    const gloss=document.createElement('details');gloss.className='sb-details gita-details sb-sridhara-wfw sb-c10-wfw';gloss.open=true;gloss.dataset.sridharaC10Reviewed='1';
    const heading=document.createElement('summary');heading.textContent='Śrīdhara commentary — word/phrase meanings (10.1.1)';gloss.append(heading);
    entry.word_for_word.forEach(([original,meaning])=>{const row=document.createElement('div');row.className='sb-c10-gloss';const s=document.createElement('strong');s.lang='sa-Deva';s.textContent=original;const m=document.createElement('span');m.textContent=meaning;row.append(s,m);gloss.append(row)});
    const note=document.createElement('p');note.className='sb-c10-note';note.textContent=entry.editorial_note;controls.append(intro,prose,gloss,note);
  }
  function apply(){if(!host.querySelector('.sb-chapter-shell[data-chapter="1"] #sb-10-1-1'))return;source.then(entries=>{if(!host.querySelector('.sb-chapter-shell[data-chapter="1"]'))return;entries.filter(e=>e.canto===10&&e.chapter===1&&e.start===1).forEach(insert)})}
  new MutationObserver(apply).observe(host,{childList:true,subtree:true});
  apply();
})();
