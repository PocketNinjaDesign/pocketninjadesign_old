import $ from 'jqlite';
import PortfolioData from '../data/portfolio.data';

import LoadDataService from '../services/LoadData.service';
import LoaderAnim from '../modules/loaderAnims/LoaderAnim';
import SideNavigation from '../modules/SideNavigation';
import GalleryInAnimation from '../animations/GalleryIn.anim';

// For testing
window.$ = $;

export default new class PagePortfolio {
  constructor() {
    this.$contentArea = $('#contentArea');
    this.loader;
    this.loadOnInit;
    this.selectedOption;
  }

  init(loadOnInit = true, selectedOption = 0) {
    const root = this;

    this.loader = new LoaderAnim();
    this.loadOnInit = loadOnInit;
    this.selectedOption = selectedOption;

    SideNavigation.init(function(newSelected) {
      root.setSelectedOption(newSelected);
    });

    if (this.loadOnInit) {
      $('body').addClass(this.getPageClassName());
  
      this.loader.init();
  
      this.getPageData().then(() => {
        GalleryInAnimation.start();
      });
    }
    else {
      // Gallery is a landing page and content
      // already exists so start animation
      GalleryInAnimation.start();
    }
  }



  //
  // Setters
  //

  setSelectedOption(newSelected) {
    if (this.selectedOption !== newSelected) {
      this.selectedOption = newSelected;

      this.loader = new LoaderAnim();
      this.loader.init();

      this.getPageData().then(() => {
        // Refresh the content
        GalleryInAnimation.start();
      });
    }
  }



  //
  // Getters
  //

  getPageData() {
    return new Promise((resolve, reject) => {
      LoadDataService.loadElement(this.getPageUrl(), '#contentArea').then(($element) => {
        setTimeout(() => {
          this.loader
            .remove()
            .then(() => {
              this.$contentArea.html($element.html());
              resolve($element);
            });
        }, 2000);
      });
    });
  }

  getPageClassName() {
    return PortfolioData.navigation[this.selectedOption].className;
  }

  getPageUrl() {
    return PortfolioData.navigation[this.selectedOption].page;
  }
}