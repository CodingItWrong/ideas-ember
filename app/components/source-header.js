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
  editedUrl;

  @action
  startEditing() {
    this.editedTitle = this.args.source.title;
    this.editedUrl = this.args.source.url;
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
      url: this.editedUrl,
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
