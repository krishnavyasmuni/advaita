(() => {
  'use strict';
  const root = document.querySelector('[data-bhagavatam-reader]');
  if (!root || !['1','2'].includes(root.dataset.canto)) return;
  const host = root.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const canto = Number(root.dataset.canto);
  const url = '/vivekadrishti/assets/data/bhagavatam-sridhara-wfw-cantos01-02-additions-20260916.json?v=2';
  const data = fetch(url, {cache:'no-cache'})
    .then(response => {if (!response.ok) throw Error('Śrīdhara gloss HTTP ' + response.status); return response.json();})
    .then(doc => doc.source_commit === '100560de6c9f68c2875097d40a2012a84c784179' && Array.isArray(doc.entries) ? doc.entries.filter(entry => entry.canto === canto) : [])
    .catch(error => {console.warn('Śrīdhara commentary gloss checkpoint unavailable:', error); return [];});
  const style = document.createElement('style');
  style.textContent = '.sb-added-gloss{margin:14px auto}.sb-added-gloss summary{cursor:pointer}.sb-added-pairs{padding:8px 14px}.sb-added-pair{display:grid;grid-template-columns:minmax(110px,1fr) 1.6fr;gap:10px;border-bottom:1px solid #e5dcd1;padding:8px 0;line-height:1.6}.sb-added-pair strong{color:#65516f;font-weight:500}.sb-added-copy{white-space:pre-line;padding:9px 13px;line-height:1.7}.sb-added-note{margin:10px 0;padding:10px 13px;background:#fffaf2;border-left:3px solid #ad8d67;font-size:13px;line-height:1.6}@media(max-width:560px){.sb-added-pair{grid-template-columns:1fr;gap:3px}}';
  document.head.append(style);
  function panel(label, content, className, lang) {
    const details = document.createElement('details');
    details.className = 'sb-details gita-details sb-added-gloss ' + className;
    const summary = document.createElement('summary');
    summary.textContent = label;
    const body = document.createElement('div');
    body.className = 'sb-added-copy';
    if (lang) body.lang = lang;
    body.textContent = content;
    details.append(summary, body);
    return details;
  }
  function addEntry(entry) {
    if (!Number.isInteger(entry.chapter) || !Number.isInteger(entry.start) || !Number.isInteger(entry.end) || !entry.sanskrit || !entry.literal_english || !Array.isArray(entry.word_for_word)) return;
    const shell = host.querySelector('.sb-chapter-shell[data-chapter="' + entry.chapter + '"]');
    if (!shell) return;
    const id = 'sb-' + canto + '-' + entry.chapter + '-' + entry.start + (entry.end === entry.start ? '' : '-' + entry.end);
    const section = shell.querySelector('#' + id);
    const controls = section && section.querySelector('.gita-controls');
    if (!controls || controls.querySelector('[data-sridhara-added="' + id + '"]')) return;
    const wrap = document.createElement('div');
    wrap.dataset.sridharaAdded = id;
    wrap.append(panel('Śrīdhara Sanskrit · pinned witness', entry.sanskrit, 'sb-added-sanskrit', 'sa-Deva'));
    const glosses = document.createElement('details');
    glosses.className = 'sb-details gita-details sb-sridhara-wfw sb-added-gloss';
    const heading = document.createElement('summary');
    heading.textContent = 'Śrīdhara commentary · word / phrase meanings';
    const pairs = document.createElement('div');
    pairs.className = 'sb-added-pairs';
    entry.word_for_word.forEach(pair => {
      if (!Array.isArray(pair) || pair.length !== 2) return;
      const row = document.createElement('div');
      row.className = 'sb-added-pair';
      const original = document.createElement('strong');
      original.lang = 'sa-Deva';
      original.textContent = pair[0];
      const english = document.createElement('span');
      english.textContent = pair[1];
      row.append(original, english);
      pairs.append(row);
    });
    glosses.append(heading, pairs);
    wrap.append(glosses, panel('Śrīdhara commentary · literal English', entry.literal_english, 'sb-added-literal'));
    if (entry.note) {
      const note = document.createElement('p');
      note.className = 'sb-added-note';
      note.textContent = entry.note;
      wrap.append(note);
    }
    controls.append(wrap);
  }
  let queued = false;
  function apply() {
    if (queued) return;
    queued = true;
    queueMicrotask(() => {queued = false; data.then(entries => entries.forEach(addEntry));});
  }
  new MutationObserver(apply).observe(host, {childList:true,subtree:true});
  apply();
})();