import Route from '@ember/routing/route';

export default class TagsIndexRoute extends Route {
  model() {
    return this.store.findAll('tag');
  }
}
