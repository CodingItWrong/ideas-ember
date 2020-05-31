import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditAuthorForm extends Component {
  @tracked editedName = '';
  @tracked editedAffiliation = '';

  constructor(owner, args) {
    super(owner, args);
    this.initializeFormData();
  }

  // TODO: test this
  initializeFormData() {
    const { author } = this.args;
    this.editedName = author.name;
    this.editedAffiliation = author.affiliation;
  }

  @action
  async save() {
    const { author, onSave } = this.args;
    author.set('name', this.editedName);
    author.set('affiliation', this.editedAffiliation);
    await author.save();
    onSave();
  }

  @action
  delete() {
    const { onDelete } = this.args;

    this.args.author.destroyRecord().then(() => onDelete());
  }
}
