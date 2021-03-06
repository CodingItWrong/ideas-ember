import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from '../../config/environment';

export default class EditQuoteForm extends Component {
  @service store;

  @tracked
  addingNewIdea = false;

  @tracked
  idea = null;

  @tracked
  editedQuoteText = '';

  @tracked
  editedQuoteLocation = '';

  @tracked
  editedQuoteComments = '';

  @tracked
  newIdeaSummary = '';

  get isChanged() {
    return (
      this.editedQuoteText !== this.args.quote.text ||
      this.editedQuoteLocation !== this.args.quote.location ||
      this.editedQuoteComments !== this.args.quote.comments ||
      this.idea !== this.args.quote.idea
    );
  }

  constructor(owner, args) {
    super(owner, args);
    this.initializeFormData();
  }

  initializeFormData() {
    this.editedQuoteText = this.args.quote.text;
    this.editedQuoteLocation = this.args.quote.location;
    this.editedQuoteComments = this.args.quote.comments;
    this.idea = this.args.quote.idea;
  }

  @action
  cancelEditing() {
    if (this.isChanged) {
      if (
        !confirm(
          'Are you sure you want to cancel editing this quote? Your changes will be lost.',
        )
      ) {
        return;
      }
    }

    this.args.onCancel();
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
  async save(e) {
    e.preventDefault();

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
      location: this.editedQuoteLocation,
      comments: this.editedQuoteComments,
      idea,
    });
    await quote.save();

    this.idea = null;
    this.args.onSave();
  }

  @action
  delete() {
    if (ENV.environment !== 'test') {
      if (!confirm('Are you sure you want to delete this quote?')) {
        return;
      }
    }

    this.args.quote.destroyRecord();
  }
}
