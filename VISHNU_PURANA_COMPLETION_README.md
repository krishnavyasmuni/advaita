# Viveka Dṛṣṭi Viṣṇu Purāṇa — completion and audit workflow

## Objective

Complete and semantically audit all 126 Viṣṇu Purāṇa chapter routes (6,400 verse articles). Work from the end of Book 6 backwards, publish one fully checked chapter at a time, and continue through Books 5, 4, 3, 2, and 1. The repository and the progress ledger below are the source of truth.

## Hard constraints

- Cloud-only: use the connected GitHub/API tools. Do not use a local checkout, shell, local browser, or local web server.
- Treat all synced `sources/` files as read-only.
- Never publish a partial chapter or overwrite a newer branch state.
- Work quickly by batching remote source reads and validation; accuracy has no artificial time limit.
- Do not alter unrelated pages, scripts, styling, or the Bhagavatam project files.
- Update the README and audit ledger in the same chapter release. Publish the chapter immediately after all checks pass.

## Reverse release order

Start at Book 6, Chapter 8, verse 64, then work backwards to 6.8.1. After publishing that complete chapter, start Book 6, Chapter 7 at its final source verse and work down to verse 1. Continue chapter-by-chapter in descending order through Book 6, then Books 5, 4, 3, 2, and 1. Verify each chapter's actual verse count from its source; never assume a count.

Current resume point in the full-corpus sequence: Book 6, Chapter 7, verse 106. The owner has since directed this session to prioritize Viṣṇu Purāṇa Books 1–2; that focused status is recorded below. The full-corpus sequence remains open.

## Source hierarchy

For each chapter, fetch complete source files remotely and retain exact paths, revision IDs, and blob SHAs in the chapter note.

- Sanskrit base text: Vishvas/Vasuki mūla under `viShNu-purANam/viShNu-chitta-TIkA/mUlam_me/`.
- Numbering and alternate reading check: Vishvas/Vasuki numbered witness under `viShNu-purANam/goraxapura-pAThaH/hindy-anuvAdaH/`.
- Śrīdhara Sanskrit and mapping: `viShNu-purANam/shrIdhara-viShNu-chittau/`.
- Cross-checks only: the corresponding fixed Wikisource revision, GRETIL Sanskrit, Vasuki English witness, and Wilson’s translation at Wisdom Library.
- Translate from the Sanskrit first. English cross-checks are not a source to copy into the site's translation or word-for-word gloss.

If Sanskrit witnesses disagree, resolve the reading from the actual source evidence, correct obvious transcription/OCR errors only when supported by another witness, and record the precise choice in a concise textual note. Do not silently claim that every witness agrees.

## What a complete verse requires

Every source verse must have one correctly numbered article with:

1. Source-backed Sanskrit Devanāgarī.
2. A faithful, readable English translation that accounts for every clause.
3. A working **Word-for-word** control with genuine lexical mappings: Sanskrit form, correct IAST, and a concise gloss. Cover every word or necessary compound/phrase unit. Do not put a running translation, a paragraph, ellipses, filler, or a placeholder in this control.
4. A working **Transliteration** control whose IAST corresponds exactly to the displayed Sanskrit.
5. The actual Śrīdhara Sanskrit, IAST, phrase-level gloss, and faithful commentary translation wherever supplied.
6. Exactly `No commentary.` where the source supplies none.

A visible control does not prove that its content is complete. Check the semantics, not just the markup. Keep source alignment details out of displayed commentary; do not print source-range labels. When one source commentary passage applies to multiple verses, repeat it under every verse it explains without adding range labels to the UI.

## Fast, safe chapter release

1. Read current branch head and current target-file SHA; fetch chapter Sanskrit, Śrīdhara, English cross-checks, README, audit ledger, and Contents page in parallel.
2. Establish source verse count, verse boundaries, textual variants, and Śrīdhara-to-verse alignment once in memory.
3. Complete every verse from the final verse backwards. Use one stable page template; preserve existing typography and controls.
4. Validate verse IDs/count, Sanskrit and translation coverage, every WFW lexical row, IAST-to-Devanāgarī correspondence, Śrīdhara coverage, exact no-commentary states, working native `details/summary` controls, source note, and balanced HTML.
5. Confirm the chapter route already appears in the dynamic Contents list. Change the Contents file only if its actual link is missing or broken.
6. Create one atomic chapter-specific commit containing the chapter, this README, and audit ledger. Update `main` only as a fast-forward from the freshest observed head.
7. Fetch the committed chapter, README, audit ledger, and commit metadata again. Confirm exact content and checksums; then immediately begin the next chapter in the reverse sequence.

