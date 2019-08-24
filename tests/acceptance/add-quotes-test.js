import { module, test } from 'qunit';
import { visit, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { authenticateSession } from 'ember-simple-auth/test-support';

module('Acceptance | add quotes', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('allows adding quotes', async function(assert) {
    await authenticateSession({ access_token: 'ABC123' });
    await visit('/');

    await click('[data-test-authors-nav-link]');

    await click('[data-test-add-author-button]');
    await fillIn(
      '[data-test-author-name-field] input[type="text"]',
      'Sandi Metz',
    );
    await click('[data-test-save-author-button]');

    await click('[data-test-add-source-button]');
    await fillIn(
      '[data-test-title-field] input[type="text"]',
      'Practical Object-Oriented Design',
    );
    await click('[data-test-save-source-button]');

    await click('[data-test-add-quote-button]');
    await fillIn('[data-test-quote-field] textarea', quote);
    await click('[data-test-save-quote-button]');

    assert.dom('[data-test-quote-text]').hasText(quote);
  });
});

const quote =
  'Unfortunately, something will change. It always does. The customers didn’t know what they wanted, they didn’t say what they meant. You didn’t understand their needs, you’ve learned how to do something better. Even applications that are perfect in every way are not stable. The application was a huge success, now everyone wants more. Change is unavoidable. It is ubiquitous, omnipresent, and inevitable.';
