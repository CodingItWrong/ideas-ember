import { module, test } from 'qunit';
import { visit, click, fillIn, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | administer authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding, editing, and deleting authors', async function (assert) {
    const authorName = 'Sandi Metz';

    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    await click('[data-test-authors-nav-link] button');

    // add
    await addAuthor(assert, authorName);
    await seeAuthorInList(assert, authorName);

    // edit
    const newAuthorName = 'Sandee Metz';
    await editAuthor(assert, authorName, newAuthorName);

    // delete
    await deleteCurrentAuthor(assert);
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
    await click('[data-test-authors-nav-link] button');
    assert.dom(`[data-test-author="${authorName}"]`).exists();
  }

  async function editAuthor(assert, oldAuthorName, newAuthorName) {
    await click(`[data-test-author="${oldAuthorName}"] button`);
    await click('[data-test-edit-author-button]');

    await fillIn('[data-test-name] input[type="text"]', newAuthorName);
    await click('[data-test-save-button]');

    assert.dom('[data-test-author-name]').hasText(newAuthorName);
  }

  async function deleteCurrentAuthor(assert) {
    await click('[data-test-edit-author-button]');
    await click('[data-test-delete-button]');

    assert.dom('[data-test-author-name]').doesNotExist();
  }
});
