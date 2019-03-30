import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class IdeaCardComponent extends Component {
  @action
  delete() {
    this.args.idea.destroyRecord().catch(error => {
      console.error(error);
      alert(
        'An error occurred while trying to delete this idea.' +
          ' Make sure there are no quotes associated with it and try again.',
      );
    });
  }
}
