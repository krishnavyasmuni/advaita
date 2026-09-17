# Vivekadrishti Viṣṇu Purāṇa Completion Workflow

## Mission

You are the implementation AI for the Vivekadrishti Viṣṇu Purāṇa website:

https://krishnavyasmuni.github.io/vivekadrishti/pages/vishnu-purana/

Finish the remaining Viṣṇu Purāṇa chapters in the existing website. Work one
complete chapter at a time, place it into the existing finished template, update
the real main Contents page, commit the work to GitHub, verify the committed
content, and then move to the next chapter.

This README must be sufficient for another AI to continue the work without
needing the previous conversation.

The repository is the source of truth for current progress. Do not rely on an
old progress message, an uncommitted local assumption, or a previous AI claim.

## Non-negotiable speed requirement

Each chapter must be completed and committed within **30–60 seconds maximum**
once the required source data is available.

Use a fixed template, structured extraction, batch generation, and one
validation pass. Do not manually redesign or rewrite already-correct markup.
Do not spend the time budget narrating the work in chat.

The speed requirement never permits:

- partial chapters
- guessed verses
- invented commentary
- placeholder text
- incorrect verse alignment
- an unverified commit

If source access, numbering, or alignment is genuinely blocked, stop immediately
and report the exact chapter and verse numbers affected. Do not publish a
partial or guessed result.

## Fast execution path (mandatory from Book 3, Chapter 1 onward)

This is the fixed release loop. Once the required source files are available,
complete the build, commit, and read-back in the same execution pass. Do not
pause after source preparation: temporary prepared data may not survive a
paused turn.

1. **Fetch once, in parallel.** Fetch the current `main` head, the reusable
   completed chapter template, the real Viṣṇu Purāṇa Contents file, this README,
   the Vasuki mūla file, and the matching Vasuki Śrīdhara file. Resolve the
   exact Wilson chapter URL only when needed for the reference check. Do not
   reread earlier chapter pages or fetch the same source sequentially.
2. **Build one structured chapter packet.** Extract the numbered Sanskrit,
   commentary ranges, and source SHAs into memory. Generate every verse from
   the same renderer: Sanskrit, independent translation, direct lexical
   word-for-word, transliteration, and the existing controls. Preserve the
   exact source Devanāgarī. Do not hand-type HTML article by article.
3. **Run one compact pre-commit audit.** Check the expected verse count,
   sequential `vp-{BOOK}-{CHAPTER}-{VERSE}` IDs, exact Contents anchors,
   balanced controls, complete main word-for-word/translation layers, exact
   source links, and the actual Śrīdhara ranges. Reject the build if any
   source range is missing, invented, or misaligned. Where the source has no
   commentary block, preserve the template’s no-commentary state.
4. **Write once, atomically.** Create the chapter blob, Contents blob, and
   README blob in parallel; create one tree, one chapter commit, and one
   fast-forward update of `main`. Never make three sequential file commits.
5. **Read back once, in parallel.** Fetch those three files at the new commit
   SHA and repeat only the structural release gates. If they pass, the chapter
   is complete and the README resume point moves to the next chapter in that
   same commit.
6. **Wilson and wording rule.** Wilson is a quick coverage and sense check,
   not a source to copy. The AI translation starts from Vasuki Sanskrit.
   Word-for-word entries are direct lexical renderings. Do not write
   “Śrīdhara says,” “Śrīdhara explains,” or third-person narrator padding.

### Time budget

| Phase | Maximum target |
|---|---:|
| Parallel source bundle | 10 seconds |
| Structured build and translation | 25 seconds |
| Single audit | 5 seconds |
| Atomic write and read-back | 20 seconds |

If a source, numbering, or alignment check genuinely fails, stop and report the
exact affected chapter and verses. Do not publish a partial chapter to meet
the time target.

## Project constants

