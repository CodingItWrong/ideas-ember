import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuoteCardComponent extends Component {
  @tracked
  editing = false;

  @action
  startEditing() {
    this.editing = true;
  }

  @action
  stopEditing() {
    this.editing = false;
  }
}
