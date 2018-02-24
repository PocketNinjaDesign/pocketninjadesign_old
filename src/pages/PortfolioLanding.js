import $ from 'jqlite';
import Portfolio from './Portfolio';

export default new class PagePortfolioLanding {
  constructor() {
    this.$sideNavigation = $('#sideNavigation');
  }
  
  init() {
    // Make a few tweaks to the page and
    // intialise the Portfolio
    this.$sideNavigation
      .removeAttr('style')
      .addClass('bg-color-1');

    Portfolio.init(false, parseInt(this.$sideNavigation.attr('data-portfolio-selected')));
  }
}