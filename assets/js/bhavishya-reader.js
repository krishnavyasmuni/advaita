window.renderBhavishyaChapter=function(config,verses){
  const mount=document.getElementById('chapter-mount');
  if(!mount)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const br=s=>esc(s).replace(/\n/g,'<br>');
  const cards=verses.map(v=>`<section class="bp-verse" id="bp-1-${config.chapter}-${v.n}"><h3>BP 1.${config.chapter}.${v.n}</h3><hr><div class="bp-sa" lang="sa">${br(v.sa)}</div><p class="bp-en">${esc(v.en)}</p>${v.wfw?`<details><summary>Word-for-word</summary><div class="bp-detail">${esc(v.wfw)}</div></details>`:''}<details><summary>Transliteration</summary><div class="bp-detail"><em>${br(v.iast)}</em></div></details>${v.note?`<details><summary>Textual note</summary><div class="bp-detail">${esc(v.note)}</div></details>`:''}</section>`).join('');
  mount.innerHTML=`<div class="bp-reader"><div class="bp-source"><strong>${esc(config.subtitle)}</strong><br><span>Close English translation and phrase-by-phrase gloss from the Sanskrit; Sanskrit cross-checked against Wisdomlib and Sanskrit Wikisource. Difficult or unstable readings are flagged rather than silently normalised.</span></div>${cards}<div class="bp-colophon">${esc(config.colophon||'')}</div></div>`;
  if(config.chapter>=180&&config.chapter<=190){
    const nav=document.querySelector('.chapter-nav');
    if(nav){
      const links=nav.querySelectorAll('a');
      if(config.chapter>180&&links[0]){links[0].href=`/vivekadrishti/articles/bhavishya-purana-brahmaparvan-chapter-${config.chapter-1}/`;links[0].textContent=`← Chapter ${config.chapter-1}`;}
      if(config.chapter<190&&links[1]){links[1].href=`/vivekadrishti/articles/bhavishya-purana-brahmaparvan-chapter-${config.chapter+1}/`;links[1].textContent=`Chapter ${config.chapter+1} →`;}
    }
  }
};