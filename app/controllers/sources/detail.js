import Controller from '@ember/controller';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';

export default class SourcesDetailController extends Controller {
  get sortedIdeas() {
    return reverse(sortBy(this.model.ideas.toArray(), ['numericId']));
  }
}
