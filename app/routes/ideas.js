import Route from '@ember/routing/route';

export default class IdeasRoute extends Route {
  model({ id }) {
    return this.store.findRecord('idea', id, {
      reload: true,
      include: 'quotes,quotes.source,quotes.source.author',
    });
  }
}
