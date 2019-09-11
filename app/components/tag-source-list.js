import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { sort } from '@ember/object/computed';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TagSourceList extends Component {
  @service router;

  @tracked isAdding = false;
  @tracked sourceToAdd = null;

  sortProperties = Object.freeze(['title:asc']);

  @sort('args.sources', 'sortProperties')
  sortedSources;

  @sort('args.tag.sources', 'sortProperties')
  sortedTagSources;

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