Batch checks and report only meaningful findings to keep the loop fast. If a witness conflict is unresolved, state the exact verse and do not mark that chapter complete.

## Progress — 2026-09-23

| Book | Articles | Main WFW complete | Still missing |
|---|---:|---:|---:|
| 1 | 1,407 | 1,198 | 209 |
| 2 | 787 | 710 | 77 |
| 3 | 837 | 837 | 0 |
| 4 | 1,354 | 61 | 1,293 |
| 5 | 1,517 | 695 | 822 |
| 6 | 498 | 64 | 434 |
| **Total** | **6,400** | **3,565** | **2,835** |

These are the 2026-09-22 full-corpus audit totals with the verified 6.8 release added: 64 main WFW articles. They do not certify the remaining verses or imply that the whole Purāṇa is finished. The chapter-level audit in `audit/vishnu-purana-wfw-audit-2026-09-22.md` records the baseline and this incremental update.

| Current release | Verified chapter state |
|---|---|
| Book 6, Chapter 8 | 64/64 verse articles; 64 Sanskrit, translations, main WFW panels, and IAST panels; 31 sourced Śrīdhara Sanskrit/commentary panels; 33 exact no-commentary states |
| Next | Book 6, Chapter 7, verse 106 downwards |

Chapter 6.8's disputed readings were checked against the Vasuki mūla and numbered Vishvas witness, Śrīdhara text, fixed Wikisource revision, and GRETIL. Verse 6.8.15 now reads **पुंसां (puṃsām)** in agreement with the numbered and Śrīdhara witnesses; the mūla file's differing **पुंसा (puṃsā)** is disclosed in its source note. Its 832 main and 113 Śrīdhara phrase-gloss rows were checked for Sanskrit/IAST pairing. The main and Śrīdhara transliteration panels were cross-checked against their displayed Devanāgarī. The word-for-word layer is a lexical map, not copied running prose.



## User-directed Book 1 completion pass — 2026-09-24

A direct verse-level re-audit separates a main-text lexical map from a visible control, a pending message, or a Śrīdhara-only panel. Before this pass, 761 of Book 1's 1,407 verses had an explicit main-text lexical section; 646 still needed one. This corrects the earlier control-presence count of 1,198, which included 182 pending panels and other controls without a main-text lexical section.

Book 1, Chapter 18 is now complete: 43/43 contiguous verse articles have a main-text word-for-word section in the Chapter 9 reader layout, with existing Śrīdhara material retained. The Devanāgarī and IAST for 1.18.3 were corrected to **अविज्ञातम् (avijñātam)** after the pinned Vasuki mūla text and numbered witness agreed on that reading. Chapter 18's 43 maps raise the Book 1 count to 804/1,407; 603 remain. The 1.18.3 witness check used upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`, mūla blob `4247989218affbd077c77bf960a0b09e3295da1d`, and numbered-witness blob `8777450e4dba39b5e270b7d3d32cdef8de92f5bd`.

## Completion rule

A chapter is complete only after source reconciliation, full verse-by-verse semantic review, functional controls, an atomic remote commit, and successful post-commit read-back. Keep the full-corpus goal open until all 6,400 verses and every supplied Śrīdhara passage meet that standard.

Chapter 18 wording refinement: the 1.18.33 lexical rows now separate `hṛdi āste` (“abides in the heart”) from `hariḥ īśvaraḥ` (“Hari, the Lord”), and 1.18.38 reads `na pāvakam cintayāmi` as “I do not regard them as evil.”


## User-directed Books 1–2 focus — 2026-09-24

The owner requested completion of the word-for-word layer in Viṣṇu Purāṇa Books 1 and 2 and a reader-style pass based on Bhagavad Gītā Chapter 9. The Chapter 9 fonts and exact 12px pill controls (4px × 10px padding) are linked from all 22 Book 1 and 16 Book 2 chapter pages.

