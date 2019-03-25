import DS from 'ember-data';

export default class ApplicationAdapter extends DS.JSONAPIAdapter {
  host = 'http://localhost:3000';
}
