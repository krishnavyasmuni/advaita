# Viveka Dṛṣṭi Viṣṇu Purāṇa — completion and audit workflow

## Objective

Complete and semantically audit all 126 Viṣṇu Purāṇa chapter routes (6,400 verse articles). Work from the end of Book 6 backwards, publish one fully checked chapter at a time, and continue through Books 5, 4, 3, 2, and 1. The repository and the progress ledger below are the source of truth.

## Hard constraints

- Cloud-only: use the connected GitHub/API tools. Do not use a local checkout, shell, local browser, or local web server.
- Treat all synced `sources/` files as read-only.
- Never publish a partial chapter or overwrite a newer branch state.
- Work quickly by batching remote source reads and validation; accuracy has no artificial time limit.
- Do not alter unrelated pages, scripts, styling, or the Bhagavatam project files.
- Update the guide and audit ledger in the same chapter release. Publish the chapter immediately after all checks pass.

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

1. Read current branch head and current target-file SHA; fetch chapter Sanskrit, Śrīdhara, English cross-checks, guide, audit ledger, and Contents page in parallel.
2. Establish source verse count, verse boundaries, textual variants, and Śrīdhara-to-verse alignment once in memory.
3. Complete every verse from the final verse backwards. Use one stable page template; preserve existing typography and controls.
4. Validate verse IDs/count, Sanskrit and translation coverage, every WFW lexical row, IAST-to-Devanāgarī correspondence, Śrīdhara coverage, exact no-commentary states, working native `details/summary` controls, source note, and balanced HTML.
5. Confirm the chapter route already appears in the dynamic Contents list. Change the Contents file only if its actual link is missing or broken.
6. Create one atomic chapter-specific commit containing the chapter, this guide, and audit ledger. Update `main` only as a fast-forward from the freshest observed head.
7. Fetch the committed chapter, guide, audit ledger, and commit metadata again. Confirm exact content and checksums; then immediately begin the next chapter in the reverse sequence.

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

These are the 2026-09-22 full-corpus audit totals with the verified 6.8 release added: 64 main WFW articles. They do not certify the remaining verses or imply that the whole Purāṇa is finished. The chapter-level audit in `.github/maintenance/audit/vishnu-purana-wfw-audit-2026-09-22.md` records the baseline and this incremental update.

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

After the Chapter 14 release, Book 1 has a main-text WFW panel marker on 1,161/1,407 verses; Book 2 remains at 710/787. Chapters 21, 20, 19, 16, 15, and 14 added 14, 39, 86, 16, 154, and 48 panel markers, respectively; Chapters 15 and 14 now have reviewed lexical maps on all 156 and 49 verses. A visible marker alone does not certify a correct lexical map; semantic coverage remains open for the other chapters.

| Book | Verse articles | Main-text panel markers | No marker |
|---|---:|---:|---:|
| 1 | 1,407 | 1,161 | 246 |
| 2 | 787 | 710 | 77 |

Outstanding panel gaps by chapter:

- Book 1: Chapters 11 (57), 12 (95), and 13 (94); total 246.
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
- At the Chapter 16 release, Book 1 had 959/1,407 panel markers, with 448 marker gaps in Chapters 11–15. Book 2 had 710/787 markers, with 77 gaps.
- No placeholder or empty word-for-word panel remains in Chapter 16; existing Śrīdhara material is preserved.


## User-directed Books 1–2 focus — Chapter 15 release — 2026-09-25

Book 1 Chapter 15 is complete and read back on `main`. All 156 verse articles have the Chapter 9 word-for-word control and complete paired rows: 1,786 Devanāgarī/IAST/gloss entries, 156 English translation paragraphs, and 156 transliteration controls. The two older partial main-text maps were rebuilt; the 102 existing Śrīdhara panels remain in place.

The page uses the Chapter 9 control classes and linked stylesheet, preserving the same 12px pill controls (4px × 10px padding). Its route-local number labels retain the standalone qualities list as 1.15.65, so labels from local 1.15.66 onward are one higher than the mūla edition. Word-for-word entries follow the Sanskrit displayed in each article. At local 1.15.74, the numbered witness’s `daśabhyas` reading is used against the mūla edition’s `daśamyas`.

