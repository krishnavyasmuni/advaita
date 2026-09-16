(() => {
  'use strict';
  // Distinguish the Bhāgavatam's Vedabase synonyms from Śrīdhara's own words.
  // Never label prose commentary as a finished word-for-word translation.
  const root = document.querySelector('[data-bhagavatam-reader]');
  if (!root) return;
  const host = root.querySelector('[data-bhagavatam-host]');
  const canto = Number(root.dataset.canto);
  if (!host || !Number.isInteger(canto)) return;

  const note = document.createElement('p');
  note.className = 'sb-gloss-coverage-note';
  note.textContent = 'Reading guide: “Bhāgavatam verse — word-for-word” means the verse synonyms, NOT Śrīdhara’s commentary. “Śrīdhara English” is a prose rendering of his commentary. Only explicitly marked verses have separately reviewed commentary word/phrase meanings; the remainder are not complete word-for-word.';
  const header = root.querySelector('.bhagavatam-reader-head');
  if (header) header.insertAdjacentElement('afterend', note);

  const style = document.createElement('style');
  style.textContent = '.sb-gloss-coverage-note,.sb-gloss-progress{max-width:652px;margin:12px auto 20px;padding:12px 14px;border-left:3px solid #a08a6d;background:#fffaf3;color:#4b4138;font:13px/1.6 Merriweather,Georgia,serif}.sb-gloss-progress{margin:12px auto 24px}.sb-gloss-pair{display:grid;grid-template-columns:minmax(120px,1fr) minmax(0,2fr);gap:12px;padding:8px 0;border-bottom:1px solid #e6ddd3;color:#403832;font:14px/1.6 Merriweather,Georgia,serif}.sb-gloss-pair strong{font-weight:500;color:#684e70}.sb-sridhara-wfw{margin:8px auto 16px!important}@media(max-width:580px){.sb-gloss-pair{grid-template-columns:1fr;gap:3px}}';
  document.head.appendChild(style);

  const reviewed = fetch('/vivekadrishti/assets/data/bhagavatam-sridhara-wfw-reviewed.json?v=20260916-2', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error('Reviewed word meanings HTTP ' + response.status);
      return response.json();
    })
    .then((data) => data.source_commit === '100560de6c9f68c2875097d40a2012a84c784179' && Array.isArray(data.entries) ? data.entries : [])
    .catch((error) => { console.warn('Reviewed Śrīdhara word meanings unavailable:', error); return []; });

  function range(section, chapter) {
    const match = section.id.match(/^sb-(\d+)-(\d+)-(\d+)(?:-(\d+))?$/);
    if (!match || Number(match[1]) !== canto || Number(match[2]) !== chapter) return null;
    return [Number(match[3]), Number(match[4] || match[3])];
  }

  function makeWfw(entry) {
    const details = document.createElement('details');
    details.className = 'sb-details gita-details sb-sridhara-wfw';
    details.open = true;
    const summary = document.createElement('summary');
    summary.textContent = 'Śrīdhara commentary — reviewed word/phrase meanings (' + canto + '.' + entry.chapter + '.' + entry.start + ')';
    const pairs = document.createElement('div');
    pairs.className = 'sb-gloss-pairs';
    entry.pairs.forEach((pair) => {
      if (!Array.isArray(pair) || pair.length !== 2) return;
      const line = document.createElement('div');
      line.className = 'sb-gloss-pair';
      const original = document.createElement('strong');
      original.lang = 'sa-Deva';
      original.textContent = pair[0];
      const meaning = document.createElement('span');
      meaning.textContent = pair[1];
      line.append(original, meaning);
      pairs.appendChild(line);
    });
    details.append(summary, pairs);
    return details;
  }

  function apply() {
    const shell = host.querySelector('.sb-chapter-shell[data-chapter]');
    if (!shell) return;
    const chapter = Number(shell.dataset.chapter);
    const sections = Array.from(shell.querySelectorAll('.sb-verse-section'));
    if (!sections.length) return;
    let translated = 0;
    sections.forEach((section) => {
      const verseWord = section.querySelector('.sb-word-details > summary');
      if (verseWord && verseWord.textContent !== 'Bhāgavatam verse — word-for-word')
        verseWord.textContent = 'Bhāgavatam verse — word-for-word';
      const sanskrit = section.querySelector('.sb-bhasya:not(.sb-sridhara-wfw) > summary');
      if (sanskrit && sanskrit.textContent !== 'Śrīdhara commentary — original Sanskrit')
        sanskrit.textContent = 'Śrīdhara commentary — original Sanskrit';
      const english = section.querySelector('.sb-literal-details');
      if (english) {
        translated += 1;
        const heading = english.querySelector('summary');
        if (heading && heading.textContent !== 'Śrīdhara commentary — English prose')
          heading.textContent = 'Śrīdhara commentary — English prose';
        if (!english.open) english.open = true;
      }
    });
    const contents = shell.querySelector('.sb-contents');
    let progress = shell.querySelector('.sb-gloss-progress');
    if (!progress && contents) {
      progress = document.createElement('p');
      progress.className = 'sb-gloss-progress';
      contents.insertAdjacentElement('afterend', progress);
    }
    reviewed.then((entries) => {
      if (!shell.isConnected || host.querySelector('.sb-chapter-shell') !== shell) return;
      const chapterEntries = entries.filter((entry) => Number(entry.canto) === canto && Number(entry.chapter) === chapter);
      sections.forEach((section) => {
        if (section.querySelector('.sb-sridhara-wfw')) return;
        const bounds = range(section, chapter);
        const controls = section.querySelector('.gita-controls');
        if (!bounds || !controls) return;
        chapterEntries.filter((entry) => Number(entry.start) <= bounds[1] && Number(entry.end) >= bounds[0])
          .forEach((entry) => controls.appendChild(makeWfw(entry)));
      });
      if (progress) {
        const count = sections.filter((section) => section.querySelector('.sb-sridhara-wfw')).length;
        const englishCount = sections.filter((section) => section.querySelector('.sb-literal-details')).length;
        const message = 'This chapter: ' + englishCount + '/' + sections.length + ' displayed verse records have a Śrīdhara English prose panel; ' + count + '/' + sections.length + ' have reviewed Śrīdhara commentary word/phrase meanings. A missing panel is NOT a completed translation.';
        if (progress.textContent !== message) progress.textContent = message;
      }
    });
  }

  new MutationObserver(apply).observe(host, { childList: true, subtree: true });
  apply();
})();
