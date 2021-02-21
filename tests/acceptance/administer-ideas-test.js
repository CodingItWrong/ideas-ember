import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | administer ideas', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding, editing, and deleting ideas', async function (assert) {
    await authenticateSession({ access_token: 'ABC123' });

    const idea =
      'Refactoring in small steps allows you to make changes gradually.';
    await addIdea(assert, idea);
  });

  async function addIdea(assert, idea) {
    await visit('/');
    await click('[data-test-add-idea-button]');
    await fillIn('[data-test-idea-summary-field] textarea', idea);
    await click('[data-test-save-idea-button]');
    assert.dom(`[data-test-idea-summary]`).hasText(idea);
  }
});