| Item | Required value |
|---|---|
| Published site | https://krishnavyasmuni.github.io/vivekadrishti/pages/vishnu-purana/ |
| Website repository | krishnavyasmuni/vivekadrishti |
| Working branch | main unless the repository explicitly shows another current branch |
| Main Contents page | Book 1 Chapters 1–22, Book 2 Chapters 1–16, and Book 3 Chapters 1–18 are listed |
| Chapter route | articles/vishnu-purana-book-{BOOK}-chapter-{CHAPTER}/index.html |
| Wilson reference | H. H. Wilson, 1840, Internet Sacred Text Archive |
| Sanskrit and Śrīdhara source | Vishvas Vasuki, vishvAsa/purANam_vaiShNavam, branch content |
| Main Sanskrit source path | viShNu-purANam/ |
| Śrīdhara source path | Inspect the actual viShNu-purANam/shrIdhara-viShNu-chittau/ files and preserve their exact mapping |
| Required AI rendering | Independent Sanskrit-first literal/word-for-word English, cross-checked against Wilson |
| Template authority | The already completed Chapter 1 page |

## Source lock and translation method

Use only these sources unless the user explicitly changes them.

### Primary Sanskrit and Śrīdhara corpus

Use Vishvas Vasuki’s GitHub corpus:

https://github.com/vishvAsa/purANam_vaiShNavam/tree/content/viShNu-purANam

Inspect the actual files under the Viṣṇu Purāṇa directory. Do not guess
filenames or directory names. Preserve the exact Devanāgarī and the exact
Śrīdhara commentary-to-verse mapping.

The Sanskrit is the primary text for the site’s own translation. Record the
exact upstream source commit SHA used for each completed chapter. Keep
attribution, source links, and any applicable licence information.

### H. H. Wilson reference translation

Use H. H. Wilson’s 1840 English translation from this archived Sacred Texts
index:

https://archive.sacred-texts.com/hin/vp/index.htm

Verify the exact chapter page and heading through that archive index before
using the text. Link the exact chapter page in the source note.

Wilson is a historical reference and an accuracy cross-check, not the wording
to imitate. Read the Sanskrit first and make the site’s own literal rendering
from the Sanskrit. Then compare it with Wilson to catch omitted clauses,
names, agents, objects, sentence boundaries, and major interpretive drift.

Do not copy Wilson’s sentences, distinctive phrasing, paragraph wording, or
translation choices into the AI word-for-word or commentary fields. If Wilson’s
English is displayed in the existing template, label it as Wilson’s reference
translation and preserve it as a reference; never present it as the AI’s own
translation. If Wilson and the Sanskrit appear to differ, the supplied
Sanskrit controls the AI rendering. Record a narrow source note when the
difference affects verse alignment or meaning.

### Independent AI translation method

For every verse:

1. Read the exact Sanskrit and identify every word, compound, case relation,
   verb, negation, vocative, connective, and implied subject.
2. Draft the literal/word-for-word rendering from the Sanskrit alone.
3. Use Wilson only after that draft as a coverage and sense check.
4. Correct omissions or grammatical mistakes without adopting Wilson’s prose.
5. Translate the supplied Śrīdhara Sanskrit independently, including every
   grammatical explanation, alternate reading, derivation, quotation, and
   interpretive qualification.
6. Keep uncertainty visible and narrow. Never manufacture a confident meaning
   where the Sanskrit or commentary is genuinely ambiguous.

The goal is the most honest, source-bound translation—not a polished imitation
of Wilson and not a free devotional paraphrase.

## Work order and progress

Expected order, subject to verification against the current repository state:

1. Book 3, Chapters 3–18 (current repair queue; Chapters 1–2 are repaired)
2. Book 2, Chapters 1–16 (full source and template remediation queue)
3. Book 1, Chapters 1–22 (full source and template remediation queue)

Before starting a chapter:

