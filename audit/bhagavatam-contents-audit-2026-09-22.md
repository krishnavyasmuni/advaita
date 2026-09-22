# Śrīmad-Bhāgavatam Contents Audit — 2026-09-22

## Scope

This audit reconciles the public Contents page with the chapter checkpoint ledger and the current reader data.

## Public publication set

- Canto 1: chapters 1–19 — 19 chapters
- Canto 2: chapters 1–10 — 10 chapters
- Canto 10: chapters 1–38 — 38 chapters
- Canto 11: chapters 1–31 — 31 chapters, restored for access with an audit notice
- Total public chapters: 98

Every public chapter listed above has a corresponding chapter-level checkpoint or source-backed reader record. No completed chapter currently present in the ledger was omitted from the public Contents within these published cantos.

## Existing audit repairs

- Canto 1 phrase-level word-for-word gaps identified in the audit were repaired; remaining one-word entries are legitimate single-source terms or explicit source gaps.
- Canto 2’s existing checkpoint ranges were rechecked; no under-specified non-commentary word-for-word defect was found in the currently published data.
- Canto 10 chapters 1–38 were structurally rechecked: 1491 rows, 0 placeholders, 645 explicit source-gap rows, and one legitimate single-source-word entry (10.2.4). The previously under-specified multiword rows in 10.1, 10.4, and 10.38 were repaired.
- Canto 11’s full 1267-row repair audit is closed in `audit/canto11/batched-audit-2026-09-22.md`; copied generic gloss arrays were replaced with source-specific pairs, and explicit source gaps were preserved.

## Chapter 38 validation

Canto 10, Chapter 38 was checked before publication:

- 43/43 canonical verse records, sequential and contiguous
- source-bound Śrīdhara blocks preserved
- no placeholder or pending-translation records
- chapter added to public Contents
- browser-level visual verification remains separate from source/data validation

## Canto 11 publication boundary

Canto 11 remains publicly accessible so existing material is not removed. Its visible notice distinguishes access from certification. The repaired data now has a closed source-bound structural audit, while the pinned Sanskrit source remains authoritative and independent critical-edition/browser review is not claimed.

## Next release

The combined repair gate is now closed. Canto 10.39 is the next release; after that, publish exactly one completed chapter at a time with its data, reader route, Contents entry, and checkpoint updated together.
