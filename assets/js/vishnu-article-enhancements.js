/* Vishnu article display enhancements. Source prose stays in index.html. */
(()=>{
'use strict';
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;
const root=document.getElementById('source-content');
if(!root)return;
document.body.classList.add('vishnu-article');

const consonants={
'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ng','च':'ch','छ':'chh','ज':'j','झ':'jh','ञ':'ny',
'ट':'t','ठ':'th','ड':'d','ढ':'dh','ण':'n','त':'t','थ':'th','द':'d','ध':'dh','न':'n',
'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m','य':'y','र':'r','ल':'l','व':'v',
'श':'sh','ष':'sh','स':'s','ह':'h','ळ':'l','क़':'q','ख़':'kh','ग़':'gh','ज़':'z','ड़':'d','ढ़':'dh'
};
const vowels={'अ':'a','आ':'aa','इ':'i','ई':'ii','उ':'u','ऊ':'uu','ऋ':'ri','ॠ':'rri','ऌ':'li','ॡ':'lli','ए':'e','ऐ':'ai','ओ':'o','औ':'au'};
const matras={'ा':'aa','ि':'i','ी':'ii','ु':'u','ू':'uu','ृ':'ri','ॄ':'rri','ॢ':'li','ॣ':'lli','े':'e','ै':'ai','ो':'o','ौ':'au'};
const digits={'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};

function transliterate(value){
 let out='',inherentA=false;
 const flush=()=>{if(inherentA){out+='a';inherentA=false;}};
 for(const ch of String(value??'')){
  if(consonants[ch]){flush();out+=consonants[ch];inherentA=true;}
  else if(matras[ch]){out+=matras[ch];inherentA=false;}
  else if(ch==='्'){inherentA=false;}
  else if(vowels[ch]){flush();out+=vowels[ch];}
  else if(ch==='ं'){flush();out+='m';}
  else if(ch==='ः'){flush();out+='h';}
  else if(ch==='ँ'){flush();out+='n';}
  else if(ch==='ॐ'){flush();out+='om';}
  else if(ch==='ऽ'){flush();out+="'";}
  else if(ch==='।'||ch==='॥'){flush();out+=ch==='।'?' | ':' || ';}
  else if(Object.prototype.hasOwnProperty.call(digits,ch)){flush();out+=digits[ch];}
  else if(ch==='़'||ch==='॑'||ch==='॒'||ch==='\u200c'||ch==='\u200d')continue;
  else{flush();out+=ch;}
 }
 flush();
 return out.replace(/[“”„]/g,'"').replace(/[‘’]/g,"'").replace(/[ \t]+/g,' ').replace(/ *\n */g,'\n').replace(/ *([,.;:!?])/g,'$1').trim();
}
function sourceText(node){
 let value='';
 const walk=current=>{
  if(current.nodeType===Node.TEXT_NODE){value+=current.nodeValue;return;}
  if(current.nodeType!==Node.ELEMENT_NODE)return;
  if(current.tagName==='BR'){value+='\n';return;}
  for(const child of current.childNodes)walk(child);
 };
 walk(node);
 return value;
}
for(const details of root.querySelectorAll('details.sanskrit-reveal')){
 const source=details.querySelector('[lang^="sa"]');
 if(!source||details.querySelector('.sanskrit-transliteration'))continue;
 const roman=document.createElement('p');
 roman.className='sanskrit-transliteration';
 roman.lang='sa-Latn';
 roman.textContent=transliterate(sourceText(source));
 source.after(roman);
}
for(const table of root.querySelectorAll('table'))table.classList.add('vishnu-data-table');
for(const heading of root.querySelectorAll('h1')){
 const subtitle=document.createElement('p');
 subtitle.className='vishnu-cover-subtitle';
 subtitle.textContent=heading.textContent||'';
 heading.replaceWith(subtitle);
}
const passages=[...root.querySelectorAll('details.sanskrit-reveal')];
if(passages.length){
 const toolbar=document.createElement('div');
 toolbar.className='vishnu-sanskrit-controls';
 const button=document.createElement('button');
 button.type='button';
 button.className='vishnu-sanskrit-toggle';
 button.textContent='Show Sanskrit';
 button.setAttribute('aria-controls','source-content');
 button.setAttribute('aria-expanded','false');
 toolbar.append(button);
 const heading=root.querySelector(':scope > h3');
 if(heading)heading.after(toolbar);else root.prepend(toolbar);
 passages.forEach(item=>{item.open=false;});
 button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  passages.forEach(item=>{item.open=open;});
  button.setAttribute('aria-expanded',String(open));
  button.textContent=open?'Hide Sanskrit':'Show Sanskrit';
 });
}
})();