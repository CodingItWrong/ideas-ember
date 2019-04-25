import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class IdeaModel extends Model {
  @attr() summary;
  @attr() comments;
  @hasMany('quote') quotes;

  get numericId() {
    return Number(this.id);
  }
}
