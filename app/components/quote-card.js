import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class QuoteCardComponent extends Component {
  @action
  delete() {
    this.args.quote.destroyRecord();
  }
}
