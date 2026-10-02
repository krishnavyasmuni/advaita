(()=>{"use strict";
const WORKS=[
 {id:"nirvana-shatkam",title:"Nirvāṇaṣaṭkam",path:"/advaita/books/adi-shankaracharya/nirvana-shatkam/"},
 {id:"maya-panchakam",title:"Māyāpañcakam",path:"/advaita/books/adi-shankaracharya/maya-panchakam/"},
 {id:"advaita-pancharatnam",title:"Advaitapañcaratnam",path:"/advaita/books/adi-shankaracharya/advaita-pancharatnam/"},
 {id:"yati-panchakam",title:"Yatipañcakam",path:"/advaita/books/adi-shankaracharya/yati-panchakam/"},
 {id:"kashi-panchakam",title:"Kāśīpañcakam",path:"/advaita/books/adi-shankaracharya/kashi-panchakam/"},
 {id:"dakshinamurti-ashtakam",title:"Dakṣiṇāmūrtyaṣṭakam",path:"/advaita/books/adi-shankaracharya/dakshinamurti-ashtakam/"},
 {id:"shatpadi-stotram",title:"Ṣaṭpadī Stotram",path:"/advaita/books/adi-shankaracharya/shatpadi-stotram/"}
];
const VOWELS={"अ":"a","आ":"ā","इ":"i","ई":"ī","उ":"u","ऊ":"ū","ऋ":"ṛ","ॠ":"ṝ","ऌ":"ḷ","ॡ":"ḹ","ए":"e","ऐ":"ai","ओ":"o","औ":"au"};
const SIGNS={"ा":"ā","ि":"i","ी":"ī","ु":"u","ू":"ū","ृ":"ṛ","ॄ":"ṝ","ॢ":"ḷ","ॣ":"ḹ","े":"e","ै":"ai","ो":"o","ौ":"au"};
const CONS={"क":"k","ख":"kh","ग":"g","घ":"gh","ङ":"ṅ","च":"c","छ":"ch","ज":"j","झ":"jh","ञ":"ñ","ट":"ṭ","ठ":"ṭh","ड":"ḍ","ढ":"ḍh","ण":"ṇ","त":"t","थ":"th","द":"d","ध":"dh","न":"n","प":"p","फ":"ph","ब":"b","भ":"bh","म":"m","य":"y","र":"r","ल":"l","व":"v","श":"ś","ष":"ṣ","स":"s","ह":"h","ळ":"ḷ"};
function iast(s){
 let out="",last=false;
 for(const ch of String(s)){
  if(CONS[ch]){out+=CONS[ch]+"a";last=true}
  else if(SIGNS[ch]){if(last)out=out.slice(0,-1);out+=SIGNS[ch];last=false}
  else if(ch==="्"){if(last)out=out.slice(0,-1);last=false}
  else if(VOWELS[ch]){out+=VOWELS[ch];last=false}
  else if(ch==="ं")out+="ṃ";
  else if(ch==="ः")out+="ḥ";
  else if(ch==="ँ")out+="m̐";
  else if(ch==="ऽ")out+="’";
  else if(ch==="।")out+="|";
  else if(ch==="॥")out+="||";
  else if(/[०-९]/.test(ch))out+=String("0123456789")["०१२३४५६७८९".indexOf(ch)];
  else if(ch==="‍"||ch==="‌"){}
  else {out+=ch;last=false}
 }
 return out;
}
function esc(s){return String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]))}
function complete(data){
 return data&&Array.isArray(data.units)&&data.units.length===data.expectedUnits&&data.units.length>0&&
  data.units.every(u=>u.id&&u.deva&&u.translation&&Array.isArray(u.gloss)&&u.gloss.length>0&&u.gloss.every(w=>w.sa&&w.en));
}
function glossHTML(words){return words.map(w=>'<div class="gita-word-row"><span class="gita-word-dev" lang="sa-Deva">'+esc(w.sa)+'</span> <span class="gita-word-iast">(<em>'+esc(iast(w.sa))+'</em>)</span> <span class="gita-word-gloss">— '+esc(w.en)+'</span></div>').join("")}
function unitHTML(u,index){
 const label=u.label||("Verse "+(index+1));
 return '<article class="gita-verse shankara-verse" id="'+esc(u.id)+'"><p class="shankara-unit-label">'+esc(label)+'</p><h2>'+esc(u.number||String(index+1))+'</h2><hr class="gita-verse-rule"/><div class="gita-sanskrit sa-text" lang="sa-Deva">'+esc(u.deva)+'</div><p class="gita-translation">'+esc(u.translation)+'</p><details class="gita-details"><summary>Word-for-word</summary><div class="gita-reveal"><div class="gita-word-list">'+glossHTML(u.gloss)+'</div></div></details></article>';
}
function navHTML(id){
 const i=WORKS.findIndex(w=>w.id===id),prev=WORKS[i-1],next=WORKS[i+1];
 return '<nav class="shankara-work-nav" aria-label="Work navigation">'+(prev?'<a rel="prev" href="'+prev.path+'">← '+esc(prev.title)+'</a>':'<span></span>')+'<a class="shankara-index-link" href="/advaita/books/adi-shankaracharya/">Contents</a>'+(next?'<a rel="next" href="'+next.path+'">'+esc(next.title)+' →</a>':'<span></span>')+'</nav>';
}
function bindScript(root){
 root.dataset.scriptMode="deva";
 root.querySelectorAll("[data-script]").forEach(btn=>btn.addEventListener("click",()=>{
  const mode=btn.dataset.script;root.dataset.scriptMode=mode;
  root.querySelectorAll("[data-script]").forEach(b=>b.setAttribute("aria-pressed",String(b===btn)));
  root.querySelectorAll(".sa-text").forEach(el=>{
   if(!el.dataset.deva)el.dataset.deva=el.textContent;
   el.textContent=mode==="iast"?iast(el.dataset.deva):el.dataset.deva;
   el.lang=mode==="iast"?"sa-Latn":"sa-Deva";
  });
 }));
}
async function start(root){
 const id=root.dataset.work, item=WORKS.find(w=>w.id===id);
 if(!item)return;
 try{
  const res=await fetch("/advaita/assets/data/shankara/"+id+".json");
  if(!res.ok)throw new Error("Work data unavailable");
  const data=await res.json();
  if(!complete(data)||data.id!==id)throw new Error("Incomplete text data");
  document.title=data.title+" — Ādi Śaṅkarācārya — Viveka Dṛṣṭi";
  root.innerHTML='<header class="gita-hero"><p class="eyebrow">Ādi Śaṅkarācārya</p><h1>'+esc(data.title)+'</h1><p class="subtitle">'+esc(data.subtitle||"")+'</p><div class="script-controls" role="group" aria-label="Sanskrit script"><button type="button" data-script="deva" aria-pressed="true">देवनागरी</button><button type="button" data-script="iast" aria-pressed="false">IAST</button></div><p><a class="shankara-index-link" href="/advaita/books/adi-shankaracharya/">← Ādi Śaṅkarācārya</a></p></header><nav class="gita-contents" aria-label="Contents"><h2>Contents</h2><ol>'+data.units.map((u,i)=>'<li><a href="#'+esc(u.id)+'">'+esc(u.label||("Verse "+(i+1)))+'</a></li>').join("")+'</ol></nav>'+data.units.map(unitHTML).join("")+navHTML(id);
  bindScript(root);
 }catch(err){root.innerHTML='<p class="gita-translation">The text could not be loaded.</p>';console.error(err)}
}
document.addEventListener("DOMContentLoaded",()=>document.querySelectorAll("[data-shankara-reader]").forEach(start));
})();