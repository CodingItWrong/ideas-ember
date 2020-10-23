import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NewAuthorFormComponent extends Component {
  @service store;
  @service router;

  @tracked
  name = '';

  @action
  createAuthor() {
    const author = this.store.createRecord('author');
    this.router.transitionTo('authors.detail', author.id);
  }
}
