(()=>{
const root=document.getElementById('source-content');
if(!root)return;

const removePreviousBreak=el=>{
  const prev=el.previousSibling;
  if(prev&&prev.nodeType===1&&prev.tagName==='BR')prev.remove();
  el.remove();
};

const noteByRef={
  '1.40.14':'The syntax and argumentative target are compressed in the transmitted text.',
  '1.40.15':'Here nitya in nitya-jāti means “permanent/eternal jāti.”',
  '1.40.26':null,
  '1.40.32':'Printed text: kṛtrimatvād akṛtrimaṃ bhavati, without na; the wording is textually difficult. The secure terms are adhruva, kṛtrima, sāmayika and sāṅketika.',
  '1.41.23':'Sanātana modifies vastu in the final pāda.',
  '1.41.54':'Printed text: na brahmatā bhavet. The syntax of saṃskartṝṇāṃ śarīrasya is difficult.',
  '1.42.26':'Printed text: saṃskāras tena kāraṇam, with no na. The line is textually difficult beside the preceding statement that he became a brāhmaṇa through tapas.',
  '1.42.27':null,
  '1.42.28':null,
  '1.42.29':null,
  '1.42.30':null
};

const clean=()=>{
  root.querySelectorAll('p').forEach(p=>{
    const t=p.textContent.trim();

    if(t.startsWith('The earlier draft left out too much of this discussion.')){
      p.remove();
      return;
    }
    if(t.startsWith('Translation note. The tarka passages below have been retranslated closely from the Sanskrit.')){
      p.remove();
      return;
    }

    if(t.includes('The preceding sentence will be explained in further detail as the document goes on but was iterated as such to provide a basic pre-print of our method.')){
      p.innerHTML=p.innerHTML.replace('The preceding sentence will be explained in further detail as the document goes on but was iterated as such to provide a basic pre-print of our method. ','');
      return;
    }

    if(t.startsWith('These six verses belong to the technical lead-in that was missing before.')){
      p.textContent='These six verses form the technical lead-in. They discuss pramāṇa, universals, nitya-jāti, and causal reasoning about Vedic utterance before the text turns to the perceptible horse-and-cow comparison.';
      return;
    }

    if(t==='These verses grammatically continue the comparison begun in 1.43.14–17. The earlier version stopped the list too soon.'){
      p.textContent='These verses grammatically continue the comparison begun in 1.43.14–17.';
      return;
    }

    if(t==='These three transitional verses were previously skipped between the long account of brāhmaṇa-ācāra and the account of how the varṇa boundaries were established.'){
      p.textContent='These three transitional verses bridge the long account of brāhmaṇa-ācāra and the account of how the varṇa boundaries were established.';
      return;
    }

    if(t.startsWith('The old English on the source page inserted “not” into saṃskāras tena kāraṇam.')){
      p.textContent='The printed Sanskrit has saṃskāras tena kāraṇam, with no na. The line is textually difficult because the preceding half says that he became a brāhmaṇa through tapas.';
    }
  });

  root.querySelectorAll('h3.remark-label,h4.remark-label').forEach(h=>{
    if(h.textContent.trim()==='The tapas verses — and a problem in the old translation')h.textContent='The tapas verses';
  });

  root.querySelectorAll('.translation p').forEach(p=>{
    const ref=p.querySelector(':scope > strong')?.textContent.trim();
    if(!ref||!Object.prototype.hasOwnProperty.call(noteByRef,ref))return;
    const span=p.querySelector(':scope > span');
    if(!span)return;
    const note=noteByRef[ref];
    if(note===null){removePreviousBreak(span);return;}
    const expected=`Text note: ${note}`;
    if(span.textContent.trim()!==expected)span.innerHTML=`<em>Text note:</em> ${note}`;
  });
};

const observer=new MutationObserver(()=>clean());
observer.observe(root,{childList:true,subtree:true});
clean();
})();
