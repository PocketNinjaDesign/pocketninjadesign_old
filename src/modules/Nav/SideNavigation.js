import $ from 'jQuery';
import Overlay from '../Overlay';
import Navigation from './Navigation';


class SideNavigation {
  constructor() {
    this.$primaryNavAction = $('#primaryNavAction');
    this.$primarySideNav = $('#primarySideNav');
    this.primaryOverlay;
    this.nav;
    this.onClick;
  }

  init() {
    let root = this;

    this.primaryOverlay = new Overlay({
      onClick: function() {
        root.$primarySideNav.toggleClass("active");
      },
      isToggle: true,
      zIndex: 1000,
    });
    this.primaryOverlay.init();

    this.onClick  = function() {
      root.$primarySideNav.toggleClass("active");
      root.primaryOverlay.toggle();
    }

    this.$primaryNavAction.on('click', this.onClick);

    // Nav
    this.nav = new Navigation('#nav', this.onClick);
    this.nav.init();
  }
}

export default new SideNavigation();