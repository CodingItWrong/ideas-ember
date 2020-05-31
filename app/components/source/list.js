import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort, filter } from '@ember/object/computed';

export default class SourceListComponent extends Component {
  sortProperties = Object.freeze(['createdAt:desc']);

  @tracked filter = '';

  @sort('args.sources', 'sortProperties')
  sortedSources;

  @filter('sortedSources', ['filter'], function (source) {
    return (
      !this.filter ||
      source.title.toLowerCase().includes(this.filter.toLowerCase())
    );
  })
  filteredSources;
}
