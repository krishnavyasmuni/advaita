# Stylo Local

A local-only browser stylometry tool for Viveka Dṛṣṭi research.

## Privacy / access model

- The source is public because this repository is public.
- The app intentionally refuses to run when served over HTTP/HTTPS. It runs only when the HTML file is opened locally with a `file://` URL.
- The page includes a strict Content Security Policy with `connect-src 'none'` and also disables common browser network APIs at runtime.
- Corpus files are read using the browser File API and kept only in memory. They are never committed to this repository.
- Closing/reloading the page clears the loaded corpus.
- This is **not DRM**: because the source is public, another person can copy the code and remove the local-only check. Public source code cannot be made technically exclusive to one user.

## Use on macOS

1. Download `index.html` from this directory.
2. Open the downloaded file directly in Safari, Chrome, or Firefox.
3. Confirm that the page shows `LOCAL / NO NETWORK`.
4. Drag UTF-8 `.txt` files into the corpus box.
5. Set author labels. Use `?` for disputed/unknown texts.
6. Choose feature and distance settings and run the analysis.

## Current analysis features

- Unicode/Sanskrit word tokenization (Devanāgarī + IAST via Unicode letter/mark classes)
- optional Stylo 0.7.71-compatible legacy word ranges
- word or character n-grams
- relative-frequency tables
- MFW selection and culling
- Classic Delta
- Eder's Delta
- Argamon Linear Delta
- cosine distance
- Cosine/Würzburg Delta
- Min-Max/Ruzicka distance
- Entropy distance
- Manhattan and Euclidean distance
- nearest-neighbour summaries
- distance matrix export as CSV
- average-linkage hierarchical clustering / dendrogram
- PCA scatter plot
- robustness sweep across multiple distances and MFW settings

## Compatibility status

This is an independent browser reimplementation, not an official release of `computationalstylistics/stylo`. The compatibility target is Stylo 0.7.71. Core formulas are implemented from the public Stylo source; Sanskrit/Unicode preprocessing is an intentional extension because Stylo's stock tokenizer does not include Devanāgarī in its legacy explicit ranges.

For publication-grade claims, validate important runs against R Stylo and document preprocessing choices. PCA axis signs can differ across numerical implementations while representing the same geometry.

## Attribution

Stylo is GPL-3.0-or-later software by Maciej Eder, Jan Rybicki, Mike Kestemont, and Steffen Pielström. This subtool is intended to remain source-visible and auditable.
