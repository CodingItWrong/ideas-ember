import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AppHeaderComponent extends Component {
  @service session;

  @action
  logOut() {
    this.session.invalidate();
  }
}
