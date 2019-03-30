import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service session;
  @service router;

  email = '';
  password = '';

  @tracked
  errorMessage = '';

  @action
  async logIn() {
    let { email, password } = this;

    try {
      await this.session.authenticate('authenticator:oauth', email, password);
      this.router.transitionTo('index');
    } catch (e) {
      this.errorMessage = e.error || e;
    }
  }
}
