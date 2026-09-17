# Bhagavad Gītā completion README

Status: the complete 18-chapter edition is source-covered and rendered as 701 visible verse cards, with per-verse Sanskrit/transliteration and all grouped Mukundananda/common source records preserved exactly once.

This page is served at:

- https://krishnavyasmuni.github.io/vivekadrishti/pages/bhagavad-gita/
- chapter routes: `/vivekadrishti/articles/bhagavad-gita-chapter-1/` through `chapter-18/`

## Scope

Every visible verse record must preserve the site’s existing reader and expose:

1. the Sanskrit verse, transliteration, and Mukundananda/common word meanings;
2. Swami Mukundananda’s English translation;
3. the exact Śrīdhara Svāmī Sanskrit commentary available for that verse in the locked Vasuki source;
4. an IAST rendering of that Śrīdhara commentary;
5. an independently prepared Śrīdhara word-for-word gloss and literal rendering.

The local Śrīdhara literal renderings are not copied from Mukundananda’s English translation. A verse is shown as `No commentary.` only when the locked Vasuki file has no separate Śrīdhara section for the visible verse.

## Locked sources

| Layer | Source and lock | Use |
|---|---|---|
| Mukundananda reference | [Holy Bhagavad Gita](https://www.holy-bhagavad-gita.org/) | Public reference site for the translation and word meanings |
| Sanskrit, transliteration | [vedicscriptures/bhagavad-gita-api](https://github.com/vedicscriptures/bhagavad-gita-api) one-record-per-verse model, using the pinned companion data repository at commit `43dfc8db815d01e15a347ea294b089334cf2aa17` | Exact per-verse Sanskrit and transliteration records |
| Word meanings | [gita/gita-frontend-v2 common data](https://github.com/gita/gita-frontend-v2/tree/27d92fe5e3decde8bda747a1bfbb3ff4d6f67aeb/data/common) at commit `27d92fe5e3decde8bda747a1bfbb3ff4d6f67aeb` | Holy Bhagavad Gita word-for-word meaning fields |
| Mukundananda English | [author_22_en.json](https://github.com/gita/gita-frontend-v2/blob/27d92fe5e3decde8bda747a1bfbb3ff4d6f67aeb/data/authors/author_22_en.json) at the same commit | The visible English translation |
| Śrīdhara Sanskrit | [Vasuki Śrīdhara directory](https://github.com/vishvAsa/mahAbhAratam/tree/3405cca553363ae77edf0c7e58ff1908b5d27d29/vyAsaH/shlokashaH/bhagavad-gItA-parva/TIkA/shrIdhara-vishvanAtha-baladevAH) on commit `3405cca553363ae77edf0c7e58ff1908b5d27d29` | Exact source commentary, one Markdown file per chapter |

The Vasuki source path is:

`vyAsaH/shlokashaH/bhagavad-gItA-parva/TIkA/shrIdhara-vishvanAtha-baladevAH/01.md` through `18.md`.

## Verse reconciliation

The source data uses grouped verse records in several places. The reader expands those ranges to the 701 visible verse numbers in this edition and extracts the matching Sanskrit marker for each verse.

The source-to-display exceptions are recorded in [bhagavad-gita-vasuki-manifest.json](assets/data/bhagavad-gita-vasuki-manifest.json):

- Chapter 1 follows the common/Mukundananda visible numbering. Vasuki’s grouped sections are mapped explicitly; visible 1.11 has no separate Śrīdhara section, while visible 1.47 uses the final Śrīdhara section in the locked file.
- Chapter 13 begins the Vasuki commentary mapping at visible 13.2 because visible 13.1 is the opening question; the final source section is mapped to visible 13.35.
- Chapter 18 and the other grouped chapters use the recorded section map rather than positional assumptions.
- Duplicate Śrīdhara labels inside a grouped Vasuki heading are preserved in source order and selected through the manifest’s section index.

### Mukundananda grouped ranges

The pinned Mukundananda author file and common word-meaning file publish 49 grouped records covering multiple verses. The reader preserves each grouped record exactly: its full source text is shown once on the first verse card, while later verse cards omit those grouped fields instead of showing generated labels, explanatory text, or fabricated per-verse wording. Sanskrit and transliteration are loaded separately from the API’s one-record-per-verse data model for all 701 visible verse cards. This applies to every grouped range, including BG 1.29–1.31.

## Local reviewed data

The existing reviewed files under `assets/data/bhagavad-gita-sridhara-reviewed/` provide the independent literal glosses used by the second commentary panel. Nine source-present records that had been incorrectly marked as empty were corrected in [bhagavad-gita-sridhara-vasuki-overrides.json](assets/data/bhagavad-gita-sridhara-vasuki-overrides.json):

`1.38`, `1.39`, `1.43`, `1.44`, `1.45`, `1.46`, `12.3`, `12.18`, and `13.35`.

Twenty-four reviewed JSON parts that were missing their final closing brace were repaired without changing their verse content. The runtime overlay applies the Vasuki corrections after merging the reviewed parts, so a stale local `no_commentary` flag cannot hide a valid source commentary.

## Validation checklist

- Chapter counts: 47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78.
- Total visible records: 701.
- Every visible record has a pinned per-verse Sanskrit/transliteration record from the vedicscriptures data model, plus the pinned common word-meaning and Mukundananda source records.
- All 49 grouped source records are rendered exactly once on their first verse card; later cards omit the grouped fields instead of showing generated labels, explanatory text, or repeated source text.
- Every chapter’s Vasuki Markdown parses to the manifest’s recorded Śrīdhara section count.
- Every visible verse has either a mapped Vasuki section or an intentional `No commentary.` value.
- The loader contains no moving `main` source URL for the per-verse Sanskrit/transliteration records and no fallback to the unrelated `author_8_sa.json` feed.
- The JavaScript loader and Śrīdhara overlay compile successfully after the source changes.
- The repaired literal JSON files parse as JSON before release.

## Maintenance rules

Do not move these sources to an unpinned branch or replace the Vasuki directory with another commentary feed without repeating the full 701-record audit. When a source commit changes, regenerate the manifest, re-check the Chapter 1 and Chapter 13 numbering exceptions, verify every word-for-word field, verify that all 49 grouped ranges remain intact, and update the cache-busting version in all 18 chapter shells.
