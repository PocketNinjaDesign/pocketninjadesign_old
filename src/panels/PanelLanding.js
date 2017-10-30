import $ from 'jQuery';

import PanelNavigation from '../modules/PanelNavigation';

const $LandingPage = $('#panelLanding');


// Run the panel
class PanelLanding {
  constructor(options) {
    this.panelNav;
    this.options = $.extend({
      // Nav function to run for panels
      panelNavFunc: function() {}
    }, options);
  }

  init() {
    this.panelNav = new PanelNavigation('#landingNav', this.options.panelNavFunc);
  }
}

export default PanelLanding;