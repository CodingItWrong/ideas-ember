import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class SourcesDetailRoute extends Route {
  model({ id }) {
    return RSVP.hash({
      ideas: this.store.findAll('idea'),
      tags: this.store.findAll('tag'),
      media: this.store.findAll('medium'),
      source: this.store.findRecord('source', id, {
        reload: true,
        include: 'author,medium,tags,quotes,quotes.idea',
      }),
    });
  }
}
