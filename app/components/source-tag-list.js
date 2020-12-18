import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import sortBy from 'lodash/sortBy';

export default class SourceTagList extends Component {
  @service router;

  @tracked isAdding = false;
  @tracked tagToAdd = null;

  get sortedTags() {
    return sortBy(this.args.tags.toArray(), ['name']);
  }

  get sortedSourceTags() {
    return sortBy(this.args.source.tags.toArray(), ['name']);
  }

  @action
  async addTagToSource() {
    const { source } = this.args;
    source.tags.pushObject(this.tagToAdd);
    await source.save();
    this.isAdding = false;
    this.tagToAdd = null;
  }

  @action
  navigateToTag(tag) {
    this.router.transitionTo('tags.detail', tag.id);
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

  @action
  cancelAdd() {
    this.isAdding = false;
    this.tagToAdd = null;
  }
}
