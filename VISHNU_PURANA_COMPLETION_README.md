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

## Project constants

| Item | Required value |
|---|---|
| Published site | https://krishnavyasmuni.github.io/vivekadrishti/pages/vishnu-purana/ |
| Website repository | krishnavyasmuni/vivekadrishti |
| Working branch | main unless the repository explicitly shows another current branch |
| Main Contents page | The existing Viṣṇu Purāṇa page under pages/vishnu-purana/; locate the exact current file before editing |
| Chapter route | articles/vishnu-purana-book-{BOOK}-chapter-{CHAPTER}/index.html |
| English translation | H. H. Wilson, Sacred Texts Viṣṇu Purāṇa |
| Sanskrit and Śrīdhara source | Vishvas Vasuki, vishvAsa/purANam_vaiShNavam, branch content |
| Main Sanskrit source path | viShNu-purANam/ |
| Śrīdhara source path | Inspect the actual viShNu-purANam/shrIdhara-viShNu-chittau/ files and preserve their exact mapping |
| Template authority | The already completed Chapter 1 page |

## Source lock

Use only these sources unless the user explicitly changes them.

### Main English translation

Use only H. H. Wilson’s English translation from Sacred Texts:

https://sacred-texts.com/hin/vp/index.htm

Verify the exact chapter page and heading through the Sacred Texts index before
using the text.

Preserve exactly:

- Wilson’s wording
- punctuation
- paragraph divisions
- speaker labels
- verse numbering
- chapter headings
- source meaning

Do not modernize, summarize, paraphrase, silently correct, or substitute
another English translation.

### Sanskrit and Śrīdhara

Use only Vishvas Vasuki’s GitHub corpus:

https://github.com/vishvAsa/purANam_vaiShNavam/tree/content/viShNu-purANam

Inspect the actual files under the Viṣṇu Purāṇa directory. Do not guess
filenames or directory names. Preserve the exact Devanāgarī and the exact
Śrīdhara commentary-to-verse mapping.

Record the exact upstream source commit SHA used for each completed chapter.
Keep attribution, source links, and any applicable licence information.

## Work order and progress

Expected order, subject to verification against the current repository state:

1. Book 1, Chapter 2
2. Book 1, Chapters 3–22
3. Books 2, 3, 4, 5, and 6 in source order

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
2. Exact H. H. Wilson English translation.
3. Accurate standard IAST of the exact main Sanskrit.
4. Real main word-for-word meanings.
5. Exact supplied Śrīdhara Sanskrit commentary.
6. Accurate IAST of the exact Śrīdhara Sanskrit.
7. Real Śrīdhara word-for-word meanings.
8. Faithful English translation of the supplied Śrīdhara commentary.

Copy the exact three controls per verse from the finished template. Do not
remove, rename, duplicate, or redesign them.

## Sanskrit and IAST rules

Preserve the source Sanskrit exactly. Only remove obvious HTML, encoding, or
display noise that is not part of the source.

IAST must use correct diacritics, including:

~~~text
ā ī ū ṛ ṝ ḷ ṅ ñ ṭ ṭh ḍ ḍh ṇ ś ṣ ṃ ḥ
~~~

Do not use broken transliteration, plain-English spellings, missing inherent
vowels, random extra vowels, or corrupted characters.

## Word-for-word rules

Word-for-word sections must contain actual words or phrase units from the
source and their real meanings.

Use phrase units when sandhi or compounds require them, but keep the Sanskrit
visible and explain the actual phrase.

Never use filler such as:

- key term
- important word
- literal meaning
- meaning unavailable
- explanation omitted
- etc.
- generic filler
- invented Sanskrit
- an unrelated meaning

The same rule applies to both the main Sanskrit and the Śrīdhara Sanskrit.

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
- every verse has exactly three controls, matching the template
- every verse has main Sanskrit
- every verse has Wilson English
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

- H. H. Wilson and the exact Sacred Texts page
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
- three-controls-per-verse verified: yes
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
- summarize Wilson or Śrīdhara
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