After the Chapter 16 release, Book 1 has a main-text WFW panel marker on 959/1,407 verses; Book 2 remains at 710/787. Chapters 21, 20, 19, and 16 added 14, 39, 86, and 16 completed panels, respectively. A visible marker alone does not certify a correct lexical map; semantic coverage remains open for the other chapters.

| Book | Verse articles | Main-text panel markers | No marker |
|---|---:|---:|---:|
| 1 | 1,407 | 959 | 448 |
| 2 | 787 | 710 | 77 |

Outstanding panel gaps by chapter:

- Book 1: Chapters 11 (57), 12 (95), 13 (94), 14 (48), and 15 (154); total 448.
- Book 2: Chapters 1 (8), 4 (5), 7 (2), 8 (32), and 13 (30); total 77.

### Book 1, Chapter 21 release

- 41/41 contiguous articles have a reviewed main-text lexical map, with 476 paired Devanāgarī/IAST mapping rows.
- Main transliteration panels were checked against displayed Sanskrit; every lexical row has a matching Devanāgarī form, IAST, and concise gloss.
- All Word-for-word controls use the Chapter 9 paired-row layout. No pending messages or empty maps remain in the chapter.
- The source note pins the Vasuki mūla, numbered witness, Śrīdhara source, and English cross-check to their blob SHAs and upstream commit. It records the reading choices at 1.21.1–.40, including witness-supported corrections and retained mūla readings.
- The release adds the 14 previously missing main-text panels in verses 1–14; the 27 existing maps in verses 15–41 were checked and rebuilt as paired lexical rows.

### Book 1, Chapter 20 release

- 39/39 contiguous articles now contain source-complete Sanskrit, full translations, main-text word-for-word maps, and Transliteration controls. The previously truncated Sanskrit in verses 18–20, 23–24, 28, and 34 was restored.
- Added 464 paired Devanāgarī/IAST lexical rows across all 39 verses. Each map was reviewed for Sanskrit form, transliteration, and a concise gloss; all pending messages were removed.
- Main IAST panels were regenerated from the displayed Sanskrit. Existing Śrīdhara material, English translations outside the reviewed correction at 1.20.24, and commentary/no-commentary states were retained.
- The textual note pins the mūla, numbered witness, Śrīdhara commentary, and English cross-check. It records the decisions at 1.20.1–.39, including witness corrections and readings retained from the mūla.
- Book 1 panel status after this release: 857/1,407; 550 remain. The outstanding marker gaps are Book 1 Chapters 11–16 and 19 listed above, plus the Book 2 chapters listed above.

### Book 1, Chapter 19 release

- 86/86 contiguous verse articles now have word-for-word panels using the Chapter 9 paired Devanāgarī/IAST row layout, with 1,022 lexical rows and no pending controls.
- Every row pairs a Sanskrit form, its IAST, and a concise gloss. Existing English translations and commentary states were retained; main Sanskrit and IAST were corrected where the mūla and numbered witness exposed clear transcription errors.
- The pinned source note records significant readings, including mūla choices at 1.19.20, .29, .35, .39, .45, .68, .70, .74, .81–82, and .84, and witness-supported corrections at .16, .30, .54–55, .61, and .73.
- Book 1 panel status after this release: 943/1,407; 464 remain. The outstanding Book 1 marker gaps are Chapters 11–16 listed above; Book 2 remains at 710/787 with 77 gaps.

Books 1 and 2 remain in progress. Panel counts for the other chapters are structural only and do not certify lexical completeness.


### Book 1, Chapter 16 release

- All 16 verse articles now have reviewed, paired Devanāgarī/IAST lexical rows, for 201 word-for-word mappings; all translations and main transliteration panels were checked against the displayed Sanskrit.
- Replaced the four Śrīdhara-only/contextual controls with a main-text lexical layer while retaining their Śrīdhara content; added main lexical panels to the other 12 verses.
- Corrected source-backed Sanskrit readings and cleaned incomplete translations, including the mūla/witness readings at 1.16.1–.4, .6–.8, .10, .12–.16. The source note records variants at .8, .10, .12, and .15 with exact source blobs.
- Book 1 panel status is now 959/1,407, with 448 marker gaps remaining in Chapters 11–15. Book 2 remains at 710/787 with 77 marker gaps.
- No placeholder or empty word-for-word panel remains in Chapter 16; existing Śrīdhara material is preserved.
