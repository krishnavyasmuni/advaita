# Bhagavad Gita commentary audit — 2026-09-22

This audit corrects the Śrīdhara commentary boundary logic in the Gita reader.

## Pinned sources

- Śrīdhara source: `vishvAsa/mahAbhAratam`
- Source commit: `3405cca553363ae77edf0c7e58ff1908b5d27d29`
- Source path: `vyAsaH/shlokashaH/bhagavad-gItA-parva/TIkA/shrIdhara-vishvanAtha-baladevAH`
- Verse text, word meanings, and Mukundananda English: pinned Gita frontend commits already recorded in the reader.

## What was corrected

- Replaced the old flat section-index map with a heading-aware parser.
- Scoped each Śrīdhara block to the visible Sanskrit verse block it follows.
- Recognized both source label forms: `श्रीधरः -` and `श्रीधर :`.
- Merged multiple Śrīdhara sections when the source attaches them to the same verse range. The confirmed multi-section case is BG 1.4–1.6, which now appears as one combined commentary block.
- Stopped copying merged commentary into every verse card. It is rendered once on the first verse of its source range and labelled with that range.
- Removed the “No commentary.” placeholder from verses that have no Śrīdhara source block.
- Recovered genuine Chapter 18 commentary that the previous parser missed because those labels use a colon form.

## Coverage result

All 701 Bhagavad Gita verses are represented with the expected chapter counts.

The pinned Śrīdhara source has no separate commentary block for exactly these visible verses:

- BG 1.11
- BG 1.47
- BG 12.6
- BG 13.35

Those verses intentionally render without Śrīdhara commentary panels. All other visible verses have a source-backed Śrīdhara block, including BG 18.1–18.78.

## Validation

- JavaScript syntax check passed.
- Manifest verse-group arrays match all 18 chapter counts and total 701 verses.
- All 18 chapter pages reference the new cache-busted reader script.
- The browser visual pass remains unavailable in this environment because the GitHub Pages host is blocked by the browser policy; the repository-side source and mapping audit is complete.
