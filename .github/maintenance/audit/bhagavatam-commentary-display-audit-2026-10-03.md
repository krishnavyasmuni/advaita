# Bhagavatam commentary display audit — 2026-10-03

## Scope

Reviewed the Śrīmad-Bhāgavatam Contents page, shared reader, English commentary checkpoints, and all 187 reader-linked word-for-word data files. The scan covered 7,994 local records and 26,478 word-for-word pairs.

## Corrections

- Removed fifteen editorial source-absence notices from `bhagavatam-sridhara-english-checkpoints.json`; those notices were not translations of Śrīdhara’s Sanskrit.
- Rewrote twelve local English renderings that explicitly said “Śrīdhara/Sridhara says/asks” or attributed the prose to a joint Śrīdhara–Viśvanātha note. The Sanskrit glosses and word-for-word pairs remain source-bound.
- Replaced the author-name wrapper at 3.19.35 in both the local data file and English checkpoint with direct wording that translates the source’s `इत्य् आह` construction.
- Cleared five local literal-English absence notes where the pinned source explicitly has no commentary.
- Added a reader guard for those exact author-attribution patterns and known placeholders in word-for-word glosses and English commentary.
- Updated the changed local-data references in the checkpoint ledger, the checkpoint cache key in the reader, and the script/manifest cache versions in all twelve Canto shells.
- Preserved source-backed commentarial wording such as “he says” where the Sanskrit itself uses `आह` / `इत्याह`.

## Checks

- The 187 linked data files parse as JSON and contain 7,994 records and 26,478 word-for-word pairs.
- The twelve explicit author-attribution renderings and five targeted absence notes no longer appear in their literal-English fields.
- The global English checkpoint parses as JSON with 1,517 entries; the fifteen editorial absence notices are absent.
- The reader JavaScript passes a syntax check. All twelve Canto shells use the refreshed reader and manifest cache versions.
- The reader CSS and Contents layout were not changed. A live visual check could not be completed because the browser returned `net::ERR_BLOCKED_BY_CLIENT`.

## Scope limit

This is a rendering and attribution cleanup, not a full scholarly audit of every Sanskrit reading, transliteration, word-for-word gloss, or English commentary across the 196 public Contents links. Those still require chapter-by-chapter source verification.
