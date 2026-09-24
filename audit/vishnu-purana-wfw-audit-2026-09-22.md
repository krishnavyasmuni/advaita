# Viṣṇu Purāṇa full-corpus audit — 2026-09-22

Full-corpus baseline commit: `c8ca1aab6e791010c41287c5738d3989d522811a` (2026-09-22); chapter-level delta added below.

Scope: all 126 Viṣṇu Purāṇa chapter routes on `main`, using the cited Vishvas/Vasuki source paths recorded in each route. All inspection and writes were performed through the remote GitHub workspace; nothing was run locally or in a local browser.

## What passed structurally

- 126 chapter routes were present.
- 6,400 verse articles were present after restoring six omitted Book 4 articles: 4.6.8, 4.6.30, 4.6.50, 4.7.5, 4.8.17, and 4.19.18.
- Verse IDs were contiguous and unique across all routes after those restorations.
- Every article had a Sanskrit block, a main translation block, and a Transliteration control.
- No `source range` labels remained.
- No leading ellipsis/marker scaffolding remained in the verse articles.
- No legacy WFW row retained a copied ordinary translation tail. The VP WFW markup was standardized to the verified one-mapping-per-line layout.
- No embedded three-digit source-footnote numerals remained in the audited lexical/source fields.
- The restored six articles contain source-backed Sanskrit, transliteration, direct lexical rows, and the correct no-commentary or Śrīdhara state.

## Word-for-word status

The requirement is not complete.

Following the verified Book 6 Chapter 8 release, 3,565 of 6,400 articles have a main-text lexical layer; 2,835 remain missing:

| Book | Articles | Main lexical WFW present | Still missing |
|---|---:|---:|---:|
| 1 | 1,407 | 1,198 | 209 |
| 2 | 787 | 710 | 77 |
| 3 | 837 | 837 | 0 |
| 4 | 1,354 | 61 | 1,293 |
| 5 | 1,517 | 695 | 822 |
| 6 | 498 | 64 | 434 |

Books 1–2 contain some WFW controls with Śrīdhara material; those are not automatically counted as complete main-text WFW. Books 4–6 still need genuine Sanskrit-first reconstruction beyond the chapters already rebuilt; the current reverse-order pass has now rebuilt Book 6 Chapter 8 (64/64 main lexical layers), alongside the previously rebuilt Book 5 chapters. A control’s presence is not being counted as semantic completion.

## Śrīdhara and control status

After replacing Book 6 Chapter 8's previous 24 Śrīdhara controls and 41 no-commentary states with 31 source-mapped Śrīdhara controls and 33 exact no-commentary states, the repository contains 3,577 articles with a Śrīdhara Sanskrit control and 3,140 explicit `No commentary.` states. The structural control check confirms that the published Transliteration controls are present, but it does not prove that every IAST string or every Śrīdhara translation is semantically correct.

## Required next work

Rebuild the missing main WFW one complete chapter at a time from the exact displayed Sanskrit, with every phrase mapped directly, then independently check the corresponding Śrīdhara Sanskrit and English. Do not mark a chapter complete merely because its route or button exists. Do not replace missing lexical work with the ordinary translation, a placeholder, or a generated paragraph.

This audit therefore records the site as structurally repaired in the areas above but semantically incomplete for the remaining 2,835 main WFW articles. Chapter-by-chapter lexical rebuilding remains open.


## Incremental reverse-order chapter audit — 2026-09-23

Book 6 Chapter 8 has been rebuilt from its final verse backwards and published as a complete chapter. The dynamic Contents page already generates all eight Book 6 chapter links, including this route, so no Contents-file change was needed.

- 64/64 contiguous verse articles, Sanskrit blocks, English translations, Word-for-word controls, and Transliteration controls.
- 832 main-text lexical mappings and 113 Śrīdhara lexical mappings; each entry pairs Sanskrit, IAST, and a concise gloss.
- 31 source-mapped Śrīdhara Sanskrit/commentary blocks and 33 exact `No commentary.` states.
- Main IAST and supplied Śrīdhara IAST were checked against their displayed Devanāgarī; the verse 6.8.15 spelling and lexical gloss were corrected to `पुंसां (puṃsām)`.
- No placeholder word-for-word messages, ellipses, displayed source-range labels, missing verse IDs, or unbalanced HTML remain in this chapter.

This is an incremental chapter audit, not a claim that the rest of the 6,400-verse corpus is complete. The next reverse-order target is Book 6 Chapter 7, beginning with its source's final verse, 6.7.106.


## User-directed Book 1 completion pass — 2026-09-24

A direct current-branch audit finds 761/1,407 Book 1 verses with an explicit main-text word-for-word section before this pass. The earlier 1,198 figure counted visible controls, including pending panels and Śrīdhara-only material; it is not a verified main-text lexical count. This correction leaves 646 Book 1 verses requiring main-text mapping.

### Book 1, Chapter 18

- 43/43 contiguous verse articles have a main-text lexical map, with Sanskrit and IAST panels and source/commentary content retained.
- Added 43 Chapter 9-style word-for-word sections using the paired-script row layout and matching control sizes.
- Corrected 1.18.3 from `प्रविज्ञातम् (pravijñātam)` to source-backed `अविज्ञातम् (avijñātam)`; the pinned mūla and numbered witness agree.
- Source witness: `vishvAsa/purANam_vaiShNavam` content commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`; mūla `viShNu-purANam/viShNu-chitta-TIkA/mUlam_me/01/18.md`, blob `4247989218affbd077c77bf960a0b09e3295da1d`; numbered witness `viShNu-purANam/goraxapura-pAThaH/hindy-anuvAdaH/01/18.md`, blob `8777450e4dba39b5e270b7d3d32cdef8de92f5bd`.
- Book 1 status after this release: 804/1,407 main-text maps complete; 603 remain.
