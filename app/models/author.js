import Model, { attr, hasMany } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class AuthorModel extends Model {
  @attr() name;
  @attr() affiliation;
  @hasMany('source') sources;
}
