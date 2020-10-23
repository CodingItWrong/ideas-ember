import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default class AuthorsDetailController extends Controller {
  @filter('model.author.sources', function (source) {
    return !!source.id;
  })
  sources;
}
