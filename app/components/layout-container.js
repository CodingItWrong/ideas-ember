import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LayoutContainerComponent extends Component {
  @tracked sideNavOpen = false;
}
