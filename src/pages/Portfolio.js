import $ from 'jqlite';
import { data as PortfolioData, galleryMap } from '../data/portfolio.data';

import GalleryInAnimation from '../animations/GalleryIn.anim';
import HistoryService from '../services/History.service';
import LoadDataService from '../services/LoadData.service';
import LoaderAnim from '../modules/loaderAnims/LoaderAnim';
import PortfolioList from '../modules/portfolio/PortfolioList';
import SideNavigation from '../modules/SideNavigation';

// For testing
window.$ = $;

// console.log(galleryMap);

export default new class PagePortfolio {
  constructor() {
    this.$contentArea = $('#contentArea');
    this.loader;
    this.loadOnInit;
    this.portfolioList;
    this.pushHistoryActive = true;
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
        this.setPortfolioList();
      });
    }
    else {
      // Gallery is a landing page and content
      // already exists so start animation
      GalleryInAnimation.start();
      this.setPortfolioList();
    }
    this.setBrowserHistory();

    window.onpopstate = function(e) {
      root.pushHistoryActive = false;
      root.setSelectedOption(e.state.menuState);
      SideNavigation.setSideLinkStyles(e.state.menuState);
    };
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
        this.pushHistoryActive = true;
        // Refresh the content
        GalleryInAnimation.start();
        this.setPortfolioList();
      });
    }
  }

  setBrowserHistory() {
    HistoryService.pushHistory({
      name: this.getPageUrl(),
      menuState: this.selectedOption,
    }, "Page", this.getPageUrl());
  }

  setPortfolioList() {
    // Create Portfolio List from Gallery Items
    this.portfolioList = new PortfolioList({
      category: this.getCategory(),
      galleryList: galleryMap.get(this.getCategory()),
    });
    this.portfolioList.init();
  }


  //
  // Getters
  //

  getPageData() {
    return new Promise((resolve, reject) => {
      LoadDataService.loadElement(this.getPageUrl(), '#contentArea').then(($element) => {
        this.loader
          .remove()
          .then(() => {
            this.$contentArea.html($element.html());
            if (this.pushHistoryActive) {
              this.setBrowserHistory();
            }
            resolve($element);
          });
      });
    });
  }

  getPageClassName() {
    return PortfolioData.navigation[this.selectedOption].className;
  }

  getPageUrl() {
    return PortfolioData.navigation[this.selectedOption].page;
  }

  getCategory() {
    return PortfolioData.navigation[this.selectedOption].title;
  }
}