The source note pins the mūla text `39f12c475cf82e3363bcfaec28726f99a714e1fb`, numbered witness `a067d93fe25621fadffd7b3426e051c9b3b34746`, Śrīdhara text `e6eaf7dd0be0805a1294aa58041e7be83b3746be`, commentary `aa4555e1360e35a41a728ed89a8291938407fa27`, and English cross-check `23c8812f1479e5a043713c0c609835c884b8603d`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections against these witnesses include local 1.15.1 `āvavruḥ`, .2 `vātuṃ`/`ceṣṭituṃ`, .3 `tān dṛṣṭvā`, .7 `vārkṣeyī`, .71 `nṛṇām`, .72 `patnī`, .73 `Mārīṣām`, .98 `bhrātṛṇām`, .112 `varcasvī`, .123 `rudrās`, .131 `savitā`, .132 `āsan ye`, .140 `dityāḥ`, and .154 `matimān amatsarī`. Chapter 1.15.123’s translation now matches the 11 and 101 Rudra counts in the Sanskrit.

Marker status at the Chapter 15 release: Book 1 was 1,113/1,407 (294 without markers); Book 2 was 710/787 (77 without markers). Book 1’s gaps then were Chapters 11–14: 57, 95, 94, and 48 verses. Book 2’s gaps were Chapters 1, 4, 7, 8, and 13: 8, 5, 2, 32, and 30. Existing panels outside the reviewed chapters still need semantic audit.


## User-directed Books 1–2 focus — Chapter 14 release — 2026-09-25

Book 1 Chapter 14 is complete and read back on `main`. All 49 verse articles now have Chapter 9-style word-for-word controls and 524 paired Devanāgarī/IAST/gloss rows, along with all 49 translation paragraphs and transliteration controls. Forty-eight main-text panel markers were added, and the pre-existing partial main map at 1.14.26 was rebuilt. The 30 existing Śrīdhara word-for-word panels were retained.

The page uses the same `gita-details`, `gita-word-list`, and `gita-word-row` controls and Chapter 9 stylesheet as the other completed pages. The source note pins the mūla text `b70ca85ceaf9772668984598bc271f6ddb6dd36b`, numbered witness `a8545db2876fd82a27eeec2a3b143f4476f89952`, Śrīdhara text `d27c4b41afa15ee48cdb2994d0a89edb073cd1c2`, commentary `3beda04bc7be41e7675d8e4290e197c426f3249c`, and English cross-check `5bbe3aea66167c13420b817c79061fe4d515c697`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Text corrections follow the mūla at local 1.14.4 `vistṛtā`, .5 `tamasaḥ`, .10 `tat`, and .47 `vriyatām īpsito`; clear transcription fixes include .26 `bhujyate`, .30 `mukhaṃ`, and .32 `anantamūrtimān ca śuddhaḥ`. At .26, the page retains the numbered-witness reading `jīvabhūtaḥ` against the mūla’s bracketed variant `jīva-bījabhūtaḥ`.

Current focused marker status: Book 1 1,161/1,407 (246 without markers); Book 2 remains at 710/787 (77 without markers). Book 1’s remaining marker gaps are Chapters 11–13: 57, 95, and 94 verses. Book 2’s gaps are Chapters 1, 4, 7, 8, and 13: 8, 5, 2, 32, and 30 verses. Present panels outside the reviewed chapters still need semantic audit.

## User-directed Books 1–2 focus — Chapter 13 release — 2026-09-25

Book 1 Chapter 13 is complete and read back on `main`. All 95 verse articles now have the Chapter 9 word-for-word control and paired Devanāgarī/IAST/gloss rows (1,130 rows total), with all 95 English translations retained and all 95 transliteration controls aligned to the corrected displayed Sanskrit, including speaker labels. Ninety-four main-text panels were added; the legacy partial map at 1.13.38 was rebuilt. All 40 existing Śrīdhara word-for-word panels were preserved.

The route uses the same Chapter 9 shared CSS and `gita-details`, `gita-word-list`, and `gita-word-row` layout. The source note pins mūla text `216b675eb4704fd9ef1157a7c411873540f5f701`, numbered witness `39c4bfbeb08d0479d2e22f5ae15b2228fe14a95d`, Śrīdhara text `1915e0a47b2cdd8d1d63c5f9418cef043e2ea4db`, commentary `f932a96c9e4e62f94554216e4c3b5b137e28fcd4`, and English cross-check `ce67ff9dae71965186de9567807d96c220087201`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Textual corrections include local .15 `sāmakalaṃ`, .19 `sampūjyate`, .21 `Janārdanaḥ`, .54 `jñāyate ’sya`, and .87 `kalpayitvā`; the stray .89 footnote marker was removed. At .35, the page retains numbered-witness/Śrīdhara `cāturaḥ` over mūla `tvarānvitaḥ`. At .82, the displayed `vivardhitāḥ` reading and commentary distinction are documented in the source note.

