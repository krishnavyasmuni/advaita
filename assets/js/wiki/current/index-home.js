(() => {
  const root = document.getElementById('scripture-browser');
  if (!root || root.dataset.wikiIndexHome === '1') return;
  const nav = root.querySelector('.corpus-nav');
  const stage = root.querySelector('.browser-stage');
  if (!nav || !stage) return;
  root.dataset.wikiIndexHome = '1';

  const maha = [
    ['Brahma Purāṇa','brahma-purana'],['Padma Purāṇa','padma-purana'],['Viṣṇu Purāṇa','vishnu-purana'],['Śiva Purāṇa','shiva-purana'],
    ['Bhāgavata Purāṇa','bhagavata-purana'],['Nāradīya Purāṇa','naradiya-purana'],['Mārkaṇḍeya Purāṇa','markandeya-purana'],['Agni Purāṇa','agni-purana'],
    ['Bhaviṣya Purāṇa','bhavishya-purana'],['Brahmavaivarta Purāṇa','brahmavaivarta-purana'],['Liṅga Purāṇa','linga-purana'],['Varāha Purāṇa','varaha-purana'],
    ['Skanda Purāṇa','skanda-purana'],['Vāmana Purāṇa','vamana-purana'],['Kūrma Purāṇa','kurma-purana'],['Matsya Purāṇa','matsya-purana'],
    ['Garuḍa Purāṇa','garuda-purana'],['Brahmāṇḍa Purāṇa','brahmanda-purana']
  ];
  const mahaLinks = maha.map(([name,slug]) => `<li><a href="/vivekadrishti/articles/scripture/${slug}/">${name}</a></li>`).join('');

  const directory = document.createElement('div');
  directory.className = 'wiki-index-directory';
  directory.innerHTML = `
    <p class="wiki-index-intro">A browsable index of Hindu scripture, organized by textual corpus and traditional classification. Select a collection to open the detailed research index, or follow an individual Mahāpurāṇa directly.</p>
    <div class="wiki-index-grid">
      <div class="wiki-index-column">
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Vedic Literature</h2>
          <ul class="wiki-index-list">
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Vedas and Śākhās</button>
              <ul>
                <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Ṛgveda</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Sāmaveda</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Śukla Yajurveda</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Kṛṣṇa Yajurveda</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="vedas">Atharvaveda</button></li>
              </ul>
            </li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads">108 Upaniṣads</button>
              <ul>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Mukhya">Mukhya</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Sāmānya Vedānta">Sāmānya Vedānta</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Sannyāsa">Sannyāsa</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Yoga">Yoga</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Vaiṣṇava">Vaiṣṇava</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Śaiva">Śaiva</button></li>
                <li><button class="wiki-index-link" type="button" data-open-corpus="upanishads" data-view="Śākta">Śākta</button></li>
              </ul>
            </li>
          </ul>
        </section>
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Itihāsa</h2>
          <ul class="wiki-index-list">
            <li><button class="wiki-index-link" type="button" data-open-corpus="itihasa">Rāmāyaṇa</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="itihasa">Mahābhārata</button></li>
          </ul>
        </section>
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Dharma &amp; Smṛti</h2>
          <ul class="wiki-index-list">
            <li><button class="wiki-index-link" type="button" data-open-corpus="smriti" data-view="Yājñavalkya Smṛti">Yājñavalkya Smṛti list</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="smriti" data-view="Parāśara Smṛti">Parāśara Smṛti list</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="smriti" data-view="Padma Purāṇa">Padma Purāṇa classification</button></li>
          </ul>
        </section>
      </div>
      <div class="wiki-index-column">
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Featured Verse</h2>
          <blockquote class="wiki-index-quote">
            <p>Both the doe and the bucks worship the Lord with looks of love and affection.</p>
            <cite>— Śrīmad-Bhāgavatam 10.21.11</cite>
          </blockquote>
        </section>
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Purāṇic Literature</h2>
          <ul class="wiki-index-list">
            <li><button class="wiki-index-link" type="button" data-open-corpus="puranas" data-view="Mahāpurāṇa">Mahāpurāṇas</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="puranas" data-view="Upapurāṇa">Upapurāṇas</button></li>
            <li>Mahāpurāṇa research articles
              <ul>${mahaLinks}</ul>
            </li>
          </ul>
        </section>
        <section class="wiki-index-block">
          <h2 class="wiki-index-heading">Vedāṅga</h2>
          <ul class="wiki-index-list">
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Śikṣā</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Kalpa</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Vyākaraṇa</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Nirukta</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Chandas</button></li>
            <li><button class="wiki-index-link" type="button" data-open-corpus="vedanga">Jyotiṣa</button></li>
          </ul>
        </section>
      </div>
    </div>`;

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'wiki-index-back';
  back.textContent = '← Back to Wiki Index';
  back.hidden = true;

  nav.insertAdjacentElement('beforebegin', directory);
  stage.insertAdjacentElement('beforebegin', back);

  const sync = () => {
    const active = nav.querySelector('.corpus-button.is-active');
    directory.hidden = Boolean(active);
    nav.hidden = !active;
    back.hidden = !active;
  };

  const openCorpus = (key, view) => {
    const button = nav.querySelector(`.corpus-button[data-corpus="${key}"]`);
    if (!button) return;
    button.click();
    requestAnimationFrame(() => {
      if (view) {
        const tabs = Array.from(stage.querySelectorAll('.shastra-tab'));
        const tab = tabs.find(item => item.dataset.view === view || item.textContent.trim() === view);
        if (tab) tab.click();
      }
      sync();
      const top = root.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({top,behavior:'smooth'});
    });
  };

  directory.addEventListener('click', event => {
    const trigger = event.target.closest('[data-open-corpus]');
    if (!trigger) return;
    event.preventDefault();
    openCorpus(trigger.dataset.openCorpus, trigger.dataset.view || '');
  });

  back.addEventListener('click', () => {
    const active = nav.querySelector('.corpus-button.is-active');
    if (active) active.click();
    requestAnimationFrame(() => {
      sync();
      const top = root.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({top,behavior:'smooth'});
    });
  });

  root.addEventListener('click', event => {
    if (event.target.closest('.corpus-button')) requestAnimationFrame(sync);
  });
  sync();
})();
