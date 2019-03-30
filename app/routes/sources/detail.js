import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class SourcesDetailRoute extends Route {
  model({ id }) {
    return RSVP.hash({
      ideas: this.store.findAll('idea'),
      source: this.store.findRecord('source', id, {
        reload: true,
        include: 'author,quotes,quotes.idea',
      }),
    });
  }
}
