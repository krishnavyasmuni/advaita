# Viṣṇu Purāṇa full-corpus audit — 2026-09-22

Audited commit: `ba1b5ec398c42910849c52114eefa859b30da694`

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

A WFW control exists for 3,143 of 6,400 articles. 3,257 articles still do not have a main-text lexical layer:

| Book | Articles | Main lexical WFW present | Still missing |
|---|---:|---:|---:|
| 1 | 1,407 | 1,198 | 209 |
| 2 | 787 | 710 | 77 |
| 3 | 837 | 837 | 0 |
| 4 | 1,354 | 61 | 1,293 |
| 5 | 1,517 | 337 | 1,180 |
| 6 | 498 | 0 | 498 |

Books 1–2 contain some WFW controls with Śrīdhara material; those are not automatically counted as complete main-text WFW. Books 4–6 still need genuine Sanskrit-first reconstruction beyond the chapters already rebuilt; the current pass has rebuilt Books 5 Chapters 22, 24, 27, 28, and 31, with sourced Śrīdhara layers added for Chapters 22 and 31. A control’s presence is not being counted as semantic completion.

## Śrīdhara and control status

The repository contains 3,439 articles with a Śrīdhara Sanskrit control and 2,951 explicit `No commentary.` states. The structural control check confirms that the published Transliteration controls are present, but it does not prove that every IAST string or every Śrīdhara translation is semantically correct.

## Required next work

Rebuild the missing main WFW one complete chapter at a time from the exact displayed Sanskrit, with every phrase mapped directly, then independently check the corresponding Śrīdhara Sanskrit and English. Do not mark a chapter complete merely because its route or button exists. Do not replace missing lexical work with the ordinary translation, a placeholder, or a generated paragraph.

This audit therefore records the site as structurally repaired in the areas above but semantically incomplete for the remaining 3,292 main WFW articles. Chapter-by-chapter lexical rebuilding remains open.
