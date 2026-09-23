/* Prepare the PDF transcription for the shared Varna and Shiva reader. */
(()=>{
'use strict';
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;
const source=document.querySelector('#source-document .article-body');
if(!source)return;

const consonants={
'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ng','च':'ch','छ':'chh','ज':'j','झ':'jh','ञ':'ny',
'ट':'t','ठ':'th','ड':'d','ढ':'dh','ण':'n','त':'t','थ':'th','द':'d','ध':'dh','न':'n',
'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m','य':'y','र':'r','ल':'l','व':'v','श':'sh','ष':'sh','स':'s','ह':'h','ळ':'l'
};
const vowels={'अ':'a','आ':'aa','इ':'i','ई':'ii','उ':'u','ऊ':'uu','ऋ':'ri','ॠ':'rri','ऌ':'li','ॡ':'lli','ए':'e','ऐ':'ai','ओ':'o','औ':'au'};
const matras={'ा':'aa','ि':'i','ी':'ii','ु':'u','ू':'uu','ृ':'ri','ॄ':'rri','ॢ':'li','ॣ':'lli','े':'e','ै':'ai','ो':'o','ौ':'au'};
const digits={'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};
const ascii=value=>String(value??'')
 .replace(/[śṣ]/g,'sh').replace(/[ŚṢ]/g,'Sh').replace(/[ṛṝ]/g,'r').replace(/[ṚṜ]/g,'R')
 .replace(/[ṇ]/g,'n').replace(/[ṅñ]/g,'n').replace(/[ṆṄÑ]/g,'N').replace(/[ṭ]/g,'t').replace(/[Ṭ]/g,'T')
 .replace(/[ḍ]/g,'d').replace(/[Ḍ]/g,'D').replace(/[ḷ]/g,'l').replace(/[Ḷ]/g,'L')
 .replace(/[ṃṁ]/g,'m').replace(/[ṂṀ]/g,'M').replace(/[ḥ]/g,'h').replace(/[Ḥ]/g,'H')
 .replace(/[’‘‛]/g,"'").replace(/[“”„]/g,'"').replace(/[–—−]/g,'-').replace(/→/g,'->').replace(/←/g,'<-')
 .normalize('NFKD').replace(/[\u0300-\u036f]/g,'');
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
  else if('़॒॑\u200c\u200d'.includes(ch))continue;
  else{flush();out+=ch;}
 }
 flush();
 return ascii(out).replace(/[ \t]+/g,' ').replace(/ *\n */g,'\n').replace(/ *([,.;:!?])/g,'$1').trim();
}
function sourceText(node){
 let value='';
 const walk=current=>{
  if(current.nodeType===Node.TEXT_NODE){value+=current.nodeValue;return;}
  if(current.nodeType!==Node.ELEMENT_NODE)return;
  if(current.tagName==='BR'){value+='\n';return;}
  for(const child of current.childNodes)walk(child);
 };
 walk(node);return value;
}
for(const details of source.querySelectorAll('details')){
 const summary=details.querySelector(':scope>summary');
 if(summary&&!/sanskrit/i.test(summary.textContent||''))continue;
 details.classList.add('sanskrit-reveal');
 if(summary)summary.textContent='Show Sanskrit';
 const devanagari=details.querySelector('[lang="sa-Deva"],[lang^="sa-Deva-"]');
 if(!devanagari||details.querySelector('.sanskrit-transliteration'))continue;
 const roman=document.createElement('p');
 roman.className='sanskrit-transliteration';
 roman.lang='sa-Latn';
 roman.textContent=transliterate(sourceText(devanagari));
 devanagari.after(roman);
}
for(const table of source.querySelectorAll('table'))table.classList.add('vishnu-data-table');
const walker=document.createTreeWalker(source,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){
 const node=walker.currentNode;
 if(node.parentElement?.closest('[lang="sa-Deva"],[lang^="sa-Deva-"]'))continue;
 node.nodeValue=ascii(node.nodeValue);
}
for(const node of source.querySelectorAll('[alt],[title],[aria-label]')){
 for(const name of ['alt','title','aria-label'])if(node.hasAttribute(name))node.setAttribute(name,ascii(node.getAttribute(name)));
}
const polish=()=>{
 document.body.classList.add('vishnu-article');
 const brand=document.querySelector('.sitebar a');
 if(brand&&brand.textContent!=='Viveka Drishti')brand.textContent='Viveka Drishti';
};
polish();
new MutationObserver(polish).observe(document.body,{childList:true});
})();
