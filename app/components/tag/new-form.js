import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NewTagForm extends Component {
  @service store;
  @service router;

  @tracked
  name = '';

  @action
  async createTag(e) {
    e.preventDefault();

    const tag = this.store.createRecord('tag', { name: this.name });
    await tag.save();
    this.name = '';
    this.router.transitionTo('tags.detail', tag.id);
  }
}
