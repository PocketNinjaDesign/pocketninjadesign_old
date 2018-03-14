import $ from '../jqlite.extends';
import Methods from '../Methods';
import Overlay from './Overlay';
import SideNavigationAnim from '../animations/SideNavigation.anim';
import BreakPointService from '../services/BreakPoint.service';

class SideNavigation {
  constructor() {
    this.state = false;
    this.navOnClick = undefined;
    this.overlay = new Overlay({
      zIndex: 190,
    });
    this.$sideNavigation = $('#sideNavigation');
    this.$sideNavigationMenu = $('#sideNavigationMenu');
    this.$sideNavBurgerButton = $('#sideNavBurgerButton');
  }

  init(navOnClick = () => {}) {
    this.navOnClick = navOnClick;
    this.setSideLinks();
    this.setBurgerMenu();
    this.overlay.setClick(() => {
      this.burgerMenuClick();
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
    } else {
      // Activate burger menu and navigation
      SideNavigationAnim.showActiveSideBar(() => {
        this.$sideNavBurgerButton.addClass('active');
        this.$sideNavigation.addClass('active');
      });
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

    $(window).on('resize', Methods.debounce(() => {
      if (window.innerWidth > BreakPointService.bpMedium) {
        root.burgerMenuClick();
      }
    }, 10));
  }

  setSideLinks() {
    const $allLi = this.$sideNavigationMenu.find('li');

    this.$sideNavigationMenu.find('.side-link').on('click', (e) => {
      e.preventDefault();

      const $this = $(e.currentTarget);
      $allLi.removeClass('active');
      $this.parent().addClass('active');

      this.navOnClick(parseInt($this.data('index'), 10));
      if (this.state) {
        this.burgerMenuClick();
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
