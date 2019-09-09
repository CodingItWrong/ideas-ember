import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class TagItem extends Component {
  @service router;

  @action
  goToTagDetail() {
    this.router.transitionTo('tags.detail', this.args.tag.id);
  }
}
