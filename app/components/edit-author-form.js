import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditAuthorForm extends Component {
  @tracked editedName = '';
  @tracked editedAffiliation = '';

  @action
  save() {
    const { author } = this.args;
    author.set('name', this.editedName);
    author.set('affiliation', this.editedAffiliation);
  }
}
