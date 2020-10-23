import EmberRouter from '@ember/routing/router';
import config from 'ideas/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('authors', function () {
    this.route('detail', { path: '/:id' });
  });
});

export default Router;
