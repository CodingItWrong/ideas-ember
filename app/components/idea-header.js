import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IdeaHeaderComponent extends Component {
  @tracked
  editing = false;

  @tracked
  editedIdeaSummary;

  @action
  startEditing() {
    this.editedIdeaSummary = this.args.idea.summary;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

  @action
  async save() {
    const { idea } = this.args;
    idea.set('summary', this.editedIdeaSummary);
    await idea.save();
    this.editing = false;
  }
}
