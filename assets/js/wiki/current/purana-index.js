/* Audited 60-entry Purāṇa directory: 18 Mahāpurāṇas + 39 Upapurāṇa witness-labels + 3 other Mahāpurāṇa attestations. */
(()=>{
  const root=document.getElementById('scripture-browser');
  if(!root)return;
  const stage=root.querySelector('.browser-stage');
  if(!stage)return;

  const MAHA=[
    ['Brahma Purāṇa','brahma-purana'],['Padma Purāṇa','padma-purana'],['Viṣṇu Purāṇa','vishnu-purana'],['Śiva Purāṇa','shiva-purana'],
    ['Liṅga Purāṇa','linga-purana'],['Garuḍa Purāṇa','garuda-purana'],['Nāradīya Purāṇa','naradiya-purana'],['Bhāgavata Purāṇa','bhagavata-purana'],
    ['Agni Purāṇa','agni-purana'],['Skanda Purāṇa','skanda-purana'],['Bhaviṣya Purāṇa','bhavishya-purana'],['Brahmavaivarta Purāṇa','brahmavaivarta-purana'],
    ['Mārkaṇḍeya Purāṇa','markandeya-purana'],['Vāmana Purāṇa','vamana-purana'],['Varāha Purāṇa','varaha-purana'],['Matsya Purāṇa','matsya-purana'],
    ['Kūrma Purāṇa','kurma-purana'],['Brahmāṇḍa Purāṇa','brahmanda-purana']
  ];
  const OTHER=[['Vāyu Purāṇa','vayu-purana'],['Devī Bhāgavata Purāṇa','devi-bhagavata-purana'],['Mahābhāgavata Purāṇa','mahabhagavata-purana']];
  const UPA=[
    ['Ādi Purāṇa','adi-purana'],['Āditya Purāṇa','aditya-purana'],['Ādya / Sanatkumāra Purāṇa','adya-sanatkumara-purana'],['Āṇḍa Purāṇa','anda-purana'],
    ['Another Brahmāṇḍa Purāṇa','another-brahmanda-purana'],['Another Nāradīya Purāṇa','another-naradiya-purana'],['Auśanasa Purāṇa','ausanasa-purana'],['Bhāgavata Purāṇa','bhagavata-purana'],
    ['Bhārgava Purāṇa','bhargava-purana'],['Brahmāṇḍa Purāṇa','brahmanda-purana'],['Bṛhaddharma Purāṇa','brhaddharma-purana'],['Bṛhannandīśvara Purāṇa','brhannandisvara-purana'],
    ['Bṛhannāradīya Purāṇa','brhannaradiya-purana'],['Daurvāsasa Purāṇa','daurvasasa-purana'],['Dharma Purāṇa','dharma-purana'],['Kālikā Purāṇa','kalika-purana'],
    ['Kapila Purāṇa','kapila-purana'],['Kaumāra Purāṇa','kaumara-purana'],['Kriyāyogasāra Purāṇa','kriyayogasara-purana'],['Māheśa Purāṇa','mahesa-purana'],
    ['Māheśvara Purāṇa','mahesvara-purana'],['Mānava Purāṇa','manava-purana'],['Mārīca Purāṇa','marica-purana'],['Nandikṛta Purāṇa','nandikrta-purana'],
    ['Nandīśvara Purāṇa','nandisvara-purana'],['Nāradīya Purāṇa','naradiya-purana'],['Nṛsiṃha Purāṇa','nrsimha-purana'],['Parāśara Purāṇa','parasara-purana'],
    ['Sāmba Purāṇa','samba-purana'],['Sanatkumāra Purāṇa','sanatkumara-purana'],['Saura Purāṇa','saura-purana'],['Śiva Purāṇa','siva-purana'],
    ['Śivadharma Purāṇa','sivadharma-purana'],['Skanda Purāṇa','skanda-purana'],['Vāmana Purāṇa','vamana-purana'],['Varuṇa Purāṇa','varuna-purana'],
    ['Vāsiṣṭha Purāṇa','vasistha-purana'],['Viṣṇudharma Purāṇa','visnudharma-purana'],['Viṣṇudharmottara Purāṇa','visnudharmottara-purana']
  ];
  const W={
    'Devī Bhāgavata 1.3.13–16':['Sanatkumāra Purāṇa','Nṛsiṃha Purāṇa','Nāradīya Purāṇa','Śiva Purāṇa','Daurvāsasa Purāṇa','Kapila Purāṇa','Mānava Purāṇa','Auśanasa Purāṇa','Varuṇa Purāṇa','Kālikā Purāṇa','Sāmba Purāṇa','Nandikṛta Purāṇa','Saura Purāṇa','Parāśara Purāṇa','Āditya Purāṇa','Māheśvara Purāṇa','Bhāgavata Purāṇa','Vāsiṣṭha Purāṇa'],
    'Kūrma Purāṇa 1.1.17–20':['Sanatkumāra Purāṇa','Nṛsiṃha Purāṇa','Skanda Purāṇa','Śivadharma Purāṇa','Daurvāsasa Purāṇa','Nāradīya Purāṇa','Kapila Purāṇa','Vāmana Purāṇa','Auśanasa Purāṇa','Brahmāṇḍa Purāṇa','Varuṇa Purāṇa','Kālikā Purāṇa','Māheśvara Purāṇa','Sāmba Purāṇa','Saura Purāṇa','Parāśara Purāṇa','Mārīca Purāṇa','Bhārgava Purāṇa'],
    'Padma Purāṇa, Pātāla-khaṇḍa 111.94b–98':['Ādya / Sanatkumāra Purāṇa','Nṛsiṃha Purāṇa','Āṇḍa Purāṇa','Daurvāsasa Purāṇa','Another Nāradīya Purāṇa','Kapila Purāṇa','Mānava Purāṇa','Auśanasa Purāṇa','Another Brahmāṇḍa Purāṇa','Varuṇa Purāṇa','Kālikā Purāṇa','Māheśa Purāṇa','Sāmba Purāṇa','Saura Purāṇa','Parāśara Purāṇa','Mārīca Purāṇa','Bhārgava Purāṇa','Kaumāra Purāṇa'],
    'Bṛhaddharma Purāṇa 1.25.23–26':['Ādi Purāṇa','Āditya Purāṇa','Bṛhannāradīya Purāṇa','Nāradīya Purāṇa','Nandīśvara Purāṇa','Bṛhannandīśvara Purāṇa','Sāmba Purāṇa','Kriyāyogasāra Purāṇa','Kālikā Purāṇa','Dharma Purāṇa','Viṣṇudharmottara Purāṇa','Śivadharma Purāṇa','Viṣṇudharma Purāṇa','Vāmana Purāṇa','Varuṇa Purāṇa','Nṛsiṃha Purāṇa','Bhārgava Purāṇa','Bṛhaddharma Purāṇa']
  };
  const EXTANT=new Set(['Ādi Purāṇa','Bṛhaddharma Purāṇa','Bṛhannāradīya Purāṇa','Kālikā Purāṇa','Kapila Purāṇa','Kriyāyogasāra Purāṇa','Nṛsiṃha Purāṇa','Sāmba Purāṇa','Saura Purāṇa','Śivadharma Purāṇa','Viṣṇudharma Purāṇa','Viṣṇudharmottara Purāṇa']);
  const LOST=new Set(['Āditya Purāṇa','Āṇḍa Purāṇa','Another Brahmāṇḍa Purāṇa','Another Nāradīya Purāṇa','Auśanasa Purāṇa','Daurvāsasa Purāṇa','Mārīca Purāṇa','Nandikṛta Purāṇa','Nandīśvara Purāṇa']);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normal=v=>String(v||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'');
  const count=name=>Object.values(W).filter(xs=>xs.includes(name)).length;
  const active=()=>!!root.querySelector('.corpus-button[data-corpus="puranas"].is-active')||normal(stage.querySelector('.shastra-title')?.textContent)==='puranas';

  function style(){
    if(document.getElementById('purana-wiki-directory-v7-style'))return;
    const s=document.createElement('style');s.id='purana-wiki-directory-v7-style';s.textContent=`
      .purana-wiki-v7{background:#fff;color:#202122;font-family:Arial,Helvetica,sans-serif}.purana-wiki-v7 .intro{margin:0 0 16px;padding:12px 14px;border:1px solid #a2a9b1;background:#f8f9fa;font-size:14px;line-height:1.55}.purana-wiki-v7 .intro p{margin:0 0 7px!important;color:#202122!important;font:inherit!important}.purana-wiki-v7 .intro p:last-child{margin-bottom:0!important}
      .purana-wiki-v7 details{margin:0;border-top:1px solid #a2a9b1;background:#fff}.purana-wiki-v7 details:last-child{border-bottom:1px solid #a2a9b1}.purana-wiki-v7 summary{list-style:none;position:relative;padding:13px 40px 13px 4px;cursor:pointer;color:#202122;font:400 23px/1.25 Georgia,'Times New Roman',serif}.purana-wiki-v7 summary::-webkit-details-marker{display:none}.purana-wiki-v7 summary::after{content:'›';position:absolute;right:10px;top:50%;transform:translateY(-50%) rotate(90deg);color:#54595d}.purana-wiki-v7 details[open]>summary::after{transform:translateY(-50%) rotate(-90deg)}.purana-wiki-v7 summary small{float:right;margin-top:7px;color:#72777d;font:11px/1.3 Arial,Helvetica,sans-serif}
      .purana-wiki-v7 .list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border-top:1px solid #eaecf0}.purana-wiki-v7 .entry{display:block;padding:10px 12px;border-bottom:1px solid #eaecf0;text-decoration:none!important;background:#fff}.purana-wiki-v7 .entry:nth-child(odd){border-right:1px solid #eaecf0}.purana-wiki-v7 .entry:hover{background:#f8f9fa}.purana-wiki-v7 .name{display:block;color:#36c;font-size:15px;line-height:1.35}.purana-wiki-v7 .entry:hover .name{text-decoration:underline}.purana-wiki-v7 .meta{display:block;margin-top:3px;color:#54595d;font-size:11px;line-height:1.4}.purana-wiki-v7 .status{display:inline-block;margin-right:5px;padding:1px 5px;border:1px solid #a2a9b1;background:#f8f9fa;font-size:10px}.purana-wiki-v7 .note{padding:10px 12px;border-top:1px solid #eaecf0;background:#f8f9fa;color:#54595d;font-size:12px;line-height:1.5}
      @media(max-width:700px){.purana-wiki-v7 summary{font-size:21px}.purana-wiki-v7 .list{grid-template-columns:1fr}.purana-wiki-v7 .entry:nth-child(odd){border-right:0}}
    `;document.head.append(s);
  }
  const major=([name,route])=>`<a class="entry" href="/vivekadrishti/articles/scripture/${route}/"><span class="name">${esc(name)}</span><span class="meta">Purāṇa encyclopedia article · exact nine-section research template</span></a>`;
  const minor=([name,route])=>{const status=EXTANT.has(name)?'extant / transmitted':LOST.has(name)?'lost / fragmentary':'identity / preservation disputed';return `<a class="entry" href="/vivekadrishti/articles/scripture/upapuranas/${route}/"><span class="name">${esc(name)}</span><span class="meta"><span class="status">${status}</span>${count(name)} of 4 traditional list witnesses</span></a>`};
  const html=()=>`<h2 class="shastra-title">Purāṇas</h2><div class="purana-wiki-v7"><div class="intro"><p><b>Purāṇa research directory.</b> All 60 visible entries use audited permanent routes. Article pages share the same Wikipedia-style research shell and the same nine headings.</p><p><b>Corpus accounting:</b> 18 traditional Mahāpurāṇas + 39 distinct Upapurāṇa witness-labels + 3 other Mahāpurāṇa attestations. Homonymous labels are kept separate where the source lists distinguish them.</p></div><details open><summary>Mahāpurāṇas <small>18 principal entries</small></summary><div class="list">${MAHA.map(major).join('')}</div></details><details><summary>Upapurāṇas <small>39 witness-labels · 4 lists</small></summary><div class="note">Each route distinguishes composition, recensions, manuscript survival, printed editions and genuinely critical editions. Lost texts are treated as testimonia dossiers rather than supplied with invented contents.</div><div class="list">${UPA.map(minor).join('')}</div></details><details><summary>Other Mahāpurāṇa attestations <small>3 pages</small></summary><div class="list">${OTHER.map(major).join('')}</div></details></div>`;
  let busy=false;
  function render(force=false){if(busy||stage.hidden||(!force&&!active())||stage.querySelector('.purana-wiki-v7'))return;busy=true;style();stage.innerHTML=html();busy=false;}
  function schedule(force=false){requestAnimationFrame(()=>requestAnimationFrame(()=>render(force)));setTimeout(()=>render(force),25);setTimeout(()=>render(force),120)}
  const obs=new MutationObserver(()=>{if(!busy&&active()&&!stage.querySelector('.purana-wiki-v7'))schedule(false)});obs.observe(stage,{childList:true,subtree:true,attributes:true,attributeFilter:['hidden']});
  root.addEventListener('click',e=>{if(e.target.closest('.corpus-button[data-corpus="puranas"]'))schedule(true)});
  document.addEventListener('click',e=>{if(e.target.closest('#scripture-browser .corpus-button[data-corpus="puranas"]'))schedule(true)},true);
  render(false);
})();
