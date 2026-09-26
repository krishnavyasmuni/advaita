(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
  const host = root && root.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const url = 'https://raw.githubusercontent.com/vishvAsa/purANam_vaiShNavam/100560de6c9f68c2875097d40a2012a84c784179/bhAgavatam/gauDIya-prastutiH/11/01_vipra-shApaH.md';
  const digits = '०१२३४५६७८९';
  function number(value) { return Number([...value].map(char => digits.indexOf(char)).join('')); }
  const source = fetch(url, {cache: 'force-cache'})
    .then(response => { if (!response.ok) throw Error('Sanskrit source HTTP ' + response.status); return response.text(); })
    .then(markdown => {
      const marker = /\*{0,2}॥\s*११\s*\.\s*१\s*\.\s*([०-९]+)(?:\s*[-–—]\s*([०-९]+))?\s*॥\*{0,2}/g;
      const found = Array.from(markdown.matchAll(marker));
      if (found.length < 18) throw Error('Chapter verse markers incomplete: ' + found.length);
      return found.map(match => {
        const after = markdown.slice(match.index + match[0].length);
        const end = after.indexOf('॥');
        if (end < 0) return null;
        const verse = after.slice(0, end + 2)
          .replace(/\[\^[^\]]+\]/g, '')
          .replace(/\*{1,2}/g, '')
          .replace(/\\([\[\]])/g, '$1')
          .replace(/[ \t]+\n/g, '\n')
          .replace(/\n{3,}/g, '\n\n')
          .trim();
        if (!verse || /श्रीधर-स्वामी|जीव-गोस्वामी|विश्वनाथ-चक्रवर्ती/.test(verse) || !/[अ-ह]/.test(verse)) return null;
        return {start: number(match[1]), end: number(match[2] || match[1]), verse};
      }).filter(Boolean);
    }).catch(error => { console.warn('Pinned Bhagavatam Sanskrit could not be applied; leaving existing verse text in place.', error); return []; });
  let busy = false;
  function apply() {
    if (busy) return;
    busy = true;
    queueMicrotask(() => {
      busy = false;
      source.then(verses => {
        const shell = host.querySelector('.sb-chapter-shell[data-chapter="1"]');
        if (!shell) return;
        verses.forEach(entry => {
          const key = 'sb-11-1-' + entry.start + (entry.end !== entry.start ? '-' + entry.end : '');
          const section = shell.querySelector('#' + key);
          const node = section && section.querySelector('.sb-devanagari');
          if (!node || node.dataset.sridharaPrimaryWitness === '1') return;
          node.textContent = entry.verse;
          node.style.whiteSpace = 'pre-line';
          node.dataset.sridharaPrimaryWitness = '1';
          node.title = 'Bhāgavatam verse Sanskrit transcribed in pinned primary Sanskrit witness; not independently collated against print.';
        });
      });
    });
  }
  new MutationObserver(apply).observe(host, {childList: true, subtree: true});
  apply();
})();