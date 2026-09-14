(() => {
  const ROOT = '.current-up-reader';
  const GENERIC_IMG = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_monk_meditates_under_a_tree.jpg';
  const GENERIC_PAGE = 'https://commons.wikimedia.org/wiki/File:A_monk_meditates_under_a_tree.jpg';

  const SPECIAL = {
    'Āruṇi':'Aruneya Upanishad',
    'Sannyāsa':'Brihat-Sannyasa Upanishad',
    'Turīyātītāvadhūta':'Turiyatitavadhuta Upanishad',
    'Nārada-Parivrājaka':'Naradaparivrajaka Upanishad',
    'Paramahaṃsa-Parivrājaka':'Paramahamsa Parivrajaka Upanishad',
    'Nṛsiṃhatāpanī':'Nrisimha Tapaniya Upanishad',
    'Tripurātāpinī':'Tripuratapini Upanishad',
    'Gopālatāpanī':'Gopala Tapani Upanishad',
    'Rāmatāpanī':'Rama Tapaniya Upanishad',
    'Kali-Saṇṭāraṇa':'Kali-Santarana Upanishad',
    'Rudrākṣajābāla':'Rudrakshajabala Upanishad',
    'Kālāgnirudra':'Kalagni Rudra Upanishad',
    'Bṛhajjābāla':'Brihajjabala Upanishad',
    'Bhasmajābāla':'Bhasmajabala Upanishad',
    'Saubhāgyalakṣmī':'Saubhagyalakshmi Upanishad',
    'Sarasvatī-rahasya':'Sarasvati-rahasya Upanishad',
    'Maitrāyaṇī':'Maitrayaniya Upanishad',
    'Kauṣītaki':'Kaushitaki Upanishad',
    'Śvetāśvatara':'Shvetashvatara Upanishad',
    'Īśāvāsya':'Isha Upanishad',
    'Bṛhadāraṇyaka':'Brihadaranyaka Upanishad',
    'Māṇḍūkya':'Mandukya Upanishad',
    'Muṇḍaka':'Mundaka Upanishad',
    'Praśna':'Prashna Upanishad',
    'Kaṭha':'Katha Upanishad',
    'Taittirīya':'Taittiriya Upanishad',
    'Aitareya':'Aitareya Upanishad',
    'Nirvāṇa':'Nirvana Upanishad'
  };

  const strip = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[ṣś]/gi,'s').replace(/[ṛṝ]/gi,'r').replace(/[ṇñṅ]/gi,'n').replace(/[ṭ]/gi,'t').replace(/[ḍ]/gi,'d').replace(/[ā]/gi,'a').replace(/[ī]/gi,'i').replace(/[ū]/gi,'u').replace(/[ṃṁ]/gi,'m');
  const titleFor = r => r.querySelector('.kena-infobox-title')?.textContent?.trim() || 'Upanishad';
  const nameFor = r => titleFor(r).replace(/\s+Upanishad$/i,'').trim();

  function figureFor(reader){
    const box = reader.querySelector('.current-upanishad-infobox, .kena-infobox');
    if(!box) return null;
    let figure = box.querySelector('figure');
    if(!figure){
      figure = document.createElement('figure');
      figure.className = 'wiki-infobox-image current-up-art';
      const after = box.querySelector('.ch-dev') || box.querySelector('.kena-infobox-title');
      after?.insertAdjacentElement('afterend', figure);
    }
    let a = figure.querySelector('a');
    if(!a){ a=document.createElement('a'); a.target='_blank'; a.rel='noopener'; figure.prepend(a); }
    let img = a.querySelector('img');
    if(!img){ img=document.createElement('img'); img.loading='eager'; a.append(img); }
    let cap = figure.querySelector('figcaption');
    if(!cap){ cap=document.createElement('figcaption'); figure.append(cap); }
    figure.style.display='';
    return {figure,a,img,cap};
  }

  function generic(reader){
    const f=figureFor(reader); if(!f) return;
    f.figure.classList.add('current-up-generic-art');
    f.a.href=GENERIC_PAGE;
    f.img.removeAttribute('onerror');
    f.img.referrerPolicy='no-referrer';
    f.img.alt='Meditative forest scene';
    f.img.onerror=null;
    f.img.src=GENERIC_IMG;
    f.cap.textContent='';
    f.cap.style.display='none';
  }

  function wiki(reader,page){
    if(!page?.thumbnail?.source) return false;
    const f=figureFor(reader); if(!f) return false;
    f.figure.classList.remove('current-up-generic-art');
    f.a.href=page.fullurl || `https://en.wikipedia.org/wiki/${encodeURIComponent((page.title||'').replace(/ /g,'_'))}`;
    f.img.removeAttribute('onerror');
    f.img.referrerPolicy='no-referrer';
    f.img.alt=page.title || titleFor(reader);
    f.img.onerror=()=>generic(reader);
    f.img.src=page.thumbnail.source;
    f.cap.textContent=page.title ? `${page.title} — Wikipedia` : '';
    f.cap.style.display=page.title?'':'none';
    return true;
  }

  function score(p,wanted){
    const t=strip(p?.title||'').toLowerCase(), w=strip(wanted).toLowerCase();
    let s=0;
    if(t===w) s+=100;
    if(t.includes('upanishad')) s+=30;
    const stem=w.replace(/\s+upanishad$/,'').trim();
    if(stem && t.includes(stem)) s+=50;
    if(p?.thumbnail?.source) s+=20;
    return s;
  }

  async function lookup(reader){
    const name=nameFor(reader);
    const wanted=SPECIAL[name] || `${strip(name)} Upanishad`;
    try{
      const exact=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages%7Cinfo&piprop=thumbnail&pithumbsize=900&inprop=url&titles=${encodeURIComponent(wanted)}`;
      let res=await fetch(exact,{mode:'cors',credentials:'omit'});
      let json=await res.json();
      let pages=Object.values(json?.query?.pages||{});
      let p=pages.find(x=>x.thumbnail?.source && !x.missing);
      if(p) return p;
      const q=`${strip(name)} Upanishad`;
      const search=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=0&gsrlimit=6&gsrsearch=${encodeURIComponent(q)}&prop=pageimages%7Cinfo&piprop=thumbnail&pithumbsize=900&inprop=url`;
      res=await fetch(search,{mode:'cors',credentials:'omit'});
      json=await res.json();
      pages=Object.values(json?.query?.pages||{}).filter(x=>x.thumbnail?.source);
      pages.sort((a,b)=>score(b,wanted)-score(a,wanted));
      return pages[0]||null;
    }catch(_){ return null; }
  }

  async function repairArt(reader){
    if(reader.dataset.upArtV2==='1') return;
    reader.dataset.upArtV2='1';
    generic(reader);
    const page=await lookup(reader);
    if(page && reader.isConnected) wiki(reader,page);
  }

  function cleanDefaultCitationSpam(reader){
    reader.querySelectorAll('.kena-lead, .kena-section').forEach(block=>{
      let keptDefault=false;
      block.querySelectorAll('p').forEach(p=>{
        const cites=[...p.querySelectorAll('.ch-cite')];
        if(cites.length!==3) return;
        const nums=cites.map(c=>Number((c.textContent||'').replace(/\D/g,'')));
        if(nums[0]!==1 || nums[1]!==2 || nums[2]!==3) return;
        if(!keptDefault){
          cites[1].remove();
          cites[2].remove();
          keptDefault=true;
        }else{
          cites.forEach(c=>c.remove());
        }
      });
    });
  }

  function repairCites(reader){
    const refs=[...reader.querySelectorAll('.ch-reference-list > li')];
    refs.forEach((li,i)=>{li.id=`cup-ref-${i+1}`;});
    reader.querySelectorAll('.ch-cite button[data-current-up-note]').forEach(b=>{
      const n=Number(b.dataset.currentUpNote||0); if(!n) return;
      const li=refs[n-1], source=li?.querySelector('a[href]');
      const a=document.createElement('a');
      a.className='current-up-cite-link'; a.textContent=`[${n}]`; a.setAttribute('aria-label',`Source ${n}`);
      a.title=li?.textContent?.trim()||`Source ${n}`;
      if(source){a.href=source.href;a.target='_blank';a.rel='noopener';} else a.href=`#cup-ref-${n}`;
      b.replaceWith(a);
    });
    cleanDefaultCitationSpam(reader);
  }

  function repair(reader){
    if(!(reader instanceof Element)||!reader.matches(ROOT)) return;
    repairCites(reader); repairArt(reader);
  }

  const prev=window.openScriptureEncyclopedia;
  if(typeof prev==='function'&&!window.SCRIPTURE_UPANISHAD_ART_V2_WRAPPED){
    window.openScriptureEncyclopedia=function(button){
      const out=prev(button), r=document.querySelector(ROOT);
      if(r){repair(r);queueMicrotask(()=>repair(r));}
      return out;
    };
    window.SCRIPTURE_UPANISHAD_ART_V2_WRAPPED=true;
  }

  new MutationObserver(ms=>{for(const m of ms)for(const n of m.addedNodes){if(!(n instanceof Element))continue;if(n.matches?.(ROOT))repair(n);n.querySelectorAll?.(ROOT).forEach(repair);}}).observe(document.documentElement,{childList:true,subtree:true});
  document.querySelectorAll(ROOT).forEach(repair);

  if(!document.getElementById('current-up-art-v2-style')){
    const s=document.createElement('style');s.id='current-up-art-v2-style';s.textContent=`
      .current-up-cite-link{color:#36c!important;text-decoration:none!important;font:12px/1 Arial,sans-serif!important;margin-left:2px!important;white-space:nowrap!important}
      .current-up-cite-link:hover{text-decoration:underline!important}
      .current-up-art,.current-up-generic-art{min-height:0!important;height:auto!important;background:#fff!important}
      .current-up-art img,.current-up-generic-art img{display:block!important;width:100%!important;height:auto!important;max-height:430px!important;object-fit:cover!important;background:#fff!important}
      .current-up-generic-art img{aspect-ratio:3/2!important;object-fit:cover!important}
      .current-up-generic-art figcaption{display:none!important}
    `;document.head.append(s);
  }
  window.SCRIPTURE_UPANISHAD_IMAGE_RESOLVER='art-v2-citation-cleanup';
})();