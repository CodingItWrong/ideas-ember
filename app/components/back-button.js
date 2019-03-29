import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BackButtonComponent extends Component {
  @service router;

  @action
  goToRoot() {
    this.router.transitionTo('index');
  }
}
