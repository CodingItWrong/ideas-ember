import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SourceHeaderComponent extends Component {
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
}
