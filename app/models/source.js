import Model, { attr, hasMany, belongsTo } from '@ember-data/model';
import classic from 'ember-classic-decorator';

@classic
export default class SourceModel extends Model {
  @attr() title;
  @attr() url;
  @attr() date;
  @attr('date') createdAt;
  @belongsTo('author') author;
  @belongsTo('medium') medium;
  @hasMany('quote') quotes;
  @hasMany('tag') tags;
}
