import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | edit-author-form', function(hooks) {
  setupRenderingTest(hooks);

  module('when save is clicked', () => {
    const updatedName = 'Sandi Q. Metz';
    const updatedAffiliation = 'POOD';

    let author;

    test('it updates the author', async function(assert) {
      let saved = false;
      author = EmberObject.create({
        name: 'Sandi Metz',
        affiliation: '',
        save: () => (saved = true),
      });

      this.set('author', author);
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<EditAuthorForm @author={{this.author}} />`);

      await fillIn('[data-test-name] input', updatedName);
      await fillIn('[data-test-affiliation] input', updatedAffiliation);
      await click('[data-test-save-button]');

      // updates fields
      assert.equal(author.name, updatedName);
      assert.equal(author.affiliation, updatedAffiliation);

      // saves
      assert.equal(saved, true);
    });
  });
});
