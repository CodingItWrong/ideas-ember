import EmberRouter from '@ember/routing/router';
import config from 'ideas/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('ideas', { path: '/ideas/:id' });
  this.route('sources', function () {
    this.route('detail', { path: '/:id' });
  });
  this.route('authors', function () {
    this.route('detail', { path: '/:id' });
  });
  this.route('login');
  this.route('tags', function () {
    this.route('detail', { path: '/:id' });
  });
});
