import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditTagFormComponent extends Component {
  @tracked editedTagName;

  constructor(owner, args) {
    super(owner, args);
    this.initializeFormData();
  }

  initializeFormData() {
    this.editedTagName = this.args.tag.name;
  }

  @action
  cancelEditing() {
    console.log(this.args.onSave);
    this.args.onCancel();
  }

  @action
  async save() {
    const { tag } = this.args;
    tag.set('name', this.editedTagName);
    await tag.save();
    this.args.onSave();
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this tag?')) {
      return;
    }

    this.args.tag
      .destroyRecord()
      .then(() => this.args.onDelete())
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this tag.' +
            ' Make sure there are no sources tagged with it and try again.',
        );
      });
  }
}
