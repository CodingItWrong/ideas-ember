import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { filter } from '@ember/object/computed';
import sortBy from 'lodash/sortBy';

export default class AuthorListComponent extends Component {
  @tracked filter = '';

  get sortedAuthors() {
    return sortBy(this.args.authors.toArray(), ['name']);
  }

  @filter('sortedAuthors', ['filter'], function (author) {
    return (
      !this.filter ||
      author.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  })
  filteredAuthors;
}
