(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader][data-canto="11"]');
  const host = root && root.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const names = [
    'bhagavatam-sridhara-wfw-canto11-ch02-verses01-10.json',
    'bhagavatam-sridhara-wfw-canto11-ch02-verses11-21.json',
    'bhagavatam-sridhara-wfw-canto11-ch02-verses22-31.json',
    'bhagavatam-sridhara-wfw-canto11-ch02-verses32-34.json'
  ];
  const data = Promise.all(names.map(name => fetch('/vivekadrishti/assets/data/' + name + '?v=20260916-4', {cache: 'no-cache'})
    .then(response => {if (!response.ok) throw Error('Śrīdhara 11.2 source HTTP ' + response.status); return response.json();})
    .then(doc => doc.source_commit === '100560de6c9f68c2875097d40a2012a84c784179' && Array.isArray(doc.entries) ? doc.entries : [])
    .catch(error => {console.warn('Śrīdhara 11.2 commentary checkpoint unavailable: ' + name, error); return [];})))
    .then(groups => groups.flat());
  const style = document.createElement('style');
  style.textContent = '.sb-reviewed-gloss{margin-top:13px}.sb-reviewed-gloss summary{cursor:pointer}.sb-reviewed-gloss-grid{padding:8px 14px}.sb-reviewed-gloss-row{display:grid;grid-template-columns:minmax(110px,1fr) 1.6fr;gap:10px;padding:8px 0;border-bottom:1px solid #e3dcd2;line-height:1.6}.sb-reviewed-gloss-row strong{color:#65516f;font-weight:500}.sb-reviewed-note{padding:10px 13px;background:#fffaf2;border-left:3px solid #ab8a62;font-size:13px;line-height:1.65}@media(max-width:560px){.sb-reviewed-gloss-row{grid-template-columns:1fr;gap:2px}}';
  document.head.append(style);
  function panel(label, value, css, lang) {
    const details = document.createElement('details');
    details.className = 'sb-details gita-details sb-reviewed-gloss ' + css;
    const summary = document.createElement('summary');
    summary.textContent = label;
    const body = document.createElement('div');
    body.className = 'sb-source-content gita-reveal';
    body.style.whiteSpace = 'pre-line';
    if (lang) body.lang = lang;
    body.textContent = value;
    details.append(summary, body);
    return details;
  }
  function applyEntry(entry) {
    if (entry.canto !== 11 || entry.chapter !== 2 || !Number.isInteger(entry.start) || !entry.sanskrit || !entry.literal_english || !Array.isArray(entry.word_for_word)) return;
    const shell = host.querySelector('.sb-chapter-shell[data-chapter="2"]');
    if (!shell) return;
    const suffix = entry.end !== entry.start ? '-' + entry.end : '';
    const section = shell.querySelector('#sb-11-2-' + entry.start + suffix) || shell.querySelector('#sb-11-2-' + entry.start);
    const controls = section && section.querySelector('.gita-controls');
    if (!controls || controls.querySelector('[data-sridhara-reviewed-ch02="' + entry.start + '"]')) return;
    const container = document.createElement('div');
    container.dataset.sridharaReviewedCh02 = String(entry.start);
    const verseLabel = entry.start === entry.end ? String(entry.start) : entry.start + '–' + entry.end;
    container.append(panel('Śrīdhara Sanskrit · 11.2.' + verseLabel, entry.sanskrit, 'sb-bhasya', 'sa-Deva'));
    const words = document.createElement('details');
    words.className = 'sb-details gita-details sb-reviewed-gloss sb-sridhara-wfw';
    const heading = document.createElement('summary');
    heading.textContent = 'Śrīdhara commentary · word / phrase meanings';
    const grid = document.createElement('div');
    grid.className = 'sb-reviewed-gloss-grid';
    entry.word_for_word.forEach(pair => {
      if (!Array.isArray(pair) || pair.length !== 2) return;
      const row = document.createElement('div');
      row.className = 'sb-reviewed-gloss-row';
      const sanskrit = document.createElement('strong');
      sanskrit.lang = 'sa-Deva';
      sanskrit.textContent = pair[0];
      const english = document.createElement('span');
      english.textContent = pair[1];
      row.append(sanskrit, english);
      grid.append(row);
    });
    words.append(heading, grid);
    container.append(words, panel('Śrīdhara commentary · literal English', entry.literal_english, 'sb-literal-details'));
    if (entry.note) {
      const note = document.createElement('p');
      note.className = 'sb-reviewed-note';
      note.textContent = entry.note;
      container.append(note);
    }
    controls.append(container);
  }
  let pending = false;
  function apply() {
    if (pending) return;
    pending = true;
    queueMicrotask(() => {
      pending = false;
      data.then(entries => entries.forEach(applyEntry));
    });
  }
  new MutationObserver(apply).observe(host, {childList: true, subtree: true});
  apply();
})();