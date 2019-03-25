import Route from '@ember/routing/route';

export default class SourcesIndexRoute extends Route {
  model() {
    return this.store.findAll('source', {
      include: 'author',
    });
  }
}
