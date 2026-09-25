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


Chapter 18 lexical refinement after read-back: 1.18.33 now separates `hṛdi āste` from `hariḥ īśvaraḥ`; 1.18.38's contextual phrase gloss is clarified as `I do not regard them as evil`.


## User-directed Books 1–2 re-audit and Chapter 21 release — 2026-09-24

Pre-release branch audited: `e53270cb5ef7bb4eafc65a3898fdb49683b7ec54`.

The Chapter 9 fonts and exact pill-control stylesheet are linked from all 38 Book 1–2 pages. Current focused panel-presence counts after the Chapter 21 release:

| Book | Verse articles | Main-text panel marker | No main-text panel marker |
|---|---:|---:|---:|
| 1 | 1,407 | 943 | 464 |
| 2 | 787 | 710 | 77 |

These counts identify panel presence only. Other chapters still require verse-by-verse semantic review; some existing panels may contain commentary or running translation instead of lexical mappings. Book 1, Chapters 20 and 19 add 39 and 86 completed panels, respectively, to the pre-release total.

| Book | Chapter | Verses without a main-text panel |
|---|---:|---:|
| 1 | 11 | 57 |
| 1 | 12 | 95 |
| 1 | 13 | 94 |
| 1 | 14 | 48 |
| 1 | 15 | 154 |
| 1 | 16 | 16 |
| 2 | 1 | 8 |
| 2 | 4 | 5 |
| 2 | 7 | 2 |
| 2 | 8 | 32 |
| 2 | 13 | 30 |

### Book 1, Chapter 21

