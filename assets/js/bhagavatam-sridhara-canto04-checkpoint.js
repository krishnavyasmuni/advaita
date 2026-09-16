(() => {
  'use strict';
  // A small companion loader keeps new chapter checkpoints separate from the
  // large, already verified Cantos 1–3 file. It never modifies global fetch.
  const reader = document.querySelector('[data-bhagavatam-reader][data-canto="4"]');
  if (!reader) return;
  const host = reader.querySelector('[data-bhagavatam-host]');
  if (!host) return;
  const source = '/vivekadrishti/assets/data/bhagavatam-sridhara-english-canto04-ch01.json';
  let request;

  function renderCommentary(control, matches) {
    if (!control || !matches.length || control.querySelector('.sb-literal-details')) return;
    const details = document.createElement('details');
    details.className = 'sb-details gita-details sb-literal-details';
    const summary = document.createElement('summary');
    summary.textContent = 'Śrīdhara English';
    details.appendChild(summary);
    matches.forEach((entry) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'sb-source-block gita-reveal';
      const label = document.createElement('strong');
      label.className = 'sb-source-label';
      label.textContent = 'Literal rendering · ŚB 4.1.' + entry.start +
        (entry.end === entry.start ? '' : '–' + entry.end);
      const text = document.createElement('div');
      text.className = 'sb-source-content';
      String(entry.text).split(/\n/).forEach((line, index) => {
        if (index) text.appendChild(document.createElement('br'));
        const span = document.createElement('span');
        span.textContent = line;
        text.appendChild(span);
      });
      wrapper.append(label, text);
      details.appendChild(wrapper);
    });
    control.appendChild(details);
  }

  function apply() {
    const shell = host.querySelector('.sb-chapter-shell[data-chapter="1"]');
    if (!shell || !shell.querySelector('.sb-verse-section')) return;
    if (!request) request = fetch(source, { mode: 'cors', cache: 'force-cache' })
      .then((response) => {
        if (!response.ok) throw new Error('Canto 4 checkpoint HTTP ' + response.status);
        return response.json();
      })
      .then((data) => {
        if (data.source_commit !== '100560de6c9f68c2875097d40a2012a84c784179' ||
            !Array.isArray(data.entries)) throw new Error('Invalid Canto 4 checkpoint');
        return data.entries;
      })
      .catch((error) => {
        console.warn('Śrīdhara English checkpoint unavailable:', error);
        return [];
      });
    request.then((entries) => {
      if (!shell.isConnected) return;
      shell.querySelectorAll('.sb-verse-section').forEach((section) => {
        const marker = section.id.match(/^sb-4-1-(\d+)(?:-(\d+))?$/);
        if (!marker) return;
        const first = Number(marker[1]);
        const last = Number(marker[2] || marker[1]);
        const matches = entries.filter((entry) =>
          Number(entry.start) <= last && Number(entry.end) >= first);
        renderCommentary(section.querySelector('.gita-controls'), matches);
      });
    });
  }
  new MutationObserver(apply).observe(host, { childList: true, subtree: true });
  apply();
})();