Focused Book 1 panel markers now total 1,255/1,407 (152 without markers); Book 2 remains 710/787 (77 without markers). Book 1's remaining marker gaps are Chapters 11 and 12 (57 and 95). Book 2's gaps remain Chapters 1, 4, 7, 8, and 13 (8, 5, 2, 32, and 30). These are panel-presence counts; chapters with older panels still require semantic review.


## User-directed Books 1–2 focus — Chapter 12 release — 2026-09-25

Book 1 Chapter 12 is complete and read back on `main`: all 103 verse articles have the Chapter 9-style Word-for-word control, with 1,127 paired Devanāgarī/IAST/contextual-gloss rows. All 103 English translations and 103 main-text transliteration controls are present; the latter reproduce the displayed Sanskrit, including speaker labels. Ninety-five main-text panels were added and the eight pre-existing partial main maps were rebuilt. All 51 existing Śrīdhara Word-for-word panels were preserved, including nine Śrīdhara legacy maps.

The page uses the same Chapter 9 stylesheets, `gita-details`, `gita-word-list`, and `gita-word-row` presentation; the shared Word-for-word buttons use the 12px, 4px × 10px pill rule. Its source note pins the mūla text `1dd25be195442a479c767095ef6f633dad78a193`, numbered witness `bf008fc3238907d9f08f6ab96f4725cc35c5e63d`, Śrīdhara text `eb3062a4dfb9f98ebd822f334fcb7a6ee8c7a475`, commentary `a3662e00f307c22a82ece6dc30d1f71602876704`, and English reference `0855626556bb082b4005e43e0d2b4af0b32566b4`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. The mūla and numbered witness contain verse 1.12.19 absent from Śrīdhara’s sequence; the page restores it and aligns the following matprīti and maternal-warning verses to .20 and .21. The source note records the .21 `api/iha` variant, the .13 and .15 witness variants, the .20 `mā mohaṃ nivartyāsmāt` normalization, and clear transcription corrections at .43 and .102.

Focused Book 1 panel markers now total 1,350/1,407 (57 without markers, all in Chapter 11). Book 2 remains 710/787 (77 without markers), with gaps in Chapters 1, 4, 7, 8, and 13 (8, 5, 2, 32, and 30). These are panel-presence counts; older panels outside the reviewed chapters still need semantic audit.

## User-directed Books 1–2 focus — Chapter 11 release — 2026-09-25

Book 1 Chapter 11 is complete and read back on `main`: all 57 verse articles now have a full main-text Word-for-word panel, with 686 paired Devanāgarī/IAST/contextual-gloss rows, 57 translations, and 57 transliteration controls regenerated from the displayed Sanskrit, including speaker labels. Twenty-six new Word-for-word controls were added and the 31 existing controls were augmented with main-text rows. All 31 existing Śrīdhara panels and their legacy maps were preserved; all 34 commentary panels and 23 no-commentary states remain accounted for.

The page uses the Chapter 9 shared stylesheets and `gita-details`, `gita-word-list`, and `gita-word-row` presentation, including the 12px, 4px × 10px pill rule. Its source note pins the mūla text `99cb7be5e8dc29fab3278efeaca476240e9d6d6a`, numbered witness `8655f9fb2808772efcb6be144f8b8eac0d34023f`, Śrīdhara text `693f2667d21b0284083db6033b85b819bdac0066`, commentary `43b9789f2e5ca9cd43b8c36edf2e44d83f32aa2b`, and English reference `de1c6fc6aef2ca07fcd9ec38923b4466c4d66eeb`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections restore .8 `dhṛtaḥ`, .32 `abhivādana-pūrvakam`, .38 `hṛdayān`, .49 `vatsottamottamam`, .52 `viṣṇor ārādhanaparaiḥ`, and .53 `bāhyārthāt akhilāt`. The source note records the .19 `rājacchattraṃ` reading, .32 Śrīdhara variant, and .48 `yajñe yoge ca` variant against the mūla and numbered witness.

