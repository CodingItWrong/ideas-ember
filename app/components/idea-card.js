import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class IdeaCardComponent extends Component {
  @service router;

  @action
  goToIdeaDetail() {
    this.router.transitionTo('ideas', this.args.idea.id);
  }
}