- 41/41 contiguous verse articles have a main-text lexical map in paired Devanāgarī/IAST rows: 476 mappings, each with a concise gloss.
- Main-text IAST was checked against the displayed Sanskrit; all word-row pairs were checked for script/transliteration agreement. All 41 Word-for-word controls are present, with no pending messages or empty lists.
- The previously missing panels for 1.21.1–14 are complete. Existing main-text maps for 1.21.15–41 were reviewed and rebuilt in Sanskrit order. Commentary and no-commentary controls were retained.
- Sources pinned at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`: mūla `viShNu-purANam/viShNu-chitta-TIkA/mUlam_me/01/21.md` (blob `18c1791300db9d2cdcd2b542fb99e997f723a168`); numbered witness `viShNu-purANam/goraxapura-pAThaH/hindy-anuvAdaH/01/21.md` (blob `dea16ef42693026bc6c28a96a4271c7aa4f13caa`); Śrīdhara `viShNu-purANam/shrIdhara-viShNu-chittau/1/21_prahlAda-vaMsha-kathanam.md` (blob `f3306d685d30f0223e97f5e1e03e751e4600e6ae`); English cross-check `viShNu-purANam/viShNu-chitta-TIkA/en/01/21.md` (blob `5dc0209c0e5cb46981bd50e4542800a49ad4ddf4`).
- The page note records these textual decisions: 1.21.1 uses witness `saṃhlāda-putra` against mūla `prahlāda-putra`; 1.21.2, .3, .5, .7, and .11 retain selected mūla readings; 1.21.9 and .12 correct apparent mūla transcription errors with witness support; 1.21.13 retains mūla `vivardhana`; 1.21.15 adopts witness `sattva`; 1.21.24 adopts witness `vallī/tṛṇa`; 1.21.29 retains `putratve` against `pitṛtve`; 1.21.35 adopts `taṃ`; and 1.21.40 adopts `cakre` while retaining mūla `adri`.

### Book 1, Chapter 20

- 39/39 contiguous verse articles now have full source-backed Sanskrit, English translations, word-for-word maps, and main transliteration.
- The Chapter 9 reader layout is used for every WFW panel: 464 rows pair a Devanāgarī form, its IAST transliteration, and a concise gloss.
- Restored incomplete main text in 1.20.18–20, .23–24, .28, and .34; corrected other source-level mismatches including 1.20.1, .4, .6–7, .9–16, .20, .22–24, .30, .32, .38–39.
- 1.20.24's English was corrected to say that Prahlāda asks for his father to be freed from the sin of hating him as a devotee of Viṣṇu.
- Mūla blob 933bca3c6c89434e5c6da197bfec80440b2ac9b8, numbered witness 3190a2277be02951fad524c96c7a1982e4db70ca, Śrīdhara commentary ac332a7076db4d0ebb1d965a209a7b9802ba0f80, and English cross-check 75120bef826851429fff57461d6f912139b2fde9 are pinned at upstream commit fc117aa4514dfd4e4840037aeb3ca825ba030b05.
- The page note records witness-supported readings including 1.20.4 calaty uragabandhais taiḥ, .7 ātmani, .16 pāvaya, .24 mucyeta, and .30 jīvasi; mūla readings retained include .9 paramārthāya, .13 prakaṭo’prakāśaḥ, and .23 baddhvā.

### Book 1, Chapter 19

- 86/86 contiguous articles have a reviewed word-for-word panel, with 1,022 paired Sanskrit/IAST/gloss rows.
- Main Sanskrit and IAST were corrected for clear source transcription errors, including the missing fire element in 1.19.68; all 86 translations remain present.
- The source note pins mūla bc63e2448277dcc0790db2f445b7b3d18eb4404f, numbered witness 51c727faa692da6cc6764c87eb299085e506f7c0, Śrīdhara commentary 8799fe7c8745d6b135b25db5924bb2a845fd4ad1, and English cross-check 96fc014cd636f8f28591cb50334e9cfd05cdab76 at upstream commit fc117aa4514dfd4e4840037aeb3ca825ba030b05.
- Book 1 focused panel markers now total 943/1,407; 464 remain. Book 2 remains 710/787 with 77 remaining. These are panel-presence counts and do not certify chapters whose existing panels have not been semantically reviewed.

Book 1–2 semantic completion remains open. The panel gaps above and the other present-but-unreviewed panels must still be checked chapter by chapter.


## User-directed Books 1–2 focus — Chapter 16 release — 2026-09-24

Book 1 Chapter 16 is complete and read back on `main`. The 16 contiguous verse articles now each contain a source-checked Sanskrit text, full English translation, Chapter 9-style paired Devanāgarī/IAST word-for-word rows, and a matching IAST control. The chapter has 201 lexical rows and no placeholder panels. Existing Śrīdhara contextual material was retained.

The Sanskrit note pins the mūla text, numbered witness, Śrīdhara Sanskrit and commentary, and English cross-check at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Material choices include mūla `dantabhāgaiḥ ... nipīḍitaḥ` at 1.16.8 against the numbered/Śrīdhara `dantabhūmim ... nirūpitaḥ`; mūla `ghoraṃ` at .10 against witness `aho`; witness-supported `kaḥ samarthaḥ` at .12; and mūla `vipakṣe cāpi` at .15 against witness `vipakṣā api`. The page records the remaining source-supported corrections.

Structural panel status at the Chapter 16 release: Book 1 had 959/1,407 markers (448 without a marker); Book 2 had 710/787 (77 without a marker). Book 1’s gaps then were Chapters 11–15: 57, 95, 94, 48, and 154 verses. Book 2’s gaps were Chapters 1, 4, 7, 8, and 13: 8, 5, 2, 32, and 30. Existing panels outside the reviewed chapters still need semantic audit.


## User-directed Books 1–2 focus — Chapter 15 release — 2026-09-25

- Book 1 Chapter 15 is complete on `main`: 156/156 verse articles, 1,786 paired Devanāgarī/IAST/gloss rows, 156 word-for-word controls, 156 translation paragraphs, and 156 transliteration controls. Chapter 9’s existing `gita-details`, `gita-word-list`, and `gita-word-row` presentation is used. Both legacy partial main-text maps are rebuilt; all 102 pre-existing Śrīdhara panels are retained.
- The route-local verse labels include the separate qualities list at 1.15.65; local labels from 1.15.66 run one higher than the mūla edition. Rows map to the Sanskrit in the displayed article. Local 1.15.74 follows numbered-witness `daśabhyas` against mūla `daśamyas`.
- Source blobs are pinned at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`: mūla `39f12c475cf82e3363bcfaec28726f99a714e1fb`, numbered witness `a067d93fe25621fadffd7b3426e051c9b3b34746`, Śrīdhara text `e6eaf7dd0be0805a1294aa58041e7be83b3746be`, commentary `aa4555e1360e35a41a728ed89a8291938407fa27`, and English cross-check `23c8812f1479e5a043713c0c609835c884b8603d`. The page records the source variants and corrections, including local .72 patnī, .73 Mārīṣām, .74 daśabhyas, .98 bhrātṛṇām, .123 Rudra counts, and .154 matimān amatsarī.
- At the Chapter 15 release, focused Book 1 markers totaled 1,113/1,407 (294 gaps); Book 2 remained 710/787 (77 gaps). Book 1’s remaining marker gaps were Chapters 11–14 (57, 95, 94, and 48). Book 2’s gaps were Chapters 1, 4, 7, 8, and 13 (8, 5, 2, 32, and 30). Present panels on other chapters remained unaudited.


