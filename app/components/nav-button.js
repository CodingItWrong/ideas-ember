import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavButtonComponent extends Component {
  @service router;

  @action
  navigate() {
    if (this.args.id) {
      this.router.transitionTo(this.args.to, this.args.id);
    } else {
      this.router.transitionTo(this.args.to);
    }
  }
}
