import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class QuoteModel extends Model {
  @attr() text;
  @attr() location;
  @attr() comments;
  @attr('date') createdAt;

  @belongsTo('source') source;
  @belongsTo('idea') idea;
}
