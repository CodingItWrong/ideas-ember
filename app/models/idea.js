import Model, { attr, hasMany } from '@ember-data/model';

export default class IdeaModel extends Model {
  @attr() summary;
  @attr() comments;
  @attr('date') createdAt;
  @hasMany('quote') quotes;

  get numericId() {
    return Number(this.id);
  }
}
