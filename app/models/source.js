import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default class SourceModel extends Model {
  @attr() title;
  @attr() url;
  @attr() date;
  @belongsTo('author') author;
  @hasMany('quote') quotes;
}
