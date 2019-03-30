import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SourceCardComponent extends Component {
  @action
  delete() {
    this.args.source.destroyRecord().catch(error => {
      console.error(error);
      alert(
        'An error occurred while trying to delete this source.' +
          ' Make sure there are no quotes associated with it and try again.',
      );
    });
  }
}
