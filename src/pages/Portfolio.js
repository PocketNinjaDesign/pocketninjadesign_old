import $ from 'jqlite';

import LoadDataService from '../services/LoadData.service';
import LoaderAnim from '../modules/loaderAnims/LoaderAnim';
import SideNavigation from '../modules/SideNavigation';
import GalleryInAnimation from '../animations/GalleryIn.anim';

// For testing
window.$ = $;

export default new class PagePortfolio {
  init() {
    $('body').addClass('page-portfolio');

    let loader = new LoaderAnim();
    loader.init();
    SideNavigation.init();

    LoadDataService.loadElement('/portfolio.html', '#pageContent').then(function($element) {
      loader
        .remove()
        .then(() => {
          $('#contentArea').html($element.html());
          GalleryInAnimation.start();
        });
    });
  }
}