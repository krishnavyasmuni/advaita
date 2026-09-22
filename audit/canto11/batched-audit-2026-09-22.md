# Canto 11 Batched Audit — 2026-09-22

## Method

- Fetched all 31 pinned Sanskrit source files from `vishvAsa/purANam_vaiShNavam` at commit `100560de6c9f68c2875097d40a2012a84c784179`.
- Fetched all 40 local Canto 11 word-for-word JSON files, including split files for Chapter 1 and Chapter 2.
- Normalized exposed `entries`/`records` arrays and checked row coverage, word-for-word pair counts, placeholder markers, and repeated literal translations.

## Result

- Source files checked: 31/31
- Local files checked: 40
- Normalized rows inspected: 1267
- Placeholder/pending records: 0
- Rows with fewer than two word-for-word pairs: 181
- Chapters with repeated literal translations: 5, 6, 7, 13, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31

## Finding

This completes the outstanding mechanical/source-coverage audit pass, but it does not certify independent philological translation. The short-gloss and repeated-literal findings identify chapters requiring rewrite. Canto 11 remains publicly accessible with `published-audit-pending` checkpoint status, and its old `live-verified` labels are retained only as historical metadata.

## Next

Finish Canto 10 chapter by chapter, then rewrite and re-certify Canto 11 chapter by chapter before moving to Canto 3.