Book 1 focused panel markers now total 1,407/1,407. Book 2 remains 710/787 (77 without markers), with gaps in Chapters 1, 4, 7, 8, and 13 (8, 5, 2, 32, and 30). Existing Book 1 panels outside the reviewed chapters still need semantic audit.

## User-directed Books 1–2 focus — Book 2, Chapter 1 release — 2026-09-25

Book 2 Chapter 1 is complete and read back on `main`: all 43 verse articles now have full main-text Word-for-word panels, with 480 paired Devanāgarī/IAST/contextual-gloss rows. All 43 translations and transliteration controls remain present; main IAST now follows the displayed Sanskrit. Eight Word-for-word controls were added and 35 existing controls were augmented. All 49 legacy word-for-word maps and Śrīdhara notes were retained; all 43 commentary sections remain accounted for, including eight “No commentary” notices.

The page uses the Chapter 9 shared stylesheets and `gita-details`, `gita-word-list`, and `gita-word-row` layout, including the shared 12px, 4px × 10px pill rule. Its source note pins the mūla text `35e04e5d71462f8e5449e4a734c638bfb95ba174`, numbered witness `8d338951fb5c5c80c5d50d277875a43e544f2ac0`, Śrīdhara source `444145de015c5746d9bf8bc31f88fbe191ce0be1`, and English reference `3da244428968d26b15dfc92ec323176cfd810b73`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections restore .7 `savanaḥ`, .14 `krauñca`, .18 `varṣam`, .25 `svābhāvikī`, .27 `tasyarṣabho’bhavat`, .28 `makhān`, .29 `pulahasyāśramam`, .32 `etat`, and .41 `imāḥ`. The source note records .10 `nirmalāḥ/nirmamāḥ` and .37 `prastāva/prastāvi` witness variants.

Book 1 focused panel markers remain 1,407/1,407; existing panels in chapters outside the reviewed set still need semantic audit. Book 2 markers now total 718/787 (69 without markers), with gaps in Chapters 4, 7, 8, and 13 (5, 2, 32, and 30).

## User-directed Books 1–2 focus — Book 2, Chapter 4 release — 2026-09-25

Book 2 Chapter 4 is complete and read back on `main`: all 97 verse articles now have a full main-text Word-for-word list, with 1,040 paired Devanāgarī/IAST/contextual-gloss rows. All 97 translation paragraphs remain present, and all 97 main transliteration controls were regenerated from the displayed Sanskrit, including the Parāśara speaker cue in verse 1. Five Word-for-word controls were added and 92 existing controls were expanded. All 132 legacy `.wfw-map` blocks were preserved byte-for-byte; the 97 commentary-state panels remain, including 16 “No commentary” notices.

