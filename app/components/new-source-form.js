import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewSourceFormComponent extends Component {
  @service store;

  @tracked
  title = '';

  @action
  async createSource() {
    const source = this.store.createRecord('source', {
      title: this.title,
      author: this.args.author,
    });
    await source.save();
    this.title = '';
  }
}