1. Inspect the existing main Contents page.
2. Identify the last genuinely completed, committed, and verified chapter.
3. Confirm that the next chapter is not already present and verified.
4. Work on that one chapter only.

The Contents page must list only chapters that are actually complete, committed,
and verified. Remove future, empty, placeholder, or unstarted entries if they
are present. Never advertise work that has not been published and checked.

Do not begin the next chapter until the previous chapter’s commit and
post-commit verification are finished.

## Live progress tracker

Update this section after every verified chapter commit. It is the resume point
for the next AI; do not infer progress from an old chat message.

| Field | Current state |
|---|---|
| Last committed route | Book 2, Chapter 9 (source-aligned remediation) |
| Book 1 status | IN PROGRESS — all 22 routes are present, but the full source, commentary, lexical, and template audit is not complete; Chapters 1–22 remain subject to remediation or re-verification |
| Book 2 status | IN PROGRESS — Chapters 1–9 are repaired and verified; Chapters 10–16 require the same complete source-aligned repair |
| Book 3 status | REPAIRED AND VERIFIED — Chapters 1–18 have passed the complete source-aligned chapter audit |
| Current repair target | Book 2, Chapter 10 |
| Next chapter after the repair target | Book 2, Chapter 11 |
| Main Contents page | Book 1 Chapters 1–22, Book 2 Chapters 1–16, and Book 3 Chapters 1–18 are currently listed; semantic completion follows the tracker and chapter audits |
| Full-scope remediation queue | Book 2 Chapters 10–16; then Book 1 Chapters 1–22 |
| Progress rule | Mark a chapter complete only after its full file, source mapping, Contents link, README state, commit, and post-commit verification pass |

A published route and a semantically complete chapter are different states. A
chapter containing placeholder glosses is **in progress**, even if its URL
already exists. The tracker must say in progress until the placeholders are
replaced with genuine Sanskrit-first material.

For each completed chapter, update the tracker in the same chapter-specific
commit:

1. Change the current repair target to the next chapter after the chapter being completed.
2. Record the newly verified last committed route.
3. Set the next chapter explicitly.
4. Keep the remediation queue accurate.
5. Update the real main Contents page only when the chapter passes the full
validation gate.

## Template and design law

The completed Chapter 1 page is the final design authority. Copy its structure
and adapt only the chapter-specific content.

Preserve exactly:

- HTML structure and nesting
- <article class="gita-verse"> verse articles
- verse IDs
- verse headings
- CSS classes
- typography and font hierarchy
- Sanskrit styling
- Wilson English styling
- IAST styling
- main word-for-word styling
- Śrīdhara styling
- buttons and controls
- source-note format
- compact Contents rail
- Contents rail spacing and position
- commentary placement
- page header and footer
- borders, colours, backgrounds, and spacing
- responsive phone and desktop behaviour

The design must remain identical to the completed pages. Do not introduce a
new layout, oversized Contents panel, generic Markdown styling, new colours,
new pagination, or a second template.

The verse and bhāṣya text must not look like one undifferentiated block. Keep
the exact visual hierarchy already established in the finished template.

Do not make unrelated changes to the homepage, menu, CSS, artwork, other books,
or completed chapters.

## Required verse structure

Every verse must be represented by exactly one article:

~~~html
<article class="gita-verse" id="vp-{BOOK}-{CHAPTER}-{VERSE}">
~~~

The heading must follow the established format:

~~~text
VP {BOOK}.{CHAPTER}.{VERSE}
~~~

Use sequential, unique IDs such as:

~~~text
vp-1-2-1
vp-1-2-2
vp-1-2-3
~~~

Never merge verses, omit verses, invent verses, or renumber verses merely to
make the page easier to generate.

Each verse must contain the complete required material:

1. Exact main Sanskrit Devanāgarī.
2. The Wilson reference English in the existing template’s reference block,
   preserved exactly when it is displayed.
