import Controller from '@ember/controller';
import { filter } from '@ember/object/computed';

export default class AuthorsIndexController extends Controller {
  @filter('model', function (author) {
    return !!author.id;
  })
  authors;
}
