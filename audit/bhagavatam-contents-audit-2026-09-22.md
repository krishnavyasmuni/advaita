# Śrīmad-Bhāgavatam Contents Audit — 2026-09-22

## Scope

This audit reconciles the public Contents page with the chapter checkpoint ledger and the current reader data.

## Public publication set

- Canto 1: chapters 1–19 — 19 chapters
- Canto 2: chapters 1–10 — 10 chapters
- Canto 10: chapters 1–37 — 37 chapters
- Total public chapters: 66

Every public chapter listed above has a corresponding chapter-level checkpoint or source-backed reader record. No completed chapter currently present in the ledger was omitted from the public Contents within these three published cantos.

## Chapter 37 validation

Canto 10, Chapter 37 was checked before publication:

- 34/34 canonical verse records, sequential and contiguous
- 27 exact source-bound Śrīdhara blocks
- 7 explicit no-commentary/source-gap records preserved
- 0 placeholder or pending-translation records
- pinned primary source commit: 100560de6c9f68c2875097d40a2012a84c784179
- reader data path loaded by the clarity layer
- chapter added to public Contents

The chapter checkpoint status remains `source-checked-and-reader-committed` until browser-level visual verification is available.

## Existing published chapters

Canto 1 and Canto 2 remain published after their existing source/checkpoint audits. Canto 10 chapters 1–35 retain their existing live-verified records. The existing Canto 10.13 displayed-count discrepancy remains recorded in the ledger for later focused review; it is not silently overwritten.

## Canto 11 publication boundary

Canto 11 is intentionally absent from public Contents. Its underlying files remain in the repository, but the evidence-based audit dated 2026-09-20 found that the prior completion labels did not establish reliable independent verse-by-verse word-for-word verification. Those legacy labels must not be treated as current certification. Canto 11 will be restored chapter-by-chapter only after each chapter passes the same source, translation, structural, and reader checks.

## Next release

Continue with Canto 10, Chapter 38, then publish each completed chapter immediately after validation.