## User-directed Books 1–2 focus — Chapter 14 release — 2026-09-25

- Book 1 Chapter 14 is complete on `main`: 49/49 verse articles, 524 paired Devanāgarī/IAST/gloss rows, 49 word-for-word controls, 49 translation paragraphs, and 49 transliteration controls. The Chapter 9 `gita-details`, `gita-word-list`, and `gita-word-row` controls are used. Forty-eight main-text markers were added; the one legacy partial main panel at 1.14.26 was rebuilt. All 30 existing Śrīdhara word-for-word panels were preserved.
- The page pins mūla `b70ca85ceaf9772668984598bc271f6ddb6dd36b`, numbered witness `a8545db2876fd82a27eeec2a3b143f4476f89952`, Śrīdhara text `d27c4b41afa15ee48cdb2994d0a89edb073cd1c2`, commentary `3beda04bc7be41e7675d8e4290e197c426f3249c`, and English cross-check `5bbe3aea66167c13420b817c79061fe4d515c697`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. The page source note records mūla readings at local .4 `vistṛtā`, .5 `tamasaḥ`, .10 `tat`, and .47 `vriyatām īpsito`; it also records corrections at .26 `bhujyate`, .30 `mukhaṃ`, and .32 `anantamūrtimān ca śuddhaḥ`, while documenting the .26 `jīvabhūtaḥ` witness variant.
- Focused Book 1 marker count is now 1,161/1,407 (246 gaps); Book 2 remains 710/787 (77 gaps). Remaining Book 1 marker gaps are Chapters 11–13 (57, 95, and 94). Book 2 gaps are Chapters 1, 4, 7, 8, and 13 (8, 5, 2, 32, and 30). Panels on other chapters still need semantic audit.

## User-directed Books 1–2 re-audit — Chapter 13 release — 2026-09-25

- Book 1 Chapter 13 is complete on `main`: 95/95 verse articles, 1,130 paired Devanāgarī/IAST/gloss rows, 95 word-for-word controls, 95 translation paragraphs, and 95 transliteration controls whose main IAST represents the displayed Sanskrit, including speaker labels. The Chapter 9 `gita-details`, `gita-word-list`, and `gita-word-row` controls are used.
- Ninety-four main-text panels were added; the legacy partial main panel at 1.13.38 was rebuilt. All 40 existing Śrīdhara word-for-word panels were preserved. The English translations, commentary, and no-commentary states remained in place; main IAST was regenerated from the displayed Sanskrit, while supplied Śrīdhara transliterations were preserved.
- The page pins mūla `216b675eb4704fd9ef1157a7c411873540f5f701`, numbered witness `39c4bfbeb08d0479d2e22f5ae15b2228fe14a95d`, Śrīdhara text `1915e0a47b2cdd8d1d63c5f9418cef043e2ea4db`, commentary `f932a96c9e4e62f94554216e4c3b5b137e28fcd4`, and English reference `ce67ff9dae71965186de9567807d96c220087201`, all from upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections and the .35 witness variant are recorded in the route's source note; local .82 preserves `vivardhitāḥ` and records the distinct Śrīdhara and Viṣṇucitta explanations.
- Book 1 focused panel markers after this release: 1,255/1,407 (152 gaps); Chapters 11 and 12 account for the remaining 57 and 95 markers. Book 2 remains at 710/787 (77 gaps in Chapters 1, 4, 7, 8, and 13). Existing panels outside the reviewed chapters still need semantic audit.

This release completes Chapter 13 only; it does not mark the rest of Books 1–2 complete.


## User-directed Books 1–2 focus — Chapter 12 release — 2026-09-25

