/* Reflow the complete source manuscript without inventing Sanskrit or English text. */
(()=>{'use strict';
const config=document.getElementById('article-config');
if(!/a-shaiva-lens-on-shiva-as-the-supreme-deity/.test(location.pathname+' '+(config?.dataset.base||'')))return;
const css=document.createElement('style');css.textContent=`
.shaiva-full-view *,.shaiva-full-view *::before,.shaiva-full-view *::after{box-sizing:border-box}
body.shaiva-full-view{--paper:#fff;--ink:#312922;background:#ece6df;color:#312922}
.shaiva-full-view .sitebar{width:1270px;max-width:100%;background:#fff}
.shaiva-full-view .page{width:1270px;max-width:100%;background:transparent;padding:36px 34px 80px}
.shaiva-full-view .article-head{max-width:880px;width:100%;margin:0 auto 28px}
.shaiva-full-view .article-head h1{color:#694531;font-size:clamp(28px,3.5vw,43px)}
.shaiva-full-view .reader-grid{display:block;width:100%;max-width:900px;margin:auto}
.shaiva-full-view .side-toc,.shaiva-full-view .mobile-toc,.shaiva-full-view .page-context,.shaiva-full-view .page-nav{display:none!important}
.shaiva-full-view .article{width:100%;max-width:100%}
.shaiva-full-view .document-content{font-family:Georgia,'Times New Roman',serif;font-size:19px;line-height:1.75;color:#322a24}
.shaiva-reader-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin:0 0 18px;padding:12px 18px;border:1px solid #d6c7ba;background:#fff;border-radius:5px}
.shaiva-reader-toolbar strong{font:600 13px/1.5 system-ui,sans-serif;color:#684731}
.shaiva-reader-toolbar button{border:1px solid #a88a72;border-radius:4px;background:#fff;color:#60422e;padding:8px 13px;font:600 13px/1.4 system-ui,sans-serif;cursor:pointer}
.shaiva-reader-toolbar button[aria-pressed=true]{background:#694531;color:#fff;border-color:#694531}
.shaiva-reader-toolbar button:focus-visible,.shaiva-reader-index a:focus-visible{outline:3px solid #79669f;outline-offset:2px}
.shaiva-reader-index{margin:0 0 18px;padding:11px 18px;border:1px solid #d6c7ba;background:#fff;border-radius:4px}
.shaiva-reader-index>summary{cursor:pointer;font:600 15px/1.5 system-ui,sans-serif;color:#694531}
.shaiva-reader-index nav{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:7px 16px;padding:15px 0 6px}
.shaiva-reader-index a{font:14px/1.5 Georgia,serif;color:#634d3c;text-decoration:underline;text-underline-offset:3px}
.shaiva-pdf-page{margin:0 0 25px;padding:44px clamp(25px,5vw,66px) 36px;background:#fff;border:1px solid #ddd3c8;box-shadow:0 3px 14px #3b27130d;overflow-wrap:break-word}
.shaiva-pdf-page>h2,.shaiva-pdf-page>h3{color:#674531;font-family:Georgia,serif;font-weight:400;line-height:1.25}
.shaiva-pdf-page>h2{font-size:31px;margin:25px 0 20px}
.shaiva-pdf-page>h3{font-size:23px;margin:25px 0 16px}
.shaiva-full-view .document-content .shaiva-pdf-page>p{margin:0 0 18px;font-size:18px;line-height:1.75;overflow-wrap:break-word}
.shaiva-full-view .document-content .shaiva-pdf-page>p[lang=sa-Deva]{font:400 21px/2 'Noto Serif Devanagari','Nirmala UI',Mangal,serif;color:#70432f;margin:20px 0}
.shaiva-full-view .document-content .shaiva-pdf-page>blockquote{margin:18px 0 22px;padding:4px 0 4px 17px;border-left:3px solid #94768b;color:#4c3b55;font-size:17.5px;line-height:1.75;background:none}
.shaiva-pdf-page .shaiva-source-page{display:block;margin:0 0 28px;padding:0 0 11px;border-bottom:1px solid #e4d8cd;color:#867566;font:12px/1.4 system-ui,sans-serif}
.shaiva-pdf-page .shaiva-table{border:1px solid #dac7b8;border-radius:4px;margin:22px 0 27px;overflow:hidden}
.shaiva-pdf-page .shaiva-table .shaiva-columns{display:grid;grid-template-columns:minmax(0,43%) minmax(0,57%);background:#f8f2ec;color:#634832;font:600 12px/1.5 system-ui,sans-serif}
.shaiva-pdf-page .shaiva-table .shaiva-columns span{padding:11px 16px}
.shaiva-pdf-page .shaiva-table .shaiva-columns span+span{border-left:1px solid #dac7b8}
.shaiva-pdf-page .shaiva-table .shaiva-row{display:grid;grid-template-columns:minmax(0,43%) minmax(0,57%);border-top:1px solid #e1d6cb}
.shaiva-pdf-page .shaiva-table .shaiva-row:nth-of-type(2n){background:#fffcf8}
.shaiva-pdf-page .shaiva-table .shaiva-sa{min-width:0;padding:16px;font:400 19px/1.9 'Noto Serif Devanagari','Nirmala UI',Mangal,serif;color:#68412f;overflow-wrap:anywhere;word-break:normal}
.shaiva-pdf-page .shaiva-table .shaiva-en{min-width:0;padding:16px;border-left:1px solid #dac7b8;font:400 17px/1.7 Georgia,serif;overflow-wrap:break-word}
.shaiva-reader-single-nav{display:flex;justify-content:space-between;align-items:center;gap:10px;margin:12px 0 28px}
.shaiva-reader-single-nav button{padding:9px 14px;border:1px solid #b8a391;border-radius:4px;background:#fff;color:#533d2b;cursor:pointer}
.shaiva-reader-single-nav button:disabled{opacity:.35;cursor:default}
.shaiva-reader-single-nav span{font:600 13px/1.4 system-ui,sans-serif;color:#694531}
@media(max-width:850px){.shaiva-full-view .page{padding:24px 12px 65px}.shaiva-pdf-page{padding:28px 20px}}
@media(max-width:600px){.shaiva-full-view .document-content{font-size:17px}.shaiva-pdf-page{padding:22px 16px 26px;margin-bottom:16px}.shaiva-pdf-page>h2{font-size:25px}.shaiva-pdf-page>h3{font-size:21px}.shaiva-full-view .document-content .shaiva-pdf-page>p{font-size:16.5px;line-height:1.74}.shaiva-full-view .document-content .shaiva-pdf-page>p[lang=sa-Deva]{font-size:19px}.shaiva-pdf-page .shaiva-table .shaiva-columns{display:none}.shaiva-pdf-page .shaiva-table .shaiva-row{display:block;padding:6px 0}.shaiva-pdf-page .shaiva-table .shaiva-sa{font-size:19px;padding:12px 13px}.shaiva-pdf-page .shaiva-table .shaiva-en{font-size:16.5px;padding:12px 13px;border-left:0;border-top:1px dashed #dac7b8}.shaiva-reader-toolbar{padding:10px}.shaiva-reader-index{padding:10px}}
@media print{body.shaiva-full-view{background:#fff}.shaiva-full-view .page{padding:0}.shaiva-reader-toolbar,.shaiva-reader-index,.sitebar,.article-head,.shaiva-reader-single-nav{display:none!important}.shaiva-pdf-page{border:0;box-shadow:none;padding:10mm 4mm;margin:0;break-after:page}.shaiva-pdf-page:last-child{break-after:auto}.shaiva-pdf-page .shaiva-table .shaiva-row{break-inside:avoid}}
`;document.head.append(css);
const make=(tag,cls,txt)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;};
async function loadPages(){const paths=[1,2,3,4].map(n=>'/vivekadrishti/assets/data/shaiva-pdf-text-'+n+'.txt');const parts=await Promise.all(paths.map(async path=>{const response=await fetch(path);if(!response.ok)throw new Error('Manuscript data unavailable');return(await response.text()).trim();}));const bytes=Uint8Array.from(atob(parts.join('')),c=>c.charCodeAt(0));if(typeof DecompressionStream!=='function')throw new Error('Browser does not support manuscript decompression');const stream=new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate'));return JSON.parse(await new Response(stream).text());}
function renderBlock(block){const[type,value]=block;if(type==='table'){const table=make('div','shaiva-table');table.setAttribute('role','table');const header=make('div','shaiva-columns');header.append(make('span',null,'Sanskrit · Devanāgarī'),make('span',null,'English translation'));table.append(header);for(const[sa,en]of value){const row=make('div','shaiva-row');row.setAttribute('role','row');const left=make('div','shaiva-sa',sa);left.lang='sa-Deva';const right=make('div','shaiva-en',en);right.lang='en';row.append(left,right);table.append(row);}return table;}const node=make(type==='heading'?'h2':type==='quote'?'blockquote':'p',null,value);if(type==='sa')node.lang='sa-Deva';return node;}
async function start(){const reader=document.querySelector('.document-content');if(!reader)return;const status=make('p','shaiva-reader-status','Preparing the complete PDF-based manuscript…');reader.prepend(status);let pages;try{pages=await loadPages();if(!Array.isArray(pages)||pages.length!==52)throw new Error('Incomplete document');}catch(err){status.remove();console.warn('Manuscript reflow unavailable; original text retained',err);return;}status.remove();const toolbar=make('div','shaiva-reader-toolbar');const info=make('strong',null,'Complete manuscript · 52 source pages · Sanskrit and English kept separate');const buttons=make('div');const continuous=make('button',null,'Continuous reading');continuous.type='button';continuous.setAttribute('aria-pressed','true');const paged=make('button',null,'Page by page');paged.type='button';paged.setAttribute('aria-pressed','false');buttons.append(continuous,paged);toolbar.append(info,buttons);const toc=make('details','shaiva-reader-index'),summary=make('summary',null,'Manuscript contents and page links'),nav=make('nav');const list=make('div','shaiva-document-pages'),elements=[];let current=-1;const controls=make('nav','shaiva-reader-single-nav');controls.setAttribute('aria-label','Manuscript page navigation');const prev=make('button',null,'← Previous page'),next=make('button',null,'Next page →'),number=make('span');controls.append(prev,number,next);
function setMode(mode,page=0){current=mode===0?-1:Math.max(0,Math.min(page,elements.length-1));continuous.setAttribute('aria-pressed',String(current===-1));paged.setAttribute('aria-pressed',String(current!==-1));for(let i=0;i<elements.length;i++)elements[i].node.hidden=current!==-1&&i!==current;controls.hidden=current===-1;if(current!==-1){number.textContent='Page '+(elements[current].i+1)+' of 52';prev.disabled=current===0;next.disabled=current===elements.length-1;}}
pages.forEach((blocks,i)=>{if(!blocks.length)return;const page=make('section','shaiva-pdf-page');page.id='shaiva-pdf-page-'+(i+1);page.setAttribute('aria-label','Source document page '+(i+1));page.append(make('small','shaiva-source-page','Source PDF · Page '+(i+1)+' of 52'));for(const block of blocks)page.append(renderBlock(block));elements.push({i,node:page});list.append(page);const heading=blocks.find(b=>b[0]==='heading');const link=make('a',null,'Page '+(i+1)+(heading?' · '+heading[1].slice(0,85):''));link.href='#'+page.id;link.addEventListener('click',()=>{if(current!==-1){setMode(1,elements.findIndex(e=>e.i===i));toc.open=false;}});nav.append(link);});toc.append(summary,nav);continuous.addEventListener('click',()=>setMode(0));paged.addEventListener('click',()=>setMode(1,0));prev.addEventListener('click',()=>{if(current>0){setMode(1,current-1);window.scrollTo({top:0,behavior:'instant'});}});next.addEventListener('click',()=>{if(current<elements.length-1){setMode(1,current+1);window.scrollTo({top:0,behavior:'instant'});}});reader.replaceChildren(toolbar,toc,controls,list);document.body.classList.add('shaiva-full-view');setMode(0);const hash=decodeURIComponent(location.hash.slice(1));if(/^shaiva-pdf-page-\d+$/.test(hash))requestAnimationFrame(()=>document.getElementById(hash)?.scrollIntoView());}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();