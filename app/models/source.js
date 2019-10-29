import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default class SourceModel extends Model {
  @attr() title;
  @attr() url;
  @attr() date;
  @attr('date') createdAt;
  @belongsTo('author') author;
  @hasMany('quote') quotes;
  @hasMany('tag') tags;
}
