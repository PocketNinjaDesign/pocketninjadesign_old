import $ from '../jqlite.extends';
import { debounce } from '../Methods';

import Overlay from './Overlay';
import SideNavigationAnim from '../animations/SideNavigation.anim';

class SideNavigation {
  constructor() {
    this.state = false;
    this.$sideNavigation = $('#sideNavigation');
    this.$sideNavigationMenu = $('#sideNavigationMenu');
    this.$sideNavBurgerButton = $('#sideNavBurgerButton');
  }

  init() {
    this.setBurgerMenu();
    // set active state check and page resize check
  }

  burgerMenuClick() {
    if (this.state) {
      $(window).off('resize');
      this.$sideNavBurgerButton.removeClass('active');

      SideNavigationAnim.hideActiveSideBar(() => {
        this.$sideNavigation.removeClass('active');
      });
    }
    else {
      this.$sideNavBurgerButton.addClass('active');
      this.$sideNavigation.addClass('active');
      SideNavigationAnim.showActiveSideBar();
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
    let root = this;

    $(window).on('resize', debounce(function() {
      if (window.innerWidth > 1024) {
        root.burgerMenuClick();
      }
    }, 10));
  }
}

export default new SideNavigation();