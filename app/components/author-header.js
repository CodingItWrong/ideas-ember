import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorHeaderComponent extends Component {
  @service router;

  @tracked
  editing = false;

  @tracked
  editedAuthorName;

  @action
  startEditing() {
    this.editedAuthorName = this.args.author.name;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

  @action
  async save() {
    const { author } = this.args;
    author.set('name', this.editedAuthorName);
    await author.save();
    this.editing = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this author?')) {
      return;
    }

    this.args.author
      .destroyRecord()
      .then(() => this.router.transitionTo('authors'))
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this author.' +
            ' Make sure there are no sources associated with her/him and try again.',
        );
      });
  }
}
