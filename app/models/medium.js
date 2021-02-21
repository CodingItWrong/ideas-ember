import Model, { attr } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class MediumModel extends Model {
  @attr() name;
}
