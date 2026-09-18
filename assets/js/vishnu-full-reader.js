/* Keep the complete existing article in one continuous document.
   Do not paginate or replace sections with a shortened synopsis. */
(()=>{
  'use strict';
  if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;
  const source=document.getElementById('preface')?.parentElement;
  if(!source)return; // Keep the original article if the expected source is absent.
  const original=[...source.childNodes];
  const start=original.findIndex(n=>n.nodeType===1&&n.id==='preface');
  if(start<0)return;
  const opening=original.slice(0,start).filter(n=>n.nodeType===1&&n.matches('p,details,figure'));
  const content=[...opening,...original.slice(start)].map(n=>n.cloneNode(true));
  const el=(tag,cls,txt)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(txt)n.textContent=txt;return n};
  const header=el('header','sitebar'),home=el('a',null,'Viveka Dṛṣṭi');
  home.href='/vivekadrishti/';header.append(home);
  const main=el('main','page'),head=el('header','article-head');
  head.append(el('h1',null,'A Vaiṣṇava Lens on Viṣṇu as the Supreme Deity'));
  const grid=el('div','reader-grid'),side=el('aside','side-toc'),toc=el('nav','toc');
  side.setAttribute('aria-label','Article contents');toc.setAttribute('aria-label','Article sections');
  side.append(el('h2','side-toc-title','Contents'),toc);
  const article=el('article','article');article.id='vishnu-complete-article';
  const mobile=el('details','mobile-toc'),mobileNav=el('nav','toc');
  mobile.append(el('summary',null,'Contents'),mobileNav);
  const status=el('p','vishnu-reader-status','Full article · continuous reading');
  const body=el('div','vishnu-full-content');
  const cover=el('figure','source-figure'),image=el('img');
  image.src='/vivekadrishti/assets/images/source-documents/vishnu-cover-art.webp';
  image.alt='Viṣṇu and Lakṣmī illustration from the original paper';
  image.loading='lazy';cover.append(image);body.append(cover);
  body.append(...content);article.append(mobile,status,body);
  // The old export has thousands of inline styles that override the reader.
  // Remove only presentation, retaining every word, image, table and Sanskrit toggle.
  body.querySelectorAll('*').forEach(n=>{
    const style=n.getAttribute('style')||'';
    if(n.matches('p')&&(/color\s*:\s*#(?:a92727|65516f)/i.test(style)||/^[“\"]/.test(n.textContent.trim())))n.classList.add('translation');
    if(n.matches('details')&&/show sanskrit|hide sanskrit/i.test(n.querySelector('summary')?.textContent||''))n.classList.add('sanskrit-reveal');
    n.removeAttribute('style');
    if(n.hasAttribute('width'))n.removeAttribute('width');
  });
  const headings=[...body.querySelectorAll('h2,h3')];
  const used=new Set([...body.querySelectorAll('[id]')].map(n=>n.id));
  let group=null;
  headings.forEach((h,i)=>{
    if(!h.id){const stem='vishnu-heading-'+(i+1);let id=stem,k=2;while(used.has(id))id=stem+'-'+k++;h.id=id;used.add(id)}
    const name=h.textContent.replace(/\s+/g,' ').trim();
    if(!name)return;
    if(h.tagName==='H2'||!group){
      group=el('div','toc-group');
      const label=el('div','toc-parent');
      const a=el('a',null,name);a.href='#'+h.id;label.append(a);
      group.append(label,el('div','toc-children'));toc.append(group);
    }else{
      const a=el('a',null,name);a.href='#'+h.id;
      group.lastChild.append(a);
    }
  });
  mobileNav.innerHTML=toc.innerHTML;
  body.querySelectorAll('details.sanskrit-reveal').forEach(d=>{
    const s=d.querySelector(':scope>summary');if(!s)return;
    const sync=()=>{s.textContent=d.open?'Hide Sanskrit':'Show Sanskrit'};
    d.addEventListener('toggle',sync);sync();
  });
  const closing=el('figure','source-figure'),closingImage=el('img');
  closingImage.src='/vivekadrishti/assets/images/source-documents/vishnu-closing-emblem.webp';
  closingImage.alt='Closing emblem from the original paper';closingImage.loading='lazy';
  closing.append(closingImage);body.append(closing);
  grid.append(side,article);main.append(head,grid);
  // Only replace the old page once the whole replacement exists.
  document.body.replaceChildren(header,main);
  document.body.className='vishnu-vicara-page vishnu-full-reader-page';
  document.querySelector('link[href="/vivekadrishti/assets/css/site.css"]')?.remove();
  document.title='A Vaiṣṇava Lens on Viṣṇu — Viveka Dṛṣṭi';
  if(location.hash){const id=decodeURIComponent(location.hash.slice(1));document.getElementById(id)?.scrollIntoView()}
  console.info('Viṣṇu full reader: rendered',body.textContent.length,'characters and',headings.length,'headings; no sections hidden.');
})();