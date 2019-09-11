import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class TagsDetailRoute extends Route {
  model({ id }) {
    return RSVP.hash({
      sources: this.store.findAll('source', {
        reload: true,
        include: 'author',
      }),
      tag: this.store.findRecord('tag', id, {
        reload: true,
        include: 'sources,sources.author',
      }),
    });
  }
}
