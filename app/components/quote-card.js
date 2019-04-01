import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuoteCardComponent extends Component {
  @tracked
  addingIdea = false;

  @tracked
  idea = null;

  @action
  async saveIdea() {
    const { quote } = this.args;
    quote.set('idea', this.idea);
    await quote.save();
    this.idea = null;
    this.addingIdea = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this quote?')) {
      return;
    }

    this.args.quote.destroyRecord();
  }
}
