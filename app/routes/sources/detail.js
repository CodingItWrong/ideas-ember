import Route from '@ember/routing/route';

export default class SourcesDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('source', id, {
      reload: true,
      include: 'author,quotes,quotes.idea',
    });
  }
}
