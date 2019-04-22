import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class QuoteCardComponent extends Component {
  @service store;

  @tracked
  editing = false;

  @tracked
  addingNewIdea = false;

  @tracked
  idea = null;

  @tracked
  editedQuoteText = '';

  @tracked
  newIdeaSummary = '';

  @action
  startEditing() {
    this.editedQuoteText = this.args.quote.text;
    this.idea = this.args.quote.idea;
    this.editing = true;
  }

  @action
  cancelEditing() {
    this.editing = false;
  }

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
  async save() {
    const { quote } = this.args;

    let idea;

    if (this.idea && !this.newIdeaSummary) {
      idea = this.idea;
    } else if (this.newIdeaSummary && !this.idea) {
      idea = this.store.createRecord('idea', { summary: this.newIdeaSummary });
      await idea.save();
    } else {
      // did not select an idea
    }

    quote.setProperties({
      text: this.editedQuoteText,
      idea,
    });
    await quote.save();

    this.idea = null;
    this.editing = false;
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this quote?')) {
      return;
    }

    this.args.quote.destroyRecord();
  }
}
