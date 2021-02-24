import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditIdeaFormComponent extends Component {
  @tracked editedIdeaSummary;
  @tracked editedIdeaComments;

  constructor(owner, args) {
    super(owner, args);
    this.initializeFormData();
  }

  initializeFormData() {
    this.editedIdeaSummary = this.args.idea.summary;
    this.editedIdeaComments = this.args.idea.comments;
  }

  @action
  cancelEditing() {
    this.args.onCancel();
  }

  @action
  async save(e) {
    e.preventDefault();

    const { idea } = this.args;
    idea.setProperties({
      summary: this.editedIdeaSummary,
      comments: this.editedIdeaComments,
    });
    await idea.save();
    this.args.onSave();
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this idea?')) {
      return;
    }

    this.args.idea
      .destroyRecord()
      .then(() => this.args.onDelete())
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this idea.' +
            ' Make sure there are no quotes associated with it and try again.',
        );
      });
  }
}
