import $ from '../../jqlite.extends';
import {TweenMax, Power2, TimelineLite} from 'gsap';

import Overlay from '../Overlay';
import SideNavigationAnim from '../../animations/SideNavigation.anim';
// import Navigation from './Navigation';


class SideNavigation {
  constructor() {
    this.state = false;
    this.$sideNavigation = $('#sideNavigation');
    this.$sideNavigationMenu = $('#sideNavigationMenu');
    this.$sideNavBurgerButton = $('#sideNavBurgerButton');

    // this.$primaryNavAction = $('#primaryNavAction');
    // this.$primarySideNav = $('#primarySideNav');
    // this.primaryOverlay;
    // this.nav;
    // this.onClick;
  }

  init() {
    // this.primaryOverlay = new Overlay({
    //   onClick: function() {
    //     root.$primarySideNav.toggleClass("active");
    //   },
    //   isToggle: true,
    //   zIndex: 1000,
    // });
    // this.primaryOverlay.init();

    // this.onClick  = function() {
    //   root.$primarySideNav.toggleClass("active");
    //   root.primaryOverlay.toggle();
    // }

    // this.$primaryNavAction.on('click', this.onClick);

    // Nav
    // this.nav = new Navigation('#nav', this.onClick);
    // this.nav.init();

    this.$sideNavBurgerButton.on('click', () => {
      if (this.state) {
        // console.log('Close Navigation');
        TweenMax.to(this.$sideNavigation, 0.5, { width: 0, ease: Power2.easeOut });
        SideNavigationAnim.showActiveSideBar();
      }
      else {
        // console.log('Open Navigation');
        this.$sideNavigationMenu.show();
        TweenMax.to(this.$sideNavigation, 0.5, { width: '100%', ease: Power2.easeOut });
        SideNavigationAnim.hideActiveSideBar();
      }
      this.state = !this.state;
    });
  }
}

export default new SideNavigation();