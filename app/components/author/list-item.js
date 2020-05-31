import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorListItemComponent extends Component {
  @service router;

  @action
  goToAuthorDetail() {
    this.router.transitionTo('authors.detail', this.args.author.id);
  }
}
