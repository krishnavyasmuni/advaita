(() => {
  const PURANA_KINDS = new Set(['Mahāpurāṇa','Upapurāṇa','Both']);
  const previousOpen = window.openScriptureEncyclopedia;
  if (typeof previousOpen !== 'function') return;

  function refsFor(article) {
    const refs = [...article.querySelectorAll('#universal-references li, #scripture-references li, .kena-references li')];
    refs.forEach((li, i) => {
      if (!li.id) li.id = `purana-ref-${i + 1}`;
    });
    return refs;
  }

  function citationNumber(node) {
    const button = node.querySelector('button[data-universal-note], button[data-current-up-note], button[data-ch-note]');
    const raw = button?.dataset?.universalNote || button?.dataset?.currentUpNote || button?.dataset?.chNote || node.textContent;
    const n = Number(String(raw || '').replace(/\D+/g, ''));
    return Number.isFinite(n) && n > 0 ? n : 0;
  }

  function linkCitation(node, refs) {
    const n = citationNumber(node);
    if (!n) { node.remove(); return; }
    const li = refs[n - 1];
    const source = li?.querySelector('a[href]');
    const sup = document.createElement('sup');
    sup.className = 'universal-cite purana-clean-cite';
    const a = document.createElement('a');
    a.textContent = `[${n}]`;
    a.setAttribute('aria-label', `Source ${n}`);
    a.title = li?.textContent?.trim() || `Source ${n}`;
    if (source) {
      a.href = source.href;
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      const id = li?.id || `purana-ref-${n}`;
      a.href = `#${id}`;
    }
    sup.append(a);
    node.replaceWith(sup);
  }

  function cleanParagraphGroup(paragraphs, refs) {
    let kept = false;
    for (const p of paragraphs) {
      const cites = [...p.querySelectorAll(':scope > .universal-cite, :scope > .ch-cite')];
      if (!cites.length) continue;
      if (!kept) {
        linkCitation(cites[0], refs);
        cites.slice(1).forEach(c => c.remove());
        kept = true;
      } else {
        cites.forEach(c => c.remove());
      }
    }
  }

  function clean(article) {
    if (!article || article.dataset.puranaCitationCleanup === '1') return;
    article.dataset.puranaCitationCleanup = '1';
    const refs = refsFor(article);
    if (!refs.length) return;

    const lead = article.querySelector('.kena-lead');
    if (lead) cleanParagraphGroup([...lead.querySelectorAll(':scope > p')], refs);

    article.querySelectorAll('.kena-section').forEach(section => {
      if (section.matches('#universal-references, #scripture-references, .kena-references, .universal-references')) return;
      cleanParagraphGroup([...section.querySelectorAll('p')], refs);
    });

    article.querySelectorAll('.universal-cite button, .ch-cite button').forEach(button => {
      const sup = button.closest('.universal-cite, .ch-cite');
      if (sup) linkCitation(sup, refs);
    });
  }

  function apply() {
    const article = document.querySelector('.universal-wiki-article, .scripture-wiki-article');
    if (article) clean(article);
  }

  window.openScriptureEncyclopedia = function(button) {
    const isPurana = PURANA_KINDS.has(button?.dataset?.kind || '');
    const result = previousOpen(button);
    if (isPurana && result !== false) {
      apply();
      queueMicrotask(apply);
      setTimeout(apply, 50);
    }
    return result;
  };

  if (!document.getElementById('purana-citation-cleanup-style')) {
    const style = document.createElement('style');
    style.id = 'purana-citation-cleanup-style';
    style.textContent = `
      .purana-clean-cite{vertical-align:super!important;margin-left:2px!important}
      .purana-clean-cite a{color:#36c!important;text-decoration:none!important;font:12px/1 Arial,sans-serif!important;white-space:nowrap!important}
      .purana-clean-cite a:hover{text-decoration:underline!important}
    `;
    document.head.append(style);
  }

  window.SCRIPTURE_PURANA_CITATION_CLEANUP = true;
})();
