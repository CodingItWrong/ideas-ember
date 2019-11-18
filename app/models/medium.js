import DS from 'ember-data';
const { Model, attr } = DS;

export default class MediumModel extends Model {
  @attr() name;
}
