(() => {
  const root = document.querySelector('[data-bhagavatam-reader]');
  if (!root) return;

  const canto = Number(root.dataset.canto);
  const status = root.querySelector('[data-bhagavatam-status]');
  const chapterNav = root.querySelector('[data-bhagavatam-chapters]');
  const host = root.querySelector('[data-bhagavatam-host]');
  const titleNode = root.querySelector('[data-bhagavatam-chapter-title]');
  const textCache = new Map();
  const jsonCache = new Map();
  const devanagariDigits = new Map(Object.entries({
    '०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'
  }));
  const independentVowels = new Map(Object.entries({
    'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'ṛ','ॠ':'ṝ','ऌ':'ḷ',
    'ए':'e','ऐ':'ai','ओ':'o','औ':'au'
  }));
  const vowelMarks = new Map(Object.entries({
    'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'ṛ','ॄ':'ṝ','ॢ':'ḷ',
    'े':'e','ै':'ai','ो':'o','ौ':'au'
  }));
  const consonants = new Map(Object.entries({
    'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ṅ','च':'c','छ':'ch','ज':'j','झ':'jh','ञ':'ñ',
    'ट':'ṭ','ठ':'ṭh','ड':'ḍ','ढ':'ḍh','ण':'ṇ','त':'t','थ':'th','द':'d','ध':'dh','न':'n',
    'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m','य':'y','र':'r','ल':'l','व':'v',
    'श':'ś','ष':'ṣ','स':'s','ह':'h','ळ':'ḷ'
  }));

  function setStatus(message, error) {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle('sb-status-error', Boolean(error));
  }

  function pad(number) {
    return String(number).padStart(2, '0');
  }

  function toAsciiDigits(value) {
    return Array.from(String(value || '')).map((ch) => devanagariDigits.get(ch) || ch).join('');
  }

  function rawUrl(path, rootPath, commit) {
    return 'https://raw.githubusercontent.com/vishvAsa/purANam_vaiShNavam/' +
      commit + '/' + rootPath + '/' + path;
  }

  async function fetchText(url) {
    if (!textCache.has(url)) {
      const request = fetch(url, { mode: 'cors', cache: 'force-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
          return response.text();
        })
        .catch((error) => {
          textCache.delete(url);
          throw error;
        });
      textCache.set(url, request);
    }
    return textCache.get(url);
  }

  async function fetchJson(url) {
    if (!jsonCache.has(url)) {
      const request = fetch(url, { mode: 'cors', cache: 'force-cache' })
        .then((response) => {
          if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
          return response.json();
        })
        .catch((error) => {
          jsonCache.delete(url);
          throw error;
        });
      jsonCache.set(url, request);
    }
    return jsonCache.get(url);
  }

  function devanagariToIast(input) {
    const chars = Array.from(String(input || '').normalize('NFC'));
    let output = '';
    for (let index = 0; index < chars.length; index += 1) {
      const ch = chars[index];
      const next = chars[index + 1];
      if (consonants.has(ch)) {
        output += consonants.get(ch);
        if (next === '्') index += 1;
        else if (vowelMarks.has(next)) {
          output += vowelMarks.get(next);
          index += 1;
        } else output += 'a';
        continue;
      }
      if (independentVowels.has(ch)) { output += independentVowels.get(ch); continue; }
      if (vowelMarks.has(ch)) { output += vowelMarks.get(ch); continue; }
      if (devanagariDigits.has(ch)) { output += devanagariDigits.get(ch); continue; }
      if (ch === 'ं') { output += 'ṃ'; continue; }
      if (ch === 'ः') { output += 'ḥ'; continue; }
      if (ch === 'ँ') { output += 'm̐'; continue; }
      if (ch === 'ऽ') { output += '’'; continue; }
      if (ch === '।') { output += '|'; continue; }
      if (ch === '॥') { output += '||'; continue; }
      if (ch === '़' || ch === '्') continue;
      output += ch;
    }
    return output
      .replace(/\s+\|\|/g, ' ||')
      .replace(/\s+\|/g, ' |')
      .replace(/[ \t]+\n/g, '\n')
      .trim();
  }

  function stripInlineMarkdown(text) {
    return String(text || '')
      .replace(/\[\^[^\]]+\]/g, '')
      .replace(/\\([\\*_{}\[\]()#+\-.!])/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/__([^_]+)__/g, '$1')
      .replace(/\*([^*\n]+)\*/g, '$1')
      .replace(/_([^_\n]+)_/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/^\s*>\s?/gm, '')
      .replace(/\\/g, '')
      .replace(/\*/g, '')
      .trim();
  }

  function cleanBlock(text) {
    return stripInlineMarkdown(text)
      .replace(/[ \t]+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  function cleanLines(text) {
    return String(text || '')
      .split(/\n/)
      .map((line) => stripInlineMarkdown(line.replace(/[ \t]+$/g, '').trim()))
      .filter(Boolean);
  }

  function sectionBlock(body, heading) {
    const marker = '### ' + heading;
    const startMarker = body.indexOf(marker);
    if (startMarker < 0) return '';
    const contentStart = body.indexOf('\n', startMarker + marker.length) + 1;
    const nextHeading = body.indexOf('\n### ', contentStart);
    const nextText = body.indexOf('\n## ', contentStart);
    const stops = [nextHeading, nextText].filter((value) => value >= 0);
    const contentEnd = stops.length ? Math.min.apply(null, stops) : body.length;
    return body.slice(contentStart, contentEnd).trim();
  }

  function frontmatterTitle(markdown) {
    const match = String(markdown || '').match(/title\s*=\s*"([^"]+)"/i);
    return match ? match[1].replace(/^\d+\s+/, '').trim() : '';
  }

  function parseEnglish(markdown) {
    const entries = [];
    const headingPattern = /^##\s+Texts?\s+(\d+)(?:\s*[-–—]\s*(\d+))?\s*$/gmi;
    const headings = Array.from(String(markdown || '').matchAll(headingPattern));
    headings.forEach((match, index) => {
      const start = Number(match[1]);
      const end = Number(match[2] || match[1]);
      const bodyStart = match.index + match[0].length;
      const bodyEnd = index + 1 < headings.length ? headings[index + 1].index : markdown.length;
      const body = markdown.slice(bodyStart, bodyEnd);
      entries.push({
        start,
        end,
        devanagari: cleanLines(sectionBlock(body, 'Devanagari')),
        transliteration: cleanLines(sectionBlock(body, 'Verse text')),
        synonyms: cleanBlock(sectionBlock(body, 'Synonyms')),
        translation: cleanBlock(sectionBlock(body, 'Translation'))
      });
    });
    return { title: frontmatterTitle(markdown), entries };
  }

  function parseEnglishCommentary(data, targetCanto, targetChapter) {
    return Array.isArray(data && data.entries)
      ? data.entries
        .filter((entry) => Number(entry.canto) === targetCanto && Number(entry.chapter) === targetChapter)
        .map((entry) => ({
          start: Number(entry.start),
          end: Number(entry.end),
          text: String(entry.text || '').trim()
        }))
        .filter((entry) => entry.text)
      : [];
  }

  function commentaryForRange(entries, start, end) {
    return entries
      .filter((entry) => entry.end >= start && entry.start <= end)
      .map((entry) => entry.text)
      .join('\n\n')
      .trim();
  }

  function parseSridhara(markdown, targetCanto, targetChapter) {
    const entries = [];
    const markerPattern = /(?:^|\n)\s*(?:\[\^[^\]]+\]\s*)?\*{0,2}॥\s*([०-९]+)\s*\.\s*([०-९]+)\s*\.\s*([०-९]+)(?:\s*[-–—]\s*([०-९]+))?\s*॥\s*\*{0,2}/g;
    // The corpus uses both the older “श्रीधर-स्वामी” label and the abbreviated “श्रीधरः” label.
    const labelPattern = /\*{0,2}श्रीधर(?:-स्वामी|ः)?(?:\s*,[^*\\n]+)?(?:\s*\([^*\\n]+\))?\s*[:：-]\s*\*{0,2}/;
    const markers = Array.from(String(markdown || '').matchAll(markerPattern));

    markers.forEach((marker, index) => {
      const markerCanto = Number(toAsciiDigits(marker[1]));
      const markerChapter = Number(toAsciiDigits(marker[2]));
      const start = Number(toAsciiDigits(marker[3]));
      const end = Number(toAsciiDigits(marker[4] || marker[3]));
      if (markerCanto !== targetCanto || markerChapter !== targetChapter) return;

      const segmentStart = marker.index + marker[0].length;
      const segmentEnd = index + 1 < markers.length ? markers[index + 1].index : markdown.length;
      const segment = markdown.slice(segmentStart, segmentEnd);
      const labelMatch = segment.match(labelPattern);
      if (!labelMatch) return;

      let commentary = segment.slice((labelMatch.index || 0) + labelMatch[0].length);
      const stops = [
        commentary.search(/\n_{4,}/),
        commentary.search(/\n[-—]{12,}/),
        commentary.search(/\n\s*\*{0,2}(?:श्रीधर(?:-स्वामी|ः)?|दिग्दर्शिनी|वंशीधर|वशिधर|श्रीनाथ|सनातन|जीव-?गोस्वामी|विश्वनाथ|बलदेव|मध्वाचार्य)/
        )
      ].filter((value) => value >= 0);
      if (stops.length) commentary = commentary.slice(0, Math.min.apply(null, stops));
      const text = cleanBlock(commentary);
      if (text && text.replace(/[+\s]/g, '') !== '') entries.push({ start, end, text, sourceAvailable: true });
    });
    return entries;
  }

  function parseLocalSridhara(data) {
    return Object.values(data && data.entries ? data.entries : {})
      .filter((entry) => entry && entry.source_available && String(entry.sanskrit || '').trim())
      .map((entry) => ({
        start: Number(entry.start),
        end: Number(entry.end),
        text: String(entry.sanskrit).trim(),
        sourceAvailable: true
      }));
  }

  function appendLines(target, text, italic) {
    const lines = String(text || '').split(/\n/).map((line) => line.trim()).filter(Boolean);
    lines.forEach((line, index) => {
      if (index) target.appendChild(document.createElement('br'));
      const node = italic ? document.createElement('em') : document.createElement('span');
      node.textContent = line;
      target.appendChild(node);
    });
  }

  function appendSynonyms(target, text) {
    const items = String(text || '')
      .split(/\s*;\s*/)
      .map((item) => item.trim())
      .filter(Boolean);
    items.forEach((item, index) => {
      if (index) target.appendChild(document.createTextNode('; '));
      const separator = item.search(/\s+[—–-]\s+/);
      if (separator < 1) {
        target.appendChild(document.createTextNode(item));
        return;
      }
      const key = document.createElement('em');
      key.className = 'sb-synonym-key';
      key.textContent = item.slice(0, separator).trim();
      const gloss = item.slice(separator).trim();
      target.append(key, document.createTextNode(gloss));
    });
  }

  function makeDetails(label, blocks, className) {
    const details = document.createElement('details');
    details.className = ('sb-details gita-details ' + (className || '')).trim();
    const summary = document.createElement('summary');
    summary.textContent = label;
    details.appendChild(summary);
    blocks.filter((block) => block && block.text).forEach((block) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'sb-source-block gita-reveal';
      const sourceLabel = document.createElement('strong');
      sourceLabel.className = 'sb-source-label';
      sourceLabel.textContent = block.label;
      const content = document.createElement('div');
      content.className = 'sb-source-content';
      if (block.lang) content.lang = block.lang;
      if (block.kind === 'synonyms') appendSynonyms(content, block.text);
      else appendLines(content, block.text, Boolean(block.italic));
      wrapper.append(sourceLabel, content);
      details.appendChild(wrapper);
    });
    return details;
  }

  function sridharaForRange(entries, start, end, chapter) {
    return entries
      .filter((entry) => entry.end >= start && entry.start <= end)
      .map((entry) => {
        const label = entry.start === entry.end
          ? String(canto) + '.' + chapter + '.' + entry.start
          : String(canto) + '.' + chapter + '.' + entry.start + '–' + entry.end;
        return label + '\n' + entry.text;
      })
      .join('\n\n')
      .trim();
  }

  function verseId(chapter, entry) {
    return 'sb-' + canto + '-' + chapter + '-' + entry.start +
      (entry.end !== entry.start ? '-' + entry.end : '');
  }

  function populateContents(list, entries, chapter) {
    if (!list) return;
    list.replaceChildren();
    entries.forEach((entry) => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      const range = entry.start === entry.end
        ? String(entry.start)
        : entry.start + '–' + entry.end;
      link.href = '#' + verseId(chapter, entry);
      link.textContent = entry.start === entry.end
        ? 'Verse ' + range
        : 'Verses ' + range;
      li.appendChild(link);
      list.appendChild(li);
    });
  }

  function renderVerse(chapter, entry, sridharaEntries, commentaryEntries) {
    const section = document.createElement('section');
    section.className = 'sb-verse-section gita-verse';
    const range = entry.start === entry.end ? String(entry.start) : entry.start + '–' + entry.end;
    const id = verseId(chapter, entry);
    section.id = id;
    section.setAttribute('aria-labelledby', id + '-heading');

    const heading = document.createElement('h2');
    heading.className = 'sb-verse';
    heading.id = id + '-heading';
    heading.textContent = 'ŚB ' + canto + '.' + chapter + '.' + range;
    const rule = document.createElement('hr');
    rule.className = 'sb-rule gita-verse-rule';

    const devanagari = document.createElement('div');
    devanagari.className = 'sb-devanagari gita-sanskrit';
    devanagari.lang = 'sa-Deva';
    appendLines(devanagari, entry.devanagari.join('\n'), false);

    const translation = document.createElement('p');
    translation.className = 'sb-translation gita-translation';
    translation.textContent = entry.translation || 'Translation not present in the source record.';

    const verseTransliteration = entry.transliteration.join('\n');
    const sridharaSanskrit = sridharaForRange(sridharaEntries, entry.start, entry.end, chapter);

    const controls = document.createElement('div');
    controls.className = 'gita-controls';
    if (entry.synonyms) {
      controls.appendChild(makeDetails('Word-for-word', [
        { label: 'Bhāgavatam', kind: 'synonyms', text: entry.synonyms }
      ], 'sb-word-details'));
    }
    if (verseTransliteration) {
      controls.appendChild(makeDetails('Transliteration', [
        { label: 'Bhāgavatam', text: verseTransliteration, lang: 'sa-Latn', italic: true }
      ], 'sb-transliteration-details'));
    }
    if (sridharaSanskrit) {
      controls.appendChild(makeDetails('Śrīdhara Sanskrit', [
        { label: 'Śrīdhara Svāmī — Bhāvārtha-dīpikā', text: sridharaSanskrit, lang: 'sa-Deva' }
      ], 'sb-bhasya'));
    }
    section.append(heading, rule, devanagari, translation, controls);

    const commentaryText = commentaryForRange(commentaryEntries, entry.start, entry.end);
    if (commentaryText) {
      const commentary = document.createElement('section');
      commentary.className = 'gita-commentary';
      const commentaryHeading = document.createElement('h3');
      commentaryHeading.textContent = 'Śrīdhara’s Literal English.';
      const commentaryBody = document.createElement('p');
      commentaryBody.textContent = commentaryText;
      commentary.append(commentaryHeading, commentaryBody);
      section.appendChild(commentary);
    }

    return section;
  }

  function selectedChapter(config) {
    const match = String(location.hash || '').match(/^#chapter-(\d{1,3})$/i);
    const requested = match ? Number(match[1]) : 1;
    return requested >= 1 && requested <= config.chapter_count ? requested : 1;
  }

  function buildChapterNav(config) {
    if (!chapterNav) return;
    chapterNav.className = 'gita-chapter-nav bhagavatam-chapter-nav';
    chapterNav.replaceChildren();
    const add = (label, href) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      chapterNav.appendChild(link);
    };
    add('All chapters', '/vivekadrishti/pages/bhagavatam-with-sridhara-bhasya/');
    if (selectedChapter(config) > 1) add('Previous', '#chapter-' + (selectedChapter(config) - 1));
    if (selectedChapter(config) < config.chapter_count) add('Next', '#chapter-' + (selectedChapter(config) + 1));
  }

  function chapterEnglishPath(config, chapter) {
    return config.english_path_template
      .replace('{chapter2}', pad(chapter))
      .replace('{chapter}', String(chapter));
  }

  function chapterSridharaUrl(manifest, config, chapter) {
    if (config.sridhara_mode === 'local-cached') {
      const path = config.sridhara_path_template.replace('{chapter2}', pad(chapter));
      return path.charAt(0) === '/' ? path : '/vivekadrishti/' + path;
    }
    const relativePath = config.sridhara_paths[String(chapter)];
    if (!relativePath) return '';
    return rawUrl(relativePath, manifest.primary_sanskrit.path_root, manifest.primary_sanskrit.commit);
  }

  function chapterEnglishUrl(manifest, config, chapter) {
    return rawUrl(
      chapterEnglishPath(config, chapter),
      manifest.english_source.mirror_path_root,
      manifest.english_source.mirror_commit
    );
  }

  function commentaryUrl(manifest) {
    const path = (manifest.english_commentary && manifest.english_commentary.path) ||
      'assets/data/bhagavatam-sridhara-english-checkpoints.json';
    const versionedPath = path + (path.includes('?') ? '&' : '?') + 'v=live-' + Date.now();
    return versionedPath.charAt(0) === '/' ? versionedPath : '/vivekadrishti/' + versionedPath;
  }

  async function loadChapter(manifest, config, chapter) {
    const shell = document.createElement('section');
    shell.className = 'sb-chapter-shell';
    shell.id = 'chapter-' + chapter;
    shell.dataset.chapter = String(chapter);
    const contents = document.createElement('div');
    contents.className = 'gita-contents sb-contents';
    const contentsHeading = document.createElement('h2');
    contentsHeading.textContent = 'Contents';
    const contentsList = document.createElement('ol');
    contents.append(contentsHeading, contentsList);
    const loading = document.createElement('p');
    loading.className = 'sb-loading';
    loading.textContent = 'Loading Canto ' + canto + ', Chapter ' + chapter + '…';
    shell.append(contents, loading);
    host.replaceChildren(shell);
    if (titleNode) titleNode.textContent = 'Chapter ' + chapter;
    setStatus('Loading Canto ' + canto + ', Chapter ' + chapter + '…');

    try {
      const englishUrl = chapterEnglishUrl(manifest, config, chapter);
      const sridharaUrl = chapterSridharaUrl(manifest, config, chapter);
      const commentaryUrlValue = commentaryUrl(manifest);
      const requests = [fetchText(englishUrl)];
      if (sridharaUrl) {
        requests.push(config.sridhara_mode === 'local-cached' ? fetchJson(sridharaUrl) : fetchText(sridharaUrl));
      }
      if (commentaryUrlValue) requests.push(fetchJson(commentaryUrlValue));
      const results = await Promise.all(requests);
      const english = parseEnglish(results[0]);
      const sridharaResult = sridharaUrl ? results[1] : null;
      const commentaryResult = commentaryUrlValue ? results[sridharaUrl ? 2 : 1] : null;
      const sridharaEntries = sridharaUrl
        ? (config.sridhara_mode === 'local-cached'
          ? parseLocalSridhara(sridharaResult)
          : parseSridhara(sridharaResult, canto, chapter))
        : [];
      const commentaryEntries = commentaryResult
        ? parseEnglishCommentary(commentaryResult, canto, chapter)
        : [];
      if (!english.entries.length) throw new Error('No verse records found in the English source file.');

      loading.remove();
      populateContents(contentsList, english.entries, chapter);
      if (titleNode) titleNode.textContent = english.title || 'Chapter ' + chapter;
      english.entries.forEach((entry) => shell.appendChild(renderVerse(chapter, entry, sridharaEntries, commentaryEntries)));
      const annotated = english.entries.filter((entry) => sridharaForRange(sridharaEntries, entry.start, entry.end, chapter)).length;
      const sourceMessage = annotated + ' of ' + english.entries.length + ' displayed verse records have Śrīdhara text.';
      setStatus('Canto ' + canto + ', Chapter ' + chapter + ' loaded · ' + sourceMessage);
      requestAnimationFrame(() => shell.scrollIntoView({ block: 'start' }));
    } catch (error) {
      loading.textContent = 'This chapter could not load: ' + error.message;
      loading.classList.add('sb-load-error');
      setStatus('Canto ' + canto + ', Chapter ' + chapter + ' could not be loaded.', true);
    }
  }

  async function start() {
    try {
      const response = await fetch(root.dataset.manifest || '/vivekadrishti/assets/data/bhagavatam-sridhara-reader-manifest.json', { cache: 'force-cache' });
      if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
      const manifest = await response.json();
      const config = manifest.cantos[String(canto)];
      if (!config) throw new Error('No canto configuration found.');
      buildChapterNav(config);
      await loadChapter(manifest, config, selectedChapter(config));
      window.addEventListener('hashchange', () => {
        const chapter = selectedChapter(config);
        if (host.querySelector('.sb-chapter-shell[data-chapter="' + chapter + '"]')) return;
        loadChapter(manifest, config, chapter);
      });
    } catch (error) {
      setStatus('The reader could not start: ' + error.message, true);
    }
  }

  start();
})();