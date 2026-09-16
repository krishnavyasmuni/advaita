(() => {
 'use strict';
 const root=document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
 const host=root&&root.querySelector('[data-bhagavatam-host]');
 if(!host)return;
 const pinned='100560de6c9f68c2875097d40a2012a84c784179';
 const files=['bhagavatam-sridhara-wfw-canto11-ch01-verses02-03.json','bhagavatam-sridhara-wfw-canto11-ch01-verses04-05.json'];
 const data=Promise.all(files.map(name=>fetch('/vivekadrishti/assets/data/'+name+'?v=20260916-2',{cache:'no-cache'})
   .then(r=>{if(!r.ok)throw Error('Śrīdhara commentary checkpoint HTTP '+r.status);return r.json()})
   .then(d=>d.source_commit===pinned&&Array.isArray(d.entries)?d.entries:[])
   .catch(e=>{console.warn('Śrīdhara commentary checkpoint unavailable:',name,e);return[]})))
   .then(groups=>groups.flat());
 const css=document.createElement('style');css.textContent='.sb-c11-gloss-row{display:grid;grid-template-columns:minmax(110px,1fr) 1.6fr;gap:9px;padding:7px 0;border-bottom:1px solid #e4dcd1;font-size:14px;line-height:1.6}.sb-c11-gloss-row strong{color:#684e70;font-weight:500}.sb-c11-checkpoint-note{margin:10px auto;padding:10px 13px;background:#fffaf1;border-left:3px solid #a18c75;font-size:13px;line-height:1.6}@media(max-width:550px){.sb-c11-gloss-row{grid-template-columns:1fr;gap:2px}}';document.head.append(css);
 function apply(){const shell=host.querySelector('.sb-chapter-shell[data-chapter="1"]');if(!shell)return;
 data.then(entries=>{if(!shell.isConnected||host.querySelector('.sb-chapter-shell')!==shell)return;
 entries.forEach(entry=>{const section=shell.querySelector('#sb-11-1-'+entry.start);const controls=section&&section.querySelector('.gita-controls');if(!controls||controls.querySelector('[data-sridhara-checked="'+entry.start+'"]'))return;
 const wrapper=document.createElement('div');wrapper.dataset.sridharaChecked=String(entry.start);
 const original=document.createElement('details');original.className='sb-details gita-details sb-bhasya';original.open=true;const ohead=document.createElement('summary');ohead.textContent='Śrīdhara commentary — source Sanskrit ('+entry.start+')';const obody=document.createElement('p');obody.className='sb-source-content';obody.lang='sa-Deva';obody.textContent=entry.sanskrit;original.append(ohead,obody);
 const words=document.createElement('details');words.className='sb-details gita-details sb-sridhara-wfw';words.open=true;const whead=document.createElement('summary');whead.textContent='Śrīdhara commentary — word/phrase meanings ('+entry.start+')';words.append(whead);
 entry.word_for_word.forEach(([originalText,meaning])=>{const row=document.createElement('div');row.className='sb-c11-gloss-row';const a=document.createElement('strong');a.lang='sa-Deva';a.textContent=originalText;const b=document.createElement('span');b.textContent=meaning;row.append(a,b);words.append(row)});
 const english=document.createElement('details');english.className='sb-details gita-details sb-literal-details';english.open=true;const ehead=document.createElement('summary');ehead.textContent='Śrīdhara commentary — literal English ('+entry.start+')';const ebody=document.createElement('p');ebody.className='sb-source-content';ebody.textContent=entry.literal_english;english.append(ehead,ebody);
 const note=document.createElement('p');note.className='sb-c11-checkpoint-note';note.textContent=entry.note;wrapper.append(original,words,english,note);controls.append(wrapper);
 });});}
 new MutationObserver(apply).observe(host,{childList:true,subtree:true});apply();
})();
