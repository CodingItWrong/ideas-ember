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
  medium = null;

  @tracked
  url = '';

  @tracked
  date = null;

  @action
  async createSource(e) {
    e.preventDefault();

    const source = this.store.createRecord('source', {
      title: this.title,
      medium: this.medium,
      url: this.url,
      date: this.date,
      author: this.args.author,
    });
    await source.save();
    this.title = '';
    this.medium = null;
    this.url = '';
    this.router.transitionTo('sources.detail', source.id);
  }
}
