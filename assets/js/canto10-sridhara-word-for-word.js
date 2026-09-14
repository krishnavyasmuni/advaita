(() => {
  const root = document.querySelector('[data-canto10-source-root]');
  if (!root) return;

  const DATA_BASE = '/vivekadrishti/assets/data/canto10-sridhara-word-for-word/';
  const OVERRIDE_BASE = '/vivekadrishti/assets/data/canto10-sridhara-literal-overrides/';
  const chapterCache = new Map();
  const overrideCache = new Map();

  function verseIdentity(section) {
    const id = section.querySelector(':scope > .sb-verse')?.id || section.getAttribute('aria-labelledby') || '';
    const match = id.match(/^sb-10-(\d+)-(\d+)(?:-(\d+))?$/i);
    if (!match) return null;
    return {
      chapter: Number(match[1]),
      start: Number(match[2]),
      end: Number(match[3] || match[2])
    };
  }

  function sridharaSourceText(section) {
    return (section.querySelector(':scope > .sb-bhasya .sb-source-content, :scope > .sb-bhasya [lang="sa-Deva"], :scope > .sb-bhasya [lang="sa"]')?.textContent || '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function isNoCommentaryText(text) {
    const value = String(text || '').trim();
    if (!value) return false;
    return /^न\s+व्याख्यातम्[।.]?$/u.test(value)
      || /^na\s+vyākhyātam(?:\s*[—–-]\s*not explained)?[.]?$/iu.test(value)
      || /^not explained[.]?$/iu.test(value);
  }

  function hasActualCommentary(section) {
    const text = sridharaSourceText(section);
    if (!text) return false;

    // A rendered range can contain labels plus one or more "न व्याख्यातम्" records.
    // Remove those placeholders before deciding whether the range contains real Śrīdhara text.
    const residue = text
      .replace(/\b10\.\d+\.\d+(?:\s*[–—-]\s*\d+)?\b/gi, ' ')
      .replace(/न\s+व्याख्यातम्[।.]?/gu, ' ')
      .replace(/na\s+vyākhyātam[.]?/giu, ' ')
      .replace(/[\s|।॥.,;:()[\]{}–—-]+/g, '');
    return Boolean(residue);
  }

  async function chapterData(chapter) {
    if (!chapterCache.has(chapter)) {
      const file = String(chapter).padStart(2, '0');
      chapterCache.set(chapter, fetch(`${DATA_BASE}${file}.json?v=13`, { cache: 'force-cache' })
        .then((response) => response.ok ? response.json() : {})
        .catch(() => ({})));
    }
    return chapterCache.get(chapter);
  }

  async function literalOverrides(chapter) {
    if (!overrideCache.has(chapter)) {
      const file = String(chapter).padStart(2, '0');
      overrideCache.set(chapter, fetch(`${OVERRIDE_BASE}${file}.json?v=4`, { cache: 'force-cache' })
        .then((response) => response.ok ? response.json() : {})
        .catch(() => ({})));
    }
    return overrideCache.get(chapter);
  }

  function normalizeRecord(value, chapter) {
    if (!value) return null;
    if (typeof value === 'string') {
      return null;
    }
    if (typeof value !== 'object' || Array.isArray(value)) return null;

    // Display only records explicitly approved after comparison with the
    // Sanskrit sources. Chapter position is never evidence of review.
    const reviewed = value.reviewed === true;
    if (!reviewed) return null;
    const wordForWord = String(value.word_for_word || value.wordForWord || '').trim();
    const translation = String(value.translation || value.direct_translation || '').trim();
    return {
      reviewed: true,
      word_for_word: wordForWord,
      translation,
      no_commentary: value.no_commentary === true
        || ((isNoCommentaryText(wordForWord) || !wordForWord) && (isNoCommentaryText(translation) || !translation))
    };
  }

  function normalizeOverride(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
    const wordForWord = String(value.word_for_word || value.wordForWord || '').trim();
    const translation = String(value.translation || value.direct_translation || '').trim();
    return {
      reviewed: true,
      word_for_word: wordForWord,
      translation,
      no_commentary: value.no_commentary === true
    };
  }

  function mergeReviewedRecord(base, override) {
    if (!base && !override) return null;
    if (override?.no_commentary) {
      return { reviewed: true, word_for_word: '', translation: '', no_commentary: true };
    }
    const merged = {
      reviewed: true,
      word_for_word: String(override?.word_for_word || base?.word_for_word || '').trim(),
      translation: String(override?.translation || base?.translation || '').trim(),
      no_commentary: false
    };
    merged.no_commentary = ((isNoCommentaryText(merged.word_for_word) || !merged.word_for_word)
      && (isNoCommentaryText(merged.translation) || !merged.translation));
    return merged;
  }

  function recordForRange(data, overrides, identity) {
    const directKey = identity.start === identity.end ? String(identity.start) : `${identity.start}-${identity.end}`;
    const directBase = normalizeRecord(data?.[directKey], identity.chapter);
    const directOverride = normalizeOverride(overrides?.[directKey]);

    if (identity.start === identity.end || directBase || directOverride) {
      const direct = mergeReviewedRecord(directBase, directOverride);
      return direct?.no_commentary ? null : direct;
    }

    const records = [];
    for (let verse = identity.start; verse <= identity.end; verse += 1) {
      const base = normalizeRecord(data?.[String(verse)], identity.chapter);
      const override = normalizeOverride(overrides?.[String(verse)]);
      // Śrīdhara often comments on only one member of a combined Bhāgavatam
      // verse range. Missing members mean “no separate gloss,” not failure of
      // the entire range.
      if (!base && !override) continue;
      const record = mergeReviewedRecord(base, override);
      if (!record || record.no_commentary) continue;
      records.push(record);
    }

    if (!records.length) return null;
    return {
      reviewed: true,
      word_for_word: records.map((record) => record.word_for_word).filter(Boolean).join(' ').trim(),
      translation: records.map((record) => record.translation).filter(Boolean).join(' ').trim(),
      no_commentary: false
    };
  }

  function makeWordForWordDetails(text) {
    const details = document.createElement('details');
    details.className = 'sb-details sb-sridhara-wfw-details';
    details.hidden = true;
    details.open = false;

    const summary = document.createElement('summary');
    summary.textContent = 'Śrīdhara word-for-word';
    const wrapper = document.createElement('div');
    wrapper.className = 'sb-source-block';
    const label = document.createElement('strong');
    label.className = 'sb-source-label';
    label.textContent = 'Śrīdhara word-for-word';
    const content = document.createElement('div');
    content.className = 'sb-source-content sb-sridhara-word-for-word';
    content.textContent = text;
    wrapper.append(label, content);
    details.append(summary, wrapper);
    return details;
  }

  function setDirectTranslation(section, translation) {
    let commentary = section.querySelector(':scope > .sb-commentary');
    if (!translation) {
      commentary?.remove();
      return;
    }
    if (!commentary) {
      commentary = document.createElement('p');
      commentary.className = 'sb-commentary';
      section.appendChild(commentary);
    }
    const label = document.createElement('strong');
    label.textContent = 'Śrīdhara’s Commentary. ';
    const text = document.createElement('span');
    text.className = 'sb-commentary-text';
    text.textContent = translation;
    commentary.replaceChildren(label, text);
  }

  async function enhance(section) {
    if (!(section instanceof HTMLElement) || !section.matches('.sb-verse-section')) return;
    if (section.dataset.sridharaReviewedChecked === 'true') return;
    section.dataset.sridharaReviewedChecked = 'true';

    section.querySelectorAll(':scope > .sb-sridhara-wfw-details').forEach((node) => node.remove());
    if (!hasActualCommentary(section)) {
      section.querySelector(':scope > .sb-commentary')?.remove();
      return;
    }

    const identity = verseIdentity(section);
    if (!identity) return;
    const [data, overrides] = await Promise.all([chapterData(identity.chapter), literalOverrides(identity.chapter)]);
    if (!section.isConnected) return;
    const record = recordForRange(data, overrides, identity);
    if (!record) {
      section.dataset.sridharaEnglishStatus = 'no-commentary-or-awaiting-review';
      section.querySelector(':scope > .sb-commentary')?.remove();
      return;
    }

    if (record.word_for_word) section.appendChild(makeWordForWordDetails(record.word_for_word));
    setDirectTranslation(section, record.translation);
    section.dataset.sridharaEnglishStatus = 'reviewed';
  }

  function scan(node = root) {
    if (node instanceof HTMLElement && node.matches('.sb-verse-section')) enhance(node);
    node.querySelectorAll?.('.sb-verse-section').forEach(enhance);
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) scan(node);
    }));
  });
  observer.observe(root, { childList: true, subtree: true });
  scan();
})();