3. Accurate standard IAST of the exact main Sanskrit.
4. An independent AI literal/word-for-word rendering of the main Sanskrit,
   written from the Sanskrit rather than copied from Wilson.
5. Exact supplied Śrīdhara Sanskrit commentary.
6. Accurate IAST of the exact Śrīdhara Sanskrit.
7. An independent Śrīdhara word-for-word rendering, written from the supplied
   commentary Sanskrit.
8. Faithful English translation of the supplied Śrīdhara commentary, written
   independently and without generic filler.

Keep the current Chapter 1 visual hierarchy and controls. Do not add a new
layout merely to make the source distinction; use the existing template’s
labels and structure consistently.

Use the exact controls from the finished template. A verse with supplied
Śrīdhara commentary has three controls; a verse with no commentary has the
template’s two text controls and no empty commentary control. Do not remove,
rename, duplicate, or redesign the applicable controls.

## Sanskrit and IAST rules

Preserve the source Sanskrit exactly. Only remove obvious HTML, encoding, or
display noise that is not part of the source.

IAST must use correct diacritics, including:

~~~text
ā ī ū ṛ ṝ ḷ ṅ ñ ṭ ṭh ḍ ḍh ṇ ś ṣ ṃ ḥ
~~~

Do not use broken transliteration, plain-English spellings, missing inherent
vowels, random extra vowels, or corrupted characters.

## Independent word-for-word rules

The word-for-word sections are the AI’s own Sanskrit-first work. They are not
a copy, rearrangement, or disguised paraphrase of Wilson.

For the main Sanskrit:

- Cover every actual word or necessary phrase unit.
- Keep the source Sanskrit visible in the paired phrase.
- Give the narrowest honest lexical or phrase meaning first.
- Preserve compounds, sandhi, case relations, tense, voice, negation,
  vocatives, connectives, agents, objects, and implied relationships.
- Use phrase units when a compound or sandhi cannot be translated word by word,
  but explain the actual phrase rather than hiding it.
- Allow a literal rendering to sound less elegant than Wilson when that is more
  faithful to the Sanskrit.
- After drafting, compare clause by clause with Wilson only to find omissions or
  obvious misunderstandings. Do not borrow Wilson’s prose.

For Śrīdhara:

- Translate every supplied commentary phrase, including grammatical analysis,
  derivations, alternate readings, quotations, and qualifications.
- Do not reduce a full commentary passage to “the commentator explains.”
- Do not use Wilson’s main-text English as a substitute for Śrīdhara.
- Keep the literal Śrīdhara rendering separate from the faithful paragraph
  translation already required by the template.

Never use filler such as:

- key term
- important word
- literal meaning
- meaning unavailable
- explanation omitted
- lexical term
- inflected form
- Words
- sense
- name used as a substitute for a real gloss
- etc.
- generic filler
- invented Sanskrit
- an unrelated meaning

If a source reading is genuinely ambiguous, state the ambiguity at that phrase
and do not invent certainty. If the source has no commentary for a verse, use
exactly:

~~~text
No commentary.
~~~

Include the period. Do not write “No separate commentary,” “commentary
unavailable,” “the commentator explains,” or an invented summary.

When the finished template has no commentary state, follow that exact template
behaviour: do not create an empty commentary block or add explanatory text
above or below No commentary.

## Śrīdhara commentary rules

Read the complete supplied Śrīdhara section before editing. Establish the
commentary-to-verse mapping before inserting any text.

If the source attaches one commentary block to a verse range, preserve that
range accurately. Do not invent separate commentary statements for individual
verses.

Translate the supplied commentary faithfully. Preserve:

- grammatical explanations
- compound analysis
- alternate readings
- word meanings
- speaker references
- source-specific interpretations

Do not add personal interpretation, modern theology, invented examples, or
narrator-style padding.

If there is no Śrīdhara commentary for a verse, use exactly:

~~~text
No commentary.
~~~

