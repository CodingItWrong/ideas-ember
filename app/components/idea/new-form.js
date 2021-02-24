import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewIdeaFormComponent extends Component {
  @service store;

  @tracked
  summary = '';

  @action
  async createIdea(e) {
    e.preventDefault();

    const idea = this.store.createRecord('idea', { summary: this.summary });
    await idea.save();
    this.summary = '';
  }
}
