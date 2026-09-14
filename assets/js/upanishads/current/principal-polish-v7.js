/* Principal Upanishads v7 polish.
 * Final editorial cleanup over text-specific v6:
 * - removes meta/editorial voice from rendered encyclopedia prose
 * - removes the generic Contents preamble
 * - adds only text-relevant structural details
 * - tightens dating/composition notes where a particular text warrants them
 */
(() => {
  const slug = location.pathname.split('/').filter(Boolean).pop() || '';
  const supported = new Set(['isavasya','kena','katha','prasna','mundaka','mandukya','taittiriya','aitareya','chandogya','brhadaranyaka']);
  if (!supported.has(slug)) return;

  const replacements = [
    ['This is enough structure for such a short work; there is no need to manufacture a complicated theory of “books” or hypothetical authors.', 'For so short a poem, these five movements describe the received architecture more securely than hypothetical subdivisions.'],
    ['The exact doctrinal referents remain disputed, which is why a good article should present the Sanskrit terms, the recensional order and major commentarial options rather than silently replacing them with a modern “science versus spirituality” formula.', 'The exact doctrinal referents remain disputed; the Sanskrit terms, recensional order and major commentarial options are therefore more informative than modern “science versus spirituality” paraphrases.'],
    ['The main textual-critical question for an introductory article is the relation of the metrical first half to the prose second half, not an elaborate recension history.', 'The principal textual-critical question is the relation of the metrical first half to the prose second half rather than an elaborate recension history.'],
    ['That bipartite form is the central textual issue; there is little value in inventing a complex recension discussion for a work whose most significant internal distinction is genre.', 'That bipartite form is the central textual issue: genre and compositional layering matter here more than an elaborate recension history.'],
    ['The article should therefore date and interpret the work inside the Aitareya Aranyaka rather than as an independent philosophical booklet with a single author.', 'The work is therefore best dated and interpreted within the Aitareya Aranyaka rather than as an independent philosophical booklet by a single author.'],
    ['There is no need for an elaborate recension discussion here. The important structure is the six-question sequence.', 'The important structure is the six-question sequence.'],
    ['There is no major recension problem that needs a long standalone treatment. The relevant textual issue is its exact placement within Aitareya Aranyaka 2 and the artificiality of sharply separating the three Upanishadic chapters from neighboring Aranyaka speculation.', 'The relevant textual issue is its exact placement within Aitareya Aranyaka 2 and the artificiality of sharply separating the three Upanishadic chapters from neighboring Aranyaka speculation.'],
    ['The later “five koshas” framework is indispensable to reception history, but a text-focused article should mark it as a systematization of the older sequence rather than pretending that every later technical term appears fully formed in the Upanishad.', 'The later “five koshas” framework is indispensable to reception history, but it is a systematization of the older sequence rather than terminology already fully formed in the Upanishad.'],
    ['For historical arguments, citation should therefore distinguish the modern Upanishad numbering from the larger Aitareya Aranyaka location. The surrounding Aranyaka is evidence, not disposable packaging.', 'Historical citation therefore distinguishes the modern Upanishad numbering from the larger Aitareya Aranyaka location; the surrounding Aranyaka is part of the evidence for interpretation.'],
    ['The eight prapathakas should not be summarized as if they were one continuous treatise.', 'The eight prapathakas do not form one continuous treatise.'],
    ['Joel Brereton’s contextual study of tat tvam asi is important precisely because the refrain has often been detached from Chandogya 6. A text-focused presentation should explain the grammatical and argumentative setting of the refrain before turning to how later Vedanta schools interpret it.', 'Joel Brereton’s contextual study of tat tvam asi is important precisely because the refrain has often been detached from Chandogya 6. Its grammatical and argumentative setting must be established before later Vedanta interpretations are compared.'],
    ['The later dispute should be presented after the local Chandogya argument, not as a substitute for it.', 'The later dispute becomes intelligible only after the local Chandogya argument has been established.'],
    ['A critical reading should therefore resist harmonizing every vidya into one authorial system.', 'Textual criticism therefore resists harmonizing every vidya into one authorial system.'],
    ['A serious citation should therefore identify the recension when wording, sequence or numbering is under discussion.', 'Precise citation identifies the recension whenever wording, sequence or numbering is under discussion.'],
    ['The “three births” chapter should be described without either sanitizing or overgeneralizing it.', 'The “three births” chapter belongs to a specifically male-lineage and household setting.'],
    ['A historically careful page must keep two layers visible: the compact Upanishad itself and the later Karika that transformed its philosophical reach.', 'Two historical layers must remain distinct: the compact Upanishad itself and the later Karika that transformed its philosophical reach.'],
    ['The article should therefore not be inferred from Atharvavedic affiliation alone.', 'Its date therefore cannot be inferred from Atharvavedic affiliation alone.'],
    ['The article should therefore avoid saying that the Mundaka is simply a chapter of an Atharvaveda Brahmana.', 'The Mundaka is not simply a chapter of an Atharvaveda Brahmana.'],
    ['A text-focused presentation', 'A textual reading'],
    ['a text-focused article', 'a textual reading'],
    ['a good article', 'a careful reading'],
    ['an introductory article', 'the present textual analysis']
  ];

  const structureExtras = {
    isavasya: 'The two principal White-Yajurveda recensions also explain the familiar 17-versus-18-verse count: modern numbering is not completely interchangeable after the opening portion, so citations to the latter half are most useful when the recension is stated.',
    kena: 'In the common four-khanda arrangement, khandas 1–2 contain thirteen metrical verses (8 + 5). Khandas 3–4 are prose, with the fourth khanda ending in a short epilogue. The marked verse-to-prose transition is therefore visible even before any theory of compositional layering is proposed.',
    katha: 'The six-valli form is also internally stratified: the first adhyaya is commonly regarded as older than the second. This does not make the second adhyaya an arbitrary appendix; the received redaction binds both halves through repeated vocabulary of the Self, death, sensory restraint and the highest path.',
    prasna: 'The six questions are asked, in order, by Kabandhin Katyayana, Bhargava Vaidarbhi, Kausalya Ashvalayana, Sauryayani Gargya, Shaibya Satyakama and Sukesha Bharadvaja. The order is philosophically cumulative: creation and prana lead to embodied functions, sleep and dream, Om, and finally the person of sixteen parts.',
    mundaka: 'The six sections contain 64 mantras in the common enumeration: 9 and 13 in the first mundaka, 10 and 11 in the second, and 10 and 11 in the third. The balanced three-by-two architecture makes the movement from classification of knowledge to cosmology, meditation and liberation unusually easy to follow.',
    mandukya: 'All twelve mantras participate in one tightly compressed argument. Mantras 3–6 analyze the three familiar conditions of waking, dream and deep sleep; mantra 7 is the hinge that denies that turiya can be classified as merely another empirical mode; mantras 8–12 then reread the same structure through A-U-M and the measureless Om.',
    taittiriya: 'The three vallis are themselves carefully articulated: the Shiksha Valli has 12 anuvakas, the Ananda/Brahmananda Valli 9, and the Bhrigu Valli 10. Traditional manuscript indices at the ends of the vallis preserve an additional layer of textual organization, including opening words and section counts.',
    aitareya: 'The received Upanishad comprises three adhyayas and thirty-three commonly enumerated passages/verses. Its compact size is deceptive: the first adhyaya carries most of the cosmogonic narrative, while the second and third sharply concentrate the questions of birth and consciousness.',
    chandogya: 'The eight prapathakas are subdivided into 13, 24, 19, 17, 24, 16, 26 and 15 khandas respectively. Those unequal chapter sizes reinforce the anthology-like character of the work: some prapathakas collect many short vidyas, while chapters 6–8 sustain much longer philosophical sequences.',
    brhadaranyaka: 'The three traditional kandas are unequal collections rather than symmetrical books. In the common description the Madhu Kanda contains 6 + 6 brahmanas, the Yajnavalkya/Muni Kanda 9 + 6, and the Khila Kanda 15 + 5. These subdivisions help locate individual debates and meditations more precisely than the three broad kanda labels alone.'
  };

  const dateExtras = {
    katha: 'The chronology of the two adhyayas need not be identical. The older Naciketas material and the generally older character assigned to the first adhyaya make the Katha a useful example of a received Upanishad whose narrative and doctrinal layers may have different histories.',
    mandukya: 'The unusually late placement is not unanimous. Olivelle, Hajime Nakamura and Richard King place the text around the beginning or first centuries of the Common Era, whereas other chronologies have argued for a substantially earlier date. The disagreement is best shown explicitly rather than hidden inside one confident century.',
    chandogya: 'Because individual vidyas and stories almost certainly circulated before the final eight-prapathaka compilation, “date of composition” here means the formation of the received collection, not the first utterance of every teaching embedded within it.',
    brhadaranyaka: 'The same distinction applies between the age of individual teachings and the formation of the received six-adhyaya work. Relative chronology is much firmer than a single absolute date for every dialogue or brahmana.'
  };

  const criticalExtras = {
    kena: 'The transmission also preserves minor structural variation: some manuscript traditions place the Kena differently within the Talavakara/Jaiminiya material, and Atharvavedic collections can transmit it without the same fourfold division. These differences are secondary to the stable verse/prose contrast but are worth noting when comparing editions.',
    mundaka: 'Published manuscript comparisons report mostly minor variation, including additional or interpolated wording in some witnesses. The six-section, 64-mantra form is therefore a useful reference point, but a quotation that turns on an anomalous phrase should still be checked against a critical or apparatus-bearing edition.',
    taittiriya: 'The old anukramani-like indices preserved with the vallis are themselves textual evidence. Their section counts do not always map neatly onto the length of the surviving text, which makes them relevant to questions of transmission rather than mere decorative tables of contents.',
    brhadaranyaka: 'The recension problem is not confined to spelling variants. Madhyandina and Kanva can differ in sequence and placement, so concordance is essential when a modern study compares passages across editions.'
  };

  function byHeading(article, heading) {
    return [...article.querySelectorAll('.mahapurana-article-section')].find(sec => sec.querySelector(':scope > h2')?.textContent.trim() === heading);
  }

  function appendNote(section, text, cls) {
    if (!section || !text || section.querySelector(`.${cls}`)) return;
    const body = section.querySelector('.mahapurana-collapse-body');
    if (!body) return;
    const p = document.createElement('p');
    p.className = cls;
    p.textContent = text;
    body.appendChild(p);
  }

  function cleanText(article) {
    const walker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      let value = node.nodeValue;
      replacements.forEach(([from, to]) => { value = value.split(from).join(to); });
      node.nodeValue = value;
    });
  }

  function patch() {
    const article = document.querySelector('.upanishad-research-complete');
    if (!article || article.dataset.textSpecificV6 !== '1' || article.dataset.polishV7 === '1') return false;

    cleanText(article);

    const contents = byHeading(article, 'Contents');
    if (contents) {
      const first = contents.querySelector('.mahapurana-collapse-body > p:first-child');
      if (first && /^This walkthrough follows the actual sequence/i.test(first.textContent.trim())) first.remove();
    }

    const structure = [...article.querySelectorAll('.mahapurana-article-section')].find(sec => /^(Structure|Structure and)/.test(sec.querySelector(':scope > h2')?.textContent.trim() || ''));
    appendNote(structure, structureExtras[slug], 'upanishad-v7-structure-note');

    const date = byHeading(article, 'Date and textual history');
    appendNote(date, dateExtras[slug], 'upanishad-v7-date-note');

    const critical = byHeading(article, 'Critical edition and textual criticism');
    appendNote(critical, criticalExtras[slug], 'upanishad-v7-critical-note');

    const refs = byHeading(article, 'References');
    if (refs) {
      [...refs.querySelectorAll('li')].forEach(li => {
        if (/Nirukti reference entry/i.test(li.textContent)) li.remove();
      });
    }

    article.dataset.polishV7 = '1';
    return true;
  }

  if (!patch()) {
    const observer = new MutationObserver(() => {
      if (patch()) observer.disconnect();
    });
    observer.observe(document.documentElement, {childList:true, subtree:true, characterData:true});
  }
})();
