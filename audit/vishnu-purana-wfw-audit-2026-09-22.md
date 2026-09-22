# Viṣṇu Purāṇa word-for-word audit — 2026-09-22

Scope: all 126 Viṣṇu Purāṇa chapter routes and 6,394 verse articles on `main`.

## Findings

The published WFW layer contained generated rows that were not lexical renderings. The affected rows either:

- put the complete ordinary translation after one bold transliteration block; or
- repeated the ordinary translation, then repeated Sanskrit, then repeated the translation again.

Those rows were removed from the committed chapter HTML. No Sanskrit, Wilson reference translation, transliteration, or supplied Śrīdhara Sanskrit was removed.

## Final static audit

- Routes checked: 126
- Articles checked: 6,394
- Remaining WFW rows containing the complete article translation: 0
- Remaining duplicate translation pairs: 0
- Leading `...`, `…`, `⋯`, or `·` markers in Sanskrit/WFW rows: 0
- `source range` labels: 0
- Books 4–6 false WFW rows: removed; no WFW control remains where no verified lexical layer exists

Books 1–3 retain only the remaining source-backed phrase-level WFW material. The Sanskrit and supplied Śrīdhara fields remain tied to the Vishvas/Vasuki corpus; the Vasuki English files and Wisdomlib/Wilson material are reference checks, not substitutes for lexical Sanskrit analysis.

## Limitation

Books 4–6 are not marked complete. Their false WFW layer has been removed rather than presented as scholarship. A genuine lexical layer still needs to be written from the Sanskrit and Śrīdhara source, phrase by phrase, and independently checked. No guessed glosses were published.

All repository inspection and writes for this audit were performed through the remote GitHub workspace; nothing was run locally.
