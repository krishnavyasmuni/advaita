# Viṣṇu Purāṇa WFW and Śrīdhara Audit — 2026-09-23

This audit covers the 126 Viṣṇu Purāṇa chapter routes in this repository and all 6,400 verse articles.

## Result

The corpus is not complete yet.

Every article currently has a Sanskrit block, an English translation, and a transliteration block. The Word-for-word control is present for 3,786 of 6,400 articles; 2,614 still need genuine Sanskrit-first lexical mapping.

| Book | Articles | Word-for-word present | Still missing |
|---|---:|---:|---:|
| 1 | 1,407 | 1,198 | 209 |
| 2 | 787 | 710 | 77 |
| 3 | 837 | 837 | 0 |
| 4 | 1,354 | 61 | 1,293 |
| 5 | 1,517 | 673 | 844 |
| 6 | 498 | 307 | 191 |
| **Total** | **6,400** | **3,786** | **2,614** |

Śrīdhara status after the repairs in this branch:

- 3,491 articles contain a Śrīdhara Sanskrit block.
- 3,007 articles explicitly state `No commentary.`
- Ten Book 2 articles that had neither state now have the explicit no-commentary marker: 2.14.9; 2.15.9–10; and 2.16.2, 16–21.
- Existing WFW controls did not contain placeholder text or ellipses in this audit.

## Source audit

The source witnesses were checked chapter by chapter against the public Vasuki repository:

- Main Sanskrit: `viShNu-purANam/viShNu-chitta-TIkA/mUlam_me/`
- Alternate chapter/numbering witness: `viShNu-purANam/goraxapura-pAThaH/hindy-anuvAdaH/`
- Vasuki English witness: `viShNu-purANam/viShNu-chitta-TIkA/en/`
- Śrīdhara Sanskrit: `viShNu-purANam/shrIdhara-viShNu-chittau/`

All 126 canonical chapter paths were found. Book 6 chapter 8 uses the canonical `8.md`; the separate `09_shiShya-paramparA...` file is an alternate later chapter and is not counted as one of the 126 canonical routes.

The English witness is used as a cross-check, not as a substitute for translating the Sanskrit. Wilson’s English translation is also used as a comparison witness through the Internet Sacred Text Archive: [The Vishnu Purāṇa index](https://archive.sacred-texts.com/hin/vp/index.htm).

## Repairs included in this branch

- Added the required explicit no-commentary marker to the ten Book 2 articles listed above.
- Corrected the Book 6 chapter 7 page metadata, which incorrectly identified the page as Book 3 chapter 1.
- Corrected a serious Śrīdhara alignment error in Book 5 chapter 1: the closing commentary for verse 5.1.87 had been attached to verse 5.1.1. Verse 5.1.1 now carries its actual opening Śrīdhara passage, and verse 5.1.87 carries the closing Śrīdhara passage.
- Added a Sanskrit-first word-for-word control and cleaner English translation for those two repaired verses.\n- Reconstructed Book 6, Chapter 7, verses 1–106 from the Vasuki mūla: every verse now has a real lexical map, source-aligned Devanāgarī, IAST, and concise English; several misaligned main-Sanskrit blocks, OCR tails, and placeholder translations were corrected. Existing Śrīdhara Sanskrit/IAST was retained where supplied, and the two remaining placeholder Śrīdhara translations were replaced with translations of the displayed commentary. The mūla witness was read at blob `6e616a59a64804bc9d519fdbd399cfd88bc49501`; the Śrīdhara witness was read at blob `e791efd7bd58ee362317656c7e890b38e5385975`. Reconstructed Book 6, Chapter 6, verses 1–50 from mūla blob `1bcec8b89e78113a879fe65bd04fb22ceb6336ce` and Śrīdhara blob `087a000f56e68581ac7126f269d25abe84270d2a`, correcting source/OCR readings and aligning all 50 WFW/IAST panels. Reconstructed Book 6, Chapter 5, verses 1–87 from mūla blob `75250053faa0b915f1ebb92223dda7191fb1d9cc` and Śrīdhara blob `d9147ba9a9f0e1fc91d0c7bcbfab2937a84ca5dd`, correcting OCR readings and aligning all 87 WFW/IAST panels.

## Remaining work

The repository must not be called complete until the remaining 2,614 articles receive real lexical mappings, with every Sanskrit word or compound represented by an accurate IAST form and concise gloss. The Books 4–6 gaps are especially large, and their English should be reviewed against the Sanskrit rather than assumed correct merely because an English paragraph is present.
