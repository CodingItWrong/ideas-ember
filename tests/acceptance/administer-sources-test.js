import { module, test } from 'qunit';
import { visit, click, fillIn, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | administer sources', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding, editing, and deleting sources', async function (assert) {
    this.server.create('medium', { name: 'Talk' });
    this.server.create('medium', { name: 'Book' });

    const authorName = 'Sandi Metz';
    const sourceTitle = 'Practical Object-Oriented Design';

    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    await click('[data-test-authors-nav-link]');
    await addAuthor(assert, authorName);

    // add
    await addSource(assert, sourceTitle);
    await seeSourceInList(assert, sourceTitle);
  });

  async function addAuthor(assert, authorName) {
    await click('[data-test-add-author-button]');
    await fillIn(
      '[data-test-author-name-field] input[type="text"]',
      authorName,
    );
    await click('[data-test-save-author-button]');
  }

  async function addSource(assert, sourceTitle) {
    await click('[data-test-add-source-button]');

    await fillIn('[data-test-title-field] input[type="text"]', sourceTitle);
    await fillIn('[data-test-url-field] input', 'https://example.com');
    await fillIn('[data-test-date-field] input', '07/09/1982');

    // Error: cannot read property 'appendChild' of null
    // await click('[data-test-medium-select] [role="button"]');
    // await click('[data-option-index="1"]');
    // await settled(); // doesn't fix it

    await click('[data-test-save-source-button]');

    assert.dom('[data-test-source-title]').hasText(sourceTitle);
  }

  async function seeSourceInList(assert, sourceTitle) {
    await click('[data-test-back-button]');
    assert.dom(`[data-test-source="${sourceTitle}"]`).exists();
  }
});
