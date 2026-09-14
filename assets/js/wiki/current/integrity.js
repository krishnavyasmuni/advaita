(() => {
  const previousOpen = window.openScriptureEncyclopedia;
  if (typeof previousOpen !== 'function') return;

  const D = window.SCRIPTURE_DETAIL_DATA || {};
  const GENERIC_IMG = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_monk_meditates_under_a_tree.jpg';
  const SKIP_NAMES = new Set(['Kena','Chāndogya','Mahābhārata','Rāmāyaṇa']);
  const BAD_CAPTION = /not claimed|representative .*?(manuscript|image)|display (image|placeholder)|textual witness|edition witness|placeholder/i;

  const arr = v => Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
  const plain = x => typeof x === 'string' ? x : (x?.text || x?.claim || x?.summary || x?.full || x?.short || x?.description || x?.note || x?.title || '');
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const slug = s => norm(s).replace(/\s+/g,'-') || 'section';
  const uniq = xs => {
    const seen = new Set();
    return xs.map(plain).map(x => String(x || '').trim()).filter(x => {
      const k = norm(x); if (!k || seen.has(k)) return false; seen.add(k); return true;
    });
  };

  function dataFor(name, kind) {
    const keys = [name];
    if (kind === 'Upaniṣad') keys.push(`Upaniṣad:${name}`);
    if (kind === 'Mahāpurāṇa' || kind === 'Upapurāṇa' || kind === 'Both') keys.push(`Purāṇa:${name}`);
    if (['Saṃhitā','Brāhmaṇa','Āraṇyaka'].includes(kind)) keys.push(`Vedic:${name}`);
    if (kind === 'Smṛti') keys.push(`Smṛti:${name}`);
    if (kind === 'Vedāṅga') keys.push(`Vedāṅga:${name}`);
    return Object.assign({}, ...keys.map(k => D[k] || {}));
  }

  function articleFor() {
    return document.querySelector('.current-up-article, .purana-full-article, .universal-wiki-article, .scripture-wiki-article, .kena-article article');
  }

  function hasHeading(article, title) {
    const n = norm(title);
    return [...article.querySelectorAll('h2')].some(h => {
      const x = norm(h.textContent); return x === n || x.includes(n) || n.includes(x);
    });
  }

  function insertBeforeRefs(article, sec) {
    const refs = article.querySelector('#purana-references,#universal-references,#cup-refs,#scripture-references,.kena-references,.universal-references');
    if (refs) refs.before(sec); else article.append(sec);
  }

  function paragraph(t) {
    const p = document.createElement('p'); p.textContent = plain(t); return p;
  }

  function addSection(article, title, paragraphs = [], subs = [], bullets = []) {
    if (!title || hasHeading(article, title)) return null;
    const ps = uniq(paragraphs), bs = uniq(bullets);
    const cleanSubs = arr(subs).map((s,i) => ({
      title: s?.title || s?.h || s?.name || `Subsection ${i+1}`,
      paragraphs: uniq(arr(s?.paragraphs || s?.ps || s?.text || [s?.summary, s?.description, s?.note])),
      bullets: uniq(arr(s?.bullets))
    })).filter(s => s.paragraphs.length || s.bullets.length);
    if (!ps.length && !bs.length && !cleanSubs.length) return null;

    const sec = document.createElement('section');
    sec.className = 'kena-section ch-section wiki-final-section';
    sec.id = `wiki-final-${slug(title)}-${Math.random().toString(36).slice(2,7)}`;
    const h2 = document.createElement('h2'); h2.textContent = title; sec.append(h2);
    ps.forEach(t => sec.append(paragraph(t)));
    if (bs.length) {
      const ul = document.createElement('ul'); bs.forEach(t => { const li=document.createElement('li'); li.textContent=t; ul.append(li); }); sec.append(ul);
    }
    cleanSubs.forEach((s,i) => {
      const h3 = document.createElement('h3'); h3.id = `${sec.id}-${i+1}`; h3.textContent = s.title; sec.append(h3);
      s.paragraphs.forEach(t => sec.append(paragraph(t)));
      if (s.bullets.length) { const ul=document.createElement('ul'); s.bullets.forEach(t=>{const li=document.createElement('li');li.textContent=t;ul.append(li);});sec.append(ul); }
    });
    insertBeforeRefs(article, sec);
    return sec;
  }

  function exposeResearch(article, e) {
    arr(e.articleSections).forEach((s, i) => {
      if (!s?.title || hasHeading(article, s.title)) return;
      const subs = [];
      arr(s.books).forEach((b, j) => {
        if (typeof b === 'string') subs.push({title:`Part ${j+1}`,paragraphs:[b]});
        else subs.push({title:`${b.number ? b.number + ' — ' : ''}${b.title || b.name || `Part ${j+1}`}`,paragraphs:[b.summary,b.text,b.description,b.note]});
      });
      arr(s.subsections).forEach(sub => subs.push(sub));
      addSection(article, s.title, arr(s.paragraphs || s.text), subs, arr(s.bullets));
    });

    if (e.period && ![...article.querySelectorAll('h2')].some(h => /date|chronolog|composition|formation/i.test(h.textContent))) {
      addSection(article, 'Date, composition and textual formation', [e.period,e.milieu,e.history,e.datingBasis,e.status]);
    }
    if ((e.manuscripts || arr(e.primaryRecensions).length || arr(e.dependencies).length) && ![...article.querySelectorAll('h2')].some(h => /manuscript|recension|transmission|edition/i.test(h.textContent))) {
      addSection(article, 'Manuscripts, recensions and transmission', [e.manuscripts, arr(e.primaryRecensions).length ? `Major recensions or textual organizations: ${arr(e.primaryRecensions).map(plain).join('; ')}.` : '', ...arr(e.dependencies)]);
    }
    const contentBits = uniq([...arr(e.chapterMap),...arr(e.contents),...arr(e.keyContents),...arr(e.namedFeatures),...arr(e.primaryPassages),...arr(e.primaryEvidence)]);
    if (contentBits.length && ![...article.querySelectorAll('h2')].some(h => /structure|contents|book|chapter|skandha|khanda|khaṇḍa|section by section/i.test(h.textContent))) {
      addSection(article, 'Detailed structure, contents and key passages', [e.structure,e.extent], [], contentBits);
    }
    const thought = uniq([e.profile,e.ritualHistory,...arr(e.themes),...arr(e.teachings)]);
    if (thought.length && ![...article.querySelectorAll('h2')].some(h => /theolog|teaching|philosoph|doctrine|religious|ritual/i.test(h.textContent))) {
      addSection(article, 'Teachings, theology and religious practice', thought);
    }
    const rec = uniq([e.reception,e.significance,e.hazraNotes,...arr(e.scholarlyDebates)]);
    if (rec.length && ![...article.querySelectorAll('h2')].some(h => /reception|commentar|scholar|influence/i.test(h.textContent))) {
      addSection(article, 'Commentaries, reception and scholarship', rec);
    }
  }

  function cleanCaptions(article) {
    article.querySelectorAll('figcaption').forEach(c => {
      const t = c.textContent.trim();
      if (!t || BAD_CAPTION.test(t)) c.remove();
    });
  }

  function citationNodes(p) {
    return [...p.querySelectorAll(':scope > sup, :scope > a.citation, :scope > .citation')].filter(n => /\d/.test(n.textContent));
  }
  function cleanCitations(article) {
    const blocks = [article.querySelector('.kena-lead,.ch-lead'), ...article.querySelectorAll('.kena-section,.ch-section')].filter(Boolean);
    blocks.forEach(block => {
      const seen = new Set();
      [...block.querySelectorAll('p')].forEach((p, index) => {
        const nodes = citationNodes(p);
        if (!nodes.length) return;
        if (nodes.length > 2) nodes.slice(2).forEach(n => n.remove());
        const now = citationNodes(p);
        const sig = now.map(n => n.textContent.replace(/\s/g,'')).join('');
        if (!sig) return;
        if (seen.has(sig) && index > 0) now.forEach(n => n.remove());
        else seen.add(sig);
      });
    });
  }

  function ensureImage(article, name) {
    const box = article.querySelector('.kena-infobox,.ch-infobox,.universal-infobox,.wiki-infobox');
    if (!box) return;
    let img = box.querySelector('img');
    if (!img) {
      const fig=document.createElement('figure'); fig.className='wiki-final-fallback-image';
      img=document.createElement('img'); img.src=GENERIC_IMG; img.loading='lazy'; img.alt='';
      fig.append(img);
      const title=box.querySelector('.kena-infobox-title,.wiki-infobox-title');
      const dev=box.querySelector('.ch-dev,.universal-devanagari,.up-title-dev');
      (dev || title)?.insertAdjacentElement('afterend',fig);
      if (!fig.isConnected) box.prepend(fig);
    }
    img.onerror = () => { img.onerror = null; img.src = GENERIC_IMG; img.closest('figure')?.querySelector('figcaption')?.remove(); };
    if (!img.getAttribute('alt')) img.alt = name ? `${name} illustration` : 'Scripture illustration';
  }

  function referencesFrom(e) {
    const items=[...arr(e.sources),...arr(e.bibliography),...arr(e.primarySources),...arr(e.references)];
    const seen=new Set();
    return items.map(x => typeof x==='string'?{title:x,url:''}:{title:x?.title||x?.citation||plain(x),url:x?.url||x?.href||'',detail:x?.detail||x?.note||''}).filter(s => {
      const k=norm(s.title+' '+s.url); if(!k||seen.has(k))return false; seen.add(k); return true;
    });
  }
  function ensureReferences(article,e) {
    if (article.querySelector('#purana-references,#universal-references,#cup-refs,#scripture-references,.kena-references,.universal-references')) return;
    const refs=referencesFrom(e); if(!refs.length)return;
    const sec=document.createElement('section'); sec.className='kena-section ch-section kena-references wiki-final-references'; sec.id='wiki-final-references';
    sec.innerHTML=`<h2>References</h2><ol>${refs.map((s,i)=>`<li id="wiki-final-ref-${i+1}"><b>${i+1}.</b> ${esc(s.title)}${s.detail?` — ${esc(s.detail)}`:''}${s.url?` <a href="${esc(s.url)}" target="_blank" rel="noopener">Open source ↗</a>`:''}</li>`).join('')}</ol>`;
    article.append(sec);
  }

  function rebuildToc(article) {
    let toc=article.querySelector('.kena-toc,.ch-toc,.universal-toc,.wiki-toc');
    const sections=[...article.querySelectorAll(':scope > .kena-section, :scope > .ch-section, :scope > section')].filter(s => s.querySelector(':scope > h2'));
    if (!sections.length) return;
    if (!toc) {
      toc=document.createElement('nav'); toc.className='kena-toc ch-toc wiki-final-toc'; toc.setAttribute('aria-label','Contents');
      toc.innerHTML='<div class="kena-toc-title">Contents</div><ol></ol>';
      const lead=article.querySelector('.kena-lead,.ch-lead'); if(lead) lead.after(toc); else article.prepend(toc);
    }
    let ol=toc.querySelector(':scope > ol'); if(!ol){ol=document.createElement('ol');toc.append(ol);} ol.innerHTML='';
    const used=new Set();
    sections.forEach((sec,i)=>{
      const h2=sec.querySelector(':scope > h2'); if(!h2)return;
      if(!sec.id){let base=`wiki-${slug(h2.textContent)}`,id=base,n=2;while(used.has(id)||document.getElementById(id)){id=`${base}-${n++}`;}sec.id=id;} used.add(sec.id);
      const li=document.createElement('li'); li.innerHTML=`<a href="#${esc(sec.id)}">${esc(h2.textContent.trim())}</a>`;
      const h3s=[...sec.querySelectorAll(':scope > h3')];
      if(h3s.length){const sub=document.createElement('ol');h3s.forEach((h3,j)=>{if(!h3.id)h3.id=`${sec.id}-${j+1}`;const sli=document.createElement('li');sli.innerHTML=`<a href="#${esc(h3.id)}">${esc(h3.textContent.trim())}</a>`;sub.append(sli);});li.append(sub);}
      ol.append(li);
    });
  }

  function ensureVishnuStyle() {
    if (document.getElementById('vishnu-purana-varna-skin')) return;
    const link=document.createElement('link');
    link.id='vishnu-purana-varna-skin';
    link.rel='stylesheet';
    link.href='/vivekadrishti/assets/css/puranas/current/vishnu-purana.css?build=20260826-1030';
    document.head.append(link);
  }

  function curateVishnu(article) {
    ensureVishnuStyle();
    const reader=article.closest('.kena-article-reader,.scripture-wiki-reader,.universal-wiki-reader,.purana-full-reader');
    reader?.classList.add('vishnu-purana-reader');
    article.classList.add('vishnu-purana-scholarly');

    const allowed=new Set([
      'date of composition','structure','contents','theology','critical edition',
      'influences and reception','rites dharma and social history','further reading','references'
    ]);
    [...article.querySelectorAll(':scope > section')].forEach(sec=>{
      const h2=sec.querySelector(':scope > h2');
      if(!h2)return;
      const key=norm(h2.textContent);
      if(!allowed.has(key))sec.remove();
    });

    const eyebrow=reader?.querySelector('.kena-article-head .eyebrow');
    if(eyebrow)eyebrow.textContent='Mahāpurāṇa · textual history and contents';
    rebuildToc(article);
    article.dataset.vishnuCurated='1';
  }

  function integrity(button) {
    const name=button?.dataset?.name || button?.querySelector?.('span')?.textContent?.trim() || '';
    const kind=button?.dataset?.kind || '';
    if (SKIP_NAMES.has(name) || kind === 'Itihāsa') return;
    const article=articleFor(); if(!article)return;
    const e=dataFor(name,kind);
    exposeResearch(article,e);
    cleanCaptions(article);
    cleanCitations(article);
    ensureImage(article,name);
    ensureReferences(article,e);
    rebuildToc(article);
    if(name==='Viṣṇu Purāṇa') curateVishnu(article);
    article.dataset.wikiIntegrity='1';
  }

  window.openScriptureEncyclopedia=function(button){
    const result=previousOpen(button);
    queueMicrotask(()=>integrity(button));
    setTimeout(()=>integrity(button),180);
    setTimeout(()=>integrity(button),900);
    return result;
  };
})();