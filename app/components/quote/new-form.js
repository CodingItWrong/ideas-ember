import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewQuoteFormComponent extends Component {
  @service store;

  @tracked buttonDisabled = false;
  @tracked rawText = '';

  get text() {
    return this.rawText;
  }

  set text(value) {
    const trimmedValue = value.replace(/\n*Excerpt From[\s\S]*/, '');
    this.rawText = trimmedValue;
  }

  @action
  saveInputElement(element) {
    this.textInput = element;
  }

  @action
  async createQuote(e) {
    e.preventDefault();

    const quote = this.store.createRecord('quote', {
      source: this.args.source,
      text: this.text,
    });
    this.buttonDisabled = true;
    try {
      await quote.save();
      this.text = '';
      this.textInput.focus();
    } catch (e) {
      alert('An error occurred while saving this quote.');
      console.error(e);
    } finally {
      this.buttonDisabled = false;
    }
  }
}
