import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class QuoteCardComponent extends Component {
  @service store;

  @tracked
  addingIdea = false;

  @tracked
  addingNewIdea = false;

  @tracked
  idea = null;

  @tracked
  newIdeaSummary = '';

  @action
  switchToNewIdea() {
    this.addingNewIdea = true;
    this.idea = null;
  }

  @action
  switchToExistingIdea() {
    this.addingNewIdea = false;
    this.newIdeaSummary = '';
  }

  @action
  async saveIdea() {
    const { quote } = this.args;

    let idea;

    if (this.idea && !this.newIdeaSummary) {
      idea = this.idea;
    } else if (this.newIdeaSummary && !this.idea) {
      idea = this.store.createRecord('idea', { summary: this.newIdeaSummary });
      await idea.save();
    } else {
      alert('Either choose an existing idea or enter a new idea.');
      return;
    }

    quote.set('idea', idea);
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
