(() => {
 'use strict';
 const root=document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
 const host=root&&root.querySelector('[data-bhagavatam-host]');if(!host)return;
 const data=fetch('/advaita/assets/data/bhagavatam-sridhara-wfw-canto11-ch01-verses06-07.json?v=20260916-1',{cache:'no-cache'})
 .then(r=>{if(!r.ok)throw Error('Śrīdhara 11.1.6–7 HTTP '+r.status);return r.json()})
 .then(d=>d.source_commit==='100560de6c9f68c2875097d40a2012a84c784179'&&Array.isArray(d.entries)?d.entries:[])
 .catch(e=>{console.warn('Śrīdhara 11.1.6–7 source unavailable',e);return[]});
 const style=document.createElement('style');style.textContent='.sb-c11-67-pair{display:grid;grid-template-columns:minmax(110px,1fr) 1.6fr;gap:9px;padding:7px 0;border-bottom:1px solid #e4dcd1;font-size:14px;line-height:1.6}.sb-c11-67-pair strong{font-weight:500;color:#684e70}.sb-c11-67-note{padding:11px 13px;margin:10px auto;background:#fffaf1;border-left:3px solid #a18c75;font-size:13px;line-height:1.6}@media(max-width:550px){.sb-c11-67-pair{grid-template-columns:1fr;gap:2px}}';document.head.append(style);
 function apply(){const shell=host.querySelector('.sb-chapter-shell[data-chapter="1"]');const section=shell&&shell.querySelector('#sb-11-1-6-7');const controls=section&&section.querySelector('.gita-controls');if(!controls||controls.querySelector('[data-sridhara-checked-67]'))return;
 data.then(entries=>{if(!controls.isConnected||controls.querySelector('[data-sridhara-checked-67]'))return;
 entries.filter(e=>e.canto===11&&e.chapter===1&&e.start===6&&e.end===7).forEach(entry=>{
 const wrap=document.createElement('div');wrap.dataset.sridharaChecked67='1';
 function block(label,value,cls,lang){const d=document.createElement('details');d.className='sb-details gita-details '+cls;d.open=true;const s=document.createElement('summary');s.textContent=label;const p=document.createElement('p');p.className='sb-source-content';if(lang)p.lang=lang;p.textContent=value;d.append(s,p);return d}
 wrap.append(block('Śrīdhara Sanskrit — shared commentary on 11.1.6–7',entry.sanskrit,'sb-bhasya','sa-Deva'));
 const words=document.createElement('details');words.className='sb-details gita-details sb-sridhara-wfw';words.open=true;const summary=document.createElement('summary');summary.textContent='Śrīdhara commentary — word/phrase meanings (6–7)';words.append(summary);
 entry.word_for_word.forEach(([original,meaning])=>{const line=document.createElement('div');line.className='sb-c11-67-pair';const a=document.createElement('strong');a.lang='sa-Deva';a.textContent=original;const b=document.createElement('span');b.textContent=meaning;line.append(a,b);words.append(line)});
 const note=document.createElement('p');note.className='sb-c11-67-note';note.textContent=entry.note;wrap.append(words,block('Śrīdhara commentary — literal English (6–7)',entry.literal_english,'sb-literal-details'),note);controls.append(wrap)
 });});}
 new MutationObserver(apply).observe(host,{childList:true,subtree:true});apply();
})();