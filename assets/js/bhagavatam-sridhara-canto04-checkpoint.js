(() => {
  'use strict';
  // Chapter-scoped supplementary reader. Do not alter the verified Cantos 1–3 data.
  const reader = document.querySelector('[data-bhagavatam-reader][data-canto="4"]');
  if (!reader) return;
  const host = reader.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const pin = '100560de6c9f68c2875097d40a2012a84c784179';
  const sources = [
    '/vivekadrishti/assets/data/bhagavatam-sridhara-english-canto04-ch01.json',
    '/vivekadrishti/assets/data/bhagavatam-sridhara-english-canto04-ch01-second.json'
  ];
  const sanskritUrl = 'https://raw.githubusercontent.com/vishvAsa/purANam_vaiShNavam/' +
    pin + '/bhAgavatam/gauDIya-prastutiH/04/01.md';
  let englishRequest;
  let sanskritRequest;

  function addBlock(details, labelText, bodyText, language) {
    const wrapper = document.createElement('div');
    wrapper.className = 'sb-source-block gita-reveal';
    const label = document.createElement('strong');
    label.className = 'sb-source-label';
    label.textContent = labelText;
    const text = document.createElement('div');
    text.className = 'sb-source-content';
    if (language) text.lang = language;
    String(bodyText).split(/\n/).forEach((line, index) => {
      if (index) text.appendChild(document.createElement('br'));
      const span = document.createElement('span');
      span.textContent = line;
      text.appendChild(span);
    });
    wrapper.append(label, text);
    details.appendChild(wrapper);
  }

  function makeDetails(title, className) {
    const details = document.createElement('details');
    details.className = 'sb-details gita-details ' + className;
    const summary = document.createElement('summary');
    summary.textContent = title;
    details.appendChild(summary);
    return details;
  }

  function englishEntries() {
    if (!englishRequest) englishRequest = Promise.all(sources.map((source) =>
      fetch(source, { mode: 'cors', cache: 'force-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(source + ': HTTP ' + response.status);
          return response.json();
        })
        .then((data) => {
          if (data.source_commit !== pin || !Array.isArray(data.entries))
            throw new Error('Invalid source pin or entries in ' + source);
          return data.entries;
        })
    )).then((parts) => parts.flat()).catch((error) => {
      console.warn('Śrīdhara English checkpoints unavailable:', error);
      return [];
    });
    return englishRequest;
  }

  // This Sanskrit chapter duplicates its 4.1.31 heading and later skips 4.1.62.
  // Its 45–54 blocks also cross English verse boundaries. Assign only
  // independently inspected Śrīdhara glosses by their actual verse words.
  function mappedVerse(start, end, index31) {
    if (start === 31) return index31 === 1 ? 31 : 32;
    if (start >= 32 && start <= 44) return start + 1;
    if (start === 45 && end === 46) return 47;
    if (start >= 47 && start <= 49) return start + 2;
    if (start === 50 || start === 51) return 52;
    if (start === 52) return 53;
    if (start === 53 && end === 54) return 55;
    if (start >= 55 && start <= 61) return start + 1;
    return null;
  }

  function sourceAlignedSanskrit(markdown) {
    const result = new Map();
    const digits = { '०':'0','१':'1','२':'2','३':'3','४':'4',
      '५':'5','६':'6','७':'7','८':'8','९':'9' };
    const number = (value) => Number(Array.from(value).map((ch) => digits[ch] || ch).join(''));
    const marker = /\*\*॥\s*४\s*\.\s*१\s*\.\s*([०-९]+)(?:\s*[-–—]\s*([०-९]+))?\s*॥\*\*/g;
    const headings = Array.from(markdown.matchAll(marker));
    let seen31 = 0;
    headings.forEach((heading, index) => {
      const start = number(heading[1]);
      const end = number(heading[2] || heading[1]);
      if (start === 31) seen31 += 1;
      if (start < 31 || start > 61) return;
      const verse = mappedVerse(start, end, seen31);
      if (!verse) return;
      const body = markdown.slice(heading.index + heading[0].length,
        index + 1 < headings.length ? headings[index + 1].index : markdown.length);
      const label = body.match(/\*\*श्रीधर-स्वामी\s*\(भावार्थ-दीपिका\)\s*[:：]\s*(?:\*\*)?/);
      if (!label) return; // A different commentator or an explicit no-commentary marker.
      let gloss = body.slice(label.index + label[0].length).split(/\n\s*_{4,}/)[0];
      gloss = gloss.replace(/\[\^[^\]]+\]/g, '').replace(/\*\*/g, '')
        .replace(/\\([\\*_{}\[\]()#+\-.!])/g, '$1').trim();
      if (!gloss || /^न\s+(?:कतमेनापि\s+)?व्याख्यातम्/.test(gloss)) return;
      result.set(verse, gloss);
    });
    if (seen31 !== 2 || !result.has(31) || !result.has(32) || !result.has(62))
      throw new Error('Pinned Sanskrit verse alignment does not match the audited chapter');
    return result;
  }

  function sanskritEntries() {
    if (!sanskritRequest) sanskritRequest = fetch(sanskritUrl, { mode: 'cors', cache: 'force-cache' })
      .then((response) => {
        if (!response.ok) throw new Error('Pinned Sanskrit HTTP ' + response.status);
        return response.text();
      })
      .then(sourceAlignedSanskrit)
      .catch((error) => {
        console.warn('Source-aligned Śrīdhara Sanskrit unavailable:', error);
        return new Map();
      });
    return sanskritRequest;
  }

  function apply() {
    const shell = host.querySelector('.sb-chapter-shell[data-chapter="1"]');
    if (!shell || !shell.querySelector('.sb-verse-section')) return;
    // Remove only the upstream misnumbered blocks, never an aligned replacement.
    shell.querySelectorAll('.sb-verse-section').forEach((section) => {
      const match = section.id.match(/^sb-4-1-(\d+)(?:-(\d+))?$/);
      if (!match) return;
      const first = Number(match[1]);
      const last = Number(match[2] || match[1]);
      if (first <= 62 && last >= 31) {
        section.querySelectorAll('.sb-bhasya:not(.sb-source-aligned)')
          .forEach((details) => details.remove());
      }
    });
    Promise.all([englishEntries(), sanskritEntries()]).then(([entries, sanskrit]) => {
      if (!shell.isConnected) return;
      shell.querySelectorAll('.sb-verse-section').forEach((section) => {
        const match = section.id.match(/^sb-4-1-(\d+)(?:-(\d+))?$/);
        if (!match) return;
        const first = Number(match[1]);
        const last = Number(match[2] || match[1]);
        const controls = section.querySelector('.gita-controls');
        if (!controls) return;
        const translated = entries.filter((entry) =>
          Number(entry.start) <= last && Number(entry.end) >= first);
        if (translated.length && !controls.querySelector('.sb-literal-details')) {
          const details = makeDetails('Śrīdhara English', 'sb-literal-details');
          translated.forEach((entry) => addBlock(details, 'Literal rendering · ŚB 4.1.' +
            entry.start + (entry.end === entry.start ? '' : '–' + entry.end), entry.text));
          controls.appendChild(details);
        }
        if (first <= 62 && last >= 31 && !controls.querySelector('.sb-source-aligned')) {
          const aligned = [];
          for (let verse = Math.max(first, 31); verse <= Math.min(last, 62); verse += 1) {
            if (sanskrit.has(verse)) aligned.push([verse, sanskrit.get(verse)]);
          }
          if (aligned.length) {
            const details = makeDetails('Śrīdhara Sanskrit', 'sb-bhasya sb-source-aligned');
            aligned.forEach(([verse, gloss]) => addBlock(details, 'ŚB 4.1.' + verse +
              ' · Śrīdhara Svāmī — Bhāvārtha-dīpikā', gloss, 'sa-Deva'));
            controls.appendChild(details);
          }
        }
      });
    });
  }
  new MutationObserver(apply).observe(host, { childList: true, subtree: true });
  apply();
})();
