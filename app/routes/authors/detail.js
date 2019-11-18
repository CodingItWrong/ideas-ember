import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class AuthorsDetailRoute extends Route {
  model({ id }) {
    return RSVP.hash({
      media: this.store.findAll('medium'),
      author: this.store.findRecord('author', id, {
        reload: true,
        include: 'sources',
      }),
    });
  }
}
