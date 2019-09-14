import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | administer authors', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding, editing, and deleting authors', async function(assert) {
    const authorName = 'Sandi Metz';

    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    await click('[data-test-authors-nav-link]');

    // add
    await addAuthor(assert, authorName);
    await seeAuthorInList(assert, authorName);
  });

  async function addAuthor(assert, authorName) {
    await click('[data-test-add-author-button]');
    await fillIn(
      '[data-test-author-name-field] input[type="text"]',
      authorName,
    );
    await click('[data-test-save-author-button]');

    assert.dom('[data-test-author-name]').hasText(authorName);
  }

  async function seeAuthorInList(assert, authorName) {
    await click('[data-test-authors-nav-link]');
    assert.dom(`[data-test-author="${authorName}"]`).exists();
  }
});
