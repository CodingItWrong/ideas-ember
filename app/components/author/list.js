import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import sortBy from 'lodash/sortBy';

export default class AuthorListComponent extends Component {
  @tracked filter = '';

  get sortedAuthors() {
    return sortBy(this.args.authors.toArray(), ['name']);
  }

  get filteredAuthors() {
    if (!this.filter) {
      return this.sortedAuthors;
    }

    return this.sortedAuthors.filter(author =>
      author.name.toLowerCase().includes(this.filter.toLowerCase()),
    );
  }
}
