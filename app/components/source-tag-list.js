import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort } from '@ember/object/computed';
import { action } from '@ember/object';

export default class SourceTagList extends Component {
  sortProperties = Object.freeze(['title:asc']);

  @tracked isAdding = false;
  @tracked tagToAdd = null;

  @sort('args.tags', 'sortProperties')
  sortedTags;

  @sort('args.source.tags', 'sortProperties')
  sortedSourceTags;

  @action
  async addTagToSource() {
    const { source } = this.args;
    source.tags.pushObject(this.tagToAdd);
    await source.save();
    this.isAdding = false;
    this.tagToAdd = null;
  }

  @action
  async promptToRemoveTag(tag) {
    if (
      !confirm(
        `Are you sure you want to remove tag "${tag.name}" from this source?`,
      )
    ) {
      return;
    }

    const { source } = this.args;
    source.tags.removeObject(tag);
    await source.save();
  }
}
