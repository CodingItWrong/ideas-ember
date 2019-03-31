import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuthorCardComponent extends Component {
  @action
  delete() {
    if (!confirm('Are you sure you want to delete this author?')) {
      return;
    }

    this.args.author.destroyRecord().catch(error => {
      console.error(error);
      alert(
        'An error occurred while trying to delete this author.' +
          ' Make sure there are no sources associated with her/him and try again.',
      );
    });
  }
}
