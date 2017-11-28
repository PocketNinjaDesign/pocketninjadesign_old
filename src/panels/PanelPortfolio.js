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
    let testFunction = (index) => {
      console.log(`You clicked on the ${index} shape.`);
    };

    let newCarousel = new Carousel({
      $carousel: $('#carouselHolder').find('.carousel'),
      // fullRender: true,
      // renderContainer: $('#carouselHolder'),
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

    this.boxEnlargerBatch = new boxEnlarger({
      base: this.$base,
      targetString: '.portfolio-swatch',
      cloneContent: undefined,
      callBack: testFunction,
    });
    this.boxEnlargerBatch.init();
  }
}

export default PanelPortfolio;