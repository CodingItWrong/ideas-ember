import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

export default class SourceListComponent extends Component {
  @tracked filter = '';

  get sortedSources() {
    return reverse(sortBy(this.args.sources.toArray(), ['createdAt']));
  }

  get filteredSources() {
    if (!this.filter) {
      return this.sortedSources;
    }

    return this.sortedSources.filter(source =>
      source.title.toLowerCase().includes(this.filter.toLowerCase()),
    );
  }
}
