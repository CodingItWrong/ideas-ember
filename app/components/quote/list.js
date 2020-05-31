import Component from '@glimmer/component';

export default class QuoteListComponent extends Component {
  get quotesToShow() {
    return this.args.quotes.filter(q => !q.isNew);
  }
}
