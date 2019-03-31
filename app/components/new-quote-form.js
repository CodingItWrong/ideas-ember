import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewQuoteFormComponent extends Component {
  @service store;

  @tracked
  text = '';

  @tracked
  idea = null;

  @action
  async createQuote() {
    const quote = this.store.createRecord('quote', {
      source: this.args.source,
      idea: this.idea,
      text: this.text,
    });
    try {
      await quote.save();
      this.text = '';
      this.idea = null;
    } catch (e) {
      alert('An error occurred while saving this quote.');
      console.error(e);
    }
  }
}
