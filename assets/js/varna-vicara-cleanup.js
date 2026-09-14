(()=>{
const root=document.getElementById('source-content');
if(!root)return;

const clean=()=>{
  root.querySelectorAll('p').forEach(p=>{
    const t=p.textContent.trim();
    if(t.startsWith('The earlier draft left out too much of this discussion.') ||
       t.startsWith('Translation note. The tarka passages below have been retranslated closely from the Sanskrit.')){
      p.remove();
    }
  });
};

const observer=new MutationObserver(()=>clean());
observer.observe(root,{childList:true,subtree:true});
clean();
})();
