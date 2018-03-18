import $ from 'jqlite';
import Portfolio from './Portfolio';

class PagePortfolioLanding {
  constructor() {
    this.$sideNavigation = $('#sideNavigation');
    this.$tree = $('#tree');
  }

  init() {
    // Make a few tweaks to the page and
    // intialise the Portfolio
    this.$sideNavigation
      .removeAttr('style')
      .addClass('bg-color-1');

    this.$tree.hide();

    Portfolio.init(false, parseInt(this.$sideNavigation.attr('data-portfolio-selected'), 10));
  }
}

export default new PagePortfolioLanding();
