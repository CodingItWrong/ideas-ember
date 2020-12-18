import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import sortBy from 'lodash/sortBy';

export default class TagSourceList extends Component {
  @service router;

  @tracked isAdding = false;
  @tracked sourceToAdd = null;

  get sortedSources() {
    return sortBy(this.args.sources.toArray(), ['title']);
  }

  get sortedTagSources() {
    return sortBy(this.args.tag.sources.toArray(), ['title']);
  }

  @action
  async addSourceToTag() {
    const { tag } = this.args;
    tag.sources.pushObject(this.sourceToAdd);
    await tag.save();
    this.isAdding = false;
    this.sourceToAdd = null;
  }

  @action
  navigateToSource(source) {
    this.router.transitionTo('sources.detail', source.id);
  }

  @action
  async promptToRemoveSource(source) {
    if (
      !confirm(
        `Are you sure you want to remove source "${source.title}" from this tag?`,
      )
    ) {
      return;
    }

    const { tag } = this.args;
    tag.sources.removeObject(source);
    await tag.save();
  }

  @action
  cancelAdd() {
    this.isAdding = false;
    this.sourceToAdd = null;
  }
}
