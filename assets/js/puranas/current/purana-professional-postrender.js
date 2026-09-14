(() => {
  const root = document.getElementById('mahapurana-standalone');
  if (!root) return;

  const ROUTES = {
    'brahma-purana':'Brahma Purāṇa','padma-purana':'Padma Purāṇa','vishnu-purana':'Viṣṇu Purāṇa',
    'vayu-purana':'Vāyu Purāṇa','shiva-purana':'Śiva Purāṇa','bhagavata-purana':'Bhāgavata Purāṇa',
    'devi-bhagavata-purana':'Devī Bhāgavata Purāṇa','naradiya-purana':'Nāradīya Purāṇa',
    'markandeya-purana':'Mārkaṇḍeya Purāṇa','agni-purana':'Agni Purāṇa','bhavishya-purana':'Bhaviṣya Purāṇa',
    'brahmavaivarta-purana':'Brahmavaivarta Purāṇa','varaha-purana':'Varāha Purāṇa','linga-purana':'Liṅga Purāṇa',
    'skanda-purana':'Skanda Purāṇa','vamana-purana':'Vāmana Purāṇa','kurma-purana':'Kūrma Purāṇa',
    'matsya-purana':'Matsya Purāṇa','garuda-purana':'Garuḍa Purāṇa','brahmanda-purana':'Brahmāṇḍa Purāṇa'
  };
  const slug = location.pathname.split('/').filter(Boolean).pop() || '';
  const name = ROUTES[slug];
  if (!name) return;

  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const arr = v => Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
  const plain = x => typeof x === 'string' ? x : (x?.claim || x?.text || x?.full || x?.summary || x?.description || x?.note || x?.title || x?.citation || x?.name || '');
  const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
  const uniq = values => {
    const seen = new Set();
    return values.flatMap(arr).map(plain).map(x => String(x || '').trim()).filter(x => {
      const k = norm(x);
      if (!k || seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  };

  const getSection = title => [...root.querySelectorAll('.mahapurana-article-section')]
    .find(s => norm(s.querySelector(':scope > h2')?.textContent) === norm(title));

  const sourceToLi = source => {
    const title = source.title || source.citation || source.name || plain(source) || 'Source';
    const detail = source.detail || source.description || source.note || '';
    const url = /^https?:\/\//i.test(String(source.url || source.href || '')) ? String(source.url || source.href) : '';
    return `<li>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><b>${esc(title)}</b></a>` : `<b>${esc(title)}</b>`}${detail ? ` — ${esc(detail)}` : ''}</li>`;
  };

  const renderParas = values => uniq(values).map(p => `<p>${esc(p)}</p>`).join('');
  const renderBullets = values => {
    const xs = uniq(values);
    return xs.length ? `<ul>${xs.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  };

  function makeSection(title, html, className='') {
    if (!html || !html.trim()) return null;
    const section = document.createElement('section');
    section.className = `kena-section purana-full-section mahapurana-article-section ${className}`.trim();
    section.innerHTML = `<h2>${esc(title)}</h2><div class="mahapurana-collapse-body">${html}</div>`;
    return section;
  }

  function insertBeforeReferences(section){
    if (!section) return;
    const refs = getSection('References');
    if (refs) refs.parentNode.insertBefore(section, refs);
    else root.querySelector('.mahapurana-wiki-article')?.appendChild(section);
  }

  function rebuildToc(){
    const toc = root.querySelector('.kena-toc');
    if (!toc) return;
    const ol = toc.querySelector('ol');
    if (!ol) return;
    const sections = [...root.querySelectorAll('.mahapurana-article-section')];
    ol.innerHTML = sections.map((section,i) => {
      const id = `section-${i+1}`;
      section.id = id;
      const title = section.querySelector(':scope > h2')?.textContent?.trim() || `Section ${i+1}`;
      return `<li><a href="#${id}">${esc(title)}</a></li>`;
    }).join('');
  }

  function collectExisting(e){
    const articleSections = arr(e.articleSections);
    const sectionText = pattern => articleSections.filter(s => pattern.test(norm(s?.title))).flatMap(s => [s?.paragraphs,s?.text,s?.summary,s?.note,s?.bullets]);
    return {
      theology:uniq([e.profile,e.theology,e.philosophy,e.themes,e.teachings,sectionText(/theolog|philosoph|bhakti|vedanta|yoga|doctrine/)]),
      reception:uniq([e.reception,e.significance,e.commentaries,sectionText(/influence|reception|commentar|legacy|later use/)]),
      practice:uniq([e.ritualHistory,e.socialHistory,e.dharma,e.rituals,e.vratas,e.sacredGeography,e.pilgrimage,sectionText(/rite|ritual|dharma|social|custom|pilgrim|tirtha|vrata|temple|gift|funeral|shraddha|worship|festival/)]),
      manuscripts:uniq([e.criticalEdition,e.edition,e.primaryRecensions,e.primaryEvidence,sectionText(/manuscript|critical|edition|recension|textual|transmission|variant/)])
    };
  }

  function applyResearch(){
    const D = window.SCRIPTURE_DETAIL_DATA || {};
    const e = Object.assign({}, D[name] || {}, D['Purāṇa:' + name] || {});
    const final = (window.PURANA_FINAL_CORPUS || {})[name] || {};
    if (!e.professionalWiki && !Object.keys(final).length) return;

    const date = getSection('Date and textual history');
    if (date && !date.querySelector('.purana-evidence-box')) {
      const evidence = uniq([e.datingBasis,e.hazraNotes,final.externalAttestations]);
      if (evidence.length) {
        const box = document.createElement('aside');
        box.className = 'purana-evidence-box';
        box.innerHTML = `<h3>Chronology and external evidence</h3>${evidence.map(p => `<p>${esc(p)}</p>`).join('')}`;
        date.querySelector('.mahapurana-collapse-body')?.appendChild(box);
      }
    }

    const contentData = arr(e.articleSections).filter(s => norm(s?.title) === 'contents').slice(-1)[0];
    const contents = getSection('Contents');
    if (contents && contentData && arr(contentData.subsections || contentData.subs).length) {
      const body = contents.querySelector('.mahapurana-collapse-body');
      if (body && !body.dataset.professionalMap) {
        const intro = uniq([contentData.paragraphs,contentData.text,contentData.summary]);
        const subs = arr(contentData.subsections || contentData.subs);
        body.innerHTML = `${intro.map(p => `<p class="purana-map-note">${esc(p)}</p>`).join('')}${subs.map(sub => {
          const paras = uniq([sub.paragraphs,sub.text,sub.summary,sub.note]);
          const bullets = uniq([sub.bullets]);
          return `<div class="purana-textual-block"><h3>${esc(sub.title || sub.name || 'Textual block')}</h3>${paras.map(p => `<p>${esc(p)}</p>`).join('')}${bullets.length ? `<ul>${bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}</div>`;
        }).join('')}`;
        body.dataset.professionalMap = 'true';
      }
    }

    const existing = collectExisting(e);
    const synthesis = getSection('Theology, influence and practice');
    if (synthesis) {
      synthesis.querySelector(':scope > h2').textContent = 'Theology and philosophy';
      const body = synthesis.querySelector('.mahapurana-collapse-body');
      if (body) body.innerHTML = renderParas(existing.theology);
    } else if (existing.theology.length) {
      insertBeforeReferences(makeSection('Theology and philosophy',renderParas(existing.theology)));
    }

    if (!getSection('Textual relationships and parallels')) {
      const relationships = uniq([final.textualRelationships,e.dependencies]);
      if (relationships.length) insertBeforeReferences(makeSection('Textual relationships and parallels',renderParas(relationships),'purana-source-critical-section'));
    }

    if (!getSection('Manuscripts, recensions and editions')) {
      const manuscripts = uniq([final.manuscriptsEditions,existing.manuscripts]);
      if (manuscripts.length) insertBeforeReferences(makeSection('Manuscripts, recensions and editions',renderParas(manuscripts),'purana-source-critical-section'));
    }

    if (!getSection('Ritual, dharma and social history')) {
      const practice = uniq([existing.practice]);
      if (practice.length) insertBeforeReferences(makeSection('Ritual, dharma and social history',renderParas(practice)));
    }

    if (!getSection('Reception and commentary')) {
      const reception = uniq([final.commentaryReception,existing.reception]);
      if (reception.length) insertBeforeReferences(makeSection('Reception and commentary',renderParas(reception)));
    }

    const refs = getSection('References');
    if (refs) {
      const list = refs.querySelector('ol');
      if (list) {
        const before = norm(list.textContent || '');
        arr(e.sources).forEach(source => {
          const title = source?.title || source?.citation || source?.name || plain(source);
          if (title && !before.includes(norm(title).slice(0,36))) list.insertAdjacentHTML('beforeend', sourceToLi(source));
        });
        uniq([final.bibliography]).forEach(title => {
          const now = norm(list.textContent || '');
          if (!now.includes(norm(title).slice(0,42))) list.insertAdjacentHTML('beforeend', `<li><b>${esc(title)}</b></li>`);
        });
      }
      const editorial = refs.querySelector('.purana-editorial-method');
      if (!editorial) {
        refs.querySelector('.mahapurana-collapse-body')?.insertAdjacentHTML('beforeend',`<aside class="purana-editorial-method"><b>Editorial method.</b> Traditional attribution, received recension, manuscript witness, external quotation, verbal parallel, printed edition and modern critical edition are treated as different kinds of evidence. Dates are attached to identifiable textual strata wherever possible rather than to the canonical title as though it named a single authorial event.</aside>`);
      }
    }

    const toc = root.querySelector('.kena-toc');
    if (toc && !toc.querySelector('.purana-method-note')) {
      const note = document.createElement('div');
      note.className = 'purana-method-note';
      note.textContent = 'Numbering follows the stated recension. External quotations, manuscript variation and independent textual blocks are kept distinct from the received printed sequence.';
      toc.appendChild(note);
    }

    rebuildToc();
  }

  function loadScript(src){
    return new Promise((resolve,reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function loadResearch(){
    if (window.__PURANA_PROFESSIONAL_RESEARCH_LOADING__) return;
    window.__PURANA_PROFESSIONAL_RESEARCH_LOADING__ = true;
    try {
      await loadScript('/vivekadrishti/assets/js/puranas/current/purana-research-20260906.js?build=20260907-final-v1');
      await loadScript('/vivekadrishti/assets/js/puranas/current/purana-final-corpus-20260907.js?build=20260907-final-v1');
      applyResearch();
    } catch (err) {
      console.warn('Professional Purana research apparatus could not be fully loaded.',err);
      applyResearch();
    }
  }

  if (root.classList.contains('is-loaded')) loadResearch();
  else {
    const observer = new MutationObserver(() => {
      if (!root.classList.contains('is-loaded')) return;
      observer.disconnect();
      loadResearch();
    });
    observer.observe(root,{attributes:true,attributeFilter:['class'],childList:true,subtree:false});
  }
})();
