import $ from 'jqlite';

import LoaderAnim from '../modules/loaderAnims/LoaderAnim';

export default new class PagePortfolio {
  constructor() {

  }

  init() {
    let loader = new LoaderAnim();
    loader.init();

    setTimeout(() => {
      loader
        .remove()
        .then(() => {
          console.log('Loading Animation is now GONE!');
        });
    }, 5000);
  }
}