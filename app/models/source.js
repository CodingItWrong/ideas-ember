import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SourceModel extends Model {
  @attr() title;
  @attr() url;
  @attr() date;
  @attr('date') createdAt;
  @belongsTo('author') author;
  @belongsTo('medium') medium;
  @hasMany('quote') quotes;
  @hasMany('tag') tags;
}
