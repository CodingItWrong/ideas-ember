import Model, { attr, hasMany } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class IdeaModel extends Model {
  @attr() summary;
  @attr() comments;
  @attr('date') createdAt;
  @hasMany('quote') quotes;

  get numericId() {
    return Number(this.id);
  }
}
