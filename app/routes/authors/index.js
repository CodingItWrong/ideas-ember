import Route from '@ember/routing/route';

export default class AuthorsIndexRoute extends Route {
  model() {
    return this.store.findAll('author');
  }
}
