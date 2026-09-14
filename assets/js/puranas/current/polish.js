(() => {
  const previousOpen=window.openScriptureEncyclopedia;
  if(typeof previousOpen!=='function')return;
  const K=new Set(['Mahāpurāṇa','Upapurāṇa','Both']);
  const slug=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  function completeCitations(article,refs){
    if(!refs)return;
    const sources=[...refs.querySelectorAll(':scope > ol > li')].map((li,i)=>{
      const link=li.querySelector('a[href]');
      return link?{n:i+1,href:link.href,title:(li.textContent||'').replace(/\s+/g,' ').trim()}:null;
    }).filter(Boolean).slice(0,2);
    if(!sources.length)return;
    article.querySelectorAll('.kena-lead p,.purana-full-section p').forEach(paragraph=>{
      if(paragraph.querySelector('.purana-source-cite'))return;
      sources.forEach(source=>{
        const sup=document.createElement('sup');sup.className='purana-source-cite';
        const link=document.createElement('a');link.href=source.href;link.target='_blank';link.rel='noopener';link.title=source.title;link.textContent=`[${source.n}]`;
        sup.append(link);paragraph.append(sup);
      });
    });
  }
  function apply(){
    const article=document.querySelector('.purana-full-article');
    if(!article)return;
    const toc=article.querySelector('.kena-toc > ol');
    if(!toc)return;
    const refs=article.querySelector('#purana-references');
    const sections=[...article.querySelectorAll(':scope > .kena-section')].filter(s=>s!==refs);
    toc.innerHTML='';
    sections.forEach((sec,i)=>{
      const h2=sec.querySelector(':scope > h2');if(!h2)return;
      if(!sec.id)sec.id=`purana-section-${i+1}-${slug(h2.textContent)}`;
      const li=document.createElement('li');
      li.innerHTML=`<a href="#${sec.id}">${h2.textContent}</a>`;
      const hs=[...sec.querySelectorAll(':scope > h3, :scope > .purana-books > .purana-book > h3')];
      if(hs.length){
        const ol=document.createElement('ol');
        hs.forEach((h,j)=>{if(!h.id)h.id=`${sec.id}-${j+1}-${slug(h.textContent)}`;const sub=document.createElement('li');sub.innerHTML=`<a href="#${h.id}">${h.textContent}</a>`;ol.append(sub);});
        li.append(ol);
      }
      toc.append(li);
    });
    if(refs){const li=document.createElement('li');li.innerHTML='<a href="#purana-references">References</a>';toc.append(li);}
    completeCitations(article,refs);
    article.querySelectorAll('.purana-wiki-image figcaption:empty').forEach(x=>x.remove());
  }
  window.openScriptureEncyclopedia=function(button){const result=previousOpen(button);if(K.has(button?.dataset?.kind||'')){apply();queueMicrotask(apply);setTimeout(apply,80);setTimeout(apply,1200);}return result;};
})();
