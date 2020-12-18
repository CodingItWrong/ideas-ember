import Component from '@glimmer/component';
import sortBy from 'lodash/sortBy';

export default class TagList extends Component {
  get sortedTags() {
    return sortBy(this.args.tags.toArray(), ['name']);
  }
}
