import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TagHeader extends Component {
  @service router;

  @tracked
  editing = false;

  @tracked
  editedTagName;

  @action
  startEditing() {
    this.editedTagName = this.args.tag.name;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

  @action
  async save() {
    const { tag } = this.args;
    tag.set('name', this.editedTagName);
    await tag.save();
    this.editing = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this tag?')) {
      return;
    }

    this.args.tag
      .destroyRecord()
      .then(() => this.router.transitionTo('tags'))
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this tag.' +
            ' Make sure there are no sources tagged with it and try again.',
        );
      });
  }
}
