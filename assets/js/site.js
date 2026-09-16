(()=>{
const p=location.pathname,dirs=[/^\/vivekadrishti\/articles\/?$/, /\/articles\/scripture\/?$/, /\/articles\/(?:scripture-index-version-3|an-index-of-hindu-scripture)\/?$/];
const article=/^\/vivekadrishti\/articles\//.test(p)&&!dirs.some(r=>r.test(p));
const combinedBhavishya=/\/articles\/bhavisya-purana-addresses-varna-system\/?$/.test(p);
const scripture=/\/articles\/(?:bhagavad-gita-chapter-\d+|bhavishya-purana-pratisargaparvan-part-\d+-chapter-\d+|bhavishya-purana-brahmaparvan-chapter-\d+|bhavisya-purana-addresses-varna-system|srimad-bhagavatam-(?:second|tenth)-canto-sridhara-svami-rebuild|srimad-bhagavatam-canto-\d{2}-sridhara-svami|mimamsa-sutras-sabara-bhasya-chapter-1)\/?$/.test(p);
const citation=/\/articles\/compilation-of-peer-reviewed-citations-against-aryan-migration-theory\/?$/.test(p),meat=/\/articles\/meat-eating-in-hinduism-through-the-lens-of-shastra\/?$/.test(p);
const css=(key,href)=>{if(document.querySelector(`link[data-${key}]`))return;const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.dataset[key]='1';document.head.append(l)};
const js=(key,src)=>{if(document.querySelector(`script[data-${key}]`))return;const s=document.createElement('script');s.src=src;s.async=false;s.dataset[key]='1';document.body.append(s)};
if(article){
 document.querySelectorAll('link[href*="/assets/css/hindupedia-site.css"]').forEach(n=>n.remove());
 document.body.classList.add('vicara-reader-page');if(citation)document.body.classList.add('citation-reader-page');if(meat)document.body.classList.add('meat-reader-page');if(scripture)document.body.classList.add('scripture-reader-page');
 css('articleReader','/vivekadrishti/assets/css/article-reader.css?v=20260916-2');
 if(!scripture)css('articlePager','/vivekadrishti/assets/css/article-pager.css?v=20260914-2');
 if(citation||scripture)css('articlePolish','/vivekadrishti/assets/css/article-polish.css?v=20260916-2');
 if(!combinedBhavishya)js('articleReader','/vivekadrishti/assets/js/article-reader.js?v=20260916-1');
}else css('hindupediaSite','/vivekadrishti/assets/css/hindupedia-site.css?build=20260826-2145');

const paths=new Map([
['/vivekadrishti/introduction-to-hinduism/','/vivekadrishti/pages/introduction-to-hinduism/'],['/vivekadrishti/indology/','/vivekadrishti/pages/indology/'],['/vivekadrishti/purana-library/','/vivekadrishti/pages/purana-library/'],['/vivekadrishti/bhagavatam-with-sridhara-bhasya/','/vivekadrishti/pages/bhagavatam-with-sridhara-bhasya/'],['/vivekadrishti/bhavishya-purana/','/vivekadrishti/pages/bhavishya-purana/'],['/vivekadrishti/bhavishya-purana-brahmaparvan/','/vivekadrishti/pages/bhavishya-purana-brahmaparvan/'],['/vivekadrishti/bhagavad-gita/','/vivekadrishti/pages/bhagavad-gita/']]);
document.querySelectorAll('a[href]').forEach(a=>{const x=paths.get(a.getAttribute('href'));if(x)a.href=x});
document.querySelectorAll('.site-nav').forEach(nav=>{if(nav.querySelector('a[href*="/pages/bhagavad-gita/"],a[href="/vivekadrishti/bhagavad-gita/"]'))return;const a=document.createElement('a');a.href='/vivekadrishti/pages/bhagavad-gita/';a.textContent='Bhagavad Gītā — Śrīdhara Bhāṣya';nav.append(a)});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#site-nav');if(menu&&nav){menu.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(nav.classList.toggle('open'))));nav.addEventListener('click',e=>{if(e.target.matches('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}})}

if(/\/articles\/an-index-of-hindu-scripture\/?$/.test(p))css('scriptureIndexClean','/vivekadrishti/assets/css/scripture-index-clean.css?v=1');
const gita=document.querySelector('[data-gita-chapter]');if(gita){const n=Number(gita.dataset.gitaChapter);if(n>=2&&n<=18)js('gitaSridharaAll','/vivekadrishti/assets/js/bhagavad-gita-sridhara-all.js?v=20260831-all3')}
const bhavishya=/\/(?:pages\/bhavishya-purana(?:\/|-)|articles\/(?:bhavishya-purana-|bhavisya-purana-addresses-varna-system))/.test(p);
if(bhavishya){css('bhavishyaNavigation','/vivekadrishti/assets/css/bhavishya-navigation.css?v=20260915-2');js('bhavishyaNavigation','/vivekadrishti/assets/js/bhavishya-navigation.js?v=20260915-3')}
const rebuild=document.querySelector('.empyrean-bhagavatam-rebuild,.empyrean-bhagavatam-rebuild-part');if(!rebuild)return;
document.body.classList.add('bhagavatam-rebuild-page');
if(/srimad-bhagavatam-second-canto-sridhara-svami-rebuild/.test(p)){
 document.body.classList.add('canto-2-verse-layout');
 document.querySelectorAll('section[aria-labelledby^="sb-2-"]').forEach(s=>{if(s.querySelector(':scope>.sb-translation,:scope>.sb-translation-content'))return;const d=s.querySelector(':scope>[lang="sa-Deva"],:scope>.sb-devanagari,:scope>.sb-dev'),n=d?.nextElementSibling;if(n&&!n.matches('details,hr,h1,h2,h3')&&!/Śrīdhara['’]s Commentary/i.test(n.textContent||''))n.classList.add('sb-translation')});
 css('canto2Layout','/vivekadrishti/assets/css/bhagavatam-canto2-verse-layout-v7.css?v=11');js('canto2Renderer','/vivekadrishti/assets/js/bhagavatam-canto2.js?v=3');return;
}
css('bhagavatamRebuildStyles','/vivekadrishti/assets/css/bhagavatam-rebuild-all-verses.css?v=6');
})();
