import Route from '@ember/routing/route';

export default class AuthorsDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('author', id, {
      reload: true,
      include: 'sources',
    });
  }
}
