(() => {
  const D=window.SCRIPTURE_DETAIL_DATA=window.SCRIPTURE_DETAIL_DATA||{};
  const e=D['Purāṇa:Varāha Purāṇa']||D['Varāha Purāṇa'];
  if(!e||!Array.isArray(e.articleSections))return;
  const s=e.articleSections.find(x=>String(x?.title||'').toLowerCase()==='date of composition');
  if(!s)return;
  s.paragraphs=Array.isArray(s.paragraphs)?s.paragraphs:[];
  s.paragraphs.push('The history of the Varāha title also illustrates a broader problem in Purāṇic bibliography: medieval catalogues may describe a work whose surviving manuscripts no longer preserve the same extent or internal divisions. Rather than treating the Nāradīya description as simply erroneous, it is more productive to regard the discrepancy as evidence for a changing textual object. That perspective makes loss, replacement and recensional reorganization part of the historical explanation and prevents the extant critical edition from being projected backward as an invariant scripture.');
  D['Purāṇa:Varāha Purāṇa']=e;
})();