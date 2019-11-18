import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SourceHeaderComponent extends Component {
  @service router;

  @tracked
  editing = false;

  @tracked
  editedTitle;

  @tracked
  editedMedium;

  @tracked
  editedUrl;

  @tracked
  editedDate;

  @action
  startEditing() {
    this.editedTitle = this.args.source.title;
    this.editedMedium = this.args.source.medium;
    this.editedUrl = this.args.source.url;
    this.editedDate = this.args.source.date;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

  @action
  async save() {
    const { source } = this.args;
    source.setProperties({
      title: this.editedTitle,
      medium: this.editedMedium,
      url: this.editedUrl,
      date: this.editedDate,
    });
    await source.save();
    this.editing = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this source?')) {
      return;
    }

    this.args.source
      .destroyRecord()
      .then(() => this.router.transitionTo('sources'))
      .catch(error => {
        console.error(error);
        alert(
          'An error occurred while trying to delete this source.' +
            ' Make sure there are no quotes associated with it and try again.',
        );
      });
  }
}
