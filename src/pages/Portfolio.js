import $ from 'jqlite';
import LoadDataService from '../services/LoadData.service';

import LoaderAnim from '../modules/loaderAnims/LoaderAnim';

window.$ = $;

export default new class PagePortfolio {
  init() {
    let loader = new LoaderAnim();
    loader.init();

    // Load Page content
    // Remove loader
    LoadDataService.load('/portfolio.html').then((response) => {
      loader
        .remove()
        .then(() => {
          // Display the Portfolio data now
          let $content = $.fn.findFromAjax(response.data, '#pageContent');
          $('.under-contruction').append($content);
        });
    });
  }
}