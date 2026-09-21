# Bhagavad Gītā full audit — 2026-09-21

Repository: `krishnavyasmuni/vivekadrishti`
Scope: the 18-chapter Bhagavad Gītā reader at `pages/bhagavad-gita/` and `articles/bhagavad-gita-chapter-N/`.

## Sources audited

- Holy Bhagavad Gita word meanings and Mukundananda English: `gita/gita-frontend-v2` commit `27d92fe5e3decde8bda747a1bfbb3ff4d6f67aeb`.
- Sanskrit and fallback verse records: `vedicscriptures/bhagavad-gita` commit `43dfc8db815d01e15a347ea294b089334cf2aa17`.
- Śrīdhara Sanskrit mapping: `vishvAsa/mahAbhAratam` commit `3405cca553363ae77edf0c7e58ff1908b5d27d29`, selected through `assets/data/bhagavad-gita-vasuki-manifest.json`.
- Reviewed local Śrīdhara literal renderings: `assets/data/bhagavad-gita-sridhara-reviewed/`.

## Automated coverage results

- Expected visible verses: 701.
- Holy-Gita word-meaning records expand to all 701 verses; no missing word-meaning field.
- Mukundananda translation records expand to all 701 verses; no missing translation field.
- Chapter counts match: 47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78.
- All 18 chapter shells contain the correct chapter number and the audited shared-reader cache reference.
- The shared reader compiles successfully after the changes.
- All eight grouped word-meaning exceptions are explicitly mapped:
  `1.29–1.31`, `2.42–2.43`, `4.29–4.30`, `5.8–5.9`, `5.27–5.28`, `11.26–11.27`, `12.3–12.4`, and `16.13–16.15`.

## Corrections applied

1. Mukundananda’s pinned translation is now preferred for the visible English verse translation. The Vedic API translation remains a fallback only when the pinned author record has no translation.
2. The upstream `16.13–16.15` word-meaning record contains a fourth line beginning with the words for 16.16. Verse 16.15 now receives only the third line; the stray 16.16 material is excluded.
3. All 18 shells received a cache-bust for the shared reader change.
4. The completion README now records this audit and its source-precedence rule.

## Śrīdhara handling

The Vasuki manifest remains authoritative for whether a separate Śrīdhara section exists. Mapped sections are rendered; explicit null mappings remain `No commentary.`. No commentary was invented for null mappings.

## Manual verification note

The browser automation surface was unavailable for the final visual pass because the local browser policy check rejected access to the GitHub Pages host. Static source, data, mapping, shell, and JavaScript checks were completed; a post-merge cache-busted browser check should still be performed when the site is published.
