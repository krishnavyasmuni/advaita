(() => {
  if(!window.__UPANISHAD_MAHAPURANA_TEMPLATE_REQUESTED__){
    window.__UPANISHAD_MAHAPURANA_TEMPLATE_REQUESTED__=true;
    const finalReader=document.createElement('script');
    finalReader.src='/vivekadrishti/assets/js/upanishads/current/mahapurana-template-live.js?build=20260827-1045';
    finalReader.async=false;
    document.head.appendChild(finalReader);
  }

  const roman = s => String(s ?? '')
    .replace(/Ś/g,'Sh').replace(/ś/g,'sh').replace(/Ṣ/g,'Sh').replace(/ṣ/g,'sh')
    .replace(/Ṛ/g,'Ri').replace(/ṛ/g,'ri').replace(/Ṝ/g,'Ri').replace(/ṝ/g,'ri')
    .replace(/Ṅ/g,'Ng').replace(/ṅ/g,'ng').replace(/Ñ/g,'Ny').replace(/ñ/g,'ny')
    .replace(/Ṃ|Ṁ/g,'M').replace(/ṃ|ṁ/g,'m').replace(/Ḥ/g,'H').replace(/ḥ/g,'h')
    .replace(/Ṭ/g,'T').replace(/ṭ/g,'t').replace(/Ḍ/g,'D').replace(/ḍ/g,'d').replace(/Ṇ/g,'N').replace(/ṇ/g,'n')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'').normalize('NFC');

  function styleKena(reader){
    if(!reader || reader.classList.contains('universal-wiki-reader') || reader.classList.contains('itihasa-v5-reader')) return;
    const article=reader.querySelector('.kena-article');
    if(!article || article.dataset.universalKena==='1') return;
    article.dataset.universalKena='1';reader.classList.add('kena-universal-reader');
    const h1=reader.querySelector('.kena-article-head h1');
    if(h1){h1.textContent='Kena Upanishad';if(!reader.querySelector('.kena-universal-dev')){const d=document.createElement('div');d.className='kena-universal-dev';d.textContent='केनोपनिषद्';h1.insertAdjacentElement('afterend',d);}}
    const walker=document.createTreeWalker(reader,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{const p=node.parentElement;if(!p||p.closest('[lang="sa"],[lang="sa-Deva"],.kena-references,.itihasa-source-card,.kena-universal-dev'))return;node.nodeValue=roman(node.nodeValue);});
  }

  const obs=new MutationObserver(()=>document.querySelectorAll('.kena-article-reader:not(.upanishad-mahapurana-reader)').forEach(styleKena));
  obs.observe(document.body,{childList:true,subtree:true});

  document.addEventListener('click',e=>{
    const a=e.target.closest?.('.kena-universal-reader .kena-cite a');if(!a)return;
    const m=(a.getAttribute('href')||'').match(/#kena-ref-(\d+)/);if(!m)return;
    e.preventDefault();e.stopImmediatePropagation();
    const n=Number(m[1]);const li=document.getElementById(`kena-ref-${n}`);if(!li)return;
    document.querySelector('.kena-universal-source-card')?.remove();
    const card=document.createElement('aside');card.className='itihasa-source-card kena-universal-source-card';
    const link=li.querySelector('a[href]');const copy=li.cloneNode(true);copy.querySelectorAll('a').forEach(x=>x.remove());
    card.innerHTML=`<button class="itihasa-source-close" type="button" aria-label="Close source">×</button><div class="itihasa-source-num">Source ${n}</div><p>${copy.innerHTML}</p>${link?`<a href="${link.href}" target="_blank" rel="noopener">Open source ↗</a>`:''}`;
    document.body.append(card);card.querySelector('.itihasa-source-close')?.addEventListener('click',()=>card.remove());
  },true);

  if(!document.getElementById('kena-universal-v11-style')){
    const s=document.createElement('style');s.id='kena-universal-v11-style';s.textContent=`
      .kena-universal-reader{max-width:1160px!important;background:#f7f4ee!important}
      .kena-universal-reader .kena-article-head{background:#fbfaf7!important;border-bottom:1px solid rgba(74,66,56,.16)!important;padding-bottom:17px!important}
      .kena-universal-reader .kena-article-head h1{margin:0 0 2px!important;color:#006f71!important;font-family:Vollkorn,Georgia,serif!important;font-size:40px!important;font-weight:400!important;line-height:1.08!important}
      .kena-universal-dev{color:#746b61;font-family:'Noto Serif Devanagari','Nirmala UI',serif;font-size:17px;line-height:1.3;margin:1px 0 4px}
      .kena-universal-reader .kena-article-scroll{background:#fbfaf7!important}.kena-universal-reader .kena-article{color:#3c362e!important;font-family:Merriweather,Georgia,serif!important}
      .kena-universal-reader .kena-article p,.kena-universal-reader .kena-article li,.kena-universal-reader .kena-article td,.kena-universal-reader .kena-article th{color:#3c362e!important;font-family:Merriweather,Georgia,serif!important;font-size:16.1px!important;line-height:1.66!important}
      .kena-universal-reader .kena-lead p{font-size:16.5px!important;line-height:1.68!important}.kena-universal-reader .kena-section h2{margin:30px 0 15px!important;padding:0 0 6px!important;color:#3c362e!important;font-family:Vollkorn,Georgia,serif!important;font-size:28px!important;font-weight:400!important;line-height:1.18!important;border-bottom:1px solid rgba(0,120,122,.32)!important}.kena-universal-reader .kena-section h3{color:#4a433b!important;font-family:Vollkorn,Georgia,serif!important;font-size:21px!important;font-weight:500!important}
      .kena-universal-reader a,.kena-universal-reader .kena-cite a{color:#5b3ec4!important}.kena-universal-reader .kena-infobox{background:#f4f1eb!important;color:#3c362e!important;border-color:rgba(92,82,70,.30)!important;font-family:Merriweather,Georgia,serif!important}.kena-universal-reader .kena-infobox-title{background:rgba(0,111,113,.075)!important;color:#3c362e!important;font-family:Vollkorn,Georgia,serif!important;font-size:22px!important}.kena-universal-reader .kena-info-row,.kena-universal-reader .kena-info-row b,.kena-universal-reader .kena-info-row span{font-family:Merriweather,Georgia,serif!important;color:#3c362e!important}
      .kena-universal-reader .kena-toc{background:#f5f1ea!important;border-color:rgba(92,82,70,.24)!important}.kena-universal-reader .kena-toc-title{color:#006f71!important;font-family:Vollkorn,Georgia,serif!important}.kena-universal-source-card{font-family:Merriweather,Georgia,serif!important;color:#3c362e!important}.kena-universal-source-card a{color:#5b3ec4!important}
      @media(max-width:760px){.kena-universal-reader .kena-infobox{width:100%!important;float:none!important;margin:0 0 18px!important}.kena-universal-reader .kena-article-head h1{font-size:34px!important}.kena-universal-reader .kena-article p,.kena-universal-reader .kena-article li{font-size:15.8px!important}.kena-universal-reader .kena-section h2{font-size:26px!important}}
    `;document.head.append(s);
  }
})();