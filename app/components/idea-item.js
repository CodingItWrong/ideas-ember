import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IdeaItemComponent extends Component {
  @service router;

  @action
  goToIdeaDetail() {
    this.router.transitionTo('ideas', this.args.idea.id);
  }

  @action
  delete() {
    if (!confirm('Are you sure you want to delete this idea?')) {
      return;
    }

    this.args.idea.destroyRecord().catch(error => {
      console.error(error);
      alert(
        'An error occurred while trying to delete this idea.' +
          ' Make sure there are no quotes associated with it and try again.',
      );
    });
  }
}
