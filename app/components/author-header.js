import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorHeaderComponent extends Component {
  @service router;

  @tracked editing = false;

  @action
  startEditing() {
    this.editing = true;
  }

  @action
  stopEditing() {
    this.editing = false;
  }

  @action
  handleDelete() {
    this.router.transitionTo('authors');
  }
}
