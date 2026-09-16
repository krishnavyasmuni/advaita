(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader][data-canto="10"]');
  const host = root && root.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const cache = new Map();
  function get(chapter) {
    if (![1,2,5].includes(chapter)) return Promise.resolve(null);
    if (!cache.has(chapter)) {
      const path = '/vivekadrishti/assets/data/canto10-sridhara-literal-overrides/' + String(chapter).padStart(2,'0') + '.json?v=20260916-1';
      cache.set(chapter,fetch(path,{cache:'no-cache'})
        .then(response => {if(!response.ok)throw new Error('Existing Canto 10 notes HTTP '+response.status);return response.json()})
        .catch(error => {console.warn('Existing Śrīdhara notes:',error);return null}));
    }
    return cache.get(chapter);
  }
  function addBlock(target,label,text,classname) {
    const details=document.createElement('details');details.className='sb-details gita-details '+classname;details.open=true;
    const summary=document.createElement('summary');summary.textContent=label;
    const content=document.createElement('p');content.className='sb-source-content';content.textContent=text;
    details.append(summary,content);target.append(details);
  }
  function apply() {
    const shell=host.querySelector('.sb-chapter-shell[data-chapter]');
    if(!shell)return;
    const chapter=Number(shell.dataset.chapter);
    if(![1,2,5].includes(chapter))return;
    const sections=Array.from(shell.querySelectorAll('.sb-verse-section'));
    if(!sections.length)return;
    get(chapter).then(records=>{
      if(!records||!shell.isConnected||host.querySelector('.sb-chapter-shell')!==shell)return;
      sections.forEach(section=>{
        const match=section.id.match(/^sb-10-(\d+)-(\d+)(?:-(\d+))?$/);
        if(!match||Number(match[1])!==chapter)return;
        const first=Number(match[2]),last=Number(match[3]||match[2]);
        const controls=section.querySelector('.gita-controls');if(!controls)return;
        for(let verse=first;verse<=last;verse++){
          const record=records[String(verse)];if(!record||!record.translation)continue;
          const key='c10Existing'+verse;
          if(controls.querySelector('[data-c10-existing="'+verse+'"]'))continue;
          const wrapper=document.createElement('div');wrapper.dataset.c10Existing=String(verse);
          if(!record.reviewed){const flag=document.createElement('p');flag.className='sb-c10-existing-note';flag.textContent='Previously written English note; individual word meanings have not been checked for this verse.';wrapper.append(flag)}
          addBlock(wrapper,'Śrīdhara English — existing note (10.'+chapter+'.'+verse+')',record.translation,'sb-literal-details');
          if(record.word_for_word)addBlock(wrapper,'Śrīdhara word/phrase meanings — existing note (10.'+chapter+'.'+verse+')',record.word_for_word,'sb-sridhara-wfw');
          controls.append(wrapper);
        }
      });
    });
  }
  const css=document.createElement('style');css.textContent='.sb-c10-existing-note{max-width:652px;padding:8px 11px;border-left:3px solid #a88c6a;background:#fffaf3;color:#665342;font-size:12px;line-height:1.6}';document.head.append(css);
  new MutationObserver(apply).observe(host,{childList:true,subtree:true});
  apply();
})();
