import Route from '@ember/routing/route';
// eslint-disable-next-line ember/no-mixins
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route.extend(AuthenticatedRouteMixin) {
  @service session;

  model() {
    return this.store.findAll('idea');
  }
}
