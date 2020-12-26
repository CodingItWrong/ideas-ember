import Model, { attr, hasMany } from '@ember-data/model';
import classic from 'ember-classic-decorator';
import { computed } from '@ember/object';

@classic
export default class IdeaModel extends Model {
  @attr() summary;
  @attr() comments;
  @attr('date') createdAt;
  @hasMany('quote') quotes;

  @computed('id')
  get numericId() {
    return Number(this.id);
  }
}
