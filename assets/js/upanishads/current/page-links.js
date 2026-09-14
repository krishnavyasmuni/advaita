/* Keep the established Scripture-index design while limiting the landing page to the requested core corpora. */
(() => {
  const root=document.getElementById('scripture-browser');
  if(!root)return;

  const CORE=new Map([
    ['Īśāvāsya',1],['Kena',2],['Kaṭha',3],['Praśna',4],['Muṇḍaka',5],
    ['Māṇḍūkya',6],['Taittirīya',7],['Aitareya',8],['Chāndogya',9],['Bṛhadāraṇyaka',10]
  ]);
  const ALLOWED_CORPORA=new Set(['upanishads','itihasa','puranas']);
  const slug=value=>String(value||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  const esc=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot',"'":'&#39;'}[c]));

  function trimPortal(){
    root.querySelectorAll('.corpus-button[data-corpus]').forEach(button=>{
      const corpus=button.dataset.corpus;
      if(!ALLOWED_CORPORA.has(corpus)){
        button.remove();
        return;
      }
      if(corpus==='upanishads' && button.textContent.trim()!=='Mukhya Upaniṣads')button.textContent='Mukhya Upaniṣads';
    });

    root.querySelectorAll('.shastra-tab[data-group="puranas"]').forEach(tab=>{
      if(tab.dataset.view!=='Mahāpurāṇa')tab.remove();
    });

    const title=root.querySelector('.shastra-title');
    if(title && /108\s+Upaniṣads/i.test(title.textContent))title.textContent='Mukhya Upaniṣads';
  }

  function rebuildUpanishads(){
    const holder=root.querySelector('.upanishad-holder');
    if(!holder)return;

    const group=holder.querySelector(':scope > .upanishad-group.up-mukhya') || holder.querySelector(':scope > .upanishad-group');
    if(!group)return;

    const buttons=[...group.querySelectorAll('.upanishad-name[data-name]')]
      .filter(button=>CORE.has(button.dataset.name))
      .sort((a,b)=>CORE.get(a.dataset.name)-CORE.get(b.dataset.name));
    if(!buttons.length)return;

    const existingIntro=root.querySelector('.up-wiki-intro');
    if(existingIntro)existingIntro.remove();

    const intro=document.createElement('div');
    intro.className='up-wiki-intro';
    intro.innerHTML='<p><b>Mukhya Upaniṣads</b> — the ten principal Upaniṣads of the traditional core.</p>';
    holder.before(intro);

    const replacement=document.createElement('div');
    replacement.className='up-wiki-index';
    replacement.dataset.wikipedia108='1';

    const details=document.createElement('details');
    details.className='up-wiki-group';
    details.open=true;
    const summary=document.createElement('summary');
    summary.innerHTML='<span>Mukhya</span><small>10 texts</small>';
    details.append(summary);

    const list=document.createElement('div');
    list.className='up-wiki-list';
    buttons.forEach(button=>{
      const name=button.dataset.name||button.querySelector('span')?.textContent?.trim()||'';
      const veda=button.dataset.veda||button.querySelector('small')?.textContent?.trim()||'';
      const a=document.createElement('a');
      a.className='up-wiki-link';
      a.href=`/vivekadrishti/articles/scripture/upanishads/${slug(name)}/`;
      a.innerHTML=`<span class="up-wiki-link-title">${esc(name)}</span><span class="up-wiki-link-meta">${veda?esc(veda):'Upaniṣad'}</span>`;
      list.append(a);
    });
    details.append(list);
    replacement.append(details);
    holder.replaceWith(replacement);
    root.dataset.upanishadWikipediaIndex='1';
  }

  if(!document.getElementById('upanishad-wikipedia-index-style')){
    const style=document.createElement('style');
    style.id='upanishad-wikipedia-index-style';
    style.textContent=`
      .up-wiki-intro{margin:0 0 18px;padding:12px 14px;border:1px solid #a2a9b1;background:#f8f9fa;color:#202122;font:14px/1.55 Arial,Helvetica,sans-serif}.up-wiki-intro p{margin:0!important;color:#202122!important;font:inherit!important}
      .up-wiki-index{border-top:1px solid #a2a9b1;background:#fff}.up-wiki-group{margin:0;border-bottom:1px solid #a2a9b1;background:#fff}.up-wiki-group>summary{list-style:none;position:relative;display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:13px 36px 13px 4px;cursor:pointer;color:#202122;font:400 23px/1.25 Georgia,'Times New Roman',serif}.up-wiki-group>summary::-webkit-details-marker{display:none}.up-wiki-group>summary::after{content:'›';position:absolute;right:8px;top:50%;transform:translateY(-50%) rotate(90deg);color:#54595d;font:22px/1 Arial,sans-serif}.up-wiki-group[open]>summary::after{transform:translateY(-50%) rotate(-90deg)}.up-wiki-group>summary small{color:#54595d;font:12px/1.3 Arial,Helvetica,sans-serif}
      .up-wiki-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0;border-top:1px solid #eaecf0}.up-wiki-link{display:flex;flex-direction:column;gap:3px;padding:10px 12px;border-bottom:1px solid #eaecf0;color:#36c!important;text-decoration:none!important;background:#fff}.up-wiki-link:nth-child(odd){border-right:1px solid #eaecf0}.up-wiki-link:hover{background:#f8f9fa;text-decoration:underline!important}.up-wiki-link-title{font:15px/1.35 Arial,Helvetica,sans-serif}.up-wiki-link-meta{color:#54595d;font:11px/1.35 Arial,Helvetica,sans-serif;text-decoration:none!important}
      .scripture-page #scripture-browser .corpus-button[data-corpus='upanishads']::after{content:'The ten principal Upaniṣads.'!important}
      .scripture-page #scripture-browser .corpus-button[data-corpus='puranas']::after{content:'Mahāpurāṇas across the major traditional enumerations.'!important}
      @media(max-width:700px){.up-wiki-group>summary{font-size:21px}.up-wiki-list{grid-template-columns:1fr}.up-wiki-link:nth-child(odd){border-right:0}}
    `;
    document.head.append(style);
  }

  function apply(){
    trimPortal();
    rebuildUpanishads();
  }

  apply();
  let queued=false;
  const observer=new MutationObserver(()=>{
    if(queued)return;
    queued=true;
    queueMicrotask(()=>{queued=false;apply();});
  });
  observer.observe(root,{childList:true,subtree:true});

  window.UPANISHAD_STATIC_PAGE_LINKS=true;
  window.UPANISHAD_WIKIPEDIA_INDEX=true;
  window.SCRIPTURE_CORE_ONLY=true;
})();