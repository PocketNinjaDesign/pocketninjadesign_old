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

    // Load Page content
    // Remove loader
    LoadDataService.load('/portfolio.html').then((response) => {
      loader
        .remove()
        .then(() => {
          let $content = $.fn.findFromAjax(response.data, '#pageContent');
          $('#contentArea').html($content.html());
          GalleryInAnimation.start();
        });
    });
  }
}