import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort } from '@ember/object/computed';

export default class IdeaListComponent extends Component {
  sortProperties = Object.freeze(['createdAt:desc']);

  @tracked filter = '';

  @sort('args.ideas', 'sortProperties')
  sortedIdeas;

  get filteredIdeas() {
    if (!this.filter) {
      return this.sortedIdeas;
    }

    return this.sortedIdeas.filter(idea =>
      idea.summary.toLowerCase().includes(this.filter.toLowerCase()),
    );
  }
}
