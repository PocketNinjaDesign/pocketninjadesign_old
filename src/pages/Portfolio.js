import $ from 'jqlite';

import LoadDataService from '../services/LoadData.service';
import LoaderAnim from '../modules/loaderAnims/LoaderAnim';
import SideNavigation from '../modules/SideNavigation';
import GalleryInAnimation from '../animations/GalleryIn.anim';

// For testing
window.$ = $;

export default new class PagePortfolio {
  constructor() {
    this.$contentArea = $('#contentArea');
    this.loader = new LoaderAnim();
  }

  init() {
    $('body').addClass('page-portfolio');

    this.loader.init();
    SideNavigation.init();

    LoadDataService.loadElement('/portfolio.html', '#pageContent').then(($element) => {
      this.loader
        .remove()
        .then(() => {
          this.$contentArea.html($element.html());
          GalleryInAnimation.start();
        });
    });
  }
}