import $ from '../jqlite.extends';
import { debounce } from '../Methods';

import Overlay from './Overlay';
import SideNavigationAnim from '../animations/SideNavigation.anim';
import BreakPointService from '../services/BreakPoint.service';

class SideNavigation {
  constructor() {
    this.state = false;
    this.navOnClick;
    this.overlay = new Overlay({
      zIndex: 190,
    });
    this.$sideNavigation = $('#sideNavigation');
    this.$sideNavigationMenu = $('#sideNavigationMenu');
    this.$sideNavBurgerButton = $('#sideNavBurgerButton');
  }

  init(navOnClick = () => {}) {
    const root = this;

    this.navOnClick = navOnClick;
    this.setSideLinks();
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

  setSideLinks() {
    const root = this;
    let $allLi = this.$sideNavigationMenu.find('li');

    this.$sideNavigationMenu.find('.side-link').on('click', function(e) {
      e.preventDefault();

      const $this = $(this);
      $allLi.removeClass('active');
      $this.parent().addClass('active');

      root.navOnClick(parseInt($this.data('index')));
      if (root.state) {
        root.burgerMenuClick();
      }
    });
  }

  setSideLinkStyles(index) {
    this.$sideNavigationMenu.find('li')
      .removeClass('active')
      .eq(index)
      .addClass('active');
  }
}

export default new SideNavigation();