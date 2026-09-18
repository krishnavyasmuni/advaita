/* Source-PDF passages missing from the published Viṣṇu paper; run before pagination. */
(()=>{
'use strict';
if(!/\/articles\/a-vaishnava-lens-on-vishnu-as-the-supreme-deity\/?$/.test(location.pathname))return;
const root=document.getElementById('preface')?.parentElement;if(!root)return;
const children=[...root.children];
const text=n=>(n?.textContent||'').replace(/\s+/g,' ').trim();
const find=(tag,re)=>children.find(n=>n.matches(tag)&&re.test(text(n)));
function insert(anchor,key,verse){
 if(!anchor||root.querySelector(`[data-pdf-restoration="${key}"]`))return;
 const details=document.createElement('details');details.className='sanskrit-reveal';details.dataset.pdfRestoration=key;
 const summary=document.createElement('summary');summary.textContent='Show Sanskrit';
 const p=document.createElement('p');p.lang='sa-Deva';p.textContent=verse;details.append(summary,p);anchor.after(details);
}
// Page 22: Govindarāja's first Sanskrit gloss was dropped from the web edition.
insert(find('h3',/Commentary by Govindarāja \(Bhūṣaṇa\)/),'22-govindaraja','आधिक्यावबोधेन न पक्षपातमूलमित्याह सर्षिगणा इति । अतीन्द्रियार्थद्रष्टार ऋषयः । न तत् ज्ञानं न पक्षपातमूलं न वा भ्रान्तिमूलमिति भावः ।');
// Page 32: Śaṅkara's words on Bhagavad Gītā 9.23, not merely the web summary.
insert(find('p',/source contrasts this with Śaṅkarācārya.s gloss/i),'32-avidhi','अविधिपूर्वकम् अविधिः अज्ञानं तत्पूर्वकं यजन्ते इत्यर्थः ।');
// Pages 32–33: his Sanskrit explanation of Gītā 9.25.
insert(find('p',/Śaṅkara explains “other beings” as Vināyaka/i),'32-33-other-beings','भूतानि विनायकमातृगणचतुर्भगिन्यादीनि यान्ति भूतेज्याः भूतानां पूजकाः । यान्ति मद्याजिनः मद्यजनशीलाः वैष्णवाः मामेव यान्ति । समाने अपि आयासे मामेव न भजन्ते अज्ञानात्तेन ते अल्पफलभाजः भवन्ति इत्यर्थः । न केवलं मद्भक्तानाम् अनन्तफलम् ।');
// Page 33: Śaṅkara on Bhagavad Gītā 6.47.
insert(find('p',/Śaṅkara glosses “all yogīs” as including worshippers of Rudra/i),'33-yogin','योगिनामपि सर्वेषां रुद्रादित्यादिध्यानपराणां मध्ये मद्गतेन मयि वासुदेवे समाहितेन अन्तरात्मना अन्तःकरणेन श्रद्धावान् श्रद्धाधानः सन् भजते सेवते यो मां स मे मम युक्ततमः ।');
})();
