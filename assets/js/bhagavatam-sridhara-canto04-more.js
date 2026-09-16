(() => {
  'use strict';
  // Small per-chapter source-linked English checkpoints, separate from the
  // existing Cantos 1–3 corpus and the corrected 4.1 source alignment.
  const reader = document.querySelector('[data-bhagavatam-reader][data-canto="4"]');
  const host = reader && reader.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const pin = '100560de6c9f68c2875097d40a2012a84c784179';
  const requests = new Map();
  function load(chapter) {
    if (!requests.has(chapter)) {
      const name = '/vivekadrishti/assets/data/bhagavatam-sridhara-english-canto04-ch' +
        String(chapter).padStart(2, '0') + '.json';
      const pending = fetch(name, { cache: 'force-cache' }).then((response) => {
        if (response.status === 404) return null; // chapter not translated yet
        if (!response.ok) throw new Error('Checkpoint HTTP ' + response.status);
        return response.json();
      }).then((data) => {
        if (!data) return [];
        if (data.source_commit !== pin || !Array.isArray(data.entries))
          throw new Error('Invalid Canto 4 Śrīdhara checkpoint: ' + name);
        return data.entries.filter((entry) => Number(entry.canto) === 4 &&
          Number(entry.chapter) === chapter);
      }).catch((error) => {
        console.warn('Śrīdhara English checkpoint unavailable:', error);
        return [];
      });
      requests.set(chapter, pending);
    }
    return requests.get(chapter);
  }
  function addText(parent, contents) {
    String(contents).split(/\n/).forEach((line, index) => {
      if (index) parent.appendChild(document.createElement('br'));
      const span = document.createElement('span');
      span.textContent = line;
      parent.appendChild(span);
    });
  }
  function repairChapter2(shell) {
    // In the pinned source the Śrīdhara block printed under 4.2.7
    // defines prāk-niṣaṇṇam, anādṛtaḥ and vāmam of 4.2.8 instead.
    const seven = shell.querySelector('#sb-4-2-7');
    const eight = shell.querySelector('#sb-4-2-8 .gita-controls');
    const misplaced = seven && seven.querySelector('.sb-bhasya');
    if (!misplaced || !eight) return;
    if (eight.querySelector('.sb-bhasya')) misplaced.remove();
    else {
      misplaced.classList.add('sb-source-aligned');
      eight.appendChild(misplaced);
    }
  }
  function apply() {
    const shell = host.querySelector('.sb-chapter-shell[data-chapter]');
    if (!shell || !shell.querySelector('.sb-verse-section')) return;
    const chapter = Number(shell.dataset.chapter);
    if (!Number.isInteger(chapter) || chapter < 2 || chapter > 31) return;
    if (chapter === 2) repairChapter2(shell);
    load(chapter).then((entries) => {
      if (!shell.isConnected || host.querySelector('.sb-chapter-shell') !== shell) return;
      shell.querySelectorAll('.sb-verse-section').forEach((section) => {
        const match = section.id.match(/^sb-4-\d+-(\d+)(?:-(\d+))?$/);
        if (!match) return;
        const first = Number(match[1]);
        const last = Number(match[2] || match[1]);
        const controls = section.querySelector('.gita-controls');
        if (!controls || controls.querySelector('.sb-literal-details')) return;
        const found = entries.filter((entry) => Number(entry.start) <= last &&
          Number(entry.end) >= first);
        if (!found.length) return;
        const details = document.createElement('details');
        details.className = 'sb-details gita-details sb-literal-details';
        const summary = document.createElement('summary');
        summary.textContent = 'Śrīdhara English';
        details.appendChild(summary);
        found.forEach((entry) => {
          const block = document.createElement('div');
          block.className = 'sb-source-block gita-reveal';
          const label = document.createElement('strong');
          label.className = 'sb-source-label';
          label.textContent = 'Literal rendering · ŚB 4.' + chapter + '.' + entry.start +
            (entry.end === entry.start ? '' : '–' + entry.end);
          const body = document.createElement('div');
          body.className = 'sb-source-content';
          addText(body, entry.text);
          block.append(label, body);
          details.appendChild(block);
        });
        controls.appendChild(details);
      });
    });
  }
  new MutationObserver(apply).observe(host, { childList: true, subtree: true });
  apply();
})();
