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

Current resume point: Book 6, Chapter 6, final source verse downwards. Book 6, Chapters 8 and 7 are the completed releases recorded below.

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
| 5 | 1,517 | 673 | 844 |
| 6 | 498 | 170 | 328 |
| **Total** | **6,400** | **3,649** | **2,751** |

These are direct full-corpus audit totals after the 2026-09-23 alignment and no-commentary repairs, plus the complete reconstruction of Book 6, Chapter 7. They do not certify the remaining verses or imply that the whole Purāṇa is finished. The detailed report is in `audit/vishnu-purana-wfw-audit-2026-09-23.md`; the earlier 2026-09-22 ledger is retained as historical context.

| Current release | Verified chapter state |
|---|---|
| Book 6, Chapter 8 | 64/64 verse articles; 64 Sanskrit, translations, main WFW panels, and IAST panels; 31 sourced Śrīdhara Sanskrit/commentary panels; 33 exact no-commentary states |
| Next | Book 6, Chapter 7, verse 106 downwards |

Chapter 6.8's disputed readings were checked against the Vasuki mūla and numbered Vishvas witness, Śrīdhara text, fixed Wikisource revision, and GRETIL. Verse 6.8.15 now reads **पुंसां (puṃsām)** in agreement with the numbered and Śrīdhara witnesses; the mūla file's differing **पुंसा (puṃsā)** is disclosed in its source note. Its 832 main and 113 Śrīdhara phrase-gloss rows were checked for Sanskrit/IAST pairing. The main and Śrīdhara transliteration panels were cross-checked against their displayed Devanāgarī. The word-for-word layer is a lexical map, not copied running prose. Book 6, Chapter 7 was read against the Vasuki mūla blob `6e616a59a64804bc9d519fdbd399cfd88bc49501` and Śrīdhara file blob `e791efd7bd58ee362317656c7e890b38e5385975` on the `content` branch.

## Completion rule

A chapter is complete only after source reconciliation, full verse-by-verse semantic review, functional controls, an atomic remote commit, and successful post-commit read-back. Keep the full-corpus goal open until all 6,400 verses and every supplied Śrīdhara passage meet that standard.