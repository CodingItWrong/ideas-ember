import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuthorHeaderComponent extends Component {
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
}
