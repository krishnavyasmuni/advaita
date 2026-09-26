# Śrīmad-Bhāgavatam Whole-Corpus Audit — 2026-09-26

**Repository:** `krishnavyasmuni/advaita`  
**Branch tip audited:** [`25e8d13d81156b614136aef166f0694a1b17f9ad`](https://github.com/krishnavyasmuni/advaita/commit/25e8d13d81156b614136aef166f0694a1b17f9ad)  
**Visual blueprint:** [Canto 1, Chapter 1](https://krishnavyasmuni.github.io/advaita/articles/srimad-bhagavatam-canto-01-sridhara-svami/#chapter-1)  
**Canonical inventory:** 12 Cantos, 335 chapters.

## What changed in this audit

All 12 canto reader shells now use the Chapter 1 reader styling: the same Bhagavad-gītā base stylesheet, the `gita-bhavishya-exact.css` overrides, and a shared cache version for the reader JavaScript. The seven shells that load the Śrīdhara clarity layer now use one cache version too. Chapter 1 and 2 already matched this styling; Cantos 3–12 did not.

The renderer creates expandable controls with native HTML `<details>` and `<summary>` elements and selects chapters from the URL hash. Static inspection confirmed that all 178 local JSON references in the clarity script resolve to files in the repository. This was a source-level check; a live browser click-through was not available in this audit.

## Chapter coverage

The Contents page links 196 chapters from Cantos 1, 2, 3, 10, 11, and 12. The other 139 chapters (Cantos 4–9) have no Contents links.

| Canto | Manifest chapters | In Contents | Current chapter-by-chapter finding |
|---|---:|---:|---|
| 1 | 1–19 | 19 | The current local dataset covers all 19 chapters (763 records, 4,814 word-for-word pairs). Existing project records mark the Canto 1 audit complete; this pass found no known placeholder strings. |
| 2 | 1–10 | 10 | All 10 chapters have local data (374 records, 2,626 pairs). Existing project records mark the Canto 2 audit complete; this pass found no known placeholder strings. |
| 3 | 1–33 | 33 | Data exists for all chapters (1,335 records, 6,049 pairs), but chapters 3.26–3.33 contain 905 filler glosses and 187 placeholder commentary translations. Chapters 3.1–3.25 still need phrase-to-source review; the existing ledger also records source gaps at 3.5.51, 3.6.22, and 3.18.16. |
| 4 | 1–31 | 0 | Local files cover only 4.1–4.26 (1,104 records, 3,292 pairs). They contain 3,216 filler glosses and 1,049 placeholder commentary translations. No local WFW files exist for 4.27–4.31. A pinned-source gap is recorded at 4.12.34. These data are not wired into the clarity loader. |
| 5 | 1–26 | 0 | No local Śrīdhara word-for-word dataset or chapter checkpoints. |
| 6 | 1–19 | 0 | No local Śrīdhara word-for-word dataset or chapter checkpoints. |
| 7 | 1–15 | 0 | No local Śrīdhara word-for-word dataset or chapter checkpoints. |
| 8 | 1–24 | 0 | No local Śrīdhara word-for-word dataset or chapter checkpoints. |
| 9 | 1–24 | 0 | No local Śrīdhara word-for-word dataset or chapter checkpoints. |
| 10 | 1–90 | 90 | All chapters have local data (3,748 records, 10,211 pairs). The existing audit records four unrecoverable pinned-witness gaps: 10.64.13, 10.68.30, 10.68.32, and 10.77.34. The whole-corpus placeholder scan found no generic filler in this Canto. |
| 11 | 1–31 | 31 | All 31 chapters have data (1,267 records, 7,098 pairs) and no generic filler strings, but the full verse-to-source and translation review is still open. The Canto 11 audit identifies unresolved alignment and gloss-quality questions; file and pair counts do not certify the English. |
| 12 | 1–13 | 13 | All chapters have data (507 records, 2,412 pairs). The current checkpoint ledger marks them source-checked and released; this pass found no known placeholder strings, but did not independently reread every translation. |

## Whole-data scan

I parsed all 214 candidate local word-for-word JSON assets, including unpublished Canto 4 data. All parsed as valid JSON: 9,098 records and 36,502 word-for-word pairs. The lint searched gloss and commentary fields for generated filler text such as “contextual literal sense of,” “translation pending,” and “to be translated.” It did not treat explicit “No commentary” sentinels as missing translations.

The site’s manifest points to 335 chapter sources. The main verse English and synonyms are fetched from the VedaBase mirror named in the manifest. The counts above describe local Śrīdhara-related gloss data; they are not a claim that the main verse English or every Sanskrit-to-English choice has been independently retranslated.

## Audit limits and remaining work

This audit establishes page wiring, JSON validity, chapter coverage, and known placeholder/source-gap locations. String lint cannot detect an incorrect Sanskrit reading, an omitted lexical sense, or an English translation that is fluent but wrong. Therefore the full Bhagavatam is **not yet certified complete or perfect**.

The remaining work is:

1. Replace the placeholder glosses and commentary translations in 3.26–3.33; complete the outstanding phrase/source review in 3.1–3.25.
2. Rebuild Canto 4 chapters 1–26 from the pinned Sanskrit instead of reusing the filler, resolve 4.12.34 against another witness, then add chapters 27–31.
3. Create source-aligned Śrīdhara word-for-word glosses and commentary translations for all chapters in Cantos 5–9.
4. Finish full source/translation verification for Canto 11.
5. Keep the four Canto 10 source gaps explicitly marked unless a reliable independent witness resolves them.
6. Independently reread the existing translated data in Cantos 1, 2, 10, and 12 before claiming every translation is correct.

