import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class IdeaModel extends Model {
  @attr() summary;
  @attr() comments;
  @attr('date') createdAt;
  @hasMany('quote') quotes;
}
