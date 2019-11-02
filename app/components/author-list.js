import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort, filter } from '@ember/object/computed';

export default class AuthorListComponent extends Component {
  sortProperties = Object.freeze(['name:asc']);

  @tracked filter = '';

  @sort('args.authors', 'sortProperties')
  sortedAuthors;

  @filter('sortedAuthors', ['filter'], function(author) {
    return (
      !this.filter ||
      author.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  })
  filteredAuthors;
}
