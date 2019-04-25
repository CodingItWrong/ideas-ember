import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IdeaHeaderComponent extends Component {
  @service router;

  @tracked
  editing = false;

  @tracked
  editedIdeaSummary;

  @tracked
  editedIdeaComments;

  @action
  startEditing() {
    this.editedIdeaSummary = this.args.idea.summary;
    this.editedIdeaComments = this.args.idea.comments;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

  @action
  async save() {
    const { idea } = this.args;
    idea.setProperties({
      summary: this.editedIdeaSummary,
      comments: this.editedIdeaComments,
    });
    await idea.save();
    this.editing = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this idea?')) {
      return;
    }

    this.args.idea
      .destroyRecord()
      .then(() => {
        this.router.transitionTo('index');
      })
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this idea.' +
            ' Make sure there are no quotes associated with it and try again.',
        );
      });
  }
}
