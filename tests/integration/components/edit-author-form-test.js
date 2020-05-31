import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import EmberObject from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | edit-author-form', function (hooks) {
  setupRenderingTest(hooks);

  module('when save is clicked', () => {
    const updatedName = 'Sandi Q. Metz';
    const updatedAffiliation = 'POOD';

    let author;

    test('it updates the author', async function (assert) {
      let saved = false;
      let calledOnSave = false;

      author = EmberObject.create({
        name: 'Sandi Metz',
        affiliation: '',
        save: () => (saved = true),
      });

      this.set('author', author);
      this.set('handleSave', () => (calledOnSave = true));

      await render(
        hbs`<Author::EditForm @author={{this.author}} @onSave={{this.handleSave}} />`,
      );

      await fillIn('[data-test-name] input', updatedName);
      await fillIn('[data-test-affiliation] input', updatedAffiliation);
      await click('[data-test-save-button]');

      // updates fields
      assert.equal(author.name, updatedName);
      assert.equal(author.affiliation, updatedAffiliation);

      // saves
      assert.equal(saved, true);

      // calls onSave
      assert.equal(calledOnSave, true);
    });

    test('it allows cancelling', async function (assert) {
      let calledOnCancel = false;

      author = EmberObject.create({
        name: 'Sandi Metz',
        affiliation: '',
      });

      this.set('author', author);
      this.set('handleCancel', () => (calledOnCancel = true));

      await render(
        hbs`<Author::EditForm @author={{author}} @onCancel={{this.handleCancel}} />`,
      );

      await click('[data-test-cancel-button]');

      assert.equal(calledOnCancel, true);
    });

    test('it allows deleting', async function (assert) {
      let calledDestroyRecord = false;
      let calledOnDelete = false;

      author = EmberObject.create({
        name: 'Sandi Metz',
        affiliation: '',
        destroyRecord: () => {
          calledDestroyRecord = true;
          return Promise.resolve();
        },
      });

      this.set('author', author);
      this.set('handleDelete', () => (calledOnDelete = true));

      await render(
        hbs`<Author::EditForm @author={{author}} @onDelete={{this.handleDelete}} />`,
      );

      await click('[data-test-delete-button]');

      assert.equal(calledDestroyRecord, true);
      assert.equal(calledOnDelete, true);
    });
  });
});