Include the period. Do not write “No separate commentary,” “commentary
unavailable,” “the commentator explains,” or any invented summary.

When the finished template has no commentary state, follow that exact template
behaviour: do not create an empty commentary block or add explanatory text
above or below No commentary.

## Forbidden invented prose

Do not add generic narration such as:

- “Maitreya asks Parāśara…”
- “The commentator now explains…”
- “This verse discusses…”
- “The gloss clarifies the key terms…”
- “In this chapter, the author explains…”
- “The sage gives a summary…”

Use such wording only when it is genuinely present in the specified source.
Preserve genuine source speaker labels such as “Parāśara said” or “Indra said.”

## Fast chapter workflow

Perform these actions in order for every chapter.

### 1. Inspect current state

Fetch the current repository state, branch, target path, main Contents page,
and Chapter 1 template. Record the current target-file blob SHA.

Do not overwrite newer work with a stale file.

### 2. Fetch sources once

Retrieve the complete Sanskrit chapter, complete Śrīdhara material, and complete
Wilson translation section once where possible. Do not repeatedly dump the same
large files into the conversation.

### 3. Build an internal alignment map

Map:

- source Sanskrit verse number
- website verse ID
- Wilson passage
- Śrīdhara commentary passage
- any source commentary range

If alignment is genuinely ambiguous, stop and report the exact verse numbers.
Never silently shift commentary or translation.

### 4. Generate from the fixed template

Use the existing Chapter 1 markup as the rendering template. Insert the
complete chapter in one batch. Preserve correct existing material and alter
only the target chapter and, after validation, the main Contents page.

### 5. Internal checkpoint every 20 verses

For long chapters, perform an internal count and alignment checkpoint after
each 20 verses. This is an internal safety check only.

Do not publish a partial chapter. Do not commit a partial chapter. Do not add a
partial chapter to the main Contents page.

### 6. Run one complete pre-commit audit

Run every validation in the section below. Fix failures before committing.

### 7. Update the real main Contents page

Only after the chapter passes validation:

- add the chapter to the actual integrated Contents list
- use the exact chapter route
- preserve the existing Contents design
- add no future or placeholder links
- ensure the chapter link resolves

The chapter file and the Contents-page update belong in the same
chapter-specific commit unless the repository’s established structure requires
otherwise.

### 8. Commit once

Create one clear chapter-specific commit containing only:

- the complete chapter file
- the corresponding main Contents-page update
- a necessary source manifest or metadata change, if the repository already
  uses one

Do not combine several chapters in one commit.

### 9. Verify immediately

Fetch the committed files again from GitHub. Confirm the content, commit SHA,
file paths, counts, links, and source mapping. Only then report completion.

## Pre-commit validation checklist

Before committing, verify all of the following:

- target chapter file exists
- target file is non-empty
- expected chapter verse count is present
- every verse article exists exactly once
- verse IDs are sequential and unique
- every heading has the correct book, chapter, and verse number
- every chapter Contents link points to an existing article
- every verse has exactly one Contents link
- every verse has the template-appropriate controls (three with commentary, two with exact No commentary.)
- every verse has main Sanskrit
- every verse has the Wilson reference English required by the existing template
- every AI word-for-word field is independently derived from the supplied Sanskrit
- every AI commentary translation is independently derived from supplied Śrīdhara Sanskrit
- every verse has main IAST
- every verse has main word-for-word meanings
- every verse has the required Śrīdhara fields
- every absent commentary is exactly No commentary.
- no placeholder text remains
- no duplicated or omitted verse exists
- no translation is under the wrong verse
- no commentary is under the wrong verse
- no broken IAST remains
- no generic narrator commentary remains
- source links identify the exact sources
- source commit SHA is recorded
- template classes and markup remain intact
- compact Contents rail remains intact
- mobile and desktop structure remain intact
- no unrelated file changed

Search for and reject placeholders or filler such as:

