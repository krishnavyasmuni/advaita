(() => {
  const D = window.SCRIPTURE_DETAIL_DATA = window.SCRIPTURE_DETAIL_DATA || {};
  const arr = v => Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
  const text = x => typeof x === 'string' ? x : (x?.text || x?.summary || x?.description || x?.note || x?.title || '');
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const uniq = xs => { const seen=new Set(); return xs.map(text).map(x=>String(x||'').trim()).filter(x=>{const k=norm(x);if(!k||seen.has(k))return false;seen.add(k);return true;}); };

  const HAZRA = {key:'hazra-rites',title:'R. C. Hazra — Studies in the Puranic Records on Hindu Rites and Customs',detail:'Chronology of Puranic strata from rites, customs, quotations, Smriti relations and later legal citation.',url:'https://books.google.com/books?id=Jar4V3piCeQC'};
  const ROCHER = {key:'rocher',title:'Ludo Rocher — The Puranas (1986)',detail:'Standard survey of Puranic textual history, recensions, dating problems and individual Puranas.',url:'https://books.google.com/books?id=n0-4RJh5FgoC'};
  const DIMMITT = {key:'dimmitt',title:'Cornelia Dimmitt and J. A. B. van Buitenen — Classical Hindu Mythology',detail:'Comparative reader and study of the stratified Sanskrit Purana tradition.',url:'https://books.google.com/books?id=TmU8EAAAQBAJ'};

  const WIKI = {
    'Brahma Purāṇa':'Brahma_Purana','Padma Purāṇa':'Padma_Purana','Viṣṇu Purāṇa':'Vishnu_Purana','Śiva Purāṇa':'Shiva_Purana',
    'Liṅga Purāṇa':'Linga_Purana','Garuḍa Purāṇa':'Garuda_Purana','Nāradīya Purāṇa':'Naradiya_Purana','Bhāgavata Purāṇa':'Bhagavata_Purana',
    'Agni Purāṇa':'Agni_Purana','Skanda Purāṇa':'Skanda_Purana','Bhaviṣya Purāṇa':'Bhavishya_Purana','Brahmavaivarta Purāṇa':'Brahma_Vaivarta_Purana',
    'Mārkaṇḍeya Purāṇa':'Markandeya_Purana','Vāmana Purāṇa':'Vamana_Purana','Varāha Purāṇa':'Varaha_Purana','Matsya Purāṇa':'Matsya_Purana',
    'Kūrma Purāṇa':'Kurma_Purana','Brahmāṇḍa Purāṇa':'Brahmanda_Purana','Vāyu Purāṇa':'Vayu_Purana','Devī Bhāgavata Purāṇa':'Devi_Bhagavata_Purana',
    'Mahābhāgavata Purāṇa':'Mahabhagavata_Purana'
  };

  const TRADITIONAL = [
    'Brahma Purāṇa','Padma Purāṇa','Viṣṇu Purāṇa','Śiva Purāṇa','Liṅga Purāṇa','Garuḍa Purāṇa','Nāradīya Purāṇa','Bhāgavata Purāṇa',
    'Agni Purāṇa','Skanda Purāṇa','Bhaviṣya Purāṇa','Brahmavaivarta Purāṇa','Mārkaṇḍeya Purāṇa','Vāmana Purāṇa','Varāha Purāṇa','Matsya Purāṇa','Kūrma Purāṇa','Brahmāṇḍa Purāṇa'
  ];
  const EXTRA_MAHA = ['Vāyu Purāṇa','Devī Bhāgavata Purāṇa','Mahābhāgavata Purāṇa'];
  const ALL = [...TRADITIONAL,...EXTRA_MAHA];

  function entry(name){ return D[`Purāṇa:${name}`] || D[name] || {}; }
  function put(name, data){ D[`Purāṇa:${name}`] = Object.assign({}, D[name] || {}, D[`Purāṇa:${name}`] || {}, data); }

  function normalizeSources(name,e){
    const out=[]; const seen=new Set();
    const add=s=>{
      if(!s)return;
      const obj=typeof s==='string'?{title:s,detail:'',url:''}:s;
      const k=norm((obj.title||'')+' '+(obj.url||'')); if(!k||seen.has(k))return; seen.add(k); out.push(obj);
    };
    arr(e.sources).forEach(add); arr(e.references).forEach(add); arr(e.primarySources).forEach(add);
    if(WIKI[name]) add({key:'wiki',title:`Wikipedia — ${String(name).replace(/Purāṇa/g,'Purana')}`,detail:'Coverage checklist for structure, manuscripts, major contents and modern bibliography; checked against specialist sources.',url:`https://en.wikipedia.org/wiki/${WIKI[name]}`});
    add(HAZRA); add(ROCHER); add(DIMMITT);
    return out;
  }

  function flattenOldSection(s){
    const paragraphs=uniq(arr(s?.paragraphs || s?.text));
    const bullets=uniq(arr(s?.bullets));
    arr(s?.books).forEach((b,i)=>{
      if(typeof b==='string') bullets.push(b);
      else {
        const label=`${b.number ? b.number+' — ' : ''}${b.title || b.name || `Part ${i+1}`}`;
        const body=uniq([b.summary,b.text,b.description,b.note]).join(' ');
        bullets.push(body ? `${label}: ${body}` : label);
      }
    });
    return {title:s?.title || 'Topic',paragraphs:uniq(paragraphs),bullets:uniq(bullets)};
  }

  function classify(title){
    const t=norm(title);
    if(/date|chronolog|provenance|formation/.test(t)) return 'date';
    if(/manuscript|edition|transmission|recension|textual history/.test(t)) return 'manuscripts';
    if(/structure|books|skandha|khanda|samhita|parts|chapter map|organization/.test(t)) return 'structure';
    if(/theolog|philosoph|bhakti|jnana|yoga|advaita|vedanta|supreme reality|sectarian/.test(t)) return 'theology';
    if(/ritual|dharma|vrata|rite|custom|social|pilgrimage|sacred geography|temple|gift|dana|funeral|shraddha|worship|festival/.test(t)) return 'rites';
    if(/reception|influence|commentar|scholarship|modern|catalogue value|historical significance/.test(t)) return 'reception';
    return 'contents';
  }

  function sourceBullet(s){
    if(typeof s==='string') return s;
    const title=s?.title || s?.citation || text(s); return title + (s?.detail ? ` — ${s.detail}` : '');
  }

  function standardize(name){
    const e=entry(name); if(!Object.keys(e).length)return;
    const old=arr(e.articleSections);
    const buckets={date:[],structure:[],contents:[],theology:[],manuscripts:[],reception:[],rites:[]};
    old.forEach(s=>buckets[classify(s?.title)].push(flattenOldSection(s)));

    const fieldContents=uniq([...arr(e.chapterMap),...arr(e.contents),...arr(e.keyContents),...arr(e.namedFeatures),...arr(e.primaryPassages)]);
    const rites=uniq([...arr(e.rituals),...arr(e.vratas),...arr(e.sacredGeography),...arr(e.pilgrimage),...arr(e.dharma)]);
    const receptionBullets=uniq([...arr(e.dependencies),...arr(e.scholarlyPositions),...arr(e.scholarlyDebates)]);
    const recensions=uniq(arr(e.primaryRecensions));
    const sources=normalizeSources(name,e);

    const sections=[
      {title:'Date of composition',paragraphs:uniq([e.period,e.history,e.datingBasis,e.hazraNotes,e.milieu]),subsections:buckets.date},
      {title:'Structure',paragraphs:uniq([e.extent,e.structure]),bullets:recensions,subsections:buckets.structure},
      {title:'Contents',paragraphs:uniq([e.overview]),bullets:fieldContents,subsections:buckets.contents},
      {title:'Theology',paragraphs:uniq([e.profile,...arr(e.theology),...arr(e.themes),...arr(e.teachings)]),subsections:buckets.theology},
      {title:'Manuscripts and editions',paragraphs:uniq([e.manuscripts]),bullets:uniq([...arr(e.primaryEvidence),...recensions]),subsections:buckets.manuscripts},
      {title:'Influences and reception',paragraphs:uniq([e.reception,e.significance]),bullets:receptionBullets,subsections:buckets.reception},
      {title:'Rites, dharma and social history',paragraphs:uniq([e.ritualHistory,e.socialHistory]),bullets:rites,subsections:buckets.rites},
      {title:'Further reading',bullets:uniq([...sources.map(sourceBullet),...arr(e.bibliography)])}
    ].filter(s=>arr(s.paragraphs).length||arr(s.bullets).length||arr(s.subsections).length);

    put(name,{articleSections:sections,sources,mahapuranaFinal:true});
  }

  // Vishnu is already the benchmark article. Audit it rather than rebuilding it.
  (()=>{
    const e=entry('Viṣṇu Purāṇa'); if(!Object.keys(e).length)return;
    const sections=arr(e.articleSections).map(s=>Object.assign({},s,{paragraphs:arr(s.paragraphs).slice(),bullets:arr(s.bullets).slice(),subsections:arr(s.subsections).slice()}));
    const get=t=>sections.find(s=>norm(s.title)===norm(t));
    const addp=(title,paras)=>{const s=get(title);if(!s)return;s.paragraphs=uniq([...arr(s.paragraphs),...paras]);};
    addp('Structure',[
      'The manuscript record is unusually broad for a Purana. The New Catalogus Catalogorum lists roughly 275 Vishnu Purana manuscripts in public and private collections, a sign of wide premodern circulation from northern India and Nepal to the south.',
      'The Baroda editors examined forty-three manuscripts in northern and southern script groups. The critical text is therefore based on a substantially wider manuscript comparison than the nineteenth-century printed editions.'
    ]);
    addp('Critical edition',[
      'Taylor notes that the earliest dated manuscript used in discussion of the tradition is from about 1207 CE; other dated witnesses are much later. The age of a manuscript is not the age of the stories it preserves, but dated witnesses establish a firm history of transmission.',
      'Two Sanskrit commentaries printed with a widely used modern Sanskrit edition are the Vishnucittiya, associated with Vishnucitta and commonly placed around the twelfth century, and the Atmaprakasha of Sridhara, generally placed in the thirteenth to fourteenth century. Their different Vedantic orientations are important evidence for the Purana’s broad exegetical reception.'
    ]);
    addp('Theology',[
      'Older scholarship often described the Vishnu Purana as a Pancaratra document because of its strongly Vaishnava theology. That description is useful for religious affinity but should not erase genre distinctions: the Purana is not simply one of the later technical Pancaratra Samhitas. Its own form remains Puranic—cosmology, genealogy, dharma, narrative and liberation teaching arranged around Vishnu.'
    ]);
    addp('Rites, dharma and social history',[
      'Book III gives unusually concrete evidence for household religion. The sequence treats birth and naming, marriage, daily purification, bathing, libations and offerings, hospitality, meals, morning and evening worship, death observance, monthly and annual ancestral rites, the selection of Brahmins for shraddha, permitted and prohibited foods, and circumstances believed to invalidate the rite. This compact ritual dossier is one reason Hazra treated the Vishnu Purana as a major witness for the development of Puranic rites and customs.'
    ]);
    const sources=normalizeSources('Viṣṇu Purāṇa',e);
    const extra=[
      {key:'taylor',title:'McComas Taylor — The Vishnu Purana: Ancient Annals of the God with Lotus Eyes (ANU Press, 2021)',detail:'Complete translation of the Baroda critical text, with manuscript census, textual history, intertextuality and theology.',url:'https://press.anu.edu.au/publications/textbooks/visnu-purana'},
      {key:'pathak',title:'M. M. Pathak (ed.) — The Critical Edition of the Vishnupuranam, 2 vols. (1997–1999)',detail:'Oriental Institute critical edition based on extensive manuscript collation.',url:'https://books.google.com/books?id=BjwqAAAAYAAJ'}
    ];
    extra.forEach(x=>{if(!sources.some(s=>norm(s.title)===norm(x.title)))sources.push(x);});
    const fr=get('Further reading'); if(fr) fr.bullets=uniq([...arr(fr.bullets),...sources.map(sourceBullet)]);
    put('Viṣṇu Purāṇa',{articleSections:sections,sources,mahapuranaFinal:true});
  })();

  ALL.filter(n=>n!=='Viṣṇu Purāṇa').forEach(standardize);
})();

// Preserve the already-expanded dossiers before the dedicated 12 article files override fields.
(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const NAMES=['Nāradīya Purāṇa','Bhāgavata Purāṇa','Agni Purāṇa','Skanda Purāṇa','Bhaviṣya Purāṇa','Brahmavaivarta Purāṇa','Mārkaṇḍeya Purāṇa','Vāmana Purāṇa','Varāha Purāṇa','Matsya Purāṇa','Kūrma Purāṇa','Brahmāṇḍa Purāṇa'];
  const FIELDS=['articleSections','leadParagraphs','chapterMap','rituals','vratas','sacredGeography','pilgrimage','dharma','dependencies','scholarlyPositions','scholarlyDebates','primaryEvidence','bibliography','sources'];
  const clone=v=>{try{return JSON.parse(JSON.stringify(v));}catch(_){return v;}};
  const snapshot={};
  NAMES.forEach(name=>{
    const e=D[`Purāṇa:${name}`]||D[name]||{};
    snapshot[name]={};
    FIELDS.forEach(field=>{if(e[field]!=null)snapshot[name][field]=clone(e[field]);});
  });
  window.__MAHAPURANA_EXPANDED_SNAPSHOT__=snapshot;
})();
