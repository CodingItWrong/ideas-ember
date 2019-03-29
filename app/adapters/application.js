import DS from 'ember-data';
import ENV from '../config/environment';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = ENV.apiHost;
}
