(() => {
  const root = document.querySelector('.gita-content');
  if (!root) return;

  const imp = (element, property, value) => {
    if (element) element.style.setProperty(property, value, 'important');
  };

  const styleAll = () => {
    root.querySelectorAll('.gita-verse').forEach((verse) => {
      imp(verse, 'margin', '0 0 22px');
      imp(verse, 'padding', '0');
      imp(verse, 'border', '0');
      imp(verse, 'background', 'transparent');
      imp(verse, 'box-shadow', 'none');

      const heading = verse.querySelector('h2');
      if (heading) {
        imp(heading, 'margin', '0');
        imp(heading, 'text-align', 'center');
        imp(heading, 'color', '#2f7f82');
        imp(heading, 'font-family', 'Vollkorn, Georgia, serif');
        imp(heading, 'font-size', '23px');
        imp(heading, 'line-height', '1.1');
        imp(heading, 'font-weight', '600');
        imp(heading, 'letter-spacing', '.01em');
      }

      const rule = verse.querySelector('.gita-verse-rule');
      if (rule) {
        imp(rule, 'border', '0');
        imp(rule, 'border-top', '1px solid #dedbd6');
        imp(rule, 'width', '56%');
        imp(rule, 'max-width', '520px');
        imp(rule, 'margin', '10px auto 12px');
      }

      const sanskrit = verse.querySelector('.gita-sanskrit');
      if (sanskrit) {
        imp(sanskrit, 'max-width', '840px');
        imp(sanskrit, 'margin', '0 auto 12px');
        imp(sanskrit, 'text-align', 'center');
        imp(sanskrit, 'color', '#3c362e');
        imp(sanskrit, 'font-size', '18px');
        imp(sanskrit, 'line-height', '1.45');
        imp(sanskrit, 'font-weight', '400');
      }

      const translation = verse.querySelector('.gita-translation');
      if (translation) {
        const text = translation.textContent || '';
        const cleaned = text.replace(/^\s*\d+\.\d+\s*/, '');
        if (cleaned !== text) translation.textContent = cleaned;
        imp(translation, 'max-width', '840px');
        imp(translation, 'margin', '0 auto 12px');
        imp(translation, 'padding', '0');
        imp(translation, 'border', '0');
        imp(translation, 'background', 'transparent');
        imp(translation, 'box-shadow', 'none');
        imp(translation, 'text-align', 'center');
        imp(translation, 'color', '#3c362e');
        imp(translation, 'font-size', '14px');
        imp(translation, 'line-height', '1.45');
        imp(translation, 'font-weight', '400');
      }

      const controls = verse.querySelector('.gita-controls');
      if (controls) {
        imp(controls, 'display', 'block');
        imp(controls, 'max-width', '840px');
        imp(controls, 'margin', '0 auto');
        imp(controls, 'padding', '0');
      }

      [...verse.querySelectorAll('.gita-details')].forEach((details) => {
        imp(details, 'display', 'block');
        imp(details, 'max-width', '840px');
        imp(details, 'margin', '0 auto 6px');
        imp(details, 'padding', '0');
        imp(details, 'border', '0');
        imp(details, 'background', 'transparent');
        imp(details, 'box-shadow', 'none');

        const summary = details.querySelector('summary');
        if (summary) {
          imp(summary, 'display', 'block');
          imp(summary, 'width', 'max-content');
          imp(summary, 'max-width', '100%');
          imp(summary, 'cursor', 'pointer');
          imp(summary, 'border', '1px solid #9bc5c7');
          imp(summary, 'border-radius', '999px');
          imp(summary, 'padding', '4px 10px');
          imp(summary, 'color', '#2f7f82');
          imp(summary, 'background', 'transparent');
          imp(summary, 'font-size', '12px');
          imp(summary, 'line-height', '1.15');
          imp(summary, 'font-weight', '600');
          imp(summary, 'box-shadow', 'none');
          imp(summary, 'text-decoration', 'none');
        }

        const reveal = details.querySelector('.gita-reveal');
        if (!reveal) return;
        imp(reveal, 'margin', '6px 0 9px');
        imp(reveal, 'padding', '0');
        imp(reveal, 'border', '0');
        imp(reveal, 'background', 'transparent');
        imp(reveal, 'box-shadow', 'none');
        imp(reveal, 'color', '#3c362e');
        imp(reveal, 'font-size', '11.5px');
        imp(reveal, 'line-height', '1.42');

        reveal.querySelectorAll('p').forEach((paragraph) => {
          const isSanskrit = paragraph.matches('[lang^="sa"]');
          imp(paragraph, 'margin', '0');
          imp(paragraph, 'font-size', isSanskrit ? '15px' : '11.5px');
          imp(paragraph, 'line-height', isSanskrit ? '1.55' : '1.42');
        });
        reveal.querySelectorAll('.gita-dual-label').forEach((label) => {
          imp(label, 'margin', '0 0 3px');
          imp(label, 'font-size', '11.5px');
          imp(label, 'line-height', '1.2');
        });
        reveal.querySelectorAll('.gita-wfw-list').forEach((list) => {
          imp(list, 'font-size', '11.5px');
          imp(list, 'line-height', '1.42');
        });
      });

      const commentary = verse.querySelector('.gita-commentary');
      if (commentary) {
        imp(commentary, 'max-width', '840px');
        imp(commentary, 'margin', '12px auto 20px');
        imp(commentary, 'padding', '0');
        imp(commentary, 'border', '0');
        imp(commentary, 'border-left', '0');
        imp(commentary, 'background', 'transparent');
        imp(commentary, 'box-shadow', 'none');
        imp(commentary, 'color', '#3c362e');
        imp(commentary, 'font-family', "Merriweather, Georgia, serif");
        imp(commentary, 'font-size', '14px');
        imp(commentary, 'line-height', '1.45');
        imp(commentary, 'text-align', 'left');
        const commentaryHeading = commentary.querySelector('h3');
        if (commentaryHeading) {
          imp(commentaryHeading, 'margin', '0 0 4px');
          imp(commentaryHeading, 'font-family', "Merriweather, Georgia, serif");
          imp(commentaryHeading, 'font-size', '14px');
          imp(commentaryHeading, 'line-height', '1.25');
          imp(commentaryHeading, 'font-weight', '700');
        }
      }
    });
  };

  styleAll();
  new MutationObserver(styleAll).observe(root, {childList: true, subtree: true});
})();