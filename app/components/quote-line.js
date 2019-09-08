import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class QuoteLine extends Component {
  @tracked
  editing = false;

  @action
  startEditing(e) {
    e.preventDefault();
    this.editing = true;
  }

  @action
  stopEditing() {
    this.editing = false;
  }
}