The page uses the Chapter 9 shared stylesheets and `gita-details`, `gita-word-list`, and `gita-word-row` layout, including the 12px, 4px × 10px pill-button rule. Its source note pins mūla `78aa74027224a72061184086acdbbee0d59e4480`, numbered witness `59e0595ab053e03c66ebf85c88591b877f2c3055`, Śrīdhara commentary `98c5ac6f61bd168e25a38057f315f701a16d9a54`, and English reference `45aba963269c4adf9ab4d79f4c46771bd9b3f211`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Source-backed corrections restore 2.4.31 `viṣṇum`, 2.4.33 `samudreṇa` and `vistārācchālmalasyaiva`, 2.4.37 `manujāḥ`, 2.4.56 `puṣkarādyaiḥ` and `yāgai`, and 2.4.68 `dharma-hāni`. At 2.4.73, .80, and .84 the page follows mūla and the English reference `Mahāpīta` against the numbered witness’s `Mahāvīra); the .73 Dhātaki/Dhātuki spelling difference is recorded in the source note.

Book 1 panel markers remain 1,407/1,407; older panels outside the reviewed chapters still need semantic audit. Book 2 panel markers now total 723/787 (64 remaining gaps: Chapters 7, 8, and 13 have 2, 32, and 30). Existing panels outside the completed chapters still need semantic audit.


## User-directed Books 1–2 focus — Book 2, Chapter 7 release — 2026-09-25

Book 2 Chapter 7 is complete and read back on `main`: all 43 verse articles now have full main-text Word-for-word lists, with 490 paired Devanāgarī/IAST/contextual-gloss rows. The verse-1 Maitreya speaker cue is included in the rows and regenerated transliteration. All 43 translation paragraphs remain present; two Word-for-word controls were added and 41 existing controls were expanded. All 56 legacy `.wfw-map` blocks were preserved byte-for-byte, along with all 43 commentary-state panels, including four “No commentary” notices.

The page uses the Chapter 9 shared stylesheets, details/list/row presentation, and 12px, 4px × 10px pill-button rule. Its source note pins mūla `a7bbc6caa7ee28d3d75d6f9456d992db6332ec55`, numbered witness `2841ccbfc130847647e3d5ee79fb0ad1a35c44c8`, Śrīdhara commentary `e6b9f9ef491aa3499298ba96d5db798fe9daff52`, and English reference `2820b451c83faff48d6494a1ee86c1979051f5c1`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Source-backed corrections restore 2.7.1 `śrīmaitreya uvāca`, .9 `saptarṣi`, .12 `kalpavāsinaḥ`, .16 `bhūrlokaḥ`, .28 `cetanātmātma-vedanaḥ`, .29 `sarvabhūtātmabhūtayā`, .34 `putrāṇām`, .35 `naivāsti`, .37 `patrāṅkurau`, and .41 `caitac`; corrupted `Maitreya` readings and duplicate verse-number suffixes were also corrected. The source note records the .5, .31, .32, and .34 witness variants.

Book 1 panel markers remain 1,407/1,407; older panels outside the reviewed chapters still need semantic audit. Book 2 panel markers now total 725/787 (62 remaining gaps: Chapters 8 and 13 have 32 and 30). Existing panels outside the completed chapters still need semantic audit.


## User-directed Books 1–2 focus — Book 2, Chapter 8 release — 2026-09-25

Book 2 Chapter 8 is complete and read back on `main`: all 122 verse articles have full main-text Word-for-word lists with 1,378 paired Devanāgarī/IAST/contextual-gloss rows. Thirty-two Word-for-word controls were added and 90 existing controls were expanded. All 116 legacy `.wfw-map` blocks remain byte-for-byte unchanged. The 122 English translation paragraphs and 122 commentary-state panels were preserved, including 21 “No commentary” notices; all 122 main transliterations were regenerated from the displayed Sanskrit.

The page uses the Chapter 9 shared stylesheets and details/list/row layout, including its 12px, 4px × 10px pill-button rule. The route pins mūla `b58f841534fe5f077ecdb6b5a069742b9240b59b`, numbered witness `4def34374ab0393d59503da8796c3c582cba5ba6`, Śrīdhara source `7e3e596f06bc5f94b0a2d3846095d9442b13c5f6`, and English reference `ca699cb4933e6f760308267b54090606dd234f94`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Source-backed corrections include 2.8.10, .12–.14, .21, .25, .33–.34, .39, .62, .70, .72–.73, .80, and .102. The missing or misassigned main verse sequence at .93–.99 was restored from the numbered witness; at .98 the page retains `bhāsvaram` against numbered-witness `bhāsuram`. Duplicate verse-number and footnote artifacts were removed from the Sanskrit display.

Book 1 focused panel markers remain 1,407/1,407; existing panels outside the reviewed chapters still need semantic audit. Book 2 markers now total 757/787; the only remaining marker gap is Chapter 13 (30). Existing panels outside the completed chapters still need semantic audit.

## User-directed Books 1–2 focus — Book 2, Chapter 13 release — 2026-09-25

Book 2 Chapter 13 is complete on `main`: all 104 verses now have Chapter 9-style Word-for-word controls with 1,180 paired Devanāgarī/IAST/contextual-gloss rows. Thirty controls were added and 74 existing controls were expanded. The 95 legacy `.wfw-map` blocks remain byte-for-byte unchanged; all 104 English translations and Śrīdhara commentary-state sections remain, including 16 exact “No commentary” notices. All 104 main transliterations match the displayed Sanskrit and include speaker cues where present.

The page uses the Chapter 9 shared stylesheets and `gita-details`, `gita-word-list`, and `gita-word-row` layout, including the 12px, 4px × 10px pill-button rule. Its source note pins the mūla text blob `3e329eddcc6a5434b6c18a570defaf1f66ad8262`, chapter mūla `39d8e72df251267d3f7699ac39a6c0318d28f182`, numbered witness `aa6bd83e979204fefe5f009fd44152ba0db6f637`, Śrīdhara source `c9e67fabf4c668dda27c7adc9aee8023f86eb041`, and English reference `055a9219c51cf27ac8154b3025b85dff43898bb9`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Source-backed display corrections include 2.13.9, .11, .20, .23–.24, .29, .35, .44, .47–.50, .58, .61, .64, .70, .73–.77, .85, and .89–.104; the restored .92–.96 sequence and the singular .89 `piṇḍaḥ` follow the numbered witness. Stray verse-number/footnote artifacts were removed from the Sanskrit display.

Word-for-word display coverage is now complete across Books 1 and 2: Book 1 has 1,407/1,407 verse panels, and Book 2 has 787/787. Panel coverage records the presence of the layout; it does not by itself certify every inherited gloss.


## User-directed Books 1–2 Word-for-word layout completion — 2026-09-25

- Book 1 is complete at 1,407/1,407 verse panels. The Book 1 migration added 5,615 Devanāgarī/IAST/gloss rows across its 12 updated pages.
- Book 2 is complete at 787/787 verse panels. This release migrated 378 verses from Chapters 2, 3, 5, 6, 9, 10, 11, 12, 14, 15, and 16 into 2,407 rows. Chapters 10 and 11 use one aligned row per corrected displayed Sanskrit token; the other chapters retain the legacy source-map phrase groupings in the new row layout.
- The Chapter 9 shared styles remain in use, including 12px button text and 4px × 10px pill padding. English translations, Śrīdhara sections, and “No commentary” notices were checked unchanged; Śrīdhara map blocks were preserved.
- Chapter 10/11 Sanskrit corrections follow the numbered witness at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05` (Chapter 10 blob `99f8bf9ee439a9c9dd954ab575db1feb819a8ff6`; Chapter 11 blob `fb0af6e5edb8cf611ee4dc4da090421d24fec88e`). Corrections are 2.10.11–.12, .20–.21, .23 and 2.11.1, .4, .6, .15, .18.
- This completes the requested Word-for-word layout coverage. Inherited phrase-level source mappings outside the per-token-reviewed pages still need a separate verse-by-verse semantic audit.


