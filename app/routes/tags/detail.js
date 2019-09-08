import Route from '@ember/routing/route';

export default class TagsDetailRoute extends Route {
  model({ id }) {
    return this.store.findRecord('tag', id, {
      reload: true,
      include: 'sources',
    });
  }
}
