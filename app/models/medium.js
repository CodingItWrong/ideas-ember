import Model, { attr, hasMany } from '@ember-data/model';

export default class MediumModel extends Model {
  @attr() name;
}
