(() => {
  'use strict';
  const chapter = '/vivekadrishti/articles/srimad-bhagavatam-canto-12-sridhara-svami/chapter-13/';
  const isCanto12 = /^\/vivekadrishti\/articles\/srimad-bhagavatam-canto-12-sridhara-svami\/?$/.test(location.pathname);
  if (!isCanto12) return;
  const redirect = () => {
    if (/^#chapter-0?13$/i.test(location.hash)) location.replace(chapter);
  };
  redirect();
  addEventListener('hashchange', redirect);
  const nav = document.querySelector('[data-bhagavatam-chapters]');
  if (!nav) return;
  const link = () => nav.querySelectorAll('a[href]').forEach((a) => {
    if (/^#chapter-0?13$/i.test(a.getAttribute('href') || '')) a.href = chapter;
  });
  link();
  new MutationObserver(link).observe(nav, {childList: true});
})();
