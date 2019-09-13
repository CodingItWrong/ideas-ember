import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default class AuthorModel extends Model {
  @attr() name;
  @attr() affiliation;
  @hasMany('source') sources;
}
