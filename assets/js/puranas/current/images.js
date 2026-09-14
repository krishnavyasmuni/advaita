(() => {
  const previousOpen=window.openScriptureEncyclopedia;
  if(typeof previousOpen!=='function')return;
  const K=new Set(['Mahāpurāṇa','Upapurāṇa','Both']);
  const FALLBACK='https://commons.wikimedia.org/wiki/Special:Redirect/file/A_monk_meditates_under_a_tree.jpg';

  // Never use fuzzy Wikipedia search for artwork. A fuzzy result caused Liṅga Purāṇa
  // to display an unrelated wedding photograph. These are exact Wikipedia page titles.
  const EXACT={
    'Brahma Purāṇa':'Brahma_Purana','Padma Purāṇa':'Padma_Purana','Viṣṇu Purāṇa':'Vishnu_Purana','Śiva Purāṇa':'Shiva_Purana',
    'Liṅga Purāṇa':'Linga_Purana','Garuḍa Purāṇa':'Garuda_Purana','Nāradīya Purāṇa':'Naradiya_Purana','Bhāgavata Purāṇa':'Bhagavata_Purana',
    'Agni Purāṇa':'Agni_Purana','Skanda Purāṇa':'Skanda_Purana','Bhaviṣya Purāṇa':'Bhavishya_Purana','Brahmavaivarta Purāṇa':'Brahma_Vaivarta_Purana',
    'Mārkaṇḍeya Purāṇa':'Markandeya_Purana','Vāmana Purāṇa':'Vamana_Purana','Varāha Purāṇa':'Varaha_Purana','Matsya Purāṇa':'Matsya_Purana',
    'Kūrma Purāṇa':'Kurma_Purana','Brahmāṇḍa Purāṇa':'Brahmanda_Purana','Vāyu Purāṇa':'Vayu_Purana','Devī Bhāgavata Purāṇa':'Devi_Bhagavata_Purana',
    'Mahābhāgavata Purāṇa':'Mahabhagavata_Purana','Nṛsiṃha Purāṇa':'Narasimha_Purana','Kālikā Purāṇa':'Kalika_Purana','Sāmba Purāṇa':'Samba_Purana',
    'Saura Purāṇa':'Saura_Purana','Viṣṇudharmottara Purāṇa':'Vishnudharmottara_Purana','Bṛhaddharma Purāṇa':'Brihaddharma_Purana',
    'Viṣṇudharma Purāṇa':'Vishnudharma_Purana','Śivadharma Purāṇa':'Shivadharma_Purana'
  };

  const ascii=s=>String(s||'').replace(/Ś/g,'Sh').replace(/ś/g,'sh').replace(/Ṣ/g,'Sh').replace(/ṣ/g,'sh').replace(/Ṛ/g,'Ri').replace(/ṛ/g,'ri').replace(/Ṅ/g,'Ng').replace(/ṅ/g,'ng').replace(/Ñ/g,'Ny').replace(/ñ/g,'ny').replace(/Ṭ/g,'T').replace(/ṭ/g,'t').replace(/Ḍ/g,'D').replace(/ḍ/g,'d').replace(/Ṇ/g,'N').replace(/ṇ/g,'n').replace(/Ā/g,'A').replace(/ā/g,'a').replace(/Ī/g,'I').replace(/ī/g,'i').replace(/Ū/g,'U').replace(/ū/g,'u').replace(/ṃ|ṁ/g,'m').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/Purāṇa/g,'Purana');

  function exactTitle(name){
    if(EXACT[name])return EXACT[name];
    return ascii(name).replace(/\s+/g,'_').trim();
  }

  async function apply(name){
    const fig=document.querySelector('.purana-full-article .purana-wiki-image');if(!fig)return;
    const img=fig.querySelector('img');const cap=fig.querySelector('figcaption');if(!img)return;
    const title=exactTitle(name);
    try{
      const api=`https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&titles=${encodeURIComponent(title)}&prop=pageimages|info&inprop=url&pithumbsize=800`;
      const r=await fetch(api,{mode:'cors'});if(!r.ok)throw new Error('wiki');const j=await r.json();
      const page=Object.values(j?.query?.pages||{})[0];
      // Reject missing pages and anything not returned from the exact title/redirect chain.
      if(page && !('missing' in page) && page.thumbnail?.source){
        img.onerror=()=>{img.onerror=null;img.src=FALLBACK;};
        img.src=page.thumbnail.source;
        if(cap)cap.remove();
        return;
      }
    }catch(_){ }
    img.onerror=null;img.src=FALLBACK;if(cap)cap.remove();
  }

  window.openScriptureEncyclopedia=function(button){
    const result=previousOpen(button);
    if(K.has(button?.dataset?.kind||'')){
      const name=button?.dataset?.name||button?.querySelector?.('span')?.textContent?.trim()||'';
      queueMicrotask(()=>apply(name));setTimeout(()=>apply(name),120);
    }
    return result;
  };
})();