- Book 1 Chapter 12 is complete on `main`: 103/103 verse articles, 1,127 paired Devanāgarī/IAST/contextual-gloss rows, 103 Word-for-word controls, 103 translation paragraphs, and 103 transliteration controls. Main IAST matches the displayed Sanskrit, including speaker labels. The Chapter 9 `gita-details`, `gita-word-list`, and `gita-word-row` layout and shared 12px/4px × 10px button rule are used.
- Ninety-five main-text panels were added; all eight pre-existing partial main maps were rebuilt. All 51 existing Śrīdhara Word-for-word panels were preserved, including nine Śrīdhara legacy maps. All 59 commentary panels and 44 no-commentary states remain accounted for.
- The page pins mūla `1dd25be195442a479c767095ef6f633dad78a193`, numbered witness `bf008fc3238907d9f08f6ab96f4725cc35c5e63d`, Śrīdhara text `eb3062a4dfb9f98ebd822f334fcb7a6ee8c7a475`, commentary `a3662e00f307c22a82ece6dc30d1f71602876704`, and English reference `0855626556bb082b4005e43e0d2b4af0b32566b4`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. The page restores mūla/numbered 1.12.19 omitted by Śrīdhara, renumbers matprīti and the maternal warning to .20 and .21, and records the .21 `api/iha` variant, .13/.15 variants, the .20 `mā mohaṃ nivartyāsmāt` normalization, and corrections at .43/.102.
- Book 1 focused markers after this release: 1,350/1,407 (57 gaps, all at 1.11). Book 2 remains 710/787 (77 gaps in Chapters 1, 4, 7, 8, and 13). Panels on other chapters still need semantic review.

This release completes Chapter 12 only; it does not mark the rest of Books 1–2 complete.

## User-directed Books 1–2 focus — Chapter 11 release — 2026-09-25

- Book 1 Chapter 11 is complete on `main`: 57/57 verse articles have main-text Word-for-word panels, 686 paired Devanāgarī/IAST/contextual-gloss rows, 57 Word-for-word controls, 57 translation paragraphs, and 57 transliteration controls. Main IAST matches the displayed Sanskrit, including speaker labels. The Chapter 9 layout and shared 12px/4px × 10px button rule are used.
- Twenty-six Word-for-word controls were added; the 31 existing controls were augmented with main-text rows. All 31 Śrīdhara panels and their legacy maps were preserved. All 34 commentary panels and 23 no-commentary states remain accounted for.
- The page pins mūla `99cb7be5e8dc29fab3278efeaca476240e9d6d6a`, numbered witness `8655f9fb2808772efcb6be144f8b8eac0d34023f`, Śrīdhara text `693f2667d21b0284083db6033b85b819bdac0066`, commentary `43b9789f2e5ca9cd43b8c36edf2e44d83f32aa2b`, and English reference `de1c6fc6aef2ca07fcd9ec38923b4466c4d66eeb`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections and the .19/.32/.48 textual variants are recorded in the route’s source note.
- Book 1 focused marker count after this release: 1,407/1,407. Book 2 remains 710/787, with 77 gaps in Chapters 1, 4, 7, 8, and 13. Existing panels in other Book 1 chapters still need semantic review.

This release completes Chapter 11 only; it does not mark the rest of Books 1–2 complete.

## User-directed Books 1–2 focus — Book 2, Chapter 1 release — 2026-09-25

- Book 2 Chapter 1 is complete on `main`: 43/43 verse articles now have main-text Word-for-word panels, 480 paired Devanāgarī/IAST/contextual-gloss rows, 43 Word-for-word controls, 43 translation paragraphs, and 43 transliteration controls. Main IAST matches the displayed Sanskrit. The Chapter 9 layout and shared 12px/4px × 10px button rule are used.
- Eight controls were added and 35 existing controls were augmented with complete rows. All 49 legacy maps and Śrīdhara notes were retained. All 43 commentary sections remain accounted for, including eight “No commentary” notices.
- The page pins mūla `35e04e5d71462f8e5449e4a734c638bfb95ba174`, numbered witness `8d338951fb5c5c80c5d50d277875a43e544f2ac0`, Śrīdhara source `444145de015c5746d9bf8bc31f88fbe191ce0be1`, and English reference `3da244428968d26b15dfc92ec323176cfd810b73`, all at upstream commit `fc117aa4514dfd4e4840037aeb3ca825ba030b05`. Corrections and the .10/.37 variants are recorded in the route source note.
- Book 1 focused markers remain 1,407/1,407, with older panels still under semantic review. Book 2 focused markers now total 718/787 (69 gaps in Chapters 4, 7, 8, and 13).

This release completes Book 2 Chapter 1 only; it does not mark the rest of Books 1–2 complete.