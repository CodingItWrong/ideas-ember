import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class AuthorListComponent extends Component {
  sortProperties = Object.freeze(['name:asc']);

  @sort('args.authors', 'sortProperties')
  sortedAuthors;
}
