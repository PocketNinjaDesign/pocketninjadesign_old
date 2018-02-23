import $ from '../jqlite.extends';
import { debounce } from '../Methods';

import Overlay from './Overlay';
import SideNavigationAnim from '../animations/SideNavigation.anim';
import BreakPointService from '../services/BreakPoint.service';

class SideNavigation {
  constructor() {
    this.state = false;
    this.overlay = new Overlay({
      zIndex: 190,
    });
    this.$sideNavigation = $('#sideNavigation');
    this.$sideNavigationMenu = $('#sideNavigationMenu');
    this.$sideNavBurgerButton = $('#sideNavBurgerButton');
  }

  init() {
    const root = this;

    this.setBurgerMenu();
    this.overlay.setClick(function() {
      root.burgerMenuClick();
    });
  }

  burgerMenuClick() {
    if (this.state) {
      $(window).off('resize');
      this.$sideNavBurgerButton.removeClass('active');
      this.overlay.hide();

      SideNavigationAnim.hideActiveSideBar(() => {
        this.$sideNavigation.removeClass('active');
      });
    }
    else {
      // Activate burger menu and navigation
      this.$sideNavBurgerButton.addClass('active');
      this.$sideNavigation.addClass('active');
      SideNavigationAnim.showActiveSideBar();
      this.overlay.show();

      // Start page resize checking
      this.setResizeCheck();
    }

    this.state = !this.state;
  }

  setBurgerMenu() {
    this.$sideNavBurgerButton.on('click', () => {
      this.burgerMenuClick();
    });
  }

  setResizeCheck() {
    const root = this;

    $(window).on('resize', debounce(function() {
      if (window.innerWidth > BreakPointService.bpMedium) {
        root.burgerMenuClick();
      }
    }, 10));
  }
}

export default new SideNavigation();