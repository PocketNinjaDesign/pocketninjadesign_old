import $ from 'jQuery';
import Overlay from './Overlay';
import PanelNavigation from './panel/PanelNavigation';

let $primaryNavAction = $('#primaryNavAction');
let $primarySideNav = $('#primarySideNav');

let primaryOverlay = new Overlay({});
primaryOverlay.init();

let onClick = function() {
  $primarySideNav.toggleClass("active");
  primaryOverlay.toggle();
}

$primaryNavAction.on('click', onClick);
primaryOverlay.setClick(function() {
  $primarySideNav.toggleClass("active");
  primaryOverlay.remove();
});

// Create the panel Navigation
let panelNav = new PanelNavigation('#nav', onClick);
panelNav.init();

class PrimaryNavigation {
  constructor() {
  }
}

export default PrimaryNavigation;