import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort, filter } from '@ember/object/computed';

export default class IdeaListComponent extends Component {
  sortProperties = Object.freeze(['createdAt:desc']);

  @tracked filter = '';

  @sort('args.ideas', 'sortProperties')
  sortedIdeas;

  @filter('sortedIdeas', ['filter'], function (idea) {
    return (
      !this.filter ||
      idea.summary.toLowerCase().includes(this.filter.toLowerCase())
    );
  })
  filteredIdeas;
}
