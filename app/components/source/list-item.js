import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SourceItemComponent extends Component {
  @service router;

  @action
  goToSourceDetail() {
    this.router.transitionTo('sources.detail', this.args.source.id);
  }
}
