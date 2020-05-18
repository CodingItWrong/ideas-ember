import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class QuoteModel extends Model {
  @attr() text;
  @attr() location;
  @attr() comments;
  @attr('date') createdAt;

  @belongsTo('source') source;
  @belongsTo('idea') idea;
}
