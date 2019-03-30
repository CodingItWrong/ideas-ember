import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewQuoteFormComponent extends Component {
  @service store;

  @tracked
  text = '';

  @tracked
  ideaId = null;

  @action
  handleIdeaChange(event) {
    this.ideaId = event.target.value;
  }

  get idea() {
    return this.args.ideas.find(idea => idea.id === this.ideaId);
  }

  @action
  async createQuote() {
    const quote = this.store.createRecord('quote', {
      source: this.args.source,
      idea: this.idea,
      text: this.text,
    });
    await quote.save();

    this.text = '';
    this.ideaId = null;
  }
}
