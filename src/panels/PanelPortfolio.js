import $ from 'jQuery';
import Panel from './Panel';
import boxEnlarger from '../modules/BoxEnlarger';
import Carousel from '../modules/Carousel';

import PortfolioData from '../data/portfolio.data.js';

class PanelPortfolio extends Panel {
  constructor() {
    super();
    this.boxEnlargerBatch;
    this.$base = $('#panelPortfolio');
  }

  init() {
    let boxEnlargeCallback = (index, clone) => {
      // Reset the clone content ready
      // for the carousel content
      clone.html('');

      let newCarousel = new Carousel({
        fullRender: true,
        renderContainer: clone,
      });
      newCarousel.init();
  
      let CarouselContentList = [];
      for(let i = 0; i < PortfolioData.website.length; i++) {
        CarouselContentList.push($('<img/>', {
          src: `${PortfolioData.website[i].srcLarge}`,
          alt: `${PortfolioData.website[i].alt}`,
        }));
      }
      newCarousel.AddCarouselItem(CarouselContentList);
    };

    this.boxEnlargerBatch = new boxEnlarger({
      base: this.$base,
      targetString: '.portfolio-swatch',
      cloneContent: undefined,
      callBack: boxEnlargeCallback,
    });
    this.boxEnlargerBatch.init();
  }
}

export default PanelPortfolio;