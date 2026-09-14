/* Complete 39-title Upapurāṇa research corpus loader. */
(() => {
  if (window.UPAPURANA_READY) return;
  const BUILD='20260827-upapurana39-v5';
  const loadScript=src=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=src;s.onload=resolve;s.onerror=()=>reject(new Error('Failed to load '+src));document.head.appendChild(s)});
  window.UPAPURANA_READY=(async()=>{
    const base='/vivekadrishti/assets/data/upapuranas/';
    const parts=[];
    for(let i=0;i<6;i++){
      const r=await fetch(`${base}raw-${i}.b64?build=${BUILD}`,{cache:'force-cache'});
      if(!r.ok)throw new Error(`Upapurāṇa data chunk ${i} failed: ${r.status}`);
      parts.push((await r.text()).trim());
    }
    const binary=atob(parts.join(''));
    const bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
    if(typeof DecompressionStream!=='function')throw new Error('Compressed Upapurāṇa corpus is unsupported in this browser.');
    const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const payload=JSON.parse(await new Response(stream).text());
    window.UPAPURANA_RAW=payload.research||payload;
    if(payload.sources)window.UPAPURANA_SOURCE_PAYLOAD=payload.sources;
    await loadScript(`/vivekadrishti/assets/js/puranas/current/upapurana-research-core.js?build=${BUILD}`);
    return window.UPAPURANA_RESEARCH||{};
  })();
})();
