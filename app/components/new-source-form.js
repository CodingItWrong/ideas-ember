import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewSourceFormComponent extends Component {
  @service store;
  @service router;

  @tracked
  title = '';

  @tracked
  url = '';

  @action
  async createSource() {
    const source = this.store.createRecord('source', {
      title: this.title,
      url: this.url,
      author: this.args.author,
    });
    await source.save();
    this.title = '';
    this.url = '';
    this.router.transitionTo('sources.detail', source);
  }
}
