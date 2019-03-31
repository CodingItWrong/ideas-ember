import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class QuoteCardComponent extends Component {
  @action
  delete() {
    if (!confirm('Are you sure you want to delete this quote?')) {
      return;
    }

    this.args.quote.destroyRecord();
  }
}
