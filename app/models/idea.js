import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class IdeaModel extends Model {
  @attr() summary;
  @hasMany('quote') quotes;
}
