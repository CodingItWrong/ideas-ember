import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from '../../config/environment';

export default class EditSourceFormComponent extends Component {
  @tracked editedTitle;
  @tracked editedMedium;
  @tracked editedUrl;
  @tracked editedDate;

  constructor(owner, args) {
    super(owner, args);
    this.initializeFormData();
  }

  initializeFormData() {
    this.editedTitle = this.args.source.title;
    this.editedMedium = this.args.source.medium;
    this.editedUrl = this.args.source.url;
    this.editedDate = this.args.source.date;
  }

  @action
  cancelEditing() {
    this.args.onCancel();
  }

  @action
  async save(e) {
    e.preventDefault();

    const { source } = this.args;
    source.setProperties({
      title: this.editedTitle,
      medium: this.editedMedium,
      url: this.editedUrl,
      date: this.editedDate,
    });
    await source.save();
    this.args.onSave();
  }

  @action
  delete() {
    if (ENV.environment !== 'test') {
      if (!confirm('Are you sure you want to delete this source?')) {
        return;
      }
    }

    this.args.source
      .destroyRecord()
      .then(() => this.args.onDelete())
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this source.' +
            ' Make sure there are no quotes associated with it and try again.',
        );
      });
  }
}
