import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class TagList extends Component {
  sortProperties = Object.freeze(['title:asc']);

  @sort('args.tags', 'sortProperties')
  sortedTags;
}
