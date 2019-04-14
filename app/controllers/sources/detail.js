import Controller from '@ember/controller';
import { sort } from '@ember/object/computed';

export default class SourcesDetailController extends Controller {
  sortProperties = Object.freeze(['numericId:desc']);

  @sort('model.ideas', 'sortProperties')
  sortedIdeas;
}
