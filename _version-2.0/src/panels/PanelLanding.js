import $ from 'jQuery';
import Panel from './Panel';
import PanelNavigation from '../modules/panel/PanelNavigation';

class PanelLanding extends Panel {
  constructor() {
    super();
    this.panelNav;
    this.$base = $('#panelLanding');
  }

  init() {
    // Duplicate navigation directly in the page
    this.panelNav = new PanelNavigation('#landingNav');
    this.panelNav.init();
  }
}

export default PanelLanding;