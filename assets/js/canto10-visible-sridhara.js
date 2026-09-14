(() => {
  const root = document.querySelector('[data-canto10-source-root]');
  if (!root) return;

  const setText = (node, text) => {
    if (node && node.textContent !== text) node.textContent = text;
  };

  function makeLayer(label, className, nodes = []) {
    const layer = document.createElement('div');
    layer.className = `sb-combined-layer ${className}`;
    const heading = document.createElement('div');
    heading.className = 'sb-layer-heading';
    heading.textContent = label;
    layer.appendChild(heading);
    nodes.filter(Boolean).forEach((node) => layer.appendChild(node));
    return layer;
  }

  function ensureWordForWord(section) {
    let details = section.querySelector(':scope > .sb-word-details, :scope > .sb-combined-word-details');
    if (!details) return null;
    details.classList.add('sb-details', 'sb-word-details', 'sb-combined-word-details');
    details.open = false;
    setText(details.querySelector(':scope > summary'), 'Word-for-word');

    if (!details.querySelector(':scope > .sb-bhagavatam-layer')) {
      const nodes = [];
      Array.from(details.querySelectorAll(':scope > .sb-source-block')).forEach((block) => {
        const content = block.querySelector(':scope > .sb-source-content');
        if (content) nodes.push(content);
        block.remove();
      });
      if (nodes.length) details.appendChild(makeLayer('Bhāgavatam', 'sb-bhagavatam-layer', nodes));
    }

    const source = section.querySelector(':scope > .sb-sridhara-wfw-details');
    if (source) {
      const content = source.querySelector('.sb-sridhara-word-for-word, .sb-source-content');
      if (content) {
        let layer = details.querySelector(':scope > .sb-sridhara-layer');
        if (!layer) {
          const paragraph = document.createElement('p');
          paragraph.className = 'sb-sridhara-word-for-word-content';
          paragraph.textContent = content.textContent.trim();
          layer = makeLayer('Śrīdhara', 'sb-sridhara-layer', [paragraph]);
          details.appendChild(layer);
        } else {
          const target = layer.querySelector('.sb-sridhara-word-for-word-content');
          if (target) target.textContent = content.textContent.trim();
        }
      }
      source.remove();
    }
    return details;
  }

  function normalizeTransliteration(section) {
    const details = section.querySelector(':scope > .sb-transliteration-details, :scope > .sb-combined-transliteration-details');
    if (!details) return null;
    details.classList.add('sb-details', 'sb-transliteration-details', 'sb-combined-transliteration-details');
    details.open = false;
    setText(details.querySelector(':scope > summary'), 'Transliteration');
    if (details.querySelector(':scope > .sb-bhagavatam-layer, :scope > .sb-sridhara-layer')) return details;

    Array.from(details.querySelectorAll(':scope > .sb-source-block')).forEach((block) => {
      const sourceLabel = block.querySelector(':scope > .sb-source-label')?.textContent || '';
      const content = block.querySelector(':scope > .sb-source-content');
      if (!content) { block.remove(); return; }
      const isSridhara = /Śrīdhara/i.test(sourceLabel);
      content.classList.add(isSridhara ? 'sb-sridhara-auto-transliteration' : 'sb-bhagavatam-transliteration-content');
      details.appendChild(makeLayer(isSridhara ? 'Śrīdhara' : 'Bhāgavatam', isSridhara ? 'sb-sridhara-layer' : 'sb-bhagavatam-layer', [content]));
      block.remove();
    });
    return details;
  }

  function normalizeSanskrit(section) {
    const details = section.querySelector(':scope > .sb-bhasya');
    if (!details) return null;
    details.classList.add('sb-details', 'sb-bhasya');
    details.open = false;
    setText(details.querySelector(':scope > summary'), 'Śrīdhara Sanskrit');
    setText(details.querySelector(':scope > .sb-source-block > .sb-source-label'), 'Bhāvārtha-dīpikā');
    return details;
  }

  function enforceOrder(section) {
    const translation = section.querySelector(':scope > .sb-translation');
    if (!translation) return;
    const word = ensureWordForWord(section);
    const transliteration = normalizeTransliteration(section);
    const sanskrit = normalizeSanskrit(section);
    const commentary = section.querySelector(':scope > .sb-commentary');

    let anchor = translation;
    [word, transliteration, sanskrit, commentary].filter(Boolean).forEach((node) => {
      if (anchor.nextElementSibling !== node) anchor.insertAdjacentElement('afterend', node);
      anchor = node;
    });

    section.querySelectorAll(':scope > .sb-sridhara-wfw-details').forEach((node) => node.remove());
  }

  function normalize(section) {
    if (!(section instanceof HTMLElement) || !section.matches('.sb-verse-section')) return;
    enforceOrder(section);
  }

  function scan(node = root) {
    if (node instanceof HTMLElement && node.matches('.sb-verse-section')) normalize(node);
    node.querySelectorAll?.('.sb-verse-section').forEach(normalize);
  }

  let scheduled = false;
  const scheduleScan = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      scan();
    });
  };

  const observer = new MutationObserver(scheduleScan);
  observer.observe(root, { childList: true, subtree: true, characterData: true });
  scan();
})();