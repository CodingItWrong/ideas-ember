import Component from '@glimmer/component';
import { sort } from '@ember/object/computed';

export default class SourceListComponent extends Component {
  sortProperties = Object.freeze(['title:asc']);

  @sort('args.sources', 'sortProperties')
  sortedSources;
}