## User-directed whole-corpus structure and reader pass — 2026-09-26

A static scan checked all 126 chapter routes (6,400 verse articles) on the parent `main` snapshot. Verse numbering is contiguous in every chapter; every verse article has a Sanskrit block, a nonempty English paragraph, and a native Transliteration `details/summary` control; all verse links present in each Contents list resolve. These are structure checks only: they do not certify that an English paragraph translates every clause or that an existing word-for-word panel covers every Sanskrit word.

All 126 routes now use the Chapter 1 font imports, current Bhagavad Gītā base stylesheet, and exact reader overrides, with cache-busted stylesheet URLs. A small Viṣṇu Purāṇa stylesheet constrains legacy `.wfw-map` material to the same reading measure and prevents horizontal overflow. Existing maps were not represented as paired Devanāgarī/IAST lexical rows where that data is absent.

The fresh panel scan finds 2,573 verses without a main-text word-for-word panel and four panels that still contain an explicit placeholder (2.4.96, 2.6.40–41, and 2.8.34). Book 3 has panel markers throughout, but inherited maps remain subject to source-based semantic review. One visible omission at 3.8.7 was repaired: `rājendra` (“O king”) is now included in its lexical map. The reverse-order content pass remains at Book 6, Chapter 7, verse 106; no missing mappings were fabricated during this reader update.

| Book | Verse articles | Nonempty WFW panels | No WFW panel | Placeholder panels |
|---|---:|---:|---:|---:|
| 1 | 1,407 | 1,407 | 0 | 0 |
| 2 | 787 | 783 | 0 | 4 |
| 3 | 837 | 837 | 0 | 0 |
| 4 | 1,354 | 61 | 1,293 | 0 |
| 5 | 1,517 | 671 | 846 | 0 |
| 6 | 498 | 64 | 434 | 0 |
| **Total** | **6,400** | **3,823** | **2,573** | **4** |

The table records panel presence, not semantic completion. Chapter 1–3 panels still need verse-level comparison to the Sanskrit witnesses; Books 4–6 have the listed unmapped verses. Existing English paragraphs in 4.1.1 and 6.7.1 also need editorial review before those translations can be described as complete.
