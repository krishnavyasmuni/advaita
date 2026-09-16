(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
  const host = root && root.querySelector('[data-bhagavatam-host]');
  if (!host) return;

  const commit = '100560de6c9f68c2875097d40a2012a84c784179';
  const files = [
    'bhagavatam-sridhara-wfw-canto11-ch01-verses08-10.json',
    'bhagavatam-sridhara-wfw-canto11-ch01-verses11-24.json'
  ];
  const records = Promise.all(files.map(async name => {
    try {
      const response = await fetch('/vivekadrishti/assets/data/' + name + '?v=20260916-3', {cache: 'no-cache'});
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const data = await response.json();
      if (data.source_commit !== commit || !Array.isArray(data.entries)) throw new Error('source/checkpoint mismatch');
      return data.entries;
    } catch (error) {
      console.warn('Could not load Śrīdhara commentary checkpoint ' + name, error);
      return [];
    }
  })).then(groups => groups.flat());

  const style = document.createElement('style');
  style.textContent = '.sb-reviewed-gloss{margin-top:13px}.sb-reviewed-gloss summary{cursor:pointer}.sb-reviewed-gloss-grid{padding:8px 14px}.sb-reviewed-gloss-row{display:grid;grid-template-columns:minmax(110px,1fr) 1.6fr;gap:10px;padding:8px 0;border-bottom:1px solid #e3dcd2;line-height:1.6}.sb-reviewed-gloss-row strong{color:#65516f;font-weight:500}.sb-reviewed-note{padding:10px 13px;background:#fffaf2;border-left:3px solid #ab8a62;font-size:13px;line-height:1.65}@media(max-width:560px){.sb-reviewed-gloss-row{grid-template-columns:1fr;gap:2px}}';
  document.head.append(style);

  function panel(label, text, cls, lang) {
    const details = document.createElement('details');
    details.className = 'sb-details gita-details sb-reviewed-gloss ' + cls;
    const summary = document.createElement('summary');
    summary.textContent = label;
    const body = document.createElement('div');
    body.className = 'sb-source-content gita-reveal';
    body.style.whiteSpace = 'pre-line';
    if (lang) body.lang = lang;
    body.textContent = text;
    details.append(summary, body);
    return details;
  }
  function appendEntry(entry) {
    if (entry.canto !== 11 || entry.chapter !== 1 || !Number.isInteger(entry.start) || !Number.isInteger(entry.end) || !entry.sanskrit || !entry.literal_english || !Array.isArray(entry.word_for_word)) return;
    const shell = host.querySelector('.sb-chapter-shell[data-chapter="1"]');
    if (!shell) return;
    const id = '#sb-11-1-' + entry.start + (entry.end !== entry.start ? '-' + entry.end : '');
    const section = shell.querySelector(id) || shell.querySelector('#sb-11-1-' + entry.start);
    const controls = section && section.querySelector('.gita-controls');
    if (!controls || controls.querySelector('[data-sridhara-reviewed-range="' + entry.start + '-' + entry.end + '"]')) return;
    const range = entry.start === entry.end ? String(entry.start) : entry.start + '–' + entry.end;
    const container = document.createElement('div');
    container.dataset.sridharaReviewedRange = entry.start + '-' + entry.end;
    container.append(panel('Śrīdhara Sanskrit · 11.1.' + range, entry.sanskrit, 'sb-bhasya', 'sa-Deva'));
    const words = document.createElement('details');
    words.className = 'sb-details gita-details sb-reviewed-gloss sb-sridhara-wfw';
    const summary = document.createElement('summary');
    summary.textContent = 'Śrīdhara commentary · word / phrase meanings';
    const grid = document.createElement('div');
    grid.className = 'sb-reviewed-gloss-grid';
    entry.word_for_word.forEach(pair => {
      if (!Array.isArray(pair) || pair.length !== 2) return;
      const row = document.createElement('div');
      row.className = 'sb-reviewed-gloss-row';
      const word = document.createElement('strong');
      word.lang = 'sa-Deva';
      word.textContent = pair[0];
      const meaning = document.createElement('span');
      meaning.textContent = pair[1];
      row.append(word, meaning);
      grid.append(row);
    });
    words.append(summary, grid);
    container.append(words, panel('Śrīdhara commentary · literal English', entry.literal_english, 'sb-literal-details'));
    if (entry.attribution || entry.note) {
      const note = document.createElement('p');
      note.className = 'sb-reviewed-note';
      note.textContent = [entry.attribution ? 'Source attribution: ' + entry.attribution + '.' : '', entry.note || ''].filter(Boolean).join(' ');
      container.append(note);
    }
    controls.append(container);
  }
  let scheduled = false;
  function apply() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      records.then(entries => entries.forEach(appendEntry));
    });
  }
  new MutationObserver(apply).observe(host, {childList: true, subtree: true});
  apply();
})();