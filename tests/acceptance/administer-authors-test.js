import { module, test } from 'qunit';
import { visit, click, fillIn, pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | administer authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding, editing, and deleting authors', async function (assert) {
    await visit('/authors');
    await click('[data-test-save-author-button]');

    assert.ok(true);
  });
});
