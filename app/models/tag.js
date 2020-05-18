import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TagModel extends Model {
  @attr() name;
  @hasMany('source') sources;
}