~~~text
TODO
TBD
coming soon
translation pending
commentary unavailable
text block
source block
key term
important word
meaning unavailable
Lorem ipsum
~~~

Also reject generic pagination, duplicate Contents rails, accidental raw source
labels, or any temporary debugging output.

For an audit of an already published page, any occurrence of “Words,”
“lexical term,” “inflected form,” or “sense” in a word-for-word field is an
incomplete placeholder, not a translation. Rebuild that verse from the actual
Sanskrit before treating the chapter as complete. Do not replace those tokens
with Wilson’s prose or with a guessed dictionary gloss.

## GitHub checkpoint protocol

Follow this protocol exactly:

1. Fetch the latest target file and its blob SHA.
2. Fetch the latest main Contents page and its blob SHA.
3. Preserve unrelated changes.
4. Prepare the complete chapter and validate it locally or through the available
   GitHub editing mechanism.
5. Refetch both current SHAs immediately before writing.
6. If either SHA changed, stop and refetch the latest files.
7. Update only the chapter file and the main Contents page.
8. Create exactly one chapter-specific commit.
9. Fetch the commit details.
10. Fetch the committed chapter file again.
11. Fetch the committed Contents page again.
12. Confirm the fetched content matches the content just committed.
13. Confirm the chapter link and every verse anchor resolve.
14. Confirm no unrelated files changed.
15. Report the direct commit link.

Never claim that a chapter is published because text was generated. A chapter
is complete only when there is a real GitHub commit and successful
post-commit verification.

If GitHub access fails, report the exact failure. Never invent a commit link or
claim that the main Contents page was updated.

## Source-note requirements

Every completed chapter must identify:

- H. H. Wilson as the reference and the exact archived Sacred Texts page
- the exact Sanskrit source path
- the exact Śrīdhara source path
- the Śrīdhara author
- the upstream source branch
- the upstream source commit SHA
- any additional source actually used

Do not link only to a repository root when the exact source file is available.
Do not claim that a source supplied English if it supplied Sanskrit only.

## Completion report

Use this exact final report format:

~~~text
Chapter {BOOK}.{CHAPTER} is published and verified.

Chapter:
{chapter title and route}

Commit:
{direct GitHub commit link}

Verified:
- verses/articles: {number}
- translations: {number}
- transliterations: {number}
- main word-for-word sections: {number}
- Śrīdhara Sanskrit sections: {number}
- Śrīdhara IAST sections: {number}
- Śrīdhara word-for-word sections: {number}
- Śrīdhara English sections: {number}
- exact “No commentary.” sections: {number}
- placeholders found: 0
- generic narrator commentary found: 0
- duplicate or missing verses: 0
- Contents links verified: yes
- template-appropriate-controls verified: yes
- live file matches committed content: yes
- live blob SHA: {SHA}
- source commit SHA: {SHA}

Main Contents page updated: yes

Any source-numbering issue, textual correction, or unresolved limitation:
{none, or a precise description}

Chapter {next chapter} has not been started.
~~~

## Hard prohibitions

Never:

- work on multiple chapters at once
- commit partial chapter content
- update the Contents page before completion
- invent Sanskrit, translation, or commentary
- substitute another English translation
- copy Wilson into the AI translation or word-for-word fields
- summarize Śrīdhara where a literal translation is required
- use search-result snippets as the source
- silently change source readings
- silently shift verse alignment
- duplicate or omit verses
- replace No commentary. with another phrase
- redesign the finished template
- enlarge or duplicate the Contents rail
- alter unrelated pages or files
- overwrite a newer GitHub version with a stale SHA
- create several chapter commits for one chapter
- claim publication without a verified commit link

## Definition of done

The task is finished only when every required chapter is present in the
existing complete design, every verse contains the exact required source
material, the main Contents page lists only genuinely completed chapters, every
chapter has a verified chapter-specific commit, and the final repository state
passes the full validation checklist.
