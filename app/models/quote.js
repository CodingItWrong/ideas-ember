import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class QuoteModel extends Model {
  @attr() text;
  @attr() comments;
  @belongsTo('source') source;
  @belongsTo('idea') idea;

  get numericId() {
    return Number(this.id);
  }
}
