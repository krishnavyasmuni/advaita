(() => {
  const root = document.querySelector('[data-gita-chapter]');
  if (!root) return;

  const chapter = Number(root.dataset.gitaChapter);
  if (!Number.isInteger(chapter) || chapter < 1 || chapter > 18) return;

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const independent = {'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'ṛ','ॠ':'ṝ','ऌ':'ḷ','ॡ':'ḹ','ए':'e','ऐ':'ai','ओ':'o','औ':'au','ॐ':'oṃ'};
  const consonants = {'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ṅ','च':'c','छ':'ch','ज':'j','झ':'jh','ञ':'ñ','ट':'ṭ','ठ':'ṭh','ड':'ḍ','ढ':'ḍh','ण':'ṇ','त':'t','थ':'th','द':'d','ध':'dh','न':'n','प':'p','फ':'ph','ब':'b','भ':'bh','म':'m','य':'y','र':'r','ल':'l','व':'v','श':'ś','ष':'ṣ','स':'s','ह':'h','ळ':'ḷ'};
  const matras = {'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'ṛ','ॄ':'ṝ','ॢ':'ḷ','ॣ':'ḹ','े':'e','ै':'ai','ो':'o','ौ':'au'};
  const marks = {'ं':'ṃ','ः':'ḥ','ँ':'m̐','ऽ':'’','।':' |','॥':' ||','०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};

  const devaToIast = (input) => {
    const s = String(input || '');
    let out = '';
    for (let i = 0; i < s.length; i += 1) {
      const ch = s[i];
      if (independent[ch]) { out += independent[ch]; continue; }
      if (consonants[ch]) {
        out += consonants[ch];
        const next = s[i + 1];
        if (next === '्') { i += 1; continue; }
        if (matras[next]) { out += matras[next]; i += 1; continue; }
        out += 'a';
        continue;
      }
      if (matras[ch]) { out += matras[ch]; continue; }
      if (ch === '्' || ch === '़') continue;
      out += marks[ch] ?? ch;
    }
    return out.replace(/\s+([|])/g, ' $1').replace(/\s{2,}/g, ' ').trim();
  };

  const cleanSrid = (text) => String(text || '').replace(/^\s*[।॥]+\s*\d+(?:\.\d+)?\s*[।॥]*\s*/, '').trim();

  const renderPairs = (pairs) => {
    if (!Array.isArray(pairs) || !pairs.length) return '<p class="gita-dual-empty">No commentary.</p>';
    return '<p class="gita-wfw-list">' + pairs.map((pair) => {
      const term = Array.isArray(pair) ? pair[0] : '';
      const gloss = Array.isArray(pair) ? pair[1] : '';
      return '<strong>' + esc(term) + '</strong> — ' + esc(gloss);
    }).join('; ') + '.</p>';
  };

  const joinedGloss = (pairs) => (Array.isArray(pairs) ? pairs : [])
    .map((pair) => Array.isArray(pair) ? String(pair[1] || '').trim() : '')
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

  const dualBlock = (gitaHtml, sridHtml) =>
    '<div class="gita-dual-section gita-dual-gita"><div class="gita-dual-label">Bhagavad Gītā</div>' + gitaHtml + '</div>' +
    '<div class="gita-dual-section gita-dual-sridhara"><div class="gita-dual-label">Śrīdhara</div>' + sridHtml + '</div>';

  let chapterData = null;
  const isFallback = (text) => /source repository supplies Śrīdhara Svāmī’s commentary in Sanskrit; no English translation field is supplied there\.?/i.test(String(text || '').trim());

  const hideFallbacks = () => {
    root.querySelectorAll('.gita-commentary').forEach((section) => {
      const paragraph = section.querySelector('p');
      if (paragraph && isFallback(paragraph.textContent)) section.hidden = true;
    });
  };

  const enhanceVerse = (article) => {
    if (!chapterData || !article || article.dataset.sridharaToolsAll === '1') return;
    const match = article.id && article.id.match(new RegExp('^gita-' + chapter + '-(\\d+)$'));
    if (!match) return;
    const verse = Number(match[1]);
    const verseData = chapterData.verses && chapterData.verses[String(verse)];
    if (!verseData || verseData.reviewed !== true) return;

    const details = article.querySelectorAll('.gita-details');
    if (details.length < 3) return;
    const wfwReveal = details[0].querySelector('.gita-reveal');
    const transReveal = details[1].querySelector('.gita-reveal');
    const sridTextNode = details[2].querySelector('.gita-reveal p');
    const englishNode = article.querySelector('.gita-commentary p');
    if (!wfwReveal || !transReveal || !sridTextNode || !englishNode) return;

    const gitaWfw = wfwReveal.innerHTML;
    const gitaTrans = transReveal.innerHTML;
    const sridRaw = cleanSrid(sridTextNode.textContent);
    const noCommentary = verseData.no_commentary === true || /^no commentary\.?$/i.test(sridRaw);
    const sridTrans = noCommentary ? '<p class="gita-dual-empty">No commentary.</p>' : '<p><em>' + esc(devaToIast(sridRaw)) + '</em></p>';

    wfwReveal.innerHTML = dualBlock(gitaWfw, renderPairs(noCommentary ? [] : verseData.word_for_word));
    transReveal.innerHTML = dualBlock(gitaTrans, sridTrans);

    if (noCommentary) {
      englishNode.textContent = 'No commentary.';
      englishNode.classList.add('gita-no-source');
    } else {
      const literalTranslation = String(verseData.translation || '').trim() || joinedGloss(verseData.word_for_word);
      if (literalTranslation) {
        englishNode.textContent = literalTranslation;
        englishNode.classList.remove('gita-no-source');
      }
    }

    const commentarySection = englishNode.closest('.gita-commentary');
    if (commentarySection) commentarySection.hidden = false;
    article.dataset.sridharaToolsAll = '1';
  };

  const enhanceAll = () => root.querySelectorAll('.gita-verse').forEach(enhanceVerse);
  const refresh = () => { hideFallbacks(); enhanceAll(); };
  const observer = new MutationObserver(refresh);
  observer.observe(root, {childList:true, subtree:true});
  refresh();

  const loadJson = (url) => fetch(url).then((response) => {
    if (!response.ok) throw new Error('No reviewed Śrīdhara literal data for this chapter yet');
    return response.json();
  });

  const mergeParts = (parts) => {
    const verses = {};
    parts.forEach((part) => {
      Object.entries(part.verses || {}).forEach(([key, value]) => {
        if (!verses[key]) {
          verses[key] = {...value, word_for_word: [...(value.word_for_word || [])]};
          return;
        }
        if (value.translation) verses[key].translation = [verses[key].translation, value.translation].filter(Boolean).join(' ');
        verses[key].word_for_word = [...(verses[key].word_for_word || []), ...(value.word_for_word || [])];
        verses[key].reviewed = verses[key].reviewed === true && value.reviewed === true;
        verses[key].no_commentary = verses[key].no_commentary === true && value.no_commentary === true;
      });
    });
    return {_meta:{chapter,reviewed:true,method:'complete direct literal rendering'},verses};
  };

  const literalPartsByChapter = {
    1: ['a','b'],
    2: ['a','b','c','d','e','f','g'],
    3: ['a','b','c'],
    4: ['a','b','c'],
    5: ['a','b'],
    6: ['a','b','c','d'],
    7: ['a','b'],
    8: ['a','b'],
    9: ['a','b'],
    10: ['a','b'],
    11: ['a','b','c'],
    12: ['a'],
    13: ['a','b'],
    14: ['a','b'],
    15: ['a'],
    16: ['a','b'],
    17: ['a','b'],
    18: ['a','b','c','d','e1','e2a','e2b2','e2c','e3a','e3b']
  };
  const literalParts = literalPartsByChapter[chapter];
  const cacheKey = '20260901-literal-final';
  const dataPromise = literalParts
    ? Promise.all(literalParts.map((part) => loadJson('/vivekadrishti/assets/data/bhagavad-gita-sridhara-reviewed/chapter-' + chapter + '-literal-' + part + '.json?v=' + cacheKey))).then(mergeParts)
    : loadJson('/vivekadrishti/assets/data/bhagavad-gita-sridhara-reviewed/chapter-' + chapter + '.json?v=' + cacheKey);

  dataPromise.then((data) => {
    chapterData = data;
    enhanceAll();
  }).catch((error) => {
    chapterData = null;
    hideFallbacks();
    console.warn('Reviewed Śrīdhara English unavailable for chapter ' + chapter + ':', error);
  });
})();