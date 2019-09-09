import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class TagModel extends Model {
  @attr() name;
  @hasMany('source') sources;
}
